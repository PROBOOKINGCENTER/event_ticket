import React, { Component } from 'react'
//import '../dist/404.css'
export default class Error404 extends Component {
    render() {
        require('../dist/404.css');
        return (
            <div className="conatiner"><span className="numer">4</span>
                <div className="circle">
                    <div className="drops"></div>
                    <div className="drops"></div>
                    <div className="hand"></div>
                    <div className="hand rgt"></div>
                    <div className="holder">
                        <div className="bob">
                            <div className="nose"></div>
                            <div className="face">
                                <div className="mouth">
                                    <div className="tongue"></div>
                                </div>
                            </div>
                            <div className="ear"></div>
                            <div className="ear rgt"></div>
                            <div className="neck"></div>
                        </div>
                    </div>
                </div><span className="numer">4</span>
            </div>
        )
    }
}
