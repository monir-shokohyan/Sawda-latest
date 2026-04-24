const RTL_CHAR_REGEX =
  /[\u0591-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/

interface detectDirectionType {
  dir: 'ltr' | 'rtl'
  textAlign: 'left' | 'right'
}

const DetectDirection = (text: string): detectDirectionType => {
  for (const char of text) {
    if (RTL_CHAR_REGEX.test(char)) return { dir: 'rtl', textAlign: 'right' }
    if (/[A-Za-z\u00C0-\u024F]/.test(char))
      return { dir: 'ltr', textAlign: 'left' }
  }
  return { dir: 'ltr', textAlign: 'left' }
}
export { DetectDirection }
