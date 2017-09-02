import { Template } from 'meteor/templating';
import { Meteor} from 'meteor/meteor';

import './contactUs.html';

Template.contactUs.events({

	'submit form': function(event){

 		 event.preventDefault();
        var name = $('[name=contactName]').val();
        var email = $('[name=contactEmail]').val();
        var message = $('[name=contactMessage').val();

      Meteor.contactvalidation(name, email, message, function(error){
  	  if(error){
        console.log(error.reason);
   	 } else {
       FlowRouter.go('/contactUs');
   	 }
});
	}


});

Template.contactUs.onRendered(function(){
    $('.contactUs').validate();
});