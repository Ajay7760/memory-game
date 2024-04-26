// const cardArray = [
//     {
//         name: 'fries',
//         img:'images/fries.png',
//     },
//     {
//         name: 'cheeseburger',
//         img:'images/cheeseburger.png',
//     },
//     {
//         name: 'hotdog',
//         img:'images/hotdog.png',
//     },
//     {
//         name: 'ice-cream',
//         img:'images/ice-cream.png',
//     },
//     {
//         name: 'milkshake',
//         img:'images/milkshake.png',
//     },
//     {
//         name: 'pizza',
//         img:'images/pizza.png',
//     },
//     {
//         name: 'fries',
//         img:'images/fries.png',
//     },
//     {
//         name: 'cheeseburger',
//         img:'images/cheeseburger.png',
//     },
//     {
//         name: 'hotdog',
//         img:'images/hotdog.png',
//     },
//     {
//         name: 'ice-cream',
//         img:'images/ice-cream.png',
//     },
//     {
//         name: 'milkshake',
//         img:'images/milkshake.png',
//     },
//     {
//         name: 'pizza',
//         img:'images/pizza.png',
//     },

// ]

// cardArray.sort(() => 0.5 - Math.random())
// let cardChosen = [];
// const cardWon = [];

// const resultDisplay =  document.querySelector("#result")

// const gridDisplay = document.querySelector('#grid');
//  let cardChosenIds = [];

// function createBoard() {
//     for (let i = 0; i < cardArray.length; i++) {
//         const card = document.createElement('img')
//         card.setAttribute('src', 'images/blank.png');
//         card.setAttribute("data-id", i)
//         card.addEventListener('click', flipCard)
//         gridDisplay.appendChild(card);
        
        
//     }
// }

// createBoard();
//  const cards = document.querySelectorAll("#grid img")

// function checkMatch(params) {
//      const cards = document.querySelectorAll("img")
//     console.log("check for the match")
//     console.log(cards);
//     const optionOneId = cardChosenIds[0];
//     const optionTwoId = cardChosenIds[1];

//     if (optionOneId == optionTwoId) {
//         alert("you found the same image")
//         cards[optionOneId].setAttribute('src','images/blank.png')
//         cards[optionTwoId].setAttribute('src','images/blank.png')
//         alert(" you find the image");

        
//    }

//      else if (cardChosen[0] == cardChosen[1]) {
//         alert("you find a match")
//         cards[optionOneId].setAttribute('src','images/white.png')
//         cards[optionTwoId].setAttribute('src', 'images/white.png')
//         cards[optionOneId].removeEventListener('click',flipCard)
//         cards[optionTwoId].removeEventListener('click', flipCard)
//         cardWon.push(cardChosen)
//     } else {
//         cards[optionOneId].setAttribute('src', 'images/blank.png')
//         cards[optionTwoId].setAttribute('src', 'images/blank.png')
//         alert("try again")
//     }
//     resultDisplay.textContent = cardWon.length
// cardChosen =[]
//     cardChosenIds = []
//     if (cardWon.length == cardArray.length/2) {
//         resultDisplay.textContent ="congratulation you found all"
//     }

// }


 
// function flipCard() {
 
//     const cardId = this.getAttribute('data-id')
//     cardChosen.push(cardArray[cardId].name)
    
//     this.setAttribute('src', cardArray[cardId].img);

//     if (cardChosen.length === 2) {
//         setTimeout( checkMatch, 500)
//     }
// }


document.addEventListener('DOMContentLoaded', () => {
    //list all card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png') 
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})