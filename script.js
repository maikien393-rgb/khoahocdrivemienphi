/* =============================================
   TàiLiệuTốt — script.js
   Bao gồm:
     1. documentData  — mảng dữ liệu tài liệu (bạn chỉ cần sửa ở đây)
     2. renderCards   — tự động render Card từ mảng
     3. searchFilter  — tìm kiếm realtime
     4. scrollReveal  — hiệu ứng xuất hiện khi cuộn
     5. typingEffect  — hiệu ứng gõ chữ ở Hero
     6. Modal / Content Locker — logic mở khóa link Drive
============================================= */

/* ============================================
   1. DỮ LIỆU TÀI LIỆU
   ── Thêm object mới vào mảng để có thêm tài liệu.
   ── Chỉ cần sửa đây, giao diện tự cập nhật.
============================================= */
const documentData = [
  {
    id: 1,
    icon: "📐",
    tag: "Tiếng anh",
    title: "Khóa học 48 ngày mất gốc cô Mai Phương",
    description: "Đầy đủ nội dung 48 ngày học kèm bài tập",
    shopeeLink: "https://s.shopee.vn/2Vpjz5166L",
    driveLink: "https://48n-thptqg.blogspot.com/"
  },
  {
    id: 2,
    icon: "⚗️",
    tag: "Tiếng anh",
    title: "Khóa Toeic Cô Mai Phương",
    description: "Đầy đủ bài giảng kèm tài liệu và bài tập",
    shopeeLink: "https://s.shopee.vn/8pjjtDvghB",
    driveLink: "https://docs.google.com/spreadsheets/d/18BMckakbzYMVhLFwTYt6AqGDS0iKX2dVwNAcPpk_m7c/edit?usp=drivesdk"
  },
  {
    id: 3,
    icon: "💻",
    tag: "Tin học",
    title: "Khóa học chứng chỉ MOS",
    description: "Tài liệu cộng bài giảng chi tiết",
    shopeeLink: "https://www.tiktok.com/view/product/1733908624481551952?_d=f20b2722ab3cmd&_svg=1&chain_key=%7B%22t%22%3A1%2C%22k%22%3A%22000000000000000007656000335622932242%22%2C%22sc%22%3A%22copy%22%7D&encode_params=MIIBUwQMHa31MAe5qrZl04VrBIIBL3pxcg6_ZHZTcRQdQEqfktSwV1YAhHfQfC3vg4Ipk11GOfIzYChZyo-2RbGUwPLwC4wQ6OuEo2jvRLGs2pSgWmD4njoeQuxXlqGo9_OJEG2aNTcFNreOl2H72cxt1uZJkWVUnwmKsvzJhBbJ2mN2qrk-IqJq27lv70tTSoi-2-wR6WJlvRlOr_MZbFsDSjGVRqn5yZxFNBustnbcN6HtheTrnKX6gLZB1cZhGPzfKy6SIHHgq-wSC1p3xlZN9L-PBFrbxQN4AkPxpndBBvk7RtIykzDKabwrR0zv15EPyflI7cw4J3ZFqDOwwLCPWFCSut8QDyQcAf2oIcmwzbbohuB8KdFGUr3wbmLAXQbcAq8PNCIgnlQBm8hah4i8O0dKWMeQeIw2RJ71GTG7WjN2dQQQko8b5p2PZIOK6TVeOe_7LQ%3D%3D&og_info=%7B%22title%22%3A%22%C3%81o+Thun+Tay+Ng%E1%BA%AFn+C%E1%BB%95+B%E1%BA%A5t+%C4%90%E1%BB%91i+X%E1%BB%A9ng+K%E1%BA%BB+S%E1%BB%8Dc+Tr%E1%BB%85+Vai+Cho+N%E1%BB%AF+M%C3%B9a+H%C3%A8+Phong+C%C3%A1ch+M%E1%BB%9Bi+N%C3%B3ng+B%E1%BB%8Fng+G%E1%BB%A3i+C%E1%BA%A3m+Thu%E1%BA%A7n+Khi%E1%BA%BFt+%C3%94m+D%C3%A1ng+Thanh+L%E1%BB%8Bch+Tuy%E1%BB%87t+%C4%90%E1%BA%B9p%22%2C%22image%22%3A%22https%3A%2F%2Fp16-oec-general.tiktokcdn.com%2Ftos-maliva-i-o3syd03w52-us%2F74faad287bf44e9490f0ee9d7ab72bba~tplv-o3syd03w52-resize-jpeg%3A800%3A800.jpeg%3Fdr%3D15584%26t%3D555f072d%26ps%3D933b5bde%26shp%3D2408c917%26shcp%3D32ce9e9e%26idc%3Dmy%26from%3D604555543%22%7D&scene=pdp&share_app_id=1180&share_region=VN&timestamp=1782551496&trackParams=%7B%22enter_from_info%22%3A%22product_share_outside%22%2C%22source_page_type%22%3A%22product_share%22%2C%22enable_shop_tab_popup%22%3A1%7D&use_land_page=1&utm_campaign=client_share&utm_source=copy",
    driveLink: "https://drive.google.com/drive/folders/19TIcajH26y2uh5bV3vXxoqGb4D9eAQt7"
  },
  {
    id: 4,
    icon: "📊",
    tag: "Tiếng Anh",
    title: "Khóa ngữ pháp trọn đời cô Mai Phương",
    description: "Đầy đủ từ vựng kèm ngữ pháp.",
    shopeeLink: "https://s.shopee.vn/3g1hO9kdfO",
    driveLink: "https://docs.google.com/spreadsheets/d/1KJ38EgYzQOl-Friue5mxVuf12bPKGnijZp92l4Da5wY/edit?usp=sharing&usp=embed_facebook&usp=embed_facebook"
  },
  {
    id: 5,
    icon: "🇬🇧",
    tag: "Tiếng Anh",
    title: "IELTS Writing Task 2 – 50 mẫu",
    description: "50 bài mẫu band 7.0–8.5 phân tích từng câu, ghi chú từ vựng và cấu trúc.",
    shopeeLink: "https://s.shopee.vn/4AxxzBBSAl",
    driveLink: "https://docs.google.com/spreadsheets/d/1HOuMa-wIMPrtDJyGk8H5Umo1UbBaWhvJY4TsuQbw61s/edit?usp=drivesdk"
  },
  {
    id: 6,
    icon: "🧬",
    tag: "Sinh học",
    title: "Di truyền học phân tử – Tóm tắt",
    description: "Mindmap và bảng tóm tắt kiến thức DNA, RNA, phiên mã, dịch mã dễ học thuộc.",
    shopeeLink: "https://shope.ee/your_affiliate_link_6",
    driveLink: "https://drive.google.com/your_drive_link_6"
  },
  {
    id: 7,
    icon: "⚡",
    tag: "Vật lý",
    title: "Điện từ học – Bài giải mẫu",
    description: "30 bài giải chi tiết điện trường, từ trường và cảm ứng điện từ theo chuẩn ĐH.",
    shopeeLink: "https://shope.ee/your_affiliate_link_7",
    driveLink: "https://drive.google.com/your_drive_link_7"
  },
  {
    id: 8,
    icon: "📜",
    tag: "Lịch sử",
    title: "Lịch sử Việt Nam cận đại – Ôn thi",
    description: "Tóm lược các sự kiện, niên đại và câu hỏi tự luận ôn thi tốt nghiệp.",
    shopeeLink: "https://shope.ee/your_affiliate_link_8",
    driveLink: "https://drive.google.com/your_drive_link_8"
  },
  {
    id: 9,
    icon: "🏗️",
    tag: "Kỹ thuật",
    title: "Sức bền vật liệu – Công thức & Bài tập",
    description: "Toàn bộ công thức, sơ đồ nội lực và bài tập giải sẵn cho kỹ thuật xây dựng.",
    shopeeLink: "https://shope.ee/your_affiliate_link_9",
    driveLink: "https://drive.google.com/your_drive_link_9"
  },
];

