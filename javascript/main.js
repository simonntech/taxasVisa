// Texto base: "FINALIDADE: (CONFORME LEI ESTADUAL N.º 15.266 DE 26 DE DEZEMBRO DE 2013) VALOR EM UFESP: *valor*  (TAXA DE FISCALIZAÇÃO PARA RENOVAÇÃO DA LICENÇA DE FUNCIONAMENTO PARA ATIVIDADE DE FORNECIMENTO DE ALIMENTOS PREPARADOS PREPONDERANTEMENTE PARA EMPRESAS)"

const activities = [
    // 1.1.1. Indústria de alimentos
    { texto: 'Refino e outros tratamentos do sal', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de conservas de frutas', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de conservas de palmito', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de conservas de legumes e outros vegetais, exceto palmito', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de óleos vegetais em bruto, exceto óleo de milho', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de óleos vegetais refinados, exceto óleo de milho', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de margarina e outras gorduras vegetais e de óleos não comestíveis de animais', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de sorvetes e outros gelados comestíveis - Por indústria', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de sorvetes e outros gelados comestíveis - Por sorveteria', valor: 'R$ 1.690,48' },
    { texto: 'Beneficiamento de arroz', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de produtos do arroz', valor: 'R$ 4.226,20' },
    { texto: 'Moagem de trigo e fabricação de derivados', valor: 'R$ 4.226,20' },
    { texto: 'Produção de farinha de mandioca e derivados', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de farinha de milho e derivados, exceto óleo de milho', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de amidos e féculas de vegetais', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de óleo de milho em bruto', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de óleo de milho refinado', valor: 'R$ 4.226,20' },
    { texto: 'Moagem e fabricação de produtos de origem vegetal, não especificados anteriormente', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de açúcar em bruto', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de açúcar de cana refinado', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de açúcar de cereais (dextrose) e de beterraba', valor: 'R$ 4.226,20' },
    { texto: 'Beneficiamento de café', valor: 'R$ 4.226,20' },
    { texto: 'Torrefação e moagem do café', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de produtos a base de café', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de produtos de panificação industrial', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de produtos de padaria e confeitaria com predominância de produção própria', valor: 'R$ 1.267,86' },
    { texto: 'Fabricação de biscoitos e bolachas', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de produtos derivados do cacau e de chocolates', valor: 'R$ 4.226,20' },
    { texto: 'Produção de frutas cristalizadas, balas e semelhantes', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de massas alimentícias', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de especiarias, molhos, temperos e condimentos', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de alimentos e pratos prontos', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de pós alimentícios', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de gelo comum', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de produtos para infusão', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de adoçantes naturais e artificiais', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de alimentos dietéticos e complementos alimentares', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de outros produtos alimentícios não especificados anteriormente', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de bebidas isotônicas', valor: 'R$ 4.226,20' },
    { texto: 'Atividades de armazenamento de alimentos em depósito fechado', valor: 'R$ 1.267,86' },
  
    // 1.1.2. Indústria de água mineral
    { texto: 'Fabricação de águas envasadas', valor: 'R$ 4.226,20' },
    { texto: 'Atividades de armazenamento de água mineral em depósito fechado', valor: 'R$ 1.267,86' },
  
    // 1.1.3. Indústria de aditivos para alimentos
    { texto: 'Fabricação de fermentos e leveduras', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de outros produtos inorgânicos, não especificados', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de outros produtos químicos orgânicos não especificados', valor: 'R$ 4.226,20' },
    { texto: 'Atividades de armazenamento de aditivos de alimentos em depósito fechado', valor: 'R$ 1.267,86' },
  
    // 1.1.4. Indústria de embalagens de alimentos
    { texto: 'Fabricação de embalagens de papel', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de embalagens de cartolina e papel-cartão', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de chapas e de embalagens de papelão ondulado', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de tintas, vernizes, esmaltes e lacas', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de embalagem de material plástico', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de embalagens de vidro', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de produtos cerâmicos refratários', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de produtos cerâmicos não refratários não especificados anteriormente', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de embalagens metálicas', valor: 'R$ 4.226,20' },
    { texto: 'Atividades de armazenamento de embalagens de alimentos em depósito fechado', valor: 'R$ 1.267,86' },
  
    // 1.1.5. Indústria de produtos para a saúde
    { texto: 'Fabricação de artefatos de borracha não especificados anteriormente', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de aparelhos eletromédicos e eletroterapêuticos e equipamentos de irradiação', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de outras máquinas e equipamentos de uso geral, não especificados anteriormente, peças e acessórios', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de bicicletas e triciclos não motorizados, peças e acessórios (fabricação de cadeira de rodas)', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de instrumentos não-eletrônicos e utensílios para uso médico, cirúrgico, odontológico e de laboratório', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de mobiliário para uso médico, cirúrgico, odontológico e de laboratório', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de aparelhos e utensílios para correção de defeitos físicos e aparelhos ortopédicos em geral, exceto sob encomenda', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de materiais para medicina e odontologia - Para fabricação', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de materiais para medicina e odontologia - Para unidades de esterilização', valor: 'R$ 2.958,34' },
    { texto: 'Fabricação de artigos ópticos (a fabricação de lentes de contato e lentes intra-oculares)', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de equipamentos e acessórios para segurança pessoal e profissional', valor: 'R$ 4.226,20' },
    { texto: 'Atividades de armazenamento de produtos para saúde em depósito fechado', valor: 'R$ 1.267,86' },
    { texto: 'Desenvolvimento e licenciamento de programas de computador não customizáveis (software produto para saúde)', valor: 'R$ 1.267,86' },
  
    // 1.1.6. Indústria de cosméticos, produtos de higiene e perfumes
    { texto: 'Fabricação de fraldas descartáveis', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de absorventes higiênicos', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de cosméticos, produtos de perfumaria e de higiene pessoal', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de escovas, pincéis e vassouras (escova, fio e fita dental)', valor: 'R$ 4.226,20' },
    { texto: 'Atividades de armazenamento de cosméticos, produtos de higiene e perfumes em depósito fechado', valor: 'R$ 1.267,86' },
  
    // 1.1.7. Indústria de saneantes e domissanitários
    { texto: 'Fabricação de desinfetantes domissanitários', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de sabões e detergentes sintéticos', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de produtos de limpeza e polimento', valor: 'R$ 4.226,20' },
    { texto: 'Atividades de armazenamento de saneantes domissanitários em depósito fechado', valor: 'R$ 1.267,86' },
  
    // 1.1.8. Indústria de medicamentos
    { texto: 'Fabricação de gases industriais (medicinais)', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de medicamentos alopáticos para uso humano', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de medicamentos homeopáticos para uso humano', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de medicamentos fitoterápicos para uso humano', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de preparações farmacêuticas', valor: 'R$ 4.226,20' },
    { texto: 'Atividades de armazenamento de medicamentos em depósito fechado', valor: 'R$ 1.267,86' },
  
    // 1.1.9. Indústria de farmoquímicos
    { texto: 'Fabricação de produtos farmoquímicos', valor: 'R$ 4.226,20' },
    { texto: 'Atividades de armazenamento de farmoquímicos em depósito fechado', valor: 'R$ 1.267,86' },
  
    // 1.1.10. Indústria de produtos e preparados químicos diversos com utilização de precursores
    { texto: 'Fabricação de adesivos e selantes com utilização de precursores na síntese química', valor: 'R$ 4.226,20' },
    { texto: 'Fabricação de aditivos de uso industrial com utilização de precursores na síntese química', valor: 'R$ 4.226,20' },
    { texto: 'Atividades de armazenamento de produtos e preparados químicos diversos/precursores em depósito fechado', valor: 'R$ 1.267,86' },
  
    // 1.1.11. Comércio atacadista de alimentos
    { texto: 'Comércio atacadista de café em grão', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de soja', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de cacau', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de leite e laticínios', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de cereais e leguminosas beneficiados', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de farinhas, amidos e féculas', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de frutas, verduras, raízes, tubérculos, hortaliças e legumes frescos', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de aves vivas e ovos', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de carnes bovinas, suínas e derivados', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de aves abatidas e derivados', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de pescados e frutos do mar', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de carnes e derivados de outros animais', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de água mineral', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de cerveja, chope e refrigerante', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de bebidas não especificadas anteriormente', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de café torrado, moído e solúvel', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de açúcar', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de óleos e gorduras', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de pães, bolos, biscoitos e similares', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de massas alimentícias', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de sorvetes', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de chocolates, confeitos, balas, bombons e semelhantes', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista especializado em outros produtos alimentícios não especificados anteriormente', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de produtos alimentícios em geral', valor: 'R$ 1.690,48' },
  
    // 1.1.12. Comércio atacadista de correlatos/produtos para a saúde
    { texto: 'Comércio atacadista de instrumentos e materiais para uso médico, cirúrgico, hospitalar e de laboratórios', valor: 'R$ 1.267,86' },
    { texto: 'Comércio atacadista de próteses e artigos de ortopedia', valor: 'R$ 1.267,86' },
    { texto: 'Comércio atacadista de produtos odontológicos', valor: 'R$ 1.267,86' },
    { texto: 'Comércio atacadista de máquinas, aparelhos e equipamentos para uso odonto-médico hospitalar; partes e peças', valor: 'R$ 1.267,86' },
  
    // 1.1.13. Comércio atacadista de cosméticos, produtos de higiene e perfumes
    { texto: 'Comércio atacadista de cosméticos e produtos de perfumaria', valor: 'R$ 1.267,86' },
    { texto: 'Comércio atacadista de produtos de higiene pessoal', valor: 'R$ 1.267,86' },
  
    // 1.1.14. Comércio atacadista de saneantes domissanitários
    { texto: 'Comércio atacadista de produtos de higiene, limpeza e conservação domiciliar', valor: 'R$ 1.267,86' },
    { texto: 'Comércio atacadista de defensivos agrícolas, adubos, fertilizantes e corretivos do solo (sanitários)', valor: 'R$ 1.267,86' },
  
    // 1.1.15. Comércio atacadista de medicamentos
    { texto: 'Comércio atacadista de medicamentos e drogas de uso humano - Com fracionamento', valor: 'R$ 1.690,48' },
    { texto: 'Comércio atacadista de medicamentos e drogas de uso humano - Sem fracionamento', valor: 'R$ 1.267,86' },
  
    // 1.1.16. Comércio atacadista de diversas classes de produtos
    { texto: 'Comércio atacadista de mercadorias em geral, com predominância de produtos alimentícios', valor: 'R$ 1.267,86' },
    { texto: 'Comércio atacadista de mercadorias em geral, sem pedunculância de alimentos ou de insumos agropecuários', valor: 'R$ 1.267,86' },
  
    // 1.1.17. Comércio varejista de alimentos
    { texto: 'Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - hipermercados', valor: 'R$ 2.958,34' },
    { texto: 'Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - supermercados', valor: 'R$ 2.958,34' },
    { texto: 'Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - minimercados, mercearias e armazéns', valor: 'R$ 1.267,86' },
    { texto: 'Padaria e confeitaria com predominância de revenda', valor: 'R$ 1.267,86' },
    { texto: 'Comércio varejista de laticínios e frios', valor: 'R$ 1.267,86' },
    { texto: 'Comércio varejista de doces, balas, bombons e semelhantes', valor: 'R$ 845,24' },
    { texto: 'Comércio varejista de carnes - açougues', valor: 'R$ 1.267,86' },
    { texto: 'Peixaria', valor: 'R$ 1.267,86' },
    { texto: 'Comércio varejista de bebidas', valor: 'R$ 845,24' },
    { texto: 'Comércio varejista de hortifrúti-granjeiros', valor: 'R$ 845,24' },
    { texto: 'Comércio varejista de produtos alimentícios em geral, ou especializado em produtos alimentícios não especificados anteriormente', valor: 'R$ 845,24' },
    { texto: 'Comércio varejista de mercadorias em lojas de conveniência', valor: 'R$ 1.267,86' },
    { texto: 'Restaurantes e similares', valor: 'R$ 1.690,48' },
    { texto: 'Bares e outros estabelecimentos especializados em servir bebidas', valor: 'R$ 1.690,48' },
    { texto: 'Lanchonete, casas de chá, de sucos e similares', valor: 'R$ 1.267,86' },
    { texto: 'Serviços ambulantes de alimentação', valor: 'R$ 1.267,86' },
    { texto: 'Fornecimento de alimentos preparados preponderantemente para empresas', valor: 'R$ 4.226,20' },
    { texto: 'Serviços de alimentação para eventos e recepções - bufê', valor: 'R$ 1.690,48' },
    { texto: 'Cantina - serviço de alimentação privativo', valor: 'R$ 1.267,86' },
    { texto: 'Fornecimento de alimentos preparados preponderantemente para consumo domiciliar', valor: 'R$ 1.690,48' },
  
    // 1.1.18. Comércio varejista de medicamentos
    { texto: 'Comércio varejista de produtos farmacêuticos, sem manipulação de fórmulas - Para drogarias', valor: 'R$ 1.690,48' },
    { texto: 'Comércio varejista de produtos farmacêuticos, sem manipulação de fórmulas - Para posto de medicamentos e ervanaria', valor: 'R$ 1.267,86' },
    { texto: 'Comércio varejista de produtos farmacêuticos, com manipulação de fórmulas', valor: 'R$ 2.113,10' },
    { texto: 'Comércio varejista de produtos farmacêuticos homeopáticos', valor: 'R$ 1.690,48' },
  
    // 1.1.19. Comércio varejista de cosméticos
    { texto: 'Comércio varejista de cosméticos, produtos de perfumaria e de higiene pessoal', valor: 'R$ 1.267,86' },
  
    // 1.1.20. Envasamento e empacotamento de produtos relacionados à saúde
    { texto: 'Envasamento e empacotamento sob contrato', valor: 'R$ 1.267,86' },
  
    // 1.1.21. Depósito de produtos relacionados à saúde
    { texto: 'Armazéns gerais - emissão de warrants', valor: 'R$ 1.267,86' },
    { texto: 'Depósitos de mercadorias para terceiros - exceto armazéns gerais e guarda-móveis', valor: 'R$ 1.267,86' },
  
    // 1.1.22. Transporte de produtos relacionados à saúde
    { texto: 'Transporte rodoviário de cargas, exceto produtos perigosos e mudanças, municipal', valor: 'R$ 1.267,86' },
    { texto: 'Transporte rodoviário de cargas, exceto produtos perigosos e mudanças intermunicipal, interestadual e internacional', valor: 'R$ 1.267,86' },
  
    // 1.1.23. Esterilização e controle de pragas urbanas
    { texto: 'Controle de pragas urbanas', valor: 'R$ 1.690,48' },
    { texto: 'Atividades de limpeza não especificadas anteriormente (serviços de esterilização)', valor: 'R$ 1.690,48' },
  
    // 1.2.1. Prestação de serviço de saúde
    { texto: 'Atividades de psicologia e psicanálise', valor: 'R$ 633,93' },
    { texto: 'Atividades de atendimento hospitalar, exceto pronto-socorro e unidades para atendimento e urgências - Até 50 leitos', valor: 'R$ 1.690,48' },
    { texto: 'Atividades de atendimento hospitalar, exceto pronto-socorro e unidades para atendimento e urgências - De 51 a 250 leitos', valor: 'R$ 2.958,34' },
    { texto: 'Atividades de atendimento hospitalar, exceto pronto-socorro e unidades para atendimento e urgências - Mais de 250 leitos', valor: 'R$ 4.226,20' },
    { texto: 'Dispensário de medicamentos', valor: 'R$ 1.267,86' },
    { texto: 'Farmácia hospitalar', valor: 'R$ 2.113,10' },
    { texto: 'Atividades de atendimento em pronto-socorro e unidades hospitalares para atendimento a urgências - Dispensário de medicamento', valor: 'R$ 1.267,86' },
    { texto: 'UTI móvel', valor: 'R$ 1.690,48' },
    { texto: 'Serviços móveis de atendimento a urgências, exceto por UTI móvel', valor: 'R$ 1.690,48' },
    { texto: 'Serviços de remoção de pacientes, exceto os serviços móveis de atendimento a urgências', valor: 'R$ 422,62' },
    { texto: 'Atividade médica ambulatorial com recursos para realização de procedimentos cirúrgicos', valor: 'R$ 1.690,48' },
    { texto: 'Atividade médica ambulatorial com recursos para realização de exames complementares', valor: 'R$ 1.267,86' },
    { texto: 'Atividade médica ambulatorial restrita a consultas', valor: 'R$ 633,93' },
    { texto: 'Atividade odontológica - Consultório odontológico', valor: 'R$ 633,93' },
    { texto: 'Atividade odontológica - Demais estabelecimentos odontológicos', valor: 'R$ 1.479,17' },
    { texto: 'Serviços de vacinação e imunização humana', valor: 'R$ 1.267,86' },
    { texto: 'Atividade de reprodução humana assistida', valor: 'R$ 1.267,86' },
    { texto: 'Laboratórios de anatomia patológica e citológica', valor: 'R$ 845,24' },
    { texto: 'Laboratórios clínicos', valor: 'R$ 845,24' },
    { texto: 'Serviços de diálise e nefrologia', valor: 'R$ 2.113,10' },
    { texto: 'Serviços de tomografia', valor: 'R$ 845,24' },
    { texto: 'Serviços de diagnóstico por imagem com uso de radiação ionizante, exceto tomografia', valor: 'R$ 1.690,48' },
    { texto: 'Serviços de ressonância magnética', valor: 'R$ 1.690,48' },
    { texto: 'Serviços de diagnóstico por imagem, sem uso de radiação ionizante, exceto ressonância magnética', valor: 'R$ 1.690,48' },
    { texto: 'Serviços de diagnóstico por registro gráfico: ECG, EEG e outros exames análogos', valor: 'R$ 1.690,48' },
    { texto: 'Serviços de diagnóstico por métodos ópticos: endoscopia e outros exames análogos', valor: 'R$ 1.690,48' },
    { texto: 'Serviços de quimioterapia', valor: 'R$ 1.267,86' },
    { texto: 'Serviços de radioterapia', valor: 'R$ 1.267,86' },
    { texto: 'Serviços de hemoterapia - Para os serviços e institutos de hemoterapia', valor: 'R$ 2.113,10' },
    { texto: 'Serviços de hemoterapia - Para agencias transfusionais', valor: 'R$ 845,24' },
    { texto: 'Serviços de hemoterapia - Para postos de coleta', valor: 'R$ 422,62' },
    { texto: 'Serviços de litotripsia', valor: 'R$ 1.690,48' },
    { texto: 'Serviços de bancos de células e tecidos humanos', valor: 'R$ 1.056,55' },
    { texto: 'Atividades de serviços de complementação diagnóstica e terapêutica não especificada anteriormente', valor: 'R$ 1.690,48' },
    { texto: 'Atividades de enfermagem', valor: 'R$ 633,93' },
    { texto: 'Atividades de profissionais da nutrição', valor: 'R$ 633,93' },
    { texto: 'Atividades de fisioterapia', valor: 'R$ 633,93' },
    { texto: 'Atividades de fisioterapia - Clínicas de fisioterapia', valor: 'R$ 1.267,86' },
    { texto: 'Atividades de fisioterapia - Consultório de fisioterapia', valor: 'R$ 614,72' },
    { texto: 'Atividades de terapia ocupacional', valor: 'R$ 633,93' },
    { texto: 'Atividades de terapia ocupacional - Clínicas de terapia ocupacional', valor: 'R$ 1.267,86' },
    { texto: 'Atividades de terapia ocupacional - Consultório de terapia ocupacional', valor: 'R$ 614,72' },
    { texto: 'Serviços de fonoaudiologia', valor: 'R$ 633,93' },
    { texto: 'Atividades de profissionais da área de saúde não especificadas anteriormente', valor: 'R$ 633,93' },
    { texto: 'Atividades de práticas integrativas e complementares em saúde humana', valor: 'R$ 845,24' },
    { texto: 'Atividades de banco de leite humano', valor: 'R$ 1.056,55' },
    { texto: 'Atividades de acupuntura', valor: 'R$ 633,93' },
    { texto: 'Atividades de podologia', valor: 'R$ 633,93' },
    { texto: 'Outras atividades de atenção à saúde humana não especificadas anteriormente', valor: 'R$ 422,62' },
    { texto: 'Clínicas e residências geriátricas', valor: 'R$ 1.267,86' },
    { texto: 'Instituições de longa permanência para idosos', valor: 'R$ 845,24' },
    { texto: 'Atividades de assistência a deficientes físicos, imunodeprimidos e convalescentes', valor: 'R$ 845,24' },
    { texto: 'Centros de apoio a pacientes com câncer e com AIDS', valor: 'R$ 1.267,86' },
    { texto: 'Atividades de fornecimento de infraestrutura de apoio e assistência a paciente em domicílio', valor: 'R$ 1.267,86' },
    { texto: 'Atividades de centros de assistência psicossocial', valor: 'R$ 845,24' },
    { texto: 'Atividades de assistência psicossocial e à saúde a portadores de distúrbios psíquicos, deficiência mental e dependência química não especificadas anteriormente', valor: 'R$ 845,24' },
  
    // 1.2.2. Equipamentos de saúde
    { texto: 'Equipamento de radiologia', valor: 'R$ 845,24' },
    { texto: 'Equipamento de radioterapia', valor: 'R$ 1.267,86' },
  
    // 1.3.1. Prestação de serviços coletivos e sociais
    { texto: 'Captação, tratamento e distribuição de água', valor: 'R$ 1.267,86' },
    { texto: 'Distribuição de água por caminhões', valor: 'R$ 1.267,86' },
    { texto: 'Gestão de redes de esgoto', valor: 'R$ 1.267,86' },
    { texto: 'Atividades relacionadas a esgoto, exceto a gestão de redes', valor: 'R$ 1.267,86' },
    { texto: 'Coleta de resíduos não perigosos', valor: 'R$ 1.267,86' },
    { texto: 'Coleta de resíduos perigosos', valor: 'R$ 1.267,86' },
    { texto: 'Tratamento e disposição de resíduos não perigosos', valor: 'R$ 1.267,86' },
    { texto: 'Tratamento e disposição de resíduos perigosos', valor: 'R$ 1.267,86' },
    { texto: 'Recuperação de sucatas de alumínio', valor: 'R$ 1.267,86' },
    { texto: 'Recuperação de materiais metálicos, exceto alumínio', valor: 'R$ 1.267,86' },
    { texto: 'Recuperação de materiais plásticos', valor: 'R$ 1.267,86' },
    { texto: 'Usina de compostagem', valor: 'R$ 1.267,86' },
    { texto: 'Recuperação de materiais não especificados anteriormente', valor: 'R$ 1.267,86' },
    { texto: 'Comércio atacadista de resíduos de papel e papelão', valor: 'R$ 1.267,86' },
    { texto: 'Comércio atacadista de resíduos e sucatas não metálicos, exceto de papel e papelão', valor: 'R$ 1.267,86' },
    { texto: 'Comércio atacadista de resíduos e sucatas metálicos', valor: 'R$ 1.267,86' },
    { texto: 'Camping', valor: 'R$ 1.267,86' },
    { texto: 'Outros tipos de alojamento não especificado anteriormente', valor: 'R$ 1.267,86' },
    { texto: 'Aluguel de palcos, coberturas e outras estruturas de uso temporário, exceto andaimes', valor: 'R$ 1.267,86' },
    { texto: 'Educação infantil - creches', valor: 'R$ 845,24' },
    { texto: 'Ensino de esportes', valor: 'R$ 845,24' },
    { texto: 'Orfanatos', valor: 'R$ 845,24' },
    { texto: 'Albergues assistenciais', valor: 'R$ 845,24' },
    { texto: 'Atividades de assistência social prestadas em residências coletivas e particulares não especificadas anteriormente', valor: 'R$ 845,24' },
    { texto: 'Gestão de instalações de esporte', valor: 'R$ 1.267,86' },
    { texto: 'Clubes sociais, desportivos e similares', valor: 'R$ 1.267,86' },
    { texto: 'Outras atividades esportivas não especificadas anteriormente', valor: 'R$ 1.267,86' },
    { texto: 'Parques de diversões e parques temáticos', valor: 'R$ 1.267,86' },
    { texto: 'Gestão e manutenção de cemitérios', valor: 'R$ 1.267,86' },
    { texto: 'Serviços de cremação', valor: 'R$ 1.267,86' },
    { texto: 'Serviços de sepultamento', valor: 'R$ 1.267,86' },
    { texto: 'Serviços de funerária', valor: 'R$ 1.267,86' },
    { texto: 'Serviços de somato conservação', valor: 'R$ 1.267,86' },
    { texto: 'Atividades funerárias e serviços relacionados não especificados anteriormente', valor: 'R$ 1.267,86' },
    { texto: 'Tabacaria', valor: 'R$ 845,24' },
  
    // 1.3.2. Prestação de serviços veterinários
    { texto: 'Atividades veterinárias', valor: 'R$ 845,24' },
  
    // 1.3.3. Outras atividades relacionadas à saúde
    { texto: 'Serviços de prótese dentária', valor: 'R$ 845,24' },
    { texto: 'Comércio varejista de artigos médicos e ortopédicos', valor: 'R$ 845,24' },
    { texto: 'Comércio varejista de artigos de ótica', valor: 'R$ 1.267,86' },
    { texto: 'Serviços de assistência social sem alojamento', valor: 'R$ 845,24' },
    { texto: 'Atividades de condicionamento físico', valor: 'R$ 1.267,86' },
    { texto: 'Lavanderias', valor: 'R$ 1.267,86' },
    { texto: 'Cabeleireiros', valor: 'R$ 845,24' },
    { texto: 'Outras atividades de tratamento de beleza', valor: 'R$ 845,24' },
    { texto: 'Atividades de sauna e banhos', valor: 'R$ 1.267,86' },
    { texto: 'Serviços de tatuagem e colocação de piercing', valor: 'R$ 845,24' },
    { texto: 'Testes e análises técnicas', valor: 'R$ 845,24' },
  
    // 1.4.1. Demais estabelecimentos
    { texto: 'Demais estabelecimentos não especificados anteriormente sujeitos à fiscalização', valor: 'R$ 1.479,17' },
  
    // 1.5. Demais atividades
    { texto: 'Rubrica de livros - Até 100 folhas', valor: 'R$ 126,79' },
    { texto: 'Rubrica de livros - De 101 a 200 folhas', valor: 'R$ 190,18' },
    { texto: 'Rubrica de livros - Acima de 200 folhas', valor: 'R$ 232,44' },
    { texto: 'Termos de responsabilidade técnica', valor: 'R$ 211,31' },
    { texto: 'Visto em notas fiscais de produtos sujeitos ao controle especial - Até 5 notas', valor: 'R$ 84,52' },
    { texto: 'Visto em notas fiscais de produtos sujeitos ao controle especial - Por nota que acrescer', valor: 'R$ 0,85' },
    { texto: 'Cadastramento dos estabelecimentos que utilizam produtos de controle especial', valor: 'R$ 211,31' },
    { texto: 'Laudo técnico de avaliação - Até 100 m²', valor: 'R$ 422,62' },
    { texto: 'Laudo técnico de avaliação - De 101 até 500 m²', valor: 'R$ 845,24' },
    { texto: 'Laudo técnico de avaliação - Acima de 500 m²', valor: 'R$ 1.267,86' },
];

let selectedActivityData = null;

/* ==============================
   UTILITÁRIOS
================================ */

function parseValor(valor) {
  return parseFloat(
    valor.replace('R$', '').replace(/\./g, '').replace(',', '.')
  );
}

function formatarValor(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

/* ==============================
   BUSCA DE ATIVIDADES
================================ */

function searchActivities() {
  const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultsContainer = document.getElementById('results');
  const textContainer = document.getElementById('text');

  resultsContainer.innerHTML = '';
  textContainer.innerHTML = '';

  if (searchTerm === '') {
    resultsContainer.innerHTML = `
      <div class="card border-warning bg-secondary mb-3" style="max-width: 15rem; margin: auto">
        <div class="card-body text-warning">
          <p class="card-text">Digite uma atividade!</p>
        </div>
      </div>
    `;
    return;
  }

  const filteredActivities = activities.filter(activity =>
    activity.texto.toLowerCase().includes(searchTerm)
  );

  if (filteredActivities.length > 0) {
    filteredActivities.forEach(activity => {
      const p = document.createElement('p');
      p.classList.add('btn', 'btn-outline-dark', 'mb-2', 'd-grid', 'text-center');
      p.innerHTML = `
        ${activity.texto}: <strong>Taxa:</strong> ${activity.valor}
      `;
      p.onclick = () => selectActivity(activity);
      resultsContainer.appendChild(p);
    });
  } else {
    resultsContainer.innerHTML = `
      <div class="card border-danger bg-secondary mb-3" style="max-width: 15rem; margin: auto">
        <div class="card-body text-danger">
          <p class="card-text">Não encontrado...</p>
        </div>
      </div>
    `;
  }
}

/* ==============================
   SELEÇÃO DE ATIVIDADE
================================ */

function selectActivity(activity) {
  selectedActivityData = {
    texto: activity.texto,
    valorOriginalTexto: activity.valor,
    valorBase: parseValor(activity.valor),
    valorFinalCalculado: null
  };

  const descontoSelect = document.getElementById('desconto');

  // recalcula sempre que mudar o desconto
  descontoSelect.onchange = atualizarResultado;

  atualizarResultado();
}

/* ==============================
   CÁLCULO + RENDERIZAÇÃO
================================ */

function atualizarResultado() {
  const resultsContainer = document.getElementById('results');
  const desconto = parseFloat(document.getElementById('desconto').value) || 0;

  const valorBase = selectedActivityData.valorBase;
  const descontoPercentual = desconto / 100;
  const valorFinal = valorBase - (valorBase * descontoPercentual);

  selectedActivityData.valorFinalCalculado = valorFinal;

  let botoes = `
    <div class="btn-group mb-2 mt-2">
      <button class="btn btn-outline-dark" onclick="generateTxt('inicial')">
        Licenciamento inicial
      </button>
      <button class="btn btn-outline-dark" onclick="generateTxt('licenciamento')">
        Renovar Licenciamento
      </button>
    </div>
    <h6 class="text-center my-2 text-muted">
      Clique no texto abaixo para copiar
    </h6>
  `;

  if (selectedActivityData.texto === 'Termos de responsabilidade técnica') {
    botoes = `
      <div class="btn-group mb-2 mt-2">
        <button class="btn btn-outline-dark" onclick="generateTxt('rt')">
          Termo de Responsabilidade Técnica
        </button>
      </div>
    `;
  }

  let textoResultado = `
    <strong>Atividade:</strong> ${selectedActivityData.texto}<br>
    <strong>Valor original:</strong> ${formatarValor(valorBase)}
  `;

  if (desconto > 0) {
    textoResultado += `
      <br><strong>Desconto:</strong> ${desconto}%<br>
      <strong>Valor com desconto:</strong> ${formatarValor(valorFinal)}
    `;
  }

  textoResultado += botoes;

  resultsContainer.innerHTML = `
    <div class="card mt-3">
      <div class="card-body">
        <p class="card-text">${textoResultado}</p>
      </div>
    </div>
  `;
}

/* ==============================
   GERAÇÃO DO TEXTO FINAL
================================ */

function generateTxt(type) {
  const text = document.getElementById('text');
  const notice = document.getElementById('copy-notice');

  let valorBase = selectedActivityData.valorFinalCalculado;
  let percentualMulta = 0;
  let isFine = false;
  let initial = false;
  let rt = false;

  switch (type) {
    case 'multa1':
      percentualMulta = 0.05;
      isFine = true;
      break;
    case 'multa2':
      percentualMulta = 0.15;
      isFine = true;
      break;
    case 'multa3':
      percentualMulta = 0.50;
      isFine = true;
      break;
    case 'multaMais3':
      percentualMulta = 1.00;
      isFine = true;
      break;
    case 'inicial':
      initial = true;
      break;
    case 'rt':
      rt = true;
      break;
    case 'licenciamento':
    default:
      break;
  }

  const valorFinal = isFine
    ? valorBase + (valorBase * percentualMulta)
    : valorBase;

  const valorFormatado = formatarValor(valorFinal);
  const activityUpper = selectedActivityData.texto.toUpperCase();

  let textoFinal = '';

  if (isFine) {
    textoFinal = `
      FINALIDADE: (CONFORME LEI ESTADUAL N.º 15.266 DE 26 DE DEZEMBRO DE 2013)
      VALOR EM UFESP: <strong>${valorFormatado}</strong>
      (TAXA DE MULTA MORATÓRIA POR ATRASO NA SOLICITAÇÃO DA LICENÇA DE FUNCIONAMENTO PARA
      <strong>${activityUpper}</strong>)
    `;
  } else if (initial) {
    textoFinal = `
      FINALIDADE: (CONFORME LEI ESTADUAL N.º 15.266 DE 26 DE DEZEMBRO DE 2013)
      VALOR EM UFESP: <strong>${valorFormatado}</strong>
      (TAXA DE FISCALIZAÇÃO PARA LICENCIAMENTO INICIAL PARA
      <strong>${activityUpper}</strong>)
    `;
  } else if (rt) {
    textoFinal = `
      FINALIDADE: (CONFORME LEI ESTADUAL N.º 15.266 DE 26 DE DEZEMBRO DE 2013)
      VALOR EM UFESP: <strong>${valorFormatado}</strong>
      (TERMO DE RESPONSABILIDADE TÉCNICA)
    `;
  } else {
    textoFinal = `
      FINALIDADE: (CONFORME LEI ESTADUAL N.º 15.266 DE 26 DE DEZEMBRO DE 2013)
      VALOR EM UFESP: <strong>${valorFormatado}</strong>
      (TAXA DE FISCALIZAÇÃO PARA RENOVAÇÃO DA LICENÇA DE FUNCIONAMENTO PARA
      <strong>${activityUpper}</strong>)
    `;
  }

  text.innerHTML = textoFinal;
  notice.style.display = 'block';
}