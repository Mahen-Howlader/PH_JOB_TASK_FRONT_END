import axios from 'axios';
import Popularproductcard from './PopularProduct/Popularproductcard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
import Skeleton from '../Loading/Skeleton';
import Banner from '../Banner/Banner';
import { useState } from 'react';
function Product() {
    const [perPage,setPerPage] = useState(10);
    const [currentPage,setCurrentPage] = useState(0)
    const { error, data, isLoading: loadingProduct } = useQuery({
        queryKey: ['populardata'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/populardata?sort=asc`);
            return data;
        }
    })
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


    function handelPerPage(e){
        console.log(e.target.value)
        const num = parseInt(e.target.value);
        setPerPage(num)
        setCurrentPage(0)
    }

    return (
        <div >
            <div className='mt-20'>
                <h2 className='text-center pb-5 text-3xl uppercase font-bold'>Popular Product</h2>
                <hr className='h-[3px] md:w-1/3 mx-auto bg-gradient-to-l from-transparent via-black to-transparent  mb-10' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {data?.map((item, index) => {
                        return <Popularproductcard key={index} product={item}></Popularproductcard>
                    })}
                </div>
                <div className="flex gap-x-10 mt-6">
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a
                            href="#"
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
                                    {val }
                                </a>
                            })
                        }


                        <a
                            href="#"
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