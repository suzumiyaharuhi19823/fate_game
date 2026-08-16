const sceneImage = document.querySelector("#scene-image");
const sceneImageFrame = document.querySelector("#scene-image-frame");
const sceneTitle = document.querySelector("#scene-title");
const sceneText = document.querySelector("#scene-text");
const roster = document.querySelector("#character-roster");
const rosterStatus = document.querySelector("#roster-status");
const supportCharacterRoster = document.querySelector("#support-character-roster");
const supportFeatureImageFrame = document.querySelector("#support-feature-image-frame");
const supportFeatureImage = document.querySelector("#support-feature-image");
const supportFeatureName = document.querySelector("#support-feature-name");
const supportFeatureRole = document.querySelector("#support-feature-role");
const supportFeatureDescription = document.querySelector("#support-feature-description");
const selectedName = document.querySelector("#selected-name");
const selectedDescription = document.querySelector("#selected-description");
const selectedElement = document.querySelector("#selected-element");
const selectedCircuit = document.querySelector("#selected-circuit");
const selectedMagic = document.querySelector("#selected-magic");
const magicCircuitButton = document.querySelector("#magic-circuit-button");
const magicCircuitButtonLabel = document.querySelector("#magic-circuit-button-label");
const magicCircuitGrid = document.querySelector("#magic-circuit-grid");
const magicCircuitMessage = document.querySelector("#magic-circuit-message");
const magicBranchPanel = document.querySelector("#magic-branch-panel");
const magicBranchTitle = document.querySelector("#magic-branch-title");
const magicBranchText = document.querySelector("#magic-branch-text");
const magicBranchOptions = document.querySelector("#magic-branch-options");
const magicOutcome = document.querySelector("#magic-outcome");
const magicOutcomeImageFrame = document.querySelector("#magic-outcome-image-frame");
const magicOutcomeImage = document.querySelector("#magic-outcome-image");
const magicOutcomeTitle = document.querySelector("#magic-outcome-title");
const magicOutcomeText = document.querySelector("#magic-outcome-text");
const appNavButtons = document.querySelectorAll(".app-nav__button");
const appPanels = document.querySelectorAll(".app-panel");
const battleSetup = document.querySelector("#battle-setup");
const battleCharacterPool = document.querySelector("#battle-character-pool");
const battleSelectionCount = document.querySelector("#battle-selection-count");
const battleStartButton = document.querySelector("#battle-start-button");
const battleArena = document.querySelector("#battle-arena");
const battlePlayerTeam = document.querySelector("#battle-player-team");
const battleEnemyTeam = document.querySelector("#battle-enemy-team");
const battleTurnStatus = document.querySelector("#battle-turn-status");
const battleTurnNumber = document.querySelector("#battle-turn-number");
const battleLog = document.querySelector("#battle-log");
const battleActions = document.querySelector("#battle-actions");
const battleNormalButton = document.querySelector("#battle-normal-button");
const battleSkillButton = document.querySelector("#battle-skill-button");
const battleResult = document.querySelector("#battle-result");
const battleResultEyebrow = document.querySelector("#battle-result-eyebrow");
const battleResultTitle = document.querySelector("#battle-result-title");
const battleResultText = document.querySelector("#battle-result-text");
const battleReturnButton = document.querySelector("#battle-return-button");
const battleClearCount = document.querySelector("#battle-clear-count");
const battleClearStages = document.querySelector("#battle-clear-stages");
const leaderboardClearCount = document.querySelector("#leaderboard-clear-count");
const leaderboardClearStages = document.querySelector("#leaderboard-clear-stages");
const leaderboardEntryCount = document.querySelector("#leaderboard-entry-count");
const dailyDrawStatus = document.querySelector("#daily-draw-status");
const dailyDrawButton = document.querySelector("#daily-draw-button");
const dailyDrawPoolCount = document.querySelector("#daily-draw-pool-count");
const dailyDrawResultFrame = document.querySelector("#daily-draw-result-frame");
const dailyDrawResultImage = document.querySelector("#daily-draw-result-image");
const dailyDrawResultName = document.querySelector("#daily-draw-result-name");
const dailyDrawResultText = document.querySelector("#daily-draw-result-text");
const fateSummonPoolCount = document.querySelector("#fate-summon-pool-count");
const fateSummonSingleButton = document.querySelector("#fate-summon-single-button");
const fateSummonTenButton = document.querySelector("#fate-summon-ten-button");
const fateSummonResult = document.querySelector("#fate-summon-result");
const fateSummonResultEmblem = document.querySelector("#fate-summon-result-emblem");
const fateSummonResultClass = document.querySelector("#fate-summon-result-class");
const fateSummonResultName = document.querySelector("#fate-summon-result-name");
const fateSummonResultStars = document.querySelector("#fate-summon-result-stars");
const fateSummonOverlay = document.querySelector("#fate-summon-overlay");
const fateSummonOverlayCard = document.querySelector("#fate-summon-overlay-card");
const fateSummonOverlayClass = document.querySelector("#fate-summon-overlay-class");
const fateSummonOverlayEmblem = document.querySelector("#fate-summon-overlay-emblem");
const fateSummonOverlayName = document.querySelector("#fate-summon-overlay-name");
const fateSummonOverlayDetail = document.querySelector("#fate-summon-overlay-detail");
const fateSummonOverlayStars = document.querySelector("#fate-summon-overlay-stars");
const fateSummonClose = document.querySelector("#fate-summon-close");
const fateSummonOverlayMulti = document.querySelector("#fate-summon-overlay-multi");
const fateSummonMultiGrid = document.querySelector("#fate-summon-multi-grid");
const fateSummonCloseMulti = document.querySelector("#fate-summon-close-multi");
const fateClearHistory = document.querySelector("#fate-clear-history");
const fateDrawHistory = document.querySelector("#fate-draw-history");
const bgmAudio = document.querySelector("#bgm-audio");
const bgmSettingsButton = document.querySelector("#bgm-settings-button");
const bgmSettingsPanel = document.querySelector("#bgm-settings-panel");
const bgmSettingsClose = document.querySelector("#bgm-settings-close");
const bgmStatus = document.querySelector("#bgm-status");
const bgmToggle = document.querySelector("#bgm-toggle");
const bgmVolume = document.querySelector("#bgm-volume");
const bgmTrackSelect = document.querySelector("#bgm-track-select");
const bgmFileInput = document.querySelector("#bgm-file-input");

const DEFAULT_SCENE = {
  image: "images/night_scene.png",
  alt: "三咲町的夜色",
  title: "三咲町的静夜",
  text: "黄昏沉入远山，路灯逐一点亮。三咲町的夜晚安静得像是时间本身放慢了脚步。",
};

const SUPPORTED_IMAGE_EXTENSIONS = ["png", "jpg"];

const MAGIC_SCENARIOS = {
  aoko: {
    title: "山丘上的风与时钟",
    text: "苍崎青子站在夜风里。远处的时钟塔轮廓隐没在蓝紫色薄雾中，某种不属于此刻的波动正在靠近。",
    branches: [
      {
        label: "以第五魔法回应",
        sceneTitle: "夜风中的魔法阵",
        sceneText: "蓝光切开夜色，时间的纹路在一瞬间静止。苍崎青子看见了数秒之后的天空。",
        outcomeTitle: "时间干涉",
        outcomeText: "第五魔法被短暂唤醒。风停止了，只有她的脚步声留在停滞的世界里。",
        record: "苍崎青子的魔术回路正在高速运转。",
      },
      {
        label: "收起魔力观察",
        sceneTitle: "山丘上的寂静",
        sceneText: "她将手收回外套。风停了，远处传来一声很轻的钟响。",
        outcomeTitle: "静观之夜",
        outcomeText: "苍崎青子没有展开魔法。她记住这股波动的形状，继续等待真正的夜晚降临。",
        record: "苍崎青子选择保持沉默。",
      },
    ],
  },
  alice: {
    title: "洋馆的沉默",
    text: "久远寺有珠注视着庭院。月亮悬在树影之间，童话怪物在黑暗里屏住了呼吸。",
    branches: [
      {
        label: "唤醒夜之使魔",
        sceneTitle: "月光下的歌谣",
        sceneText: "低语般的歌谣穿过庭院，树影里睁开了一双不属于夜晚的眼睛。",
        outcomeTitle: "童话怪物",
        outcomeText: "久远寺有珠的使魔从黑暗中现身。它没有前进，只是安静地守护着洋馆。",
        record: "久远寺有珠的使魔已经醒来。",
      },
      {
        label: "继续聆听夜色",
        sceneTitle: "庭院与月光",
        sceneText: "她继续站在窗边。月亮从云层后经过，庭院重新恢复了寂静。",
        outcomeTitle: "无人打破的夜",
        outcomeText: "久远寺有珠没有发动魔术。她知道，真正的客人还没有到来。",
        record: "久远寺有珠仍在观察庭院。",
      },
    ],
  },
  soujirou: {
    title: "无谋之人的直觉",
    text: "静希草十郎没有魔术，却能看见月光下正在扭曲的空气。身体比意识更早地做出了判断。",
    branches: [
      {
        label: "凭身体冲入夜色",
        sceneTitle: "月光下的来客",
        sceneText: "草十郎越过矮墙，用超常的身体能力追上那阵逃向树林的风。",
        outcomeTitle: "异质的身体",
        outcomeText: "他没有使用魔术，却追上了魔术造成的异变。这份能力本身就像黑夜中的谜题。",
        record: "静希草十郎的身体能力超出了常识。",
      },
      {
        label: "停下脚步等待",
        sceneTitle: "路口与直觉",
        sceneText: "草十郎停在路口。扭曲的空气逐渐平复，夜路重新变回普通的夜路。",
        outcomeTitle: "未觉醒的回路",
        outcomeText: "他选择不贸然行动。体内尚未觉醒的某种东西，像远处的灯火一样闪烁了一下。",
        record: "静希草十郎的回路仍未觉醒。",
      },
    ],
  },
};

