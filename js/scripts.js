// let url = 'https://api.sheety.co/2cb3b4e06ae64af40d9e60b2e69e5b3b/baseExemploSiteCnh/planilha1';
// fetch(url)
// .then((response) => response.json())
// .then(json => {
//   // Do something with the data
//   console.log(json.planilha1); 
// });

import BaseDados from '../agendamento/js/scripts'

function escreveMunicipiosPorUF() {
  console.log("teste");
  //Pegando a UF que foi escolhida
  let siglaUF = document.getElementById('comboUF').value;
  //Pegando a lista de municípios
  let municipiosHTML = document.getElementById('comboMunicipio');
  //Zerando a lista de municípios no HTML toda vez que a função é chamada
  municipiosHTML.innerHTML =
  `
  <option value="Municipio" hidden selected>Município</option>
  `

  if (siglaUF == 'MG') {
    const municipios = ['Barbacena',
                        'Belo Horizonte',
                        'Poços de Caldas',
                        'Uberaba',
                        'Uberlândia'    
                       ];
  } else if (siglaUF == 'RJ') {
        const municipios = ['Angra dos Reis',
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
      const municipios = ['Atibaia',
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

    municipios.array.forEach(municipio => {
      let estruturaMunicipio =
      `
      <option value="${municipio}">${municipio}</option>
      `
      municipiosHTML.innerHTML += estruturaMunicipio;
      
    });
};


function retornaListaSiglaUF() { 
  const siglaUF = ['SP',
                  'RJ',
                  'MG' 
                  ];
  return siglaUF; 
};


function retornaListaEstadoComUF() { 
  var estadoComUF = [];
  estadoComUF.push(['MG', 'Minas Gerais']);
  estadoComUF.push(['RJ', 'Rio de Janeiro']);
  estadoComUF.push(['SP', 'São Paulo']);
  
  return estadoComUF; 
};


function retornaEstadoPelaUF(siglaUF) { 
  if (siglaUF == 'MG') {
    const estadoUF = 'Minas Gerais';
  } else if (siglaUF == 'RJ') {
    const estadoUF = 'Rio de Janeio';
  } else if (siglaUF == 'MG') {
    const estadoUF = 'São Paulo';
  }

  return estadoUF; 
};


function retornaListaMarcas() { 
  const marcas = ['Chevrolet',
                      'Citroën',
                      'Fiat',
                      'Ford',
                      'Honda',
                      'Hyundai',
                      'Jeep',
                      'Peugeot',
                      'Renault',
                      'Toyota',
                      'Volkswagen'  
                     ];
  return marcas; 
};


function retornaListaTurnos() { 
  const turno = ['Manhã',
                  'Tarde',
                  'Noite' 
                  ];
  return turno; 
};



function retornaListaDiasDaSemana() { 
  const turno = ['Segunda-feira',
                'Terça-feira',
                'Quarta-feira',
                'Quinta-feira',
                'Sexta-feira',
                'Sábado'
                ];
  return turno; 
};



function retornaListaValorHora() { 
  const valorHora = ['100',
                    '101',
                    '102',
                    '105',
                    '114',
                    '120',
                    '130',
                    '140',
                    '150'  
                ];
  return valorHora; 
};



function retornaListaAnoVeiculo() { 
  const anoVeiculo = ['2004',
                      '2005',
                      '2006',
                      '2007',
                      '2008',
                      '2009',
                      '2010',
                      '2011',
                      '2012',
                      '2013',
                      '2014',
                      '2015',
                      '2016',
                      '2017',
                      '2019',
                      '2020'
                      ];
  return anoVeiculo; 
};


function retornaColunaTurnoDiaDaSemana(turno, diaDaSemana) {
  let colunaTurnoDiaDaSemana = '';
  if (diaDaSemana == 'Segunda-feira'){
     if (turno == 'Manhã') {
      colunaTurnoDiaDaSemana = 'manha-segunda'; 
     } else if (turno == 'Tarde') {
      colunaTurnoDiaDaSemana = 'tarde-segunda';
     } else if (turno == 'Noite') {
      colunaTurnoDiaDaSemana = 'noite-segunda';
     }
  } else if (diaDaSemana == 'Terça-feira') {
    if (turno == 'Manhã') {
      colunaTurnoDiaDaSemana = 'manha-terca'; 
     } else if (turno == 'Tarde') {
      colunaTurnoDiaDaSemana = 'tarde-terca';
     } else if (turno == 'Noite') {
      colunaTurnoDiaDaSemana = 'noite-terca';
     }
  } else if (diaDaSemana == 'Quarta-feira') {
    if (turno == 'Manhã') {
      colunaTurnoDiaDaSemana = 'manha-quarta'; 
     } else if (turno == 'Tarde') {
      colunaTurnoDiaDaSemana = 'tarde-quarta';
     } else if (turno == 'Noite') {
      colunaTurnoDiaDaSemana = 'noite-quarta';
     }
  } else if (diaDaSemana == 'Quinta-feira') {
    if (turno == 'Manhã') {
      colunaTurnoDiaDaSemana = 'manha-quinta'; 
     } else if (turno == 'Tarde') {
      colunaTurnoDiaDaSemana = 'tarde-quinta';
     } else if (turno == 'Noite') {
      colunaTurnoDiaDaSemana = 'noite-quinta';
     }
  } else if (diaDaSemana == 'Sexta-feira') {
    if (turno == 'Manhã') {
      colunaTurnoDiaDaSemana = 'manha-sexta'; 
     } else if (turno == 'Tarde') {
      colunaTurnoDiaDaSemana = 'tarde-sexta';
     } else if (turno == 'Noite') {
      colunaTurnoDiaDaSemana = 'noite-sexta';
     }
  } else if (diaDaSemana == 'Sábado') {
    if (turno == 'Manhã') {
      colunaTurnoDiaDaSemana = 'manha-sabado'; 
     } else if (turno == 'Tarde') {
      colunaTurnoDiaDaSemana = 'tarde-sabado';
     } else if (turno == 'Noite') {
      colunaTurnoDiaDaSemana = 'noite-sabado';
     }
  }
  
  return colunaTurnoDiaDaSemana;

}