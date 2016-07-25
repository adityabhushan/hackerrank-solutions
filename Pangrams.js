function processData(input) {
    var lower = input.toLowerCase();
    var result;
    //console.log(lower)
    for(i = 97;i <= 122; i++){
        if(lower.indexOf(String.fromCharCode(i)) === -1){            
            result = 'not pangram'
            break;
        }    
        else
            result = 'pangram'
    }
    console.log(result);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
