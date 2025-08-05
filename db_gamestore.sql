CREATE DATABASE db_gamestore;
USE db_gamestore;

INSERT INTO tb_categorias (nome, descricao) VALUES
('Ação', 'Jogos com foco em combates rápidos, reflexos e movimentação intensa.'),
('Aventura', 'Exploração de mundos abertos ou histórias envolventes com quebra-cabeças.'),
('RPG', 'Jogos de interpretação de papéis com evolução de personagens e escolhas.'),
('Terror', 'Experiências assustadoras, com tensão e elementos sobrenaturais.'),
('Estratégia', 'Planejamento tático e tomada de decisões em tempo real ou por turnos.'),
('Esporte', 'Simulações ou jogos arcade de futebol, basquete, corrida e mais.'),
('Simulação', 'Representações realistas de sistemas, como voo, fazendas ou vida social.'),
('Corrida', 'Disputas de velocidade em pistas ou terrenos diversos com veículos variados.'),
('Puzzle', 'Jogos de raciocínio lógico, quebra-cabeças e desafios mentais.'),
('Multijogador Online', 'Jogos focados em experiências online com outros jogadores.');

INSERT INTO tb_games (titulo, preco, midia, classificacao, descricao, estoque, dataLancamento, destaque, desenvolvedora, categoria_id) VALUES
('God of War: Ragnarok', 299.90, 'Físico', '16', 'Kratos e Atreus enfrentam o fim dos tempos em uma jornada épica pela mitologia nórdica.', 15, '2022-11-09', 1, 'Santa Monica Studio', 1),
('The Legend of Zelda: Tears of the Kingdom', 349.90, 'Físico', 'L', 'Explore Hyrule com novas habilidades e segredos celestiais.', 10, '2023-05-12', 1, 'Nintendo', 2),
('Elden Ring', 249.90, 'Digital', '18', 'Um mundo aberto sombrio com desafios brutais e exploração profunda.', 20, '2022-02-25', 1, 'FromSoftware', 3),
('Resident Evil Village', 199.99, 'Físico', '18', 'Terror e sobrevivência em uma vila amaldiçoada cheia de segredos.', 8, '2021-05-07', 0, 'Capcom', 4),
('Age of Empires IV', 159.99, 'Digital', '12', 'Construa impérios e lidere civilizações históricas em batalhas épicas.', 30, '2021-10-28', 0, 'Relic Entertainment', 5),
('FIFA 24', 299.99, 'Digital', 'L', 'A nova geração do futebol com gráficos realistas e jogabilidade refinada.', 50, '2023-09-29', 1, 'EA Sports', 6),
('The Sims 4', 89.90, 'Digital', '12', 'Simule vidas, crie casas e construa histórias únicas.', 25, '2014-09-02', 0, 'Maxis', 7),
('Forza Horizon 5', 229.90, 'Físico', 'L', 'Corridas em mundo aberto no México com centenas de carros.', 12, '2021-11-09', 1, 'Playground Games', 8),
('Portal 2', 49.99, 'Digital', '10', 'Quebra-cabeças com portais e uma história cheia de humor ácido.', 18, '2011-04-19', 0, 'Valve', 9),
('Call of Duty: Warzone', 0.00, 'Digital', '18', 'Battle royale frenético em combates online em larga escala.', 9999, '2020-03-10', 1, 'Infinity Ward', 10),
('Pokémon Scarlet', 299.99, 'Físico', 'L', 'A nova aventura em mundo aberto na região de Paldea com 3 caminhos diferentes e o fenômeno Terastal.', 15, '2022-11-18', 1, 'Game Freak', 3),
('Pokémon Legends: Arceus', 279.99, 'Físico', 'L', 'Exploração em mundo aberto no passado de Sinnoh com mecânicas de captura e combate reinventadas.', 10, '2022-01-28', 1, 'Game Freak', 3),
('Hollow Knight', 49.99, 'Digital', '10', 'Explore as profundezas de Hallownest em uma aventura desafiadora e sombria em estilo metroidvania.', 50, '2017-02-24', 1, 'Team Cherry', 2),
('Subnautica', 89.90, 'Digital', '12', 'Sobreviva em um mundo alienígena submerso, coletando recursos e construindo bases.', 30, '2018-01-23', 0, 'Unknown Worlds', 7),
('Darksiders Warmastered Edition', 79.90, 'Físico', '16', 'Lute como Guerra, um dos quatro Cavaleiros do Apocalipse, em uma aventura épica com combates brutais.', 20, '2016-11-29', 0, 'Vigil Games', 1),
('NieR: Automata', 199.90, 'Digital', '18', 'Androids lutam em um mundo devastado em uma mistura de RPG, ação e narrativa filosófica.', 10, '2017-03-17', 1, 'PlatinumGames', 3),
('Celeste', 59.99, 'Digital', '10', 'Ajude Madeline a escalar uma montanha desafiadora em um jogo de plataforma emocional e preciso.', 40, '2018-01-25', 1, 'Matt Makes Games', 9),
('Ori and the Blind Forest', 69.99, 'Digital', 'L', 'Uma jornada mágica e comovente em um belíssimo mundo de plataforma e exploração.', 35, '2015-03-11', 1, 'Moon Studios', 2),
('Dead Cells', 89.90, 'Digital', '16', 'Um roguevania de ação frenética com progressão procedural e combates intensos.', 20, '2018-08-07', 1, 'Motion Twin', 1),
('Hades', 119.90, 'Digital', '16', 'Escape do submundo em um rogue-like mitológico com narrativa dinâmica e combates viciantes.', 25, '2020-09-17', 1, 'Supergiant Games', 1),
('Undertale', 29.99, 'Digital', '10', 'Um RPG único com combate baseado em empatia e escolhas morais impactantes.', 60, '2015-09-15', 0, 'Toby Fox', 3),
('Slay the Spire', 49.99, 'Digital', '12', 'Combine cartas e estratégia para vencer inimigos em uma torre mortal e sempre diferente.', 30, '2019-01-23', 0, 'MegaCrit', 5),
('Spiritfarer', 89.90, 'Digital', 'L', 'Gerencie um barco para almas em sua jornada final com toques de simulação e narrativa tocante.', 15, '2020-08-18', 0, 'Thunder Lotus Games', 7),
('Cuphead', 69.99, 'Físico', '10', 'Um shooter retrô de plataforma com arte desenhada à mão e dificuldade implacável.', 18, '2017-09-29', 1, 'Studio MDHR', 9),
('Journey', 39.99, 'Digital', 'L', 'Explore ruínas ancestrais em um deserto misterioso com trilha sonora emocional e cooperação sutil.', 22, '2012-03-13', 0, 'Thatgamecompany', 2);

-- DROP DATABASE db_gamestore;