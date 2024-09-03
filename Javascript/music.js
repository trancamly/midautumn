const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play')
const player = $('.player');
const progress = $('#progress');
const preBtn = $('.btn-prev');
const nxtBtn = $('.btn-next');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');

const app = {
    currentIndex: 0,
    isPlaying: false, // kiem soat xem nhac co duoc bat hay khong 
    isRepeat : false,
    // Tên các bài hát ở mục này 
    songs: [
    {
            name: "願い～あの頃のキミへ～", // "Nghe bài này nhớ crush quá"
            singer: "MIREI",
            path: "../Audio/當山みれい\ 願いあの頃のキミへ.mp3",
            image: "../img/Negai.jpg"
      },
      {
        name: "すずめ", // suzume ost
        singer: "RADWIMPS x 十明",
        path: "../Audio/RADWIMPS - すずめ feat.十明 [Official Lyric Video].mp3",
        image: "../img/Song1.png"
      },
      {
        name: "前前前世", // zenzenzense
        singer: "RADWIMPS",
        path: "../Audio/RADWIMPS - Zen Zen Zense- 前前前世 Lyric AMV - English & Japanese Sub (Kimi no Na wa- Your Name OST).mp3",
        image: "../img/zenzenzense.jpg"
      },
      {
        name: "Nandemonaiya",
        singer: "RADWIMPS",
        path:
          "../Audio/Nandemonaiya - movie ver..mp3",
        image: "../img/Nandemonaiya.jpg"
      },
      {
        name: "Is There Still Anything That Love Can Do?",
        singer: "RADWIMPS",
        path: "../Audio/Is There Still Anything That Love Can Do-.mp3",
        image:
          "../img/Isthere.jpg"
      },
      {
        name: "ツバメ", // album the books 2 yoasobi
        singer: "YOASOBI",
        path: "../Audio/ツバメ- YOASOBI with ミドリーズ Official Music Video.mp3",
        image:
          "../img/song2.jpg"
      },
      {
        name: "祝福", // ost của phim gì có con tóc đỏ 
        singer: "YOASOBI",
        path:
          "../Audio/YOASOBI祝福Official Music Video (機動戦士ガンダム 水星の魔女オープニングテーマ).mp3",
        image:
          "../img/redhair.jpg"
      },
      {
        name: "あの夢をなぞって", // Ano Yume wo Nazotte
        singer: "YOASOBI",
        path: "../Audio/YOASOBIあの夢をなぞって Official Music Video.mp3",
        image:
          "../img/AnoYumewoNazotte.jpg"
      },
      {
        name: "群青", // ? Gunjou
        singer: "YOASOBI",
        path:
          "../Audio/YOASOBI群青Official Music Video.mp3",
        image:
          "../img/Gunjou.jpg"
      },
      {
        name: "忘不掉的你", // Song3Here
        singer: "H3R3",
        path:
          "../Audio/忘不掉的你 (忘不掉的你).mp3",
        image:
          "../img/song3H3r3.jpg"
      },
      {
        name: "再等冬天", // Memories
        singer: "H3R3",
        path:
          "../Audio/再等冬天 (Memories) (再等冬天(Memories)).mp3",
        image:
          "../img/Memories.jpg"
      },
      {
        name: "还是会想你", // Song2Here
        singer: "H3R3",
        path:
          "../Audio/还是会想你 (还是会想你).mp3",
        image:
          "../img/song2H3r3.jpg"
      },
      {
        name: "不再需要妳", // song4here
        singer: "H3R3",
        path:
          "../Audio/[Vietsub+Pinyin] Không còn cần em nữa (不再需要你) - h3R3- Cao Húc (高旭).mp3",
        image:
          "../img/song4here.jpg"
      },
    ],
    // Render bài hát
    render: function() {
        const htmls = this.songs.map((song,index) => {
            return `
            <div class="song" data-index="${index}">
            <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
            </div>
            `
        })
        playlist.innerHTML = htmls.join('');
    },
    // get Current Song 
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
          get: function () {
            return this.songs[this.currentIndex];
          }
        });
    },


    // lay bai hat hien tai 
    // các hành động trong cái render vừa nãy 
    handleEvents: function(){
        const _this = this;
        const cd = $('.cd');
        const cdWidth = cd.offsetWidth // khung anh to
        // phong to thu nho

        const animateThumb = cdThumb.animate([
            { transform: "rotate(360deg)"}
        ], {
            duration: 10000,
            iterations: Infinity,
        })
        animateThumb.pause();

        document.onscroll = function(){
            // do cuon cua ng dung 
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            // gan do dai moi cho anh to 
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }

        // xu ly khi click play 
        playBtn.onclick = function(){
            if(_this.isPlaying) audio.pause();
            else audio.play();
        }
        
        // Nếu nhạc đang được bật 
        audio.onplay = function(){
            _this.isPlaying = true;
            player.classList.add("playing");
            animateThumb.play();
        }

        // Nhạc tắt đi
        audio.onpause = function(){
            _this.isPlaying = false;
            player.classList.remove('playing');
            animateThumb.pause();
        }

        // chạy tiến độ nhạc 
        audio.ontimeupdate = function(){
            if(audio.duration)
                progress.value = Math.floor(audio.currentTime / audio.duration * 100)
        }

        // Tua bài hát -> Sử dụng oninput sẽ tiện hơn onchange khi chúng ta dùng chuột :> 
        progress.oninput = function(e) {
            audio.currentTime = audio.duration / 100 * e.target.value; 
        }

        nxtBtn.onclick = function(e){
            _this.nextSong();
            audio.play();
        }

        preBtn.onclick = function(e){
            app.preSong();
            audio.play();
        }

        // Xử lý khi hết bài hát 
        audio.onended = function(e){
            if(_this.isRepeat) audio.play();
            else 
            {
            _this.nextSong();
            audio.play();
            }
        } 

        repeatBtn.onclick = function(e)
        {
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        playlist.onclick = function(e){
            var songNode = e.target.closest('.song')
            if(e.target.closest('.song'))
            {
                _this.currentIndex = songNode.dataset.index;
                _this.loadCurrentSong();
                audio.play();
            }
        }
    },

    //tai thong tin bai hat dau tien vao UI 
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
        // console.log(heading, cdThumb, audio);
    },

    nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length) this.currentIndex = 0;
        this.loadCurrentSong();
    },

    preSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0) this.currentIndex = this.songs.length - 1;
        this.loadCurrentSong();
    },
    
    start: function() {
        this.defineProperties();
        this.handleEvents();

        this.loadCurrentSong();

        this.render();
    } 
}

app.start();