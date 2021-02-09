// Make sure Alpine loads properly with IE11
window.deferLoadingAlpine = function(callback) { document.addEventListener('DOMContentLoaded', callback); }

// Get deatils section show appropriate data
var section = location.hash;

function details() {
  return {
    carouselNav: function(dir) {
      if(dir == 1) {
        if(this.activeSlide === this.thumbs.length-1) {
          this.activeSlide = 0;
        } else {
          this.activeSlide = this.activeSlide + 1;
        }
      }
      if(dir == 0) {
        if(this.activeSlide === 0) {
          this.activeSlide = this.thumbs.length-1;
        } else {
          this.activeSlide = this.activeSlide - 1;
        }
      }
    },
    showCarousel:false,
    activeSlide: 0,
    title:'Wellness & Recreation',
    intro:"<p>Morgan Stanley is committed to supporting and enhancing the physical and emotional health and wellbeing of our employees and their families. We promote wellness thru various programs like mediation, yoga, mindfulness session, etc</p><p>The Mother's Room facility is available at the Indiabulls, Athena, NKP, Wework and at Ecoworld. The room is designed to afford a private lactation space for nursing mothers and resting space for expectant mothers. </p>",
    thumbs: [
      "img/wellness/9930608-wellrec-ss-1440x960-1.jpg",
      "img/wellness/9930608-wellrec-ss-1440x960-2.jpg",
      "img/wellness/9930608-wellrec-ss-1440x960-3.jpg",
      "img/wellness/9930608-wellrec-ss-1440x960-4.jpg",
      "img/wellness/9930608-wellrec-ss-1440x960-5.jpg",
      "img/wellness/9930608-wellrec-ss-1440x960-6.jpg",
      "img/wellness/9930608-wellrec-ss-1440x960-7.jpg",
      "img/wellness/9930608-wellrec-ss-1440x960-8.jpg",
      "img/wellness/9930608-wellrec-ss-1440x960-9.jpg"
    ],
    descriptions: [
      "Slide 1 info",
      "slide 2 desc",
      "slide 3 more here",
      "slide 4 another text",
      "slide 5 is awesome",
      "slide 6 oh hai",
      "slide 7 do we copy?",
      "slide 8 this is long",
      "slide 9 finally!"
    ]
  }
}