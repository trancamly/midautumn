const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cd = $('.cd');
const playlist = $('.playlist');

const app ={

    currentIndex: 0,

    address: [
        {
            name: "An Giang", 
            image: '/thuchanh/img/logoAnGiang.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '/thuchanh/htmls/anGiang.html',
        },

        {
            name: "Bà Rịa - Vũng Tàu", 
            image: '/thuchanh/img/logoBRVT.png',
            location: 'Đông Nam Bộ',
            link: '/thuchanh/htmls/brvt.html',
        },
        {
            name: "Bắc Giang", 
            image: '/thuchanh/img/logoBacGiang.png',
            location: 'Đông Bắc Bộ',
            link: '/thuchanh/htmls/bacGiang.html',
        },
        {
            name: "Bạc Liêu", 
            image: '/thuchanh/img/logoBacLieu.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '/thuchanh/htmls/bacLieu.html',
        },
        {
            name: "Bắc Ninh", 
            image: '/thuchanh/img/logoBNinh.png',
            location: 'Đồng bằng sông Hồng',
            link: '/thuchanh/htmls/bacNinh.html',
        },
        {
            name: "Bến Tre", 
            image: '/thuchanh/img/logoBTre.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '/thuchanh/htmls/benTre.html',
        },
        {
            name: "Bình Định", 
            image: '/thuchanh/img/logoBDinh.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '/thuchanh/htmls/binhDinh.html',
        },
        {
            name: "Bình Dương", 
            image: '/thuchanh/img/logoBDuong.png',
            location: 'Đông Nam Bộ',
            link: '/thuchanh/htmls/binhDuong.html',
        },
        {
            name: "Bình Phước", 
            image: '/thuchanh/img/logoBPhuoc.png',
            location: 'Đông Nam Bộ',
            link: '/thuchanh/htmls/binhPhuoc.html',
        },
        {
            name: "Bình Thuận", 
            image: '/thuchanh/img/logoBThuan.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '/thuchanh/htmls/binhThuan.html',
        },
        {
            name: "Cà Mau", 
            image: '/thuchanh/img/logoCaMau.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '/thuchanh/htmls/caMau.html',
        },
        {
            name: "Cần Thơ", 
            image: '/thuchanh/img/logoCanTho.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '/thuchanh/htmls/canTho.html',
        },
        {
            name: "Cao Bằng", 
            image: '/thuchanh/img/logoCBang.png',
            location: 'Đông Bắc Bộ',
            link: '/thuchanh/htmls/caoBang.html',
        },
        {
            name: "Đà Nẵng", 
            image: '/thuchanh/img/logoDaNang.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '/thuchanh/htmls/daNang.html',
        },
        {
            name: "Đắk Lắk", 
            image: '/thuchanh/img/logoDLak.png',
            location: 'Tây Nguyên',
            link: '/thuchanh/htmls/dakLak.html',
        },
        {
            name: "Đắk Nông", 
            image: '/thuchanh/img/logoDNong.png',
            location: 'Tây Nguyên',
            link: '/thuchanh/htmls/dakNong.html',
        },
        {
            name: "Điện Biên", 
            image: '/thuchanh/img/logoDBien.png',
            location: 'Tây Bắc Bộ',
            link: '/thuchanh/htmls/DBien.html',
        },
        {
            name: "Đồng Nai", 
            image: '/thuchanh/img/logoDNai.png',
            location: 'Đông Nam Bộ',
            link: '/thuchanh/htmls/dongNai.html',
        },
        {
            name: "Đồng Tháp", 
            image: '/thuchanh/img/logoDThap.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '/thuchanh/htmls/dongThap.html',
        },
        {
            name: "Gia Lai", 
            image: '/thuchanh/img/logoGLai.png',
            location: 'Tây Nguyên',
            link: '/thuchanh/htmls/giaLai.html',
        },
        {
            name: "Hà Giang", 
            image: '/thuchanh/img/logoHGiang.png',
            location: 'Đông Bắc',
            link: '/thuchanh/htmls/haGiang.html',
        },
        {
            name: "Hà Nam", 
            image: '/thuchanh/img/logoHNam.png',
            location: 'Đồng bằng sông Hồng',
            link: '/thuchanh/htmls/haNam.html',
        },
        {
            name: "Hà Nội", 
            image: '/thuchanh/img/logoHNoi.png',
            location: 'Đồng bằng sông Hồng',
            link: '/thuchanh/htmls/haNoi.html',
        },
        {
            name: "Hà Tĩnh", 
            image: '/thuchanh/img/logoHTinh.png',
            location: 'Bắc Trung Bộ',
            link: '/thuchanh/htmls/haTinh.html',
        },
        {
            name: "Hải Dương", 
            image: '/thuchanh/img/logoHDuong.png',
            location: 'Đồng bằng sông Hồng',
            link: '/thuchanh/htmls/haiDuong.html',
        },
        {
            name: "Hải Phòng", 
            image: '/thuchanh/img/logoHPh.png',
            location: 'Đông Bắc',
            link: '/thuchanh/htmls/haiPhong.html',
        },
        {
            name: "Hậu Giang", 
            image: '/thuchanh/img/logoHauGiang.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '/thuchanh/htmls/hauGiang.html',
        },
        {
            name: "Hòa Bình", 
            image: '/thuchanh/img/logoHBinh.png',
            location: 'Tây Bắc Bộ',
            link: '/thuchanh/htmls/hoaBinh.html',
        },
        {
            name: "Hưng Yên", 
            image: '/thuchanh/img/logoHYen.png',
            location: 'Đồng bằng sông Hồng',
            link: '/thuchanh/htmls/hungYen.html',
        },
        {
            name: "Khánh Hòa", 
            image: '/thuchanh/img/logoKHoa.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '/thuchanh/htmls/khanhHoa.html',
        },
        {
            name: "Kiên Giang", 
            image: '/thuchanh/img/logoKienGiang.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '/thuchanh/htmls/kienGiang.html',
        },
        {
            name: "Kon Tum", 
            image: '/thuchanh/img/logoKonTum.png',
            location: 'Tây Nguyên',
            link: '/thuchanh/htmls/konTum.html',
        },
        {
            name: "Lai Châu", 
            image: '/thuchanh/img/logoLaiChau.png',
            location: 'Tây Bắc',
            link: '/thuchanh/htmls/laiChau.html',
        },
        {
            name: "Lâm Đồng", 
            image: '/thuchanh/img/logoLamDong.png',
            location: 'Tây Nguyên',
            link: '/thuchanh/htmls/lamDong.html',
        },
        {
            name: "Lạng Sơn", 
            image: '/thuchanh/img/logoLSon.png',
            location: 'Đông Bắc Bộ',
            link: '/thuchanh/htmls/langSon.html',
        },
        {
            name: "Lào Cai", 
            image: '/thuchanh/img/logoLaoCai.png',
            location: 'Tây Bắc Bộ',
            link: '/thuchanh/htmls/laoCai.html',
        },
        {
            name: "Long An", 
            image: '/thuchanh/img/logoLongAn.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '/thuchanh/htmls/longAn.html',
        },
        {
            name: "Nam Định", 
            image: '/thuchanh/img/logoNDinh.png',
            location: 'Đồng bằng sông Hồng',
            link: '/thuchanh/htmls/namDinh.html',
        },
        {
            name: "Nghệ An", 
            image: '/thuchanh/img/logoNgheAn.png',
            location: 'Bắc Trung Bộ',
            link: '/thuchanh/htmls/ngheAn.html',
        },
        {
            name: "Ninh Bình", 
            image: '/thuchanh/img/logoNBinh.png',
            location: 'Đồng bằng sông Hồng',
            link: '/thuchanh/htmls/ninhBinh.html',
        },
        {
            name: "Ninh Thuận", 
            image: '/thuchanh/img/logoNThuan.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '/thuchanh/htmls/ninhThuan.html',
        },
        {
            name: "Phú Thọ", 
            image: '/thuchanh/img/logoPTho.png',
            location: 'Đông Bắc Bộ',
            link: '/thuchanh/htmls/phuTho.html',
        },
        {
            name: "Phú Yên", 
            image: '/thuchanh/img/logoPYen.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '/thuchanh/htmls/phuYen.html',
        },
        {
            name: "Quảng Bình", 
            image: '/thuchanh/img/logoQBinh.png',
            location: 'Bắc Trung Bộ',
            link: '/thuchanh/htmls/quangBinh.html',
        },
        {
            name: "Quảng Nam", 
            image: '/thuchanh/img/logoQNam.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '/thuchanh/htmls/quangNam.html',
        },
        {
            name: "Quảng Ngãi", 
            image: '/thuchanh/img/logotpQNgai.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '/thuchanh/htmls/quangNgai.html',
        },
        {
            name: "Quảng Ninh", 
            image: '/thuchanh/img/logoQNinh.png',
            location: 'Đông Bắc Bộ',
            link: '/thuchanh/htmls/quangNinh.html',
        },
        {
            name: "Quảng Trị", 
            image: '/thuchanh/img/logoQTri.png',
            location: 'Bắc Trung Bộ',
            link: '/thuchanh/htmls/quangTri.html',
        },
        {
            name: "Sóc Trăng", 
            image: '/thuchanh/img/logoSTrang.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '/thuchanh/htmls/socTRang.html',
        },
        {
            name: "Sơn La", 
            image: '/thuchanh/img/logoSonLa.png',
            location: 'Tây Bắc',
            link: '/thuchanh/htmls/sonLa.html',
        },
        {
            name: "Tây Ninh", 
            image: '/thuchanh/img/logoTNinh.png',
            location: 'Đông Nam Bộ',
            link: '/thuchanh/htmls/tayNinh.html',
        },
        {
            name: "Thái Bình", 
            image: '',
            location: 'Đồng bằng sông Hồng',
            link: '/thuchanh/htmls/thaiBinh.html',
        },
        {
            name: "Thái Nguyên", 
            image: '/thuchanh/img/logoTNguyen.png',
            location: 'Đông Bắc Bộ',
            link: '/thuchanh/htmls/caoBang.html',
        },
        {
            name: "Thanh Hóa", 
            image: '/thuchanh/img/logoTHoa.png',
            location: 'Bắc Trung Bộ',
            link: '/thuchanh/htmls/thanhHoa.html',
        },
        {
            name: "Thừa Thiên Huế", 
            image: '/thuchanh/img/logoTTH.png',
            location: 'Bắc Trung Bộ',
            link: '/thuchanh/htmls/thuaThienHue.html',
        },
        {
            name: "Tiền Giang", 
            image: '/thuchanh/img/logoTGiang.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '/thuchanh/htmls/tienGiang.html',
        },
        {
            name: "Thành phố Hồ Chí Minh", 
            image: '/thuchanh/img/logoTPHCM.png',
            location: 'Đông Nam Bộ',
            link: '/thuchanh/htmls/thanhphoHCM.html',
        },
        {
            name: "Trà Vinh", 
            image: '/thuchanh/img/logoTraVinh.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '/thuchanh/htmls/traVinh.html',
        },
        {
            name: "Tuyên Quang", 
            image: '/thuchanh/img/logoTQuang.png',
            location: 'Đông Bắc Bộ',
            link: '/thuchanh/htmls/tuyenQuang.html',
        },
        {
            name: "Vĩnh Long", 
            image: '/thuchanh/img/logoVLong.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '/thuchanh/htmls/vinhLong.html',
        },
        {
            name: "Vĩnh Phúc", 
            image: '/thuchanh/img/logoVPhuc.png',
            location: 'Đồng bằng sông Hồng',
            link: '/thuchanh/htmls/vinhPhuc.html',
        },
        {
            name: "Yên Bái", 
            image: '/thuchanh/img/logoYBai.png',
            location: 'Tây Bắc',
            link: '/thuchanh/htmls/yenBai.html',
        },
    ],

    defineProperties: function () {
        Object.defineProperty(this, "currenAdd", {
          get: function () {
            return this.address[this.currentIndex];
          }
        });
    },


    updateTime: function(){
        const date = new Date();
        const datestring = date.toLocaleTimeString();
        cd.innerText = datestring;
    },

    getdate: function(){
        const _this = this;
        window.onload = function() {
            _this.updateTime();
            // Cập nhật thời gian mỗi giây
            setInterval(_this.updateTime, 1000);
        };
    },

    render: function(){
        const htmls = this.address.map((add,index) => {
            return `
            <div class="song" data-index="${index}">
            <div class="thumb" style="background-image: url('${add.image}')">
            </div>
            <div class="body">
              <h3 class="title">${add.name}</h3>
              <p class="author">${add.location}</p>
            </div>
            <a href="${add.link}">
            </a>
            </div>
            `
        })
        playlist.innerHTML = htmls.join('');
    },

    start: function(){
        this.defineProperties();
        this.getdate();
        this.render();
    },
}

app.start();