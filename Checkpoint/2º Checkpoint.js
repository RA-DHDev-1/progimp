function conferir (tempoComida, tempoInserido){
    if(tempoInserido < tempoComida){
        console.log("Tempo insuficiente!");
    }
    else if (tempoInserido >2*tempoComida && tempoInserido<=3*tempoComida) {
        console.log('A comida queimou!');
    }
    else if (tempoInserido >3*tempoComida){
        console.log('kabumm!');
    }
    else {
        console.log('Prato pronto, bom apetite!!');
    }
}

function microondas(comida, tempoInserido){ 
    switch(comida){
        case 'pipoca':
            tempoComida= 10;
            conferir(tempoComida, tempoInserido)
            break;
        
        case 'macarrão':
            tempoComida = 8;
            conferir(tempoComida, tempoInserido)
            break;

        case 'carne':
            tempoComida=15;
            conferir(tempoComida, tempoInserido)
            break;
            
        case 'feijão':
            tempoComida=12;
            conferir(tempoComida, tempoInserido)
            break;    

        case 'brigadeiro':
            tempoComida=8;
            conferir(tempoComida, tempoInserido)
            break;
            
        default:
            console.log('Prato inexistente!');
    }
}


microondas('pipoca', 16);
microondas('macarrão', 18);
microondas('carne', 53);
microondas('feijão', 11);
microondas('brigadeiro', 8);
microondas('acarajé', 16);

console.log("\n---------------------------------------------\n");
// Tentando usar objeto (incompleto)

let menu = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8,
    items: ['Pipoca', 'Macarrão', 'Carne', 'Feijão', 'Brigadeiro'],
}

function microOndas (pedido, tempo) {  
        if (pedido == menu.items[0] && tempo == 20 || pedido == menu.items[1] && tempo == 16 || pedido == menu.items[2] && tempo == 30 || pedido == menu.items[3] && tempo == 24 || pedido == menu.items[4] && tempo == 16) {
        return console.log("A comida queimou");
    } if (pedido == menu.items[0] && tempo < 10 || menu.items[1] && tempo < 8 || menu.items[2] && tempo < 15 || menu.items[3] && tempo < 12 || menu.items[4] && tempo < 8) {
        return console.log("Tempo insuficiente");
    } if (pedido != menu.items[0] || pedido != menu.items[1] || pedido != menu.items[2] || pedido != menu.items[3] || pedido != menu.items[4]) {
        return console.log("Prato inexistente");
    } if (pedido == menu.items[0] && tempo >= 30 || pedido == menu.items[1] && tempo >= 24 || pedido == menu.items[2] && tempo >= 45 || pedido == menu.items[0] && tempo >= 24) {
        return console.log("Kabumm");
    } else return console.log("Prato pronto, bom apetite");
}
microOndas("Pipoca", 20);
microOndas("Macarrão", 6);
microOndas("Chocolate", 20);
microOndas("Brigadeiro", 25);