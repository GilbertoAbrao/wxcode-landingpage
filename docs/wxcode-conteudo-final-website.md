# Conteúdo do Website WX Code — Briefing Final

## Fontes analisadas
- **6 docs de negócio:** precificação, produtividade, conteúdo-website, qualidade-regras, desafios-llm, independência-conhecimento
- **2 SPECs técnicos:** SPEC_FUNC_KB (10 capacidades da Knowledge Base), SPEC_FUNC_OUTPUT_PROJECTS_BOTFY_CODER (8 capacidades de Output + 8 do Botfy Coder)

---

## SEÇÃO 1 — Hero

**Headline:** "WX Code: O Passaporte Definitivo para a Modernização do seu Legado WinDev"

**Sub:** "Um desenvolvedor. 42x mais produtivo. Transforme 3 anos de projeto em 6 meses."

**CTA:** "Solicite uma Demonstração Personalizada"

**Elementos visuais:** Animação do fluxo — Código WinDev → KB Inteligente → Código Moderno

> Extraído de: `wxcode-conteudo-website.md` (hero section) + `wxcode-produtividade.md` (números 42x, 3 anos→6 meses)

---

## SEÇÃO 2 — A Dor do Legado WinDev

Texto curto e empático sobre os problemas que o público-alvo vive:

- **Custo exorbitante de manutenção** — equipes grandes mantendo código que ninguém domina completamente
- **Escassez de talentos WinDev** — cada vez mais difícil encontrar desenvolvedores
- **Aprisionamento tecnológico** — preso a um ecossistema sem evolução
- **Falta de documentação** — conhecimento existe só na cabeça de poucos especialistas
- **Projetos de migração que falham** — estouros de orçamento, prazo, ou abandono total

> Extraído de: `wxcode-conteudo-website.md` (seção "A Dor do Legado") + `wxcode-produtividade.md` (mitigação de riscos) + `wxcode-independencia-conhecimento.md` (dependência de especialistas)

---

## SEÇÃO 3 — Como Funciona (Pipeline em 4 passos)

Infográfico visual mostrando o fluxo completo:

### Passo 1: Importação Inteligente
- 4 artefatos de entrada: ZIP do código planificado, PDF de documentação, SQL DDL de schema, Stored Procedures
- Wizard com sessão rastreável, progresso em tempo real e retomada após falhas
- Workspace isolado por projeto desde o início

> Fonte: `SPEC_FUNC_KB.md` seção 1 + `wxcode-conteudo-website.md` seção 2.1

### Passo 2: Construção da Base de Conhecimento (KB)
- **Parsing especializado** por domínio — procedures, classes, schema, queries, estado global
- **Grafo de dependências** com ordenação topológica, análise de impacto, detecção de ciclos e dead code
- **Compreensão semântica** em camadas — procedure, elemento, módulo e sistema inteiro
- **Extração de regras de negócio** com categorização, confiança, deduplicação semântica e rastreabilidade
- **Diagramas inteligentes** — ER, sequência, flowchart, decision table, statechart (Mermaid)
- **Busca semântica** — vector, fulltext e hybrid search para descoberta e reaproveitamento de padrões
- **Enriquecimento de UI** — extração de detalhes visuais do PDF (controles, hierarquia, eventos, data binding)

> Fonte: `SPEC_FUNC_KB.md` seções 2-8 + `wxcode-qualidade-regras-negocio.md` pontos 1-3 + `wxcode-independencia-conhecimento.md` pontos 1-3

### Passo 3: Geração de Código Moderno
- **Multi-stack** — FastAPI + Jinja2, SPA, Full-stack e outras
- **3 opções de UI:** Pixel Perfect (fiel ao original), Legado Modernizado (atualizado), Fresh UI (design novo via referência externa)
- **Agente de codificação orientado por contexto** — usa código original + regras de negócio + diagramas + KB via 61 tools MCP
- **Agentes especializados por papel** — análise, planejamento, execução, verificação
- **Padrões e boas práticas** — centralização de design, sem inline styles, código limpo e manutenível

> Fonte: `SPEC_FUNC_OUTPUT_PROJECTS_BOTFY_CODER.md` partes A e B + `wxcode-conteudo-website.md` seção 2.3 + `wxcode-qualidade-regras-negocio.md` pontos 4 e 8

### Passo 4: Qualidade Assegurada
- **Testes unitários massivos** — milhares gerados automaticamente (ex: 2.000+ para 4 páginas)
- **Validação determinística de regras de negócio** — testes embarcados na pipeline CI/CD
- **Verificação pós-conversão por milestone** — comparação código vs. requisitos, identificação de gaps
- **Governança de regras** — cobertura rastreável, histórico de verificações, evidências para auditoria
- **Live View** — visualização imediata do resultado para validação com stakeholders

> Fonte: `wxcode-qualidade-regras-negocio.md` pontos 5-7 + `SPEC_FUNC_KB.md` seção 10 + `SPEC_FUNC_OUTPUT_PROJECTS_BOTFY_CODER.md` seções A.6 e A.7

---

## SEÇÃO 4 — Produtividade & ROI

A seção mais poderosa comercialmente. Números concretos:

