// • Crie uma classe de uma abstração;
function Pet(nome){
    this.nome = nome;
};

// • Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;
// • Crie pelo menos três instâncias de objetos;
function Cachorro(nome, idade, peso, vacina){
    Pet.call(this, nome);

    this.idade = idade;
    this.peso = peso;
    this.vacina = vacina;
};

function Gato(nome, idade, peso, vacina){
    Pet.call(this, nome);

    this.idade = idade;
    this.peso = peso;
    this.vacina = vacina;
};

const cachorro1 = new Cachorro("Bela", 3, "5kg", true);
const gato1 = new Gato("Mike", 2, "2kg", false);
console.log(cachorro1);
console.log(gato1);