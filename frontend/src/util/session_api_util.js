//create a setAuthToken method to either set or delete the common header dependent on whether the token is passed into our method

import axios from 'axios';

export const setAuthToken = (token) => {
	if (token) {
		axios.defaults.headers.common['Authorization'] = token;
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
};
