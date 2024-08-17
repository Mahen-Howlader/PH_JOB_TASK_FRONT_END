import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
function Popularproductcard({ product }) {
    // console.log(product)
    return (
        <div>
            <a className="p-3  border-2 rounded-lg bg-[#EBEBEB]  hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col items-center"
                href="#">
                <img src={product?.image} className="shadow w-full h-[300px] object-cover rounded-lg overflow-hidden border" />
                <div className="mt-8">
                    <h4 className="font-bold text-xl">{product?.name}</h4>
                    {/* <p className="mt-2 text-gray-600">{product?.Description.slice(0, 80)}....
                    </p> */}
                    <div className="mt-5 flex  flex-wrap items-center  gap-4">
                        <span className="text-xl font-medium  text-black">Price : {product?.new_price}</span>
                        <span className="text-xl font-medium line-through text-gray-600">Price : {product?.old_price}</span>
                        <div className="flex">
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={product?.rating}
                                key={product?.rating}
                                readOnly
                            />
                        </div>
                        <p>Date : {product?.creation_date_time}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Popularproductcard;