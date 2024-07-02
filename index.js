const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//creates a variable that store the value executed by the reducer
//acc is the accumulator value, curr is the current value
//0 is the starting point/initial value
const totalBatteries = batteryBatches.reduce((acc, curr)=>{
  return acc + curr
})
console.log(totalBatteries)

/*alt solution
function reducer (acc, curr){
  return acc + curr
}
const totalBatteries = batteryBatches.reduce(reducer )
console.log(totalBatteries) */