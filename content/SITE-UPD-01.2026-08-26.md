# Eos Loan · Correções para o site · Form SITE-UPD-01 · v1.1 · 26-ago-2026

> Ordem de serviço para quem edita o site (`eos-loan-site`) e a `Eos_Site_Product_Benefits_Matrix_v2.md`. Instruções em português; **toda copy nova está em inglês, pronta para colar**. As decisões vêm do comitê de crédito e estão nos documentos de programa, **um por avenida**: `PROG-RE-01 v2026-08` (real estate: Parte A business purpose, Parte B consumer), `PROG-UT-01 v2026-08.2`, `PROG-MF-01 v2026-08.2` e `Eos_Product_Terms_Config_v3.md`. Quando o site e um documento de programa divergirem, **o documento vence**.
>
> Duas origens misturadas aqui, marcadas em cada item: **[RTL]** são correções pendentes desde 25-ago que nunca chegaram ao site, e **[rev 2]** são as decisões novas de 26-ago.

---

## 1. As sete mudanças, em uma frase cada

1. **Teto de 72 meses em todo crédito consumer** (rev 2). Nenhum prazo consumer publicado, cotado ou simulado no site pode passar de 72 meses, em nenhuma avenida.
2. **Solar + bateria deixa de ser troca de conta de luz** (rev 2). Vira compra de ativo, ticket menor, e a **bateria residencial passa a ser o carro-chefe de energia no consumer**.
3. **HVAC é crédito consumer da avenida real estate**, não de energia (rev 2). A página pode continuar cross-listada como marketing, mas nunca com linguagem de energia.
4. **Prazos de Fix & Keep e Fix & Hold estão errados no site** (RTL). Os dois são 36–60 meses.
5. **Nada de taxa discricionária em lugar nenhum** (rev 2). A tabela por risco é o preço publicado, e a taxa é confirmada depois da análise de crédito.
6. **O formulário precisa capturar quem iniciou o contato** (rev 2). É isso que decide a janela de cancelamento, não o produto.
7. **O site tem exatamente 3 avenidas** (26-ago, tarde): real estate, utilities, mobility & fleet. Nenhuma página, menu, breadcrumb ou filtro cria uma quarta categoria; "home improvement" não existe como categoria em lugar nenhum. Roofing, HVAC, outdoor, envelope e interior são programas consumer **dentro de real estate**.

---

## 2. Prazos: a tabela que manda

Esta é a fonte. Vale para heading de página, bullets, dropdown do "Check my rate", calculadora, mockups "Illustrative terms" e qualquer peça de campanha.

| Produto | Site diz hoje | Passa a valer | Origem |
|---|---|---|---|
| Fix & Flip | ≤ 12 months | ≤ 12 months · sem mudança | n/a |
| Fix & Keep | **12–60 months** | **36–60 months** | [RTL] |
| Fix & Hold | **48–72 months** | **36–60 months** | [RTL] |
| Roofing | não publica prazo | 36–72 months | [rev 2] |
| Outdoor Living | não publica prazo | 36–72 months | [rev 2] |
| HVAC | não publica prazo | 24–72 months | [rev 2] |
| Building envelope (sem página) | n/a | 36–72 months | [rev 2] |
| Interior e geral (sem página) | n/a | 24–72 months | [rev 2] |
| Bateria residencial | não publica prazo | 60–72 months | [rev 2] |
| Solar + bateria | não publica prazo | 60–72 months | [rev 2] |
| Filtração de água | não publica prazo | 36–72 months | [rev 2] |
| Carregador EV (sem página) | n/a | 24–60 months | [rev 2] |
| Auto (dealer) | não publica prazo | 24–72 months | [rev 2] |
| Bateria e storage comercial | não publica prazo | 60–84 months · **é business-purpose, fora do teto consumer** | [rev 2] |
| Lease-to-own de caminhão | não publica prazo | 48 months · business-purpose | n/a |
| Invoice trading | não publica prazo | 30 a 120 dias por invoice · business-purpose | n/a |

