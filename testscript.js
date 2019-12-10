jQuery(document).ready(function () {

var id_client = $("#CrossIdClient").text();
var couleur = $("#CrossColor").text();
var ListPointRelais = $("#crossListPointsRelais").text().split(",");
var parents = $("#cross_Div_point_relais").text();
var customisation = $("#cross_Nom_du_fichier_script").text();
var city = $("#CrossCity").text();
var postcode = $("#CrossPC").text();
var selectedCountry = $("#CrossCountry").text();
var token = $("#CrossTokenDiv").text();


var arrayLength = ListPointRelais.length;
for (var i = 0; i < arrayLength; i++) {
    var PointRelais = ListPointRelais[i];
            $('.shipping-method-item').each( function(i) {
                if($(this).hasClass("current-shipping")){
                    if($(this).text().indexOf(PointRelais)>=0){
                        if($('#mapDiv').length){
                            $('#mapDiv').remove();
                        }
                        AdaptTheme();
                        var Cart = GetCart(token, id_client, postcode, city, selectedCountry, couleur, customisation, PointRelais);
                        var nbparents = parseInt(parents);
    
                        if (isNaN(nbparents)){
                            nbparents = 0;
                            $(this).append(Cart);
                        }
                        else{
                            GetHook($(this), nbparents).append(Cart);
                        }
                    }
                    else{
                        if($('#mapDiv').length){
                            $('#mapDiv').remove();
                        }
                        CancelAdaptTheme();
                    }
                }
                });
                $('.shipping-method-item').click(function(){
                if($(this).text().indexOf(PointRelais)>=0){
                    if($('#mapDiv').length){
                        $('#mapDiv').remove();
                    }
                AdaptTheme();
                var Cart = GetCart(token, id_client, postcode, city, selectedCountry, couleur, customisation, PointRelais);
                var nbparents = parseInt(parents);
                if (isNaN(nbparents)){
                    nbparents = 0;
                    $(this).append(Cart);
                }
                else{
                    GetHook($(this), nbparents).append(Cart);
                }
                }
                else{
                    if($('#mapDiv').length){
                        $('#mapDiv').remove();
                    }
                    CancelAdaptTheme();
                }
                }); 

}
});


function AdaptTheme(){

    var ClientGUID = $("#CrossIdClient").text();
    ClientGUID ='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
    if (ClientGUID == 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') {
        if (document.URL.indexOf("m.riuparis") == -1) {
            $(".sp-methods").css('overflow','scroll').css('height','600px');
            if($('.current-shipping').width()<700){
                mapheight = 670;
            }else{
                mapheight = 430;
            }
        }
    }
}
function CancelAdaptTheme(){

    var ClientGUID = $("#CrossIdClient").text();
    ClientGUID ='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
    if (ClientGUID == 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') {
        if (document.URL.indexOf("m.riuparis") == -1) {
            $(".sp-methods").attr("style", "");;
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
                    Cart = '<div id="mapDiv"  style="border-top:0px;">Cliquez sur un des numÃ©ros disponibles ci-dessous.<br>Le point relais affichÃ© est celui oÃ¹ sera effectuÃ©e la livraison.<br><br><iframe style="border:1px solid #CCCCCC;" id="iFrameMap" width="100%" height="' + mapheight + '" src="https://wscartography.crossdesk.com/CMS/Front/picker.aspx?ID_COMMANDE=' + token + '&ID_CLIENT=' + id_client + '&QUERY=' + postcode + '+' + city + '&COUNTRY=' + selectedCountry + '&CARRIER=55" frameborder="0"></iframe><div>';
                    if (couleur.length > 0) {
                        Cart = '<div id="mapDiv" style="border-top:0px;">Cliquez sur un des numÃ©ros disponibles ci-dessous.<br>Le point relais affichÃ© est celui oÃ¹ sera effectuÃ©e la livraison.<br><br><iframe style="border:1px solid #CCCCCC;" id="iFrameMap" width="100%" height="' + mapheight + '" src="https://wscartography.crossdesk.com/CMS/Front/picker.aspx?ID_COMMANDE=' + token + '&ID_CLIENT=' + id_client + '&QUERY=' + postcode + '+' + city + '&COUNTRY=' + selectedCountry + '&COLOR=' + couleur + '&CARRIER=55" frameborder="0"></iframe><div>';
                    }
                }
            }
        }
    }
    else{
        Cart = '<div id="mapDiv" style="border-top:0px;">Cliquez sur un des numÃ©ros disponibles ci-dessous.<br>Le point relais affichÃ© est celui oÃ¹ sera effectuÃ©e la livraison.<br><br><iframe style="border:1px solid #CCCCCC;" id="iFrameMap" width="100%" height="' + mapheight + '" src="https://wscartography.crossdesk.com/CMS/Front/picker.aspx?ID_COMMANDE=' + token + '&ID_CLIENT=' + id_client + '&QUERY=' + postcode + '+' + city + '&COUNTRY=' + selectedCountry + '" frameborder="0"></iframe><div>';
        if (couleur.length > 0) {
            Cart = '<div id="mapDiv" style="border-top:0px;">Cliquez sur un des numÃ©ros disponibles ci-dessous.<br>Le point relais affichÃ© est celui oÃ¹ sera effectuÃ©e la livraison.<br><br><iframe style="border:1px solid #CCCCCC;" id="iFrameMap" width="100%" height="' + mapheight + '" src="https://wscartography.crossdesk.com/CMS/Front/picker.aspx?ID_COMMANDE=' + token + '&ID_CLIENT=' + id_client + '&QUERY=' + postcode + '+' + city + '&COUNTRY=' + selectedCountry + '&COLOR=' + couleur + '" frameborder="0"></iframe><div>';
        }

    }
    return Cart;

}
