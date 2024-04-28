import { MyContextProvider } from './ecommerce/context/context';
import Home from './ecommerce/home/Home';
import './ecommerce/styles/styles.scss'


function App() {


  return (
    <>
      <MyContextProvider>
        {/*  ESTE ES TU CHILDREN DEL PROVIDER */}
        <Home/>
      </MyContextProvider>
    </>
  )
}

export default App
