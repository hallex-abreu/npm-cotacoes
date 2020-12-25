const puppeteer = require('puppeteer');

async function cotacoes(cotacao){
  switch(cotacao){
    case 'petr4':
      var url = 'petrobras-petr4/'
    break;  
    case 'vale3':
      var url = 'vale-vale3/'
    break;
    case 'itub4':
      var url = 'itau-unibanco-itub4/'
    break;
    case 'abev3':
      var url = 'ambev-abev3/'
    break;
    case 'ggbr4':
      var url = 'gerdau-ggbr4/'
    break;
    case 'ibove':
      var url = 'ibovespa/'
    break;
    case 'btc':
      var url = 'bitcoin-btc/'
    break;
    case 'ifix':
      var url = 'ifix/'
    break;
    case 'mglu3':
      var url = 'magazine-luiza-mglu3/'
    break;
  }

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(`https://www.infomoney.com.br/cotacoes/${url}`);

  const dadoCotacao = await page.evaluate(()=>{
    //Toda essa função será executada no browser
    const dados = document.querySelectorAll('body .line-info p')

    const dadosArray = [...dados]
  
    const list = {
      valor_pontos: '',
      variacao: '',
      min: '',
      max: '',
      volume: ''
    }
  
    dadosArray.map( (p, index) => {
      switch(index){
        case 0:
          list.valor_pontos = p.innerText
        case 1:  
          list.variacao = p.innerText
        case 2:
          list.min = p.innerText
        case 3:
          list.max = p.innerText
        case 4:
          list.volume = p.innerText
      }
    })
    return list;
  });
  await browser.close();    

 return dadoCotacao;
}

async function cambio () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.infomoney.com.br/ferramentas/cambio/');

  const dadoCotacao = await page.evaluate(()=>{
    //Toda essa função será executada no browser
    const dados = document.querySelectorAll('body tbody tr td')

    const dadosArray = [...dados]

    const todosDados = dadosArray.map(td =>{
      return td.innerText
    })

    const da = todosDados.slice(5, 9)
    const dca = todosDados.slice(10, 14)
    const dc = todosDados.slice(20, 24)
    const dt = todosDados.slice(25, 29)

    const er = todosDados.slice(30, 34)
    const ps = todosDados.slice(0, 4)
    const fc = todosDados.slice(15, 19)
    const ie = todosDados.slice(40, 44)
    const lb = todosDados.slice(35, 39)

    const dolarAutraliano = {
      moeda : '',
      compra: '',
      venda: '',
      variacao: ''
    }

    const dolarCanadence = {
      moeda : '',
      compra: '',
      venda: '',
      variacao: ''
    }

    const dolarComercial = {
      moeda : '',
      compra: '',
      venda: '',
      variacao: ''
    }

    const dolarTurismo = {
      moeda : '',
      compra: '',
      venda: '',
      variacao: ''
    }

    const euro = {
      moeda : '',
      compra: '',
      venda: '',
      variacao: ''
    }

    const peso = {
      moeda : '',
      compra: '',
      venda: '',
      variacao: ''
    }

    const franco = {
      moeda : '',
      compra: '',
      venda: '',
      variacao: ''
    }

    const iene = {
      moeda : '',
      compra: '',
      venda: '',
      variacao: ''
    }

    const libra = {
      moeda : '',
      compra: '',
      venda: '',
      variacao: ''
    }

    da.map((m, index) => {
      switch(index){
        case 0:
          dolarAutraliano.moeda = m;
        case 2:
          dolarAutraliano.compra = m;
        case 3:
          dolarAutraliano.venda = m;
        case 4:
          dolarAutraliano.variacao = m;   
        default:
          return '' 
        break;    
      }
    })

    dca.map((m, index) => {
      switch(index){
        case 0:
          dolarCanadence.moeda = m;
        case 2:
          dolarCanadence.compra = m;
        case 3:
          dolarCanadence.venda = m;
        case 4:
          dolarCanadence.variacao = m;   
        default:
          return '' 
        break;    
      }
    })

    dc.map((m, index) => {
      switch(index){
        case 0:
          dolarComercial.moeda = m;
        case 2:
          dolarComercial.compra = m;
        case 3:
          dolarComercial.venda = m;
        case 4:
          dolarComercial.variacao = m;   
        default:
          return '' 
        break;    
      }
    })

    dt.map((m, index) => {
      switch(index){
        case 0:
          dolarTurismo.moeda = m;
        case 2:
          dolarTurismo.compra = m;
        case 3:
          dolarTurismo.venda = m;
        case 4:
          dolarTurismo.variacao = m;   
        default:
          return '' 
        break;    
      }
    })

    er.map((m, index) => {
      switch(index){
        case 0:
          euro.moeda = m;
        case 2:
          euro.compra = m;
        case 3:
          euro.venda = m;
        case 4:
          euro.variacao = m;   
        default:
          return '' 
        break;    
      }
    })

    ps.map((m, index) => {
      switch(index){
        case 0:
          peso.moeda = m;
        case 2:
          peso.compra = m;
        case 3:
          peso.venda = m;
        case 4:
          peso.variacao = m;   
        default:
          return '' 
        break;    
      }
    })

    fc.map((m, index) => {
      switch(index){
        case 0:
          franco.moeda = m;
        case 2:
          franco.compra = m;
        case 3:
          franco.venda = m;
        case 4:
          franco.variacao = m;   
        default:
          return '' 
        break;    
      }
    })

    ie.map((m, index) => {
      switch(index){
        case 0:
          iene.moeda = m;
        case 2:
          iene.compra = m;
        case 3:
          iene.venda = m;
        case 4:
          iene.variacao = m;   
        default:
          return '' 
        break;    
      }
    })

    lb.map((m, index) => {
      switch(index){
        case 0:
          libra.moeda = m;
        case 2:
          libra.compra = m;
        case 3:
          libra.venda = m;
        case 4:
          libra.variacao = m;   
        default:
          return '' 
        break;    
      }
    })
    return [dolarAutraliano, dolarCanadence, dolarComercial, dolarTurismo, euro, peso, franco, iene, libra]
  });
  await browser.close();    

  return dadoCotacao;
}

cambio();

module.exports = {
  cotacoes,
  cambio
}