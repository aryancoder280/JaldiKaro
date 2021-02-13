import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import "../Styling/FirstPage.css";
export class FirstPage extends Component {
    
    render() {
        return (
        <div className="FirstPage">          
            <p>By signin you agree with our terms and conditions</p>
            <Link className="FirstPageLink" to="/PhoneSigin">
            <p className="button1">Signin with your number</p>
            </Link>
            <Link className="FirstPageLink" to="/EmailSignin">
            <p className="button2">Signin with Google</p>
            </Link>
        </div>
        )
    }
}

export default FirstPage
