import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'crud',
  exposes: {
    './Routes': 'apps/crud/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
