document.addEventListener("DOMContentLoaded", function () {

    // Project information
    const projectName = "CodeSync";
    const language = "JavaScript";
    const isCollaborative = true;
    const teamMembers = 3;

    // Get elements from HTML
    const createWorkspaceBtn =
        document.getElementById("createWorkspaceBtn");

    const workspaceMessage =
        document.getElementById("workspaceMessage");

    const workspace =
        document.getElementById("workspace");

    const codeEditor =
        document.getElementById("codeEditor");

    const runCodeBtn =
        document.getElementById("runCodeBtn");

    const codeOutput =
        document.getElementById("codeOutput");


    // Check whether elements are found
    console.log("Create Workspace Button:", createWorkspaceBtn);
    console.log("Workspace:", workspace);


    // Hide workspace when page loads
    workspace.style.display = "none";


    // Create Workspace button
    createWorkspaceBtn.addEventListener("click", function () {

        console.log("Create Workspace button clicked");

        workspace.style.display = "block";

        workspaceMessage.textContent =
            "Workspace Created: " + projectName;

    });


    // Run Code button
   runCodeBtn.addEventListener("click", function () {
    const code = codeEditor.value;

    codeOutput.textContent = "";

    const oldLog = console.log;

    console.log = function (message) {
        codeOutput.textContent += message + "\n";
    };

    try {
        const result = eval(code);

        if (result !== undefined) {
            codeOutput.textContent += result;
        }
    } catch (error) {
        codeOutput.textContent = "Error: " + error.message;
    }

    console.log = oldLog;
});


    // Team members
    const teamMembersList = [
        "Gopika",
        "Elakiya",
        "Swathika"
    ];


    // Project files
    const files = [
        "index.html",
        "style.css",
        "script.js"
    ];


    // Workspace information
    const workspaceInfo = {
        name: "CodeSync",
        language: language,
        members: teamMembers,
        isCollaborative: isCollaborative
    };


    // Console information
    console.log("Project:", projectName);
    console.log("Language:", language);
    console.log("Team Members:", teamMembersList);
    console.log("Files:", files);
    console.log("Workspace:", workspaceInfo);

});
