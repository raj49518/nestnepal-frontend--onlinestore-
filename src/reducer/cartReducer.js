const initialData={
    cart_items:[]
}
const cartReducer=(state = initialData,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return {cart_items: [...state.cart_items,action.payload]}
            case "REMOVE_ITEM":
                return{cart_items:state.cart_items.filter(item=>item.id!=action.payload)}
            default:
    return state

    }
}
export default cartReducer