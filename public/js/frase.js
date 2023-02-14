$("#botao-frase").click(FraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function FraseAleatoria(){
    $('#spinner').toggle()
    
    $.get("http://localhost:3000/frases",(data) => {
    let frase = $(".frase")
    let NumberAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[NumberAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoinicial(data[NumberAleatorio].tempo)
    
}).fail(() => {
    $("#error").show();
})
.always(() => {
    $('#spinner').toggle(1000) 
});
}

function buscaFrase(){
    $('#spinner').toggle()
    let id = $("#frase-id").val();
    let dados = {id: id}
    $.get("http://localhost:3000/frases",dados,trocaFrase)
    .fail(() => {
        $("#error").show();
    })
    .always(() => {
        $('#spinner').toggle(1000) 
    })}
    
    
    function trocaFrase(data){
        let frase = $(".frase")
        frase.text(data.texto);
        atualizaTamanhoFrase();
        atualizaTempoinicial(data.tempo);
    }