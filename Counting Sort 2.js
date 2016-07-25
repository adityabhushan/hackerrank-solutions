function processData(input) {
   
    input = input.split('\n')
    
    var arr =  input[1].split(' ')
    var a = arr.map(function num(a){return parseInt(a);})
    var temp = 0;

    for(i = 0; i < a.length-1; i++){
    	if(a[i] > a[i+1]){
    		temp = a[i+1]
    		for(j = i+1; j >= 0; j--){
    			if(temp < a[j-1])
    				a[j] = a[j-1];
    			else{
    				a[j] = temp;
    				break;			
    				}
    			
    		}
    	}
    }
    console.log(a.toString().replace(/,/g , " "));
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
