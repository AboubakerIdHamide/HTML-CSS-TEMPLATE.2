let menuIcon=document.querySelector(".toogle-menu"),
ul=document.querySelector("header nav ul");

menuIcon.addEventListener("click", ()=>{
    ul.classList.toggle("hide");

    if(menuIcon.classList.contains("fa-bars")){
        menuIcon.classList.replace("fa-bars","fa-x");
        menuIcon.animate([
        {transform:"rotate(10deg)"},
        {transform:"rotate(180deg)"}
        ],
        {duration:400,
            easing:"ease-in-out",
            direction:"alternate"
        })
        menuIcon.style.color='#19c8fa';
    }else{
        menuIcon.style.color='#fff';
        menuIcon.classList.replace("fa-x","fa-bars");
    }

   

})

let images=["images/landing.jpg", "images/landing2.jpg", "images/landing3.jpg"],
left=document.querySelector(".landing .changeBg:first-of-type"),
right=document.querySelector(".landing .changeBg:last-of-type"),
landing=document.querySelector(".landing"),
imageIndex=0;


left.onclick=()=>{
    slide(false)
}
right.onclick=()=>{
    slide(true)
}


function slide(r){
    if(r==true){
        if(imageIndex>=2){
            imageIndex=-1;
        }
        imageIndex+=1;
        landing.style.cssText=`background-image: url('${images[imageIndex]}');`;
        deleteActive(imageIndex);
    }else{
        if(imageIndex<=0){
            imageIndex=3;
        }
        imageIndex-=1;
        landing.style.cssText=`background-image: url('${images[imageIndex]}');`;
        deleteActive(imageIndex);
    }
}

function deleteActive(i){
    let bullets=document.querySelectorAll(".landing .bullets li");
    bullets.forEach((li)=>{
        if(li.classList.contains("active")){
            li.classList.remove("active");
        }
    })
    bullets[i].classList.add("active");
}

setInterval(() => {
    slide(true);
}, 5000);



let myUpButton = document.createElement("button");
myUpButton.innerHTML = "<i class='fas fa-angle-up'></i>";
myUpButton.style.cssText =
  "display:none;border-radius:50%;position:fixed;bottom:30px;right:30px;color:white;background-color:#19c8fa;border:none;width:40px;height:40px;z-index:12;font-size:20px;cursor:pointer;";
document.body.appendChild(myUpButton);

window.onscroll = () => {
  if (window.scrollY > 600) {
    myUpButton.style.display = "block";
    if(!ul.classList.contains("hide")){
        menuIcon.style.color='#fff';
        menuIcon.classList.replace("fa-x","fa-bars");
        ul.classList.add("hide");
    }

  } else {
    myUpButton.style.display = "none";
  }
};

myUpButton.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
