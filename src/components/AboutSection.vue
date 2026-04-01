<script setup>
import { ref, onMounted } from 'vue'

const counters = ref([
  { target: 5, current: 0, suffix: '+', label: 'Years Experience' },
  { target: 20, current: 0, suffix: '+', label: 'Tools Mastered' },
  { target: 6, current: 0, suffix: '+', label: 'Brands Served' },
])

const started = ref(false)

function animateCounters() {
  if (started.value) return
  started.value = true
  counters.value.forEach((counter) => {
    let current = 0
    const step = counter.target / 40
    const interval = setInterval(() => {
      current += step
      if (current >= counter.target) {
        counter.current = counter.target
        clearInterval(interval)
      } else {
        counter.current = Math.floor(current)
      }
    }, 40)
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) animateCounters()
    },
    { threshold: 0.3 }
  )
  const el = document.getElementById('about')
  if (el) observer.observe(el)
})
</script>

<template>
  <section id="about">
    <!-- Background deco -->
    <div class="about-bg-deco">
      <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
        <circle cx="250" cy="250" r="240" stroke="rgba(200,168,110,0.03)" stroke-width="0.5"/>
        <circle cx="250" cy="250" r="180" stroke="rgba(200,168,110,0.04)" stroke-width="0.5" stroke-dasharray="2 6"/>
        <circle cx="250" cy="250" r="120" stroke="rgba(200,168,110,0.03)" stroke-width="0.5"/>
        <circle cx="250" cy="250" r="60" stroke="rgba(200,168,110,0.05)" stroke-width="0.5" stroke-dasharray="4 4"/>
        <line x1="250" y1="10" x2="250" y2="490" stroke="rgba(200,168,110,0.02)" stroke-width="0.5"/>
        <line x1="10" y1="250" x2="490" y2="250" stroke="rgba(200,168,110,0.02)" stroke-width="0.5"/>
      </svg>
    </div>

    <div class="container">
      <div class="about-grid">
        <div class="about-left reveal">
          <span class="section-label">About</span>
          <h2 class="section-title">
            Designing with purpose,<br>
            <em>moving with intent.</em>
          </h2>
          <div class="divider"></div>

          <!-- Visual art piece -->
          <div class="about-visual">
            <svg class="about-art" viewBox="0 0 300 300" fill="none">
              <!-- Abstract composition -->
              <rect x="20" y="20" width="260" height="260" stroke="rgba(200,168,110,0.08)" stroke-width="0.5"/>

              <!-- Bezier curves - motion trail -->
              <path d="M40 260 C40 160 120 120 150 100 S260 60 260 40" stroke="rgba(200,168,110,0.2)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
              <path d="M40 240 C60 180 140 140 170 120 S260 80 260 60" stroke="rgba(200,168,110,0.12)" stroke-width="1" fill="none" stroke-linecap="round"/>
              <path d="M40 220 C80 200 160 160 190 140 S260 100 260 80" stroke="rgba(200,168,110,0.07)" stroke-width="0.5" fill="none" stroke-linecap="round"/>

              <!-- Key points -->
              <circle cx="150" cy="100" r="6" fill="rgba(200,168,110,0.25)"/>
              <circle cx="150" cy="100" r="12" stroke="rgba(200,168,110,0.15)" stroke-width="0.5" fill="none"/>

              <!-- Design grid -->
              <line x1="80" y1="20" x2="80" y2="280" stroke="rgba(200,168,110,0.04)" stroke-width="0.5"/>
              <line x1="150" y1="20" x2="150" y2="280" stroke="rgba(200,168,110,0.04)" stroke-width="0.5"/>
              <line x1="220" y1="20" x2="220" y2="280" stroke="rgba(200,168,110,0.04)" stroke-width="0.5"/>
              <line x1="20" y1="80" x2="280" y2="80" stroke="rgba(200,168,110,0.04)" stroke-width="0.5"/>
              <line x1="20" y1="150" x2="280" y2="150" stroke="rgba(200,168,110,0.04)" stroke-width="0.5"/>
              <line x1="20" y1="220" x2="280" y2="220" stroke="rgba(200,168,110,0.04)" stroke-width="0.5"/>

              <!-- Corner accents -->
              <path d="M20 40 L20 20 L40 20" stroke="rgba(200,168,110,0.25)" stroke-width="1"/>
              <path d="M260 20 L280 20 L280 40" stroke="rgba(200,168,110,0.25)" stroke-width="1"/>
              <path d="M280 260 L280 280 L260 280" stroke="rgba(200,168,110,0.25)" stroke-width="1"/>
              <path d="M40 280 L20 280 L20 260" stroke="rgba(200,168,110,0.25)" stroke-width="1"/>

              <!-- Small data points -->
              <circle cx="80" cy="200" r="2" fill="rgba(200,168,110,0.3)"/>
              <circle cx="220" cy="80" r="2" fill="rgba(200,168,110,0.3)"/>
              <circle cx="260" cy="40" r="3" fill="rgba(200,168,110,0.4)"/>
              <circle cx="40" cy="260" r="3" fill="rgba(200,168,110,0.4)"/>

              <!-- Text element -->
              <text x="40" y="270" fill="rgba(200,168,110,0.06)" font-family="'Playfair Display', serif" font-size="64" font-weight="500">S.</text>
            </svg>
          </div>
        </div>

        <div class="about-right">
          <p class="about-text reveal reveal-delay-1">
            I began my journey in the creative industry at the age of 18, exploring graphic
            design and visual effects. I enjoy creating visual stories, experimenting with
            different design techniques, and bringing ideas to life through motion graphics
            and digital tools.
          </p>
          <p class="about-text reveal reveal-delay-2">
            I value learning new skills and collaborating with teams to
            deliver designs that are not only visually appealing but also meaningful and
            effective. My approach combines traditional design principles with cutting-edge
            AI-powered workflows.
          </p>

          <!-- Service highlights -->
          <div class="services reveal reveal-delay-2">
            <div class="service-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <path d="M3 9h18M9 3v18" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/>
              </svg>
              <span>Brand Identity</span>
            </div>
            <div class="service-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/>
              </svg>
              <span>Motion Graphics</span>
            </div>
            <div class="service-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 3v9l6 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.4"/>
              </svg>
              <span>Video Editing</span>
            </div>
            <div class="service-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.5"/>
                <path d="M2 17l10 5 10-5" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.3"/>
              </svg>
              <span>Visual Effects</span>
            </div>
          </div>

          <div class="about-stats reveal reveal-delay-3">
            <div class="stat" v-for="counter in counters" :key="counter.label">
              <span class="stat-number">{{ counter.current }}{{ counter.suffix }}</span>
              <span class="stat-label">{{ counter.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#about {
  position: relative;
  overflow: hidden;
}

.about-bg-deco {
  position: absolute;
  left: -200px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  animation: aboutDecoSpin 100s linear infinite;
}

@keyframes aboutDecoSpin {
  from { transform: translateY(-50%) rotate(0deg); }
  to { transform: translateY(-50%) rotate(360deg); }
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.section-title em {
  font-family: var(--font-display);
  color: var(--accent);
}

/* About visual art */
.about-visual {
  margin-top: 40px;
  position: relative;
}

.about-art {
  width: 100%;
  max-width: 320px;
  height: auto;
  opacity: 0.8;
  transition: opacity 0.4s;
}

.about-art:hover {
  opacity: 1;
}

/* Services */
.services {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 40px;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  transition: all 0.3s var(--transition);
}

.service-item svg {
  color: var(--accent);
  flex-shrink: 0;
}

.service-item:hover {
  border-color: var(--accent);
  background: rgba(200, 168, 110, 0.04);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.about-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding-top: 40px;
  border-top: 1px solid var(--border);
}

.stat-number {
  display: block;
  font-family: var(--font-display);
  font-size: 40px;
  font-weight: 500;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-stats {
    gap: 24px;
  }

  .stat-number {
    font-size: 28px;
  }

  .about-bg-deco {
    display: none;
  }

  .services {
    grid-template-columns: 1fr;
  }
}
</style>
