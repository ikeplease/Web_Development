
var imageArray = ["/IkeE/Bootcamp/PROJECTS/JSprojects/Project4/assets/background1.jpeg","/IkeE/Bootcamp/PROJECTS/JSprojects/Project4/assets/background2.jpeg","/IkeE/Bootcamp/PROJECTS/JSprojects/Project4/assets/background3.jpeg"];
var index = 0;

function rotateImage() {
    document.querySelector("img").setAttribute("src", imageArray[index]);
    index++;
    if (index >= imageArray.length) {
        index = 0;
    }
}
setInterval(rotateImage, 3000);

