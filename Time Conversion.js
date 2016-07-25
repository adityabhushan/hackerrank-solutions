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
    var time = readLine();
    var time=time.split(':')
    var hours = parseInt(time[0])
    var mins = time[1]
    var secs = time[2].substr(0,2)
    var ampm = time[2].substr(2,3)

    
    if(ampm === 'PM' && hours != 12){
        hours = hours+12;
        
    }
    
    if(ampm === 'AM' && hours === 12){
        hours = '00'
        
    }
    
    
    if(hours < 10 && hours != 00){
        hours = '0'+hours;
        
    }
    
    console.log(hours+':'+mins+':'+secs)
}
