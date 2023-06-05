/////////////////////////////////////////////////

// 1) Sum Zero 

let array = [1, 2, 3, -2]

let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)

// With the above solution, the runtime of the code would O(n^2) due it's double for loop solution
// The space complexity of this solution would be O(n) since the size of the array is small and the function
// is only going through small test data.


/////////////////////////////////////////////////

// 2) Unique Characters

const uniq = (str) => {
    for(let i = 0; i < str.length; i++){
        for(let k = i + 1; k < str.length; k++){
            if(str[i] === str[k]){
               return console.log(false)
            } 
        }
    }
    return console.log(true)
}

uniq('Moonday')

// Same above, the double for loop solution makes the runtime of the code to O(n^2)
// I believe the space complexity of this solution would be considered O

// The space complexity of this solution would be considered O(n).

/////////////////////////////////////////////////

// 3) Pangram Sentence

const isPangram = (string) => {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

// With the above solution, the runtime of the code would be O(n) as it uses a single for loop but also
// uses the dynamic .length property. 

// The space complexity on this one would be considered O(n). 

/////////////////////////////////////////////////

// 4) Longest Word

const findLongestWord = (arr) => {
    var longestWord = arr.sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
console.log(findLongestWord(["hi", "hello"]))

// The runtime of the code above would be O(n). Despite it being a bit simple in it's execution, it still uses dynamic properties
// such as the length and other methods such as sort.

// The space complexity on this one, I feel like, would be O(n^2) since the .length is being defined and called on in different places.