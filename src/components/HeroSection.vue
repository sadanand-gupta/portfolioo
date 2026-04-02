<script setup>
import { ref, onMounted } from 'vue'

const loaded = ref(false)
onMounted(() => {
  setTimeout(() => { loaded.value = true }, 100)
})
</script>

<template>
  <section id="hero" :class="['hero', { loaded }]">
    <div class="hero-bg">
      <div class="grain"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="glow glow-3"></div>

      <!-- Animated grid lines -->
      <div class="grid-overlay">
        <div class="grid-line grid-v" v-for="n in 6" :key="'v'+n" :style="{ left: (n * 16.66) + '%' }"></div>
        <div class="grid-line grid-h" v-for="n in 6" :key="'h'+n" :style="{ top: (n * 16.66) + '%' }"></div>
      </div>

      <!-- Floating geometric shapes -->
      <svg class="geo geo-1" viewBox="0 0 120 120" fill="none">
        <rect x="10" y="10" width="100" height="100" stroke="rgba(200,168,110,0.12)" stroke-width="1" transform="rotate(45 60 60)"/>
        <rect x="25" y="25" width="70" height="70" stroke="rgba(200,168,110,0.08)" stroke-width="1" transform="rotate(45 60 60)"/>
      </svg>

      <svg class="geo geo-2" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="90" stroke="rgba(200,168,110,0.07)" stroke-width="1" stroke-dasharray="4 8"/>
        <circle cx="100" cy="100" r="60" stroke="rgba(200,168,110,0.1)" stroke-width="1" stroke-dasharray="2 6"/>
        <circle cx="100" cy="100" r="30" stroke="rgba(200,168,110,0.14)" stroke-width="1"/>
      </svg>

      <svg class="geo geo-3" viewBox="0 0 160 160" fill="none">
        <polygon points="80,10 150,50 150,120 80,160 10,120 10,50" stroke="rgba(200,168,110,0.08)" stroke-width="1" fill="none"/>
        <polygon points="80,35 130,60 130,110 80,135 30,110 30,60" stroke="rgba(200,168,110,0.05)" stroke-width="1" fill="none"/>
      </svg>

      <!-- Floating dots -->
      <div class="dot-cluster">
        <span class="floating-dot" v-for="n in 12" :key="n"
          :style="{
            left: (Math.random() * 100) + '%',
            top: (Math.random() * 100) + '%',
            animationDelay: (n * 0.5) + 's',
            animationDuration: (3 + Math.random() * 4) + 's'
          }"></span>
      </div>
    </div>

    <div class="container hero-content">
      <!-- Decorative line art above label -->
      <svg class="hero-deco-top" width="200" height="40" viewBox="0 0 200 40" fill="none">
        <path d="M0 20 H80 M120 20 H200" stroke="rgba(200,168,110,0.3)" stroke-width="0.5"/>
        <circle cx="100" cy="20" r="6" stroke="rgba(200,168,110,0.4)" stroke-width="0.5" fill="none"/>
        <circle cx="100" cy="20" r="2" fill="rgba(200,168,110,0.5)"/>
      </svg>

      <div class="hero-label">
        <span class="line"></span>
        <span>Graphic & Motion Graphic Designer</span>
        <span class="line"></span>
      </div>

      <h1 class="hero-name">
        <span class="name-line">Surendhar</span>
        <span class="name-line name-accent">.M</span>
      </h1>

      <p class="hero-tagline">
        Crafting visual stories through motion, design & digital artistry
      </p>

      <!-- Tool icons strip -->
      <div class="tool-strip">
        <div class="tool-icon" v-for="(tool, i) in ['Ps', 'Ai', 'Ae', 'Pr', 'Bl', 'Fg']" :key="tool"
          :style="{ animationDelay: (1.2 + i * 0.1) + 's' }">
          {{ tool }}
        </div>
      </div>

      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">
          <span>View Work</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="https://drive.google.com/uc?export=download&id=1yIPGCEwYinb3wJrWm_YlKXMVEbgIqgde" target="_blank" rel="noopener" class="btn btn-outline btn-download">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v9M3 7l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 12h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span>Download Resume</span>
        </a>
        <a href="mailto:worldofsuren@gmail.com?subject=Job%20Opportunity%20-%20Let's%20Work%20Together" class="btn btn-accent">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
            <path d="M1 4.5l6 4 6-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Hire Me</span>
        </a>
      </div>

      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <span class="scroll-text">Scroll</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
  opacity: 0.6;
  pointer-events: none;
}

/* Grid overlay */
.grid-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.grid-line {
  position: absolute;
  background: rgba(200, 168, 110, 0.03);
}

.grid-v {
  width: 1px;
  height: 100%;
  top: 0;
}

.grid-h {
  width: 100%;
  height: 1px;
  left: 0;
}

/* Glows */
.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
}

.glow-1 {
  width: 600px;
  height: 600px;
  background: rgba(200, 168, 110, 0.07);
  top: -150px;
  right: -100px;
  animation: glowPulse 8s ease-in-out infinite;
}

.glow-2 {
  width: 500px;
  height: 500px;
  background: rgba(200, 168, 110, 0.04);
  bottom: -150px;
  left: -100px;
  animation: glowPulse 10s ease-in-out infinite reverse;
}

