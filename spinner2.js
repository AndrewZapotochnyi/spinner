let spinner = function(spins) {
  let delay = 100;
  let spinArray = ['\r|   ', '\r|   ','\r/   ', '\r-   ','\r\\   ', '\r|   ', '\r|   ', '\r/   ', '\r-   ','\r\\   ','\r|   ' ];
  for (let i = 0; i < spins; i++) {
    for (let spin of spinArray) {
      delay += 200;
      setTimeout(() => {
        process.stdout.write(spin);
      }, delay);
    }
  }
}

spinner(5);
  