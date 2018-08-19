// turn 1000000 into 1,000,000
function makeMoney(n){
    var a = [];
    var s = n.toString();
    for (var i =0; i < s.length; i++){
        a.push(s[i]);
    }
    if (a.length < 4){
        return n;
    }
    var k = 0;
    var g = [];
    for (var x = a.length-1; x>=0; x--){
        if(k % 3 == 0 && k >1){
            g.push(',');
        }
        g.push(a[x]);
        k++;
    }
    // console.log(g);
    // now just reverse it and convert to a string, then a number
    reverse(g);
    // convert to string then number
    var output = "$";
    for(k in g){
        output+=g[k];
    }
    console.log(n + " becomes " + output);
    console.log(output + " from " + n);

    console.log(output);
}
function reverse(arr){
    for (var i=0; i < arr.length/2; i++){
        var temp = arr[arr.length-1-i];
        arr[arr.length-1-i] = arr[0+i];
        arr[0+i] = temp;
    }
    // console.log(arr);
    return arr;
}

// could create an array, put each number in the array
// then add commas to the array 3 from the rear, and shift everything over

makeMoney(34015827); //  34 015 827

makeMoney(10000000000000000);