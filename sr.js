let btn=document.querySelector(".record-btn")
btn.addEventListener("click",async function () {
    let stream = await 
    navigator.mediaDevices.getUserMedia({video:true})
    const mime=MediaRecorder.isTypeSupported("video/webm; codecs=vp9")?"video/webm; codecs=vp9":"video/webm"
    let MediaRecorder = new MediaRecorder(stream,{MimeType:mime})
    
})
let chunks =[]
MediaRecorder.addEventListener('dataavailale',function(e)
{
    chunks.push(e.data)
})
MediaRecorder=addEventListener('stop',function(){
    let blob = new Blob(chunks,{
        type : chunks[0].type
    })
    let url = URL.createObjectURL(blob)
    let video=document.querySelector("Video")
    video.src=url
    let a = document.createElement('a')
    a.href=url
    a.download='video.webm'
    a.click()
})
MediaRecorder.start()
