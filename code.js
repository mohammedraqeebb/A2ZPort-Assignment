const getLongestWordWithMostVowels = (sentence)=> {
  let maxWord = "";
  let maxLength = 0;
  let maxVowelCount = 0;

  let currentWord = "";
  let currentLength = 0;
  let currentVowelCount = 0;

  const isVowel = (char) => "aeiouAEIOU".includes(char);

  for (const char of sentence) {
    const charCode = char.charCodeAt(0);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      currentWord += char;
      currentLength++;
      if (isVowel(char)) {
        currentVowelCount++;
      }
    } else if (char === " ") {
      if (currentLength > maxLength || (currentLength === maxLength && currentVowelCount > maxVowelCount)) {
        maxWord = currentWord;
        maxLength = currentLength;
        maxVowelCount = currentVowelCount;
      }
      currentWord = "";
      currentLength = 0;
      currentVowelCount = 0;
    }
  }


  if (currentLength > maxLength || (currentLength === maxLength && currentVowelCount > maxVowelCount)) {
    maxWord = currentWord;
  }

  return maxWord;
}

const sentence = "ab.c eeee";
const longestWord = getLongestWordWithMostVowels(sentence);
console.log(longestWord);

