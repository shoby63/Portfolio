import '../../public/css/Text.css'
const Text = () => {
  return (
    <svg viewBox="0 0 960 300">
  <symbol id="s-text">
    <text text-anchor="middle" x="50%" y="80%">Find Me On </text>
    <text text-anchor="middle" x="52%" y="80%">Find Me On </text>
    
  </symbol>

  <g class = "g-ants">
    <use href="#s-text" class="text-copy"></use>
    <use href="#s-text" class="text-copy"></use>
    <use href="#s-text" class="text-copy"></use>
    <use href="#s-text" class="text-copy"></use>
    <use href="#s-text" class="text-copy"></use>
  </g>
</svg>
  )
}

export default Text