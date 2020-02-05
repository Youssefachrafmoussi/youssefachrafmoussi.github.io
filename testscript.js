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
    if (document.URL.indexOf("thenines.fr/commande") != -1) {
        xlDisplayMapCustomNines();
    }
    if (document.URL.indexOf("controller=order") != -1) {
        xlDisplayMap();
    }
    if (document.URL.indexOf("laboutiquedestoons.com/fr/commande") != -1) {
        xlDisplayMap();
    }
    if (document.URL.indexOf("gayacosmetics.fr/fr/commande-rapide") != -1 || document.URL.indexOf("gayacosmetics.fr/en/commande-rapide") != -1
		|| document.URL.indexOf("gayacosmetics.fr/commande-rapide") != -1) {
        $(document).ready(function () {
            xlDisplayMapCommandRapidGaya();
        });
        $(document).ajaxComplete(function () {
            xlDisplayMapCommandRapidGaya();
        });
    }
    if (document.URL.indexOf("figurine-discount.com/fr/commande") != -1) {
        xlDisplayMap();
    }
    if (document.URL.indexOf("figurines-mania.com/fr/commande") != -1) {
        xlDisplayMap();
    }
    if (document.URL.indexOf("cacharel.fr/fr/commande") != -1) {
        xlDisplayMap();
    }
    if (document.URL.indexOf("mineralie.com/commande") != -1) {
        xlDisplayMap();
    }
    if (document.URL.indexOf("glenpeer.com/commande-rapide") != -1) {
        xlDisplayMap();
    }
    if (document.URL.indexOf("petitsixieme.com/commande-rapide") != -1) {
        $(document).ready(function () {
            xlDisplayMapCommandRapid();
        });
        $(document).ajaxComplete(function () {
            xlDisplayMapCommandRapid();
        });
    }
    if (document.URL.indexOf("sivanite.fr/commande-rapide") != -1) {
        $(document).ready(function () {
            xlDisplayMapCommandRapid();
        });
        $(document).ajaxComplete(function () {
            xlDisplayMapCommandRapid();
        });
    }
    if (document.URL.indexOf("laboutiquedestoons.com/fr/historique-commandes") != -1) {
        xlBuildCustomerOrderDetails();
    }
    if (document.URL.indexOf("figurine-discount.com/fr/historique-commandes") != -1) {
        var IdClient = "fd38bfb5-bf75-4f08-941f-aa4d59c3d51c";
        xlBuildCustomerOrderDetailsOrderHistory(IdClient);
    }
    if (document.URL.indexOf("pinup-secret.fr/") != -1 && document.URL.indexOf("commande-rapide") != -1) {
        $(document).ready(function () {
            xlDisplayMapCommandRapidBeta();
        });
        $(document).ajaxComplete(function () {
            xlDisplayMapCommandRapidBeta();
        });
    }
	if (document.URL.indexOf("oncovia.com/fr/commande") != -1) {
        xlDisplayMap();
    }

    if (document.URL.indexOf("controller=AdminOrders") != -1) {
        xlBuildAdminOrderDetails();
    }
    if (document.URL.indexOf("controller=order-detail") != -1) {
        xlBuildCustomerOrderDetails();
    }
}

function xlDisplayMap() {
    var xlDeliveryOptions = document.querySelectorAll('[id^="delivery_option"]');
    var xlShowMap = 0;
    [].forEach.call(xlDeliveryOptions, function (div) {
        document.addEventListener('click', function (e) {
            if (e.target && e.target.id == div.id) {
                xlDisplayMap();
            }
        });
        if (div.checked) {
            var containingDiv = null;
            var nbrParents = parseInt(xlPickupPointDiv.xlPickupPointDiv);

            if (nbrParents) {
                containingDiv = $(div).parents().eq(nbrParents);
            }
            else {
                containingDiv = $(div).parents().eq(5);
            }
            var CrossDeliveryIds = xlPickupPointCarriers.xlPickupPointCarriers.split(';');
            var arrayLength = CrossDeliveryIds.length;
            var DelivOptions = [];
            for (var i = 0; i < arrayLength; i++) {
                DelivOptions.push(CrossDeliveryIds[i] + ',');
            }


            if (DelivOptions.indexOf($(div).attr('value')) != -1) {
                //(div.getAttribute("value") == xlPptCarriers + ",") {

                xlShowMap = 1;
                var iFrameMap = document.getElementById('mapDiv');

                if (iFrameMap != null) {

                    iFrameMap.parentNode.removeChild(iFrameMap);
                }
                var height = "430";

                try {
                    if (document.getElementById('delivery').offsetWidth < 700) {
                        height = "680";
                    }
                }
                catch (err)
                { }
                try {
                    if (document.getElementById('checkout-delivery-step').offsetWidth < 700) {
                        height = "680";
                    }
                }
                catch (err)
                { }

                var couleur = xlPickupPointBtnColor.xlPickupPointBtnColor;
                if (!couleur) {
                    couleur = 'd23c7c';
                }
                var iframe = "<div id='mapDiv' class='order_carrier_content box' style='border-top:0px;'>";
                iframe += "Cliquez sur l'un des num\351ros disponibles ci-dessous.<br>Le point relais affich\351 est celui O\371 sera effectu\351e la livraison.<br><br>";
                iframe += "<iframe style='border:1px solid #CCCCCC;' id='iFrameMap' width='100%' height='" + height + "' ";
                iframe += "src='" + xlUrl + "/CMS/Front/prestashopcart.aspx?CustomerId=" + xlCustomerId.xlCustomerId + "&CartId=" + xlCartId.xlCartId + "&Color=" + couleur + "' ";
                iframe += "frameborder=\"0\"></iframe>";
                iframe += "<div>";
                iframe += "<br><br>";


                containingDiv.after(iframe);
            }
        }
    });

    if (xlShowMap != 1) {
        var iFrameMap = document.getElementById('mapDiv');
        if (iFrameMap != null) {
            iFrameMap.parentNode.removeChild(iFrameMap);
        }
    }
}



