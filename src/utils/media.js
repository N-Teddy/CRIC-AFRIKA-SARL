export const fallbackImage = '/assets/products/groupe-electrogenes.webp'

export const productImages = {
    generators: '/assets/products/groupe-electrogenes.webp',
    compressors: '/assets/products/chariotelevateur_electrique.jpg',
    safety: '/assets/products/pompage.jpg',
    fireSafety: '/assets/products/pompage.jpg',
    pumping: '/assets/products/pompage.jpg',
    handling: '/assets/products/chariotelevateur_electrique.jpg',
    motors: '/assets/products/moteur-electrics.jpg',
    gearboxes: '/assets/products/moteur-electrics.jpg',
    fillingMachines: '/assets/products/chariotelevateur_electrique.jpg',
    transformers: '/assets/products/groupe-electrogenes.webp'
}

export const heroImages = [
    '/assets/products/groupe-electrogenes.webp',
    '/assets/products/pompage.jpg',
    '/assets/products/chariotelevateur_electrique.jpg',
    '/assets/products/moteur-electrics.jpg'
]

export const partnerLogos = [
    { name: 'Access', src: '/assets/partners/access.jpeg' },
    { name: 'Afriland First Bank', src: '/assets/partners/afriland.png' },
    { name: 'Alios', src: '/assets/partners/alios.png' },
    { name: 'Vision', src: '/assets/partners/vision.png' }
]

export const clientLogos = [
    { name: 'ALUCAM', src: '/assets/clients/alucam.png' },
    { name: 'SABC', src: '/assets/clients/boisson.png' },
    { name: 'CIMAF', src: '/assets/clients/cimaf.png' },
    { name: 'ENEO', src: '/assets/clients/eneo.png' }
]

export const getProductImage = key => productImages[key] || fallbackImage

export const handleImageError = event => {
    event.currentTarget.onerror = null
    event.currentTarget.src = fallbackImage
}