/* ============================================
   2. RENDER CARDS
   Lặp qua documentData, tạo HTML cho mỗi Card
   và chèn vào #docGrid.
============================================= */
function renderCards(data) {
  const grid = document.getElementById('docGrid');
  const countEl = document.getElementById('resultCount');
  const noResults = document.getElementById('noResults');

  grid.innerHTML = ''; // xóa cũ

  if (data.length === 0) {
    noResults.classList.remove('hidden');
    countEl.textContent = '';
    return;
  }

  noResults.classList.add('hidden');
  countEl.textContent = `Hiển thị ${data.length} tài liệu`;

  data.forEach((doc, index) => {
    const card = document.createElement('div');
    card.className = 'doc-card';
    // Delay reveal theo thứ tự card
    card.style.transitionDelay = `${index * 60}ms`;
    card.innerHTML = `
      <span class="card-icon">${doc.icon}</span>
      <span class="card-tag">${doc.tag}</span>
      <h3 class="card-title">${doc.title}</h3>
      <p class="card-desc">${doc.description}</p>
      <button class="btn btn-card" data-id="${doc.id}">
        📖 Xem tài liệu
      </button>
    `;
    grid.appendChild(card);
  });

  // Gắn sự kiện cho tất cả nút card
  grid.querySelectorAll('.btn-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const doc = documentData.find(d => d.id === id);
      if (doc) openModal(doc);
    });
  });

  // Kích hoạt scroll reveal
  observeCards();
}

