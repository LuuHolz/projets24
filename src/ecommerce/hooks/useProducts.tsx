import { useState } from 'react'

const useProducts = () => {
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = async () => {
        setIsLoading(true)

        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await response.json();

            return data
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading, getProducts
    }
}

export default useProducts