const ENEMY_POOL = [
  {
    id: "hostile_mage",
    name: "灰衣的魔术师",
    type: "敌对魔术师",
    hp: 780,
    normal_atk: 105,
    skill_name: "黑魔术·荆棘",
    skill_damage: 270,
  },
  {
    id: "forest_wolf",
    name: "山林魔狼",
    type: "野生魔物",
    hp: 820,
    normal_atk: 115,
    skill_name: "月夜撕咬",
    skill_damage: 250,
  },
  {
    id: "shadow_fiend",
    name: "无貌的影魔",
    type: "野生魔物",
    hp: 760,
    normal_atk: 95,
    skill_name: "影之束缚",
    skill_damage: 230,
  },
  {
    id: "night_familiar",
    name: "夜之使魔",
    type: "野生魔物",
    hp: 720,
    normal_atk: 85,
    skill_name: "童话反唱",
    skill_damage: 210,
  },
  {
    id: "zealous_mage",
    name: "狂信魔术师",
    type: "敌对魔术师",
    hp: 800,
    normal_atk: 100,
    skill_name: "血之咏唱",
    skill_damage: 280,
  },
  {
    id: "moon_owl",
    name: "月夜枭兽",
    type: "野生魔物",
    hp: 740,
    normal_atk: 92,
    skill_name: "月影俯冲",
    skill_damage: 225,
  },
];

const FATE_SUMMON_POOL = [
  { name: "阿尔托莉雅", emblem: "A", className: "Saber", rarity: 5 },
  { name: "吉尔伽美什", emblem: "G", className: "Archer", rarity: 5 },
  { name: "贞德", emblem: "J", className: "Ruler", rarity: 5 },
  { name: "阿尔托莉雅 Alter", emblem: "A", className: "Saber", rarity: 4 },
  { name: "英灵卫宫", emblem: "E", className: "Archer", rarity: 4 },
  { name: "库·丘林", emblem: "C", className: "Lancer", rarity: 3 },
  { name: "美杜莎", emblem: "M", className: "Rider", rarity: 3 },
  { name: "赫拉克勒斯", emblem: "H", className: "Berserker", rarity: 4 },
  { name: "伊斯坎达尔", emblem: "I", className: "Rider", rarity: 5 },
  { name: "斯卡哈", emblem: "S", className: "Lancer", rarity: 5 },
  { name: "玉藻前", emblem: "T", className: "Caster", rarity: 5 },
  { name: "尼禄·克劳狄乌斯", emblem: "N", className: "Saber", rarity: 4 },
  { name: "佐佐木小次郎", emblem: "K", className: "Assassin", rarity: 3 },
  { name: "玛修·基列莱特", emblem: "M", className: "Shielder", rarity: 4 },
  { name: "诸葛孔明", emblem: "Z", className: "Caster", rarity: 5 },
  { name: "阿尔托莉雅 Lancer", emblem: "A", className: "Lancer", rarity: 5 },
  { name: "莫德雷德", emblem: "M", className: "Saber", rarity: 5 },
  { name: "奥兹曼迪亚斯", emblem: "O", className: "Rider", rarity: 5 },
  { name: "迦尔纳", emblem: "K", className: "Lancer", rarity: 5 },
  { name: "恩奇都", emblem: "E", className: "Lancer", rarity: 5 },
];

let characters = [];
let baseCharacters = [];
let battleCharacters = [];
let dailyDrawPool = [];
let supportCharacters = [];
let activeSupportCharacterId = null;
let characterCards = new Map();
let magicCards = new Map();
let circuitRevealed = false;
let activeCharacterId = null;
let battleSelectedIds = new Set();
let fateServantPool = FATE_SUMMON_POOL;
let fatePoolReady = false;
let bgmSettings = {
  track: "audio/bgm.mp3",
  volume: 0.55,
  enabled: true,
};
let customBgmObjectUrl = null;
let autoplayRetried = false;

const battleState = {
  status: "idle",
  playerTeam: [],
  enemyTeam: [],
  activePlayer: null,
  activeEnemy: null,
  targetEnemy: null,
  turn: 0,
};

const SKILL_COOLDOWN_TURNS = 2;
const CLEAR_RECORD_STORAGE_KEY = "mahoyo_clear_record";
const DAILY_DRAW_STORAGE_KEY = "mahoyo_daily_draw_record";
const OWNED_CHARACTER_POOL_STORAGE_KEY = "mahoyo_owned_character_pool";
const FATE_DRAW_HISTORY_STORAGE_KEY = "mahoyo_fate_draw_history";
const BGM_SETTINGS_STORAGE_KEY = "mahoyo_bgm_settings";
const BGM_DB_NAME = "mahoyo_bgm_store";
const BGM_DB_VERSION = 1;
const BGM_STORE_NAME = "tracks";
const BGM_CUSTOM_KEY = "custom_bgm";

async function loadCharacters() {
  rosterStatus.textContent = "正在读取魔术档案...";
  magicCircuitButton.disabled = true;

  try {
    const response = await fetch("data/characters.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`档案读取失败：HTTP ${response.status}`);
    }

    const data = await response.json();
    baseCharacters = data.characters;
    characters = data.characters;
    battleCharacters = mergeCharacterPool(data.characters);
    renderCharacters(characters);
    renderBattleCharacterPool(battleCharacters);
    renderMagicCircuitCards();
    rosterStatus.textContent = `已读取 ${characters.length} 份魔术师档案`;
    magicCircuitButton.disabled = false;
    initializeDailyDraw();
  } catch (error) {
    baseCharacters = [];
    characters = [];
    battleCharacters = [];
    rosterStatus.textContent = "魔术档案暂时无法读取";
    console.error(error);
  }
}

async function loadDailyDrawPool() {
  try {
    const response = await fetch("data/mahoyo_daily_pool.json", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`每日卡池读取失败：HTTP ${response.status}`);
    }

    const data = await response.json();
    if (!Array.isArray(data) || !data.length) {
      throw new Error("每日卡池数据为空");
    }

    dailyDrawPool = data;
  } catch (error) {
    dailyDrawPool = baseCharacters;
    console.warn("每日卡池使用基础角色作为备用", error);
  }

  dailyDrawPoolCount.textContent =
    `今日卡池：${dailyDrawPool.length} 名魔夜角色`;
  initializeDailyDraw();
}

async function loadSupportCharacters() {
  try {
    const response = await fetch("data/other_chars.json", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`配角档案读取失败：HTTP ${response.status}`);
    }

    const data = await response.json();
    if (!Array.isArray(data.characters) || !data.characters.length) {
      throw new Error("配角档案数据为空");
    }

    supportCharacters = data.characters;
  } catch (error) {
    supportCharacters = [];
    console.warn("配角档案暂时无法读取", error);
  }

  renderSupportCharacters(supportCharacters);
}

function renderCharacters(items) {
  roster.replaceChildren();
  characterCards = new Map();

  items.forEach((character) => {
    const card = createCharacterCard(character);
    roster.append(card);
    characterCards.set(character.id, card);
  });
}

function renderSupportCharacters(items) {
  supportCharacterRoster.replaceChildren();
  items.forEach((character) => {
    supportCharacterRoster.append(createSupportCharacterCard(character));
  });

  if (items.length) {
    activeSupportCharacterId = items[0].id;
    showSupportPreview(items[0]);
    updateSupportCardSelection();
  }
}

