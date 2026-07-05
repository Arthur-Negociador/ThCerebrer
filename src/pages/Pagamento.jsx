import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import GlassCard from '../components/GlassCard'
import Button from '../components/Button'
import { getPlanById } from '../data/plans'

// Código placeholder — será substituído pelo Pix Copia e Cola real.
const PIX_CODE =
  '00020126580014BR.GOV.BCB.PIX0136thcerebrer-pix-placeholder-000000005204000053039865802BR5910THCEREBRER6009SAO PAULO62070503***6304ABCD'

const steps = [
  'Abra o aplicativo do seu banco',
  'Escolha a opção Pix',
  'Use o Copia e Cola ou leia o QR Code',
  'Confirme o pagamento',
]

function SemPlano() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5">
      <Reveal className="text-center">
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Nenhum plano selecionado
        </h1>
        <p className="mx-auto mt-4 max-w-md text-neutral-400">
          Para continuar com o pagamento, escolha primeiro um dos nossos planos.
        </p>
        <div className="mt-8">
          <Button to="/planos" size="lg">
            Ver planos
          </Button>
        </div>
      </Reveal>
    </section>
  )
}

function Sucesso({ plan }) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-lg text-center"
      >
        <GlassCard hover={false} className="p-10 sm:p-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 220, damping: 14 }}
            className="glow-emerald mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-4xl text-ink-950"
            aria-hidden
          >
            ✓
          </motion.div>
          <h1 className="mt-8 font-display text-3xl font-bold text-white">
            Pagamento em processamento
          </h1>
          <p className="mt-4 leading-relaxed text-neutral-400">
            Recebemos a confirmação do seu Pix para o plano{' '}
            <span className="font-semibold text-emerald-400">{plan.name}</span>. Assim que o
            pagamento for compensado — normalmente em poucos segundos — sua conta será ativada e
            você receberá um e-mail de boas-vindas.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/">Voltar para a Home</Button>
            <Button to="/ajuda" variant="secondary">
              Falar com o suporte
            </Button>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  )
}

export default function Pagamento() {
  const [searchParams] = useSearchParams()
  const plan = getPlanById(searchParams.get('plano'))
  const [copied, setCopied] = useState(false)
  const [paid, setPaid] = useState(false)

  const copyPixCode = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CODE)
    } catch {
      // Fallback para navegadores sem suporte à Clipboard API
      const textarea = document.createElement('textarea')
      textarea.value = PIX_CODE
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  if (!plan) {
    return (
      <PageTransition>
        <SemPlano />
      </PageTransition>
    )
  }

  if (paid) {
    return (
      <PageTransition>
        <Sucesso plan={plan} />
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="text-center">
            <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Checkout seguro
            </span>
            <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Finalize sua assinatura
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            {/* ===== Resumo do pedido ===== */}
            <Reveal delay={0.1}>
              <GlassCard hover={false} className="p-8">
                <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-neutral-400">
                  Resumo do pedido
                </h2>

                <div className="mt-6 flex items-center justify-between border-b border-white/5 pb-5">
                  <div>
                    <p className="font-display text-lg font-semibold text-white">
                      Plano {plan.name}
                    </p>
                    <p className="mt-1 text-xs text-neutral-500">Assinatura mensal</p>
                  </div>
                  <p className="text-sm text-neutral-300">R$ {plan.price}</p>
                </div>

                <div className="mt-5 flex items-baseline justify-between">
                  <span className="text-sm font-medium text-neutral-400">Total</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-medium text-emerald-400">R$</span>
                    <span className="font-display text-4xl font-bold text-gradient-emerald">
                      {plan.price}
                    </span>
                    <span className="text-sm text-neutral-500">/mês</span>
                  </div>
                </div>

                <p className="mt-8 rounded-xl border border-white/5 bg-ink-800/60 p-4 text-xs leading-relaxed text-neutral-500">
                  💡 Pagamento <span className="font-semibold text-emerald-400">exclusivamente via Pix</span>.
                  Cartão de crédito e boleto não estão disponíveis.
                </p>

                <Link
                  to="/planos"
                  className="mt-6 inline-block text-sm text-neutral-500 transition-colors hover:text-emerald-400"
                >
                  ← Escolher outro plano
                </Link>
              </GlassCard>
            </Reveal>

            {/* ===== Pagamento via Pix ===== */}
            <Reveal delay={0.2}>
              <GlassCard hover={false} className="p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-lg" aria-hidden>
                    ⚡
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-semibold text-white">
                      Pagamento via Pix
                    </h2>
                    <p className="text-xs text-neutral-500">
                      Aprovação instantânea, disponível 24h
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 sm:grid-cols-[auto_1fr]">
                  {/* QR Code placeholder — substituir pelo QR real */}
                  <div className="mx-auto flex h-52 w-52 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-emerald-500/30 bg-ink-800/60 text-center">
                    <span className="text-4xl" aria-hidden>
                      ▦
                    </span>
                    <p className="px-6 text-xs leading-relaxed text-neutral-500">
                      Espaço reservado para o QR Code Pix
                    </p>
                  </div>

                  {/* Instruções passo a passo */}
                  <ol className="space-y-4 self-center">
                    {steps.map((step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-400">
                          {i + 1}
                        </span>
                        <span className="text-sm text-neutral-300">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Pix Copia e Cola */}
                <div className="mt-8">
                  <label
                    htmlFor="pix-code"
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
                  >
                    Pix Copia e Cola
                  </label>
                  <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                    <input
                      id="pix-code"
                      type="text"
                      readOnly
                      value={PIX_CODE}
                      onFocus={(e) => e.target.select()}
                      className="glass w-full truncate rounded-xl px-4 py-3.5 font-mono text-xs text-neutral-300 outline-none focus:border-emerald-500/40"
                    />
                    <button
                      type="button"
                      onClick={copyPixCode}
                      className={`shrink-0 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                        copied
                          ? 'bg-emerald-400 text-ink-950 glow-emerald'
                          : 'bg-emerald-500 text-ink-950 hover:bg-emerald-400 hover:glow-emerald'
                      }`}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={copied ? 'copiado' : 'copiar'}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.18 }}
                          className="inline-block"
                        >
                          {copied ? '✓ Copiado!' : 'Copiar código'}
                        </motion.span>
                      </AnimatePresence>
                    </button>
                  </div>
                </div>

                {/* Confirmação */}
                <div className="mt-8 border-t border-white/5 pt-8">
                  <Button size="lg" className="w-full" onClick={() => setPaid(true)}>
                    Já fiz o pagamento
                  </Button>
                  <p className="mt-4 text-center text-xs text-neutral-600">
                    Após a confirmação, sua conta é ativada automaticamente.
                  </p>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
