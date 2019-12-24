if (document.URL.indexOf("com/account/orders") != -1 && document.body.innerHTML.search("Livraison point relais")>0) {
        var shopId = document.getElementById('in-context-paypal-metadata').getAttribute('data-shop-id');

        var pageurl = document.URL;
  
        var orderId = pageurl.substring(pageurl.indexOf('account/orders/')+'account/orders/'.length, pageurl.length);

        var shopurl = pageurl.substring(0, pageurl.indexOf('/account/orders/'));;

        var htmlNode ='<br> <div class="myaccount__return-button text-center"><a href="'+shopurl+'/'+shopId+'/orders/'+orderId+'" class="btn account-button__return"><span>Point relais</span></a></div>';

    [...document.querySelectorAll("span")]
   .filter(a => a.textContent.includes("Adresse de livraison"))
   .forEach(a => a.nextElementSibling.insertAdjacentHTML('beforeend',htmlNode))

    }
else{
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
    var IframeT = '<div class="content-box__row content-box__row--no-border"><h2>Point relais</h2></div>' ; 
    $( "div.map.default-background" ).before( IframeT );
    $( "div.map.default-background" ).replaceWith( iframe );
}
});
    
}

