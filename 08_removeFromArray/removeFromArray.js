const removeFromArray = function (arr, ...toBeRemoved) {
for(const toBeRemovedElement of toBeRemoved){
    while (1) {
        index=arr.indexOf(toBeRemovedElement);
        if (index == -1) {
            break;
        } else {
            arr.splice(index,1)
        }
    }
}
    return arr
};



// Do not edit below this line
module.exports = removeFromArray;
