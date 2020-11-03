
import tap from 'tap'
import fetch from 'node-fetch'
import CrabLang from "../src/language.js"

const JQUERY = 'https://code.jquery.com/jquery-3.5.1.min.js'

const testJqueryEncoding = async () => {
  const res = await fetch(JQUERY)
  const content = await res.text()

  const crabLang = CrabLang.encode(content)
  const original = CrabLang.decode(crabLang)

  tap.equals(content, original)
}

const testSimpleProgram = async () => {
  const content = `console.log("crab language")`
  const crabLang = CrabLang.encode(content)
  const original = CrabLang.decode(crabLang)

  tap.equals(content, original)
}

tap.test('simple program encodes / decodes as expected', async childTest => {
  await testSimpleProgram()
  childTest.end()
})

tap.test('jquery encodes / decodes as expected', async childTest => {
  await testJqueryEncoding()
  childTest.end()
})