**Regra que a engenharia precisa implementar:** o seletor de prazo em qualquer fluxo consumer nunca oferece opção acima de 72 meses, e o backend rejeita com o motivo `TERM_CAP` (está em `rules.term_cap_consumer` no config v2). Se hoje existe alguma simulação de 84, 120 ou 180 meses em página, vídeo ou peça, ela sai.

---

## 3. Correções por página

### 3.1 Fix & Keep e Fix & Hold · [RTL] · prioridade alta

O heading de Fix & Keep diz `12–60 months` e o de Fix & Hold diz `48–72 months`. Os dois viram **36–60 months**, em `/real-estate`, na matriz v2 e no **filme 02**, que precisa ser regravado com o número certo.

Trocar também o bullet do Fix & Hold que diz "financed over 48–72 months so the rent can carry the loan" por:

> A US rental that pays you every month, financed over 36–60 months so the rent can carry the loan.

E o de Fix & Keep, "Term sized to the strategy (12–60 months)":

> Term sized to the strategy (36–60 months), longer than a flip without locking you into a decade.

**Aposentar** os one-pagers e decks Investor Plus de junho que ainda circulam com os prazos antigos.

### 3.2 Solar · [rev 2] · a mudança mais delicada

O produto passa de 120–180 meses para 60–72. A parcela de um sistema de US$45.000 a 12,99% vai de cerca de US$672 por mês para cerca de US$903, o que fica acima da conta de luz residencial típica no Texas e na Flórida. **Logo, qualquer copy que sugira que o financiamento se paga com a economia da conta está proibida.** A copy atual já não faz claim de economia (bom), mas a moldura precisa mudar de "produza sua energia" para "seja dono do sistema".

Positioning line nova:

> Own the system that powers your house.

Bullets do cliente, substituindo os atuais:

> - Own the system on your roof outright, financed in fixed installments you see before you sign.
> - Start with the size that fits your budget, not the biggest array on the proposal.
> - Panels and system as collateral: secured credit priced on a real asset, without a lien on your whole life.
> - Add a battery in the same financed project, and the battery is what keeps the lights on when the grid goes down.
> - One decision at the installer's proposal: soft rate check, minutes to a decision, SSN or ITIN.

O bullet de canal **"With the residential tax credit gone, a clean monthly payment is the strongest close in the room, and we built it"** sai. No prazo novo ele deixa de ser verdade e vira promessa que o instalador não consegue cumprir. Substituir por:

> - Financing that closes the sale it can actually close: ownership, on a fixed payment, without a savings promise nobody can keep.

Manter o CTA em **Talk to us** (o produto está em `design`).

### 3.3 Bateria residencial · [rev 2] · promover a carro-chefe

Hoje bateria e storage comercial dividem um card com CTA "Talk to us". **Separar em dois.**

A bateria residencial está `live` no config, e pela regra de CTA do site (22-ago) produto `live` ganha o fluxo de cotação. Então:

- **Bateria residencial · Consumer credit · 60–72 months · CTA: Check my rate**
- **Storage e infraestrutura comercial · Business-purpose · 60–84 months · CTA: Talk to us**

A bateria residencial passa a ser o produto de energia em destaque na avenida, à frente do solar, na navegação e em qualquer carrossel de produtos. Positioning line sugerida:

> Power that stays on, financed by the month.

(a atual serve; o que muda é a posição na página, não a frase).

### 3.4 HVAC · [rev 2]

O crédito de HVAC é consumer da avenida real estate, e não de energia. Consequências para o site:

- A página pode continuar cross-listada na página de energia, como decisão de marketing. **Mas a casa do HVAC é a avenida real estate**, ao lado de roofing e outdoor living: é ali que ele aparece na navegação principal, no relatório e no pipeline.
- **Nunca** usar linguagem de energia na página de HVAC: nada de VPP, telemetria, dispatch, redução por colateral de energia ou economia na conta de luz. Isso vale para bomba de calor também.
- A única exceção é o caso de eletrificação empacotada, quando o HVAC é financiado no mesmo contrato de uma bateria ou de um solar. Aí a página é a de energia, não a de HVAC.
- A copy atual da página de HVAC está boa e não precisa mudar. Só entra o prazo, 24–72 months, e o lugar certo na navegação: real estate.

