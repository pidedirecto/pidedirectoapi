import { chromium } from '/Users/carlosrogeliorivasmireles/.npm/_npx/bbb8a2c4738e2b0c/node_modules/playwright/index.js'

const pages = [
  { path: '/api/products/upload-store-menu-v2', name: 'upload-store-menu-v2' },
  { path: '/api/orders/get-order', name: 'get-order' },
  { path: '/api/store-catalog/get-store-catalog', name: 'get-store-catalog' },
  { path: '/api/orders/cancel-order', name: 'cancel-order' },
]

const browser = await chromium.launch()
const page = await browser.newPage()

for (const { path, name } of pages) {
  await page.goto(`http://localhost:4173${path}`, { waitUntil: 'networkidle' })

  const result = await page.evaluate(() => {
    const doc = document.querySelector('.vp-doc')
    const requestHeading = Array.from(doc?.querySelectorAll('h2') ?? []).find(
      (h) => h.textContent?.trim() === 'Request',
    )
    const responseHeading = Array.from(doc?.querySelectorAll('h2') ?? []).find(
      (h) => h.textContent?.trim() === 'Response',
    )

    function tableStats(heading) {
      if (!heading) return null
            
      let el = heading.nextElementSibling
            
      while (el && el.tagName !== 'H2') {
        if (el.tagName === 'TABLE') {
          const rows = Array.from(el.querySelectorAll('tr')).slice(1)
          const toggles = el.querySelectorAll('.param-table-toggle').length
          const hidden = el.querySelectorAll('.param-table-row--hidden').length
          const enhanced = el.hasAttribute('data-param-table-enhanced')
          return { rows: rows.length, toggles, hidden, enhanced }
        }
        el = el.nextElementSibling
      }
      return null
    }

    const errorsHeading = Array.from(doc?.querySelectorAll('h2') ?? []).find(
      (h) => h.textContent?.trim() === 'Errors',
    )
    let errorTableEnhanced = false
    if (errorsHeading) {
      let el = errorsHeading.nextElementSibling
      while (el && el.tagName !== 'H2') {
        if (el.tagName === 'TABLE') {
          errorTableEnhanced = el.hasAttribute('data-param-table-enhanced')
          break
        }
        el = el.nextElementSibling
      }
    }

    return {
      request: tableStats(requestHeading),
      response: tableStats(responseHeading),
      errorTableEnhanced,
    }
  })

  console.log(`\n${name}:`)
  console.log(JSON.stringify(result, null, 2))
}

await browser.close()
