/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_GROQ_API_KEY: string
    // more env variables...
  }
  
  interface ImportMeta {
    
    readonly env: ImportMetaEnv
  }
  


interface ProcessEnv {
    readonly VITE_GROQ_API_KEY: string
    // more env variables...
}
