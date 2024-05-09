$(document).ready(function() {
    // Event listener for navigation links
    $('.nav-item').click(function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the data-gif attribute value
        var gifSrc = $(this).data('gif');

        // If INTRO nav-item is clicked, show the map
        if ($(this).text().trim() === 'INTRO') {
            $('#info').show(); // Show the map
            initMap(); 

           
            $('.gif-item').hide();
        } else {
         
            $('#info').hide();
            $('#' + $(this).data('navlink')).show(); 
        }
    });
});

