import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import Button from '../components/Button'

const plans = [
  {
    name: 'Essencial',
    description: 'Para quem quer delegar as tarefas do dia a dia.',
    monthly: 29,
    yearly: 24,
    features: [
      'Agendamentos e lembretes ilimitados',
      'Organização de notas e arquivos',
      'Pesquisas com resumos inteligentes',
      'Até 50 e-mails respondidos por mês',
      'Suporte por e-mail',
    ],
    highlighted: false,
    cta: 'Começar com Essencial',
  },
  {
    name: 'Profissional',
    description: 'Para quem precisa de análises e automações de verdade.',
    monthly: 79,
    yearly: 64,
    features: [
      'Tudo do plano Essencial',
      'E-mails respondidos ilimitados',
      'Análises profundas de dados e documentos',
      'Automações de fluxos de trabalho',
      'Projetos de múltiplas etapas',
      'Suporte prioritário',
    ],
    highlighted: true,
    cta: 'Escolher Profissional',
  },
  {
    name: 'Empresarial',
    description: 'Para equipes que querem escalar com inteligência.',
    monthly: 199,
    yearly: 159,
    features: [
      'Tudo do plano Profissional',
      'Até 10 membros na equipe',
      'Espaços de trabalho compartilhados',
      'Integrações personalizadas e API',
      'Controles de segurança avançados',
      'Gerente de conta dedicado',
    ],
    highlighted: false,
    cta: 'Falar com vendas',
  },
]

const faqs = [
  {
    question: 'Posso trocar de plano a qualquer momento?',
    answer:
      'Sim. Você pode fazer upgrade ou downgrade quando quiser, e o valor é ajustado proporcionalmente na próxima fatura.',
  },
  {
    question: 'Existe período de teste gratuito?',
    answer:
      'Todos os planos incluem 14 dias de teste gratuito, sem necessidade de cartão de crédito.',
  },
  {
    question: 'Meus dados estão seguros?',
    answer:
      'Sim. Usamos criptografia de ponta a ponta e nunca utilizamos seus dados para treinar modelos de terceiros.',
  },
  {
    question: 'Como funciona o cancelamento?',
    answer:
      'Sem fidelidade e sem burocracia: cancele em um clique nas configurações da sua conta, a qualquer momento.',
  },
]

export default function Planos() {
  const [yearly, setYearly] = useState(true)

  return (
    <PageTransition>
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Planos"
            title="Escolha o cérebro do seu tamanho"
            subtitle="Comece grátis por 14 dias. Sem cartão de crédito, sem compromisso — só resultados."
          />

          {/* Alternador mensal / anual */}
          <Reveal delay={0.1} className="mt-10 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium transition-colors ${
                yearly ? 'text-neutral-500' : 'text-white'
              }`}
            >
              Mensal
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              aria-label="Alternar cobrança anual"
              onClick={() => setYearly((v) => !v)}
              className="relative h-7 w-14 rounded-full border border-emerald-500/40 bg-ink-800 transition-colors"
            >
              <span
                className={`absolute top-0.5 size-[1.35rem] rounded-full bg-emerald-500 transition-all duration-300 ${
                  yearly ? 'left-[calc(100%-1.5rem)]' : 'left-1'
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium transition-colors ${
                yearly ? 'text-white' : 'text-neutral-500'
              }`}
            >
              Anual{' '}
              <span className="ml-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                −20%
              </span>
            </span>
          </Reveal>

          {/* Cards de preço */}
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.12}>
                <GlassCard
                  hover={!plan.highlighted}
                  className={`relative flex h-full flex-col p-8 ${
                    plan.highlighted
                      ? 'border-emerald-500/50 glow-emerald lg:scale-105'
                      : ''
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink-950">
                      Mais popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-neutral-400">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="font-display text-5xl font-bold text-white">
                      R${yearly ? plan.yearly : plan.monthly}
                    </span>
                    <span className="text-sm text-neutral-500">/mês</span>
                  </div>
                  {yearly && (
                    <p className="mt-1 text-xs text-emerald-400">
                      cobrado anualmente
                    </p>
                  )}
                  <ul className="mt-8 flex-1 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-neutral-300">
                        <span className="mt-0.5 text-emerald-400" aria-hidden>
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href="#criar-conta"
                      variant={plan.highlighted ? 'primary' : 'secondary'}
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Perguntas frequentes sobre cobrança */}
      <section className="border-t border-white/5 bg-ink-900 py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.08}>
                <GlassCard className="p-6">
                  <h3 className="font-display text-base font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{faq.answer}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
