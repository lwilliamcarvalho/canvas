
let canvas = document.getElementById('meuCanvas');
let ctx = canvas.getContext('2d');


function desenhar_quadrado(x, y, largura, altura, cor) {
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
    ctx.closePath();
}


function desenhar_linha(x1, y1, x2, y2, cor, espessura) {
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = espessura;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}


function desenhar_arco(x, y, raio, anguloInicial, anguloFinal, corPreenchimento, corBorda) {
    ctx.beginPath();
    ctx.fillStyle = corPreenchimento;
    ctx.strokeStyle = corBorda;
    ctx.lineWidth = 2;
    ctx.arc(x, y, raio, anguloInicial, anguloFinal);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}


function escrever(texto, x, y, cor, tamanhoFonte) {
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.font = tamanhoFonte + " Arial";
    ctx.textAlign = "center";
    ctx.fillText(texto, x, y);
    ctx.closePath();
}

desenhar_quadrado(0, 0, 30, 30, "red");       // Canto superior esquerdo
desenhar_quadrado(270, 0, 30, 30, "blue");    // Canto superior direito
desenhar_quadrado(0, 270, 30, 30, "yellow");  // Canto inferior esquerdo
desenhar_quadrado(270, 270, 30, 30, "green"); // Canto inferior direito


desenhar_linha(150, 150, 0, 0, "red", 1.5);
desenhar_linha(150, 150, 300, 0, "blue", 1.5);
desenhar_linha(150, 150, 0, 300, "black", 1.5);
desenhar_linha(150, 150, 300, 300, "red", 1.5);


desenhar_linha(0, 150, 300, 150, "green", 1.5);


desenhar_arco(75, 90, 12, 0, 2 * Math.PI, "yellow", "green");
desenhar_arco(225, 90, 12, 0, 2 * Math.PI, "yellow", "green");


desenhar_arco(150, 150, 35, 0, Math.PI, "green", "green");


escrever("Desenvolvimento Web", 150, 50, "black", "16px");