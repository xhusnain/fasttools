
let fabricInstance: any = null

export const getFabric = async () => {
  if (fabricInstance) {
    return fabricInstance
  }

  try {

    const fabricModule = await import('fabric')

    if (fabricModule.fabric) {
      fabricInstance = fabricModule.fabric
    } else if (fabricModule.default) {
      fabricInstance = fabricModule.default
    } else {
      fabricInstance = fabricModule
    }

    if (typeof window !== 'undefined') {
      (window as any).fabric = fabricInstance
    }

    return fabricInstance
  } catch (error) {
    console.error('Failed to load Fabric.js:', error)
    throw new Error('Fabric.js could not be loaded')
  }
}

export const isFabricLoaded = () => {
  return fabricInstance !== null
}
