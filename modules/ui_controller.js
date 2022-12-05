function pageFunctionality() {
  // show the right navigation page
  const listMenu = document.querySelector('.book-page');
  const addMenu = document.querySelector('.add-page');
  const contactMenu = document.querySelector('.info-page');

  window.onload = () => {
    document.querySelector('#add-new').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
    document.querySelector('#display-Books').style.display = 'block';
    listMenu.style.textDecoration = 'underline';
  };

  contactMenu.addEventListener('click', () => {
    document.querySelector('#display-Books').style.display = 'none';
    document.querySelector('#add-new').style.display = 'none';
    document.querySelector('#contact').style.display = 'block';
    contactMenu.style.textDecoration = 'underline';
    addMenu.style.textDecoration = 'none';
    listMenu.style.textDecoration = 'none';
  });

  addMenu.addEventListener('click', () => {
    document.querySelector('#display-Books').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
    document.querySelector('#add-new').style.display = 'block';
    addMenu.style.textDecoration = 'underline';
    listMenu.style.textDecoration = 'none';
    contactMenu.style.textDecoration = 'none';
  });

  listMenu.addEventListener('click', () => {
    document.querySelector('#add-new').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
    document.querySelector('#display-Books').style.display = 'block';
    listMenu.style.textDecoration = 'underline';
    addMenu.style.textDecoration = 'none';
    contactMenu.style.textDecoration = 'none';
  });

  // change color of book div if index is not even
  const booksDiv = document.querySelectorAll('.compactment');
  for (let i = 0; i < booksDiv.length; i += 1) {
    const index = parseInt(i, 10) + 1;
    if (index % 2 !== 0) {
      booksDiv[i].style.backgroundColor = '#EEEEEE';
    }
  }
}

export default { pageFunctionality };
