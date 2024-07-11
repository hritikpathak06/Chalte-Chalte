const music = new Audio('audio/1.mp3');
// music.play()
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title')
let currentStart = document.getElementById('currentStart')
let currentEnd = document.getElementById('currentEnd')
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
let playSong = document.getElementById('playSong');
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName("vol_bar")
let back = document.getElementById('back');
let next = document.getElementById('next');


const volChange = () => {
    // console.log('hello world')
    if(vol.value == 0){
        vol_icon.classList.remove("bi-volume-up-fill")
        vol_icon.classList.add('bi-volume-off-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
    }
    if(vol.value > 0){
        vol_icon.classList.remove("bi-volume-up-fill")
        vol_icon.classList.remove('bi-volume-off-fill')
        vol_icon.classList.add('bi-volume-down-fill')
    }
    if(vol.value > 50){
        vol_icon.classList.add("bi-volume-up-fill")
        vol_icon.classList.remove('bi-volume-off-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
    }
    let vol_control = vol.value;
    // vol_bar.style.width = `${vol_control}%`;
    music.volume = vol_control/100;
}

// vol.addEventListener('change', () => {
    
// })




playSong.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1')
        masterPlay.classList.add('bi-pause-fill')
        masterPlay.classList.remove("bi-play-fill")
        poster_master_play.src = "img/1.jpg"
        title.innerHTML = `<h5 id="title">On my Way<div class="subtitle">Alan Walker</div></h5>`
    } else {
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.add("bi-play-fill")
    }
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration /100
})

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_curr)
    // console.log(music_dur)
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(min1,sec1)
    currentEnd.innerText = `${min1}:${sec1}`

    let min2 = Math.floor(music_curr / 60)
    let sec2 = Math.floor(music_curr % 60)

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
        // min2 = `0${min2}`
    }
    currentStart.innerText = `${min2}:${sec2}`

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value)

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`
})

// index = Array.from(document.getElementsByClassName('songItem')).length
// console.log(index)

back.addEventListener('click', () => {
    index -= 1
    if(index<1){
        index = Array.from(document.getElementsByClassName('songItem')).length
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`
    music.play();
    wave.classList.add('active1')
    masterPlay.classList.add('bi-pause-fill')
    masterPlay.classList.remove("bi-play-fill")
    title.innerHTML = songs[index - 1].songName
})

next.addEventListener('click', () => {
    index ++;
    if(index>20){
        index = Array.from(document.getElementsByClassName('songItem')).length-19;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`
    music.play();
    wave.classList.add('active1')
    masterPlay.classList.add('bi-pause-fill')
    masterPlay.classList.remove("bi-play-fill")
    title.innerHTML = songs[index - 1].songName
})


let index = 0;
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index)
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`
        music.play();
        wave.classList.add('active1')
        masterPlay.classList.add('bi-pause-fill')
        masterPlay.classList.remove("bi-play-fill")
        title.innerHTML = songs[index - 1].songName
    })
})

// const makeAllBackground = () => {
//     Array.from(document.getElementsByClassName('songItem')).forEach((e) => {
//         e.style.background = 'rgb(105,105,105,.0)'
//     })
// }

// makeAllBackground();

// Array.from(document.getElementsByClassName('songItem')).style.background = 'rgb(105,105,105,1)'
// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
//         // el.classList.remove('active1')
//         el.classList.remove("bi-play-circle")
//         el.classList.add('bi-pause-circle')
//     })
// }

// ***************************************
let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})

// ******************************************
let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
})

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
})
// *********************************************************




masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1')
        masterPlay.classList.add('bi-pause-fill')
        masterPlay.classList.remove("bi-play-fill")
    } else {
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.add("bi-play-fill")
    }
});
// ******************************************************************************


// music.play()
const songs = [
    {
        id: 1,
        songName: `On my Way <br> <div class='subtitle'> Alan Walker</div>`,
        poster: 'img/1.jpg'
    },
    {
        id: 2,
        songName: `Faded <br> <div class='subtitle'> Alan Walker</div>`,
        poster: 'img/2.jpg'
    },
    {
        id: 3,
        songName: `On And On <br> <div class='subtitle'> Cartoon</div>`,
        poster: 'img/3.jpg'
    },
    {
        id: 4,
        songName: `...<br> <div class='subtitle'>Alan walker</div>`,
        poster: 'img/4.jpg'
    },
    {
        id: 5,
        songName: `music... <br> <div class='subtitle'>..</div>`,
        poster: 'img/5.jpg'
    },
    {
        id: 6,
        songName: `music <br> <div class='subtitle'>unknown</div>`,
        poster: 'img/6.jpg'
    },
    {
        id: 7,
        songName: `Agar Tum Sath Ho<br> <div class='subtitle'>Arijit Singh</div>`,
        poster: 'img/7.jpg'
    },
    {
        id: 8,
        songName: `Suna Hai<br> <div class='subtitle'>Unknown</div>`,
        poster: 'img/8.jpg'
    },
    {
        id: 9,
        songName: `Dilbar <br> <div class='subtitle'>Neha Kakkar</div>`,
        poster: 'img/9.jpg'
    },
    {
        id: 10,
        songName: `Duniya <br> <div class='subtitle'>Sachet..</div>`,
        poster: 'img/10.jpg'
    },
    {
        id: 11,
        songName: `Lagdi Lahore Di <br> <div class='subtitle'>Guru Randhawa</div>`,
        poster: 'img/11.jpg'
    },
    {
        id: 12,
        songName: `Putt <br> <div class='subtitle'>Diljit Dosanjh</div>`,
        poster: 'img/12.jpg'
    },
    {
        id: 13,
        songName: `Baarishein <br> <div class='subtitle'>Atif Aslam</div>`,
        poster: 'img/13.jpg'
    },
    {
        id: 14,
        songName: `Vaaste <br> <div class='subtitle'>Dhvani Bhanushali</div>`,
        poster: 'img/14.jpg'
    },
    {
        id: 15,
        songName: `Lut Gaye <br> <div class='subtitle'>Arijit Singh</div>`,
        poster: 'img/15.jpg'
    },
    {
        id: 16,
        songName: `Meri Zindagi hai tu <br> <div class='subtitle'>Arijit Singh</div>`,
        poster: 'img/16.jpg'
    },
    {
        id: 17,
        songName: `Zarooti Tha <br> <div class='subtitle'>Rahat Fateh Ali Khan</div>`,
        poster: 'img/17.jpg'
    },
    {
        id: 18,
        songName: `Pasoori <br> <div class='subtitle'>unknown</div>`,
        poster: 'img/18.jpg'
    },
    {
        id: 19,
        songName: `E munde <br> <div class='subtitle'>AP Dhillon</div>`,
        poster: 'img/19.jpg'
    },
    {
        id: 20,
        songName: `advertisment <br> <div class='subtitle'>unknown</div>`,
        poster: 'img/20.jpg'
    }
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName
})

// *******************************************************************************************


makeAllPlays()
console.log(makeAllPlays())


