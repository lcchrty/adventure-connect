import React from 'react'
import { FcGoogle } from 'react-icons/fc';

function GoogleButton() {

  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

  // Where Google will respond with the authorization code.
  const redirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI

  // Use Google provided Scope URI to implement incremental authorization.
  const scopeUri = process.env.REACT_APP_GOOGLE_SCOPE_URI

  // Google's OAuth 2.0 endpoint
  const endpoint = process.env.REACT_APP_GOOGLE_ENDPOINT_URL

  
  // Hardcoded for now.
  const randomQueryState = 12345
  
  /*
  Recommended to add state to queryParams to ensure that the request and
  response originated in the same browser, providing protection
  against attacks such as cross-site request forgery.

  I will leave this as a stretch goal.
  */
  const queryParams = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'token',
    scope: scopeUri,
    state: randomQueryState
  })

  // Generate a URL to request access from Google's OAuth 2.0 endpoint
  // and append queryParams to the URL.
  const url = endpoint + '?' + queryParams

  return (
    <a 
        href={url}
        className="
        hover:transform 
        hover:transition-all 
        hover:scale-110 
        cursor-pointer 
        flex 
        items-center 
        justify-center 
        gap-2
        rounded-md
        text-sm
        p-2 
        "
    >
        <FcGoogle size={30}/>
        <span>Sign in with Google</span>
    </a>
      );
    };

export default GoogleButton