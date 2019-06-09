var GameDivide = function (profil) {
	this.name = "GameDivide";
	this.profile = profil;
	this.storage = new MyStorage();
	this.maxNumber = this.storage.getMaxNumber();
	this.divider = this.randomNumber(2, 9);
	this.numbers = this.shuffle(this.randomNumbers());
	this.choice = [];
	this.html = '<div class="row margintop15">' +
		'<div class="col-xs-12 text-center">' +
		'<span id="dividerText"></span><span id="divider"></span>' +
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
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
		'<li><button class="btn btn-default przyciski" role="button"></button></li>' +
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

GameDivide.prototype = {

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
		var howManyNumbers = this.randomNumber(1, 5);
		var arr = [];
		var liczba1 = this.randomNumber(1, Math.floor(this.maxNumber / this.divider)) * this.divider;
		var liczba2 = null;
		arr.push(liczba1);
		var i = 1;
		while (i < howManyNumbers) {
			liczba2 = this.randomNumber(1, Math.floor(this.maxNumber / this.divider)) * this.divider;
			if (liczba1 != liczba2) {
				arr.push(liczba2);
				liczba1 = liczba2;
				i++;
			}
		}
		while (i < 5) {
			liczba2 = this.randomNumber(1, Math.floor(this.maxNumber));
			if (liczba1 != liczba2) {
				arr.push(liczba2);
				liczba1 = liczba2;
				i++;
			}
		}
		return arr;
	},

	addTo: function (Id, Number) {
		for (var i = 0; i < this.choice.length; i++) {
			if (this.choice[i].id === Id && this.choice[i].number === Number) {
				this.choice.splice(i, 1);
				return false;
			}
		}
		this.choice.push(new Field(Id, Number));
	},

	check: function () {
		var length = this.choice.length;
		var index = [];
		for (var i = 0; i < this.numbers.length; i++) {
			if (this.numbers[i] % this.divider === 0)
				index.push(i);
		}
		this.choice.sort(function (a, b) {
			return a.id - b.id;
		});
		if (length === index.length) {
			for (i = 0; i < length; i++) {
				if (this.choice[i].id !== index[i])
					return false;
			}
			return true;
		} else {
			return false;
		}
	}
};