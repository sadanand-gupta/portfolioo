<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <!-- <div class="footer-left">
        <span class="footer-logo">S<span class="dot">.</span></span>
        <div class="footer-info">
          <span class="footer-copy">&copy; {{ year }} Surendhar M.</span>
          <span class="footer-separator">•</span>
          <span class="footer-tagline">Designer &amp; Creative Professional</span>
        </div>
      </div> -->
      <div class="footer-center">
        <span class="footer-credit">
          Designed &amp; Developed via <a href="https://jobwala.io" target="_blank" rel="noopener" class="credit-link">jobwala.io</a>
        </span>
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
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

.dot {
  color: var(--accent);
}

.footer-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-copy {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  letter-spacing: 0.5px;
}

.footer-separator {
  color: var(--border-light);
  font-size: 12px;
}

.footer-tagline {
  font-size: 13px;
  color: var(--text-muted);
  font-style: italic;
}

.footer-center {
  flex: 1;
  text-align: center;
}

.footer-credit {
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.3px;
}

.credit-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.credit-link:hover {
  color: var(--text-primary);
  text-decoration: underline;
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

@media (max-width: 1024px) {
  .footer-inner {
    gap: 20px;
  }

  .footer-center {
    display: none;
  }
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .footer-left {
    flex-direction: column;
    gap: 12px;
  }

  .footer-info {
    flex-direction: column;
    gap: 4px;
  }

  .footer-separator {
    display: none;
  }

  .footer-center {
    display: block;
  }

  .footer-credit {
    display: block;
    margin-bottom: 12px;
  }
}
</style>
