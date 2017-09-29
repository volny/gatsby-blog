import Typography from 'typography'
// import sutroTheme from 'typography-theme-sutro'
import fairyGateTheme from 'typography-theme-fairy-gates'

// fairyGateTheme.baseFontSize = '20px'
fairyGateTheme.bodyFontFamily = ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'sans-serif']
// fairyGateTheme.headerFontFamily = []

const typography = new Typography(fairyGateTheme)
// const typography = new Typography(sutroTheme)

export default typography
