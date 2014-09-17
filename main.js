// click event handler that prints a message to the console.

// $(document).ready(function() {
// 	$('.button').click(function(){
// 		console.log("Stop clicking me!");
// 	});
// });

// click event handler that appends some text, an unordered list and an h1 with text to the body element.

// $(document).ready(function() {
// 	$('.button1').click(function(){
// 		$('body').append("<p>Here's some text!</p>");
// 	});
// 	$('.button2').click(function(){
// 		$('body').append("<h1>I'm a title!</h1>");
// 	});
// 	$('.button3').click(function(){
// 		$('body').append("<ul><li>item1</li><li>item2</li><li>item3</li></ul>");
// 	});
// });

$(document).ready(function(){
	$('p').hover(function (){
		$(this).css("color", "pink");
	}, function(){
		$(this).css("color", "#80809A");
	});
	$('h1, h2, h3').append("!");
	$('a').click(function(){
		var letsGo = confirm("Do you want to visit this link?");
		if (letsGo) {

		}
		else {
			$(this).remove();
			return false;

		}
	})
});