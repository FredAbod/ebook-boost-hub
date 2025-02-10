/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FLUTTERWAVE_PUBLIC_KEY: string;
  readonly VITE_FLUTTERWAVE_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
