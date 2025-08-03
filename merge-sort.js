function sortTwoArrays(arr1, arr2) {
    var i = 0
    var j = 0
    var k = 0
    var res = []

    while (i <= arr1.length - 1 && j <= arr2.length - 1) {

        if (arr1[i] < arr2[j]) {
            res[k] = arr1[i]
            i++
            k++
        }
        else {
            res[k] = arr2[j]
            j++
            k++
        }

    }


    while (i <= arr1.length - 1) {
        res[k] = arr1[i]
        k++        
        i++
    }

    while (j <= arr2.length - 1) {
        res[k] = arr2[j]
        k++
        j++
    }


    return res
}

function mergeSort(arr) {

    if (arr.length <= 1)
        return arr;

    var mid = Math.floor(arr.length / 2)
    var part1 = arr.slice(0, mid)
    var part2 = arr.slice(mid)

    return sortTwoArrays(mergeSort(part1), mergeSort(part2)) 
}

module.exports = mergeSort


