// JUST USING BUILT IN FETCH METHOD.
fetch("https://www.rtd-denver.com/app/nextride/stop/34236").then(res =>{
  res.json()
}).then(data =>{
  console.log(data)
})