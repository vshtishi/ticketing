import {Request, Response, NextFunction} from 'express';

const express = require('express');
import {requireAuth, validateRequest} from '@vshtickets/common';
import {body} from "express-validator";

const router = express.Router();

router.post(
    '/api/tickets',
    requireAuth,
    [body('title').not().isEmpty().withMessage('Title is required'),
        body('price').isFloat({gt: 0}).withMessage('Price must be provided and must be greater than 0')],
    validateRequest,
    (req: Request, res: Response, next: NextFunction) => {
       const { title, price } = Ticket.build({
           title,
           price,
           id: req.currentUser!.id
       });

       await ticket.save();
       res.status(201).send(ticket);
    }
);

export {router as createTicketRouter};