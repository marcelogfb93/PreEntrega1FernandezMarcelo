
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Listado De Productos' }/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'listado de Productos Filtrados: '}/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
      <Route path='*' element={<h1>ERROR 404</h1>}/>
       </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App
