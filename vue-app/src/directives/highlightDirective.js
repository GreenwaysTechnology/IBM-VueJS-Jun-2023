
// export function highLight(element) {
//     element.addEventListener('mousemove', evt => {
//         highLight('yellow')
//     })
//     element.addEventListener('mouseleave', evt => {
//         highLight(null)
//     })
//     const highLight = color => {
//         element.style.backgroundColor = color
//     }

// }

export const highLight = () => {
    return {
        //element arg holds the reference of the dom element attached .
        //binding arg holds the value(parameter) passed to the directive
        mounted: (element,binding) => {
            console.log('element=>',element)
            console.log('binding=>',binding)
            //set inital color 
            // element.style.backgroundColor = binding.value
            const color = binding.value || 'yellow'
            element.addEventListener('mousemove', evt => {
                highLight(color)
            })
            element.addEventListener('mouseleave', evt => {
                highLight(null)
            })
            const highLight = color => {
                element.style.backgroundColor = color
            }
        }
    }
}