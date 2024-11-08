    function insertionSort2(n, arr) {
        // Write your code here
        for (let i = 1; i < n; i++) {
            console.log(arr.join(" "));
            const element = arr[i];
            let j = i - 1;
            
            while (j >= 0 && arr[j] > element){
                arr[j + 1] = arr[j];
                j--
            }
            arr[ j + 1] = element
        }
        console.log(arr.join(" "));
        return arr
    }

console.log(insertionSort2( 8  , [8 ,7 ,6, 5, 4 ,3 ,2 ,1]));