import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux"
import CourseList from './components/courseOrder'
import CourseCart from './components/courseCart'
import Typography from 'material-ui/Typography';

class App extends Component {


    render() {

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>.
                    <h2>Welcome to Courseact</h2><br/>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="card col-md-6">

                            <CourseList/>
                        </div>
                        <div className="card col-md-6">
                            <CourseCart/>
                        </div>
                    </div>
                    <div className="row row-fluid col-sm-offset-4 col-md-offset-4 col-lg-offset-4">
                        <Typography type="display3">Cart total amount: $ {this.props.state.total}</Typography>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {state};
}

export default connect(mapStateToProps, null)(App);
