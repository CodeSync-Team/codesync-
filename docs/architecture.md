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