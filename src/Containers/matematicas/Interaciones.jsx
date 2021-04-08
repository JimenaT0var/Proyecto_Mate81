import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
///Importacion de TABS
import 'react-tabs/style/react-tabs.css';
/**Componentes Tabla */
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { Button, Tooltip, Grid, Box } from '@material-ui/core';

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
        margin: theme.spacing(1, 0, 2),
        background: "#3537DB",
        "&:hover": {
          //you want this to be the same as the backgroundColor above
          background: "#5902CF"
      },
      color: 'white'
      },
      submit2: {
        margin: theme.spacing(3, 0, 2),
        background: "#f44336",
        "&:hover": {
          //you want this to be the same as the backgroundColor above
          background: "#e53935"
      },
      color: 'white',
      
      },
    input: {
        display: 'none',
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paperModal: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    formControl: {
		margin: theme.spacing(1),
		width:'100%'
    },
    h2: {
        background: '#394ED1',
        color: 'white'
    }
}));

function Interaciones(props) {
    const classes = useStyles();
    const {euler} = props;
    return (
        <Fragment>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell align="center" style={{color:"#0d47a1"}} >ITERACION</TableCell>
                            <TableCell align="center" style={{color:"#0d47a1"}} >X(i)</TableCell>
                            <TableCell align="center" style={{color:"#0d47a1"}} >Y(euler)</TableCell>
                            <TableCell align="center" style={{color:"#0d47a1"}} >Y(euler mejorado)</TableCell>
                            <TableCell align="center" style={{color:"#0d47a1"}} >Y(RK4)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {euler.map((euler) => (
                        <TableRow>
                            <TableCell align="center"  >{euler.iteracion}</TableCell>
                            <TableCell align="center"  >{euler.x}</TableCell>
                            <TableCell align="center"  >{euler.euler}</TableCell>
                            <TableCell align="center"  >{euler.eulerM}</TableCell>
                            <TableCell align="center"  >{euler.k4}</TableCell>
                        </TableRow>
                    ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

export default Interaciones;