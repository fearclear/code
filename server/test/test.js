async function ajax(str) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(`hello ${str}`)
    }, 1000)
  })
}

async function run() {
  let response1 = await ajax('data1.json')
  console.log(response1)
  let response2 = await ajax(response1)
  console.log(response2)
  let response3 = await ajax(response2)
  console.log(response3)
}

// 不阻塞
run()
