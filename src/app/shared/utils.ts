// sorting algorithms

// insertionsort
export function insertionsort(arr: number[]): number[] {
    const n = arr.length
    for (let i = 0; i < n; i++) {
        const key = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = key
    }
    return arr
}

export function quicksort(arr: any[]): any[] {
    if (arr.length <= 1) return arr
    let pivot = arr[arr.length / 2]
    let l: any[] = []
    for (let i in arr) {
        if (arr[i] < pivot) l.push(arr[i])
    }
    let m: any[] = []
    for (let i in arr) {
        if (arr[i] == pivot) m.push(arr[i])
    }
    let r: any[] = []
    for (let i in arr) {
        if (arr[i] > pivot) r.push(arr[i])
    }
    console.log([...l, ...m, ...r])
    return [...quicksort(l), ...m, ...quicksort(r)]
}

// searching algorithms

// graph algorithms