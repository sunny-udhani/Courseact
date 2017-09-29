import React, {Component} from 'react';
import RaisedButton from 'material-ui/Button';

class courseItem extends Component {

    onAddClick = (menuItem) => {
        this.props.onAddClick(menuItem)
    };

    onRemoveClick = (cartItem) => {
        this.props.onRemoveClick(cartItem)
    };

    render() {

        const {item} = this.props;

        if (this.props.add) {
            return (
                <div className="row justify-content-md-center">
                    <div className="col-md-12">
                        <div className="alert alert-info" role="alert">
                            <p>
                                {item.name}
                                <div className="row-fluid">
                                    <span className="text text-default">Price:  ${item.price} &nbsp;&nbsp;</span>
                                    <span className="text text-default"> Available seats: {item.qty}  </span><br/>
                                    <RaisedButton className={item.qty > 0 ? 'active' : ''}
                                                  onClick={() => this.onAddClick(item)}>Add</RaisedButton>
                                </div>

                            </p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row justify-content-md-center">
                    <div className="col-md-12">
                        <div className="alert alert-info" role="alert">
                            <p>
                                {item.name}
                                <div className="row-fluid">
                                    <span className="text text-default"> No of seats : {item.qty} </span><br/>
                                    <RaisedButton label="Remove" className={item.qty > 0 ? 'active' : ''}
                                                  onClick={() => this.onRemoveClick(item)}>Remove</RaisedButton>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            )
        }

        /*return (
            <div className="row justify-content-md-center">
                <div className="col-md-12">
                    <div className="alert alert-info" role="alert">
                        <p>
                            {  (this.props.add > 0 ) ?
                                <div className="row-fluid">
                                    { item.name }<br/>
                                    <span className="text text-default">Price:  ${item.price} &nbsp;&nbsp;</span>
                                    <span className="text text-default"> Available seats:  {item.qty}  </span><br/>
                                    <RaisedButton className={item.qty>0 ? 'active' : ''} onClick = {() => this.props.onAddClick(item)}>Add</RaisedButton>
                                </div>
                                : <div className="row-fluid">
                                    { item.name }<br/>
                                    <span className="text text-default"> No of seats : {item.qty} </span><br/>
                                    <RaisedButton label = "Remove" className={item.qty>0 ? 'active' : ''} onClick = { () => this.props.onRemoveClick(item)}>Remove</RaisedButton>
                                </div>}
                        </p>
                    </div>
                </div>
            </div>
        );*/
    }
}

export default courseItem;