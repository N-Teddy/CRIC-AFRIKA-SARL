// src/pages/About.jsx
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
    Handshake,
    FolderOpen,
    Target,
    Eye,
    Zap,
    Users,
    Award,
    Briefcase,
    Linkedin,
    Mail
} from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import { certifications, teamMembers, timeline, values } from '../constants/about'
import CTA from '../components/ui/CTA'
import { useTranslation } from '../context/TranslationContext'
import { heroImages, handleImageError, partnerLogos } from '../utils/media'

const About = () => {
    const { t } = useTranslation()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    }

    // Get story content as array
    const storyContent = t('about.storyContent')

    return (
        <>
            <Helmet>
                <title>{t('about.title')} - CRIC Africa SARL</title>
                <meta name="description" content={t('about.metaDescription')} />
                <meta
                    name="keywords"
                    content="CRIC Africa history, industrial team Cameroon, company values, industrial certifications"
                />
                <meta property="og:title" content={t('about.title')} />
                <meta property="og:description" content={t('about.metaDescription')} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://cricafrica.com/about" />
            </Helmet>

            <div className="pt-20">
                {/* Page Header */}
                <PageHeader
                    title={t('about.title')}
                    subtitle={t('about.subtitle')}
                    breadcrumbs={[t('common.aboutUs')]}
                />

                {/* Company Story */}
                <section className="py-16 bg-surface-warm">
                    <div className="container px-4 mx-auto lg:px-8">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25 }}
                                viewport={{ once: true }}
                            >
                                <span className="inline-flex items-center px-4 py-1 text-xs font-semibold tracking-wide text-primary uppercase rounded-[var(--radius-sm)] border border-primary/30">
                                    {t('about.ourStory')}
                                </span>
                                <h2 className="mt-4 mb-6 text-h2 font-bold text-ink">
                                    {t('about.storyTitle')}
                                </h2>
                                {Array.isArray(storyContent) ? (
                                    storyContent.map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className="mb-4 text-base leading-relaxed text-ink-muted"
                                        >
                                            {paragraph}
                                        </p>
                                    ))
                                ) : (
                                    <p className="mb-6 text-base leading-relaxed text-ink-muted">
                                        {storyContent}
                                    </p>
                                )}
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        to="/contact"
                                        className="btn-primary"
                                    >
                                        <Handshake className="inline mr-2" size={16} />
                                        {t('common.becomePartner')}
                                    </Link>
                                    <Link
                                        to="/realisations"
                                        className="btn-secondary"
                                    >
                                        <FolderOpen className="inline mr-2" size={16} />
                                        {t('common.ourProjects')}
                                    </Link>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-4">
                                {heroImages.map((image, index) => (
                                    <motion.div
                                        key={image}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                        className={`overflow-hidden rounded-[var(--radius-md)] border border-border bg-white ${index % 2 !== 0 ? 'mt-8 hidden sm:block' : ''
                                            }`}
                                    >
                                        <img
                                            src={image}
                                            alt="CRIC Africa operations"
                                            className="object-cover w-full h-64"
                                            loading="lazy"
                                            onError={handleImageError}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission, Vision, Values */}
                <section className="py-16 bg-surface-warm">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-h2 font-bold text-ink">
                                {t('about.identity.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-base text-ink-muted">
                                {t('about.identity.subtitle')}
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid gap-8 mb-16 lg:grid-cols-3"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Mission */}
                            <motion.div
                                className="p-6 bg-white border rounded-[var(--radius-md)] border-border"
                                variants={itemVariants}
                            >
                                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/10">
                                    <Target className="text-secondary" size={20} />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-center text-ink">
                                    {t('about.mission.title')}
                                </h3>
                                <p className="text-sm leading-relaxed text-center text-ink-muted">
                                    {t('about.mission.description')}
                                </p>
                            </motion.div>

                            {/* Vision */}
                            <motion.div
                                className="p-6 bg-white border rounded-[var(--radius-md)] border-border"
                                variants={itemVariants}
                            >
                                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
                                    <Eye className="text-primary" size={20} />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-center text-ink">
                                    {t('about.vision.title')}
                                </h3>
                                <p className="text-sm leading-relaxed text-center text-ink-muted">
                                    {t('about.vision.description')}
                                </p>
                            </motion.div>

                            {/* Slogan */}
                            <motion.div
                                className="relative p-6 text-white rounded-[var(--radius-md)] overflow-hidden bg-dark"
                                variants={itemVariants}
                            >
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute inset-0 opacity-50 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px]" />
                                </div>
                                <div className="relative z-10 flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-white/10">
                                    <Zap size={20} />
                                </div>
                                <h3 className="relative z-10 mb-4 text-2xl font-semibold text-center">
                                    {t('about.motto.title')}
                                </h3>
                                <p className="relative z-10 text-lg italic font-semibold leading-relaxed text-center">
                                    {t('about.motto.text')}
                                </p>
                                <p className="relative z-10 mt-4 text-sm leading-relaxed text-center text-white/80">
                                    {t('about.motto.description')}
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Values */}
                        <motion.div
                            className="p-6 bg-white border rounded-[var(--radius-md)] border-border"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="mb-8 text-2xl font-bold text-center text-ink">
                                {t('about.values.title')}
                            </h3>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {values.map((value, index) => {
                                    const Icon = value.icon
                                    const valueKeys = [
                                        'excellence',
                                        'integrity',
                                        'innovation',
                                        'collaboration'
                                    ]
                                    const currentKey = valueKeys[index]

                                    return (
                                        <motion.div
                                            key={value.title}
                                            className="text-center"
                                            whileHover={{ translateY: -4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-surface-warm">
                                                <Icon
                                                    className={
                                                        value.color === 'orange'
                                                            ? 'text-primary'
                                                            : 'text-secondary'
                                                    }
                                                    size={20}
                                                />
                                            </div>
                                            <h4 className="mb-2 text-lg font-bold text-ink">
                                                {t(`about.values.${currentKey}`)}
                                            </h4>
                                            <p className="text-sm text-ink-muted">
                                                {t(`about.values.${currentKey}Desc`)}
                                            </p>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-16 bg-surface-warm">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-h2 font-bold text-ink">
                                {t('about.journey.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-base text-ink-muted">
                                {t('about.journey.subtitle')}
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    className="relative pb-10 pl-10 border-l border-border last:pb-0"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25, delay: index * 0.05 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                >
                                    <div className="absolute top-2 w-3 h-3 -left-[6px] rounded-full bg-secondary" />
                                    <div className="p-6 bg-surface-warm rounded-[var(--radius-md)] border border-border">
                                        <span className="inline-flex px-3 py-1 mb-2 text-xs font-semibold tracking-wide text-ink-muted uppercase rounded-[var(--radius-sm)] border border-border">
                                            {item.year}
                                        </span>
                                        <h3 className="mb-2 text-2xl font-bold text-ink">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-ink-muted">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 bg-surface-warm">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-h2 font-bold text-ink">
                                {t('about.team.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-base text-ink-muted">
                                {t('about.team.subtitle')}
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    className="bg-white border rounded-[var(--radius-md)] border-border"
                                    variants={itemVariants}
                                >
                                    <div className="flex items-center justify-center h-48 bg-surface-warm rounded-t-[var(--radius-md)]">
                                        <Users className="text-5xl text-secondary" />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="mb-1 text-xl font-bold text-ink">
                                            {member.name}
                                        </h3>
                                        <p
                                            className={`${member.color === 'orange'
                                                ? 'text-primary-orange'
                                                : 'text-lemon-green'
                                                } text-sm font-semibold mb-3`}
                                        >
                                            {member.position}
                                        </p>
                                        <p className="mb-4 text-sm text-ink-muted">
                                            {member.description}
                                        </p>
                                        <div className="flex justify-center space-x-3">
                                            <a
                                                href="#"
                                                className={`w-8 h-8 ${member.color === 'orange'
                                                    ? 'bg-primary-orange/10 hover:bg-primary-orange'
                                                    : 'bg-lemon-green/10 hover:bg-lemon-green'
                                                    } ${member.color === 'orange'
                                                        ? 'text-primary-orange hover:text-white'
                                                        : 'text-lemon-green hover:text-white'
                                                    } rounded-full flex items-center justify-center transition`}
                                            >
                                                <Linkedin size={12} />
                                            </a>
                                            <a
                                                href="#"
                                                className={`w-8 h-8 ${member.color === 'orange'
                                                    ? 'bg-primary-orange/10 hover:bg-primary-orange'
                                                    : 'bg-lemon-green/10 hover:bg-lemon-green'
                                                    } ${member.color === 'orange'
                                                        ? 'text-primary-orange hover:text-white'
                                                        : 'text-lemon-green hover:text-white'
                                                    } rounded-full flex items-center justify-center transition`}
                                            >
                                                <Mail size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="mt-12 text-center"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="mb-6 text-base text-ink-muted">
                                {t('about.team.joinText')}
                            </p>
                            <Link
                                to="/contact"
                                className="btn-primary"
                            >
                                <Briefcase className="inline mr-2" size={20} />
                                {t('common.careers')}
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Certifications & Partners */}
                <section className="py-16 bg-surface-warm">
                    <div className="container px-4 mx-auto lg:px-8">
                        <div className="grid gap-16 lg:grid-cols-2">
                            {/* Certifications */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="mb-6 text-3xl font-bold lg:text-4xl text-ink">
                                    {t('about.certifications.title')}
                                </h2>
                                <div className="space-y-4">
                                    {certifications.map((cert, index) => (
                                        <div
                                            key={cert.name}
                                            className="flex items-center p-4 border rounded-[var(--radius-md)] border-border bg-surface-warm"
                                        >
                                            <div
                                                className={`w-16 h-16 ${cert.color === 'orange'
                                                    ? 'bg-primary-orange/10'
                                                    : 'bg-lemon-green/10'
                                                    } rounded-full flex items-center justify-center mr-4`}
                                            >
                                                <Award
                                                    className={`${cert.color === 'orange'
                                                        ? 'text-primary-orange'
                                                        : 'text-lemon-green'
                                                        } text-2xl`}
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-ink">
                                                    {cert.name}
                                                </h4>
                                                <p className="text-sm text-ink-muted">
                                                    {cert.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Partners */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="mb-6 text-3xl font-bold lg:text-4xl text-ink">
                                    {t('about.partners.title')}
                                </h2>
                                <p className="mb-6 text-sm leading-relaxed text-ink-muted">
                                    {t('about.partners.description')}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {partnerLogos.map(logo => (
                                        <div
                                            key={logo.name}
                                            className="flex items-center justify-center h-24 border rounded-[var(--radius-md)] border-border bg-surface-warm"
                                        >
                                            <img
                                                src={logo.src}
                                                alt={`${logo.name} logo`}
                                                className="object-contain h-12"
                                                loading="lazy"
                                                onError={handleImageError}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <CTA
                    title={t('about.cta.title')}
                    description={t('about.cta.description')}
                    backgroundClass="bg-dark"
                    textColor="text-white"
                    className="relative overflow-hidden"
                    buttons={[
                        {
                            text: t('common.contactUs'),
                            to: '/contact',
                            icon: 'Phone',
                            className: 'bg-white text-ink hover:bg-surface-muted'
                        },
                        {
                            text: t('common.ourServices'),
                            to: '/services',
                            icon: 'Factory',
                            className: 'bg-primary text-white hover:bg-primary/90'
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default About
