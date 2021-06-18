function mostfreq(arr, n){

    let maxfreq = 1;
    let count = 1;
    arr.sort();

    for (let i=0; i<n; i++){
        if(arr[i] == arr[i+1]){
            count++;
        }
        else{
            if(count>maxfreq){
                maxfreq=count;
            }
            count=1
        }
    }

    return(maxfreq);
}

console.log(mostfreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], 13));
