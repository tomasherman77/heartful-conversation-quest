import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.lovable.hablemos3b2038a2',
  appName: 'Hablemos',
  webDir: 'dist',
  server: {
    url: 'https://3b2038a2-7a43-44a3-b435-4d11c087749a.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystoreAlias: null,
      keystorePassword: null,
      keystoreAliasPassword: null,
    }
  }
};

export default config;