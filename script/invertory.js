// showroom cars must be in js, first do it in html, style then add to js
// let sup = JSON.parse(localStorage.getItem("superCar"));
// if (!superCar) {
const superCar = [
  {
    // super Car section
    id: 1,
    image: "https://i.postimg.cc/KjNXRQZh/car9.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 5,
    catergory: "supercar",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/XJfmzxBB/car8.jpg",
    name: "lambo",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 7,
    catergory: "supercar",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/QdvzNvpW/car7.jpg",
    name: "regera",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 12,
    catergory: "supercar",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/Gp0MnGCF/car6.jpg",
    name: "chiron",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 10,
    catergory: "supercar",
  },
  {
    id: 5,
    image: "https://i.postimg.cc/Kj47M8bc/car5.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 23,
    catergory: "supercar",
  },
  {
    id: 6,
    image: "https://i.postimg.cc/T3Py24RG/lambo.jpg",
    name: "farrari",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 56,
    catergory: "supercar",
  },
];
// localStorage.setItem("superCar", JSON.stringify(superCar));
// }

// let vehicle = JSON.parse(localStorage.getItem("Suv"));
// if (!suv) {
const Suv = [
  {
    // SUV section
    id: 7,
    image: "https://i.postimg.cc/wvy358SQ/BMW-X6-M-Competition-2020.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 11,
    catergory: "suv",
  },
  {
    id: 8,
    image: "https://i.postimg.cc/3xGZrVLV/farri-P.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 12,
    catergory: "suv",
  },
  {
    id: 9,
    image: "https://i.postimg.cc/qMzLSz2k/dbx.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 19,
    catergory: "suv",
  },
  {
    id: 10,
    image: "https://i.postimg.cc/wBdQ12Zv/cayenne.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 21,
    catergory: "suv",
  },
  {
    id: 11,
    image: "https://i.postimg.cc/fbjjmXQv/cullinan.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 4,
    catergory: "suv",
  },
  {
    id: 12,
    image:
      "https://i.postimg.cc/qRJcLRkH/Used-2022-Tesla-Model-X-Plaid-SUV-ONLY-250-Miles-FULL-Self-Driving-LOADED-with-Every-Option.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 1,
    catergory: "suv",
  },
];
// localStorage.setItem("Suv", JSON.stringify(Suv));
// }

const luxComfort = [
  {
    // luxury comfort Section
    id: 13,
    image: "https://i.postimg.cc/fbD9dfQT/maybach.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 15,
    catergory: "lux",
  },
  {
    id: 14,
    image: "https://i.postimg.cc/2yZFzdZd/tail.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 3,
    catergory: "lux",
  },
  {
    id: 15,
    image: "https://i.postimg.cc/wB4hL45c/rolly.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 8,
    catergory: "lux",
  },
  {
    id: 16,
    image: "https://i.postimg.cc/3r2WXbYj/bmw.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 13,
    catergory: "lux",
  },
  {
    id: 17,
    image: "https://i.postimg.cc/Ls40TWcJ/sport.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 11,
    catergory: "lux",
  },
  {
    id: 18,
    image: "https://i.postimg.cc/yYHmzZLK/merc.jpg",
    name: "Bugatti Chiron pur sport  300+",
    year: "2022",
    kilometers: "1400km",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "R20m+",
    quantity: 6,
    catergory: "lux",
  },
];



let dispSC = document.getElementById("showroom");
superCar.forEach((sup) => {
  dispSC.innerHTML += `<div class="col-lg-4 col-12 mt-2 py-lg-5 py-0 px-04">
  <div class="card" style="width: 18rem">
    <img src="${sup.image}" class="card-img-top image" alt="project" />
    <div class="card-body">
      <h5 class="card-title">${sup.name}</h5>
      <p class="card-text">
     <ul class=" list-unstyled svg" >
      <li>
        <img src="/icons/year of car.svg" alt="year"> : ${sup.year}
      </li>
     <li>
      <img src="/icons/mileage of car.svg" alt="mileage" > : ${sup.kilometers}
     </li>
     <li>
      <img src="/icons/transmission of car.svg" alt="gear"> : ${sup.transmission}
     </li>
     <li>
      <img src="/icons/fuel type.svg" alt="fuel type"> : ${sup.fuel}
     </li>
     <li>
      $: ${sup.price}
     </li></ul>
      </p>
      <button
        type="button"
        class="btn btn-primary d-flex justify-content-center mx-auto"
        data-bs-toggle="modal"
        data-bs-target=".modal"
      >
        view more..
      </button>
      <button
      class="btn btn-primary d-flex justify-content-center mx-auto"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
      // onclick="cartPush(${sup.id})"
    >
      Add to Cart
    </button>
    </div>
  </div>
</div>
`;
});

