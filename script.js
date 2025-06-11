// All India street foods for each state/UT
const allIndiaFoods = [

  { state: "Andhra Pradesh", food: "Mirchi Bajji", price: 60, imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/mirchi-bajji-mirapakaya-bajji-recipe.jpg" }, // 
  { state: "Arunachal Pradesh", food: "Momos", price: 80, imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnM2cU5guBQ3OxoYms3LEhicLGYG9MBGNMLgbhTj9eFoK2mSZdwLo5I28OTCDzQretiyPJ6bvdjdVe5Fij-HSR4d2vjB8h2nLBhZHb2PRjY2V1xF48_t3tn19QzmDZJGmC_aNnjfMkafKj/s1600/IMG_6783.JPG" }, // 
  { state: "Assam", food: "Pitha", price: 70, imageUrl: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/28-march/Sweet_Rice_Dumplings_Recipe_Mohura_Pitha-1.jpg" }, // 
  { state: "Bihar", food: "Litti Chokha", price: 90, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR35dtEXb0wU0AYNXethEeH7HmuXq9W_AHqlw&s" },
  { state: "Chhattisgarh", food: "Chila", price: 60, imageUrl: "https://blog.swiggy.com/wp-content/uploads/2024/04/Chila-1024x538.jpg" },
  { state: "Goa", food: "Ros Omelette", price: 120, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR53G3O8Yl9zAVianewTTCrWrpn13LpN1V4RC3sWKUDI39UQ20eVZ_vbueYT8NeNqsvaZU&usqp=CAU" },
  { state: "Gujarat", food: "Dhokla", price: 65, imageUrl: "https://images.getrecipekit.com/20230615073642-2-20-6.jpg?aspect_ratio=16:9&quality=90&" },
  { state: "Haryana", food: "Kachri Chutney", price: 50, imageUrl: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/pooja/kachri_ki_chutney_recipe_new_400.jpg" },
  { state: "Himachal Pradesh", food: "Siddu", price: 85, imageUrl: "https://silvermountain.edu.np/images/blog/1700732037_ggg.jpg" },
  { state: "Jharkhand", food: "Thekua", price: 55, imageUrl: "https://static.langimg.com/photo/imgsize-2702679,msid-114703053/navbharat-times.jpg" },
  { state: "Karnataka", food: "Masala Dosa", price: 80, imageUrl: "https://delishglobe.com/wp-content/uploads/2024/09/Masala-dosa-1.png" },
  { state: "Kerala", food: "Parippu Vada", price: 60, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GLGtRxoElX_6FzfDGD19eV0I5biZxWgEIw&s" },
  { state: "Madhya Pradesh", food: "Poha Jalebi", price: 70, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJs--W78v5hgAAKE-GOJos1vXZSTjB9wH1Qw&s" },
  { state: "Maharashtra", food: "Vada Pav", price: 40, imageUrl: "https://blog.swiggy.com/wp-content/uploads/2024/11/Image-1_mumbai-vada-pav-1024x538.png" },
  { state: "Manipur", food: "Eromba", price: 75, imageUrl: "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/02/f39e043b6095caa94d3385165bb1e6ea.jpg?size=*:900" },
  { state: "Meghalaya", food: "Jadoh", price: 90, imageUrl: "https://static.toiimg.com/thumb/51287966.cms?resizemode=75&width=1200&height=900" },
  { state: "Mizoram", food: "Bai", price: 70, imageUrl: "https://images.slurrp.com/prod/rich_article/kwxhjwjlwoe.webp?impolicy=slurrp-20210601&width=1200&height=675" },
  { state: "Odisha", food: "Chhena Poda", price: 85, imageUrl: "https://www.bigbasket.com/media/uploads/recipe/w-l/4570_2_1.jpg" },
  { state: "Punjab", food: "Chole Bhature", price: 100, imageUrl: "https://amritsr.com/wp-content/uploads/2021/04/cholle-bhature.jpeg" },
  { state: "Rajasthan", food: "Dal Baati Churma", price: 110, imageUrl: "https://www.secondrecipe.com/wp-content/uploads/2020/11/dal-bati-churma.jpg" },
  { state: "Sikkim", food: "Phagshapa", price: 95, imageUrl: "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2023/11/Phagshapa.jpg?size=*:900" },
  { state: "Tamil Nadu", food: "Idli Sambhar", price: 60, imageUrl: "https://shwetainthekitchen.com/wp-content/uploads/2022/01/Idli-Sambar.jpg" },
  { state: "Telangana", food: "Hyderabadi Biryani", price: 150, imageUrl: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2019/05/Hyderabadi-Veg-Biryani-H1.jpg?fit=600%2C900&ssl=1" },
  { state: "Tripura", food: "Mui Borok", price: 80, imageUrl: "https://s7ap1.scene7.com/is/image/incredibleindia/mui-borok-gastronomy-agartala-blog-gas-hero?qlt=82&ts=1726651182594" },
  { state: "Uttar Pradesh", food: "Kachori Sabzi", price: 50, imageUrl: "https://www.livehindustan.com/lh-img/smart/img/2025/03/04/1000x563/tydr_1741056592490_1741056603416.jpg" },
  { state: "Uttarakhand", food: "Aloo Ke Gutke", price: 55, imageUrl: "https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Aloo-Gutka-Thumbnail.jpg" },
  { state: "West Bengal", food: "Puchka", price: 45, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vb-0JJii7quyObuEIZ0bjQVB2bVMsZws9Q&s" },
  { state: "Chandigarh", food: "Bread Pakora", price: 40, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37K2hiSCP1_0I_nyQHLs1HdP9W9l4q40mWQ&s" },
  { state: "Dadra & Nagar Haveli & Daman & Diu", food: "Dhokla", price: 60, imageUrl: "https://www.yummyfoodrecipes.com/resources/picture/org/Khaman-Dhokla.jpg" },
  { state: "Delhi", food: "Aloo Tikki Chaat", price: 70, imageUrl: "https://i0.wp.com/udaipurkiran.com/wp-content/uploads/2025/02/Aloo-Tikki.webp?fit=1920%2C1081&ssl=1" },
  { state: "Lakshadweep", food: "Tuna Curry", price: 120, imageUrl: "https://lh5.googleusercontent.com/-3c2nYEEPdHA/TW2nfoPBFuI/AAAAAAAAB_c/SzcA4jAIoOw/s1600/IMG_5718.JPG" },
  { state: "Puducherry", food: "Dosa", price: 60, imageUrl: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg" }
];

let cart = [];


function renderFeaturedFoods() {
  const container = document.getElementById('featured-food-items-container');
  if (!container) {
    console.error('Featured food items container not found!');
    return;
  }
  container.innerHTML = '';
  const featuredItems = allIndiaFoods.slice(0, 8); // Display first 8 items as featured

  featuredItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'food-item-card';
    card.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.food}"> <!-- Using item.imageUrl here -->
      <h4>${item.state}</h4>
      <p class="food-name">${item.food}</p>
      <p class="food-price">₹${item.price}</p>
      <button class="add-to-cart-btn" data-food="${item.food}" data-price="${item.price}">Add to Cart</button>
    `;
    container.appendChild(card);
  });
  attachCartButtons(); 
}


function renderAllStatesFood() {
  const container = document.getElementById('food-items-container');
  if (!container) {
    console.error('All States food items container not found!');
    return;
  }
  container.innerHTML = ''; 
  allIndiaFoods.forEach(item => {
    const card = document.createElement('div');
    card.className = 'food-item-card';
    card.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.food}"> <!-- Using item.imageUrl here -->
      <h4>${item.state}</h4>
      <p class="food-name">${item.food}</p>
      <p class="food-price">₹${item.price}</p>
      <button class="add-to-cart-btn" data-food="${item.food}" data-price="${item.price}">Add to Cart</button>
    `;
    container.appendChild(card);
  });
  attachCartButtons(); 
}


function attachCartButtons() {
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.removeEventListener('click', addToCart); 
    btn.addEventListener('click', addToCart); 
  });
}

/**
 * Adds an item to the cart array. If the item already exists,
 * its quantity is incremented. Otherwise, a new item is added.
 * After adding, it updates the cart display, cart badge, and opens the cart modal.
 * @param {Event} e 
 */
function addToCart(e) {
  const foodName = e.target.getAttribute('data-food');
  const price = Number(e.target.getAttribute('data-price'));

  const existingItem = cart.find(item => item.name === foodName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: foodName, price: price, quantity: 1 });
  }
  updateCartDisplay();
  updateCartBadge(); 
  openCart();
}


function updateCartDisplay() {
  const container = document.getElementById('cart-items');
  const totalElement = document.getElementById('cart-total');

  if (!container || !totalElement) {
    console.error('Cart display elements (cart-items or cart-total) not found!');
    return;
  }

  container.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    itemElement.innerHTML = `
      <span>${item.name} x${item.quantity}</span>
      <span>₹${item.price * item.quantity}</span>
      <button class="remove-item" data-index="${index}">Remove</button>
    `;
    container.appendChild(itemElement);
    total += item.price * item.quantity;
  });

  totalElement.textContent = `Total: ₹${total}`;

  document.querySelectorAll('.remove-item').forEach(btn => {

    btn.removeEventListener('click', (e) => {
      removeFromCart(Number(e.target.getAttribute('data-index')));
    });
    btn.addEventListener('click', (e) => {
      removeFromCart(Number(e.target.getAttribute('data-index')));
    });
  });
}

/**
 * Removes an item from the cart based on its index.
 * After removal, it updates the cart display and the cart badge.
 * @param {number} index - The index of the item to be removed from the cart array.
 */
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
  updateCartBadge(); 
}


function updateCartBadge() {
  const cartItemCountElement = document.getElementById('cart-item-count');
  if (cartItemCountElement) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartItemCountElement.textContent = totalItems;
    if (totalItems > 0) {
      cartItemCountElement.style.display = 'inline-block';
    } else {
      cartItemCountElement.style.display = 'none';
    }
  }
}


function openCart() {
  const cartModal = document.getElementById('cart-modal');
  if (cartModal) {
    cartModal.style.display = 'flex';
  }
}


function closeCart() {
  const cartModal = document.getElementById('cart-modal');
  if (cartModal) {
    cartModal.style.display = 'none';
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedFoods(); 
  renderAllStatesFood(); 

  updateCartDisplay(); 
  updateCartBadge();  

  const cartModal = document.getElementById('cart-modal');
  const closeCartButton = document.getElementById('close-cart');
  const checkoutButton = document.getElementById('checkout-btn');

  if (closeCartButton) {
    closeCartButton.onclick = closeCart;
  }

  if (cartModal) {
    window.onclick = function(event) {
      if (event.target === cartModal) {
        closeCart();
      }
    };
  }

  if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
      if (cart.length === 0) {
        showCustomAlert('Your cart is empty!');
      } else {
        showCustomAlert('Order placed! Thank you for choosing Swadlok.');
        cart = []; 
        updateCartDisplay(); 
        updateCartBadge(); 
        closeCart(); 
      }
    });
  }

  // Show cart modal when navbar 'Cart' link is clicked
  const cartNavLink = document.querySelector('nav a[href="#cart"]');
  if (cartNavLink) {
    cartNavLink.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  }
});

/**
 * Custom alert function to display non-blocking messages using a custom modal.
 * This replaces the native alert() for better UI control.
 * @param {string} message - The message to display in the alert.
 */
function showCustomAlert(message) {
  const customAlertModal = document.getElementById('custom-alert-modal');
  const customAlertMessage = document.getElementById('custom-alert-message');

  if (customAlertModal && customAlertMessage) {
    customAlertMessage.textContent = message;
    customAlertModal.style.display = 'flex'; 

    setTimeout(() => {
      customAlertModal.style.display = 'none';
    }, 3000);
  } else {
    console.warn('Custom alert modal elements not found, falling back to native alert.');
    alert(message);
  }
}
