import React from 'react'
import { Container, Row, Table } from 'react-bootstrap'

const CargosConsultaPage = (props) => {

    const {cargos, cargosH} = props
  return (
    <Container>
        <Row className='cargos'>
         <h4>Cargos Vigentes</h4>   
        <Table striped bordered hover size="sm" className='table'>
      <thead>
        <tr>
          
          <th>NC</th>
          <th>INST</th>
          <th>CA</th>
          <th>ES</th>
          <th>PPAL</th>
          <th>NV</th>
          <th>AD</th>
          <th>PL</th>
          <th>MAT</th>
          <th>FECHA ALTA</th>
          <th>Nro.Res.A</th>
          <th>ncg</th>
        </tr>
      </thead>
      <tbody>
      {cargos.map((ele, ind) =>
      
      <tr key={ind}>
          <td>{ele.nc} </td>
          <td>{ele.inst}</td>
          <td>{ele.ca}</td>
          <td>{ele.es}</td>
          <td>{ele.ppal}</td>
          <td>{ele.nv}</td>
          <td>{ele.ad}</td>
          <td>{ele.pl}</td>
          <td>{ele.mat}</td>
          <td>{ele.fechaAlta}</td>
          <td>{ele.nresa}</td>
          <td>{ele.ncg}</td>

      </tr>
      
      )}
      </tbody>
      </Table>
            
        </Row>

        <Row className='cargosH'>
        <h4>Cargos Historicos</h4>   
        <Table striped bordered hover size="sm" className='table'>
      <thead>
        <tr>
          
        <th>NC</th>
          <th>INST</th>
          <th>CA</th>
          <th>ES</th>
          <th>PPAL</th>
          <th>NV</th>
          <th>AD</th>
          <th>PL</th>
          <th>MAT</th>
          <th>FECHA ALTA</th>
          <th>Nro.Res.A</th>
          <th>FECHA BAJA</th>
          <th>Nro.Res.B</th>
          <th>ncg</th>
        </tr>
      </thead>
      <tbody>
      {cargosH.map((ele, ind) =>
      
      <tr key={ind}>
          <td>{ele.nc} </td>
          <td>{ele.inst}</td>
          <td>{ele.ca}</td>
          <td>{ele.es}</td>
          <td>{ele.ppal}</td>
          <td>{ele.nv}</td>
          <td>{ele.ad}</td>
          <td>{ele.pl}</td>
          <td>{ele.mat}</td>
          <td>{ele.fechaAlta}</td>
          <td>{ele.nresa}</td>
          <td>{ele.fechaBaja}</td>
          <td>{ele.nresb}</td>
          <td>{ele.ncg}</td>
      </tr>
      
      )}
      </tbody>
      </Table>
    </Row>

    </Container>
  )
}

export default CargosConsultaPage