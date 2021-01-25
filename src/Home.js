import React from 'react';

function Home() {
  return (
    <div className='Home'>
      <h1>Welcome to the Meet app</h1>
      <div className='About'>
        <section>
          <h2>About Meet App</h2>
          <p>
            Meet App is a student project created by Matt Dillemuth for
            CareerFoundry's Full-Stack Immersion course. The app is built in
            order to demonstrate a progressive-web app (PWA) built with React
            using a test-driven development (TDD) approach.
          </p>
        </section>
        <section>
          <h3>How Meet App Enhances User Functionality</h3>
          <p>
            Meet App is a progressive-web app (PWA), meaning that users are able
            to install the app, add it to their home screen, and even use the
            app while offline. Meet App uses data visualization in order to
            display easy-to-read information to users in the form of a pie chart
            and a scatter plot.
          </p>
        </section>
        <section>
          <h3>What Meet App Does with User Data</h3>
          <p>
            The Meet App is for educational purposes only, and does not access
            user data. The Meet App is a student project for CareerFoundry's
            Full-Stack Immersion course. The calendar accessed for the Meet App
            is not the user's calendar, but rather, a calendar provided by
            CareerFoundry as part of their Full-Stack Immersion course.
          </p>
        </section>
        <section>
          <h3>Meet App's Privacy Policy</h3>
          <p>
            Meet App maintains a privacy policy that describes how the
            application accesses, uses, or shares Google user data. The privacy
            policy is available to the public at the link below.
          </p>
          <p>
            <a
              className='privacy'
              href='https://mdillemuth.github.io/meet-app/privacy.html'
              rel='nofollow noopener'
            >
              VIEW PRIVACY POLICY
            </a>
          </p>
        </section>
      </div>
      <div className='Continue'>
        <h2>Interested in Viewing the Project?</h2>
        <p>
          Follow the link below to log in with your Google account and access
          the Meet App.
        </p>
        <div className='button_cont' align='center'>
          <div className='google-btn'>
            <div className='google-icon-wrapper'>
              <img
                className='google-icon'
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/G
oogle_%22G%22_Logo.svg'
                alt='Google sign-in'
              />
            </div>
            <a
              href='https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=56115638320-9bl5o1guq2jvp29bfpitj1cfflfcvoc3.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fmdillemuth.github.io%2Fmeet-app%2F'
              rel='nofollow noopener'
              className='btn-text'
            >
              <b>Sign in with google</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
