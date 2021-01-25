import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import './Lista.css';
import Processo from './Processo';


const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Montserrat',
    margin:5,
    padding:5,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height:'auto',
  },
  processo: {
    margin:5,
    padding:5,
    display:'flex',
    border: '1px solid #c4c4c4',
    boxSizing: 'border-box',
  },
  item: {
      width:200,
      height:80,
      overflow:'hidden',
  },
  gridList: {
    width: '100%',
  },
  gridListTile: {
    height:'auto !important',
  },
}));

const Lista = props => {
  const classes = useStyles();
  const {processos, excluir} = props;
  if (!processos || processos.length === 0) {
    return <span>Não existem processos a ser listados.</span>
  }
          

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={1}>
        {processos.map((processo) => (
          <GridListTile key={processo.id} cols={1} className={classes.gridListTile}>
              <Processo processo={processo} excluir={excluir}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Lista;