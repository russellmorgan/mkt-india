// Make sure Alpine loads properly with IE11
window.deferLoadingAlpine = function(callback) { document.addEventListener('DOMContentLoaded', callback); }

// Get deatils section show appropriate data
var section = location.hash;
section = section.slice(1);
//console.log(section)

// This is where we will set up the various strings based on the hash
var title, intro, thumbs, descriptions;
var timer;

if(section) {
  switch(section) {
    case "wellness":
      title = "Wellness & Recreation";
      intro = "Morgan Stanley is committed to supporting and enhancing the physical and emotional health and wellbeing of our employees and their families. We promote wellness thru various programs like mediation, yoga, mindfulness session, etc.<p>The Mother's Room facility is available at the Indiabulls, Athena, NKP, Wework and at Ecoworld. The room is designed to afford a private lactation space for nursing mothers and resting space for expectant mothers.";
      thumbs = [
        "img/wellness/9930608-wellrec-ss-1440x960-1.jpg",
        "img/wellness/9930608-wellrec-ss-1440x960-2.jpg",
        "img/wellness/9930608-wellrec-ss-1440x960-3.jpg",
        "img/wellness/9930608-wellrec-ss-1440x960-4.jpg",
        "img/wellness/9930608-wellrec-ss-1440x960-5.jpg",
        "img/wellness/9930608-wellrec-ss-1440x960-6.jpg",
        "img/wellness/9930608-wellrec-ss-1440x960-7.jpg",
        "img/wellness/9930608-wellrec-ss-1440x960-8.jpg",
        "img/wellness/9930608-wellrec-ss-1440x960-9.jpg"
      ];
      descriptions = [
        "Morgan Stanley is committed to supporting and enhancing the physical and emotional health and wellbeing of our employees and their families.",
        "Morgan Stanley  promote wellness thru various programs like mediation, yoga, mindfulness session, etc.",
        "The India  Sports Committee drives sport-related events for Mumbai and Bengaluru employees.",
        "The India Wellness Committee aims to raise awareness on health and general well-being of our employees. ",
        "The firm provide wellness benefits such as Company Doctor, Flu Vaccination, Gym Benefit, Meditation App, Travel benefit for expecting mother",
        "As part of our commitment to helping all employees maintain a healthy work-life balance, we have established corporate gym memberships",
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office",
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office",
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office"
      ];
      break;
    case "reception":
      title = "Reception";
      intro = "Long-term and enduring success lies in having a strong culture and talented employees who live our values. At Morgan Stanley, our culture guides our employees, and our values inform everything we do. &mdash;James P. Gorman,  Chairman and CEO ";
      thumbs = [
        "img/reception/9930608-reception-ss-1440x960-1.jpg",
        "img/reception/9930608-reception-ss-1440x960-2.jpg",
        "img/reception/9930608-reception-ss-1440x960-3.jpg",
        "img/reception/9930608-reception-ss-1440x960-4.jpg"
      ];
      descriptions = [
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office",
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office",
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office",
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office"
      ];
      break;
    default:
      title = "nothing";  
  }
}



function details() {
  return {
    init: function() {
      var l = this;
      if(this.playing) {
        timer = setInterval(function() {
          l.carouselNav(1);
        },4000)
      } else {
        clearInterval(timer);
      }
    },
    carouselNav: function(dir, event) {
      if(event == true) {
        this.playing = false;
      }
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
    toggleDescription: function() {
      if(this.showDescription) {
        this.showDescription = false;
      } else {
        this.showDescription = true;
      }
    },
    showCarousel:false,
    showDescription:true,
    playing:false,
    activeSlide: 0,
    title:title,
    intro:intro,
    thumbs: thumbs,
    descriptions: descriptions
  }
}