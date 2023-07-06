import { useAuth } from 'hooks';
import css from './Home.module.css'




export default function Home() {
    const { user, isLoggedIn } = useAuth();
    console.log("user", user); //!

    return (
        <div className={css.container}>
            <h1 className={css.title}>
                <span className={css.spanName} role="img" aria-label="Greeting icon">
                    💁 {isLoggedIn ? user.name : "Register or Log In"}
                    
                    <br />
                </span>
                Welcome to the PHONEBOOK
                <span className={css.spanWith}>
                    
                </span>
            </h1>
        </div>
    );
}
// { user.name }