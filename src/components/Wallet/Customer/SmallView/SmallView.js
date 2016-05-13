import React, {PropTypes} from 'react';

class SmallView extends React.Component {

    static propTypes = {
        customer: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {customer: props.customer};
    }
    
    render() {
        return <span><strong>#{this.state.customer.id}</strong> - {this.state.customer.firstname}</span>;
    }
}

export default SmallView;