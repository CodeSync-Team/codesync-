document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // Project Information
    // ===============================

    const projectName = "CodeSync";
    const language = "JavaScript";
    const isCollaborative = true;
    const teamMembers = 3;


    // ===============================
    // Get HTML Elements
    // ===============================

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


    // ===============================
    // Day 6 - File Explorer
    // ===============================

    const fileButtons =
        document.querySelectorAll(".file-btn");
    let currentFile = null;

    // Code displayed when a file is selected

    const fileContents = {

        "index.html": `<!DOCTYPE html>
<html>
<head>
    <title>CodeSync</title>
</head>
<body>
    <h1>Welcome to CodeSync</h1>
</body>
</html>`,

        "style.css": `body {
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
}`,

        "script.js": `console.log("Hello from CodeSync");`
    };
    // Load saved files from Local Storage

    const savedFiles =
        localStorage.getItem("codeSyncFiles");

    if (savedFiles) {

        const savedFileContents =
            JSON.parse(savedFiles);

        Object.assign(
            fileContents,
            savedFileContents
        );

    }

    // ===============================
    // File Selection
    // ===============================

    fileButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedFile =
                button.dataset.file;

            currentFile = selectedFile;

            codeEditor.value =
                fileContents[selectedFile];

            codeOutput.textContent = "";

            console.log("Opened file:", selectedFile);

        });

    });

    codeEditor.addEventListener("input", function () {

        if (currentFile !== null) {

            fileContents[currentFile] =
                codeEditor.value;

            localStorage.setItem(
                "codeSyncFiles",
                JSON.stringify(fileContents)
            );

            console.log(
                "Saved changes to:",
                currentFile
            );

        }

    });


    // ===============================
    // Hide Workspace Initially
    // ===============================

    workspace.style.display = "none";


    // ===============================
    // Create Workspace
    // ===============================

    createWorkspaceBtn.addEventListener("click", function () {

        console.log("Create Workspace button clicked");

        workspace.style.display = "block";

        workspaceMessage.textContent =
            "Workspace Created: " + projectName;

    });


    // ===============================
    // Run Code
    // ===============================



    runCodeBtn.addEventListener("click", function () {

        const code = codeEditor.value;

        codeOutput.textContent = "";

        // Run JavaScript
        if (currentFile === "script.js") {

            const oldLog = console.log;

            console.log = function (message) {

                codeOutput.textContent +=
                    message + "\n";

            };

            try {

                const result = eval(code);

                if (result !== undefined) {
                    codeOutput.textContent += result;
                }

            } catch (error) {

                codeOutput.textContent =
                    "Error: " + error.message;

            }

            console.log = oldLog;
        }

        // Run HTML
        else if (currentFile === "index.html") {

            codeOutput.innerHTML = code;

        }

        // CSS
        else if (currentFile === "style.css") {

            codeOutput.textContent =
                "CSS file selected. CSS cannot be executed directly.";

        }

        else {

            codeOutput.textContent =
                "Please select a file first.";

        }

    });

    // ===============================
    // Team Members
    // ===============================

    const teamMembersList = [
        "Gopika",
        "Elakiya",
        "Swathika"
    ];


    // ===============================
    // Project Files
    // ===============================

    const files = [
        "index.html",
        "style.css",
        "script.js"
    ];


    // ===============================
    // Workspace Information
    // ===============================

    const workspaceInfo = {

        name: projectName,
        language: language,
        members: teamMembers,
        isCollaborative: isCollaborative

    };


    // ===============================
    // Console Information
    // ===============================

    console.log("Project:", projectName);
    console.log("Language:", language);
    console.log("Team Members:", teamMembersList);
    console.log("Files:", files);
    console.log("Workspace:", workspaceInfo);

});