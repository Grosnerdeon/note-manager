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

    getAll (): Promise<INoute[]> {
        return new Promise(resolve => {
            this.db.find({}, (_, noutes) => {
                resolve(noutes);
            });
        });
    }
    
    updateById (id: string, { title, description, date }) {
        this.db.update({ _id: id }, { $set: { title, description, date } });
    }

    removeById (id: string) {
        this.db.remove({ _id: id });
    }
}

export default new DatabaseNoutes();