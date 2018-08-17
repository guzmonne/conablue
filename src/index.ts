var button = document.getElementsByClassName('connect')[0];

main();

function main() {
  addEventListeners();
}

function getElements(): { [key: string]: Element } {
  return {
    button: document.getElementsByClassName('connect')[0]
  };
}

function addEventListeners(): void {
  var { button } = getElements();

  button.addEventListener('click', event => {
    console.log(event);
  });
}
