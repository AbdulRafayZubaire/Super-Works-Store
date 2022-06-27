import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const getProducts = asyncHandler( async(req, res) =>{

    const products = await Product.find({});    

    // throw new Error('error occured')
    res.status(200).json(products);
})

const getProductById = asyncHandler( async(req, res) =>{

    const product = await Product.findById(req.params.id);

    if(product){

        // throw new Error('some error occured at single product fetch')
        res.status(200).json(product);
    }
    else{
        res.status(404);
        throw new Error('Product Not Found');
    }
})

export {
    getProductById,
    getProducts
}