import { reducer } from './reducer'
import { AppState, Observer } from '../types/store';
import Storage from '../utils/storage';

//El estado global === appState / propiedades por ahora quemadas

const initialState: AppState = {
    screen: 'DASHBOARD',
    shoppingList: [],
    
};
export let emptyState: AppState = {
	tasks: []
};
export let appState = Storage.get('STORE', initialState);

const persistStore = (state: any) => { // aquí quiero es guardarlo
	Storage.set('STORE', state); // no envio el booleano porque quiero que se guarde en el local
    
};

//Crear el dispatch recibe una accion.
export const dispatch = (action: any) => { // el dispatch clona le estado global para luego darse cuenta con el reducer que acción estoy lanzando
    
    const clone = JSON.parse(JSON.stringify(appState)); //esta linea clona lo que haya en el estado global

    appState = reducer(action, clone); // El estado global ahora va a ser igual lo que haya cambaido en el reducer. El reducer recibe una acción y trabaja con el clon

    persistStore(appState); // Cuando se haga el dispatch se guarda el appState en el localStorage

    observers.forEach((o) => o.render()); // donde haya un observador, que se ejecute el render de esa clase  
};

//Agregar los observadores para los interesados, los suscritos. El store le notifica a la screen que algo cambió

let observers: any[] = []; // arreglo de observadores

export const addObserver = (ref: any) =>  {
    observers = [...observers, ref];
};