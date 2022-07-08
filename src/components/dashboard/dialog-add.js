import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Report } from './report-main';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid, { OutlinedInput } from '@mui/material';
import {variables} from '../Variables.js';
import { useState } from 'react';
import { FetchSeller } from './sellers';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DialogOpenAdd({dataParentToChild}) {
  
  const [open, setOpen] = React.useState(false);
  const [IdRicevuto, setID] = React.useState([])
  console.log("received=", dataParentToChild)
  const handleClickOpen = () => {
    setOpen(true);
    setID([])
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <IconButton aria-label="Add"
          onClick={handleClickOpen}>
          <AddCircleOutlineIcon />
      </IconButton>
      <BootstrapDialog 
        maxWidth={450}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} color='#111827'>
            Aggiungi Repo
        </BootstrapDialogTitle>
        <DialogContent dividers>
                <FetchSeller dataParentToChild = {IdRicevuto}/>
                
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
const Sellers =[]
