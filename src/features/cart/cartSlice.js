import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    quantity: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {    
        addToCart : (state, action)=>{ 
            const { id } = action.payload   
            const existingItem = state.cart.find((item) => item.id === id);
            if (existingItem) {
                // Item already exists in cart, update its quantity
                existingItem.cartQuantity += 1
              } else {
                // Item is new, add it to cart
                state.cart.push({ ...action.payload, cartQuantity: 1 });
            }
            state.quantity = state.quantity + 1;
        },
        removeFromCart: (state, action)=>{
            console.log(action.payload)
            const index = state.cart.findIndex(item => item.id === action.payload);
            if(index !== -1){
                if (state.cart[index].cartQuantity > 1) {
                    state.cart[index].cartQuantity -= 1;
                    // state.cart[index].total -= state[index].price;
                  } else {
                    state.cart.splice(index, 1);
                  }
            }
        }    
    }
})


export const {addToCart, removeFromCart, getCartTotal} = cartSlice.actions
export default cartSlice.reducer;