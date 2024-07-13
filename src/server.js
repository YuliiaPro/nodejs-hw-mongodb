import 'dotenv/config';
import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { getAllContacts, getContactById } from './services/contacts.js';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/contacts', async (req, res) => {
    try {
      const contacts = await getAllContacts();
      res.status(200).json({
        status: '200',
        message: 'Successfully found contacts!',
        data: contacts,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: '500',
        message: 'Internal Server Error!',
      });
    }
  });

  app.get('/contacts/:contactId', async (req, res) => {
    try {
      const { contactId } = req.params;
      const contact = await getContactById(contactId);
      if (!contact) {
        res.status(404).json({
          status: '404',
          message: 'Contact not found',
        });
        return;
      }
      res.status(200).json({
        status: '200',
        message: `Successfully found contact with id ${contactId}!`,
        data: contact,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: '500',
        message: 'Internal Server Error!',
      });
    }
  });

  app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
  });

  app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error!',
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
