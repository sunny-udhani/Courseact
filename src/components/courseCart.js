import React, {Component} from 'react';
import CourseItem from './courseItem';
import {connect} from "react-redux"
import Typography from 'material-ui/Typography';
import {removeFromCart} from "../actions/index";


class courseCart extends Component {


    render() {

        const {cart} = this.props;
        console.log(cart);
        return (
            <div className="card-body border-info">
                <Typography align={'center'}
                            type="display1">Cart</Typography>
                {
                    cart.map((item1, index) => {
                        return (
                            <CourseItem
                                remove={index + 1}
                                item={item1}
                                onRemoveClick={this.props.onRemoveClick}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    console.log(state.cart);

    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onRemoveClick: (data) => {
            dispatch(removeFromCart(data))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(courseCart);
