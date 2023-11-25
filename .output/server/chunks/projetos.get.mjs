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

const projetos_get = defineEventHandler(async (event) => {
  const projetosFavoritos = await prisma.projeto.findMany({
    include: { imagens: true }
  });
  return projetosFavoritos;
});

export { projetos_get as default };
//# sourceMappingURL=projetos.get.mjs.map
