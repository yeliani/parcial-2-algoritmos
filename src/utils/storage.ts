const get = (key: any, defaultValue: any) => { // esto solamente trae
	const value = localStorage.getItem(key) || sessionStorage.getItem(key); // busque la key en el LocalStorage o SessionStorage que esta recibiendo el get =(key:any)
	return value ? JSON.parse(value) : defaultValue; //el value siempre se trae en String por eso se hace el JSON.parse(value) para convertirlo en un JSON

	// if (session === true) {
	// 	return value;
	// } else {
	// 	return defaultValue;
	// }
};

//el session sirve para dteemrinar en donde se va a guardar las cosas, en el local o en el session

//Cuando el session es false -> se guarda en el local
//Cuando el session es true -> se guarda en el session

const set = (key: any, value: any, session: boolean = false) => {
	const storage = session ? sessionStorage : localStorage;
	const parsed = JSON.stringify(value); //aquí convierto el valor que estoy enviando en String
	storage.setItem(key, parsed); //storage va a variar dependiendo de la condición que se ejecute en la linea 18.
};

export default {
	get,
	set,
};