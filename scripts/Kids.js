import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `
        <li data-id="${child.id}" 
        data-type="child" 
        data-wish="${child.wish}"
        data-child-name="${child.name}"
        >${child.name}</li>`
    }

    html += "</ol>"
    return html
}


// fix this below

document.addEventListener("click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
            if (itemClicked.dataset.type === "child"){
            const wish = itemClicked.dataset.wish

                window.alert(`${itemClicked.dataset.childName}'s wish is ${wish}`)
            }
    })