/* ============================================
   3. TÌM KIẾM REALTIME
============================================= */
document.getElementById('searchInput').addEventListener('input', function () {
  const q = this.value.toLowerCase().trim();
  const filtered = q
    ? documentData.filter(d =>
        d.title.toLowerCase().includes(q) ||
        d.tag.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q)
      )
    : documentData;
  renderCards(filtered);
});

/* ============================================
   4. SCROLL REVEAL (IntersectionObserver)
   Mỗi card fade+slide lên khi vào viewport.
============================================= */
function observeCards() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.doc-card').forEach(card => observer.observe(card));
}

/* ============================================
   5. TYPING EFFECT ở Hero
   Lần lượt gõ từng cụm từ rồi xóa đi.
============================================= */
const typedEl = document.getElementById('typedText');
const phrases = [
  'chất lượng cao.',
  'từ Toán đến Lập trình.',
  'dành cho sinh viên.',
  'luôn cập nhật mới.',
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    // Đang gõ
    typedEl.textContent = currentPhrase.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentPhrase.length) {
      // Dừng 1.8s rồi xóa
      setTimeout(() => { isDeleting = true; typeLoop(); }, 1800);
      return;
    }
  } else {
    // Đang xóa
    typedEl.textContent = currentPhrase.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  const speed = isDeleting ? 45 : 80;
  setTimeout(typeLoop, speed);
}

// Bắt đầu sau khi hero animation xong
setTimeout(typeLoop, 800);

/* ============================================
   6. MODAL / CONTENT LOCKER
   openModal(doc)  — mở modal với dữ liệu tài liệu
   closeModal()    — đóng modal
   Luồng: Step1 → (user click Shopee) → loading → Step3
============================================= */
const overlay    = document.getElementById('modalOverlay');
const btnClose   = document.getElementById('modalClose');
const step1      = document.getElementById('step1');
const step2      = document.getElementById('step2');
const step3      = document.getElementById('step3');
const shopeeBtn  = document.getElementById('shopeeBtn');
const driveBtnFinal = document.getElementById('driveBtnFinal');
const modalDocName  = document.getElementById('modalDocName');

// Biến theo dõi trạng thái đã click Shopee chưa
let shopeeClicked = false;

/** Mở modal và nạp dữ liệu tài liệu */
function openModal(doc) {
  // Reset về Step1 mỗi lần mở
  shopeeClicked = false;
  showStep(1);

  // Gán dữ liệu
  modalDocName.textContent = doc.title;
  shopeeBtn.href = doc.shopeeLink;
  driveBtnFinal.href = doc.driveLink;

  // Hiển thị overlay
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // ngăn scroll nền
}

/** Đóng modal */
function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

/** Chuyển giữa các bước */
function showStep(n) {
  step1.classList.toggle('hidden', n !== 1);
  step2.classList.toggle('hidden', n !== 2);
  step3.classList.toggle('hidden', n !== 3);
}

/**
 * Xử lý khi user click nút Shopee.
 * Link tự mở tab mới (target="_blank" trong HTML).
 * Sau đó hiện loading 3–5 giây rồi mở khóa Drive.
 */
shopeeBtn.addEventListener('click', () => {
  if (shopeeClicked) return; // tránh click nhiều lần
  shopeeClicked = true;

  // Chuyển sang loading
  showStep(2);

  // Random 3–5 giây để tạo cảm giác xác thực tự nhiên
  const delay = Math.floor(Math.random() * 2000) + 3000; // 3000–5000ms

  setTimeout(() => {
    // Mở khóa thành công — Step 3
    showStep(3);
  }, delay);
});

// Đóng bằng nút ✕
btnClose.addEventListener('click', closeModal);

// Đóng khi click ngoài modal
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

// Đóng bằng phím Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ============================================
   KHỞI TẠO — Render tất cả tài liệu khi load
============================================= */
renderCards(documentData);
