window.addEventListener('load', function(){

var id_client = jQuery("#CrossIdClient").text();
var couleur = jQuery("#CrossColor").text();
var ListPointRelais = jQuery("#crossListPointsRelais").text().split(",");
var parents = jQuery("#cross_Div_point_relais").text();
var customisation = jQuery("#cross_Nom_du_fichier_script").text();
var city = jQuery("#CrossCity").text();
var postcode = jQuery("#CrossPC").text();
var selectedCountry = jQuery("#CrossCountry").text();
var token = jQuery("#CrossTokenDiv").text();

var arrayLength = ListPointRelais.length;
for (var i = 0; i < arrayLength; i++) {
    var PointRelais = ListPointRelais[i];
alert( jQuery('.shipping-method-item').length);
            jQuery('.shipping-method-item').each( function(i) {
               alert(jQuery(this).attr("class"));

                if(jQuery(this).hasClass("current-shipping")){
                    if(jQuery(this).text().indexOf(PointRelais)>=0){
                        if(jQuery('#mapDiv').length){
                            jQuery('#mapDiv').remove();
                        }
                        AdaptTheme();
                        var Cart = GetCart(token, id_client, postcode, city, selectedCountry, couleur, customisation, PointRelais);
                        var nbparents = parseInt(parents);
    
                        if (isNaN(nbparents)){
                            nbparents = 0;
                            jQuery(this).append(Cart);
                        }
                        else{
                            GetHook(jQuery(this), nbparents).append(Cart);
                        }
                    }
                    else{
                        if(jQuery('#mapDiv').length){
                            jQuery('#mapDiv').remove();
                        }
                        CancelAdaptTheme();
                    }
                }
                });
    jQuery(document).on('click', '.shipping-method-item' ,function(){
                if(jQuery(this).text().indexOf('Crosslog')>=0){
                    if(jQuery('#mapDiv').length){
                        jQuery('#mapDiv').remove();
                    }
                AdaptTheme();
                var Cart = GetCart(token, id_client, postcode, city, selectedCountry, couleur, customisation, PointRelais);
                var nbparents = parseInt(parents);
                if (isNaN(nbparents)){
                    nbparents = 0;
                    jQuery(this).append(Cart);
                }
                else{
                    GetHook(jQuery(this), nbparents).append(Cart);
                }
                }
                else{
                    if(jQuery('#mapDiv').length){
                        jQuery('#mapDiv').remove();
                    }
                    CancelAdaptTheme();
                }
                });
}
});


function AdaptTheme(){

    var ClientGUID = jQuery("#CrossIdClient").text();
    ClientGUID ='8f3d093b-3a54-11e3-acfb-d8d385e2f9ec';
    if (ClientGUID == '8f3d093b-3a54-11e3-acfb-d8d385e2f9ec') {
        if (document.URL.indexOf("m.riuparis") == -1) {
            jQuery(".sp-methods").css('overflow','scroll').css('height','600px');
            if(jQuery('.current-shipping').width()<700){
                mapheight = 670;
            }else{
                mapheight = 430;
            }
        }
    }
}
function CancelAdaptTheme(){

    var ClientGUID = jQuery("#CrossIdClient").text();
    ClientGUID ='8f3d093b-3a54-11e3-acfb-d8d385e2f9ec';
    if (ClientGUID == '8f3d093b-3a54-11e3-acfb-d8d385e2f9ec') {
        if (document.URL.indexOf("m.riuparis") == -1) {
            jQuery(".sp-methods").css('overflow','').css('height','');
        }
    }
}
function GetHook(element, nbparents) {

    var hook = element.parents().eq(nbparents);
    return hook;
}
var custom = 0;
var mapheight = 670;
function GetCart(token, id_client, postcode, city, selectedCountry, couleur, customisation, PointRelais) {

    var Cart = '';
    if (custom == 1) {
        var ClientGUID = jQuery("#CrossIdClient").text();
        if (ClientGUID == 'NOTYET') {
            var str = customisation;
            var res = str.split(",");
            if (res.length > 0) {
                if (res[0] == PointRelais)
                {
                    Cart = '<div id="mapDiv"  style="border-top:0px;">Cliquez sur un des numéros disponibles ci-dessous.<br>Le point relais affichÃ© est celui oÃ¹ sera effectuÃ©e la livraison.<br><br><iframe style="border:1px solid #CCCCCC;" id="iFrameMap" width="100%" height="' + mapheight + '" src="https://wscartography.crossdesk.com/CMS/Front/picker.aspx?ID_COMMANDE=' + token + '&ID_CLIENT=' + id_client + '&QUERY=' + postcode + '+' + city + '&COUNTRY=' + selectedCountry + '&CARRIER=55" frameborder="0"></iframe><div>';
                    if (couleur.length > 0) {
                        Cart = '<div id="mapDiv" style="border-top:0px;">Cliquez sur un des numéros disponibles ci-dessous.<br>Le point relais affichÃ© est celui oÃ¹ sera effectuÃ©e la livraison.<br><br><iframe style="border:1px solid #CCCCCC;" id="iFrameMap" width="100%" height="' + mapheight + '" src="https://wscartography.crossdesk.com/CMS/Front/picker.aspx?ID_COMMANDE=' + token + '&ID_CLIENT=' + id_client + '&QUERY=' + postcode + '+' + city + '&COUNTRY=' + selectedCountry + '&COLOR=' + couleur + '&CARRIER=55" frameborder="0"></iframe><div>';
                    }
                }
            }
        }
    }
    else{
        Cart = '<div id="mapDiv" style="border-top:0px;">Cliquez sur un des numéros disponibles ci-dessous.<br>Le point relais affichÃ© est celui oÃ¹ sera effectuÃ©e la livraison.<br><br><iframe style="border:1px solid #CCCCCC;" id="iFrameMap" width="100%" height="' + mapheight + '" src="https://wscartography.crossdesk.com/CMS/Front/picker.aspx?ID_COMMANDE=' + token + '&ID_CLIENT=' + id_client + '&QUERY=' + postcode + '+' + city + '&COUNTRY=' + selectedCountry + '" frameborder="0"></iframe><div>';
        if (couleur.length > 0) {
            Cart = '<div id="mapDiv" style="border-top:0px;">Cliquez sur un des numéros disponibles ci-dessous.<br>Le point relais affichÃ© est celui oÃ¹ sera effectuÃ©e la livraison.<br><br><iframe style="border:1px solid #CCCCCC;" id="iFrameMap" width="100%" height="' + mapheight + '" src="https://wscartography.crossdesk.com/CMS/Front/picker.aspx?ID_COMMANDE=' + token + '&ID_CLIENT=' + id_client + '&QUERY=' + postcode + '+' + city + '&COUNTRY=' + selectedCountry + '&COLOR=' + couleur + '" frameborder="0"></iframe><div>';
        }

    }
    return Cart;

}
