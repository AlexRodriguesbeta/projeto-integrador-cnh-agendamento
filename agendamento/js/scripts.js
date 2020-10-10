// const url = 'https://sheet.best/api/sheets/23704868-8eff-4e28-a15f-799061419c17';

//Para teste, rode um json server com o arquivo DB_Carteira.json dentro da pasta js

const url = 'http://localhost:3000/data';

//Retorna todos os dados da API
//async function buscarInfo() {
   // const response = await fetch(url);
    //const result = await response.json();
    //return result;
//}

//Retorna somente um dos dados da API
async function buscarInfoLinha(row) {
    const urlRow = url + `/${row}`;
    const response = await fetch(urlRow);
    const result = await response.json();
    return result;
}

//Pegar n pessoas aleatórias
async function buscarLinhasAleatorias(quantidade) {
    let rows = []; //Para trackear linhas já buscadas
    let infos = []; //Dados buscados
    let info = new Object();
    let row = 0;

    for (let i=0; i<quantidade; i++) {
        //Gera aleatório entre 0 e 31, sem incluí-los, é a linha atual
        row = Math.floor(Math.random() * 30) + 1;
        //É a info atual
        info = await buscarInfoLinha(row);
        //Garantir que não há números repetidos
        if(!rows.includes(row) || rows == []){
            rows.push(row);
            infos.push(info);
        } else {
            i--;
        }
    }
    return infos;
}

//Desenha as carteiras na tela já com suas informações buscadas na API
async function desenharCarteiras(info) {
    let estruturaCarteira = "";
    let i=0;
    let encapsulamentoCarteira = document.querySelector('.encapsulamento-carteira');

    //Limpando todas as carteiras
    encapsulamentoCarteira.innerHTML = "";

    info.forEach(pessoa => {
        //Seta a estrutura da carteira com o valor de 'i' ao fim de cada id a ser populada
        estruturaCarteira =
        `
        <div class="carteira">
        <!-- <div class="referencia"></div> -->
        <div class="header-carteira">
        <div class="header-fundo-carteira"></div>
            <span><span>UF: </span><span class="uf" id="uf${i}">SP</span></span>
            <span class="header-direita-carteira"><span>MUNICÍPIO: </span><span class="municipio" id="municipio${i}">São José dos Campos</span></span> 
        </div>
        <div class="corpo-carteira">
        
        <div class="contato-carteira">
            <div class="foto-usuario">
                <img class="foto-carteira" id="foto-carteira${i}" src="img/placeholder-usuario-500x500.jpg" alt="Placeholder Foto">
            </div>
            <a href="https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20um%20hor%C3%A1rio%20de%20instru%C3%A7%C3%A3o%2C%20tem%20hor%C3%A1rio%20livre%20para%20a%20pr%C3%B3xima%20semana%3F">
                <button type="button" class="btn btn-primary botao-contato-carteira">Entrar em contato</button>
            </a>
            <p class="valor-carteira">VALOR DA HORA: <span>R$ </span><span class="valor" id="valor${i}">150</span><span>,00</span></p>
        </div>
        
            <div class="informacoes-carteira">
                <p class="nome-usuario" id="nome-usuario${i}">América Souza Augusto da Silva</p>
                <p class="detalhes-carteira">CARRO: <span id="marca-carro${i}">VOLKSWAGEN</span><span> (</span><span id="ano-carro${i}">2017</span><span>)</span></p>
                <p class="detalhes-carteira">EXPERIÊNCIA: <span id="experiencia${i}">15</span><span> ANOS</span></p>
                <p class="disponibilidade-texto" style="text-align: center">DISPONIBILIDADE</p>
        
                <table class="disponibilidade-tabela">
                    <tr>
                        <th>SEGUNDA</th>
                        <th>TERÇA</th>
                        <th>QUARTA</th>
                        <th>QUINTA</th>
                        <th>SEXTA</th>
                        <th>SÁBADO</th>
                    </tr>
        
                    <tr>
                        <td><img id="manha-segunda${i}" src="img/manha.png" alt="Ícone Manhã"></td>
                        <td><img id="manha-terca${i}" src="img/manha.png" alt="Ícone Manhã"></td>
                        <td><img id="manha-quarta${i}" src="img/manha.png" alt="Ícone Manhã"></td>
                        <td><img id="manha-quinta${i}" src="img/manha.png" alt="Ícone Manhã"></td>
                        <td><img id="manha-sexta${i}" src="img/manha.png" alt="Ícone Manhã"></td>
                        <td><img id="manha-sabado${i}" src="img/manha.png" alt="Ícone Manhã"></td>
                    </tr>
        
                    <tr>
                        <td><img id="tarde-segunda${i}" src="img/tarde.png" alt="Ícone Manhã"></td>
                        <td><img id="tarde-terca${i}" src="img/tarde.png" alt="Ícone Manhã"></td>
                        <td><img id="tarde-quarta${i}" src="img/tarde.png" alt="Ícone Manhã"></td>
                        <td><img id="tarde-quinta${i}" src="img/tarde.png" alt="Ícone Manhã"></td>
                        <td><img id="tarde-sexta${i}" src="img/tarde.png" alt="Ícone Manhã"></td>
                        <td><img id="tarde-sabado${i}" src="img/tarde.png" alt="Ícone Manhã"></td>
                    </tr>
        
                    <tr>
                        <td><img id="noite-segunda${i}" src="img/noite.png" alt="Ícone Manhã"></td>
                        <td><img id="noite-terca${i}" src="img/noite.png" alt="Ícone Manhã"></td>
                        <td><img id="noite-quarta${i}" src="img/noite.png" alt="Ícone Manhã"></td>
                        <td><img id="noite-quinta${i}" src="img/noite.png" alt="Ícone Manhã"></td>
                        <td><img id="noite-sexta${i}" src="img/noite.png" alt="Ícone Manhã"></td>
                        <td><img id="noite-sabado${i}" src="img/noite.png" alt="Ícone Manhã"></td>
                    </tr>
                </table>
            </div>
        </div>
        </div>     
        `;
        //Desenha a carteira vazia
        encapsulamentoCarteira.innerHTML += estruturaCarteira;
        //Insere os dados na carteira vazia
        Object.getOwnPropertyNames(pessoa).forEach(propriedade => {
            //propriedade = nome da propriedade (ex: id, telefone, nome-usuario)
            //pessoa[propriedade] = valor da propriedade
            let propriedadeDOM = document.getElementById(`${propriedade}${i}`);

            //Se a propriedade for "false", então é um dia que a pessoa não está disponível
            if (pessoa[propriedade] == "false") {
                propriedadeDOM.classList.add("indisponivel");
                //Se a propriedade for "true", então é um dia que a pessoa está disponível e nada precisa ser feito
                //Se a propriedade buscado no DOM for null, então a propriedade não existe no DOM e deve ser pulada
            } else if (pessoa[propriedade] == "true" || propriedadeDOM == null) {
                console.log("Nada precisa ser feito ou propriedade não existe no DOM");
                //A foto da carteira usa uma propriedade no src, e não no innerText
            } else if (propriedade == "foto-carteira") {
                propriedadeDOM.src = pessoa[propriedade];
                //Setando o valor da propriedade com innerText
            } else {
                propriedadeDOM.innerText = pessoa[propriedade];
            };
          });
        i++;
    });
}

