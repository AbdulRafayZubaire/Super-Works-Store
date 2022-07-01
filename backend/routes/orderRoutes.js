import express, { Router } from "express";
import { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid } from "../controllers/orderController.js";
const router = express.Router()
import fetchUser from '../middlewares/fetchUser.js'

console.log('into the routes');

router.route('/').post(fetchUser, addOrderItems)
router.route('/myorders').get(fetchUser, getMyOrders)
router.route('/:id').get(fetchUser, getOrderById)
router.route('/:id/pay').put(fetchUser, updateOrderToPaid)

export default router