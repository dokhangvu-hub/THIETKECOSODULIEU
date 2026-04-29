// ============ DATA ============
const CARS = [
  {id:1,name:'Camry',type:'Sedan',year:2024,color:'Trắng/Đen/Đỏ/Bạc',price:1235000000,icon:'🚗',badge:'HOT',engine:'2.5L Hybrid',seats:5,fuel:'Hybrid',desc:'Toyota Camry 2024 - Mẫu sedan hạng D đẳng cấp với thiết kế thể thao, nội thất sang trọng và công nghệ hybrid tiên tiến. Tiêu hao nhiên liệu chỉ 5.6L/100km.',colors:['Trắng','Đen','Đỏ','Bạc'],available:true},
  {id:2,name:'Corolla Cross',type:'SUV',year:2024,color:'Trắng/Đen/Xám/Bạc',price:856000000,icon:'🚙',badge:'NEW',engine:'1.8L Hybrid',seats:5,fuel:'Hybrid',desc:'Corolla Cross 2024 - Crossover đô thị thông minh với công nghệ hybrid thế hệ mới. Thiết kế trẻ trung, tiết kiệm nhiên liệu vượt trội.',colors:['Trắng','Đen','Xám','Bạc'],available:true},
  {id:3,name:'Fortuner',type:'SUV',year:2024,color:'Trắng/Đen/Bạc',price:1125000000,icon:'🏎',badge:'HOT',engine:'2.8L Diesel 4WD',seats:7,fuel:'Diesel',desc:'Fortuner 2024 - SUV 7 chỗ đa địa hình, sức mạnh 204 mã lực, cầu 4WD thông minh. Lựa chọn hoàn hảo cho gia đình năng động.',colors:['Trắng','Đen','Bạc'],available:true},
  {id:4,name:'RAV4',type:'SUV',year:2024,color:'Đỏ/Trắng/Đen/Xanh lam',price:1095000000,icon:'🚘',badge:'NEW',engine:'2.5L Hybrid AWD',seats:5,fuel:'Hybrid',desc:'RAV4 2024 - SUV Hybrid AWD thế hệ mới với thiết kế mạnh mẽ, cabin rộng rãi và hệ truyền động hybrid e-Four tiên tiến.',colors:['Đỏ','Trắng','Đen','Xanh lam'],available:true},
  {id:5,name:'Vios',type:'Sedan',year:2024,color:'Trắng/Bạc/Đen/Vàng cát',price:568000000,icon:'🏁',badge:'',engine:'1.5L CVT',seats:5,fuel:'Xăng',desc:'Toyota Vios 2024 - Sedan hạng B tiết kiệm và bền bỉ. Được bình chọn là xe bán chạy nhất Việt Nam nhiều năm liền.',colors:['Trắng','Bạc','Đen','Vàng cát'],available:true},
  {id:6,name:'Yaris Cross',type:'SUV',year:2024,color:'Trắng/Đen/Xanh/Đỏ',price:668000000,icon:'🚗',badge:'NEW',engine:'1.5L Hybrid',seats:5,fuel:'Hybrid',desc:'Yaris Cross 2024 - Mini SUV Hybrid trẻ trung với thiết kế cá tính, tiết kiệm nhiên liệu tuyệt vời, phù hợp đô thị.',colors:['Trắng','Đen','Xanh','Đỏ'],available:true},
  {id:7,name:'Hilux',type:'Pickup',year:2024,color:'Trắng/Bạc/Xám/Đen',price:878000000,icon:'🛻',badge:'',engine:'2.8L Diesel 4WD',seats:5,fuel:'Diesel',desc:'Hilux 2024 - Pickup truck bán tải mạnh mẽ, tải trọng 1 tấn, 4WD địa hình. Xe bán tải bán chạy nhất thế giới.',colors:['Trắng','Bạc','Xám','Đen'],available:true},
  {id:8,name:'Land Cruiser 300',type:'SUV',year:2024,color:'Trắng/Đen/Bạc/Vàng',price:4370000000,icon:'🏆',badge:'HOT',engine:'3.5L Twin Turbo V6',seats:7,fuel:'Xăng',desc:'Land Cruiser 300 - Biểu tượng SUV off-road luxury của Toyota. Động cơ V6 Twin Turbo 415 mã lực, địa hình khắc nghiệt không giới hạn.',colors:['Trắng','Đen','Bạc','Vàng'],available:true},
  {id:9,name:'Veloz Cross',type:'MPV',year:2024,color:'Trắng/Đen/Xám/Bạc',price:698000000,icon:'🚐',badge:'NEW',engine:'1.5L CVT',seats:7,fuel:'Xăng',desc:'Veloz Cross 2024 - MPV 7 chỗ thiết kế crossover, cabin rộng rãi nhất phân khúc, an toàn 5 sao ASEAN NCAP.',colors:['Trắng','Đen','Xám','Bạc'],available:true},
  {id:10,name:'Innova Cross',type:'MPV',year:2024,color:'Trắng/Đen/Bạc',price:870000000,icon:'🚌',badge:'HOT',engine:'2.0L Hybrid',seats:8,fuel:'Hybrid',desc:'Innova Cross 2024 - MPV hybrid cao cấp phiên bản mới hoàn toàn. Thiết kế hiện đại, công nghệ Toyota New Generation Architecture.',colors:['Trắng','Đen','Bạc'],available:true},
  {id:11,name:'Rush',type:'SUV',year:2024,color:'Trắng/Đen/Đỏ/Xám',price:668000000,icon:'🚗',badge:'',engine:'1.5L Dual VVT-i',seats:7,fuel:'Xăng',desc:'Rush 2024 - SUV 7 chỗ cỡ nhỏ gọn phù hợp đô thị. Thiết kế thể thao, tiêu hao nhiên liệu tiết kiệm.',colors:['Trắng','Đen','Đỏ','Xám'],available:true},
  {id:12,name:'Alphard',type:'MPV',year:2024,color:'Đen/Trắng/Bạc',price:4268000000,icon:'👑',badge:'HOT',engine:'2.5L Hybrid Executive',seats:7,fuel:'Hybrid',desc:'Alphard 2024 - Minivan luxury hàng đầu thế giới. Ghế hạng thương gia, nội thất đẳng cấp, biểu tượng của quyền quý.',colors:['Đen','Trắng','Bạc'],available:true}
];
 
