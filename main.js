//Webcam.set for the live view of the webcam by setting the properties
Webcam.set({ 
    width: 350,
    height: 300,
    png_quality: 90,
    image_format: 'png'
})
camera= document.getElementById("camera");

Webcam.attach('camera')
//Webcam.attach activates the users webcam & asks for the appropriate permission & begins to show the live camera image

function captureimg(){
    Webcam.snap(
     function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"> '
     }
    )
}

//Webcam.snap to snap a picture

console.log('ml5 version:' , ml5.version);
//ml5.js helps to wrok with different models and do the comparison between our input
//It compares imageaudio with the model and give the result
//one of the feautures of ml5.js is that it provides a pre-trained model with detects the images from a video or a webcam live view

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nWpMcK3gg/model.json'.modelLoaded);

function modelLoaded(){
    console.log("your model is loaded");
}
//imageClassifier is a pre-defined function fo the ml5 libarary that is used to perform image classification using a pre-trained model

function butinn(){
    storedimg = document.getElementById("captured_img");
    classifier.classify(storedimg, gotResult);
}

function gotResult(error, results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result-object").innerHTML=results[0].label;
    document.getElementById("result-object-accuracy").innerHTML=(results[0].confidence*100).toFixed(3)+" %";
}
}


