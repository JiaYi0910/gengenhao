window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById("splash-screen");

  if (splash) {
    // 4 秒後觸發淡出動畫
    setTimeout(() => {
      splash.style.animation = 'fadeOut 1s ease forwards';
    }, 4000);

    // 5 秒後從 DOM 中移除（等動畫播完）
    setTimeout(() => {
      splash.remove();
    }, 5000);
  }
});

document.getElementById('btn-confirm-friend').addEventListener('click', () => {
  // 點擊按鈕後，隱藏好友提醒區，顯示菜單區
  document.getElementById('line-friend-check').style.display = 'none';
  document.getElementById('menu-wrapper').style.display = 'block';
});

  // === 商品資料（改成前端靜態）===
  const allProducts = [
  {
    id: '1',
    name: '日曬耶加雪菲',
    roast_level: '中淺焙',
    origin: '衣索比亞/沃卡',
    variety: '原生種',
    process_method: '日曬',
    flavor_notes: '莓果/花香/柑橘/葡萄柚/黑李',
    price: 900
  },
  {
    id: '2',
    name: '單一義式',
    roast_level: '淺焙',
    origin: '瓜地馬拉',
    variety: '阿拉比卡',
    process_method: '水洗',
    flavor_notes: '木質/木頭',
    price: 700
  },
  {
    id: '3',
    name: '黃金曼特寧',
    roast_level: '中深焙',
    origin: '印尼',
    variety: '阿拉比卡',
    process_method: '水洗',
    flavor_notes: '木頭/木質/堅果/口感厚實',
    price: 900
  },
  {
    id: '4',
    name: '2012陳年曼特寧',
    roast_level: '中焙',
    origin: '印尼/蘇門答臘島',
    variety: '阿拉比卡/鐵比卡',
    process_method: '特殊厭養',
    flavor_notes: '普洱茶/低酸度/口感厚實/木質',
    price: 1200
  },
  {
    id: '5',
    name: '征服者',
    roast_level: '中焙',
    origin: '哥斯大黎加/拉米尼塔',
    variety: '卡度拉/卡度艾',
    process_method: '水洗',
    flavor_notes: '黑巧克力/奶油感/烏龍茶韻/豐富油脂',
    price: 1000
  },
  {
    id: '6',
    name: '臺灣特富野',
    roast_level: '淺焙',
    origin: '臺灣/阿里山/特富野',
    variety: '鐵筆卡',
    process_method: '蜜處理',
    flavor_notes: '巧克力/堅果/烏龍茶/柑橘',
    price: 2000
  },
  {
    id: '7',
    name: '艾伯',
    roast_level: '中淺焙',
    origin: '衣索比亞/西達摩/艾伯',
    variety: '原生種',
    process_method: '日曜',
    flavor_notes: '楊桃乾/可可/藍莓果醬/葡萄乾',
    price: 1200
  },
  {
    id: '8',
    name: '仲夏夜之月',
    roast_level: '淺焙',
    origin: '衣索比亞/耶加雪菲',
    variety: '原生種',
    process_method: '雙厭氧水洗',
    flavor_notes: '紫羅蘭/草莓/水蜜桃/柑橘/玫瑰花',
    price: 1400
  },
  {
    id: '9',
    name: '尤加利',
    roast_level: '中淺焙',
    origin: '盧安達/尤加利處理廠',
    variety: '波旁',
    process_method: '水洗',
    flavor_notes: '黑莓/橙皮/蔗糖/檸檬草/',
    price: 1100
  },
  {
    id: '10',
    name: '紅圈計劃辛巴',
    roast_level: '淺焙',
    origin: '衣索比亞/肯亞/辛巴處理廠',
    variety: '藝伎',
    process_method: '水洗',
    flavor_notes: '蘋果/檸檬/白花/甜橙/黑醋栗',
    price: 1300
  },
  {
    id: '11',
    name: '班奇馬吉',
    roast_level: '中淺焙',
    origin: '衣索比亞/瑰夏村/班奇馬吉',
    variety: '藝伎',
    process_method: '酒香日曬',
    flavor_notes: '草莓/芒果/百香果/水果酒/酒漬櫻桃',
    price: 1300
  },
  {
    id: '12',
    name: '花間牡丹',
    roast_level: '中淺焙',
    origin: '衣索比亞/古吉/罕貝拉',
    variety: '原生種',
    process_method: '日曬慢乾',
    flavor_notes: '甜桃/黑醋栗/枇杷/荔枝/蜂槳',
    price: 1600
  },
  {
    id: '13',
    name: '木樨',
    roast_level: '淺焙',
    origin: '哥倫比亞/維拉',
    variety: '卡斯提優',
    process_method: '厭氧日曬',
    flavor_notes: '桂花/百香果/葡萄柚/甜菊',
    price: 2200
  },
  {
    id: '14',
    name: '牡丹藝伎',
    roast_level: '淺焙',
    origin: '衣索比亞/古吉',
    variety: '藝伎',
    process_method: '水洗',
    flavor_notes: '牡丹/紫羅蘭/柚子/水蜜桃/甜橙',
    price: 2400
  },
  {
    id: '15',
    name: '蜜桃玫瑰',
    roast_level: '淺焙',
    origin: '衣索比亞/西達摩',
    variety: '原生種',
    process_method: '雙重厭氧蜜處理',
    flavor_notes: '玫瑰/白桃/荔枝/甜桃/蘋果青茶',
    price: 1800
  },
  {
    id: '16',
    name: '荔枝果茶',
    roast_level: '淺焙',
    origin: '衣索比亞 西達摩',
    variety: '原生種',
    process_method: '雙重厭氧蜜處理',
    flavor_notes: '白桃/荔枝/水蜜桃/水果茶',
    price: 1800
  },
  {
    id: '17',
    name: '雙莓繽紛',
    roast_level: '淺焙',
    origin: '哥倫比亞/維拉',
    variety: '卡斯提優',
    process_method: '雙厭氧熱衝擊',
    flavor_notes: '草莓/藍莓/水蜜桃/果汁',
    price: 2200
  },
  {
    id: '18',
    name: '粉蜜山竹',
    roast_level: '淺焙',
    origin: '哥倫比亞/金迪奧',
    variety: '卡斯提優',
    process_method: '蜜處理',
    flavor_notes: '草莓果醬/山竹/水蜜桃/草莓牛奶',
    price: 2200
  },
  {
    id: '19',
    name: '日出尼羅河',
    roast_level: '淺焙',
    origin: '衣索比亞 耶加雪菲',
    variety: 'Wolisho',
    process_method: '水洗',
    flavor_notes: '野薑花/檸檬草/水蜜桃/櫻桃/蜂蜜/伯爵茶',
    price: 1400
  },
  {
    id: '20',
    name: '耶加雪菲',
    roast_level: '淺焙',
    origin: '衣索比亞/耶加雪菲',
    variety: '原生種',
    process_method: '水洗',
    flavor_notes: '山茶花/甜橙/小紅莓/檸檬',
    price: 1000
  },
  {
    id: '21',
    name: '櫻桃可如蜜',
    roast_level: '淺焙',
    origin: '衣索比亞/西達摩/櫻桃處理廠',
    variety: '可如蜜',
    process_method: '水洗',
    flavor_notes: '茉莉/桃子/柚子/柑橘/',
    price: 1600
  },
  {
    id: '22',
    name: '果利綠標藝妓',
    roast_level: '淺焙',
    origin: '衣索比亞/瑰夏村/班奇馬吉',
    variety: '果利藝伎',
    process_method: '水洗',
    flavor_notes: '茉莉/橙花/百合/蘋果/檸檬',
    price: 1500
  },
  {
    id: '23',
    name: '阿拉比卡',
    roast_level: '中焙',
    origin: '衣索比亞/西達摩',
    variety: '原生種',
    process_method: '水洗',
    flavor_notes: '柑橘/紅糖/核桃/牛奶巧克力',
    price: 800
  },
  {
    id: '24',
    name: '艾利達',
    roast_level: '中淺焙',
    origin: '巴拿馬/波魁特/艾利達莊園',
    variety: '卡杜艾',
    process_method: '蜜處理',
    flavor_notes: '黑莓/黑李/蘋果/綜合水果乾/焦糖',
    price: 1400
  },
  {
    id: '25',
    name: '花神丸豆',
    roast_level: '中淺焙',
    origin: '瓜地馬拉/安提瓜/貝拉卡摩娜',
    variety: '波旁',
    process_method: '水洗',
    flavor_notes: '花香/檸檬/柑橘/餘韻甘甜',
    price: 1000
  },
  {
    id: '26',
    name: '杏桃芒果',
    roast_level: '淺焙',
    origin: '哥倫比亞/金迪奧/',
    variety: '卡斯提優',
    process_method: '風味',
    flavor_notes: '芒果牛奶/椰奶/桃子/杏桃',
    price: 2000
  },
  {
    id: '27',
    name: '深紅花語',
    roast_level: '淺焙',
    origin: '哥倫比亞/維拉',
    variety: '粉紅波旁',
    process_method: '水洗',
    flavor_notes: '花香/甜橙/莓果/蜜地瓜/柑橘/醃漬李子',
    price: 1400
  },



    // 堅果類
    {
      id: '101',
      name: '腰果',
      price: 200,
      roast_level: '',  // 堅果不適用烘焙度，空字串即可
      origin: '越南',
      variety: '',
      process_method: '',
      flavor_notes: '200克',
    },
    {
      id: '102',
      name: '杏仁',
      price: 100,
      roast_level: '',
      origin: '美國',
      variety: '',
      process_method: '',
      flavor_notes: '200克',
    },
    {
      id: '103',
      name: '夏威夷果',
      price: 250,
      roast_level: '',
      origin: '澳洲',
      variety: '',
      process_method: '',
      flavor_notes: '200克',
    },
    {
      id: '104',
      name: '核桃',
      price: 100,
      roast_level: '',
      origin: '美國',
      variety: '',
      process_method: '',
      flavor_notes: '100克',
    },
    {
      id: '105',
      name: '南瓜子',
      price: 100,
      roast_level: '',
      origin: '中國大陸',
      variety: '',
      process_method: '',
      flavor_notes: '200克',
    },
  ];

  const coffeeContainer = document.getElementById('coffee-container');
