/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
        name : "Victor Kushch",
        role : "Front End Developer",
        contacts : {
            mobile : "617-678-7490",
            email : "victor@ku-64.com",
            github : "https://github.com/VictorKushch",
            linkedin : "https://www.linkedin.com/in/viktar-kushch-4491a483",
            current_location : "Boston"
        },
        biopic : "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/059/0f2/2c5537d.jpg",
        welcome_message : "Ready to change your online business outlook",
        skills : ["JS",  "Angular", "HTML", "CSS", "Boottstrap"]
    };
var education = {
        "schools" : [
            {
                "name" : "Udacity Nanodegree",
                "city" : "Boston",
                "degree" : "Nanodegree",
                "major" : ["Frontend"],
                "dates" : "2016"
            },
            {
                "name" : "MTI",
                "city" : "Mogilev",
                "degree" : "Master",
                "major" : ["Processing, Automation"],
                "dates" : "1997 - 2002"
            }

        ],
       "onlineCourses" : [
           {
               "title" : "string",
               "school" : "string",
               "dates" : "2013-2014",
               "url" : "udacity"
            }
       ]
    }
var work = {
    "work_place" : [
        {
          "company" : "Ku64",
          "title" : "developer",
          "from" : "09/01/2014",
          "to" : "current",
          "experience" : "Developing marketmech.com, variety front end and back end projcts",
          "location" : "Auburndale, MA"
        },
        {
          "company" : "Empow Studio",
          "title" : "developer",
          "from" : "05/01/2016",
          "to" : "current",
          "experience" : "Developing student app, corporate WP site",
          "location" : "Lexington, MA"
        },

        {
          "company" : "AGST Tax",
          "title" : "developer",
          "from" : "09/01/2013",
          "to" : "09/01/2014",
          "experience" : "Range of scripts for tax oreparation company for batch processing",
          "location" : "Newton, MA"
        },

        {
          "company" : "Biokon",
          "title" : "developer",
          "from" : "01/01/2006",
          "to" : "06/01/2016",
          "experience" : "Developer in web dewelopment agency",
          "location" : "St. Petersburg"
        }
    ]
}

var projects = {
    "project" : [
        {
          "title" : "Empow Studio App",
          "dates" : "2016",
          "description" : "JS and JSON based online App using Large Google Drive aasets in education area",
          "images" : ["images/empow1.png", "images/empow2.png"]
        },

        {
          "title" : "Casio gift reseller",
          "dates" : "2016",
          "description" : "Html, JS landing page",
          "images" : ["images/corporate-1.png", "images/corporate-2.png"]
        },

        {
          "title" : "Clever IT System WP theme",
          "dates" : "2016",
          "description" : "Html, JS",
          "images" : ["images/it-sys-1.png", "images/it-sys-2.png"]
        }

    ]
}

//BIO
bio.display = function(){

      var FormatedPictureBlock = HTMLbioPic.replace("%data%", bio.biopic);
      var FormattedName = HTMLheaderName.replace("%data%", intName(bio.name));
      var FormattedRole = HTMLheaderRole.replace("%data%", bio.role);
      var FormattedIntro = HTMLwelcomeMsg.replace("%data%", bio.welcome_message)
      $("#header").prepend(FormattedName + FormattedRole + FormattedIntro);
      $("#header").append( FormatedPictureBlock);

      var FormattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var FormattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      var FormatedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
      var Formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
      var FormatedLocation = HTMLlocation.replace("%data%", bio.contacts.current_location)

      var id_strings = ['#topContacts', '#footerContacts'];
      for (var item = 0; item < id_strings.length; item++){
          $(id_strings[item]).append(FormattedMobile + FormattedEmail + FormatedLinkedIn + FormatedLocation + Formatedgithub);
      };


    $("#header").append(HTMLskillsStart);
    for (var item in bio.skills){
        var FormattedSkills = HTMLskills.replace("%data%", bio.skills[item]);
        $("#skills").append(FormattedSkills);
    };

};

bio.display();


  //WORK EXPERIENCE
work.display = function(){
  if (work.work_place.length > 0){
      for (var item in work.work_place){
          $("#workExperience").append(HTMLworkStart);
          var FormatedEmployer = HTMLworkEmployer.replace("%data%", work.work_place[item].company);
          var FormatedTitle = HTMLworkTitle.replace("%data%", work.work_place[item].title);
          var from_to = work.work_place[item].from + " - " + work.work_place[item].to;
          var FormatedFromTo = HTMLworkDates.replace("%data%", from_to);
          var FormatedLocation = HTMLworkLocation.replace("%data%", work.work_place[item].location);
          var FormatedDescription = HTMLworkDescription.replace("%data%", work.work_place[item].experience);
          $(".work-entry:last").append(FormatedEmployer + FormatedTitle + FormatedFromTo + FormatedLocation + FormatedDescription);


    };

  };
};

work.display();

  //Projects
projects.display = function(){
      if (projects.project.length > 0){
          $("#projects").append(HTMLprojectStart);
          for (var item in projects.project){

              var FormatedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
              $(".project-entry:last").append(FormatedProjectTitle);
              var FormatedProjectDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
              $(".project-entry:last").append(FormatedProjectDates);
              var FormatedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);
              $(".project-entry:last").append(FormatedProjectDescription);
              for (var image in projects.project[item].images){
                var FormatedProjectImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
                $(".project-entry:last").append(FormatedProjectImage);
              };
              // $("#projects").append(FormatedProjectTitle + FormatedProjectDates + FormatedProjectDescription +
              //               FormatedProjectImage);
          };

      };
  };
projects.display();

//Education

education.display = function(){
    if (education.schools.length > 0){
    $("#education").append(HTMLschoolStart);
      for (item in education.schools){
          console.log(education.schools[item].name);
          var FormatedEducationName = HTMLschoolName.replace("%data%", education.schools[item].name);
          var FormatedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
          var FormatedEducationDates = HTMLschoolDates.replace("%data%", education.schools[item].dates);
          var FormatedEducationLocation = HTMLschoolLocation.replace("%data%", education.schools[item].city);
          $(".education-entry:last").append(FormatedEducationName + FormatedEducationDegree + FormatedEducationDates + FormatedEducationLocation);
          for (major_item in education.schools[item].major){
            var FormatedEducationMajor = HTMLschoolMajor.replace("%data%", education.schools[item].major[major_item]);
            $(".education-entry:last").append(FormatedEducationMajor);
            };
      };
  };
};

education.display;

     $("#mapDiv").append(googleMap);


//Where I lieved





if(document.getElementsByClassName('flex-item').length === 0) {
document.getElementById('topContacts').style.display = 'none';
}
if(document.getElementsByTagName('h1').length === 0) {
document.getElementById('header').style.display = 'none';
}
if(document.getElementsByClassName('work-entry').length === 0) {
document.getElementById('workExperience').style.display = 'none';
}
if(document.getElementsByClassName('project-entry').length === 0) {
document.getElementById('projects').style.display = 'none';
}
if(document.getElementsByClassName('education-entry').length === 0) {
document.getElementById('education').style.display = 'none';
}
if(document.getElementsByClassName('flex-item').length === 0) {
document.getElementById('lets-connect').style.display = 'none';
}
if(document.getElementById('map') === null) {
document.getElementById('mapDiv').style.display = 'none';
}




