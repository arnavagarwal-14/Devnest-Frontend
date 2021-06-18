function firstorn(arr,n){
    return(arr.slice(0,n));
}

console.log(firstorn([7,9,0,-2]));
console.log(firstorn([],3));
console.log(firstorn([7, 9, 0, -2],3));
console.log(firstorn([7, 9, 0, -2],6));
console.log(firstorn([7, 9, 0, -2],-3));
