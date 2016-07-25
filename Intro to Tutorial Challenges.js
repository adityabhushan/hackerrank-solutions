function processData(input) {
    //Enter your code here
    var ne = input.split('\n')
    var ele = ne[0]
    var arr = ne[2]
    
    arr = arr.split(' ')
    
    var res = arr.indexOf(ele)
    console.log(res)
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
