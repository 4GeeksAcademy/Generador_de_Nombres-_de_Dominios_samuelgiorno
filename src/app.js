// arrays
let pronoun = ['the', 'our', 'his'];
let adj = ['great', 'big', 'amazing'];
let noun = ['jogger', 'racoon', 'dog', 'merchant', 'driver'];

// Generador de los dominios
pronoun.forEach(p => {
  adj.forEach(a => {
    noun.forEach(n => {
      console.log(`${p}${a}${n}.com`);
    });
  });
});