function createSupportCharacterCard(character) {
  const card = document.createElement("article");
  card.className = "support-character-card";
  card.dataset.characterId = character.id;
  card.tabIndex = 0;
  card.setAttribute("aria-pressed", "false");
  card.addEventListener("mouseenter", () => showSupportPreview(character));
  card.addEventListener("click", () => {
    activeSupportCharacterId = character.id;
    showSupportPreview(character);
    updateSupportCardSelection();
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });

  const imageFrame = createImageFrame(
    "support-character-card__image-frame",
    "support-character-card__image",
    character.image,
    character.name,
    String(character.name).slice(0, 2),
  );
  imageFrame.style.backgroundColor = "#ffffff";

  const body = document.createElement("div");
  body.className = "support-character-card__body";

  const name = document.createElement("h4");
  name.textContent = character.name;

  const type = document.createElement("p");
  type.className = "support-character-card__type";
  type.textContent = character.type;

  const role = document.createElement("p");
  role.className = "support-character-card__role";
  role.textContent = character.role;

  const attribute = document.createElement("p");
  attribute.className = "support-character-card__attribute";
  attribute.textContent = `魔术属性：${character.magicAttribute}`;

  const description = document.createElement("p");
  description.className = "support-character-card__description";
  description.textContent = character.description;

  body.append(name, type, role, attribute, description);
  card.append(imageFrame, body);
  return card;
}

function showSupportPreview(character) {
  if (!character) {
    return;
  }

  supportFeatureImageFrame.dataset.fallback =
    String(character.name).slice(0, 2);
  supportFeatureImage.alt = character.name;
  setImageSource(supportFeatureImage, character.image);
  supportFeatureName.textContent = character.name;
  supportFeatureRole.textContent = character.role;
  supportFeatureDescription.textContent = character.description;
}

function updateSupportCardSelection() {
  document
    .querySelectorAll(".support-character-card")
    .forEach((card) => {
      const isActive = card.dataset.characterId === activeSupportCharacterId;
      card.classList.toggle("is-selected", isActive);
      card.setAttribute("aria-pressed", String(isActive));
    });
}

function createCharacterCard(character) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "character-card";
  card.dataset.characterId = character.id;
  card.setAttribute("aria-pressed", "false");
  card.addEventListener("click", () => selectCharacter(character));

  const imageFrame = createImageFrame(
    "character-card__image-frame",
    "character-card__image",
    character.image,
    character.name,
    fallbackLabelFor(character),
  );

  const body = document.createElement("span");
  body.className = "character-card__body";

  const name = document.createElement("span");
  name.className = "character-card__name";
  name.textContent = character.name;

  const title = document.createElement("span");
  title.className = "character-card__title";
  title.textContent = character.title;

  const stats = document.createElement("span");
  stats.className = "character-card__stats";

  const classStat = document.createElement("span");
  classStat.append("类型 ", createStatValue(character.class));

  const elementStat = document.createElement("span");
  elementStat.append("属性 ", createStatValue(character.attributes.element));

  body.append(name, title);
  stats.append(classStat, elementStat);
  card.append(imageFrame, body, stats);

  return card;
}

function createStatValue(value) {
  const strong = document.createElement("strong");
  strong.textContent = value;
  return strong;
}

function fallbackLabelFor(character) {
  const englishName = character.englishName ?? character.name;
  return englishName.split(" ")[0].toUpperCase();
}

function scenarioImageFor(character) {
  return character.scenarioImage ?? character.image;
}

function createImageFrame(frameClass, imageClass, src, alt, fallbackLabel) {
  const frame = document.createElement("span");
  frame.className = `${frameClass} image-fallback`;
  frame.dataset.fallback = fallbackLabel;

  const image = document.createElement("img");
  image.className = imageClass;
  image.alt = alt;
  setImageSource(image, src);

  frame.append(image);
  return frame;
}

function selectCharacter(character) {
  characterCards.forEach((card, id) => {
    card.setAttribute("aria-pressed", String(id === character.id));
  });

  setImageSource(sceneImage, character.image);
  sceneImage.alt = character.name;
  sceneImageFrame.dataset.fallback = fallbackLabelFor(character);
  sceneTitle.textContent = `${character.title} · ${character.name}`;
  sceneText.textContent = character.description;
  updateSelectedRecord(character, character.description);
}

function updateSelectedRecord(character, description) {
  selectedName.textContent = character.name;
  selectedDescription.textContent = description;
  selectedElement.textContent = character.attributes.element;
  selectedCircuit.textContent = character.attributes.circuit;
  selectedMagic.textContent = character.attributes.magic;
}

function renderMagicCircuitCards() {
  magicCircuitGrid.replaceChildren();
  magicCards = new Map();

  characters.forEach((character, index) => {
    const card = createMagicCircuitCard(character, index);
    magicCircuitGrid.append(card);
    magicCards.set(character.id, card);
  });
}

function createMagicCircuitCard(character, index) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "magic-circuit-card";
  card.dataset.characterId = character.id;
  card.style.setProperty("--reveal-delay", `${index * 110}ms`);
  card.setAttribute("aria-pressed", "false");
  card.setAttribute("aria-label", `未展开的魔术回路 ${index + 1}`);
  card.addEventListener("click", () => {
    if (circuitRevealed) {
      startMagicScenario(character);
    }
  });

  const inner = document.createElement("span");
  inner.className = "magic-circuit-card__inner";

  const front = document.createElement("span");
  front.className = "magic-circuit-card__face magic-circuit-card__front";

  const seal = document.createElement("span");
  seal.className = "magic-circuit-card__seal";
  seal.textContent = `回路 ${String(index + 1).padStart(2, "0")}`;
  front.append(seal);

  const back = document.createElement("span");
  back.className = "magic-circuit-card__face magic-circuit-card__back";

  const imageFrame = createImageFrame(
    "magic-circuit-card__image-frame",
    "magic-circuit-card__image",
    character.magicImage ?? character.image,
    character.name,
    fallbackLabelFor(character),
  );

  const details = document.createElement("span");
  details.className = "magic-circuit-card__details";

  const name = document.createElement("span");
  name.className = "magic-circuit-card__name";
  name.textContent = character.name;

  const subtitle = document.createElement("span");
  subtitle.className = "magic-circuit-card__subtitle";
  subtitle.textContent = `${character.englishName} · ${character.attributes.element}`;

  details.append(name, subtitle);
  back.append(imageFrame, details);
  inner.append(front, back);
  card.append(inner);

  return card;
}

function handleMagicCircuitButton() {
  if (!circuitRevealed) {
    revealMagicCircuits();
    return;
  }

  resetMagicCircuits();
}

function revealMagicCircuits() {
  circuitRevealed = true;
  activeCharacterId = null;

  magicCards.forEach((card, characterId) => {
    card.classList.add("is-flipped");
    card.setAttribute("aria-pressed", "false");

    const character = characters.find((item) => item.id === characterId);
    if (character) {
      card.setAttribute("aria-label", `选择魔术师 ${character.name}`);
    }
  });

  magicCircuitMessage.textContent = "选择一位魔术师，进入属于她的魔术情境。";
  magicCircuitButtonLabel.textContent = "重新收起";
}

function startMagicScenario(character) {
  activeCharacterId = character.id;

  magicCards.forEach((card, id) => {
    const isActive = id === character.id;
    card.setAttribute("aria-pressed", String(isActive));
    card.classList.toggle("is-active", isActive);
  });

  const scenario =
    MAGIC_SCENARIOS[character.id] ??
    {
      title: "静夜的低语",
      text: "夜色中有什么正在变化。",
      branches: [
        {
          label: "靠近观察",
          sceneTitle: "蓝紫色的夜晚",
          sceneText: "你靠近那阵微光，夜风从耳边经过。",
          outcomeTitle: "短暂的接触",
          outcomeText: "微光消失了，只留下安静的夜色。",
          record: "魔术情境已经结束。",
        },
        {
          label: "留在原地",
          sceneTitle: "沉默的街道",
          sceneText: "你留在原地。夜色逐渐恢复平静。",
          outcomeTitle: "没有发生的事",
          outcomeText: "这一夜什么也没有发生。",
          record: "魔术情境已经结束。",
        },
      ],
    };

  magicBranchTitle.textContent = scenario.title;
  magicBranchText.textContent = scenario.text;
  renderMagicBranchOptions(scenario.branches);
  magicOutcome.hidden = true;
  magicBranchPanel.hidden = false;
  magicCircuitMessage.textContent = `魔术回路已接续：${character.name}`;
  magicCircuitButtonLabel.textContent = "重置魔术回路";
}

function renderMagicBranchOptions(branches) {
  magicBranchOptions.replaceChildren();
  magicBranchOptions.hidden = false;

  branches.forEach((branch, index) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "magic-branch-option";
    option.append(
      createOptionIndex(index),
      document.createTextNode(branch.label),
    );
    option.addEventListener("click", () => resolveMagicBranch(branch));
    magicBranchOptions.append(option);
  });
}

function createOptionIndex(index) {
  const number = document.createElement("span");
  number.className = "magic-branch-option__index";
  number.textContent = String(index + 1).padStart(2, "0");
  return number;
}

