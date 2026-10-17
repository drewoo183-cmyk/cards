// cardsData.js - База данных 80 карт
const CARDS_DATABASE = [
  // --- 1 МАНА (12 карт) ---
  { id: 'c1_1', mana: 1, name: 'Пехотинец', type: 'minion', atk: 2, hp: 1, icon: '🗡️', desc: 'Обычный новобранец' },
  { id: 'c1_2', mana: 1, name: 'Щитоносец', type: 'minion', atk: 0, hp: 4, icon: '🛡️', taunt: true, desc: 'Провокация' },
  { id: 'c1_3', mana: 1, name: 'Гончая склепа', type: 'minion', atk: 1, hp: 1, icon: '🐕', rush: true, desc: 'Рывок' },
  { id: 'c1_4', mana: 1, name: 'Чародейская стрела', type: 'spell', icon: '✨', dmg: 2, desc: 'Наносит 2 урона цели' },
  { id: 'c1_5', mana: 1, name: 'Бинты полевого врача', type: 'spell', icon: '🩹', heal: 3, desc: 'Восстанавливает 3 HP цели' },
  { id: 'c1_6', mana: 1, name: 'Магический червь', type: 'minion', atk: 1, hp: 3, icon: '🐛', desc: 'Устойчивое существо' },
  { id: 'c1_7', mana: 1, name: 'Лесной светляк', type: 'minion', atk: 1, hp: 2, icon: '🪲', desc: 'Легкий разведчик' },
  { id: 'c1_8', mana: 1, name: 'Вспышка ярости', type: 'spell', icon: '💢', buffAtk: 2, desc: 'Дает +2 к атаке существу' },
  { id: 'c1_9', mana: 1, name: 'Гоблин-лазутчик', type: 'minion', atk: 2, hp: 1, icon: '👺', desc: 'Быстрый боец' },
  { id: 'c1_10', mana: 1, name: 'Каменный дух', type: 'minion', atk: 1, hp: 2, icon: '🪨', taunt: true, desc: 'Провокация' },
  { id: 'c1_11', mana: 1, name: 'Ядовитый плевок', type: 'spell', icon: '🧪', dmg: 1, desc: 'Наносит 1 урон цели' },
  { id: 'c1_12', mana: 1, name: 'Монах рассвета', type: 'minion', atk: 1, hp: 2, icon: '🕯️', battlecry: { healHero: 2 }, desc: 'Боевой клич: +2 HP герою' },

  // --- 2 МАНЫ (14 карт) ---
  { id: 'c2_1', mana: 2, name: 'Страж границ', type: 'minion', atk: 1, hp: 4, icon: '💂', taunt: true, desc: 'Провокация' },
  { id: 'c2_2', mana: 2, name: 'Гоблин-подрывник', type: 'minion', atk: 3, hp: 2, icon: '🧨', battlecry: { enemyDmg: 1 }, desc: 'Боевой клич: 1 урон врагу' },
  { id: 'c2_3', mana: 2, name: 'Речной кроколиск', type: 'minion', atk: 2, hp: 3, icon: '🐊', desc: 'Крепкий зверь' },
  { id: 'c2_4', mana: 2, name: 'Ледяной шип', type: 'spell', icon: '❄️', dmg: 3, desc: 'Наносит 3 урона цели' },
  { id: 'c2_5', mana: 2, name: 'Благословение', type: 'spell', icon: '🌟', heal: 5, desc: 'Восстанавливает 5 HP цели' },
  { id: 'c2_6', mana: 2, name: 'Бешеный вепрь', type: 'minion', atk: 2, hp: 1, icon: '🐗', rush: true, desc: 'Рывок' },
  { id: 'c2_7', mana: 2, name: 'Кислотный слизнюк', type: 'minion', atk: 3, hp: 2, icon: '🟢', desc: 'Агрессивный дроп' },
  { id: 'c2_8', mana: 2, name: 'Снайпер гномов', type: 'minion', atk: 2, hp: 2, icon: '🎯', desc: 'Меткий стрелок' },
  { id: 'c2_9', mana: 2, name: 'Стальной панцирь', type: 'spell', icon: '🛡️', buffHp: 4, desc: 'Дает +4 HP существу' },
  { id: 'c2_10', mana: 2, name: 'Призрачный дух', type: 'minion', atk: 3, hp: 1, icon: '👻', desc: 'Высокая атака' },
  { id: 'c2_11', mana: 2, name: 'Служитель света', type: 'minion', atk: 1, hp: 3, icon: '📜', battlecry: { healHero: 3 }, desc: 'Боевой клич: +3 HP герою' },
  { id: 'c2_12', mana: 2, name: 'Хранитель болот', type: 'minion', atk: 2, hp: 2, icon: '🐸', taunt: true, desc: 'Провокация' },
  { id: 'c2_13', mana: 2, name: 'Молния', type: 'spell', icon: '⚡', dmg: 3, desc: 'Наносит 3 урона цели' },
  { id: 'c2_14', mana: 2, name: 'Ученик мага', type: 'minion', atk: 2, hp: 2, icon: '🧙', desc: 'Искатель знаний' },

  // --- 3 МАНЫ (14 карт) ---
  { id: 'c3_1', mana: 3, name: 'Всадник на волке', type: 'minion', atk: 3, hp: 1, icon: '🐺', rush: true, desc: 'Рывок' },
  { id: 'c3_2', mana: 3, name: 'Огненная вспышка', type: 'spell', icon: '🔥', dmg: 4, desc: 'Наносит 4 урона цели' },
  { id: 'c3_3', mana: 3, name: 'Адепт магии', type: 'minion', atk: 2, hp: 3, icon: '🔮', battlecry: { draw: 1 }, desc: 'Боевой клич: Взять карту' },
  { id: 'c3_4', mana: 3, name: 'Железный страж', type: 'minion', atk: 2, hp: 5, icon: '🤖', taunt: true, desc: 'Провокация' },
  { id: 'c3_5', mana: 3, name: 'Охотник джунглей', type: 'minion', atk: 4, hp: 2, icon: '🏹', desc: 'Ударная сила' },
  { id: 'c3_6', mana: 3, name: 'Тотем исцеления', type: 'minion', atk: 0, hp: 5, icon: '🗿', taunt: true, desc: 'Провокация' },
  { id: 'c3_7', mana: 3, name: 'Вихрь клинков', type: 'spell', icon: '🌪️', aoeDmg: 1, desc: 'Наносит 1 урон всем врагам' },
  { id: 'c3_8', mana: 3, name: 'Клыкарр-воин', type: 'minion', atk: 3, hp: 3, icon: '🦭', desc: 'Сбалансированный боец' },
  { id: 'c3_9', mana: 3, name: 'Ярость берсерка', type: 'spell', icon: '🩸', buffAtk: 3, desc: 'Дает +3 к атаке существу' },
  { id: 'c3_10', mana: 3, name: 'Ассасин теней', type: 'minion', atk: 4, hp: 1, icon: '🗡️', rush: true, desc: 'Рывок' },
  { id: 'c3_11', mana: 3, name: 'Таурен-защитник', type: 'minion', atk: 1, hp: 5, icon: '🐂', taunt: true, desc: 'Провокация' },
  { id: 'c3_12', mana: 3, name: 'Святое очищение', type: 'spell', icon: '☀️', heal: 6, desc: 'Восстанавливает 6 HP цели' },
  { id: 'c3_13', mana: 3, name: 'Механический паук', type: 'minion', atk: 3, hp: 2, icon: '🕷️', deathrattle: { token: true }, desc: 'Посмертный хрип: вызывает 1/1' },
  { id: 'c3_14', mana: 3, name: 'Боевой клич орков', type: 'spell', icon: '📣', buffAllAtk: 1, desc: 'Дает +1 к атаке всем вашим существам' },

  // --- 4 МАНЫ (14 карт) ---
  { id: 'c4_1', mana: 4, name: 'Сенегал-щитоносец', type: 'minion', atk: 3, hp: 5, icon: '🛡️', taunt: true, desc: 'Провокация' },
  { id: 'c4_2', mana: 4, name: 'Печать Мощи', type: 'spell', icon: '👑', buffStats: { atk: 3, hp: 3 }, desc: 'Дает +3/+3 существу' },
  { id: 'c4_3', mana: 4, name: 'Огненный шар ученика', type: 'spell', icon: '☄️', dmg: 5, desc: 'Наносит 5 урона цели' },
  { id: 'c4_4', mana: 4, name: 'Йети с ледника', type: 'minion', atk: 4, hp: 5, icon: '🦍', desc: 'Мощное тело за 4 маны' },
  { id: 'c4_5', mana: 4, name: 'Грифон небес', type: 'minion', atk: 4, hp: 3, icon: '🦅', rush: true, desc: 'Рывок' },
  { id: 'c4_6', mana: 4, name: 'Целитель душ', type: 'minion', atk: 2, hp: 5, icon: '🕊️', battlecry: { healHero: 4 }, desc: 'Боевой клич: +4 HP герою' },
  { id: 'c4_7', mana: 4, name: 'Темный чернокнижник', type: 'minion', atk: 4, hp: 4, icon: '🧙‍♂️', desc: 'Темный маг' },
  { id: 'c4_8', mana: 4, name: 'Освящение', type: 'spell', icon: '⛪', aoeDmg: 2, desc: 'Наносит 2 урона всем врагам' },
  { id: 'c4_9', mana: 4, name: 'Огр-громила', type: 'minion', atk: 5, hp: 4, icon: '👹', desc: 'Грубая сила' },
  { id: 'c4_10', mana: 4, name: 'Защитник короны', type: 'minion', atk: 2, hp: 6, icon: '🏰', taunt: true, desc: 'Провокация' },
  { id: 'c4_11', mana: 4, name: 'Камнедробитель', type: 'minion', atk: 4, hp: 4, icon: '🔨', desc: 'Ударный боец' },
  { id: 'c4_12', mana: 4, name: 'Прилив сил', type: 'spell', icon: '🧪', draw: 2, desc: 'Берет 2 карты' },
  { id: 'c4_13', mana: 4, name: 'Кентавр-лучник', type: 'minion', atk: 3, hp: 4, icon: '🏹', battlecry: { enemyDmg: 2 }, desc: 'Боевой клич: 2 урона врагу' },
  { id: 'c4_14', mana: 4, name: 'Мистический щит', type: 'spell', icon: '💠', buffHp: 6, desc: 'Дает +6 HP существу' },

  // --- 5 МАНЫ (12 карт) ---
  { id: 'c5_1', mana: 5, name: 'Боевой Голем', type: 'minion', atk: 5, hp: 5, icon: '🗿', desc: 'Тяжелый страж' },
  { id: 'c5_2', mana: 5, name: 'Очищающий взрыв', type: 'spell', icon: '💥', aoeDmg: 3, desc: 'Наносит 3 урона всем существам врага' },
  { id: 'c5_3', mana: 5, name: 'Рыцарь смерти', type: 'minion', atk: 5, hp: 3, icon: '💀', rush: true, desc: 'Рывок' },
  { id: 'c5_4', mana: 5, name: 'Древо мудрости', type: 'minion', atk: 3, hp: 6, icon: '🌲', taunt: true, desc: 'Провокация' },
  { id: 'c5_5', mana: 5, name: 'Испепеление', type: 'spell', icon: '🔥', dmg: 6, desc: 'Наносит 6 урона цели' },
  { id: 'c5_6', mana: 5, name: 'Жрец предков', type: 'minion', atk: 4, hp: 5, icon: '📿', battlecry: { healHero: 5 }, desc: 'Боевой клич: +5 HP герою' },
  { id: 'c5_7', mana: 5, name: 'Капитан пиратов', type: 'minion', atk: 5, hp: 4, icon: '🏴‍☠️', desc: 'Опасный рейдер' },
  { id: 'c5_8', mana: 5, name: 'Стена щитов', type: 'minion', atk: 2, hp: 8, icon: '🛡️', taunt: true, desc: 'Провокация' },
  { id: 'c5_9', mana: 5, name: 'Тайный архив', type: 'spell', icon: '📚', draw: 3, desc: 'Берет 3 карты' },
  { id: 'c5_10', mana: 5, name: 'Элементаль лавы', type: 'minion', atk: 6, hp: 4, icon: '🌋', desc: 'Огромный урон' },
  { id: 'c5_11', mana: 5, name: 'Паладин Серебряной длани', type: 'minion', atk: 4, hp: 6, icon: '⚔️', desc: 'Элитный воин' },
  { id: 'c5_12', mana: 5, name: 'Гнев небес', type: 'spell', icon: '🌩️', dmg: 5, aoeMinions: 1, desc: '5 урона цели + 1 урон остальным' },

  // --- 6 МАНЫ (6 карт) ---
  { id: 'c6_1', mana: 6, name: 'Лорд-Защитник', type: 'minion', atk: 4, hp: 8, icon: '🏰', taunt: true, desc: 'Провокация' },
  { id: 'c6_2', mana: 6, name: 'Великий Огр', type: 'minion', atk: 6, hp: 7, icon: '👹', desc: 'Грозный гигант' },
  { id: 'c6_3', mana: 6, name: 'Песчаный червь', type: 'minion', atk: 6, hp: 4, icon: '🪱', rush: true, desc: 'Рывок' },
  { id: 'c6_4', mana: 6, name: 'Волна пламени', type: 'spell', icon: '🌊', aoeDmg: 4, desc: 'Наносит 4 урона всем существам врага' },
  { id: 'c6_5', mana: 6, name: 'Хранитель жизни', type: 'minion', atk: 5, hp: 6, icon: '🌿', battlecry: { healHero: 7 }, desc: 'Боевой клич: +7 HP герою' },
  { id: 'c6_6', mana: 6, name: 'Колосс глубин', type: 'minion', atk: 5, hp: 7, icon: '🐙', taunt: true, desc: 'Провокация' },

  // --- 7 МАНЫ (4 карты) ---
  { id: 'c7_1', mana: 7, name: 'Огненный Гигант', type: 'minion', atk: 7, hp: 7, icon: '🔥', desc: 'Ударный гигант' },
  { id: 'c7_2', mana: 7, name: 'Огненный Шар Архимага', type: 'spell', icon: '☄️', dmg: 7, desc: 'Наносит 7 урона любой цели' },
  { id: 'c7_3', mana: 7, name: 'Древний Треант', type: 'minion', atk: 5, hp: 9, icon: '🌳', taunt: true, desc: 'Провокация' },
  { id: 'c7_4', mana: 7, name: 'Армагеддон', type: 'spell', icon: '☠️', aoeDmg: 5, desc: 'Наносит 5 урона всем существам на столе' },

  // --- 8 МАНЫ (4 карты) ---
  { id: 'c8_1', mana: 8, name: 'Древний Дракон', type: 'minion', atk: 8, hp: 8, icon: '🐉', desc: 'Король драконов' },
  { id: 'c8_2', mana: 8, name: 'Пожиратель Миров', type: 'minion', atk: 7, hp: 7, icon: '🌌', rush: true, desc: 'Рывок' },
  { id: 'c8_3', mana: 8, name: 'Абсолютный Барьер', type: 'minion', atk: 4, hp: 12, icon: '🕋', taunt: true, desc: 'Несокрушимая Провокация' },
  { id: 'c8_4', mana: 8, name: 'Гнев Титана', type: 'spell', icon: '⚡', dmg: 8, desc: 'Наносит 8 урона цели' }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CARDS_DATABASE };
}
