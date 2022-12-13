export default {
    mounted(el, binding) {        
        console.log('mounted el', el);
        console.log('mounted binding', binding);
        
        el.onscroll = () => {
            binding.value()
        }
    },
    unmouted(el){
        console.log('unmounted el', el);
        el.onscroll = null;
    },
}