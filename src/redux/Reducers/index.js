import {combineReducers} from 'redux'
import {reducer as formReducers} from 'redux-form'
import ticketReducers from 'ticketReducers'
const rootReducers = combineReducers({
    form: formReducers,
    ticketReducers
})
export default rootReducers;