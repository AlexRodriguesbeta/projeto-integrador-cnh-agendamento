// myHeaders = new Headers({
//     "Authorization": "Bearer m_v4qYCfdSzeVczUDFbob_AkExEaVzYobSUhULVuGXYO1VOlJnlaSPt36oyT0Q",
//     "X-Spreadsheet-Id": "1sHxAUBPyx-RnViA4dtb2M5Uhrr8TzBgL-a0fnJRoP_8",
//   });

// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'cors',
//                cache: 'default' };

// fetch('https://api.sheetson.com/v2/sheets/BaseCNH/4',myInit)
// .then(function(response) {
//     let retorno = response.json();
//     console.log(retorno);
//     return retorno;
// })


let estruturaCarteira =
`
<div class="carteira">
<!-- <div class="referencia"></div> -->
<div class="header-fundo"></div>
<div class="header-carteira">
    <span><span>UF: </span><span id="uf">SP</span></span>
    <span class="header-direita"><span>MUNICÍPIO: </span><span id="municipio">São José dos Campos</span></span> 
</div>
<div class="corpo-carteira">

<div class="contato">
     <img class="foto" src="img/placeholder-usuario-500x500.jpg" alt="Placeholder Foto">
     <a href="https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20um%20hor%C3%A1rio%20de%20instru%C3%A7%C3%A3o%2C%20tem%20hor%C3%A1rio%20livre%20para%20a%20pr%C3%B3xima%20semana%3F">
        <button type="button" class="btn btn-primary botao-contato">Entrar em contato</button>
    </a>
    <p class="valor">VALOR DA HORA: <span>R$ </span><span id="valor">150</span><span>,00</span></p>
</div>

    <div class="informacoes">
        <p id="nome-usuario">América Souza Augusto da Silva</p>
        <p class="detalhes">CARRO: <span id="marca-carro">VOLKSWAGEN</span><span> (</span><span id="ano-carro">2017</span><span>)</span></p>
        <p class="detalhes">EXPERIÊNCIA: <span id="experiencia">15</span><span> ANOS</span></p>
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
                <td><img class="indisponivel" id="manha-segunda" src="img/manha.png" alt="Ícone Manhã"></td>
                <td><img id="manha-terca" src="img/manha.png" alt="Ícone Manhã"></td>
                <td><img id="manha-quarta" src="img/manha.png" alt="Ícone Manhã"></td>
                <td><img id="manha-quinta" src="img/manha.png" alt="Ícone Manhã"></td>
                <td><img class="indisponivel" id="manha-sexta" src="img/manha.png" alt="Ícone Manhã"></td>
                <td><img id="manha-sabado" src="img/manha.png" alt="Ícone Manhã"></td>
            </tr>

            <tr>
                <td><img id="tarde-segunda" src="img/tarde.png" alt="Ícone Manhã"></td>
                <td><img id="tarde-terca" src="img/tarde.png" alt="Ícone Manhã"></td>
                <td><img class="indisponivel" id="tarde-quarta" src="img/tarde.png" alt="Ícone Manhã"></td>
                <td><img class="indisponivel" id="tarde-quinta" src="img/tarde.png" alt="Ícone Manhã"></td>
                <td><img id="tarde-sexta" src="img/tarde.png" alt="Ícone Manhã"></td>
                <td><img id="tarde-sabado" src="img/tarde.png" alt="Ícone Manhã"></td>
            </tr>

            <tr>
                <td><img class="indisponivel" id="noite-segunda" src="img/noite.png" alt="Ícone Manhã"></td>
                <td><img id="noite-terca" src="img/noite.png" alt="Ícone Manhã"></td>
                <td><img id="noite-quarta" src="img/noite.png" alt="Ícone Manhã"></td>
                <td><img class="indisponivel" id="noite-quinta" src="img/noite.png" alt="Ícone Manhã"></td>
                <td><img class="indisponivel" id="noite-sexta" src="img/noite.png" alt="Ícone Manhã"></td>
                <td><img id="noite-sabado" src="img/noite.png" alt="Ícone Manhã"></td>
            </tr>
        </table>
    
    </div>
 

</div>
</div> 
`
for(let i=0; i<5; i++) {
    document.querySelector('.encapsulamento-carteira').innerHTML += estruturaCarteira;
}
