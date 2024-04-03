


$(document).ready(function() {
    
    $('.nav-item').click(function(event) {
        event.preventDefault(); 
        
        var gifSrc = $(this).data('gif');

       
        $('.gif-item').remove();

        
        for (var i = 0; i < 60; i++) { 
            var $newGif = $('<img>', {
                class: 'gif-item',
                src: gifSrc,
                alt: 'GIF'
            });
            $('#gif-container').append($newGif);
        }
    });
});


