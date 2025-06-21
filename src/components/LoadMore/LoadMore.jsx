import React, { useState, useEffect } from 'react';

function LoadMore() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [totalProducts, setTotalProducts] = useState(null);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${skip}`);
            const result = await response.json();

            if (result?.products?.length) {
                setProducts(prev => [...prev, ...result.products]);
                setSkip(prev => prev + 20);
                setTotalProducts(result.total); // Set total product count from API
            }
        } catch (e) {
            console.error('Fetch error:', e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const allProductsLoaded = totalProducts !== null && products.length >= totalProducts;

    return (
        <div className='max-w-6xl mx-auto p-4 py-20'>
            <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {products.map((item) => (
                    <div
                        key={item.id}
                        className='bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center'
                    >
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-lg font-semibold mb-2 text-center">{item.title}</h2>
                        <p className="font-bold text-lg">$ {item.price}</p>
                    </div>
                ))}
            </div>

            <div className='flex justify-center mt-10'>
                <button
                    onClick={fetchProducts}
                    disabled={loading || allProductsLoaded}
                    className={`px-6 py-2 rounded-md text-white font-medium ${
                        loading || allProductsLoaded
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-900 hover:bg-blue-700'
                    }`}
                >
                    {allProductsLoaded ? 'No More Products' : loading ? 'Loading...' : 'Load More'}
                </button>
            </div>
        </div>
    );
}

export default LoadMore;
