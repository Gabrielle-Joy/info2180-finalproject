$(document).ready(() =>{
    // When page first loaded, get the issues log
    issuesQuery();

    // init nav links
    initNav();

});

function issuesQuery(filter='') {
    let url = "../php/view-issues.php";
    let query = url;
    if(filter){
        query += "?filter=" + filter;
    }
    display(url);
}

function viewDetailedIssue(id) {
    let url = "../php/detailed-issue.php?id=" + id;
    display(url);
}

function createIssue() {
    let url = "../forms/create-issue.php";
    display(url);
}

function logout() {
    let url = "../php/logout.php";
    display(url);
}

function display(url) {
    fetch(url).then(response => {
        return response.text();
    }).then(data => {
        $("main").html(data);
    });
}

function initNav() {
    $("#home").click(issuesQuery);
    $("#issue").click(createIssue);
    $("#logout")
}

function markAsClosed(id) {
    console.log("I hear yah. Close it");
}

function markInProgress(id) {
    console.log("I hear yah. In Progress");
}