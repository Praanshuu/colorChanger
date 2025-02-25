const buttons = document.querySelectorAll('.button');
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const colorid = e.target.id;
    if (colorid === 'grey') {
      document.body.style.backgroundColor = e.target.id;
    } else if (colorid === 'white') {
      document.body.style.backgroundColor = e.target.id;
    } else if (colorid === 'blue') {
      document.body.style.backgroundColor = e.target.id;
    } else if (colorid === 'yellow') {
      document.body.style.backgroundColor = e.target.id;
    }
  });
});
