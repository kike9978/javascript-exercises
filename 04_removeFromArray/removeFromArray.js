const removeFromArray = function (array,string) {

    let args = Array.prototype.slice.call(arguments,1);
    for(let i=0; i<args.length; i++){
        for(const item of array){
            if(item === args[i]){
                array.splice(array.indexOf(item),1);
            }
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
