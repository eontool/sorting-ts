"use strict";
var Sorting;
(function (Sorting) {
    function bubbleSort(l, type) {
        for (let i = 0; i < l.length; i++) {
            for (let j = 1; j < l.length; j++) {
                if (type ? l[j - 1] > l[j] : l[j - 1] < l[j]) {
                    [l[j - 1], l[j]] = [l[j], l[j - 1]];
                }
            }
        }
        return l;
    }
    Sorting.bubbleSort = bubbleSort;
})(Sorting = exports.Sorting || (exports.Sorting = {}));
var List;
(function (List) {
    function random(n, min, max) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result[i] = Math.floor(Math.random() * (max - min)) + min;
        }
        return result;
    }
    List.random = random;
})(List = exports.List || (exports.List = {}));
let myList = List.random(10, 0, 9);
console.log(myList);
console.log(Sorting.bubbleSort(myList, true));
