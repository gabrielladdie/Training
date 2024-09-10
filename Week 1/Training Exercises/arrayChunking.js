function chunkArray(x, y){
    for(let i = 0; i < x.length; i += y){
        console.log(x.slice(i, i + y));
    }
}

chunkArray([1, 2, 3, 4, 5], 3);