var bio=
{
	"name":"Rafael Ogando",
	"role":"Web Developer",
	"contacts":{"email":"rafael-ogando@hotmail.com","mobile":8495738137,"github":"rafaelogando","location":"Santo Domingo, Republica Dominicana"},
	"pic":"images/mypic.jpg",
	"welcomeMessage":"Thanks for reviewing. Hope you find what you were looking for.",
    "skills":
        [    
            "HTML",
            "CSS",
            "Javascrip",
            "Java",
            "C++",
            "Electronics"
        ]
}

var work =
{"jobs":
	[
		{
			
			"title":"Radio Comunications Technician",
    		"employer":"IDAC",
    		"dates":"2011-2015",
    		"location":"Santo Domingo, Punta Cana",
    		"description":"Manintenance and support of comunication sistems.  The main funtion was keep all the comunication systems working correctly.  Giving the corresponding maintenance according to the situation."    	
    	},
    	{
    		"title":"Electronic Technician",
    		"employer":"Smart Modular Technologies",
    		"dates":"2007-2008",
    		"location": "Santo Domingo, San Isidro",
    		"description":"Manintenance and support of memories testing machines.  This company works with a lot of pressuere because the huge amount of products they built and test every  day.  It requiered a fast responce to any failure on the test equipments."
    		
    	}
    ]
}

var projects =
{"projects":
    [
		{
			"title":"Product Review",
    		"dates":"08/03/2015",
    		"images":"images/productReview.jpg",
    		"description":"This page is a representation of a mockup with a 94% of similitud with the given model."
    	},
    	{
    		"title":"Build a Portfolio Site",
    		"dates":"12/03/2015",
    		"images": "images/portfolioSite.jpg",
    		"description":"This project is responsive page made from a given mockup."
    	}
    ]
}

var education=
{"schools": 
    [
        {
          "name":"IPPC",
          "location":"Santo Domingo, Republica Dominicana",
          "degree":"Digital Electronic and Microcomputers Technician",
          "major":"Electronics",
          "date": 2003-2007,
          "courseInfo": "Electronics",
          "url":"http://"
        },
        {
    	   "name":"ITI",
    	   "location":"Santo Domingo, Republica Dominicana",
    	   "degree":"Programable Logic Controlers Techinician",
    	   "major":"Electronic Engineering",
    	   "date":2008-2009,
    	   "url":"http://www.itiquezada.com/"
        }
    ]
    ,
 "onlineCourses":
    [
 	   {
 		   "title":"Intro to Computer Sciences",
 		   "school":"Udacity",
 		   "date":"2013",
 		   "url":"https://www.udacity.com/course/cs101"
 	   }
 	]
}

function displayBio()
{
    var formatted=HTMLheaderRole.replace("%data%",bio.role)
    $("#header").prepend(formatted);
    formatted=HTMLheaderName.replace("%data%",bio.name)
    $("#header").prepend(formatted);


    formatted=HTMLemail.replace("%data%",bio.contacts.email)
    $("#topContacts, #footerContacts").append(formatted);
    formatted=HTMLgithub.replace("%data%",bio.contacts.github)
    $("#topContacts, #footerContacts").append(formatted);
    formatted=HTMLlocation.replace("%data%",bio.contacts.location)
    $("#topContacts, #footerContacts").append(formatted);
    formatted=HTMLmobile.replace("%data%",bio.contacts.mobile)
    $("#topContacts, #footerContacts").append(formatted);
    formatted=HTMLbioPic.replace("%data%",bio.pic)
    $("#header").append(formatted);
    $(".biopic").addClass("circular");
    formatted=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage)
    $("#header").append(formatted);
    

    if(bio.skills.length >0)
    {
        $("#header").append(HTMLskillsStart);
        var form
        for(skill in bio.skills)
        {
            form=HTMLskills.replace("%data%",bio.skills[skill])
            $("#skills").append(form);
        }
    }
}


function displayWork()
{
    for(company in work.jobs)
    {
	   $("#workExperience").append(HTMLworkStart);
	   var date = HTMLworkDates.replace("%data%",work.jobs[company].dates)
	   var desc=HTMLworkDescription.replace("%data%",work.jobs[company].description)
	   var loc = HTMLworkLocation.replace("%data%",work.jobs[company].location)
	   var format1 = HTMLworkEmployer.replace("%data%",work.jobs[company].employer)
	   var format2 = HTMLworkTitle.replace("%data%",work.jobs[company].title)
	   $(".work-entry:last").append(format1 + format2);
	   $(".work-entry:last").append(date);
	   $(".work-entry:last").append(desc);
	   $(".work-entry:last").append(loc);
    }
}

function displayProjects()
{
    for(obj in projects.projects)
    {
        $("#projects").append(HTMLprojectStart);
        var title = HTMLprojectTitle.replace("%data%",projects.projects[obj].title)
        var date= HTMLprojectDates.replace("%data%",projects.projects[obj].dates)
        var desk = HTMLprojectDescription.replace("%data%",projects.projects[obj].description)
        var img = HTMLprojectImage.replace("%data%",projects.projects[obj].images)
        $(".project-entry:last").append(title);
        $(".project-entry:last").append(date);
        $(".project-entry:last").append(desk);
        $(".project-entry:last").append(img);
    }
}

function displaySchools()
{
    $("#education").append(HTMLschoolStart);
    for(vary in education.schools)
    {
        var formattedEdu = HTMLschoolName .replace("%data%",education.schools[vary].name)
        $(".education-entry").append(formattedEdu);
        formattedEdu = HTMLschoolDegree.replace("%data%",education.schools[vary].degree)
        $(".education-entry").append(formattedEdu); 
        formattedEdu = HTMLschoolDates.replace("%data%",education.schools[vary].date)
        $(".education-entry").append(formattedEdu);  
        formattedEdu = HTMLschoolLocation.replace("%data%",education.schools[vary].location)
        $(".education-entry").append(formattedEdu);  
        formattedEdu = HTMLschoolMajor.replace("%data%",education.schools[vary].major)
        $(".education-entry").append(formattedEdu);
    }
    if (education.onlineCourses.length > 0) 
    {
        $("#education").append(HTMLonlineClasses);
        for (online in education.onlineCourses) 
        {
            $("#education").append(HTMLschoolStart);
        
            var formattedol = HTMLonlineTitle .replace("%data%",education.onlineCourses[online].title)
            $(".education-entry:last").append(formattedol);
            formattedol = HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school)
            $(".education-entry:last").append(formattedol); 
            formattedol = HTMLonlineDates.replace("%data%",education.onlineCourses[online].date)
            $(".education-entry:last").append(formattedol);  
            formattedol = HTMLonlineURL.replace("%data%",education.onlineCourses[online].url)
            $(".education-entry:last").append(formattedol);  
        }
    }
}

$(document).click(function(loc) 
{
	var x= loc.pageX;
	var y= loc.pageY;

	logClicks(x,y);
})


function inName(oldName)
{
    var finalName = oldName;
    finalName = finalName[0].toUpperCase() + finalName.slice(1).toLowerCase();
    var pos = finalName.search(" ");
    finalName = finalName.slice(0,pos) + " " + finalName.slice(pos+1).toUpperCase();
    return finalName;
}


displayBio();
displayWork();
displayProjects();
displaySchools();

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);