import React, {PropTypes} from 'react';
import SmallView from '../SmallView';

class List extends React.Component {

    static propTypes = {
        customers: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);
    }
    
    render() {
        const customersRepresentation = this.props.customers.map((customer) => {
            return <li key={customer.id}><SmallView customer={customer}/></li>
        });
        return <ul>{customersRepresentation}</ul>;
    }
}

export default List;