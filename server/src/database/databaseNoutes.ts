import { INoute, INouteTemplate } from "src/interface/noute";

class DatabaseNoutes {
    datastore;
    db;

    constructor () {
        this.datastore = require('nedb');
        this.db = new this.datastore({ filename: '../noutes' });
        this.load();
    }

    load () {
        this.db.loadDatabase();
    }

    insert (nouteTemplte: INouteTemplate) {
        this.db.insert(nouteTemplte);
    }

    getAll () {
        return new Promise(resolve => {
            this.db.find({}, (_, noutes) => {
                resolve(noutes);
            });
        });
    }
    
    updateById (id: string, { title, description }) {
        this.db.update({ _id: id }, { $set: { title, description } });
    }

    removeById (id: string) {
        this.db.remove({ _id: id });
    }
}

export default new DatabaseNoutes();