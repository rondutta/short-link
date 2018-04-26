import React from 'react';
import PropTypes from 'prop-types';
import { Tracker } from 'meteor/tracker';
import { Links } from '../api/links';
import { Meteor } from 'meteor/meteor'; 

export default class LinksList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            links : []
        };
    }
    componentDidMount(){
       this.linkTracker = Tracker.autorun(()=>{
            Meteor.subscribe('links');
            const links = Links.find().fetch();
            this.setState({links})
        });
    }
    componentWillUnmount(){
        console.log('ComponentWillUnmount LinksList');
        this.linkTracker.stop();
    }
    renderItems(){
        return this.state.links.map((link)=>{
            return <p key={link._id}>{link.url}</p>
        });
    }
    render(){
        return (
            <div>
            {this.renderItems()}
            </div>);
    }
};