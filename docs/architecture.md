#System Architecture
##Project
Real-Time Collaborative Code Editor 
Overview:
The Real time collaborative code editor is a web-based application that allows multiple users to edit code together in real time.
Architecture:
The system consist of 3 main layers:
1.Frontend
2.Backend
3.Database
Frontend:
The frontend provides the user interface and code editor
   Technologies:
      1.HTML
      2.CSS
      3.JavaScript
      4.React
Backend:
The backend manages users, coding rooms, code synchronization and communication between users.
   Technologies:
      1.Node.js
      2.Express.js
      3.WebSocket/Socket.IO
Database:
The database stores user information, a project information and saved code.
   Technologies:
     1.MongoDB
Real-time communication:
 When one user changes the code;
    User->Frontend->WebSocket->Backend->other users
 The changes are transmitted immediately to other users in the same coding room.
Main Features:
 1.User Authentication
 2.Create and join coding rooms
 3.Real-time code editing 
 4.Multiple users in one room
 5.Online user presents 
 6.Chat
 7.Save code 
 8.Run code
-------------------------------------------------------------------------------
DAY 2
---

# Day 2 — HTML Foundation

## Today's Goal

Today we started implementing the **Frontend** part of CodeSync.

We learned the basics of **HTML (HyperText Markup Language)** and created the initial structure of our CodeSync webpage.

## What We Learned

HTML is used to create the **structure of a webpage**.

### Important HTML Elements

- `<html>` — Root of the webpage
- `<head>` — Contains information about the webpage
- `<title>` — Sets the browser tab title
- `<body>` — Contains the visible webpage content
- `<header>` — Defines the top section
- `<main>` — Defines the main content
- `<section>` — Groups related content
- `<h1>` — Main heading
- `<h2>` — Section heading
- `<p>` — Paragraph/text
- `<button>` — Creates a button
- `<footer>` — Defines the bottom section

## Frontend Implementation

We created our first frontend file:

```text
frontend/
└── index.html

# Day 3 - CSS
## Day 3 - CSS

Today we learned the basics of CSS and used it to style the CodeSync landing page.

### CSS Topics Learned

1. CSS Syntax
2. CSS Selectors
3. Colors
4. Fonts and Text Styling
5. Margin
6. Padding
7. Borders
8. Border Radius
9. Flexbox
10. Button Styling
11. Hover Effects
12. Feature Cards
13. Basic Responsive Layout using Flexbox

### CSS Syntax

The basic CSS structure is:

```css
selector {
    property: value;
}
# Day 3 & Day 4 – CodeSync Development Progress

## 🎨 Day 3 – CSS & UI Development

### What We Did
- Designed the CodeSync landing page using HTML and CSS.
- Created the Hero section.
- Added CodeSync title and project description.
- Added the Create Workspace button.
- Created feature cards for:
  - 👥 Real-Time Collaboration
  - 💻 Online Code Editor
  - ▶️ Code Execution
  - 🤖 AI Assistant
- Applied CSS for layout, spacing, typography, buttons and cards.
- Created the initial CodeSync UI design.

### Technologies Used
- HTML5
- CSS3

### Day 3 Result

CodeSync Landing Page
        ↓
Hero Section
        ↓
Create Workspace Button
        ↓
Feature Cards


## ⚡ Day 4 – JavaScript & Interactivity

### What We Did
- Learned JavaScript variables using let and const.
- Created JavaScript functions.
- Connected JavaScript with HTML using the DOM.
- Used querySelector() to select HTML elements.
- Used addEventListener() to handle button clicks.
- Implemented the Create Workspace functionality.
- Displayed the message "Workspace Created: CodeSync" on the webpage.
- Added a basic code editor using textarea.
- Added a Run Code button.
- Read user-entered code using .value.
- Created an output area to display results.
- Added basic error handling using try...catch.
- Tested JavaScript code execution and error messages.

