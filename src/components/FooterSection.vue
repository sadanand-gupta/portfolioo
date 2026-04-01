<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <span class="footer-logo">S<span class="dot">.</span></span>
        <span class="footer-copy">&copy; {{ year }} Surendhar M. All rights reserved.</span>
      </div>
      <div class="footer-right">
        <a href="#hero" class="back-top">Back to Top</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 32px 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
}

.dot {
  color: var(--accent);
}

.footer-copy {
  font-size: 13px;
  color: var(--text-muted);
}

.back-top {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.3s;
}

.back-top:hover {
  color: var(--accent);
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .footer-left {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
