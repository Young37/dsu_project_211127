import UserApi from '../api/user';

const SUCCESS = 200;
const FAIL = 500;
const user = {
    create: async ({userName,userDesc,userId,userPassword}) => {
        try{

            let apiResult = await UserApi.create({
                user_nm : userName,
                user_desc: userDesc,
                user_login_id: userId,
                user_login_pw: userPassword
            });

            const {status} = apiResult;
            if(status === SUCCESS){
                return true;
            }
        }catch(e){
            console.log('회원가입 실패');
            return false;
        }
    }
}

export default user;