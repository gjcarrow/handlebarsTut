(function(){

	var theScriptTemplate = document.getElementById('contextTemplate').innerHTML;
	var	theTemplate = Handlebars.compile(theScriptTemplate);

var context = {
		"pageLinks" : [
			{ "linkName" : "Home",'linkColor': "white"},
			{ "linkName" : "Blog",'linkColor': "blue"},
			{ "linkName" : "Portfolio",'linkColor': "purple"},
			{ "linkName" : "Contact",'linkColor': "cyan"}
		]
	}

// expose the data to the template:
var theCompiledTemplate = theTemplate(context);
document.querySelector('.outputDiv').innerHTML = theCompiledTemplate;



}())

