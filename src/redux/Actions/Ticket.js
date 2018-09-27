import axios from 'axios'
import config from '../../configure';
const BASE_URL = config.BASE_URL

export const saveTicket = (values)=>{
    let _id='',
    _method = "post"
        if(values.registration_id){
                _id = values.registration_id
                _method = 'put' 
        }
    return (dispatch) =>{
        dispatch({
            type:'SAVE_TICKET_PENDING',
        })
        return axios({url:`${BASE_URL}/registration/${_id}`,
            data:values,
            method:_method
        }).then(results=>{
            dispatch({type:'SAVE_TICKET_SUCCESS', payload:results.data})
        }).catch(err =>{
            dispatch({type:'SAVE_TICKET_REJECTED', payload:err.message})
        })
    }

}