export const reducer = (currentAction: any, currentState: any) => { //currentState es lo que hay en el appState. currentAction es la acción actual que hay en el appState 
    
    const {action, payload} = currentAction; //payload es para la nueva acción que se va a lanzar, la actualización. action es el nombre de la accion ""

    switch (action) {
        case 'ADDPRODUCT': //nombre de la accion
            return  {
                ...currentState, // manten el estado global o esa copia que se hizo. Desgloza cada propiedad 
                shoppingList: [...currentState.shoppingList, payload] // Solamente edita esta propiedad. Lo que haya llegado en el payload, agregaselo a la variable. Actualización del nuevo valor
            };
    
        case 'DASHBOARD':
            return {
                ...currentState, 
                screen: payload
            }
        default:
            return currentState; //retorna el appState como está, en caso tal de que no entre en ninguno de los casos.
            
    }
    
}