### 3.5 Roofing, Outdoor Living, envelope e interior · [rev 2]

Prazos entram como na tabela da seção 2. Roofing e Outdoor Living continuam em **Talk to us** com o gate de campanha do DOC-REV-01 (Holder Rule e TCPA nos contratos do canal), que segue aberto. Envelope e interior ainda não têm página; quando tiverem, nascem em Talk to us.

### 3.6 Auto e invoice trading · [rev 2]

Auto consumer confirma 24–72 meses, o que já estava certo, e continua em Talk to us enquanto não existe fluxo de aplicação. Invoice trading e lease-to-own não mudam: são business-purpose, ficam fora do teto de prazo consumer e o preço é negociado por operação.

---

## 4. Regras de conteúdo que passam a valer

**Sobre preço.** A tabela de taxa por risco é o preço publicado. Em nenhum lugar do site, de material de parceiro ou de script de vendas pode aparecer que a Eos "pode praticar taxa diferente a seu critério". Onde o site mostrar taxa, vale esta frase:

> Rates shown are the rates we lend at. Your rate depends on your credit tier and the term you choose, and it is confirmed after the credit decision. This is not an offer of credit.

Continua valendo o que já estava: nada de promessa de APR, nada de "guaranteed approval", soft pull só na checagem de taxa, exemplo em dólar só em mockup marcado "Illustrative terms". E a regra de Reg Z: se a peça publicar prazo, valor de parcela, entrada ou número de parcelas, ela precisa carregar a disclosure completa junto.

**Sobre economia e impostos.** Sem claim de economia em HVAC, solar ou bateria, em nenhuma variação. O crédito residencial de energia (§25D) acabou em dezembro de 2025 e não se menciona.

**Sobre licença.** Segue a fórmula de sempre, em duas orações separadas: licença é Texas, footprint é onde operamos. O rodapé e as meta tags **ainda dizem "Licensed lender · NMLS #2744537 · Texas & Florida"** e continuam errados desde 22-ago. Trocar por:

> Eos Loan · Licensed lender in Texas · NMLS #2744537

com a frase de alcance separada, quando fizer sentido na página:

> Serving Texas and Florida today, and able to operate in additional states within each state's rules for the product.

---

## 5. Mudança de fluxo: quem iniciou o contato

Esta é a única mudança de produto, e ela é de compliance.

A janela de cancelamento de 3 dias do Texas (Bus. & Com. Code Ch. 601) **não depende do produto**: o §601.002(a) só alcança a venda que o vendedor solicitou pessoalmente fora do seu estabelecimento. Ou seja, um cliente que ligou porque o ar-condicionado quebrou está fora dela; um cliente que abriu a porta para um vendedor de solar está dentro.

O que precisa ser feito:

- A aplicação captura um campo novo, `contact_initiated_by`, com três valores: `consumer`, `merchant`, `unknown`.
- Enquanto o campo não existir, o sistema assume `merchant` e **concede a janela**. Conceder a mais nunca é o erro caro.
- As janelas que **não** dependem disso continuam sempre valendo: solar no Texas (Ch. 1806, 5 dias úteis), Flórida §501.021 (3 dias) e Flórida Ch. 520 Part II (3 dias úteis) para sistema que **gera ou armazena** eletricidade acima de 1 kW ou 1 kWh. Essa última **não alcança HVAC**, porque bomba de calor consome energia, não gera.
- Nada de trabalho e nada de desembolso antes de toda janela aplicável fechar.

O detalhamento está em `rules.cancellation_windows` no `Eos_Product_Terms_Config_v3.md`.

---

## 6. CTA por produto: a lista definitiva

Regra: `status: live` ganha "Check my rate"; `pilot`, `design`, `termsheet` e `roadmap` ganham "Talk to us". Produto que não está nesta lista não existe no site.

