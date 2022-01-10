//Complementary DNA
function DNAStrand(dna){
    //your code here
    let complements= []
    for (let letter of dna){
      if(letter === 'A'){
        complements.push('T') 
        
      }
      if (letter === 'C'){
       complements.push('G') 
      }
      if (letter ==='T'){
        complements.push('A') 
      }
      if(letter === 'G'){
        complements.push('C') 
      }
    }
    return complements.join('')
  }
