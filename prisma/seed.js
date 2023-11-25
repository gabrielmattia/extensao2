const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const userData = [
  {
    nome_oficial: "Edifício de apartamento",
    favorito: true,
    endereco: "Pamplona esquina com Alameda Rio Claro - Bela Vista",
    cep: "01405000",
    cidade: "São Paulo",
    estado: "São Paulo",
    pais: "Brasil",
    autor: "Arquitetos Telesforo G. Cristofani e Setsuo Kamada",
    ano: null,
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: "12 andares de apartamentos, sendo 4 unidades por andar",
    numero_de_pavimentos: "13",
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: "Revista Acrópole, Edição 333, 1966",
    imagens: {
      create: [
        {
          name: "EdificiodeApartamento_img1",
          file: "EdificiodeApartamento_img1.jpeg",
        },
      ],
    },
  },
  {
    nome_oficial: "teste",
    favorito: false,
    endereco: "Pamplona esquina com Alameda Rio Claro - Bela Vista",
    cep: "01405000",
    cidade: "São Paulo",
    estado: "São Paulo",
    pais: "Brasil",
    autor: "Arquitetos Telesforo G. Cristofani e Setsuo Kamada",
    ano: null,
    executor: null,
    ano_da_construcao: null,
    area_do_terreno: null,
    area_construida: null,
    programa: "12 andares de apartamentos, sendo 4 unidades por andar",
    numero_de_pavimentos: "13",
    subsolo: null,
    elevadores: null,
    paisagismo: null,
    obras_de_arte: null,
    proprietario_original: null,
    fonte: "Revista Acrópole, Edição 333, 1966",
    imagens: {
      create: [
        {
          name: "EdificiodeApartamento_img1",
          file: "EdificiodeApartamento_img1.jpeg",
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.projeto.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
