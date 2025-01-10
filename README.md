# Movie Sage: A Movie Review System

Movie Sage is a web application built with the MERN stack (MongoDB, Express, React, Node.js) that allows users to search for movies, view detailed information, explore different genres and review an existing movie. This website is built upon the sample_mflix data provided by MongoDB Atlas. The app fetches movie data from MongoDB through an ExpressJS server and presents it in an intuitive and responsive design.

## Features

- **Dynamic Carousel**: Users can view an outstanding carousel in the hero banner section.
- **Search Movies**: Users can search for movies by title and view a list of relevant results.
- **Movie Details**: Clicking on a movie will show detailed information such as cast, plot, ratings and more.
- **Genres**: Explore movies by genre.
- **Movies**: Users can explre movies by several filtering options.
- **Pagination**: Where a lot of data need to be displayed, pagination is implemented for better visual experience.
- **React Tabs**: In movie details page, some data is illustrated with tabs for easy to access several data.
- **Responsive Design**: The app is fully responsive and optimized for use across desktops, tablets and mobile devices.

## Tech Stack

- **Frontend**: 
  - React Vite for building UI.
  - TailwindCSS for styling the UI.
  - DaisyUI for readymade components and themes.
  - `@lottiefiles/dotlottie-react`: For animations using Lottie.
  - `axios`: For making HTTP requests.
  - `react-icons`: For icons in the UI.
  - `react-paginate`: For pagination.
  - `react-router-dom`: For routing and navigation.
  - `swiper`: For creating interactive slideshows.

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: [Movie-Sage API](https://movie-sage-backend.onrender.com/movies)
- **Hosting**: Frontend deployed on Vercel, Backend on Render.