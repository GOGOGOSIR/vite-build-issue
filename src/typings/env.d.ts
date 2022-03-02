/// <reference types="vite/client" />
interface ImportMetaEnv extends Readonly<Record<string, any>> {
  readonly VITE_ENV_TYPE: 'test' | 'production' | 'development'
  readonly VITE_TEST_AK: string
  readonly VITE_PRODUCTION_AK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
