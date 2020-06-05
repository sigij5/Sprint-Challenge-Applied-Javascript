// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response =>{
        const topicArray = response.data.topics
        console.log(topicArray)

        topicArray.forEach(topic =>{
            const newTab = document.createElement('div')
            const tabSection = document.querySelector('div.topics')
            newTab.classList.add('tab')
            newTab.textContent = topic
            console.log(newTab)

            tabSection.appendChild(newTab)

        })
    })