var GameClassic = function (profil) {
	this.name = "GameClassic";
	this.profile = profil;
	this.number = this.randomNumber(10, this.profile.maxNumber);
	this.numbers = this.shuffle(this.randomNumbers());
	this.choice = [];
	this.tmpResult = 0;
	this.html = '<div class="row">' +
		'<div class="col-xs-12">' +
		'<p class="text-center"><kbd id="mainNumber"></kbd></p>' +
		'</div>' +
		'</div>' +
		'<div class="row">' +
		'<div class="col-xs-12 text-center">' +
		'<a class="btn btn-default active" id="choiceView" role="button"></a>' +
		'</div>' +
		'</div>' +
		'<div class="row">' +
		'<div class="col-xs-6">' +
		'<p id="undo" class="text-left"><i class="fa fa-undo fa-2x"></i>:<span id="try"></span></p>' +
		'</div>' +
		'<div class="col-xs-6">' +
		'<p class="text-right"><i id="hourglass" class="fa fa-hourglass fa-2x"></i><span id="counter">60</span></p>' +
		'</div>' +
		'</div>' +
		'<div class="row">' +
		'<div class="col-xs-12 text-center">' +
		'<ul class="menu">' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'</ul>' +
		'</div>' +
		'</div>' +
		'<div class="row padding_top"> ' +
		'<div class="col-xs-12 text-center">' +
		'<button type="button" id="resetGame" class="btn btn-info"><i class="fa fa-undo fa-3x"></i></button>' +
		'<button type="button" id="checkGame" class="btn btn-success"><i class="fa fa-check fa-3x"></i></button>' +
		'</div>' +
		'</div>' +
		'</div>';
};

GameClassic.prototype = {

	randomNumber: function (from, to) {
		return Math.round((Math.random() * (to - from))) + from;
	},

	shuffle: function (a) {
		var j, x, i;
		for (i = a.length; i; i--) {
			j = Math.floor(Math.random() * i);
			x = a[i - 1];
			a[i - 1] = a[j];
			a[j] = x;
		}
		return a;
	},

	randomNumbers: function () {
		var arr = [];

		var length = this.randomNumber(3, 5);

		for (var i = 0; i < length; i++) {
			var randNumber = Math.floor(this.randomNumber(0.5 * this.number, this.number));
			arr.push(randNumber);
		}

		var suma = 0;
		for (var j = 0; j < length; j++)
			suma += arr[j];

		if (suma > this.number) {
			var diff = suma - this.number;
			var stop = 0;
			for (var k = 0; k < diff; k++) {
				if (stop === length)
					stop = 0;

				arr[stop] -= 1;
				stop++;
			}
		} else if (suma < this.number) {
			var diff = this.number - suma;
			var stop = 0;
			for (var k = 0; k < diff; k++) {
				if (stop === length)
					stop = 0;

				arr[stop] += 1;
				stop++;
			}
		}

		for (var l = 0; l < length; l++) {
			if (arr[l] < 0)
				arr[l] = Math.abs(arr[l]);
		}

		for (var i = 0; i < (16 - length); i++) {
			arr.push(this.randomNumber(1, 0.5 * this.number));
		}
		return arr;
	},

	resetGame: function () {
		this.number = this.randomNumber(10, this.profile.maxNumber);
		this.numbers = this.randomNumbers();
		this.choice = [];
		this.tmpResult = 0;
	},

	addTo: function (Id, Number) {
		for (var i = 0; i < this.choice.length; i++) {
			if (this.choice[i].id === Id && this.choice[i].number === Number) {
				this.tmpResult -= Number;
				this.choice.splice(i, 1);
				return false;
			}
		}
		this.tmpResult += Number;
		this.choice.push(new Field(Id, Number));
		return true;
	},

	check: function () {
		if (this.number === this.tmpResult)
			return true;
		else
			return false;
	}
};