var GameClassicController = function (zmienna) {
	this.name = "GameClassicController";
	this.game = zmienna;
	this.storage = new MyStorage();
};

GameClassicController.prototype = {
	resetView: function () {
		for (var i = 0; i < $(".przyciski").length; i++) {
			$("button.przyciski").eq(i).text(this.game.numbers[i]);

			if ($("button.przyciski").eq(i).hasClass("btn-warning"))
				$("button.przyciski").eq(i).removeClass("btn-warning");
		}

		$("#try").text(this.game.profile.try);

		$("#mainNumber").text(this.game.number);

		var a_link = document.createElement("a");

		var att_class = document.createAttribute("class");
		att_class.value = "btn btn-primary active";
		a_link.setAttributeNode(att_class);

		var att_id = document.createAttribute("id");
		att_id.value = "tmpResult";
		a_link.setAttributeNode(att_id);

		var att_role = document.createAttribute("role");
		att_role.value = "button";
		a_link.setAttributeNode(att_role);

		if ($("#tmpResult").length !== 1) {
			if (this.storage.getDifficulty() === 0) {
				var att_style = document.createAttribute("style");
				att_style.value = "margin-left: 8px";
				a_link.setAttributeNode(att_style);
			} else if (this.storage.getDifficulty() === 1) {
				var att_style = document.createAttribute("style");
				att_style.value = "opacity: 0; margin-left: 8px";
				a_link.setAttributeNode(att_style);
			}

			if (this.storage.getDifficulty() !== 2)
				$("#choiceView").after(a_link);
		}

		this.choiceView();

	},

	choiceView: function () {
		var result = function (arr) {
			if (arr.length === 0)
				return '<i class="fa fa-ban"></i>';
			else {
				var string = "";

				for (var index = 0; index < arr.length; index++) {
					string += "" + arr[index].number + "+";
				}

				string = string.substr(0, string.length - 1);

				if (string.length > 2)
					string += "=";

				return string;
			}
		};

		$("#choiceView").html(result(this.game.choice));

		$("#tmpResult").text(this.game.tmpResult);
	},

	resetGame: function () {
		this.game.resetGame();
		this.resetView();
	}
};