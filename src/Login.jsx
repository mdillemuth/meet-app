import React from 'react';
function Login() {
  return (
    <div className='App'>
      <h1>Welcome to the Meet app</h1>
      <h4>
        Log in to see upcoming events around the world for full-stack developers
      </h4>
      <div className='button_cont' align='center'>
        <div class='google-btn'>
          <div class='google-icon-wrapper'>
            <img
              class='google-icon'
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/G
oogle_%22G%22_Logo.svg'
              alt='Google sign-in'
            />
          </div>
          <a
            href='https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=56115638320-9bl5o1guq2jvp29bfpitj1cfflfcvoc3.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fmdillemuth.github.io%2Fmeet-app%2F'
            rel='nofollow noopener'
            class='btn-text'
          >
            <b>Sign in with google</b>
          </a>
        </div>
      </div>
      <a
        class='privacy'
        href='https://mdillemuth.github.io/meet-app/privacy.html'
        rel='nofollow noopener'
      >
        View privacy policy
      </a>
    </div>
  );
}
export default Login;