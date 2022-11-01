import React,{useState, useEffect} from 'react'

import axios from 'axios'
//import {CSVLink} from 'react-csv'
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap'
import CargosConsultaPage from '../../pages/cargos/CargosConsultaPage'


const FindpersonaCargoComponent = () => {
    const uri = 'http://200.12.136.74:4000/'

  const [ruta, setRuta]= useState(`${uri}cargos/cargosvigentes/1`)
  const [ruta1, setRuta1] = useState(`${uri}cargos/cargosvigentes/1`)
  const [cargos, setCargos]= useState([])
  const [cargosH, setCargosH] = useState([])
  const [agentes, setAgentes] =useState([])
  const [patronb, setPatronb] = useState('')


  useEffect(()=>{

    const getCargosV = async  () => {
        try{
          const res = await axios.get(ruta1)
          await setCargos(res.data)
          
          
      }catch(error){
          console.log(error)
      }
      }

      const getCargosH = async  () => {
        try{
          const res = await axios.get(ruta)
          await setCargosH(res.data)
          
          
      }catch(error){
          console.log(error)
      }
      }
        
      getCargosV()
      getCargosH()

  },[ruta,ruta1])



  //busqueda de agentes
  useEffect(()=>{
    const buscarAgentes =async ()=>{
      let rutaag = `${uri}biometrico/agente_name/${patronb}`
      if (patronb.length>0){
      try{
        const res = await axios.get(rutaag)
          
            await setAgentes(res.data)
            
          
      }catch(error){
          console.log(error)
      }
    }
    }


    buscarAgentes()
    
   },[patronb])


 
   const buscarcargosVH = async ()=>{
    
    let legajocondi = document.getElementById('agenteb').value
      var legajo=''
      var condi=''
      if (legajocondi.length===5){
        legajo=legajocondi.slice(0,4)
        condi =legajocondi.slice(4)
      }else if (legajocondi.length=== 6){
        legajo=legajocondi.slice(0,5)
        condi =legajocondi.slice(5)
      }
      console.log(legajocondi,legajo, condi)
      
      let url = `${uri}cargos/cargoshistoricos/${legajo}`
      let url1 = `${uri}cargos/cargosvigentes/${legajo}`
      setRuta(url)
      setRuta1(url1)
    
    
}

   const onHandleChange =()=>{
    // 
    setPatronb(document.getElementById("busqueda").value)
    // buscarAgentes()

  }


  return (
    <Container fluid>
        <br />

        <Row className="busqueda">
        
        <Col xs={12} md={3}>
            
            <h3>Cargos FCE_RRHH</h3>
          
        </Col>


        <Col xs={12} md={2}>
        <Form.Label htmlFor="busqueda"> Buscar Agente</Form.Label>
          <FormControl 
            type="text"
            id="busqueda"
            onChange={onHandleChange}
            value={patronb}
            
          />
        </Col>   

        <Col xs={12} md={3}>
            <Form.Label htmlFor="agenteb"> Agentes </Form.Label>
            <Form.Select id="agenteb">
                { agentes.length>0 ? agentes.map((age,ind)=>
                <option key={ind} value={age.legajo.toString()+age.condicion.toString()}>{age.apellido}</option>
                ):null}
            </Form.Select>
         
        </Col>
        
        <Col xs={12} md={2}>
            <Button variant="primary" style={{marginTop:30}}
            onClick={buscarcargosVH}
            >Buscar Cargos
         </Button>      
        </Col>

        </Row>
        <hr />
      <Row>
      {cargos.length > 0 || cargosH.length>0 ? <CargosConsultaPage cargos={cargos} cargosH={cargosH} />: null} 
      </Row>
    </Container>
  )
}

export default FindpersonaCargoComponent