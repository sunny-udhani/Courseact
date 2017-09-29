import React, {Component} from 'react';
import CourseItem from './courseItem';
import {connect} from "react-redux"
import Typography from 'material-ui/Typography';

import {addToCart} from "../actions"

class courseOrder extends Component {


    render() {

        const {menu} = this.props;
        return (

            <div className="card-body ">
                <Typography align={'center'}
                            type="display1">Course Catalog</Typography>
                {
                    menu.map((item1, index) => {
                        return (
                            <CourseItem
                                add={index + 1}
                                item={item1}
                                onAddClick={this.props.onAddClick}
                            />
                        );
                    })
                }
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        menu: state.menu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAddClick: (data) => {
            dispatch(addToCart(data))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(courseOrder);
