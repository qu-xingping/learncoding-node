function test1 () {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(1)

        }, 1000)

    })

}

function test2 () {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(2)

        }, 2000)

    })

}

async function exc1 () {

    console.log('exc1 start:',Date.now())

    let res1 = await test1();

    let res2 = await test2(); // 不依赖 res1 的值

    console.log('exc1 end:', Date.now())

}

async function exc2 () {

    console.log('exc2 start:',Date.now())

    let [res1, res2] = await Promise.all([test1(), test2()])

    console.log('exc2 end:', Date.now())

}

exc1();

exc2();