### Technologies Used
- HTML5
- CSS3
- JavaScript

### Day 4 Result

User
 ↓
CodeSync Website
 ↓
Create Workspace
 ↓
Workspace Opens
 ↓
Code Editor
 ↓
User Enters Code
 ↓
Run Code
 ↓
JavaScript
 ↓
Output / Error


### Important Note

The current code execution using eval() is only for learning and testing. It will not be used in the final production version.

Secure code execution, backend integration, database integration and real-time collaboration using WebSocket will be implemented in later stages.

### Development Status

✅ Day 3 – CSS & UI completed

✅ Day 4 – JavaScript & Basic Interactivity completed


# Day 5 – CodeSync Development Progress

## ⚡ Day 5 – Code Execution & Output Handling

### What We Did
- Improved the CodeSync code execution feature.
- Connected the Code Editor with the Run Code button.
- Read the code entered by the user using `.value`.
- Cleared the previous output before every execution.
- Executed JavaScript code using `eval()` for learning and testing.
- Displayed the execution result inside the CodeSync Output area.
- Added support for displaying `console.log()` messages inside the Output area.
- Used `try...catch` to handle execution errors.
- Displayed error messages inside the Output area instead of crashing the webpage.
- Temporarily redirected `console.log()` to the CodeSync Output area.
- Restored the original `console.log()` after execution.

### Technologies Used
- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Event Handling
- Error Handling

### Day 5 Result

User enters code
        ↓
Code Editor
        ↓
Run Code
        ↓
JavaScript Execution
        ↓
┌──────────────────────┐
│                      │
│   Result / console   │
│       output         │
│                      │
│   OR                 │
│                      │
│   Error Message      │
│                      │
└──────────────────────┘

### Example

Input:

console.log("Hello CodeSync");
console.log(10 + 20);

Output:

Hello CodeSync
30

Error Example:

3 + i

Output:

Error: i is not defined

### Important Note

The current `eval()` implementation is only for learning and testing. It will not be used for secure production code execution.

Secure code execution through the backend will be implemented in later stages.

### Development Status

✅ Day 3 – CSS & UI completed

✅ Day 4 – JavaScript & Basic Interactivity completed

✅ Day 5 – Code Execution & Output Handling completed

# Day 6 – CodeSync Development Progress

## 📁 Day 6 – File Explorer & File Selection

### What We Did
- Added a File Explorer to the CodeSync workspace.
- Added file buttons for:
  - 📄 index.html
  - 🎨 style.css
  - ⚡ script.js
- Used `data-file` attributes to identify each file.
- Used `querySelectorAll()` to select all file buttons.
- Used `forEach()` to handle each file button.
- Added click event listeners to the file buttons.
- Used `dataset.file` to identify the selected file.
- Created a `fileContents` object to store sample code for each file.
- Connected the File Explorer with the Code Editor.
- When a file is selected, its code is loaded into the Code Editor.
- Added basic file-selection logging using `console.log()`.

### Technologies Used
- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Event Handling
- JavaScript Objects
- Arrays

### Day 6 Result

User clicks Create Workspace
        ↓
Workspace Opens
        ↓
File Explorer Appears
        ↓
User Selects a File
        ↓
JavaScript Identifies the File
        ↓
File Content is Retrieved
        ↓
Content is Loaded into Code Editor
        ↓
User Can View/Edit the Code

### Example

Click:

📄 index.html

↓

HTML code appears in the Code Editor.

Click:

🎨 style.css

↓

CSS code appears in the Code Editor.

Click:

⚡ script.js

↓

JavaScript code appears in the Code Editor.

### Important Note

The current file contents are sample contents stored in JavaScript for learning and testing.

Actual project files, file persistence and database-based file management will be implemented in later stages.

### Development Status

✅ Day 3 – CSS & UI completed

✅ Day 4 – JavaScript & Basic Interactivity completed

✅ Day 5 – Code Execution & Output Handling completed