| | Tradicional | Com WX Code |
|---|---|---|
| **Equipe** | 7 desenvolvedores | 1 desenvolvedor |
| **Prazo** | 3 anos | 6 meses |
| **Custo** | R$ 3.780.000 | R$ 90.000 |
| **Produtividade** | 1x | **42x** |

- Posicionamento comercial conservador: **10x** (a ferramenta entrega muito mais)
- **Curva de produtividade crescente** — cada tela convertida acelera a próxima (metodologia bottom-up, dependências resolvidas enriquecem a KB)

> Fonte: `wxcode-produtividade.md` seção 1 + `wxcode-precificacao.md` seção 1

---

## SEÇÃO 5 — Valor Estratégico (Benefícios Intangíveis)

### Independência de Conhecimento Humano
- Extração automatizada de regras de negócio direto do código
- Abstração para camada de regra de negócio — interaja sem conhecer o código
- Agente RAG para consultar a KB — qualquer pessoa tira dúvidas
- Elimina dependência dos "heróis tecnológicos"

> Fonte: `wxcode-independencia-conhecimento.md` (5 etapas completas)

### Ativo de Conhecimento Vivo
- A KB documenta um legado que nunca teve documentação
- Regras de negócio, workflows, diagramas, notas de conversão
- Serve para futuras evoluções, manutenção, treinamento e onboarding

> Fonte: `SPEC_FUNC_KB.md` seções 5-7 + `wxcode-produtividade.md` seção 2

### Redução de Riscos
- Projetos tradicionais estouram orçamento e prazo ou falham completamente
- WX Code: testes determinísticos + verificação por milestone + governança auditável
- Decisão consciente sobre débitos técnicos, não surpresas

> Fonte: `wxcode-qualidade-regras-negocio.md` pontos 5-6 + `wxcode-produtividade.md`

### Agilidade Tecnológica
- Liberdade de escolha de stack — sem aprisionamento
- Equipe focada em inovação, não manutenção de legado
- Atração e retenção de talentos com stacks modernas

> Fonte: `wxcode-produtividade.md` seção 2 (últimos 3 pontos)

---

## SEÇÃO 6 — Transparência Técnica (diferencial de credibilidade)

Seção que **nenhum concorrente tem** — mostrar honestidade sobre os desafios da IA:

- **O desafio:** LLMs são probabilísticos — podem gerar duplicidades e variações
- **Como resolvemos:** Deduplicação em camadas (determinística + semântica), engenharia de contexto via KB + MCP + 61 tools, ajuste fino de temperatura
- **Resultado:** Saída controlada, validada por testes determinísticos e verificação por milestone

> Fonte: `wxcode-desafios-llm.md` (7 desafios) + `wxcode-qualidade-regras-negocio.md` (8 mecanismos)

---

## SEÇÃO 7 — Plataforma, não Ferramenta

Posicionar o WX Code como **plataforma de transformação de legado**:

- **Output Projects** — fábrica de modernização por produto, ambientes gerenciáveis, milestones de negócio
- **Botfy Coder** — orquestrador com método estruturado, automação com governança, checkpoints de qualidade
- **Cockpit unificado** — observabilidade executiva, dashboards de progresso, comunicação clara para liderança
- **Operação contínua** — retomada após interrupções, replanejamento sem perder histórico, cadência sustentável

> Fonte: `SPEC_FUNC_OUTPUT_PROJECTS_BOTFY_CODER.md` (16 capacidades completas)

---

## SEÇÃO 8 — Investimento / Preços

Foco no valor gerado, não no custo:

- **Grandes empresas:** Precificação baseada no valor — projeto de R$ 3,78M oferecido por ~R$ 600K/ano (economia de R$ 3M+)
- **Teste piloto:** 1-3 meses para comprovar ROI antes de comprometer
- **KB como serviço:** Assinatura mensal pós-conversão para manutenção e suporte contínuo
- **SaaS futuro:** Menção a planos de assinatura para desenvolvedores e equipes menores
- **CTA:** "Fale com um especialista para análise de valor personalizada"

> Fonte: `wxcode-precificacao.md` seções 2.1-2.3

---

## SEÇÃO 9 — Cases de Sucesso (placeholder)

- Estrutura pronta para receber Infinity, Vero e futuros cases
- Formato "antes e depois" com métricas de produtividade e economia

---

## SEÇÃO 10 — Contato

- Formulário qualificado: Nome, E-mail, Empresa, Cargo, Desafio do Legado
- LinkedIn, e-mail, telefone

---

## Mapa de rastreabilidade: documento → seção do site

| Documento | Seções do site que alimenta |
|---|---|
| `wxcode-conteudo-website.md` | Hero, estrutura geral, tom e linguagem |
| `wxcode-produtividade.md` | Seções 4 (ROI) e 5 (valor estratégico) |
| `wxcode-precificacao.md` | Seção 8 (preços) e números da seção 4 |
| `wxcode-qualidade-regras-negocio.md` | Seção 3 passo 4 + seção 6 (transparência) |
| `wxcode-desafios-llm.md` | Seção 6 (transparência técnica) |
| `wxcode-independencia-conhecimento.md` | Seção 5 (independência de conhecimento) |
| `SPEC_FUNC_KB.md` | Seção 3 passos 1-2 (como funciona) |
| `SPEC_FUNC_OUTPUT_PROJECTS_BOTFY_CODER.md` | Seção 3 passo 3 + seção 7 (plataforma) |
