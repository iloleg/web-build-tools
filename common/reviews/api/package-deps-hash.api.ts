// (undocumented)
export function getPackageDeps(packagePath: string = process.cwd(), excludedPaths?: string[]): Promise<IPackageDeps>;

// (undocumented)
interface IPackageDeps {
  // (undocumented)
  files: {
    // (undocumented)
    [ key: string ]: string
  }
}

