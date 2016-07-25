function processData(input) {
input = input.split('\n')
var n  = input.splice(0,1)
var a = input
a = a[0].split(' ').map(function num(a){return parseInt(a)}).sort(function(a, b){return a-b});

min = a[a.length-1]+1;
for(i = 0; i < a.length-1; i++){
    if((a[i+1]-a[i])<min)
        min = (a[i+1]-a[i])
}
var b= [];
for(j = 0; j < a.length-1; j++){
    if((a[j]+min) === a[j+1]){
        b.push(a[j])
        b.push(a[j+1])
    }
}
console.log(b.toString().replace(/,/g , " "))
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
