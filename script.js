jQuery(document).ready(function($) {
    
    // hide shorturl form and table by default
    var $shorturl = $('#new_url,#main_table,#shareboxes,#admin_menu ~ p');
    $shorturl.first().before($('<h2>URL Shortening</h2>').click(function() {
        $shorturl.toggle();
    }));
    $shorturl.hide();
    
    // allow toggling of forwarding rules
    var $forwarding = $('#new_forwarding_rule, .forwarding-table-container');
    $forwarding.first().prev().click(function() {
       $forwarding.toggle(); 
    });
    
});