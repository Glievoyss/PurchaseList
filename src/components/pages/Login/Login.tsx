import React,  { useState, useCallback }  from 'react';
import {ButtonCircle, Input} from 'components/atomsKit/Elements'
import {useHistory} from 'react-router-dom'
import classes from './Login.module.scss';

const Login: React.FC = ()=> {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const history = useHistory();

    const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>)=> {
      setEmail(e.target.value);
    }, [])

    const onChangePass = useCallback((e: React.ChangeEvent<HTMLInputElement>)=> {
      setPass(e.target.value);
    }, [])

    const onSubmit = ()=> {
      history.push('/cards')
    }

  return (
    <form className={classes.wrapPage} onSubmit={onSubmit}>
      <Input 
        onChange={onChangeEmail} 
        value={email} 
        label={'Email'} 
        placeholder={'Enter Email'}
        type={'email'}
        required
      />
      <Input 
        onChange={onChangePass} 
        value={pass} 
        label={'Password'} 
        placeholder={'Enter Password'}
        type={'password'}
        required
      />
      <ButtonCircle isSubmit icon='>' className={classes.submit}/>
    </form>
  );
}

export default Login;