function xlDisplayMapCustom() {
    var xlDeliveryOptions = document.querySelectorAll('[id^="delivery_option"]');
    var xlShowMap = 0;
    [].forEach.call(xlDeliveryOptions, function (div) {
        document.addEventListener('click', function (e) {
            if (e.target && e.target.id == div.id) {
                xlDisplayMapCustom();
            }
        });
        if (div.checked) {
            var containingDiv = null;
            var nbrParents = parseInt(xlPickupPointDiv.xlPickupPointDiv);

            if (nbrParents) {
                containingDiv = $(div).parents().eq(nbrParents);
            }
            else {
                containingDiv = $(div).parents().eq(5);
            }
            var CrossDeliveryIds = xlPickupPointCarriers.xlPickupPointCarriers.split(';');
            var arrayLength = CrossDeliveryIds.length;
            var DelivOptions = [];
            for (var i = 0; i < arrayLength; i++) {
                DelivOptions.push(CrossDeliveryIds[i] + ',');
            }


            if (DelivOptions.indexOf($(div).attr('value')) != -1) {
                //(div.getAttribute("value") == xlPptCarriers + ",") {

                xlShowMap = 1;
                var iFrameMap = document.getElementById('mapDiv');

                if (iFrameMap != null) {

                    iFrameMap.parentNode.removeChild(iFrameMap);
                }
                var height = "430";

                try {
                    if (document.getElementById('delivery').offsetWidth < 700) {
                        height = "680";
                    }
                }
                catch (err)
                { }
                try {
                    if (document.getElementById('checkout-delivery-step').offsetWidth < 700) {
                        height = "680";
                    }
                }
                catch (err)
                { }

                var couleur = xlPickupPointBtnColor.xlPickupPointBtnColor;
                if (!couleur) {
                    couleur = 'd23c7c';
                }
                var iframe = "<div id='mapDiv' class='order_carrier_content box' style='border-top:0px;'>";
                iframe += "Cliquez sur l'un des num\351ros disponibles ci-dessous.<br>Le point relais affich\351 est celui O\371 sera effectu\351e la livraison.<br><br>";
                iframe += "<iframe style='border:1px solid #CCCCCC;' id='iFrameMap' width='100%' height='" + height + "' ";
                iframe += "src='" + xlUrl + "/CMS/Front/prestashopcart.aspx?CustomerId=" + xlCustomerId.xlCustomerId + "&CartId=" + xlCartId.xlCartId + "&Color=" + couleur + "&CARRIER=90,89" + "' ";
                iframe += "frameborder=\"0\"></iframe>";
                iframe += "<div>";
                iframe += "<br><br>";


                containingDiv.after(iframe);
            }
        }
    });

    if (xlShowMap != 1) {
        var iFrameMap = document.getElementById('mapDiv');
        if (iFrameMap != null) {
            iFrameMap.parentNode.removeChild(iFrameMap);
        }
    }
}




function xlBuildCustomerOrderDetails() {
    var xlHtmlDetail;
    xlHtmlDetail = "<div id =\"xlPointRelais\" class=\"addresses\">";
    xlHtmlDetail += "<div class=\"col-lg-12 col-md-12 col-sm-12\">";
    xlHtmlDetail += "<article id=\"point-relais\" class=\"box\">";
    xlHtmlDetail += "<h4>Point relais de livraison</h4>";
    xlHtmlDetail += "<address>";
    xlHtmlDetail += "<iframe id=\"iFrameMap\" width=\"100%\" height=\"270\"  frameborder=\"0\" ";
    xlHtmlDetail += "src=\"" + xlUrl + "/cms/back/selectedPPT.aspx?ID_COMMANDE=" + xlGetUrlVars()["id_order"] + "&ID_CLIENT=" + xlCustomerId.xlCustomerId + "\">";
    xlHtmlDetail += "</iframe>";
    xlHtmlDetail += "</address>";
    xlHtmlDetail += "</article>";
    xlHtmlDetail += "</div>";
    xlHtmlDetail += "<div class=\"clearfix\"></div>";
    xlHtmlDetail += "</div>";

    $("#xlPointRelais").remove();
    $(xlHtmlDetail).insertAfter(".adresses_bloc");
}

