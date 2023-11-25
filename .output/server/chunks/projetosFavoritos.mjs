import { d as defineEventHandler } from './nitro/node-server.mjs';
import { p as prisma } from './prisma.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '@prisma/client';

const projetosFavoritos = defineEventHandler(async (event) => {
  const projetosFavoritos = await prisma.projeto.findMany({
    where: { favorito: true },
    include: { imagens: true }
  });
  return projetosFavoritos;
});

export { projetosFavoritos as default };
//# sourceMappingURL=projetosFavoritos.mjs.map
