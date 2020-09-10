document.onload = loading()

function loading(){
let isLoading = true
fetch('https://dwaapi.juvasquez88.vercel.app/letters')
  .then(res => res.json())
  .then(leaguesJson => {
    console.log(leaguesJson)
})
.catch(err => {
  throw new Error(err.message)
})
.finally(() => { isLoading = false })

console.log(isLoading)
createElements()
}

function createElements(){
  const idMain = document.getElementById('main')
  console.log(idMain)
}


