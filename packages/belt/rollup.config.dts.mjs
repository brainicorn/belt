import config from './../../.build/rollup.dts.configurator.mjs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export default config({
  cwd: dirname(fileURLToPath(import.meta.url)),
  libName: '@aegenet/belt',
  folder: 'node',
  entryPoint: 'src/node.ts',
  external: ['node:perf_hooks'],
  nodeExternal: true,
});
