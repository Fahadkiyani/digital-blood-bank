

// window.onload(alert("Hello! \nThis website is under-development."));
let arrowContainer= document.querySelector('.arrow-container');
let downArrowBounce = document.querySelector('.fa-long-arrow-down');
setTimeout(() => {
        downArrowBounce.style.color = 'red';
}, 1000);


window.onscroll = function() {scrollControll()};                  

function scrollControll() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    arrowContainer.style.visibility = 'hidden';
    
  } else {
    arrowContainer.style.visibility = 'visible';
    arrowContainer.style.tansition = '1000ms ease-in-out';
  }
}