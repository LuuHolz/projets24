import { DataAPI } from '../Types/ProductsAPI.type'

const Card = ({ isLoading, product }: { isLoading: boolean; product: DataAPI[] }) => {
  return (
    <>
      <div className='cardContainer'>

        <div className='imgBtnContainer'>
          <button className='btnImagen'>
            <img src={product.images} alt="img" className='imgProduct' />
          </button>
          <button disabled={isLoading} className='btnPlus'>+</button>
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
