$(document).ready(function () {
	"use strict";

	var myStorage = new MyStorage();
	var myLocal = new MyLocalization();

	gapi.client.load('games', 'v1', function (response) {
		var request = gapi.client.games.scores.submit({
			leaderboardId: "CgkIiprbmqMXEAIQBw",
			score: myStorage.getBestResult()
		});
		request.execute(function (response) {
			// Check to see if this is a new high score
		});
	});


	function achivText() {
		var achivText = "";

		if (myStorage.get50points())
			achivText += '<div class="alert alert-success">' + myLocal.points50() + '</div>';
		else
			achivText += '<div class="well">?????????????????????</div>';

		if (myStorage.get100points())
			achivText += '<div class="alert alert-success">' + myLocal.points100() + '</div>';
		else
			achivText += '<div class="well">?????????????????????</div>';

		if (myStorage.get500points())
			achivText += '<div class="alert alert-success">' + myLocal.points500() + '</div>';
		else
			achivText += '<div class="well">?????????????????????</div>';

		if (myStorage.get1000points())
			achivText += '<div class="alert alert-success">' + myLocal.points1000() + '</div>';
		else
			achivText += '<div class="well">?????????????????????</div>';

		if (myStorage.get5Seconds())
			achivText += '<div class="alert alert-success">' + myLocal.seconds5() + '</div>';
		else
			achivText += '<div class="well">?????????????????????</div>';

		if (myStorage.getMyAutograph())
			achivText += '<div class="alert alert-success">' + myLocal.myAutograph() + '</div>';
		else
			achivText += '<div class="well">?????????????????????</div>';

		$("#achievementsDiv").html(achivText);
	}

	MySkin();
	achivText();



	var clickMe = 0;

	if (myStorage.getBestResult())
		$("#value").text(myStorage.getBestResult());
	else
		$("#value").text(0);

	if (myStorage.getTime() === 0) {
		myStorage.setTime(1000);
	}

	$("#settings").click(function () {
		$("#modalSettings").modal("show");
	});

	$("#achievements").click(function () {
		$("#modalAchievements").modal("show");
	});

	var difficulty = myStorage.getDifficulty();

	switch (difficulty) {
	case 0:
		$(".difficultyButton").removeClass("active");
		$(".difficultyButton").eq(0).addClass("active");
		break;
	case 1:
		$(".difficultyButton").removeClass("active");
		$(".difficultyButton").eq(1).addClass("active");
		break;
	case 2:
		$(".difficultyButton").removeClass("active");
		$(".difficultyButton").eq(2).addClass("active");
		break;
	}

	$(".difficultyButton").click(function () {
		var index = $(".difficultyButton").index(this);

		if (index === 0) {
			$(".difficultyButton").removeClass("active");
			$(".difficultyButton").eq(0).addClass("active");
			myStorage.setDifficulty("easy");
		} else if (index === 1) {
			$(".difficultyButton").removeClass("active");
			$(".difficultyButton").eq(1).addClass("active");
			myStorage.setDifficulty("medium");
		} else if (index === 2) {
			$(".difficultyButton").removeClass("active");
			$(".difficultyButton").eq(2).addClass("active");
			myStorage.setDifficulty("hard");
		}

	});

	if (myStorage.getVibration() === 1)
		$("#vibration").addClass("btn-success");
	else
		$("#vibration").addClass("btn-danger");

	if (myStorage.getSound() === 1)
		$("#sound").addClass("btn-success");
	else
		$("#sound").addClass("btn-danger");

	if (myStorage.getSkin() === 1)
		$("#skin").addClass("btn-success");
	else
		$("#skin").addClass("btn-danger");

	if (myStorage.getMaxNumber() !== 50)
		myStorage.setMaxNumber(50);

	if (myStorage.getRound() !== 1)
		myStorage.setRound(1);

	if (myStorage.getScore() !== 0)
		myStorage.setScore(0);

	if (myStorage.getTry() !== 3)
		myStorage.setTry(3);

	$("#sound").click(function () {
		if ($("#sound").hasClass("btn-success")) {
			$("#sound").removeClass("btn-success");
			$("#sound").addClass("btn-danger");
			myStorage.setSound(0);
		} else {
			$("#sound").removeClass("btn-danger");
			$("#sound").addClass("btn-success");
			myStorage.setSound(1);
		}
	});

	$("#star").click(function () {
		if (clickMe != 7) {
			clickMe++;
		} else {
			$("#modalMe").modal("show");

			if (!myStorage.getMyAutograph()) {
				myStorage.setMyAutograph(1);
				MyNotify();
				MySound.playSong(MyAssets.BELL);
				achivText();
			}

		}

	});

	$("#vibration").click(function () {
		if ($("#vibration").hasClass("btn-success")) {
			$("#vibration").removeClass("btn-success");
			$("#vibration").addClass("btn-danger");
			myStorage.setVibration(false);
		} else {
			$("#vibration").removeClass("btn-danger");
			$("#vibration").addClass("btn-success");
			myStorage.setVibration(true);
		}
	});

	$("#skin").click(function () {
		if ($("#skin").hasClass("btn-success")) {
			$("#skin").removeClass("btn-success");
			$("#skin").addClass("btn-danger");
			myStorage.setSkin(0);
		} else {
			$("#skin").removeClass("btn-danger");
			$("#skin").addClass("btn-success");
			myStorage.setSkin(1);
		}

		MySkin();
	});
	$(".difficultyButton").eq(0).html(myLocal.easy());
	$(".difficultyButton").eq(1).html(myLocal.medium());
	$(".difficultyButton").eq(2).html(myLocal.hard());

	document.addEventListener("backbutton", onBackKeyDown, false);

	function onBackKeyDown() {
		if (cordova.platformId !== 'windows') {
			return;
		}

		if (!($('#modalSettings').data('bs.modal') || {}).isShown) {
			$('#modalSettings').modal('hide');
		} else if (!($('#modalAchievements').data('bs.modal') || {}).isShown) {
			$('#modalAchievements').modal('hide');
		} else {
			navigator.app.exitApp();
		}
	}

});