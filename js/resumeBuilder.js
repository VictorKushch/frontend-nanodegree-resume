/*
This is empty on purpose! Your code to build the resume will go here.
*/
var bio = {
	"name": "Victor Kushch",
	"role": "Front End Developer",
	"contacts": {
		"mobile": "617-678-7490",
		"email": "victor@ku-64.com",
		"github": "https://github.com/VictorKushch",
        "linkedin": "viktar-kushch",
        "linkedinID": "-4491a483",
		"location": "Boston"
	},
	biopic: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/059/0f2/2c5537d.jpg",
	welcomeMessage: "Ready to change your online business outlook",
	skills: ["JS", "Angular", "HTML", "CSS", "Boottstrap"]
};
var education = {
	"schools": [{
			"name": "Udacity Nanodegree",
			"location": "Boston",
			"degree": "Nanodegree",
			"majors": ["Frontend"],
			"dates": "2016",
            "url": "http://udacity.com"
		}, {
			"name": "MTI",
			"location": "Mogilev",
			"degree": "Master",
			"majors": ["Processing, Automation"],
			"dates": "1997 - 2002",
            "url": "http://www.mgup.by/"
		}

	],
	"onlineCourses": [{
		"title": "Python, Angular.JS, JavaScript",
		"school": "Code Academy",
		"dates": "2013-2016",
		"url": "https://www.codecademy.com/"
	}]
};
var work = {
	"jobs": [{
			"employer": "Ku64",
			"title": "developer",
			"dates": "09/01/2014 to current",
			"description": "Developing marketmech.com, variety front end and back end projcts",
			"location": "Auburndale, MA"
		}, {
			"employer": "Empow Studio",
			"title": "developer",
			"dates": "05/01/2016 to current",
			"description": "Developing student app, corporate WP site",
			"location": "Lexington, MA"
		},

		{
			"employer": "AGST Tax",
			"title": "developer",
			"dates": "09/01/2013 to 09/01/2014",
			"description": "Range of scripts for tax oreparation company for batch processing",
			"location": "Newton, MA"
		},

		{
			"employer": "Biokon",
			"title": "developer",
			"dates": "01/01/2006 to 06/01/2016",
			"description": "Developer in web dewelopment agency",
			"location": "St. Petersburg"
		}
	]
};


var projects = {
	"projects": [{
			"title": "Empow Studio App",
			"dates": "2016",
			"description": "JS and JSON based online App using Large Google Drive aasets in education area",
			"images": ["images/empow1.png", "images/empow2.png"]
		},

		{
			"title": "Casio gift reseller",
			"dates": "2016",
			"description": "Html, JS landing page",
			"images": ["images/corporate-1.png", "images/corporate-2.png"]
		},

		{
			"title": "Clever IT System WP theme",
			"dates": "2016",
			"description": "Html, JS",
			"images": ["images/it-sys-1.png", "images/it-sys-2.png"]
		}

	]
};

//BIO
bio.display = function() {

	var formatedPictureBlock = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedName = HTMLheaderName.replace("%data%", intName(bio.name));
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedIntro = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend(formattedName + formattedRole + formattedIntro);
	$("#header").append(formatedPictureBlock);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formatedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin)
                                        .replace("%linkedInID%", bio.contacts.linkedinID)
                                        .replace("%data%", bio.contacts.linkedin);
    console.log(formatedLinkedIn);
    var formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("%data%", bio.contacts.github);
    var formatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var id_strings = ['#topContacts', '#footerContacts'];
	for (var item = 0; item < id_strings.length; item++) {
		$(id_strings[item]).append(formattedMobile + formattedEmail + formatedLinkedIn + formatedLocation + formatedgithub);
	}

	$("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
		var formattedSkills = HTMLskills.replace("%data%", skill);
		$("#skills").append(formattedSkills);
	});

};

bio.display();


//WORK EXPERIENCE
work.display = function() {
	if (work.jobs.length > 0) {
		work.jobs.forEach(function(job) {
			$("#workExperience").append(HTMLworkStart);
			var formatedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formatedTitle = HTMLworkTitle.replace("%data%", job.title);
			var from_to = job.dates;
			var formatedFromTo = HTMLworkDates.replace("%data%", from_to);
			var formatedLocation = HTMLworkLocation.replace("%data%", job.location);
			var formatedDescription = HTMLworkDescription.replace("%data%", job.description);
			$(".work-entry:last").append(formatedEmployer + formatedTitle + formatedFromTo + formatedLocation + formatedDescription);

		});
	}
};

work.display();

//Projects
projects.display = function() {
	if (projects.projects.length > 0) {

		projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
			var formatedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
			$(".project-entry:last").append(formatedProjectTitle);
			var formatedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
			$(".project-entry:last").append(formatedProjectDates);
			var formatedprojectsDescription = HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry:last").append(formatedprojectsDescription);
			project.images.forEach(function(image) {
				var formatedProjectImage = HTMLprojectImage.replace("%data%", image);
				$(".project-entry:last").append(formatedProjectImage);
			});
		});

	}
};
projects.display();

//Education

education.display = function() {
	if (education.schools.length > 0) {
		  education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
			console.log(school.name);
			var formatedEducationName = HTMLschoolName.replace("%data%", school.name);
			var formatedEducationDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formatedEducationDates = HTMLschoolDates.replace("%data%", school.dates);
			var formatedEducationLocation = HTMLschoolLocation.replace("%data%", school.location);
			$(".education-entry:last").append(formatedEducationName + formatedEducationDegree + formatedEducationDates + formatedEducationLocation);
			school.majors.forEach(function(item){
				var formatedEducationMajor = HTMLschoolMajor.replace("%data%", item);
				$(".education-entry:last").append(formatedEducationMajor);
			});
		});
	}
    if (education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course){
            var formatedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formatedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formatedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            var formatedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formatedOnlineTitle + formatedOnlineSchool + formatedOnlineDates + formatedOnlineURL);
        });
    }
};

education.display();

$("#mapDiv").append(googleMap);


//Where I lieved




if (document.getElementsByClassName('flex-item').length === 0) {
	document.getElementById('topContacts').style.display = 'none';
}
if (document.getElementsByTagName('h1').length === 0) {
	document.getElementById('header').style.display = 'none';
}
if (document.getElementsByClassName('work-entry').length === 0) {
	document.getElementById('workExperience').style.display = 'none';
}
if (document.getElementsByClassName('project-entry').length === 0) {
	document.getElementById('projects').style.display = 'none';
}
if (document.getElementsByClassName('education-entry').length === 0) {
	document.getElementById('education').style.display = 'none';
}
if (document.getElementsByClassName('flex-item').length === 0) {
	document.getElementById('lets-connect').style.display = 'none';
}
if (document.getElementById('map') === null) {
	document.getElementById('mapDiv').style.display = 'none';
}
