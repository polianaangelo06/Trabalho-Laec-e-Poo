$(".btn-menu").click(function(){
	$(".menu").show();
});

$(".btn-close").click(function(){
	$(".menu").hide();
});

  // fechar menu ao clicar no nav //
  $('nav').focusout(function(){
    setTimeout(function(){
      var el = $(document.activeElement);
      if($('nav').find(el).length == 0) {
         $(".menu").hide();
      }
    }, 100);
  });






