(function($) {
  "use strict"; // Start of use strict

  $('div.loadGraph').each(function() {
	  var div = $(this);
	  div.load(div.data("href"));
  });

})(jQuery); // End of use strict
