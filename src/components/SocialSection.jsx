import { motion } from 'framer-motion'
import { FaInstagram, FaTiktok, FaYoutube, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import Reveal from './Reveal'

// href como placeholder (#) — substituir pelos links reais dos perfis.
const socials = [
  { name: 'Instagram', icon: FaInstagram, href: '#' },
  { name: 'TikTok', icon: FaTiktok, href: '#' },
  { name: 'YouTube', icon: FaYoutube, href: '#' },
  { name: 'X (Twitter)', icon: FaXTwitter, href: '#' },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function SocialSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-20 sm:py-24">
      {/* Brilho esmeralda difuso ao fundo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/8 blur-[110px]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Siga a <span className="text-gradient-emerald">ThCerebrer</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-neutral-400">
            Acompanhe novidades, bastidores e atualizações do seu agente em primeira mão.
          </p>
        </Reveal>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {socials.map(({ name, icon: Icon, href }) => (
            <motion.li key={name} variants={item}>
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                className="glass group flex h-14 w-14 items-center justify-center rounded-2xl text-xl text-neutral-400 transition-colors duration-300 hover:border-emerald-500/50 hover:text-emerald-400 hover:glow-emerald sm:h-16 sm:w-16 sm:text-2xl"
              >
                <Icon aria-hidden />
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
