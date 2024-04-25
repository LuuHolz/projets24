import { DataAPI } from '../Types/ProductsAPI.type'
import { FaPlus } from "react-icons/fa";

const Card = ({ isLoading, product }: { isLoading: boolean; product: DataAPI[] }) => {
  return (
    <>
      <div className='cardContainer'>

        <div className='imgBtnContainer'>
          <button className='btnImagen'>
            <img src={product.images} alt="img" className='imgProduct' />
            <button disabled={isLoading} className='btnPlus'><FaPlus /></button>
          </button>
          <p className='categoryProduct'>{product.category.name}</p>
        </div>

        <div className='titlePriceContainer'>
          <p className='titleProduct'>{product.title}</p>
          <p className='priceProduct'>${product.price}</p>
        </div>
      </div>
    </>
  )
}

export default Card
