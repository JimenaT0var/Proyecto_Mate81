import React, { Component, useState, useEffect } from 'react';
import LayoutDashboard from '../../Components/Layout/LayoutDashboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider,makeStyles,createMuiTheme,} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Paper, Button, TextField } from '@material-ui/core';
//IMPORTACION DE TABS MATERIAL UI
/**Importacion de tabs */
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';

/**Importar Componentes Tablas */
import Interaciones from './Interaciones';
import Grafica from './Grafica';

import { useForm } from 'react-hook-form';

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
	container: {
		paddingTop: theme.spacing(4),
		paddingLeft: theme.spacing(18),
		paddingBottom: theme.spacing(4),
		paddingInlineEnd: theme.spacing(2),
		paddingRight: theme.spacing(1),
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
	paperTitle: {
		background: '#424242',
	},
	rootTab: {
		backgroundColor: '#fff9c4',
	},
	ButtonGroup: {
		margin: theme.spacing(-3, 0, 8, 0),
		paddingLeft: theme.spacing(120),
	},
	Button: {
		background: '#3537DB',
		'&:hover': {
			//you want this to be the same as the backgroundColor above
			background: '#5902CF',
		},
		color: 'white',
		width: theme.spacing(16),
	},
	Button2: {
		background: '#3537DB',
		'&:hover': {
			//you want this to be the same as the backgroundColor above
			background: '#5902CF',
		},
		color: 'white',
		width: theme.spacing(5),
	},
	formControl: {
		margin: theme.spacing(1),
		width: '100%',
	},
	listButton: {
		height: theme.spacing(2),
	},
	campo: {
		margin: theme.spacing(1),
		width: '42%', 
		marginLeft: 58,
	},
	
}));

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

export default function Index(props) {
	const classes = useStyles();

	const theme = createMuiTheme({
		palette: {
			secondary: {
				main: '#76ff03',
			},
			primary: {
				main: '#fafafa',
			},
		},
	});

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data, e) => {
		e.preventDefault();
		console.log(data);
	};
	//acciones para abrir el bogton de agregar
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<LayoutDashboard>
			<div className={classes.root}>
				<CssBaseline />
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Container className={classes.container}>
						<Grid Container spacing={3}>
							<div>
						
							<form noValidate autoComplete="off">
								
								<TextField id="filled-basic" label="Valor de Entrada (h)" variant="filled" className={classes.campo} />
								<TextField id="filled-basic" label="Número de Interaciones" variant="filled" className={classes.campo} />
							
							
							</form>
				
								<div className={classes.rootTab}>
									<AppBar position="static" color="default" className={classes.bar}>
										<ThemeProvider theme={theme}>
											<Tabs
												value={value}
												onChange={handleChange}
												indicatorColor="secondary"
												textColor="primary"
												variant="fullWidth"
												aria-label="full width tabs example"
											>
												<Tab
													label="TABLA DE ITERACIONES"
													{...a11yProps(0)}
													style={{ background: '#009688' }}
												/>
												<Tab
													label="GRÁFICA"
													{...a11yProps(1)}
													style={{ background: '#009688' }}
												/>
											</Tabs>
										</ThemeProvider>
									</AppBar>
									<TabPanel value={value} index={0} dir={theme.direction}>
										<Interaciones />
									</TabPanel>
									<TabPanel value={value} index={1} dir={theme.direction}>
										<Grafica />
									</TabPanel>
									
								</div>
							</div>
						</Grid>
					</Container>
				</main>
			</div>
		</LayoutDashboard>
	);
}
