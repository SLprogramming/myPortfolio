//taking element/tags from DOM
const helloTag = document.querySelector("#about");
const IamTag = document.querySelector("#projects");
const nameTag = document.querySelector("#repository");
const facebook = document.querySelector(".facebook");
const instagram = document.querySelector(".instagram");
const twitter = document.querySelector(".twitter");
const icons = document.querySelectorAll(".icon");
const classArr = ["fa", "ia", "ta"];
for (let p = 0; p < icons.length; p++) {
  icons[p].addEventListener("mouseover", () => {
    icons[p].classList.add("active1");
    icons[p].classList.add(classArr[p]);
  });
  icons[p].addEventListener("mouseout", () => {
    icons[p].classList.remove("active1");
    icons[p].classList.remove(classArr[p]);
  });
}

//global variable
hello = "Hello!";
Iam = "I am";
Name = "Tine Linn Maung";
develop = "My projects";

//textAnimation
let i = 0;
let j = 0;
const textAnimation = (text, tag) => {
  if (i < text.length) {
    tag.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => {
      textAnimation(text, tag);
    }, 100);
  } else {
    i = 0;
    j += 1;
    switch (j) {
      case 1:
        textAnimation(Iam, IamTag);
        break;
      case 2:
        textAnimation(Name, nameTag);
        break;
    }
  }
};
//function
const fun = (tag, text, text1) => {
  tag.addEventListener("mouseover", () => {
    tag.innerHTML = text;
    tag.classList.add("active");
  });
  tag.addEventListener("mouseout", () => {
    tag.innerHTML = text1;
    tag.classList.remove("active");
  });
};

facebook.classList.add("fActive");
instagram.classList.add("iActive");
twitter.classList.add("tActive");

textAnimation(hello, helloTag);

setTimeout(() => {
  fun(helloTag, "about me", hello);
  fun(IamTag, "My projects", Iam);
  fun(nameTag, "My repositories", Name);
}, 2400);
