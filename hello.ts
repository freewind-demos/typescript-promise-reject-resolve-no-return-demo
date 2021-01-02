async function test() {
  const value = await new Promise((resolve, reject) => {
    reject('fail');
    resolve('ok')
  })
  console.log(value)
}

test()
