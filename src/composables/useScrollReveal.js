import { onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollReveal() {
  let observer = null
  let mutationObserver = null

  function observeElements() {
    document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => {
      observer.observe(el)
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )

    // Initial observe after next tick to ensure all children are rendered
    nextTick(() => {
      observeElements()
    })

    // Watch for dynamically added .reveal elements
    mutationObserver = new MutationObserver(() => {
      observeElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Safety net: reveal any elements still hidden after 3s
    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          el.classList.add('revealed')
        }
      })
    }, 3000)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
    if (mutationObserver) mutationObserver.disconnect()
  })
}
