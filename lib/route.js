FlowRouter.route('/',{
	name: 'home',
	action(){
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/receipe-book',{
	name: 'receipe-book',
	action(){
		BlazeLayout.render('MainLayout',{main : 'Receipes'});
	}
});