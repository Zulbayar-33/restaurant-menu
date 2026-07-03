const APPS_SCRIPT_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";

const foods = [
  {
    category: "Үндсэн хоол",
    name: "5 чулуун будаатай хуурга",
    price: 18000,
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
  },
  {
    category: "Үндсэн хоол",
    name: "Банштай цай",
    price: 12000,
    img: "https://images.unsplash.com/photo-1547592180-85f173990554"
  },
  {
    category: "Үндсэн хоол",
    name: "Гэрийн хуушуур",
    price: 10000,
    img: "https://images.unsplash.com/photo-1625398407796-82650a8c135f"
  },
  {
    category: "Үндсэн хоол",
    name: "Хонины бууз",
    price: 12000,
    img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c"
  },
  {
    category: "Үндсэн хоол",
    name: "Үхрийн өвчүүтэй цуйван",
    price: 16000,
    img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841"
  },
  {
    category: "Үндсэн хоол",
    name: "Үхрийн шарсан хавирга",
    price: 26000,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947"
  },
  {
    category: "Үндсэн хоол",
    name: "Хүйтэн хорхог",
    price: 32000,
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba"
  },
  {
    category: "Үндсэн хоол",
    name: "Шарсан элэг",
    price: 16000,
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    category: "Үндсэн хоол",
    name: "Их гэрэн",
    price: 35000,
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
  },
  {
    category: "Үндсэн хоол",
    name: "Далан давхар пицца",
    price: 28000,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  },
  {
    category: "Салат",
    name: "Хонины хэлэн зууш",
    price: 18000,
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
  },
  {
    category: "Салат",
    name: "Үхрийн гүзээний салат",
    price: 17000,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  },
  {
    category: "Салат",
    name: "Манжингийн салат",
    price: 9000,
    img: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71"
  },
  {
    category: "Салат",
    name: "Туурагтай зууш",
    price: 14000,
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999"
  },
  {
    category: "Ундаа",
    name: "Coca Cola",
    price: 4000,
    img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e"
  },
  {
    category: "Ундаа",
    name: "Sprite",
    price: 4000,
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97"
  },
  {
    category: "Ундаа",
    name: "Fanta",
    price: 4000,
    img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca"
  },
  {
    category: "Ундаа",
    name: "Ус",
    price: 2000,
    img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d"
  },
  {
    category: "Ундаа",
    name: "Жүүс",
    price: 5000,
    img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba"
  },
  {
    category: "Ундаа",
    name: "Таван эрдэнийн цай",
    price: 6000,
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
  }
];

let cart = [];

function formatMoney(amount) {
  return amount.toLocaleString() + "₮";
}

function renderMenu() {
  const menuList = document.getElementById("menuList");
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const categoryValue = document.getElementById("categoryFilter").value;

  const filteredFoods = foods.filter(food => {
    const matchSearch = food.name.toLowerCase().includes(searchValue);
    const matchCategory = categoryValue === "all" || food.category === categoryValue;
    return matchSearch && matchCategory;
  });

  menuList.innerHTML = "";

  filteredFoods.forEach(food => {
    const realIndex = foods.findIndex(f => f.name === food.name);

    menuList.innerHTML += `
      <div class="col-md-6">
        <div class="food-card">
          <img src="${food.img}" class="food-img">
          <div class="food-body">
            <div class="food-category">${food.category}</div>
            <div class="food-name">${food.name}</div>
            <div class="food-price">${formatMoney(food.price)}</div>
            <button class="btn btn-danger w-100 mt-3 add-btn" onclick="addToCart(${realIndex})">
              Сагсанд нэмэх
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

function addToCart(index) {
  const food = foods[index];

  const existing = cart.find(item => item.name === food.name);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      name: food.name,
      price: food.price,
      qty: 1
    });
  }

  renderCart();
}

function changeQty(index, amount) {
  cart[index].qty += amount;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cartList");
  const totalPrice = document.getElementById("totalPrice");

  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = `<div class="empty-cart">Сагс хоосон байна</div>`;
    totalPrice.innerText = "0₮";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    cartList.innerHTML += `
      <div class="cart-item">
        <div class="cart-name">${item.name}</div>

        <div class="d-flex justify-content-between align-items-center mt-2">
          <div>
            <button class="btn btn-outline-danger qty-btn" onclick="changeQty(${index}, -1)">-</button>
            <span class="mx-2">${item.qty}</span>
            <button class="btn btn-outline-success qty-btn" onclick="changeQty(${index}, 1)">+</button>
          </div>

          <b>${formatMoney(itemTotal)}</b>
        </div>

        <button class="btn btn-sm btn-link text-danger p-0 mt-1" onclick="removeItem(${index})">
          Устгах
        </button>
      </div>
    `;
  });

  totalPrice.innerText = formatMoney(total);
}

async function submitOrder() {
  const tableNo = document.getElementById("tableNo").value.trim();
  const note = document.getElementById("note").value.trim();
  const message = document.getElementById("message");

  if (!tableNo) {
    message.innerHTML = `<div class="alert alert-warning">Ширээний дугаар оруулна уу</div>`;
    return;
  }

  if (cart.length === 0) {
    message.innerHTML = `<div class="alert alert-warning">Хоол сонгоно уу</div>`;
    return;
  }

  const data = {
    table: tableNo,
    note: note,
    items: cart
  };

  message.innerHTML = `<div class="alert alert-info">Илгээж байна...</div>`;

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    message.innerHTML = `<div class="alert alert-success">Амжилттай илгээгдлээ</div>`;

    cart = [];
    renderCart();

    document.getElementById("note").value = "";

  } catch (error) {
    message.innerHTML = `<div class="alert alert-danger">Алдаа гарлаа</div>`;
  }
}

document.getElementById("searchInput").addEventListener("input", renderMenu);
document.getElementById("categoryFilter").addEventListener("change", renderMenu);

renderMenu();
renderCart();
