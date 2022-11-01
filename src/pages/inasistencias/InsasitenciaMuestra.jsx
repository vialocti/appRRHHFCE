import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'




const InsasitenciaMuestra = ({inasistencias}) => {
  return (
    
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
       
       <table className="table table-bordered table-striped mb-0">
       
       <thead>
         <tr>
           
           <th>Legajo</th>
           <th>Nro Cargo</th>
           <th>Motivo</th>
           <th>Fecha Inicio</th>
           <th>Fecha Fin</th>
           <th>Nro Res.</th>
           <th>Afecta Haberes</th>
           <th></th>
         
         </tr>
       </thead>
       <tbody>
       {inasistencias.map((ele, ind) =>
       
       <tr key={ind}>
           <td>{ele.nleg} </td>
           <td>{ele.nc}</td>
           <td>{ele.mot}</td>
           <td>{ele.fechai}</td>
           <td>{ele.fechaf}</td>
           <td>{ele.nres}</td>
           {ele.r==='1'?
           <td>NO</td>
           :
           <td>SI</td>
           }
           <td>
            <button>
              <FontAwesomeIcon icon={faTrash}/>
              </button>
            </td>
           
       </tr>
       
       )}
       </tbody>
       </table>
       
      </div>  
  )
}

export default InsasitenciaMuestra