let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{
    
    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx + 1) * 400 )
    });

    setTimeout(()=>{
      logoSpan.forEach((span, idx)=>{

        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50)
      })
    }, 2000)

    setTimeout(()=>{
      intro.style.top= '-100vh';
    }, 2300)
  })
})


var videos = ['vid/background_1.mp4', 'vid/background_2.mp4','vid/background_3.mp4', 'vid/background_4.mp4'];

// Get all the elements with a specific class
var elements = document.querySelectorAll('.myvideo');

// Get the video element
var video = document.querySelector('video');

// Create an Intersection Observer
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      // Get the index of the current element
      var index = Array.from(elements).indexOf(entry.target);

      // Change the video source
      video.src = videos[index];

// Add the fade-in class
video.classList.add('fade-in');

// Remove the fade-in class after the animation completes
video.onanimationend = function() {
  video.classList.remove('fade-in');
};

video.play();
    }
  });
}, { threshold: 0.7 }); // Adjust the threshold value as needed

// Observe each element
elements.forEach(function(element) {
  observer.observe(element);
});


