import { Avatar, Box, Card, CardContent, Grid, Typography, Container, getTableSortLabelUtilityClass, Table, SvgIcon, IconButton, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { Component } from 'react/cjs/react.production.min';
import {variables} from '../Variables.js'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import ReactDOM from 'react-dom';
import { MiscellaneousServicesSharp } from '@mui/icons-material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { bgcolor, grid, maxWidth } from '@mui/system';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import DialogOpenAdd from './dialog-add.js';
import { FetchSeller } from './sellers.js';
import DialogOpenEdit from './dialog-edit';


export class Report extends Component{

  constructor(props){
    super(props);
    this.idRef = React.createRef();
    this.tipoRef = React.createRef();
    this.sellerRef = React.createRef();
    this.macchinarioRef = React.createRef();
    this.userRef = React.createRef();
    this.tecnicoRef = React.createRef();
    this.state={
        Users:[],
        Macchinari:[],
        Sellers:[],
        report:[],
        modalTitle:"",
        ReportId:0,
        Seller:"",
        Macchinario:"",
        MacchinarioSn:"",
        DataIntervento:"",
        Tecnico:"",
        DataVendita:"",
        ParteCat:"",
        StatoRep:"",
        ID:"",
        
    }
  }

  refreshList(){
      fetch(variables.API_URL+'report')
      .then(Response=>Response.json())
      .then(data=>{
          this.setState({report:data});
      });
      fetch(variables.API_URL+'sellers')
        .then(Response=>Response.json())
        .then(data=>{
            this.setState({Sellers:data});
      });
  }

  componentDidMount(){
      this.refreshList();
  }
  
  changeSellerName = (e)=>{
    this.setState({Seller:e.target.value});
  }
  changeUserName = (e)=>{
    this.setState({EndUSer:e.target.value});
  }
  changeMacchinario = (e)=>{
    this.setState({Macchinario:e.target.value});
  }
  changeMacchinarioSn = (e)=>{
    this.setState({MacchinarioSn:e.target.value});
  }
  changeDataIntervento = (e)=>{
    this.setState({DataIntervento:e.target.value});
  }
  changeTecnico = (e)=>{
    this.setState({Tecnico:e.target.value});
  }
  changeDataVendita = (e)=>{
    this.setState({DataVendita:e.target.value});
  }
  changeParteCat = (e)=>{
    this.setState({ParteCat:e.target.value});
  }
  changeStato = (e)=>{
    this.setState({StatoRep:e.target.value});
  }

  deleteClick(id){
    if(window.confirm('Are you sure?')){
      fetch(variables.API_URL+'sellers/'+id,{
        method:'DELETE',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        }
      })
      .then(res=>res.json())
      .then((result)=>{
        alert(result);
        this.refreshList();
      },(error)=>{
          alert('Failed');
      })
    }
  }
  IDFilter(){
    console.log(this.sellerRef.current.value)
    var idInput = this.idRef.current.value // parseInt ritorna Nan se stringa vuota
    var sellerInput = this.sellerRef.current.value // ragiona con stringhe, quindi se e vuoto = ""
    var macchinarioInput = this.macchinarioRef.current.value
    var userInput = this.userRef.current.value
    var idType = this.tipoRef.current.value
   
    fetch(variables.API_URL+'report')
      .then(Response=>Response.json())
      .then(data=>{
        var prova = data
        if (idInput != ""){
          console.log("data pre filtrato", idType)
          prova = data.filter(function (fi){
            switch(idType){
              case "equal" :
                return fi.ReportId == idInput;
              case "minor" :
                return fi.ReportId <= idInput;
              case "greater" :
                return fi.ReportId >= idInput;
            }
          })
        }
      
        console.log(userInput)
        if ( sellerInput != ""){
          prova = prova.filter(function (fi){
            return  fi.Seller == sellerInput.toUpperCase() 
          })
        }
        if ( userInput != ""){
          prova = prova.filter(function (fi){
            return  fi.EndUSer == userInput.toUpperCase() 
          })
        }
        if ( macchinarioInput != ""){
          prova = prova.filter(function (fi){
            return  fi.Macchinario == macchinarioInput.toUpperCase() 
          })
        }
        this.setState({report:prova});
        console.log("data post filtrato", prova)
      });
    console.log("fine")
    console.log(this.idRef.current.value)
  }
  Refreshing(){
    console.log("ricarico la tabella")
    fetch(variables.API_URL+'report')
      .then(Response=>Response.json())
      .then(data=>{
        this.setState({report:data});
      })
  }
  
  handleClick(rep){
    console.log("clicked=", rep)
    this.setState({ID:rep})
  }

  render(){
    const{
      Users,
      Macchinari,
      Sellers,
      report,
      modalTitle,
      ReportId,
      Seller,
      Macchinario,
      MacchinarioSn,
      DataIntervento,
      Tecnico,
      DataVendita,
      ParteCat,
      StatoRep,
    }=this.state
    return(
     
      <Grid item xs={12} >
        <Card
          sx = {{bgcolor: '#111827',
          padding: '12px',
          marginBottom: '8px',
          boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.5)',
          alignItems: 'left',}}> 
          <TextField
            sx={{
              width:120,
              maxWidth:'50%',
              paddingRight:'12px'}}
            InputLabelProps={{ shrink: true }}
            id="standard-search"
            label="Filter ID"
            type="text"
            variant="outlined"
            size="small"
            color='success'
            inputRef={this.idRef}
          />
          <FormControl sx={{
            width:80,
            maxWidth:'50%',
            paddingRight:'12px',
            bgcolor:'#111827'}}
            variant="outlined"
            size="small"
            color='success'>
            <InputLabel> type </InputLabel>
            <Select 
              inputRef={this.tipoRef}>
              <MenuItem value={"equal"}>equal</MenuItem>
              <MenuItem value={"minor"}>minor</MenuItem>
              <MenuItem value={"greater"}>greater</MenuItem>
            </Select>
          </FormControl>
            <TextField
              sx={{ 
                width:120,
                maxWidth:'50%',
                paddingRight:'12px'}}
              InputLabelProps={{ shrink: true }}
              id="standard-search"
              label="Filter Seller"
              type="text"
              variant="outlined"
              size="small"
              color='success'
              inputRef={this.sellerRef}
            />
            <TextField
              sx={{
                width:120,
                maxWidth:'50%',
                paddingRight:'12px'}}
              InputLabelProps={{ shrink: true }}
              id="standard-search"
              label="Filter User"
              type="text"
              variant="outlined"
              size="small"
              color='success'
              inputRef={this.userRef}
            />
            <TextField
              sx={{
                width:120,
                maxWidth:'50%',
                paddingRight:'12px'
                }}
              InputLabelProps={{ shrink: true }}
              id="standard-search"
              label="Filter Machine"
              type="text"
              variant="outlined"
              size="small"
              color='success'
              inputRef={this.macchinarioRef}
            />
            <TextField
              sx={{
                width:80,
                maxWidth:'50%',
                paddingRight:'12px'}}
              InputLabelProps={{ shrink: true }}
              id="standard-search"
              label="Tecnico"
              type="text"
              variant="outlined"
              size="small"
              color='success'
              inputRef={this.tecnicoRef}
            /> 
            <Button
                sx={{
                  width:120,
                  maxWidth:'50%',
                  paddingRight:'12px'
                }}
                onClick = {()=>this.IDFilter()}
                variant="contained"
                color="success"
                size="small">
                  Filter
            </Button>
            <IconButton aria-label="refresh"
                onClick={()=>this.Refreshing()}>
              <RefreshIcon />
              <DialogOpenAdd/>
            </IconButton>
        </Card>
        <TableContainer component={Paper}>
          <Table
            id="table" 
            sx={{ minWidth: 650 }} 
            size="small" 
            aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align='center'>ID</TableCell>
                  <TableCell align="right">Seller</TableCell>
                  <TableCell align="right">End User</TableCell>
                  <TableCell align="right">Macchinari</TableCell>
                  <TableCell align="right">S/N</TableCell>
                  <TableCell align="right">Data Intervento</TableCell>
                  <TableCell align="right">Tecnico</TableCell>
                  <TableCell align="right">Data Vendita</TableCell>
                  <TableCell align="right">Componente</TableCell>
                  <TableCell align="right">Stato</TableCell>
                  <TableCell align="right">  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="TableBodyReport">
                {report.map((rep)=>
                  <TableRow 
                    onClick={()=> this.handleClick(rep)} 
                    key={rep.ReportId}
                    sx={{'&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='center'>{rep.ReportId}</TableCell>
                    <TableCell align="center">{rep.Seller}</TableCell>
                    <TableCell align="center">{rep.EndUSer}</TableCell>
                    <TableCell align="center">{rep.Macchinario}</TableCell>
                    <TableCell align="center">{rep.MacchinarioSn}</TableCell>
                    <TableCell align="center">{rep.DataIntervento}</TableCell>
                    <TableCell align="center">{rep.Tecnico}</TableCell>
                    <TableCell align="center">{rep.DataVendita}</TableCell>
                    <TableCell align="center">{rep.ParteCat}</TableCell>
                    <TableCell align="center">{rep.StatoRep}</TableCell>
                    <TableCell alignItems="center">
                      <Grid container spacing={1} >
                        <Grid item xs={6} >
                          <DialogOpenEdit dataParentToChild= {()=> rep}/>
                        </Grid>
                        <Grid item xs={6} >
                          <IconButton align="center" color="primary" onClick={()=>this.deleteClick(rep.ReportId)}>
                            <DeleteIcon align="center" fontSize="small" />
                          </IconButton>
                        </Grid>
                      </Grid>    
                    </TableCell>
                  </TableRow>
                )}
            </TableBody>
          </Table>
        </TableContainer>      
      </Grid> 
    )
  }
}
