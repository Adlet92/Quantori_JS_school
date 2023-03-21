let dvd = document.getElementById('dvd');
let dvd2 = document.getElementById('dvd2');
let interval_id;
let x_incr = 1;
let y_incr = 1;
let x2_incr = 1;
let y2_incr = 1;

function init() {
  update_color();
  update_color2();
  dvd.style.position = 'absolute';
  dvd2.style.position = 'absolute';
  document.body.style.background = '#4d4d4d';
  setInterval(frame, 5);
  setInterval(frame2, 4);
}
// function init2() {
//   update_color2();
//   dvd2.style.position = 'absolute';
//   setInterval(frame2, 4);
// }

function update_color() {
  // let color = Math.round((Math.random() * 100));
  // dvd.style.backgroundColor = `hsl(${color},100%,50%)`;
  dvd.style.filter = randomcolor();
  // dvd.style.backgroundColor = 'rgba('+ randomcolor() + ',' + randomcolor() + ',' + randomcolor() + '\)';
  // const picture = document.querySelector('logo');
  // const currentColor = getComputedStyle(picture).filter.split(' ')[2].slice(0, -1);
  // const newColor = randomcolor(currentColor);
  // picture.style.filter = `opacity(0.5) drop-shadow(0 0 0 ${newColor})`;
}
// function randomcolor() {
//   return Math.floor(Math.random() * 255);
// }
function update_color2() {
  dvd2.style.filter = randomcolor();
}
function playSound(){
  const audioElement = document.getElementById("laser");
  audioElement.currentTime = 0;
  audioElement.play();
}
function randomcolor(){
  // let currentColor = "invert(38%) sepia(300%) saturate(900%) hue-rotate(190deg)";
  let blue = "invert(38%) sepia(300%) saturate(900%) hue-rotate(190deg)";
  let orange = "invert(72%) sepia(32%) saturate(1087%) hue-rotate(335deg) brightness(101%) contrast(103%)";
  let white = "invert(318%) sepia(300%) saturate(900%) hue-rotate(190deg)";
  let blur = "invert(94%) sepia(91%) saturate(7483%) hue-rotate(222deg) brightness(94%) contrast(97%)";
  let yellow = "invert(87%) sepia(74%) saturate(6623%) hue-rotate(339deg) brightness(101%) contrast(101%)";
  let pink = "invert(29%) sepia(97%) saturate(3231%) hue-rotate(276deg) brightness(104%) contrast(126%)";
  let green = "invert(62%) sepia(29%) saturate(1620%) hue-rotate(74deg) brightness(110%) contrast(128%)";
  let sky = "invert(79%) sepia(72%) saturate(499%) hue-rotate(101deg) brightness(100%) contrast(106%)";
  let darkBlue = "invert(10%) sepia(96%) saturate(7166%) hue-rotate(263deg) brightness(100%) contrast(112%)";
  let pink2 = "invert(39%) sepia(86%) saturate(5198%) hue-rotate(297deg) brightness(98%) contrast(114%)";
  let lightOrange = "invert(48%) sepia(37%) saturate(2606%) hue-rotate(326deg) brightness(104%) contrast(110%)";
  let lightGreen = "invert(85%) sepia(39%) saturate(578%) hue-rotate(54deg) brightness(101%) contrast(101%)";
  let lightBlue = "invert(74%) sepia(28%) saturate(6244%) hue-rotate(195deg) brightness(108%) contrast(101%)";
  let purple = "invert(91%) sepia(49%) saturate(4122%) hue-rotate(253deg) brightness(104%) contrast(101%)";
  let red = "invert(15%) sepia(87%) saturate(7133%) hue-rotate(347deg) brightness(101%) contrast(105%)";
  let lightRed = "invert(48%) sepia(30%) saturate(7240%) hue-rotate(328deg) brightness(107%) contrast(100%)";
  let lightPink = "invert(80%) sepia(4%) saturate(2259%) hue-rotate(301deg) brightness(101%) contrast(101%)";
  let lightSky = "invert(71%) sepia(88%) saturate(917%) hue-rotate(193deg) brightness(111%) contrast(107%)";
  let oblako = "invert(92%) sepia(21%) saturate(421%) hue-rotate(106deg) brightness(98%) contrast(111%)";
  let arr = [blue, orange, white, blur, yellow, pink, green, sky, darkBlue, pink2, lightOrange, lightGreen, 
    lightBlue, purple, red, lightRed, lightPink, lightSky, oblako];
  // let arr = [blue, orange]
  // let newColor;
    // do{
    //   newColor = arr[Math.floor(Math.random() * arr.length)]
    // }
    // while(newColor === currentColor)
    // console.log(currentColor)
    // return newColor
  let i = arr.length;
  let j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    console.log(arr[j])
    return arr[j];
  }
}

function handle_collision() {
  let dvd_height = dvd.offsetHeight;
  let dvd_width = dvd.offsetWidth;
  let left = dvd.offsetLeft;
  let top = dvd.offsetTop;

  let win_height = window.innerHeight;
  let win_width = window.innerWidth;

  if (left <= 0 || left + dvd_width >= win_width) {
    x_incr = ~x_incr + 1;
    update_color();
    playSound();
  }
  if (top <= 0 || top + dvd_height >= win_height) {
    y_incr = ~y_incr + 1;
    update_color();
    playSound();
  }
}
function handle_collision2() {
  let dvd2_height = dvd2.offsetHeight;
  let dvd2_width = dvd2.offsetWidth;
  let left = dvd2.offsetLeft;
  let top = dvd2.offsetTop;

  let win_height = window.innerHeight;
  let win_width = window.innerWidth;

  if (left <= 0 || left + dvd2_width >= win_width) {
    x2_incr = ~x2_incr + 1;
    update_color2();
    playSound();
  }
  if (top <= 0 || top + dvd2_height >= win_height) {
    y2_incr = ~y2_incr + 1;
    update_color2();
    playSound();
  }
}

function frame() {
  handle_collision();
  dvd.style.top = dvd.offsetTop + y_incr;
  dvd.style.left = dvd.offsetLeft + x_incr;
}
function frame2() {
  handle_collision2();
  dvd2.style.top = dvd2.offsetTop + y2_incr;
  dvd2.style.left = dvd2.offsetLeft + x2_incr;
}

init();
// init2();