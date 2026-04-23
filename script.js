const locations = [
    "Hà Nội", "TP.HCM", "Đà Nẵng", "Phú Quốc", 
    "Nha Trang", "Đà Lạt", "Huế", "Hải Phòng", 
    "Cần Thơ", "Vinh"
];

function initLocationDropdowns() {
    const diemDi = document.getElementById("diemDi");
    const diemDen = document.getElementById("diemDen");

    locations.forEach(loc => {
        // Tạo option cho điểm đi
        let optDi = document.createElement("option");
        optDi.value = loc;
        optDi.innerText = loc;
        diemDi.appendChild(optDi);

        // Tạo option cho điểm đến
        let optDen = document.createElement("option");
        optDen.value = loc;
        optDen.innerText = loc;
        diemDen.appendChild(optDen);
    });
}

// Chạy hàm khi trang web tải xong
document.addEventListener("DOMContentLoaded", initLocationDropdowns);
// Dữ liệu mẫu cho khách sạn
const hotels = [
    { name: "InterContinental Hanoi", loc: "Tây Hồ, Hà Nội", price: "3.500.000đ", icon: "🏙️" },
    { name: "Vinpearl Resort & Spa", loc: "Nha Trang", price: "2.800.000đ", icon: "🌊" },
    { name: "Ana Mandara Villas", loc: "Đà Lạt", price: "1.950.000đ", icon: "🌲" },
    { name: "JW Marriott Phu Quoc", loc: "Phú Quốc", price: "6.700.000đ", icon: "🌅" }
];

// Hàm hiển thị trang Khách Sạn
function showHotelPage() {
    const mainContent = document.getElementById("mainContent");
    
    // Cập nhật trạng thái menu
    document.getElementById("menuHotel").classList.add("active");
    document.getElementById("menuFlight").classList.remove("active");

    // Tạo HTML cho trang khách sạn
    let hotelHTML = `
        <div class="banner hotel-banner">
            <h1>Khám phá điểm dừng chân lý tưởng</h1>
        </div>
        <form class="search-box">
            <div class="input-group">
                <label>Bạn muốn đi đâu?</label>
                <select>
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                    <option>TP. Hồ Chí Minh</option>
                    <option>Phú Quốc</option>
                </select>
            </div>
            <div class="input-group">
                <label>Ngày nhận phòng</label>
                <input type="date">
            </div>
            <button type="button" class="btn-search">Tìm khách sạn</button>
        </form>
        <div class="popular">
            <h3>⭐ Khách sạn nổi bật</h3>
            <div class="card-container">
                ${hotels.map(h => `
                    <div class="card">
                        <div class="img-placeholder" style="height:120px; background:#eee; display:flex; justify-content:center; align-items:center; font-size:40px; border-radius:8px;">${h.icon}</div>
                        <h4>${h.name}</h4>
                        <p>${h.loc}</p>
                        <span style="color: #e44d26; font-weight: bold;">${h.price}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    mainContent.innerHTML = hotelHTML;
    mainContent.scrollTop = 0; // Cuộn về đầu trang mới
}

// Hàm hiển thị trang Vé Máy Bay (Nội dung cũ của bạn)
function showFlightPage() {
    location.reload(); // Cách nhanh nhất để quay lại trạng thái ban đầu hoặc viết hàm tương tự showHotelPage
}