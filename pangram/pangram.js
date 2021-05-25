const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const isPangram = (sentence) => {
  sentence = sentence.toLowerCase();
  return letters.every(letter => sentence.includes(letter));
};