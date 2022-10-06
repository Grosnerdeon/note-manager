import express, { request } from 'express'

const noutesRouter= express.Router();

noutesRouter.get('/all', (_, response) => {
    response.statusCode = 200;
    response.send('Hello')    
});

export default noutesRouter;