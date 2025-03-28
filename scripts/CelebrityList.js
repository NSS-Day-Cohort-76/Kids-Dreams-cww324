import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-id="${star.id}" 
                    data-type="celebrity"
                    data-sport="${star.sport}"
                    data-name="${star.name}"
                    id="star--${star.id}"
                    >
                    ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click",
    (clkEvent) => {
        const itemClicked = clkEvent.target
            if (itemClicked.dataset.type === "celebrity"){
            const celebName = itemClicked.dataset.name
            const celebSport = itemClicked.dataset.sport

                window.alert(`${celebName} is a ${celebSport} star`)
            }
    })

