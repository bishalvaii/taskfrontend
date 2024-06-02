Nextjs with typescript Project - API collections using Redux 

## Installation
1. Clone the repo 
    git clone https://github.com/bishalvaii/taskfrontend.git
2. Navigate to the project directory
    cd new-project
3. Install dependencies
    npm install
4. Start the dev server
    npm run dev        

## Usage

Once the development server is running, you can access the application in your web browser at http://localhost:3000.


## Features
    Weather Forecast: View daily weather forecasts for a specific location.
    Movies: Explore information about movies, including titles, release dates, and overviews.
    Cricket Matches: Stay updated on live cricket matches, including match format, status, venue, and teams.
    Music Information: Discover the most-played songs, including track names, artists, genres, and release dates.


You can start editing the page by modifying `src/index.tsx`. The page auto-updates as you edit the file.

## Technologies used
Technologies Used
API Collections is built using the following technologies and frameworks:

Frontend:

React.js
Next.js
Redux
CSS Modules

APIs:

Foreca Weather API
Actor Movie API
Free Cricket Live Score API
Apple Marketing Tools API

Development Tools:
Git
GitHub
npm

## Others important technologies used
1. Cookies
    For managing user authentication and maintaing user sessions
    When a user logs in, a token is stored in a cookie to authenticate subsequent requests.
    If the token is not present or expired, the user is redirected to the login page.
2. Local Storage
    Local storage is used for caching API responses and reducing unnecessary network requests.
    Cached data is stored in the local storage with a timestamp indicating when it was fetched.
    When fetching data from APIs, the application first checks if the data exists in local storage and is not expired. If so, it retrieves the cached data instead of making a new API request.
    This helps improve the application's performance by reducing the load on the server and providing a faster user experience
3. Redux 
    In this project, Redux is used to store data fetched from various APIs, such as movie data, cricket matches data, and music data.
    Components can subscribe to changes in the Redux store and update their UI accordingly, ensuring a consistent and synchronized user interface across the application.

## Why redux as state management
 1. First reason is my familiarity with redux from about two years
 2. Easier to access data across site from centralized store
 3. Due to strict unidirectional data flow, making state updates predictable and easier to debug
 4. Middleware support for handling async actions and caching of api responses in  local storage and managing authentication-related tasks using cookies.
 5. Easy debugging due to Redux Devtools
 6. Scalable and easy to maintain
