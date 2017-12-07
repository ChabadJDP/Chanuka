$(document).ready(function(){
  var p = "<p></p>";
  p = $(p, {text: o,id: 'teste'});
  $("form").after(p);

  var b = jQuery('<a/>', {
    id: 'foo',
    href: 'http://google.com',
    title: 'Become a Googler',
    rel: 'external',
    text: 'Go to Google!'
});

$("form").append(b);

});
