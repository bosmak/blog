(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Copy button on code blocks
    document.querySelectorAll('.post-content .highlight').forEach(function(block) {
      const pre = block.querySelector('pre');
      if (!pre) return;

      const button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = 'Copy';
      button.setAttribute('aria-label', 'Copy code to clipboard');

      button.addEventListener('click', function() {
        const code = block.querySelector('code');
        const text = code ? code.textContent : pre.textContent;

        navigator.clipboard.writeText(text).then(function() {
          button.textContent = 'Copied!';
          setTimeout(function() {
            button.textContent = 'Copy';
          }, 1500);
        }).catch(function() {
          button.textContent = 'Failed';
          setTimeout(function() {
            button.textContent = 'Copy';
          }, 1500);
        });
      });

      pre.style.position = 'relative';
      pre.appendChild(button);
    });

    // Double-click on inline code selects the full text (not just one word)
    document.querySelectorAll('.post-content :not(pre) > code').forEach(function(code) {
      code.addEventListener('dblclick', function() {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(code);
        selection.removeAllRanges();
        selection.addRange(range);
      });
    });
  });
})();
