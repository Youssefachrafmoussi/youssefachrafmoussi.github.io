
  var swapped = 0 ; 
  function swapDom(a,b) 
{
     var aParent = a.parentNode;
     var bParent = b.parentNode;

     var aHolder = document.createElement("div");
     var bHolder = document.createElement("div");

     aParent.replaceChild(aHolder,a);
     bParent.replaceChild(bHolder,b);

     aParent.replaceChild(b,aHolder);
     bParent.replaceChild(a,bHolder);    
}
$(document).ready(function () {
$(window).resize(function () {

  if ($(window).width() < 996) {
    $('#HorizontalProgressBar').hide();
    $('#VerticalProgressBar').show();
  } else {

    $('#HorizontalProgressBar').show();
    $('#VerticalProgressBar').hide();
  }

  if ($(window).width() < 840) {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    $('#ProductsSupportingText').css('max-height','');

    var BarreHHolder = document.getElementById('BarreHHolder');
    var TransporterVHolder = document.getElementById('TransporterVHolder');
    var ProduitsCommandeHHolder = document.getElementById('ProduitsCommandeHHolder');
    if(swapped==0){
    swapDom(ProduitsCommandeHHolder,BarreHHolder);
    swapDom(ProduitsCommandeHHolder,TransporterVHolder);
    swapped=1;
    }
    $('#home-button').css('margin-right','0px');
    $('#truck-button').css('margin-right','0px');
    $('#list-button').css('margin-right','0px');
    $('#home-button').css('visibility','visible');
    $('#truck-button').css('visibility','visible');
    $('#list-button').css('visibility','visible');

    $( "#home-button" ).click(function() {
      document.getElementById('BarreHHolder').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $( "#truck-button" ).click(function() {
      document.getElementById('TransporterVHolder').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
    $( "#list-button" ).click(function() {
      document.getElementById('ProduitsCommandeHHolder').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });

  } else {
    $('#home-button').css('visibility','hidden');
    $('#truck-button').css('visibility','hidden');
    $('#list-button').css('visibility','hidden');
    $('#ProductsSupportingText').css('max-height','150px');

    var BarreHHolder = document.getElementById('BarreHHolder');
    var TransporterVHolder = document.getElementById('TransporterVHolder');
    var ProduitsCommandeHHolder = document.getElementById('ProduitsCommandeHHolder');

    if(swapped==1){
    swapDom(ProduitsCommandeHHolder,TransporterVHolder);
    swapDom(ProduitsCommandeHHolder,BarreHHolder);
    swapped=0;
    }

    $('#HorizontalProgressBar').show();
    $('#VerticalProgressBar').hide();
  }

});
$(window).trigger('resize');
  

});
$(window).on('load', function(){
var width = document.getElementById('MapHeader').offsetWidth;
if(width<700){
  document.getElementById("iFrameMap").style.height="640px";
  }
else{
  document.getElementById("iFrameMap").style.height="430px";
    }

if(document.getElementById("iFrameMap").src.includes("Delivery")){
  document.getElementById("iFrameMap").scrolling='no';
}
else{
  document.getElementById("iFrameMap").scrolling='yes';
}
alert($("span:contains('Merge')").length);
});