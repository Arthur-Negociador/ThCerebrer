# ThCerebrer — Site Institucional

Site institucional do **ThCerebrer**, o agente de inteligência artificial que executa tarefas do dia a dia (agendar, organizar, pesquisar, responder e-mails) e tarefas complexas (análises, automações, projetos de múltiplas etapas).

## Stack

- **React 19** + **Vite 6**
- **Tailwind CSS 4** (via plugin `@tailwindcss/vite`)
- **Framer Motion** para animações e transições
- **React Router 7** para navegação entre páginas

## Identidade visual

- Base em preto profundo (`#0A0A0A` / `#111111`) com seções em cinza escuro
- Verde esmeralda (`#10B981` / `#059669`) como cor de destaque, com acentos claros no hover
- Gradientes sutis preto → esmeralda e efeitos de glow
- Tipografia **Space Grotesk** (títulos) e **Inter** (texto)
- Cards com glassmorphism leve, bordas suaves e sombras difusas

## Estrutura

```
src/
├── components/       # Componentes reutilizáveis
│   ├── Navbar.jsx           # Barra fixa com fundo que escurece ao rolar + menu mobile
│   ├── Footer.jsx
│   ├── Button.jsx           # Variantes primary / secondary / ghost
│   ├── GlassCard.jsx        # Card com efeito de vidro
│   ├── SectionHeading.jsx   # Cabeçalho de seção padronizado
│   ├── Reveal.jsx           # Animação de entrada no scroll
│   └── PageTransition.jsx   # Transição entre páginas
└── pages/
    ├── Home.jsx             # Hero, tarefas do dia a dia, tarefas complexas, como funciona, CTA
    ├── Planos.jsx           # Preços mensal/anual + FAQ de cobrança
    ├── Ajuda.jsx            # Busca, categorias, FAQ com acordeão, contato
    └── Atualizacoes.jsx     # Changelog em timeline
```

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção (gera dist/)
npm run preview  # pré-visualiza o build
```
