
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined){
    return []
  }
  let sorted = []
  for (let i=0; i<matrix.length; i++){
    if (i % 2){
      sorted=sorted.concat(matrix[i].reverse())
    }else{
      sorted=sorted.concat(matrix[i])
    }
    }return sorted;
  }