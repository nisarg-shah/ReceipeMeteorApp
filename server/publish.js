Meteor.publish('receipes', function(){
	return Receipes.find({author:this.userId});
})