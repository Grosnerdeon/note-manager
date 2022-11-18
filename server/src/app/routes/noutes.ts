import express, { request } from 'express';
import databaseNoutes from '../../database/databaseNoutes';
export const circularJSON = require('circular-json');

class NoutesRouter {
    router;

    constructor () {
        this.router = express.Router();
        this.init();
    }

    init () {
        this.getAll();
        this.createNoute();
        this.removeNoute();
        this.updateNoute();
    }

    getAll () {
        this.router.get('/all', async (_, response) => {
            const noutes = await databaseNoutes.getAll();

            response.statusCode = 200;
            response.send(circularJSON.stringify(noutes));    
        })
    }

    createNoute () {
        this.router.post('', (request, response) => {
            try {
                const { title, description } = request.body;
        
                databaseNoutes.insert({ title, description });
                response.statusCode = 200;
                response.send();  
            } catch (error) {
                response.statusCode = 422;
                response.send({ message: error });
            }
        });
    }

    updateNoute () {
        this.router.put('/:id', (request, response) => {
            try {
                const { id } = request.params;
                const { title, description } = request.body;
        
                databaseNoutes.updateById(id, { title, description });
                response.statusCode = 200;
                response.send();  
            } catch (error) {
                response.statusCode = 422;
                response.send({ message: error });
            }
        });
    }

    removeNoute () {
        this.router.delete('/:id', (request, response) => {
            try {
                const { id } = request.params;
        
                databaseNoutes.removeById(id);
                response.statusCode = 200;
                response.send();  
            } catch (error) {
                response.statusCode = 422;
                response.send({ message: error });
            }
        })
    }
}

const noutesRouter = new NoutesRouter();

export default noutesRouter;