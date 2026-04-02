<script setup>
import { ref } from 'vue'

const projects = [
  {
    title: 'Chocolatex',
    role: 'Motion Graphics Designer & Video Editor',
    period: 'Dec 2024 — Apr 2025',
    desc: 'Directed end-to-end multimedia content creation aligned with brand identity and content strategy goals.',
    points: [
      'Created 20+ motion graphics and video assets for digital platforms, integrating AI tools to improve production efficiency by 30%.',
      'Achieved 45% increase in digital engagement through visual effects, brand storytelling, and platform-optimized content delivery.',
      'Directed end-to-end creative direction aligned with brand positioning and content strategy goals.',
    ],
    tags: ['Motion Graphics', 'Video Editing', 'AI Tools', 'Brand Storytelling'],
    color: '#c8a86e',
    pattern: 'waves',
  },
  {
    title: 'Out Box Creations',
    role: 'Multi-Brand Creative & Digital Campaign',
    period: 'Apr — Dec 2024',
    desc: 'Delivered creative direction and digital campaign solutions for 4 brands including Nija Technologies, The Wedding Biryani, Coal BBQ, and Qatar Power & Safety.',
    points: [
      'Produced 60+ brand graphics, promotional materials, and motion graphic videos across 4 brands.',
      'Managed social media content strategy and engagement workflows, driving 30% increase in brand awareness and 25% growth in reach.',
      'Developed targeted campaigns aligned with each brand\'s unique positioning and audience.',
    ],
    tags: ['Brand Identity', 'Content Strategy', 'Campaign Design', 'Multi-Brand'],
    color: '#a0c4e8',
    pattern: 'grid',
  },
  {
    title: 'JJ Modern Designs',
    role: 'Creative Branding & Digital Media Project',
    period: 'Jul 2020 — Sep 2021',
    desc: 'Led end-to-end design and digital branding, delivering 80+ visual materials that resulted in 40% follower growth and 20% increase in e-commerce conversions.',
    points: [
      'Designed cohesive visual materials (posters, flyers, signage, packaging) and managed social media for Instagram & Facebook.',
      'Produced product photography and promotional videos for e-commerce platforms, boosting brand visibility by 35%.',
      'Contributed creative insights to digital marketing strategies, strengthening overall online presence.',
    ],
    tags: ['Branding', 'E-commerce', 'Photography', 'Digital Marketing'],
    color: '#d4a0b0',
    pattern: 'circles',
  },
]

const activeProject = ref(0)
</script>

