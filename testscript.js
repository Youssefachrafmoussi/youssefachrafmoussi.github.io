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
var xlPptCarriers = "";

$(document).ready(function () {
    if (xlCustomerId.xlCustomerId)
        xlInit();
});
function xlInit() {
    if (document.URL.indexOf("tempetedelouest.fr/mon-compte/voir-commande") != -1) {
        xlDisplaySelectedPPT();
    }
}
function xlDisplayMap() {
    console.log("SelectedPPT!");
}
