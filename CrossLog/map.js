
jQuery(document).ready(function() {
    
    var ListPointRelais = jQuery("#crossListPointsRelais").text().split(",");
    jQuery('#CrossLogToken').val(jQuery('#CrossTokenDiv').text());
    var arrayLength = ListPointRelais.length;
    var height = 430;
    try {
        if (!(document.getElementById('order_data').offsetWidth < 460)) {
            height = 430;
        }
        }
        catch(err)
        {}
    if(jQuery('#CrossHook').length){

    }else{
        
    }
    for (var i = 0; i < arrayLength; i++) {

        var PointRelais = ListPointRelais[i] ;
        if (jQuery('#mapDiv').length)
            jQuery('#mapDiv').remove();

        var token = jQuery("#CrossLogToken").val();
        var postcode = jQuery("#billing_postcode").val();
        var city = jQuery("#billing_city").val();
        var selectedCountry = jQuery("#billing_country").val();
        var id_client = jQuery("#CrossIdClient").text();
        var couleur = jQuery("#CrossColor").text();

        if(jQuery("input[type=\'radio\'][value^='"+PointRelais+"']").is(':checked')) {
            var idVal = jQuery("input[type=\'radio\'][value^='"+PointRelais+"']").attr("id");
            var Cart = '<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Cliquez sur un des numéros disponibles ci-dessous.<br>Le point relais affiché est celui ou sera effectuée la livraison.<br><br><iframe style="border:1px solid #CCCCCC;" id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Front/picker.aspx?ID_COMMANDE='+token+'&ID_CLIENT='+id_client+'&QUERY='+postcode+'+'+city+'&COUNTRY='+selectedCountry+'&COLOR='+couleur+'" frameborder="0"></iframe><div><br><br>'
            var parents = jQuery("#cross_Div_point_relais").text();
            var nbparents = parseInt(parents); 
            if(isNaN(nbparents))
            nbparents = 0 ;

            jQuery( "label[for=\'"+idVal+"\']" ).parents().eq(nbparents).after(Cart);
                
            break;
            };
    }

    jQuery("#iFrameMap").height(height); 
});