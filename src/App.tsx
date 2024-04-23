import Home from './ecommerce/home/Home';
import './ecommerce/styles/styles.scss'
import useProducts from './ecommerce/hooks/useProducts'
import { useEffect, useState } from 'react';
import { DataAPI } from './ecommerce/Types/ProductsAPI.type';

function App() {
  const { isLoading, getProducts } = useProducts();
  const [products, setProducts] = useState<DataAPI[]>([]);


  useEffect(() => {
    const callAPI = async () => {

      try {
        const response = await getProducts();
        setProducts(response)

      } catch (error) {
        throw error;
      }
    }
    callAPI();
  }, []);


  return (
    <>
      <div className='appContainer'>
        {<Home products={products} isLoading={isLoading} />}

      </div>
    </>
  )
}

export default App