function xlFullscreen() {

    var modalDiv = "<div id=\"xlModal\" style=\"position:fixed;top:0;bottom:0;background-color:rgba(0,0,0,.8);left:0;right:0;z-index:3000;\">";
    modalDiv += "<div id=\"xlModalInner\" style=\"padding:18px;margin:80px;height:1080px;background-color:#F1F1F1;text-align:left;z-index:3001;border-radius:6px;border:1px solid #666666;\">";
    modalDiv += "<div style='float:right;font-weight:bold;font-size:22px;'  onclick=\"$('#xlModal').remove();\"><a href='#'>X</a>&nbsp;&nbsp;</div>";
    modalDiv += "<div style=\"align:left;\"><h2>Crosslog Tools</h2>";
    modalDiv += "";
    modalDiv += "";
    modalDiv += "";
    modalDiv += "";
    modalDiv += "";
    modalDiv += "";
    modalDiv += "</div>";
    modalDiv += "</div>";
    modalDiv += "</div>";
    window.scrollTo(0, 0);
    $("#header").append(modalDiv);
}

function xlBuildAdminOrderDetails() {

    var xlErrorState = 0;
    if (IsCrosslogErrorState.IsCrosslogErrorState) {
        xlErrorState = 1;
    }
    /*
    var iframe = "<iframe id='iFrameTools' width='100%' height='260' ";
    iframe += "src='" + xlUrl + "/CMS/Back/Toolbar.aspx?IS_FLOW_ERROR=" + xlErrorState + "&ID_CLIENT=" + xlCustomerId.xlCustomerId + "&ID_COMMANDE=" + xlOrderId.xlOrderId + "&ID_REFERENCE=" + xlOrderReference.xlOrderReference + "&Color=d23c7c' ";
    iframe += "frameborder=\"0\"></iframe>";
 
	if (xlParameter3.xlParameter3!="0")
    {
		var xlHtmlAdmin = "";
		xlHtmlAdmin = "<div id=\"xlFrame\" class=\"panel\">";
		xlHtmlAdmin += "<div class=\"panel-heading\">";
		xlHtmlAdmin += "<i class=\"icon-exchange\"></i> ";
		xlHtmlAdmin += "Crosslog";
		if (xlParameter4.xlParameter4 == "DebugMode=1") {
			xlHtmlAdmin += "<div style='float:right;' onclick=\"xlFullscreen();\"><a href='#' style=\"font-size:12px;\">Outils</a>&nbsp;&nbsp;</div>";
		}
		xlHtmlAdmin += "</div>";
		xlHtmlAdmin += "<div class=\"row\">";
		xlHtmlAdmin += iframe;
		xlHtmlAdmin += "</div>";
		xlHtmlAdmin += "</div>";

		$("#xlFrame").remove();
		$(".col-lg-5").prepend(xlHtmlAdmin);
	} */
    var xlPSOrderCarrierReference = xlOrderCarrierReference.xlOrderCarrierReference;
    xlPptCarriers = xlPickupPointCarriers.xlPickupPointCarriers;

    if (xlPptCarriers)
        if (xlPptCarriers.split(";").includes(xlPSOrderCarrierReference)) {
            var xlHtmlPointRelais = "";
            xlHtmlPointRelais += "<h4>POINT RELAIS DE LIVRAISON :</h4>";
            xlHtmlPointRelais += "<iframe id=\"iFrameMap\" frameborder=\"0\" width=\"100%\" height=\"268\" border=\"0\"  ";
            xlHtmlPointRelais += " src=\"" + xlUrl + "/cms/back/selectedPPT.aspx?ID_COMMANDE=" + xlOrderId.xlOrderId + "&ID_CLIENT=" + xlCustomerId.xlCustomerId + "\">";
            xlHtmlPointRelais += " </iframe>";

            $("#shipping").append("<hr>" + xlHtmlPointRelais);
        }
}

function xlGetUrlVars() {
    var xlQs = [],
        xlHash;
    var xlHashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < xlHashes.length; i++) {
        xlHash = xlHashes[i].split('=');
        xlQs.push(xlHash[0]);
        xlQs[xlHash[0]] = xlHash[1];
    }
    return xlQs;
}

