const editor = document.getElementById("editor")
const preview = document.getElementById("preview")

let initialValue = `
# Simple Programmer
## Welcome to FCC Markdown Previewer!!!
[Learn more about markdown previewer. Visit: freecodecamp](https://www.freecodecamp.org)

\`this is multi-line code: \`
\`\`\`

const example = (num1, num2) => {
    let result = num1 + num2
    return
}
\`\`\`

> This is an example of block quote

- Code
- all
- day
- long

\n

![Simple Prorammer](https://as2.ftcdn.net/v2/jpg/05/19/95/65/1000_F_519956558_lhsXjsxt6b3hOpjZP6J51Y2IanOkOqGa.jpg)

**This is an example of BOLD text**
`
const markedEditor = (str) => {
    return preview.innerHTML = str
}

const init = () =>{
    editor.value = initialValue 
    markedEditor(marked.parse(initialValue))
    return
}
