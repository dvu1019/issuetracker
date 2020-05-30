var appIsOpen = true; 
var issues = [];
var closeIssues = [];

var IssueForm = function(nameOfissue, description, issueSeverity) {
    var issueName = nameOfissue
    var issueDescription = description
    var severity = issueSeverity;
    if(severity ==="1") {
        severity = "Low"
    } else if(severity ==="2") {
        severity = "Med"
    } else if(severity ==="3") {
        severity = "High"
    }

    var issueFields = {
        id :"",
        Name: issueName,
        Description: issueDescription,
        Severity: severity,
        Status: "unresolved",
        Assignment: "unassigned"
    }

    if (issues.length < 1) {
        var id = 1;
        console.log("Issues queue is empty");
        console.log(id);
        issueFields.id = id;
    } else {
        id = issues.length + 1;
        issueFields.id = id;
        console.log(id);
    }

    console.log(issueFields);
    return issueFields;
}

// Passes arguments to issueFormFunction and pushes issues in the list of unresolveds
var fillOutIssueFormAndAddToQueue = function(nameOfissue, description, issueSeverity) {
    issues.push(IssueForm(nameOfissue, description, issueSeverity));
    for (i = 0; i < issues.length; i++) {
        console.log(issues[i]);
}
}

// All issues
var listAllIssues = function() {
    for (i = 0; i < issues.length; i++) {
        console.log(issues[i]);
}

//List "Open" (unresolved) Issues, sorted by severity ************
var listOpenIssues = function() {
    var unresolved = [];
    for(var i = 0; i < issues.length; i++){
        if(issues[i].Status === "unresolved") {
            unresolved.push(issues[i]);
        }
    }

    for(var i = 0; i < unresolved.length; i++){
        if(unresolved[i].Severity === "High") {
            console.log(unresolved[i]);
        }
    }

    for(var i = 0; i < unresolved.length; i++){
        if(unresolved[i].Severity === "Med") {
            console.log(unresolved[i]);
        }
    }

    for(var i = 0; i < unresolved.length; i++){
        if(unresolved[i].Severity === "Low") {
            console.log(unresolved[i]);
        }
    }    
}

//Search for issue by ID 

var searchById = function(id) {
    for(var i = 0; i < issues.length; i++){
        if(issues[i].id === id) {
            console.log(issues[i]);
        }
}