function resolveMagicBranch(branch) {
  const character = characters.find(
    (item) => item.id === activeCharacterId,
  );
  if (!character) {
    return;
  }

  magicBranchOptions.hidden = true;
  magicOutcome.hidden = false;
  magicOutcomeImageFrame.dataset.fallback = fallbackLabelFor(character);
  setImageSource(magicOutcomeImage, scenarioImageFor(character));
  magicOutcomeImage.alt = character.name;
  magicOutcomeTitle.textContent = branch.outcomeTitle;
  magicOutcomeText.textContent = branch.outcomeText;

  setImageSource(sceneImage, scenarioImageFor(character));
  sceneImage.alt = character.name;
  sceneImageFrame.dataset.fallback = fallbackLabelFor(character);
  sceneTitle.textContent = branch.sceneTitle;
  sceneText.textContent = branch.sceneText;
  updateSelectedRecord(character, branch.record);
  magicCircuitMessage.textContent = `魔术情境已显现：${branch.outcomeTitle}`;
}

function resetMagicCircuits() {
  circuitRevealed = false;
  activeCharacterId = null;

  magicCards.forEach((card) => {
    card.classList.remove("is-flipped", "is-active");
    card.setAttribute("aria-pressed", "false");
  });

  magicBranchPanel.hidden = true;
  magicBranchOptions.hidden = false;
  magicBranchOptions.replaceChildren();
  magicOutcome.hidden = true;
  magicCircuitMessage.textContent = "魔术回路尚未展开。";
  magicCircuitButtonLabel.textContent = "展开魔术回路";
  restoreDefaultScene();
}

function restoreDefaultScene() {
  setImageSource(sceneImage, DEFAULT_SCENE.image);
  sceneImage.alt = DEFAULT_SCENE.alt;
  sceneImageFrame.dataset.fallback = "NIGHT";
  sceneTitle.textContent = DEFAULT_SCENE.title;
  sceneText.textContent = DEFAULT_SCENE.text;

  selectedName.textContent = "尚未接触";
  selectedDescription.textContent = "夜色仍在等待回应。";
  selectedElement.textContent = "--";
  selectedCircuit.textContent = "--";
  selectedMagic.textContent = "--";

  characterCards.forEach((card) => {
    card.setAttribute("aria-pressed", "false");
  });
}

function renderBattleCharacterPool(items) {
  battleCharacterPool.replaceChildren();

  if (!items.length) {
    battleSelectedIds.clear();
    updateBattleSelectionCount();
    return;
  }

  if (battleSelectedIds.size === 0) {
    battleSelectedIds = new Set(
      items.slice(0, 3).map((item) => item.id),
    );
  }

  items.forEach((character) => {
    battleCharacterPool.append(createBattlePoolCard(character));
  });
  updateBattleSelectionCount();
}

function createBattlePoolCard(character) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "battle-pool-card";
  card.dataset.characterId = character.id;

  const isSelected = battleSelectedIds.has(character.id);
  card.classList.toggle("is-selected", isSelected);
  card.setAttribute("aria-pressed", String(isSelected));

  const imageFrame = createImageFrame(
    "battle-pool-card__image-frame",
    "battle-pool-card__image",
    character.battleImage ?? character.image,
    character.name,
    fallbackLabelFor(character),
  );

  const body = document.createElement("span");
  body.className = "battle-pool-card__body";

  const name = document.createElement("span");
  name.className = "battle-pool-card__name";
  name.textContent = character.name;

  const type = document.createElement("span");
  type.className = "battle-pool-card__type";
  type.textContent = character.class;

  const stats = document.createElement("span");
  stats.className = "battle-pool-card__stats";
  stats.append(
    createBattlePoolStat("HP", character.hp),
    createBattlePoolStat("普攻", character.normal_atk),
    createBattlePoolStat("技能", character.skill_damage),
  );

  const check = document.createElement("span");
  check.className = "battle-pool-card__check";
  check.setAttribute("aria-hidden", "true");

  body.append(name, type, stats);
  card.append(imageFrame, body, check);
  card.addEventListener("click", () => {
    if (battleSelectedIds.has(character.id)) {
      battleSelectedIds.delete(character.id);
    } else {
      battleSelectedIds.add(character.id);
    }

    const selected = battleSelectedIds.has(character.id);
    card.classList.toggle("is-selected", selected);
    card.setAttribute("aria-pressed", String(selected));
    updateBattleSelectionCount();
  });

  return card;
}

function createBattlePoolStat(label, value) {
  const stat = document.createElement("span");
  const statLabel = document.createElement("small");
  statLabel.textContent = label;
  const statValue = document.createElement("strong");
  statValue.textContent = value;
  stat.append(statLabel, statValue);
  return stat;
}

function updateBattleSelectionCount() {
  const count = battleSelectedIds.size;
  battleSelectionCount.textContent = `已选择 ${count} / 3`;
  battleStartButton.disabled = count !== 3;
}

function startBattle() {
  if (battleSelectedIds.size !== 3 || !battleCharacters.length) {
    return;
  }

  battleState.playerTeam = battleCharacters
    .filter((character) => battleSelectedIds.has(character.id))
    .map(createPlayerCombatant);
  battleState.enemyTeam = pickRandomEnemyTeam();
  battleState.activePlayer = null;
  battleState.activeEnemy = null;
  battleState.targetEnemy = null;
  battleState.turn = 0;
  battleState.status = "running";

  battleSetup.hidden = true;
  battleArena.hidden = false;
  battleResult.hidden = true;
  battleActions.hidden = false;
  battleLog.replaceChildren();
  battleTurnStatus.textContent = "战斗尚未开始。";
  battleTurnNumber.textContent = "第 0 回合";

  appendBattleLog("战斗开始。夜色中出现了三名敌人。", "system");
  renderBattleTeams();
  nextBattleRound();
}

function createPlayerCombatant(character) {
  return {
    id: `player-${character.id}`,
    name: character.name,
    type: character.class,
    hp: Number(character.hp),
    maxHp: Number(character.hp),
    normalAtk: Number(character.normal_atk),
    skillName: character.skill_name,
    skillDamage: Number(character.skill_damage),
    alive: true,
    skillCooldownUntilTurn: 0,
    image: character.battleImage ?? character.image,
    fallback: fallbackLabelFor(character),
  };
}

function createEnemyCombatant(enemy) {
  return {
    id: `enemy-${enemy.id}`,
    name: enemy.name,
    type: enemy.type,
    hp: Number(enemy.hp),
    maxHp: Number(enemy.hp),
    normalAtk: Number(enemy.normal_atk),
    skillName: enemy.skill_name,
    skillDamage: Number(enemy.skill_damage),
    alive: true,
    skillCooldownUntilTurn: 0,
    image: null,
    fallback: enemy.name.slice(0, 1),
  };
}

function pickRandomEnemyTeam() {
  const shuffledEnemies = [...ENEMY_POOL].sort(() => Math.random() - 0.5);
  return shuffledEnemies.slice(0, 3).map(createEnemyCombatant);
}

function nextBattleRound() {
  if (battleState.status !== "running") {
    return;
  }

  battleState.turn += 1;
  battleState.activePlayer = null;
  battleState.activeEnemy = pickRandomAliveCombatant(battleState.enemyTeam);
  battleState.targetEnemy = null;

  if (
    !pickRandomAliveCombatant(battleState.playerTeam) ||
    !battleState.activeEnemy
  ) {
    checkBattleEnd();
    return;
  }

  battleTurnNumber.textContent = `第 ${battleState.turn} 回合`;
  battleTurnStatus.textContent =
    `${battleState.activeEnemy.name} 已进入战斗。请选择一名存活角色出手。`;
  appendBattleLog(
    `第 ${battleState.turn} 回合：${battleState.activeEnemy.name} 出现在夜色中。`,
    "system",
  );
  setBattleActionsDisabled(true);
  renderBattleTeams();
}

function selectBattlePlayer(combatant) {
  if (
    battleState.status !== "running" ||
    !combatant.alive ||
    !battleState.activeEnemy?.alive
  ) {
    return;
  }

  battleState.activePlayer = combatant;
  battleState.targetEnemy = null;
  battleTurnStatus.textContent =
    `${combatant.name} 已准备。请选择攻击目标。`;
  appendBattleLog(
    `玩家选择 ${combatant.name} 在本回合出手。`,
    "player",
  );
  setBattleActionsDisabled(true);
  renderBattleTeams();
}

function selectBattleTarget(combatant) {
  if (
    battleState.status !== "running" ||
    !combatant.alive ||
    !battleState.activePlayer?.alive
  ) {
    return;
  }

  battleState.targetEnemy = combatant;
  const skillState = canUseSkill(battleState.activePlayer)
    ? " 技能已就绪。"
    : ` 技能冷却 ${getSkillCooldownRemaining(battleState.activePlayer)} 回合。`;
  battleTurnStatus.textContent =
    `${battleState.activePlayer.name} 将攻击 ${combatant.name}。${skillState}`;
  appendBattleLog(
    `玩家选择 ${combatant.name} 作为攻击目标。`,
    "player",
  );
  setBattleActionsDisabled(false);
  renderBattleTeams();
  battleNormalButton.focus({ preventScroll: true });
}

