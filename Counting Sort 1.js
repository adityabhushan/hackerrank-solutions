function processData(input) {
    input = input.split('\n')
    var arr =  input[1].split(' ')
    var count = [];
    arr = arr.map(function num(a){return parseInt(a);})
    for(i =0; i < 100; i++){
        count[i]=0;
    }
    
    for(i = 0; i< arr.length; i++){
        count[arr[i]]++;
    }
    
    console.log(count.toString().replace(/,/g , " "));
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
