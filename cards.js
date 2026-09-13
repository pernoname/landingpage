/**
 * ============================================================
 *  cards.js — Dữ liệu các card vay
 * ============================================================
 *  Chỉ cần sửa file này để cập nhật nội dung, link, ảnh card.
 *  Không cần chỉnh sửa index.html hay style.css.
 *
 *  Mỗi card có các trường:
 *    order  : Số thứ tự hiển thị (nhỏ hơn = lên trên)
 *    title  : Tên app hiển thị
 *    link   : Đường link khi bấm vào card
 *    image  : Đường dẫn ảnh icon (trong thư mục ./img/)
 *    badge  : Nhãn HOT (để "" nếu không muốn hiện)
 *    subs   : Mảng các dòng mô tả (có thể dùng emoji ở đầu)
 *
 *  Thứ tự hiển thị được xác định bởi trường ORDER (tăng dần).
 * ============================================================
 */

const CARDS = [
    {
        order: 7,
        title: "Creditnice",
        link: "https://go.dinos.click/click?a=75547&o=990",
        image: "./img/creditnice.png",
        badge: "",
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
        order: 8,
        title: "Crezu",
        link: "https://go.dinos.click/click?a=75547&o=125",
        image: "./img/crezu.png",
        badge: "",
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
        order: 10,
        title: "Jeff App",
        link: "https://go.dinos.click/click?a=75547&o=161",
        image: "./img/jeff.png",
        badge: "",
        subs: [
            "🏆 ƯU TIÊN HÀNG ĐẦU - Chỉ cần CCCD",
            "🔰 App trung gian uy tín nhất hiện nay.",
            "💸 Lãi suất khoản vay đầu tiên thấp.",
            "🆗 Tuổi 22 trở lên, nhận nợ xấu.",
            "⚡ Duyệt sau 5 phút, tỉ lệ 99%."
        ]
    },
    {
        order: 6,
        order: 6,
        title: "Vaymeo",
        link: "https://go.dinos.click/click?a=75547&o=1185",
        image: "./img/vaymeo.png",
        badge: "",
        subs: [
            "✅ NÊN VAY — Chỉ cần CCCD.",
            "💰 Hạn mức: 1 - 10 triệu.",
            "📅 Kỳ hạn: 91 - 180 ngày.",
            "📊 Lãi suất từ 0,01%.",
            "🧑 Tuổi 22 - 60."
        ]
    },
    {
        order: 5,
        order: 5,
        title: "LetoCredit",
        link: "https://go.clickbuy.asia/click?a=75547&o=1435",
        image: "./img/letocredit.png",
        badge: "🔥 HOT",
        subs: [
            "✅ APP MỚI (DỄ DUYỆT AE NÊN THỬ).",
            "💸 Giải ngân nhanh chóng.",
            "🎁 Lãi suất chỉ từ 0,01%.",
            "💰 Vay đầu tiên lên tới 5 triệu.",
            "🪪 Chỉ cần CCCD là có thể vay.",
            "🧑 Tuổi 18 - 60.",
            "⚡ Duyệt sau 15 phút."
        ]
    },
    {
        order: 4,
        title: "Moneyveo (TỶ LỆ DUYỆT CAO)",
        link: "https://go.dinos.click/click?a=75547&o=663",
        image: "./img/moneyveo.png",
        badge: "🔥 HOT",
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
        order: 2,
        title: "VAYVND (TỈ LỆ DUYỆT CAO)",
        link: "https://go.dinos.click/click?a=75547&o=927",
        image: "./img/vayvnd.png",
        badge: "🔥 HOT",
        subs: [
            "✅ ƯU TIÊN.",
            "💸 Giải ngân luôn, khỏi phải đợi.",
            "🎁 Lãi suất 0% khoản vay đầu.",
            "💰 Vay đầu tiên 1 - 10 triệu.",
            "🪪 Chỉ cần CCCD là có thể vay.",
            "🧑 Tuổi 22 - 60.",
            "⚡ Duyệt sau 5 phút, tỉ lệ 99%."
        ]
    },
    {
        order: 1,
        title: "TINVAY (THUÊ BAO VIETTEL)(APP HOT TỶ LỆ DUYỆT CAO)",
        link: "https://go.dinos.click/click?a=75547&o=769",
        image: "./img/tinvay.png",
        badge: "🔥 HOT",
        subs: [
            "✅ ƯU TIÊN (APP MỚI DUYỆT NHANH).",
            "💰 Vay đầu tiên 1 - 25 triệu.",
            "🧑 Tuổi 18 - 60.",
            "🆗 Hỗ trợ nợ xấu.",
            "⚡ Tỉ lệ duyệt 99%."
        ]
    },
    {
        order: 3,
        title: "MoneyCat (TỶ LỆ DUYỆT CAO)",
        link: "https://go.dinos.click/click?a=75547&o=762",
        image: "./img/moneycat.png",
        badge: "🔥 HOT",
        badge: "🔥 HOT",
        subs: [
            "✅ ƯU TIÊN.",
            "💰 Vay đầu tiên 500K - 10 triệu.",
            "🪪 Chỉ cần CCCD là có thể vay.",
            "🆗 Nhận hỗ trợ nợ xấu.",
            "🧑 Tuổi 22 - 60.",
            "⚡ Tỉ lệ duyệt 99%."
        ]
    }
];

// ============================================================
//  Dữ liệu thẻ tín dụng & vay công ty tài chính
//  Thêm app mới vào đây theo cùng cấu trúc như CARDS
// ============================================================
const CREDIT_CARDS = [
    {
        order: 1,
        title: "THẺ TÍN DỤNG VPBANK",
        link: "https://go.clickbuy.asia/click?a=75547&o=1174",
        image: "./img/vpbank.png",
        badge: "🔥 HOT",
        subs: [
            "🎁 Lãi suất lần đầu 0%.",
            "💰 Hạn mức lên đến 100 triệu.",
            "🧑 Tuổi 22 - 60.",
            "🪪 Chỉ cần CCCD + Selfie là xong.",
            "⚡ Tỷ lệ duyệt 85%.",
            "🆗 KHÔNG HỖ TRỢ NỢ XẤU.",
        ]
    },
    {
        order: 2,
        title: "VAYXANH",
        link: "https://go.clickbuy.asia/click?a=75547&o=1440",
        image: "./img/vayxanh.png",
        badge: "",
        subs: [
            "✅ ƯU TIÊN (APP MỚI DUYỆT NHANH).",
            "💰 Vay đầu tiên 500K - 15 triệu.",
            "🪪 Chỉ cần CCCD là có thể vay.",
            "🧑 Tuổi 18 - 65.",
            "⚡ Tỉ lệ duyệt 99%."
        ]
    },
];

// ============================================================
//  Render thẻ tín dụng — KHÔNG CẦN CHỈNH SỬA PHẦN DƯỚI
// ============================================================
(function renderCreditCards() {
    const list = document.getElementById('credit-list');
    if (!list) return;

    const chevronSVG = `<svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    list.innerHTML = [...CREDIT_CARDS].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)).map(card => {
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

(function renderCards() {
    const list = document.getElementById('card-list');
    if (!list) return;

    const chevronSVG = `<svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    list.innerHTML = [...CARDS].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)).map(card => {
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