.glow-3 {
  width: 300px;
  height: 300px;
  background: rgba(200, 168, 110, 0.03);
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: glowPulse 6s ease-in-out infinite 2s;
}

@keyframes glowPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.15); }
}

/* Geometric shapes */
.geo {
  position: absolute;
  pointer-events: none;
}

.geo-1 {
  width: 160px;
  height: 160px;
  top: 12%;
  right: 8%;
  animation: geoRotate 30s linear infinite, geoFloat 6s ease-in-out infinite;
  opacity: 0;
  transition: opacity 1s 0.5s;
}

.loaded .geo-1 { opacity: 1; }

.geo-2 {
  width: 220px;
  height: 220px;
  bottom: 10%;
  left: 5%;
  animation: geoRotateSlow 50s linear infinite reverse, geoFloat 8s ease-in-out infinite 1s;
  opacity: 0;
  transition: opacity 1s 0.8s;
}

.loaded .geo-2 { opacity: 1; }

.geo-3 {
  width: 140px;
  height: 140px;
  top: 60%;
  right: 12%;
  animation: geoRotate 40s linear infinite, geoFloat 7s ease-in-out infinite 2s;
  opacity: 0;
  transition: opacity 1s 1s;
}

.loaded .geo-3 { opacity: 1; }

@keyframes geoRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes geoRotateSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes geoFloat {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -15px; }
}

/* Floating dots */
.dot-cluster {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.floating-dot {
  position: absolute;
  width: 3px;
  height: 3px;
  background: var(--accent);
  border-radius: 50%;
  opacity: 0;
  animation: dotPulse 4s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 0.4; transform: scale(1); }
}

/* Content */
.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-deco-top {
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.8s 0.1s var(--transition);
}

.loaded .hero-deco-top {
  opacity: 1;
  transform: translateY(0);
}

.hero-label {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 32px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s 0.2s var(--transition);
}

.loaded .hero-label {
  opacity: 1;
  transform: translateY(0);
}

.hero-label .line {
  width: 48px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent));
  opacity: 0.6;
}

.hero-label .line:last-child {
  background: linear-gradient(90deg, var(--accent), transparent);
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(52px, 10vw, 110px);
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.05;
  margin-bottom: 24px;
  letter-spacing: -2px;
}

.name-line {
  display: inline-block;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s 0.4s var(--transition);
}

.name-accent {
  color: var(--accent);
  font-style: italic;
  transition-delay: 0.55s;
}

.loaded .name-line {
  opacity: 1;
  transform: translateY(0);
}

.hero-tagline {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 500px;
  line-height: 1.7;
  margin-bottom: 36px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s 0.7s var(--transition);
}

.loaded .hero-tagline {
  opacity: 1;
  transform: translateY(0);
}

/* Tool strip */
.tool-strip {
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
}

.tool-icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--accent);
  border: 1px solid var(--border);
  background: rgba(200, 168, 110, 0.04);
  opacity: 0;
  transform: translateY(10px) scale(0.8);
  animation: toolPop 0.5s forwards;
  transition: all 0.3s var(--transition);
}

.tool-icon:hover {
  border-color: var(--accent);
  background: rgba(200, 168, 110, 0.12);
  transform: translateY(-3px);
}

@keyframes toolPop {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* CTA */
.hero-cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s 0.9s var(--transition);
}

.loaded .hero-cta {
  opacity: 1;
  transform: translateY(0);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 0;
  transition: all 0.4s var(--transition);
  cursor: pointer;
}

.btn-primary {
  background: var(--accent);
  color: var(--bg);
}

.btn-primary svg {
  transition: transform 0.3s;
}

.btn-primary:hover {
  background: var(--text-primary);
  color: var(--bg);
}

.btn-primary:hover svg {
  transform: translateX(4px);
}

.btn-outline {
  border: 1px solid var(--border-light);
  color: var(--text-secondary);
}

.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.btn-download svg,
.btn-accent svg {
  transition: transform 0.3s;
}

.btn-download:hover svg {
  transform: translateY(3px);
}

.btn-accent {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
}

.btn-accent:hover {
  background: var(--accent);
  color: var(--bg);
}

.btn-accent:hover svg {
  transform: scale(1.1);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0;
  animation: fadeIn 1s 1.8s forwards;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: scrollLine 2s infinite;
}

@keyframes scrollLine {
  0% { opacity: 1; transform: scaleY(1); transform-origin: top; }
  50% { opacity: 0.5; transform: scaleY(0.5); transform-origin: top; }
  100% { opacity: 1; transform: scaleY(1); transform-origin: top; }
}

.scroll-text {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-muted);
}

@keyframes fadeIn {
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .hero-label {
    font-size: 10px;
    letter-spacing: 3px;
  }
  .hero-label .line {
    width: 24px;
  }
  .hero-tagline {
    font-size: 16px;
    padding: 0 16px;
  }
  .hero-cta {
    flex-direction: column;
    width: 100%;
    padding: 0 32px;
  }
  .btn {
    justify-content: center;
  }
  .geo-1, .geo-3 { display: none; }
  .geo-2 { width: 140px; height: 140px; }
  .tool-strip { flex-wrap: wrap; justify-content: center; }
}
</style>
