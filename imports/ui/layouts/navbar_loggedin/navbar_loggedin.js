import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Meteor} from 'meteor/meteor';


import './navbar_loggedin.html';


Template.navbar_loggedin.events({

	'click .logout': function(event){
		event.preventDefault();
		Meteor.logout();

		FlowRouter.go('/');
	},

});