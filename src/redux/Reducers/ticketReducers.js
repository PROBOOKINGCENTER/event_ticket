const initialState = {
    ticket:{data:null, isLoading:true, isRejected:false}
}

export default (state = initialState, action)=>{
    switch(action.type){
        case 'SAVE_TICKET_PENDING':
        return {...state, ticket:{data:null, isLoading:true, isRejected:false}}
        case 'SAVE_TICKET_SUCCESS':
        return {...state, ticket:{data:action.payload, isLoading:false, isRejected:false} }
        case 'SAVE_TICKET_REJECTED':
        return {...state, ticket:{data:action.payload, isLoading:false, isRejected:true}}
        default: return state
    }
}