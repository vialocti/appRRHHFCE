import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import FindAreaComponent from '../components/FindAreaComponent'
import FindClaustroComponent from '../components/FindClaustroComponent'
import FindClaustroPromediosComponent from '../components/FindClaustroPromediosComponent'
import FindpersonaCargoComponent from '../components/FindpersonaCargoComponent'
import FindPersonaComponent from '../components/FindPersonaComponent'
import NavBarComponent from '../components/NavBarComponent'
import HomePage from '../pages/HomePage'
import PageNotFound from '../pages/PageNotFound'

const AppRouters = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
          <Route exact path='/' element={<HomePage />} />
        
          <Route exact path ='/asistenciaarea' element={< FindAreaComponent/>} />
          <Route exact path='/asistenciaclaustro' element={<FindClaustroComponent/>}/>
          <Route exact path='/asistenciapersona' element={<FindPersonaComponent/>}/>
          <Route exact path='/cargospersona' element={<FindpersonaCargoComponent/>}/>
          <Route exact path='promediosclaustro' element={<FindClaustroPromediosComponent/>}/>
          <Route exact path="/notFound" element={<PageNotFound />} />
          <Route path='*' element={<Navigate replace to='/'/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouters