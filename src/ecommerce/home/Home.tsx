import Card from '../components/Card';
import { DataAPI } from '../Types/ProductsAPI.type';


const Home = ({ isLoading, products }: { isLoading: boolean; products: DataAPI[] }) => {
    return (
        <>
            <div className='homeContainer'>
                {products.length > 0 && products.map((product, index) => (
                    <Card key={index} product={product} isLoading={isLoading} />
                ))}
            </div>
        </>
    );
};

export default Home;
