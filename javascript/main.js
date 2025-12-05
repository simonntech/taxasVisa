// Texto base: "FINALIDADE: (CONFORME LEI ESTADUAL N.º 15.266 DE 26 DE DEZEMBRO DE 2013) VALOR EM UFESP: *valor*  (TAXA DE FISCALIZAÇÃO PARA RENOVAÇÃO DA LICENÇA DE FUNCIONAMENTO PARA ATIVIDADE DE FORNECIMENTO DE ALIMENTOS PREPARADOS PREPONDERANTEMENTE PARA EMPRESAS)"

const activities = [
    // 1.1.1. Indústria de alimentos
    { texto: 'Refino e outros tratamentos do sal', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de conservas de frutas', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de conservas de palmito', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de conservas de legumes e outros vegetais, exceto palmito', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de óleos vegetais em bruto, exceto óleo de milho', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de óleos vegetais refinados, exceto óleo de milho', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de margarina e outras gorduras vegetais e de óleos não comestíveis de animais', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de sorvetes e outros gelados comestíveis - Por indústria', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de sorvetes e outros gelados comestíveis - Por sorveteria', valor: 'R$ 1.628,88' },
    { texto: 'Beneficiamento de arroz', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de produtos do arroz', valor: 'R$ 4.072,20' },
    { texto: 'Moagem de trigo e fabricação de derivados', valor: 'R$ 4.072,20' },
    { texto: 'Produção de farinha de mandioca e derivados', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de farinha de milho e derivados, exceto óleo de milho', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de amidos e féculas de vegetais', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de óleo de milho em bruto', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de óleo de milho refinado', valor: 'R$ 4.072,20' },
    { texto: 'Moagem e fabricação de produtos de origem vegetal, não especificados anteriormente', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de açúcar em bruto', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de açúcar de cana refinado', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de açúcar de cereais (dextrose) e de beterraba', valor: 'R$ 4.072,20' },
    { texto: 'Beneficiamento de café', valor: 'R$ 4.072,20' },
    { texto: 'Torrefação e moagem do café', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de produtos a base de café', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de produtos de panificação industrial', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de produtos de padaria e confeitaria com predominância de produção própria', valor: 'R$ 1.221,66' },
    { texto: 'Fabricação de biscoitos e bolachas', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de produtos derivados do cacau e de chocolates', valor: 'R$ 4.072,20' },
    { texto: 'Produção de frutas cristalizadas, balas e semelhantes', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de massas alimentícias', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de especiarias, molhos, temperos e condimentos', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de alimentos e pratos prontos', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de pós alimentícios', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de gelo comum', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de produtos para infusão', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de adoçantes naturais e artificiais', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de alimentos dietéticos e complementos alimentares', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de outros produtos alimentícios não especificados anteriormente', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de bebidas isotônicas', valor: 'R$ 4.072,20' },
    { texto: 'Atividades de armazenamento de alimentos em depósito fechado', valor: 'R$ 1.221,66' },
  
    // 1.1.2. Indústria de água mineral
    { texto: 'Fabricação de águas envasadas', valor: 'R$ 4.072,20' },
    { texto: 'Atividades de armazenamento de água mineral em depósito fechado', valor: 'R$ 1.221,66' },
  
    // 1.1.3. Indústria de aditivos para alimentos
    { texto: 'Fabricação de fermentos e leveduras', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de outros produtos inorgânicos, não especificados', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de outros produtos químicos orgânicos não especificados', valor: 'R$ 4.072,20' },
    { texto: 'Atividades de armazenamento de aditivos de alimentos em depósito fechado', valor: 'R$ 1.221,66' },
  
    // 1.1.4. Indústria de embalagens de alimentos
    { texto: 'Fabricação de embalagens de papel', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de embalagens de cartolina e papel-cartão', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de chapas e de embalagens de papelão ondulado', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de tintas, vernizes, esmaltes e lacas', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de embalagem de material plástico', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de embalagens de vidro', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de produtos cerâmicos refratários', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de produtos cerâmicos não refratários não especificados anteriormente', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de embalagens metálicas', valor: 'R$ 4.072,20' },
    { texto: 'Atividades de armazenamento de embalagens de alimentos em depósito fechado', valor: 'R$ 1.221,66' },
  
    // 1.1.5. Indústria de produtos para a saúde
    { texto: 'Fabricação de artefatos de borracha não especificados anteriormente', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de aparelhos eletromédicos e eletroterapêuticos e equipamentos de irradiação', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de outras máquinas e equipamentos de uso geral, não especificados anteriormente, peças e acessórios', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de bicicletas e triciclos não motorizados, peças e acessórios (fabricação de cadeira de rodas)', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de instrumentos não-eletrônicos e utensílios para uso médico, cirúrgico, odontológico e de laboratório', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de mobiliário para uso médico, cirúrgico, odontológico e de laboratório', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de aparelhos e utensílios para correção de defeitos físicos e aparelhos ortopédicos em geral, exceto sob encomenda', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de materiais para medicina e odontologia - Para fabricação', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de materiais para medicina e odontologia - Para unidades de esterilização', valor: 'R$ 2.850,54' },
    { texto: 'Fabricação de artigos ópticos (a fabricação de lentes de contato e lentes intra-oculares)', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de equipamentos e acessórios para segurança pessoal e profissional', valor: 'R$ 4.072,20' },
    { texto: 'Atividades de armazenamento de produtos para saúde em depósito fechado', valor: 'R$ 1.221,66' },
    { texto: 'Desenvolvimento e licenciamento de programas de computador não customizáveis (software produto para saúde)', valor: 'R$ 1.221,66' },
  
    // 1.1.6. Indústria de cosméticos, produtos de higiene e perfumes
    { texto: 'Fabricação de fraldas descartáveis', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de absorventes higiênicos', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de cosméticos, produtos de perfumaria e de higiene pessoal', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de escovas, pincéis e vassouras (escova, fio e fita dental)', valor: 'R$ 4.072,20' },
    { texto: 'Atividades de armazenamento de cosméticos, produtos de higiene e perfumes em depósito fechado', valor: 'R$ 1.221,66' },
  
    // 1.1.7. Indústria de saneantes e domissanitários
    { texto: 'Fabricação de desinfetantes domissanitários', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de sabões e detergentes sintéticos', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de produtos de limpeza e polimento', valor: 'R$ 4.072,20' },
    { texto: 'Atividades de armazenamento de saneantes domissanitários em depósito fechado', valor: 'R$ 1.221,66' },
  
    // 1.1.8. Indústria de medicamentos
    { texto: 'Fabricação de gases industriais (medicinais)', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de medicamentos alopáticos para uso humano', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de medicamentos homeopáticos para uso humano', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de medicamentos fitoterápicos para uso humano', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de preparações farmacêuticas', valor: 'R$ 4.072,20' },
    { texto: 'Atividades de armazenamento de medicamentos em depósito fechado', valor: 'R$ 1.221,66' },
  
    // 1.1.9. Indústria de farmoquímicos
    { texto: 'Fabricação de produtos farmoquímicos', valor: 'R$ 4.072,20' },
    { texto: 'Atividades de armazenamento de farmoquímicos em depósito fechado', valor: 'R$ 1.221,66' },
  
    // 1.1.10. Indústria de produtos e preparados químicos diversos com utilização de precursores
    { texto: 'Fabricação de adesivos e selantes com utilização de precursores na síntese química', valor: 'R$ 4.072,20' },
    { texto: 'Fabricação de aditivos de uso industrial com utilização de precursores na síntese química', valor: 'R$ 4.072,20' },
    { texto: 'Atividades de armazenamento de produtos e preparados químicos diversos/precursores em depósito fechado', valor: 'R$ 1.221,66' },
  
    // 1.1.11. Comércio atacadista de alimentos
    { texto: 'Comércio atacadista de café em grão', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de soja', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de cacau', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de leite e laticínios', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de cereais e leguminosas beneficiados', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de farinhas, amidos e féculas', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de frutas, verduras, raízes, tubérculos, hortaliças e legumes frescos', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de aves vivas e ovos', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de carnes bovinas, suínas e derivados', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de aves abatidas e derivados', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de pescados e frutos do mar', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de carnes e derivados de outros animais', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de água mineral', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de cerveja, chope e refrigerante', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de bebidas não especificadas anteriormente', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de café torrado, moído e solúvel', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de açúcar', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de óleos e gorduras', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de pães, bolos, biscoitos e similares', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de massas alimentícias', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de sorvetes', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de chocolates, confeitos, balas, bombons e semelhantes', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista especializado em outros produtos alimentícios não especificados anteriormente', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de produtos alimentícios em geral', valor: 'R$ 1.628,88' },
  
    // 1.1.12. Comércio atacadista de correlatos/produtos para a saúde
    { texto: 'Comércio atacadista de instrumentos e materiais para uso médico, cirúrgico, hospitalar e de laboratórios', valor: 'R$ 1.221,66' },
    { texto: 'Comércio atacadista de próteses e artigos de ortopedia', valor: 'R$ 1.221,66' },
    { texto: 'Comércio atacadista de produtos odontológicos', valor: 'R$ 1.221,66' },
    { texto: 'Comércio atacadista de máquinas, aparelhos e equipamentos para uso odonto-médico hospitalar; partes e peças', valor: 'R$ 1.221,66' },
  
    // 1.1.13. Comércio atacadista de cosméticos, produtos de higiene e perfumes
    { texto: 'Comércio atacadista de cosméticos e produtos de perfumaria', valor: 'R$ 1.221,66' },
    { texto: 'Comércio atacadista de produtos de higiene pessoal', valor: 'R$ 1.221,66' },
  
    // 1.1.14. Comércio atacadista de saneantes domissanitários
    { texto: 'Comércio atacadista de produtos de higiene, limpeza e conservação domiciliar', valor: 'R$ 1.221,66' },
    { texto: 'Comércio atacadista de defensivos agrícolas, adubos, fertilizantes e corretivos do solo (sanitários)', valor: 'R$ 1.221,66' },
  
    // 1.1.15. Comércio atacadista de medicamentos
    { texto: 'Comércio atacadista de medicamentos e drogas de uso humano - Com fracionamento', valor: 'R$ 1.628,88' },
    { texto: 'Comércio atacadista de medicamentos e drogas de uso humano - Sem fracionamento', valor: 'R$ 1.221,66' },
  
    // 1.1.16. Comércio atacadista de diversas classes de produtos
    { texto: 'Comércio atacadista de mercadorias em geral, com predominância de produtos alimentícios', valor: 'R$ 1.221,66' },
    { texto: 'Comércio atacadista de mercadorias em geral, sem predominância de alimentos ou de insumos agropecuários', valor: 'R$ 1.221,66' },
  
    // 1.1.17. Comércio varejista de alimentos
    { texto: 'Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - hipermercados', valor: 'R$ 2.850,54' },
    { texto: 'Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - supermercados', valor: 'R$ 2.850,54' },
    { texto: 'Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - minimercados, mercearias e armazéns', valor: 'R$ 1.221,66' },
    { texto: 'Padaria e confeitaria com predominância de revenda', valor: 'R$ 1.221,66' },
    { texto: 'Comércio varejista de laticínios e frios', valor: 'R$ 1.221,66' },
    { texto: 'Comércio varejista de doces, balas, bombons e semelhantes', valor: 'R$ 814,44' },
    { texto: 'Comércio varejista de carnes - açougues', valor: 'R$ 1.221,66' },
    { texto: 'Peixaria', valor: 'R$ 1.221,66' },
    { texto: 'Comércio varejista de bebidas', valor: 'R$ 814,44' },
    { texto: 'Comércio varejista de hortifrúti-granjeiros', valor: 'R$ 814,44' },
    { texto: 'Comércio varejista de produtos alimentícios em geral, ou especializado em produtos alimentícios não especificados anteriormente', valor: 'R$ 814,44' },
    { texto: 'Comércio varejista de mercadorias em lojas de conveniência', valor: 'R$ 1.221,66' },
    { texto: 'Restaurantes e similares', valor: 'R$ 1.628,88' },
    { texto: 'Bares e outros estabelecimentos especializados em servir bebidas', valor: 'R$ 1.628,88' },
    { texto: 'Lanchonete, casas de chá, de sucos e similares', valor: 'R$ 1.221,66' },
    { texto: 'Serviços ambulantes de alimentação', valor: 'R$ 1.221,66' },
    { texto: 'Fornecimento de alimentos preparados preponderantemente para empresas', valor: 'R$ 4.072,20' },
    { texto: 'Serviços de alimentação para eventos e recepções - bufê', valor: 'R$ 1.628,88' },
    { texto: 'Cantina - serviço de alimentação privativo', valor: 'R$ 1.221,66' },
    { texto: 'Fornecimento de alimentos preparados preponderantemente para consumo domiciliar', valor: 'R$ 1.628,88' },
  
    // 1.1.18. Comércio varejista de medicamentos
    { texto: 'Comércio varejista de produtos farmacêuticos, sem manipulação de fórmulas - Para drogarias', valor: 'R$ 1.628,88' },
    { texto: 'Comércio varejista de produtos farmacêuticos, sem manipulação de fórmulas - Para posto de medicamentos e ervanaria', valor: 'R$ 1.221,66' },
    { texto: 'Comércio varejista de produtos farmacêuticos, com manipulação de fórmulas', valor: 'R$ 2.036,10' },
    { texto: 'Comércio varejista de produtos farmacêuticos homeopáticos', valor: 'R$ 1.628,88' },
  
    // 1.1.19. Comércio varejista de cosméticos
    { texto: 'Comércio varejista de cosméticos, produtos de perfumaria e de higiene pessoal', valor: 'R$ 1.221,66' },
  
    // 1.1.20. Envasamento e empacotamento de produtos relacionados à saúde
    { texto: 'Envasamento e empacotamento sob contrato', valor: 'R$ 1.221,66' },
  
    // 1.1.21. Depósito de produtos relacionados à saúde
    { texto: 'Armazéns gerais - emissão de warrants', valor: 'R$ 1.221,66' },
    { texto: 'Depósitos de mercadorias para terceiros - exceto armazéns gerais e guarda-móveis', valor: 'R$ 1.221,66' },
  
    // 1.1.22. Transporte de produtos relacionados à saúde
    { texto: 'Transporte rodoviário de cargas, exceto produtos perigosos e mudanças, municipal', valor: 'R$ 1.221,66' },
    { texto: 'Transporte rodoviário de cargas, exceto produtos perigosos e mudanças intermunicipal, interestadual e internacional', valor: 'R$ 1.221,66' },
  
    // 1.1.23. Esterilização e controle de pragas urbanas
    { texto: 'Controle de pragas urbanas', valor: 'R$ 1.628,88' },
    { texto: 'Atividades de limpeza não especificadas anteriormente (serviços de esterilização)', valor: 'R$ 1.628,88' },
  
    // 1.2.1. Prestação de serviço de saúde
    { texto: 'Atividades de psicologia e psicanálise', valor: 'R$ 610,83' },
    { texto: 'Atividades de atendimento hospitalar, exceto pronto-socorro e unidades para atendimento e urgências - Até 50 leitos', valor: 'R$ 1.628,88' },
    { texto: 'Atividades de atendimento hospitalar, exceto pronto-socorro e unidades para atendimento e urgências - De 51 a 250 leitos', valor: 'R$ 2.850,54' },
    { texto: 'Atividades de atendimento hospitalar, exceto pronto-socorro e unidades para atendimento e urgências - Mais de 250 leitos', valor: 'R$ 4.072,20' },
    { texto: 'Dispensário de medicamentos', valor: 'R$ 1.221,66' },
    { texto: 'Farmácia hospitalar', valor: 'R$ 2.036,10' },
    { texto: 'Atividades de atendimento em pronto-socorro e unidades hospitalares para atendimento a urgências - Dispensário de medicamento', valor: 'R$ 1.221,66' },
    { texto: 'UTI móvel', valor: 'R$ 1.628,88' },
    { texto: 'Serviços móveis de atendimento a urgências, exceto por UTI móvel', valor: 'R$ 1.628,88' },
    { texto: 'Serviços de remoção de pacientes, exceto os serviços móveis de atendimento a urgências', valor: 'R$ 407,22' },
    { texto: 'Atividade médica ambulatorial com recursos para realização de procedimentos cirúrgicos', valor: 'R$ 1.628,88' },
    { texto: 'Atividade médica ambulatorial com recursos para realização de exames complementares', valor: 'R$ 1.221,66' },
    { texto: 'Atividade médica ambulatorial restrita a consultas', valor: 'R$ 610,83' },
    { texto: 'Atividade odontológica - Consultório odontológico', valor: 'R$ 610,83' },
    { texto: 'Atividade odontológica - Demais estabelecimentos odontológicos', valor: 'R$ 1.425,27' },
    { texto: 'Serviços de vacinação e imunização humana', valor: 'R$ 1.221,66' },
    { texto: 'Atividade de reprodução humana assistida', valor: 'R$ 1.221,66' },
    { texto: 'Laboratórios de anatomia patológica e citológica', valor: 'R$ 814,44' },
    { texto: 'Laboratórios clínicos', valor: 'R$ 814,44' },
    { texto: 'Serviços de diálise e nefrologia', valor: 'R$ 2.036,10' },
    { texto: 'Serviços de tomografia', valor: 'R$ 814,44' },
    { texto: 'Serviços de diagnóstico por imagem com uso de radiação ionizante, exceto tomografia', valor: 'R$ 1.628,88' },
    { texto: 'Serviços de ressonância magnética', valor: 'R$ 1.628,88' },
    { texto: 'Serviços de diagnóstico por imagem, sem uso de radiação ionizante, exceto ressonância magnética', valor: 'R$ 1.628,88' },
    { texto: 'Serviços de diagnóstico por registro gráfico: ECG, EEG e outros exames análogos', valor: 'R$ 1.628,88' },
    { texto: 'Serviços de diagnóstico por métodos ópticos: endoscopia e outros exames análogos', valor: 'R$ 1.628,88' },
    { texto: 'Serviços de quimioterapia', valor: 'R$ 1.221,66' },
    { texto: 'Serviços de radioterapia', valor: 'R$ 1.221,66' },
    { texto: 'Serviços de hemoterapia - Para os serviços e institutos de hemoterapia', valor: 'R$ 2.036,10' },
    { texto: 'Serviços de hemoterapia - Para agencias transfusionais', valor: 'R$ 814,44' },
    { texto: 'Serviços de hemoterapia - Para postos de coleta', valor: 'R$ 407,22' },
    { texto: 'Serviços de litotripsia', valor: 'R$ 1.628,88' },
    { texto: 'Serviços de bancos de células e tecidos humanos', valor: 'R$ 1.018,05' },
    { texto: 'Atividades de serviços de complementação diagnóstica e terapêutica não especificada anteriormente', valor: 'R$ 1.628,88' },
    { texto: 'Atividades de enfermagem', valor: 'R$ 610,83' },
    { texto: 'Atividades de profissionais da nutrição', valor: 'R$ 610,83' },
    { texto: 'Atividades de fisioterapia', valor: 'R$ 610,83' },
    { texto: 'Atividades de fisioterapia - Clínicas de fisioterapia', valor: 'R$ 1.221,66' },
    { texto: 'Atividades de fisioterapia - Consultório de fisioterapia', valor: 'R$ 592,32' },
    { texto: 'Atividades de terapia ocupacional', valor: 'R$ 610,83' },
    { texto: 'Atividades de terapia ocupacional - Clínicas de terapia ocupacional', valor: 'R$ 1.221,66' },
    { texto: 'Atividades de terapia ocupacional - Consultório de terapia ocupacional', valor: 'R$ 592,32' },
    { texto: 'Serviços de fonoaudiologia', valor: 'R$ 610,83' },
    { texto: 'Atividades de profissionais da área de saúde não especificadas anteriormente', valor: 'R$ 610,83' },
    { texto: 'Atividades de práticas integrativas e complementares em saúde humana', valor: 'R$ 814,44' },
    { texto: 'Atividades de banco de leite humano', valor: 'R$ 1.018,05' },
    { texto: 'Atividades de acupuntura', valor: 'R$ 610,83' },
    { texto: 'Atividades de podologia', valor: 'R$ 610,83' },
    { texto: 'Outras atividades de atenção à saúde humana não especificadas anteriormente', valor: 'R$ 407,22' },
    { texto: 'Clínicas e residências geriátricas', valor: 'R$ 1.221,66' },
    { texto: 'Instituições de longa permanência para idosos', valor: 'R$ 814,44' },
    { texto: 'Atividades de assistência a deficientes físicos, imunodeprimidos e convalescentes', valor: 'R$ 814,44' },
    { texto: 'Centros de apoio a pacientes com câncer e com AIDS', valor: 'R$ 1.221,66' },
    { texto: 'Atividades de fornecimento de infraestrutura de apoio e assistência a paciente em domicílio', valor: 'R$ 1.221,66' },
    { texto: 'Atividades de centros de assistência psicossocial', valor: 'R$ 814,44' },
    { texto: 'Atividades de assistência psicossocial e à saúde a portadores de distúrbios psíquicos, deficiência mental e dependência química não especificadas anteriormente', valor: 'R$ 814,44' },
  
    // 1.2.2. Equipamentos de saúde
    { texto: 'Equipamento de radiologia', valor: 'R$ 814,44' },
    { texto: 'Equipamento de radioterapia', valor: 'R$ 1.221,66' },
  
    // 1.3.1. Prestação de serviços coletivos e sociais
    { texto: 'Captação, tratamento e distribuição de água', valor: 'R$ 1.221,66' },
    { texto: 'Distribuição de água por caminhões', valor: 'R$ 1.221,66' },
    { texto: 'Gestão de redes de esgoto', valor: 'R$ 1.221,66' },
    { texto: 'Atividades relacionadas a esgoto, exceto a gestão de redes', valor: 'R$ 1.221,66' },
    { texto: 'Coleta de resíduos não perigosos', valor: 'R$ 1.221,66' },
    { texto: 'Coleta de resíduos perigosos', valor: 'R$ 1.221,66' },
    { texto: 'Tratamento e disposição de resíduos não perigosos', valor: 'R$ 1.221,66' },
    { texto: 'Tratamento e disposição de resíduos perigosos', valor: 'R$ 1.221,66' },
    { texto: 'Recuperação de sucatas de alumínio', valor: 'R$ 1.221,66' },
    { texto: 'Recuperação de materiais metálicos, exceto alumínio', valor: 'R$ 1.221,66' },
    { texto: 'Recuperação de materiais plásticos', valor: 'R$ 1.221,66' },
    { texto: 'Usina de compostagem', valor: 'R$ 1.221,66' },
    { texto: 'Recuperação de materiais não especificados anteriormente', valor: 'R$ 1.221,66' },
    { texto: 'Comércio atacadista de resíduos de papel e papelão', valor: 'R$ 1.221,66' },
    { texto: 'Comércio atacadista de resíduos e sucatas não metálicos, exceto de papel e papelão', valor: 'R$ 1.221,66' },
    { texto: 'Comércio atacadista de resíduos e sucatas metálicos', valor: 'R$ 1.221,66' },
    { texto: 'Camping', valor: 'R$ 1.221,66' },
    { texto: 'Outros tipos de alojamento não especificado anteriormente', valor: 'R$ 1.221,66' },
    { texto: 'Aluguel de palcos, coberturas e outras estruturas de uso temporário, exceto andaimes', valor: 'R$ 1.221,66' },
    { texto: 'Educação infantil - creches', valor: 'R$ 814,44' },
    { texto: 'Ensino de esportes', valor: 'R$ 814,44' },
    { texto: 'Orfanatos', valor: 'R$ 814,44' },
    { texto: 'Albergues assistenciais', valor: 'R$ 814,44' },
    { texto: 'Atividades de assistência social prestadas em residências coletivas e particulares não especificadas anteriormente', valor: 'R$ 814,44' },
    { texto: 'Gestão de instalações de esporte', valor: 'R$ 1.221,66' },
    { texto: 'Clubes sociais, desportivos e similares', valor: 'R$ 1.221,66' },
    { texto: 'Outras atividades esportivas não especificadas anteriormente', valor: 'R$ 1.221,66' },
    { texto: 'Parques de diversões e parques temáticos', valor: 'R$ 1.221,66' },
    { texto: 'Gestão e manutenção de cemitérios', valor: 'R$ 1.221,66' },
    { texto: 'Serviços de cremação', valor: 'R$ 1.221,66' },
    { texto: 'Serviços de sepultamento', valor: 'R$ 1.221,66' },
    { texto: 'Serviços de funerária', valor: 'R$ 1.221,66' },
    { texto: 'Serviços de somato conservação', valor: 'R$ 1.221,66' },
    { texto: 'Atividades funerárias e serviços relacionados não especificados anteriormente', valor: 'R$ 814,44' },
    { texto: 'Tabacaria', valor: 'R$ 814,44' },
  
    // 1.3.2. Prestação de serviços veterinários
    { texto: 'Atividades veterinárias', valor: 'R$ 814,44' },
  
    // 1.3.3. Outras atividades relacionadas à saúde
    { texto: 'Serviços de prótese dentária', valor: 'R$ 814,44' },
    { texto: 'Comércio varejista de artigos médicos e ortopédicos', valor: 'R$ 814,44' },
    { texto: 'Comércio varejista de artigos de ótica', valor: 'R$ 1.221,66' },
    { texto: 'Serviços de assistência social sem alojamento', valor: 'R$ 814,44' },
    { texto: 'Atividades de condicionamento físico', valor: 'R$ 1.221,66' },
    { texto: 'Lavanderias', valor: 'R$ 1.221,66' },
    { texto: 'Cabeleireiros', valor: 'R$ 814,44' },
    { texto: 'Outras atividades de tratamento de beleza', valor: 'R$ 814,44' },
    { texto: 'Atividades de sauna e banhos', valor: 'R$ 1.221,66' },
    { texto: 'Serviços de tatuagem e colocação de piercing', valor: 'R$ 814,44' },
    { texto: 'Testes e análises técnicas', valor: 'R$ 814,44' },
  
    // 1.4.1. Demais estabelecimentos
    { texto: 'Demais estabelecimentos não especificados anteriormente sujeitos à fiscalização', valor: 'R$ 1.425,27' },
  
    // 1.5. Demais atividades
    { texto: 'Rubrica de livros - Até 100 folhas', valor: 'R$ 122,17' },
    { texto: 'Rubrica de livros - De 101 a 200 folhas', valor: 'R$ 183,25' },
    { texto: 'Rubrica de livros - Acima de 200 folhas', valor: 'R$ 223,97' },
    { texto: 'Termos de responsabilidade técnica', valor: 'R$ 203,61' },
    { texto: 'Visto em notas fiscais de produtos sujeitos ao controle especial - Até 5 notas', valor: 'R$ 81,44' },
    { texto: 'Visto em notas fiscais de produtos sujeitos ao controle especial - Por nota que acrescer', valor: 'R$ 0,81' },
    { texto: 'Cadastramento dos estabelecimentos que utilizam produtos de controle especial', valor: 'R$ 203,61' },
    { texto: 'Laudo técnico de avaliação - Até 100 m²', valor: 'R$ 407,22' },
    { texto: 'Laudo técnico de avaliação - De 101 até 500 m²', valor: 'R$ 814,44' },
    { texto: 'Laudo técnico de avaliação - Acima de 500 m²', valor: 'R$ 1.221,66' },
  ];

let selectedActivityData = null;

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
    `
    return;
  }

  //Filtrar atividades pelo termo de busca
  const filteredActivites = activities.filter(activity => activity.texto.toLowerCase().includes(searchTerm));

  if(filteredActivites.length > 0) {
    filteredActivites.forEach(activity => {
      const p = document.createElement('p');
      p.classList.add('btn','btn-outline-dark', 'mb-2', 'd-grid' , 'text-center')
      p.innerHTML = `
        ${activity.texto}: <strong>Taxa: </strong>${activity.valor}
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
    `
  }
}

function selectActivity(activity) {
  selectedActivityData = activity;

  const resultsContainer = document.getElementById('results');
  const descontoSelect = document.getElementById('desconto');
  const desconto = descontoSelect.value;

  let valorTaxa = parseFloat(activity.valor.replace('R$', '').replace('.', '').replace(',', '.'));
  let valorFinal = valorTaxa;
  let textoResultado = `
    <strong>Atividade:</strong> ${activity.texto}<br>
    <strong>Valor original:</strong> ${activity.valor}
  `;

  let botoes = `
    <div class="btn-group mb-2 mt-2">
      <button class="btn btn-outline-dark" onclick="generateTxt('licenciamento')">Licenciamento</button>
      <button class="btn btn-outline-dark" onclick="generateTxt('multa1')" >Multa Moratória 1 mês</button>
      <button class="btn btn-outline-dark" onclick="generateTxt('multa2')" >Multa Moratória 2 meses</button>
      <button class="btn btn-outline-dark" onclick="generateTxt('multa3')" >Multa Moratória 3 meses</button>
      <button class="btn btn-outline-dark" onclick="generateTxt('multaMais3')" >Multa Moratória mais de 3 meses</button>
    </div>
    <h6 class="text-center my-2 text-muted">Clique no texto abaixo para copiar</h6>
  `;

  if (desconto && !isNaN(desconto)) {
    const descontoPercentual = parseFloat(desconto) / 100;
    valorFinal = valorTaxa - (valorTaxa * descontoPercentual);
    textoResultado += `
      <br><strong>Desconto:</strong> ${desconto}%<br>
      <strong>Valor com desconto: </strong> R$ ${valorFinal.toFixed(2).replace('.', ',')}
    `;
  }

  selectedActivityData.valorFinalCalculado = valorFinal;

  textoResultado += botoes;

  resultsContainer.innerHTML = `
    <div class="card mt-3" style=" margin: auto">
      <div class="card-body">
        <p class="card-text">${textoResultado}</p>
      </div>
    </div>
  `;

}

function generateTxt(type) {
  const text = document.getElementById('text');
  const notice = document.getElementById('copy-notice');

  const valorTaxaOriginal = parseFloat(selectedActivityData.valor.replace('R$', '').replace('.', '').replace(',', '.'));

  let valorBase = selectedActivityData.valorFinalCalculado;
  let percentualMulta = 0;
  let isFine = false;

  switch(type) {
    case 'multa1':
      percentualMulta = 0.05; // 5%
      valorBase = selectedActivityData.valorFinalCalculado;
      isFine = true;
      break;
    case 'multa2':
      percentualMulta = 0.15; // 15%
      valorBase = selectedActivityData.valorFinalCalculado;
      isFine = true;
      break;
    case 'multa3':
      percentualMulta = 0.50; // 50%
      valorBase = selectedActivityData.valorFinalCalculado;
      isFine = true;
      break;
    case 'multaMais3':
      percentualMulta = 1.00; // 100%
      valorBase = valorTaxaOriginal;
      isFine = true;
      break;
    case 'licenciamento':
      isFine = false;
      default:
      break;
    }

  const valorMulta = isFine ? (valorBase * percentualMulta) : 0;
  const valorFinalComMulta = isFine ? valorMulta : valorBase;

  const valorFormatado = `R$ ${valorFinalComMulta.toFixed(2).replace('.', ',')}`;
  const activityUpper = selectedActivityData.texto.toUpperCase();

  let textoFinal;
  
  if (isFine) {
    textoFinal = `FINALIDADE: (CONFORME LEI ESTADUAL N.º 15.266 DE 26 DE DEZEMBRO DE 2013) VALOR EM UFESP: ${valorFormatado} (TAXA DE MULTA MORATÓRIA POR ATRASO NA SOLICITAÇÃO DA LICENÇA DE FUNCIONAMENTO PARA ${activityUpper})`
  } else {
    textoFinal = `FINALIDADE: (CONFORME LEI ESTADUAL N.º 15.266 DE 26 DE DEZEMBRO DE 2013) VALOR EM UFESP: ${valorFormatado} (TAXA DE FISCALIZAÇÃO PARA RENOVAÇÃO DA LICENÇA DE FUNCIONAMENTO PARA ${activityUpper})`
  }

  text.innerText = textoFinal;
  text.onclick = function () {
    navigator.clipboard.writeText(text.innerText).then(() => {
      notice.style.display = 'inline';
      setTimeout(() => {
        notice.style.display = 'none';
      }, 2000);
    })
  }

}