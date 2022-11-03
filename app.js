let cart = document.querySelector('.cart');
let cartfield = document.querySelector('.cart-field');
let add = document.getElementsByClassName('add');

for (let but of add){
    but.onclick = e =>{
        let item = Number(cart.getAttribute('data-count') || 0);
        // console.log(item)
        cart.setAttribute('data-count', item + 1);
        cart.classList.add('on');

        // COPY & PASTE
        
        let parent = e.target.parentNode.parentNode.parentNode;
          // console.log(e.target.parentNode.parentNode.parentNode)
        // console.log(parent)

        let clone = parent.cloneNode(true);
        cartfield.appendChild(clone);

        // console.log(clone)

        if(clone){
            cart.onclick = () =>{
                cartfield.classList.toggle('display')
            }
        }
    }
}