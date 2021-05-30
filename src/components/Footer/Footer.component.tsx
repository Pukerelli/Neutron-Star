import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { useFooterStyles } from '../../styles/Footer.styles';

const Copyright: React.FC = () => {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="/">
                Someday there will be a url
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}




export const Footer: React.FC = () => {
     const classes = useFooterStyles()
    return (
        <div className={classes.root}>
            <div className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Neutron Star alpha v0.01</Typography>
                    <Copyright />
                </Container>
            </div>
        </div>
    );
};
