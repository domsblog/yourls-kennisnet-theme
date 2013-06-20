jQuery(document).ready(function($) {
    
    var $body = $('body.index');
    
    // hide shorturl form and table by default
    var $shorturl = $body.find('#new_url,#main_table,#admin_menu ~ p');
    var $shareboxes = $body.find('#shareboxes');
    $shorturl.first().before($('<h2>URL Shortening</h2>').click(function() {
        var visible = $shorturl.is(':visible');
        if (visible) {
            $shorturl.hide();
            $shareboxes.hide();
        } else {
            $shorturl.show();
            if ($shareboxes.find('input#titlelink').val()) {
                $shareboxes.show();
            }
        }
    }));
    $shorturl.hide();
    
    // allow toggling of forwarding rules
    var $forwarding = $body.find('#new_forwarding_rule, .forwarding-table-container');
    $forwarding.first().prev().click(function() {
       $forwarding.toggle(); 
    });
    
});