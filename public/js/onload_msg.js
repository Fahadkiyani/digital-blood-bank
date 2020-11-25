// window.onload(alert("Hello! \nThis website is under-development."));
let downArrowBounce = document.querySelector('.fa-long-arrow-down');
setTimeout(() => {
        downArrowBounce.style.color = 'red';
        downArrowBounce.style.animation
}, 1000);


window.onscroll = function() {scrollControll()};

function scrollControll() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector('.arrow-container').style.visibility = 'hidden';
  } else {
    document.querySelector('.arrow-container').style.visibility = 'visible';
  }
}