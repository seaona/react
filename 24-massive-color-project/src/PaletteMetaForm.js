import React, { Component, useEffect, useRef } from'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';

const EmojiPickerWrapper = (props) => {
    const pickerRef = useRef(null);
  
    useEffect(() => {
      if (pickerRef.current) {
        const picker = new Picker({
            ...props,
            onEmojiSelect: props.onSelect,
            title: props.title,
          });
        pickerRef.current.appendChild(picker);
      }
    }, [props]);
  
    return <div ref={pickerRef}></div>;
};

class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: "form",
            newPaletteName: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
        this.savePalette = this.savePalette.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
          return this.props.palettes.every(
             ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
           );
        });
    }

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

     handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    showEmojiPicker = () => {
        this.setState({ stage: "emoji" });
    };

    savePalette(emoji) {
        this.props.handleSubmit({
            paletteName: this.state.newPaletteName,
            emoji: emoji.native,
        });
    }

    render() {
        const { newPaletteName } = this.state;
        const { hideForm, handleSubmit } = this.props;
        return (
            <div>
                <Dialog
                    open={this.state.stage === "emoji"}
                    onClose={hideForm}
                >
                    <DialogTitle>Choose a Palette Emoji</DialogTitle>
                    <EmojiPickerWrapper
                        title="Pick a Palette Emoji"
                        onSelect={this.savePalette}
                    />
                </Dialog>
                <Dialog
                    open={this.state.stage === "form"}
                    onClose={hideForm}
                >
                    <DialogTitle>Choose a Palette Name</DialogTitle>
                    <ValidatorForm
                        onSubmit={this.showEmojiPicker}
                    >
                        <DialogContent>
                        <DialogContentText>
                            Please enter a name for your new beautiful palette. Make sure it's unique.
                        </DialogContentText>

                        <TextValidator
                            label='Palette Name'
                            value={newPaletteName}
                            name="newPaletteName"
                            onChange={this.handleChange}
                            fullWidth
                            margin="normal"
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Enter Palette Name", "Name already taken"]}
                        />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={hideForm}>Cancel</Button>
                            <Button 
                                variant='contained'
                                color='primary'
                                type="submit"
                            >
                                Save Palette
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        );
    }
}

export default PaletteMetaForm;