import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Links} from '../api/links';
import LinksList from './LinksList';
import {Meteor} from 'meteor/meteor';

export default class LinkComponent extends React.Component {
    onLogout(){
        Accounts.logout();
    }
    onSubmit(event){
        const url = this.refs.url.value.trim();
        event.preventDefault();
        if(url){
            Meteor.call('links.insert',url);
            this.refs.url.value = '';
        }
    }
    render() {
        return (
          <div>
          <h1>Links</h1>
          <button onClick={this.onLogout.bind(this)}>Log Out</button>
          <p>Add Link</p>
          <LinksList/>
          <form onSubmit={this.onSubmit.bind(this)}>
           <input type="text" ref="url" placeholder="URL"/>
           <button>Add Link</button>
          </form>
          </div>   
        );
    }
};

