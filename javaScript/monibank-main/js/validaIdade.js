export default function ehMaiorDeIdeade(campo) {
    const dtNascimento = new Date(campo.value);
    if(!validaIdade(dtNascimento)){
        campo.setCustomValidity('O usuario não é maior de idade');
    }
}

function validaIdade(data){
    const dtAtual = new Date();
    const dtMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth() ,  data.getUTCDate());
    
    return dtAtual >= dtMais18;
}