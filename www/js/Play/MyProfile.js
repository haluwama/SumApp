var MyProfile = function (best) {
	this.score = 0;
	this.bestScore = best;
	this.counter = 60;
	this.round = 1;
	this.try = 3;
	this.maxNumber = 50;
};

MyProfile.prototype = {

	winGame: function () {
		this.score += 10;
		this.round += 1;
		this.counter = 60;

		if (this.round % 4 === 0)
			this.maxNumber += 10;

		if (this.round % 10 === 0)
			this.try += 1;
	},

	resetGame: function () {
		this.score = 0;
		this.counter = 60;
		this.round = 1;
		this.try = 3;
		this.maxNumber = 50;
	}
};
