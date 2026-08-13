
const projectName = "CodeSync";
const language = "JavaScript";
const isCollaborative = true;

let teamMembers = 3;


// Function to create a workspace
function createWorkspace(workspaceName) {
    console.log("Workspace created: " + workspaceName);
    const WorkspaceMessage = document.querySelector("#WorkspaceMessage");
    WorkspaceMessage.textContent = "Workspace Created :" + " " +  workspaceName;
}


// Get the Create Workspace button
const createWorkspaceBtn = document.querySelector("#createWorkspaceBtn");


// When the user clicks the button
createWorkspaceBtn.addEventListener("click", function()
{

    createWorkspace("CodeSync");
}
);

// Get workspace elements

const workspace = document.querySelector("#workspace");

const codeEditor = document.querySelector("#codeEditor");

const runCodeBtn = document.querySelector("#runCodeBtn");

const codeOutput = document.querySelector("#codeOutput");
// Run the code

runCodeBtn.addEventListener("click", function () {

    const code = codeEditor.value;

    try {

        const result = eval(code);

        codeOutput.textContent = result;

    } catch (error) {

        codeOutput.textContent = "Error: " + error.message;

    }

});


// Hide workspace initially

workspace.style.display = "none";


// Open workspace when button is clicked

createWorkspaceBtn.addEventListener("click", function () {

    createWorkspace("CodeSync");

    workspace.style.display = "block";

});

