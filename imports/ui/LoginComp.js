import React from 'react';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

export default class LoginComp extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            error : ''
        };
    }
    
    onSubmit(event){
        event.preventDefault();
        let email= this.refs.email.value.trim();
        let password= this.refs.password.value.trim();
        Meteor.loginWithPassword({email},password,(error)=>{
            if(error){
                this.setState({error: 'Unable to login. Please Check Credentials.'});
            }
            else{
                this.setState({error: ''});
            }
        });

    }
    
    render() {
        return (
        <div>
           <h1>Sign In</h1>
           {this.state.error ? alert(this.state.error):undefined}
           <form onSubmit={this.onSubmit.bind(this)} noValidate>
                <input type="text" ref="email" name="email" placeholder="E-Mail"/><br/>
                <input type="password" ref="password" name="password" placeholder="Password"/><br/>
                <button>Log In</button>
            </form>    
            <Link to="/signup">Don't have an account?</Link>    
        </div>   
        );
    }
};