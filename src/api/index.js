const authUrl = `https://kommunity-app.herokuapp.com/api/v1/auth`;

const register = (userData, link) => fetch(`${authUrl}/${link}`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
        'Content-Type': 'application/json'
    }
});

export const registerUserApi = userData => register(userData, 'signup');
