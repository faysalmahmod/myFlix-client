import axios from "axios";

export const registerUser = (name, password, email) => {
    return axios
        .post('https://moviesapi1.herokuapp.com/users', {
            Name: name,
            Username: name,
            Password: password,
            Email: email,
        })
        .then(response => {
            const data = response.data;
            return {
                registered: true
            };
        })
        .catch(error => {
            const errorData = error.response.data;
            if (!errorData.success)
                return {
                    registered: false,
                    errors: errorData.errors
                };
            throw error
        });

};

