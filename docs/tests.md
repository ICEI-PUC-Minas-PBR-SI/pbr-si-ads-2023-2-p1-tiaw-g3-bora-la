# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, sobrenome, nome de usuário ou cnpj, email, senha e clica no botão "Login".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-001 e RF-008.
**Resultado esperado** | Criação de cadastro e Prosseguir para a pagina de Login.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Fazer Login**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa seu tipo de usuário (usuário ou empreendedor), o nome de usuário ou cnpj e a senha e clica em login.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona o usuário para a tela do feed ou dashboard(diferenciadas para cada tipo de usuário).
**Requisitos associados** | RF-001 e RF-008.
**Resultado esperado** | Efetuação do login e prosseguir para a página de feed
**Dados de entrada** | Inserção de dados válidos no formulário de login.
**Resultado obtido** | Sucesso.


**Caso de Teste** | **CT03 - Cadastro e visualização de "stories"**
 :--------------: | ------------
**Procedimento**  | 1) Usuário seleciona a opção "conexões para visualizar os stories das suas conexões, nessa página ele tem a opção de postar os próprios "stories" do rolê que estiver visitando<br>2) A aplicação aciona a câmera do dispositivo e o usuário faz o registro e postagem do seus stories <br> 3) A aplicação armazena os stories e os deixa visíveis para as conexões do usuário por 6 horas.
**Requisitos associados** | RF-009
**Resultado esperado** | Postagem e visualização de stories
**Dados de entrada** | Inserção de fotos e imagens do momento.
**Resultado obtido** | Sem sucesso.

**Caso de Teste** | **CT04 - Navegação pelos rolês cadastrados**
 :--------------: | ------------
**Procedimento**  | 1) O Usuário pode navegar e ver detalhes de todos os rolês cadastrados que aparecerem na página de feed, ampliando imagens e vendo as avaliações.
**Requisitos associados** | RF-002 e RF-005
**Resultado esperado** | Visualização de detalhes e avaliações e navegação pelos rolês sugeridos
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Cadastro de Rolê (para empreendedores)**
 :--------------: | ------------
**Procedimento**  | 1) O Empreendedor pode personalizar a página de detalhes do seu evento/estabelecimento para fornecer informações para possíveis usuários interessados<br>2) A aplicação armazena dados de localização/ evento/ tipo de rolê/ possíveis filtros/ preços / etc.<br> 3) A página de detalhes de evento é criada/atualizada de acordo com as requisições do empreendedor.
**Requisitos associados** | RF-004 e RF-008.
**Resultado esperado** | Atualização/ criação da página de detalhes de rolê.
**Dados de entrada** | Inserção de dados do  evento a ocorrer/ estabelecimento.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Filtro de rolês por estilo**
 :--------------: | ------------
**Procedimento**  | 1) Usuário apre o formulário de filtros de estilos de rolê e seleciona o tipo de evento desejado.<br>2) A aplicação verifica o preenchimento do formulário e atualiza a página de feed de acordo com o que foi selecionado nos filtros.
**Requisitos associados** | RF-006
**Resultado esperado** | Filtragem e personalização dapágina de feed.
**Resultado obtido** | Sem sucesso.

**Caso de Teste** | **CT07 - Função para cadastrar avaliação de rolê**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa dados de lotação, preços, qualidade do evento, educação dos funcionário, etc e insere imagens e vídeos do lugar em tempo real.<br>2) A aplicação armazena os dados e os torna visíveis na página de detalhes de evento.
**Requisitos associados** | RF-003 e RF-004
**Resultado esperado** | Criação de avaliação do ambiente
**Dados de entrada** | Inserção de textos e imagens para avaliar o lugar.
**Resultado obtido** | Sem sucesso.

**Caso de Teste** | **CT08 - Pesquisar rolê específico**
 :--------------: | ------------
**Procedimento**  | 1) Usuário insere na barra de pesquisa o nome do evento/ estabelecimento de interesse.<br>2) A aplicação busca esse evento e fornece as informações de detalhes ao usuário.
**Requisitos associados** | RF-006
**Resultado esperado** | Filtro de evento específico.
**Dados de entrada** | Nome do evento/ estabelecimento
**Resultado obtido** | Sem sucesso.



## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-001 (Os usuários devem poder criar contas pessoais com informações de perfil.) e RF-008(Os proprietários de negócios podem criar perfis para seus estabelecimentos e atualizar informações relevantes.).|
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1DbdPMZ30ijHGJSFMUeJl9MEHQ1AGn7HF?usp=sharing| 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login *                                         |
|---|---|
|Requisito Associado |RF-001 (Os usuários devem poder criar contas pessoais com informações de perfil.) e RF-008(Os proprietários de negócios podem criar perfis para seus estabelecimentos e atualizar informações relevantes.).|
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1DbdPMZ30ijHGJSFMUeJl9MEHQ1AGn7HF?usp=sharing | 

|*Caso de Teste*                                 |*TC-03 - Cadastro e visualização de "stories"*                                         |
|---|---|
|Requisito Associado | RF-009-Os usuários podem se conectar, seguir e interagir com outros usuários, compartilhando experiências e recomendações.|
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1DbdPMZ30ijHGJSFMUeJl9MEHQ1AGn7HF?usp=sharing | 

|*Caso de Teste*                                 |*TC-04 - Navegação pelos rolês cadastrados*                                         |
|---|---|
|Requisito Associado | RF-002(Os usuários devem ser capazes de pesquisar locais públicos com base em critérios como tipo de local, localização, faixa etária, etc.) e RF-005(Os usuários devem poder visualizar a localização dos locais em um mapa interativo.) |
|Link do vídeo do teste realizado: |https://drive.google.com/drive/folders/1DbdPMZ30ijHGJSFMUeJl9MEHQ1AGn7HF?usp=sharing  | 

|*Caso de Teste*                                 |*TC-05 - CCadastro de Rolê (para empreendedores)*                                         |
|---|---|
|Requisito Associado |RF-004(O aplicativo deve fornecer informações atualizadas sobre lotação, horários de funcionamento, eventos especiais, etc.) e RF-008(Os proprietários de negócios podem criar perfis para seus estabelecimentos e atualizar informações relevantes.). |
|Link do vídeo do teste realizado: |https://drive.google.com/drive/folders/1DbdPMZ30ijHGJSFMUeJl9MEHQ1AGn7HF?usp=sharing | 

|*Caso de Teste*                                 |*TC-06 - Filtro de rolês por estilo*                                         |
|---|---|
|Requisito Associado |RF-006-Os usuários podem filtrar os resultados da pesquisa com base em suas preferências pessoais, como adequação para crianças, opções vegetarianas, acessibilidade, etc. |
|Link do vídeo do teste realizado: |https://drive.google.com/drive/folders/1DbdPMZ30ijHGJSFMUeJl9MEHQ1AGn7HF?usp=sharing  | 

|*Caso de Teste*                                 |*TC-07 - Função para avaliar rolê*                                         |
|---|---|
|Requisito Associado | RF-003 (Os usuários podem deixar avaliações e comentários sobre os locais que visitaram.)e RF-004(O aplicativo deve fornecer informações atualizadas sobre lotação, horários de funcionamento, eventos especiais, etc.)|
|Link do vídeo do teste realizado: |https://drive.google.com/drive/folders/1DbdPMZ30ijHGJSFMUeJl9MEHQ1AGn7HF?usp=sharing | 

|*Caso de Teste*                                 |*TC-08 - Pesquisar rolê específico*                                         |
|---|---|
|Requisito Associado | RF-006-Os usuários podem filtrar os resultados da pesquisa com base em suas preferências pessoais, como adequação para crianças, opções vegetarianas, acessibilidade, etc. |
|Link do vídeo do teste realizado: | https://drive.google.com/drive/folders/1DbdPMZ30ijHGJSFMUeJl9MEHQ1AGn7HF?usp=sharing | 

## Avaliação dos Testes de Software

Analisando os resultados dos testes, podemos concluir que faltaram recursos para a aplicação de todos os requisitos esperados e que, com isso, o projeto não foi entregue como deveria ao fim dessa etapa.



# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Uma mãe que deseja encontrar locais familiares. Me cadastrar no "Bora Lá" e criar um perfil personalizado para planejar nossas saídas em família de forma mais informada e segura. |
| 2             | Dono de um restaurante local. Me cadastrar no "Bora Lá" e criar um perfil do meu estabelecimento e compartilhar informações sobre nosso menu e eventos especiais para que mais clientes em potencial saibam sobre o que oferecemos. |
| 3             | Um estudante que gosta de experimentar novos restaurantes. Usar a pesquisa no "Bora Lá" para encontrar restaurantes próximos à minha localização atual para que eu possa descobrir opções de jantar perto de mim. |
| 4             | Um entusiasta de esportes. Deixar avaliações e comentários sobre os bares esportivos que visitei no "Bora Lá" para compartilhar minha experiência com outros fãs para que eles possam fazer escolhas informadas. |
| 5             | Um pai que adora piqueniques. Usar o "Bora Lá" para verificar a lotação atual do parque que planejo visitar com minha família para evitar multidões e aproveitar mais nosso tempo juntos. |
| 6             | Organizador de eventos corporativos. Quero que nosso centro de conferências seja facilmente localizável no mapa dentro do "Bora Lá" para que as empresas que planejam eventos possam nos encontrar facilmente e considerar nossa localização. |



## Registro de Testes de Usabilidade

Cenário 1: Uma mãe que deseja encontrar locais familiares. Me cadastrar no "Bora Lá" e criar um perfil personalizado para planejar nossas saídas em família de forma mais informada e segura. 

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    |  50 segundos                  |
| 2       | SIM             | 5                    |  47 segundos                  |
| 3       | SIM             | 5                    |  46 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 47,6 segundo                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 |  40 segundos |


    Comentários dos usuários: O cadastro está funcionando corretamente, e estou sendo direcionado para a página de rolezeiro, como esperado




Cenário 2: Dono de um restaurante local. Me cadastrar no "Bora Lá" e criar um perfil do meu estabelecimento e compartilhar informações sobre nosso menu e eventos especiais para que mais clientes em potencial saibam sobre o que oferecemos.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 55 segundos                          |
| 2       | SIM             | 5                    |  54 segundos                          |
| 3       | SIM             | 5                    |  49 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 5               | 52,6 segundos                          |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 47 segundos |


    Comentários dos usuários: O cadastro para empreendedor funcionou com cnpj e me redirecionou para o dashboard do meu estabelecimento


Cenário 3: Um estudante que gosta de experimentar novos restaurantes. Usar a pesquisa no "Bora Lá" para encontrar restaurantes próximos à minha localização atual para que eu possa descobrir opções de jantar perto de mim.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | NÃO            | 0                 |  0 segundos                          |
| 2       | NÃO             | 0                  |  0 segundos                          |
| 3       | NÃO             | 0                    |  0 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0               | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | NÃO | O |  0 segundos |


    Comentários dos usuários:  A pesquisa do site não está funcionando.

Cenário 4: Um entusiasta de esportes. Deixar avaliações e comentários sobre os bares esportivos que visitei no "Bora Lá" para compartilhar minha experiência com outros fãs para que eles possam fazer escolhas informadas.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       |   NÃO          |      0               |  segundos                  |
| 2       |NÃO |      0               |  segundos                  |
| 3       |NÃO|      0               |  segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | NÃO | 0 |  segundos |


    Comentários dos usuários: NÃO TEM SISTEMA PARA AVALIAÇÕES




Cenário 5: Um pai que adora piqueniques. Usar o "Bora Lá" para verificar a lotação atual do parque que planejo visitar com minha família para evitar multidões e aproveitar mais nosso tempo juntos.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | NÃO             |             0      |  segundos                          |
| 2       | NÃO             |          0           |  segundos                          |
| 3       | NÃO             |          0      |  segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | NÃO | 0 |  segundos |


    Comentários dos usuários: Nada está integrado em tempo real

Cenário 6:Organizador de eventos corporativos. Quero que nosso centro de conferências seja facilmente localizável no mapa dentro do "Bora Lá" para que as empresas que planejam eventos possam nos encontrar facilmente e considerar nossa localização.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 30 segundos                          |
| 2       | SIM             | 5                    |  32 segundos                          |
| 3       | SIM             | 5                    | 35 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 30 segundos |


    Comentários dos usuários: o mapa está visível e preciso



## Avaliação dos Testes de Usabilidade


Levando em conta as usabilidades pretendidas, observamos que o site está mais estático do que realmente dinâmico, como deveria.



