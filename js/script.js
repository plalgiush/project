
	var elem = document.body.querySelector('.btn');  //ссылка на кнопку

	elem.onclick = function () {  // что будет происходить после нажатия на кнопку

		var td = document.body.querySelector('.tdd');

		tdd.randColor[rand].background = "red"

		var randColor = ['#FF0000', '#ff1493', '#ffa500', '#FFFF00',
					 	 '#800080', '#DEB887', '#000000', '#C0C0C0',
					 	 '#FFFFFF', '#00FF00', '#008000', '#00FFFF', '#0000FF']; //массив до обработчика событий

		var rand = Math.floor(Math.random() * randColor.length);

		console.log(randColor[rand]);

		alert(randColor[rand]);


	};



// $(function () {

// 	$('.btn').click(function () {
// 		$('.btn').css('background', 'red')
// 	});
// });