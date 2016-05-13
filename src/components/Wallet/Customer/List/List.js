import React, {PropTypes} from 'react';
import SmallView from '../SmallView';
import { executeQuery } from '../../../../actions';
import { connect } from 'react-redux';


function mapStateToProps(state, ownProps) {
    let ids = [];
    if(state.model.search[ownProps.filter.hashCode()]) {
        state.model.search[ownProps.filter.hashCode()].forEach((search) => {
            if(search.filter.equals(ownProps.filter)) {
                ids = search.ids;
            }
        });
    }
    return { ids: ids };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    return {
        start: () => dispatch(executeQuery(ownProps.filter)),
    };
};

class List extends React.Component {

    static propTypes = {
        ids: PropTypes.array.isRequired,
        filter: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.start();
    }
    
    render() {
        const customersRepresentation = this.props.ids.map((id) => {
            return <li key={id}><SmallView id={id.toString()}/></li>
        });
        return <ul>{customersRepresentation}</ul>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
;