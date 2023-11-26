import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const projetosFavoritos = await prisma.projeto.findMany({
    where: { favorito: true },
    include: { imagens: true },
  })
  return projetosFavoritos
})
