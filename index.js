function showGreeting() {
    document.getElementById('displayArea').innerHTML =
        `
        <p>
        Welcome to my website!
        <br /><br />
        Here\s a cool little thing I did in React over break for <a href="https://adventofcode.com/2020">Advent of Code</a>:
        </p>
        <img src="https://my-very-own.questionable.link/4gmlWb.gif"  alt="a cool advent of code leaderboard site"/>
        `
}

function showEquations(num1, num2) {
    document.getElementById('displayArea').innerHTML =
        `
        <p> ${num1} + ${num2} = ${num1 + num2} </p>
        <p> ${num1} - ${num2} = ${num1 - num2} </p>
        <p> ${num1} * ${num2} = ${num1 * num2} </p>
        <p> ${num1} / ${num2} = ${num1 / num2} </p>
        `
}

function showCoinEquations() {
    const targetCents = parseInt(document.getElementById("num-cents").value, 10)

    const completedCombinations = []

    function checkArrayEquality(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }
        return true
    }

    function checkArrayMembership(bigArray, smallArray) {
        const found = bigArray.find(element => checkArrayEquality(element, smallArray))
        return !!found;
    }

    function findCoinCombinations(value, currentCoinCombination) {
        // memorization base case
        if (checkArrayMembership(completedCombinations, currentCoinCombination)) {
            return []
        }
        // base case
        if (value === 0) {
            completedCombinations.push(currentCoinCombination)
            return [currentCoinCombination]
        }
        let coinCombinations = []

        // without this code block the function will find *all* combinations; albeit pretty badly
        if (value > 25) {
            // trim the value down... because my recursive function sucks on big numbers
            currentCoinCombination[0] += Math.floor(value / 25)
            value %= 25
            // a very bad way of making it show at least 4 combinations because it's hard to modify my bad recursive function
            const newCoinCombo = currentCoinCombination
            newCoinCombo[0]--
            newCoinCombo[1]++
            newCoinCombo[2]++
            coinCombinations = coinCombinations.concat(findCoinCombinations(value + 10, newCoinCombo))
        }

        // not very efficient but it does the job
        if (value >= 25) {
            let newCoinCombination = [...currentCoinCombination]
            newCoinCombination[0]++
            coinCombinations = coinCombinations.concat(findCoinCombinations(value - 25, newCoinCombination))
        }
        if (value >= 10) {
            let newCoinCombination = [...currentCoinCombination]
            newCoinCombination[1]++
            coinCombinations = coinCombinations.concat(findCoinCombinations(value - 10, newCoinCombination))
        }
        if (value >= 5) {
            let newCoinCombination = [...currentCoinCombination]
            newCoinCombination[2]++
            coinCombinations = coinCombinations.concat(findCoinCombinations(value - 5, newCoinCombination))
        }
        if (value >= 1) {
            let newCoinCombination = [...currentCoinCombination]
            newCoinCombination[3]++
            coinCombinations = coinCombinations.concat(findCoinCombinations(value - 1, newCoinCombination))
        }
        return coinCombinations
    }

    const allCoinCombinations = findCoinCombinations(targetCents, [0, 0, 0, 0])
    document.getElementById('displayArea').innerHTML = allCoinCombinations.reduce((ikeaHTML, coinCombo) => {
        // fulfilling the variable requirement
        const quarters = coinCombo[0]
        const dimes = coinCombo[1]
        const nickels = coinCombo[2]
        const pennies = coinCombo[3]

        return ikeaHTML + `\n<p> ${quarters} quarters + ${dimes} dimes + ${nickels} nickels + ${pennies} pennies = ${targetCents} cents</p>`
    }, '<hr />')
}

function findTimeCircumference() {
    let currentDate = new Date()
    let radius = currentDate.getHours()
    let circumference = (2 * radius * Math.PI).toFixed(3)
    document.getElementById('displayArea').innerHTML =
        `
        <p> Time of button click: ${currentDate.toTimeString()} </p>
        <p> Circumference using hours as radius: <b>${circumference}</b></p>
        `
}

async function dealBlackjack() {
    document.getElementById('dealer-cards').innerHTML = ''
    document.getElementById('dealer-log').innerHTML = ''
    const deck = []
    let cardNum
    for (cardNum = 2; cardNum < 11; cardNum++) {
        for (let i = 0; i < 4; i++) {
            deck.push(cardNum)
        }
    }
    for (let i = 0; i < 4; i++) {
        deck.push('A')
        deck.push('K')
        deck.push('Q')
        deck.push('J')
    }

    let numCards = 0
    let dealerSum = 0
    let dealerAces = 0
    while (true) {
        // wait half a second between each card
        await new Promise(r => setTimeout(r, 500))

        const newCardIndex = Math.floor(Math.random() * deck.length)
        const newCard = deck[newCardIndex]
        numCards++
        deck.splice(newCardIndex, 1)
        document.getElementById('dealer-cards').innerHTML +=`
            <div class="playing-card">
                <div class="playing-card-num">
                    ${newCard}
                </div>
            </div>`

        if (newCard === 'A') {
            dealerAces += 1
            dealerSum += 11
        } else if (typeof newCard == 'number') {
            dealerSum += newCard
        } else {
            dealerSum += 10
        }

        while (dealerSum > 21 && dealerAces) {
            dealerSum -= 10
            dealerAces--
        }
        // printing and sum validation
        document.getElementById('dealer-log').innerHTML +=
            `<h3>Dealer Sum: ${dealerSum}</h3>`
        if (dealerSum < 17) {
            document.getElementById('dealer-log').innerHTML +=
                '<p>Sum less than 17, dealer will hit again</p>'
            continue
        } else if (dealerSum < 21) {
            document.getElementById('dealer-log').innerHTML +=
                '<p>Sum greater than 17, dealer will stay</p>'
        } else if (dealerSum === 21) {
            if (numCards === 2) {
                document.getElementById('dealer-log').innerHTML +=
                    '<p>Dealer got Blackjack!!</p>'
                break
            }
            document.getElementById('dealer-log').innerHTML +=
                '<p>Dealer got 21 exactly!</p>'
        } else {
            document.getElementById('dealer-log').innerHTML +=
                '<p>Sum greater than 21, dealer busted!</p>'
        }
        break
    }
}
