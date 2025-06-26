# Personal Website Workshop w React

This document assumes that you are starting from a *blank slate*. Feel free to skip steps if you have certain software installed prior. 

## 0. Creating your own Project Repository
- Click on **Fork** to create your own repo and then click **Create Fork**.

## 1. Install VSCode and Git

### a. Install VSCode
- Download VSCode from the [official website](https://code.visualstudio.com/download)

### b. Install Git and set up GitHub (this is optional)
- Setting Git up is NOT a requirement for this workshop but if you think you will be doing anymore coding, this is great to have!
- Create an account on [GitHub](https://github.com/)
- Install Git from the [official website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) 
  - **For Mac users**, install [Homebrew](https://brew.sh/) and then type `brew install git` on the terminal. 
- After installation, open Git Bash/(Terminal for Mac users) from your Start menu and type `git --version` to confirm
- Set up your username and email globally through these commands:
  - `git config --global user.name "Your Name"`
  - `git config --global user.email "your.email@example.com"`

- To work with GitHub on VSCode install GitHub Repositories from the Extensions tab and you'll see a **Source Control** icon on your navigation tab an an option to clone Git repository etc.

## 2. Frontend Installation : Nodejs and npm
- For Windows users, install [Node.js and npm LTS version](https://nodejs.org/en/download)
- For Mac users, using Homebrew `brew install node`
- Confirm installation by opening up a terminal (Command Prompt/Terminal) running `node -v` and `npm -v`


## 3. Set up React Demo locally
- IF you have Git and Github set up:
    - Go to your Forked Repository on Github, Click on green **Code** button and copy the URL (using HTTPS or SSH)
    - Open up VS Code and in the home page or under Source Control, click on **Clone a Repository**. Choose a directory to store your project on your local computer. You can also do the same from the *command line* using `git clone REPO_URL`
- ELSE:
    - On the top of this repository/ page, Click on green **Code** button and download the zip file.
    - Extract the zip file and from VSCode click **Open Folder** and open up your Project! 
- You will now see a local version of all the files/source code from GitHub. 
- Install all packages by running opening a terminal on VSCode and running `npm install`
- To run the react frontend, `npm run dev`
- Your react app is now running on `localhost:PORT`! You can follow the link from the terminal for the port number.

## Notes about Demo Project
- This is an oversimplified version of a Personal Website. We'll start with building a simple Landing Page, move to a Navigation Bar and then finally a Projects Page and component!
- We cover creating Components in React, Props and a simple .map() function
- We will also be hosting Vercel to host (if you would like to deploy this project so others can view your website, you will need to have Github set up (Step 1b.))

## Designing User Interface
I like starting from Figma when I build web apps. This is not a UI/UX course but if you are interested Figma is the best place to start!! (also, [coolors](https://coolors.co/) for color palettes and [dribble](https://dribbble.com/) for design ideas)

## Some resources I used:
This can help you start your own frontend from a blank repository
- [Set up your React Project with Vite](https://vite.dev/guide/)





