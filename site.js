let icon = document.querySelector(".rt");
let nav = document.querySelector(".mobile-nav");
let close = document.querySelector(".fa-close");
let right = document.querySelector(".fa-angle-right");
let left = document.querySelector(".fa-angle-left");
let slider = document.querySelector(".slider_wrapper");
let container = document.querySelector(".slider_container");
let full_width = (slider.offsetWidth*0.58);
let slide =document.querySelector(".slide");
let left_val = (full_width)/5;
let navbar = document.querySelector("nav");
let progress= document.querySelector(".progress-bar");
let all = document.querySelectorAll("body > div");
let ic= document.querySelector(".fa-align-justify");
let height2=0;
 let full_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
icon.addEventListener("click",()=>{
nav.style="left:50%";
})
close.addEventListener("click",()=>{
nav.style="left:100%";
})

left.addEventListener("click",()=>{
 slider.classList.add("pause");
 let current_left = (slider.offsetLeft-10)+(slider.offsetWidth * 0.00000);
slider.style.left= ((slide.offsetWidth+current_left)*1).toString()+"px";
});

right.addEventListener("click",()=>{
 slider.classList.add("pause");
  let current_left = (-slider.offsetLeft+10)+(slider.offsetWidth * 0.0000);
slider.style.left= ((slide.offsetWidth+current_left)*-1).toString()+"px";
});

window.onscroll = ()=>{
	if(document.documentElement.scrollTop > 0 || document.body.scrollTop > 0){
		navbar.classList.add("switch_nav");
		ic.style.color="white";
		height2 = ((document.documentElement.scrollTop)/(full_height)) * 100;
		progress.style.width = height2.toString()+"%";
		document.querySelector(".logo > img").src = document.querySelector(".logo > img").src.replace(document.querySelector(".logo > img").src,"images/logo2.png");
	}
	else{navbar.classList.remove("switch_nav"); progress.style.width = "0%";
	ic.style.color="black";
 		document.querySelector(".logo > img").src = document.querySelector(".logo > img").src.replace(document.querySelector(".logo > img").src,"images/logo.png");}
	all.forEach((item)=>{
		if(document.body.scrollTop > item.offsetTop  || document.documentElement.scrollTop > item.offsetTop ){
			item.style.opacity="1";
			item.style.left="0%";
		}
	})
}



