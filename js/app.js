// Hide trap sign 
// When user clicks on image, reveal trap sign

// best practice, doesn't run code until everything is ready
$(document).ready(function() {
	$('.warning').hide();

	$('.image').on('click', function() {
		console.log('sweet!');
		$('.warning').toggle('slow');
	})
})

	// .warning = CSS class
	// $('.image').click(.show(con));
	// capture click on image

.click(function() {

})