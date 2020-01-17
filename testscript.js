
var xlPptCarriers = ["Chronopost – Point relais – 24/48h CD","Chronopost Inter. – Point relais – 2/4 jours CD","Chronopost Inter. – Point relais – 2/4 jours CD","Chronopost Inter. – Point relais – 2/4 jours CD","Chronopost Inter. – Point relais – 2/4 jours CD","UPS Access – Point relais – 2/4 jours CD"];
window.addEventListener('load', function () {
        xlInit();
})

function xlInit() {
    if (document.URL.indexOf("tempetedelouest.fr/mon-compte/voir-commande") != -1) {
            var shippingMethod=document.getElementsByClassName("shipped_via")[0].innerHTML;
                var arrayLength = xlPptCarriers.length;
                for (var i = 0; i < arrayLength; i++) {
                    if (shippingMethod.includes(xlPptCarriers[i]))
                    {
                                xlDisplaySelectedPPT();
                    }
                }

        
    }
}
function xlDisplaySelectedPPT() {
    id_client="aa43452a-60bc-49d1-8d86-48b81fb32095";
    order_Id=document.getElementsByClassName("order-number")[0].innerHTML;
    var Cart = '<div>Point relais :</div><div id="mapDiv" class="order_carrier_content box" style="border-top:0px;"><br><br><iframe style="border:1px solid #CCCCCC;" id="iFrameMap" width="100%" height="300" src="https://wscartography.crossdesk.com/cms/back/selectedPPT.aspx?ID_COMMANDE=' + order_Id + '&ID_CLIENT=' + id_client + '" frameborder="0"></iframe><div><br><br>';
    document.getElementsByClassName("order_details")[0].insertAdjacentHTML('afterend',Cart);
}
