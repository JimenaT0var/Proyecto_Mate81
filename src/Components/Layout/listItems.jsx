import React from 'react';
import {
     ListItem, ListItemIcon, ListItemText, Divider, List
  } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import TableChartIcon from '@material-ui/icons/TableChart';
import FunctionsIcon from '@material-ui/icons/Functions';
const useStyles = makeStyles((theme) => ({
  root : {
    width : '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  Link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}));

export default function  ListItems() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
  <div>
    <List component ="nav">
      <Link to="/ecuacion" className={classes.Link}>
        <ListItem button>
          <ListItemIcon>
            <FunctionsIcon/>
          </ListItemIcon>
            <ListItemText primary="Ecuación Diferencial"/>
        </ListItem>
      </Link>
      <Divider />
      <Link to="/procedimiento" className={classes.Link}>
        <ListItem button>
          <ListItemIcon>
          <TableChartIcon />
          </ListItemIcon>
          <ListItemText primary="Procedimiento"/>
        </ListItem>
      </Link>
      </List>
  </div>
  );
}