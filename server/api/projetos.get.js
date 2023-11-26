import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const projetosFavoritos = await prisma.projeto.findMany({
    include: { imagens: true },
  })
  return projetosFavoritos
})
