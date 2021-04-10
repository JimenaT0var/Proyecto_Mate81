import React, { useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ReactExport from "react-export-excel";
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import { Button, Tooltip, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    buttonExcel: {
      margin: theme.spacing(1),
      backgroundColor: 'green',
      borderColor: '#green',
      color: '#fff',
      '&:hover': {
        backgroundColor: 'green',
        borderColor: '#green',
      },
    },
    fill: { patternType: 'solid', fgColor: { rgb: 'FFD3D3D3' } },
}));

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Excel = (props) => {
    const classes = useStyles();
    const {euler} = props;

    return (
        <ExcelFile element={
            <Box align="right">
			    <Fab
					color="primary"
					aria-label="back"
					size="medium"
				>
				<Tooltip
					title="Exportar Productos"
					aria-label="Exportar Productos"
				>
					<CloudDownloadIcon />
				</Tooltip>
				</Fab>
            </Box>
            }
            filename="Productos"
        >
            <ExcelSheet data={ euler } name="Productos">
                <ExcelColumn label="Iteración" value="iteracion" className={classes.fill}/>
                <ExcelColumn label="X" value="x" className={classes.fill}/>
                <ExcelColumn label="Euler" value="euler" className={classes.fill}/>
                <ExcelColumn label="Euler Mejorado" value="eulerM" className={classes.fill}/>
                <ExcelColumn label="RK4" value="k4" className={classes.fill}/>
            </ExcelSheet>
        </ExcelFile>
    );
}

export default Excel