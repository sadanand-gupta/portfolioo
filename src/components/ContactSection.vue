<script setup>
</script>

<template>
  <section id="contact">
    <!-- Background deco -->
    <div class="contact-bg">
      <svg class="contact-pattern" width="600" height="600" viewBox="0 0 600 600" fill="none">
        <circle cx="300" cy="300" r="280" stroke="rgba(200,168,110,0.04)" stroke-width="0.5"/>
        <circle cx="300" cy="300" r="200" stroke="rgba(200,168,110,0.03)" stroke-width="0.5" stroke-dasharray="6 8"/>
        <circle cx="300" cy="300" r="120" stroke="rgba(200,168,110,0.04)" stroke-width="0.5"/>
        <circle cx="300" cy="300" r="40" stroke="rgba(200,168,110,0.06)" stroke-width="0.5"/>
        <line x1="0" y1="300" x2="600" y2="300" stroke="rgba(200,168,110,0.02)" stroke-width="0.5"/>
        <line x1="300" y1="0" x2="300" y2="600" stroke="rgba(200,168,110,0.02)" stroke-width="0.5"/>
        <line x1="0" y1="0" x2="600" y2="600" stroke="rgba(200,168,110,0.015)" stroke-width="0.5"/>
        <line x1="600" y1="0" x2="0" y2="600" stroke="rgba(200,168,110,0.015)" stroke-width="0.5"/>
      </svg>
    </div>

    <div class="container">
      <div class="contact-inner">
        <div class="contact-left reveal">
          <span class="section-label">Connect</span>
          <h2 class="section-title">
            Let's create<br>
            <em>something great.</em>
          </h2>
          <div class="divider"></div>
          <p class="contact-text">
            Open for freelance projects, full-time roles, and creative collaborations.
            Let's bring your vision to life.
          </p>

          <!-- Decorative visual -->
          <div class="contact-visual">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <path d="M20 180 Q20 100 100 100 T180 20" stroke="rgba(200,168,110,0.2)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
              <path d="M40 180 Q40 120 120 120 T180 40" stroke="rgba(200,168,110,0.1)" stroke-width="1" fill="none" stroke-linecap="round"/>
              <circle cx="100" cy="100" r="4" fill="rgba(200,168,110,0.3)"/>
              <circle cx="180" cy="20" r="3" fill="rgba(200,168,110,0.4)"/>
              <circle cx="20" cy="180" r="3" fill="rgba(200,168,110,0.4)"/>
              <!-- Arrow head -->
              <path d="M175 15 L180 20 L175 25" stroke="rgba(200,168,110,0.3)" stroke-width="1" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
        </div>

        <div class="contact-right reveal reveal-delay-2">
          <div class="contact-info">
            <div class="info-item">
              <div class="info-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M2 6l8 5 8-5" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.4"/>
                </svg>
              </div>
              <div>
                <span class="info-label">Email</span>
                <a href="mailto:worldofsuren@gmail.com" class="info-value">worldofsuren@gmail.com</a>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 4.5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.098 3.294a1 1 0 01-.263 1.01L7.72 8.83a11.05 11.05 0 005.45 5.45l1.342-1.343a1 1 0 011.01-.263l3.294 1.098a1 1 0 01.684.948V17a2 2 0 01-2 2h-1C8.716 19 2 12.284 2 4.5z" stroke="currentColor" stroke-width="1.5" fill="none"/>
                </svg>
              </div>
              <div>
                <span class="info-label">Phone</span>
                <a href="tel:+919360998466" class="info-value">+91 9360998466</a>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M10 2v16M2 10h16" stroke="currentColor" stroke-width="1.5" stroke-opacity="0.3"/>
                </svg>
              </div>
              <div>
                <span class="info-label">Social</span>
                <div class="social-links">
                  <a href="https://www.behance.net/Lsm_Cuts" target="_blank" rel="noopener" class="social-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                    </svg>
                    Behance
                  </a>
                  <a href="https://www.linkedin.com/in/surendhar-m-1a1397203/" target="_blank" rel="noopener" class="social-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/world_of_suren/" target="_blank" rel="noopener" class="social-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          <a href="mailto:worldofsuren@gmail.com" class="btn btn-primary contact-btn">
            <span>Send a Message</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#contact {
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.contact-bg {
  position: absolute;
  right: -200px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  animation: contactSpin 120s linear infinite;
}

@keyframes contactSpin {
  from { transform: translateY(-50%) rotate(0deg); }
  to { transform: translateY(-50%) rotate(360deg); }
}

.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.section-title em {
  font-family: var(--font-display);
  color: var(--accent);
}

.contact-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 400px;
}

.contact-visual {
  margin-top: 40px;
  opacity: 0.7;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 48px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  border: 1px solid var(--border);
  transition: all 0.3s var(--transition);
}

.info-item:hover {
  border-color: var(--border-light);
  background: rgba(200, 168, 110, 0.02);
}

.info-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  color: var(--accent);
  flex-shrink: 0;
}

.info-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-muted);
  display: block;
  margin-bottom: 6px;
}

.info-value {
  font-size: 17px;
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s;
}

.info-value:hover {
  color: var(--accent);
}

.social-links {
  display: flex;
  gap: 16px;
  margin-top: 4px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 8px 14px;
  border: 1px solid var(--border);
  transition: all 0.3s var(--transition);
}

.social-link svg {
  opacity: 0.6;
  transition: opacity 0.3s;
}

.social-link:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: rgba(200, 168, 110, 0.06);
}

.social-link:hover svg {
  opacity: 1;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 36px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  background: var(--accent);
  color: var(--bg);
  transition: all 0.4s var(--transition);
  border: none;
  cursor: pointer;
}

.contact-btn:hover {
  background: var(--text-primary);
  color: var(--bg);
}

.contact-btn svg {
  transition: transform 0.3s;
}

.contact-btn:hover svg {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .contact-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .contact-bg {
    display: none;
  }

  .social-links {
    flex-direction: column;
  }

  .contact-visual {
    display: none;
  }
}
</style>
