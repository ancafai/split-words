/*
  Input: 
  wordsArray - array of strings
  str - string 

  Output: 
  first value of string that exists in array - if value exists
  undefined - if there is no such value to satisfy the condition
  false - if wordsArray is not an array 
*/
const getMatchingWordFromString = (wordsArray, str) => {
  return Array.isArray(wordsArray) && wordsArray.find(word => str.indexOf(word) === 0);
} 

/*
  Input: 
  wordsArray - array of strings
  str - string 
  resultArr - array of strings

  Output: 
  one matching array of strings - if the requirements are met
  empty array - otherwise
*/
const getWordsSplit = (wordsArray = [], str = '', resultArr = []) => {
  if (!str.length) {
    return resultArr;
  }
  while (str.length) {
    if (matchingWord = getMatchingWordFromString(wordsArray, str)) {
       return getWordsSplit(wordsArray, str.substring(matchingWord.length, str.length), [...resultArr, matchingWord]);
    }
    return []
  }
}