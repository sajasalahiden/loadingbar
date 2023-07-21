let sectionEle = document.querySelector("section");
let msg = document.querySelector("h1");

let openBoxBtn = document.querySelector(".openBox");
let closeBoxBtn = document.querySelector(".closeBox");
let yesBtn = document.querySelector(".yesBtn");
let noBtn = document.querySelector(".noBtn");

openBoxBtn.onclick = _ =>{
  yesBtn.style.display=""
  noBtn.style.display=""
  sectionEle.classList.add("show")
}

closeBoxBtn.onclick = _ =>{
  sectionEle.classList.remove("show")
}
noBtn.onclick = _ =>{
  sectionEle.classList.remove("show")
}
yesBtn.onclick = _ =>{
  msg.innerHTML = "done !!!"
  yesBtn.style.display="none"
  noBtn.style.display="none"
  // sectionEle.classList.remove("show")
}
