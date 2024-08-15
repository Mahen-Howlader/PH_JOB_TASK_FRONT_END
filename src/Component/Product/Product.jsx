import axios from 'axios';
import Popularproductcard from './PopularProduct/Popularproductcard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
import Skeleton from '../Loading/Skeleton';
import Banner from '../Banner/Banner';
function Product() {
    const { error, data, isLoading } = useQuery({
        queryKey: ['populardata'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/populardata?sort=asc`);
            return data;
        }
    })

if(isLoading) return <Loading></Loading>

// console.log(data)

    return (
        <div >
            <div className='mt-20'>
                <h2 className='text-center pb-5 text-3xl uppercase font-bold'>Popular Product</h2>
                <hr className='h-[3px] md:w-1/3 mx-auto bg-gradient-to-l from-transparent via-black to-transparent  mb-10' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {data?.map((item, index) => {
                        return <Popularproductcard  key={index} product={item}></Popularproductcard>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Product;