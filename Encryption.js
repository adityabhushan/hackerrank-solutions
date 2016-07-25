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
var newstr = readLine();

var row = Math.floor(Math.sqrt(newstr.length))
var col = Math.ceil(Math.sqrt(newstr.length))
var newarr='';

for(i = 0; i < col; i++){
    for(j = i; j < newstr.length; j+=col){
        newarr+=newstr[j]
    }
    newarr+= ' '
}
console.log(newarr);

}
