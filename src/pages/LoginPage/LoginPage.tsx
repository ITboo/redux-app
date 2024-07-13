import { useDispatch, useSelector } from "react-redux";
import "./LoginPage.css";
import { LOGIN, PASSWORD } from "../../constants/constants";
import { login, password } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handlerLogin = (event) => {
    dispatch(login(LOGIN, event.target.value));
    console.log(`login: ${state.login}`);
}

const handlerPassword = (event) => {
    dispatch(password(PASSWORD, event.target.value));
    console.log(`password: ${state.password}`);
}


  return (
    <form className="form">
      <input className="form__input" onChange={handlerLogin}/>
      <input className="form__input" onChange={handlerPassword}  />
      <Link className={`form__link ${
                    state.login === 'developer12' && 
                    state.password === '123456' 
                    ? '' 
                    : 'form__link--disabled '}`}
                to='/profile'>Войти</Link>
    </form>
  );
};

export default LoginPage;
