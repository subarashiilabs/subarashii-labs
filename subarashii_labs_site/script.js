document.getElementById('year').textContent = String(new Date().getFullYear());
const url = window.SUBARASHII_SITE_CONFIG && window.SUBARASHII_SITE_CONFIG.supportUrl;
if (typeof url === 'string' && /^https:\/\//i.test(url)) {
  document.getElementById('support-link').href = url;
  document.getElementById('support-actions').hidden = false;
}
