const buttons = document.querySelectorAll(".item > button")

const addClasses = (e) => {
    const button = e.currentTarget, item = e.currentTarget.parentElement
    
    if (button.id === "add") {
        const input = button.previousElementSibling
        
        if (input.value.length > 20 || input.value.length === 0) {
            item.classList.add("shake-item")
            
            item.addEventListener("animationend", () => {
                item.classList.remove("shake-item")
            }, {once: true})
            
            return
        }
        
        const itemList = item.parentElement, newItem = document.createElement("li")
        
        newItem.classList.add("item", "color-bg", "show-item")
        
        newItem.innerHTML = `
            <p>${input.value}</p>
            <button id = "del">
                <img src="images/del.png">
            </button>
        `
        
        newItem.querySelector("button").addEventListener("click", addClasses)
        
        button.classList.add("button-add")
        button.addEventListener("animationend", () => button.classList.remove("button-add"))
        
        itemList.insertBefore(newItem, itemList.lastElementChild)
        
        newItem.addEventListener("animationend", () => newItem.classList.remove("show-item"))
        
        input.value = ""
        
        return
    }
    
    button.classList.add("hide-button")
    item.classList.add("hide-item")
    
    item.addEventListener("animationend", (e) => {
        if (e.target !== item) return
        
        item.remove()
    })
}

for (const btn of buttons) {
    btn.addEventListener("click", addClasses)
}
