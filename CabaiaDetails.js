$( document ).ready(function() {

var page = $('html')[0].outerHTML; 
var start = "Shopify.checkout = ";
var page = page.substring(page.indexOf(start) + start.length);
var i = 0;    
var checkout = "";
while (page[i] != ';' && i < page.length - 1) {        checkout += page[i];        i++;    }
var checkoutjson = $.parseJSON(checkout);
checkoutToken = checkoutjson.token;
if(["Livraison point relais"].indexOf(checkoutjson.shipping_rate.title) !=-1)
{
    var iframe = '<iframe src ="https://wscartography.crossdesk.com/cms/back/selectedPPT.aspx?ID_COMMANDE='+checkoutToken+'&ID_CLIENT=4ae89fbd-23b1-479f-b368-68bce6177454"></iframe>';
    var IframeT = '<div class="content-box__row content-box__row--no-border"><h2>Votre point relais</h2></div>' ; 
    $( "div.map.default-background" ).before( IframeT );
    $( "div.map.default-background" ).replaceWith( iframe );
}
});
