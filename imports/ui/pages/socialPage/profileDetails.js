import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import './profileDetails.html';


Template.profileDetails.helpers({
    
    fullName: function(){
      var currentId = FlowRouter.getParam('_id');
      var username = Meteor.users.findOne({ _id: currentId}).username;
       
        var user = Meteor.users.findOne({username:username});
        return user ? user.profile.name.first + " " + user.profile.name.last : null;
    },

    email: function(){
      var currentId = FlowRouter.getParam('_id');
      var username = Meteor.users.findOne({ _id: currentId}).username;
       
      var user = Meteor.users.findOne({username:username});
        return user ? "Email : " + user.emails[0].address : null;
    },

    /* country: function(){
      var currentId = FlowRouter.getParam('_id');
      var username = Meteor.users.findOne({ _id: currentId}).country;
       
      var user = Meteor.users.findOne({country:country});
        return user ? user.country : "Anonymous";

    },




/*
    profilePicture:function() {
        var username = Router.current().params.username;
        var user = Meteor.users.findOne({username:username});
        return user ? user.profile.picture.large : null;
    },
    friendCount:function(){
        return 0;
    },
    newFriends:function(){
        return [];
    },
    about:function(){
        var username = Router.current().params.username;
        var user = Meteor.users.findOne({username:username});
                return user ? user.profile.location.street + " " +
                              user.profile.location.city + ", " + user.profile.location.state + " " +   
                              user.profile.location.zip : "";
    },
    storyCount:function(){
        return 0;
    }*/
});

