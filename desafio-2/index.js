//Declarando Funçao
function calcularNivel(vitorias, derrotas){
    //Quantidade de Vitórias
    let totalDeVitorias = vitorias - derrotas;
    let nivel;

    //Classificação de acordo com Vitórias e Derrotas
    if (vitorias <= 10){ 
        nivel = "Ferro";
    }
    else if (vitorias >= 11 && vitorias <= 20){
        nivel = "Bronze";
    }
    else if (vitorias >= 21 && vitorias <= 50){
        nivel = "Prata";
    }
    else if (vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro";
    }
    else if (vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante";
    }
    else if (vitorias >= 91 && vitorias <= 100){
        nivel = "Lendário";
    }
    else{
        nivel = "Imortal";
    }
    
    //retornando mensagem final
    return `O Herói tem de saldo de ${totalDeVitorias} Vitórias, está no nível de ${nivel}`;
}

//Chamando a função
let totalResultado = calcularNivel(30, 14);
console.log(totalResultado);