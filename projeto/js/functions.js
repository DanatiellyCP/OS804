function salvarOS() {
    
    let exibe = document.getElementById('divPrin').value;
    
    let titulo = document.getElementById("cliente").value;


    let texto = 'Teste:<br>'  +  
    'Cliente: '       + tedocument.getElementById("cliente").value   + '<br>' +
    'Produto: '       + document.getElementById("produto").value     + '<br>' +
    'Descrição: '     + document.getElementById("desecricao").value  + '<br>' +
    'Qtd. Prod.: '    + document.getElementById("qtd").value         + '<br>' +
    'Valor Unitário: '+ document.getElementById("valorU").value      + '<br>' +
    'Valor Total: '   + document.getElementById("valorT").value      + '<br>' +
    'Dt. Encomenda: ' + document.getElementById("dtenc").value       + '<br>' +
    'Dt. Entrega: '   + document.getElementById("dtEntrega").value   + '<br>' ;

    exibe.innerHTML = "<p>" + titulo + texto +"</p>"+ "\n";
     
    //return document.write('<div>'+ titulo + texto +'</div>');


    }
