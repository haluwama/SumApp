function MyNotify() {
	var myLocal = new MyLocalization();

	$.notify({
		// options
		title: myLocal.titleAchievements(),
		text: ""
	}, {
		// settings
		element: 'body',
		position: null,
		type: "success",
		allow_dismiss: false,
		newest_on_top: true,
		showProgressbar: false,
		placement: {
			from: "top",
			align: "center"
		},
		offset: 20,
		spacing: 10,
		z_index: 1031,
		delay: 2000,
		timer: 1000,
		url_target: '_blank',
		mouse_over: null,
		animate: {
			enter: 'animated fadeInDown',
			exit: 'animated fadeOutUp'
		},
		onShow: null,
		onShown: null,
		onClose: null,
		onClosed: null,
		icon_type: 'class',
		template: '<div data-notify="container" class="col-xs-11 col-sm-3 text-center alert alert-{0}" role="alert">' +
			'<span data-notify="title">{1}</span> ' +
			'</div>'
	});
}
