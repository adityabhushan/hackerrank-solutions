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
    var sum = 0;
    arr = readLine().split(' ');
    arr = arr.map(Number);
    function Number(n){
        return parseInt(n);
    }
    
    sum = arr.reduce(function(sum, x){
        return sum+x;        
    }, 0)
    console.log(sum);

}