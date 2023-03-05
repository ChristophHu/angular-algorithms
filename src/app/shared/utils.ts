// 

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