| Produto | Status | CTA | Observação |
|---|---|---|---|
| Fix & Flip | live | Check my rate | |
| Fix & Keep | live | Check my rate | corrigir prazo |
| Fix & Hold | live | Check my rate | corrigir prazo |
| Bateria residencial | live | **Check my rate** | **hoje está em Talk to us: corrigir** |
| Filtração de água | live | Check my rate | |
| Storage e EV infra comercial | live | Talk to us | business-purpose |
| Invoice trading | live | Talk to us | business-purpose |
| Roofing | design | Talk to us | gate DOC-REV-01 |
| Outdoor Living | design | Talk to us | gate DOC-REV-01 |
| HVAC | design | Talk to us | |
| Solar + bateria | design | Talk to us | copy nova, seção 3.2 |
| Auto | design | Talk to us | sem fluxo de aplicação |
| Carregador EV, gerador, envelope, interior | design | Talk to us | sem página hoje |
| Lease-to-own de caminhão, battery-fleet | termsheet | Talk to us | |
| Linha de leilão | pilot | Talk to us | depende do KYB da R2 |

---

## 7. O que continua aberto (não é desta rodada, mas é do site)

1. **`/legal` ainda diz marketplace.** Precisa ser reconciliado para direct lender. Pendência antiga da trilha LEG.
2. **Rodapé e meta tags** com "Texas & Florida" como licença, item 6 das pendências da matriz v2.
3. **DOC-REV-01** (Holder Rule e TCPA nos contratos do canal) executado antes de qualquer campanha ativa de roofing, outdoor ou auto.
4. **Depoimentos** sem consentimento e disclaimer de resultados típicos; e "Eletricfish" escrito errado.
5. **Ícones dos apps** ainda na identidade antiga nas duas lojas, congelados até a aprovação do Eos Cash.

---

## 8. Checklist de execução

- [ ] Corrigir Fix & Keep e Fix & Hold para 36–60 em `/real-estate`, na matriz v2 e no filme 02
- [ ] Aposentar one-pagers e decks Investor Plus de junho
- [ ] Aplicar a tabela de prazos da seção 2 em toda página, dropdown, calculadora e mockup
- [ ] Travar o seletor de prazo consumer em 72 meses e implementar a rejeição `TERM_CAP`
- [ ] Reescrever a página de solar com a copy da seção 3.2
- [ ] Separar bateria residencial de storage comercial e mover a bateria para CTA "Check my rate"
- [ ] Promover a bateria residencial a produto de destaque da avenida de energia
- [ ] Ancorar HVAC na avenida real estate da navegação (cross-list em energia é só marketing) e limpar qualquer linguagem de energia da página
- [ ] Publicar a frase de preço da seção 4 onde houver taxa
- [ ] Varrer o site atrás de claim de economia e de menção a crédito de imposto
- [ ] Corrigir rodapé e meta tags para a fórmula licença-TX
- [ ] Especificar e implementar o campo `contact_initiated_by`, com default `merchant`
- [ ] Revisão final contra `Eos_Product_Terms_Config_v3.md` antes de publicar
- [ ] Conferir que a navegação inteira mostra exatamente 3 avenidas e nenhuma categoria extra

---

## 9. Change log

| Versão | Data | Mudança |
|---|---|---|
| 1.1 | 2026-08-26 | Taxonomia: 3 avenidas em toda a navegação; HVAC ancorado em real estate com cross-list de marketing; referências movidas para PROG-RE-01 e config v3. |
| 1.0 | 2026-08-26 | Primeira emissão. Consolida as correções pendentes do PROG-RTL-01 v2026-08.2 (prazos de Keep e Hold) e as decisões de 26-ago-2026 dos PROG-*-01 v2026-08.1 e do config v2: teto de 72 meses no consumer, reposicionamento de solar + bateria, bateria residencial como carro-chefe, avenida do HVAC, política de preço sem discricionariedade e captura de `contact_initiated_by`. |

**Fontes normativas:** `PROG-RE-01 v2026-08` (§§A1–A4, A8, B1–B5, C3) · `PROG-UT-01 v2026-08.2` §§1, 2, 3, 10 · `PROG-MF-01 v2026-08.2` §§1, 9 · `Eos_Product_Terms_Config_v3.md` §4 (`term_cap_consumer`, `cancellation_windows`, `price_exception`) e §5 · `Eos_Site_Product_Benefits_Matrix_v2.md` (22-ago) · Tex. Bus. & Com. Code §601.002 · Fla. Stat. §520.20.
