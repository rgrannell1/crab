
import tap from 'tap'
import fetch from 'node-fetch'
import CrabLang from "../src/language.js"

const JQUERY = 'https://code.jquery.com/jquery-3.5.1.min.js'

const benchJqueryEncoding = async () => {
  const res = await fetch(JQUERY)
  const content = await res.text()

  const crabLang = CrabLang.encode(content)
  const original = CrabLang.decode(crabLang)
}

benchJqueryEncoding()
