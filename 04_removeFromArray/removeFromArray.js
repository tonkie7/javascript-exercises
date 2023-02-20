const removeFromArray = function(array, ...num) {
    // return array.filter(val => !num.includes(val))

    const newArray = []
    array.forEach(item => {
        if(!num.includes(item)) {
            console.log(item);
            newArray.push(item)
        }
    });
    // console.log(newArray);
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
