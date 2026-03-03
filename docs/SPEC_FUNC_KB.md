# SPEC_FUNC_KB — Knowledge Base WXCode

## Visao Geral

O WXCode nao trata legado como "codigo velho": ele transforma o legado em **ativo estrategico estruturado**.
A Knowledge Base funciona como um "gemeo cognitivo" do sistema original, permitindo que agentes de IA convertam com contexto real de negocio, nao apenas com traducao sintatica.

---

## 1) Importacao inteligente de projetos (WinDev/WebDev/WinDev Mobile)

### Descricao mercadologica
A entrada no WXCode foi desenhada para ambientes reais de legado: projetos grandes, heterogeneos e com documentacao incompleta.

### Funcoes
- Importacao streaming de `.wwp/.wdp/.wpp` para alto volume.
- Wizard de importacao com sessao rastreavel, progresso em tempo real e retomada (`resume`) apos falhas.
- Upload de ZIP do projeto, PDFs, SQL de procedures e SQL DDL de schema.
- Criacao de workspace isolado por projeto desde o inicio.

### Beneficios
- Reduz risco operacional na fase mais critica (onboarding do legado).
- Evita retrabalho com sessoes retomaveis.
- Garante base de dados consistente para todas as etapas seguintes.

### Como ajuda o agent coder
- Entrega uma base ja normalizada e pronta para consulta contextual.
- Diminui "alucinacao" por falta de fonte confiavel.
- Permite retomada de conversao sem perder estado tecnico.

---

## 2) Enrich de elementos (nucleo de enriquecimento estrutural)

### Descricao mercadologica
O enrich e o diferencial de profundidade: ele nao so le arquivos, ele reconstrui a logica operacional da UI e do codigo.

### Funcoes
- Combina fonte WinDev (`.wwh/.wdw/...`) + PDF + dependencias.
- Extrai controles, hierarquia visual, eventos, propriedades e data binding.
- Identifica procedures locais e dependencias tecnicas/funcionais.
- Enriquece queries com SQL, parametros e tabelas usadas.

### Beneficios
- Eleva qualidade da conversao de UI e logica de tela.
- Gera contexto pronto para automacao de decisao do agente.
- Evita perda de comportamento implicito comum em sistemas legados.

### Como ajuda o agent coder
- Da ao agente visao de "como funciona de verdade" cada tela.
- Melhora precisao ao converter formularios, tabelas, eventos e fluxo de dados.
- Permite priorizar esforcos em elementos com maior complexidade.

---

## 3) Parsing especializado por dominio (procedures, classes, schema, queries, estado global)

### Descricao mercadologica
O WXCode trata cada artefato legado com parser dedicado, preservando semantica de negocio e contexto tecnico.

### Funcoes
- Parse de procedures (`.wdg`), classes (`.wdc`), schema (`.xdd` e SQL DDL), queries e SQL procedures.
- Extracao de conexoes de banco legadas.
- Extracao de estado global (variaveis `GLOBAL`, blocos de inicializacao).
- Mapeamento WLanguage stack-agnostic para uso posterior por stack alvo.

### Beneficios
- Preservacao fiel da logica de negocio.
- Menor risco de regressao funcional.
- Base solida para geracao de codigo e contratos tecnicos.

### Como ajuda o agent coder
- Fornece contexto funcional e estrutural detalhado por componente.
- Da suporte a migracao segura de integracoes, dados e regras transversais.
- Melhora consistencia entre backend, dominio e camada de interface.

---

## 4) Grafo de dependencias (grafos) com inteligencia de impacto

### Descricao mercadologica
O WXCode transforma o legado em um mapa navegavel de dependencias para migracao orientada a risco.

### Funcoes
- Construcao de grafo via NetworkX com ciclos e ordenacao topologica.
- Sincronizacao opcional com Neo4j para analise avancada.
- Operacoes de impacto, caminho, hubs, dead code, ciclos e arestas tipadas.
- Modos de leitura: dependencias, fluxo de dados e schema.

### Beneficios
- Conversao guiada por prioridade tecnica real.
- Reducao de incidentes por alteracoes cegas.
- Melhor previsibilidade de prazo e esforco.

### Como ajuda o agent coder
- Indica o que converter antes para nao quebrar dependencias.
- Ajuda a mensurar efeito cascata de cada mudanca.
- Permite planejamento incremental e seguro por milestone.

---

## 5) Comprehension Pipeline (entendimento semantico em camadas)

### Descricao mercadologica
A comprehension converte codigo legado em inteligencia acionavel: o sistema passa a "explicar-se".

### Funcoes
- Niveis de compreensao: procedure, elemento, modulo e sistema.
- Execucao com controle de custo, paralelismo, timeout e auto-resume.
- Processamento em ondas topologicas para respeitar dependencias.
- Persistencia de explicacoes para reuso continuo.

### Beneficios
- Acelera onboarding tecnico de times e agentes.
- Torna decisoes de conversao auditaveis e justificaveis.
- Reduz dependencia de conhecimento tribal.

### Como ajuda o agent coder
- Da ao agente interpretacao funcional do que converter.
- Melhora qualidade de prompts e decisoes de implementacao.
- Diminui esforco de engenharia reversa manual.

