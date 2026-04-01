<script setup>
const education = [
  {
    period: '2022 — 2025',
    degree: 'Diploma in Visual Effects',
    institution: 'Vels University',
    desc: 'Trained in compositing, motion graphics, and 3D techniques with hands-on experience in post-production and digital artistry.',
  },
  {
    period: '2019 — 2021',
    degree: 'C Tech Graphic Design',
    institution: 'Image Creative Education',
    desc: 'Focused on visual communication, branding, and creative design using industry-standard tools and techniques.',
  },
  {
    period: '2018 — 2019',
    degree: 'Secondary School Certificate',
    institution: 'National Star Matriculation Higher Secondary School',
    desc: 'Completed secondary education under the State Board.',
  },
]
</script>

<template>
  <section id="education">
    <div class="container">
      <div class="edu-header reveal">
        <span class="section-label">Education</span>
        <h2 class="section-title">Academic Background</h2>
      </div>

      <div class="edu-grid">
        <div
          v-for="(edu, i) in education"
          :key="i"
          class="edu-card reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <span class="edu-period">{{ edu.period }}</span>
          <h3 class="edu-degree">{{ edu.degree }}</h3>
          <span class="edu-institution">{{ edu.institution }}</span>
          <p class="edu-desc">{{ edu.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu-header {
  margin-bottom: 64px;
}

.edu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.edu-card {
  padding: 40px;
  border: 1px solid var(--border);
  position: relative;
  transition: all 0.4s var(--transition);
}

.edu-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}

.edu-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.5s var(--transition);
}

.edu-card:hover::after {
  width: 100%;
}

.edu-period {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent);
  display: block;
  margin-bottom: 16px;
}

.edu-degree {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.edu-institution {
  font-size: 14px;
  color: var(--text-muted);
  display: block;
  margin-bottom: 16px;
  font-style: italic;
}

.edu-desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .edu-grid {
    grid-template-columns: 1fr;
  }

  .edu-card {
    padding: 32px;
  }
}
</style>