async function teste() {
    const dados = await buscarInfo();
    console.log(dados);
    desenharCarteiras(dados);
}

teste();

function escreveMunicipiosPorUF() {
    //Pegando a UF que foi escolhida
    let siglaUF = document.getElementById('comboUF').value;
    //Pegando a lista de municípios
    let municipiosHTML = document.getElementById('comboMunicipio');
    //Zerando a lista de municípios no HTML toda vez que a função é chamada
    municipiosHTML.innerHTML =
    `
    <option value="Municipio" hidden selected>Município</option>
    `;
    let municipios = [];
    let estruturaMunicipio = "";

    if (siglaUF == 'MG') {
        municipios = [
                        'Barbacena',
                        'Belo Horizonte',
                        'Poços de Caldas',
                        'Uberaba',
                        'Uberlândia'    
                    ];
    } else if (siglaUF == 'RJ') {
        municipios = [
                        'Angra dos Reis',
                        'Araruama',
                        'Búzios',
                        'Duque de Caxias',
                        'Macaé',
                        'Niterói',
                        'Rio Bonito',
                        'Rio das Ostras',
                        'Rio de Janeiro',
                        'São Fidélis'          
                    ];
      } else if (siglaUF == 'SP') {
        municipios = [
                        'Atibaia',
                        'Bauru',
                        'Botucatu',
                        'Cotia',
                        'Guarulhos',
                        'Limeira',
                        'Rio Claro',
                        'São Carlos',
                        'São José dos Campos',
                        'São Paulo'      
                    ];
      }
  
      municipios.forEach(municipio => {
        let estruturaMunicipio =
        `
        <option value="${municipio}">${municipio}</option>
        `;
        municipiosHTML.innerHTML += estruturaMunicipio;  
      });
};

let contadorCarteira = document.querySelector('.tempoCarteira');
let contadorCarro = document.querySelector('.anoCarro');

let maisCarro = document.querySelector('.plusCarro');
let menosCarro = document.querySelector('.minusCarro');

let maisCarteira = document.querySelector('.plusExp');
let menosCarteira = document.querySelector('.minusExp');

maisCarro.addEventListener('click', () => {
    if(parseInt(contadorCarro.value) < 2020) {
        contadorCarro.value = (parseInt(contadorCarro.value) + 1).toString();
    }
})

menosCarro.addEventListener('click', () => {
    if(parseInt(contadorCarro.value) > 2000) {
        contadorCarro.value = (parseInt(contadorCarro.value) - 1).toString();
    }
});

maisCarteira.addEventListener('click', () => {
    if(parseInt(contadorCarteira.value) < 50) {
        contadorCarteira.value = (parseInt(contadorCarteira.value) + 1).toString();
    }
})

menosCarteira.addEventListener('click', () => {
    if(parseInt(contadorCarteira.value) > 0) {
        contadorCarteira.value = (parseInt(contadorCarteira.value) - 1).toString();
    }
});

//  função filtrar versão 1

async function filter(){
    let urlFiltro ='/tabs/BaseCNH/search?'; 
    let uf = document.getElementById('comboUF'); 
    let municipio = document.getElementById('comboMunicipio'); 
    let carro = document.getElementById('comboCarro'); 
    let ano = document.querySelector('input[name=anoCarro]');
    let experiencia = document.querySelector('input[name=exp]');

    if(uf.value !== 'UF'){
        urlFiltro += 'uf='+uf.value; 
    }

    if(municipio.value !== "Municipio"){
        urlFiltro += '&municipio='+municipio.value; 
    }

    if(carro.value !== "Carro"){
        urlFiltro += '&marca-carro='+carro.value; 
    }

    if(ano.value !== "2000"){
        urlFiltro += '&ano-carro='+ano.value; 
    }

    if(experiencia.value !== "0"){
        urlFiltro += '&experiencia='+experiencia.value;
    }
     
    const dados = await buscarInfo(urlFiltro);
    console.log(dados);
    desenharCarteiras(dados);
    
}



async function buscarInfo(urlF) {
    const response = await fetch(url+urlF);
    const result = await response.json();
    return result;
} 