let dispSuv = document.getElementById("suv");
Suv.forEach((suv) => {
  dispSuv.innerHTML += `<div class="col-lg-4 col-12 mt-2 py-lg-5 py-0 px-04">
  <div class="card" style="width: 18rem">
    <img src="${suv.image}" class="card-img-top image" alt="project" />
    <div class="card-body">
      <h5 class="card-title">${suv.name}</h5>
      <p class="card-text">
     <ul class=" list-unstyled svg" >
      <li>
        <img src="/icons/year of car.svg" alt="year"> : ${suv.year}
      </li>
     <li>
      <img src="/icons/mileage of car.svg" alt="mileage" > : ${suv.kilometers}
     </li>
     <li>
      <img src="/icons/transmission of car.svg" alt="gear"> : ${suv.transmission}
     </li>
     <li>
      <img src="/icons/fuel type.svg" alt="fuel type"> : ${suv.fuel}
     </li>
     <li>
      $: ${suv.price}
     </li></ul>
      </p>
      <button
        type="button"
        class="btn btn-primary d-flex justify-content-center mx-auto"
        data-bs-toggle="modal"
        data-bs-target=".modal"
      >
        view more..
      </button>
      <button
              class="btn btn-primary d-flex justify-content-center mx-auto"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              onclick="cartPush2(${suv.id})"
            >
              Add to Cart
            </button>
    </div>
  </div>
</div>
`;
});

let displux = document.getElementById("lux");
luxComfort.forEach((lux) => {
  displux.innerHTML += `<div class="col-lg-4 col-12 mt-2 py-lg-5 py-0 px-04">
  <div class="card" style="width: 18rem">
    <img src="${lux.image}" class="card-img-top image" alt="project" />
    <div class="card-body">
      <h5 class="card-title">${lux.name}</h5>
      <p class="card-text">
     <ul class=" list-unstyled svg" >
      <li>
        <img src="/icons/year of car.svg" alt="year"> : ${lux.year}
      </li>
     <li>
      <img src="/icons/mileage of car.svg" alt="mileage" > : ${lux.kilometers}
     </li>
     <li>
      <img src="/icons/transmission of car.svg" alt="gear"> : ${lux.transmission}
     </li>
     <li>
      <img src="/icons/fuel type.svg" alt="fuel type"> : ${lux.fuel}
     </li>
     <li>
      $: ${lux.price}
     </li></ul>
      </p>
      <button
        type="button"
        class="btn btn-primary d-flex justify-content-center mx-auto"
        data-bs-toggle="modal"
        data-bs-target=".modal"
      >
        view more..
      </button>
      <button
              class="btn btn-primary d-flex justify-content-center mx-auto"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              onclick="cartPush3(${lux.id})"
            >
              Add to Cart
            </button>
    </div>
  </div>
</div>
`;
});

// cart function

const cart = [];
function cartPush(productId) {
  const car = superCar.find((data) => data.id === productId);

  if (car && car.quantity > 0) {
    cart.push(car);
    car.quantity--;
    // cartUpdate();
    
    
    console.log(cart); 
    
  };
}

  function cartPush2(productId){
const suv = Suv.find((vehicle) => vehicle.id === productId);
  if (suv && suv.quantity > 0) {
    cart.push(suv);
    suv.quantity--;
    console.log(cart);
    cartUpdate()
    // cart.pop();
    
  }
};
  
function cartPush3(productId){
  const lux = luxComfort.find((comfort) => comfort.id === productId);
  if (lux && lux.quantity > 0) {
    cart.push(lux);
    lux.quantity--;
    console.log(cart);
    cartUpdate()
    // cart.pop();

    
    
  };
}
  
  
  
  
  
  



// puhing to cart




function cartUpdate() {
  const cartContent = document.getElementById("cart");
  // cartContent.innerHTML = "";
  cart.forEach((data) => {
    const innerCart = document.createElement("div");
    innerCart.innerHTML = `
             <hr>
             <img src="${data.image}" alt="product image" class="img-thumbnail img" />
             <p>${data.name} </p>
             <div class="d-flex justify-content-between">
               <p>${data.price}</p>
              </div>
               <hr> `;
  cartContent.appendChild(innerCart);
  });
}





















// let cart = JSON.parse(localStorage.getItem("cart"));
// if (!cart) {
//   cart = [];
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// // Shopping cart
// function updateCart() {
//   const cartElement = document.getElementById("cart");
//   cart.forEach((product) => {
//     const cartItem = document.createElement("div");
//     cartItem.innerHTML = `
    
//     <ul class="list-group mb-3">
//     <li class="list-group-item d-flex justify-content-between lh-sm">
//     <div>
//     <h6 class="my-0">${product.name}</h6>
//     <small class="text-body-secondary">${product.desc}</small>
//     </div>
//     <span class="text-body-secondary">R ${product.price}</span>
//     <button onclick= "calc(${product.price})"></button>
//     </li>

//     </ul>
//     `;

//     cartElement.appendChild(cartItem);
//   });
// }

// // Function to save cart to localStorage
// const saveCartToLocalStorage = () => {
//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// // Function to retrieve cart from localStorage (if available)
// const retrieveCartFromLocalStorage = () => {
//   if (localStorage.getItem("cart")) {
//     cart = JSON.parse(localStorage.getItem("cart"));
//     cart.forEach((product) => {
//       updateCart(product);
//     });
//   }
// };

// function addToCart(productId) {
//   const product = products.find((product) => product.id === productId);
//   if (product) {
//     cart.push(product);
//     product.quantity++;
//     saveCartToLocalStorage();
//     updateCart();
//   }
// }

// retrieveCartFromLocalStorage();
// updateCart();





































