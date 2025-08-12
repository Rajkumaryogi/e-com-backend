import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  order: {
    type: Number,
    required: true,
    unique: true,
    min: 0,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  visibility: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ['Men', 'Women', 'Accessories', 'Footwear', 'Kids'],
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  imageUrl: {
    type: String,
  },
  seller: {
    type: String,
    required: false,
  },
  brand: {
    type: String,
    required: false,
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
