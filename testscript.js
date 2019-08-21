define([
    'jquery',
    'ko',
    'uiComponent',
    'Magento_Checkout/js/model/quote',
    'domReady'
], function ($, ko, Component, quote) {
    'use strict';
    return Component.extend({
        defaults: {
            template: 'Crosslog_Pointrelais/view/checkout/shipping/CartCrosslog'
        },
        initObservable: function () {
            this.selectedMethod = ko.computed(function () {
                var method = quote.shippingMethod();
                var selectedMethod = method != null ? method.method_code : null;
                return selectedMethod;
            }, this);
            return this;
        },
        getFrame: function () {
            var address = quote.shippingAddress();
            var zipcode = (address.postcode);
            var city = (address.city);
            var countryid = (address.countryId);
            var idClient = window.checkoutConfig.clientId.clientId;
            var objet = window.checkoutConfig.point.relais ;
            var shippingmethods = [];

            for (var key in objet) {
                var x = objet[key];
                shippingmethods.push(x);

              }
            //var idCommande = 'TestToken2';
            var idCommande = $('#crossQuote').text();
            var method = quote.shippingMethod();
            var selectedMethodcode = method != null ? method.method_code : null;
            var selectedCarriercode = method != null ? method.carrier_code : null;

            var frame = "";

                var selectedMethod = selectedCarriercode+"_"+ selectedMethodcode ;
                var indexship = shippingmethods.indexOf(selectedMethod);
                var nbrparents = Number(window.checkoutConfig.nbrparents.nbrparents);
                var couleur = window.checkoutConfig.couleur.couleur;
                if(!couleur){
                    couleur='d23c7c';
                }
                frame = `<div id='mapDiv' class='order_carrier_content box' style='border-top:0px;'> 
                Cliquez sur l'un des numéros disponibles ci-dessous.<br>Le point relais affiché est celui ou sera effectuée la livraison.<br><br>
                <iframe  style='border:1px solid #CCCCCC;' id="CrossMap" title="Inline Frame Example" width="100%" height="430" src="http://wscartography.crossdesk.com/CMS/Front/picker.aspx?ID_COMMANDE=${idCommande}&ID_CLIENT=${idClient}&QUERY=${zipcode}+${city}&COUNTRY=${countryid}&Color=${couleur}">
                frameborder="0">
                </iframe>
                <div><br><br>`;
                
                if ($(`#mapDiv`).length)
                    $(`#mapDiv`).remove();
                if (indexship != -1) {
                var checkExist = setInterval(function () {
                    if ($("#mapDiv").length == 0) {

                        if(nbrparents)
                            {
                            jQuery(".radio[value='"+selectedMethod+"']").parents().eq(nbrparents).after(frame);
                            if ($("#mapDiv").length != 0) {
                                clearInterval(checkExist);}
                            }
                        else{
                            clearInterval(checkExist);
                        }
                    }
                }, 100);
            }
        if(window.checkoutConfig.lienDuFichierScript.lienDuFichierScript)
            {
                jQuery("head").append('<script type="text/javascript" src="' + window.checkoutConfig.lienDuFichierScript.lienDuFichierScript + '"></script>');
            }
        if(nbrparents)
        return "";
        else if(!nbrparents && indexship != -1)
        {
            return frame;

        }

        },
    });
});

