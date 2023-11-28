const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const data = [
  {
    nome_oficial: 'CO - HAUT 002',
    favorito: true,
    endereco: 'Rua Ana Camelo da Silva, Boa Viagem, Recife, Pernambuco, Brasil',
    cep: null,
    cidade: 'Recife',
    estado: 'Pernambuco',
    pais: 'Brasil',
    autor: 'Triptyque Architecture',
    ano: null,
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: '1.439 m²',
    area_construida: null,
    programa: 'Edifício Residencial Multifamiliar com 81 unidades, divididos em apartamentos de 29 a 108m².',
    numero_de_pavimentos: null,
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'https://haut.id/co-haut-002/',
    imagens: {
      create: [
        {
          name: 'COHAUT002_img1',
          file: 'COHAUT002_img1.png',
        },
        {
          name: 'COHAUT002_img2',
          file: 'COHAUT002_img2.png',
        },
        {
          name: 'COHAUT002_img3',
          file: 'COHAUT002_img3.jpg',
        },
        {
          name: 'COHAUT002_img4',
          file: 'COHAUT002_img4.jpg',
        },
        {
          name: 'COHAUT002_img5',
          file: 'COHAUT002_img5.jpg',
        },
        {
          name: 'COHAUT002_img6',
          file: 'COHAUT002_img6.jpg',
        },
        {
          name: 'COHAUT002_img7',
          file: 'COHAUT002_img7.jpg',
        },
        {
          name: 'COHAUT002_img8',
          file: 'COHAUT002_img8.jpg',
        },
        {
          name: 'COHAUT002_img9',
          file: 'COHAUT002_img9.jpg',
        },
        {
          name: 'COHAUT002_img10',
          file: 'COHAUT002_img10.jpg',
        },
        {
          name: 'COHAUT002_img11',
          file: 'COHAUT002_img11.jpg',
        },
        {
          name: 'COHAUT002_img12',
          file: 'COHAUT002_img12.jpg',
        },
        {
          name: 'COHAUT002_img13',
          file: 'COHAUT002_img13.jpg',
        },
        {
          name: 'COHAUT002_img14',
          file: 'COHAUT002_img14.jpg',
        },
        {
          name: 'COHAUT002_img15',
          file: 'COHAUT002_img15.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício de apartamento',
    favorito: true,
    endereco: 'Pamplona esquina com Alameda Rio Claro - Bela Vista',
    cep: '01405000',
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Arquitetos Telesforo G. Cristofani e Setsuo Kamada',
    ano: null,
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: '12 andares de apartamentos, sendo 4 unidades por andar',
    numero_de_pavimentos: '13',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole, Edição 333, 1966',
    imagens: {
      create: [
        {
          name: 'EdificiodeApartamento_img1',
          file: 'EdificiodeApartamento_img1.jpeg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Beach Class Hotels e Residence',
    favorito: true,
    endereco: 'Faustino Pôrto, 571 - Boa Viagem',
    cep: '51020000',
    cidade: 'Recife',
    estado: 'Pernambuco',
    pais: 'Brasil',
    autor: 'Pontual Arquitetos',
    ano: '2020',
    executor: 'Moura Dubeux',
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: 'Edificio de uso misto com 18m²/40m²/71m², com 1 ou 2 suites',
    numero_de_pavimentos: null,
    subsolo: null,
    elevadores: null,
    paisagismo: 'Marcelo Kozmhinsky',
    obras_de_arte: null,
    proprietario_original: null,
    fonte:
      'https://www.mouradubeux.com.br/pernambuco/recife/boa-viagem/residenciais-condominio/2-quartos/beach-class-hotels-e-residence',
    imagens: {
      create: [
        {
          name: 'BeachClassHotelseResidence_img1',
          file: 'BeachClassHotelseResidence_img1.png',
        },
        {
          name: 'BeachClassHotelseResidence_img2',
          file: 'BeachClassHotelseResidence_img2.png',
        },
        {
          name: 'BeachClassHotelseResidence_img3',
          file: 'BeachClassHotelseResidence_img3.png',
        },
        {
          name: 'BeachClassHotelseResidence_img4',
          file: 'BeachClassHotelseResidence_img4.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Conjunto Residencial Santa Cruz',
    favorito: true,
    endereco: 'Rua Santa Cruz, 1191, Vila Mariana',
    cep: '04122-900',
    cidade: 'São Paulo',
    estado: 'SP',
    pais: 'Brasil',
    autor: 'Arquiteto Marcial Fleury de Oliveira',
    ano: '1946',
    executor: null,
    ano_da_construcao: '1950',
    area_do_terreno: '61.933,00 m2',
    area_construida: '29.435,40 m2',
    programa: null,
    numero_de_pavimentos: '3',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: 'IAPB - Instituto de Aposentadoria e Pensão dos Bancários',
    fonte:
      'Cadernos de Habitação Coletiva - Brasil, PC3 -Grupo de Pesquisa Pensamento Crítico e Cidade Contemporânea - FAU-USP 2018',
    imagens: {
      create: [
        {
          name: 'santacruz_1',
          file: 'santacruz_1.jpg',
        },
        {
          name: 'santacruz_02.jpg',
          file: 'santacruz_02.jpg',
        },
        {
          name: 'Santa_Cruz_caderno_Final3',
          file: 'Santa_Cruz_caderno_Final3.jpg',
        },
        {
          name: 'Santa_Cruz_caderno_Final4',
          file: 'Santa_Cruz_caderno_Final4.png',
        },
        {
          name: 'Santa_Cruz_caderno_Final5',
          file: 'Santa_Cruz_caderno_Final5.png',
        },
        {
          name: 'Santa_Cruz_caderno_Final6',
          file: 'Santa_Cruz_caderno_Final6.png',
        },
        {
          name: 'Santa_Cruz_caderno_Final7',
          file: 'Santa_Cruz_caderno_Final7.png',
        },
        {
          name: 'Santa_Cruz_caderno_Final8',
          file: 'Santa_Cruz_caderno_Final8.png',
        },
        {
          name: 'Santa_Cruz_caderno_Final9',
          file: 'Santa_Cruz_caderno_Final9.png',
        },
        {
          name: 'Santa_Cruz_caderno_Final10',
          file: 'Santa_Cruz_caderno_Final10.png',
        },
        {
          name: 'Santa_Cruz_caderno_Final11',
          file: 'Santa_Cruz_caderno_Final11.png',
        },
        {
          name: 'Santa_Cruz_caderno_Final12',
          file: 'Santa_Cruz_caderno_Final12.png',
        },
        {
          name: 'Santa_Cruz_caderno_Final13',
          file: 'Santa_Cruz_caderno_Final13.png',
        },
        {
          name: 'Santa_Cruz_caderno_Final14',
          file: 'Santa_Cruz_caderno_Final14.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edificio Nova Cintra',
    endereco: 'Rua Gago Coutinho, 66 - Laranjeiras, Rio de Janeiro - RJ',
    favorito: false,
    cep: null,
    cidade: 'Rio de Janeiro',
    estado: 'Rio de Janeiro',
    pais: 'Brasil',
    autor: 'Lucio Costa',
    ano: '1948',
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: 'Pavimento térreo destinado ao uso comercial e de dominio público',
    numero_de_pavimentos: null,
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte:
      'BAHIMA, Carlos Fernando Silva. Edifício moderno brasileiro: a urbanização dos cinco pontos de Le Corbusier 1936-57. 2002.',
    imagens: {
      create: [
        {
          name: 'Ogata-2004p12-14-15(1)_1',
          file: 'Ogata-2004p12-14-15(1)_1.jpg',
        },
        {
          name: 'Ogata-2004p12-14-15_2',
          file: 'Ogata-2004p12-14-15_2.jpg',
        },
        {
          name: 'Ogata-2004p12-14-15(2)_3',
          file: 'Ogata-2004p12-14-15(2)_3.jpg',
        },
        {
          name: 'Bahima-2002p142-143_4',
          file: 'Bahima-2002p142-143_4.jpg',
        },
        {
          name: 'Bahima-2002p142-143(2)_5',
          file: 'Bahima-2002p142-143(2)_5.jpg',
        },
        {
          name: 'Bahima-2002p142-143(1)_6',
          file: 'Bahima-2002p142-143(1)_6.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Lageado 167',
    endereco: 'Avenida Lageado, 167 - PETRÓPOLIS',
    favorito: false,
    cep: '90460-110',
    cidade: 'Porto Alegre',
    estado: 'Rio Grande do Sul',
    pais: 'Brasil',
    autor: 'Smart - Arquitetura para a vida contemporânea',
    ano: null,
    executor: 'Basis Engenharia',
    ano_da_construcao: '2017',
    area_do_terreno: null,
    area_construida: null,
    programa: null,
    numero_de_pavimentos: '7',
    subsolo: '1 andar com garagem',
    elevadores: '2',
    paisagismo: 'Creare Paisagismo',
    obras_de_arte: null,
    proprietario_original: null,
    fonte:
      'fonte 1: https://smart.arq.br/projetos/lageado-167/ fonte 2: https://www.archdaily.com.br/br/921063/edificio-lageado-167-smart',
    imagens: {
      create: [
        {
          name: 'Capturadetela2023-10-11172523_1',
          file: 'Capturadetela2023-10-11172523_1.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_2',
          file: 'Capturadetela2023-10-11172523_2.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_3',
          file: 'Capturadetela2023-10-11172523_3.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_4',
          file: 'Capturadetela2023-10-11172523_4.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_5',
          file: 'Capturadetela2023-10-11172523_5.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_6',
          file: 'Capturadetela2023-10-11172523_6.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_7',
          file: 'Capturadetela2023-10-11172523_7.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_8',
          file: 'Capturadetela2023-10-11172523_8.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_9',
          file: 'Capturadetela2023-10-11172523_9.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_10',
          file: 'Capturadetela2023-10-11172523_10.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_11',
          file: 'Capturadetela2023-10-11172523_11.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_12',
          file: 'Capturadetela2023-10-11172523_12.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_13',
          file: 'Capturadetela2023-10-11172523_13.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_14',
          file: 'Capturadetela2023-10-11172523_14.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_15',
          file: 'Capturadetela2023-10-11172523_15.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_16',
          file: 'Capturadetela2023-10-11172523_16.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_17',
          file: 'Capturadetela2023-10-11172523_17.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_18',
          file: 'Capturadetela2023-10-11172523_18.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_19',
          file: 'Capturadetela2023-10-11172523_19.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_20',
          file: 'Capturadetela2023-10-11172523_20.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_21',
          file: 'Capturadetela2023-10-11172523_21.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_22',
          file: 'Capturadetela2023-10-11172523_22.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_23',
          file: 'Capturadetela2023-10-11172523_23.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_24',
          file: 'Capturadetela2023-10-11172523_24.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_25',
          file: 'Capturadetela2023-10-11172523_25.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_26',
          file: 'Capturadetela2023-10-11172523_26.png',
        },
        {
          name: 'Capturadetela2023-10-11172523_27',
          file: 'Capturadetela2023-10-11172523_27.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Península',
    endereco: 'Rua dos Andradas, 349 - CENTRO',
    favorito: false,
    cep: '90020-000',
    cidade: 'Porto Alegre',
    estado: 'Rio Grande do Sul',
    pais: 'Brasil',
    autor: 'Cantergiani+Kunze Arquitetos',
    ano: '2010',
    executor: 'Juarez Santos',
    ano_da_construcao: '2013',
    area_do_terreno: '256m²',
    area_construida: '969m²',
    programa: 'Edifício de uso misto.',
    numero_de_pavimentos: '7',
    subsolo: null,
    elevadores: '1',
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte:
      'fonte 1: https://www.archdaily.com.br/br/788466/edificio-peninsula-cantergiani-plus-khttps://www.galeriadaarquitetura.com.br/projeto/cantergiani-kunze-arquitetos_/edificio-peninsula/4146 unze-arquitetos?ad_medium=office_landing&ad_name=article  fonte 2: ',
    imagens: {
      create: [
        {
          name: 'Capturadetela2023-10-11170139_1',
          file: 'Capturadetela2023-10-11170139_1.png',
        },
        {
          name: 'Capturadetela2023-10-11170149_2',
          file: 'Capturadetela2023-10-11170149_2.png',
        },
        {
          name: 'Capturadetela2023-10-11170129_3',
          file: 'Capturadetela2023-10-11170129_3.png',
        },
        {
          name: 'Capturadetela2023-10-11170103_4',
          file: 'Capturadetela2023-10-11170103_4.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Júlio de Barros Barreto',
    endereco: 'Rua Fernando Ferrari, 61 - BOTAFOGO',
    favorito: false,
    cep: '22231-040',
    cidade: 'Rio de Janeiro',
    estado: 'Rio de Janeiro',
    pais: 'Brasil',
    autor: 'MMM Roberto',
    ano: null,
    executor: null,
    ano_da_construcao: '1947',
    area_do_terreno: null,
    area_construida: null,
    programa:
      'Tipo 1: Social. sala estar, varanda, lavabo; Setor Ìntimo, quartos, Wc; Setor de circulação, hall; Tipo 2: Social. sala estar, lavabo; Setor Ìntimo, quartos, Wc; Setor de circulação, hall; Setor de servilos, Landeria, cozinha, quarto serviço. Total de 50 apartamentos duplex',
    numero_de_pavimentos: '10',
    subsolo: null,
    elevadores: '3',
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: 'Instituto de Previdência e Assistência dos Servidores do Estado (Iapase)',
    fonte:
      'PEREIRA, Cláudio Calovi. Os irmãos Roberto e a arquitetura moderna no Rio de Janeiro (1936-1954). 1993. / COSTA, Sabrina Studart Fontenele. Apartamentos duplex: uma ideia moderna sobre o morar e a proposta de uma tipologia habitacional. Anais do Museu Paulista: História e Cultura Material, v. 26, 2018.',
    imagens: {
      create: [
        {
          name: 'Pereira(1993)(2)_1',
          file: 'Pereira(1993)(2)_1.jpg',
        },
        {
          name: 'Pereira(1993)(1)_2',
          file: 'Pereira(1993)(1)_2.jpg',
        },
        {
          name: 'Pereira(1993)_3',
          file: 'Pereira(1993)_3.jpg',
        },
        {
          name: 'Costa(2018)(1)_4',
          file: 'Costa(2018)(1)_4.jpg',
        },
        {
          name: 'Costa(2018)_5',
          file: 'Costa(2018)_5.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Morro de Santo Antônio',
    endereco: 'Rua do Lavradio, 106 - CENTRO',
    favorito: false,
    cep: '20230-070',
    cidade: 'Rio de Janeiro',
    estado: 'Rio de Janeiro',
    pais: 'Brasil',
    autor: 'MMM Roberto',
    ano: null,
    executor: null,
    ano_da_construcao: '1929',
    area_do_terreno: null,
    area_construida: null,
    programa:
      'Apartamentos duplex com copa, living-room, quartos, banheiros e térreo destinado à lojas, entrada restrita aos moradores na lateral do edifício. Total de 48 unidades habitacionais.',
    numero_de_pavimentos: '7',
    subsolo: 'Não',
    elevadores: '3',
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: 'Edmundo Bittencourt',
    fonte:
      'COELHO, Carla Maria Teixeira et al. Habitação coletiva moderna no Rio de Janeiro: considerações sobre sua preservação. 2017. / MASSIMINO, Gustavo Marcondes. Habitação coletiva de interesse social em Heliópolis: a visão de quatro arquitetos. 2018. Tese de Doutorado. Universidade de São Paulo.',
    imagens: {
      create: [
        {
          name: 'MindlineNelson(1963)_1',
          file: 'MindlineNelson(1963)_1.jpg',
        },
        {
          name: 'Vaz(1994)_2',
          file: 'Vaz(1994)_2.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Guarabira',
    endereco: 'Rua Praia do Flamengo, 98',
    favorito: false,
    cep: '22210-030',
    cidade: 'Rio de Janeiro',
    estado: 'Rio de Janeiro',
    pais: 'Brasil',
    autor: 'MMM Roberto',
    ano: null,
    executor: null,
    ano_da_construcao: '1953',
    area_do_terreno: null,
    area_construida: null,
    programa: null,
    numero_de_pavimentos: '10',
    subsolo: null,
    elevadores: '5',
    paisagismo: null,
    obras_de_arte: 'Mosaico de Paulo Werneck - 1955',
    proprietario_original: null,
    fonte:
      'NUNES, Denise Vianna. Agentes e processo de verticalização: O caso da Praia do Flamengo no Rio de Janeiro. III Encontro da Associação Nacional de Pesquisa e Pós-graduação em Arquitetura e Urbanismo arquitetura, cidade e projeto: uma construção coletiva, Anais, São Paulo, 2014. / PEREIRA, Cláudio Calovi. Os irmãos Roberto e a arquitetura moderna no Rio de Janeiro (1936-1954). 1993.',
    imagens: {
      create: [
        {
          name: 'pereira(1993)_1',
          file: 'pereira(1993)_1.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Estúdios Arrudas',
    endereco: 'Rua Arrudas, 245 - SANTA LÚCIA',
    favorito: false,
    cep: '30360-400',
    cidade: 'Belo Horizonte',
    estado: 'Minas Gerais',
    pais: 'Brasil',
    autor: 'Carlos Alberto Maciel e Ulisses Mikhail Itokawa',
    ano: '2013',
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: '588,20m²',
    programa:
      'Espaços internos de grande indeterminação e abertura, originalmente projetados para usos não residenciais, mas capazes de conformar, a partir de pequenos acréscimos e modificações, pequenas unidades de moradia.',
    numero_de_pavimentos: '4',
    subsolo: null,
    elevadores: '1',
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'https://arquitetosassociados.arq.br/edificio-arrudas/',
    imagens: {
      create: [
        {
          name: 'Capturadetela2023-09-28142032_1',
          file: 'Capturadetela2023-09-28142032_1.png',
        },
        {
          name: 'Capturadetela2023-09-28142021_2',
          file: 'Capturadetela2023-09-28142021_2.png',
        },
        {
          name: 'Capturadetela2023-09-28142008_3',
          file: 'Capturadetela2023-09-28142008_3.png',
        },
        {
          name: 'Capturadetela2023-09-28141958_4',
          file: 'Capturadetela2023-09-28141958_4.png',
        },
        {
          name: 'Capturadetela2023-09-28141948_5',
          file: 'Capturadetela2023-09-28141948_5.png',
        },
        {
          name: 'Capturadetela2023-09-28141938_6',
          file: 'Capturadetela2023-09-28141938_6.png',
        },
        {
          name: 'Capturadetela2023-09-28141928_7',
          file: 'Capturadetela2023-09-28141928_7.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Morro S4',
    endereco: 'Rua Nicolo di Pietro, Estrada de Itapecerica, São Paulo, São Paulo, Brasil',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Vigliecca',
    ano: '2011',
    executor: null,
    ano_da_construcao: 'Em andamento',
    area_do_terreno: '537.677,8m²',
    area_construida: '134.199,8m²',
    programa: null,
    numero_de_pavimentos: null,
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'http://www.vigliecca.com.br/pt-BR/projects/renova-sp-morro-do-s4-sector',
    imagens: {
      create: [
        {
          name: 'big_dragonfly20120228-562-1upnhx7_1',
          file: 'big_dragonfly20120228-562-1upnhx7_1.jpg',
        },
        {
          name: 'big_dragonfly20120228-562-1e1813v_2',
          file: 'big_dragonfly20120228-562-1e1813v_2.jpg',
        },
        {
          name: 'big_dragonfly20120228-562-1bhhk9v_3',
          file: 'big_dragonfly20120228-562-1bhhk9v_3.jpg',
        },
        {
          name: 'big_dragonfly20120228-562-yc5tve_4',
          file: 'big_dragonfly20120228-562-yc5tve_4.jpg',
        },
        {
          name: 'big_dragonfly20120228-562-wk32e0_5',
          file: 'big_dragonfly20120228-562-wk32e0_5.jpg',
        },
        {
          name: 'big_dragonfly20120228-562-1qw2s4e_6',
          file: 'big_dragonfly20120228-562-1qw2s4e_6.jpg',
        },
        {
          name: 'big_dragonfly20120228-562-4xf131_7',
          file: 'big_dragonfly20120228-562-4xf131_7.jpg',
        },
        {
          name: 'big_dragonfly20120228-562-1yz2057_8',
          file: 'big_dragonfly20120228-562-1yz2057_8.jpg',
        },
        {
          name: 'big_dragonfly20120228-562-12r6jzr_9',
          file: 'big_dragonfly20120228-562-12r6jzr_9.jpg',
        },
        {
          name: 'big_dragonfly20120228-562-6x8a3m_10',
          file: 'big_dragonfly20120228-562-6x8a3m_10.jpg',
        },
        {
          name: 'big_dragonfly20120228-562-5qedpu_11',
          file: 'big_dragonfly20120228-562-5qedpu_11.jpg',
        },
        {
          name: 'big_dragonfly20120228-562-1ssb2u9_12',
          file: 'big_dragonfly20120228-562-1ssb2u9_12.jpg',
        },
        {
          name: 'big_dragonfly20120228-562-15zlgdk_13',
          file: 'big_dragonfly20120228-562-15zlgdk_13.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Residencial City Vogue 25',
    endereco: 'Rua T-36, 2900 - Bairro Setor Bueno',
    favorito: false,
    cep: '74223-052',
    cidade: 'Goiânia',
    estado: 'Goiás',
    pais: 'Brasil',
    autor: 'Victor Tomé Arquitetura',
    ano: null,
    executor: 'City Soluções Urbanas',
    ano_da_construcao: '2015',
    area_do_terreno: '512 m²',
    area_construida: '4.799 m²',
    programa:
      'Apartamentos de 3 e 4 suítes com plantas de 178 a 314m². Além das suítes, o programa de necessidades das unidades conta com sala de estar e jantar, cozinha, área de serviço, quarto de serviço, banheiro de serviço, home office, banheiro, lavabo, sala íntima e varanda coberta. A circulação vertical se acha centralizada no interior do edifício e perpassa pelo interior das unidades. Na parte térrea, o edifício é equipado com área de lazer que conta com piscina, deck, playground, espaço kids, fitness, salão de festas, além da copa, vestiários e guarita.',
    numero_de_pavimentos: '17',
    subsolo: null,
    elevadores: 'sim',
    paisagismo: 'Catharina Antônia Simão Souza',
    obras_de_arte: null,
    proprietario_original: null,
    fonte:
      'https://www.cityinc.com.br/empreendimentos/city-vogue-25/ e https://www.galeriadaarquitetura.com.br/projeto/victor-tome-arquitetura_/city-vogue-25/1805',
    imagens: {
      create: [
        {
          name: 'cityvogue_img1',
          file: 'cityvogue_img1.jpg',
        },
        {
          name: 'cityvogue_img2',
          file: 'cityvogue_img2.jpg',
        },
        {
          name: 'cityvogue_img3',
          file: 'cityvogue_img3.jpg',
        },
        {
          name: 'cityvogue_img4',
          file: 'cityvogue_img4.jpg',
        },
        {
          name: 'cityvogue_img5',
          file: 'cityvogue_img5.jpg',
        },
        {
          name: 'cityvogue_img6',
          file: 'cityvogue_img6.jpg',
        },
        {
          name: 'cityvogue_img7',
          file: 'cityvogue_img7.jpg',
        },
        {
          name: 'cityvogue_img8',
          file: 'cityvogue_img8.jpg',
        },
        {
          name: 'cityvogue_img9',
          file: 'cityvogue_img9.jpg',
        },
        {
          name: 'cityvogue_img10',
          file: 'cityvogue_img10.jpg',
        },
        {
          name: 'cityvogue_img11',
          file: 'cityvogue_img11.jpg',
        },
        {
          name: 'cityvogue_img12',
          file: 'cityvogue_img12.png',
        },
        {
          name: 'cityvogue_img13',
          file: 'cityvogue_img13.png',
        },
        {
          name: 'cityvogue_img14',
          file: 'cityvogue_img14.png',
        },
        {
          name: 'cityvogue_img15',
          file: 'cityvogue_img15.png',
        },
        {
          name: 'cityvogue_img16',
          file: 'cityvogue_img16.png',
        },
        {
          name: 'cityvogue_img17',
          file: 'cityvogue_img17.png',
        },
        {
          name: 'cityvogue_img18',
          file: 'cityvogue_img18.png',
        },
        {
          name: 'cityvogue_img19',
          file: 'cityvogue_img19.png',
        },
        {
          name: 'cityvogue_img20',
          file: 'cityvogue_img20.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Conjunto Residencial Japurá',
    endereco: 'Rua Japurá, 55 e 129 - Bela Vista, São Paulo - SP, Brasil',
    favorito: false,
    cep: '01319-910',
    cidade: 'São Paulo',
    estado: 'SP',
    pais: 'Brasil',
    autor: 'Eduardo Kneese de Mello',
    ano: '1945',
    executor: null,
    ano_da_construcao: '1945-1952',
    area_do_terreno: '6.910 m²',
    area_construida: '28.248,81 m²',
    programa: null,
    numero_de_pavimentos: '16',
    subsolo: 'sim',
    elevadores: null,
    paisagismo: 'Roberto Burle Marx',
    obras_de_arte: null,
    proprietario_original: 'IAPB - Instituto de Aposentadoria e Pensão dos Bancários',
    fonte:
      'Cadernos de Habitação Coletiva - Brasil, PC3 -Grupo de Pesquisa Pensamento Crítico e Cidade Contemporânea - FAU-USP 2018',
    imagens: {
      create: [
        {
          name: 'japura01',
          file: 'japura01.jpg',
        },
        {
          name: 'japura02',
          file: 'japura02.jpg',
        },
        {
          name: 'japura03',
          file: 'japura03.jpg',
        },

        {
          name: 'japura05',
          file: 'japura05.jpg',
        },
        {
          name: 'japura06',
          file: 'japura06.jpg',
        },
        {
          name: 'japura07',
          file: 'japura07.jpg',
        },
        {
          name: 'japura08',
          file: 'japura08.jpg',
        },
        {
          name: 'japura09',
          file: 'japura09.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Híbrido',
    endereco: null,
    favorito: false,
    cep: null,
    cidade: 'Belo Horizonte',
    estado: 'Minas Gerais',
    pais: 'Brasil',
    autor: 'Bruno Campos, Marcelo Fontes e Silvio Todeschi',
    ano: '2014',
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: '4.139 m²',
    area_construida: '22.912m²',
    programa:
      'O complexo é dividido, basicamente, em duas torres, sendo uma torre residencial e uma torre de escritórios, além de uma faixa de lojas no nível térreo. A torre comercial possui 3 pavimentos tipo combinados em uma estrutura horizontal e outra vertical que se unem. A torre residencial tem apartamentos com tipologias diferentes que se encaixam em um prisma retangular.',
    numero_de_pavimentos: '14',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'http://bcmfarquitetos.com/blog/portfolio/edificio-fido/',
    imagens: {
      create: [
        {
          name: 'edificiohibrido_img1',
          file: 'edificiohibrido_img1.gif',
        },
        {
          name: 'edificiohibrido_img2',
          file: 'edificiohibrido_img2.jpg',
        },
        {
          name: 'edificiohibrido_img3',
          file: 'edificiohibrido_img3.png',
        },
        {
          name: 'edificiohibrido_img4',
          file: 'edificiohibrido_img4.png',
        },
        {
          name: 'edificiohibrido_img5',
          file: 'edificiohibrido_img5.png',
        },
        {
          name: 'edificiohibrido_img6',
          file: 'edificiohibrido_img6.gif',
        },
        {
          name: 'edificiohibrido_img7',
          file: 'edificiohibrido_img7.gif',
        },
        {
          name: 'edificiohibrido_img8',
          file: 'edificiohibrido_img8.gif',
        },
        {
          name: 'edificiohibrido_img9',
          file: 'edificiohibrido_img9.gif',
        },
        {
          name: 'edificiohibrido_img10',
          file: 'edificiohibrido_img10.jpg',
        },
        {
          name: 'edificiohibrido_img11',
          file: 'edificiohibrido_img11.gif',
        },
        {
          name: 'edificiohibrido_img12',
          file: 'edificiohibrido_img12.gif',
        },
      ],
    },
  },
  {
    nome_oficial: 'Parque do Gato',
    endereco: 'Av. Presidente Castelo Branco, São Paulo, São Paulo, Brasil',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Peabiru',
    ano: '2001',
    executor: null,
    ano_da_construcao: '2004',
    area_do_terreno: '19.706,000m²',
    area_construida: '53.314,27m²',
    programa:
      'Quitinete: Cozinha integrada com A.S, Sala integrada dormitório, banheiro / 1 Dormitório: Cozinha integrada com a sala, A.S, banheiro, quarto / 2 Dormitórios: Quartos, Banheiro, Sala, A.S, Cozinha. Totalizando 486 unidades habitacionais no total.',
    numero_de_pavimentos: '9 Blocos com 5 pavimentos cada',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'http://www.fau.usp.br/arquivos/disciplinas/au/aut0583/2o._Semestre_de_2009/03._Aula_0> (CANTERO,2008)',
    imagens: {
      create: [
        {
          name: 'Anotacao2020-07-07180223_1',
          file: 'Anotacao2020-07-07180223_1.png',
        },
        {
          name: 'Anotacao2020-07-07180315_2',
          file: 'Anotacao2020-07-07180315_2.png',
        },
        {
          name: 'Anotacao2020-07-07173524_3',
          file: 'Anotacao2020-07-07173524_3.png',
        },
        {
          name: 'Anotacao2020-07-07173607_4',
          file: 'Anotacao2020-07-07173607_4.png',
        },
        {
          name: '000_PQ-DO-GATO_04_5',
          file: '000_PQ-DO-GATO_04_5.jpg',
        },
        {
          name: '000_PQ-DO-GATO_03_6',
          file: '000_PQ-DO-GATO_03_6.jpg',
        },
        {
          name: '000_PQ-DO-GATO_01_7',
          file: '000_PQ-DO-GATO_01_7.jpg',
        },
        {
          name: '000_PQ-DO-GATO_05_8',
          file: '000_PQ-DO-GATO_05_8.jpg',
        },
        {
          name: '000_PQ-DO-GATO_02_9',
          file: '000_PQ-DO-GATO_02_9.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Miguel Costa',
    endereco: 'Distrito Sudoeste, Osasco, São Paulo, Brasil',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: ' Vigliecca',
    ano: '2007',
    executor: 'LBR Engenharia e Consultoria',
    ano_da_construcao: null,
    area_do_terreno: '145.000m²',
    area_construida: '97.757m²',
    programa:
      'Apartamentos de um, dois e três dormitórios, sendo de 49,8m² a 56,6m². Contando com 1592 unidades no total.',
    numero_de_pavimentos: '3 Blocos com 3,4 e 5 pavimentos.',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'http://www.vigliecca.com.br',
    imagens: {
      create: [
        {
          name: 'big_MCO_QuadraTipo6_1',
          file: 'big_MCO_QuadraTipo6_1.jpg',
        },
        {
          name: 'big_MCO_PerspectivaTipo2_2',
          file: 'big_MCO_PerspectivaTipo2_2.jpg',
        },
        {
          name: 'big_MCO_QuadraTipo3_3',
          file: 'big_MCO_QuadraTipo3_3.jpg',
        },
        {
          name: 'big_MCO_QuadraTipo1_4',
          file: 'big_MCO_QuadraTipo1_4.jpg',
        },
        {
          name: 'big_MCO_QuadraTipo-Planta_5',
          file: 'big_MCO_QuadraTipo-Planta_5.jpg',
        },
        {
          name: 'big_MCO_PerspectivaTipo1_6',
          file: 'big_MCO_PerspectivaTipo1_6.jpg',
        },
        {
          name: 'big_MCO_Implantacao_7',
          file: 'big_MCO_Implantacao_7.jpg',
        },
        {
          name: 'big_MCO_Corte_8',
          file: 'big_MCO_Corte_8.jpg',
        },
        {
          name: 'big_MCO_QuadraTipo4_9',
          file: 'big_MCO_QuadraTipo4_9.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Novo Santo Amaro V',
    endereco: 'Coelho lousada, Distrito Jardim  ngela, São Paulo, Brasil.',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Vigliecca',
    ano: '2009',
    executor: 'LBR Engenharia e Consultoria',
    ano_da_construcao: '2013',
    area_do_terreno: '20.548,74m²',
    area_construida: '3.812,37m²',
    programa:
      'Apartamentos de 52,5m² a 76,5m², sendo 200 novas unidades construídas e mais 137 domicílios mantidos. Número de Pavimentos: 8 Blocos com 5 andares cada um.',
    numero_de_pavimentos: null,
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'http://www.vigliecca.com.br',
    imagens: {
      create: [
        {
          name: 'Anotação2020-08-03182511_1',
          file: 'Anotação2020-08-03182511_1.png',
        },
        {
          name: 'Anotação2020-08-03180640_2',
          file: 'Anotação2020-08-03180640_2.png',
        },
        {
          name: 'Anotação2020-08-03182733_3',
          file: 'Anotação2020-08-03182733_3.png',
        },
        {
          name: 'Anotação2020-08-03181333_4',
          file: 'Anotação2020-08-03181333_4.png',
        },
        {
          name: 'Anotação2020-08-03182412_5',
          file: 'Anotação2020-08-03182412_5.png',
        },
        {
          name: 'Anotação2020-08-03182706_6',
          file: 'Anotação2020-08-03182706_6.png',
        },
        {
          name: 'Anotação2020-08-03181912_7',
          file: 'Anotação2020-08-03181912_7.png',
        },
        {
          name: 'Anotação2020-08-03181210_8',
          file: 'Anotação2020-08-03181210_8.png',
        },
        {
          name: 'Anotação2020-08-03181138_9',
          file: 'Anotação2020-08-03181138_9.png',
        },
        {
          name: 'Anotação2020-08-03182652_10',
          file: 'Anotação2020-08-03182652_10.png',
        },
        {
          name: 'Anotação2020-08-03182749_11',
          file: 'Anotação2020-08-03182749_11.png',
        },
        {
          name: 'Anotação2020-08-03181857_12',
          file: 'Anotação2020-08-03181857_12.png',
        },
        {
          name: 'Anotação2020-08-03181052_13',
          file: 'Anotação2020-08-03181052_13.png',
        },
        {
          name: 'Anotação2020-08-03182640_14',
          file: 'Anotação2020-08-03182640_14.png',
        },
        {
          name: 'Anotação2020-08-03181105_15',
          file: 'Anotação2020-08-03181105_15.png',
        },
        {
          name: 'Anotação2020-08-03180516_16',
          file: 'Anotação2020-08-03180516_16.png',
        },
        {
          name: 'Anotação2020-08-03181222_17',
          file: 'Anotação2020-08-03181222_17.png',
        },
        {
          name: 'Anotação2020-08-03181951_18',
          file: 'Anotação2020-08-03181951_18.png',
        },
        {
          name: 'Anotação2020-08-03182807_19',
          file: 'Anotação2020-08-03182807_19.png',
        },
        {
          name: 'Anotação2020-08-03182458_20',
          file: 'Anotação2020-08-03182458_20.png',
        },
        {
          name: 'Anotação2020-08-03182025_21',
          file: 'Anotação2020-08-03182025_21.png',
        },
        {
          name: 'Anotação2020-08-03181125_22',
          file: 'Anotação2020-08-03181125_22.png',
        },
        {
          name: 'Anotação2020-08-03182611_23',
          file: 'Anotação2020-08-03182611_23.png',
        },
        {
          name: 'Anotação2020-08-03182335_24',
          file: 'Anotação2020-08-03182335_24.png',
        },
        {
          name: 'Anotação2020-08-03182546_25',
          file: 'Anotação2020-08-03182546_25.png',
        },
        {
          name: 'Anotação2020-08-03182424_26',
          file: 'Anotação2020-08-03182424_26.png',
        },
        {
          name: 'Anotação2020-08-03182524_27',
          file: 'Anotação2020-08-03182524_27.png',
        },
        {
          name: 'Anotação2020-08-03180611_29',
          file: 'Anotação2020-08-03180611_29.png',
        },
        {
          name: 'Anotação2020-08-03182013_30',
          file: 'Anotação2020-08-03182013_30.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Che Guevara',
    endereco: 'São Paulo',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Vigliecca',
    ano: '2008',
    executor: 'LBR Engenharia e Consultoria',
    ano_da_construcao: '2008',
    area_do_terreno: '20.548,74m²',
    area_construida: '3.812,37m²',
    programa: 'Programa de Produção de Moradias em Regime de Mutirão com Autogestão, com 49.30 m² cada habitação.',
    numero_de_pavimentos: '6 Blocos com 5 andares cada, sendo 4 apartamentos',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Site Peabiru',
    imagens: {
      create: [
        {
          name: '101_CHE-GUEVARA_01',
          file: '101_CHE-GUEVARA_01.jpg',
        },
        {
          name: '101_CHE-GUEVARA_02',
          file: '101_CHE-GUEVARA_02.jpg',
        },
        {
          name: '101_CHE-GUEVARA_03',
          file: '101_CHE-GUEVARA_03.jpg',
        },
        {
          name: '101_CHE-GUEVARA_04',
          file: '101_CHE-GUEVARA_04.jpg',
        },
        {
          name: '101_CHE-GUEVARA_05',
          file: '101_CHE-GUEVARA_05.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'CO - HAUT 001',
    endereco: 'Rua do Chacon , s/n , Poço da Panela, Recife, Pernambuco, Brasil',
    favorito: false,
    cep: null,
    cidade: 'Recife',
    estado: 'Pernambuco',
    pais: 'Brasil',
    autor: null,
    ano: null,
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: '2.883,00 m²',
    area_construida: null,
    programa: 'Edifício Residencial Multifamiliar com 121 unidades, divididos em 28m², 34m², 42m².',
    numero_de_pavimentos: null,
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte:
      'https://haut.id/co-haut-001/ https://www.expoimovel.com/imovel/apartamentos-comprar-vender-poco-da-panela-recife-pernambuco/504760/pt/BR',
    imagens: {
      create: [
        {
          name: 'CO-HAUT001Imagem1',
          file: 'CO-HAUT001Imagem1.png',
        },
        {
          name: 'CO-HAUT001Imagem2',
          file: 'CO-HAUT001Imagem2.png',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0031',
          file: 'CO-HAUT001PREVIEW_page-0031.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0015',
          file: 'CO-HAUT001PREVIEW_page-0015.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0006',
          file: 'CO-HAUT001PREVIEW_page-0006.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0008',
          file: 'CO-HAUT001PREVIEW_page-0008.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0032',
          file: 'CO-HAUT001PREVIEW_page-0032.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0024',
          file: 'CO-HAUT001PREVIEW_page-0024.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0033',
          file: 'CO-HAUT001PREVIEW_page-0033.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0023',
          file: 'CO-HAUT001PREVIEW_page-0023.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0013',
          file: 'CO-HAUT001PREVIEW_page-0013.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0020',
          file: 'CO-HAUT001PREVIEW_page-0020.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0016',
          file: 'CO-HAUT001PREVIEW_page-0016.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0009',
          file: 'CO-HAUT001PREVIEW_page-0009.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0021',
          file: 'CO-HAUT001PREVIEW_page-0021.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0010',
          file: 'CO-HAUT001PREVIEW_page-0010.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0014',
          file: 'CO-HAUT001PREVIEW_page-0014.jpg',
        },
        {
          name: 'CO-HAUT001PREVIEW_page-0007',
          file: 'CO-HAUT001PREVIEW_page-0007.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Felicità',
    endereco: 'Apinagés com Rua dos Timbiras, Belém, PA',
    favorito: false,
    cep: null,
    cidade: 'Belém',
    estado: 'Pará',
    pais: 'Brasil',
    autor: null,
    ano: null,
    executor: 'Construtora Plancon',
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: 'Apartamentos de até 91m² com 02 ou 03 suítes com 6 plantas diferentes',
    numero_de_pavimentos: null,
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'http://www.construtoraplancon.com.br/felicita/',
    imagens: {
      create: [
        {
          name: 'edificiofelicita_1',
          file: 'edificiofelicita_1.jpg',
        },
        {
          name: 'diagramadesituacao_2',
          file: 'diagramadesituacao_2.jpg',
        },
        {
          name: 'plantatipo_3',
          file: 'plantatipo_3.jpg',
        },
        {
          name: 'apartamento01_4',
          file: 'apartamento01_4.jpg',
        },
        {
          name: 'apartamento002_5',
          file: 'apartamento002_5.jpg',
        },
        {
          name: 'apartamento03_6',
          file: 'apartamento03_6.jpg',
        },
        {
          name: 'apartamento04_7',
          file: 'apartamento04_7.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Michel',
    endereco: 'Rua Veiga Filho (esq. São Vicente de Paula), São Paulo',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: null,
    ano: null,
    executor: 'Construtora Pauliceia Ltda.',
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: '1 andar garagem 7 andares de apartamentos ',
    numero_de_pavimentos: '8',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole, Edição 212, 1956.',
    imagens: {
      create: [
        {
          name: 'edificiomichel_1',
          file: 'edificiomichel_1.jpg',
        },
        {
          name: 'edificiomichel_2',
          file: 'edificiomichel_2.jpg',
        },
        {
          name: 'edificiomichel_3',
          file: 'edificiomichel_3.jpg',
        },
        {
          name: 'edificiomichel_4',
          file: 'edificiomichel_4.jpg',
        },
        {
          name: 'edificiomichel_5',
          file: 'edificiomichel_5.jpg',
        },
        {
          name: 'edificiomichel_6',
          file: 'edificiomichel_6.jpg',
        },
        {
          name: 'edificiomichel_7',
          file: 'edificiomichel_7.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Conjunto Residencial Fernando Vieira ',
    endereco: null,
    favorito: false,
    cep: null,
    cidade: null,
    estado: null,
    pais: null,
    autor: 'Arquiteto Maria Russo',
    ano: null,
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: '14 andares de apartamentos duplex',
    numero_de_pavimentos: '15 com térreo',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole, Edição 224, 1957.',
    imagens: {
      create: [
        {
          name: 'conjuntoresidencialfernandovieira_img1',
          file: 'conjuntoresidencialfernandovieira_img1.jpg',
        },
        {
          name: 'conjuntoresidencialfernandovieira_img2',
          file: 'conjuntoresidencialfernandovieira_img2.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício América',
    endereco: 'Avenida Bartolomeu de Gusmão (esq. Avenida Almirante Cocrane), Santos',
    favorito: false,
    cep: null,
    cidade: 'Santo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Escritório Técnico Augusto Pedalini',
    ano: null,
    executor: 'Escritório Técnico Augusto Pedalini',
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: '1 andar com comércio, apartamento e 2 entradas (térreo) 14 andares de apartamentos',
    numero_de_pavimentos: '15',
    subsolo: 'não',
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole, Edição 99, 1946.',
    imagens: {
      create: [
        {
          name: 'edificioamerica_img1',
          file: 'edificioamerica_img1.jpg',
        },
        {
          name: 'edificioamerica_img2',
          file: 'edificioamerica_img2.jpg',
        },
        {
          name: 'edificioamerica_img3',
          file: 'edificioamerica_img3.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Artsy',
    endereco: 'Rua General Lima e Silva, 594 - Centro Histórico',
    favorito: false,
    cep: '90050-100',
    cidade: 'Porto Alegre',
    estado: 'Rio Grande do Sul',
    pais: 'Brasil',
    autor: 'mart Arquitetura + Idea 1, arquitetura interna: Maena Arquitetura e Design',
    ano: '2014',
    executor: 'Maiojama',
    ano_da_construcao: '2018',
    area_do_terreno: '3575 m²',
    area_construida: '18724 m²',
    programa:
      '134 apartamentos, 55 studios work distribuídos em 4 andares em L, além de um concept mall com 16 operações e 309 vagas de estacionamento em 2 subsolos, sendo 167 residenciais',
    numero_de_pavimentos: null,
    subsolo: '2 subsolos',
    elevadores: 'sim',
    paisagismo: 'Creare Paisagismo',
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'https://www.maiojama.com.br/projetos/artsy',
    imagens: {
      create: [
        {
          name: 'artsy_img1',
          file: 'artsy_img1.jpg',
        },
        {
          name: 'artsy_img2',
          file: 'artsy_img2.jpg',
        },
        {
          name: 'artsy_img3',
          file: 'artsy_img3.jpg',
        },
        {
          name: 'artsy_img4',
          file: 'artsy_img4.jpg',
        },
        {
          name: 'artsy_img5',
          file: 'artsy_img5.jpg',
        },
        {
          name: 'artsy_img6',
          file: 'artsy_img6.jpg',
        },
        {
          name: 'artsy_img7',
          file: 'artsy_img7.jpg',
        },
        {
          name: 'artsy_img8',
          file: 'artsy_img8.jpg',
        },
        {
          name: 'artsy_img9',
          file: 'artsy_img9.jpg',
        },
        {
          name: 'artsy_img10',
          file: 'artsy_img10.jpg',
        },
        {
          name: 'artsy_img11',
          file: 'artsy_img11.jpg',
        },
        {
          name: 'artsy_img12',
          file: 'artsy_img12.jpg',
        },
        {
          name: 'artsy_img13',
          file: 'artsy_img13.jpg',
        },
        {
          name: 'artsy_img14',
          file: 'artsy_img14.jpg',
        },
        {
          name: 'artsy_img15',
          file: 'artsy_img15.jpg',
        },
        {
          name: 'artsy_img16',
          file: 'artsy_img16.jpg',
        },
        {
          name: 'artsy_img17',
          file: 'artsy_img17.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Atlântica',
    endereco: 'Rua José Bonifácio, esquina com a Rua Ouvidor, São Paulo.',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Arquitetura e Construções LUZ - AR LTDA.',
    ano: null,
    executor: 'Arquitetura e Construções LUZ - AR LTDA.',
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa:
      'Edifício comercial com pavimento térreo variado e sede da empresa Atlântica de seguros gerais nos demais pavimentos.',
    numero_de_pavimentos: '7',
    subsolo: 'não',
    elevadores: '2 elevadores - Elevadores Atlas',
    paisagismo: 'não',
    obras_de_arte: null,
    proprietario_original: 'Atlântica Cia. de Seguros de Acidentes de Trabalho e Atlântica Cia. Nacional de Seguros.',
    fonte: 'Revista Acrópole, edição de agosto de 1950, nº148.',
    imagens: {
      create: [
        {
          name: 'atlantica_img1',
          file: 'atlantica_img1.jpeg',
        },
        {
          name: 'atlantica_img2.jpg',
          file: 'atlantica_img2.jpg',
        },
        {
          name: 'atlantica_img3.jpg',
          file: 'atlantica_img3.jpg',
        },
        {
          name: 'atlantica_img4.jpg',
          file: 'atlantica_img4.jpg',
        },
        {
          name: 'atlantica_img5.jpg',
          file: 'atlantica_img5.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício de apartamentos',
    endereco: 'Avenida Nações Unidas (esq. Avenida Rodrigues Alves), Bauru.',
    favorito: false,
    cep: null,
    cidade: 'Bauru',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Arquiteto F. de Pinho',
    ano: '1965',
    executor: 'Martha & Pinho Ltda.',
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: '1 andar de garagem (térreo) 12 andares de apartamentos (1º ao 12º)',
    numero_de_pavimentos: '13',
    subsolo: 'não',
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: 'Banco Lar Brasileiro S/A',
    fonte: 'Revista Acrópole, Edição 322, 1965.',
    imagens: {
      create: [
        {
          name: '02-43-pavimentotipo_img1',
          file: '02-43-pavimentotipo_img1.jpg',
        },
        {
          name: '02-43-pavimentotérreo_img2',
          file: '02-43-pavimentotérreo_img2.jpg',
        },
        {
          name: '02-43-descrição_img3',
          file: '02-43-descrição_img3.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício de Apartamentos',
    endereco: ' Alameda Rio Claro, 251, São Paulo.',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: ' Maurício Kogan e Samuel Szpigel',
    ano: '1961',
    executor: 'Construtora Best Ltda',
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: 'Edifício Residencial com térreo comportando áreas sociais',
    numero_de_pavimentos: '11',
    subsolo: 'Garagem 1,5m abaixo do solo',
    elevadores: 'Elevador social e de serviço',
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole, 1967, Edição 337.',
    imagens: {
      create: [
        {
          name: 'Capturadetela2023-08-16002431_img1',
          file: 'Capturadetela2023-08-16002431_img1.png',
        },
        {
          name: 'Capturadetela2023-08-16002443_img2',
          file: 'Capturadetela2023-08-16002443_img2.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício de Apartamentos',
    endereco: 'Alameda Casa Branca, 844. São Paulo',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Benno Perelmutter',
    ano: null,
    executor: 'Ambiente Ltda.',
    ano_da_construcao: null,
    area_do_terreno: '900m²',
    area_construida: null,
    programa: 'Edifício residencial de apartamentos',
    numero_de_pavimentos: '15',
    subsolo: 'Garagem em toda a extensão do terreno para 30 veículos',
    elevadores: '2',
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole, edição nº 381, de 1971',
    imagens: {
      create: [
        {
          name: 'Capturadetela2023-08-16001924_img1',
          file: 'Capturadetela2023-08-16001924_img1.png',
        },
        {
          name: 'Capturadetela2023-08-16001939_img2',
          file: 'Capturadetela2023-08-16001939_img2.png',
        },
        {
          name: 'Capturadetela2023-08-16001954_img3',
          file: 'Capturadetela2023-08-16001954_img3.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício para industriários',
    endereco: 'Rua Japurá, São Paulo',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Arquiteto Eduardo Kneese de Mello',
    ano: null,
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: null,
    numero_de_pavimentos: '16',
    subsolo: 'sim',
    elevadores: null,
    paisagismo: 'Arquiteto Paisagista Roberto Burle Marx',
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole, Edição 119, 1948.',
    imagens: {
      create: [
        {
          name: 'Edifício para industriários_img1',
          file: 'Edifício para industriários_img1.jpg',
        },
        {
          name: 'Edifício para industriários_img2',
          file: 'Edifício para industriários_img2.jpg',
        },
        {
          name: 'Edifício para industriários_img3',
          file: 'Edifício para industriários_img3.jpg',
        },
        {
          name: 'Edifício para industriários_img4',
          file: 'Edifício para industriários_img4.jpg',
        },
        {
          name: 'Edifício para industriários_img5',
          file: 'Edifício para industriários_img5.jpg',
        },
        {
          name: 'Edifício para industriários_img6',
          file: 'Edifício para industriários_img6.jpg',
        },
        {
          name: 'Edifício para industriários_img7',
          file: 'Edifício para industriários_img7.jpg',
        },
        {
          name: 'Edifício para industriários_img8',
          file: 'Edifício para industriários_img8.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edificio Esther',
    endereco: 'Praça da República, 32 - Bairro República',
    favorito: false,
    cep: '12020-363',
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Álvaro Vital Brazil e Adhemar Marinho',
    ano: '1936',
    executor: 'A.R.N. Sociedade Construtora Ltda',
    ano_da_construcao: '1938',
    area_do_terreno: '740m²',
    area_construida: '10.000,00 m²',
    programa:
      '7 andares de apartamentos, 3 andares de escritório, 1 andar comercial (térreo), 1 andar de garagem (subsolo)',
    numero_de_pavimentos: '11',
    subsolo: 'sim',
    elevadores: '5',
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: 'Paulo Nogueira Filho',
    fonte: 'Revista Acrópole, edição 1, 1938',
    imagens: {
      create: [
        {
          name: 'Esther_img1',
          file: 'Esther_img1.jpg',
        },
        {
          name: 'Esther_imgp57acropoleed1',
          file: 'Esther_imgp57acropoleed1.png',
        },
        {
          name: 'Esther_imgp58acropoleed1',
          file: 'Esther_imgp58acropoleed1.png',
        },
        {
          name: 'Esther_imgp60acropoleed1',
          file: 'Esther_imgp60acropoleed1.png',
        },
        {
          name: 'Esther_imgp61acropoleed1',
          file: 'Esther_imgp61acropoleed1.png',
        },
        {
          name: 'Esther_imgp62acropoleed1',
          file: 'Esther_imgp62acropoleed1.png',
        },
        {
          name: 'Esther_imgp63acropoleed1',
          file: 'Esther_imgp63acropoleed1.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edificio Gáudio',
    endereco: null,
    favorito: false,
    cep: null,
    cidade: null,
    estado: null,
    pais: 'Brasil',
    autor: 'Escritório Técnico Luiz Muzi ',
    ano: null,
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: null,
    numero_de_pavimentos: '13',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole, Edição 147, Ano 1950.',
    imagens: {
      create: [
        {
          name: 'EdificioGaudio_img1',
          file: 'EdificioGaudio_img1.jpg',
        },
        {
          name: 'EdificioGaudio_img2',
          file: 'EdificioGaudio_img2.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edificio Gonçalves Biar',
    endereco: 'Av. São João, 1430 - Santa Cecília, São Paulo',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Antonio Tadeu Giuzio',
    ano: '1939',
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: '489,00m²',
    area_construida: '1.852 m²',
    programa: 'edifício de uso misto; programa desconhecido',
    numero_de_pavimentos: '7',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acropole',
    imagens: {
      create: [
        {
          name: 'EdificioGoncalvesBiar_img1',
          file: 'EdificioGoncalvesBiar_img1.png',
        },
        {
          name: 'EdificioGoncalvesBiar_img2',
          file: 'EdificioGoncalvesBiar_img2.png',
        },
        {
          name: 'EdificioGoncalvesBiar_img3',
          file: 'EdificioGoncalvesBiar_img3.png',
        },
        {
          name: 'EdificioGoncalvesBiar_img4',
          file: 'EdificioGoncalvesBiar_img4.png',
        },
        {
          name: 'EdificioGoncalvesBiar_img5',
          file: 'EdificioGoncalvesBiar_img5.png',
        },
        {
          name: 'EdificioGoncalvesBiar_img6',
          file: 'EdificioGoncalvesBiar_img6.png',
        },
        {
          name: 'EdificioGoncalvesBiar_img7',
          file: 'EdificioGoncalvesBiar_img7.png',
        },
        {
          name: 'EdificioGoncalvesBiar_img8',
          file: 'EdificioGoncalvesBiar_img8.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Hubert',
    endereco: 'Avenida 9 de Julho, 1138',
    favorito: false,
    cep: null,
    cidade: null,
    estado: null,
    pais: 'Brasil',
    autor: 'Oscar F. Souza Pinto e Erico Brann',
    ano: null,
    executor: 'BAROC S.A.',
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: 'Edifício Residencial',
    numero_de_pavimentos: '11',
    subsolo: 'Não',
    elevadores: '2 elevadores Atlas',
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: 'Faud J. Jebara',
    fonte: 'Revista Acrópole, setembro de 1949',
    imagens: {
      create: [
        {
          name: 'Capturadetela2023-08-16001647',
          file: 'Capturadetela2023-08-16001647.png',
        },
        {
          name: 'Capturadetela2023-08-16001701',
          file: 'Capturadetela2023-08-16001701.png',
        },
        {
          name: 'Capturadetela2023-08-16001715',
          file: 'Capturadetela2023-08-16001715.png',
        },
        {
          name: 'Capturadetela2023-08-16001749',
          file: 'Capturadetela2023-08-16001749.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Jarau',
    endereco: 'Rua Bolívar, 97 - Copacabana, Rio de Janeiro - RJ, Brasil.',
    favorito: false,
    cep: '22061-020',
    cidade: 'Rio de Janeiro',
    estado: 'Rio de Janeiro',
    pais: 'Brasil',
    autor: 'Firmino Saldanha',
    ano: '1935',
    executor: 'Construtora Azevedo, Moura & Gertum',
    ano_da_construcao: '1935',
    area_do_terreno: null,
    area_construida: '3.753,13 m²',
    programa:
      'sala, três quartos, banheiro, copa e cozinha, e um quarto com banheiro de empregada - sendo dois apartamentos por pavimento',
    numero_de_pavimentos: null,
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte:
      'XAVIER, Alberto; BRITTO, Alfredo; NOBRE, Ana Luiza. Arquitetura moderna no Rio de Janeiro. Rioarte, 1991. / NEMER, Luciana; CANTREVA, Philipe; SANTOS, Steffany. Uma Questão de Morar Vila Operária Gamboa 2nd Line Paper Title/Subtitle, 2021.',
    imagens: {
      create: [
        {
          name: 'jarau_img1',
          file: 'jarau_img1.jpg',
        },
        {
          name: 'jarau_img2',
          file: 'jarau_img2.jpg',
        },
        {
          name: 'jarau_img3',
          file: 'jarau_img3.jpg',
        },
        {
          name: 'jarau_img4',
          file: 'jarau_img4.jpg',
        },
        {
          name: 'jarau_img5',
          file: 'jarau_img5.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Maranhão',
    endereco: 'Rua Maranhão, Santos - SP',
    favorito: false,
    cep: null,
    cidade: 'Santos',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Escritório Técnico Augusto Pedalini',
    ano: null,
    executor: 'Escritório Técnico Augusto Pedalini',
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: '10 andares de apartamentos - 2 apartamentos por andar (térreo ao 9º)',
    numero_de_pavimentos: '10',
    subsolo: 'não',
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole, Edição 75, 1944.',
    imagens: {
      create: [
        {
          name: 'EdificioMaranhao_img1',
          file: 'EdificioMaranhao_img1.jpg',
        },
        {
          name: 'EdificioMaranhao_img2',
          file: 'EdificioMaranhao_img2.jpg',
        },
        {
          name: 'EdificioMaranhao_img3',
          file: 'EdificioMaranhao_img3.jpg',
        },
        {
          name: 'EdificioMaranhao_img4',
          file: 'EdificioMaranhao_img4.jpg',
        },
        {
          name: 'EdificioMaranhao_img5',
          file: 'EdificioMaranhao_img5.jpg',
        },
        {
          name: 'EdificioMaranhao_img6',
          file: 'EdificioMaranhao_img6.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edificio Montigny',
    endereco: 'Rua Dr. José Pereira de Queirós, 36 - Pacaembu',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Roberto Lacombe e Flávio G. Barbosa',
    ano: null,
    executor: 'Construtora Bogado & Oliveira S.A.',
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: '11 andares de apartamentos',
    numero_de_pavimentos: '11',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole, Edição 64, Ano 1943.',
    imagens: {
      create: [
        {
          name: '01-80',
          file: '01-80.jpg',
        },
        {
          name: '01-81',
          file: '01-81.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edificio Peugeot',
    endereco: 'Av. del Libertador, Buenos Aires - Argentina',
    favorito: false,
    cep: null,
    cidade: 'Buenos Aires',
    estado: null,
    pais: 'Argentina',
    autor: 'Arquitetos Roberto C. Aflalo, Plinio Croce, Giancarlos Gasperini, Eduardo P. Suarez',
    ano: '1962',
    executor: 'projeto não executado',
    ano_da_construcao: 'projeto não executado',
    area_do_terreno: '5.200m²',
    area_construida: '140.000m²',
    programa:
      '1 andar de instalações mecânicas (sub-solo 9º) 6 andares de garagem (sub-solo 3º ao 9º) 1 andar distribuição de automóveis (sub-solo 2º) 1 andar centro comercial (sub-solo 1º) 1 andar entrada e teatros e sala de reunião/mezanino (térreo) 1 andar depedência e congresso (1º) 1 andar administração (2º) 45 andares de escritórios (3º ao 10º e 14º ao 50º) 3 andares de apartamentos (11º ao 12º) 1 andar de restaurante e boite (51º) 2 andar de instalações mecânicas (52º ao 53º) ',
    numero_de_pavimentos: '63',
    subsolo: '9',
    elevadores: '4 elevadores de carga',
    paisagismo: 'projeto não executado',
    obras_de_arte: 'projeto não executado',
    proprietario_original: 'projeto não executado',
    fonte: 'ACRÓPOLE, Edição 281, Ano 1967',
    imagens: {
      create: [
        {
          name: 'EdificioPeugeot_img1',
          file: 'EdificioPeugeot_img1.jpg',
        },
        {
          name: 'EdificioPeugeot_img2',
          file: 'EdificioPeugeot_img2.jpg',
        },
        {
          name: 'EdificioPeugeot_img3',
          file: 'EdificioPeugeot_img3.jpg',
        },
        {
          name: 'EdificioPeugeot_img4',
          file: 'EdificioPeugeot_img4.jpg',
        },
        {
          name: 'EdificioPeugeot_img5',
          file: 'EdificioPeugeot_img5.jpg',
        },
        {
          name: 'EdificioPeugeot_img6',
          file: 'EdificioPeugeot_img6.jpg',
        },
        {
          name: 'EdificioPeugeot_img7',
          file: 'EdificioPeugeot_img7.jpg',
        },
        {
          name: 'EdificioPeugeot_img8',
          file: 'EdificioPeugeot_img8.jpg',
        },
        {
          name: 'EdificioPeugeot_img9',
          file: 'EdificioPeugeot_img9.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edificio Regencia',
    endereco: 'Rua Coronel Xavier de Toledo, 220 - Centro Histórico de São Paulo',
    favorito: false,
    cep: '01048-100',
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Escritório Técnico A.B. Pimentel',
    ano: null,
    executor: 'Escritório Técnico A.B. Pimentel',
    ano_da_construcao: '1939',
    area_do_terreno: null,
    area_construida: null,
    programa: '1 andar comercial (térreo), 10 andares de apartamentos, 1 andar garagem (subsolo)',
    numero_de_pavimentos: '11',
    subsolo: 'sim',
    elevadores:
      'dois elevadores, com lugar para um terceiro, com velocidade de 75 metros por minuto e correntes alternadas com portas semi-automáticas',
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: 'Cia. Ítalo-Brasileira de Seguros Geraes',
    fonte: 'Revista Acrópole, edição 26, 1940',
    imagens: {
      create: [
        {
          name: 'regencia_img1',
          file: 'regencia_img1.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Residencial 1964',
    endereco: 'Rua Hadock Lobo',
    favorito: false,
    cep: null,
    cidade: null,
    estado: null,
    pais: 'Brasil',
    autor: null,
    ano: null,
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: 'Edifício Residencial',
    numero_de_pavimentos: '14',
    subsolo: 'Garagem',
    elevadores: '2',
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole',
    imagens: {
      create: [
        {
          name: 'EdificioResidencial1964_img1',
          file: 'EdificioResidencial1964_img1.png',
        },
        {
          name: 'EdificioResidencial1964_img2',
          file: 'EdificioResidencial1964_img2.png',
        },
        {
          name: 'EdificioResidencial1964_img3',
          file: 'EdificioResidencial1964_img3.png',
        },
        {
          name: 'EdificioResidencial1964_img4',
          file: 'EdificioResidencial1964_img4.png',
        },
        {
          name: 'EdificioResidencial1964_img5',
          file: 'EdificioResidencial1964_img5.png',
        },
        {
          name: 'EdificioResidencial1964_img6',
          file: 'EdificioResidencial1964_img6.png',
        },
        {
          name: 'EdificioResidencial1964_img7',
          file: 'EdificioResidencial1964_img7.png',
        },
        {
          name: 'EdificioResidencial1964_img8',
          file: 'EdificioResidencial1964_img8.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Residencial Vinício Dias Alvelar (Edifício VDA)',
    endereco: null,
    favorito: false,
    cep: null,
    cidade: null,
    estado: null,
    pais: 'Brasil',
    autor: 'Carlos M. Teixeira; Leonardo Rodrigues (colab.) Ligia Milagres',
    ano: '2011',
    executor: 'Total Engenharia',
    ano_da_construcao: '2015',
    area_do_terreno: '756 m² (coef. 1,5)',
    area_construida: '1.360 m²',
    programa: '2 apartamentos-casa com 180 e 350 m²; 7 apartamentos-tipo com 101 m²; 2 coberturas com 180 m²',
    numero_de_pavimentos: '7',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'https://www.archdaily.com.br/br/776819/edificio-vda-vazio-s-a?ad_medium=widget&ad_name=recommendation',
    imagens: {
      create: [
        {
          name: 'EdificioVDAImagem1',
          file: 'EdificioVDAImagem1.png',
        },
        {
          name: 'EdificioVDAImagem2',
          file: 'EdificioVDAImagem2.png',
        },
        {
          name: 'EdificioVDAImagem3',
          file: 'EdificioVDAImagem3.png',
        },
        {
          name: 'EdificioVDAImagem4',
          file: 'EdificioVDAImagem4.png',
        },
        {
          name: 'EdificioVDAImagem5',
          file: 'EdificioVDAImagem5.png',
        },
        {
          name: 'EdificioVDAImagem6',
          file: 'EdificioVDAImagem6.png',
        },
        {
          name: 'EdificioVDAImagem7',
          file: 'EdificioVDAImagem7.png',
        },
        {
          name: 'EdificioVDAImagem8',
          file: 'EdificioVDAImagem8.png',
        },
        {
          name: 'EdificioVDAImagem9',
          file: 'EdificioVDAImagem9.png',
        },
        {
          name: 'EdificioVDAImagem10',
          file: 'EdificioVDAImagem10.png',
        },
        {
          name: 'EdificioVDAImagem11',
          file: 'EdificioVDAImagem11.png',
        },
        {
          name: 'EdificioVDAImagem12',
          file: 'EdificioVDAImagem12.png',
        },
        {
          name: 'EdificioVDAImagem3',
          file: 'EdificioVDAImagem3.png',
        },
        {
          name: 'EdificioVDAImagem14',
          file: 'EdificioVDAImagem14.png',
        },
        {
          name: 'EdificioVDAImagem15',
          file: 'EdificioVDAImagem15.png',
        },
        {
          name: 'EdificioVDAImagem16',
          file: 'EdificioVDAImagem16.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edifício Residencial Zeider',
    endereco: 'R. Itaúna, 452 - Colégio Batista, Belo Horizonte, Minas Gerais',
    favorito: false,
    cep: null,
    cidade: 'Belo Horizonte',
    estado: 'Minas Gerais',
    pais: 'Brasil',
    autor: 'Guilherme Rocha, Eduardo França, Letícia de Azevedo',
    ano: null,
    executor: 'Construction F2',
    ano_da_construcao: '2015',
    area_do_terreno: '400 m²',
    area_construida: '1.511 m²',
    programa: 'Edifício residencial com 4 apartamentos e 4 estúdios',
    numero_de_pavimentos: '5',
    subsolo: 'Garagem e depósitos',
    elevadores: '1 elevador',
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Archdaily',
    imagens: {
      create: [
        {
          name: 'EdificioResidencialZeider_img1',
          file: 'EdificioResidencialZeider_img1.png',
        },
        {
          name: 'EdificioResidencialZeider_img2',
          file: 'EdificioResidencialZeider_img2.png',
        },
        {
          name: 'EdificioResidencialZeider_img3',
          file: 'EdificioResidencialZeider_img3.png',
        },
        {
          name: 'EdificioResidencialZeider_img4',
          file: 'EdificioResidencialZeider_img4.png',
        },
        {
          name: 'EdificioResidencialZeider_img5',
          file: 'EdificioResidencialZeider_img5.png',
        },
        {
          name: 'EdificioResidencialZeider_img6',
          file: 'EdificioResidencialZeider_img6.png',
        },
        {
          name: 'EdificioResidencialZeider_img7',
          file: 'EdificioResidencialZeider_img7.png',
        },
        {
          name: 'EdificioResidencialZeider_img8',
          file: 'EdificioResidencialZeider_img8.png',
        },
        {
          name: 'EdificioResidencialZeider_img9',
          file: 'EdificioResidencialZeider_img9.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Mont Tremblant',
    endereco: 'Rua Dom Romualdo Coelho, 438, esq. com a Rua Municipalidade.',
    favorito: false,
    cep: null,
    cidade: null,
    estado: null,
    pais: 'Brasil',
    autor: 'Arquiteto Rui Carneiro',
    ano: '2017',
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: 'Apartamentos de 300m² com 4 suítes, sendo um apartamento por andar.',
    numero_de_pavimentos: null,
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'http://ruicarneiro.com/portfolio/mont-tremblant/',
    imagens: {
      create: [
        {
          name: 'MontTremblantImagem1',
          file: 'MontTremblantImagem1.png',
        },
        {
          name: 'MontTremblantImagem2',
          file: 'MontTremblantImagem2.png',
        },
        {
          name: 'MontTremblantImagem3',
          file: 'MontTremblantImagem3.png',
        },
        {
          name: 'MontTremblantImagem4',
          file: 'MontTremblantImagem4.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'EdificioHygienopolis',
    endereco: 'Rua Conselheiro Brotero, Higienópolis.',
    favorito: false,
    cep: null,
    cidade: null,
    estado: null,
    pais: 'Brasil',
    autor: 'Rino Levi',
    ano: null,
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: '1.200m²',
    area_construida: null,
    programa: '6 andares de apartamentos e mais um andar subsolo para garagem.',
    numero_de_pavimentos: '7',
    subsolo: '1',
    elevadores: '2',
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole, Edição 27, Ano 1940.',
    imagens: {
      create: [
        {
          name: 'EdificioHygienopolis_img1',
          file: 'EdificioHygienopolis_img1.jpg',
        },
        {
          name: 'EdificioHygienopolis_img2',
          file: 'EdificioHygienopolis_img2.jpg',
        },
        {
          name: 'EdificioHygienopolis_img3',
          file: 'EdificioHygienopolis_img3.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Edificio Livia Maria',
    endereco: 'Avenida São João, 755 - Centro Histórico de São Paulo',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Francisco J. D. Caiuby, Nestor Dale Caiuby, Walter Saraiva Kneese',
    ano: '1938',
    executor: null,
    ano_da_construcao: '1939',
    area_do_terreno: null,
    area_construida: null,
    programa: 'Um andar comercial, sendo este o térreo, e mais 8 andares de apartamentos',
    numero_de_pavimentos: '9',
    subsolo: 'não',
    elevadores: '2',
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole, Edição 1, 1938.  e  Revista Acrópole, Edição 11, 1939.',
    imagens: {
      create: [
        {
          name: 'EdificioLiviaMaria_img1',
          file: 'EdificioLiviaMaria_img1.jpg',
        },
        {
          name: 'EdificioLiviaMaria_img2',
          file: 'EdificioLiviaMaria_img2.jpg',
        },
        {
          name: 'EdificioLiviaMaria_img3',
          file: 'EdificioLiviaMaria_img3.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Projeto para Edifício de apartamentos',
    endereco: null,
    favorito: false,
    cep: null,
    cidade: null,
    estado: null,
    pais: 'Brasil',
    autor: 'Com. e Construt. M. Calaigian Ltda.',
    ano: null,
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: ' andar comercial (térreo), 6 andares de apartamentos (1º ao 6º), andar para depósito (7º).',
    numero_de_pavimentos: '8 com o térreo',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Revista Acrópole, Ed. 194, Ano 1954.',
    imagens: {
      create: [
        {
          name: '01-94',
          file: '01-94.jpg',
        },
        {
          name: '02-95',
          file: '02-95.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'Residencial Elev Marista Design',
    endereco: 'Rua 138, Lote: 13/17 - Quadra: 52 – Setor Marista',
    favorito: false,
    cep: null,
    cidade: null,
    estado: null,
    pais: 'Brasil',
    autor: 'Alexandre Leite Terra',
    ano: null,
    executor: 'Emisa Engenharia e Comércio',
    ano_da_construcao: null,
    area_do_terreno: '2.147,50 m²',
    area_construida: '26.992,74 m²',
    programa: 'Apartamentos residenciais de 66 a 200 m²',
    numero_de_pavimentos: '30',
    subsolo: null,
    elevadores: null,
    paisagismo: 'Benedito Abbud Arquitetura Paisagística',
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'https://construtoraemisa.com.br/empreendimento/elev-marista-design',
    imagens: {
      create: [
        {
          name: 'ResidencialElevMaristaDesignImagem1',
          file: 'ResidencialElevMaristaDesignImagem1.png',
        },
        {
          name: 'ResidencialElevMaristaDesignImagem2',
          file: 'ResidencialElevMaristaDesignImagem2.png',
        },
        {
          name: 'ResidencialElevMaristaDesignImagem3',
          file: 'ResidencialElevMaristaDesignImagem3.png',
        },
        {
          name: 'ResidencialElevMaristaDesignImagem4',
          file: 'ResidencialElevMaristaDesignImagem4.png',
        },
        {
          name: 'ResidencialElevMaristaDesignImagem5',
          file: 'ResidencialElevMaristaDesignImagem5.png',
        },
        {
          name: 'ResidencialElevMaristaDesignImagem6',
          file: 'ResidencialElevMaristaDesignImagem6.png',
        },
        {
          name: 'ResidencialElevMaristaDesignImagem7',
          file: 'ResidencialElevMaristaDesignImagem7.png',
        },
        {
          name: 'ResidencialElevMaristaDesignImagem8',
          file: 'ResidencialElevMaristaDesignImagem8.png',
        },
        {
          name: 'ResidencialElevMaristaDesignImagem9',
          file: 'ResidencialElevMaristaDesignImagem9.png',
        },
        {
          name: 'ResidencialElevMaristaDesignImagem10',
          file: 'ResidencialElevMaristaDesignImagem10.png',
        },
        {
          name: 'ResidencialElevMaristaDesignImagem11',
          file: 'ResidencialElevMaristaDesignImagem11.png',
        },
        {
          name: 'ResidencialElevMaristaDesignImagem12',
          file: 'ResidencialElevMaristaDesignImagem12.png',
        },
        {
          name: 'ResidencialElevMaristaDesignImagem13',
          file: 'ResidencialElevMaristaDesignImagem13.png',
        },
        {
          name: 'ResidencialElevMaristaDesignImagem14',
          file: 'ResidencialElevMaristaDesignImagem14.png',
        },
      ],
    },
  },
  {
    nome_oficial: 'Miguel Costa',
    endereco: 'Distrito Sudoeste, Osasco, São Paulo, Brasil.',
    favorito: false,
    cep: null,
    cidade: 'São Paulo',
    estado: 'São Paulo',
    pais: 'Brasil',
    autor: 'Vigliecca',
    ano: '2007',
    executor: 'LBR Engenharia e Consultoria',
    ano_da_construcao: null,
    area_do_terreno: '145.000m²',
    area_construida: '97.757m²',
    programa:
      'Apartamentos de um, dois e três dormitórios, sendo de 49,8m² a 56,6m². Contando com 1592 unidades no total.',
    numero_de_pavimentos: '3 Blocos com 3,4 e 5 pavimentos.',
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'Site Vigliecca',
    imagens: {
      create: [
        {
          name: 'big_MCO_img1',
          file: 'big_MCO_img1.jpg',
        },
        {
          name: 'big_MCO_img2',
          file: 'big_MCO_img2.jpg',
        },
        {
          name: 'big_MCO_img3',
          file: 'big_MCO_img3.jpg',
        },
        {
          name: 'big_MCO_img4',
          file: 'big_MCO_img4.jpg',
        },
        {
          name: 'big_MCO_img5',
          file: 'big_MCO_img5.jpg',
        },
        {
          name: 'big_MCO_img6',
          file: 'big_MCO_img6.jpg',
        },
        {
          name: 'big_MCO_img7',
          file: 'big_MCO_img7.jpg',
        },
        {
          name: 'big_MCO_img8',
          file: 'big_MCO_img8.jpg',
        },
        {
          name: 'big_MCO_img9',
          file: 'big_MCO_img9.jpg',
        },
      ],
    },
  },
  {
    nome_oficial: 'W Multiuso',
    endereco: 'Rua Wenceslau Escobar, 2788',
    favorito: false,
    cep: null,
    cidade: null,
    estado: null,
    pais: 'Brasil',
    autor: 'Ideia1 Arquitetura',
    ano: '2016',
    executor: 'Maiojama',
    ano_da_construcao: '2017 - 2020',
    area_do_terreno: '8864 m²',
    area_construida: '3379 m²',
    programa: 'Uso misto',
    numero_de_pavimentos: null,
    subsolo: null,
    elevadores: null,
    paisagismo: 'Arteflora Paisagismo',
    obras_de_arte: null,
    proprietario_original: null,
    fonte: 'http://www.ideia1.com.br/projeto-interna.php?projeto=75',
    imagens: {
      create: [
        {
          name: 'WMultiusoImagem1',
          file: 'WMultiusoImagem1.png',
        },
        {
          name: 'WMultiusoImagem2',
          file: 'WMultiusoImagem2.png',
        },
        {
          name: 'WMultiusoImagem3',
          file: 'WMultiusoImagem3.png',
        },
        {
          name: 'WMultiusoImagem4',
          file: 'WMultiusoImagem4.png',
        },
        {
          name: 'WMultiusoImagem5',
          file: 'WMultiusoImagem5.png',
        },
        {
          name: 'WMultiusoImagem6',
          file: 'WMultiusoImagem6.png',
        },
        {
          name: 'WMultiusoImagem7',
          file: 'WMultiusoImagem7.png',
        },
        {
          name: 'WMultiusoImagem8',
          file: 'WMultiusoImagem8.png',
        },
        {
          name: 'WMultiusoImagem9',
          file: 'WMultiusoImagem9.png',
        },
        {
          name: 'WMultiusoImagem10',
          file: 'WMultiusoImagem10.png',
        },
        {
          name: 'WMultiusoImagem11',
          file: 'WMultiusoImagem11.png',
        },
      ],
    },
  },
]



async function main() {
  console.log(`Start seeding ...`)
  for (const u of data) {
    const user = await prisma.projeto.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
