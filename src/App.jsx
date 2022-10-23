import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Users from './users.json'
import Quotes from './components/Quotes.jsx'
import ButtonQuotes from './components/ButtonQuotes'

function App() {

  const colors = ['#ea48d3', '#a3cbff', '#008df3', '#00f2ff', '#272938', '#00714f', '#0fffbd', '#fff585', '#f8c7ff', '#ab555b', '#f69916', '#9a3b70'];
  
  const [color, setColor] = useState(colors[0])

  const colorChange = () => {

    let lucky = Math.floor(Math.random()* colors.length)
    setColor(colors[lucky]);
  }


  const [ json, setJson ] = useState(Users[0])

  const sentence = () => {

    let luckyJson = Math.floor(Math.random()* Users.length)
    setJson(Users[luckyJson]);
  }

  const dual = () => {
    colorChange();
    sentence();
  }

  return (
    <div className='body' style={{background: `${color}`}}>
      <div className='sheetPaper' style={{color: `${color}`}}>
        <Quotes json={json}/>
        <ButtonQuotes dual={dual}/>
      </div>
    </div>
  )
}

export default App
