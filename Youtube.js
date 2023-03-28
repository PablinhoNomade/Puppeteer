const puppeteer = require('puppeteer')



const oqueVoceQuerOuvir = "Sons de chuva para dormir"




puppeteer.launch({ headless: false }).then(async browser => {


    const page = await browser.newPage()

    console.log("Abrindo o navegador de internet")
    await page.waitForTimeout(4000)

    await page.goto('https://youtube.com.br', {
        waitUntil: 'load',

        timeout: 0
    }, console.log("Carregando o Youtube... "));

    console.log('Site OK !')

    await page.waitForTimeout(1000);
    await page.type('input[id="search"]', oqueVoceQuerOuvir),

        await page.waitForTimeout(1000);

    await page.keyboard.press('Enter')

    console.log("Procurando a sua musica");
    await page.waitForTimeout(5000);

    console.log("Selecionando a sua Musica");
    await page.click("html > body > ytd-app > div > ytd-page-manager > ytd-search > div > ytd-two-column-search-results-renderer > div > ytd-section-list-renderer > div > ytd-item-section-renderer > div > ytd-search-pyv-renderer > div > ytd-ad-slot-renderer > div > ytd-in-feed-ad-layout-renderer > div > ytd-promoted-video-renderer > div > div > a > div > div > h3")

    console.log("Aguardando o redirecionamento do navegador de internet ");
    await page.waitForTimeout(5000);
    console.log("Colocando em Fullscreen ");
    await page.click("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-fullscreen-button.ytp-button");


})