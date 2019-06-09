$(document).ready(function () {
	"use strict";

	var storage = new MyStorage();
	var language = new MyLocalization();
	var profile = new MyProfile(storage.getBestResult());
	var achiv = new MyAchievements();

	var vib = true;

	MySkin();

	document.addEventListener("pause", onPause, false);

	function onPause() {
		vib = false;
		storage.setTime(0);
	}

	document.addEventListener("resume", onResume, false);

	function onResume() {
		vib = true;
		storage.setTime(1000);
	}

	document.addEventListener("backbutton", onBackKeyDown, false);

	function onBackKeyDown() {
		$("#pauseMenu").click(function () {
			storage.setTime(0);

			$("#modalPause").modal({
				backdrop: false
			});
		});
	}

	function betterVibrate(time) {
		if (vib)
			if (storage.getVibration() === 1)
				navigator.vibrate(time);
	}

	function refreshScore() {
		$("#score").html(profile.score);
		$("#bestScore").html(storage.getBestResult());
	}
	var game = null;
	var controller = null;

	function round() {
		if (profile.round % 4 !== 0) {
			game = new GameClassic(profile);

			controller = new GameClassicController(game);
		} else {
			var randNum = Math.random();

			if (randNum <= 0.5) {
				game = new GameDivide(profile);

				controller = new GameDivideController(game);
			} else if (randNum > 0.5 && randNum <= 0.75) {
				game = new GamePow(profile);

				controller = new GamePowController(game);
			} else {
				game = new GameRoot(profile);

				controller = new GameRootController(game);
			}
		}
		$("#classic").html(game.html);
		controller.resetView();

		achiv.getPoints(profile.score);
	}

	refreshScore();
	round();

	$("#pauseMenu").click(function () {
		storage.setTime(0);

		$("#modalPause").modal({
			backdrop: false
		});
	});

	$("#dismissModalPause").click(function () {
		$("#modalPause").modal('hide');
		storage.setTime(1000);
	});

	$("#dismissModalExit").click(function () {
		$("#modalExit").modal('hide');
		storage.setTime(1000);
		profile.resetGame();
		round();
		refreshScore();
	});


	$('#classic').on('click', '#resetGame', function () {
		if (game.name === "GameClassic") {
			if (profile.try !== 0) {
				profile.try--;

				controller.resetGame();
			}
		}

	});

	$('#classic').on('click', '.przyciski', function () {
		MySound.playSong(MyAssets.CLICK);

		if (game.name === "GameClassic") {
			$(this).toggleClass("btn-warning");

			var index = $(".przyciski").index(this);
			game.addTo(index, game.numbers[index]);
			controller.choiceView();
		} else {
			$(this).toggleClass("btn-warning");

			var index = $(".przyciski").index(this);
			game.addTo(index, game.numbers[index]);
		}
	});

	$('#classic').on('click', '#checkGame', function () {
		if (game.check()) {
			MySound.playSong(MyAssets.WIN);
			profile.winGame();
			achiv.get5Seconds(profile.counter);
			round();
		} else {
			if (game.name === "GameClassic") {
				if (storage.getDifficulty() === 1) {
					$("#tmpResult").css("opacity", "1");
					setTimeout(function () {
						$("#tmpResult").css("opacity", "0");
					}, 1000);
				}
			} else {
				storage.setTime(0);
				$("#modalExit").modal({
					backdrop: false
				});
			}
		}

		if (profile.score > storage.getBestResult()) {
			storage.setBestResult(profile.score);
			profile.bestScore = profile.score;
		}

		refreshScore();
	});

	setInterval(function () {
		if (profile.counter === 0) {
			storage.setTime(0);

			$("#modalExit").modal({
				backdrop: false
			});

			MySound.playSong(MyAssets.LOSE);
		}

		if (profile.counter <= 60 && profile.counter > 40) {
			if ($("#hourglass").hasClass("fa-hourglass-end"))
				$("#hourglass").removeClass("fa-hourglass-end");
			$("#hourglass").addClass("fa-hourglass");
		} else if (profile.counter <= 40 && profile.counter > 20) {
			$("#hourglass").addClass("fa-hourglass-half");
			$("#hourglass").removeClass("fa-hourglass");
			betterVibrate(100);
		} else if (profile.counter <= 20 && profile.counter >= 0) {
			$("#hourglass").addClass("fa-hourglass-end");
			$("#hourglass").removeClass("fa-hourglass-half");

			if (profile.counter <= 10) {
				if (profile.counter <= 5)
					betterVibrate(1000);
				else
					betterVibrate(500);
			} else
				betterVibrate(250);

		}

		if (storage.getTime() === 1000)
			profile.counter--;

		$("#counter").text(profile.counter);
	}, 1000);
});