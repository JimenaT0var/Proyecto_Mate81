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
import Excel from './Excel';

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
	const [euler, setEuler] = useState([]);
  const [iteraciones, guardarIteracion] = useState(0);
  const [h, guardarH] = useState(0);

  const infoiteracion = (e) => {
    guardarIteracion(e.target.value);
  };
  const infoh = (e) => {
    guardarH(e.target.value);
  };
  
  var options = {
    high: 10,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null;
      }
    }
  };

  var type = 'Line';

  
  const operaciones = () => {
    var i = 0;
    var datos = [];
    var y = 0;
    var YEuler = 2;
    var euler = 2;
    var rungeKutta = 2;
    var Yn = 2;
    var SubYn = 0;
    var eulerM = 0;
    var k1 = 0;
    var y2 = 0;
    var k2 = 0;
    var y3 = 0;
    var k3 = 0;
    var y4 = 0;
    var k4 = 0;
	var x1 = 0;
	var x2 = 0;
	var x3 = 0;
	var x4 = 0;
	var x = 0;
	var Xn = 0;
	var SubXn = 0;
    //console.log(iterations);
    for(i=0;i<=iteraciones;i++) {
      datos[i] = {
        iteracion: i,
        x: y,
        euler: euler,
        eulerM: Yn,
        k4: rungeKutta,
      };

      k1 = Number(rungeKutta) * (x1 - 1);
      x2 = Number(x1) + Number(h) / 2;
      y2 = Number(rungeKutta) + (k1 * h) / 2;
      k2 = Number(y2) * (x2 - 1);
      x3 = Number(x1) + Number(h) / 2;
      y3 = Number(rungeKutta) + (k2 * h) / 2;
      k3 = Number(y3) * (x3 - 1);
      x4 = Number(x1) + Number(h);
      y4 = Number(rungeKutta) + k3 * Number(h);
      k4 = Number(y4) * (x4 - 1);

      rungeKutta = Number(rungeKutta) + (Number(h) / 6) * (k1 + 2 * k2 + 2 * k3 + k4);

      SubYn = Yn + Number(h) * (Number(Yn) * (Xn - 1));
      SubXn = Xn + h;
      let exp = Number(Yn) * (Xn - 1);
      let subExp = Number(SubYn) * (SubXn - 1);
      let newH = Number(h) / 2;

      eulerM = Yn + newH * (exp + subExp);
      Yn = eulerM;
      Xn = SubXn;

      YEuler = Number(euler) * (x - 1);
      euler = Number(euler) + Number(h) * Number(YEuler);
	  x += Number(h);

      y = Number(y) + Number(h);
    }

    setEuler(datos);
  };

  useEffect(() => {
    operaciones();
  }, [iteraciones, h]);

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
								
								<TextField id="filled-basic" label="Valor de Entrada (h)" 
        						onChange={(e) => infoh(e)} variant="filled" className={classes.campo} />
								<TextField id="filled-basic" label="Número de Interaciones"
								onChange={(e) => infoiteracion(e)} variant="filled" className={classes.campo} />
							
							<Excel euler={euler} />
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
											</Tabs>
										</ThemeProvider>
									</AppBar>

									<TabPanel value={value} index={0} dir={theme.direction}>
										<Interaciones euler={euler} />
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
