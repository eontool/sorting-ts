export namespace Sorting {
    export function bubbleSort(l: number[], type: boolean): number[] {
        for (let i: number = 0; i < l.length; i++) {
            for (let j: number = 1; j < l.length; j++) {
                if (type ? l[j - 1] > l[j] : l[j - 1] < l[j]) {
                    [l[j - 1], l[j]] = [l[j], l[j - 1]];
                }
            }
        }
        return l;
    }
}

export namespace List {
    export function random(n: number, min: number, max: number): number[] {
        let result: number[] = [];
        for (let i: number = 0; i < n; i++) {
            result[i] = Math.floor(Math.random() * (max - min)) + min;
        }
        return result;
    }
}

let myList = List.random(10, 0, 9);
console.log(myList);
console.log(Sorting.bubbleSort(myList, true));