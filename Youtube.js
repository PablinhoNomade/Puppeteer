const puppeteer = require('puppeteer')



const oqueVoceQuerOuvir = "Sons de chuva para dormir"// nome da musica que voce deseja 
const horasParaDesligar = 01   // hora que deseja parar de tocar  
const minutosParaDesligar = 34 // minutos que deseja que pare de tocar 

const tempoDeResposta = 10000 // tempo de resposta do seu computador com a comunição com a internet para carregamento do site e execultar o programa 



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

            browser.close();
            clearInterval(encerramento);
            console.log("Chega desta musica  , vamos pra outra ?")
        }


    }

    const encerramento = setInterval(contagem, 1000);

})