class Person {
    constructor(name, color, animal, food, language, editor) {
        this.name = name
        this.favorites = {
            color: color,
            animal: animal,
            food: food,
            language: language,
            editor: editor
        }
    }

    announce() {
        document.getElementById('display-area').innerHTML = `
        ${this.name}'s favorite...
        <ul>
        ${Object.keys(this.favorites).map(category =>
            `<li><b>${category}</b> is ${this.favorites[category]}</li>`
        ).join('')}
        </ul>`
    }
}

const people = {
    Liam: new Person('Liam', 'blue', 'parrot', 'pasta', 'Markdown', 'Atom'),
    Noah: new Person('Noah', 'green', 'cat', 'pizza', 'Haskell', 'VSCode'),
    Emma: new Person('Emma', 'red', 'squirrel', 'steak', 'C#', 'Rider'),
    William: new Person('William', 'turquoise', 'frog', 'hamburger', 'TypeScript', 'Sublime Text'),
    Olivia: new Person('Olivia', 'olive', 'snake', 'olive', 'Python', 'Notepad++')
}
const names = Object.keys(people)

function announcePerson() {
    const targetName = names[Math.floor(Math.random() * names.length)]
    const targetPerson = people[targetName]
    targetPerson.announce()
}

