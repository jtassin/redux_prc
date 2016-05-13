import React, {PropTypes} from 'react';
import SmallView from '../SmallView';
import { executeQuery } from '../../../../actions';
import { connect } from 'react-redux';


function mapStateToProps(state, ownProps) {
    let customers = [];
    if(state.model.search[ownProps.filter.hashCode()]) {
        state.model.search[ownProps.filter.hashCode()].forEach((search) => {
            if(search.filter.equals(ownProps.filter)) {
                search.ids.forEach((id) => {
                    customers.push(state.model.items[ownProps.filter.module][ownProps.filter.entity][id]);
                });
            }
        });
    }
    console.log(customers);
    return { customers: customers };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    return {
        start: () => dispatch(executeQuery(ownProps.filter)),
    };
};

class List extends React.Component {

    static propTypes = {
        customers: PropTypes.array.isRequired,
        filter: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.start();
    }
    
    render() {
        const customersRepresentation = this.props.customers.map((customer) => {
            return <li key={customer.id}><SmallView customer={customer}/></li>
        });
        return <ul>{customersRepresentation}</ul>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
;