jQuery(function ($) {

    var id_client = jQuery("#CrossIdClient").text();
    var order_Id = jQuery("#CrossIdClient").text();
    var city = jQuery("#CossCity").text();
    var country = jQuery("#CrossIdCountry").text();
    var postcode = jQuery("#CrossPC").text();
    var Cart = '<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Cliquez sur un des numéros disponibles ci-dessous.<br>Le point relais affiché est celui ou sera effectuée la livraison.<br><br><iframe style="border:1px solid #CCCCCC;" id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Front/picker.aspx?ID_COMMANDE='+order_Id+'&ID_CLIENT='+id_client+'&QUERY='+postcode+'+'+city+'&COUNTRY='+country+'" frameborder="0"></iframe><div><br><br>'
    //var Cart = '<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;"><br><br><iframe style="border:1px solid #CCCCCC;" id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/cms/back/selectedPPT.aspx?ID_COMMANDE='+order_Id+'&ID_CLIENT='+id_client+'" frameborder="0"></iframe><div><br><br>' ;
    height = 740;
    try {
        if (!(document.getElementById('order_data').offsetWidth < 460)) {
            height = 430;
        }
        }
        catch(err)
        {}
    jQuery( "#order_data" ).after(Cart);
    jQuery("#iFrameMap").height(height); 
    });	
    