function pickRandomAliveCombatant(team) {
  const aliveCombatants = team.filter((combatant) => combatant.alive);
  if (!aliveCombatants.length) {
    return null;
  }
  return aliveCombatants[Math.floor(Math.random() * aliveCombatants.length)];
}

function performPlayerAction(actionType) {
  if (
    battleState.status !== "running" ||
    !battleState.activePlayer?.alive ||
    !battleState.targetEnemy?.alive
  ) {
    return;
  }

  setBattleActionsDisabled(true);
  performBattleAttack(
    battleState.activePlayer,
    battleState.targetEnemy,
    actionType,
    "player",
  );
  renderBattleTeams();

  if (checkBattleEnd()) {
    return;
  }

  if (battleState.activeEnemy?.alive) {
    const enemyTarget = pickRandomAliveCombatant(battleState.playerTeam);
    if (!enemyTarget) {
      checkBattleEnd();
      return;
    }

    const enemyAction =
      canUseSkill(battleState.activeEnemy) && Math.random() < 0.42
        ? "skill"
        : "normal";
    performBattleAttack(
      battleState.activeEnemy,
      enemyTarget,
      enemyAction,
      "enemy",
    );
    renderBattleTeams();
  }

  if (!checkBattleEnd()) {
    nextBattleRound();
  }
}

function performBattleAttack(attacker, target, actionType, side) {
  if (!target?.alive) {
    return;
  }

  const baseDamage =
    actionType === "skill" ? attacker.skillDamage : attacker.normalAtk;
  const damage = Math.max(
    1,
    Math.round(baseDamage * (0.9 + Math.random() * 0.2)),
  );
  const actionLabel =
    actionType === "skill"
      ? `技能攻击「${attacker.skillName}」`
      : "普通攻击";

  target.hp = Math.max(0, target.hp - damage);
  appendBattleLog(
    `${attacker.name} 使用${actionLabel}，对 ${target.name} 造成 ${damage} 点伤害。`,
    side,
  );

  if (target.hp === 0) {
    target.alive = false;
    appendBattleLog(`${target.name} 阵亡离场。`, "system");
  }

  if (actionType === "skill") {
    attacker.skillCooldownUntilTurn =
      battleState.turn + SKILL_COOLDOWN_TURNS + 1;
    appendBattleLog(
      `${attacker.name} 的技能进入 ${SKILL_COOLDOWN_TURNS} 回合冷却。`,
      "system",
    );
  }
}

function checkBattleEnd() {
  const playerDefeated = battleState.playerTeam.every(
    (combatant) => !combatant.alive,
  );
  const enemyDefeated = battleState.enemyTeam.every(
    (combatant) => !combatant.alive,
  );

  if (!playerDefeated && !enemyDefeated) {
    return false;
  }

  battleState.status = "ended";
  battleActions.hidden = true;
  battleResult.hidden = false;
  battleTurnStatus.textContent = "战斗结束。";

  const playerWon = enemyDefeated;
  battleResultEyebrow.textContent = playerWon ? "Victory" : "Defeat";
  battleResultTitle.textContent = playerWon ? "战斗胜利" : "战斗失败";
  if (playerWon) {
    const clearCount = recordBattleClear();
    battleResultText.textContent =
      `玩家队伍击败了三名敌人。当前累计通关 ${clearCount} 次。`;
  } else {
    battleResultText.textContent =
      "玩家队伍全员阵亡。三咲町的夜晚尚未被改变。";
  }
  appendBattleLog(
    playerWon ? "敌方队伍全灭，玩家队伍获得胜利。" : "玩家队伍全灭，战斗失败。",
    "result",
  );
  renderBattleTeams();
  return true;
}

function renderBattleTeams() {
  battlePlayerTeam.replaceChildren(
    ...battleState.playerTeam.map(renderBattleUnitCard),
  );
  battleEnemyTeam.replaceChildren(
    ...battleState.enemyTeam.map(renderBattleUnitCard),
  );
}

function renderBattleUnitCard(combatant) {
  const isPlayerCombatant = Boolean(combatant.image);
  const card = document.createElement("button");
  card.type = "button";
  card.className = "battle-unit-card";
  card.classList.add(
    combatant.image
      ? "battle-unit-card--player"
      : "battle-unit-card--enemy",
  );

  if (isPlayerCombatant) {
    card.classList.add("battle-unit-card--selectable");
    card.disabled = !combatant.alive || battleState.status !== "running";
    card.setAttribute(
      "aria-pressed",
      String(combatant === battleState.activePlayer),
    );
    card.addEventListener("click", () => selectBattlePlayer(combatant));
  } else {
    card.classList.add("battle-unit-card--target-selectable");
    card.disabled =
      !combatant.alive ||
      battleState.status !== "running" ||
      !battleState.activePlayer?.alive;
    card.setAttribute(
      "aria-pressed",
      String(combatant === battleState.targetEnemy),
    );
    card.addEventListener("click", () => selectBattleTarget(combatant));
  }

  card.classList.toggle("is-active", combatant === battleState.activePlayer || combatant === battleState.activeEnemy);
  card.classList.toggle("is-targeted", combatant === battleState.targetEnemy);
  card.classList.toggle("is-dead", !combatant.alive);

  if (combatant.image) {
    const imageFrame = createImageFrame(
      "battle-unit-card__image-frame",
      "battle-unit-card__image",
      combatant.image,
      combatant.name,
      combatant.fallback,
    );
    card.append(imageFrame);
  } else {
    const mark = document.createElement("span");
    mark.className = "battle-unit-card__mark";
    mark.textContent = combatant.name.slice(0, 1);
    mark.setAttribute("aria-hidden", "true");
    card.append(mark);
  }

  const body = document.createElement("span");
  body.className = "battle-unit-card__body";

  const name = document.createElement("span");
  name.className = "battle-unit-card__name";
  name.textContent = combatant.name;

  const type = document.createElement("span");
  type.className = "battle-unit-card__type";
  type.textContent = combatant.type;

  const hp = document.createElement("span");
  hp.className = "battle-unit-card__hp";
  const hpTrack = document.createElement("span");
  hpTrack.className = "battle-unit-card__hp-track";
  const hpFill = document.createElement("span");
  hpFill.className = "battle-unit-card__hp-fill";
  const hpPercentage = Math.max(0, (combatant.hp / combatant.maxHp) * 100);
  hpFill.style.width = `${hpPercentage}%`;
  hpTrack.append(hpFill);

  const hpText = document.createElement("span");
  hpText.className = "battle-unit-card__hp-text";
  hpText.textContent = `${combatant.hp} / ${combatant.maxHp}`;
  hp.append(hpTrack, hpText);

  body.append(name, type, hp);
  card.append(body);
  return card;
}

function appendBattleLog(text, type = "system") {
  const entry = document.createElement("div");
  entry.className = `battle-log__entry battle-log__entry--${type}`;
  const message = document.createElement("span");
  message.textContent = text;
  entry.append(message);
  battleLog.append(entry);
  battleLog.scrollTop = battleLog.scrollHeight;
}

function setBattleActionsDisabled(disabled) {
  battleNormalButton.disabled = disabled;
  battleSkillButton.disabled =
    disabled || !canUseSkill(battleState.activePlayer);
  updateBattleSkillButton();
}

function canUseSkill(combatant) {
  return Boolean(
    combatant?.alive &&
      (combatant.skillCooldownUntilTurn ?? 0) <= battleState.turn,
  );
}

function updateBattleSkillButton() {
  const cooldownRemaining = getSkillCooldownRemaining(
    battleState.activePlayer,
  );
  battleSkillButton.textContent = cooldownRemaining > 0
    ? `技能攻击（冷却 ${cooldownRemaining} 回合）`
    : "技能攻击";
}

function getSkillCooldownRemaining(combatant) {
  if (!combatant) {
    return 0;
  }

  return Math.max(
    0,
    (combatant.skillCooldownUntilTurn ?? 0) - battleState.turn,
  );
}

function resetBattleToSetup() {
  battleState.status = "idle";
  battleState.playerTeam = [];
  battleState.enemyTeam = [];
  battleState.activePlayer = null;
  battleState.activeEnemy = null;
  battleState.targetEnemy = null;
  battleState.turn = 0;

  battleArena.hidden = true;
  battleSetup.hidden = false;
  battleActions.hidden = true;
  battleResult.hidden = true;
  battleLog.replaceChildren();
  battleTurnStatus.textContent = "战斗尚未开始。";
  battleTurnNumber.textContent = "第 0 回合";
  renderBattleCharacterPool(battleCharacters);
}

function loadClearRecord() {
  const defaultRecord = {
    clearCount: 0,
    lastClearedAt: null,
  };

  try {
    const storedRecord = localStorage.getItem(CLEAR_RECORD_STORAGE_KEY);
    if (!storedRecord) {
      return defaultRecord;
    }

    const parsedRecord = JSON.parse(storedRecord);
    const clearCount = Number(parsedRecord.clearCount);
    return {
      clearCount: Number.isFinite(clearCount)
        ? Math.max(0, Math.floor(clearCount))
        : 0,
      lastClearedAt: parsedRecord.lastClearedAt ?? null,
    };
  } catch (error) {
    console.warn("无法读取排行榜记录", error);
    return defaultRecord;
  }
}

