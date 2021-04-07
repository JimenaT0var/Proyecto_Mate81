import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
///Importacion de TABS
import 'react-tabs/style/react-tabs.css';
/**Componentes Tabla */
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { Button, Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    table: {
        minWidth: 650,
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingLeft: theme.spacing(18),
        paddingBottom: theme.spacing(4),
        paddingInlineEnd: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        marginBlockEnd: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    input: {
        display: 'none',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paperModal: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    formControl: {
		margin: theme.spacing(1),
		width:'100%'
	},
}));

function Grafica() {
    const classes = useStyles();

    return (
        <Fragment>
            <TableContainer>
                <Table>
                    <TableHead>
                        
                    </TableHead>
                    <TableBody>
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

export default Grafica;