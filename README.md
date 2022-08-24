
## Name
Movies & TV Shows Database App

## Description
An attempt to expand the features of previous movies app assignment using react.js. Movies and TV shows info is being fetched from TMDB and the same is being rendered using reaact.js.  

## Authentication
Authentication is done using firebase and firestore DB is used for storing users. Due to the time constraint i have not attemted for server side persistence for favourite movies or must watch playlists.

## New Features Added
+ Similar Movies
+ Actors Card for a particular movie.
+ TV shows page.
+ Firebase Authetication.
+ Firestore database for users.
+ Sign-in using Google credentials.
+ Added protected use for must watch playlist and favourites pages only for logged in users.


## Visuals

## Firebase login page
![][login]

## Firestore DB users collection
![][firestoreDB]

## Home Page(Movies)
![][home]

## MoveDetails
![][moviedetails]

## TV Show
![][tvshow]

## TV Show Details
![][tvshowdetails]

## Actor Information
![][actorbio]

## Similar Movies
![][similar]

## Favourite Movie
![][favourite]

## Protected Page
![][protected]



## Requierements to run the code
Your .env folder in src must contain 
REACT_APP_TMDB_KEY= "Your TMDB api key"
FAST_REFRESH=false
REACT_APP_FIREBASE_API_KEY="Your firebase api key"

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.


## Authors and acknowledgment
+ Material UI
+ https://blog.logrocket.com/user-authentication-firebase-react-apps/ for firebase authentication.


## Project status
Would like to add server side persistence for users playlists and favourites using firestore but due to time constraints not attemted. Could tidy up sign in and log out so that login button wont be shown after signing in.


[login]: ./public/firebaselogin.png
[firestoreDB]: ./public/firestoreusers.png
[actorbio]: ./public/actorbio.png
[protected]:./public/protected.png
[home]:./public/homepage.png
[favourite]: ./public/favourite.png
[moviedetails]: ./public/moviedetails.png
[similar]: ./public/similar.png
[tvshow]: ./public/tvshow.png
[tvshowdetails]: ./public/tvshowdetails.png


