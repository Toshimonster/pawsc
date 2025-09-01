import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.toshimonster.paws',
  appName: 'paws',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
