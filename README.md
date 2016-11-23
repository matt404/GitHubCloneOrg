# GitHubCloneOrg
A simple web app for cloning multiple repositories from a specified org.

#### Dependencies
* Visual Studio 2013+

#### Instructions
1. Create a personal access token in your github account (Settings > Personal Access Tokens).  
2. Ensure that you have created an rsa key for ssh access and have configured that key to access your GitHub account.
3. Run the app in Visual Studio, this will bring up a web page where you can dial in the settings
  * *GitHub Host*: this defaults to the public GitHub platform, you can change this to your corporate host if necessary
  * *Org Name*: The GitHub organization that you want to clone from.
  * *Clone To Path*: This where the repos will be cloned to on your workstation.  Repos will be placed in (Clone To Path)+(Org Name)
  * *Access Token*: Copy the token you create here. You need this to access the GitHub API.
  * *Page Num*: GitHub will limit the number of repos to 100, if the org has more than 100 repos you will need to page through them to find what you need.
4. Click 'Get Repos'
5. Check off the repos that you want to clone
6. Click 'Clone Repos'
7. Bam!  enjoy...
