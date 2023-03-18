// sorting algorithms

export function insertion_sort(arr: number[]): number[] {
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

export function quick_sort(arr: any[]): any[] {
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
    return [...quick_sort(l), ...m, ...quick_sort(r)]
}

export function merge_sort(arr: any[]) {
    if (arr.length <= 1) return arr
    let mid: any =  ~~(arr.length / 2)
    let left: any = merge_sort(arr.slice(0, mid))
    let right: any = merge_sort(arr.slice(mid))
    let result: any[] = merge(left, right)
    // console.log(`result: `, result)
    return result
}
function merge(left: any[], right: any[]) {
    let result: any[] = []
    let i: number = 0
    let j: number = 0

    // console.log(left, right)
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i = i + 1
        } else {
            result.push(right[j])
            j = j + 1
        }
    }
    result = [...result, ...left.slice(i)]
    result = [...result, ...right.slice(j)]
    return result
}

export function heap_sort(arr: any[]) {
    let n: number = arr.length
    for (let index = n; index > -1; index--) {
        heapify(arr, n, index)
    }
    for (let index = n-1; index > 0; index--) {
        arr[index], arr[0] = arr[0], arr[index]
        let temp: any = arr[index]
        arr[index] = arr[0]
        arr[0] = temp
        heapify(arr, index, 0)
    }
}
function heapify(arr: any[], n: number, i: number) {
    console.log(arr)
    let largest: number = i
    let l: number = 2 * i + 1
    let r: number = 2 * i + 2
    if (l < n && arr[i] < arr[l]) largest = l
    if (r < n && arr[largest] < arr[r]) largest = r
    if (largest != i) {
        let temp: any = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp
        heapify(arr, n, largest)
    }
}

// searching algorithms


export function binary_search(arr: any[], x: any) {
    let low: number = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid: number = ~~((high + low) / 2)
        switch (true) {
            case (arr[mid] < x):
                low = mid + 1
                break
            case (arr[mid] > x):
                high = mid - 1
                break
            default:
                return mid
        }
    }
    return -1
}

// graph algorithms