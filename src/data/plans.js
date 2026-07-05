// Dados dos planos, compartilhados entre a página de Planos e a de Pagamento.
export const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '37,90',
    description: 'Para começar a delegar o dia a dia.',
    features: [
      '100 tarefas por mês',
      'Tarefas simples: agendar, organizar e pesquisar',
      'Até 30 e-mails respondidos por mês',
      'Velocidade de resposta padrão',
      'Suporte por e-mail',
    ],
    highlighted: false,
    premium: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '108,90',
    description: 'Para quem precisa de análises e prioridade.',
    features: [
      'Tudo do Basic',
      '500 tarefas por mês',
      'Tarefas complexas: análises e relatórios',
      'E-mails respondidos ilimitados',
      'Velocidade de resposta prioritária',
      'Automações básicas',
      'Suporte prioritário',
    ],
    highlighted: true,
    premium: false,
  },
  {
    id: 'ultimate-base',
    name: 'Ultimate Base',
    price: '250,90',
    description: 'Para operações intensas e projetos longos.',
    features: [
      'Tudo do Pro',
      '2.000 tarefas por mês',
      'Projetos de múltiplas etapas',
      'Automações avançadas de fluxos',
      'Integrações com suas ferramentas',
      'Velocidade máxima de resposta',
      'Suporte em horário estendido',
    ],
    highlighted: false,
    premium: false,
  },
  {
    id: 'ultimate-superior',
    name: 'Ultimate Superior',
    price: '499,90',
    description: 'A experiência definitiva, sem limites.',
    features: [
      'Tudo do Ultimate Base',
      'Tarefas ilimitadas',
      'Agente dedicado e exclusivo',
      'Integrações personalizadas + API',
      'Gerente de conta dedicado',
      'Suporte 24/7 em minutos',
      'Acesso antecipado a novos recursos',
    ],
    highlighted: false,
    premium: true,
  },
]

export function getPlanById(id) {
  return plans.find((plan) => plan.id === id) ?? null
}
