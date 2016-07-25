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
    var a = [];
    var diag1 = 0, diag2 = 0;
    for(a_i = 0, a_j = n-1; a_i < n, a_j >= 0; a_i++, a_j--){        
       a[a_i] = readLine().split(' ');        
       a[a_i] = a[a_i].map(function number(b){return parseInt(b)});       
    }
    for(i = 0; i < n; i++){
        for(i = 0, j = n-1; i < n, j >= 0; i++, j--){
            diag1 += a[i][i];
            diag2 += a[i][j];
        }
    }
    
    sum = Math.abs(diag1-diag2);
    console.log(sum)
//    console.log(Math.abs(sum))

}
