import config from './../../.build/vite.configurator.mjs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export default config({
  cwd: dirname(fileURLToPath(import.meta.url)),
  libName: '@aegenet/belt-fastify-abort',
  folder: 'node',
  entryPoint: 'src/node.ts',
  nodeExternal: true,
});
