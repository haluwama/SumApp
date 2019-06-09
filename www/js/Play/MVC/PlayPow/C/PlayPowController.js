var GamePowController = function (zmienna) {
	this.name = "GamePowController";
	this.game = zmienna;
	this.storage = new MyStorage();
};

GamePowController.prototype = {
	resetView: function () {
		for (var i = 0; i < $(".przyciski").length; i++) {
			$("button.przyciski").eq(i).text(this.game.numbers[i]);

			if ($("button.przyciski").eq(i).hasClass("btn-warning"))
				$("button.przyciski").eq(i).removeClass("btn-warning");
		}

		$("#base").text(this.game.base);

		$("#exponent").text(this.game.exponent);
	}
};