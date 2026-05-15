document.addEventListener('turbo:load', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, {
    threshold: 0.14
  })

  document.querySelectorAll('.bloom').forEach((element) => observer.observe(element))

  let ticking = false

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY
        const video = document.querySelector('.hero-video video') // Adjusted selector if needed

        if (video) {
          const scale = 1.25 + scrolled * 0.00008
          const translate = scrolled * 0.06
          video.parentNode.style.transform = `scale(${scale}) translateY(${translate}px)`
        }

        ticking = false
      })

      ticking = true
    }
  })

  if (document.startViewTransition) {
    document.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', () => {
        document.startViewTransition(() => {})
      })
    })
  }
})
