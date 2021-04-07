import React from 'react';
import { Route , BrowserRouter as Router,  Switch } from 'react-router-dom';

//import Login from './Components/Forms/Auth/Login';
import Home from '../Containers/Principal/Home';
 




//INDEX PARA LOS TABS
import Index from '../Containers/matematicas/Index';



function App () {
    //console.log(process.env.REACT_APP_BACKENTD_URL); //revisamos el entorno de la api
 

  return (
		
			<Router>
				<Switch>
					{/**RUTA PARA PAGINA PRINCIPAL */}
					<Route exact path="/ecuacion" component={Home} />
					
					{/**RUTAS SALES PRODUCTOS Y APLICACIONES */}
					<Route 
						exact 
						path="/procedimiento" 
						component={Index} 
					/>
					
					
					
					
				</Switch>
			</Router>
		
	);}

export default App;