const SERVICES = [
  {icon:'🔧',name:'Bảo Dưỡng Định Kỳ',desc:'Kiểm tra tổng quát, thay dầu động cơ, lọc gió, lọc nhiên liệu, bổ sung các chất lỏng cần thiết theo khuyến nghị nhà sản xuất.',price:'Từ 500,000đ',duration:'2-4 tiếng'},
  {icon:'🏥',name:'Sửa Chữa Chính Hãng',desc:'Chẩn đoán và sửa chữa mọi hư hỏng với phụ tùng Toyota chính hãng 100%, bảo hành 12 tháng cho phụ tùng thay thế.',price:'Từ 1,200,000đ',duration:'Theo hư hỏng'},
  {icon:'⚙️',name:'Thay Phụ Tùng',desc:'Kho phụ tùng Toyota chính hãng đầy đủ cho tất cả dòng xe. Cam kết phụ tùng xịn, giá niêm yết minh bạch.',price:'Theo phụ tùng',duration:'1-2 tiếng'},
  {icon:'🎨',name:'Sơn & Đồng Bảo Hiểm',desc:'Phục hồi thẩm mỹ thân xe, sơn lại màu gốc hoặc đổi màu. Buồng sơn tiêu chuẩn, màu sơn OEM chính xác.',price:'Từ 3,000,000đ',duration:'3-7 ngày'},
  {icon:'✨',name:'Rửa Xe & Detailing',desc:'Vệ sinh nội ngoại thất chuyên sâu, đánh bóng sơn, phủ ceramic coating nano bảo vệ bề mặt xe lên đến 5 năm.',price:'Từ 250,000đ',duration:'2-6 tiếng'},
  {icon:'🛡️',name:'Kiểm Tra An Toàn',desc:'Kiểm tra toàn bộ hệ thống an toàn: phanh, lốp, đèn, túi khí, camera, cảm biến. Cấp chứng nhận an toàn.',price:'Miễn phí',duration:'1 tiếng'},
  {icon:'💡',name:'Nâng Cấp Phụ Kiện',desc:'Lắp đặt phụ kiện chính hãng Toyota: camera 360, cảm biến đỗ xe, màn hình Android, dán phim cách nhiệt, ốp thân...',price:'Theo phụ kiện',duration:'2-4 tiếng'},
  {icon:'🔋',name:'Dịch Vụ Hybrid',desc:'Kiểm tra, bảo dưỡng và thay pin Hybrid chuyên biệt. Kỹ thuật viên được đào tạo chuyên sâu về xe điện/hybrid Toyota.',price:'Từ 2,000,000đ',duration:'3-5 tiếng'},
  {icon:'🚗',name:'Cho Thuê Xe Thay Thế',desc:'Miễn phí xe cho thuê trong thời gian sửa chữa trên 3 ngày. Đội xe Toyota đa dạng từ Vios đến Camry.',price:'Miễn phí (≥3 ngày)',duration:'Trong thời gian sửa'}
];
 