---

## 6) Extracao e gestao de Business Rules

### Descricao mercadologica
O WXCode tira as regras de negocio de dentro do codigo e as transforma em ativos governaveis.

### Funcoes
- Extracao automatica de regras por procedure com categoria e confianca.
- Normalizacao, deduplicacao semantica e rastreabilidade de origem.
- Ativacao/desativacao de regras (`is_active`) e operacao em lote.
- Integracao com milestone/rule verification/test coverage.

### Beneficios
- Preserva o que mais importa no legado: comportamento de negocio.
- Facilita validacao de equivalencia funcional.
- Cria ponte direta entre codigo convertido e criterios de aceite.

### Como ajuda o agent coder
- Fornece checklist objetivo de regras a preservar.
- Ajuda o agente a priorizar testes e validacoes por impacto de negocio.
- Reduz risco de "funciona tecnicamente, mas quebrou a regra".

---

## 7) Diagram Intelligence (ER, sequencia, fluxo, decisao, lifecycle/statechart)

### Descricao mercadologica
O WXCode converte complexidade em visualizacao executiva e tecnica, com geracao inteligente de diagramas.

### Funcoes
- Deteccao automatica de oportunidades de diagrama.
- Geracao de Mermaid/Markdown com cache e validacao em multiplas camadas.
- Tipos suportados: `ER`, `sequence`, `flowchart`, `decision_table`, `statechart/entity lifecycle`.
- Scoring de prioridade e limites de complexidade para legibilidade.

### Beneficios
- Comunicacao clara com TI, negocio e gestao.
- Acelera revisao arquitetural e tomada de decisao.
- Gera ativos reutilizaveis para documentacao viva.

### Como ajuda o agent coder
- Da leitura rapida de fluxos complexos antes de codar.
- Reduz erro de interpretacao de processo.
- Facilita confirmacao de arquitetura alvo durante a migracao.

---

## 8) Busca semantica e similaridade (embeddings + hybrid search)

### Descricao mercadologica
A Knowledge Base deixa de ser so repositorio: vira mecanismo de descoberta inteligente.

### Funcoes
- Busca `vector`, `fulltext` e `hybrid`.
- Similaridade por embedding entre elementos ja convertidos.
- Enriquecimento de resultado com contexto de grafo.
- Suporte a busca por conceito, nao apenas por nome exato.

### Beneficios
- Reaproveitamento de padroes de conversao.
- Maior consistencia entre partes do sistema migrado.
- Reducao de tempo em tarefas repetitivas.

### Como ajuda o agent coder
- Encontra rapidamente "casos parecidos" para replicar solucao.
- Padroniza decisoes tecnicas entre modulos.
- Aumenta velocidade sem perder qualidade.

---

## 9) MCP Server para agent coder (camada de entrega da inteligencia)

### Descricao mercadologica
O MCP server e a ponte produtiva entre a Knowledge Base e o agente de conversao.

### Funcoes
- Exposicao da KB via MCP com **61 tools** organizadas por dominio.
- Transportes: `STDIO` (local) e `HTTP/SSE` (com API key).
- Ferramentas para elementos, controles, procedures, schema, grafo, conversao, rules, diagramas, busca semantica, PDF, stack conventions, UI context e health.
- Degradacao graciosa quando Neo4j nao esta disponivel.

### Beneficios
- "Single source of truth" consumivel por IA em tempo real.
- Menor acoplamento entre processo de migracao e interface.
- Escalabilidade de automacoes por agentes especializados.

### Como ajuda o agent coder
- Permite decisoes orientadas por dados reais do legado a cada passo.
- Reduz prompt manual e dependencia de contexto estatico.
- Habilita execucao continua com rastreabilidade.

---

## 10) UI Context + Governanca de conversao (milestones, cobertura de regras, testes)

### Descricao mercadologica
Alem de converter, o WXCode governa a transformacao com visibilidade operacional.

### Funcoes
- MCP tools para ler estado da UI do usuario em tempo real (`get_ui_state`, `get_ui_data`).
- Milestones com contexto leve, tracking e checkpoints.
- Verificacao de regras por milestone, atualizacao em lote e sumarios de cobertura.
- Registro de resultados de testes por fase e cobertura de regras de negocio.

### Beneficios
- Conversao auditavel, mensuravel e controlada.
- Alinhamento entre execucao tecnica e valor de negocio.
- Melhor previsibilidade de entrega para operacoes e lideranca.

### Como ajuda o agent coder
- Mantem o agente sincronizado com o que o usuario esta vendo/avaliando.
- Transforma "conversao" em pipeline de entrega com qualidade comprovavel.
- Fecha o ciclo: entender, converter, validar e evidenciar.

---

## Mensagem de posicionamento (resumo executivo)

O WXCode Knowledge Base e uma plataforma AI-first que transforma sistemas WinDev/WebDev em ativos estruturados de negocio e engenharia.
Sua forca esta em unir ingestao robusta, enriquecimento profundo, compreensao semantica, inteligencia de grafos e entrega via MCP para agent coder, criando uma migracao de legado **mais rapida, mais segura e mais governavel**.
