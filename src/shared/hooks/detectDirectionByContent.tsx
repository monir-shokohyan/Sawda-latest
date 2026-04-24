const RTL_CHAR_REGEX = /[\u0591-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/


const DetectDirection = (text: string): 'rtl' | 'ltr' => {
  for (const char of text) {
    if (RTL_CHAR_REGEX.test(char)) return 'rtl'
    if (/[A-Za-z\u00C0-\u024F]/.test(char)) return 'ltr'
  }
  return 'ltr' 
}
export { DetectDirection }