function xlDisplayMapWithPrevent() {
    var xlDeliveryOptions = document.querySelectorAll('[id^="delivery_option"]');
    var xlShowMap = 0;
    [].forEach.call(xlDeliveryOptions, function (div) {
        document.addEventListener('click', function (e) {
            if (e.target && e.target.id == div.id) {
                event.preventDefault();
                xlDisplayMap();
            }
        });
        if (div.checked) {
            var containingDiv = null;
            var nbrParents = parseInt(xlPickupPointDiv.xlPickupPointDiv);

            if (nbrParents) {
                containingDiv = $(div).parents().eq(nbrParents);
            }
            else {
                containingDiv = $(div).parents().eq(5);
            }
            var CrossDeliveryIds = xlPickupPointCarriers.xlPickupPointCarriers.split(';');
            var arrayLength = CrossDeliveryIds.length;
            var DelivOptions = [];
            for (var i = 0; i < arrayLength; i++) {
                DelivOptions.push(CrossDeliveryIds[i] + ',');
            }


            if (DelivOptions.indexOf($(div).attr('value')) != -1) {
                xlShowMap = 1;
                var iFrameMap = document.getElementById('mapDiv');

                if (iFrameMap != null) {

                    iFrameMap.parentNode.removeChild(iFrameMap);
                }
                var height = "430";

                var couleur = xlPickupPointBtnColor.xlPickupPointBtnColor;
                if (!couleur) {
                    couleur = 'd23c7c';
                }
                var iframe = "<div id='mapDiv' class='order_carrier_content box' style='border-top:0px;'>";
                iframe += "Cliquez sur l'un des num\351ros disponibles ci-dessous.<br>Le point relais affich\351 est celui O\371 sera effectu\351e la livraison.<br><br>";
                iframe += "<iframe style='border:1px solid #CCCCCC;' id='iFrameMap' width='100%' height='" + height + "' ";
                iframe += "src='" + xlUrl + "/CMS/Front/prestashopcart.aspx?CustomerId=" + xlCustomerId.xlCustomerId + "&CartId=" + xlCartId.xlCartId + "&Color=" + couleur + "' ";
                iframe += "frameborder=\"0\"></iframe>";
                iframe += "<div>";
                iframe += "<br><br>";


                containingDiv.after(iframe);
            }
        }
    });

    if (xlShowMap != 1) {
        var iFrameMap = document.getElementById('mapDiv');
        if (iFrameMap != null) {
            iFrameMap.parentNode.removeChild(iFrameMap);
        }
    }
}


