export const fallbackImage = 'https://images.unsplash.com/photo-1541888941259-7b9d9ef9bc3a?w=1200'

export const productImages = {
    generators: 'https://images.unsplash.com/photo-1590496733658-953b1b623999?w=1200',
    compressors: 'https://images.unsplash.com/photo-1622321453005-09ddaccdbd91?w=1200',
    safety: 'https://images.unsplash.com/photo-1589793907316-f94015df3890?w=1200',
    fireSafety: 'https://images.unsplash.com/photo-1596751303335-53259ebad1ba?w=1200',
    pumping: 'https://images.unsplash.com/photo-1621905252507-b35bcadc0d6?w=1200',
    handling: 'https://images.unsplash.com/photo-1586528116311-ad86d525974c?w=1200',
    motors: 'https://images.unsplash.com/photo-1601233045618-f29e3a73fa13?w=1200',
    gearboxes: 'https://images.unsplash.com/photo-1518107612744-839bac19d271?w=1200',
    fillingMachines: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=1200',
    transformers: 'https://images.unsplash.com/photo-1545641203-7d5700870381?w=1200'
}

export const heroImages = [
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200',
    'https://images.unsplash.com/photo-1621905252507-b35bcadc0d6?w=1200',
    'https://images.unsplash.com/photo-1586528116311-ad86d525974c?w=1200',
    'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200'
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
