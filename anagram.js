function getAnagrams(str) {
    // Base case: if the string length is 1, return an array containing the string itself
    if (str.length === 1) {
        return [str];
    }

    const anagrams = [];
    for (let i = 0; i < str.length; i++) {
        // Remove the character at index i
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        

        // Recursively find anagrams of the remaining characters
        const remainingAnagrams = getAnagrams(remainingChars);

        // Prepend the removed character to each of the remaining anagrams
        for (const anagram of remainingAnagrams) {
            anagrams.push(char + anagram);
        }
    }

    return anagrams;
}

const inputString = "abcd";
const anagrams = getAnagrams(inputString);
console.log(anagrams);
console.log(`Total number of anagrams: ${anagrams.length}`);