function saveClearRecord(record) {
  try {
    localStorage.setItem(
      CLEAR_RECORD_STORAGE_KEY,
      JSON.stringify(record),
    );
  } catch (error) {
    console.warn("无法保存排行榜记录", error);
  }
}

function updateClearDisplays(clearCount) {
  const displayCount = String(clearCount);
  battleClearCount.textContent = displayCount;
  battleClearStages.textContent = displayCount;
  leaderboardClearCount.textContent = displayCount;
  leaderboardClearStages.textContent = displayCount;
  leaderboardEntryCount.textContent = displayCount;
}

function recordBattleClear() {
  const record = loadClearRecord();
  record.clearCount += 1;
  record.lastClearedAt = new Date().toISOString();
  saveClearRecord(record);
  updateClearDisplays(record.clearCount);
  return record.clearCount;
}

function initializeClearProgress() {
  updateClearDisplays(loadClearRecord().clearCount);
}

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function loadOwnedCharacterPool() {
  try {
    const storedPool = localStorage.getItem(OWNED_CHARACTER_POOL_STORAGE_KEY);
    if (!storedPool) {
      return [];
    }

    const parsedPool = JSON.parse(storedPool);
    return Array.isArray(parsedPool)
      ? parsedPool.filter((character) => character?.id && character?.name)
      : [];
  } catch (error) {
    console.warn("无法读取本地角色池", error);
    return [];
  }
}

function saveOwnedCharacterPool(pool) {
  try {
    localStorage.setItem(
      OWNED_CHARACTER_POOL_STORAGE_KEY,
      JSON.stringify(pool),
    );
  } catch (error) {
    console.warn("无法保存本地角色池", error);
  }
}

function mergeCharacterPool(basePool) {
  const mergedCharacters = new Map(
    basePool.map((character) => [character.id, character]),
  );

  loadOwnedCharacterPool().forEach((character) => {
    if (!mergedCharacters.has(character.id)) {
      mergedCharacters.set(character.id, character);
    }
  });

  return Array.from(mergedCharacters.values());
}

function addCharacterToLocalPool(character) {
  const localPool = loadOwnedCharacterPool();
  const existingIndex = localPool.findIndex(
    (item) => item.id === character.id,
  );

  if (existingIndex >= 0) {
    localPool[existingIndex] = {
      ...localPool[existingIndex],
      ...character,
    };
  } else {
    localPool.push(character);
  }

  saveOwnedCharacterPool(localPool);
  battleCharacters = mergeCharacterPool(baseCharacters);
  renderBattleCharacterPool(battleCharacters);
}

function loadDailyDrawRecord() {
  try {
    const storedRecord = localStorage.getItem(DAILY_DRAW_STORAGE_KEY);
    if (!storedRecord) {
      return null;
    }

    const parsedRecord = JSON.parse(storedRecord);
    return parsedRecord?.date ? parsedRecord : null;
  } catch (error) {
    console.warn("无法读取每日抽卡记录", error);
    return null;
  }
}

function saveDailyDrawRecord(record) {
  try {
    localStorage.setItem(DAILY_DRAW_STORAGE_KEY, JSON.stringify(record));
  } catch (error) {
    console.warn("无法保存每日抽卡记录", error);
  }
}

function hasDrawnToday() {
  return loadDailyDrawRecord()?.date === getLocalDateKey();
}

function initializeDailyDraw() {
  const record = loadDailyDrawRecord();

  if (!record || record.date !== getLocalDateKey()) {
    setDailyDrawButtonAvailable();
    return;
  }

  const storedCharacter =
    dailyDrawPool.find((character) => character.id === record.characterId) ??
    characters.find((character) => character.id === record.characterId) ??
    baseCharacters.find((character) => character.id === record.characterId) ??
    null;
  const resultCharacter = storedCharacter ?? {
    name: record.characterName,
    image: record.characterImage,
  };

  updateDailyDrawResult(resultCharacter);
  setDailyDrawButtonUsed();
}

function performDailyDraw() {
  if (!dailyDrawPool.length || hasDrawnToday()) {
    return;
  }

  const character =
    dailyDrawPool[Math.floor(Math.random() * dailyDrawPool.length)];
  addCharacterToLocalPool(character);
  saveDailyDrawRecord({
    date: getLocalDateKey(),
    characterId: character.id,
    characterName: character.name,
    characterImage: character.image,
  });
  updateDailyDrawResult(character);
  setDailyDrawButtonUsed();
}

function updateDailyDrawResult(character) {
  if (!character) {
    dailyDrawResultFrame.dataset.fallback = "DAILY";
    dailyDrawResultImage.alt = "每日抽卡结果";
    setImageSource(dailyDrawResultImage, "images/aoko.png");
    dailyDrawResultName.textContent = "尚未抽卡";
    dailyDrawResultText.textContent = "等待夜色给出答案。";
    return;
  }

  dailyDrawResultFrame.dataset.fallback = character.englishName
    ? character.englishName.split(" ")[0].toUpperCase()
    : "DAILY";
  dailyDrawResultImage.alt = character.name;
  setImageSource(dailyDrawResultImage, character.image);
  dailyDrawResultName.textContent = character.name;
  dailyDrawResultText.textContent = character.skill_effect
    ? `${character.skill_name}：${character.skill_effect}`
    : "已加入编队角色池。";
}

function setDailyDrawButtonAvailable() {
  dailyDrawStatus.textContent = "今日尚未抽卡。";
  dailyDrawButton.disabled = dailyDrawPool.length === 0;
  dailyDrawButton.classList.remove("is-used");
  dailyDrawButton.textContent = "进行今日抽卡";
  updateDailyDrawResult(null);
}

function setDailyDrawButtonUsed() {
  dailyDrawStatus.textContent = "今日已抽。明天 00:00 后重置。";
  dailyDrawButton.disabled = true;
  dailyDrawButton.classList.add("is-used");
  dailyDrawButton.textContent = "今日已抽";
}

async function loadFateServantPool() {
  fatePoolReady = false;
  fateSummonSingleButton.disabled = true;
  fateSummonTenButton.disabled = true;
  fateSummonPoolCount.textContent = "独立模拟卡池：正在读取英灵数据...";

  try {
    const response = await fetch("data/fgo_servants.json", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`英灵数据读取失败：HTTP ${response.status}`);
    }

    const data = await response.json();
    if (!Array.isArray(data) || !data.length) {
      throw new Error("英灵数据为空");
    }

    fateServantPool = data.map(normalizeFateServant);
  } catch (error) {
    fateServantPool = FATE_SUMMON_POOL;
    console.warn("使用内置的 20 人 Fate 备用卡池", error);
  }

  fatePoolReady = true;
  fateSummonSingleButton.disabled = false;
  fateSummonTenButton.disabled = false;
  fateSummonPoolCount.textContent =
    `独立模拟卡池：${fateServantPool.length} 名英灵`;
  renderFateDrawHistory();
}

function normalizeFateServant(servant) {
  return {
    id: servant.id,
    name: servant.name,
    emblem: servant.emblem ?? String(servant.name ?? "F")[0],
    className: servant.className ?? "Servant",
    rarity: Number(servant.rarity) || 3,
  };
}

function performFateSingleDraw() {
  if (!fatePoolReady) {
    return;
  }

  const servant = pickFateServant();
  showFateSingleResult(servant);
  appendFateHistory([servant], "single");
}

function performFateTenDraw() {
  if (!fatePoolReady) {
    return;
  }

  const results = Array.from({ length: 10 }, pickFateServant);
  showFateTenResult(results);
  appendFateHistory(results, "ten");
}

function pickFateServant() {
  const roll = Math.random() * 100;
  const rarity = roll < 1 ? 5 : roll < 5 ? 4 : 3;
  const rarityPool = fateServantPool.filter(
    (servant) => servant.rarity === rarity,
  );

  return (
    rarityPool[Math.floor(Math.random() * rarityPool.length)] ??
    fateServantPool[0]
  );
}

function showFateSingleResult(servant) {
  const stars = "★".repeat(servant.rarity);
  const displayClass = servant.className;

  fateSummonResult.hidden = false;
  fateSummonResultEmblem.textContent = servant.emblem;
  fateSummonResultClass.textContent = displayClass;
  fateSummonResultName.textContent = servant.name;
  fateSummonResultStars.textContent = stars;

  fateSummonOverlayCard.dataset.rarity = String(servant.rarity);
  fateSummonOverlayClass.textContent = displayClass;
  fateSummonOverlayEmblem.textContent = servant.emblem;
  fateSummonOverlayName.textContent = servant.name;
  fateSummonOverlayDetail.textContent = displayClass;
  fateSummonOverlayStars.textContent = stars;

  fateSummonOverlayCard.hidden = false;
  fateSummonOverlayMulti.hidden = true;
  fateSummonOverlay.hidden = false;
  fateSummonOverlayCard.classList.remove("is-revealed");
  void fateSummonOverlayCard.offsetWidth;
  fateSummonOverlayCard.classList.add("is-revealed");
  fateSummonClose.focus();
}

