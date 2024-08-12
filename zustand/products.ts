import { DataProducts } from '@/entities/Products';
import { create } from 'zustand'

interface ProductsCart extends DataProducts {
  quantity: number
}

interface ProductsStore {
  products: ProductsCart[],
  addProducts: (product: DataProducts, quantity: number) => void;
  removeProduct: (productId: number) => void;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
  updateCart: (product: DataProducts, quantity: number) => void;
}

export const useProductsStore = create<ProductsStore>((set, get) => ({
  products: [],
  addProducts: (product, quantity) => set((state) => {
    const existingProductIndex = state.products.findIndex(p => p.id === product.id);
    if (existingProductIndex !== -1) {
      // Sản phẩm đã tồn tại, tăng quantity
      const updatedProducts = [...state.products];
      updatedProducts[existingProductIndex].quantity += quantity;
      return { products: updatedProducts };
    } else {
      // Sản phẩm mới, thêm vào với quantity là 1
      return { products: [...state.products, { ...product, quantity: quantity }] };
    }
  }),
  removeProduct: (productId) => set((state) => {
    const productIndex = state.products.findIndex(p => p.id === productId);
    
    if (productIndex !== -1) {
      const updatedProducts = [...state.products];
      if (updatedProducts[productIndex].quantity > 1) {
        // Nếu quantity > 1, giảm quantity đi 1
        updatedProducts[productIndex].quantity -= 1;
      } else {
        // Nếu quantity = 1, xóa sản phẩm khỏi giỏ hàng
        updatedProducts.splice(productIndex, 1);
      }
      return { products: updatedProducts };
    }
    return state; // Không thay đổi nếu không tìm thấy sản phẩm
  }),
  getTotalQuantity: () => {
    const state = get();
    return state.products.reduce((sum, item) => sum + item.quantity, 0);
  },
  getTotalPrice: () => {
    const state = get();
    return state.products.reduce((sum, item) => sum + item.quantity * item.price, 0);
  },
  updateCart: (product, quantity) => set((state) => {
    const productUpdated = state.products.find(p => p.id === product.id);
    if(productUpdated) {
      productUpdated.quantity = quantity;
      return { products: state.products}
    }
    return state
  })
}))