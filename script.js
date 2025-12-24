// 获取元素
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const musicControl = document.getElementById('musicControl');
const bgMusic = document.getElementById('bgMusic');

let isMusicPlaying = false;

// 设置音量(0.0 到 1.0，0.3 表示 30% 音量)
bgMusic.volume = 0.3;

// 音乐控制
musicControl.addEventListener('click', function(e) {
    e.stopPropagation();
    if (isMusicPlaying) {
        bgMusic.pause();
        musicControl.textContent = '♬';
        isMusicPlaying = false;
    } else {
        bgMusic.play();
        musicControl.textContent = '♪';
        isMusicPlaying = true;
    }
});

// 点击信封打开
envelope.addEventListener('click', function() {
    envelope.classList.add('open');

    // 自动播放音乐
    if (!isMusicPlaying) {
        bgMusic.play().then(() => {
            musicControl.textContent = '♪';
            isMusicPlaying = true;
        }).catch(err => {
            console.log('自动播放失败，需要用户手动点击');
        });
    }

    setTimeout(function() {
        letter.classList.add('show');
    }, 400);

    envelope.style.pointerEvents = 'none';
});