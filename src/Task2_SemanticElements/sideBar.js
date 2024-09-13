import React, { useEffect, useMemo, useState } from 'react';
import useFetch from '../CustomHook/useFetch';
import "./SematicElements.css";
import FetchApi from './FetchApi';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import { setProductSearch } from '../task4_Redux/Slice';

function SideBar() {
    const data = useFetch('https://fakestoreapi.com/products')

    const dispatch = useDispatch();
    const [productName, setProductName] = useState('');


    const searchKeyword = useSelector((state) => state.userSlice.searchProd) || '';

    const handleComponent = (e) => {
        setProductName(e.target.value);
    }

    const filteredObj = useMemo(() => {
        const tempObj = data && data.filter((product) =>
            product?.title?.toLowerCase().includes(searchKeyword.toLowerCase()) || true
        );
        return tempObj
    }, [data])

    const searchProduct = () => {
        dispatch(setProductSearch(productName));
    }

    if (!data) {
        return <div>Loading...</div>
    }

    return (
        <Box>
            <Box className='sideApi'>
                <Box className='sidebar'>
                    {data.map((product) => (
                        <Link key={product.id} href="#">{product.title}</Link>
                    ))}
                </Box>
                <Box>
                    <FetchApi filteredObj={filteredObj} />
                </Box>
                <Box className='SearchBar'>
                    <input type='text' value={productName} onChange={handleComponent} />
                    <button onClick={searchProduct}>Search</button>
                </Box>
            </Box>
        </Box>
    );
}

export default SideBar;
