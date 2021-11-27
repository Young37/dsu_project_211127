const CREATE_USER_API = "http://localhost:4000/users";

const user = {
    create: (parameter) => {
        return fetch(CREATE_USER_API,{
              method: 'post',
              headers: {'Content-type' : 'application/json'},
              body: JSON.stringify(parameter)
        });
    },
    
    get: () =>{

    },

    getList: () => {

    },

    delete: () => {

    },

    update: () => {

    }
};

export default user;