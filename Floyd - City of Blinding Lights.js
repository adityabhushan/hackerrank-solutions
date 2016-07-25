function processData(input) {
    
input = input.split('\n')
    
var nodeEdge = input[0].split(' ').map(function num(a){return parseInt(a)})

var node = nodeEdge[0]
var edge = nodeEdge[1]


var a = [[node,node]];
for (var i = 0; i < node; i++){
        a[i]= new Array(node)
            for(var j = 0; j < node; j++){
                if(i == j)
                    a[i][j] = 0
                else
                a[i][j]  = 999
            }
        }

for(var z = 1; z <= edge; z++){
    var input1 = input[z].split(' ').map(function num(a){return parseInt(a)})
    var nodeA = input1[0]-1;
    var nodeB = input1[1]-1;
    var weight= input1[2];
        
    a[nodeA][nodeB] = weight;   
    
}

//console.log(a);
for(var k = 0; k < node; k++){
    for(i = 0; i < node; i++){
        for(j = 0; j < node; j++){
            a[i][j] = min(a[i][j], a[i][k]+a[k][j] )
        }
    }
}

//console.log(a);

var query = edge+2;
//console.log(query)
for( var i = query; i < input.length; i++){
    var input1 = input[i].split(' ').map(function num(a){return parseInt(a)})
    var nodeA = input1[0]-1;
    var nodeB = input1[1]-1;
    if(a[nodeA][nodeB] == 999){
        a[nodeA][nodeB] = -1;
    }
    console.log(a[nodeA][nodeB])

}


} 


function min(a,b){
    if(a<b)
        return a;
    else
        return b;
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