✅ Day 6 – File Explorer & File Selection completed


# Day 7 – CodeSync Development Progress

## 💾 Day 7 – File Editing & Change Tracking

### What We Did
- Added the `currentFile` variable to keep track of the file currently being edited.
- Updated the file-selection functionality to identify the selected file.
- Connected the Code Editor with the selected file.
- Added the `input` event to detect changes made by the user while typing.
- Saved the updated editor content back into the `fileContents` object.
- Made CodeSync remember file changes when switching between files.
- Tested editing `index.html`, switching to another file, and returning to `index.html`.
- Verified that the user's changes remain in the editor.

### Technologies Used
- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Event Handling
- JavaScript Objects

### Day 7 Result

Select a File
        ↓
Current File is Stored
        ↓
File Content Loads into Editor
        ↓
User Edits Code
        ↓
Input Event Detects Changes
        ↓
Updated Code is Stored
        ↓
User Switches to Another File
        ↓
User Returns to Previous File
        ↓
Updated Code is Restored

### Example

User selects:

📄 index.html

↓

Changes:

<h1>Welcome to CodeSync</h1>

to:

<h1>Hello Team CodeSync!</h1>

↓

Switches to:

🎨 style.css

↓

Returns to:

📄 index.html

↓

The updated HTML code is still available.

### Important Note

The current changes are stored temporarily in JavaScript memory using the `fileContents` object.

The changes are not yet permanently saved to a database or server.

Permanent file storage and real-time synchronization between multiple users will be implemented in later stages.

### Development Status

✅ Day 3 – CSS & UI completed

✅ Day 4 – JavaScript & Basic Interactivity completed

✅ Day 5 – Code Execution & Output Handling completed

✅ Day 6 – File Explorer & File Selection completed

✅ Day 7 – File Editing & Change Tracking completed



# Day 8 – CodeSync Development Progress

## 💾 Day 8 – Local Storage & Persistent File Saving

### What We Did
- Added browser-based file storage using `localStorage`.
- Saved the updated file contents whenever the user edits code.
- Used the `input` event to detect changes in the Code Editor.
- Used `JSON.stringify()` to convert the file contents object into storable data.
- Used `localStorage.setItem()` to save the file data in the browser.
- Used `localStorage.getItem()` to retrieve previously saved files.
- Used `JSON.parse()` to convert the stored data back into a JavaScript object.
- Used `Object.assign()` to restore the saved file contents.
- Made CodeSync preserve file changes even after refreshing the webpage.

### Technologies Used
- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Local Storage
- JSON
- JavaScript Objects

### Day 8 Result

User edits a file
        ↓
Input event detects the change
        ↓
Updated content stored in fileContents
        ↓
JSON.stringify()
        ↓
localStorage
        ↓
User refreshes the webpage
        ↓
localStorage.getItem()
        ↓
JSON.parse()
        ↓
Saved file contents restored
        ↓
User opens the file
        ↓
Previous changes appear in the Code Editor

### Example

User edits:

📄 index.html

From:

<h1>Welcome to CodeSync</h1>

To:

<h1>Hello Team CodeSync!</h1>

↓

CodeSync saves the updated content in Local Storage.

↓

After refreshing the webpage:

📄 index.html

↓

<h1>Hello Team CodeSync!</h1>

The changes are still available.

### Important Note

The current file persistence uses browser Local Storage for learning and frontend development.

The final CodeSync project will use a backend and database for permanent project/file storage.

Real-time file synchronization between multiple users will be implemented later using WebSocket.

### Development Status

✅ Day 3 – CSS & UI completed

✅ Day 4 – JavaScript & Basic Interactivity completed

✅ Day 5 – Code Execution & Output Handling completed

✅ Day 6 – File Explorer & File Selection completed

✅ Day 7 – File Editing & Change Tracking completed

✅ Day 8 – Local Storage & Persistent File Saving completed

