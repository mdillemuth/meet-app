import puppeteer from 'puppeteer'

describe('Feature 1: Filter Events By City', () => {
  let browser, page

  beforeAll(async () => {
    jest.setTimeout(30000)
    // Uncomment options below to watch tests being run in browser
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 100,
      // ignoreDefaultArgs: ['--disable-extensions'],
    })
    page = await browser.newPage()
    await page.goto('http://localhost:3000')
    await page.waitForSelector('.CitySearch')
  })

  afterAll(() => {
    browser.close()
  })

  test('When user has not searched for a city, show upcoming events from all cities', async () => {
    const events = await page.$('.Event')
    expect(events).toBeDefined()
  })

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.waitForSelector('.city')
    await page.type('.city', 'Berlin', { delay: 50 })
    await page.waitForSelector('.suggestions')

    const isVisible = await page.evaluate(() => {
      const el = document.querySelector('.suggestions')
      if (!el) return false
      const style = window.getComputedStyle(el)
      return style && style.display !== 'none' && style.visbility !== 'hidden'
    })
    expect(isVisible).toBe(true)
  })

  test('User can select a city from the suggested list', async () => {
    const cityName = 'Berlin, Germany'
    await page.waitForSelector(`[id="${cityName}"]`)
    await page.click(`[id="${cityName}"]`)
  })
})

describe('Feature 2: Show/Hide Event Details', () => {
  let browser, page

  beforeAll(async () => {
    jest.setTimeout(30000)
    // Uncomment options below to watch tests being run in browser
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250,
      // ignoreDefaultArgs: ['--disable-extensions'],
    })
    page = await browser.newPage()
    await page.goto('http://localhost:3000/')
    await page.waitForSelector('.Event')
  })

  afterAll(() => {
    browser.close()
  })

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.Event .Expanded-Event')
    expect(eventDetails).toBeNull()
  })

  test('User can expand an event to see its details', async () => {
    await page.click('.Event .btn-details')
    const eventDetails = await page.$('.Event .Expanded-Event')
    expect(eventDetails).toBeDefined()
  })

  test('User can collapse an event to hide its details', async () => {
    await page.click('.Event .btn-details')
    const eventDetails = await page.$('.Event .Expanded-Event')
    expect(eventDetails).toBeNull()
  })
})
