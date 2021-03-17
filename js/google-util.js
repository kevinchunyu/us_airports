import {google} from 'googleapis'

const googleConfig = {
    clientId: '297181745349-1epdpfne773uu4slprtqq6212v5kumci.apps.googleusercontent.com',
    clientSecret: 'oCfO9zUWbOZHadWerPNJWYl1',
    // current local address
    redirect: 'http://127.0.0.1:5500/index.html'
};

function createConnection() {
    return new google.auth.OAuth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
    )
}

// what kind of information we want to collect/use
const defaultScope = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email',
];

/**
 * Get a url which will open the google sign-in page and request access to the scope provided (such as calendar events).
 */
function getConnectionUrl(auth) {
return auth.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent', // access type and approval prompt will force a new refresh token to be made each time signs in
    scope: defaultScope
});
}

/**
 * Create the google url to be sent to the client.
 */
function urlGoogle() {
    const auth = createConnection(); // this is from previous step
    const url = getConnectionUrl(auth);
    return url;
    }