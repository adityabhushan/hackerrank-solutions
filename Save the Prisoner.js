function processData(input) {
    var tc = input.split('\n');
    var test = parseInt(tc[0]);
    var line1 = 0
    var n = 0
    var sweets = 0
    var id = 0
    
    for(i = 1; i <= test; i++){
        line1 = tc[i].split(' ')
        n = parseInt(line1[0]);
        sweets = parseInt(line1[1]);
        id = parseInt(line1[2]);
        result = ((sweets+id)%n)-1;
        if(result === 0)
            result = n;
        console.log(result);
    }
    
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
