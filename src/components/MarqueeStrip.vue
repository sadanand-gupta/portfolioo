<script setup>
const tools = [
  'Adobe Photoshop', 'Adobe Illustrator', 'After Effects', 'Premiere Pro',
  'Blender', 'Autodesk Maya', 'Houdini', 'Nuke', 'Figma',
  'Mocha Pro', 'DaVinci Resolve', 'Substance 3D', 'Cinema 4D',
]
</script>

<template>
  <div class="marquee-section">
    <div class="marquee-track">
      <div class="marquee-content">
        <span v-for="(tool, i) in [...tools, ...tools]" :key="i" class="marquee-item">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <rect width="8" height="8" rx="1" fill="currentColor" fill-opacity="0.4" transform="rotate(45 4 4)"/>
          </svg>
          {{ tool }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee-section {
  padding: 24px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  overflow: hidden;
  background: var(--bg);
}

.marquee-track {
  display: flex;
  width: max-content;
}

.marquee-content {
  display: flex;
  gap: 40px;
  align-items: center;
  animation: marquee 30s linear infinite;
  white-space: nowrap;
}

.marquee-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color 0.3s;
}

.marquee-item svg {
  color: var(--accent);
}

.marquee-item:hover {
  color: var(--accent);
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
</style>
