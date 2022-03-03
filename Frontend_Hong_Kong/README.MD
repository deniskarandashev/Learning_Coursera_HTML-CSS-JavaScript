1. npm install
   (-> package.json)

2. npm install lite-server --save-dev
   (-> node_modules)
   (-> package-lock.json)

3. Open package.json and add two lines:
   "scripts": {
   "start": "npm run lite", <---------- 1
   "test": "echo \"Error: no test specified\" && exit 1",
   "lite": "lite-server" <---------- 2
   },

4. git:

to initialize the folder as a Git repository
----------> git init
to check your Git repository's status
----------> git status
to add files to the staging area of your Git repository
----------> git add .
to commit the current staging area to your Git repository
----------> git commit -m "Commit name"
to check the log of the commits to your Git repository
----------> git log --oneline
to check out the index.html from the second commit, find the number of the second commit using the git log, and then type
----------> git checkout <commit's number> index.html
to discard the effect of the previous operation and restore index.html to its state at the end of the third commit
----------> git reset HEAD index.html
----------> git checkout -- index.html

to set up your local repository to link to your online Git repository
----------> git remote add origin <repository URL>
to push the commits to the online repository
----------> git push -u origin master
to clone an online repository to your computer
----------> git clone <repository URL>

================== Bootstrap ==================

5. Add Bootstrap 4 (unzip Bootstrap4-starter.zip)
   5.1. go to conFusion sub-folder in terminal and
   ----------> npm install
   5.2. create .gitignore and add 'node_modules'
   5.3. to fetch Bootstrap files to your project folder
   ----------> npm install bootstrap@4.0.0 --save
   5.4. install JQuery and Popper.js
   ----------> npm install jquery@3.3.1 popper.js@1.12.9 --save
   5.5.
   ----------> npm start
