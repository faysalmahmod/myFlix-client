# Movie-API-Client 


## Description
This project is using React, Bootstrap and Redux to build the client-side for a movie application. It complements the  server-side (REST API and database). You can see the GitHub repo [here](https://github.com/LisaPMunich/Movie-API.git).
The server- and the client-side use the MERN stack.

## How to run and use the project ...

### clone it

1. First clone the file. For instructions, how to clone a github repository, [click here.](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

2. Go to your local directory, where you stored the cloned file and click the index.html to open in the browser.

### use it live


<table>
<tr>
<td>
<a href="https://internationalefilme.netlify.app/">Click here to see my live page on Netlify</a>
</td>
</tr>
</table>

## File Tree

<img src="https://user-images.githubusercontent.com/99111208/168390914-f8b169ce-0157-4079-8518-f0994f4ac287.png"/>

## User Stories

* As a user, I want to be able to access information on movies, directors, and genres so that I can learn more about movies I have watched or am interested in.
* As a user, I want to be able to create a profile, so that I can save data about my favorite movies.


## Key Features

This single-page-application provides the following major views - NavBar, Footer 

### Login

log in with a username and password



### Main / Home

* List of ALL movies


### Single movie
* Clicking on one movie in the movie list (main) returns a single movie (image, description, genre, director)
* allows user to add and remove (toggle) a movie to their list of favorites


### Genre
Clicking on a link in the Single movie view returns data about the genre of the movie (name, description)


### Director
Clicking on a link in the Single movie view returns data about the director of the movie (name, bio, birth year, death year)


### Profile

* Users can update their user info (username, password, email, date of birth)
* Users can delete their profile / deregister
* Display of links to favorite movies, in the Single Movie view


## Project Dependencies


## What challenges did I face, what did I learn?

### ... from installing Parcel
* Project setup: in the package.json the entry point may not be "main", because main is used as the output file of the build. Instead define the source code for the library as follows:
```bash
"source": "src/index.html"
```

* Parcel: the command parcel src/index.html threw an error, saying
```bash
@parcel/package-manager: Could not find module "@parcel/transformer-sass" satisfying 2.0.0-rc.0
```
the solution was to remove the @oarcel/transformer-sass:^2.4.1 from the package.json,  deleting node-modules and package-lock.json file and then run npm install. As a result the version 2.0.0-rc.0 was installed and added as a dependencies.

* Parcel build process threw error, which was solved by adding type="module" to script tag in index.html
* add to package.json
```bash
"start": "parcel", // parcel watch + dev server
"watch": "parcel watch", // parcel build + automatic reload
"build": "parcel build"
```


