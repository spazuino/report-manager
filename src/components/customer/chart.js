import { timelineClasses } from '@mui/lab';
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import {variables} from '../Variables.js'

const dati = () => {
    fetch(variables.API_URL+'report')
      .then(Response=>Response.json())
      .then(data=>{
         report = data
      });
}
const BarChart = () => {

    const [chart, setChart] = useState([])
    const [valori, setValori] = useState([])
    const counts={}
    const etichette =[]
    const numerati = [1]
   
    useEffect(() => {
        
        const Fetched = async () => {
            fetch(variables.API_URL+'report')
            .then(Response=>Response.json())
            .then(data=>{
                setValori(data.map((rep)=> rep.ParteCat))
            });
            console.log(valori)
            
            for ( const val of valori){
                counts[val] = counts[val] ? counts[val] +1 : 1;
            }

        };
        Fetched()
         etichette = Object.keys(counts)
         //numerati = Object.values(counts)
           
        console.log(counts)
        console.log(etichette)
        console.log(numerati)
        
    })
    return(
        <div>
            <Pie
                data= {{
                    datasets: [{
                        data: counts,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(30, 252, 71, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(30, 252, 71, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                        
                    }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio:false
                }}
            />

        </div>
    )
}

export default BarChart

