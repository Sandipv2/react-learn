const root = document.querySelector('#root')

function customRender(element, container) {
    const theElement = document.createElement(element.type)
    for (let prop in element.props) {
        theElement.setAttribute(prop, element.props[prop])
    }
    theElement.innerHTML = element.content

    container.appendChild(theElement)
}

const myElement = {
    type: 'p',
    props: {
        class: "title",
    },
    content: "<h1>Krishna</h1>"
}

customRender(myElement, root)