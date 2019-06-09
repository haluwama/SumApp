function MySkin() {
	var storage = new MyStorage();

	if (storage.getSkin()) {
		$("#styleHref").attr("href", "lib/css/darkTheme.css");

		if ($("#imageid").attr('src') === "css/logo.png")
			$("#imageid").attr('src', 'css/logo2.png');
	} else {
		$("#styleHref").attr("href", "lib/css/bootstrap.min.css");

		if ($("#imageid").attr('src') === "css/logo2.png")
			$("#imageid").attr('src', 'css/logo.png');
	}
}