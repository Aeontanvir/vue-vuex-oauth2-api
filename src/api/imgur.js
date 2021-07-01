import qs from 'qs';

const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
const ROOT_URL = process.env.VUE_APP_IMGUR_ROOT_URL;

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token',
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    }
}


/*
http://localhost:8080/oauth2/callback#
access_token=f46bbbcf90e6af5df075dcfe1dbf2ac376360797
&expires_in=315360000
&token_type=bearer
&refresh_token=bb7c18db9e9158636dbde962832b855bce1a1ceb
&account_username=aeontanvir
&account_id=151305588

*/