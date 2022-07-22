class Pessoa{
   nome;
    idade;
    cpf;
    anoAniversario;
}

const pessoa1 = new Pessoa();
pessoa1.nome = "João";
pessoa1.idade = 22;
pessoa1.cpf = "123.456.789-00";
pessoa1.anoAniversario = "01/01/2000";

function podeDirigir(pessoa){
   if(pessoa.idade >= 18){
      return true;
   }else{
      return false;
   }
}
console.log(podeDirigir(pessoa1));