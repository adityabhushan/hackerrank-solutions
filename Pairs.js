function processData(input) {
    
    input  = input.split('\n')
    var line1 = input[0].split(' ')
    var n = parseInt(line1[0]);
    var k = parseInt(line1[1]);
    
    var line2 = input[1].split(' ')
    line2 = line2.map(function num(a){return parseInt(a)})
    
    var count = 0;
    line2 = line2.sort(function(a, b){return a-b});
    
    var i=0,j=1,count=0;
    
    while(j < n) {
        var diff = line2[j] - line2[i];
        
        if (diff == k) {
            count++;
            j++;
        } else if (diff > k) {
            i++;
        } else if (diff < k) {
            j++;
        }
    }
    console.log(count);    
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