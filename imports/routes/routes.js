import {Meteor} from 'meteor/meteor';
import React from 'react';
import Signup from './../ui/Signup';
import LoginComp from './../ui/LoginComp';
import NotFound from './../ui/NotFound';
import LinkComponent from './../ui/LinkComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({
    forceRefresh: true
});

const location = history.location;

const unAuthenticatedPages = ['/','/signup'];
const authenticatedPages = ['/links'];

const onEnterPublicPage = () => {
    if(Meteor.userId()){
        history.replace('/links');
    }
};
const onEnterPrivatePage = () => {
    if(!Meteor.userId()){
        history.replace('/');
    }
};

export const routes = (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={LoginComp} onEnter={onEnterPublicPage}/>
                <Route path="/signup" exact component={Signup} onEnter={onEnterPublicPage}/>
                <Route path="/links" exact component={LinkComponent} onEnter={onEnterPrivatePage}/>
                <Route component={NotFound}/>
            </Switch>  
        </div>
    </Router>
);

export const onAuthChange = (isAuthenticated) => {
    const pathname = history.location.pathname;
    const isUnauthenticatedPage = unAuthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    if(isUnauthenticatedPage && isAuthenticated)
    history.replace('/links');
    if(isAuthenticatedPage && !isAuthenticated)
    history.replace('/');
}