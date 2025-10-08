module.exports = {
  hooks: {
    readPackage(pkg) {
      // Allow build scripts for Vercel packages
      if (pkg.name === '@vercel/speed-insights' || pkg.name === '@vercel/analytics') {
        pkg.scripts = pkg.scripts || {}
      }
      return pkg
    }
  }
}
