<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeStrip from './components/MarqueeStrip.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import { useScrollReveal } from './composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <MarqueeStrip />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
  </main>
  <FooterSection />
</template>

<style>
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }

section {
  padding: 120px 0;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 768px) {
  section {
    padding: 80px 0;
  }
  .container {
    padding: 0 24px;
  }
}

.section-label {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
  display: inline-block;
  position: relative;
  padding-left: 24px;
}

.section-label::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 14px;
  height: 1px;
  background: var(--accent);
}

.section-title {
  font-family: var(--font-display);
  font-size: 42px;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 24px;
}

.section-subtitle {
  font-size: 17px;
  color: var(--text-secondary);
  max-width: 560px;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 32px;
  }
}

.divider {
  width: 48px;
  height: 1px;
  background: var(--accent);
  margin: 32px 0;
}
</style>
