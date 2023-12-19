function download(url, downloaded) {
    console.log(`File has started to download from ${url}`);

    setTimeout(() => {
        var path = url.split('/').pop();
        downloaded(path);
    }, 2000)
}

function compress(path, compressed) {
    console.log(`the file is started to compress`);

    setTimeout(() => {
        var compressedPath = path.split('.')[0] + '.zip';
        compressed(compressedPath);
    }, 3000);
}

function upload(compressedPath, uploaded) {
    console.log(`starting to upload file`);

    setTimeout(() => {
        var uploadPath = compressedPath.split('.')[0] + '.jpg';
        uploaded(uploadPath);
    }, 2000);
}

download('https://localstorage/galery/user/profile.jpg', (path) => {
    console.log(`the file has been downloaded as ${path}`);
    compress(path, (compressedPath) => {
        console.log(`the file hass been compressed as ${compressedPath}`);
        upload(compressedPath, (uploadPath) => {
            console.log(`the file has been uploaded as ${uploadPath}`);
            console.log(`Everything done !!!`);
        });
    });
});



