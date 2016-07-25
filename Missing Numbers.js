function processData(input) {
input  = input.split('\n')
var n1 = parseInt(input[0]);
var n2 = parseInt(input[2]);

var a = input[1].split(' ')
var b = input[3].split(' ')

a = a.map(function num(a){return parseInt(a)})
b = b.map(function num(a){return parseInt(a)})

a = a.sort(function(a, b){return a-b});
b = b.sort(function(a, b){return a-b});
var count = 0;

var c = [];
for( i = 0; i < b.length; i++)
    c[i] = 0;

for( i = 0, j = 0; i < b.length, j < a.length; i++, j++){
    if(b[i] != a[j]){
        c[i] = b[i];
        j--;
    }
}

for(i = 0; i < c.length; i++){
    if(c.indexOf(0) != -1){
        c.splice(c.indexOf(0),1);
        i--
    }
}
    
var d = uniq(c)

function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}    

console.log(d.toString().replace(/,/g , " "));

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
