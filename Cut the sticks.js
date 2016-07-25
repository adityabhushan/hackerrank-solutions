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
    var a = arr.map(Number).sort(function(a, b){return a-b});;
    var small = a[0];
while((a[a.length-1]) > 0){
    
    for( i = 0; i < a.length; i++){
        if(a[i] > 0){
            small = a[i];
            break;
        }        
    }
    
    console.log(count(a));
    
    for( i = 0; i < a.length; i++){
        a[i] -= small;
        //a.splice(a.indexOf(0),1)
        
    }
}

}


function count(a){
    var count = 0
    for(j = 0; j < a.length; j++)
        if(a[j] > 0)
            count++;
    return count;
}
