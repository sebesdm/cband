//  YOUTUBE PLAYER
// ================================================================

let ytPlayer = null;
let ytReady = false;
let ytCurrentId = '';

// Load YouTube IFrame API
const ytTag = document.createElement('script');
ytTag.src = 'https://www.youtube.com/iframe_api';
document.head.appendChild(ytTag);

window.onYouTubeIframeAPIReady = function() {
    ytPlayer = new YT.Player('yt-player', {
        width: 640, height: 480,
        playerVars: {
            autoplay: 1, controls: 0, modestbranding: 1, rel: 0,
            showinfo: 0, fs: 0, iv_load_policy: 3, disablekb: 1,
            playsinline: 1, cc_load_policy: 0, mute: 1,
        },
        events: {
            onReady: () => {
                ytReady = true;
                ytWrap.style.display = 'block';
                ytWrap.style.opacity = '0';
                ytWrap.style.pointerEvents = 'none';
            },
            onStateChange: (e) => {
                // Video ended — clear ID after cooldown to prevent strobe
                if (e.data === 0) {
                    setTimeout(() => { ytCurrentId = ''; }, 2000);
                }
                // Video playing — reveal; buffering — hide
                // Skip during movement and briefly after arrival
                if (S.dishMoving || (performance.now() - lastArrival) < 1500) return;
                if (e.data === 1) {
                    ytWrap.style.opacity = '1';
                } else if (e.data === 3 || e.data === -1) {
                    ytWrap.style.opacity = '0';
                }
            },
        }
    });
};

// ================================================================