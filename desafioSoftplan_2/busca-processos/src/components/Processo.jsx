import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from "react-router-dom";
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Montserrat',
        // width: '99%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#C4C4C4',
    },
}));

const Processo = props => {
    const history = useHistory();
    
    const { processo, excluir} = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleExcluir = (processo) =>{
        console.log(processo);
        excluir(processo);
    }

  return (
    <Card variant="outlined" className={classes.root} >
        <CardHeader className={classes.root}
            avatar={
                <Avatar variant="square" aria-label="recipe" className={classes.avatar}>
                    <ClearIcon/>
                </Avatar>
            }
            title={processo.numero}
            subheader={processo.entrada}
        >
            TESTE
        </CardHeader>

        <CardContent className={classes.root}>
            <Typography color="textSecondary" component="p">
                {processo.assunto}
            </Typography>
            <Typography color="textSecondary" component="p">
                {processo.interessados}
            </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.actions}>
            <IconButton color="primary" linkButton={true} component={Link} to={`/cadastro/${processo.id}`}>
                <EditIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => handleExcluir(processo)}>
                <DeleteIcon />
            </IconButton>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="ver mais">
            <ExpandMoreIcon />
        </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>{processo.descricao}</Typography>
            </CardContent>
        </Collapse>
    </Card>
  );
}
export default Processo;