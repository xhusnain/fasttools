declare module "mime-db" {
  const db: Record<
    string,
    {
      source?: string
      extensions?: string[]
      charset?: string
      compressible?: boolean
      [key: string]: unknown
    }
  >
  export default db
}
