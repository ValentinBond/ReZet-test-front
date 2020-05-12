import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getProductsRequest } from '../../actions/product';
import Search from './components/Search';

import './productList.css';
import ProductCard from './components/ProductCard';
import SceletonCard from './components/SeletonCards';

const ProductList = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(getProductsRequest({
        url: 'product'
    }));
  }, []);

  const products = useSelector(state => state.product.products);

  return (
      <div className="product_page">
          <Search onChangeFilter={setFilter}/>
          <div className="product_list">
            {
                products.length ? products
                .filter(item => new RegExp(filter.toLowerCase()).test(item.name.toLowerCase()))
                .map(product => <ProductCard key={product.id} product={product} />) : <SceletonCard />
            }
          </div>
      </div>
  );
};

export default ProductList;