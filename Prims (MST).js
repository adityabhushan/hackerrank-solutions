function processData(input) {

input = input.split('\n')

var nodeEdge = input[0].split(' ').map(function num(a){return parseInt(a)})
var node = nodeEdge[0]
var edge = nodeEdge[1]
var visited = [];
var sum = 0;

for(var i = 0; i < node; i++)
  visited[i] = false;

var a = [[node,node]];
for (var i = 0; i < node; i++){
        a[i]= new Array(node)
            for(var j = 0; j < node; j++){
                if(i == j)
                    a[i][j] = -1
                else
                a[i][j]  = Infinity;
            }
        }

for(var z = 1; z <= edge; z++){
    var input1 = input[z].split(' ').map(function num(a){return parseInt(a)})
    var nodeA = input1[0]-1;
    var nodeB = input1[1]-1;
    var weight= input1[2];
        
    a[nodeA][nodeB] = a[nodeB][nodeA] = weight;   
    
}


var source = input[edge+1];
//console.log(a);

visited[source-1] = true;
var temp;
var k = 0;

while(k < node-1){
  var min = Infinity;
  for(var i = 0; i < node; i++){
    if(visited[i] == true){
      for (var j = 0; j < node; j++){
        if(a[i][j] < min && !visited[j] && a[i][j] != Infinity){
          min = a[i][j];
          temp = j;
          //console.log('k is '+k+', i is '+i+', and j is '+j+', and min is '+a[i][j])
        }
      }
      //console.log(a[i][j])
    }
    //console.log('min is ' +min)
  }
  sum += min
  
  visited[temp] = true;
  k++;
}
console.log(sum)
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
