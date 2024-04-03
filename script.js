


$(document).ready(function() {
    // Event listener for navigation links
    $('.nav-item').click(function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the data-gif attribute value
        var gifSrc = $(this).data('gif');

        // Remove existing GIFs
        $('.gif-item').remove();

        // Create and append multiple copies of the GIF to the grid container
        for (var i = 0; i < 60; i++) { // 50 GIFs for demonstration
            var $newGif = $('<img>', {
                class: 'gif-item',
                src: gifSrc,
                alt: 'GIF'
            });
            $('#gif-container').append($newGif);
        }
    });
});


