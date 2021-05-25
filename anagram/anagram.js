export const findAnagrams = (word,list) => {
  let anagram_list = [];

  for(let lst_word of list) {
    if(lst_word.length === word.length){
      let lst_word_sorted = lst_word.toLowerCase().split("").sort();
      let word_sorted = word.toLowerCase().split("").sort();
      let is_true = true;

      for (let i = 0; i<word_sorted.length; i++) {
        if (word_sorted[i]!==lst_word_sorted[i]) {
          is_true = false;
          break;
        };
      };

      if(is_true === true & lst_word.toLowerCase() !== word.toLowerCase()) {
        anagram_list.push(lst_word);
      };
    };
  };
  return anagram_list;
}