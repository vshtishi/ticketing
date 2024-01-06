import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';


it('returns a 404 if the provided id does not exist', async () => {
    const id = new mongoose.Types.ObjectId().toHexString();

    await request(app)
        .put(`/api/tickets/${id}`)
        .set('Cookie', global.signin())
        .send({
            title: 'sdds',
            price: 20
        })
        .expect(404);
});

it('returns a 401 if the user is not authenticated', async () => {

});

it('returns a 401 if the user does not own the ticket', async () => {

});

it('returns a 400 if the user provides an invalid title or price', async () => {

});

it('returns a 200 if the user provides valid data', async () => {

});