const IconPlus = document.getElementById("plus-icon");
const Xicons = document.getElementById("X-icon");
const ListPlus = document.getElementById("list-plus");
const HomeIcons = document.getElementById("homeIcons");
const HoverBoder = document.getElementById("boder-hover");
const InputClick = document.getElementById("Input");
const IconsSearch = document.getElementById("Icons-Search");
const userAvatar = document.getElementById("user");
const listUserAcount = document.getElementById("list__user-account");
const IconPlusAside = document.getElementById("icons--list-plus");
const listItemAside = document.getElementById("listItemAside");
console.log(listItemAside);

const Click = IconPlus.addEventListener("click", () => {
  ListPlus.classList.toggle("active");
  Xicons.style.display = "block";
  IconPlus.style.display = "none";
});

const CloseX = Xicons.addEventListener("click", () => {
  ListPlus.classList.remove("active");
  Xicons.style.display = "none";
  IconPlus.style.display = "block";
});

document.addEventListener("click", (e) => {
  if (
    !ListPlus.contains(e.target) &&
    e.target !== IconPlus &&
    e.target !== Xicons
  ) {
    ListPlus.classList.remove("active");
    Xicons.style.display = "none";
    IconPlus.style.display = "block";
  }
});

const ClickHomeIcons = HomeIcons.addEventListener("click", () => {
  HomeIcons.style.animation = "Zoomicons 0.3s linear";
  setTimeout(() => {
    HomeIcons.style.animation = "";
  }, 300);
});

InputClick.addEventListener("focus", () => {
  HoverBoder.style.border = "2px solid var(--white-color)";
});

InputClick.addEventListener("blur", () => {
  HoverBoder.style.border = "2px solid transparent";
});

IconsSearch.addEventListener("click", () => {
  HoverBoder.style.border = "2px solid var(--white-color)";
  setTimeout(() => {
    HoverBoder.style.border = "2px solid transparent";
  }, 100);
});

userAvatar.addEventListener("click", (e) => {
  e.stopPropagation();
  listUserAcount.style.display = "block";
});

document.addEventListener("click", (e) => {
  if (!userAvatar.contains(e.target) && !listUserAcount.contains(e.target)) {
    listUserAcount.style.display = "none";
  }
});

IconPlusAside.addEventListener("click", (e) => {
  listItemAside.classList.toggle("active");
  e.stopPropagation();
});

// Ẩn khi click ra ngoài
document.addEventListener("click", (e) => {
  if (!IconPlusAside.contains(e.target) && !listItemAside.contains(e.target)) {
    listItemAside.classList.remove("active");
  }
});

// Chức năngconst audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const repeatBtn = document.querySelector(".icons-repeat");
const shuffleBtn = document.querySelector(".icons-shuffle");

const songs = [
  {
    name: "Hư Không",
    img: "../img/hu_khong.jpg",
    artist: "Kha",
    src: "../audio/HuKhong-Kha-12792565.mp3",
    duration: "5:54",
  },
  {
    name: "id 072019",
    img: "../img/w-n.jpg",
    artist: "W/N",
    src: "../audio/Id072019-WN-10597501.mp3",
    duration: "4:31",
  },
  {
    name: "Có Em",
    img: "../img/lowG.jpg",
    artist: "Madihu ft LowG",
    src: "../audio/CoEm-MadihuLowG-7211022.mp3",
    duration: "3:38",
  },
  {
    name: "Gió",
    img: "../img/jank.jpg",
    artist: "Jank",
    src: "../audio/Gio-Jank-8738046.mp3",
    duration: "4:38",
  },
];

let currentSongIndex = Math.floor(Math.random() * songs.length);
let isPlaying = false;
let isRepeat = false;
let isShuffle = false;

function loadSong(songIndex) {
  const song = songs[songIndex];
  audio.src = song.src;
  document.querySelector(".content_play-name").textContent = song.name;
  document.querySelector(".content_play-artirts").textContent = song.artist;
  const imgElement = document.querySelector(".play_left-img"); // Thêm dấu chấm cho class
  if (imgElement) {
    imgElement.src = song.img; // Gán đường dẫn hình ảnh vào src
  } else {
    console.error("Không tìm thấy phần tử .play_left-img");
  }

  durationEl.textContent = song.duration;

  // Reset thời gian về 0
  currentTimeEl.textContent = "0:00";
  progressBar.value = 0;

  // Đảm bảo âm thanh được tải trước khi phát
  audio.load();
  audio.oncanplaythrough = () => {
    if (isPlaying) audio.play();
  };
}

function playPauseMusic() {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.classList.replace("fa-circle-pause", "fa-circle-play");
  } else {
    audio.play();
    playPauseBtn.classList.replace("fa-circle-play", "fa-circle-pause");
  }
  isPlaying = !isPlaying;
}

function nextSong() {
  if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * songs.length);
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  loadSong(currentSongIndex);
  audio.play();
  isPlaying = true;
  playPauseBtn.classList.replace("fa-circle-play", "fa-circle-pause");
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  isPlaying = true;
  playPauseBtn.classList.replace("fa-circle-play", "fa-circle-pause");
}

audio.addEventListener("timeupdate", () => {
  if (!isNaN(audio.duration) && audio.duration > 0) {
    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime % 60);
    currentTimeEl.textContent = `${currentMinutes}:${
      currentSeconds < 10 ? "0" : ""
    }${currentSeconds}`;
    progressBar.value = (audio.currentTime / audio.duration) * 100;
  }
});

progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

audio.addEventListener("ended", () => {
  if (isRepeat) {
    audio.play();
  } else {
    nextSong();
  }
});

repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  repeatBtn.style.color = isRepeat ? "#1DB954" : "#b3b3b3";
});

shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.style.color = isShuffle ? "#1DB954" : "#b3b3b3";
});

playPauseBtn.addEventListener("click", playPauseMusic);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

loadSong(currentSongIndex);

const volumeBar = document.getElementById("volumeBar");
volumeBar.addEventListener("input", () => {
  audio.volume = volumeBar.value / 100; // Điều chỉnh âm lượng từ 0 đến 1
});
