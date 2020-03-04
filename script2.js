const imgs = document.getElementsByClassName('exImg');
const fig = document.getElementsByClassName('examples'); 

const myButton = document.getElementById('myBtn');


// ****Setting the hidden function for images******

//set all images to hidden
for(i=0; i < imgs.length; i++) {
  imgs[i].hidden = true;
}

// now to change the hidden property with onclick
for (let x=0; x<fig.length; x++) {
	fig.item(x).onclick = function() { 
		if (imgs.item(x).hidden === true) {
			imgs.item(x).hidden = false;
			imgs.item(x).style.display = null;
		} else {
			imgs.item(x).style.display = 'none';	
			imgs.item(x).hidden = true;		
		}
	}
}


// *****Back to Top Button*****

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		myButton.style.display = 'block';
	} else {
		myButton.style.display = 'none';
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}



