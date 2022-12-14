import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colores={
    borde:"#0075FF",
    error:"#BB2929",
    exito:"#1ED12D",
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;

    @media(max-width:900px){
        grid-template-columns: 1fr;
    }

`
const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
    ${props => props.valido==='false' && css`
        color:${colores.error};
    `}
`

const GroupInput = styled.div`
    position: relative;
    z-index: 99;

`
const Input = styled.input`
    
    width:100%;
    background:'#FFF';
    border-radius: 4px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border:3px solid transparent;

    &:focus{
        border:3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(170,170,170,0.5);
    }

    ${props => props.valido==='true' && css`
        border:3px solid transparent;
    `}

    ${props => props.valido==='false' && css`
        border:3px solid ${colores.error} !important
    `}
    
    `
    const LeyendaError=styled.p`
        font-size: 12px;
        margin-bottom: 0px;
        color: ${colores.error};
        display:none; 

        ${props => props.valido === 'true' && css`
            display:none
        `}

        ${props => props.valido === 'false' && css`
            display:block;
        `}
        
    `

    const IconoValidacion=styled(FontAwesomeIcon)` 
        position: absolute;
        right: 10px;
        bottom: 14px;
        z-index: 100;
        font-size: 16px;
        opacity:0;

        ${props => props.valido === 'false' && css`
            opacity:1;
            color:${colores.error}
        `}

        ${props => props.valido === 'true' && css`
            opacity: 1;
            color:${colores.exito}
        `}


    `

    const ContenedorBoton=styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        grid-column: span 2;


    `
    const Boton = styled.button`
        width: 45px;
        line-height:45px;
        width:30% ;
        color: '#FFF';
        background: '#FFF';
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: .1s ease all;

        &:hover{
            box-shadow: 3px 0px 30px rgba(150,150,150,1);
        }

    `

    const MensageExito=styled.p`
        font-size: 16px;
        color: ${colores.exito};
        display:none;
    `

    const SelectorV = styled.select`
        
        width:100%;
        background:'#FFF';
        border-radius: 4px;
        height: 45px;
        line-height: 45px;
        padding: 0 40px 0 10px; 
    
    `    
    const CabTitulo =styled.h4`
        width: 80%;
        text-align:center;
        margin-left: 10%;
        background-color:ghostwhite;
        padding: 5px;
        
`

    const LabelF = styled.label`
        font-weight: bold;
        
        margin-top: 5px;
        margin-bottom: 12px;
    `
export {Formulario,
        Label,
        GroupInput,
        Input, 
        IconoValidacion,
        LeyendaError, 
        ContenedorBoton, 
        Boton,
        MensageExito,
        SelectorV,
        LabelF,
        CabTitulo,
    
    }