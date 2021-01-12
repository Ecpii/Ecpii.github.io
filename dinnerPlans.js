const people = {
    jane: {
        slices: 2,
        toppings: new Set(['mushroom', 'onion', 'peppers', 'olives'])
    },
    lisa: {
        slices: 3,
        toppings: new Set(['pepperoni', 'ham', 'pineapple'])
    },
    taylor: {
        slices: 3,
        toppings: new Set(['extra cheese', 'pepperoni', 'sausage', 'bacon'])
    },
    chris: {
        slices: 2,
        toppings: new Set(['mushroom', 'sausage', 'bacon', 'ham', 'onion', 'peppers'])
    },
    alyssa: {
        slices: 1,
        toppings: new Set(['pepperoni', 'bacon'])
    },
    will: {
        slices: 2,
        toppings: new Set(['extra cheese', 'sausage', 'bacon', 'onion', 'peppers', 'olives'])
    },
    jessica: {
        slices: 2,
        toppings: new Set(['pepperoni', 'bacon', 'ham', 'pineapple', 'onion', 'peppers'])
    }
}

const allToppings = new Set()
for (let person of Object.values(people)) {
    for (let topping of person.toppings) {
        allToppings.add(topping)
    }
}

// code taken directly from mozilla documentation, why aren't set operations built-in
function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}

function getPizza() {
    const outputArea = document.getElementById('display-area')
    outputArea.innerHTML = ''

    const rawInput = document.getElementById('guest-names').value
    if (!/[a-zA-z]/.test(rawInput)) {
        outputArea.innerHTML = '<b>Input doesn\'t contain any letters!</b>'
        return
    }

    let hasValidGuest = false
    const attendingGuests = rawInput.replace(',', '').toLowerCase().split(' ')
    const compressedGuests = attendingGuests.reduce((netPerson, nextName) => {
        if (!people[nextName]) {
            outputArea.innerHTML = '<b>At least one name is not valid!</b>'
            return netPerson
        }
        hasValidGuest = true
        const newSlices = netPerson.slices + people[nextName].slices
        const newToppings = intersection(netPerson.toppings, people[nextName].toppings)
        return {slices: newSlices, toppings: newToppings}
    }, {slices: 0, toppings: allToppings})

    if (hasValidGuest) {
        outputArea.innerHTML += `
    <p>Your guests want a total of <b>${compressedGuests.slices} slices</b>.</p>
    <p>${compressedGuests.toppings.size ?
            `The toppings that will make everyone happy are: <b>${Array.from(compressedGuests.toppings).join(', ')}</b>` :
            'No one can agree on toppings, just buy a cheese pizza.'}</p>
`
    }
}