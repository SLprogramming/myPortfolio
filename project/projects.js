const banner = document.querySelector("header");
const bodyTag = document.querySelector("body");
const projectsContaoner = document.querySelector(".projectsContainer");
const projectsData = [
  {
    title: "Guess My Number",
    url: "https://slprogramming.github.io/guessMyNumber/",
    img: "./pic/guess.png",
  },
  {
    title: "Pig Game",
    url: "https://slprogramming.github.io/pigGame/",
    img: "./pic/pigGame.png",
  },
  {
    title: "Image Slide",
    url: "https://slprogramming.github.io/upgrade_image_slide/",
    img: "./pic/image.png",
  },
  {
    title: "Quote Generator",
    url: "https://slprogramming.github.io/quote-Generator/",
    img: "./pic/quote.png",
  },
  {
    title: "Real-time Clock",
    url: "https://slprogramming.github.io/Clock/",
    img: "./pic/clock.png",
  },
  {
    title: "Tic-Tac-Toe",
    url: "https://slprogramming.github.io/tictactoe/",
    img: "./pic/tictactoe.png",
  },
  {
    title: "Calculator",
    url: "https://slprogramming.github.io/Calculator/",
    img: "./pic/calculator.png",
  },
  {
    title: "Huddle-landing-page",
    url: "https://slprogramming.github.io/Frontend-Mentor-Huddle-landing-Page/",
    img: "./pic/huddle.png",
  },
  {
    title: "Real-estate Landing page",
    url: "https://slprogramming.github.io/real-estate-page/",
    img: "./pic/real-estate.png",
  },
  {
    title: "illustation login page",
    url: "https://slprogramming.github.io/illustation/",
    img: "./pic/illu-station.png",
  },
];
/* <div class="projectsContainer">
      <a class="box" href="#">
        <img src="" alt="" />
        <div class="title">asdf</div>
      </a>
    </div> */
for (let i = 0; i < projectsData.length; i++) {
  let project = `
  <a class="box" href="${projectsData[i].url}" target="_blank">
    <img src="${projectsData[i].img}" alt="${projectsData[i].title}" class="projectImage" />
    <div class="title">${projectsData[i].title}</div>
  </a>
`;
  projectsContaoner.innerHTML += project;
}
