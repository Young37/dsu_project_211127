import './App.css';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import {useState} from 'react';
import UserHander from './handler/user';


function App() {
  const [userName, setUserName] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [userId, setUserId] = useState('');
  const[userPassword, setUserPassword] = useState('');

  //회원가입을 실행하는 함수
  const onClickUserRegist = async () => {
    console.log(userName,userDesc,userId,userPassword);

    if(await UserHander.create({userName,userDesc,userId,userPassword})){
      alert('회원가입 성공');
    }else{
      alert('회원가입 실패');
    }
  }
  //   try{
  //   const apiResult = await fetch('http://localhost:4000/users',{
  //     method: 'post',
  //     headers: {
  //       'Content-type' : 'application/json'
  //     },
  //     body : JSON.stringify({
  //       "user_nm" : userName,
  //       "user_desc":userDesc,
  //       "user_login_id":userId,
  //       "user_login_pw":userPassword
  //     })
  //   });

  //   const {status} = apiResult;
  //   if(status === 200){
  //     alert('회원가입 성공');
  //   }
  //   console.log(apiResult);
  // }catch(e){
  //   console.log(`오류발생: ${e}`);
  //}}



  return (
    <div className='app-container'>
      <div>
        <TextField label="유저 이름" 
        variant="standard" 
        fullWidth 
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <TextField label="유저 설명" 
        variant="standard"
         fullWidth 
        value={userDesc}
        onChange={(e) => setUserDesc(e.target.value)}/>
      </div>
      <div>
        <TextField label="유저 아이디" variant="standard" fullWidth 
        value={userId}
        onChange={(e) => setUserId(e.target.value)}/>
      </div>
      <div>
        <TextField label="유저 비밀번호" variant="standard" fullWidth
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)} />
      </div>
      <div>
        <Button 
          fullWidth 
          onClick={onClickUserRegist}
        >
          회원가입
        </Button>
      </div>
    </div>
  );
}

export default App;
