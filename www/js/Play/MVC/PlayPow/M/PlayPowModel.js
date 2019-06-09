var GamePow = function (profil) {
	this.name = "GamePow";
	this.profile = profil;
	this.base = this.randomNumber(2, 98);
	if (this.base === 2)
		this.exponent = this.randomNumber(2, 10);
	else if (this.base > 2 && this.base < 5)
		this.exponent = this.randomNumber(2, 6);
	else if (this.base > 4 && this.base < 7)
		this.exponent = this.randomNumber(2, 4);
	else if (this.base > 6 && this.base < 11)
		this.exponent = this.randomNumber(2, 3);
	else
		this.exponent = 2;
	this.goodAnswer = Math.pow(this.base, this.exponent);
	this.numbers = this.shuffle(this.randomNumbers());
	this.choice = null;
	this.html = '<div class="row margintop15">' +
		'<div class="col-xs-12 text-center">' +
		'<span id="base"></span><sup id="exponent"></sup>=?' +
		'</div>' +
		'</div>' +
		'<div class="row">' +
		'<div class="col-xs-6 col-xs-offset-6">' +
		'<p class="text-right"><i id="hourglass" class="fa fa-hourglass fa-2x"></i><span id="counter">60</span></p>' +
		'</div>' +
		'</div>' +
		'<div class="row margintop25">' +
		'<div class="col-xs-12 text-center">' +
		'<ul class="menu">' +
		'<li><button class="btn btn-default przyciski miniprzyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski miniprzyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski miniprzyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski miniprzyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski miniprzyciski" role="button"></button></li>' +
		'</ul>' +
		'</div>' +
		'</div>' +
		'<div class="row padding_top margintop20">' +
		'<div class="col-xs-12 text-center">' +
		'<button type="button" id="checkGame" class="btn btn-success"><i class="fa fa-check fa-3x"></i></button>' +
		'</div>' +
		'</div>' +
		'<style>' +
		'.menu li {' +
		'width: 20%;' +
		'float: left;}' +
		'</style>';
};

GamePow.prototype = {

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

		if (this.profile.maxNumber > 100)
			var liczba1 = this.randomNumber(0, 10000);
		else
			var liczba1 = this.randomNumber(0, Math.pow(this.profile.maxNumber, 2));

		arr.push(liczba1);
		var i = 1;
		while (i < 4) {
			var liczba2 = this.randomNumber(0, 10000);
			if (liczba1 !== liczba2 && liczba2 !== this.goodAnswer) {
				arr.push(liczba2);
				liczba1 = liczba2;
				i++;
			}
		}
		arr.push(this.goodAnswer);
		return arr;
	},

	addTo: function (Id, Number) {
		if (Id === null && Number === null) {
			this.choice = null;
			return false;
		} else {
			this.choice = new Field(Id, Number);
			return true;
		}
	},

	check: function () {
		if (this.goodAnswer === this.choice.number)
			return true;
		else
			return false;
	}
};