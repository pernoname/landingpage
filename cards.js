/**
 * ============================================================
 *  cards.js — Dữ liệu các card vay
 * ============================================================
 *  Chỉ cần sửa file này để cập nhật nội dung, link, ảnh card.
 *  Không cần chỉnh sửa index.html hay style.css.
 *
 *  Mỗi card có các trường:
 *    title  : Tên app hiển thị
 *    link   : Đường link khi bấm vào card
 *    image  : Đường dẫn ảnh icon (trong thư mục ./img/)
 *    badge  : Nhãn HOT (để "" nếu không muốn hiện)
 *    subs   : Mảng các dòng mô tả (có thể dùng emoji ở đầu)
 *
 *  Thứ tự trong mảng CARDS = thứ tự hiển thị trên trang.
 * ============================================================
 */

const CARDS = [
    {
        title: "Creditnice",
        link: "https://go.dinos.click/click?a=75547&o=990",
        image: "./img/creditnice.png",
        badge: "🔥 HOT",
        subs: [
            "✅ VỪA HIỀN, DUYỆT NHANH",
            "💰 Hạn mức: 800 - 10 triệu",
            "📅 Kỳ hạn: Linh hoạt.",
            "🎁 Lãi suất: 0% lần đầu.",
            "🧑 Tuổi 18 - 60.",
            "⚡ Duyệt sau 15 phút.",
            "📝 Điền thông tin là xong."
        ]
    },
    {
        title: "Crezu",
        link: "https://go.dinos.click/click?a=75547&o=125",
        image: "./img/crezu.png",
        badge: "🔥 HOT",
        subs: [
            "✅ ƯU TIÊN",
            "🔰 App trung gian uy tín",
            "💡 Chọn đơn vị vay gợi ý giúp tăng khả năng duyệt hơn đki trực tiếp.",
            "🪪 Chỉ cần CCCD là có thể vay.",
            "🧑 Tuổi: 18 - 60.",
            "⚡ Duyệt ngay sau 5 phút."
        ]
    },
    {
        title: "Jeff App",
        link: "https://go.dinos.click/click?a=75547&o=161",
        image: "./img/jeff.png",
        badge: "🔥 HOT",
        subs: [
            "🏆 ƯU TIÊN HÀNG ĐẦU - Chỉ cần CCCD",
            "🔰 App trung gian uy tín nhất hiện nay.",
            "💸 Lãi suất khoản vay đầu tiên thấp.",
            "🆗 Tuổi 22 trở lên, nhận nợ xấu.",
            "⚡ Duyệt sau 5 phút, tỉ lệ 99%."
        ]
    },
    {
        title: "Vaymeo",
        link: "https://go.dinos.click/click?a=75547&o=1185",
        image: "./img/vaymeo.png",
        badge: "🔥 HOT",
        subs: [
            "✅ NÊN VAY — Chỉ cần CCCD.",
            "💰 Hạn mức: 1 - 10 triệu.",
            "📅 Kỳ hạn: 91 - 180 ngày.",
            "📊 Lãi suất từ 0,01%.",
            "🧑 Tuổi 22 - 60."
        ]
    },
    {
        title: "Moneyveo",
        link: "https://go.dinos.click/click?a=75547&o=663",
        image: "./img/moneyveo.png",
        badge: "",
        subs: [
            "✅ ƯU TIÊN.",
            "🎁 Lãi suất 0% khoản vay đầu.",
            "⚡ Vay đầu tiên 5 - 10 triệu trong 5 phút.",
            "🪪 Chỉ cần CCCD là có thể vay.",
            "🧑 Tuổi 18 - 60.",
            "🆕 App mới dễ duyệt ae nên thử.",
            "📸 Lưu ý chụp ảnh rõ nét."
        ]
    },
    {
        title: "VAYVND",
        link: "https://go.dinos.click/click?a=75547&o=927",
        image: "./img/vayvnd.png",
        badge: "",
        subs: [
            "✅ ƯU TIÊN.",
            "💸 Giải ngân luôn, khỏi phải đợi.",
            "🎁 Lãi suất 0% khoản vay đầu.",
            "💰 Vay đầu tiên 1 - 10 triệu.",
            "🪪 Chỉ cần CCCD là có thể vay.",
            "🧑 Tuổi 22 - 60.",
            "⚡ Duyệt sau 5 phút, tỉ lệ 99%."
        ]
    }
];

// ============================================================
//  Render tự động — KHÔNG CẦN CHỈNH SỬA PHẦN DƯỚI
// ============================================================
(function renderCards() {
    const list = document.getElementById('card-list');
    if (!list) return;

    const chevronSVG = `<svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    list.innerHTML = CARDS.map(card => {
        const badge = card.badge
            ? `<span class="badge-hot">${card.badge}</span>`
            : '';
        const subs = card.subs
            .map(s => `<span class="card-sub">${s}</span>`)
            .join('\n                    ');
        return `
            <a class="card" href="${card.link}" target="_blank" rel="noopener">
                ${badge}
                <span class="thumb"><img src="${card.image}" alt="${card.title}"></span>
                <span class="card-title">${card.title}
                    ${subs}
                </span>
                ${chevronSVG}
            </a>`;
    }).join('\n');
})();
