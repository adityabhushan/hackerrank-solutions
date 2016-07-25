function processData(input) {
    input = input.split('\n')
    var t = input.splice(0,1)
    t = parseInt(t)
    
    for(i = 0; i < t; i++){
        var a = input[i].split(' ')
        a = a.map(function num(a){return parseInt(a)})
        
        var c = Math.floor(Math.sqrt(a[1]))-Math.floor(Math.sqrt(a[0]))
        
        console.log(c)
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