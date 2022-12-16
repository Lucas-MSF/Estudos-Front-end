export default function ehUmCpf(campo)
{
    const cpf = campo.value.replace(/\.|-/g, "");
    if(verificaNumerosRepitidos(cpf) || verificaPrimeiroNumero(cpf) || verificaSegundoNumero(cpf) || cpf.length > 11){
        campo.setCustomValidity('Cpf invalido');
    }


}
function verificaNumerosRepitidos(cpf)
{
    const numeros = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];
    
    return numeros.includes(cpf);
}

function verificaPrimeiroNumero (cpf){
    let soma = 0;
    let mutiplicador = 10;

    for (let contador = 0; contador <  9; contador++) {
        soma += cpf[contador] * mutiplicador;
        mutiplicador --;        
    }

    soma = (soma * 10) %11;
    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    return soma != cpf[9];
}
function verificaSegundoNumero (cpf){
    let soma = 0;
    let mutiplicador = 11;

    for (let contador = 0; contador <  10; contador++) {
        soma += cpf[contador] * mutiplicador;
        mutiplicador --;        
    }

    soma = (soma * 10) %11;
    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    return soma != cpf[10];
}