(function($jq) {
	/* Global definitions */
	
	/* Operational code */
	$jq(document).ready(function() {
		/* Copy email address to username field for affiliates page */
		if(window.location.href.indexOf('/consultants/')>-1) {
			$jq('#affiliates-registration-form-email').on('keyup', function() {
				$jq('#affiliates-registration-form-user-login').val($jq('#affiliates-registration-form-email').val());
			});
		}
		/* Kill "no-click" links in the main menu */
		$jq('#menu-main, #menu-main-1, #menu-main-2 ').on('click', '.noClick a', function(event) {
			event.preventDefault();
			return false;
		});
	});
})(jQuery.noConflict());