import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import Button from '../components/Button'
import { plans } from '../data/plans'

const faqs = [
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer:
      'Trabalhamos exclusivamente com Pix: pagamento instantâneo, seguro e sem taxas extras. Cartão de crédito e boleto não estão disponíveis.',
  },
  {
    question: 'Posso trocar de plano a qualquer momento?',
    answer:
      'Sim. Você pode fazer upgrade ou downgrade quando quiser, e o valor é ajustado proporcionalmente na próxima renovação.',
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

function PlanCard({ plan }) {
  return (
    <GlassCard
      hover={!plan.highlighted && !plan.premium}
      className={`relative flex h-full flex-col p-7 ${
        plan.highlighted ? 'border-emerald-500/50 glow-emerald' : ''
      } ${plan.premium ? 'card-premium' : ''}`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink-950">
          Mais popular
        </span>
      )}
      {plan.premium && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink-950">
          ✦ Premium
        </span>
      )}

      <h3
        className={`font-display text-xl font-semibold ${
          plan.premium ? 'text-gradient-gold' : 'text-white'
        }`}
      >
        {plan.name}
      </h3>
      <p className="mt-2 min-h-10 text-sm text-neutral-400">{plan.description}</p>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="text-sm font-medium text-neutral-400">R$</span>
        <span className="font-display text-4xl font-bold tracking-tight text-white xl:text-5xl">
          {plan.price}
        </span>
        <span className="text-sm text-neutral-500">/mês</span>
      </div>

      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-neutral-300">
            <span
              className={`mt-0.5 ${plan.premium ? 'text-amber-400' : 'text-emerald-400'}`}
              aria-hidden
            >
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          to={`/pagamento?plano=${plan.id}`}
          variant={plan.highlighted || plan.premium ? 'primary' : 'secondary'}
          className="w-full"
        >
          Assinar
        </Button>
      </div>
    </GlassCard>
  )
}

export default function Planos() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
          <SectionHeading
            eyebrow="Planos"
            title="Escolha o cérebro do seu tamanho"
            subtitle="Assine com Pix e comece em minutos. Sem fidelidade, cancele quando quiser."
          />

          {/* 4 colunas no desktop, 2 no tablet, 1 no mobile */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 0.1}>
                <PlanCard plan={plan} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-10 text-center">
            <p className="text-sm text-neutral-500">
              Pagamento exclusivamente via <span className="font-semibold text-emerald-400">Pix</span>{' '}
              — rápido, seguro e sem taxas extras.
            </p>
          </Reveal>
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
