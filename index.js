function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 8);

    if ( left > 0 ) {
      dodger.style.left = `${left - 3}px`;
    }
  }

  function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 8);

    if ( left < 180) {
      dodger.style.left = `${left + 3}px`;
    }
  }