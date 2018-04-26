import React from 'react';
import {Link} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component {
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
        if(password.length < 4){
            return this.setState({error: 'Password must be at least 4 characters'});
        }        
        Accounts.createUser({email,password},(err)=>{
            if(err){
                this.setState({ error : err.reason });
            }
            else{
                this.setState({ error : '' });
            }
         });

        
    }

    render() {
        return (
            <div>
                <h1>Sign Up!</h1>
                {this.state.error ? alert(this.state.error):undefined}
                <form onSubmit={this.onSubmit.bind(this)} noValidate>
                <input type="text" ref="email" name="email" placeholder="E-Mail"/><br/>
                <input type="password" ref="password" name="password" placeholder="Password"/><br/>
                <button>Create Account</button>
                </form>
                <Link to="/">Already Have An Account?</Link>
            </div>
        );
    }
};