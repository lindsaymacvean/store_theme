$.getScript('https://www.googletagmanager.com/gtag/js?id=AW-809038913', function(){


  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-809038913');


if(window.location.href.includes('/products') && typeof product_title !== 'undefined'){
     gtag('event', 'product', {
          'ecomm_prodid': product_id,
          'ecomm_totalvalue': product_price,
          'ecomm_pagetype': 'product',
          'ecomm_category': product_type });
}
});