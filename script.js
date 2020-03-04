var imgs = document.getElementsByClassName('exImg');
// var clickButton = document.getElementsByClassName('examples')
const figures = ['fig1', 'fig2', 'fig3', 'fig4', 'fig5'];
const figId = [];

const images = ['img1', 'img2', 'img3', 'img4', 'img5'];
const imgAtUse = [];

for(i=0; i < imgs.length; i++) {
  imgs[i].hidden = true;
}

images.forEach(function(key) {
  imgAtUse.push(document.getElementById(key));
})

figures.forEach(function(key) {
  figId.push(document.getElementById(key));
})


figID.addEventListener('click', clicked)

function clicked(img) {
    if (event.target.hidden === true) {
      // Enlarge it
      event.target.hidden = false;
    } else {
      // expand the image
      event.target.hidden = true
    }
  }

figId.forEach(eventAssignment);



// function toggleImage() {
//   for(i=0; i<images.length; i++) {
//     if (images[i].hidden === true) {
//       //Enlarge it
//       images[i].hidden= false;
//     } else {
//       //expand the image
//       images[i].hidden = true
//     }
//   }
// }
