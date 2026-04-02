<script setup>
const experiences = [
  {
    period: 'May 2025 — Present',
    company: 'Webdoux Pvt. Ltd.',
    role: 'Senior Graphic Designer',
    points: [
      'Lead creative direction of digital visuals and video content, integrating AI-powered workflows that reduced production time by 35%.',
      'Deliver 50+ brand visuals and motion graphics monthly, increasing content output efficiency by 40% while maintaining brand consistency.',
      'Generate professional-grade videos combining visual storytelling, motion effects, and smart automation, achieving 25% higher engagement.',
      'Collaborate with marketing and creative teams to craft visually compelling digital campaigns aligned with client objectives and brand positioning.',
      'Ensure platform-specific optimization, adapting AI-generated content for social media, advertising, and digital marketing to maximize reach.',
    ],
    current: true,
  },
  {
    period: 'Dec 2022 — Apr 2024',
    company: 'Australian Food India Pvt. Ltd.',
    role: 'Executive Designer (Part-Time)',
    points: [
      'Led 15+ design projects for digital and print campaigns, collaborating with marketing teams to reduce revision cycles by 20%.',
      'Planned and executed content strategy for seasonal promotions and product launches, contributing to 30% increase in campaign engagement.',
      'Transformed static visuals into dynamic, story-driven digital assets that elevated brand recall and audience reach.',
    ],
    current: false,
  },
  {
    period: 'Sep 2021 — Nov 2022',
    company: 'Australian Food India Pvt. Ltd.',
    role: 'Executive Designer',
    points: [
      'Designed 100+ marketing materials (posters, flyers, signage, packaging) with 100% brand guideline compliance, strengthening brand positioning across all touchpoints.',
      'Created motion graphics and social media content for Instagram & Facebook, growing followers by 20% and boosting post engagement by 35%.',
      'Developed motion graphic designs to transform static visuals into dynamic, story-driven digital assets that elevated brand engagement.',
    ],
    current: false,
  },
]
</script>

<template>
  <section id="experience">
    <!-- Background deco -->
    <div class="exp-bg-deco">
      <svg width="300" height="800" viewBox="0 0 300 800" fill="none">
        <line x1="150" y1="0" x2="150" y2="800" stroke="rgba(200,168,110,0.04)" stroke-width="1"/>
        <circle cx="150" cy="100" r="60" stroke="rgba(200,168,110,0.03)" stroke-width="0.5" stroke-dasharray="4 6"/>
        <circle cx="150" cy="400" r="100" stroke="rgba(200,168,110,0.03)" stroke-width="0.5"/>
        <circle cx="150" cy="700" r="40" stroke="rgba(200,168,110,0.04)" stroke-width="0.5" stroke-dasharray="2 4"/>
      </svg>
    </div>

    <div class="container">
      <div class="exp-header reveal">
        <div class="exp-header-row">
          <div>
            <span class="section-label">Career</span>
            <h2 class="section-title">Professional Experience</h2>
          </div>
          <!-- Year range badge -->
          <div class="year-badge">
            <span class="year-from">2021</span>
            <div class="year-line"></div>
            <span class="year-to">Present</span>
          </div>
        </div>
      </div>

      <div class="timeline">
        <div
          v-for="(exp, i) in experiences"
          :key="i"
          class="timeline-item reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="timeline-marker">
            <div class="marker-outer">
              <div :class="['marker-dot', { active: exp.current }]"></div>
            </div>
            <div class="marker-line" v-if="i < experiences.length - 1"></div>
          </div>

          <div class="timeline-content">
            <div class="content-card">
              <div class="card-accent"></div>
              <span class="exp-period">
                {{ exp.period }}
                <span v-if="exp.current" class="current-badge">Current</span>
              </span>
              <h3 class="exp-company">{{ exp.company }}</h3>
              <span class="exp-role">{{ exp.role }}</span>
              <ul class="exp-points">
                <li v-for="(point, j) in exp.points" :key="j">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#experience {
  position: relative;
  overflow: hidden;
}

.exp-bg-deco {
  position: absolute;
  right: 0;
  top: 0;
  pointer-events: none;
  opacity: 0.8;
}

.exp-header {
  margin-bottom: 64px;
}

.exp-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.year-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border: 1px solid var(--border);
}

.year-from, .year-to {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-muted);
}

.year-to {
  color: var(--accent);
}

.year-line {
  width: 30px;
  height: 1px;
  background: var(--border-light);
}

.timeline {
  position: relative;
}

.timeline-item {
  display: flex;
  gap: 40px;
  position: relative;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 28px;
}

.marker-outer {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marker-dot {
  width: 10px;
  height: 10px;
  border: 2px solid var(--accent);
  border-radius: 50%;
  background: var(--bg);
  z-index: 1;
  transition: all 0.3s;
}

.marker-dot.active {
  background: var(--accent);
  box-shadow: 0 0 12px rgba(200, 168, 110, 0.4);
}

.timeline-item:hover .marker-dot {
  background: var(--accent);
  transform: scale(1.3);
}

.marker-line {
  width: 1px;
  flex: 1;
  background: linear-gradient(to bottom, var(--accent), var(--border), transparent);
  margin-top: 8px;
  opacity: 0.4;
}

.timeline-content {
  padding-bottom: 40px;
  flex: 1;
}

.content-card {
  padding: 32px;
  border: 1px solid var(--border);
  background: var(--bg-card);
  position: relative;
  overflow: hidden;
  transition: all 0.4s var(--transition);
}

.content-card:hover {
  border-color: var(--border-light);
  transform: translateX(4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.card-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: var(--accent);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.5s var(--transition);
}

.content-card:hover .card-accent {
  transform: scaleY(1);
}

.exp-period {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.current-badge {
  font-size: 10px;
  letter-spacing: 1px;
  padding: 3px 10px;
  background: rgba(200, 168, 110, 0.12);
  color: var(--accent);
  border: 1px solid rgba(200, 168, 110, 0.2);
}

.exp-company {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.exp-role {
  font-size: 15px;
  color: var(--text-muted);
  font-style: italic;
  display: block;
  margin-bottom: 20px;
}

.exp-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.exp-points li {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
  padding-left: 16px;
  position: relative;
}

.exp-points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 4px;
  height: 1px;
  background: var(--accent);
}

@media (max-width: 768px) {
  .timeline-item {
    gap: 20px;
  }

  .exp-company {
    font-size: 20px;
  }

  .timeline-content {
    padding-bottom: 24px;
  }

  .content-card {
    padding: 24px;
  }

  .exp-header-row {
    flex-direction: column;
    gap: 20px;
  }

  .exp-bg-deco {
    display: none;
  }
}
</style>
