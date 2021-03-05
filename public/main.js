// Make sure Alpine loads properly with IE11
window.deferLoadingAlpine = function(callback) { document.addEventListener('DOMContentLoaded', callback); }


// Embla slideshow autplay function
function autoplay(value) {
  if(value) {
    timer = setInterval(function() {
      embla.scrollNext()
    },4000)
  } else {
    clearInterval(timer);
  }
}

// Alpine data and functionality
function details(section) {
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
        "At Morgan Stanley, our culture guides our employees, and our values inform everything we do. ",
        "Mumbai GIC footprint has spread across five buildings in three separate locations with approximately 5,000 employees",
        "Mumbai Office",
        "Mumbai Office"
      ];
      break;
    case "agile":
      title = "Agile Space";
      intro = "The Firm launched the Workplace Evolution program in early 2018 with a focus on modernizing our workspace to better support business priorities, and improving the employee experience. To enable this, we harnessed the power of workspace design, innovative technology and end user experience that supports our staff in delivering first class business in a first class way.";
      thumbs = [
        "img/agile/9930608-agile-ss-1440x960-1.jpg",
        "img/agile/9930608-agile-ss-1440x960-2.jpg",
        "img/agile/9930608-agile-ss-1440x960-3.jpg",
        "img/agile/9930608-agile-ss-1440x960-4.jpg",
        "img/agile/9930608-agile-ss-1440x960-5.jpg",
        "img/agile/9930608-agile-ss-1440x960-6.jpg",
        "img/agile/9930608-agile-ss-1440x960-7.jpg",
        "img/agile/9930608-agile-ss-1440x960-8.jpg",
        "img/agile/9930608-agile-ss-1440x960-9.jpg",
        "img/agile/9930608-agile-ss-1440x960-10.jpg",
        "img/agile/9930608-agile-ss-1440x960-11.jpg",
        "img/agile/9930608-agile-ss-1440x960-12.jpg",
        "img/agile/9930608-agile-ss-1440x960-13.jpg",
        "img/agile/9930608-agile-ss-1440x960-14.jpg",
        "img/agile/9930608-agile-ss-1440x960-15.jpg",
        "img/agile/9930608-agile-ss-1440x960-16.jpg",
        "img/agile/9930608-agile-ss-1440x960-17.jpg",
      ];
      descriptions = [
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office",
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office",
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office",
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office"
      ];
      break;
    case "office":
      title = "Office Buildings";
      intro = "Welcome to Morgan Stanley India";
      thumbs = [
        "img/building/9930608-building-ss-1440x960-1.jpg",
        "img/building/9930608-building-ss-1440x960-2.jpg",
        "img/building/9930608-building-ss-1440x960-3.jpg",
        "img/building/9930608-building-ss-1440x960-4.jpg",
        "img/building/9930608-building-ss-1440x960-5.jpg",
        "img/building/9930608-building-ss-1440x960-6.jpg",
        "img/building/9930608-building-ss-1440x960-7.jpg",
        "img/building/9930608-building-ss-1440x960-8.jpg",
        "img/building/9930608-building-ss-1440x960-9.jpg",
        "img/building/9930608-building-ss-1440x960-10.jpg",
        "img/building/9930608-building-ss-1440x960-11.jpg",
      ];
      descriptions = [
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office",
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office",
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office",
        "Fitness classes conducted by 3rd Party vendor at MS Mumbai Office"
      ];
      break; 
    case "pantry":
      title = "Pantry & Cafeteria";
      intro = "Cafteria caters a wide range of food options. Breakfast, Lunch are Snacks are served. The floor pantries are located in all locations and has a self services Tea/Coffee machines and a snack vending machine";
      thumbs = [
        "img/pantry/9930608-pantry-ss-1440x960-1.jpg",
        "img/pantry/9930608-pantry-ss-1440x960-2.jpg",
        "img/pantry/9930608-pantry-ss-1440x960-3.jpg",
        "img/pantry/9930608-pantry-ss-1440x960-4.jpg"
      ];
      descriptions = [
        "Our Bangalore and Mumbai office caters wide range of Food and Beverages. Veg, Non Veg, Packed Snacks and early dinner are offered.",
        "All Caferterias and Pantries are designed with good interiors, lightings, space and has a good opportunity for networking.",
        "Pantries are located on all the floors and that can be used for dining and informal gatherings",
        "Our agile floor provide lot of colloboration space to improve employee engagement and experience"
      ];
      break;    
    case "workplace":
      title = "Conference Rooms & Workplace";
      intro = "Our Workplace is designed to have more team collobaration, increase employee experience, improve employee productivity, and retains and grows our employee talent. The firm also lauched the Workplace Evolution program in early 2018 with a focus on modernizing our workspace to better support business priorities, and improving the employee experience.  The workplace floor has standard office, meeting and video confernce rooms huddle space, actiity area and a pantry.";  
      thumbs = [
        "img/workspace/9930608-wrkconf-ss-1440x960-1.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-2.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-3.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-4.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-5.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-6.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-7.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-8.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-9.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-10.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-11.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-12.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-13.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-14.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-15.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-16.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-17.jpg",
        "img/workspace/9930608-wrkconf-ss-1440x960-18.jpg",
      ];
      descriptions = [
        "The Agile spaces are designed to be more flexible, using laptops and height-adjustable desks that allow you to stand and adjust for ergonomic needs.",
        "Meeting rooms are available at every floor and include a mix of sizes.  Some of the rooms are VC enabled for meetings.",
        "Our workspace is designed for more collaboration and facilitates the faster learning for new hires.",
        "Our Workspace is designed to provide open space to colloborate and work effectively.",
        "The workplace floor has standard office, meeting and video confernce rooms huddel space, actiity area and a pantry",
        "The workplace floor has standard office, meeting and video confernce rooms huddel space, actiity area and a pantry",
        "Focus rooms and huddle spaces are availble for quick meetings and informal meetings.",
        "The workplace offers offices, various closed meeting rooms, huddle areas ,  video enabled conference rooms and training rooms.",
        "tbd",
        "Our Workplace is designed to have more team collobaration, increase employee experience, improve employee productivity, and retains and grows our employee talent.",
        "tbd",
        "tbd",
        "The workplace offers offices, various closed meeting rooms, huddle areas ,  video enabled conference rooms and training rooms.",
        "The firm also lauched the Workplace Evolution program in early 2018 with a focus on modernizing our workspace to better support business priorities, and improving the employee experience.",
        "As part of Employee Physical wellbeing, the frim has provided Ergonomic Chairs and Dual Monitors.",
        "tbd",
        "tbd",
        "tbd",
        "tbd"
      ];
      break;
    default:
      title = "title missing";
      intro = "intro missing";
      thumbs = [],
      descriptions = [];
  }
  return {
    toggleDescription: function() {
      if(this.showDescription) {
        this.showDescription = false;
        document.querySelector(".carousel").classList.remove("active");
      } else {
        this.showDescription = true;
        document.querySelector(".carousel").classList.add("active");
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


// Update slide info
window.addEventListener('DOMContentLoaded', (event) => {
  var activeSlide = 0;
  embla.on('settle', function() {
    activeSlide = embla.slidesInView();
    document.getElementById("slide-num").innerHTML = (activeSlide[0]+1);
    document.getElementById("slide-desc").innerHTML = descriptions[activeSlide[0]];
    document.getElementById("slide-desc").style.opacity = 1;
  });
  embla.on('scroll', function() {
    document.getElementById("slide-desc").style.opacity = 0;
  })
})