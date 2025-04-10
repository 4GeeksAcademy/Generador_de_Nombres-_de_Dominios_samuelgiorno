window.onload = function() {
    // Arrays//
    const pronoun = ['the', 'our', 'his'];
    const adj = ['great', 'big', 'amazing'];
    const noun = ['jogger', 'racoon', 'dog', 'merchant', 'driver'];
    const dominion = [`.com`, `.net`, `.us`, `.io`];
  
    pronoun.forEach (p => {
    adj.forEach (a => {
    noun.forEach (n => {
    dominion.forEach (d => {
      console.log(`${p} ${a} ${n} ${d}`)
      })})})}) 
    };
