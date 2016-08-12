/*
This is empty on purpose! Your code to build the resume will go here.
*/
var bio = {
	name: "Victor Kushch",
	role: "Front End Developer",
	contacts: {
		mobile: "617-678-7490",
		email: "victor@ku-64.com",
		github: "https://github.com/VictorKushch",
		linkedin: "https://www.linkedin.com/in/viktar-kushch-4491a483",
		location: "Boston"
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
			"dates": "2016"
		}, {
			"name": "MTI",
			"location": "Mogilev",
			"degree": "Master",
			"majors": ["Processing, Automation"],
			"dates": "1997 - 2002"
		}

	],
	"onlineCourses": [{
		"title": "string",
		"school": "string",
		"dates": "2013-2014",
		"url": "udacity"
	}]
};
var work = {
	"work_place": [{
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

var portfolio = {
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

	var FormatedPictureBlock = HTMLbioPic.replace("%data%", bio.biopic);
	var FormattedName = HTMLheaderName.replace("%data%", intName(bio.name));
	var FormattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var FormattedIntro = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend(FormattedName + FormattedRole + FormattedIntro);
	$("#header").append(FormatedPictureBlock);

	var FormattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var FormattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var FormatedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	var Formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var FormatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var id_strings = ['#topContacts', '#footerContacts'];
	for (var item = 0; item < id_strings.length; item++) {
		$(id_strings[item]).append(FormattedMobile + FormattedEmail + FormatedLinkedIn + FormatedLocation + Formatedgithub);
	}

	$("#header").append(HTMLskillsStart);
	for (item in bio.skills) {
		var FormattedSkills = HTMLskills.replace("%data%", bio.skills[item]);
		$("#skills").append(FormattedSkills);
	}

};

bio.display();


//WORK EXPERIENCE
work.display = function() {
	if (work.work_place.length > 0) {
		for (var item in work.work_place) {
			$("#workExperience").append(HTMLworkStart);
			var FormatedEmployer = HTMLworkEmployer.replace("%data%", work.work_place[item].employer);
			var FormatedTitle = HTMLworkTitle.replace("%data%", work.work_place[item].title);
			var from_to = work.work_place[item].dates;
			var FormatedFromTo = HTMLworkDates.replace("%data%", from_to);
			var FormatedLocation = HTMLworkLocation.replace("%data%", work.work_place[item].location);
			var FormatedDescription = HTMLworkDescription.replace("%data%", work.work_place[item].description);
			$(".work-entry:last").append(FormatedEmployer + FormatedTitle + FormatedFromTo + FormatedLocation + FormatedDescription);

		}
	}
};

work.display();

//Projects
portfolio.display = function() {
	if (portfolio.projects.length > 0) {
		$("#projects").append(HTMLprojectStart);
		for (var item in portfolio.projects) {

			var FormatedProjectTitle = HTMLprojectTitle.replace("%data%", portfolio.projects[item].title);
			$(".project-entry:last").append(FormatedProjectTitle);
			var FormatedProjectDates = HTMLprojectDates.replace("%data%", portfolio.projects[item].dates);
			$(".project-entry:last").append(FormatedProjectDates);
			var FormatedprojectsDescription = HTMLprojectDescription.replace("%data%", portfolio.projects[item].description);
			$(".project-entry:last").append(FormatedProjectDescription);
			for (var image in portfolio.projects[item].images) {
				var FormatedProjectImage = HTMLprojectImage.replace("%data%", portfolio.projects[item].images[image]);
				$(".project-entry:last").append(FormatedProjectImage);
			}
			// $("#projects").append(FormatedProjectTitle + FormatedProjectDates + FormatedProjectDescription +
			//               FormatedProjectImage);
		}

	}
};
portfolio.display();

//Education

education.display = function() {
	if (education.schools.length > 0) {
		$("#education").append(HTMLschoolStart);
		for (var item in education.schools) {
			console.log(education.schools[item].name);
			var FormatedEducationName = HTMLschoolName.replace("%data%", education.schools[item].name);
			var FormatedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
			var FormatedEducationDates = HTMLschoolDates.replace("%data%", education.schools[item].dates);
			var FormatedEducationLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);
			$(".education-entry:last").append(FormatedEducationName + FormatedEducationDegree + FormatedEducationDates + FormatedEducationLocation);
			for (var major_item in education.schools[item].majors) {
				var FormatedEducationMajor = HTMLschoolMajor.replace("%data%", education.schools[item].majors[major_item]);
				$(".education-entry:last").append(FormatedEducationMajor);
			}
		}
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
