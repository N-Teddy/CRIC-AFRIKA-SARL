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
    Mail,
} from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import { certifications, partners, teamMembers, timeline, values } from '../constants/about'
import CTA from '../components/ui/CTA'
import { useTranslation } from '../context/TranslationContext'

const About = () => {
    const { t } = useTranslation();

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
    const storyContent = t('about.storyContent');

    return (
        <>
            <Helmet>
                <title>{t('about.title')} - CRIC Africa SARL</title>
                <meta
                    name="description"
                    content={t('about.metaDescription')}
                />
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
                <section className="py-20 bg-white">
                    <div className="container px-4 mx-auto lg:px-8">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-primary-orange/10 text-primary-orange">
                                    {t('about.ourStory')}
                                </span>
                                <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-dark-blue">
                                    {t('about.storyTitle')}
                                </h2>
                                {Array.isArray(storyContent) ? (
                                    storyContent.map((paragraph, index) => (
                                        <p key={index} className="mb-6 text-lg leading-relaxed text-gray-600">
                                            {paragraph}
                                        </p>
                                    ))
                                ) : (
                                    <p className="mb-6 text-lg leading-relaxed text-gray-600">
                                        {storyContent}
                                    </p>
                                )}
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        to="/contact"
                                        className="px-6 py-3 font-semibold text-white rounded-full btn-orange"
                                    >
                                        <Handshake className="inline mr-2" size={16} />
                                        {t('common.becomePartner')}
                                    </Link>
                                    <Link
                                        to="/realisations"
                                        className="px-6 py-3 font-semibold text-white rounded-full btn-green"
                                    >
                                        <FolderOpen className="inline mr-2" size={16} />
                                        {t('common.ourProjects')}
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                className="grid grid-cols-2 gap-4"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=600"
                                    alt="CRIC Africa"
                                    className="object-cover w-full h-64 shadow-lg rounded-2xl hover-lift"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600"
                                    alt="CRIC Africa Team"
                                    className="object-cover w-full h-64 mt-8 shadow-lg rounded-2xl hover-lift"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600"
                                    alt="CRIC Africa Projects"
                                    className="object-cover w-full h-64 shadow-lg rounded-2xl hover-lift"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1621905252472-9b6e78c09a0f?w=600"
                                    alt="CRIC Africa Installations"
                                    className="object-cover w-full h-64 mt-8 shadow-lg rounded-2xl hover-lift"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Mission, Vision, Values */}
                <section className="py-20 bg-light-gray">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-dark-blue">
                                {t('about.identity.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600">
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
                                className="p-8 bg-white rounded-2xl hover-lift"
                                variants={itemVariants}
                            >
                                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-orange to-lemon-green">
                                    <Target className="text-3xl text-white" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-center text-dark-blue">
                                    {t('about.mission.title')}
                                </h3>
                                <p className="leading-relaxed text-center text-gray-600">
                                    {t('about.mission.description')}
                                </p>
                            </motion.div>

                            {/* Vision */}
                            <motion.div
                                className="p-8 bg-white rounded-2xl hover-lift"
                                variants={itemVariants}
                            >
                                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-lemon-green to-primary-orange">
                                    <Eye className="text-3xl text-white" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-center text-dark-blue">
                                    {t('about.vision.title')}
                                </h3>
                                <p className="leading-relaxed text-center text-gray-600">
                                    {t('about.vision.description')}
                                </p>
                            </motion.div>

                            {/* Slogan */}
                            <motion.div
                                className="p-8 text-white bg-gradient-to-br from-primary-orange to-lemon-green rounded-2xl hover-lift"
                                variants={itemVariants}
                            >
                                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-white/20">
                                    <Zap className="text-3xl text-white" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold text-center">
                                    {t('about.motto.title')}
                                </h3>
                                <p className="text-xl italic font-semibold leading-relaxed text-center text-white">
                                    {t('about.motto.text')}
                                </p>
                                <p className="mt-4 leading-relaxed text-center text-white/90">
                                    {t('about.motto.description')}
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Values */}
                        <motion.div
                            className="p-8 bg-white rounded-2xl lg:p-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="mb-12 text-3xl font-bold text-center text-dark-blue">
                                {t('about.values.title')}
                            </h3>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {values.map((value, index) => {
                                    const Icon = value.icon;
                                    const valueKeys = ['excellence', 'integrity', 'innovation', 'collaboration'];
                                    const currentKey = valueKeys[index];

                                    return (
                                        <motion.div
                                            key={value.title}
                                            className="relative overflow-hidden text-center value-card"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.color === 'orange'
                                                ? 'from-primary-orange to-lemon-green'
                                                : 'from-lemon-green to-primary-orange'
                                                }`} />
                                            <div className={`w-16 h-16 ${value.color === 'orange' ? 'bg-primary-orange/10' : 'bg-lemon-green/10'
                                                } rounded-full flex items-center justify-center mx-auto mb-4`}>
                                                <Icon className={`${value.color === 'orange' ? 'text-primary-orange' : 'text-lemon-green'
                                                    } text-2xl`} />
                                            </div>
                                            <h4 className="mb-3 text-xl font-bold text-dark-blue">
                                                {t(`about.values.${currentKey}`)}
                                            </h4>
                                            <p className="text-gray-600">
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
                <section className="py-20 bg-white">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-dark-blue">
                                {t('about.journey.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600">
                                {t('about.journey.subtitle')}
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    className="relative pb-12 pl-12 border-l-2 timeline-item border-lemon-green last:border-l-0"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="absolute top-0 w-4 h-4 rounded-full timeline-dot -left-2 bg-gradient-to-br from-primary-orange to-lemon-green" />
                                    <div className={`rounded-xl p-6 ${item.isCurrent
                                        ? 'bg-gradient-to-br from-primary-orange to-lemon-green text-white'
                                        : 'bg-light-gray'
                                        }`}>
                                        <span className={`inline-block ${item.isCurrent
                                            ? 'bg-white/20 text-white'
                                            : item.color === 'orange' ? 'bg-primary-orange text-white' : 'bg-lemon-green text-white'
                                            } px-3 py-1 rounded-full text-sm font-semibold mb-3`}>
                                            {item.year}
                                        </span>
                                        <h3 className={`text-2xl font-bold mb-2 ${item.isCurrent ? 'text-white' : 'text-dark-blue'
                                            }`}>
                                            {item.title}
                                        </h3>
                                        <p className={item.isCurrent ? 'text-white/90' : 'text-gray-600'}>
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-light-gray">
                    <div className="container px-4 mx-auto lg:px-8">
                        <motion.div
                            className="mb-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-dark-blue">
                                {t('about.team.title')}
                            </h2>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600">
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
                                    className="overflow-hidden bg-white rounded-2xl hover-lift"
                                    variants={itemVariants}
                                >
                                    <div className={`h-64 bg-gradient-to-br ${member.color === 'orange'
                                        ? 'from-primary-orange to-lemon-green'
                                        : 'from-lemon-green to-primary-orange'
                                        } flex items-center justify-center`}>
                                        <Users className="text-6xl text-white" />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="mb-1 text-xl font-bold text-dark-blue">{member.name}</h3>
                                        <p className={`${member.color === 'orange' ? 'text-primary-orange' : 'text-lemon-green'
                                            } font-semibold mb-3`}>
                                            {member.position}
                                        </p>
                                        <p className="mb-4 text-sm text-gray-600">{member.description}</p>
                                        <div className="flex justify-center space-x-3">
                                            <a
                                                href="#"
                                                className={`w-8 h-8 ${member.color === 'orange' ? 'bg-primary-orange/10 hover:bg-primary-orange' : 'bg-lemon-green/10 hover:bg-lemon-green'
                                                    } ${member.color === 'orange' ? 'text-primary-orange hover:text-white' : 'text-lemon-green hover:text-white'
                                                    } rounded-full flex items-center justify-center transition`}
                                            >
                                                <Linkedin size={12} />
                                            </a>
                                            <a
                                                href="#"
                                                className={`w-8 h-8 ${member.color === 'orange' ? 'bg-primary-orange/10 hover:bg-primary-orange' : 'bg-lemon-green/10 hover:bg-lemon-green'
                                                    } ${member.color === 'orange' ? 'text-primary-orange hover:text-white' : 'text-lemon-green hover:text-white'
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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <p className="mb-6 text-lg text-gray-600">
                                {t('about.team.joinText')}
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block px-8 py-4 text-lg font-bold text-white rounded-full btn-orange"
                            >
                                <Briefcase className="inline mr-2" size={20} />
                                {t('common.careers')}
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Certifications & Partners */}
                <section className="py-20 bg-white">
                    <div className="container px-4 mx-auto lg:px-8">
                        <div className="grid gap-16 lg:grid-cols-2">
                            {/* Certifications */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="mb-8 text-3xl font-bold lg:text-4xl text-dark-blue">
                                    {t('about.certifications.title')}
                                </h2>
                                <div className="space-y-4">
                                    {certifications.map((cert, index) => (
                                        <div key={cert.name} className="flex items-center p-4 bg-light-gray rounded-xl hover-lift">
                                            <div className={`w-16 h-16 ${cert.color === 'orange' ? 'bg-primary-orange/10' : 'bg-lemon-green/10'
                                                } rounded-full flex items-center justify-center mr-4`}>
                                                <Award className={`${cert.color === 'orange' ? 'text-primary-orange' : 'text-lemon-green'
                                                    } text-2xl`} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-dark-blue">{cert.name}</h4>
                                                <p className="text-sm text-gray-600">{cert.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Partners */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="mb-8 text-3xl font-bold lg:text-4xl text-dark-blue">
                                    {t('about.partners.title')}
                                </h2>
                                <p className="mb-8 leading-relaxed text-gray-600">
                                    {t('about.partners.description')}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {partners.map((partner, index) => (
                                        <div key={partner} className="flex items-center justify-center p-6 bg-light-gray rounded-xl hover-lift">
                                            <span className="text-2xl font-bold text-gray-400">{partner}</span>
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
                    buttons={[
                        {
                            text: t('common.contactUs'),
                            to: "/contact",
                            icon: "Phone",
                            className: "bg-white text-primary-orange hover:bg-gray-50"
                        },
                        {
                            text: t('common.ourServices'),
                            to: "/services",
                            icon: "Factory",
                            className: "bg-dark-blue text-white hover:bg-blue-900"
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default About