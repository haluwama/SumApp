var MyLocalization = function () {
	this.LanguagePL = {
		easy: "\u0141atwy",
		medium: "\u015aredni",
		hard: "Trudny",
		points50: "Uda\u0142o Ci si\u0119 zdoby\u0107 50 punkt\u00f3w!",
		points100: "Uda\u0142o Ci si\u0119 zdoby\u0107 100 punkt\u00f3w!",
		points500: "Uda\u0142o Ci si\u0119 zdoby\u0107 500 punkt\u00f3w! My\u015blisz, \u017ce jeste\u015b fajny? No jeste\u015b <3",
		points1000: "Uda\u0142o Ci si\u0119 zdoby\u0107 100 punkt\u00f3w! Ziomek wr\u00f3\u0107 do \u017cycia :D",
		divide: "Liczby podzielne przez",
		seconds5: "Masz zwinne paluszki!",
		myAutograph: "Odkry\u0142e\u015b m\u00f3j ma\u0142y sekret. Ciii...",
		titleAchievements: "Nowe osi\u0105gni\u0119cie!"
	};

	this.LanguageEN = {
		easy: "Easy",
		medium: "Medium",
		hard: "Hard",
		points50: "You have got 50 points!",
		points100: "You have got 100 points!",
		points500: "You have got 500 points! Well, do you think that you cool? Heh, well you're! <3",
		points1000: "You have got 1000 points! Wow! Bro come back to life! :D",
		divide: "Numbers divisible by",
		seconds5: "You have agile fingers!",
		myAutograph: "You discovered my little secret. Shhh ...",
		titleAchievements: "New achievement!"
	};

	if ((window.navigator.userLanguage || window.navigator.language) === "pl-PL")
		this.choice = this.LanguagePL;
	else
		this.choice = this.LanguageEN;

};

MyLocalization.prototype = {
	easy: function () {
		return this.choice.easy;
	},

	medium: function () {
		return this.choice.medium;
	},

	hard: function () {
		return this.choice.hard;
	},

	points50: function () {
		return this.choice.points50;
	},

	points100: function () {
		return this.choice.points100;
	},

	points500: function () {
		return this.choice.points500;
	},

	points1000: function () {
		return this.choice.points1000;
	},

	divide: function () {
		return this.choice.divide;
	},

	seconds5: function () {
		return this.choice.seconds5;
	},

	myAutograph: function () {
		return this.choice.myAutograph;
	},

	titleAchievements: function () {
		return this.choice.titleAchievements;
	}
};