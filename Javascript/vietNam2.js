const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cd = $('.cd');
const playlist = $('.playlist');

const app ={

    currentIndex: 0,

    address: [
        {
            name: "An Giang", 
            image: '../img/logoAnGiang.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '../htmls/anGiang.html',
        },

        {
            name: "Bà Rịa - Vũng Tàu", 
            image: '../img/logoBRVT.png',
            location: 'Đông Nam Bộ',
            link: '../htmls/brvt.html',
        },
        {
            name: "Bắc Giang", 
            image: '../img/logoBacGiang.png',
            location: 'Đông Bắc Bộ',
            link: '../htmls/bacGiang.html',
        },
        {
            name: "Bạc Liêu", 
            image: '../img/logoBacLieu.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '../htmls/bacLieu.html',
        },
        {
            name: "Bắc Ninh", 
            image: '../img/logoBNinh.png',
            location: 'Đồng bằng sông Hồng',
            link: '../htmls/bacNinh.html',
        },
        {
            name: "Bến Tre", 
            image: '../img/logoBTre.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '../htmls/benTre.html',
        },
        {
            name: "Bình Định", 
            image: '../img/logoBDinh.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '../htmls/binhDinh.html',
        },
        {
            name: "Bình Dương", 
            image: '../img/logoBDuong.png',
            location: 'Đông Nam Bộ',
            link: '../htmls/binhDuong.html',
        },
        {
            name: "Bình Phước", 
            image: '../img/logoBPhuoc.png',
            location: 'Đông Nam Bộ',
            link: '../htmls/binhPhuoc.html',
        },
        {
            name: "Bình Thuận", 
            image: '../img/logoBThuan.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '../htmls/binhThuan.html',
        },
        {
            name: "Cà Mau", 
            image: '../img/logoCaMau.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '../htmls/caMau.html',
        },
        {
            name: "Cần Thơ", 
            image: '../img/logoCanTho.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '../htmls/canTho.html',
        },
        {
            name: "Cao Bằng", 
            image: '../img/logoCBang.png',
            location: 'Đông Bắc Bộ',
            link: '../htmls/caoBang.html',
        },
        {
            name: "Đà Nẵng", 
            image: '../img/logoDaNang.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '../htmls/daNang.html',
        },
        {
            name: "Đắk Lắk", 
            image: '../img/logoDLak.png',
            location: 'Tây Nguyên',
            link: '../htmls/dakLak.html',
        },
        {
            name: "Đắk Nông", 
            image: '../img/logoDNong.png',
            location: 'Tây Nguyên',
            link: '../htmls/dakNong.html',
        },
        {
            name: "Điện Biên", 
            image: '../img/logoDBien.png',
            location: 'Tây Bắc Bộ',
            link: '../htmls/dienBien.html',
        },
        {
            name: "Đồng Nai", 
            image: '../img/logoDNai.png',
            location: 'Đông Nam Bộ',
            link: '../htmls/dongNai.html',
        },
        {
            name: "Đồng Tháp", 
            image: '../img/logoDThap.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '../htmls/dongThap.html',
        },
        {
            name: "Gia Lai", 
            image: '../img/logoGLai.png',
            location: 'Tây Nguyên',
            link: '../htmls/giaLai.html',
        },
        {
            name: "Hà Giang", 
            image: '../img/logoHGiang.png',
            location: 'Đông Bắc',
            link: '../htmls/haGiang.html',
        },
        {
            name: "Hà Nam", 
            image: '../img/logoHNam.png',
            location: 'Đồng bằng sông Hồng',
            link: '../htmls/haNam.html',
        },
        {
            name: "Hà Nội", 
            image: '../img/logoHNoi.png',
            location: 'Đồng bằng sông Hồng',
            link: '../htmls/haNoi.html',
        },
        {
            name: "Hà Tĩnh", 
            image: '../img/logoHTinh.png',
            location: 'Bắc Trung Bộ',
            link: '../htmls/haTinh.html',
        },
        {
            name: "Hải Dương", 
            image: '../img/logoHDuong.png',
            location: 'Đồng bằng sông Hồng',
            link: '../htmls/haiDuong.html',
        },
        {
            name: "Hải Phòng", 
            image: '../img/logoHPh.png',
            location: 'Đông Bắc',
            link: '../htmls/haiPhong.html',
        },
        {
            name: "Hậu Giang", 
            image: '../img/logoHauGiang.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '../htmls/hauGiang.html',
        },
        {
            name: "Hòa Bình", 
            image: '../img/logoHBinh.png',
            location: 'Tây Bắc Bộ',
            link: '../htmls/hoaBinh.html',
        },
        {
            name: "Hưng Yên", 
            image: '../img/logoHYen.png',
            location: 'Đồng bằng sông Hồng',
            link: '../htmls/hungYen.html',
        },
        {
            name: "Khánh Hòa", 
            image: '../img/logoKHoa.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '../htmls/khanhHoa.html',
        },
        {
            name: "Kiên Giang", 
            image: '../img/logoKienGiang.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '../htmls/kienGiang.html',
        },
        {
            name: "Kon Tum", 
            image: '../img/logoKonTum.png',
            location: 'Tây Nguyên',
            link: '../htmls/konTum.html',
        },
        {
            name: "Lai Châu", 
            image: '../img/logoLaiChau.png',
            location: 'Tây Bắc',
            link: '../htmls/laiChau.html',
        },
        {
            name: "Lâm Đồng", 
            image: '../img/logoLamDong.png',
            location: 'Tây Nguyên',
            link: '../htmls/lamDong.html',
        },
        {
            name: "Lạng Sơn", 
            image: '../img/logoLSon.png',
            location: 'Đông Bắc Bộ',
            link: '../htmls/langSon.html',
        },
        {
            name: "Lào Cai", 
            image: '../img/logoLaoCai.png',
            location: 'Tây Bắc Bộ',
            link: '../htmls/laoCai.html',
        },
        {
            name: "Long An", 
            image: '../img/logoLongAn.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '../htmls/longAn.html',
        },
        {
            name: "Nam Định", 
            image: '../img/logoNDinh.png',
            location: 'Đồng bằng sông Hồng',
            link: '../htmls/namDinh.html',
        },
        {
            name: "Nghệ An", 
            image: '../img/logoNgheAn.png',
            location: 'Bắc Trung Bộ',
            link: '../htmls/ngheAn.html',
        },
        {
            name: "Ninh Bình", 
            image: '../img/logoNBinh.png',
            location: 'Đồng bằng sông Hồng',
            link: '../htmls/ninhBinh.html',
        },
        {
            name: "Ninh Thuận", 
            image: '../img/logoNThuan.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '../htmls/ninhThuan.html',
        },
        {
            name: "Phú Thọ", 
            image: '../img/logoPTho.png',
            location: 'Đông Bắc Bộ',
            link: '../htmls/phuTho.html',
        },
        {
            name: "Phú Yên", 
            image: '../img/logoPYen.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '../htmls/phuYen.html',
        },
        {
            name: "Quảng Bình", 
            image: '../img/logoQBinh.png',
            location: 'Bắc Trung Bộ',
            link: '../htmls/quangBinh.html',
        },
        {
            name: "Quảng Nam", 
            image: '../img/logoQNam.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '../htmls/quangNam.html',
        },
        {
            name: "Quảng Ngãi", 
            image: '../img/logotpQNgai.png',
            location: 'Duyên hải Nam Trung Bộ',
            link: '../htmls/quangNgai.html',
        },
        {
            name: "Quảng Ninh", 
            image: '../img/logoQNinh.png',
            location: 'Đông Bắc Bộ',
            link: '../htmls/quangNinh.html',
        },
        {
            name: "Quảng Trị", 
            image: '../img/logoQTri.png',
            location: 'Bắc Trung Bộ',
            link: '../htmls/quangTri.html',
        },
        {
            name: "Sóc Trăng", 
            image: '../img/logoSTrang.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '../htmls/socTRang.html',
        },
        {
            name: "Sơn La", 
            image: '../img/logoSonLa.png',
            location: 'Tây Bắc',
            link: '../htmls/sonLa.html',
        },
        {
            name: "Tây Ninh", 
            image: '../img/logoTNinh.png',
            location: 'Đông Nam Bộ',
            link: '../htmls/tayNinh.html',
        },
        {
            name: "Thái Bình", 
            image: '',
            location: 'Đồng bằng sông Hồng',
            link: '../htmls/thaiBinh.html',
        },
        {
            name: "Thái Nguyên", 
            image: '../img/logoTNguyen.png',
            location: 'Đông Bắc Bộ',
            link: '../htmls/caoBang.html',
        },
        {
            name: "Thanh Hóa", 
            image: '../img/logoTHoa.png',
            location: 'Bắc Trung Bộ',
            link: '../htmls/thanhHoa.html',
        },
        {
            name: "Thừa Thiên Huế", 
            image: '../img/logoTTH.png',
            location: 'Bắc Trung Bộ',
            link: '../htmls/thuaThienHue.html',
        },
        {
            name: "Tiền Giang", 
            image: '../img/logoTGiang.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '../htmls/tienGiang.html',
        },
        {
            name: "Thành phố Hồ Chí Minh", 
            image: '../img/logoTPHCM.png',
            location: 'Đông Nam Bộ',
            link: '../htmls/thanhphoHCM.html',
        },
        {
            name: "Trà Vinh", 
            image: '../img/logoTraVinh.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '../htmls/traVinh.html',
        },
        {
            name: "Tuyên Quang", 
            image: '../img/logoTQuang.png',
            location: 'Đông Bắc Bộ',
            link: '../htmls/tuyenQuang.html',
        },
        {
            name: "Vĩnh Long", 
            image: '../img/logoVLong.png',
            location: 'Đồng bằng sông Cửu Long',
            link: '../htmls/vinhLong.html',
        },
        {
            name: "Vĩnh Phúc", 
            image: '../img/logoVPhuc.png',
            location: 'Đồng bằng sông Hồng',
            link: '../htmls/vinhPhuc.html',
        },
        {
            name: "Yên Bái", 
            image: '../img/logoYBai.png',
            location: 'Tây Bắc',
            link: '../htmls/yenBai.html',
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