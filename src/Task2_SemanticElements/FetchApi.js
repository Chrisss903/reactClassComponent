import React from "react";
// import useFetch from '../CustomHook/useFetch';
// import { useSelector } from "react-redux";
import Box from '@mui/material/Box';

export default function FetchApi({ filteredObj }) {
    return (
        <Box className="FetchApi">
            {filteredObj && filteredObj.map((prod) => (
                <Box className='DisplayProducts'>
                    <Box className='innerProd'>
                        <Box>Product Id: {prod.id}</Box>
                        <Box>Product Title: {prod.title}</Box>
                        <Box>Price: ${prod.price}</Box>
                        <Box>Description: {prod.description}</Box>
                        <Box>Category: {prod.category}</Box>
                        <Box>Product img:<img style={{ height: '7rem', width: 'auto' }} src={prod.image} alt="workspace" /></Box>
                        <Box>Rating: {prod.rating?.rate}ratings</Box>
                    </Box>
                </Box>
            ))
            }
        </Box >
    );
}
