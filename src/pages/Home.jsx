import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import Button from '../components/Button'
import SocialSection from '../components/SocialSection'

const dailyTasks = [
  {
    icon: '📅',
    title: 'Agendar',
    description:
      'Compromissos, reuniões e lembretes organizados automaticamente na sua agenda, sem conflitos.',
  },
  {
    icon: '🗂️',
    title: 'Organizar',
    description:
      'Arquivos, notas e prioridades sempre no lugar certo. O ThCerebrer mantém sua rotina em ordem.',
  },
  {
    icon: '🔎',
    title: 'Pesquisar',
    description:
      'Respostas precisas e resumos confiáveis sobre qualquer assunto, em segundos.',
  },
  {
    icon: '✉️',
    title: 'Responder e-mails',
    description:
      'Rascunhos prontos no seu tom de voz, triagem inteligente e caixa de entrada sob controle.',
  },
]

const complexTasks = [
  {
    title: 'Análises profundas',
    description:
      'Relatórios, dados e documentos extensos transformados em conclusões claras e acionáveis.',
    metric: '10x',
    metricLabel: 'mais rápido que a análise manual',
  },
  {
    title: 'Automações inteligentes',
    description:
      'Fluxos de trabalho repetitivos executados de ponta a ponta, com supervisão quando você quiser.',
    metric: '24/7',
    metricLabel: 'trabalhando enquanto você descansa',
  },
  {
    title: 'Projetos de múltiplas etapas',
    description:
      'O ThCerebrer planeja, divide, executa e reporta cada fase de projetos longos e complexos.',
    metric: '∞',
    metricLabel: 'etapas coordenadas sem esforço',
  },
]

const steps = [
  {
    number: '01',
    title: 'Diga o que precisa',
    description: 'Escreva com suas palavras, como falaria com um assistente de confiança.',
  },
  {
    number: '02',
    title: 'O ThCerebrer planeja e executa',
    description: 'Ele entende o contexto, monta o plano e realiza cada etapa com precisão.',
  },
  {
    number: '03',
    title: 'Você aprova e acompanha',
    description: 'Transparência total: revise resultados, ajuste o rumo e mantenha o controle.',
  },
]

export default function Home() {
  return (
    <PageTransition>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        {/* Fundo: grade sutil + orbes de luz esmeralda */}
        <div className="bg-grid absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-emerald-600/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-400"
          >
            Seu agente de IA pessoal
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-gradient-emerald mt-8 font-display text-6xl font-bold leading-none tracking-tight sm:text-8xl lg:text-[9rem]"
            style={{ textShadow: '0 0 80px rgba(16,185,129,0.25)' }}
          >
            ThCerebrer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl"
          >
            O agente de inteligência artificial que cuida das suas tarefas do dia a dia — e das
            mais complexas — para você focar no que realmente importa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="#criar-conta" size="lg">
              Começar agora
              <span aria-hidden>→</span>
            </Button>
            <Button to="/planos" variant="secondary" size="lg">
              Conhecer os planos
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 text-xs text-neutral-600"
          >
            Sem cartão de crédito • Configure em menos de 2 minutos
          </motion.p>
        </div>
      </section>

      {/* ============ TAREFAS DO DIA A DIA ============ */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Rotina sem esforço"
            title="As tarefas do dia a dia, resolvidas"
            subtitle="Delegue o operacional. O ThCerebrer assume as pequenas tarefas que consomem suas horas — com precisão e no seu estilo."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dailyTasks.map((task, i) => (
              <Reveal key={task.title} delay={i * 0.1}>
                <GlassCard className="h-full p-7">
                  <span className="text-3xl" aria-hidden>
                    {task.icon}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {task.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {task.description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TAREFAS COMPLEXAS ============ */}
      <section className="relative bg-ink-900 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Poder de verdade"
            title="Feito também para o trabalho pesado"
            subtitle="Quando a tarefa exige profundidade, o ThCerebrer entrega: análises, automações e projetos completos, do início ao fim."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {complexTasks.map((task, i) => (
              <Reveal key={task.title} delay={i * 0.12}>
                <GlassCard className="flex h-full flex-col p-8">
                  <div className="font-display text-5xl font-bold text-gradient-emerald">
                    {task.metric}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-neutral-500">
                    {task.metricLabel}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">
                    {task.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {task.description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMO FUNCIONA ============ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Simples assim"
            title="Como o ThCerebrer trabalha por você"
          />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.15}>
                <div className="relative">
                  <span className="font-display text-6xl font-bold text-emerald-500/15">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-400">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section id="criar-conta" className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Pronto para ter um cérebro <span className="text-gradient-emerald">extra</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
              Crie sua conta gratuita e descubra quanto tempo você pode recuperar todos os dias.
            </p>
            <div className="mt-10">
              <Button size="lg" href="#criar-conta">
                Criar Conta Grátis
                <span aria-hidden>→</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ REDES SOCIAIS ============ */}
      <SocialSection />
    </PageTransition>
  )
}
