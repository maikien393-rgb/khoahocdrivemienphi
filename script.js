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
    tag: "Toán",
    title: "Giải tích 1 – Đại học",
    description: "Tổng hợp lý thuyết, bài tập có lời giải từ chương giới hạn đến tích phân.",
    shopeeLink: "https://shope.ee/your_affiliate_link_1",
    driveLink: "https://drive.google.com/your_drive_link_1"
  },
  {
    id: 2,
    icon: "⚗️",
    tag: "Hóa học",
    title: "Hóa đại cương A1 – Bộ đề thi",
    description: "Bộ 120 câu trắc nghiệm ôn thi cuối kỳ kèm đáp án giải thích chi tiết.",
    shopeeLink: "https://shope.ee/your_affiliate_link_2",
    driveLink: "https://drive.google.com/your_drive_link_2"
  },
  {
    id: 3,
    icon: "💻",
    tag: "Lập trình",
    title: "Python cơ bản đến nâng cao",
    description: "Tài liệu học Python từ zero: biến, hàm, OOP, xử lý file và web scraping.",
    shopeeLink: "https://shope.ee/your_affiliate_link_3",
    driveLink: "https://drive.google.com/your_drive_link_3"
  },
  {
    id: 4,
    icon: "📊",
    tag: "Kinh tế",
    title: "Kinh tế vi mô – Slide bài giảng",
    description: "Full slide 14 chương kèm tóm tắt lý thuyết và bài tập ứng dụng thực tế.",
    shopeeLink: "https://shope.ee/your_affiliate_link_4",
    driveLink: "https://drive.google.com/your_drive_link_4"
  },
  {
    id: 5,
    icon: "🇬🇧",
    tag: "Tiếng Anh",
    title: "IELTS Writing Task 2 – 50 mẫu",
    description: "50 bài mẫu band 7.0–8.5 phân tích từng câu, ghi chú từ vựng và cấu trúc.",
    shopeeLink: "https://shope.ee/your_affiliate_link_5",
    driveLink: "https://drive.google.com/your_drive_link_5"
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