const nutsContainer = document.getElementById('nuts-container');
const searchInput = document.getElementById('searchInput');
const filterRoast = document.getElementById('filterRoast');
const filterOrigin = document.getElementById('filterOrigin');
const packagingModal = document.getElementById('packagingModal');
const packagingSelect = document.getElementById('packagingSelect');
let selectedProduct = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 初始載入顯示全部商品
renderProducts(allProducts);

// 搜尋篩選
searchInput.addEventListener('input', filterProducts);
filterRoast.addEventListener('change', filterProducts);
filterOrigin.addEventListener('change', filterProducts);

function filterProducts() {
  const keyword = searchInput.value.trim().toLowerCase();
  const roast = filterRoast.value;
  const origin = filterOrigin.value;

  const filtered = allProducts.filter(p => {
    const matchKeyword =
      p.name.toLowerCase().includes(keyword) ||
      p.origin.toLowerCase().includes(keyword) ||
      p.roast_level.toLowerCase().includes(keyword) ||
      p.variety.toLowerCase().includes(keyword) ||
      p.process_method.toLowerCase().includes(keyword) ||
      p.flavor_notes.toLowerCase().includes(keyword);

    // 特別處理「堅果」選項（roast_level 為空）
    const isNut = Number(p.id) >= 100;
    const matchRoast =
      roast === '' || 
      (roast === '堅果' && isNut) ||
      (roast !== '堅果' && p.roast_level === roast);

    const matchOrigin = origin === '' || p.origin.includes(origin);

    return matchKeyword && matchRoast && matchOrigin;
  });

  renderProducts(filtered);
}


