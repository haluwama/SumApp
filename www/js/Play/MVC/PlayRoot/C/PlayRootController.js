var GameRootController = function (zmienna) {
	this.name = "GameRootController";
	this.game = zmienna;
	this.storage = new MyStorage();
};

GameRootController.prototype = {
	resetView: function () {
		for (var i = 0; i < $(".przyciski").length; i++) {
			$(".przyciski").eq(i).text(this.game.numbers[i]);

			if ($(".przyciski").eq(i).hasClass("btn-warning"))
				$(".przyciski").eq(i).removeClass("btn-warning");
		}

		$("#score").text(this.game.score);

		katex.render("\\sqrt{" + Math.pow(this.game.number, 2) + "}", document.getElementById("question"));
	}
};