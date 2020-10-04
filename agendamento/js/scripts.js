//Request do Sheetson, pede a planilha inteira
// myHeaders = new Headers({
//     "Authorization": "Bearer m_v4qYCfdSzeVczUDFbob_AkExEaVzYobSUhULVuGXYO1VOlJnlaSPt36oyT0Q",
//     "X-Spreadsheet-Id": "1sHxAUBPyx-RnViA4dtb2M5Uhrr8TzBgL-a0fnJRoP_8",
//   });

// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'cors',
//                cache: 'default' };

// fetch('https://api.sheetson.com/v2/sheets/BaseCNH',myInit)
// .then(function(response) {
//     let retorno = response.json();
//     console.log(retorno);
//     return retorno;
// })

// const url = 'https://sheet.best/api/sheets/bbd84ec6-c651-495d-b922-c3c9afcbc8c1';
const url = 'http://localhost:3000/data';

//Retorna todos os dados da API
async function buscarInfo() {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

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

// const infoTeste = [
//     {
//         "id": "2",
//         "foto-carteira": "https://www.prescriptum.com.br/wp-content/uploads/2015/12/placeholder-usuario-500x500.jpg",
//         "numero-carteira": "42994233493",
//         "celular": "(11) 98055-8488",
//         "uf": "SP",
//         "municipio": "Cotia",
//         "experiencia": "11",
//         "nome-usuario": "Antônio Pereira Souza",
//         "Idade": "31",
//         "marca-carro": "Citroën",
//         "ano-carro": "2009",
//         "valor": "150",
//         "manha-segunda": "true",
//         "tarde-segunda": "false",
//         "noite-segunda": "false",
//         "manha-terca": "false",
//         "tarde-terca": "true",
//         "noite-terca": "true",
//         "manha-quarta": "true",
//         "tarde-quarta": "false",
//         "noite-quarta": "false",
//         "manha-quinta": "true",
//         "tarde-quinta": "true",
//         "noite-quinta": "false",
//         "manha-sexta": "true",
//         "tarde-sexta": "true",
//         "noite-sexta": "false",
//         "manha-sabado": "false",
//         "tarde-sabado": "true",
//         "noite-sabado": "false"
//       },
//       {
//         "id": "1",
//         "foto-carteira": "https://www.prescriptum.com.br/wp-content/uploads/2015/12/placeholder-usuario-500x500.jpg",
//         "numero-carteira": "77651928203",
//         "celular": "(11) 91376-9738",
//         "uf": "SP",
//         "municipio": "São José dos Campos",
//         "experiencia": "19",
//         "nome-usuario": "Davi Barbosa Melo",
//         "Idade": "39",
//         "marca-carro": "Fiat",
//         "ano-carro": "2012",
//         "valor": "150",
//         "manha-segunda": "false",
//         "tarde-segunda": "false",
//         "noite-segunda": "true",
//         "manha-terca": "true",
//         "tarde-terca": "false",
//         "noite-terca": "false",
//         "manha-quarta": "false",
//         "tarde-quarta": "false",
//         "noite-quarta": "true",
//         "manha-quinta": "false",
//         "tarde-quinta": "true",
//         "noite-quinta": "true",
//         "manha-sexta": "false",
//         "tarde-sexta": "false",
//         "noite-sexta": "false",
//         "manha-sabado": "false",
//         "tarde-sabado": "true",
//         "noite-sabado": "true"
//       }
// ]

//Desenha as carteiras na tela já com suas informações buscadas na API
async function desenharCarteiras(info) {
    let estruturaCarteira = "";
    let i=0;

    info.forEach(pessoa => {
        //Seta a estrutura da carteira com o valor de 'i' ao fim de cada id a ser populada
        estruturaCarteira =
        `
        <div class="carteira">
        <!-- <div class="referencia"></div> -->
        <div class="header-fundo-carteira"></div>
        <div class="header-carteira">
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
        `
        //Desenha a carteira vazia
        document.querySelector('.encapsulamento-carteira').innerHTML += estruturaCarteira;
        //Insere os dados na carteira vazia
        Object.getOwnPropertyNames(pessoa).forEach(function(propriedade, idx, array) {
            //propriedade = nome da propriedade (ex: id, telefone, nome-usuario)
            //pessoa[propriedade] = valor da propriedade
            let propriedadeDOM = document.getElementById(`${propriedade}${i}`);
            // console.log(propriedade);
            // console.log(propriedadeDOM);

            //Se a propriedade for "false", então é um dia que a pessoa não está disponível
            if (pessoa[propriedade] == "false") {
                propriedadeDOM.classList.add("indisponivel");
                //Se a propriedade for "true", então é um dia que a pessoa está disponível e nada precisa ser feito
                //Se a propriedade buscado no DOM for null, então a propriedade não existe no DOM e deve ser pulada
            } else if (pessoa[propriedade] == "true" || propriedadeDOM == null) {
                console.log("Propriedade não existe no DOM");
                //A foto da carteira usa uma propriedade no src, e não no innerText
            } else if (propriedade == "foto-carteira") {
                propriedadeDOM.src = pessoa[propriedade];
                //Setando o valor da propriedade com innerText
            } else {
                propriedadeDOM.innerText = pessoa[propriedade];
            }
            // console.log(propriedade + ' -> ' + pessoa[propriedade]);
          });
        i++
    })
}

async function teste() {
    const dados = await buscarInfo();
    console.log(dados);
    desenharCarteiras(dados);
}

teste();
