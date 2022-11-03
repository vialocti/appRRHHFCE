import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import FindAreaComponent from '../components/horarios/FindAreaComponent'
import FindClaustroComponent from '../components/horarios/FindClaustroComponent'
import FindPersonaComponent from '../components/horarios/FindPersonaComponent'
import FindpersonaCargoComponent from '../components/cargos/FindpersonaCargoComponent'
import HomePage from '../pages/comunes/HomePage'
import PageNotFound from '../pages/comunes/PageNotFound'
import FindClaustroPromediosComponent from '../components/horarios/FindClaustroPromediosComponent'
import NavBarComponent from '../components/NavBarComponent'
import InasistenciaPage from '../pages/inasistencias/InasistenciaPage'
import NewAgente from '../pages/agentes/NewAgente'


const AppRouters = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
          <Route exact path='/' element={<HomePage />} />
        
          <Route exact path ='/asistenciaarea' element={< FindAreaComponent/>} />
          <Route exact path='/asistenciaclaustro' element={<FindClaustroComponent/>}/>
          <Route exact path='/asistenciapersona' element={<FindPersonaComponent/>}/>
          <Route exact path='/cargospersona' element={<FindpersonaCargoComponent />}/>
          <Route exact path='promediosclaustro' element={<FindClaustroPromediosComponent/>}/>
          <Route exact path="/notFound" element={<PageNotFound />} />
          <Route exact path="/inasistencias" element={<InasistenciaPage/>} />
          <Route exact path='/cargarpersona' element={<NewAgente/>}/>
          <Route path='*' element={<Navigate replace to='/'/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouters