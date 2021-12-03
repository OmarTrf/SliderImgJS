var slides = document.querySelector('.slider-items').children;
var rightSlide = document.querySelector('.slide-right');
var leftSlide = document.querySelector('.slide-left');
var totalesSlides = slides.length;
var index=0;

rightSlide.onclick=function () {
	next("right");
}
leftSlide.onclick=function (){
	next('left');
}

function next(direction){
	if (direction=="right") {
		index++;
		if (index == totalesSlides) {
			index = 0;
		}
	}else{
		if (index == 0) {
			index=totalesSlides-1;
		}else{
			index--;
		}
	}
	for(var i=0;i<slides.length;i++){
		slides[i].classList.remove('active');
	}
	slides[index].classList.add('active');
}