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


// JS for Part II: 
// paragraphs become pink when hovered over, all headers get a "!" appended,
// and links popup a confirmation box.  If you cancel out of the confirmation box
// the link is not opened and also the link disappears from the page.
// 
// $(document).ready(function(){
// 	$('p').hover(function (){
// 		$(this).css("color", "pink");
// 	}, function(){
// 		$(this).css("color", "#80809A");
// 	});
// 	$('h1, h2, h3').append("!");
// 	$('a').click(function(){
// 		var letsGo = confirm("Do you want to visit this link?");
// 		if (letsGo) {

// 		}
// 		else {
// 			$(this).remove();
// 			return false;

// 		}
// 	})
// });


// GIANT BUTTONS JS
// 
// 

$(document).ready(function() {

	$('.button').click(function(){
		$('body').append('<div class="lightbox-overlay"><div class="lightbox-content"><h3>I am a Popup, hooray&#33;</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, perferendis amet in! Odio cum numquam, officiis expedita ex architecto consectetur molestiae neque enim sed magnam sapiente doloremque earum asperiores veritatis!</p><div><a class="closeButton" href="#">Close</a></div></div></div>');
		$('.closeButton').click(function(){
			$('.lightbox-overlay').remove();
		});
	});
	
});