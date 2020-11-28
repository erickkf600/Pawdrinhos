const toggleOptions = () =>{
    var options = document.getElementById("new-post");
    if (document.getElementsByClassName("new-post__options--hide").length == 0) {
        options.className = "new-post__options new-post__options--hide";
    } else {
        options.className = "new-post__options new-post__options--show";

    }
}


const handleCamera = async () =>{
    if ( "mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
        console.log(navigator)
        // let cam = navigator.getWebcam = (navigator.getUserMedia || navigator.webKitGetUserMedia || navigator.moxGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
        // const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
    }
}