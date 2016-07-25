function processData(input) {
    //Enter your code here
    input = input.split('\n')
    //console.log(input) 
    var arr =  input[1].split(' ')
    //var a = input[1]
    var b;
    var a = arr.map(function num(a){return parseInt(a);})
    var temp = a[a.length-1];
    for(i = a.length-1; i >= 0; i--){
	if(temp < a[i-1])
		a[i] = a[i-1];
	else{
        a[i] = temp;
        break;
    }
    
	console.log(a.toString().replace(/,/g , " "));
}
    b = a.toString().replace(/,/g , " ")
	console.log(b); 
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
