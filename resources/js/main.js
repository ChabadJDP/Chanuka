$('document').ready(function() {
  var name = 'preco'
  var titulo = $('<label for="preco">Faça sua escolha</div>').insertBefore('#abrir');
  var radio = $('<form class="radio"></form').insertAfter(titulo);
  for (var i in dados) {
    var label = $('<label></label');
    var form = $('<input type="radio" name=' + name +'>');
    var idAtual = 'f' + dados[i].valor;
    form.attr({id: idAtual, link: dados[i].link});
    //form.attr('id', idAtual);
    //form.attr('link', dados[i].link);
    label.append(form);
    label.append('Qtde: ' + dados[i].valor/18 + ' - R$' + dados[i].valor.toFixed(2));
    radio.append(label);
    //$('#radio').append(label);
  }

  $('button').click(function(){
    var escolha = $('input[name=' + name + ']:checked');
    var link = $(escolha).attr('link');
    window.open(link);
  })

})