function showFateTenResult(results) {
  fateSummonMultiGrid.replaceChildren();
  results.forEach((servant, index) => {
    const tile = document.createElement("article");
    tile.className = "fate-summon-overlay__multi-tile";
    tile.dataset.rarity = String(servant.rarity);
    tile.style.setProperty("--reveal-index", `${index * 55}ms`);

    const emblem = document.createElement("span");
    emblem.className = "fate-summon-overlay__multi-emblem";
    emblem.textContent = servant.emblem;

    const name = document.createElement("span");
    name.className = "fate-summon-overlay__multi-name";
    name.textContent = servant.name;

    const className = document.createElement("span");
    className.className = "fate-summon-overlay__multi-class";
    className.textContent = servant.className;

    const stars = document.createElement("span");
    stars.className = "fate-summon-overlay__multi-stars";
    stars.textContent = "★".repeat(servant.rarity);

    tile.append(emblem, name, className, stars);
    fateSummonMultiGrid.append(tile);
  });

  fateSummonOverlayCard.hidden = true;
  fateSummonOverlayMulti.hidden = false;
  fateSummonOverlay.hidden = false;
  fateSummonOverlayMulti.classList.remove("is-revealed");
  void fateSummonOverlayMulti.offsetWidth;
  fateSummonOverlayMulti.classList.add("is-revealed");
  fateSummonCloseMulti.focus();
}

function loadFateDrawHistory() {
  try {
    const storedHistory = localStorage.getItem(FATE_DRAW_HISTORY_STORAGE_KEY);
    if (!storedHistory) {
      return [];
    }

    const parsedHistory = JSON.parse(storedHistory);
    return Array.isArray(parsedHistory) ? parsedHistory : [];
  } catch (error) {
    console.warn("无法读取 Fate 抽卡记录", error);
    return [];
  }
}

function saveFateDrawHistory(history) {
  try {
    localStorage.setItem(
      FATE_DRAW_HISTORY_STORAGE_KEY,
      JSON.stringify(history),
    );
  } catch (error) {
    console.warn("无法保存 Fate 抽卡记录", error);
  }
}

function appendFateHistory(results, mode) {
  const history = loadFateDrawHistory();
  const timestamp = Date.now();

  results.forEach((servant) => {
    history.unshift({
      id: servant.id,
      name: servant.name,
      emblem: servant.emblem,
      className: servant.className,
      rarity: servant.rarity,
      mode,
      timestamp,
    });
  });

  history.length = Math.min(history.length, 500);
  saveFateDrawHistory(history);
  renderFateDrawHistory();
}

function clearFateDrawHistory() {
  try {
    localStorage.removeItem(FATE_DRAW_HISTORY_STORAGE_KEY);
  } catch (error) {
    console.warn("无法清除 Fate 抽卡记录", error);
  }

  renderFateDrawHistory();
}

