import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import classes from "./Auth.module.css";

const Auth = (props) => {
  const dispatch = useDispatch();
  return (
    <main className={classes.auth}>
      <section>
        <form
          autoComplete="off"
          onSubmit={() => dispatch(authActions.onLogin())}
        >
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
