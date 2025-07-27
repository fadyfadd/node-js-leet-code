
function twoSumIndex(arr , total) {
    const dic = {}
    j = 0;
    for (var i of arr) {
        var diff = total - i;
        var key = "number_" + diff; 
        if (key in dic) {
            return [dic[key] , j]
        }
        else {
            key = "number_" + i;
            dic[key] = j;   
        }
        j++
    }

    return null;
}

module.exports = twoSumIndex

 



 