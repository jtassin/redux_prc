export class Filter {
    constructor(module, entity, query, pagination, sort) {
        this.module = module;
        this.entity = entity;
        this.query = query;
        this.pagination = pagination;
        this.sort = sort;
    }
    
    hashCode() {
        return `${this.module}-${this.entity}`;
    }
    
    equals(filter) {
        return true;
    }
}

class Model {
    constructor() {
        
    }
    
    query(filter) {
        const result = new Promise((resolve, reject) => {
            setTimeout(() => {
                const customers = [{firstname: 'customer1', id: 1}, {firstname: 'customer2', id: 2}, {firstname: 'customer3', id: 3}];
                resolve(customers);
            }, 500);
        });
        return result;
    }
    
    find(id) {
        
    }
    
}

export default new Model();