function renderFateDrawHistory() {
  fateDrawHistory.replaceChildren();
  const history = loadFateDrawHistory();

  if (!history.length) {
    const empty = document.createElement("p");
    empty.className = "fate-draw-history__empty";
    empty.textContent = "暂无抽卡记录。";
    fateDrawHistory.append(empty);
    return;
  }

  history.forEach((record) => {
    const entry = document.createElement("div");
    entry.className = "fate-draw-history__entry";

    const mode = document.createElement("span");
    mode.className = "fate-draw-history__mode";
    mode.textContent = record.mode === "ten" ? "十连" : "单抽";

    const emblem = document.createElement("span");
    emblem.className = "fate-draw-history__emblem";
    emblem.textContent = record.emblem ?? String(record.name)[0];

    const info = document.createElement("span");
    info.className = "fate-draw-history__info";

    const name = document.createElement("span");
    name.className = "fate-draw-history__name";
    name.textContent = record.name;

    const className = document.createElement("span");
    className.className = "fate-draw-history__class";
    className.textContent = record.className;

    info.append(name, className);

    const stars = document.createElement("span");
    stars.className = "fate-draw-history__stars";
    stars.textContent = "★".repeat(Number(record.rarity) || 3);

    const time = document.createElement("time");
    time.className = "fate-draw-history__time";
    time.dateTime = new Date(record.timestamp).toISOString();
    time.textContent = new Date(record.timestamp).toLocaleString("zh-CN", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    entry.append(mode, emblem, info, stars, time);
    fateDrawHistory.append(entry);
  });
}

function closeFateSummonOverlay() {
  fateSummonOverlay.hidden = true;
  fateSummonOverlayCard.classList.remove("is-revealed");
  fateSummonOverlayCard.hidden = false;
  fateSummonOverlayMulti.classList.remove("is-revealed");
  fateSummonOverlayMulti.hidden = true;
  fateSummonSingleButton.focus();
}

function updateImageState(image) {
  if (!image.complete) {
    image.classList.add("is-loading");
    image.classList.remove("is-missing", "is-loaded");
    syncSupportImageBackground(image);
    return;
  }

  const isMissing = image.naturalWidth === 0;
  image.classList.remove("is-loading");
  image.classList.toggle("is-missing", isMissing);
  image.classList.toggle("is-loaded", !isMissing);
  syncSupportImageBackground(image);
}

function syncSupportImageBackground(image) {
  const frame = image.closest(".support-character-card__image-frame");
  if (!frame) {
    return;
  }

  frame.style.backgroundColor = "#ffffff";
}

function getImageCandidates(source) {
  if (!source) {
    return [];
  }

  const extensionMatch = source.match(/\.(png|jpe?g)$/i);
  if (!extensionMatch) {
    return SUPPORTED_IMAGE_EXTENSIONS.map((extension) => `${source}.${extension}`);
  }

  const preferredExtension = extensionMatch[1].toLowerCase() === "jpeg"
    ? "jpg"
    : extensionMatch[1].toLowerCase();
  const basePath = source.slice(0, -extensionMatch[0].length);

  return [
    `${basePath}.${preferredExtension}`,
    ...SUPPORTED_IMAGE_EXTENSIONS
      .filter((extension) => extension !== preferredExtension)
      .map((extension) => `${basePath}.${extension}`),
  ];
}

function setImageSource(image, source) {
  const candidates = getImageCandidates(source);
  image.dataset.imageCandidates = candidates.join("|");
  image.dataset.candidateIndex = "0";
  image.classList.remove("is-missing", "is-loaded");
  image.classList.add("is-loading");
  image.src = candidates[0];
}

function tryNextImageCandidate(image) {
  const candidates = (image.dataset.imageCandidates ?? "")
    .split("|")
    .filter(Boolean);
  const nextIndex = Number(image.dataset.candidateIndex ?? "0") + 1;
  const nextSource = candidates[nextIndex];

  if (!nextSource) {
    return false;
  }

  image.dataset.candidateIndex = String(nextIndex);
  image.classList.remove("is-missing", "is-loaded");
  image.classList.add("is-loading");
  image.src = nextSource;
  return true;
}

function handleImageStateEvent(event) {
  if (!(event.target instanceof HTMLImageElement)) {
    return;
  }

  if (event.type === "error" && tryNextImageCandidate(event.target)) {
    return;
  }

  updateImageState(event.target);
}

function loadBgmSettings() {
  try {
    const storedSettings = localStorage.getItem(BGM_SETTINGS_STORAGE_KEY);
    if (!storedSettings) {
      return;
    }

    const parsedSettings = JSON.parse(storedSettings);
    bgmSettings = {
      track: parsedSettings.track || "audio/bgm.mp3",
      volume: Math.min(
        1,
        Math.max(0, Number(parsedSettings.volume) || 0.55),
      ),
      enabled: parsedSettings.enabled !== false,
    };
  } catch (error) {
    console.warn("无法读取 BGM 设置", error);
  }
}

function saveBgmSettings() {
  try {
    localStorage.setItem(
      BGM_SETTINGS_STORAGE_KEY,
      JSON.stringify(bgmSettings),
    );
  } catch (error) {
    console.warn("无法保存 BGM 设置", error);
  }
}

function openBgmDatabase() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("浏览器不支持 IndexedDB"));
      return;
    }

    const request = indexedDB.open(BGM_DB_NAME, BGM_DB_VERSION);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(BGM_STORE_NAME)) {
        database.createObjectStore(BGM_STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveCustomBgm(blob) {
  const database = await openBgmDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(BGM_STORE_NAME, "readwrite");
    const store = transaction.objectStore(BGM_STORE_NAME);
    const request = store.put(blob, BGM_CUSTOM_KEY);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

async function loadCustomBgm() {
  const database = await openBgmDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(BGM_STORE_NAME, "readonly");
    const store = transaction.objectStore(BGM_STORE_NAME);
    const request = store.get(BGM_CUSTOM_KEY);
    request.onsuccess = () => resolve(request.result ?? null);
    request.onerror = () => reject(request.error);
  });
}

function ensureCustomBgmOption() {
  if (!bgmTrackSelect.querySelector('option[value="custom"]')) {
    const option = document.createElement("option");
    option.value = "custom";
    option.textContent = "自定义音乐";
    bgmTrackSelect.append(option);
  }
}

function setBgmSource(source) {
  bgmAudio.src = source;
  bgmAudio.load();
}

function updateBgmToggleLabel() {
  bgmToggle.textContent = bgmAudio.paused ? "播放" : "暂停";
}

function setBgmStatus(message) {
  bgmStatus.textContent = message;
}

async function initializeBgm() {
  loadBgmSettings();
  bgmAudio.volume = bgmSettings.volume;
  bgmAudio.loop = true;
  bgmVolume.value = String(bgmSettings.volume);

  if (bgmSettings.track === "custom") {
    ensureCustomBgmOption();
    bgmTrackSelect.value = "custom";
    try {
      const blob = await loadCustomBgm();
      if (blob) {
        if (customBgmObjectUrl) {
          URL.revokeObjectURL(customBgmObjectUrl);
        }
        customBgmObjectUrl = URL.createObjectURL(blob);
        setBgmSource(customBgmObjectUrl);
      } else {
        bgmSettings.track = "audio/bgm.mp3";
        saveBgmSettings();
        bgmTrackSelect.value = "audio/bgm.mp3";
        setBgmSource("audio/bgm.mp3");
      }
    } catch (error) {
      console.warn("无法读取自定义 BGM", error);
      bgmSettings.track = "audio/bgm.mp3";
      saveBgmSettings();
      bgmTrackSelect.value = "audio/bgm.mp3";
      setBgmSource("audio/bgm.mp3");
    }
  } else {
    bgmTrackSelect.value = bgmSettings.track;
    setBgmSource(bgmSettings.track);
  }

  updateBgmToggleLabel();
  attemptBgmAutoplay();
}

async function attemptBgmAutoplay() {
  if (!bgmSettings.enabled) {
    setBgmStatus("BGM 当前已暂停。");
    return;
  }

  try {
    await bgmAudio.play();
    setBgmStatus("BGM 正在播放。");
  } catch (error) {
    if (error?.name === "NotAllowedError") {
      setBgmStatus("浏览器阻止了自动播放，请点击播放按钮开启 BGM。");
      registerBgmAutoplayRetry();
    } else {
      setBgmStatus("BGM 暂时无法播放，请选择其他曲目或上传本地音乐。");
    }
  }

  updateBgmToggleLabel();
}

function registerBgmAutoplayRetry() {
  if (autoplayRetried) {
    return;
  }

  const retry = () => {
    autoplayRetried = true;
    if (bgmSettings.enabled && bgmAudio.paused && !bgmAudio.error) {
      bgmAudio.play().catch(() => {
        setBgmStatus("浏览器仍阻止了自动播放，请点击播放按钮。");
      });
    }
    document.removeEventListener("pointerdown", retry);
    document.removeEventListener("keydown", retry);
  };

  document.addEventListener("pointerdown", retry, { once: true });
  document.addEventListener("keydown", retry, { once: true });
}

function toggleBgmPlayback() {
  if (bgmAudio.paused) {
    bgmSettings.enabled = true;
    saveBgmSettings();
    bgmAudio.play().then(() => {
      setBgmStatus("BGM 正在播放。");
      updateBgmToggleLabel();
    }).catch(() => {
      setBgmStatus("当前曲目无法播放，请选择其他曲目或上传本地音乐。");
      updateBgmToggleLabel();
    });
    return;
  }

  bgmAudio.pause();
  bgmSettings.enabled = false;
  saveBgmSettings();
  setBgmStatus("BGM 已暂停。");
  updateBgmToggleLabel();
}

function changeBgmVolume() {
  const volume = Number(bgmVolume.value);
  bgmSettings.volume = volume;
  bgmAudio.volume = volume;
  saveBgmSettings();
  setBgmStatus(`音量 ${Math.round(volume * 100)}%。`);
}

function changeBgmTrack() {
  const track = bgmTrackSelect.value;
  if (track === "custom") {
    return;
  }

  bgmSettings.track = track;
  saveBgmSettings();
  setBgmSource(track);

  if (bgmSettings.enabled) {
    bgmAudio.play().catch(() => {
      setBgmStatus("当前曲目无法播放，请选择其他曲目或上传本地音乐。");
    });
  }
}

async function changeCustomBgmFile() {
  const file = bgmFileInput.files?.[0];
  if (!file || !file.type.startsWith("audio/")) {
    bgmFileInput.value = "";
    setBgmStatus("请选择有效的音频文件。");
    return;
  }

  try {
    await saveCustomBgm(file);
    ensureCustomBgmOption();
    bgmTrackSelect.value = "custom";
    bgmSettings.track = "custom";
    saveBgmSettings();

    if (customBgmObjectUrl) {
      URL.revokeObjectURL(customBgmObjectUrl);
    }
    customBgmObjectUrl = URL.createObjectURL(file);
    setBgmSource(customBgmObjectUrl);

    if (bgmSettings.enabled) {
      bgmAudio.play().catch(() => {
        setBgmStatus("自定义音乐已保存，点击播放按钮开始播放。");
      });
    }
    setBgmStatus(`已切换为自定义音乐：${file.name}`);
  } catch (error) {
    console.warn("无法保存自定义 BGM", error);
    setBgmStatus("本地音乐保存失败，请重试。");
  } finally {
    bgmFileInput.value = "";
  }
}

function toggleBgmSettingsPanel(forceState) {
  const shouldShow =
    typeof forceState === "boolean"
      ? forceState
      : bgmSettingsPanel.hidden;
  bgmSettingsPanel.hidden = !shouldShow;
  bgmSettingsButton.setAttribute("aria-expanded", String(shouldShow));
}

function switchAppPanel(panelName) {
  appNavButtons.forEach((button) => {
    const isActive = button.dataset.panelTarget === panelName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  appPanels.forEach((panel) => {
    const isActive = panel.dataset.panel === panelName;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

}

appNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switchAppPanel(button.dataset.panelTarget);
  });
});

battleStartButton.addEventListener("click", startBattle);
battleNormalButton.addEventListener("click", () => performPlayerAction("normal"));
battleSkillButton.addEventListener("click", () => performPlayerAction("skill"));
battleReturnButton.addEventListener("click", resetBattleToSetup);
dailyDrawButton.addEventListener("click", performDailyDraw);
fateSummonSingleButton.addEventListener("click", performFateSingleDraw);
fateSummonTenButton.addEventListener("click", performFateTenDraw);
fateSummonClose.addEventListener("click", closeFateSummonOverlay);
fateSummonCloseMulti.addEventListener("click", closeFateSummonOverlay);
fateClearHistory.addEventListener("click", clearFateDrawHistory);
fateSummonOverlay.addEventListener("click", (event) => {
  if (event.target === fateSummonOverlay) {
    closeFateSummonOverlay();
  }
});
bgmSettingsButton.addEventListener("click", () => {
  toggleBgmSettingsPanel();
});
bgmSettingsClose.addEventListener("click", () => {
  toggleBgmSettingsPanel(false);
});
bgmToggle.addEventListener("click", toggleBgmPlayback);
bgmVolume.addEventListener("input", changeBgmVolume);
bgmTrackSelect.addEventListener("change", changeBgmTrack);
bgmFileInput.addEventListener("change", changeCustomBgmFile);
bgmAudio.addEventListener("play", () => {
  updateBgmToggleLabel();
  setBgmStatus("BGM 正在播放。");
});
bgmAudio.addEventListener("pause", () => {
  updateBgmToggleLabel();
});
bgmAudio.addEventListener("error", () => {
  setBgmStatus("当前曲目无法播放，请选择其他曲目或上传本地音乐。");
  updateBgmToggleLabel();
});
document.addEventListener("click", (event) => {
  if (
    !bgmSettingsPanel.hidden &&
    !bgmSettingsPanel.contains(event.target) &&
    !bgmSettingsButton.contains(event.target)
  ) {
    toggleBgmSettingsPanel(false);
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !fateSummonOverlay.hidden) {
    closeFateSummonOverlay();
  }
  if (event.key === "Escape" && !bgmSettingsPanel.hidden) {
    toggleBgmSettingsPanel(false);
  }
});
magicCircuitButton.addEventListener("click", handleMagicCircuitButton);
document.addEventListener("error", handleImageStateEvent, true);
document.addEventListener("load", handleImageStateEvent, true);
document.querySelectorAll("img").forEach((image) => {
  const source = image.getAttribute("src");
  setImageSource(image, source);
  updateImageState(image);
});

initializeClearProgress();
renderFateDrawHistory();
loadCharacters();
loadDailyDrawPool();
loadSupportCharacters();
loadFateServantPool();
initializeBgm();
