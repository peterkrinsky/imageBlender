function populate() {

    
    var img1 = new Image();
    var img2 = new Image();
    img1.src = imgURL1;
    img2.src = imgURL2;
    img1.x = 0;
    img1.y = 0;
    img2.x = 0;
    img2.y = 0;
    var top = document.getElementById('top');
    img1.style.mixBlendMode = "normal";
    document.getElementById('top').appendChild(img1);
    document.getElementById('bottom').appendChild(img2);


} 

