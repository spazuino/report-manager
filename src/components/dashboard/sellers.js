import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import React from "react";
import { Component } from "react/cjs/react.production.min";
import { variables } from "../Variables";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ConnectingAirportsOutlined } from "@mui/icons-material";
import { Button, Grid, Paper } from "@mui/material";
import DatePicker from '@mui/lab/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import Report from "./report-main"

export class FetchSeller extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Users:[],
      Macchinari:[],
      Sellers:[],
      report:[],
      tecnico:[],
      ReportId:0,
      Seller:"",
      SellerName:"",
      EndUSer:"",
      UserName:"",
      Macchinario:"",
      MacchinarioSn:"",
      MacchinarioName:"",
      DataIntervento:"",
      Tecnico:"",
      TecnicoName:"",
      DataVendita:"",
      ParteCat:"",
      StatoRep:"",
      test:this.props.dataParentToChild,
    }
  }

  refreshList2(){
    fetch(variables.API_URL+'sellers')
    .then(Response=>Response.json())
    .then(data=>{
        this.setState({Sellers:data});
    });
    fetch(variables.API_URL+'macchinario')
    .then(Response=>Response.json())
    .then(data=>{
        this.setState({Macchinari:data});
    });
    fetch(variables.API_URL+'enduser')
    .then(Response=>Response.json())
    .then(data=>{
        this.setState({Users:data});
    });
    fetch(variables.API_URL+'tecnico')
    .then(Response=>Response.json())
    .then(data=>{
        this.setState({tecnico:data});
    });
  }

  componentDidMount(){
    console.log("ack received",this.state.test),
    this.refreshList2();
    console.log("received==", this.state.test.ReportId)
    if(this.state.reportId == 0){
      this.addClick();
      this.state.ReportId = 0;
    } else {
      this.editClick(this.state.test)
    }
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

  funzione(){
    console.log("workinggg")
  }

  addClick(){
    this.setState({
      modalTitle:"Aggiungi",
      ReportId:0,
      Seller:"",
      EndUSer:"",
      Macchinario:"",
      MacchinarioSn:"",
      DataIntervento:"",
      Tecnico:"",
      DataVendita:"",
      ParteCat:"",
      StatoRep:"",
    });
  }
  editClick(rep){
    this.setState({
      modalTitle:"Modifica",
      ReportId:rep.ReportId,
      Seller:rep.Seller,
      EndUSer:rep.EndUSer,
      Macchinario:rep.Macchinario,
      MacchinarioSn:rep.MacchinarioSn,
      DataIntervento:rep.DataIntervento,
      Tecnico:rep.Tecnico,
      DataVendita:rep.DataVendita,
      ParteCat:rep.ParteCat,
      StatoRep:rep.StatoRep,
    });
  }
  createClick(){
    fetch(variables.API_URL+'report',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        ReportId:this.state.ReportId,
        Seller:this.state.Seller,
        EndUSer:this.state.EndUSer,
        Macchinario:this.state.Macchinario,
        MacchinarioSn:this.state.MacchinarioSn,
        DataIntervento:this.state.DataIntervento,
        Tecnico:this.state.Tecnico,
        DataVendita:this.state.DataVendita,
        ParteCat:this.state.ParteCat,
        StatoRep:this.state.StatoRep,
      })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
        this.refreshList2();
    },(error)=>{
        alert('failed');
    })
  }
  updateClick(){
    fetch(variables.API_URL+'report',{
      method:'PUT',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
        ReportId:this.state.ReportId,
        Seller:this.state.Seller,
        EndUSer:this.state.EndUSer,
        Macchinario:this.state.Macchinario,
        MacchinarioSn:this.state.MacchinarioSn,
        DataIntervento:this.state.DataIntervento,
        Tecnico:this.state.Tecnico,
        DataVendita:this.state.DataVendita,
        ParteCat:this.state.ParteCat,
        StatoRep:this.state.StatoRep,
      })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
        this.refreshList2();
    },(error)=>{
        alert('BETTER LUCK NEXT TIME');
    })
  }

  render(){
    const{
      Users,
      Macchinari,
      tecnico,
      Sellers,
      SellerName,
      UserName,
      MacchinarioName,
      TecnicoName,
      report,
      modalTitle,
      ReportId,
      Seller,
      EndUSer,
      Macchinario,
      MacchinarioSn,
      DataIntervento,
      Tecnico,
      DataVendita,
      ParteCat,
      StatoRep,
    }=this.state
    console.log("render executed")
    
    return(
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Autocomplete
            disableClearable
            color="success"
            value={Seller}
            options={this.state.Sellers.map((option) => option.SellerName)}
            PaperComponent={({ children }) => (
              <Paper style={{ background: "#111827" }}>{children}</Paper>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Seller input"
                margin="normal"
                variant="outlined"
                color='success'
                InputProps={{ ...params.InputProps, type: "search" }}
                value={Seller}
                onChange={this.changeSellerName}
              />
            )}
          />
        </Grid>
        <Grid item xs={4} >
          <Autocomplete
            freeSolo
            disableClearable
            color="success"
            value={EndUSer}
            options={this.state.Users.map((option) => option.UserName)}
            PaperComponent={({ children }) => (
              <Paper style={{ background: "#111827" }}>{children}</Paper>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="User input"
                margin="normal"
                variant="outlined"
                color='success'
                placeholder= "Search your country"
                InputProps={{ ...params.InputProps, type: "search" }}
                value={EndUSer}
                
                onChange={this.changeUserName}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            freeSolo
            disableClearable
            color="success"
            value={Macchinario}
            options={this.state.Macchinari.map((option) => option.MacchinarioName)}
            PaperComponent={({ children }) => (
              <Paper style={{ background: "#111827" }}>{children}</Paper>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Macchinario input"
                margin="normal"
                variant="outlined"
                color='success'
                InputProps={{ ...params.InputProps, type: "search" }}
                value={Macchinario}
                onChange={this.changeMacchinario}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
        <TextField
            sx={{marginTop: '17px'}}
            fullWidth
            color="success"
            label="intervento Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={DataIntervento}
            onChange={this.changeDataIntervento} />
        </Grid>

        <Grid item xs={4}>
          <TextField
            sx={{marginTop: '17px'}}
            fullWidth
            color="success"
            label="Vendita Date"
            type="date"
            InputLabelProps={{ shrink: true }} 
            value={DataVendita}
            onChange={this.changeDataVendita}
          />
        </Grid>

        <Grid item xs={4}>
          <Autocomplete
            freeSolo
            disableClearable
            color="success"
            value={Tecnico}
            options={this.state.tecnico.map((option) => option.TecnicoName)}
            PaperComponent={({ children }) => (
              <Paper style={{ background: "#111827" }}>{children}</Paper>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tecnico input"
                margin="normal"
                variant="outlined"
                color='success'
                InputProps={{ ...params.InputProps, type: "search" }}
                value={Tecnico}
                onChange={this.changeTecnico}
              />
            )}
          />
        </Grid>

        <Grid item xs={4}>
          <Autocomplete
            freeSolo
            disableClearable
            color="success"
            value={ParteCat}
            options={this.state.report.map((option) => option.ParteCat)}
            PaperComponent={({ children }) => (
              <Paper style={{ background: "#111827" }}>{children}</Paper>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="componente input"
                margin="normal"
                variant="outlined"
                color='success'
                InputProps={{ ...params.InputProps, type: "search" }}
                value={ParteCat}
                onChange={this.changeParteCat}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField 
            fullWidth
            id="outlined-basic" 
            label="serial Num input"
            margin="normal"
            variant="outlined"
            color='success' 
            value={MacchinarioSn}
            onChange={this.changeMacchinarioSn}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            fullWidth
            label="stato"
            margin="normal"
            variant="outlined"
            color='success'
            value={StatoRep}
            onChange={this.changeStato}
          />
        </Grid>

        {this.state.test.ReportId===undefined?
          <Button
            type="button"
            color="success"
            onClick={()=>this.createClick()}
            >Create</Button>
          :null}

        {this.state.test.ReportId!==undefined?
          <Button 
            type="button"
            color="success"
            onClick={()=>this.updateClick()}
            >Update</Button>
          :null}  
      </Grid>
    )
  }
}