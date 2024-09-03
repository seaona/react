import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from'react-transition-group';
import { withStyles } from '@mui/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import CloseItem from '@mui/icons-material/Close';
import { ListItemText } from '@mui/material';
import blue from '@mui/material/colors/blue';
import red from '@mui/material/colors/red';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';
class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDeleteDialog: false,
            deletingId: "",
        };
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.goToPalette = this.goToPalette.bind(this);
    }

    openDialog(id) {
        this.setState({openDeleteDialog: true, deletingId: id})
    }

    closeDialog() {
        this.setState({ openDeleteDialog: false, deletingId: "" })
    }

    handleDelete() {
        this.props.deletePalette(this.state.deletingId);
        this.closeDialog();
    }

    goToPalette(id) {
        this.props.navigate(`/palette/${id}`);
    }

    render() {
        const { palettes, classes } = this.props;
        const { openDeleteDialog } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                    <h1 className={classes.heading}>React Colors</h1>
                    <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                            <CSSTransition
                                key={palette.id}
                                classNames='fade'
                                timeout={500}
                            >
                                <MiniPalette 
                                {...palette}
                                goToPalette={this.goToPalette}
                                openDialog={this.openDialog}
                                key={palette.id}
                                id={palette.id}
                            />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <Dialog
                    open={openDeleteDialog}
                    aria-labelledby='delete-dialog-title'
                    onClose={this.closeDialog}
                >
                    <DialogTitle id="delete-dialog-title">Delette this Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                    <CheckIcon></CheckIcon>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Delete</ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                    <CloseItem></CloseItem>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Cancel</ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);