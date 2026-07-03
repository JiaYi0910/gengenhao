import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyBJ7FSvcaZjwWmWAjAmt9grWhzPYCwaTNQ",
  authDomain: "gengenhao-coffee.firebaseapp.com",
  projectId: "gengenhao-coffee", 
  storageBucket: "gengenhao-coffee.firebasestorage.app",
  messagingSenderId: "236932259007",
  appId: "1:236932259007:web:3b93dfdfd9d94447e2ba0a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 全域變數，存放從雲端抓下來的商品
let allProducts = [];

window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById("splash-screen");
  if (splash) {
    setTimeout(() => { splash.style.animation = 'fadeOut 1s ease forwards'; }, 4000);
    setTimeout(() => { splash.remove(); }, 5000);
  }
});

document.getElementById('btn-confirm-friend').addEventListener('click', () => {
  document.getElementById('line-friend-check').style.display = 'none';
  document.getElementById('menu-wrapper').style.display = 'block';
});

const coffeeContainer = document.getElementById('coffee-container');
const searchInput = document.getElementById('searchInput');
const filterRoast = document.getElementById('filterRoast');
const filterOrigin = document.getElementById('filterOrigin');

// === 關鍵修改：從 Firebase 即時監聽商品資料 ===
// 這裡我們加了條件：status 必須等於 "上架"
const q = query(collection(db, "products"), where("status", "==", "上架"));

onSnapshot(q, (querySnapshot) => {
  allProducts = [];
  querySnapshot.forEach((doc) => {
    allProducts.push({ id: doc.id, ...doc.data() });
  });
  // 資料有變動時，自動重新篩選與渲染
  filterProducts();
});

// 搜尋篩選邏輯
searchInput.addEventListener('input', filterProducts);
filterRoast.addEventListener('change', filterProducts);
filterOrigin.addEventListener('change', filterProducts);

function filterProducts() {
  const keyword = searchInput.value.trim().toLowerCase();
  const roast = filterRoast.value;
  const origin = filterOrigin.value;

  const filtered = allProducts.filter(p => {
    // 預防欄位為 undefined 的安全處理
    const name = p.name || '';
    const pOrigin = p.origin || '';
    const roastLevel = p.roast_level || '';
    const processMethod = p.process_method || '';
    const flavorNotes = p.flavor_notes || '';

    const matchKeyword =
      name.toLowerCase().includes(keyword) ||
      pOrigin.toLowerCase().includes(keyword) ||
      roastLevel.toLowerCase().includes(keyword) ||
      processMethod.toLowerCase().includes(keyword) ||
      flavorNotes.toLowerCase().includes(keyword);

    const matchRoast = roast === '' || roastLevel === roast;
    const matchOrigin = origin === '' || pOrigin.includes(origin);

    return matchKeyword && matchRoast && matchOrigin;
  });

  renderProducts(filtered);
}

function renderProducts(products) {
  coffeeContainer.innerHTML = '';
  if (products.length === 0) {
    coffeeContainer.innerHTML = '<p>查無商品</p>';
  } else {
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-title">${product.name}</div>
        <div class="product-price">NT$${product.price}</div>
        <div class="product-info"><b>烘焙度：</b>${product.roast_level || '無'}</div>
        <div class="product-info"><b>產地：</b>${product.origin || '無'}</div>
        <div class="product-info"><b>處理方式：</b>${product.process_method || '無'}</div>
        <div class="product-info"><b>風味：</b>${product.flavor_notes || '無'}</div>
      `;
      coffeeContainer.appendChild(card);
    });
  }
}

// Cookie 同意條款（維持原樣）
const consentEl = document.getElementById('cookie-consent');
const acceptBtn = document.getElementById('accept-cookie-btn');
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}
if (getCookie('cookieConsent') === 'true') {
  consentEl.style.display = 'none';
} else {
  if (consentEl) consentEl.style.display = 'flex';
}
if (acceptBtn) {
  acceptBtn.addEventListener('click', () => {
    setCookie('cookieConsent', 'true', 365);
    consentEl.style.display = 'none';
  });
}