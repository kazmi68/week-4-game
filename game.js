$(document).ready(function() {

crystals =["assets/images/saphire-gem.png", "assets/images/pink-gem.png", "assets/images/emerald-gem.png", "assets/images/black-and-white-gem.png"]
          var crystal1= $("<img>");
          var crystal2= $("<img>");
          var crystal3= $("<img>");
          var crystal4= $("<img>");
          
	var wins = 0;
	var losses = 0;
	$("#win").text(wins);
	$("#loss").text(losses);


	//newCrystals();
	newGame();


	function newGame() {
		crystal1.attr('src','crystal1.png');
          crystal2.attr('src','crystal2.png');
          crystal3.attr('src','crystal3.png');
          crystal4.attr('src','crystal4.png');
          crystal1.attr('class','crystalImage');
          crystal2.attr('class','crystalImage');
          crystal3.attr('class','crystalImage');
          crystal4.attr('class','crystalImage');
          function randomnumber(){
            return	Math.ceil(Math.random()*12);
           }
            crystal1.attr('val',randomnumber());
            crystal2.attr('val',randomnumber());
          crystal3.attr('val',randomnumber());
          crystal4.attr('val',randomnumber());
          $(".crystals").append(crystal1);
          $(".crystals").append(crystal2);
          $(".crystals").append(crystal3);
          $(".crystals").append(crystal4);
	var counter = 0;
		counter = 0;
		$("#yourScore").text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = randomIntFromInterval(19,120);

		$(".value").text(numberToGuess);


		$(".crystalImage").on('click', function(){
		    counter = counter + parseInt($(this).attr('val'));
		   
		    $("#yourScore").text(counter);

		    if (counter == numberToGuess){
		      $("#message").text("You won!");
		      wins ++;
		      $("#win").text(wins);
		      console.log(wins)
		      $(".crystals").empty();

		      newGame();
		        
		    } else if ( counter > numberToGuess){
		        $("#message").text("You lost")
		        losses ++;
		        $("#loss").text(losses);
		        console.log(losses)
		        $(".crystals").empty();
		        newGame();
		    }
		});
	}

});