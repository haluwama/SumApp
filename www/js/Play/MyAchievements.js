var MyAchievements = function () {
	this.storage = new MyStorage();
};

MyAchievements.prototype = {
	get50points: function () {
		if (!this.storage.get50points())
			this.storage.set50points(1);
	},

	get100points: function () {
		if (!this.storage.get100points())
			this.storage.set100points(1);
	},

	get500points: function () {
		if (!this.storage.get500points())
			this.storage.set500points(1);
	},

	get1000points: function () {
		if (!this.storage.get1000points())
			this.storage.set1000points(1);
	},

	getPoints: function (score) {
		if (score >= 50 && score < 100) {
			if (!this.storage.get50points()) {
				this.get50points();
				MyNotify();
				MySound.playSong(MyAssets.BELL);
			}
		} else if (score >= 100 && score < 500) {
			if (!this.storage.get100points()) {
				this.get100points();
				MyNotify();
				MySound.playSong(MyAssets.BELL);
			}
		} else if (score >= 500 && score < 1000) {
			if (!this.storage.get500points()) {
				this.get500points();
				MyNotify();
				MySound.playSong(MyAssets.BELL);
			}
		} else if (score >= 1000) {
			if (!this.storage.get1000points()) {
				this.get1000points();
				MyNotify();
				MySound.playSong(MyAssets.BELL);
			}
		}
	},

	get5Seconds: function (value) {
		if (value >= 55 && !this.storage.get5Seconds()) {
			this.storage.set5Seconds(1);
			MyNotify();
			MySound.playSong(MyAssets.BELL);
		}
	}

};