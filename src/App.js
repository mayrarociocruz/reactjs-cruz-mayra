import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo= 'BIENVENIDOS A NUESTRA PIZZERIA' />
    <ItemListContainer saludo= 'EL ARTE DEL BUEN COMER' />
    </>
  )
}

export default App;
