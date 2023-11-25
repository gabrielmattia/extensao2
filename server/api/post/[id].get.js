import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const post = await prisma.projeto.findUnique(({
    where: {
      id: parseInt(event.context.params.id)
    },
    include: { imagens: true }
  }))
  return post
})