const listIssuesButton = document.getElementById('listIssuesButton');
const issuesList = document.getElementById('issuesList');

let issues = [];   
let closeIssues = [];

window.addEventListener('load', () => {
    for(let things of issues) {
        issuesList.insertAdjacentHTML("afterend", 
        "<p>" + "Ticket ID: " + things.id +"</p>" +
        "<p>" + "Ticket Name: " + things.name +"</p>" +
        "<p>" + "Description: " + things.description +"</p>" +
        "<p>" + "Severity: " + things.severity +"</p>" +
        "<p>" + "Status: " + things.status +"</p>" +
        "<p>" + "Assignment: " + things.assignment +"</p>" +
        "<hr>"
        );
    }
});

let IssueForm = (nameOfissue, description, issueSeverity) => {
    const issueName = nameOfissue
    const issueDescription = description
    const severity = issueSeverity;

    const issueFields = {
        id : issues.length + 1,
        name: issueName,
        description: issueDescription,
        severity: severity,
        status: "unresolved",
        assignment: "unassigned"
    }
    
    if(issueFields.severity != "3" && issueFields.severity != "2" && issueFields.severity != "1") {
    console.log("Severity options must be a number 1 -3.  3 = high, 2 = med, or 1 = low");
    console.log("Issues was not added");
    } else {
        issues.push(issueFields);
        console.log("Issue has been added");
    }
}

// All issues
const listAllIssues = () => {
    for(const allIssues of issues){
        console.log(allIssues);
    }
}

// Sort issues by severity
const issuesBySeverity = (a, b) => {
    if (b.severity > a.severity) {
      return 1;
    } else if (a.severity > b.severity) {
      return -1;
    } else {
      return 0;
    }
  }


//List "Open" (unresolved) Issues, sorted by severity 
const listOpenIssues = () =>{
    let unresolved = issues.filter(function(issue) {
        return issue.status === "unresolved"             
     });

    let sortedIssues = unresolved.sort(issuesBySeverity); 
    console.log(sortedIssues);
    
}


//Search for issue by ID 
const searchById = id => {
    for(let issue of issues ){
        if(issue.id === id) {
            console.log(issue);
            return issue;
        }
    }
}

//Close a issue 
const closeIssueById = id => {
    let indexOfIssue;
    let removeIssueFromList; 
    for(let issue of issues ){
        if(issue.id === id) {
            indexOfIssue = issues.findIndex(issue => issue.id === id);
        }
    }
    console.log("Issue being closed");
    console.log(issues[indexOfIssue]);

    console.log("Index of this issue is");
    console.log(indexOfIssue);
    
    console.log("Closing status of Issue") ;
    issues[indexOfIssue].status = "closed";
    
    
    console.log("removing issues from main list");
    removeIssueFromList = issues.splice(indexOfIssue,1);
    console.log(removeIssueFromList);
    
    console.log("pushing issue to new close list");
    closeIssues.push = removeIssueFromList;
    
    console.log(closeIssues);
}

const findIndexOfIssue = id => {
    let indexOfIssue;
    for(let issue of issues ){
        if(issue.id === id) {
            indexOfIssue = issues.findIndex(issue => issue.id === id);
        }
    }
    return indexOfIssue;
}

const updateDescription = (id , description) => {
    issues[findIndexOfIssue(id)].description = description;
    console.log("****** New Description was Added *********")
    console.log(issues[findIndexOfIssue(id)]);
}


const assignTicket = (id , assignment) => {
    let indexOfIssue;
    for(let issue of issues ){
        if(issue.id === id) {
            indexOfIssue = issues.findIndex(issue => issue.id === id);
        }
    }
    issues[indexOfIssue].assignment = assignment;
    console.log("****** New Assignment was Added *********")
    console.log(issues[indexOfIssue]);
}

const createIssuesByNumber = (num) => {
    for(i = 0; i < num; i++) {
        IssueForm(randomName, randomDescription, randomNumber)
    }
}

let randomDescription = () => {
    Math.random().toString(36).substring(7);
    return;
}

let randomName = () => {
    Math.random().toString(36).substring(30);
    return;
}

let randomNumber = () => {
    Math.floor((Math.random() * 3) + 1);
    return;
}



IssueForm("Houston", "Houston we have a problem", "1")
IssueForm("Austin", "Austin we have a problem", "Ben a bitch")
IssueForm("Dallas", "Dallas we have a problem", "Hard")
IssueForm("mexico", "mexico we have a problem", "3")

IssueForm("Ben", "Ben we have a problem", "2")
IssueForm("David", "David we have a problem", "2")
IssueForm("Sarah", "Sarah we have a problem", "1")
  
searchById(3);
updateDescription(3, "THERE WAS NO PROBLEMS")
assignTicket(3, "David")