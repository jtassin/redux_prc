import deepEqual  from 'deep-equal';

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
        return deepEqual(this, filter);
    }
}

class Model {
    constructor() {
        
    }
    
    query(filter) {
        const result = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(filter.query.id === '>1') {
                    const customers = [{firstname: 'customer2', id: 2}, {firstname: 'customer3', id: 3}];
                    resolve(customers);    
                } else {
                    const customers = [{firstname: 'customer1', id: 1}, {firstname: 'customer2', id: 2}, {firstname: 'customer3', id: 3}];
                    resolve(customers);
                }
                
            }, 500);
        });
        return result;
    }
    
    find(id) {
        
    }
    
}

export default new Model();