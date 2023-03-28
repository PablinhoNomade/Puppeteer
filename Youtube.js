const puppeteer = require('puppeteer')


const oqueVoceQuerOuvir = "sons da chuva "// musica desejada "Obs caso altere o nome da musica pode ocorrer do codigo não encontrar o caminho dela pois o caminho deve ser alterado no codigo tambem "
const horasParaDesligar = 03  // Coloque as hora que deseja feche o navegador de internet    
const minutosParaDesligar = 26 // minutos que deseja feche o navegador de internet 

const tempoDeResposta = 4000 // tempo de resposta do seu computador com a comunição com a internet para carregamento do site e execultar o programa 


puppeteer.launch({ headless: false }).then(async browser => {


    const page = await browser.newPage()

    console.log("Abrindo o navegador de internet")
    await page.waitForTimeout(tempoDeResposta)

    await page.goto('https://youtube.com.br', {
        waitUntil: 'load',

        timeout: 0
    }, console.log("Carregando o Youtube... "));

    console.log('Site OK !')

    await page.waitForTimeout(tempoDeResposta);
    await page.type('input[id="search"]', oqueVoceQuerOuvir);

    await page.waitForTimeout(tempoDeResposta);

    await page.keyboard.press('Enter')

    console.log("Procurando a sua musica");
    await page.waitForTimeout(tempoDeResposta);
    console.log("Selecionando a sua Musica");
    await page.click("html > body > ytd-app > div > ytd-page-manager > ytd-search > div > ytd-two-column-search-results-renderer > div > ytd-section-list-renderer > div > ytd-item-section-renderer > div > ytd-search-pyv-renderer > div > ytd-ad-slot-renderer > div > ytd-in-feed-ad-layout-renderer > div > ytd-promoted-video-renderer > div > div > a > div > div > h3")


    console.log("Aguardando o redirecionamento do navegador de internet ");
    await page.waitForTimeout(tempoDeResposta);

    console.log("Colocando em Fullscreen ");
    await page.click("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-fullscreen-button.ytp-button");


    console.log(`O navegador vai fechar as ${horasParaDesligar}:${minutosParaDesligar}`);

    const contagem = async () => {

        let dataAtual = new Date();
        let horas = dataAtual.getHours();
        let minutos = dataAtual.getMinutes();

        if (horas == horasParaDesligar && minutos == minutosParaDesligar) {
            clearInterval(encerramento);

            browser.close();
            console.log(`Chega de ${oqueVoceQuerOuvir}, vamos pra outra musica ?`)
        }


    }

    const encerramento = setInterval(contagem, 1000);

})