//Typescript= programming laguage, strongly tiped built on top of JS
//--> Type can´t change later on
//!BETTER error-feedback ahead of runtime!
//1. better autocomplettion & better feedback/code-hints
//examples:

interface MenuItem {
    title: string
    cost: number
}
function printMenuItem(item: MenuItem) {
    console.log('item.title :>> ',":", item.cost);
}

printMenuItem({ title: "cheese pizza", cost: 18 })

//self-documenting, makes it easier to navigate within the code, especially when the code becomes more complex

printMenuItem()