function xlDisplayMapCommandRapid() {
    var xlDeliveryOptions = document.querySelectorAll('[id^="delivery_option"]');
    var xlShowMap = 0;
    [].forEach.call(xlDeliveryOptions, function (div) {
        if (div.checked) {
            var containingDiv = null;
            var nbrParents = parseInt(xlPickupPointDiv.xlPickupPointDiv);

            if (nbrParents) {
                containingDiv = $(div).parents().eq(nbrParents);
            }
            else {
                containingDiv = $(div).parents().eq(5);
            }
            var CrossDeliveryIds = xlPickupPointCarriers.xlPickupPointCarriers.split(';');
            var arrayLength = CrossDeliveryIds.length;
            var DelivOptions = [];
            for (var i = 0; i < arrayLength; i++) {
                DelivOptions.push(CrossDeliveryIds[i] + ',');
            }


            if (DelivOptions.indexOf($(div).attr('value')) != -1) {
                if (document.getElementById('postcode') != null && document.getElementById('city') != null) {
                    if (document.getElementById('postcode').value == "" && document.getElementById('city').value == "") {
                        var addressError = "<div id='iFrameMap' style='box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);background-color: #ff3547;color: #fff;padding: .84rem 2.14rem;font-size: .81rem;border: 0;border-radius: 2px;font-size:16px'>Veuillez renseigner vos coordonn&eacute;es puis valider afin d'afficher la carte des points relais disponibles.</div>";
                        var iFrameError = document.getElementById('iFrameMap');
                        if (iFrameError == null) {
                            containingDiv.after(addressError);
                        }
                    }
                } else {
                    xlShowMap = 1;
                    var iFrameMap = document.getElementById('mapDiv');

                    if (iFrameMap != null) {

                        iFrameMap.parentNode.removeChild(iFrameMap);
                    }
                    var height = "430";

                    try {
                        if (document.getElementById('carrier_area').offsetWidth < 700) {
                            height = "680";
                        }
                    }
                    catch (err)
                    { }
                    try {
                        if (document.getElementById('checkout-delivery-step').offsetWidth < 700) {
                            height = "680";
                        }
                    }
                    catch (err)
                    { }

                    var couleur = xlPickupPointBtnColor.xlPickupPointBtnColor;
                    if (!couleur) {
                        couleur = 'd23c7c';
                    }
                    var iframe = "<div id='mapDiv' class='order_carrier_content box' style='border-top:0px;'>";
                    iframe += "Cliquez sur l'un des num\351ros disponibles ci-dessous.<br>Le point relais affich\351 est celui O\371 sera effectu\351e la livraison.<br><br>";
                    iframe += "<iframe style='border:1px solid #CCCCCC;' id='iFrameMap' width='100%' height='" + height + "' ";
                    iframe += "src='" + xlUrl + "/CMS/Front/prestashopcart.aspx?CustomerId=" + xlCustomerId.xlCustomerId + "&CartId=" + xlCartId.xlCartId + "&Color=" + couleur + "' ";
                    iframe += "frameborder=\"0\"></iframe>";
                    iframe += "<div>";
                    iframe += "<br><br>";


                    containingDiv.after(iframe);

                }
            }
        }
    });

    if (xlShowMap != 1) {
        var iFrameMap = document.getElementById('mapDiv');
        if (iFrameMap != null) {
            iFrameMap.parentNode.removeChild(iFrameMap);
        }
    }
}
function xlDisplayMapCommandRapidGaya() {
    var xlDeliveryOptions = document.querySelectorAll('[id^="delivery_option"]');
    var xlShowMap = 0;
    [].forEach.call(xlDeliveryOptions, function (div) {
        if (div.parentNode.className == "checked") {
            var containingDiv = null;
            var nbrParents = parseInt(xlPickupPointDiv.xlPickupPointDiv);

            if (nbrParents) {
                containingDiv = $(div).parents().eq(nbrParents);
            }
            else {
                containingDiv = $(div).parents().eq(5);
            }
            var CrossDeliveryIds = xlPickupPointCarriers.xlPickupPointCarriers.split(';');
            var arrayLength = CrossDeliveryIds.length;
            var DelivOptions = [];
            for (var i = 0; i < arrayLength; i++) {
                DelivOptions.push(CrossDeliveryIds[i] + ',');
            }


            if (DelivOptions.indexOf($(div).attr('value')) != -1) {
                if (document.getElementById('postcode') != null && document.getElementById('city') != null) {
                    if (document.getElementById('postcode').value == "" && document.getElementById('city').value == "") {
                        var addressError = "<div id='iFrameMap' style='box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);background-color: #ff3547;color: #fff;padding: .84rem 2.14rem;font-size: .81rem;border: 0;border-radius: 2px;font-size:16px'>Veuillez renseigner vos coordonn&eacute;es puis valider afin d'afficher la carte des points relais disponibles.</div>";
                        var iFrameError = document.getElementById('iFrameMap');
                        if (iFrameError == null) {
                            containingDiv.after(addressError);
                        }
                    }
                } else {
                    xlShowMap = 1;
                    var iFrameMap = document.getElementById('mapDiv');

                    if (iFrameMap != null) {

                        iFrameMap.parentNode.removeChild(iFrameMap);
                    }
                    var height = "430";

                    try {
                        if (document.getElementById('carrier_area').offsetWidth < 700) {
                            height = "680";
                        }
                    }
                    catch (err)
                    { }
                    try {
                        if (document.getElementById('checkout-delivery-step').offsetWidth < 700) {
                            height = "680";
                        }
                    }
                    catch (err)
                    { }

                    var couleur = xlPickupPointBtnColor.xlPickupPointBtnColor;
                    if (!couleur) {
                        couleur = 'd23c7c';
                    }
                    var iframe = "<div id='mapDiv' class='order_carrier_content box' style='border-top:0px;'>";
                    iframe += "Cliquez sur l'un des num\351ros disponibles ci-dessous.<br>Le point relais affich\351 est celui O\371 sera effectu\351e la livraison.<br><br>";
                    iframe += "<iframe style='border:1px solid #CCCCCC;' id='iFrameMap' width='100%' height='" + height + "' ";
                    iframe += "src='" + xlUrl + "/CMS/Front/prestashopcart.aspx?CustomerId=" + xlCustomerId.xlCustomerId + "&CartId=" + xlCartId.xlCartId + "&Color=" + couleur + "' ";
                    iframe += "frameborder=\"0\"></iframe>";
                    iframe += "<div>";
                    iframe += "<br><br>";


                    containingDiv.after(iframe);

                }
            }
        }
    });

    if (xlShowMap != 1) {
        var iFrameMap = document.getElementById('mapDiv');
        if (iFrameMap != null) {
            iFrameMap.parentNode.removeChild(iFrameMap);
        }
    }
}
function xlBuildCustomerOrderDetailsOrderHistory(IdClient) {

    $('.btn.btn-default.button.button-small').on('click', function () {
        var href = $('.btn.btn-default.button.button-small').attr('href');
        var OrderId = href.substring(
            href.lastIndexOf("javascript:showOrder(1, ") + ("javascript:showOrder(1, ").length,
            href.lastIndexOf(", 'https://")
        );
        var xlHtmlDetail;
        xlHtmlDetail = "<div id =\"xlPointRelais\" class=\"addresses\">";
        xlHtmlDetail += "<div class=\"col-lg-12 col-md-12 col-sm-12\">";
        xlHtmlDetail += "<article id=\"point-relais\" class=\"box\">";
        xlHtmlDetail += "<h4>Point relais de livraison</h4>";
        xlHtmlDetail += "<address>";
        xlHtmlDetail += "<iframe id=\"iFrameMap\" width=\"100%\" height=\"270\"  frameborder=\"0\" ";
        xlHtmlDetail += "src=\"" + xlUrl + "/cms/back/selectedPPT.aspx?ID_COMMANDE=" + OrderId + "&ID_CLIENT=" + IdClient + "\">";
        xlHtmlDetail += "</iframe>";
        xlHtmlDetail += "</address>";
        xlHtmlDetail += "</article>";
        xlHtmlDetail += "</div>";
        xlHtmlDetail += "<div class=\"clearfix\"></div>";
        xlHtmlDetail += "</div>";

        function ShowSelectedPPT() {
            $("#xlPointRelais").remove();
            $(xlHtmlDetail).insertAfter(".adresses_bloc");
        }
        setTimeout(ShowSelectedPPT, 1000);

    });
}


