const editor = document.getElementById("editor")
const preview = document.getElementById("preview")
const faIconEditorMax = document.getElementById("faIconEditorMax")
const faIconEditorMin = document.getElementById("faIconEditorMin")
const faIconPreviewerMax = document.getElementById("faIconPreviewerMax")
const faIconPreviewerMin = document.getElementById("faIconPreviewerMin")
const previewer = document.getElementById("previewer")
const codeEditor = document.getElementById("codeEditor")

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


const openFullscreenEditor = () =>{
    document.body.style.width = "100%"
    document.body.style.height = "100%"
    previewer.style.visibility = "hidden"
    editor.style.height = "100vh"  
    editor.style.width = "88%" 
    editor.style.right = "6%" 
    editor.style.position = "absolute"
    codeEditor.style.height = "104vh" 
}

const closeFullscreenEditor = () =>{
    document.body.style.width = "100%"
    document.body.style.height = "100%"
    previewer.style.visibility = "visible"  
    editor.style.height = "30vh"
    editor.style.position = "absolute"
    codeEditor.style.top = "0"
    codeEditor.style.height = "34vh" 
    codeEditor.style.bottom = "0" 
}

const openFullscreenPreviewer = () =>{
    codeEditor.style.visibility = "hidden"
    document.body.style.width = "100%"
    document.body.style.height = "100%"
    previewer.style.position = "absolute"
    previewer.style.top = "0"
} 

const closeFullscreenPreviewer = () =>{
    codeEditor.style.visibility = "visible"
    document.body.style.width = "100%"
    document.body.style.height = "100%" 
    previewer.style.position = "relative"
}

faIconEditorMax.addEventListener('click', () =>{
    openFullscreenEditor()
})

faIconEditorMin.addEventListener('click', () =>{
    closeFullscreenEditor()
})

faIconPreviewerMax.addEventListener('click', () =>{
    openFullscreenPreviewer()
})

faIconPreviewerMin.addEventListener('click', () =>{
    closeFullscreenPreviewer()
})