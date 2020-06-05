// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response=>{
        const articlesObj = response.data.articles
        Object.values(articlesObj).forEach(value=>{
            value.forEach(article =>{
                cardCreator(article)
            })
        })
        // articlesArray.forEach(topicArray =>{
        //     topicArray.forEach(article =>{
        //         cardCreator(article)
        //     })
        // })
    })


    function cardCreator(articleObj){
        const card = document.createElement('div')
        const headline = document.createElement('div')
        const author = document.createElement('div')
        const imageContainer = document.createElement('div')
        const image = document.createElement('img')
        const authorName = document.createElement('span')

        card.classList.add('card')
        headline.classList.add('headline')
        author.classList.add('author')
        imageContainer.classList.add('img-container')
        image.src = articleObj.authorPhoto
        authorName.textContent = `By ${articleObj.authorName}`
        headline.textContent = articleObj.headline

        card.append(headline, author)
        author.append(imageContainer, authorName)
        imageContainer.appendChild(image)

        return document.querySelector('.cards-container').appendChild(card)
    }