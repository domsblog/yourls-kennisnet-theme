jQuery(document).ready(function($) {
    
    var $body = $('body.index');
    
    // allow toggling for short urls
    var $shorturl = $body.find('#new_url,#main_table,#admin_menu ~ p');
    var $shareboxes = $body.find('#shareboxes');
    $shorturl.first().before($('<h2>URL Shortening</h2>').click(function() {
        var visible = $shorturl.is(':visible');
        if (visible) {
            $shorturl.hide();
            $shareboxes.hide();
        } else {
            $shorturl.show();
            // we only show the shareboxes if they contain content for a
            // short url.
            if ($shareboxes.find('input#titlelink').val()) {
                $shareboxes.show();
            }
        }
    }));
    
    // allow toggling of forwarding rules
    var $forwarding = $body.find('#new_forwarding_rule, .forwarding-table-container');
    $forwarding.first().prev().click(function() {
       $forwarding.toggle(); 
    });
     
    // show forwarding rules by default
    if ($forwarding.length > 0) {    
        $shorturl.hide();
    }
    
});