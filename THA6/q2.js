function clonedaarray(arr){
    clonedarr = [...arr];
    return(clonedarr);
}

console.log(clonedaarray([1,2,4,0]));
console.log(clonedaarray([1,2,[4,0]]));