// ============ STATE ============
let currentUser = null;
let cart = [];
let orders = [];
let currentDetail = null;
let detailQty = 1;
let couponDiscount = 0;
let selectedPayment = 'cash';
 
// ============ INIT ============
window.onload = () => {
  loadFromStorage();
  renderFeatured();
  renderCatalog();
  renderServices();
  if(currentUser) { showApp(); } else { showLogin(); }
};
 
function loadFromStorage() {
  try {
    const u = sessionStorage.getItem('toyotaUser');
    if(u) currentUser = JSON.parse(u);
    const c = sessionStorage.getItem('toyotaCart');
    if(c) cart = JSON.parse(c);
    const o = sessionStorage.getItem('toyotaOrders');
    if(o) orders = JSON.parse(o);
  } catch(e){}
}
function saveToStorage() {
  try {
    if(currentUser) sessionStorage.setItem('toyotaUser', JSON.stringify(currentUser));
    sessionStorage.setItem('toyotaCart', JSON.stringify(cart));
    sessionStorage.setItem('toyotaOrders', JSON.stringify(orders));
  } catch(e){}
}
 
// ============ AUTH ============
function showLogin() {
  const login = document.getElementById('loginPage');

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  login.style.display = 'block'; // 👈 bật lại
  login.classList.add('active');

  document.getElementById('mainNav').style.display = 'none';
}
function showApp() {
  document.getElementById('mainNav').style.display = 'flex';

  const login = document.getElementById('loginPage');
  login.classList.remove('active');

  // 💥 thêm dòng này để chắc chắn nó biến mất
  login.style.display = 'none';

  updateAuthBtn();
  updateCartBadge();

  goPage('home');
}
function switchTab(t) {
  document.getElementById('tabLogin').classList.toggle('active',t==='login');
  document.getElementById('tabRegister').classList.toggle('active',t==='register');
  document.getElementById('formLogin').style.display = t==='login'?'block':'none';
  document.getElementById('formRegister').style.display = t==='register'?'block':'none';
}
function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  if(!email||!pass){toast('Vui lòng nhập đầy đủ thông tin','error');return;}
  if(pass.length < 6){toast('Mật khẩu tối thiểu 6 ký tự','error');return;}
  currentUser = {name: email.split('@')[0].replace(/\./g,' ').replace(/\b\w/g,c=>c.toUpperCase()), email, phone:'0912 345 678', address:''};
  saveToStorage();
  toast('Đăng nhập thành công! Chào '+currentUser.name,'success');
  showApp();
}
function doRegister() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const pass = document.getElementById('regPass').value;
  const pass2 = document.getElementById('regPass2').value;
  if(!name||!email||!pass){toast('Vui lòng điền đầy đủ thông tin','error');return;}
  if(pass.length<6){toast('Mật khẩu tối thiểu 6 ký tự','error');return;}
  if(pass!==pass2){toast('Mật khẩu xác nhận không khớp','error');return;}
  currentUser = {name, email, phone, address:''};
  saveToStorage();
  toast('Đăng ký thành công! Chào mừng '+name,'success');
  showApp();
}
function socialLogin(provider) {
  currentUser = {name:'Khách Hàng '+provider, email:'user@'+provider.toLowerCase()+'.com', phone:'', address:''};
  saveToStorage();
  toast('Đăng nhập '+provider+' thành công!','success');
  showApp();
}
function doLogout() {
  currentUser = null;
  sessionStorage.removeItem('toyotaUser');
  toast('Đã đăng xuất','info');
  showLogin();
}
function handleAuthBtn() {
  if(currentUser) goPage('profile');
  else showLogin();
}
function updateAuthBtn() {
  const btn = document.getElementById('authBtn');
  if(currentUser) {btn.textContent='👤 '+currentUser.name.split(' ')[0];}
  else {btn.textContent='Đăng Nhập';}
}
function showForgot() { toast('Link đặt lại mật khẩu đã gửi về email của bạn','info'); }
 
