


/* -----Navigation Dropdown Menu */
$(document).ready(function(){
    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });
});
/*-----------------------------------*/

/*Read More Text Link*/

$(function(){ /* to make sure the script runs after page load */

    $('a.read_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).parents('.tertiary').find('.more_text').show(); /* show the .more_text span */

    });

});


$(function(){ /* to make sure the script runs after page load */

	$('.col').each(function(event){ /* select all divs with the item class */

		var max_length = 150; /* set the max content length before a read more link will be added */

		if($(this).html().length > max_length){ /* check for content length */

			var short_content 	= $(this).html().substr(0,max_length); /* split the content in two parts */
		  var long_content	= $(this).html().substr(max_length);

			$(this).html(short_content+
						 '<a href="#" class="read_more"><br/>Read More</a>'+
						 '<span class="more_text" style="display:none;">'+long_content+'</span>'); /* Alter the html to allow the read more functionality */

			$(this).find('a.read_more').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */

				event.preventDefault(); /* prevent the a from changing the url */
				$(this).hide(); /* hide the read more button */
				$(this).parents('.col').find('.more_text').show(); /* show the .more_text span */

			});

		}

	});


});


/*-----Maps API Documentation*/
/*function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 44.540, lng: -78.546},
    zoom: 8
  });
} */

function initMap() {
  var myLatLng = {lat: 43.001096144, lng: -78.7898985};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'University of Buffalo'
  });
}
