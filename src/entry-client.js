import './style.css'

/** Gallery lightbox: open on button click, navigate with prev/next arrows */
function initGalleryLightbox() {
  const openBtn = document.getElementById('open-gallery-lightbox')
  const lightbox = document.getElementById('gallery-lightbox')
  const img = document.getElementById('gallery-lightbox-img')
  const counterEl = document.getElementById('gallery-lightbox-counter')
  const dataEl = document.getElementById('gallery-images-data')
  if (!openBtn || !lightbox || !img || !counterEl || !dataEl) return

  let images = []
  try {
    images = JSON.parse(dataEl.textContent)
  } catch (_) {
    return
  }
  if (!images.length) return

  let currentIndex = 0
  const total = images.length

  function showImage(index) {
    currentIndex = ((index % total) + total) % total
    const item = images[currentIndex]
    img.src = item.src
    img.alt = item.alt
    counterEl.textContent = `${currentIndex + 1} / ${total}`
  }

  function open() {
    currentIndex = 0
    showImage(0)
    lightbox.classList.add('gallery-lightbox--open')
    lightbox.setAttribute('aria-hidden', 'false')
    document.body.style.overflow = 'hidden'
  }

  function close() {
    lightbox.classList.remove('gallery-lightbox--open')
    lightbox.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = ''
  }

  // Touch swipe for mobile
  let touchStartX = 0
  const minSwipe = 50
  lightbox.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].clientX }, { passive: true })
  lightbox.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX
    if (Math.abs(dx) < minSwipe) return
    if (dx > 0) showImage(currentIndex - 1)
    else showImage(currentIndex + 1)
  }, { passive: true })

  openBtn.addEventListener('click', open)
  lightbox.querySelector('.gallery-lightbox-close').addEventListener('click', close)
  lightbox.querySelector('.gallery-lightbox-backdrop').addEventListener('click', close)
  lightbox.querySelector('.gallery-lightbox-prev').addEventListener('click', () => showImage(currentIndex - 1))
  lightbox.querySelector('.gallery-lightbox-next').addEventListener('click', () => showImage(currentIndex + 1))

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('gallery-lightbox--open')) return
    if (e.key === 'Escape') close()
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1)
    if (e.key === 'ArrowRight') showImage(currentIndex + 1)
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGalleryLightbox)
} else {
  initGalleryLightbox()
}
