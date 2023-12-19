

// const randomNum = new Promise((resolve, reject) => {
//     let r = Math.random();
//     if (r < 0.5) {
//         resolve(r);
//     } else {
//         reject(r);
//     }
// })
// console.log(randomNum);
// randomNum.then((r) => {
//     console.log(`the number is less than 0.5 : ${r}`);
// }).catch((r) => {
//     console.log(`the number is greater than or equal to 0.5 : ${r}`);
// })

function randomNumber() {
    rNum = Math.random();

    return new Promise((resolve, reject) => {
        if (rNum < 0.5) {
            resolve(rNum);
        } else {
            reject(rNum);
        }
    })
}

randomNumber().then((r) => {
    console.log(`Success : ${r}`);
}).catch((r) => {
    console.log(`failue : ${r}`);
})

function download(url) {
    console.log(`File has started to download from ${url}`);
    return new Promise((res, rej) => {
        if (!url.includes('https')) {
            rej(err)
        }
        else {
            setTimeout(() => {
                var path = url.split('/').pop();
                console.log(`file is Downloaded as ${path}`);
                res(path);
            }, 2000)
        }
    })
}

function compress(path) {
    console.log(`the file is started to compress`);

    return new Promise((res, rej) => {
        setTimeout(() => {
            var compressedPath = path.split('.')[0] + '.zip';
            console.log(`the file is compressed as ${compressedPath}`);
            res(compressedPath);
        }, 3000);
    })
}

function upload(compressedPath) {
    console.log(`starting to upload file`);

    return new Promise((res, rej) => {
        setTimeout(() => {
            var uploadPath = compressedPath.split('.')[0] + '.jpg';
            console.log(`uploaded as ${uploadPath}`);
            res(uploadPath);
        }, 2000);
    })
}

// download('https://localstorage/galery/user/profile.jpg').then((path) => {
//     console.log(`file is Downloaded as ${path}`);
//     compress(path).then((compressedPath) => {
//         console.log(`the file is compressed as ${compressedPath}`);
//         upload(compressedPath).then((uploadPath) => {
//             console.log(`uploaded the as ${uploadPath}`);
//             console.log('done!!');
//         })
//     })
// })

download('https://localstorage/galery/user/profile.jpg')
    .then(compress)
    .then(upload)
    .catch((err) => {
        console.log('error');
        console.log(err.message);
    })



