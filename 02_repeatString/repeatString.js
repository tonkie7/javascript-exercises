const repeatString = function(word, num) {
    let string = ''
    for (let i = 0; i < num; i++) {
        // console.log(string += word);
       string += word
    }
    return string
};

repeatString('hey', 9)
// Do not edit below this line
module.exports = repeatString;
