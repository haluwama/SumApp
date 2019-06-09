"use strict";

var MySound = MySound || {};

MySound.playSong = function (src) {
	if (this.storage.getSound() === this.sound) {
		if (device.platform.toLowerCase() === "android")
			src = "/android_asset/www/" + src;

		var music = new Media(src);
		music.setVolume(1.0);
		music.play();
	}
};