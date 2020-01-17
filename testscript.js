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
            console.log(document.getElementsByClassName("shipped_via")[0].innerHTML);
        xlInit();
})

function xlInit() {
    if (document.URL.indexOf("tempetedelouest.fr/mon-compte/voir-commande") != -1) {
            if (xlPptCarriers.includes(document.getElementsByClassName("shipped_via")[0].innerHTML))
            {
                        xlDisplaySelectedPPT();
            }
        
    }
}
function xlDisplayMap() {
    console.log("SelectedPPT!");
}
