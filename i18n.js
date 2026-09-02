/* Eos Loan — runtime i18n (EN canonical in markup; PT-BR and ES layered on top).
 * English inline in the .dc.html files stays the source of truth. This script
 * translates rendered text nodes + a few attributes, keyed by the exact English
 * string (whitespace-normalized). A MutationObserver re-applies translations
 * after React re-renders. Language persists in localStorage("eos-lang").
 * Metas and <title> intentionally stay in English for now (EN-first SEO).
 */
(function () {
  "use strict";

  var LANGS = { en: "en", pt: "pt-BR", es: "es" };

  /* ------------------------------------------------------------------ */
  /* Dictionary: "English": ["Português (BR)", "Español"]                */
  /* ------------------------------------------------------------------ */
  var D = {
    /* ---------- nav / header / shared chrome ---------- */
    "Real estate": ["Imóveis", "Bienes raíces"],
    "Utilities": ["Utilities", "Utilities"],
    "Mobility & fleet": ["Mobilidade e frota", "Movilidad y flota"],
    "Channel": ["Canal", "Canal"],
    "Contact": ["Contato", "Contacto"],
    "Sign in": ["Entrar", "Iniciar sesión"],
    "Check your rate": ["Consulte sua taxa", "Consulta tu tasa"],
    "Check your rate.": ["Consulte sua taxa.", "Consulta tu tasa."],
    "Check my rate": ["Consultar minha taxa", "Consultar mi tasa"],
    "Check my rate →": ["Consultar minha taxa →", "Consultar mi tasa →"],
    "Home": ["Início", "Inicio"],
    "Avenues": ["Avenidas", "Avenidas"],
    "Explore": ["Explorar", "Explorar"],
    "Legal": ["Legal", "Legal"],
    "FAQ": ["FAQ", "FAQ"],
    "Language": ["Idioma", "Idioma"],
    "English": ["Inglês", "Inglés"],
    "← Back to site": ["← Voltar ao site", "← Volver al sitio"],
    "Talk to us": ["Fale conosco", "Hablemos"],
    "Talk to us →": ["Fale conosco →", "Hablemos →"],
    "Talk to our team": ["Fale com nossa equipe", "Hable con nuestro equipo"],
    "Talk to our team.": ["Fale com nossa equipe.", "Hable con nuestro equipo."],
    "Talk to our team →": ["Fale com nossa equipe →", "Hable con nuestro equipo →"],
    "Get in touch": ["Entrar em contato", "Ponerse en contacto"],
    "Frequently asked questions.": ["Perguntas frequentes.", "Preguntas frecuentes."],
    "Something else on your mind?": ["Ficou alguma dúvida?", "¿Tienes otra pregunta?"],
    "Or write to contact@eosloan.com": ["Ou escreva para contact@eosloan.com", "O escribe a contact@eosloan.com"],
    "Or write to support@eos-e.com": ["Ou escreva para support@eos-e.com", "O escribe a support@eos-e.com"],
    "Phone · WhatsApp": ["Telefone · WhatsApp", "Teléfono · WhatsApp"],
    "Email": ["E-mail", "Correo electrónico"],
    "Office": ["Escritório", "Oficina"],
    "Hours": ["Horário", "Horario"],
    "Mon to Fri, 8am to 6pm CST": ["Seg a sex, 8h às 18h (CST)", "Lun a vie, 8 a 18 h (CST)"],
    "Privacy & Legal": ["Privacidade e Legal", "Privacidad y Legal"],
    "Privacy Policy": ["Política de Privacidade", "Política de Privacidad"],
    "Terms of Use": ["Termos de Uso", "Términos de Uso"],
    "Licensed lender in Texas · NMLS #2744537": ["Credora licenciada no Texas · NMLS #2744537", "Prestamista con licencia en Texas · NMLS #2744537"],
    "Eos Loan · NMLS #2744537": ["Eos Loan · NMLS #2744537", "Eos Loan · NMLS #2744537"],
    "© 2026 ®Eos Loan. All rights reserved.": ["© 2026 ®Eos Loan. Todos os direitos reservados.", "© 2026 ®Eos Loan. Todos los derechos reservados."],
    "®Eos Loan NMLS #2744537. Click the link for the": ["®Eos Loan NMLS #2744537. Acesse o link da", "®Eos Loan NMLS #2744537. Visita el enlace de la"],
    "NMLS Consumer Access page": ["página NMLS Consumer Access", "página NMLS Consumer Access"],
    "NMLS Consumer Access": ["NMLS Consumer Access", "NMLS Consumer Access"],
    ". Eos Loan · Licensed lender in Texas · NMLS #2744537. Eos Loan is a DBA of Eos Solar Inc. Serving Texas and Florida today, and able to operate in additional states within each state's rules for the product. All financing subject to credit approval; amounts and terms vary by product and applicant and are shown for illustration only. Rates shown are the rates we lend at. Your rate depends on your credit tier and the term you choose, and it is confirmed after the credit decision. This is not an offer of credit. Checking your rate uses a soft credit inquiry and does not affect your credit score.":
      [". Eos Loan · Credora licenciada no Texas · NMLS #2744537. Eos Loan é um DBA da Eos Solar Inc. Atendemos hoje Texas e Flórida, com capacidade de operar em outros estados conforme as regras de cada estado para o produto. Todo financiamento está sujeito a aprovação de crédito; valores e prazos variam por produto e por perfil e são exibidos apenas para ilustração. As taxas exibidas são as taxas que praticamos. Sua taxa depende do seu perfil de crédito e do prazo escolhido, e é confirmada após a análise de crédito. Isto não é uma oferta de crédito. A consulta de taxa usa uma consulta suave de crédito e não afeta seu score.",
       ". Eos Loan · Prestamista con licencia en Texas · NMLS #2744537. Eos Loan es un DBA de Eos Solar Inc. Hoy atendemos Texas y Florida, con capacidad de operar en otros estados según las reglas de cada estado para el producto. Todo financiamiento está sujeto a aprobación de crédito; los montos y plazos varían por producto y solicitante y se muestran solo como ilustración. Las tasas mostradas son las tasas a las que prestamos. Tu tasa depende de tu perfil de crédito y del plazo que elijas, y se confirma después de la decisión de crédito. Esto no es una oferta de crédito. Consultar tu tasa usa una consulta blanda y no afecta tu puntaje."],
    "More approvals. More sales. More growth. Eos Loan turns your leads into customers with intelligent financing for essential projects.":
      ["Mais aprovações. Mais vendas. Mais crescimento. A Eos Loan transforma seus leads em clientes com financiamento inteligente para projetos essenciais.",
       "Más aprobaciones. Más ventas. Más crecimiento. Eos Loan convierte tus leads en clientes con financiamiento inteligente para proyectos esenciales."],
    "Accelerated by Ripple UDAX (UC Berkeley), Microsoft for Startups, Google Cloud for Startups, NVIDIA Inception, Greentown Labs, ANVC (Chicago Booth) and LBAN (Stanford GSB).": ["Acelerada por Ripple UDAX (UC Berkeley), Microsoft for Startups, Google Cloud for Startups, NVIDIA Inception, Greentown Labs, ANVC (Chicago Booth) e LBAN (Stanford GSB).", "Acelerada por Ripple UDAX (UC Berkeley), Microsoft for Startups, Google Cloud for Startups, NVIDIA Inception, Greentown Labs, ANVC (Chicago Booth) y LBAN (Stanford GSB)."],
    "Home backup & battery": ["Backup residencial e bateria", "Respaldo residencial y batería"],
    "Channel program": ["Programa de canal", "Programa de canal"],
    "Join the channel": ["Cadastre-se no canal", "Registrarse en el canal"],
    "Join the Eos channel": ["Seja canal da Eos", "Sé canal de Eos"],
    "Acceleration programs": ["Programas de aceleração", "Programas de aceleración"],
    "The programs that accelerated Eos.": ["Os programas que aceleraram a Eos.", "Los programas que aceleraron a Eos."],
    "Eos Cash": ["Eos Cash", "Eos Cash"],
    "Eos Cash: payment by QR code, with rewards.": ["Eos Cash: pagamento por QR code, com rewards.", "Eos Cash: pago por código QR, con recompensas."],
    "The customer scans a QR code and pays from the Eos app, at the counter or at the table.": ["O cliente escaneia um QR code e paga pelo app da Eos, no balcão ou na mesa.", "El cliente escanea un código QR y paga desde la app de Eos, en el mostrador o en la mesa."],
    "Rewards for the customer on every payment": ["Rewards para o cliente em cada pagamento", "Recompensas para el cliente en cada pago"],
    "Split payment for businesses": ["Split de pagamento para empresas", "Pago dividido (split) para empresas"],
    "Tips that reach the team instantly": ["Gorjetas que chegam à equipe na hora", "Propinas que llegan al equipo al instante"],
    "Lower acceptance cost than cards for the business": ["Custo de aceitação menor que o do cartão para a empresa", "Costo de aceptación menor que el de las tarjetas para el negocio"],
    "COMING SOON": ["EM BREVE", "PRÓXIMAMENTE"],
    "EOS PAY · QR PAYMENT AT PARTNER MERCHANTS": ["EOS PAY · PAGAMENTO POR QR EM PARCEIROS", "EOS PAY · PAGO POR QR EN COMERCIOS ALIADOS"],
    "THE BRAND FILM · 30S": ["O FILME DA MARCA · 30S", "LA PELÍCULA DE LA MARCA · 30S"],
    "EOS · A NEW BRAND FOR THE SAME PURPOSE": ["EOS · UMA NOVA MARCA PARA O MESMO PROPÓSITO", "EOS · UNA NUEVA MARCA PARA EL MISMO PROPÓSITO"],
    "Trusted by": ["Confiam na Eos", "Confían en Eos"],
    "Proven track record": ["Histórico comprovado", "Trayectoria comprobada"],
    "Our track record.": ["Nosso histórico.", "Nuestra trayectoria."],
    "Originated to date": ["Originados até hoje", "Originados a la fecha"],
    "Proposals processed": ["Propostas processadas", "Propuestas procesadas"],

    /* ---------- Home hero ---------- */
    "Credit for what's essential": ["Crédito para o essencial", "Crédito para lo esencial"],
    "Built to finance everything": ["Feita para financiar tudo que é", "Hecha para financiar todo lo"],
    "essential": ["essencial", "esencial"],
    "Direct credit for essential projects across real estate, utilities and mobility & fleet — originated, underwritten and funded by Eos. Apply with your SSN or ITIN.":
      ["Crédito direto para projetos essenciais em imóveis, utilities e mobilidade e frota — originado, analisado e liberado pela Eos. Aplique com SSN ou ITIN.",
       "Crédito directo para proyectos esenciales en bienes raíces, utilities y movilidad y flota — originado, evaluado y fondeado por Eos. Aplica con SSN o ITIN."],
    "Soft credit pull — no score impact": ["Consulta suave — sem impacto no score", "Consulta blanda — sin impacto en el puntaje"],
    "PRE-QUALIFIED": ["PRÉ-QUALIFICADO", "PRECALIFICADO"],
    "Fixed installments · 60 mo": ["Parcelas fixas · 60 meses", "Cuotas fijas · 60 meses"],
    "Funded in 48h": ["Liberado em 48h", "Fondeado en 48h"],
    "Illustrative terms": ["Condições ilustrativas", "Términos ilustrativos"],
    "Illustrative": ["Ilustrativo", "Ilustrativo"],
    "EOS MEMBER": ["EOS MEMBER", "EOS MEMBER"],
    "Funded": ["Liberado", "Fondeado"],

    /* ---------- Home avenues ---------- */
    "Three avenues": ["Três avenidas", "Tres avenidas"],
    "We are the lender, not a marketplace.": ["Somos a credora, não um marketplace.", "Somos el prestamista, no un marketplace."],
    "Eos originates, approves and funds with its own capital under NMLS #2744537. One team from the application to the money — across three avenues of essential credit.":
      ["A Eos origina, aprova e libera com capital próprio sob a licença NMLS #2744537. Uma única equipe da aplicação ao dinheiro — em três avenidas de crédito essencial.",
       "Eos origina, aprueba y fondea con capital propio bajo la licencia NMLS #2744537. Un solo equipo de la solicitud al dinero — en tres avenidas de crédito esencial."],
    "Purchase and renovation, with three exit strategies.": ["Compra e reforma, com três estratégias de saída.", "Compra y renovación, con tres estrategias de salida."],
    "Fix & Flip, Keep and Hold for investors — and roofing, HVAC, outdoor and interior programs for the home you already have.":
      ["Fix & Flip, Keep e Hold para investidores — e programas de telhado, HVAC, área externa e interiores para a casa que você já tem.",
       "Fix & Flip, Keep y Hold para inversionistas — y programas de techos, HVAC, exteriores e interiores para la casa que ya tienes."],
    "FLIP ≤ 12 MO": ["FLIP ≤ 12 MESES", "FLIP ≤ 12 MESES"],
    "KEEP · HOLD 36–60 MO": ["KEEP · HOLD 36–60 MESES", "KEEP · HOLD 36–60 MESES"],
    "Explore real estate": ["Explorar imóveis", "Explorar bienes raíces"],
    "Power that stays on, financed by the": ["Energia que não cai, financiada por", "Energía que no se corta, financiada por"],
    "month": ["mês", "mes"],
    "Power that stays on, financed by the month.": ["Energia que não cai, financiada por mês.", "Energía que no se corta, financiada por mes."],
    "The residential battery leads: backup that takes the house over in under 20 milliseconds, owned outright. Solar ownership, water filtration and commercial storage complete the avenue.":
      ["A bateria residencial lidera: backup que assume a casa em menos de 20 milissegundos, com o cliente como dono. Solar em propriedade, filtração de água e storage comercial completam a avenida.",
       "La batería residencial lidera: respaldo que asume la casa en menos de 20 milisegundos, con el cliente como dueño. Solar en propiedad, filtración de agua y almacenamiento comercial completan la avenida."],
    "BATTERY 60–72 MO": ["BATERIA 60–72 MESES", "BATERÍA 60–72 MESES"],
    "WATER 36–72 MO": ["ÁGUA 36–72 MESES", "AGUA 36–72 MESES"],
    "Explore utilities": ["Explorar utilities", "Explorar utilities"],
    "Financing for vehicles and fleets.": ["Financiamento para veículos e frotas.", "Financiamiento para vehículos y flotas."],
    "Auto financing at the dealer, lease-to-own for trucks, and invoice trading that turns receivables into cash.":
      ["Financiamento de auto no dealer, lease-to-own de caminhões e antecipação de recebíveis que vira caixa.",
       "Financiamiento de autos en el dealer, lease-to-own de camiones y adelanto de facturas que se convierte en efectivo."],
    "AUTO 24–72 MO": ["AUTO 24–72 MESES", "AUTO 24–72 MESES"],
    "TRUCK 48 MO": ["CAMINHÃO 48 MESES", "CAMIÓN 48 MESES"],
    "Explore mobility": ["Explorar mobilidade", "Explorar movilidad"],
    "Consumer terms never exceed 72 months. Business-purpose programs are structured per operation. All financing subject to credit approval.":
      ["Prazos consumer nunca passam de 72 meses. Programas para fins empresariais são estruturados por operação. Todo financiamento sujeito a aprovação de crédito.",
       "Los plazos consumer nunca superan 72 meses. Los programas con fines comerciales se estructuran por operación. Todo financiamiento sujeto a aprobación de crédito."],

    /* ---------- Home embedded accordion ---------- */
    "Channel · Embedded financing": ["Canal · Financiamento embarcado", "Canal · Financiamiento integrado"],
    "Embedded financing, under your brand.": ["Financiamento embarcado, com a sua marca.", "Financiamiento integrado, bajo tu marca."],
    "Put Eos inside your product. Offer financing at your point of sale while we handle underwriting, compliance and servicing — you close more sales.":
      ["Coloque a Eos dentro do seu produto. Ofereça financiamento no seu ponto de venda enquanto cuidamos de underwriting, compliance e servicing — você fecha mais vendas.",
       "Integra Eos en tu producto. Ofrece financiamiento en tu punto de venta mientras nosotros manejamos underwriting, compliance y servicing — tú cierras más ventas."],
    "Credit button": ["Botão de crédito", "Botón de crédito"],
    "Financing links": ["Links de financiamento", "Enlaces de financiamiento"],
    "Channel dashboard": ["Dashboard do canal", "Panel del canal"],
    "A credit button in your platform": ["Um botão de crédito na sua plataforma", "Un botón de crédito en tu plataforma"],
    "A water-filtration company adds one button to its quote flow — the customer gets an Eos decision without leaving the page.":
      ["Uma empresa de filtração de água adiciona um botão ao orçamento — o cliente recebe a decisão da Eos sem sair da página.",
       "Una empresa de filtración de agua agrega un botón a su cotización — el cliente recibe la decisión de Eos sin salir de la página."],
    "One button in your quote flow": ["Um botão no seu fluxo de orçamento", "Un botón en tu flujo de cotización"],
    "Eos underwrites and pays the installer upfront": ["A Eos analisa e paga o instalador à vista", "Eos evalúa y paga al instalador por adelantado"],
    "Decision in minutes — SSN or ITIN": ["Decisão em minutos — SSN ou ITIN", "Decisión en minutos — SSN o ITIN"],
    "Talk about this case →": ["Falar sobre esse caso →", "Hablar de este caso →"],
    "Soft check · no score impact · decision in minutes": ["Consulta suave · sem impacto no score · decisão em minutos", "Consulta blanda · sin impacto en el puntaje · decisión en minutos"],
    "Continue →": ["Continuar →", "Continuar →"],
    "Financing links, zero code": ["Links de financiamento, zero código", "Enlaces de financiamiento, cero código"],
    "An HVAC contractor sends a link with the quote — the customer finances the job, the contractor gets paid in full.":
      ["Um contractor de HVAC envia um link com o orçamento — o cliente financia o serviço e o contractor recebe o valor integral.",
       "Un contratista de HVAC envía un enlace con la cotización — el cliente financia el trabajo y el contratista recibe el monto completo."],
    "No code — send a link, close the sale": ["Sem código — envie um link, feche a venda", "Sin código — envía un enlace, cierra la venta"],
    "Customer splits it into installments": ["O cliente parcela o valor", "El cliente lo paga en cuotas"],
    "You receive the full amount at once": ["Você recebe o valor integral de uma vez", "Tú recibes el monto completo de una vez"],
    "1 · THE STORE SENDS A LINK": ["1 · O CANAL ENVIA O LINK", "1 · EL COMERCIO ENVÍA EL ENLACE"],
    "2 · THE CUSTOMER PICKS A PLAN": ["2 · O CLIENTE ESCOLHE O PLANO", "2 · EL CLIENTE ELIGE EL PLAN"],
    "3 · THE STORE IS PAID IN FULL": ["3 · O CANAL RECEBE INTEGRAL", "3 · EL COMERCIO RECIBE EL TOTAL"],
    "Hi Ana! Finish your AC replacement here:": ["Oi, Ana! Conclua a troca do seu ar-condicionado aqui:", "¡Hola, Ana! Termina el reemplazo de tu aire acondicionado aquí:"],
    "AC replacement": ["Troca de ar-condicionado", "Reemplazo de aire acondicionado"],
    "24 × $228/mo": ["24 × US$ 228/mês", "24 × US$ 228/mes"],
    "Approved": ["Aprovado", "Aprobado"],
    "CoolFlow HVAC receives": ["CoolFlow HVAC recebe", "CoolFlow HVAC recibe"],
    "$4,800 today": ["US$ 4.800 hoje", "US$ 4,800 hoy"],
    "One dashboard for every application": ["Um dashboard para todas as aplicações", "Un panel para todas las solicitudes"],
    "Track each customer's application in real time — and when someone stops halfway, reissue a link that resumes exactly where they left off.":
      ["Acompanhe cada aplicação em tempo real — e, quando alguém parar no meio, gere um novo link que retoma exatamente de onde parou.",
       "Sigue cada solicitud en tiempo real — y cuando alguien se detiene a la mitad, reemite un enlace que retoma exactamente donde quedó."],
    "Every application and its status, live": ["Cada aplicação e seu status, ao vivo", "Cada solicitud y su estado, en vivo"],
    "Resume links recover stalled deals": ["Links de retomada recuperam negócios parados", "Los enlaces de reanudación recuperan ventas detenidas"],
    "Onboarding: apply, approve, one training session": ["Onboarding: aplicação, aprovação e um treinamento", "Onboarding: solicitud, aprobación y una capacitación"],
    "See the channel program →": ["Ver o programa de canal →", "Ver el programa de canal →"],
    "APPLICATIONS · TODAY": ["APLICAÇÕES · HOJE", "SOLICITUDES · HOY"],
    "Whole-home filtration": ["Filtração para a casa toda", "Filtración para toda la casa"],
    "$6,800 · 60 mo": ["US$ 6.800 · 60 meses", "US$ 6,800 · 60 meses"],
    "Roof replacement": ["Troca de telhado", "Reemplazo de techo"],
    "$18,400 · 72 mo": ["US$ 18.400 · 72 meses", "US$ 18,400 · 72 meses"],
    "Battery & backup": ["Bateria e backup", "Batería y respaldo"],
    "$24,000 · 72 mo": ["US$ 24.000 · 72 meses", "US$ 24,000 · 72 meses"],
    "FUNDED": ["LIBERADO", "FONDEADO"],
    "RESUME LINK": ["LINK DE RETOMADA", "ENLACE DE REANUDACIÓN"],
    "Your brand front and center": ["Sua marca em primeiro plano", "Tu marca al frente"],
    "Eos underwrites and services": ["A Eos analisa e faz o servicing", "Eos evalúa y hace el servicing"],
    "API or no-code": ["API ou no-code", "API o no-code"],
    "Approval data flows back to you": ["Os dados de aprovação voltam para você", "Los datos de aprobación vuelven a ti"],

    /* ---------- Home film / b2b2c ---------- */
    "Embedded finance · B2B2C · The film": ["Financiamento embarcado · B2B2C · O filme", "Financiamiento integrado · B2B2C · La película"],
    "Financing at your point of sale.": ["Financiamento no seu ponto de venda.", "Financiamiento en tu punto de venta."],
    "Offer Eos financing where the decision happens — in your store, your quote or your checkout. The customer pays over time; you receive the full amount upfront.":
      ["Ofereça o financiamento da Eos onde a decisão acontece — na sua loja, no seu orçamento ou no seu checkout. O cliente paga a prazo; você recebe o valor integral à vista.",
       "Ofrece el financiamiento de Eos donde ocurre la decisión — en tu tienda, tu cotización o tu checkout. El cliente paga a plazos; tú recibes el monto completo por adelantado."],
    "WATCH · 30S": ["ASSISTA · 30S", "VER · 30S"],
    "B2B2C · FINANCING AT YOUR POINT OF SALE": ["B2B2C · FINANCIAMENTO NO SEU PONTO DE VENDA", "B2B2C · FINANCIAMIENTO EN TU PUNTO DE VENTA"],
    "SSN or ITIN · decision in minutes": ["SSN ou ITIN · decisão em minutos", "SSN o ITIN · decisión en minutos"],
    "Close more sales": ["Feche mais vendas", "Cierra más ventas"],
    "An approval at the moment of decision turns quotes into signed contracts.":
      ["Uma aprovação no momento da decisão transforma orçamentos em contratos assinados.",
       "Una aprobación en el momento de la decisión convierte cotizaciones en contratos firmados."],
    "You get paid upfront": ["Você recebe à vista", "Tú cobras por adelantado"],
    "Eos funds the full amount to you. Your customer pays over time.": ["A Eos libera o valor integral para você. Seu cliente paga a prazo.", "Eos te fondea el monto completo. Tu cliente paga a plazos."],
    "Your brand in front": ["Sua marca na frente", "Tu marca al frente"],
    "We underwrite, service and stay compliant behind the scenes.": ["Nós analisamos, fazemos o servicing e cuidamos do compliance nos bastidores.", "Nosotros evaluamos, hacemos el servicing y mantenemos el compliance tras bambalinas."],
    "Live in days": ["No ar em dias", "En vivo en días"],
    "Send a financing link or add a button. API optional, no code required.": ["Envie um link de financiamento ou adicione um botão. API opcional, sem código obrigatório.", "Envía un enlace de financiamiento o agrega un botón. API opcional, sin código obligatorio."],

    /* ---------- Home testimonials / credit / why ---------- */
    "Customers & originators": ["Clientes e canais", "Clientes y canales"],
    "What our originators say.": ["O que dizem nossos canais.", "Lo que dicen nuestros canales."],
    "We put an Eos financing button in our sales flow. Approvals happen at the kitchen table, and our close rate jumped.":
      ["Colocamos um botão de financiamento da Eos no nosso fluxo de vendas. As aprovações acontecem na mesa da cozinha, e nossa taxa de fechamento saltou.",
       "Pusimos un botón de financiamiento de Eos en nuestro flujo de ventas. Las aprobaciones ocurren en la mesa de la cocina, y nuestra tasa de cierre subió."],
    "Filter Pure · water filtration": ["Filter Pure · filtração de água", "Filter Pure · filtración de agua"],
    "Battery projects are big tickets. Offering Eos financing turned quotes into signed contracts.":
      ["Projetos de bateria são tíquetes altos. Oferecer o financiamento da Eos transformou orçamentos em contratos assinados.",
       "Los proyectos de batería son tickets altos. Ofrecer el financiamiento de Eos convirtió cotizaciones en contratos firmados."],
    "Eletricfish · battery systems": ["Eletricfish · sistemas de bateria", "Eletricfish · sistemas de batería"],
    "Eos credit": ["Crédito Eos", "Crédito Eos"],
    "Eos credit, issued directly to approved borrowers.": ["Crédito Eos, emitido diretamente para clientes aprovados.", "Crédito Eos, emitido directamente a clientes aprobados."],
    "Eos credit · issued to approved borrowers": ["Crédito Eos · emitido para clientes aprovados", "Crédito Eos · emitido a clientes aprobados"],
    "Why Eos Loan": ["Por que a Eos Loan", "Por qué Eos Loan"],
    "A fintech for residential and commercial essential projects.": ["Uma fintech para projetos essenciais residenciais e comerciais.", "Una fintech para proyectos esenciales residenciales y comerciales."],
    "Fast and digital-first": ["Rápida e 100% digital", "Rápida y 100% digital"],
    "No paper forms, no faxes. A fully digital application with decisions in minutes.": ["Sem papelada, sem fax. Uma aplicação totalmente digital com decisão em minutos.", "Sin papeleo, sin fax. Una solicitud totalmente digital con decisión en minutos."],
    "Funding in 48 hours": ["Liberação em 48 horas", "Fondos en 48 horas"],
    "Average funding turnaround of 48 hours after approval.": ["Prazo médio de liberação de 48 horas após a aprovação.", "Plazo promedio de fondeo de 48 horas después de la aprobación."],
    "SSN or ITIN": ["SSN ou ITIN", "SSN o ITIN"],
    "Built for everyone building in the US — apply with either.": ["Feita para quem constrói nos EUA — aplique com qualquer um dos dois.", "Hecha para quienes construyen en EE. UU. — aplica con cualquiera de los dos."],
    "Dedicated support": ["Suporte dedicado", "Soporte dedicado"],
    "A real team available on every application, every step of the way.": ["Uma equipe de verdade disponível em cada aplicação, em cada etapa.", "Un equipo real disponible en cada solicitud, en cada etapa."],
    "Our focus": ["Nosso foco", "Nuestro enfoque"],
    "Credit for the projects a household depends on.": ["Crédito para os projetos dos quais uma casa depende.", "Crédito para los proyectos de los que depende un hogar."],
    "Backup power when the grid fails. A roof replaced in the week it leaks. The vehicle a family or a business depends on. Eos finances essential projects — with clear terms, a fast decision and a single team from application to funding.":
      ["Energia de backup quando a rede cai. Um telhado trocado na semana em que vazou. O veículo do qual uma família ou um negócio depende. A Eos financia projetos essenciais — com condições claras, decisão rápida e uma única equipe da aplicação à liberação.",
       "Energía de respaldo cuando falla la red. Un techo reemplazado la semana en que gotea. El vehículo del que depende una familia o un negocio. Eos financia proyectos esenciales — con términos claros, decisión rápida y un solo equipo de la solicitud al fondeo."],

    /* ---------- Home battery block + partner section + CTA ---------- */
    "HOME BACKUP & BATTERY": ["BACKUP RESIDENCIAL E BATERIA", "RESPALDO RESIDENCIAL Y BATERÍA"],
    "Home backup, financed by the month.": ["Backup residencial, financiado por mês.", "Respaldo residencial, financiado por mes."],
    "A battery system that takes over automatically — no fuel, no noise, no subscription. You own it.":
      ["Um sistema de bateria que assume automaticamente — sem combustível, sem barulho, sem assinatura. Ele é seu.",
       "Un sistema de batería que asume automáticamente — sin combustible, sin ruido, sin suscripción. Es tuyo."],
    "Transfer time": ["Tempo de transferência", "Tiempo de transferencia"],
    "Silent": ["Silencioso", "Silencioso"],
    "Warranty": ["Garantia", "Garantía"],
    "Explore home backup": ["Explorar backup residencial", "Explorar respaldo residencial"],
    "Explore home backup →": ["Explorar backup residencial →", "Explorar respaldo residencial →"],
    
    "Offer Eos financing to your customers.": ["Ofereça o financiamento da Eos aos seus clientes.", "Ofrece el financiamiento de Eos a tus clientes."],
    "Installers, contractors and resellers send their customers to Eos at the point of sale. We are the lender — we underwrite, fund and service the loan, and the originator takes no credit risk.":
      ["Instaladores, contractors e revendedores encaminham seus clientes à Eos no ponto de venda. Somos a credora — analisamos, liberamos e fazemos o servicing, e o canal não assume risco de crédito.",
       "Instaladores, contratistas y revendedores envían a sus clientes a Eos en el punto de venta. Somos el prestamista — evaluamos, fondeamos y hacemos el servicing, y el canal no asume riesgo de crédito."],
    "No credit risk to you": ["Sem risco de crédito para você", "Sin riesgo de crédito para ti"],
    "Your customer is the borrower. Eos carries the loan, not your business.": ["Seu cliente é o tomador. A Eos carrega o empréstimo, não o seu negócio.", "Tu cliente es el deudor. Eos carga el préstamo, no tu negocio."],
    "Full margin, no dealer fee": ["Margem integral, sem dealer fee", "Margen completo, sin dealer fee"],
    "We never deduct a fee from what we pass through to you.": ["Nunca descontamos taxa do valor repassado a você.", "Nunca descontamos una comisión de lo que te transferimos."],
    "A decision in minutes": ["Decisão em minutos", "Decisión en minutos"],
    "The customer applies from a digital form at the moment of sale, subject to approval.": ["O cliente aplica por um formulário digital no momento da venda, sujeito a aprovação.", "El cliente aplica desde un formulario digital en el momento de la venta, sujeto a aprobación."],
    "A dashboard for every application": ["Um dashboard para cada aplicação", "Un panel para cada solicitud"],
    "Track every application and reissue a link so the customer resumes where they stopped.": ["Acompanhe cada aplicação e gere um novo link para o cliente retomar de onde parou.", "Sigue cada solicitud y reemite un enlace para que el cliente retome donde quedó."],
    "Onboarding is an application, an approval and one training session.": ["O onboarding é uma aplicação, uma aprovação e um treinamento.", "El onboarding es una solicitud, una aprobación y una capacitación."],
    
    "Tell us what you sell and we will come back within one business day.": ["Conte o que você vende e retornamos em até um dia útil.", "Cuéntanos qué vendes y te respondemos dentro de un día hábil."],
    "Company": ["Empresa", "Empresa"],
    "Your name": ["Seu nome", "Tu nombre"],
    "Phone": ["Telefone", "Teléfono"],
    "Work email": ["E-mail corporativo", "Correo corporativo"],
    "What you sell": ["O que você vende", "Qué vendes"],
    "Average deal size (optional)": ["Ticket médio por venda (opcional)", "Ticket promedio por venta (opcional)"],
    "Under $5,000": ["Menos de US$ 5.000", "Menos de US$ 5,000"],
    "$5,000 to $15,000": ["US$ 5.000 a US$ 15.000", "US$ 5,000 a US$ 15,000"],
    "$15,000 to $50,000": ["US$ 15.000 a US$ 50.000", "US$ 15,000 a US$ 50,000"],
    "Over $50,000": ["Mais de US$ 50.000", "Más de US$ 50,000"],
    "Monthly volume (optional)": ["Volume mensal (opcional)", "Volumen mensual (opcional)"],
    "Monthly volume": ["Volume mensal", "Volumen mensual"],
    "No cost to join · no exclusivity · no credit risk to you.": ["Sem custo de adesão · sem exclusividade · sem risco de crédito para você.", "Sin costo de adhesión · sin exclusividad · sin riesgo de crédito para ti."],
    "No cost to join · no exclusivity · no credit risk to you": ["Sem custo de adesão · sem exclusividade · sem risco de crédito para você", "Sin costo de adhesión · sin exclusividad · sin riesgo de crédito para ti"],
    "No cost to join · no exclusivity · no credit risk to you. We only use this information to reply to your request.":
      ["Sem custo de adesão · sem exclusividade · sem risco de crédito para você. Usamos essas informações apenas para responder à sua solicitação.",
       "Sin costo de adhesión · sin exclusividad · sin riesgo de crédito para ti. Solo usamos esta información para responder a tu solicitud."],
    "Talk to us now": ["Falar conosco agora", "Hablar ahora"],
    "Send us the project — our team replies within one business day.": ["Envie o projeto — nossa equipe responde em até um dia útil.", "Envíanos el proyecto — nuestro equipo responde dentro de un día hábil."],

    /* ---------- Home FAQ ---------- */
    "What does Eos finance?": ["O que a Eos financia?", "¿Qué financia Eos?"],
    "Three avenues of essential credit: real estate (investment strategies plus roofing, HVAC, outdoor and interior programs), utilities (residential battery, solar, water filtration and commercial storage) and mobility & fleet (auto, trucks and invoice trading).":
      ["Três avenidas de crédito essencial: imóveis (estratégias de investimento e programas de telhado, HVAC, área externa e interiores), utilities (bateria residencial, solar, filtração de água e storage comercial) e mobilidade e frota (auto, caminhões e antecipação de recebíveis).",
       "Tres avenidas de crédito esencial: bienes raíces (estrategias de inversión más programas de techos, HVAC, exteriores e interiores), utilities (batería residencial, solar, filtración de agua y almacenamiento comercial) y movilidad y flota (autos, camiones y adelanto de facturas)."],
    "What secures the loan?": ["O que garante o empréstimo?", "¿Qué garantiza el préstamo?"],
    "It depends on the program. Real estate strategies are secured by the property in the project, and solar is secured by the panels and the system — a real asset, not a lien on your whole life. Home programs like roofing, HVAC and water filtration are consumer credit that does not touch the equity in your house.":
      ["Depende do programa. As estratégias de imóveis são garantidas pelo imóvel do projeto, e o solar é garantido pelos painéis e pelo sistema — um ativo real, não um gravame sobre a sua vida inteira. Programas residenciais como telhado, HVAC e filtração de água são crédito consumer que não toca o patrimônio da sua casa.",
       "Depende del programa. Las estrategias de bienes raíces están garantizadas por la propiedad del proyecto, y el solar por los paneles y el sistema — un activo real, no un gravamen sobre toda tu vida. Los programas del hogar como techos, HVAC y filtración de agua son crédito consumer que no toca el patrimonio de tu casa."],
    "Who can apply?": ["Quem pode aplicar?", "¿Quién puede aplicar?"],
    "US businesses and individuals. You can apply with a Social Security Number or an ITIN — we built our underwriting for both.":
      ["Empresas e pessoas físicas nos EUA. Você pode aplicar com Social Security Number ou ITIN — nosso underwriting foi construído para os dois.",
       "Empresas y personas en EE. UU. Puedes aplicar con Social Security Number o ITIN — nuestro underwriting fue construido para ambos."],
    "Does checking my rate affect my credit score?": ["Consultar minha taxa afeta meu score?", "¿Consultar mi tasa afecta mi puntaje?"],
    "No. Checking your rate uses a soft credit inquiry, which does not affect your score. A hard inquiry only happens if you proceed with a loan.":
      ["Não. A consulta de taxa usa uma consulta suave de crédito, que não afeta seu score. A consulta completa só acontece se você seguir com o empréstimo.",
       "No. Consultar tu tasa usa una consulta blanda, que no afecta tu puntaje. La consulta completa solo ocurre si avanzas con el préstamo."],
    "How fast is funding?": ["Em quanto tempo o dinheiro é liberado?", "¿Qué tan rápido llegan los fondos?"],
    "Decisions typically take minutes. After approval, average funding turnaround is 48 hours.": ["As decisões normalmente levam minutos. Após a aprovação, o prazo médio de liberação é de 48 horas.", "Las decisiones suelen tomar minutos. Después de la aprobación, el plazo promedio de fondeo es de 48 horas."],
    "Is there a penalty for paying early?": ["Existe multa por quitar antes?", "¿Hay penalidad por pagar antes?"],
    "None. There is no prepayment penalty, no dealer fee and no hidden fees on the loan.": ["Nenhuma. Não há multa de pré-pagamento, dealer fee nem taxas escondidas no empréstimo.", "Ninguna. No hay penalidad por prepago, ni dealer fee, ni cargos ocultos en el préstamo."],
    "Can my company offer Eos financing to its customers?": ["Minha empresa pode oferecer o financiamento da Eos aos clientes dela?", "¿Mi empresa puede ofrecer el financiamiento de Eos a sus clientes?"],
    "Yes. Installers, contractors and resellers send their customers to Eos at the point of sale. You take no credit risk and keep the full margin — there is no dealer fee.":
      ["Sim. Instaladores, contractors e revendedores encaminham seus clientes à Eos no ponto de venda. Você não assume risco de crédito e mantém a margem integral — não há dealer fee.",
       "Sí. Instaladores, contratistas y revendedores envían a sus clientes a Eos en el punto de venta. No asumes riesgo de crédito y conservas el margen completo — no hay dealer fee."],

    /* ---------- Real estate page ---------- */
    "Real estate · Texas & Florida": ["Imóveis · Texas e Flórida", "Bienes raíces · Texas y Florida"],
    "Purchase and renovation financing, in one loan.": ["Financiamento de compra e reforma, em um único empréstimo.", "Financiamiento de compra y renovación, en un solo préstamo."],
    "Purchase and renovation in one loan, with draws released as the work gets done. For investors and homeowners — apply with your SSN or ITIN.":
      ["Compra e reforma em um único empréstimo, com liberações conforme a obra avança. Para investidores e proprietários — aplique com SSN ou ITIN.",
       "Compra y renovación en un solo préstamo, con desembolsos a medida que avanza la obra. Para inversionistas y propietarios — aplica con SSN o ITIN."],
    "Collateral accepted from 8 countries": ["Garantias aceitas de 8 países", "Garantías aceptadas de 8 países"],
    "RENOVATION DRAW": ["LIBERAÇÃO DE OBRA", "DESEMBOLSO DE OBRA"],
    "Stage 2 of 4 · Released": ["Etapa 2 de 4 · Liberada", "Etapa 2 de 4 · Liberado"],
    "Rented · $2,350/mo": ["Alugado · US$ 2.350/mês", "Rentado · US$ 2,350/mes"],
    "Strategies": ["Estratégias", "Estrategias"],
    "Three investment strategies.": ["Três estratégias de investimento.", "Tres estrategias de inversión."],
    "Same property, different horizons. Pick the exit first — the financing follows.":
      ["O mesmo imóvel, horizontes diferentes. Escolha primeiro a saída — o financiamento acompanha.",
       "La misma propiedad, horizontes distintos. Elige primero la salida — el financiamiento la acompaña."],
    "Buy, renovate and sell, within 12 months.": ["Compre, reforme e venda, em até 12 meses.", "Compra, renueva y vende, dentro de 12 meses."],
    "The investor buys below market, renovates with staged draws, and sells within a short window of up to 12 months. Capital comes back fast and goes again.":
      ["O investidor compra abaixo do mercado, reforma com liberações por etapa e vende em uma janela curta de até 12 meses. O capital volta rápido e gira de novo.",
       "El inversionista compra bajo mercado, renueva con desembolsos por etapas y vende en una ventana corta de hasta 12 meses. El capital vuelve rápido y gira de nuevo."],
    "Purchase and renovation in one loan": ["Compra e reforma em um único empréstimo", "Compra y renovación en un solo préstamo"],
    "Draws released as work completes": ["Liberações conforme a obra é concluída", "Desembolsos a medida que se completa la obra"],
    "Short horizon: capital recycles quickly": ["Horizonte curto: o capital gira rápido", "Horizonte corto: el capital rota rápido"],
    "UP TO 12 MONTHS": ["ATÉ 12 MESES", "HASTA 12 MESES"],
    "36–60 MONTHS": ["36–60 MESES", "36–60 MESES"],
    "Buy, renovate and lease. Sell between 36 and 60 months.": ["Compre, reforme e alugue. Venda entre 36 e 60 meses.", "Compra, renueva y renta. Vende entre 36 y 60 meses."],
    "Buy and renovate, lease the property, and sell between 36 and 60 months — rent carries the loan while you wait for a stronger appreciation window.":
      ["Compre e reforme, alugue o imóvel e venda entre 36 e 60 meses — o aluguel carrega o empréstimo enquanto você espera uma janela melhor de valorização.",
       "Compra y renueva, renta la propiedad y vende entre 36 y 60 meses — la renta sostiene el préstamo mientras esperas una mejor ventana de apreciación."],
    "Rental income while you hold": ["Renda de aluguel enquanto você segura", "Ingreso por renta mientras mantienes"],
    "Term sized to the strategy (36–60 months), longer than a flip without locking you into a decade":
      ["Prazo no tamanho da estratégia (36–60 meses), mais longo que um flip sem te prender por uma década",
       "Plazo a la medida de la estrategia (36–60 meses), más largo que un flip sin atarte una década"],
    "Positioned for market recovery and upside": ["Posicionado para a recuperação e a valorização do mercado", "Posicionado para la recuperación y el alza del mercado"],
    "Investors recycling capital fast and compounding deal by deal.": ["Investidores que giram capital rápido e compõem negócio a negócio.", "Inversionistas que rotan capital rápido y componen trato a trato."],
    "The Eos difference": ["O diferencial da Eos", "El diferencial de Eos"],
    "Investors who can wait for the market and want rent covering the ride.": ["Investidores que podem esperar o mercado e querem o aluguel cobrindo o caminho.", "Inversionistas que pueden esperar al mercado y quieren la renta cubriendo el camino."],
    "Buy, renovate and hold as a long-term rental.": ["Compre, reforme e mantenha como aluguel de longo prazo.", "Compra, renueva y mantén como renta de largo plazo."],
    "Buy, renovate and lease long-term with financing of 36 to 60 months. For investors building a US portfolio and living off rental yield.":
      ["Compre, reforme e alugue no longo prazo com financiamento de 36 a 60 meses. Para investidores construindo portfólio nos EUA e vivendo da renda de aluguel.",
       "Compra, renueva y renta a largo plazo con financiamiento de 36 a 60 meses. Para inversionistas que construyen portafolio en EE. UU. y viven del rendimiento de la renta."],
    "A US rental that pays you every month, financed over 36–60 months so the rent can carry the loan":
      ["Um imóvel alugado nos EUA que paga você todo mês, financiado em 36–60 meses para o aluguel carregar o empréstimo",
       "Una renta en EE. UU. que te paga cada mes, financiada a 36–60 meses para que la renta sostenga el préstamo"],
    "Long-term rental portfolio in USD": ["Portfólio de aluguel de longo prazo em dólar", "Portafolio de rentas de largo plazo en dólares"],
    "Property in your home country can be collateral": ["Imóvel no seu país de origem pode ser garantia", "Una propiedad en tu país de origen puede ser garantía"],
    "Investors building patrimony in dollars and living on rental yield.": ["Investidores construindo patrimônio em dólar e vivendo da renda de aluguel.", "Inversionistas que construyen patrimonio en dólares y viven de la renta."],
    "BEST FOR": ["IDEAL PARA", "IDEAL PARA"],
    "TIMELINE": ["LINHA DO TEMPO", "CRONOGRAMA"],
    "BUY": ["COMPRA", "COMPRA"],
    "RENOVATE": ["REFORMA", "RENOVACIÓN"],
    "SELL": ["VENDA", "VENTA"],
    "RENT": ["ALUGUEL", "RENTA"],
    "RENT & HOLD": ["ALUGUEL E POSSE", "RENTA Y POSESIÓN"],
    "The films": ["Os filmes", "Las películas"],
    "A thirty-second overview of Fix & Flip.": ["Fix & Flip em trinta segundos.", "Fix & Flip en treinta segundos."],
    "FIX & FLIP · BUY, RENOVATE, SELL ≤ 12 MO": ["FIX & FLIP · COMPRE, REFORME, VENDA ≤ 12 MESES", "FIX & FLIP · COMPRA, RENUEVA, VENDE ≤ 12 MESES"],
    "Cross-border collateral.": ["Garantia cross-border.", "Garantía transfronteriza."],
    "Built for international investors: Eos can accept real estate you own in your home country as collateral for your US investment — unlocking terms without selling what you already built.":
      ["Feito para investidores internacionais: a Eos pode aceitar um imóvel seu no país de origem como garantia do investimento nos EUA — destravando condições sem vender o que você já construiu.",
       "Hecho para inversionistas internacionales: Eos puede aceptar una propiedad tuya en tu país de origen como garantía de tu inversión en EE. UU. — desbloqueando términos sin vender lo que ya construiste."],
    "Subject to valuation and credit approval.": ["Sujeito a avaliação e aprovação de crédito.", "Sujeto a tasación y aprobación de crédito."],
    "Ask about cross-border collateral": ["Pergunte sobre garantia cross-border", "Pregunta por la garantía transfronteriza"],
    "Brazil": ["Brasil", "Brasil"],
    "Mexico": ["México", "México"],
    "Colombia": ["Colômbia", "Colombia"],
    "Argentina": ["Argentina", "Argentina"],
    "Peru": ["Peru", "Perú"],
    "Ecuador": ["Equador", "Ecuador"],
    "Paraguay": ["Paraguai", "Paraguay"],
    "Chile": ["Chile", "Chile"],
    "Consumer programs · same avenue": ["Programas consumer · mesma avenida", "Programas consumer · misma avenida"],
    "Consumer programs for homeowners.": ["Programas consumer para proprietários.", "Programas consumer para propietarios."],
    "Roofing": ["Telhado", "Techos"],
    "Replacement and repair — the upgrade that protects everything else.": ["Troca e reparo — a melhoria que protege todas as outras.", "Reemplazo y reparación — la mejora que protege todo lo demás."],
    "Heating and cooling replaced in the week it breaks, not the year after.": ["Aquecimento e refrigeração trocados na semana em que quebram, não no ano seguinte.", "Calefacción y aire reemplazados la semana en que fallan, no al año siguiente."],
    "Outdoor living": ["Área externa", "Exteriores"],
    "Decks, patios, fencing and the yard the house deserves.": ["Decks, pátios, cercas e o quintal que a casa merece.", "Decks, patios, cercas y el jardín que la casa merece."],
    "Interior & general repair": ["Interiores e reparos gerais", "Interiores y reparaciones generales"],
    "Kitchens, bathrooms and the work the house needs now.": ["Cozinhas, banheiros e as obras que a casa precisa agora.", "Cocinas, baños y las obras que la casa necesita ahora."],
    "How the process works.": ["Como funciona o processo.", "Cómo funciona el proceso."],
    "Get your term sheet": ["Receba seu term sheet", "Recibe tu term sheet"],
    "Two minutes, soft credit pull. See real numbers before anyone calls you.": ["Dois minutos, consulta suave. Veja números reais antes de qualquer ligação.", "Dos minutos, consulta blanda. Ve números reales antes de que alguien te llame."],
    "Two minutes, soft credit pull. See your terms before anyone calls you.": ["Dois minutos, consulta suave. Veja suas condições antes de qualquer ligação.", "Dos minutos, consulta blanda. Ve tus términos antes de que alguien te llame."],
    "Pick the strategy; we structure purchase, renovation and exit in one plan — total cost in dollars.":
      ["Escolha a estratégia; estruturamos compra, reforma e saída em um único plano — custo total em dólar.",
       "Elige la estrategia; estructuramos compra, renovación y salida en un solo plan — costo total en dólares."],
    "Close and fund": ["Fechamento e liberação", "Cierre y fondeo"],
    "Draw as you build": ["Liberações conforme a obra", "Desembolsos según la obra"],
    "Renovation funds released stage by stage, so the project keeps its own pace.": ["Recursos da reforma liberados etapa por etapa, para o projeto manter o próprio ritmo.", "Fondos de renovación liberados etapa por etapa, para que el proyecto mantenga su ritmo."],
    "Real estate investment financing": ["Financiamento de investimento imobiliário", "Financiamiento de inversión inmobiliaria"],
    "Fix & Hold investor": ["Investidor Fix & Hold", "Inversionista Fix & Hold"],
    "Real estate FAQ": ["FAQ de imóveis", "FAQ de bienes raíces"],
    "How does cross-border collateral work?": ["Como funciona a garantia cross-border?", "¿Cómo funciona la garantía transfronteriza?"],
    "You pledge real estate you own in Brazil, Mexico, Colombia, Argentina, Peru, Ecuador, Paraguay or Chile. We run a valuation with local counsel and count it toward your collateral package — subject to credit approval.":
      ["Você dá em garantia um imóvel seu no Brasil, México, Colômbia, Argentina, Peru, Equador, Paraguai ou Chile. Fazemos a avaliação com assessoria local e o contamos no seu pacote de garantias — sujeito a aprovação de crédito.",
       "Ofreces en garantía una propiedad tuya en Brasil, México, Colombia, Argentina, Perú, Ecuador, Paraguay o Chile. Hacemos la tasación con asesoría local y la contamos en tu paquete de garantías — sujeto a aprobación de crédito."],
    "Do I need a US credit history?": ["Preciso de histórico de crédito nos EUA?", "¿Necesito historial de crédito en EE. UU.?"],
    "You can apply with an SSN or an ITIN. We look at the project — purchase price, renovation budget, exit — not just the file.":
      ["Você pode aplicar com SSN ou ITIN. Olhamos o projeto — preço de compra, orçamento da reforma, saída — não só o cadastro.",
       "Puedes aplicar con SSN o ITIN. Miramos el proyecto — precio de compra, presupuesto de renovación, salida — no solo el expediente."],
    "How do renovation draws work?": ["Como funcionam as liberações da reforma?", "¿Cómo funcionan los desembolsos de renovación?"],
    "The renovation budget is split into stages. As each stage is completed and verified, the next draw is released — you don't pay interest on money you haven't used yet.":
      ["O orçamento da reforma é dividido em etapas. Conforme cada etapa é concluída e verificada, a próxima liberação sai — você não paga juros sobre dinheiro que ainda não usou.",
       "El presupuesto de renovación se divide en etapas. A medida que cada etapa se completa y verifica, se libera el siguiente desembolso — no pagas intereses por dinero que aún no usaste."],
    "Where does Eos finance properties?": ["Onde a Eos financia imóveis?", "¿Dónde financia propiedades Eos?"],
    "Investment and residential properties in Texas and Florida. The collateral can come from further away — see above.":
      ["Imóveis residenciais e de investimento no Texas e na Flórida. A garantia pode vir de mais longe — veja acima.",
       "Propiedades residenciales y de inversión en Texas y Florida. La garantía puede venir de más lejos — mira arriba."],
    "“I bought and renovated in Florida with my apartment in São Paulo as part of the collateral. Eos understood both sides of the border.”":
      ["“Comprei e reformei na Flórida com meu apartamento em São Paulo como parte da garantia. A Eos entendeu os dois lados da fronteira.”",
       "“Compré y renové en Florida con mi departamento en São Paulo como parte de la garantía. Eos entendió los dos lados de la frontera.”"],

    /* ---------- Utilities page ---------- */
    "UTILITIES": ["UTILITIES", "UTILITIES"],
    "Batteries, solar and water systems for the house — and storage at commercial scale. Eos is the lender: fixed installments you see before you sign, decided in minutes, with SSN or ITIN.":
      ["Baterias, solar e sistemas de água para a casa — e storage em escala comercial. A Eos é a credora: parcelas fixas que você vê antes de assinar, decisão em minutos, com SSN ou ITIN.",
       "Baterías, solar y sistemas de agua para la casa — y almacenamiento a escala comercial. Eos es el prestamista: cuotas fijas que ves antes de firmar, decisión en minutos, con SSN o ITIN."],
    "For your home": ["Para a sua casa", "Para tu casa"],
    "Programs for your home.": ["Programas para a sua casa.", "Programas para tu casa."],
    "RESIDENTIAL BATTERY · CONSUMER CREDIT": ["BATERIA RESIDENCIAL · CRÉDITO CONSUMER", "BATERÍA RESIDENCIAL · CRÉDITO CONSUMER"],
    "60–72 MO": ["60–72 MESES", "60–72 MESES"],
    "36–72 MO": ["36–72 MESES", "36–72 MESES"],
    "24–72 MO": ["24–72 MESES", "24–72 MESES"],
    "24–60 MO": ["24–60 MESES", "24–60 MESES"],
    "Backup power for the whole house.": ["Energia de backup para a casa toda.", "Energía de respaldo para toda la casa."],
    "A battery system that takes the house over automatically — no fuel, no noise, no subscription. You own it, on a fixed monthly installment.":
      ["Um sistema de bateria que assume a casa automaticamente — sem combustível, sem barulho, sem assinatura. Ele é seu, em parcelas mensais fixas.",
       "Un sistema de batería que asume la casa automáticamente — sin combustible, sin ruido, sin suscripción. Es tuyo, en cuotas mensuales fijas."],
    "See the systems": ["Ver os sistemas", "Ver los sistemas"],
    "WATER FILTRATION": ["FILTRAÇÃO DE ÁGUA", "FILTRACIÓN DE AGUA"],
    "Clean water for the whole house.": ["Água limpa para a casa toda.", "Agua limpia para toda la casa."],
    "Whole-home and point-of-use systems, financed at the point of sale in fixed installments.":
      ["Sistemas para a casa toda e de ponto de uso, financiados no ponto de venda em parcelas fixas.",
       "Sistemas para toda la casa y de punto de uso, financiados en el punto de venta en cuotas fijas."],
    "SOLAR + BATTERY": ["SOLAR + BATERIA", "SOLAR + BATERÍA"],
    "Own the system that powers your house.": ["Seja dono do sistema que abastece a sua casa.", "Sé dueño del sistema que alimenta tu casa."],
    "Own the system on your roof outright, financed in fixed installments you see before you sign.":
      ["Tenha o sistema no seu telhado como seu, financiado em parcelas fixas que você vê antes de assinar.",
       "Ten el sistema de tu techo como tuyo, financiado en cuotas fijas que ves antes de firmar."],
    "Start with the size that fits your budget, not the biggest array on the proposal.":
      ["Comece com o tamanho que cabe no seu orçamento, não com o maior sistema da proposta.",
       "Empieza con el tamaño que cabe en tu presupuesto, no con el sistema más grande de la propuesta."],
    "Panels and system as collateral: secured credit priced on a real asset, without a lien on your whole life.":
      ["Painéis e sistema como garantia: crédito garantido precificado sobre um ativo real, sem gravame sobre a sua vida inteira.",
       "Paneles y sistema como garantía: crédito garantizado sobre un activo real, sin gravamen sobre toda tu vida."],
    "Add a battery in the same financed project, and the battery is what keeps the lights on when the grid goes down.":
      ["Adicione uma bateria no mesmo projeto financiado — é a bateria que mantém as luzes acesas quando a rede cai.",
       "Agrega una batería en el mismo proyecto financiado — la batería es lo que mantiene las luces encendidas cuando se corta la red."],
    "One decision at the installer's proposal: soft rate check, minutes to a decision, SSN or ITIN.":
      ["Uma decisão na proposta do instalador: consulta suave de taxa, decisão em minutos, SSN ou ITIN.",
       "Una decisión en la propuesta del instalador: consulta blanda de tasa, decisión en minutos, SSN o ITIN."],
    "EV CHARGER": ["CARREGADOR EV", "CARGADOR EV"],
    "Charging at home.": ["Recarga em casa.", "Carga en casa."],
    "Home charging installed and financed, on its own or inside a battery project.":
      ["Recarga residencial instalada e financiada, sozinha ou dentro de um projeto de bateria.",
       "Carga residencial instalada y financiada, sola o dentro de un proyecto de batería."],
    "Replacing the HVAC too? Heating and cooling is a": ["Vai trocar o HVAC também? Aquecimento e refrigeração é um", "¿También reemplazas el HVAC? Calefacción y aire es un"],
    "real estate program": ["programa da avenida de imóveis", "programa de bienes raíces"],
    "— unless it ships inside a battery or solar project, in which case it is financed here, in the same contract.":
      ["— a menos que venha dentro de um projeto de bateria ou solar; nesse caso é financiado aqui, no mesmo contrato.",
       "— salvo que venga dentro de un proyecto de batería o solar; en ese caso se financia aquí, en el mismo contrato."],
    "For your business": ["Para o seu negócio", "Para tu negocio"],
    "Storage and charging at commercial scale.": ["Storage e recarga em escala comercial.", "Almacenamiento y carga a escala comercial."],
    "Commercial battery systems reaching 135 kWh — sized to take the place of a 50 to 100 kW diesel standby generator — and EV charging for fleets, workplaces and customer parking. Business-purpose credit, structured on terms of 60 to 84 months.":
      ["Sistemas comerciais de bateria de até 135 kWh — dimensionados para substituir um gerador standby a diesel de 50 a 100 kW — e recarga de EV para frotas, empresas e estacionamentos. Crédito para fins empresariais, estruturado em prazos de 60 a 84 meses.",
       "Sistemas comerciales de batería de hasta 135 kWh — dimensionados para reemplazar un generador diésel de respaldo de 50 a 100 kW — y carga de EV para flotas, empresas y estacionamientos. Crédito con fines comerciales, estructurado a plazos de 60 a 84 meses."],
    "Business-purpose credit · terms negotiated per project": ["Crédito para fins empresariais · condições negociadas por projeto", "Crédito con fines comerciales · términos negociados por proyecto"],
    "Check your rate for battery and water systems.": ["Consulte sua taxa para sistemas de bateria e água.", "Consulta tu tasa para sistemas de batería y agua."],
    "A soft rate check in minutes for battery and water systems — and a human answer within one business day for everything else.":
      ["Consulta suave de taxa em minutos para sistemas de bateria e água — e resposta humana em até um dia útil para todo o resto.",
       "Consulta blanda de tasa en minutos para sistemas de batería y agua — y respuesta humana dentro de un día hábil para todo lo demás."],

    /* ---------- Mobility page ---------- */
    "MOBILITY & FLEET": ["MOBILIDADE E FROTA", "MOVILIDAD Y FLOTA"],
    "Auto financing at the dealer, lease-to-own for trucks, and credit against invoices the business already issued. Eos is the lender on every one of them.":
      ["Financiamento de auto no dealer, lease-to-own de caminhões e crédito sobre notas que o negócio já emitiu. A Eos é a credora em todos eles.",
       "Financiamiento de autos en el dealer, lease-to-own de camiones y crédito sobre facturas que el negocio ya emitió. Eos es el prestamista en todos."],
    "The programs": ["Os programas", "Los programas"],
    "Four financing programs.": ["Quatro programas de financiamento.", "Cuatro programas de financiamiento."],
    "AUTO": ["AUTO", "AUTO"],
    "Financing at the dealer.": ["Financiamento no dealer.", "Financiamiento en el dealer."],
    "Consumer auto credit closed where the car is — at the dealership. SSN or ITIN.":
      ["Crédito consumer de auto fechado onde o carro está — na concessionária. SSN ou ITIN.",
       "Crédito consumer de auto cerrado donde está el carro — en el concesionario. SSN o ITIN."],
    "TRUCK LEASE-TO-OWN": ["LEASE-TO-OWN DE CAMINHÃO", "LEASE-TO-OWN DE CAMIÓN"],
    "48 MO": ["48 MESES", "48 MESES"],
    "Lease-to-own over 48 months.": ["Lease-to-own em 48 meses.", "Lease-to-own a 48 meses."],
    "Business-purpose lease-to-own on a 48-month structure. Ownership at the end.":
      ["Lease-to-own para fins empresariais em estrutura de 48 meses. Propriedade no final.",
       "Lease-to-own con fines comerciales en estructura de 48 meses. Propiedad al final."],
    "INVOICE TRADING": ["ANTECIPAÇÃO DE RECEBÍVEIS", "ADELANTO DE FACTURAS"],
    "30–120 DAYS": ["30–120 DIAS", "30–120 DÍAS"],
    "Advance payment on issued invoices.": ["Antecipação sobre notas emitidas.", "Adelanto sobre facturas emitidas."],
    "Business-purpose credit against invoices, 30 to 120 days each, priced per operation.":
      ["Crédito para fins empresariais sobre notas, de 30 a 120 dias cada, precificado por operação.",
       "Crédito con fines comerciales sobre facturas, de 30 a 120 días cada una, con precio por operación."],
    "AUCTION LINE": ["LINHA DE LEILÃO", "LÍNEA DE SUBASTA"],
    "PILOT": ["PILOTO", "PILOTO"],
    "Auction line.": ["Linha de leilão.", "Línea de subasta."],
    "Currently in pilot — talk to us about availability.": ["Atualmente em piloto — fale conosco sobre disponibilidade.", "Actualmente en piloto — consúltanos por disponibilidad."],
    "All financing is subject to credit approval. Business-purpose programs are priced per operation and sit outside consumer terms.":
      ["Todo financiamento está sujeito a aprovação de crédito. Programas para fins empresariais são precificados por operação e ficam fora dos prazos consumer.",
       "Todo financiamiento está sujeto a aprobación de crédito. Los programas con fines comerciales se cotizan por operación y quedan fuera de los plazos consumer."],
    "A car, a truck or a fleet's cash flow — our team comes back within one business day.":
      ["Um carro, um caminhão ou o caixa de uma frota — nossa equipe retorna em até um dia útil.",
       "Un auto, un camión o el flujo de caja de una flota — nuestro equipo responde dentro de un día hábil."],

    /* ---------- Battery page ---------- */
    "Never lose power. Even during": ["Nunca fique sem energia. Nem durante", "Nunca te quedes sin energía. Ni durante"],
    "outages": ["apagões", "apagones"],
    "Texas leads the country in grid interruptions — more than 90 events a year, and storms that have left millions of homes dark for days. A battery system takes the house over automatically in under 20 milliseconds. The family never notices the transition.":
      ["O Texas lidera o país em interrupções de rede — mais de 90 eventos por ano, e tempestades que já deixaram milhões de casas no escuro por dias. Um sistema de bateria assume a casa automaticamente em menos de 20 milissegundos. A família nem percebe a transição.",
       "Texas lidera el país en interrupciones de red — más de 90 eventos al año, y tormentas que han dejado millones de casas a oscuras por días. Un sistema de batería asume la casa automáticamente en menos de 20 milisegundos. La familia ni nota la transición."],
    "Get a free assessment": ["Solicitar avaliação gratuita", "Solicitar evaluación gratuita"],
    "See the system": ["Ver o sistema", "Ver el sistema"],
    "Free and no obligation · 2-minute planner · remote photo survey": ["Grátis e sem compromisso · planner de 2 minutos · vistoria remota por fotos", "Gratis y sin compromiso · planificador de 2 minutos · relevamiento remoto por fotos"],
    "Transfer when the grid drops": ["Transferência quando a rede cai", "Transferencia cuando cae la red"],
    "Quieter than a conversation": ["Mais silencioso que uma conversa", "Más silencioso que una conversación"],
    "Warranty on the main components": ["Garantia dos componentes principais", "Garantía de los componentes principales"],
    "Contract to energization": ["Do contrato à energização", "Del contrato a la energización"],
    "Not a generator": ["Não é um gerador", "No es un generador"],
    "Backup power without the noise, the fuel or the fumes.": ["Energia de backup sem barulho, sem combustível e sem fumaça.", "Energía de respaldo sin ruido, sin combustible y sin humo."],
    "Under 25 dB. Nothing to hear from inside the house, and nothing for the HOA to object to.":
      ["Menos de 25 dB. Nada para ouvir de dentro de casa, e nada para a associação de moradores (HOA) reclamar.",
       "Menos de 25 dB. Nada que oír desde dentro de la casa, y nada que la asociación de propietarios (HOA) pueda objetar."],
    "No fuel, no fumes": ["Sem combustível, sem fumaça", "Sin combustible, sin humo"],
    "No gasoline to store, no exhaust, no carbon monoxide near the house.": ["Sem gasolina para armazenar, sem escapamento, sem monóxido de carbono perto da casa.", "Sin gasolina que almacenar, sin escape, sin monóxido de carbono cerca de la casa."],
    "No maintenance": ["Sem manutenção", "Sin mantenimiento"],
    "Nothing to service between outages. An annual inspection is included in the service plans.": ["Nada para revisar entre um apagão e outro. Uma inspeção anual está incluída nos planos de serviço.", "Nada que revisar entre apagones. Una inspección anual está incluida en los planes de servicio."],
    "Automatic": ["Automático", "Automático"],
    "No switch to flip and no waiting for a start-up cycle. The house simply stays on.": ["Sem interruptor para acionar e sem espera de partida. A casa simplesmente continua ligada.", "Sin interruptor que accionar y sin ciclo de arranque. La casa simplemente sigue encendida."],
    "OWNERSHIP": ["PROPRIEDADE", "PROPIEDAD"],
    "Own it. Don't rent it.": ["Seja dono. Não alugue.", "Sé dueño. No alquiles."],
    "Most of the market sells backup power as a subscription — you pay every month and the equipment is never yours. With Eos the system belongs to the customer from the start, and it stays with the property as an improvement to it.":
      ["Boa parte do mercado vende backup como assinatura — você paga todo mês e o equipamento nunca é seu. Com a Eos, o sistema é do cliente desde o início e fica com o imóvel como benfeitoria.",
       "Gran parte del mercado vende el respaldo como suscripción — pagas cada mes y el equipo nunca es tuyo. Con Eos, el sistema es del cliente desde el inicio y queda con la propiedad como mejora."],
    "The system": ["O sistema", "El sistema"],
    "A modular system, sized to the house.": ["Um sistema modular, no tamanho da casa.", "Un sistema modular, a la medida de la casa."],
    "One controller pairs with up to six battery modules — 54 kWh in a single stack, or 45 kWh when the bidirectional charger is fitted. Multiple stacks combine when the load calls for it.":
      ["Um controlador combina com até seis módulos de bateria — 54 kWh em um único stack, ou 45 kWh com o carregador bidirecional. Múltiplos stacks se combinam quando a carga exige.",
       "Un controlador se combina con hasta seis módulos de batería — 54 kWh en un solo stack, o 45 kWh con el cargador bidireccional. Varios stacks se combinan cuando la carga lo requiere."],
    "Battery module": ["Módulo de bateria", "Módulo de batería"],
    "9 kWh nominal, 8.76 kWh usable. LFP chemistry, stackable architecture.": ["9 kWh nominais, 8,76 kWh úteis. Química LFP, arquitetura empilhável.", "9 kWh nominales, 8.76 kWh útiles. Química LFP, arquitectura apilable."],
    "Smart controller": ["Controlador inteligente", "Controlador inteligente"],
    "11.5 kW continuous, 17.1 kW surge, with the hybrid inverter built in — battery, grid and solar input managed by one unit.":
      ["11,5 kW contínuos, 17,1 kW de surto, com inversor híbrido integrado — bateria, rede e entrada solar gerenciados por um único equipamento.",
       "11.5 kW continuos, 17.1 kW de pico, con inversor híbrido integrado — batería, red y entrada solar gestionados por una sola unidad."],
    "Smart panel": ["Painel inteligente", "Panel inteligente"],
    "Circuit management and load shedding integrated into the panel. No separate gateway to install.":
      ["Gerenciamento de circuitos e load shedding integrados ao painel. Sem gateway separado para instalar.",
       "Gestión de circuitos y load shedding integrados al panel. Sin gateway separado que instalar."],
    "V2X bidirectional charger": ["Carregador bidirecional V2X", "Cargador bidireccional V2X"],
    "25 kW DC. The electric vehicle becomes a backup battery — a typical EV carries 60 to 100 kWh, more than the largest fixed plan. CCS1 or NACS, dozens of models supported.":
      ["25 kW DC. O veículo elétrico vira bateria de backup — um EV típico carrega de 60 a 100 kWh, mais que o maior plano fixo. CCS1 ou NACS, dezenas de modelos compatíveis.",
       "25 kW DC. El vehículo eléctrico se convierte en batería de respaldo — un EV típico lleva de 60 a 100 kWh, más que el plan fijo más grande. CCS1 o NACS, decenas de modelos compatibles."],
    "Monitoring app": ["App de monitoramento", "App de monitoreo"],
    "Remote tracking, outage notifications and remote diagnostics.": ["Acompanhamento remoto, notificações de queda de energia e diagnóstico à distância.", "Seguimiento remoto, notificaciones de cortes y diagnóstico a distancia."],
    "10-year warranty": ["Garantia de 10 anos", "Garantía de 10 años"],
    "Battery, controller and panel, with a contractual minimum of 70% capacity retention at the end of the term.":
      ["Bateria, controlador e painel, com mínimo contratual de 70% de retenção de capacidade ao fim do prazo.",
       "Batería, controlador y panel, con mínimo contractual de 70% de retención de capacidad al final del plazo."],
    "Sizing": ["Dimensionamento", "Dimensionamiento"],
    "Residential and commercial sizing.": ["Dimensionamento residencial e comercial.", "Dimensionamiento residencial y comercial."],
    "RESIDENTIAL": ["RESIDENCIAL", "RESIDENCIAL"],
    "COMMERCIAL": ["COMERCIAL", "COMERCIAL"],
    "Six to thirty hours of runtime on essential loads, depending on the size of the system and what the house is running.":
      ["De seis a trinta horas de autonomia nas cargas essenciais, conforme o tamanho do sistema e o que a casa estiver usando.",
       "De seis a treinta horas de autonomía en cargas esenciales, según el tamaño del sistema y lo que la casa esté usando."],
    "up to 135 kWh": ["até 135 kWh", "hasta 135 kWh"],
    "Sized to take the place of a 50 to 100 kW diesel standby generator.": ["Dimensionado para substituir um gerador standby a diesel de 50 a 100 kW.", "Dimensionado para reemplazar un generador diésel de respaldo de 50 a 100 kW."],
    "What we sell": ["O que vendemos", "Qué vendemos"],
    "Equipment only, or equipment with installation.": ["Só o equipamento, ou equipamento com instalação.", "Solo el equipo, o equipo con instalación."],
    "Equipment only": ["Só o equipamento", "Solo el equipo"],
    "A single battery or a multi-module system, controller and load hub, V2X module and EV charging infrastructure — shipped to Texas and to other states.":
      ["Uma bateria avulsa ou um sistema multimódulo, controlador e load hub, módulo V2X e infraestrutura de recarga de EV — com entrega no Texas e em outros estados.",
       "Una batería individual o un sistema multimódulo, controlador y load hub, módulo V2X e infraestructura de carga de EV — con envío a Texas y a otros estados."],
    "Equipment and installation": ["Equipamento e instalação", "Equipo e instalación"],
    "The complete project across the Texas metros — Houston, Austin, Dallas, Fort Worth and San Antonio — with expedited scheduling in Greater Houston.":
      ["O projeto completo nas regiões metropolitanas do Texas — Houston, Austin, Dallas, Fort Worth e San Antonio — com agendamento acelerado na Grande Houston.",
       "El proyecto completo en las zonas metropolitanas de Texas — Houston, Austin, Dallas, Fort Worth y San Antonio — con agenda acelerada en el Gran Houston."],
    "End to end": ["De ponta a ponta", "De punta a punta"],
    "Service from assessment to commissioning.": ["Serviço da avaliação ao comissionamento.", "Servicio de la evaluación a la puesta en marcha."],
    "Free assessment": ["Avaliação gratuita", "Evaluación gratuita"],
    "A two-minute digital planner and a remote site survey from photos. No obligation.": ["Um planner digital de dois minutos e uma vistoria remota por fotos. Sem compromisso.", "Un planificador digital de dos minutos y un relevamiento remoto por fotos. Sin compromiso."],
    "Sizing and design": ["Dimensionamento e projeto", "Dimensionamiento y diseño"],
    "Done in-house, against the loads the house actually needs to keep running.": ["Feitos internamente, com base nas cargas que a casa realmente precisa manter.", "Hechos internamente, según las cargas que la casa realmente necesita mantener."],
    "Permitting": ["Licenciamento", "Permisos"],
    "We coordinate the municipal permits and the utility interconnection — typically two to four weeks.":
      ["Coordenamos as licenças municipais e a interconexão com a concessionária — normalmente de duas a quatro semanas.",
       "Coordinamos los permisos municipales y la interconexión con la eléctrica — normalmente de dos a cuatro semanas."],
    "Installation": ["Instalação", "Instalación"],
    "One to two days, by licensed and insured local contractors coordinated by Eos.": ["De um a dois dias, com contractors locais licenciados e segurados, coordenados pela Eos.", "De uno a dos días, con contratistas locales licenciados y asegurados, coordinados por Eos."],
    "Commissioning": ["Comissionamento", "Puesta en marcha"],
    "Inspection and continuous monitoring, with an annual inspection included in the service plans.": ["Inspeção e monitoramento contínuo, com inspeção anual incluída nos planos de serviço.", "Inspección y monitoreo continuo, con inspección anual incluida en los planes de servicio."],
    "Contract to energization: typically 3 to 6 weeks.": ["Do contrato à energização: normalmente de 3 a 6 semanas.", "Del contrato a la energización: normalmente de 3 a 6 semanas."],
    "Paying for it": ["Como pagar", "Cómo pagarlo"],
    "Financed by the same group that installs it.": ["Financiado pelo mesmo grupo que instala.", "Financiado por el mismo grupo que lo instala."],
    "Where the customer and the state are eligible, Eos finances the project through its own credit structure — the same company on the equipment, the installation and the loan. Or pay in full and own the system outright from day one.":
      ["Quando cliente e estado são elegíveis, a Eos financia o projeto pela própria estrutura de crédito — a mesma empresa no equipamento, na instalação e no empréstimo. Ou pague à vista e seja dono integral desde o primeiro dia.",
       "Cuando el cliente y el estado son elegibles, Eos financia el proyecto con su propia estructura de crédito — la misma empresa en el equipo, la instalación y el préstamo. O paga al contado y sé dueño total desde el primer día."],
    "RESIDENTIAL PLANS": ["PLANOS RESIDENCIAIS", "PLANES RESIDENCIALES"],
    "months, fixed installments": ["meses, parcelas fixas", "meses, cuotas fijas"],
    "Terms": ["Prazos", "Plazos"],
    "60 to 72 months": ["60 a 72 meses", "60 a 72 meses"],
    "Eligibility check": ["Checagem de elegibilidade", "Verificación de elegibilidad"],
    "No score impact": ["Sem impacto no score", "Sin impacto en el puntaje"],
    "Prepayment penalty": ["Multa de pré-pagamento", "Penalidad por prepago"],
    "None": ["Nenhuma", "Ninguna"],
    "Pay in full": ["Pagamento à vista", "Pago al contado"],
    "Always an option": ["Sempre uma opção", "Siempre una opción"],
    "Illustrative. Rates shown are the rates we lend at. Your rate depends on your credit tier and the term you choose, and it is confirmed after the credit decision. This is not an offer of credit.":
      ["Ilustrativo. As taxas exibidas são as taxas que praticamos. Sua taxa depende do seu perfil de crédito e do prazo escolhido, e é confirmada após a análise de crédito. Isto não é uma oferta de crédito.",
       "Ilustrativo. Las tasas mostradas son las tasas a las que prestamos. Tu tasa depende de tu perfil de crédito y del plazo que elijas, y se confirma después de la decisión de crédito. Esto no es una oferta de crédito."],
    "Request a free assessment.": ["Solicite uma avaliação gratuita.", "Solicita una evaluación gratuita."],
    "A free assessment, a two-minute planner and a remote survey from photos — then a straight answer on sizing and cost.":
      ["Uma avaliação gratuita, um planner de dois minutos e uma vistoria remota por fotos — depois, uma resposta direta sobre dimensionamento e custo.",
       "Una evaluación gratuita, un planificador de dos minutos y un relevamiento remoto por fotos — luego, una respuesta directa sobre dimensionamiento y costo."],
    "Get my assessment": ["Solicitar minha avaliação", "Solicitar mi evaluación"],
    "How long does the battery run the house?": ["Por quanto tempo a bateria sustenta a casa?", "¿Cuánto tiempo sostiene la batería la casa?"],
    "Residential systems range from 9 to 45 kWh, which is roughly six to thirty hours on essential loads. The exact figure depends on the size of the system and on what you choose to keep running.":
      ["Os sistemas residenciais vão de 9 a 45 kWh, o que dá cerca de seis a trinta horas nas cargas essenciais. O número exato depende do tamanho do sistema e do que você escolher manter ligado.",
       "Los sistemas residenciales van de 9 a 45 kWh, aproximadamente de seis a treinta horas en cargas esenciales. La cifra exacta depende del tamaño del sistema y de lo que elijas mantener encendido."],
    "Do I own the system or subscribe to it?": ["O sistema é meu ou é assinatura?", "¿El sistema es mío o es una suscripción?"],
    "You own it. Eos does not sell backup power as a subscription. If the project is financed, the system is still yours — you are paying off equipment you own, not renting it.":
      ["É seu. A Eos não vende backup como assinatura. Se o projeto for financiado, o sistema continua sendo seu — você está quitando um equipamento próprio, não alugando.",
       "Es tuyo. Eos no vende el respaldo como suscripción. Si el proyecto se financia, el sistema sigue siendo tuyo — estás pagando un equipo propio, no alquilándolo."],
    "Can I buy the equipment without installation?": ["Posso comprar só o equipamento, sem instalação?", "¿Puedo comprar solo el equipo, sin instalación?"],
    "Yes. Equipment-only orders ship to Texas and to other states. Full installation is offered across the Texas metros, with expedited scheduling in Greater Houston.":
      ["Sim. Pedidos só de equipamento são enviados para o Texas e outros estados. A instalação completa é oferecida nas metrópoles do Texas, com agendamento acelerado na Grande Houston.",
       "Sí. Los pedidos de solo equipo se envían a Texas y a otros estados. La instalación completa se ofrece en las metrópolis de Texas, con agenda acelerada en el Gran Houston."],
    "Can my electric vehicle back up the house?": ["Meu veículo elétrico pode servir de backup para a casa?", "¿Mi vehículo eléctrico puede respaldar la casa?"],
    "With the bidirectional 25 kW DC module, yes. A typical EV carries 60 to 100 kWh — more than the largest fixed plan. Dozens of models are supported, over CCS1 or NACS connectors.":
      ["Com o módulo bidirecional de 25 kW DC, sim. Um EV típico carrega de 60 a 100 kWh — mais que o maior plano fixo. Dezenas de modelos compatíveis, por conectores CCS1 ou NACS.",
       "Con el módulo bidireccional de 25 kW DC, sí. Un EV típico lleva de 60 a 100 kWh — más que el plan fijo más grande. Decenas de modelos compatibles, por conectores CCS1 o NACS."],
    "What does the warranty cover?": ["O que a garantia cobre?", "¿Qué cubre la garantía?"],
    "Ten years on the battery, the controller and the panel, with a contractual minimum of 70% capacity retention at the end of the period.":
      ["Dez anos para bateria, controlador e painel, com mínimo contratual de 70% de retenção de capacidade ao fim do período.",
       "Diez años para batería, controlador y panel, con mínimo contractual de 70% de retención de capacidad al final del período."],
    "Will checking financing affect my credit score?": ["Consultar o financiamento afeta meu score?", "¿Consultar el financiamiento afecta mi puntaje?"],
    "No. The eligibility check is a soft pull and does not affect your score. There is also no prepayment penalty if you decide to pay the balance early.":
      ["Não. A checagem de elegibilidade é uma consulta suave e não afeta seu score. Também não há multa se você decidir quitar o saldo antes.",
       "No. La verificación de elegibilidad es una consulta blanda y no afecta tu puntaje. Tampoco hay penalidad si decides saldar antes."],

    /* ---------- Partners page ---------- */
    "Offer Eos financing at your point of sale.": ["Ofereça o financiamento da Eos no seu ponto de venda.", "Ofrece el financiamiento de Eos en tu punto de venta."],
    "Installers, contractors and resellers send their customers to Eos at the moment of sale. We are the lender — we underwrite, fund and service the loan under NMLS #2744537. The originator takes no credit risk and keeps the full margin.":
      ["Instaladores, contractors e revendedores encaminham seus clientes à Eos no momento da venda. Somos a credora — analisamos, liberamos e fazemos o servicing sob a licença NMLS #2744537. O canal não assume risco de crédito e mantém a margem integral.",
       "Instaladores, contratistas y revendedores envían a sus clientes a Eos en el momento de la venta. Somos el prestamista — evaluamos, fondeamos y hacemos el servicing bajo la licencia NMLS #2744537. El canal no asume riesgo de crédito y conserva el margen completo."],
    "WHAT THE ORIGINATOR GETS": ["O QUE O CANAL RECEBE", "QUÉ RECIBE EL CANAL"],
    "Credit risk": ["Risco de crédito", "Riesgo de crédito"],
    "None — Eos carries it": ["Nenhum — a Eos carrega", "Ninguno — Eos lo carga"],
    "Dealer fee": ["Dealer fee", "Dealer fee"],
    "Decision": ["Decisão", "Decisión"],
    "In minutes": ["Em minutos", "En minutos"],
    "Funding": ["Liberação", "Fondeo"],
    "~48h after approval": ["~48h após a aprovação", "~48h tras la aprobación"],
    "Onboarding": ["Onboarding", "Onboarding"],
    "Apply, approve, train": ["Aplicar, aprovar, treinar", "Aplicar, aprobar, capacitar"],
    "All financing is subject to credit approval. Terms vary by product and applicant.": ["Todo financiamento está sujeito a aprovação de crédito. As condições variam por produto e por perfil.", "Todo financiamiento está sujeto a aprobación de crédito. Los términos varían por producto y solicitante."],
    "Why it works": ["Por que funciona", "Por qué funciona"],
    "Why originators offer Eos financing.": ["Por que os canais oferecem o financiamento da Eos.", "Por qué los canales ofrecen el financiamiento de Eos."],
    "Your customer is the borrower. Eos underwrites and carries the loan — your business is never on the hook for it.":
      ["Seu cliente é o tomador. A Eos analisa e carrega o empréstimo — o seu negócio nunca fica responsável por ele.",
       "Tu cliente es el deudor. Eos evalúa y carga el préstamo — tu negocio nunca queda responsable por él."],
    "Most financing programmes deduct a fee from what they pass through to you, which quietly raises the price of the project. Eos does not charge one.":
      ["A maioria dos programas de financiamento desconta uma taxa do valor repassado, o que encarece o projeto sem ninguém ver. A Eos não cobra.",
       "La mayoría de los programas de financiamiento descuentan una comisión de lo que te transfieren, lo que encarece el proyecto sin que se note. Eos no la cobra."],
    "The customer applies from a digital form while you are still in the room, and hears back in minutes — subject to approval.":
      ["O cliente aplica por um formulário digital enquanto você ainda está na sala, e recebe a resposta em minutos — sujeito a aprovação.",
       "El cliente aplica desde un formulario digital mientras aún estás en la sala, y recibe respuesta en minutos — sujeto a aprobación."],
    "Their home stays out of it": ["A casa deles fica fora disso", "Su casa queda fuera de esto"],
    "Home programs are consumer credit that does not touch the equity in the house — no HELOC, and none of the timeline of a mortgage transaction.":
      ["Programas residenciais são crédito consumer que não toca o patrimônio da casa — sem HELOC e sem os prazos de uma operação hipotecária.",
       "Los programas del hogar son crédito consumer que no toca el patrimonio de la casa — sin HELOC y sin los tiempos de una operación hipotecaria."],
    "How it works": ["Como funciona", "Cómo funciona"],
    "How it runs": ["Como funciona", "Cómo funciona"],
    "How the program works.": ["Como o programa funciona.", "Cómo funciona el programa."],
    "You send the link": ["Você envia o link", "Tú envías el enlace"],
    "At the point of sale, from your phone or your quote. Nothing to install.": ["No ponto de venda, do seu celular ou do orçamento. Nada para instalar.", "En el punto de venta, desde tu teléfono o tu cotización. Nada que instalar."],
    "They apply in minutes": ["O cliente aplica em minutos", "El cliente aplica en minutos"],
    "A fully digital form. The initial check is a soft pull and does not affect their score. SSN or ITIN.":
      ["Um formulário totalmente digital. A checagem inicial é uma consulta suave e não afeta o score. SSN ou ITIN.",
       "Un formulario totalmente digital. La verificación inicial es una consulta blanda y no afecta su puntaje. SSN o ITIN."],
    "The decision comes back": ["A decisão retorna", "La decisión vuelve"],
    "In minutes, with a clear monthly payment for the customer. Subject to approval.": ["Em minutos, com uma parcela mensal clara para o cliente. Sujeito a aprovação.", "En minutos, con una cuota mensual clara para el cliente. Sujeto a aprobación."],
    "Eos funds": ["A Eos libera", "Eos fondea"],
    "Average funding turnaround is 48 hours after approval. The customer pays Eos over time.": ["O prazo médio de liberação é de 48 horas após a aprovação. O cliente paga a Eos a prazo.", "El plazo promedio de fondeo es de 48 horas tras la aprobación. El cliente paga a Eos a plazos."],
    "THE DASHBOARD": ["O DASHBOARD", "EL PANEL"],
    "The channel dashboard.": ["O dashboard do canal.", "El panel del canal."],
    "Every application in one place, with its current status. When a customer stops halfway, you generate an updated link and they resume exactly where they left off — no re-typing, no lost deal.":
      ["Todas as aplicações em um só lugar, com o status atual. Quando um cliente para no meio, você gera um novo link e ele retoma exatamente de onde parou — sem redigitar, sem venda perdida.",
       "Todas las solicitudes en un solo lugar, con su estado actual. Cuando un cliente se detiene a la mitad, generas un nuevo enlace y retoma exactamente donde quedó — sin reescribir, sin venta perdida."],
    "APPLICATIONS": ["APLICAÇÕES", "SOLICITUDES"],
    "Amounts and terms shown for illustration only.": ["Valores e prazos exibidos apenas para ilustração.", "Montos y plazos mostrados solo como ilustración."],
    "Who we work with": ["Com quem trabalhamos", "Con quiénes trabajamos"],
    "The categories we finance.": ["As categorias que financiamos.", "Las categorías que financiamos."],
    "Availability of each category depends on the originator and the enrolled product.": ["A disponibilidade de cada categoria depende do canal e do produto cadastrado.", "La disponibilidad de cada categoría depende del canal y del producto registrado."],
    "Availability of each category depends on the originator and the enrolled product. Selling something else? Ask us.":
      ["A disponibilidade de cada categoria depende do canal e do produto cadastrado. Vende outra coisa? Pergunte para a gente.",
       "La disponibilidad de cada categoría depende del canal y del producto registrado. ¿Vendes otra cosa? Pregúntanos."],
    "Auto dealers": ["Concessionárias de auto", "Concesionarios de autos"],
    "Apply": ["Aplicação", "Solicitud"],
    "Onboarding in three steps.": ["Onboarding em três etapas.", "Onboarding en tres pasos."],
    "Application": ["Aplicação", "Solicitud"],
    "The form on this page. Tell us what you sell and roughly how much of it.": ["O formulário desta página. Conte o que você vende e mais ou menos quanto.", "El formulario de esta página. Cuéntanos qué vendes y aproximadamente cuánto."],
    "Approval": ["Aprovação", "Aprobación"],
    "We review the business and enrol the products you will be offering.": ["Analisamos o negócio e cadastramos os produtos que você vai oferecer.", "Revisamos el negocio y registramos los productos que vas a ofrecer."],
    "One training session": ["Um treinamento", "Una capacitación"],
    "Your team learns the flow and the dashboard. Then you are sending links.": ["Sua equipe aprende o fluxo e o dashboard. Depois disso, é só enviar links.", "Tu equipo aprende el flujo y el panel. Después de eso, ya envías enlaces."],
    "State": ["Estado", "Estado"],
    "Anything else": ["Algo mais", "Algo más"],
    "(optional)": ["(opcional)", "(opcional)"],
    "Channel questions.": ["Dúvidas do canal.", "Preguntas del canal."],
    "Does my business take on any credit risk?": ["Meu negócio assume algum risco de crédito?", "¿Mi negocio asume algún riesgo de crédito?"],
    "No. Your customer is the borrower. Eos underwrites, funds and services the loan — if it goes bad, that is our exposure, not yours.":
      ["Não. Seu cliente é o tomador. A Eos analisa, libera e faz o servicing — se der errado, a exposição é nossa, não sua.",
       "No. Tu cliente es el deudor. Eos evalúa, fondea y hace el servicing — si sale mal, la exposición es nuestra, no tuya."],
    "What does it cost to join?": ["Quanto custa participar?", "¿Cuánto cuesta unirse?"],
    "Nothing, and there is no exclusivity. There is also no dealer fee — Eos does not deduct a percentage from what it passes through to you, so the project does not get more expensive because it was financed.":
      ["Nada, e não há exclusividade. Também não há dealer fee — a Eos não desconta percentual do valor repassado, então o projeto não fica mais caro por ter sido financiado.",
       "Nada, y no hay exclusividad. Tampoco hay dealer fee — Eos no descuenta un porcentaje de lo que te transfiere, así que el proyecto no se encarece por haber sido financiado."],
    "How long does onboarding take?": ["Quanto tempo leva o onboarding?", "¿Cuánto tarda el onboarding?"],
    "An application, an approval and one training session. There is no integration work required to start — you send a link.":
      ["Uma aplicação, uma aprovação e um treinamento. Não há integração obrigatória para começar — você envia um link.",
       "Una solicitud, una aprobación y una capacitación. No se requiere integración para empezar — envías un enlace."],
    "What happens if a customer abandons the application?": ["O que acontece se o cliente abandonar a aplicação?", "¿Qué pasa si un cliente abandona la solicitud?"],
    "You see it in the dashboard and generate an updated link. They pick up from where they stopped instead of starting over.":
      ["Você vê no dashboard e gera um novo link. O cliente retoma de onde parou em vez de começar de novo.",
       "Lo ves en el panel y generas un nuevo enlace. El cliente retoma donde quedó en vez de empezar de nuevo."],
    "Can my customers apply with an ITIN?": ["Meus clientes podem aplicar com ITIN?", "¿Mis clientes pueden aplicar con ITIN?"],
    "Yes. Underwriting accepts either a Social Security Number or an ITIN, and the initial check is a soft pull that does not affect their score.":
      ["Sim. O underwriting aceita Social Security Number ou ITIN, e a checagem inicial é uma consulta suave que não afeta o score.",
       "Sí. El underwriting acepta Social Security Number o ITIN, y la verificación inicial es una consulta blanda que no afecta su puntaje."],
    "I sell something not on your list. Can you still finance it?": ["Vendo algo que não está na lista. Vocês financiam mesmo assim?", "Vendo algo que no está en la lista. ¿Aun así lo financian?"],
    "Ask us. Availability depends on the product being enrolled, and the list of categories is not closed.":
      ["Pergunte para a gente. A disponibilidade depende do cadastro do produto, e a lista de categorias não é fechada.",
       "Pregúntanos. La disponibilidad depende del registro del producto, y la lista de categorías no está cerrada."],
    "Join the Eos channel.": ["Torne-se um canal Eos.", "Conviértete en canal de Eos."],
    "Apply below and our channel team will come back within one business day.": ["Aplique abaixo e nossa equipe de canais retorna em até um dia útil.", "Aplica abajo y nuestro equipo de canales responde dentro de un día hábil."],

    /* ---------- Contact / GetStarted ---------- */
    "Talk to our team.": ["Fale com nossa equipe.", "Hable con nuestro equipo."],
    "Tell us about the project, or about joining the channel. A human answers within one business day.":
      ["Conte sobre o projeto, ou sobre entrar no canal. Uma pessoa de verdade responde em até um dia útil.",
       "Cuéntanos sobre el proyecto, o sobre unirte al canal. Una persona real responde dentro de un día hábil."],
    "Name": ["Nome", "Nombre"],
    "I am interested in": ["Tenho interesse em", "Me interesa"],
    "Message": ["Mensagem", "Mensaje"],
    "Send message": ["Enviar mensagem", "Enviar mensaje"],
    "We only use this information to reply to your request.": ["Usamos essas informações apenas para responder à sua solicitação.", "Solo usamos esta información para responder a tu solicitud."],
    "STEP 1 OF 2 · SOFT CREDIT CHECK": ["ETAPA 1 DE 2 · CONSULTA SUAVE DE CRÉDITO", "PASO 1 DE 2 · CONSULTA BLANDA DE CRÉDITO"],
    "Two minutes. Soft credit pull — your score is not affected.": ["Dois minutos. Consulta suave — seu score não é afetado.", "Dos minutos. Consulta blanda — tu puntaje no se ve afectado."],
    "Full name": ["Nome completo", "Nombre completo"],
    "Financing for": ["Financiamento para", "Financiamiento para"],
    "How much do you need?": ["De quanto você precisa?", "¿Cuánto necesitas?"],
    "An estimate is fine — you can adjust later.": ["Uma estimativa basta — você pode ajustar depois.", "Una estimación basta — puedes ajustar después."],
    "How did this project start?": ["Como esse projeto começou?", "¿Cómo empezó este proyecto?"],
    "This affects your cancellation rights under state law.": ["Isso afeta seus direitos de cancelamento pela lei estadual.", "Esto afecta tus derechos de cancelación según la ley estatal."],
    "See my rate": ["Ver minha taxa", "Ver mi tasa"],
    "Checking your rate uses a soft credit inquiry and does not affect your credit score. SSN or ITIN accepted. Eos Loan · NMLS #2744537.":
      ["A consulta de taxa usa uma consulta suave de crédito e não afeta seu score. SSN ou ITIN aceitos. Eos Loan · NMLS #2744537.",
       "Consultar tu tasa usa una consulta blanda y no afecta tu puntaje. Se acepta SSN o ITIN. Eos Loan · NMLS #2744537."],
    "Pre-qualified": ["Pré-qualificado", "Precalificado"],
    "Your APR from": ["Seu APR a partir de", "Tu APR desde"],
    "Illustrative — final terms confirmed by a specialist": ["Ilustrativo — condições finais confirmadas por um especialista", "Ilustrativo — términos finales confirmados por un especialista"],
    "Rates shown are the rates we lend at. Your rate depends on your credit tier and the term you choose, and it is confirmed after the credit decision. This is not an offer of credit.":
      ["As taxas exibidas são as taxas que praticamos. Sua taxa depende do seu perfil de crédito e do prazo escolhido, e é confirmada após a análise de crédito. Isto não é uma oferta de crédito.",
       "Las tasas mostradas son las tasas a las que prestamos. Tu tasa depende de tu perfil de crédito y del plazo que elijas, y se confirma después de la decisión de crédito. Esto no es una oferta de crédito."],
    "Back to home": ["Voltar ao início", "Volver al inicio"],
    "Received.": ["Recebido.", "Recibido."],

    /* ---------- form options (translated labels; values preserved by engine) ---------- */
    "A salesperson or installer reached out to me": ["Um vendedor ou instalador entrou em contato comigo", "Un vendedor o instalador me contactó"],
    "I reached out myself": ["Eu mesmo entrei em contato", "Yo mismo hice el contacto"],
    "Not sure": ["Não sei dizer", "No estoy seguro"],
    "Real estate — Fix & Flip": ["Imóveis — Fix & Flip", "Bienes raíces — Fix & Flip"],
    "Real estate — Fix & Keep": ["Imóveis — Fix & Keep", "Bienes raíces — Fix & Keep"],
    "Real estate — Fix & Hold": ["Imóveis — Fix & Hold", "Bienes raíces — Fix & Hold"],
    "Residential battery & backup": ["Bateria residencial e backup", "Batería residencial y respaldo"],
    "Water filtration": ["Filtração de água", "Filtración de agua"],
    "Solar + battery": ["Solar + bateria", "Solar + batería"],
    "Utilities — other": ["Utilities — outros", "Utilities — otros"],
    "Commercial storage & EV infrastructure": ["Storage comercial e infraestrutura de EV", "Almacenamiento comercial e infraestructura de EV"],
    "Offer credit to my clients": ["Oferecer crédito aos meus clientes", "Ofrecer crédito a mis clientes"],
    "Auto dealer": ["Concessionária de auto", "Concesionario de autos"],
    "Other": ["Outro", "Otro"],
    "Prefer not to say": ["Prefiro não dizer", "Prefiero no decir"],
    "Under 10 jobs/month": ["Menos de 10 serviços/mês", "Menos de 10 trabajos/mes"],
    "10 to 50 jobs/month": ["10 a 50 serviços/mês", "10 a 50 trabajos/mes"],
    "Over 50 jobs/month": ["Mais de 50 serviços/mês", "Más de 50 trabajos/mes"],
    "Water filtration · $6,800 ·": ["Filtração de água · US$ 6.800 ·", "Filtración de agua · US$ 6,800 ·"],
    "Texas": ["Texas", "Texas"],
    "Florida": ["Flórida", "Florida"]
  };

  /* Attribute strings (placeholders, titles, aria-labels, alts) */
  var A = {
    "Work or personal email": ["E-mail pessoal ou de trabalho", "Correo personal o de trabajo"],
    "you@example.com": ["voce@exemplo.com", "tu@ejemplo.com"],
    "you@company.com": ["voce@empresa.com", "tu@empresa.com"],
    "Your full name": ["Seu nome completo", "Tu nombre completo"],
    "Your company name": ["Nome da sua empresa", "Nombre de tu empresa"],
    "Your email": ["Seu e-mail", "Tu correo"],
    "Full name": ["Nome completo", "Nombre completo"],
    "As it appears on your ID": ["Como está no seu documento", "Como aparece en tu identificación"],
    "Optional": ["Opcional", "Opcional"],
    "$25,000": ["US$ 25.000", "US$ 25,000"],
    "(000) 000-0000": ["(000) 000-0000", "(000) 000-0000"],
    "Tell us a little about the project…": ["Conte um pouco sobre o projeto…", "Cuéntanos un poco sobre el proyecto…"],
    "Tell us a little about the business…": ["Conte um pouco sobre o negócio…", "Cuéntanos un poco sobre el negocio…"],
    "Chat on WhatsApp": ["Falar no WhatsApp", "Hablar por WhatsApp"],
    "Open menu": ["Abrir menu", "Abrir menú"],
    "Close menu": ["Fechar menu", "Cerrar menú"],
    "Eos Loan home": ["Página inicial da Eos Loan", "Inicio de Eos Loan"],
    "Language": ["Idioma", "Idioma"],
    "Play the Fix & Flip film": ["Reproduzir o filme Fix & Flip", "Reproducir la película Fix & Flip"],
    "Play the Eos Pay film": ["Reproduzir o filme do Eos Pay", "Reproducir la película de Eos Pay"],
    "Play the Eos brand film": ["Reproduzir o filme da marca Eos", "Reproducir la película de la marca Eos"],
    "Play the embedded finance film": ["Reproduzir o filme de financiamento embarcado", "Reproducir la película de financiamiento integrado"],
    "Single-family home on a quiet street": ["Casa unifamiliar em uma rua tranquila", "Casa unifamiliar en una calle tranquila"],
    "Family at home in the evening": ["Família em casa à noite", "Familia en casa por la noche"],
    "Family in the backyard of their home": ["Família no quintal de casa", "Familia en el patio de su casa"],
    "Woman smiling outdoors": ["Mulher sorrindo ao ar livre", "Mujer sonriendo al aire libre"],
    "Commercial battery installation": ["Instalação de bateria comercial", "Instalación de batería comercial"],
    "Commercial battery storage installation": ["Instalação de storage comercial de baterias", "Instalación de almacenamiento comercial de baterías"],
    "Semi truck on the highway at dawn": ["Caminhão na rodovia ao amanhecer", "Camión en la carretera al amanecer"],
    "Customer receiving car keys at a dealership": ["Cliente recebendo as chaves do carro na concessionária", "Cliente recibiendo las llaves del auto en el concesionario"],
    "Eos credit card being used on a payment terminal": ["Cartão de crédito Eos usado em uma maquininha", "Tarjeta de crédito Eos usada en una terminal de pago"]
  };

  /* Regex rules for strings with dynamic fragments (names, emails) */
  var R = [
    { re: /^Thanks(, [^—]+)? — our channel team will reach out at\s*$/, pt: function (m) { return "Obrigado" + (m[1] || "") + " — nossa equipe de canais vai falar com você em "; }, es: function (m) { return "Gracias" + (m[1] || "") + " — nuestro equipo de canales te contactará en "; } },
    { re: /^Thanks(, [^—]+)? — our team will reach out at\s*$/, pt: function (m) { return "Obrigado" + (m[1] || "") + " — nossa equipe vai falar com você em "; }, es: function (m) { return "Gracias" + (m[1] || "") + " — nuestro equipo te contactará en "; } },
    { re: /^\s*within one business day about\s*$/, pt: function () { return " em até um dia útil sobre "; }, es: function () { return " dentro de un día hábil sobre "; } },
    { re: /^Based on a soft pull — your score wasn't touched\. We sent next steps to\s*$/, pt: function () { return "Com base em uma consulta suave — seu score não foi tocado. Enviamos os próximos passos para "; }, es: function () { return "Con base en una consulta blanda — tu puntaje no fue tocado. Enviamos los próximos pasos a "; } },
    { re: /^\. A loan specialist confirms final terms; no obligation\.\s*$/, pt: function () { return ". Um especialista confirma as condições finais; sem compromisso."; }, es: function () { return ". Un especialista confirma los términos finales; sin compromiso."; } }
  ];

  /* ------------------------------------------------------------------ */
  /* Engine                                                              */
  /* ------------------------------------------------------------------ */
  var IDX = { pt: 0, es: 1 };
  var originals = new WeakMap(); // text node -> original EN
  var attrOriginals = new WeakMap(); // element -> {attr: original EN}
  var current = "en";
  var applying = false;

  function norm(t) { return t.replace(/\s+/g, " ").trim(); }

  function translateText(orig, lang) {
    var n = norm(orig);
    if (!n) return null;
    var hit = D[n];
    if (hit) {
      var out = hit[IDX[lang]];
      // preserve leading/trailing whitespace of the original node
      var lead = orig.match(/^\s*/)[0];
      var trail = orig.match(/\s*$/)[0];
      return lead + out + trail;
    }
    for (var i = 0; i < R.length; i++) {
      var m = orig.match(R[i].re);
      if (m) return (lang === "pt" ? R[i].pt : R[i].es)(m);
    }
    return null;
  }

  function eachTextNode(root, fn) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var p = node.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.tagName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(fn);
  }

  var ATTRS = ["placeholder", "title", "aria-label", "alt"];
  function eachAttr(root, fn) {
    var els = root.querySelectorAll ? root.querySelectorAll("[placeholder],[title],[aria-label],[alt]") : [];
    for (var i = 0; i < els.length; i++) fn(els[i]);
    if (root.getAttribute) fn(root);
  }

  function apply(lang, root) {
    applying = true;
    root = root || document.body;
    eachTextNode(root, function (node) {
      var orig = originals.get(node);
      if (orig === undefined) { orig = node.nodeValue; }
      var isOption = node.parentElement && node.parentElement.tagName === "OPTION";
      if (isOption) {
        var opt = node.parentElement;
        if (!opt.hasAttribute("value")) opt.setAttribute("value", norm(orig));
      }
      if (lang === "en") {
        if (originals.has(node) && node.nodeValue !== orig) node.nodeValue = orig;
        return;
      }
      var t = translateText(orig, lang);
      if (t !== null) {
        if (!originals.has(node)) originals.set(node, orig);
        if (node.nodeValue !== t) node.nodeValue = t;
      }
    });
    eachAttr(root, function (el) {
      if (!el.getAttribute) return;
      var store = attrOriginals.get(el);
      for (var i = 0; i < ATTRS.length; i++) {
        var a = ATTRS[i];
        var cur = el.getAttribute(a);
        if (cur === null) continue;
        var orig = store && store[a] !== undefined ? store[a] : cur;
        if (lang === "en") {
          if (store && store[a] !== undefined && cur !== store[a]) el.setAttribute(a, store[a]);
          continue;
        }
        var hit = A[norm(orig)];
        if (hit) {
          if (!store) { store = {}; attrOriginals.set(el, store); }
          if (store[a] === undefined) store[a] = orig;
          var v = hit[IDX[lang]];
          if (cur !== v) el.setAttribute(a, v);
        }
      }
    });
    applying = false;
  }

  /* ---------- language switcher wiring ---------- */
  function styleSwitchers() {
    var els = document.querySelectorAll("[data-eos-lang]");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var on = el.getAttribute("data-eos-lang") === current;
      el.style.color = on ? "" : "";
      el.style.fontWeight = on ? "700" : "";
      el.style.opacity = on ? "1" : "";
      el.classList.toggle("eos-lang-active", on);
    }
  }

  function wireSwitchers(root) {
    var els = (root || document).querySelectorAll("[data-eos-lang]:not([data-eos-wired])");
    for (var i = 0; i < els.length; i++) {
      (function (el) {
        el.setAttribute("data-eos-wired", "1");
        el.style.cursor = "pointer";
        el.removeAttribute("title");
        el.addEventListener("click", function (ev) {
          ev.preventDefault();
          setLang(el.getAttribute("data-eos-lang"));
        });
      })(els[i]);
    }
    styleSwitchers();
  }

  function setLang(lang) {
    if (!LANGS[lang]) lang = "en";
    current = lang;
    try { localStorage.setItem("eos-lang", lang); } catch (e) {}
    document.documentElement.lang = LANGS[lang];
    apply(lang);
    styleSwitchers();
  }

  /* ---------- observer: re-apply after React re-renders ---------- */
  var scheduled = false;
  function schedule() {
    if (applying || scheduled) return;
    scheduled = true;
    setTimeout(function () {
      scheduled = false;
      wireSwitchers(document);
      if (current !== "en") apply(current);
      styleSwitchers();
    }, 50);
  }

  function boot() {
    var saved = "en";
    try { saved = localStorage.getItem("eos-lang") || "en"; } catch (e) {}
    try {
      var qs = new URLSearchParams(location.search).get("lang");
      if (qs && LANGS[qs]) { saved = qs; try { localStorage.setItem("eos-lang", qs); } catch (e) {} }
    } catch (e) {}
    current = LANGS[saved] ? saved : "en";
    document.documentElement.lang = LANGS[current];
    wireSwitchers(document);
    if (current !== "en") apply(current);
    styleSwitchers();
    var mo = new MutationObserver(function (muts) {
      if (applying) return;
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === "childList" && (m.addedNodes.length || m.removedNodes.length)) { schedule(); return; }
        if (m.type === "characterData") { schedule(); return; }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  window.__eosLang = { set: setLang, get: function () { return current; } };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { setTimeout(boot, 300); });
  } else {
    setTimeout(boot, 300);
  }
})();
