document.getElementById('ContactForm').addEventListener('submit', function (e) {
    e.preventDefault()

    const name = document.getElementById('contactName').value
    const tel = document.getElementById('contactTel').value

    const listItem = document.createElement('li')

    const span = document.createElement('span')  // ← texto aparte
    span.textContent = `${name} - ${tel}`

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Eliminar'
    deleteBtn.addEventListener('click', function () {
        listItem.remove()
    })

    listItem.appendChild(span)
    listItem.appendChild(deleteBtn)
    document.getElementById('contactList').appendChild(listItem)
})

document.getElementById('searchInput').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase()
    const contacts = document.querySelectorAll('#contactList li')

    contacts.forEach(contact => {
        const texto = contact.querySelector('span').textContent.toLowerCase()
        if (texto.includes(searchTerm)) {
            contact.style.display = ""
        } else {
            contact.style.display = "none"
        }
    })
})