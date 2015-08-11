Template.footer.events({
  'keypress input': function(event) {
        if (event.charCode == 13) {
            event.stopPropagation()
            Meteor.call('newMessage', {
            	text: $('.input-box_text').val(),
            	channel: Session.get('channel')
            })
            $('.input-box_text').val("");
            return false;
        }
    }
});