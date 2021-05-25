const nucleotides = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
};

export const toRna = (dna) => {
  if(!dna) return '';
  
  let rna = dna.split('').map(el => {
    return nucleotides[el];
  });

  return rna.join('');
};