<template>
  <section id="projects">
    <div class="container">
      <div class="projects-header reveal">
        <div class="header-row">
          <div>
            <span class="section-label">Portfolio</span>
            <h2 class="section-title">Selected Projects</h2>
            <p class="section-subtitle">
              A selection of projects showcasing creative branding, motion design,
              and digital campaign work across multiple industries.
            </p>
          </div>
          <svg class="header-deco" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="55" stroke="rgba(200,168,110,0.12)" stroke-width="0.5" stroke-dasharray="3 6"/>
            <circle cx="60" cy="60" r="35" stroke="rgba(200,168,110,0.08)" stroke-width="0.5"/>
            <line x1="60" y1="0" x2="60" y2="120" stroke="rgba(200,168,110,0.06)" stroke-width="0.5"/>
            <line x1="0" y1="60" x2="120" y2="60" stroke="rgba(200,168,110,0.06)" stroke-width="0.5"/>
          </svg>
        </div>
      </div>

      <div class="projects-grid reveal">
        <div
          v-for="(project, i) in projects"
          :key="project.title"
          :class="['project-card', { active: activeProject === i }, `stagger-${i + 1}`]"
          @mouseenter="activeProject = i"
        >
          <!-- Abstract visual header for each project -->
          <div class="project-visual">
            <!-- Waves pattern -->
            <svg v-if="project.pattern === 'waves'" class="visual-svg" viewBox="0 0 400 180" preserveAspectRatio="none">
              <defs>
                <linearGradient :id="'grad-'+i" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" :style="`stop-color:${project.color};stop-opacity:0.15`"/>
                  <stop offset="100%" :style="`stop-color:${project.color};stop-opacity:0.02`"/>
                </linearGradient>
              </defs>
              <rect width="400" height="180" :fill="`url(#grad-${i})`"/>
              <path d="M0 120 Q50 80 100 110 T200 100 T300 120 T400 90 V180 H0Z" :fill="project.color" fill-opacity="0.06"/>
              <path d="M0 140 Q80 100 160 130 T320 110 T400 130 V180 H0Z" :fill="project.color" fill-opacity="0.04"/>
              <circle cx="320" cy="50" r="35" :stroke="project.color" stroke-opacity="0.1" stroke-width="1" fill="none"/>
              <circle cx="320" cy="50" r="20" :stroke="project.color" stroke-opacity="0.15" stroke-width="0.5" fill="none"/>
              <line x1="40" y1="30" x2="120" y2="30" :stroke="project.color" stroke-opacity="0.12" stroke-width="0.5"/>
              <line x1="40" y1="45" x2="90" y2="45" :stroke="project.color" stroke-opacity="0.08" stroke-width="0.5"/>
              <text x="40" y="75" :fill="project.color" fill-opacity="0.08" font-family="'Playfair Display', serif" font-size="48" font-weight="500">01</text>
            </svg>

            <!-- Grid pattern -->
            <svg v-if="project.pattern === 'grid'" class="visual-svg" viewBox="0 0 400 180" preserveAspectRatio="none">
              <defs>
                <linearGradient :id="'grad-'+i" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" :style="`stop-color:${project.color};stop-opacity:0.12`"/>
                  <stop offset="100%" :style="`stop-color:${project.color};stop-opacity:0.02`"/>
                </linearGradient>
                <pattern :id="'gridp-'+i" width="30" height="30" patternUnits="userSpaceOnUse">
                  <rect width="30" height="30" fill="none" :stroke="project.color" stroke-opacity="0.06" stroke-width="0.5"/>
                </pattern>
              </defs>
              <rect width="400" height="180" :fill="`url(#grad-${i})`"/>
              <rect width="400" height="180" :fill="`url(#gridp-${i})`"/>
              <rect x="50" y="30" width="80" height="80" rx="4" :stroke="project.color" stroke-opacity="0.15" stroke-width="1" fill="none"/>
              <rect x="70" y="50" width="80" height="80" rx="4" :stroke="project.color" stroke-opacity="0.08" stroke-width="1" fill="none"/>
              <circle cx="310" cy="90" r="40" :stroke="project.color" stroke-opacity="0.1" stroke-width="0.5" stroke-dasharray="4 4" fill="none"/>
              <text x="280" y="75" :fill="project.color" fill-opacity="0.08" font-family="'Playfair Display', serif" font-size="48" font-weight="500">02</text>
            </svg>

            <!-- Circles pattern -->
            <svg v-if="project.pattern === 'circles'" class="visual-svg" viewBox="0 0 400 180" preserveAspectRatio="none">
              <defs>
                <linearGradient :id="'grad-'+i" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" :style="`stop-color:${project.color};stop-opacity:0.1`"/>
                  <stop offset="100%" :style="`stop-color:${project.color};stop-opacity:0.02`"/>
                </linearGradient>
              </defs>
              <rect width="400" height="180" :fill="`url(#grad-${i})`"/>
              <circle cx="80" cy="90" r="60" :stroke="project.color" stroke-opacity="0.08" stroke-width="1" fill="none"/>
              <circle cx="80" cy="90" r="40" :stroke="project.color" stroke-opacity="0.12" stroke-width="0.5" fill="none"/>
              <circle cx="80" cy="90" r="20" :stroke="project.color" stroke-opacity="0.18" stroke-width="0.5" fill="none"/>
              <circle cx="280" cy="60" r="50" :stroke="project.color" stroke-opacity="0.06" stroke-width="1" fill="none"/>
              <circle cx="340" cy="120" r="30" :stroke="project.color" stroke-opacity="0.1" stroke-width="0.5" fill="none"/>
              <line x1="160" y1="40" x2="240" y2="40" :stroke="project.color" stroke-opacity="0.1" stroke-width="0.5"/>
              <line x1="160" y1="55" x2="210" y2="55" :stroke="project.color" stroke-opacity="0.07" stroke-width="0.5"/>
              <text x="170" y="110" :fill="project.color" fill-opacity="0.06" font-family="'Playfair Display', serif" font-size="48" font-weight="500">03</text>
            </svg>

            <div class="visual-overlay"></div>
          </div>

          <div class="project-body">
            <div class="project-top">
              <span class="project-number">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="project-period">{{ project.period }}</span>
            </div>

            <h3 class="project-title">{{ project.title }}</h3>
            <span class="project-role">{{ project.role }}</span>
            <p class="project-desc">{{ project.desc }}</p>

            <ul class="project-points">
              <li v-for="(point, j) in project.points" :key="j">{{ point }}</li>
            </ul>

            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#projects {
  background: var(--bg-secondary);
}

.projects-header {
  margin-bottom: 64px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.header-deco {
  flex-shrink: 0;
  animation: slowRotate 40s linear infinite;
}

@keyframes slowRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: all 0.5s var(--transition);
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s var(--transition);
  z-index: 2;
}

.project-card.active::before,
.project-card:hover::before {
  transform: scaleX(1);
}

.project-card:hover {
  border-color: var(--border-light);
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

/* Visual header */
.project-visual {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.visual-svg {
  width: 100%;
  height: 100%;
  display: block;
}

.visual-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(to top, var(--bg-card), transparent);
}

.project-card:hover .visual-svg {
  animation: visualShift 0.6s ease-out;
}

@keyframes visualShift {
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
}

.project-body {
  padding: 28px 40px 40px;
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.project-number {
  font-family: var(--font-display);
  font-size: 14px;
  color: var(--accent);
  font-style: italic;
}

.project-period {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-muted);
}

.project-title {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.project-role {
  font-size: 13px;
  color: var(--accent);
  font-weight: 500;
  display: block;
  margin-bottom: 16px;
}

.project-desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.project-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}

.project-points li {
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-muted);
  padding-left: 14px;
  position: relative;
}

.project-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 4px;
  height: 1px;
  background: var(--accent);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 6px 12px;
  border: 1px solid var(--border);
  color: var(--text-muted);
  transition: all 0.3s;
}

.project-card:hover .tag {
  border-color: var(--accent-dim);
  color: var(--accent);
  background: var(--accent-dim);
}

/* Stagger animation for cards — driven by parent .revealed */
.project-card {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s var(--transition), transform 0.7s var(--transition),
    border-color 0.5s var(--transition), box-shadow 0.5s var(--transition);
}

.project-card.stagger-1 { transition-delay: 0.1s; }
.project-card.stagger-2 { transition-delay: 0.25s; }
.project-card.stagger-3 { transition-delay: 0.4s; }

.projects-grid.revealed .project-card {
  opacity: 1;
  transform: translateY(0);
}

.projects-grid.revealed .project-card:hover {
  transform: translateY(-6px);
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .header-deco {
    display: none;
  }
}
</style>
