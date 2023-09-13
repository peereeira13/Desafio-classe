//Crie uma classe generica que represente um herói de uma aventura
//e que possua as seguintes propriedades:
//- nome
//- idade
//- tipo (ex: guerreiro, mago, monge, ninja

class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let ataque = "";

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    }
    return `O ${this.tipo} atacou usando ${ataque}`;
  }
}

let heroimago = new heroi("Shaka", "1500", "mago");
let heroiguerreiro = new heroi("Seiya", "18", "guerreiro");
let heroimonge = new heroi("Hyoga", "89", "monge");
let heroininja = new heroi("Shyriu", "25", "ninja");

console.log(heroimago.atacar());
console.log(heroiguerreiro.atacar());
console.log(heroimonge.atacar());
console.log(heroininja.atacar());
