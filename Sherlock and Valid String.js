function processData(input) {
var b = input;
var c = [];
var count = 0;
var max = 0;
var min = 1000000;
var d = [];

for(i = 0; i < 26; i++){
	c[i] = 0;	
}

for(i = 0; i < b.length; i++){
	switch(b[i]){
		case 'a':
			c[0]++;
			break;
		case 'b':
			c[1]++;
			break;
		case 'c':
			c[2]++;
			break;
		case 'd':
			c[3]++;
			break;
		case 'e':
			c[4]++;
			break;
		case 'f':
			c[5]++;
			break;
		case 'g':
			c[6]++;
			break;
		case 'h':
			c[7]++;
			break;
		case 'i':
			c[8]++;
			break;				
		case 'j':
			c[9]++;
			break;
		case 'k':
			c[10]++;
			break;
		case 'l':
			c[11]++;
			break;
		case 'm':
			c[12]++;
			break;
		case 'n':
			c[13]++;
			break;
		case 'o':
			c[14]++;
			break;
		case 'p':
			c[15]++;
			break;
		case 'q':
			c[16]++;
			break;
		case 'r':
			c[17]++;
			break;
		case 's':
			c[18]++;
			break;
		case 't':
			c[19]++;
			break;
		case 'u':
			c[20]++;
			break;
		case 'v':
			c[21]++;
			break;
		case 'w':
			c[22]++;
			break;
		case 'x':
			c[23]++;
			break;
		case 'y':
			c[24]++;
			break;
		case 'z':
			c[25]++;
			break;
	}	
}

for(i = 0; i < c.length; i++){
	if(c[i] == 0){
		c.splice(i, 1)	
		i--;
	} 
}


var flag = c[0]
for(i = 0; i < c.length; i++){
	if(flag != c[i])
		max += Math.abs(flag - c[i])
}



if(max <= 1)
	console.log('YES')
else
	console.log('NO')
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
