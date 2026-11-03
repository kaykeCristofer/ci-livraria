// Catálogo fictício (preços ilustrativos). As capas são geradas em CSS a partir de `cover`.
export const books = [
  {
    isbn: '978-0321146533',
    title: 'Test-Driven Development',
    subtitle: 'By Example',
    author: 'Kent Beck',
    year: 2002,
    category: 'Testes',
    price: 189.9,
    pages: 240,
    blurb:
      'O livro que popularizou o ciclo vermelho → verde → refatorar. Beck constrói dois exemplos completos guiados por testes e mostra como passos pequenos levam a um design melhor.',
    cover: { bg: '#B8432F', fg: '#FBF1E4', accent: '#E8A35C', pattern: 'stripes' },
  },
  {
    isbn: '978-8543024974',
    title: 'Engenharia de Software',
    subtitle: '10ª edição',
    author: 'Ian Sommerville',
    year: 2018,
    category: 'Processo',
    price: 279.0,
    pages: 768,
    blurb:
      'Referência clássica dos cursos de computação: requisitos, modelagem, arquitetura, testes, evolução e gestão de projetos de software, com estudos de caso ao longo do livro.',
    cover: { bg: '#1F3A5F', fg: '#F2EEE3', accent: '#7FA7D9', pattern: 'grid' },
  },
  {
    isbn: '978-8576082675',
    title: 'Código Limpo',
    subtitle: 'Habilidades práticas do Agile Software',
    author: 'Robert C. Martin',
    year: 2009,
    category: 'Código',
    price: 119.9,
    pages: 440,
    blurb:
      'Nomes significativos, funções pequenas, comentários que importam e tratamento de erros. Um guia opinativo sobre como escrever código que outras pessoas conseguem ler.',
    cover: { bg: '#F2C14E', fg: '#1C1B19', accent: '#1C1B19', pattern: 'sun' },
  },
  {
    isbn: '978-8575227244',
    title: 'Refatoração',
    subtitle: 'Aperfeiçoando o design de códigos existentes',
    author: 'Martin Fowler',
    year: 2019,
    category: 'Código',
    price: 149.9,
    pages: 456,
    blurb:
      'Um catálogo de refatorações com motivação, mecânica e exemplos. Mostra como melhorar a estrutura do código sem alterar seu comportamento — com os testes como rede de segurança.',
    cover: { bg: '#2E2B28', fg: '#F3EFE6', accent: '#D9A441', pattern: 'arc' },
  },
  {
    isbn: '978-8573076103',
    title: 'Padrões de Projeto',
    subtitle: 'Soluções reutilizáveis',
    author: 'Gamma, Helm, Johnson & Vlissides',
    authorShort: 'Gang of Four',
    year: 1994,
    category: 'Arquitetura',
    price: 169.0,
    pages: 368,
    blurb:
      'Os 23 padrões da “Gang of Four”, de Strategy a Observer. Vocabulário comum para discutir design orientado a objetos há mais de três décadas.',
    cover: { bg: '#E9E2D0', fg: '#1C1B19', accent: '#276A4C', pattern: 'blocks' },
  },
  {
    isbn: '978-8577807000',
    title: 'O Programador Pragmático',
    subtitle: 'De aprendiz a mestre',
    author: 'Andrew Hunt & David Thomas',
    authorShort: 'Hunt & Thomas',
    year: 1999,
    category: 'Clássicos',
    price: 129.9,
    pages: 352,
    blurb:
      'DRY, janelas quebradas, balas traçantes e patos de borracha. Conselhos práticos sobre carreira e ofício que continuam atuais.',
    cover: { bg: '#5B3E7A', fg: '#F4EEF8', accent: '#C9A6E8', pattern: 'circles' },
  },
  {
    isbn: '978-8550800653',
    title: 'Domain-Driven Design',
    subtitle: 'Atacando as complexidades no coração do software',
    author: 'Eric Evans',
    year: 2003,
    category: 'Arquitetura',
    price: 199.0,
    pages: 528,
    blurb:
      'Linguagem ubíqua, contextos delimitados, agregados e entidades. Como alinhar o modelo de software ao domínio do negócio.',
    cover: { bg: '#276A4C', fg: '#F3EFE6', accent: '#9FD3B4', pattern: 'dots' },
  },
  {
    isbn: '978-8582601037',
    title: 'Entrega Contínua',
    subtitle: 'Como entregar software de forma rápida e confiável',
    author: 'Jez Humble & David Farley',
    authorShort: 'Humble & Farley',
    year: 2010,
    category: 'DevOps',
    price: 159.9,
    pages: 496,
    blurb:
      'O pipeline de implantação como espinha dorsal da entrega: build automatizado, testes em estágios e releases sem drama.',
    cover: { bg: '#0F4C5C', fg: '#EAF4F4', accent: '#5FB3B3', pattern: 'stripes' },
  },
  {
    isbn: '978-1942788331',
    title: 'Accelerate',
    subtitle: 'The Science of Lean Software and DevOps',
    author: 'Nicole Forsgren, Jez Humble & Gene Kim',
    authorShort: 'Forsgren, Humble & Kim',
    year: 2018,
    category: 'DevOps',
    price: 99.9,
    pages: 288,
    blurb:
      'Quatro anos de pesquisa resumidos em quatro métricas: frequência de deploy, lead time, tempo de recuperação e taxa de falha em mudanças.',
    cover: { bg: '#E4572E', fg: '#FFF6EE', accent: '#FFD166', pattern: 'arc' },
  },
  {
    isbn: '978-8550802732',
    title: 'O Mítico Homem-Mês',
    subtitle: 'Ensaios sobre engenharia de software',
    author: 'Frederick P. Brooks Jr.',
    authorShort: 'Fred Brooks',
    year: 1975,
    category: 'Clássicos',
    price: 89.9,
    pages: 336,
    blurb:
      '“Adicionar pessoas a um projeto atrasado o atrasa ainda mais.” Ensaios de quem gerenciou o OS/360 e que seguem descrevendo projetos de hoje.',
    cover: { bg: '#3B3A36', fg: '#EFE7D6', accent: '#B8432F', pattern: 'circles' },
  },
  {
    isbn: '978-8582600320',
    title: 'Trabalho Eficaz com Código Legado',
    author: 'Michael Feathers',
    year: 2004,
    category: 'Testes',
    price: 139.9,
    pages: 464,
    blurb:
      'Código legado é código sem testes. Técnicas para quebrar dependências, criar pontos de costura e colocar sistemas antigos sob teste antes de mudá-los.',
    cover: { bg: '#8A9A5B', fg: '#1C1B19', accent: '#F3EFE6', pattern: 'grid' },
  },
  {
    isbn: '978-8550804606',
    title: 'Arquitetura Limpa',
    subtitle: 'O guia do artesão para estrutura e design de software',
    author: 'Robert C. Martin',
    year: 2017,
    category: 'Arquitetura',
    price: 109.9,
    pages: 432,
    blurb:
      'Princípios SOLID aplicados a componentes e camadas. A regra da dependência e por que regras de negócio não deveriam saber nada sobre frameworks.',
    cover: { bg: '#11151C', fg: '#E8EEF5', accent: '#4F8CFF', pattern: 'blocks' },
  },
]

export const categories = ['Todos', ...new Set(books.map((b) => b.category))]

export const bookByIsbn = Object.fromEntries(books.map((b) => [b.isbn, b]))

export const FREE_SHIPPING = 250

export const formatPrice = (value) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
