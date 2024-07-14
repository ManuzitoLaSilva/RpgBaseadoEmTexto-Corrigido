let nome = prompt ("Antes de começarmos nossa aventura, diga seu nome");
console.log(nome);

let raça = prompt ("E diga támbem, a qual raça pertence");
console.log(raça);

let reino = prompt ("Diga o nome de seu reino");
console.log(reino);

alert (`Os Deuses comentaram sobre sua chegada ${nome}, um viajante ${raça}, do reino de ${reino}, bem vindo ao calabouso do mago Strindt`);
alert ("Os Deuses me disseram que viria, mas não disseram o motivo, também não me interessa, seja por ouro, conhecimento, curiosidade apenas ou senso de aventura, isso só diz respeito a voce, talvez com o decorrer da jornada sua motivação mude");
alert (`Bom já me estendi muito, aqui ${nome}, depois dessa porta voce verá o inferno, lutará contra demonios, armardilhas mortais, monstros famintos e talvez outros perigos`);
alert ("No entanto um tesouro o aguarda no final, algo que mudará para sempre sua vida");
alert (`Boa sorte ${nome} de ${reino}, que os Deuses te guiem`);

let lado1 = "esquerda";
let lado2 = "direita";
let lado3 = "frente";
let lado4 = "atrás";
let direções;

alert ("Ao passar da porta voce se depara com um abismo, e nesse abismo exitem 3 pontes, dando a 3 opções de caminhos diferente, um pela esquerda, pela direta e um em frente");

while(true){
    direções = prompt ("Escolha sabiamente apenas 1 desses caminhos é o correto");
   
    if(direções == lado1) {
        alert ("Voce escolheu sabiamente, pode prosseguir");
        break;
    } if(direções == lado2) {
        alert ("Voce acaba de entrar em uma sala, e nessa sala voce se depara com uma sombra, e instantes depois de encara-lá, voce contempla o vazio completo da sua alma e se joga do abismo");
        break;
    }   
      if(direções == lado3) {
        alert("Voce encontra uma pequena jovem, e ela diz algumas palavras, e essas palavras te levam a um reino magico e feliz, e ali voce decide ficar, mal sabe voce que esse é o reino dos sonhos e voce nunca mais ira acordar");
        break;
    } else {
        (alert("Viajante voce deve escolher uma direção apenas"))
    }
}

