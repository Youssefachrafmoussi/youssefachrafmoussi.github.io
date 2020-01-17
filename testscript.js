/**
 * Module Croslog PrestaShop
 * @author <Crosslog>
 * @copyright  Copyright (c) 2019
 * @license Crosslog
 */
//  ////////////////////////////////////////////////////////////////////////////////////////////////
//   
//  	Crosslog International
//  		--> Module Crosslog Prestashop1.6 : CrosslogTools v1.0
//  
//  ////////////////////////////////////////////////////////////////////////////////////////////////

var xlUrl = "https://wscartography.crossdesk.com";
var xlPptCarriers = "Chronopost – Point relais – 24/48h CD";
window.addEventListener('load', function () {
        xlInit();
})

function xlInit() {
    if (document.URL.indexOf("tempetedelouest.fr/mon-compte/voir-commande") != -1) {
            var shippingMethod=document.getElementsByClassName("shipped_via")[0].innerHTML;
            console.log(document.getElementsByClassName("shipped_via")[0].innerHTML);
            if (shippingMethod.includes(xlPptCarriers))
            {
                        xlDisplaySelectedPPT();
            }
        
    }
}
function xlDisplaySelectedPPT() {
    console.log("SelectedPPT!");
}
