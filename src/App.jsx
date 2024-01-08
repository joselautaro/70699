import {ItemCount} from './components/ItemCount/ItemCount';
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  const losSimpsons = [

    {
      id: 1,
      nombre: 'Homero',
      description: 'Padre de familia'
    },
    {
      id: 2,
      nombre: 'Marge',
      description: 'Madre de familia'
    },
    {
      id: 3,
      nombre: 'Bart',
      description: 'Estudiante'
    },
    {
      id: 4,
      nombre: 'Lisa',
      description: 'Flautista'
    },
    {
      id: 5,
      nombre: 'Magui',
      description: 'Bebé'
    },
    {
      id: 6,
      nombre: 'Ayudante de Santa',
      description: 'Perro de carrera'
    },
    {
      id: 7,
      nombre: 'Bola de pelos',
      description: 'Michi'
    }
  ];

  return (
      <div>
        <h1>Hola Mundo!</h1>
        <ItemListContainer losSimpsons={losSimpsons} />
        <ItemCount/>
      </div>
  )
}

export default App
