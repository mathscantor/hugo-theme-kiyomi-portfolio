(function () {
  document.querySelectorAll('[data-skill-category]').forEach(function (categoryEl) {
    var pills = categoryEl.querySelectorAll('.skill-pill');
    var explanationBox = categoryEl.querySelector('[data-skill-explanation-box]');
    var activeSkill = null;

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        var skillName = pill.getAttribute('data-skill-name') || '';
        var explanation = pill.getAttribute('data-skill-explanation') || '';

        if (activeSkill === skillName) {
          // Deactivate
          pill.classList.remove('active');
          pill.setAttribute('aria-expanded', 'false');
          explanationBox.classList.remove('visible');
          explanationBox.textContent = '';
          activeSkill = null;
        } else {
          // Deactivate previous
          pills.forEach(function (p) {
            p.classList.remove('active');
            p.setAttribute('aria-expanded', 'false');
          });
          // Activate new
          pill.classList.add('active');
          pill.setAttribute('aria-expanded', 'true');
          explanationBox.textContent = '';
          var titleEl = document.createElement('p');
          titleEl.className = 'font-semibold text-primary mb-1';
          titleEl.textContent = skillName;
          var bodyEl = document.createElement('p');
          bodyEl.textContent = explanation;
          explanationBox.appendChild(titleEl);
          explanationBox.appendChild(bodyEl);
          explanationBox.classList.add('visible');
          activeSkill = skillName;
        }
      });
    });
  });
})();
