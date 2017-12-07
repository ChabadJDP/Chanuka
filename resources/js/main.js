$('document').ready(function() {
  for (var i in dados) {
    var label = $('<label></label');
    var form = $('<input type="radio" name="preco">');
    var idAtual = 'f' + dados[i].valor;
    form.attr('id', idAtual);
    form.attr('link', dados[i].link);
    label.append(form);
    label.append('R$ ' + dados[i].valor.toFixed(2));
    $('#radio').append(label);
  }

  $('button').click(function(){
    var escolha = $('input[name="preco"]:checked');
    var link = $(escolha).attr('link');
    window.open(link);
  })

})
