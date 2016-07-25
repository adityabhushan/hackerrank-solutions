function processData(input) {
input  = input.split('\n')
var t  = input.splice(0,1)

for(i = 0; i <= t*3; i+=3){
    var flag;
    var line1 = input[i].split(' ');
    var c  = input[i+2].split(' ');
    var a = input[i+1].split(' ');
    
    
       
    var k = parseInt(line1[1]);
    a = a.map(function num(a){return parseInt(a)});
    c = c.map(function num(a){return parseInt(a)});
    
    a = a.sort(function(a, b){return a-b})
    c = c.sort(function(a, b){return b-a})

    for(z = 0; z < a.length; z++){
        for(j = c.length -1 ; j >= 0 ; j--){
            if(a[z]+c[j]>=k){
                flag = true;
                c[j] = 0;
                break;
            }
            else{
                flag = false;
                break;
           }            
    }
        
}
if(flag)
console.log('YES')
else
console.log('NO')

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