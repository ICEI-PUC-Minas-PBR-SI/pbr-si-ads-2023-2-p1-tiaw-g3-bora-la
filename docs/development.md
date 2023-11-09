# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)



## Requisitos Atendidos (ATUALIZAR MAIN EM BREVE)

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:
### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|-----------------------------------------|----| ----|
|RF-001| Os usuários devem poder criar contas pessoais com informações de perfil. | ALTA | cadastro.html|
|RF-002| Os usuários devem ser capazes de pesquisar locais públicos com base em critérios como tipo de local, localização, faixa etária, etc. | ALTA | youfeed.html |
|RF-003| Os usuários podem deixar avaliações e comentários sobre os locais que visitaram.| ALTA | estabelecimento.html
|RF-004| O aplicativo deve fornecer informações atualizadas sobre lotação, horários de funcionamento, eventos especiais, etc.| ALTA | youfeed.html|
|RF-005| Os usuários devem poder visualizar a localização dos locais em um mapa interativo.| BAIXA | estabelecimento.html|
|RF-006| Os usuários podem filtrar os resultados da pesquisa com base em suas preferências pessoais| ALTA | youfeed.html |
|RF-007| Os usuários podem receber notificações sobre eventos especiais, promoções ou locais próximos que possam ser de interesse.| MÉDIA | configurações.html |
|RF-008| Os proprietários de negócios podem criar perfis para seus estabelecimentos e atualizar informações relevantes.| ALTA | cadastro.html|
|RF-009| Os usuários podem se conectar, seguir e interagir com outros usuários, compartilhando experiências e recomendações.| MÉDIA | usuario.html |
|RF-010|A interface deve ser projetada de acordo com as diretrizes de acessibilidade.| BAIXA | borala.html |



### Requisitos não Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|-------|-------------------------|----|---------------|
|RNF-001| O aplicativo deve ser rápido e responsivo, com um tempo médio de resposta de no máximo 2 segundos em todas as funcionalidades, mesmo em áreas com conexões de internet mais lentas. | ALTA | borala.html |
|RNF-002| O aplicativo deve cumprir todas as regulamentações relevantes de privacidade e segurança de dados. |  ALTA | borala.html |
|RNF-003| O aplicativo deve ser capaz de lidar com um grande número de usuários e locais cadastrados à medida que cresce. |  ALTA | borala.html|
|RNF-004| Deve ser compatível com dispositivos iOS e Android, bem como navegadores da web. |  ALTA | borala.html |
|RNF-005| A interface do usuário deve ser intuitiva e fácil de usar, para atender a uma ampla gama de usuários, incluindo aqueles que não são tecnicamente experientes. |  ALTA | borala.html |
|RNF-006| O aplicativo deve estar disponível 24/7 para atender às necessidades dos usuários em diferentes horários.|  MÉDIA | borala.html |
|RNF-007| Deve haver um plano de manutenção para corrigir bugs, atualizar informações e adicionar recursos conforme necessário.|  ALTA | borala.html |
|RNF-008| Deve haver um sistema de backup e recuperação de dados para evitar a perda de informações importantes. |  BAIXA |recuperacao.html|


## Descrição das estruturas:

## Login
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único do usuário           | 01                                              |
| identificador        | Texto  e número           |nome de usuário ou cnpj                       |@rolezeiro ou 1222965/0001-58                                  |
|senha    | Texto  e número           | senha de acesso                       | 123BL@2024                           |

## Cadastro
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único do usuário           | 01                                              |
| identificador        | Texto  e número           |nome de usuário ou cnpj                       |@rolezeiro ou 1222965/0001-58                                  |
|email   | Texto  e número           | email cadastro/segurança                    | 123BL@borala.com                          |
|telefone   | número           | telefone/ verificação 2 etapas                      | +55 (31) 99999-9999                          |
|senha    | Texto  e número           | senha de acesso                       | 123BL@2024                           |

## Recuperação de senha
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único do usuário           | 01                                              |
|email   | Texto  e número           | email cadastro/segurança                    | 123BL@borala.com                          |
|telefone   | número           | telefone/ verificação 2 etapas                      | +55 (31) 99999-9999                          |

## Alteração de senha
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único do usuário           | 01                                              |
|Nova senha    | Texto  e número           | senha de acesso                       | 123BL@2024                           |
|Confirme senha    | Texto  e número           |  Deve ser identico a nova senha                     | 123BL@2024                           |



