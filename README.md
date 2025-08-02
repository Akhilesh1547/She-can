# She Can Foundation Intern Portal

This is a web application built with React for the "She Can Foundation". It provides a portal for interns to log in, track their fundraising progress, view unlocked rewards, and see their ranking on a leaderboard.

## Live link
 [she-can-dashboard.netlify.app](she-can-dashboard.netlify.app)

## Features

-   **User Authentication:** A simple, name-based login system for interns.
-   **Personal Dashboard:** Displays the intern's name, unique referral code, total donations raised, and a list of their earned rewards.
-   **Leaderboard:** Shows a ranked list of all interns based on the donations they've raised, highlighting the current user's position.
-   **Client-Side Routing:** Uses React Router for seamless navigation between the login, dashboard, and leaderboard pages.
-   **Dynamic Data:** Fetches intern and leaderboard data from a local JSON file to simulate a real-world application.

## Tech Stack

-   **Frontend:** React.js
-   **Routing:** React Router
-   **Styling:** CSS

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.
- You can download Node.js (which includes npm) from [here](https://nodejs.org/).

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/Akhilesh1547/she-can.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd she-can
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Application

In the project directory, you can run:
```sh
npm start
```
This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

 
The page will automatically reload when you make changes.

## Deployment


 ```yaml
live_site:
  title: "Dashboard"
  url: "she-can-dashboard.netlify.app"
  deployed_on: "Netlify"

 
