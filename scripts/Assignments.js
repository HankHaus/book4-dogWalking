import { getPets, getWalkers, getCities, getWalkerCities } from "./database.js"

// Get copy of state for use in this module
//const pets = getPets()
const cities = getCities()
const walkers = getWalkers()
const walkerCities = getWalkerCities()



// The function need the walker information, so define a parameter
export const filterWalkerCitiesByWalker = (walkerObj) => {
    // Define an empty array to store all of the assignment objects
    const assignmentObjects = []
    // Iterate the array value of walkerCities
    for (const walkerCity of walkerCities) {
         // Check if the primary key of the walker equals the foreign key on the assignment
         if (walkerCity.walkerId === walkerObj.id) {
             // If it does, add the current object to the array of assignments
             assignmentObjects.push(walkerCity)
         }
    }
    // After the loop is done, return the assignments array
    return assignmentObjects
}

export const getCityNames = (walkerCities) => {
    let cityNames = ""
    for (const walkerCity of walkerCities) {
        for (const city of cities) {
            if (walkerCity.cityId === city.id) {
                cityNames += city.name
                cityNames += " "
            }
        }
    }return cityNames
}




export const Assignments = () => {
    let assignmentHTML = "<ul>"

    for(const walker of walkers) {
        const filteredWalker = filterWalkerCitiesByWalker(walker)
        const cityName = getCityNames(filteredWalker)

        assignmentHTML += `
        <li>
        ${walker.name} services in ${cityName}
        </li>`
    }
    assignmentHTML += "</ul>"

    return assignmentHTML
}

const assignments = Assignments()
document.querySelector("#container").innerHTML = assignments