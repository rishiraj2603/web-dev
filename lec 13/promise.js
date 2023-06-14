
function downloadFile(path) {
    return new Promise((resolve, reject) => {
        console.log('File started to download from path:', path);
        setTimeout(() => {
            let file = path.split('/').pop();
            resolve(file);
        }, 3000);
    })
}

function compressFile(file) {
    return new Promise((resolve, reject) => {
        console.log('File started to compress');
        setTimeout(() => {
            let compressedFile = file.split('.')[0] + '.zip';
            console.log("file compressed")
            resolve(compressedFile);
        }, 2000);
    })
}

function uploadFile(compressedFile){
    console.log(`File started to upload at http://facebookCloud.com/${compressedFile}`);
    setTimeout(() => {
        resolve();
    }, 3000);
}

downloadFile('https://facebook.com/profile.jpg')
 .then(downloadFile)
.then(compressFile)
.then(uploadFile)
.then(()=>{
    console.log('All Done!')
})