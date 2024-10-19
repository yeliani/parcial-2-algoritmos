import { Actions } from '../types/store';
import { Screens } from '../types/store';

export const addProductsList  = (payload: any) => { //la actualización de la variable
    return  {
        action: Actions.ADDPRODUCT,
        payload,
    }
}

export const screen  = (payload: any) => { 
    return  {
        action: Screens.DASHBOARD,
        payload,
    }
}