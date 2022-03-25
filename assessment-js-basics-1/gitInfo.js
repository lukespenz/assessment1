/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

var gitDefinition = `Git is a free open-source software which places a tracker in your files and saves their progress.
Often used for team projects in order to keep a log history of changes made to your code so you can find out
where bugs started to occur and aids in the recovery of past versions.`

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

var = gitHubDefinition = `GitHub is the website which allows individuals and companies to build, ship, and maintain software.
It's a place you can easily find other coder's projects and save your own. The prime purpose of gitHub is to track changes
to your coding projects and share them with others so when you run into bugs, you can restore previous verisions to see where
they occured.

You save your projects to GitHub by saving a new
repository in the website and then uploading an existing local repository from your computer using:
"git remote add origin[DesiredGitHubRepositoryLink]"
"git branch -M main"
"git push -u origin main"
You can can continue saving updated verisions of your local repository to GitHub using the command: "git push" after
adding and committing updated verisions to your local repository.`

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

var gitInitDefinition = `git init sets up a local new repository in your files where you can update changes made to your code.
You need to start with this before logging changes to your code.`

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

var gitCloneDefinition = `Makes a copy of an existing remote library`

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

var gitStatusDefinition = `Tells you what files are new or have been changed since your last commit.`

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

var gitAddDefinition = `adds all changes to the staging area before being committed.`
var gitAddCode = 'git add .'

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

var gitCommitDefinition = `Officially saves/logs changes to local repository.`
var gitCommitCode = 'git commit -m "<insert message>"'


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

var gitPushDefinition = `Publishes your commits from your local repository to your remote repository on GitHub.com.`
var gitPushCode = 'git push' (you didnt ask for it, but you got it anyways)