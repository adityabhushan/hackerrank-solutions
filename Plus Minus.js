process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(function Number(a){return parseInt(a);});
    var pos = 0, neg = 0, zer = 0;
    for(i = 0; i < n; i++){
        if(arr[i] > 0)
            pos++;
        else if(arr[i] < 0)
            neg++;
        else
            zer++;
    }
    if(pos === 0)
        console.log('0');
    else
        console.log(pos/n);
    
    if(neg === 0)
        console.log('0');
    else
        console.log(neg/n);
    
    if(zer === 0)
        console.log('0');
    else
        console.log(zer/n);

}
