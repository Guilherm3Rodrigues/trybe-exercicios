let word = "banana";
let reverse = "";

for (let index = 0; index < word.length; index+= 1) {
    
    reverse += word[word.length - 1 - index];  // genial (copiei do gabarito)
    console.log(index);
    console.log(reverse);
    console.log("====");
}
console.log(reverse);