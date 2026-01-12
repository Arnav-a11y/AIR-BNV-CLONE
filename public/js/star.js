
  document.querySelectorAll('.starability-result').forEach(el => {
    const rating = el.getAttribute('data-rating');
    el.style.setProperty('--rating', rating);
  });

