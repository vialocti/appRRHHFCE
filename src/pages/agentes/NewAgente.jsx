import React,{useState} from 'react'
import { Boton, CabTitulo, ContenedorBoton, Formulario,LabelF,SelectorV} from '../../elements/Formulario'
import '../../css/estilosform.css'
import InputC from '../../components/elementosComp/InputComponent'
import axios from 'axios'







const NewAgente = () => {
    const uri = 'http://200.12.136.74:4000/biometrico/'
    const expresiones = {
        //usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[,a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        legajo: /^\d{4,8}$/,
        nrodoc: /^\d{7,9}$/,
        fecha:/^\d{4}([-/.])(0?[1-9]|1[0-1-2])\1(3[01]|[12][0-9]|0?[1-9])$/,
    }
    

  
   const [legajo, setLegajo] = useState({campo:'', valido:null}) 
   const [nrodoc, setNrodoc] = useState({campo:'', valido:null})
   const [nombre, setNombre] = useState({campo:'', valido:null})
   const [email, setEmail] = useState({campo:'', valido:null}) 
   const [telefono, setTelefono] = useState({campo:'', valido:null})
   const [sexo,setSexo] = useState('M')
   const [tipod, setTipod] = useState('1')
   const [claustro, setClaustro] = useState('1') 
   const [fechanac, setFechanac] = useState({campo:'',valido:null})
   
    const existeLegajo =async ()=>{
        if(legajo.campo.length>0){
            const res = await axios.get(`${uri}agente_leg/${legajo.campo}`)
            if (res.data.length !== 0 ){
                    setLegajo((prevState)=>{
                    return {...prevState, valido:'false'}
                })
           
            }
        }
    }
  

    const changeTD=()=>{
        setTipod(document.getElementById('tipodoc').value)
    }

  

   const grabarDatos =()=>{
        console.log(legajo.campo,nombre.campo,tipod,nrodoc.campo,telefono.campo,email.campo,claustro,sexo)
   }

   const onHandleSubmit =(e)=>{
        e.preventDefault()
        if(
            legajo.valido==='true' && 
            nombre.valido === 'true' && 
            nrodoc.valido === 'true' 
            
            )
        {
          setClaustro(document.getElementById('claustro').value)
          setSexo(document.getElementById('sexo').value)
          
          
          grabarDatos()

        } else{
            
            
        }
       
   }

   return (
    <div>

            <CabTitulo>Ingreso Datos Principales de Persona</CabTitulo>
    
    <main>
        
        <Formulario onSubmit={onHandleSubmit}>
           
            <InputC 
                tipo='text'
                name='legajo'
                infoplace='Ingrese Legajo'
                estado={legajo}
                cambiarEstado={setLegajo}
                label='Legajo'
                leyendaErr='Existe Legajo O El legajo debe ser numerico'
                expreg={expresiones.legajo}
                funcion={existeLegajo}
               
            />
             <div>
                <LabelF htmlFor='tipodoc'>Tipo Documento</LabelF>
                <SelectorV name="tipodoc" id='tipodoc' onChange={changeTD}>
                    <option value="1">DNI</option>
                    <option value="2">LE</option>
                    <option value="3">LC</option>
                </SelectorV>
            </div>
            <InputC 
                tipo='text'
                name='nrodni'
                infoplace='Ingrese Nro.Documento'
                estado={nrodoc}
                cambiarEstado={setNrodoc}
                label='Nro.Documento'
                leyendaErr='El nro.documento debe ser numerico sin puntos'
                expreg={expresiones.nrodoc}
             
            />
            <InputC 
                tipo='text'
                name='nombre'
                infoplace='APELLIDO, Nombres'
                estado={nombre}
                cambiarEstado={setNombre}
                label='Nombre'
                leyendaErr='nombre solo text no mayor a 60'
                expreg={expresiones.nombre}
            />
           
                <div>
                <LabelF htmlFor='sexo'>Sexo</LabelF>
                <SelectorV name="sexo" id='sexo'>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                        <option value="O">Otro</option>
                  </SelectorV>
                </div>
                <InputC 
                    tipo='text'
                    name='fechaNac'
                    infoplace='aaaa-mm-dd'
                    estado={fechanac}
                    cambiarEstado={setFechanac}
                    label='Fecha Nacimiento'
                    leyendaErr='la fecha de nacimiento debe ser por ejemplo 2000-08-14'
                    expreg={expresiones.fecha}
                />        
                <div>
                <LabelF htmlFor='claustro'>Claustro</LabelF>
                    <SelectorV name="claustro" id='claustro'>
                        <option value="1">Docente</option>
                        <option value="0">No Docente</option>
                        <option value="2">Ambos</option>
                    </SelectorV>
                </div>

            
            
            <InputC 
                tipo='text'
                name='telefono'
                infoplace='Ingrese Telefono Contacto'
                estado={telefono}
                cambiarEstado={setTelefono}
                label='Telefono Contacto'
                leyendaErr='formato incorrecto'
                expreg={expresiones.telefono}
            />
          
                     
            <InputC 
                tipo='text'
                name='email'
                infoplace='Ingrese Email'
                estado={email}
                cambiarEstado={setEmail}
                label='Correo Electrónico'
                leyendaErr='formato incorrecto'
                expreg={expresiones.correo}
            />
          
              
             <ContenedorBoton>
                <Boton type='submit'>Enviar</Boton>
                
             </ContenedorBoton>
            

        </Formulario>
    </main>
  </div>
  )
}

export default NewAgente