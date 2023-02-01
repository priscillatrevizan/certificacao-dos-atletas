let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

let nomeAtletas = atletas.map(function(nomes){
      return nomes.nome
  })

let notasObtidas = atletas.map(function(notas){
return notas.notas
})

function compare(a,b) {return a - b;};

for (let i = 0; i < atletas.length; i++) {
  let soma = 0;
  atletas[i].notasAtribuidas = atletas[i].notas;
  atletas[i].notasAtribuidas = atletas[i].notasAtribuidas.sort(compare).slice(1,4);
  atletas[i].notasAtribuidas.map(function(notas) {
    soma = soma + notas;
  });
  let media = soma / atletas[i].notasAtribuidas.length
 
  
  console.log("Atleta: " + atletas[i].nome + "\nNotas: " + atletas[i].notas + "\nMédia Válida: " + media.toFixed(2) );
  console.log('---------------------------');
};