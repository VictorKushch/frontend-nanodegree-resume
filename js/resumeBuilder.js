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

	var formatedPictureBlock = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedName = HTMLheaderName.replace("%data%", intName(bio.name));
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedIntro = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend(formattedName + formattedRole + formattedIntro);
	$("#header").append(formatedPictureBlock);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formatedLinkedIn = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	var formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var id_strings = ['#topContacts', '#footerContacts'];
	for (var item = 0; item < id_strings.length; item++) {
		$(id_strings[item]).append(formattedMobile + formattedEmail + formatedLinkedIn + formatedLocation + formatedgithub);
	}

	$("#header").append(HTMLskillsStart);
	for (item in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[item]);
		$("#skills").append(formattedSkills);
	}

};

bio.display();


//WORK EXPERIENCE
work.display = function() {
	if (work.jobs.length > 0) {
		for (var item in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
			var formatedTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);
			var from_to = work.jobs[item].dates;
			var formatedFromTo = HTMLworkDates.replace("%data%", from_to);
			var formatedLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location);
			var formatedDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);
			$(".work-entry:last").append(formatedEmployer + formatedTitle + formatedFromTo + formatedLocation + formatedDescription);

		}
	}
};

work.display();

//Projects
portfolio.display = function() {
	if (portfolio.projects.length > 0) {
		$("#projects").append(HTMLprojectStart);
		for (var item in portfolio.projects) {

			var formatedProjectTitle = HTMLprojectTitle.replace("%data%", portfolio.projects[item].title);
			$(".project-entry:last").append(formatedProjectTitle);
			var formatedProjectDates = HTMLprojectDates.replace("%data%", portfolio.projects[item].dates);
			$(".project-entry:last").append(formatedProjectDates);
			var formatedprojectsDescription = HTMLprojectDescription.replace("%data%", portfolio.projects[item].description);
			$(".project-entry:last").append(FormatedProjectDescription);
			for (var image in portfolio.projects[item].images) {
				var formatedProjectImage = HTMLprojectImage.replace("%data%", portfolio.projects[item].images[image]);
				$(".project-entry:last").append(formatedProjectImage);
			}
			// $("#projects").append(formatedProjectTitle + formatedProjectDates + FormatedProjectDescription +
			//               formatedProjectImage);
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
			var formatedEducationName = HTMLschoolName.replace("%data%", education.schools[item].name);
			var formatedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
			var formatedEducationDates = HTMLschoolDates.replace("%data%", education.schools[item].dates);
			var formatedEducationLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);
			$(".education-entry:last").append(formatedEducationName + formatedEducationDegree + formatedEducationDates + formatedEducationLocation);
			for (var major_item in education.schools[item].majors) {
				var formatedEducationMajor = HTMLschoolMajor.replace("%data%", education.schools[item].majors[major_item]);
				$(".education-entry:last").append(formatedEducationMajor);
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
