import "./App.css"
import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

        <Card titulo = "#04 Desafio Aleatorio">
            <Aleatorio min={1} max={60}/>
        </Card>
        <Card titulo = "#03 Fragmento">
           <Fragmento /> 
        </Card>
        <Card titulo = "#02 Com Parametro">
            <ComParametro
            titulo="Situação do Aluno "
            aluno="Mateus"
            nota="10.0"
        />
        </Card>
        <Card titulo = "#01 Primeiro">
            <Primeiro></Primeiro>
       
        </Card>
        

        </div>
        
        
        
        
    </div>