function xlDisplayMapBeta() {
    var xlDeliveryOptions = document.querySelectorAll('[id^="delivery_option"]');
    var xlShowMap = 0;
    [].forEach.call(xlDeliveryOptions, function (div) {
        document.addEventListener('click', function (e) {
            if (e.target && e.target.id == div.id) {
                xlDisplayMapBeta();
            }
        });
        if (div.checked) {
            var containingDiv = null;
            var nbrParents = parseInt(xlPickupPointDiv.xlPickupPointDiv);

            if (nbrParents) {
                containingDiv = $(div).parents().eq(nbrParents);
            }
            else {
                containingDiv = $(div).parents().eq(5);
            }
            var CrossDeliveryIds = xlPickupPointCarriers.xlPickupPointCarriers.split(';');
            var arrayLength = CrossDeliveryIds.length;
            var DelivOptions = [];
            for (var i = 0; i < arrayLength; i++) {
                DelivOptions.push(CrossDeliveryIds[i] + ',');
            }


            if (DelivOptions.indexOf($(div).attr('value')) != -1) {
                xlShowMap = 1;
                var iFrameMap = document.getElementById('mapDiv');

                if (iFrameMap != null) {

                    iFrameMap.parentNode.removeChild(iFrameMap);
                }
                var height = "430";

                try {
                    if (document.getElementById('delivery').offsetWidth < 700) {
                        height = "680";
                    }
                }
                catch (err)
                { }
                try {
                    if (document.getElementById('checkout-delivery-step').offsetWidth < 700) {
                        height = "680";
                    }
                }
                catch (err)
                { }

                    var CrossJSONConfig_ = xlPickupPointBtnColor.xlPickupPointBtnColor;
                    var str = CrossJSONConfig_.replace(/\'/g, '"');
                    var CrossJSONConfig = JSON.parse(str);
                    var couleur = 'd23c7c';

                    if (!CrossJSONConfig['COLOR']) {
                        couleur = 'd23c7c';
                    }
                    else {
                        couleur = CrossJSONConfig['COLOR'];
                    }

                    var picker = 'picker';
                    if (!CrossJSONConfig['PICKER']) {
                        picker = 'picker';
                    }
                    else {
                        picker = CrossJSONConfig['PICKER'];
                        height = "280";
                    }
                    if (!couleur) {
                        couleur = 'd23c7c';
                    }
                    var CARRIERCODE = '';
                    if (!CrossJSONConfig[$(div).attr('value')]) {
                        CARRIERCODE = '';
                    }
                    else {
                        CARRIERCODE = CrossJSONConfig[$(div).attr('value')];
                    }

                var iframe = "<div id='mapDiv' class='order_carrier_content box' style='border-top:0px;'>";
                if (picker === 'picker') {
                    iframe += "Cliquez sur l'un des num\351ros disponibles ci-dessous.<br>Le point relais affich\351 est celui o\371 sera effectu\351e la livraison.<br><br>";
                }
                else {
                    iframe += "Cliquez sur l'un des points relais disponibles ci-dessous.<br>Le point relais s\351lection\351 est celui o\371 sera effectu\351e la livraison.<br><br>";
                }
                iframe += "<iframe style='border:1px solid #CCCCCC;' id='iFrameMap' width='100%' height='" + height + "' ";
                iframe += "src='" + xlUrl + "/CMS/Front/prestashopcart.aspx?CustomerId=" + xlCustomerId.xlCustomerId + "&CartId=" + xlCartId.xlCartId + "&Color=" + couleur;
                if (CARRIERCODE != '') {
                    iframe += "&CARRIER=" + CARRIERCODE;
                }
                if (picker != 'picker') {
                    iframe += "&PICKERTYPE=" + picker;
                }
                iframe += "' ";
                iframe += "frameborder=\"0\"></iframe>";
                iframe += "<div>";
                iframe += "<br><br>";
                containingDiv.after(iframe);

            }
        }
    });

    if (xlShowMap != 1) {
        var iFrameMap = document.getElementById('mapDiv');
        if (iFrameMap != null) {
            iFrameMap.parentNode.removeChild(iFrameMap);
        }
    }
}

function xlDisplayMapCommandRapidBeta() {
    var xlDeliveryOptions = document.querySelectorAll('[id^="delivery_option"]');
    var xlShowMap = 0;
    [].forEach.call(xlDeliveryOptions, function (div) {
        if (div.checked) {
            var containingDiv = null;
            var nbrParents = parseInt(xlPickupPointDiv.xlPickupPointDiv);

            if (nbrParents) {
                containingDiv = $(div).parents().eq(nbrParents);
            }
            else {
                containingDiv = $(div).parents().eq(5);
            }
            var CrossDeliveryIds = xlPickupPointCarriers.xlPickupPointCarriers.split(';');
            var arrayLength = CrossDeliveryIds.length;
            var DelivOptions = [];
            for (var i = 0; i < arrayLength; i++) {
                DelivOptions.push(CrossDeliveryIds[i] + ',');
            }


            if (DelivOptions.indexOf($(div).attr('value')) != -1) {
                if (document.getElementById('postcode') != null && document.getElementById('city') != null) {
                    if (document.getElementById('postcode').value == "" && document.getElementById('city').value == "") {
                        var addressError = "<div id='iFrameMap' style='box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);background-color: #ff3547;color: #fff;padding: .84rem 2.14rem;font-size: .81rem;border: 0;border-radius: 2px;font-size:16px'>Veuillez renseigner vos coordonn&eacute;es puis valider afin d'afficher la carte des points relais disponibles.</div>";
                        var iFrameError = document.getElementById('iFrameMap');
                        if (iFrameError == null) {
                            containingDiv.after(addressError);
                        }
                    }
                } else {
                    xlShowMap = 1;
                    var iFrameMap = document.getElementById('mapDiv');

                    if (iFrameMap != null) {

                        iFrameMap.parentNode.removeChild(iFrameMap);
                    }
                    var height = "430";

                    try {
                        if (document.getElementById('carrier_area').offsetWidth < 700) {
                            height = "680";
                        }
                    }
                    catch (err)
                    { }
                    try {
                        if (document.getElementById('checkout-delivery-step').offsetWidth < 700) {
                            height = "680";
                        }
                    }
                    catch (err)
                    { }

                    var CrossJSONConfig_ = xlPickupPointBtnColor.xlPickupPointBtnColor;
                    var str = CrossJSONConfig_.replace(/\'/g, '"');
                    var CrossJSONConfig = JSON.parse(str);
                    var couleur = 'd23c7c';

                    if (!CrossJSONConfig['COLOR']) {
                        couleur = 'd23c7c';
                    }
                    else {
                        couleur = CrossJSONConfig['COLOR'];
                    }

                    var picker = 'picker';
                    if (!CrossJSONConfig['PICKER']) {
                        picker = 'picker';
                    }
                    else {
                        picker = CrossJSONConfig['PICKER'];
                        height = "280";
                    }
                    if (!couleur) {
                        couleur = 'd23c7c';
                    }
                    var CARRIERCODE = '';
                    if (!CrossJSONConfig[DelivOptions[DelivOptions.indexOf($(div).attr('id'))]]) {
                        CARRIERCODE = '';
                    }
                    else {
                        CARRIERCODE = CrossJSONConfig[DelivOptions[DelivOptions.indexOf($(div).attr('id'))]];
                    }
                    var iframe = "<div id='mapDiv' class='order_carrier_content box' style='border-top:0px;'>";
                    if (picker === 'picker') {
                        iframe += "Cliquez sur l'un des num\351ros disponibles ci-dessous.<br>Le point relais affich\351 est celui o\371 sera effectu\351e la livraison.<br><br>";
                    }
                    else {
                        iframe += "Cliquez sur l'un des points relais disponibles ci-dessous.<br>Le point relais s\351lection\351 est celui o\371 sera effectu\351e la livraison.<br><br>";
                    }
                    iframe += "<iframe style='border:1px solid #CCCCCC;' id='iFrameMap' width='100%' height='" + height + "' ";
                    iframe += "src='" + xlUrl + "/CMS/Front/prestashopcart.aspx?CustomerId=" + xlCustomerId.xlCustomerId + "&CartId=" + xlCartId.xlCartId + "&Color=" + couleur;
                    if (CARRIERCODE != '') {
                        iframe += "&CARRIER=" + CARRIERCODE;
                    }
                    if (picker != 'picker') {
                        iframe += "&PICKERTYPE=" + picker;
                    }
                    iframe += "' ";
                    iframe += "frameborder=\"0\"></iframe>";
                    iframe += "<div>";
                    iframe += "<br><br>";
                    containingDiv.after(iframe);
                }
            }
        }
    });

    if (xlShowMap != 1) {
        var iFrameMap = document.getElementById('mapDiv');
        if (iFrameMap != null) {
            iFrameMap.parentNode.removeChild(iFrameMap);
        }
    }
}





function xlDisplayMapCustomNines() {
    var xlDeliveryOptions = document.querySelectorAll('[id^="delivery_option"]');
    var xlShowMap = 0;
    [].forEach.call(xlDeliveryOptions, function (div) {
        document.addEventListener('click', function (e) {
            if (e.target && e.target.id == div.id) {
                xlDisplayMapCustomNines();
            }
        });
        if (div.checked) {
            var containingDiv = null;
            var nbrParents = parseInt(xlPickupPointDiv.xlPickupPointDiv);

            if (nbrParents) {
                containingDiv = $(div).parents().eq(nbrParents);
            }
            else {
                containingDiv = $(div).parents().eq(5);
            }
            var CrossDeliveryIds = xlPickupPointCarriers.xlPickupPointCarriers.split(';');
            var arrayLength = CrossDeliveryIds.length;
            var DelivOptions = [];
            for (var i = 0; i < arrayLength; i++) {
                DelivOptions.push(CrossDeliveryIds[i] + ',');
            }
            if (DelivOptions.indexOf($(div).attr('value')) != -1) {
                xlShowMap = 1;
                var iFrameMap = document.getElementById('mapDiv');

                if (iFrameMap != null) {

                    iFrameMap.parentNode.removeChild(iFrameMap);
                }
                var height = "430";

                try {
                    if (document.getElementById('delivery').offsetWidth < 700) {
                        height = "680";
                    }
                }
                catch (err)
                { }
                try {
                    if (document.getElementById('checkout-delivery-step').offsetWidth < 700) {
                        height = "680";
                    }
                }
                catch (err)
                { }

                var couleur = xlPickupPointBtnColor.xlPickupPointBtnColor;
                if (!couleur) {
                    couleur = 'd23c7c';
                }
                var iframe = "";
                console.log("Here : "+ $(div).parents().eq(2).siblings(".delivery_option_desc").text().toLowerCase());

                if($(div).parents().eq(2).siblings(".delivery_option_desc").text()!=""){

                    if($(div).parents().eq(2).siblings(".delivery_option_desc").text().toLowerCase().includes("Colissimo Point Retrait".toLowerCase())){
                        iframe = "<div id='mapDiv' class='order_carrier_content box' style='border-top:0px;'>";
                        iframe += "Cliquez sur l'un des num\351ros disponibles ci-dessous.<br>Le point relais affich\351 est celui O\371 sera effectu\351e la livraison.<br><br>";
                        iframe += "<iframe style='border:1px solid #CCCCCC;' id='iFrameMap' width='100%' height='" + height + "' ";
                        iframe += "src='" + xlUrl + "/CMS/Front/prestashopcart.aspx?CustomerId=" + xlCustomerId.xlCustomerId + "&CartId=" + xlCartId.xlCartId + "&Color=" + couleur + "&CARRIER=90,89" + "' ";
                        iframe += "frameborder=\"0\"></iframe>";
                        iframe += "<div>";
                        iframe += "<br><br>";
                    }
                    else if($(div).parents().eq(2).siblings(".delivery_option_desc").text().toLowerCase().includes("Chrono Relais".toLowerCase())){
    
                        iframe = "<div id='mapDiv' class='order_carrier_content box' style='border-top:0px;'>";
                        iframe += "Cliquez sur l'un des num\351ros disponibles ci-dessous.<br>Le point relais affich\351 est celui O\371 sera effectu\351e la livraison.<br><br>";
                        iframe += "<iframe style='border:1px solid #CCCCCC;' id='iFrameMap' width='100%' height='" + height + "' ";
                        iframe += "src='" + xlUrl + "/CMS/Front/prestashopcart.aspx?CustomerId=" + xlCustomerId.xlCustomerId + "&CartId=" + xlCartId.xlCartId + "&Color=" + couleur + "&CARRIER=66" + "' ";
                        iframe += "frameborder=\"0\"></iframe>";
                        iframe += "<div>";
                        iframe += "<br><br>";
                    }
                    else{
                        iframe = "<div id='mapDiv' class='order_carrier_content box' style='border-top:0px;'>";
                        iframe += "Cliquez sur l'un des num\351ros disponibles ci-dessous.<br>Le point relais affich\351 est celui O\371 sera effectu\351e la livraison.<br><br>";
                        iframe += "<iframe style='border:1px solid #CCCCCC;' id='iFrameMap' width='100%' height='" + height + "' ";
                        iframe += "src='" + xlUrl + "/CMS/Front/prestashopcart.aspx?CustomerId=," + xlCustomerId.xlCustomerId + "&CartId=" + xlCartId.xlCartId + "&Color=" + couleur + "' ";
                        iframe += "frameborder=\"0\"></iframe>";
                        iframe += "<div>";
                        iframe += "<br><br>";
                    }
                }
		else{
			        thisTimeout = setTimeout(function () {
            myFunction();
        }, 1000);}


                containingDiv.after(iframe);
            }
        }
    });

    if (xlShowMap != 1) {
        var iFrameMap = document.getElementById('mapDiv');
        if (iFrameMap != null) {
            iFrameMap.parentNode.removeChild(iFrameMap);
        }
    }
}


var done = false;
var thisTimeout = setTimeout(function () {
    myFunction();
}, 1000);

if (document.getElementById('mapDiv')==null) {
    myFunction();
}
function myFunction() {
    clearTimeout(thisTimeout);
    done = true;
    init();
}
