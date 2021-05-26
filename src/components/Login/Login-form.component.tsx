import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import {ClassNameMap} from "@material-ui/core/styles/withStyles";
import {authMe} from "../../fake-api/login-api";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../store/reducers/auth-reducer/auth.slice";
import {AuthUserSelector} from "../../selectors/auth/auth.selector";
import { useHistory } from "react-router-dom";

interface IProps {
    classes: ClassNameMap<"paper" | "avatar" | "form" | "submit">
}

export const LoginForm: React.FC<IProps> = ({classes}) => {
    const history = useHistory()
    const user = useSelector(AuthUserSelector)

    const dispatch = useDispatch()
    const  handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        await dispatch(fetchAuth({username, password}))
        console.log(user)
    }
    const [username, setUsername] = useState('')
    const usernameHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)

    }
    const [password, setPassword] = useState('')
    const passwordHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)

    }
    if(!user) {
        return (
        <div><h1>booom</h1></div>
        )
    }
    if(user.id) {
        history.push('/')
    }
    return (
        <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={usernameHandleChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={passwordHandleChange}
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary"/>}
                label="Remember me"
            />
            <Button
                onClick={(e) => handleSubmit(e)}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2" onClick={() => alert('loser')}>
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </form>
    )

}