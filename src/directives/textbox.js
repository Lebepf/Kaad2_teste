export default {
  created(el, binding) {
    el.style.display = 'flex'
    el.style.flexDirection = 'column'
    el.style.alignItems = 'center'
    el.style.alignContent = 'center'
    el.style.width = '100%'
    el.style.marginTop = '20px'

    const messagebox = el.innerText
    if (messagebox) {
      el.style.padding = '.5rem'
      el.style.width = '90%'
      el.style.overflow = 'auto'
      el.style.background = '#fff'
      if (binding.value?.color) el.style.color = binding.value.color
      el.style.position = 'relative'
      if (binding.value?.fontSize) el.style.fontSize = binding.value.fontSize
      el.style.lineHeight = '1.5rem'
      el.style.borderRadius = '25px'
    }
  },
}
