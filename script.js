$(document).ready(function() {

	console.log("CHANGES")

	var isShown = true;

	var score = 0;

	var clickFunction = function() {
		score++;
		isShown = !isShown;
		if (isShown) {
			$(this).show()
		} else {
			$(this).hide();
		}
		console.log(score)
	}

	var oysterClick = function() {
		if(score > 0)
			score--;
		isShown = !isShown;
		if (isShown) {
			$(this).show()
		} else {
			$(this).hide();
		}
		console.log(score)
	}

	$(".garbage1").click(clickFunction);
	$(".oyster").click(oysterClick);


})
