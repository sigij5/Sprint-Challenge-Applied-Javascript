/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator(){
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  // carousel.appendChild(leftButton)
  // imageArray.forEach(image =>{
  //   const newImage = document.createElement('img')
  //   newImage.src = image
  //   carousel.appendChild(newImage)
  // })
  const images = [document.createElement('img'),document.createElement('img'),document.createElement('img'),document.createElement('img')]

  const rightButton = document.createElement('div')

  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')
  leftButton.textContent = '<'
  rightButton.textContent = '>'
  images[0].src = './assets/carousel/mountains.jpeg'
  images[1].src = './assets/carousel/computer.jpeg'
  images[2].src = './assets/carousel/trees.jpeg'
  images[3].src = './assets/carousel/turntable.jpeg'

  images[0].style.display = 'block'

  // rightButton.addEventListener('click', event=>{
  //   for(let i=0;i<images.length;i++){
  //     images[i].style.display = 'none'
  //     images[i++].style.display = 'block'
  //   }
  // })
  carousel.appendChild(leftButton)

  images.forEach(image=>{
    carousel.appendChild(image)
  })
  carousel.appendChild(rightButton)

  console.log(carousel)

  return document.querySelector('div.carousel-container').appendChild(carousel)
}

// const arrayOfImages = ['./assets/carousel/mountains.jpeg',
// './assets/carousel/computer.jpeg',
// './assets/carousel/trees.jpeg',
// './assets/carousel/turntable.jpeg'
// ]

carouselCreator();



