
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const slide_show = $('.slide_show');
const information = $('.text h2');
const mySlides = $('.no2 .mySlides');
const nextBtn = $('.next');
const prevBtn = $('.prev');
const chars = $('.no1 .chars');
const text = $('.no2 .text');
const char2 = $('.no2 .chars');

const app = {
    currentIndex: 0,

    character: [
        {
           name: "Ryo Yoshizawa",
           image: "/thuchanh/img/Ryo.jpg",
        },
        {
            name: "Nana Komatsu",
            image: "/thuchanh/img/nana.jpg",
        },
        {
            name: "Kento Yamazaki",
            image: "/thuchanh/img/kento.jpg",
        },
        {
            name: "Hana Sugisaki",
            image: "/thuchanh/img/Hana.jpg",
        },
        {
            name: "Kentaro Sakaguchi",
            image: "/thuchanh/img/kentaro.jpg",
        },
        {
            name: "Anna Yamada",
            image: "/thuchanh/img/Anna.gif",
        },
        {
            name: "Koshi Mizukami",
            image: "/thuchanh/img/koshi.jpg",
        },
        {
            name: "Fumi Nikaido",
            image: "/thuchanh/img/fumi.jpg",
        },
        {
            name: "Fumiya Takahashi",
            image: "/thuchanh/img/Fumiya.jpg",
        },
        {
            name: "Tao Tsuchiya",
            image: "/thuchanh/img/Tao.jpg",
        },
        {
            name: "",
            image: "/thuchanh/img/koshi2.jpg",
        }
    ],
    
    defineProperties: function () {
        Object.defineProperty(this, "currentChar", {
          get: function () {
            return this.character[this.currentIndex];
          }
        });
    },

    render: function(){
        const htmls = this.character.map(char => {
            return `
            <div class="mySlides fade" style="background-image: url('${char.image}');">
            <div class="text">
                    ${char.name}
            </div>
            </div>
            `
        });
        chars.innerHTML = htmls.join('');
    },

    loadCharacter: function(){
        text.textContent = this.currentChar.name;
        mySlides.style.backgroundImage = `url('${this.currentChar.image}')`;
    },

    handleEvents: function(){
        const _this = this;
        nextBtn.onclick = function(e){
            app.nextChar();
        }

        prevBtn.onclick = function(e){
            app.prevChar();
        }
    },

    nextChar: function(){
        this.currentIndex++;
        if(this.currentIndex >= this.character.length) this.currentIndex = 0;
        this.loadCharacter();
    },

    prevChar: function(){
        this.currentIndex--;
        if(this.currentIndex < 0) this.currentIndex = this.character.length - 1;
        this.loadCharacter();
    },

    start: function(){
        this.defineProperties();

        this.handleEvents();

        this.loadCharacter();

        this.render();

    },
}

app.start();