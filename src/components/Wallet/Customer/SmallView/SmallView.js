import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
    let customer = null;
    if(state.model.items['wallet'] && state.model.items['wallet']['customer']) {
        customer = state.model.items['wallet']['customer'][ownProps.id];    
    }
    return { customer: customer };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    return {
        start: () => dispatch(executeQuery(ownProps.filter)),
    };
};

class SmallView extends React.Component {

    static propTypes = {
        customer: PropTypes.object,
        id: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {customer: props.customer};
    }
    
    render() {
        return <span><strong>#{this.state.customer.id}</strong> - {this.state.customer.firstname}</span>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmallView);