const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyFc0FUcKN4FnQCxcH1JfNuB9r_loDInqlyj1xbNtsSasFNzFvH3kUUWhqOn3xIpD9T5A/exec";

const menu = [
  {id:1, category:'main', name:'5 цулын будаатай хуурга', price:12000, desc:'Амттай будаатай хуурга', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAr6BXCHT3mMDQDOgLUR55bYPUh_IcVzeW8uUUYeEuFA&s=10'},
  {id:2, category:'main', name:'Банштай цай', price:12000, desc:'Халуун банштай цай', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitK3P-XjtoVI2UZnGVSloyTISrGYWOsmeX-Yg92kfDg&s=10'},
  {id:3, category:'main', name:'Хонины утсан шарсан толгой', price:26500, desc:'Төмс, лууван, сонгино, амтат чинжүү', img:'https://scontent.fuln6-3.fna.fbcdn.net/v/t39.30808-6/480919341_943615721280894_7939721243953598086_n.jpg?stp=dst-jpg_tt6&cstp=mx828x1792&ctp=s828x1792&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=SNzDWsJsSCsQ7kNvwEjsvjY&_nc_oc=AdofJmksZs3igBi-xEk5UqFzjXgv2ZKcJxBjchyYkP8vd1TH4p1qmjHTHtMkSZDab9U&_nc_zt=23&_nc_ht=scontent.fuln6-3.fna&_nc_gid=o0vvBWGLs0_kPTJyoUhR4g&_nc_ss=7b289&oh=00_AQA4gDBi-Pp91PWelpMAYCONFP2ccxGqIHLhXicYLEiYWg&oe=6A6E2E93'},
  {id:4, category:'main', name:'Үхрийн өвчүүтэй цуйван', price:32000, desc:'Үхрийн өвчүү, лууван, амтат чинжүү', img:'https://asiantoprecipes.weebly.com/uploads/5/3/4/0/5340076/tsuivan_orig.jpg'},
  {id:5, category:'main', name:'Үхрийн шарсан хавирга', price:60000, desc:'Төмс, лууван, будаа, үхрийн чөмөг', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-v8NBVnVO7ZmkoNypKoCwM56Ii1LHLinbY8KFxZeyy5oe8JyBRaORSC8Q&s=10'},
  {id:6, category:'main', name:'Гэрийн хуушуур', price:18500, desc:'4 ширхэг', img:'https://upload.wikimedia.org/wikipedia/commons/8/8d/MongoliaLastDay_153.JPG'},
  {id:7, category:'main', name:'Хонин бууз', price:18500, desc:'5 ширхэг', img:'https://t3.ftcdn.net/jpg/01/79/88/76/360_F_179887633_1lZfPhwBDT10pDxTtKyuLIYU2JDXLakC.jpg'},
  {id:8, category:'main', name:'Шарсан элэг', price:15000, desc:'Үхрийн элэг, хонины сүүл, будаа', img:'https://images.squarespace-cdn.com/content/v1/5e88044f6a6ffa7b2fe78f54/1617885903019-8R493OAYXFRU7QX0ALB4/Mongolian+food-+fried+liver.jpg'},
  {id:9, category:'main', name:'Далан давхар пицца', price:23500, desc:'Үхрийн өвчүү, моцарелла бяслаг', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLcRR9JhZKIQ5KCQ7vDENy0Fy1QGxAMQsdg949hf6iqtq4ek7eGFjjXk&s=10'},
  {id:10, category:'main', name:'Хуйхтай хорхог', price:58000, desc:'Төмс, лууван, давхраат бин', img:'https://correctmongolia.com/wp-content/uploads/2023/09/horhog-1.jpg'},
  {id:11, category:'salad', name:'Хонины хэлэн зууш', price:13500, desc:'Өндөг, майонез, соус', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9p0wggbNqWjrOI19hk6ZOF-C6RBtSIrfZdFfWuPEmGN7XXxV7yVuA7s&s=10'},
  {id:12, category:'salad', name:'Үхрийн гүзээний салат', price:14000, desc:'Амтат чинжүү, цоо байцаа, лууван', img:'https://margaash.live/wp-content/uploads/2020/03/Uhriin-guzee-salat-amtat-hool-jor.jpg'},
  {id:13, category:'salad', name:'Хүрэн манжингийн салат', price:17500, desc:'Хушга, самар, үзэм, галант', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmubLK80M4PdNbRLLMrEZF2idKsPodpxIMAfuR0VUsdfQv2iIynLmxpE&s=10'},
  {id:14, category:'salad', name:'Туургатан зууш', price:17500, desc:'Царцаамаг, үхрийн чөмөг, зөөхий', img:'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=900&q=80'},
  {id:15, category:'drink', name:'Цэвэр ус', price:2500, desc:'Ус', img:'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80'},
  {id:16, category:'drink', name:'Ундаа', price:3000, desc:'Cola, Sprite, Fanta', img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80'},
  {id:17, category:'drink', name:'Жүүс', price:3000, desc:'Жүрж, алим, олон жимс', img:'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=900&q=80'},
  {id:18, category:'drink', name:'Шейк', price:7000, desc:'Гүзээлзгэнэ, шоколад', img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80'},
  {id:19, category:'drink', name:'Смүүтий', price:13000, desc:'Хоргүйжүүлэх', img:'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=80'},
  {id:20, category:'drink', name:'Таван эрдэнийн цай', price:7500, desc:'Бор үзэм, долоогоно, хар чавга', img:'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80'},
  {id:21, category:'drink', name:'Мөстэй цай', price:3000, desc:'Ice tea', img:'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=900&q=80'}
];

let activeCategory = 'all';
let cart = [];

const money = n => n.toLocaleString('mn-MN') + '₮';

function renderMenu() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const grid = document.getElementById('menuGrid');

  const filtered = menu.filter(f =>
    (activeCategory === 'all' || f.category === activeCategory) &&
    f.name.toLowerCase().includes(q)
  );

  grid.innerHTML = filtered.map(f => `
    <div class="col-sm-6 col-lg-4">
      <div class="card food-card">
        <img src="${f.img}" class="food-img" alt="${f.name}">
        <div class="food-body">
          <div class="d-flex justify-content-between gap-2">
            <h5 class="food-title">${f.name}</h5>
            <span class="price">${money(f.price)}</span>
          </div>
          <p class="food-desc">${f.desc}</p>
          <button class="btn btn-primary add-btn w-100" onclick="addToCart(${f.id})">
            Сагсанд нэмэх
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function addToCart(id) {
  const food = menu.find(f => f.id === id);
  const found = cart.find(i => i.id === id);

  if (found) found.qty++;
  else cart.push({...food, qty: 1});

  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  renderCart();
}

function renderCart() {
  const box = document.getElementById('cartItems');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  document.getElementById('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('totalPrice').textContent = money(total);

  box.innerHTML = cart.length ? cart.map(i => `
    <div class="cart-row">
      <div class="flex-grow-1">
        <h6>${i.name}</h6>
        <small>${money(i.price)} × ${i.qty} = ${money(i.price * i.qty)}</small>
      </div>

      <div class="qty-control">
        <button class="btn btn-outline-dark btn-sm" onclick="changeQty(${i.id}, -1)">-</button>
        <span>${i.qty}</span>
        <button class="btn btn-outline-dark btn-sm" onclick="changeQty(${i.id}, 1)">+</button>
      </div>
    </div>
  `).join('') : '<p class="text-muted text-center">Сагс хоосон байна.</p>';
}

async function submitOrder() {
  const message = document.getElementById('message');

  const data = {
    table: document.getElementById('tableNo').value.trim(),
    note: document.getElementById('note').value.trim(),
    items: cart.map(i => ({
      name: i.name,
      qty: i.qty,
      price: i.price,
      total: i.price * i.qty
    }))
  };

  if (!data.table || cart.length === 0) {
    message.textContent = 'Ширээ / хаяг болон хоол заавал оруулна уу.';
    message.className = 'mt-3 text-center fw-semibold text-danger';
    return;
  }

  if (SCRIPT_URL.includes('PASTE_YOUR')) {
    message.textContent = 'script.js дотор SCRIPT_URL солино уу.';
    message.className = 'mt-3 text-center fw-semibold text-danger';
    return;
  }

  message.textContent = 'Илгээж байна...';
  message.className = 'mt-3 text-center fw-semibold text-dark';

  try {
    const res = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(data)
    });

    const json = await res.json();

    if (json.success) {
      cart = [];
      renderCart();

      document.getElementById('tableNo').value = '';
      document.getElementById('note').value = '';

      message.textContent = 'Амжилттай хадгаллаа ✅';
      message.className = 'mt-3 text-center fw-semibold text-success';
    } else {
      throw new Error(json.message || 'Error');
    }

  } catch (e) {
    message.textContent = 'Алдаа гарлаа: ' + e.message;
    message.className = 'mt-3 text-center fw-semibold text-danger';
  }
}

document.querySelectorAll('[data-category]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-category]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    renderMenu();
  });
});

document.getElementById('searchInput').addEventListener('input', renderMenu);
document.getElementById('submitBtn').addEventListener('click', submitOrder);

renderMenu();
renderCart();
renderCart();
