# Interface Design • Fatality Web Platform

Projeto prático desenvolvido como entrega final da disciplina de **Projeto de Interface**, integrante da graduação em Análise e Desenvolvimento de Sistemas (ADS) no **Centro Universitário IESB Oeste**.

A aplicação consiste em uma interface web completa e responsiva orientada a uma plataforma fictícia de software e tecnologia para jogos competitivos (Counter-Strike 2). O projeto encontra-se implantado e acessível na infraestrutura laboratorial do domínio [lab-1.engine.lat](https://lab-1.engine.lat/).

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                      MAPA ESTRUTURAL DE PÁGINAS • FATALITY                  │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                [ index.html ]
                        (Landing Page • Hero Carousel)
                                       │
         +-------------------+---------+---------+-------------------+
         │                   │                   │                   │
         ▼                   ▼                   ▼                   ▼
 [ pages/produtos ]  [ pages/galeria ]   [ pages/contato ]   [ pages/sobre ]
 (Planos & Preços)   (Mídia Adaptativa)  (Atendimento B2C)   (Apresentação)
```

## Contexto e Objetivos Pedagógicos

A disciplina demandou a concepção e implementação de uma interface visualmente coerente, centrada no usuário e aderente a padrões modernos de design e usabilidade. O escopo contemplou:

1. **Hierarquia Visual e Tipografia:** Integração coordenada entre fontes geométricas e monoespaçadas (`Rajdhani`, `Space Grotesk` e `JetBrains Mono`), assegurando legibilidade em diferentes níveis hierárquicos e densidades de texto.
2. **Design Temático e Paleta Cromática:** Construção de um tema escuro de alto contraste (`#0a0a0a`), aplicando acentos visuais estratégicos para orientação do foco visual e condução do fluxo de navegação.
3. **Responsividade Multiplataforma:** Estruturação de layouts adaptativos utilizando a biblioteca Bootstrap 5 com sobreposição de estilos personalizados em CSS3, garantindo adequação desde telas compactas até monitores widescreen.
4. **Interatividade com JavaScript Vanilla:** Implementação de animações acionadas por rolagem (`IntersectionObserver`), alternância de estados em acordeões da equipe, carrossel dinâmico e controle de navegação sem dependências pesadas de frameworks externos.

## Registros Visuais da Aplicação

### Página Principal e Apresentação do Produto
![Página Inicial](docs/screenshots/01-home-fatality.png?v=3)

### Catálogo de Planos e Precificação
![Tabela de Produtos](docs/screenshots/02-produtos.png?v=2)

### Galeria Multimídia de Demonstração
![Galeria de Mídia](docs/screenshots/03-galeria.png?v=2)

### Formulário de Atendimento e Suporte
![Formulário de Contato](docs/screenshots/04-contato.png?v=2)

### Apresentação da Equipe e Estrutura Institucional
![Sobre Nós e Equipe](docs/screenshots/05-sobre.png?v=3)

## Organização do Repositório

* `index.html`: Página inicial com banner institucional e pontos de conversão.
* `pages/`: Módulos de conteúdo complementares (`produtos.html`, `galeria.html`, `contato.html`, `sobre.html`).
* `css/`: Folhas de estilo customizadas com regras de layout, tipografia e temas.
* `js/`: Scripts utilitários para transições de tela e comportamentos visuais.
* `img/`: Recursos gráficos, marcas e imagens ilustrativas do projeto.
* `vendor/`: Dependências locais de Bootstrap e FontAwesome para operação autônoma.
* `docs/screenshots/`: Registros gráficos capturados da implantação em produção.

## Execução Local

Tratando-se de uma aplicação estática pura, a execução dispensa compiladores ou gerenciadores de pacotes:

```bash
# Opção 1: Servidor HTTP embutido com Python
python -m http.server 8000

# Opção 2: Servidor estático com Node.js
npx serve .
```

O ambiente estará acessível localmente em `http://localhost:8000`.

## Referência Operacional

* **Ambiente em Produção:** [https://lab-1.engine.lat/](https://lab-1.engine.lat/)
* **Instituição:** Centro Universitário IESB Oeste
* **Disciplina:** Projeto de Interface (ADS)
