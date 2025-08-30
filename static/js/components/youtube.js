    function initLiteEmbeds() {
      console.log('youtube-lite js aktif');
      document.querySelectorAll('.youtube-lite').forEach(el => {
        if (el.classList.contains('yt-initialized')) return;
        el.classList.add('yt-initialized');
        const videoId = el.dataset.ytid;
        const title = el.dataset.title || 'YouTube Video';
        const thumbDiv = document.createElement('div');
        thumbDiv.className = 'youtube-lite-thumb';
        thumbDiv.style.backgroundImage = `url('https://i.ytimg.com/vi/${videoId}/hqdefault.jpg')`;
        const playBtn = document.createElement('button');
        playBtn.type = 'button';
        playBtn.className = 'youtube-lite-play';
        //playBtn.innerText = '▶';
        playBtn.setAttribute('aria-label', `Play: ${title}`);
        const label = document.createElement('span');
        label.className = 'youtube-lite-label';
        label.textContent = title;
        el.innerHTML = '';
        el.appendChild(thumbDiv);
        el.appendChild(playBtn);
        el.appendChild(label);
        el.addEventListener('click', function handleLiteClick(e) {
          if (el.classList.contains('yt-activated')) return;
          el.classList.add('yt-activated');
          el.innerHTML = `<iframe width="560" height="315"
            src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0"
            title="${title}"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen></iframe>`;
        }, { once: true });
      });
    }
    document.addEventListener('DOMContentLoaded', initLiteEmbeds);