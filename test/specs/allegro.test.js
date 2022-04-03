describe("Allegro - purchase", () => {
	it("should see cookies part and redirect to Allegro page", async () => {
		browser.setWindowSize(1920, 1080)
		await browser.url(`https://allegro.pl/`)
		await browser.pause(1000)
		const cookiesBttn = $('[data-role="accept-consent"]')
		expect(cookiesBttn).toBeDisplayed()
		await cookiesBttn.click()
		await browser.pause(1000)
	})

	it("should choose Electronic option", async () => {
		const electronicsOption = $('[data-group-id="departments_Elektronika"]')
		await electronicsOption.click()
		const filtersSelectedOption = $('[data-role="filters-selected-option"]')
		await expect(filtersSelectedOption).toHaveText("Elektronika")
	})

	it("should choose More Categories option", async () => {
		const moreCategoriesOption = $(
			'[data-analytics-view-value="Więcej kategorii"]'
		)
		await moreCategoriesOption.click()
		await expect(
			$('[data-box-name="Kategorie modal on.default"]')
		).toBeExisting()
	})

	it("should choose Headphones option from the list", async () => {
		const headphonesOption = $(
			'[data-box-name="all_category Galanteria i dodatki on.default"] [data-analytics-click-custom-index-0="8"]'
		)
		await headphonesOption.click()
		await browser.switchWindow(
			"Słuchawki - RTV i AGD - Elektronika - Allegro.pl"
		)
		const filtersSelectedOption = $('[data-role="filters-selected-option"]')
		await expect(filtersSelectedOption).toHaveText("Słuchawki")
	})

	it("should display the list in term of popularity sorting ", async () => {
		const listingSortPopularity = $('select[id="allegro.listing.sort"]')
		await listingSortPopularity.selectByAttribute(
			"data-event-id",
			"POPULARITY_DESC"
		)
		await expect(
			$('select[id="allegro.listing.sort"] [data-event-id="POPULARITY_DESC"]')
		).toHaveAttribute("selected", "popularność: największa")
	})

	it("should choose the first item from the list", async () => {
		const chooseFirstRecord = $('[class="opbox-listing"] article:first-child')
		await chooseFirstRecord.click()
		await browser.pause(2000)
		const filtersSelectedOption = $('[data-role="filters-selected-option"]')
		await expect(filtersSelectedOption).toHaveText("Bezprzewodowe")
		// let productName1 = $(
		// 	'[data-role="app-container"] h1:first-of-type'
		// ).getText()
	})

	it("should add an item to the cart", async () => {
		const addToCartBttn = $('button[id="add-to-cart-button"]')
		await addToCartBttn.click()
		const addedItemInfo = $(
			'[data-box-name="precart-layer-title-offer"] div :first-child'
		)
		await expect(addedItemInfo).toHaveText("Dodałeś przedmiot do koszyka")
	})

	it("should click on the button responsible for continuing purchase", async () => {
		const continuePurchaseBttn = $(
			'[data-analytics-interaction-label="continueShopping"]'
		)
		await continuePurchaseBttn.click()
	})

	it("should go to Home Page", async () => {
		const goToHomePage = $('[data-analytics-click-value="logotype"]')
		await goToHomePage.click()
		const filtersSelectedOption = $('[data-role="filters-selected-option"]')
		await expect(filtersSelectedOption).toHaveText("Wszystkie kategorie")
	})

	it("should type value in search field", async () => {
		const searchInput = $('[data-role="search-input"]')
		await searchInput.setValue("długopis 3d")
		expect(searchInput).toBeDisplayed("długopis 3d")
	})

	it("should click on Search button", async () => {
		const searchBttn = $('[data-role="search-button"]')
		await searchBttn.click()
		await browser.pause(2000)
		const listingTitle = $('[data-box-name="Listing title"] div :nth-child(2)')
		await expect(listingTitle).toHaveText("długopis 3d")
	})

	it("should provide values in price range", async () => {
		const priceRangeFrom = $('[id="price_from"]')
		await priceRangeFrom.click()
		await priceRangeFrom.setValue("250")
		await browser.pause(1000)
		const priceRangeTo = $('[id="price_to"]')
		await priceRangeTo.setValue("500")
		await browser.pause(1000)
		expect(priceRangeFrom).toBeDisplayed("250")
		expect(priceRangeTo).toBeDisplayed("500")
		const chooseFirstRecord = $('[class="opbox-listing"] article:first-child')
		await chooseFirstRecord.scrollIntoView()
	})

	it("should choose the first item from the list", async () => {
		const chooseFirstRecord = $('[class="opbox-listing"] article:first-child')
		await chooseFirstRecord.click()
		await browser.pause(2000)
		const filtersSelectedOption = $('[data-role="filters-selected-option"]')
		await expect(filtersSelectedOption).toHaveText("Urządzenia")
		// let productName2 = $(
		// 	'[data-role="app-container"] h1:first-of-type'
		// ).getText()
		// let priceProduct2 = $(
		// 	'[data-role="app-container"] [aria-label*="cena"] > span'
		// ).getText()
		// priceProduct2 = parseInt(priceProduct2.slice(0, -1))
	})

	it("should add an item to the cart", async () => {
		const addToCartBttn = $('button[id="add-to-cart-button"]')
		await addToCartBttn.click()
		const addedItemInfo = $(
			'[data-box-name="precart-layer-title-offer"] div :first-child'
		)
		await expect(addedItemInfo).toHaveText("Dodałeś przedmiot do koszyka")
	})

	it("should go to My Cart view from the item popup", async () => {
		const goToCartModalBttn = $('[data-analytics-click-label="goToCart"]')
		await goToCartModalBttn.click()
		const deliveryAndPaymentBttn = $(
			'[data-analytics-view-label="deliveryAndPaymentButtonState"]'
		)
		await expect(deliveryAndPaymentBttn).toBeClickable()
	})
})
