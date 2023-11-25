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

const _id__get = defineEventHandler(async (event) => {
  const post = await prisma.projeto.findUnique({
    where: {
      id: parseInt(event.context.params.id)
    },
    include: { imagens: true }
  });
  return post;
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
