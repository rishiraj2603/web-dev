function Downloadfile(path,downloaded){
    console.log('file stated to download from path :' ,path);
    setTimeout(() => {
        let file = path.split('/').pop()
        downloaded(file);
    }, 3000);
}
function compress(file,compressed){
    console.log("file stated to compress")
    setTimeout(() => {
        let compressedfile= file.split('.') + '.zip'
        compressed(compressedfile)
    }, 2000);
}

function uploadFile(compressedfile, uploaded){
    console.log(`File started to upload at http://facebookCloud.com/${compressedfile}`);
    setTimeout(() => {
        uploaded();
    }, 3000);
}

Downloadfile('http://facebook.com/profile.jpg',(file)=>{
console.log('file downloaded as',file);
 compress(file,(compressedFile)=>{
    console.log('File Compressed Successfully as',compressedfile);
    uploadFile(compressedfile, ()=>{
        console.log('Successfully uploaded!')
    });
});
})