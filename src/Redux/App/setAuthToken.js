import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['consumer-app-auth-token'] = token;
  }
  else {
    delete axios.defaults.headers.common['consumer-app-auth-token'];
  }
}

export default setAuthToken;