var MyStorage = function () {
	this.storage = window.localStorage;
};

MyStorage.prototype = {

	getBestResult: function () {
		if (this.storage.getItem("bestValue"))
			return Number(this.storage.getItem("bestValue"));
		else
			return 0;
	},

	setBestResult: function (value) {
		this.storage.setItem("bestValue", value);
	},

	getTime: function () {
		if (this.storage.getItem("time"))
			return Number(this.storage.getItem("time"));
		else
			return 0;
	},

	setTime: function (value) {
		this.storage.setItem("time", value);
	},

	getDifficulty: function () {
		if (this.storage.getItem("difficulty"))
			return Number(this.storage.getItem("difficulty"));
		else
			return 1;
	},

	setDifficulty: function (difficult) {
		switch (difficult) {
		case "easy":
			this.storage.setItem("difficulty", 0);
			break;
		case "medium":
			this.storage.setItem("difficulty", 1);
			break;
		case "hard":
			this.storage.setItem("difficulty", 2);
			break;
		}
	},

	getSound: function () {
		if (this.storage.getItem("sound"))
			return Number(this.storage.getItem("sound"));
		else
			return 1;
	},

	setSound: function (value) {
		if (value)
			this.storage.setItem("sound", 1);
		else
			this.storage.setItem("sound", 0);
	},

	getVibration: function () {
		if (this.storage.getItem("vibration"))
			return Number(this.storage.getItem("vibration"));
		else
			return 1;
	},

	setVibration: function (value) {
		if (value)
			this.storage.setItem("vibration", 1);
		else
			this.storage.setItem("vibration", 0);
	},

	getMaxNumber: function () {
		if (this.storage.getItem("maxNumber"))
			return Number(this.storage.getItem("maxNumber"));
		else
			return 50;
	},

	setMaxNumber: function (value) {
		this.storage.setItem("maxNumber", value);
	},

	getRound: function () {
		if (this.storage.getItem("round"))
			return Number(this.storage.getItem("round"));
		else
			return 1;
	},

	setRound: function (value) {
		this.storage.setItem("round", value);
	},

	getScore: function () {
		if (this.storage.getItem("score"))
			return Number(this.storage.getItem("score"));
		else
			return 0;
	},

	setScore: function (value) {
		this.storage.setItem("score", value);
	},

	getTry: function () {
		if (this.storage.getItem("try"))
			return Number(this.storage.getItem("try"));
		else
			return 3;
	},

	setTry: function (value) {
		this.storage.setItem("try", value);
	},

	get50points: function () {
		if (this.storage.getItem("50points"))
			return 1;
		else
			return 0;
	},

	set50points: function (value) {
		this.storage.setItem("50points", value);
	},

	get100points: function () {
		if (this.storage.getItem("100points"))
			return 1;
		else
			return 0;
	},

	set100points: function (value) {
		this.storage.setItem("100points", value);
	},

	get500points: function () {
		if (this.storage.getItem("500points"))
			return 1;
		else
			return 0;
	},

	set500points: function (value) {
		this.storage.setItem("500points", value);
	},

	get1000points: function () {
		if (this.storage.getItem("1000points"))
			return 1;
		else
			return 0;
	},

	set1000points: function (value) {
		this.storage.setItem("1000points", value);
	},

	get5Seconds: function () {
		if (this.storage.getItem("5seconds"))
			return 1;
		else
			return 0;
	},

	set5Seconds: function (value) {
		this.storage.setItem("5seconds", value);
	},

	getMyAutograph: function () {
		if (this.storage.getItem("autograph"))
			return 1;
		else
			return 0;
	},

	setMyAutograph: function (value) {
		this.storage.setItem("autograph", value);
	},

	getSkin: function () {
		if (this.storage.getItem("skin"))
			return Number(this.storage.getItem("skin"));
		else
			return 0;
	},

	setSkin: function (value) {
		this.storage.setItem("skin", value);
	}
};