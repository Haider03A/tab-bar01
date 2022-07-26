const links = document.querySelectorAll('main .container ul li');
const activeBox = document.querySelector('main .container .active')
const paths = document.querySelectorAll('main .container ul li svg path')

links.forEach((link, i) => {
  link.addEventListener('click', e => {
    activeBox.style.left = `${i * 80}px`;
    
    removeActive(paths);
    addActive(link.firstElementChild.querySelectorAll('path'))
    
    
    
  })
})

const colorActive = '#fff';
const colorNotActive = '#ADADAD'
const addActive = (theElements) => {
        theElements.forEach(theElement => {
      const thisIsStroke = theElement.getAttribute('stroke');
      console.log(thisIsStroke);
      thisIsStroke ? theElement.style.stroke = colorActive : theElement.style.fill = colorActive;
        })
}


const removeActive = (theElements) => {
      theElements.forEach(theElement => {
      const thisIsStroke = theElement.getAttribute('stroke');
      thisIsStroke ? theElement.style.stroke = colorNotActive : theElement.style.fill = colorNotActive;
    })
}
