 Meteor.startup(function() {
  Channels.remove({})

  Channels.insert({
    name: "general"
  })

  Channels.insert({
    name: "random"
  })
  
})