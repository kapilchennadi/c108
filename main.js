function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6Lba50eJo/model.json',modelReady);
}

function modelReady(){
 classifier.classify(gotResults);
}

function gotResults(error,results){
if(error)

{
  console.log(error)  
}
else
{
    console.log(results)
    document.getElementById("result_label").innerHTML='i can hear:' + results[0].label;
    document.getElementById("result_confidence").innerHTML='accuracy:'+(results[0].confidence*100).toFixed(2)+"%";

    img=document.getElementById("alien_1");
    img1=document.getElementById("alien_2");
    img2=document.getElementById("alien_3");
    img3=document.getElementById("alien_4");

    if(results[0].label == "clap"){
      img.src='aliens-01.gif';
      img1.src='aliens-02.png';
      img2.src='aliens-03.png';
      img3.src='aliens-04.png';
    }
   else if(results[0].label == "bell"){
      img.src='aliens-01.png';
      img1.src='aliens-02.gif';
      img2.src='aliens-03.png';
      img3.src='aliens-04.png';    
    }
     else if(results[0].label == "whistle"){
      img.src='aliens-01.png';
      img1.src='aliens-02.png';
      img2.src='aliens-03.gif';
      img3.src='aliens-04.png';
    }
    else{
      img.src='aliens-01.png';
      img1.src='aliens-02.png';
      img2.src='aliens-03.png';
      img3.src='aliens-04.gif';
    }
}    
}




