import React from 'react'
import { Route, Routes } from "react-router-dom"
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from "../components/ui/NavBar"

export const DashBoardRoutes = () => {
    return (
        <>

            <Navbar />
            <div className="container">

                <Routes>

                    <Route exact path='marvel' element={<MarvelScreen />} />
                    <Route exact path='dc' element={<DcScreen />} />

                    <Route exact path='search' element={<SearchScreen />} />
                    <Route exact path='hero/:heroId' element={<HeroScreen/>}/>

                    <Route exact path='/' element={<MarvelScreen />} />

                </Routes>

            </div>
        </>
    )
}