import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import Button from '../components/Button'

const categories = [
  {
    icon: '🚀',
    title: 'Primeiros passos',
    description: 'Crie sua conta, conecte suas ferramentas e delegue sua primeira tarefa.',
  },
  {
    icon: '⚙️',
    title: 'Configurações',
    description: 'Personalize o tom de voz, permissões e integrações do seu agente.',
  },
  {
    icon: '🔐',
    title: 'Segurança e privacidade',
    description: 'Entenda como protegemos seus dados e como controlar o acesso.',
  },
  {
    icon: '💳',
    title: 'Planos e cobrança',
    description: 'Gerencie assinatura, faturas, upgrades e cancelamentos.',
  },
  {
    icon: '🤖',
    title: 'Usando o agente',
    description: 'Dicas para pedir tarefas, revisar resultados e aprovar automações.',
  },
  {
    icon: '🔌',
    title: 'Integrações',
    description: 'Conecte e-mail, agenda, drive e as ferramentas que você já usa.',
  },
]

const faqs = [
  {
    question: 'O que o ThCerebrer consegue fazer por mim?',
    answer:
      'Ele executa desde tarefas cotidianas — agendar compromissos, organizar arquivos, pesquisar assuntos e responder e-mails — até trabalhos complexos, como análises de dados, automações de fluxos e projetos de múltiplas etapas. Você descreve o que precisa e ele planeja e executa.',
  },
  {
    question: 'Preciso saber programar ou usar comandos especiais?',
    answer:
      'Não. Você conversa com o ThCerebrer em linguagem natural, como falaria com um assistente humano. Ele entende contexto, faz perguntas quando necessário e confirma antes de ações importantes.',
  },
  {
    question: 'O agente age sozinho ou pede minha aprovação?',
    answer:
      'Você decide. Por padrão, ações sensíveis (como enviar um e-mail ou confirmar um agendamento) pedem sua aprovação. Nas configurações, você pode liberar automações completas para as tarefas que confia.',
  },
  {
    question: 'Quais ferramentas posso conectar?',
    answer:
      'E-mail, calendário, armazenamento em nuvem e as principais ferramentas de produtividade. No plano Empresarial, também oferecemos integrações personalizadas via API.',
  },
  {
    question: 'Meus dados são usados para treinar a IA?',
    answer:
      'Não. Seus dados são criptografados, pertencem somente a você e nunca são usados para treinar modelos de terceiros. Você pode exportá-los ou excluí-los a qualquer momento.',
  },
  {
    question: 'Como falo com o suporte?',
    answer:
      'Pelo e-mail suporte@thcerebrer.com ou pelo chat dentro da plataforma. Assinantes do plano Profissional e Empresarial têm atendimento prioritário.',
  },
]

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <GlassCard hover={false} className="overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-display text-base font-semibold text-white">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-xl text-emerald-400"
          aria-hidden
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-neutral-400">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  )
}

export default function Ajuda() {
  const [openIndex, setOpenIndex] = useState(0)
  const [query, setQuery] = useState('')

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <PageTransition>
      {/* Cabeçalho com busca */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Central de Ajuda"
            title="Como podemos ajudar?"
            subtitle="Encontre respostas rápidas ou fale com nossa equipe."
          />
          <Reveal delay={0.15} className="mt-10">
            <div className="glass mx-auto flex max-w-xl items-center gap-3 rounded-full px-6 py-4 transition-colors focus-within:border-emerald-500/40">
              <span className="text-neutral-500" aria-hidden>
                🔎
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Busque por uma dúvida… ex.: integrações, cobrança"
                className="w-full bg-transparent text-sm text-white placeholder-neutral-500 outline-none"
                aria-label="Buscar na central de ajuda"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Categorias */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.08}>
                <GlassCard className="h-full cursor-pointer p-7">
                  <span className="text-3xl" aria-hidden>
                    {cat.icon}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {cat.description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ com acordeão */}
      <section className="border-t border-white/5 bg-ink-900 py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />
          <div className="mt-12 space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, i) => (
                <Reveal key={faq.question} delay={i * 0.06}>
                  <FaqItem
                    faq={faq}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                  />
                </Reveal>
              ))
            ) : (
              <p className="text-center text-sm text-neutral-500">
                Nenhum resultado para “{query}”. Tente outra palavra ou fale com o suporte abaixo.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ainda precisa de ajuda?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-neutral-400">
              Nossa equipe responde em até 24 horas — ou em minutos, nos planos com suporte
              prioritário.
            </p>
            <div className="mt-8">
              <Button href="mailto:suporte@thcerebrer.com" size="lg">
                Falar com o suporte
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
