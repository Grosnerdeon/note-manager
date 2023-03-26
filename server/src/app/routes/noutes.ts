import express, { request } from 'express';
import { INoute } from 'src/interface/noute';
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

    getNote () {
        this.router.get('/:id', async (request, response) => {
            const { id } = request.params;

            const noutes: INoute[] = await databaseNoutes.getAll();
            const noute = noutes.find((noute: INoute ) => noute._id === id);
        
            response.statusCode = 200; 
            response.send(circularJSON.stringify(noute));
        });  
    }

    createNoute () {
        this.router.post('', (request, response) => {
            try {
                const { title, description } = request.body;

                const date = new Date();
        
                databaseNoutes.insert({ title, description, date });
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

                const date = new Date();
        
                databaseNoutes.updateById(id, { title, description, date });
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