// ============ NAVIGATION ============
function goPage(page) {
  if (!currentUser && page !== 'login') {
    showLogin();
    return;
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const map = {
    home: 'homePage',
    catalog: 'catalogPage',
    detail: 'detailPage',
    cart: 'cartPage',
    checkout: 'checkoutPage',
    success: 'successPage',
    services: 'servicesPage',
    profile: 'profilePage'
  };

  document.getElementById(map[page] || 'homePage').classList.add('active');

  window.scrollTo(0, 0);
}
 
// ============ RENDER ============
function renderFeatured() {
  const featured = CARS.filter(c=>c.badge==='HOT').slice(0,4);
  document.getElementById('featuredGrid').innerHTML = featured.map(carHTML).join('');
}
function renderCatalog() {
  const q = (document.getElementById('searchInput')?.value||'').toLowerCase();
  const type = document.getElementById('filterType')?.value||'';
  const sort = document.getElementById('filterSort')?.value||'default';
  const year = document.getElementById('filterYear')?.value||'';
  const color = document.getElementById('filterColor')?.value||'';
  let cars = CARS.filter(c=>{
    if(q && !c.name.toLowerCase().includes(q) && !c.type.toLowerCase().includes(q)) return false;
    if(type && c.type!==type) return false;
    if(year && c.year!=year) return false;
    if(color && !c.color.includes(color)) return false;
    return true;
  });
  if(sort==='price-asc') cars.sort((a,b)=>a.price-b.price);
  else if(sort==='price-desc') cars.sort((a,b)=>b.price-a.price);
  else if(sort==='name') cars.sort((a,b)=>a.name.localeCompare(b.name));
  document.getElementById('catalogCount').textContent = `Tìm thấy ${cars.length} xe`;
  document.getElementById('catalogGrid').innerHTML = cars.length ? cars.map(carHTML).join('') : '<p style="color:var(--gray);grid-column:1/-1;text-align:center;padding:40px">Không tìm thấy xe phù hợp 😔</p>';
}
function carHTML(c) {
  const price = (c.price/1000000).toFixed(0);
  return `<div class="car-card" onclick="viewDetail(${c.id})">
    <div class="car-img-bg">${c.icon}
      ${c.badge==='HOT'?'<span class="car-badge-hot">🔥 HOT</span>':c.badge==='NEW'?'<span class="car-badge-new">✨ MỚI</span>':''}
    </div>
    <div class="car-info">
      <div class="car-name">${c.name}</div>
      <div class="car-type">${c.type} · ${c.year}</div>
      <div class="car-specs">
        <span class="car-spec">🪑 ${c.seats} chỗ</span>
        <span class="car-spec">⛽ ${c.fuel}</span>
        <span class="car-spec">⚙️ ${c.engine.split(' ')[0]}</span>
      </div>
      <div class="car-price">${price} TRIỆU<span class="car-price-sub"> VNĐ</span></div>
      <div class="car-actions">
        <button class="btn-sm btn-sm-red" onclick="event.stopPropagation();addToCart(${c.id})">🛒 Đặt mua</button>
        <button class="btn-sm btn-sm-outline" onclick="event.stopPropagation();viewDetail(${c.id})">Chi tiết</button>
      </div>
    </div>
  </div>`;
}
 
function viewDetail(id) {
  const car = CARS.find(c=>c.id===id);
  if(!car) return;
  currentDetail = car;
  detailQty = 1;
  document.getElementById('detailImg').innerHTML = `<div style="font-size:140px">${car.icon}</div>`;
  document.getElementById('detailName').textContent = car.name;
  document.getElementById('detailTypeLabel').textContent = car.type + ' · ' + car.year;
  document.getElementById('detailPrice').textContent = (car.price/1000000).toFixed(0) + ' Triệu VNĐ';
  document.getElementById('detailBadge').textContent = car.badge ? (car.badge==='HOT'?'🔥 BÁN CHẠY':'✨ MỚI 2024') : 'TOYOTA 2024';
  document.getElementById('detailDesc').textContent = car.desc;
  document.getElementById('detailQty').textContent = 1;
  document.getElementById('detailSpecs').innerHTML = `
    <div class="spec-item"><div class="spec-key">Động cơ</div><div class="spec-val">${car.engine}</div></div>
    <div class="spec-item"><div class="spec-key">Nhiên liệu</div><div class="spec-val">${car.fuel}</div></div>
    <div class="spec-item"><div class="spec-key">Số chỗ</div><div class="spec-val">${car.seats} người</div></div>
    <div class="spec-item"><div class="spec-key">Phân loại</div><div class="spec-val">${car.type}</div></div>`;
  document.getElementById('detailSpecs2').innerHTML = `
    <div class="spec-item"><div class="spec-key">Năm SX</div><div class="spec-val">${car.year}</div></div>
    <div class="spec-item"><div class="spec-key">Màu có sẵn</div><div class="spec-val">${car.colors.length} màu</div></div>
    <div class="spec-item"><div class="spec-key">Bảo hành</div><div class="spec-val">3 năm / 100K km</div></div>
    <div class="spec-item"><div class="spec-key">Trạng thái</div><div class="spec-val" style="color:#4caf50">Còn hàng ✓</div></div>`;
  goPage('detail');
}
function changeQty(d) {
  detailQty = Math.max(1,detailQty+d);
  document.getElementById('detailQty').textContent = detailQty;
}
function addToCartFromDetail() {
  if(!currentDetail) return;
  addToCart(currentDetail.id, detailQty);
  goPage('cart');
}
function addToCart(id, qty=1) {
  const car = CARS.find(c=>c.id===id);
  if(!car) return;
  const existing = cart.find(i=>i.id===id);
  if(existing) existing.qty += qty;
  else cart.push({...car, qty});
  saveToStorage();
  updateCartBadge();
  toast(`${car.name} đã thêm vào giỏ hàng! 🛒`,'success');
}
function removeFromCart(id) {
  cart = cart.filter(i=>i.id!==id);
  saveToStorage();
  updateCartBadge();
  renderCart();
}
function updateCartQty(id, qty) {
  const item = cart.find(i=>i.id===id);
  if(item) { item.qty = Math.max(1, qty); saveToStorage(); updateCartBadge(); renderCart(); }
}
function updateCartBadge() {
  const total = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cartBadge').textContent = total;
}
 
function renderCart() {
  const listEl = document.getElementById('cartList');
  const sumEl = document.getElementById('cartSummaryRows');
  if(!cart.length) {
    listEl.innerHTML = `<div class="empty-state"><div class="empty-icon">🛒</div><h3 style="font-size:20px;margin-bottom:8px">Giỏ hàng trống</h3><p>Hãy chọn chiếc xe Toyota yêu thích của bạn!</p><button class="btn-primary" style="margin-top:20px" onclick="goPage('catalog')">Khám Phá Xe Ngay</button></div>`;
    sumEl.innerHTML='<p style="color:var(--gray);font-size:14px;text-align:center">Chưa có sản phẩm</p>';
    document.getElementById('cartTotal').textContent='0đ';
    return;
  }
  listEl.innerHTML = cart.map(item=>`
    <div class="cart-item">
      <div class="cart-item-img">${item.icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">Toyota ${item.name}</div>
        <div class="cart-item-type">${item.type} · ${item.year} · ${item.engine}</div>
        <div class="cart-item-price">${(item.price/1000000).toFixed(0)} Triệu VNĐ</div>
      </div>
      <div class="cart-item-right">
        <div style="display:flex;align-items:center;gap:8px">
          <button class="qty-btn" onclick="updateCartQty(${item.id},${item.qty-1})">−</button>
          <span style="font-weight:700;min-width:24px;text-align:center">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${item.id},${item.qty+1})">+</button>
        </div>
        <div style="font-weight:700;font-size:16px;color:var(--red)">${((item.price*item.qty)/1000000).toFixed(0)}M</div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">✕ Xóa</button>
      </div>
    </div>`).join('');
  const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const vat = subtotal * 0.1;
  const total = subtotal + vat;
  sumEl.innerHTML = `
    <div class="summary-row"><span>Tạm tính (${cart.length} xe)</span><span>${(subtotal/1000000).toFixed(0)}M</span></div>
    <div class="summary-row"><span>VAT 10%</span><span>${(vat/1000000).toFixed(0)}M</span></div>
    <div class="summary-row"><span>Phí giao xe</span><span style="color:#4caf50">Miễn phí</span></div>`;
  document.getElementById('cartTotal').textContent = (total/1000000).toFixed(0)+'M VNĐ';
}
 
function renderCheckout() {
  const itemsEl = document.getElementById('checkoutItems');
  const sumEl = document.getElementById('checkoutSummary');
  if(currentUser) {
    document.getElementById('ckName').value = currentUser.name||'';
    document.getElementById('ckEmail').value = currentUser.email||'';
    document.getElementById('ckPhone').value = currentUser.phone||'';
    document.getElementById('ckAddress').value = currentUser.address||'';
  }
  const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const vat = subtotal*0.1;
  const discount = couponDiscount;
  const total = subtotal+vat-discount;
  itemsEl.innerHTML = cart.map(i=>`<div class="summary-row"><span>${i.icon} ${i.name} ×${i.qty}</span><span>${((i.price*i.qty)/1000000).toFixed(0)}M</span></div>`).join('');
  sumEl.innerHTML = `
    <div class="summary-row"><span>Tạm tính</span><span>${(subtotal/1000000).toFixed(0)}M</span></div>
    <div class="summary-row"><span>VAT 10%</span><span>${(vat/1000000).toFixed(0)}M</span></div>
    ${discount?`<div class="summary-row"><span>Giảm giá</span><span style="color:#4caf50">-${(discount/1000000).toFixed(0)}M</span></div>`:''}
    <div class="summary-row"><span>Giao xe</span><span style="color:#4caf50">Miễn phí</span></div>
    <div class="summary-total"><span>TỔNG</span><span>${(total/1000000).toFixed(0)}M</span></div>`;
}
 
function selectPayment(el, val) {
  document.querySelectorAll('.payment-opt').forEach(o=>o.classList.remove('selected'));
  el.classList.add('selected');
  selectedPayment = val;
}
function applyCoupon() {
  const code = document.getElementById('couponCode').value.trim().toUpperCase();
  const msgEl = document.getElementById('couponMsg');
  const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const codes = {TOYOTA10:{pct:0.1,msg:'Giảm 10%'},HANOI50:{flat:50000000,msg:'Giảm 50 triệu'},VIP20:{pct:0.2,msg:'Giảm 20% (VIP)'}};
  if(codes[code]) {
    const c = codes[code];
    couponDiscount = c.pct ? subtotal*c.pct : c.flat;
    msgEl.innerHTML = `<span style="color:#4caf50">✅ ${c.msg} – Tiết kiệm ${(couponDiscount/1000000).toFixed(0)} triệu!</span>`;
    renderCheckout();
  } else {
    msgEl.innerHTML = `<span style="color:var(--red)">❌ Mã không hợp lệ. Thử: TOYOTA10, HANOI50, VIP20</span>`;
  }
}
function placeOrder() {
  const name = document.getElementById('ckName').value.trim();
  const email = document.getElementById('ckEmail').value.trim();
  const phone = document.getElementById('ckPhone').value.trim();
  const address = document.getElementById('ckAddress').value.trim();
  if(!name||!email||!phone||!address){toast('Vui lòng điền đầy đủ thông tin giao hàng','error');return;}
  if(!cart.length){toast('Giỏ hàng đang trống!','error');return;}
  const orderId = 'TYT-'+Date.now().toString().slice(-6);
  const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const total = subtotal*1.1 - couponDiscount;
  const order = {id:orderId,date:new Date().toLocaleDateString('vi-VN'),items:[...cart],total,name,phone,address,payment:selectedPayment,status:'Đang xử lý'};
  orders.unshift(order);
  cart = [];
  couponDiscount = 0;
  saveToStorage();
  updateCartBadge();
  document.getElementById('successOrderId').textContent = `Mã đơn hàng: ${orderId}`;
  goPage('success');
}
 
function renderServices() {
  document.getElementById('servicesGrid').innerHTML = SERVICES.map(s=>`
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <div class="service-name">${s.name}</div>
      <div class="service-desc">${s.desc}</div>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div class="service-price">${s.price}</div>
        <span class="tag">⏱ ${s.duration}</span>
      </div>
    </div>`).join('');
}
function bookService() {
  const name = document.getElementById('svcName').value.trim();
  const phone = document.getElementById('svcPhone').value.trim();
  const plate = document.getElementById('svcPlate').value.trim();
  const date = document.getElementById('svcDate').value;
  if(!name||!phone||!date){toast('Vui lòng điền đầy đủ thông tin','error');return;}
  toast(`✅ Đặt lịch thành công! Xe ${plate||'của bạn'} ngày ${date}. Chúng tôi sẽ xác nhận qua SĐT.`,'success');
  document.getElementById('svcName').value='';
  document.getElementById('svcPhone').value='';
  document.getElementById('svcPlate').value='';
  document.getElementById('svcDate').value='';
}
 
function renderProfile() {
  if(!currentUser) return;
  document.getElementById('profileName').textContent = currentUser.name;
  document.getElementById('profileEmail').textContent = currentUser.email;
  document.getElementById('profileAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
  document.getElementById('profileNameInput').value = currentUser.name||'';
  document.getElementById('profileEmailInput').value = currentUser.email||'';
  document.getElementById('profilePhoneInput').value = currentUser.phone||'';
  document.getElementById('addrDisplay').textContent = currentUser.address||'Chưa có địa chỉ';
  renderOrders();
}
function renderOrders() {
  const el = document.getElementById('orderList');
  if(!orders.length) {
    el.innerHTML = '<div style="text-align:center;padding:32px;color:var(--gray)"><div style="font-size:48px;margin-bottom:12px">📦</div><p>Bạn chưa có đơn hàng nào</p><button class="btn-primary" style="margin-top:16px" onclick="goPage(\'catalog\')">Mua Xe Ngay</button></div>';
    return;
  }
  el.innerHTML = orders.map(o=>`
    <div class="order-row">
      <div>
        <div class="order-id">${o.id} · ${o.items.map(i=>i.name).join(', ')}</div>
        <div class="order-date">📅 ${o.date} · ${o.items.length} xe · 💳 ${o.payment==='cash'?'Tiền mặt':o.payment==='transfer'?'Chuyển khoản':o.payment==='loan'?'Trả góp':'Thẻ tín dụng'}</div>
      </div>
      <div style="display:flex;align-items:center;gap:14px">
        <div style="font-weight:700;color:var(--red)">${(o.total/1000000).toFixed(0)}M</div>
        <span class="order-status ${o.status==='Hoàn thành'?'status-done':o.status==='Đã hủy'?'status-cancel':'status-pending'}">${o.status}</span>
      </div>
    </div>`).join('');
}
function switchProfileTab(tab, el) {
  document.querySelectorAll('[id^="profileTab-"]').forEach(t=>t.style.display='none');
  document.getElementById('profileTab-'+tab).style.display='block';
  document.querySelectorAll('.profile-nav-item').forEach(i=>i.classList.remove('active'));
  el.classList.add('active');
}
function saveProfile() {
  currentUser.name = document.getElementById('profileNameInput').value.trim();
  currentUser.phone = document.getElementById('profilePhoneInput').value.trim();
  saveToStorage();
  document.getElementById('profileName').textContent = currentUser.name;
  updateAuthBtn();
  toast('Đã lưu thông tin thành công','success');
}
function saveAddress() {
  const addr = document.getElementById('addrInput').value.trim();
  if(!addr){toast('Vui lòng nhập địa chỉ','error');return;}
  currentUser.address = addr;
  saveToStorage();
  document.getElementById('addrDisplay').textContent = addr;
  toast('Đã lưu địa chỉ','success');
}
function changePassword() {
  const old = document.getElementById('pwOld').value;
  const nw = document.getElementById('pwNew').value;
  const nw2 = document.getElementById('pwNew2').value;
  if(!old||!nw){toast('Vui lòng nhập đầy đủ','error');return;}
  if(nw.length<6){toast('Mật khẩu mới tối thiểu 6 ký tự','error');return;}
  if(nw!==nw2){toast('Mật khẩu xác nhận không khớp','error');return;}
  toast('Đổi mật khẩu thành công!','success');
  document.getElementById('pwOld').value='';
  document.getElementById('pwNew').value='';
  document.getElementById('pwNew2').value='';
}
 
// ============ TOAST ============
let toastTimer;
function toast(msg, type='info') {
  const el = document.getElementById('toast');
  const icons = {success:'✅',error:'❌',info:'ℹ️'};
  el.innerHTML = `${icons[type]||'ℹ️'} ${msg}`;
  el.className = `toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove('show'),3500);
}