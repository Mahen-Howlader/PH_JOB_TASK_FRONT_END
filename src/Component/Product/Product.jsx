import axios from 'axios';
import Popularproductcard from './PopularProduct/Popularproductcard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
import Skeleton from '../Loading/Skeleton';
import Banner from '../Banner/Banner';
import { useState } from 'react';
import ProductSorting from '../ProductSorting/ProductSorting';
function Product() {
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState("");
    const { error, data, isLoading: loadingProduct } = useQuery({
        queryKey: ['populardata', currentPage, perPage, search], // Adding perPage as a dependency
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/populardata?page=${currentPage}&size=${perPage}&search=${search}`);
            return data;
        }
    });
    const { data: countData, isLoading: dataLoading } = useQuery({
        queryKey: ['productcount'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/productcount`);
            return data;
        }
    })


    if (loadingProduct) return <Loading></Loading>


    // Pagination
    const totalData = countData?.count;

    const numberOfPages = Math.ceil(totalData / perPage)

    const page = [...Array(numberOfPages).keys()];
    // console.log(page);


    function handelPerPage(e) {
        console.log(e.target.value)
        const num = parseInt(e.target.value);
        setPerPage(num)
        setCurrentPage(0)
    }


    function handelNextPage() {
        if (currentPage < page.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    function handelPrePage() {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }


    function handelFromSubmit(e) {
        e.preventDefault()
        setSearch(e.target.search.value);
    }


    return (
        <div >
            <div className='mt-20'>
                <h2 className='text-center pb-5 text-3xl uppercase font-bold'>Popular Product</h2>
                <hr className='h-[3px] md:w-1/3 mx-auto bg-gradient-to-l from-transparent via-black to-transparent  mb-10' />
                <form className="max-w-md mx-auto mb-5" onSubmit={handelFromSubmit}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            name='search'
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
                {/* filtering */}
                <div className="flex gap-6 p-4 max-w-7xl mx-auto">
                    {/* Filter Panel */}
                    <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold mb-4">Filters</h2>

                        {/* Brand Name Filter */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Brand Name</label>
                            <select
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                                <option value="">All Brands</option>
                                <option value="brand1">Brand 1</option>
                                <option value="brand2">Brand 2</option>
                                {/* Add more brands as options */}
                            </select>
                        </div>

                        {/* Category Name Filter */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Category Name</label>
                            <select
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                                <option value="">All Categories</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                                {/* Add more categories as options */}
                            </select>
                        </div>

                        {/* Price Range Filter */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Price Range</label>
                            <select
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                                <option value="">All Prices</option>
                                <option value="0-50">$0 - $50</option>
                                <option value="50-100">$50 - $100</option>
                                <option value="100-200">$100 - $200</option>
                                {/* Add more price ranges as options */}
                            </select>
                        </div>

                        <button
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                        >
                            Apply Filters
                        </button>
                    </div>

                </div>

                {/* sort  */}
    




                {/* ProductSorting */}
                <ProductSorting></ProductSorting>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {data?.map((item, index) => {
                        return <Popularproductcard key={index} product={item}></Popularproductcard>
                    })}
                </div>
                <div className="flex gap-x-10 mt-6">
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a
                            onClick={handelPrePage}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous</span>
                            {/* Heroicon name: chevron-left */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </a>
                        {
                            page.map((val, index) => {
                                return <a
                                    key={index}
                                    onClick={() => setCurrentPage(val)}
                                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700  ${currentPage === val && "bg-yellow-600"}`}
                                >
                                    {val}
                                </a>
                            })
                        }


                        <a
                            onClick={handelNextPage}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </nav>
                    <select
                        id="countries"
                        value={perPage}
                        onChange={handelPerPage}
                        className="w-2/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="" >Choose a country</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>

                </div>
            </div>
        </div>
    );
}

export default Product;