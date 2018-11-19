


$(function() {
    i = 0;
    var myInterval = setInterval(function() {
        $(document).ready(function(){
		$.ajax({
				url: "http://localhost/data.php",
				method: "GET",
				success: function(data) {
					console.log(data);
					var player = [];
					var score = [];

					for(var i in data) {
						player.push("Player " + data[i].playerid);
						score.push(data[i].score);
					}

					// var chartdata = {
					// 	labels: player,
					// 	datasets : [
					// 		{
					// 			label: 'Player Score',
					// 			backgroundColor: 'rgba(200, 200, 200, 0.75)',
					// 			borderColor: 'rgba(200, 200, 200, 0.75)',
					// 			hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
					// 			hoverBorderColor: 'rgba(200, 200, 200, 1)',
					// 			data: score
					// 		}
					// 	]
					// };

					// var ctx = $("#mycanvas");

					// var barGraph = new Chart(ctx, {
					// 	type: 'bar',
					// 	data: chartdata
					// });
					document.getElementById("test").setAttribute("aria-valuenow", score[2]); 
					document.getElementById("test").setAttribute("style", "width:"+score[2]+"%"); 
					document.getElementById("test").textContent = score[2];
				},
				error: function(data) {
					console.log(data);
				}
			});
		});
    }     
    ,1000);
});