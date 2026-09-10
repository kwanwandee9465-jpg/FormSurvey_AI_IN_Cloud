// Collect the respondent email before the survey starts and attach it to the Sheets payload.
document.addEventListener('DOMContentLoaded', () => {
  const welcome = document.querySelector('#welcome');
  const startButton = document.querySelector('#start-btn');
  if (!welcome || !startButton) return;
  const style = document.createElement('style');
  style.textContent = '.email-field{background:#fbfdff;border:1px solid #dfe7f0;border-radius:13px;padding:16px 18px;margin-bottom:24px;max-width:730px}.email-field label{display:block;font-size:13px;font-weight:700;margin-bottom:8px}.email-field label small{color:#6f7d91;font-weight:400;margin-left:6px}.email-field input{width:100%;border:1px solid #cbd7e5;border-radius:8px;padding:11px 12px;font:14px inherit;color:#17253d;background:#fff}.email-field input:focus{outline:3px solid #dbe7ff;border-color:#3264dd}.email-field p{margin:7px 0 0;color:#6f7d91;font-size:11px}';
  document.head.appendChild(style);
  const field = document.createElement('div');
  field.className = 'email-field';
  field.innerHTML = '<label for="respondent-email">อีเมลผู้ตอบ <small>Respondent email</small></label><input id="respondent-email" type="email" autocomplete="email" placeholder="name@example.com" required><p>ใช้สำหรับระบุรายการคำตอบใน Google Sheets เท่านั้น</p>';
  welcome.insertBefore(field, startButton);
  document.addEventListener('click', event => {
    if (event.target !== startButton) return;
    const input = document.querySelector('#respondent-email');
    if (!input || !input.checkValidity()) {
      event.preventDefault();
      event.stopImmediatePropagation();
      input?.reportValidity();
    }
  }, true);
  const originalFetch = window.fetch.bind(window);
  window.fetch = (input, init = {}) => {
    if (init.body && typeof init.body === 'string' && document.querySelector('#respondent-email')) {
      try {
        const data = JSON.parse(init.body);
        data.email = document.querySelector('#respondent-email').value.trim();
        init = {...init, body: JSON.stringify(data)};
      } catch (_) {}
    }
    return originalFetch(input, init);
  };
});
