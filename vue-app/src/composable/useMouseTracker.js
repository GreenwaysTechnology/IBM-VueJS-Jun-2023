/**
 * Composable is plan js function which may take arg and returns state object 
 * composables can use reactive apis 
 * composable function should start with "use+FunctionName" convention
 */
import { ref } from 'vue'
import { useEventListener } from './useEventListener'

export function useMouseTracker() {
    const x = ref(0)
    const y = ref(0)

    useEventListener(window, 'mousemove', (event) => {
        x.value = event.pageX
        y.value = event.pageY
    })

    //return object  
    return {
        x, y
    }
}