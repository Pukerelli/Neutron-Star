import {makeStyles} from "@material-ui/core/styles";

export const useFooterStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    footer: {
        padding: theme.spacing(0.7, 2),
        marginTop: 'auto',
        fontSize: '0.5 rem',
        color: '#fff',
        backgroundColor: '#001121'
    },
}));