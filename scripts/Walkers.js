import { getWalkers } from "./database.js"
import { getCityNames, filterWalkerCitiesByWalker } from "./Assignments.js"
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
               
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = getCityNames(assignments)
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)

/* for (const walker of walkers) {
    if (walker.id === parseInt(walkerId)) {
        const assignments = filterWalkerCitiesByWalker(walker)
        const cities = assignedCityNames(assignments)

        window.alert(`${walker.name} services ${cities}`)
    }
}*/



const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
   
    }

    walkerHTML += "</ul>"
    return walkerHTML
}

