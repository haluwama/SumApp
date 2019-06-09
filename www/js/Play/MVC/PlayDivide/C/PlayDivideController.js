var GameDivideController = function (zmienna) {
	this.name = "GameDivideController";
	this.game = zmienna;
	this.storage = new MyStorage();
	this.language = new MyLocalization();
};

GameDivideController.prototype = {
	resetView: function () {
		for (var i = 0; i < $(".przyciski").length; i++) {
			$(".przyciski").eq(i).text(this.game.numbers[i]);

			if ($(".przyciski").eq(i).hasClass("btn-warning"))
				$(".przyciski").eq(i).removeClass("btn-warning");
		}

		$("#score").text(this.game.score);

		$("#divider").text(this.game.divider);

		$("#dividerText").text(this.language.divide() + " ");
	}

};