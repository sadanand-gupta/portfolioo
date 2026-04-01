<script setup>
const graphicDesign = [
  { name: 'Adobe Photoshop', level: 95 },
  { name: 'Adobe Illustrator', level: 90 },
  { name: 'Adobe InDesign', level: 85 },
  { name: 'Adobe Premiere Pro', level: 88 },
  { name: 'Adobe Audition', level: 75 },
  { name: 'Figma', level: 82 },
]

const visualEffects = [
  { name: 'Nuke', level: 85 },
  { name: 'Adobe After Effects', level: 92 },
  { name: 'Houdini', level: 70 },
  { name: 'Mocha Pro', level: 80 },
  { name: 'SilhouetteFX', level: 75 },
  { name: '3DEqualizer', level: 72 },
]

const threeD = [
  { name: 'Agisoft Metashape', level: 70 },
  { name: 'Autodesk Maya', level: 78 },
  { name: 'Adobe Substance 3D Painter', level: 75 },
  { name: 'Blender', level: 82 },
]

const categories = [
  {
    title: 'Graphic Design',
    icon: '01',
    tools: graphicDesign,
    svgIcon: 'design',
  },
  {
    title: 'Visual Effects',
    icon: '02',
    tools: visualEffects,
    svgIcon: 'vfx',
  },
  {
    title: '3D & Motion',
    icon: '03',
    tools: threeD,
    svgIcon: 'three',
  },
]
</script>

<template>
  <section id="skills">
    <!-- Background decoration -->
    <div class="skills-bg-deco">
      <svg class="bg-pattern" viewBox="0 0 600 600" fill="none">
        <circle cx="300" cy="300" r="280" stroke="rgba(200,168,110,0.03)" stroke-width="1"/>
        <circle cx="300" cy="300" r="200" stroke="rgba(200,168,110,0.04)" stroke-width="0.5" stroke-dasharray="4 8"/>
        <circle cx="300" cy="300" r="120" stroke="rgba(200,168,110,0.05)" stroke-width="0.5"/>
      </svg>
    </div>

    <div class="container">
      <div class="skills-header reveal">
        <span class="section-label">Expertise</span>
        <h2 class="section-title">Tools & Technologies</h2>
        <p class="section-subtitle">
          Proficient in industry-standard software across graphic design,
          visual effects, and 3D workflows.
        </p>
      </div>

      <div class="skills-grid">
        <div
          v-for="(cat, i) in categories"
          :key="cat.title"
          class="skill-card reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <!-- Card SVG icon header -->
          <div class="card-icon-area">
            <!-- Design icon -->
            <svg v-if="cat.svgIcon === 'design'" class="card-svg-icon" viewBox="0 0 80 80" fill="none">
              <rect x="10" y="10" width="60" height="60" rx="4" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.3"/>
              <rect x="20" y="20" width="20" height="20" rx="2" fill="currentColor" fill-opacity="0.15"/>
              <circle cx="52" cy="30" r="8" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.3"/>
              <line x1="20" y1="52" x2="60" y2="52" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.2"/>
              <line x1="20" y1="60" x2="45" y2="60" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.15"/>
            </svg>
            <!-- VFX icon -->
            <svg v-if="cat.svgIcon === 'vfx'" class="card-svg-icon" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="28" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.3"/>
              <circle cx="40" cy="40" r="16" stroke="currentColor" stroke-width="1" stroke-opacity="0.2" stroke-dasharray="3 3"/>
              <circle cx="40" cy="40" r="5" fill="currentColor" fill-opacity="0.2"/>
              <path d="M40 12 L40 20 M40 60 L40 68 M12 40 L20 40 M60 40 L68 40" stroke="currentColor" stroke-width="1" stroke-opacity="0.15"/>
              <path d="M22 22 L27 27 M53 53 L58 58 M58 22 L53 27 M27 53 L22 58" stroke="currentColor" stroke-width="1" stroke-opacity="0.1"/>
            </svg>
            <!-- 3D icon -->
            <svg v-if="cat.svgIcon === 'three'" class="card-svg-icon" viewBox="0 0 80 80" fill="none">
              <path d="M40 15 L65 30 L65 55 L40 70 L15 55 L15 30 Z" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.3" fill="none"/>
              <path d="M40 15 L40 42" stroke="currentColor" stroke-width="1" stroke-opacity="0.15"/>
              <path d="M40 42 L65 55" stroke="currentColor" stroke-width="1" stroke-opacity="0.15"/>
              <path d="M40 42 L15 55" stroke="currentColor" stroke-width="1" stroke-opacity="0.15"/>
              <path d="M40 42 L40 70" stroke="currentColor" stroke-width="1" stroke-opacity="0.2"/>
              <circle cx="40" cy="42" r="3" fill="currentColor" fill-opacity="0.2"/>
            </svg>
          </div>

          <div class="card-header">
            <span class="card-number">{{ cat.icon }}</span>
            <h3 class="card-title">{{ cat.title }}</h3>
          </div>

          <div class="card-divider"></div>

          <ul class="tool-list">
            <li v-for="tool in cat.tools" :key="tool.name" class="tool-item">
              <div class="tool-info">
                <span class="tool-dot"></span>
                <span class="tool-name">{{ tool.name }}</span>
              </div>
              <div class="tool-bar">
                <div class="tool-bar-fill" :style="{ width: tool.level + '%' }"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#skills {
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.skills-bg-deco {
  position: absolute;
  top: 50%;
  right: -150px;
  transform: translateY(-50%);
  pointer-events: none;
}

.bg-pattern {
  width: 600px;
  height: 600px;
  animation: slowSpin 80s linear infinite;
}

@keyframes slowSpin {
  from { transform: translateY(-50%) rotate(0deg); }
  to { transform: translateY(-50%) rotate(360deg); }
}

.skills-header {
  margin-bottom: 64px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 40px;
  transition: all 0.4s var(--transition);
  position: relative;
  overflow: hidden;
}

.skill-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), transparent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s var(--transition);
}

.skill-card:hover::after {
  transform: scaleX(1);
}

.skill-card:hover {
  border-color: var(--accent);
  background: var(--bg-card-hover);
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
}

/* Card icon */
.card-icon-area {
  margin-bottom: 24px;
}

.card-svg-icon {
  width: 64px;
  height: 64px;
  color: var(--accent);
  transition: transform 0.4s var(--transition);
}

.skill-card:hover .card-svg-icon {
  transform: scale(1.1);
}

.card-header {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 24px;
}

.card-number {
  font-family: var(--font-display);
  font-size: 14px;
  color: var(--accent);
  font-style: italic;
}

.card-title {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.card-divider {
  width: 100%;
  height: 1px;
  background: var(--border);
  margin-bottom: 28px;
}

.tool-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.tool-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tool-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.tool-name {
  font-size: 14px;
  color: var(--text-secondary);
  transition: color 0.3s;
}

.skill-card:hover .tool-name {
  color: var(--text-primary);
}

.tool-dot {
  width: 4px;
  height: 4px;
  background: var(--accent);
  border-radius: 50%;
  flex-shrink: 0;
}

/* Proficiency bar */
.tool-bar {
  width: 100%;
  height: 2px;
  background: var(--border);
  border-radius: 1px;
  overflow: hidden;
}

.tool-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), rgba(200, 168, 110, 0.4));
  border-radius: 1px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.skill-card:hover .tool-bar-fill,
.skill-card.revealed .tool-bar-fill {
  transform: scaleX(1);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-card {
    padding: 32px;
  }

  .skills-bg-deco {
    display: none;
  }
}
</style>
