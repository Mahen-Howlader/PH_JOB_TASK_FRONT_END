import React from 'react';

function ProductSorting({handelSortByFun,sort}) {


  
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Products</h2>

                <div className="relative">
                    <label htmlFor="sort" className="sr-only ">Sort by</label>
                    <select
                    value={sort}
                        onChange={handelSortByFun}
                        id="sort"
                        className="block w-full text-sm rounded-md p-3 border-2 border-gray-900  shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="">Sort By</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="newestDate">Date: Newest First</option>
                    </select>
                </div>
            </div>

        </div>
    );
}

export default ProductSorting;