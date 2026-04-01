<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 50
}

function closeMobile() {
  mobileOpen.value = false
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav :class="['navbar', { scrolled }]">
    <div class="nav-inner">
      <a href="#hero" class="logo" @click="closeMobile">
        <span class="logo-text">S</span>
        <span class="logo-dot">.</span>
      </a>

      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" :class="{ active: mobileOpen }">
        <span></span>
        <span></span>
      </button>

      <ul :class="['nav-links', { open: mobileOpen }]">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" @click="closeMobile">{{ link.label }}</a>
        </li>
      </ul>

      <div class="nav-actions">
        <a href="https://drive.google.com/uc?export=download&id=1AMyR-ftFvz_qWLYodQ1YXM5O_yTnTh_l"
          target="_blank" rel="noopener" class="nav-btn nav-btn-outline">
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v9M3 7l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 12h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          Resume
        </a>
        <a href="mailto:worldofsuren@gmail.com?subject=Job%20Opportunity%20-%20Let's%20Work%20Together"
          class="nav-btn nav-btn-primary">Hire Me</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 24px 0;
  transition: all 0.4s var(--transition);
}

.navbar.scrolled {
  padding: 16px 0;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
}

.logo-dot {
  color: var(--accent);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 36px;
}

.nav-links a {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.3s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.3s var(--transition);
}

.nav-links a:hover {
  color: var(--accent);
}

.nav-links a:hover::after {
  width: 100%;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.mobile-toggle span {
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--text-primary);
  transition: all 0.3s;
}

.mobile-toggle.active span:first-child {
  transform: rotate(45deg) translate(3px, 3px);
}

.mobile-toggle.active span:last-child {
  transform: rotate(-45deg) translate(3px, -3px);
}

/* Nav action buttons */
.nav-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s var(--transition);
  cursor: pointer;
  white-space: nowrap;
}

.nav-btn svg {
  transition: transform 0.3s;
}

.nav-btn-outline {
  border: 1px solid var(--border-light);
  color: var(--text-secondary);
}

.nav-btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.nav-btn-outline:hover svg {
  transform: translateY(2px);
}

.nav-btn-primary {
  background: var(--accent);
  color: var(--bg);
  border: 1px solid var(--accent);
}

.nav-btn-primary:hover {
  background: var(--text-primary);
  border-color: var(--text-primary);
  color: var(--bg);
}

@media (max-width: 768px) {
  .nav-inner {
    padding: 0 24px;
  }

  .mobile-toggle {
    display: flex;
  }

  .nav-actions {
    display: none;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 10, 10, 0.98);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
  }

  .nav-links.open {
    opacity: 1;
    pointer-events: all;
  }

  .nav-links a {
    font-size: 18px;
  }
}
</style>
