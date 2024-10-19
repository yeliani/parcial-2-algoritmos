
import { addObserver, dispatch } from "../store../store";
import { addProductsList } from "../../store/actions";

export enum Attribute {
    "image" = "image",
    "titleproduct" = "titleproduct",
    "description" = "description",
    "category" = "category" ,
    "price" = "price",
    "rating" = "rating" ,
}

class Product extends HTMLElement {
    image?: string;
    titleproduct?: string;
    description?: string;
    category?: string;
    price?: number;
    rating?: number;

    static get observedAttributes() {
        return Object.values(Attribute);
    }
   
    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined){
        switch (propName) {
            case Attribute.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;
            case Attribute.rating:
                this.rating = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;  
    }
}
        
        constructor(){
            super();
            this.attachShadow({mode: "open"})
            addObserver(this);
        }

        connectedCallback(){
           this.render();
        }
      
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
            <div class="producst">
                <div class="image">
                    <img src="${this.image}" || 'No Image'}">
                </div>
                <div class="information">
                    <div class="details">
                        <h3>${this.titleproduct || 'No Title'}</h3>

                        <div class="description">
                            <p >${this.description || 'No Description'}</p>
                        </div>
                        <p class="category">Category: ${this.category || 'No Category'}</p>
                        <p class="rating">Rating: ${this.rating || 'No  Rating'}</p>
                        <p class="price">Price: $${this.price || 'No Price'}</p>
                    </div>
                </div>
            </div>       
                `
                const divDetails = this.shadowRoot.querySelector(".details");
                const btn = this.ownerDocument.createElement('button');
                btn.textContent = 'Add to cart';
                btn.addEventListener('click',(e)=>{
                    e.preventDefault();
                    dispatch(addProductsList({ // le envio estos datos 
                        title: this.titleproduct,
                        price: this.price,
                        description: this.description,
                        category: this.category,
                        image: this.image,
                        rating: this.rating
                    }))
                })

                if (divDetails) {  
                divDetails.appendChild(btn);
                }

            }

        
        }
    }
customElements.define("product-card",Product);
export default Product;