export type AppState = {
	screen: string;
	shoppingList: any;
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
	'ADDPRODUCT' = 'ADDPRODUCT',
}

export enum Screens {
	'DASHBOARD' = 'DASHBOARD',
	
}