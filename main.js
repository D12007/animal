function sound_recognition(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gnguUTRlv/model.json",modelReady);
}
function modelReady(){
 classifier.classify(gotResult);

}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
console.log(results);
random_num_r=Math.floor(Math.random()*255)+1;
random_num_g=Math.floor(Math.random()*255)+1;
random_num_b=Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML="I can hear:  "+results[0].label;
document.getElementById("result_label").style.color="rgb("+random_num_r+","+random_num_g+","+random_num_b+")";
document.getElementById("accuracy_label").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(2)+" %";
document.getElementById("accuracy_label").style.color="rgb("+random_num_r+","+random_num_g+","+random_num_b+")";

img1=document.getElementById("A1");

if(results[0].label=="Lion"){
    img1.src="icons8-lion-96.png"; 
}
else if(results[0].label=="Dog"){
    img1.src='icons8-dog-64.png';}
else if(results[0].label=="Cat"){
    img1.src='icons8-cat-64.png';}
else (result[0].label=="Elephant") {
    img1.src='icons8-elephant-64.png';
};