function renderProducts(products) {
  // 分類咖啡豆和堅果
  const coffeeProducts = products.filter(p => Number(p.id) < 100);
  const nutsProducts = products.filter(p => Number(p.id) >= 100);

  // 渲染咖啡豆
  coffeeContainer.innerHTML = '';
  if (coffeeProducts.length === 0) {
    coffeeContainer.innerHTML = '<p>查無商品</p>';
  } else {
    coffeeProducts.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-title">${product.name}</div>
        <div class="product-price">NT$${product.price}</div>
        <div class="product-info"><b>烘焙度：</b>${product.roast_level || '無'}</div>
        <div class="product-info"><b>產地：</b>${product.origin}</div>
        <div class="product-info"><b>品種：</b>${product.variety || '無'}</div>
        <div class="product-info"><b>處理方式：</b>${product.process_method || '無'}</div>
        <div class="product-info"><b>風味：</b>${product.flavor_notes}</div>
      `;
      coffeeContainer.appendChild(card);
    });
  }

  // 渲染堅果
  nutsContainer.innerHTML = '';
  if (nutsProducts.length === 0) {
    nutsContainer.innerHTML = '<p>查無商品</p>';
  } else {
    nutsProducts.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-title">${product.name}</div>
        <div class="product-price">NT$${product.price}</div>
        <div class="product-info"><b>產地：</b>${product.origin}</div>
        <div class="product-info"><b>重量：</b>${product.flavor_notes}</div>
      `;
      nutsContainer.appendChild(card);
    });
  }
}



  // Cookie 同意條款
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
    consentEl.style.display = 'flex';
  }

  acceptBtn.addEventListener('click', () => {
    setCookie('cookieConsent', 'true', 365);
    consentEl.style.display = 'none';
  });

