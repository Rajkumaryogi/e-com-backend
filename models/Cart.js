import mongoose from 'mongoose';

const { Schema } = mongoose;

const cartItemSchema = new Schema({
  product: {
    type: Schema.ObjectId,
    ref: 'Product',
    required: [true, 'Cart item must belong to a product']
  },
  quantity: {
    type: Number,
    default: 1
  },
  price: {
    type: Number,
    required: [true, 'Cart item must have a price']
  }
});

const cartSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: [true, 'Cart must belong to a user']
  },
  items: [cartItemSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
