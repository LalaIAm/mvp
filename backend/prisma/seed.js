import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const tarotCards = [
  // Major Arcana (22 cards)
  {
    name: "The Fool",
    arcana: "major",
    suit: null,
    number: 0,
    keywords: ["new beginnings", "innocence", "spontaneity", "free spirit"],
    description: "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe."
  },
  {
    name: "The Magician",
    arcana: "major",
    suit: null,
    number: 1,
    keywords: ["manifestation", "resourcefulness", "power", "inspired action"],
    description: "The Magician is about taking action and having the drive to make things happen. This card represents having the skill, ability and desire to make your dreams come true."
  },
  {
    name: "The High Priestess",
    arcana: "major",
    suit: null,
    number: 2,
    keywords: ["intuition", "sacred knowledge", "divine feminine", "subconscious mind"],
    description: "The High Priestess represents intuition, sacred knowledge, divine feminine, and the subconscious mind. She sits at the gateway between the seen and unseen worlds."
  },
  {
    name: "The Empress",
    arcana: "major",
    suit: null,
    number: 3,
    keywords: ["femininity", "beauty", "nature", "nurturing", "abundance"],
    description: "The Empress represents femininity, beauty, nature, nurturing, and abundance. She is a mother figure who encourages growth and creation."
  },
  {
    name: "The Emperor",
    arcana: "major",
    suit: null,
    number: 4,
    keywords: ["authority", "establishment", "structure", "father figure"],
    description: "The Emperor represents authority, establishment, structure, and a father figure. He is the masculine counterpart to the Empress and represents worldly power."
  },
  {
    name: "The Hierophant",
    arcana: "major",
    suit: null,
    number: 5,
    keywords: ["spiritual wisdom", "religious beliefs", "conformity", "tradition"],
    description: "The Hierophant represents spiritual wisdom, religious beliefs, conformity, tradition, and institutions. He is a bridge between heaven and earth."
  },
  {
    name: "The Lovers",
    arcana: "major",
    suit: null,
    number: 6,
    keywords: ["love", "harmony", "relationships", "values alignment"],
    description: "The Lovers represents love, harmony, relationships, and values alignment. This card shows the importance of choice and the consequences of our decisions."
  },
  {
    name: "The Chariot",
    arcana: "major",
    suit: null,
    number: 7,
    keywords: ["control", "willpower", "success", "determination"],
    description: "The Chariot represents control, willpower, success, and determination. It shows the importance of maintaining focus and direction to achieve your goals."
  },
  {
    name: "Strength",
    arcana: "major",
    suit: null,
    number: 8,
    keywords: ["strength", "courage", "patience", "control", "compassion"],
    description: "Strength represents inner strength, courage, patience, control, and compassion. It shows that true strength comes from within and involves controlling our impulses."
  },
  {
    name: "The Hermit",
    arcana: "major",
    suit: null,
    number: 9,
    keywords: ["soul searching", "seeking truth", "inner guidance"],
    description: "The Hermit represents soul searching, seeking truth, and inner guidance. This card encourages looking within for answers and wisdom."
  },
  {
    name: "Wheel of Fortune",
    arcana: "major",
    suit: null,
    number: 10,
    keywords: ["good luck", "karma", "life cycles", "destiny", "turning point"],
    description: "The Wheel of Fortune represents good luck, karma, life cycles, destiny, and turning points. It reminds us that life is full of changes and cycles."
  },
  {
    name: "Justice",
    arcana: "major",
    suit: null,
    number: 11,
    keywords: ["justice", "fairness", "truth", "cause and effect", "law"],
    description: "Justice represents justice, fairness, truth, cause and effect, and law. This card reminds us that all actions have consequences."
  },
  {
    name: "The Hanged Man",
    arcana: "major",
    suit: null,
    number: 12,
    keywords: ["suspension", "restriction", "letting go", "sacrifice"],
    description: "The Hanged Man represents suspension, restriction, letting go, and sacrifice. Sometimes we must pause and look at things from a different perspective."
  },
  {
    name: "Death",
    arcana: "major",
    suit: null,
    number: 13,
    keywords: ["endings", "beginnings", "change", "transformation"],
    description: "Death represents endings, beginnings, change, and transformation. This card is about closing one door to open another and embracing change."
  },
  {
    name: "Temperance",
    arcana: "major",
    suit: null,
    number: 14,
    keywords: ["balance", "moderation", "patience", "purpose"],
    description: "Temperance represents balance, moderation, patience, and purpose. This card encourages finding the middle ground and practicing patience."
  },
  {
    name: "The Devil",
    arcana: "major",
    suit: null,
    number: 15,
    keywords: ["bondage", "addiction", "sexuality", "materialism"],
    description: "The Devil represents bondage, addiction, sexuality, and materialism. This card warns of being trapped by material desires or unhealthy patterns."
  },
  {
    name: "The Tower",
    arcana: "major",
    suit: null,
    number: 16,
    keywords: ["sudden change", "upheaval", "chaos", "revelation"],
    description: "The Tower represents sudden change, upheaval, chaos, and revelation. Sometimes destruction is necessary to build something better."
  },
  {
    name: "The Star",
    arcana: "major",
    suit: null,
    number: 17,
    keywords: ["hope", "faith", "purpose", "renewal", "spirituality"],
    description: "The Star represents hope, faith, purpose, renewal, and spirituality. This card brings optimism and reminds us to have faith in the future."
  },
  {
    name: "The Moon",
    arcana: "major",
    suit: null,
    number: 18,
    keywords: ["illusion", "fear", "anxiety", "subconscious", "intuition"],
    description: "The Moon represents illusion, fear, anxiety, subconscious, and intuition. This card warns of deception and encourages trusting your intuition."
  },
  {
    name: "The Sun",
    arcana: "major",
    suit: null,
    number: 19,
    keywords: ["happiness", "joy", "success", "celebration", "positivity"],
    description: "The Sun represents happiness, joy, success, celebration, and positivity. This is one of the most positive cards in the deck, bringing warmth and success."
  },
  {
    name: "Judgement",
    arcana: "major",
    suit: null,
    number: 20,
    keywords: ["judgement", "rebirth", "inner calling", "absolution"],
    description: "Judgement represents judgement, rebirth, inner calling, and absolution. This card is about spiritual awakening and answering a higher calling."
  },
  {
    name: "The World",
    arcana: "major",
    suit: null,
    number: 21,
    keywords: ["completion", "accomplishment", "travel", "fulfillment"],
    description: "The World represents completion, accomplishment, travel, and fulfillment. This card signifies the successful completion of a major life cycle."
  },

  // Minor Arcana - Wands (Fire) - 14 cards
  {
    name: "Ace of Wands",
    arcana: "minor",
    suit: "wands",
    number: 1,
    keywords: ["inspiration", "new opportunities", "growth", "potential"],
    description: "The Ace of Wands represents inspiration, new opportunities, growth, and potential. It signifies the spark of a new creative project or venture."
  },
  {
    name: "Two of Wands",
    arcana: "minor",
    suit: "wands",
    number: 2,
    keywords: ["future planning", "personal goals", "discovery", "decisions"],
    description: "The Two of Wands represents future planning, making personal goals, discovery, and decisions. You are considering your options and planning your next move."
  },
  {
    name: "Three of Wands",
    arcana: "minor",
    suit: "wands",
    number: 3,
    keywords: ["expansion", "foresight", "overseas opportunities", "leadership"],
    description: "The Three of Wands represents expansion, foresight, overseas opportunities, and leadership. Your efforts are beginning to pay off."
  },
  {
    name: "Four of Wands",
    arcana: "minor",
    suit: "wands",
    number: 4,
    keywords: ["celebration", "joy", "harmony", "relaxation", "homecoming"],
    description: "The Four of Wands represents celebration, joy, harmony, relaxation, and homecoming. It's time to celebrate your achievements."
  },
  {
    name: "Five of Wands",
    arcana: "minor",
    suit: "wands",
    number: 5,
    keywords: ["disagreements", "competition", "tension", "diversity"],
    description: "The Five of Wands represents disagreements, competition, tension, and diversity. There may be conflicts or competition in your path."
  },
  {
    name: "Six of Wands",
    arcana: "minor",
    suit: "wands",
    number: 6,
    keywords: ["success", "public recognition", "progress", "self-confidence"],
    description: "The Six of Wands represents success, public recognition, progress, and self-confidence. Your hard work is being acknowledged."
  },
  {
    name: "Seven of Wands",
    arcana: "minor",
    suit: "wands",
    number: 7,
    keywords: ["challenge", "competition", "protection", "perseverance"],
    description: "The Seven of Wands represents challenge, competition, protection, and perseverance. You may need to defend your position."
  },
  {
    name: "Eight of Wands",
    arcana: "minor",
    suit: "wands",
    number: 8,
    keywords: ["movement", "fast paced change", "action", "progress"],
    description: "The Eight of Wands represents movement, fast-paced change, action, and progress. Things are moving quickly in your life."
  },
  {
    name: "Nine of Wands",
    arcana: "minor",
    suit: "wands",
    number: 9,
    keywords: ["resilience", "courage", "persistence", "test of faith"],
    description: "The Nine of Wands represents resilience, courage, persistence, and test of faith. You're almost at the finish line."
  },
  {
    name: "Ten of Wands",
    arcana: "minor",
    suit: "wands",
    number: 10,
    keywords: ["burden", "extra responsibility", "hard work", "completion"],
    description: "The Ten of Wands represents burden, extra responsibility, hard work, and completion. Success comes with responsibility."
  },
  {
    name: "Page of Wands",
    arcana: "minor",
    suit: "wands",
    number: 11,
    keywords: ["exploration", "excitement", "freedom", "adventure"],
    description: "The Page of Wands represents exploration, excitement, freedom, and adventure. A new journey or learning experience awaits."
  },
  {
    name: "Knight of Wands",
    arcana: "minor",
    suit: "wands",
    number: 12,
    keywords: ["energy", "passion", "adventure", "impulsiveness"],
    description: "The Knight of Wands represents energy, passion, adventure, and impulsiveness. Act with passion but don't be reckless."
  },
  {
    name: "Queen of Wands",
    arcana: "minor",
    suit: "wands",
    number: 13,
    keywords: ["courage", "confidence", "independence", "social butterfly"],
    description: "The Queen of Wands represents courage, confidence, independence, and being a social butterfly. She is warm, outgoing, and confident."
  },
  {
    name: "King of Wands",
    arcana: "minor",
    suit: "wands",
    number: 14,
    keywords: ["leadership", "business", "entrepreneur", "honor"],
    description: "The King of Wands represents leadership, business, entrepreneurship, and honor. He is a natural-born leader with great vision."
  },

  // Minor Arcana - Cups (Water) - 14 cards
  {
    name: "Ace of Cups",
    arcana: "minor",
    suit: "cups",
    number: 1,
    keywords: ["love", "new relationships", "compassion", "creativity"],
    description: "The Ace of Cups represents love, new relationships, compassion, and creativity. Your heart is open to new possibilities."
  },
  {
    name: "Two of Cups",
    arcana: "minor",
    suit: "cups",
    number: 2,
    keywords: ["unified love", "partnership", "mutual attraction", "relationships"],
    description: "The Two of Cups represents unified love, partnership, mutual attraction, and relationships. A strong bond is forming."
  },
  {
    name: "Three of Cups",
    arcana: "minor",
    suit: "cups",
    number: 3,
    keywords: ["celebration", "friendship", "creativity", "community"],
    description: "The Three of Cups represents celebration, friendship, creativity, and community. It's time to celebrate with friends."
  },
  {
    name: "Four of Cups",
    arcana: "minor",
    suit: "cups",
    number: 4,
    keywords: ["meditation", "contemplation", "apathy", "reevaluation"],
    description: "The Four of Cups represents meditation, contemplation, apathy, and reevaluation. You may be feeling disconnected or bored."
  },
  {
    name: "Five of Cups",
    arcana: "minor",
    suit: "cups",
    number: 5,
    keywords: ["regret", "failure", "disappointment", "pessimism"],
    description: "The Five of Cups represents regret, failure, disappointment, and pessimism. Focus on what remains rather than what's lost."
  },
  {
    name: "Six of Cups",
    arcana: "minor",
    suit: "cups",
    number: 6,
    keywords: ["revisiting the past", "childhood memories", "innocence", "joy"],
    description: "The Six of Cups represents revisiting the past, childhood memories, innocence, and joy. Nostalgia and happy memories surface."
  },
  {
    name: "Seven of Cups",
    arcana: "minor",
    suit: "cups",
    number: 7,
    keywords: ["opportunities", "choices", "wishful thinking", "illusion"],
    description: "The Seven of Cups represents opportunities, choices, wishful thinking, and illusion. Many options are available but focus is needed."
  },
  {
    name: "Eight of Cups",
    arcana: "minor",
    suit: "cups",
    number: 8,
    keywords: ["disappointment", "abandonment", "withdrawal", "escapism"],
    description: "The Eight of Cups represents disappointment, abandonment, withdrawal, and escapism. It may be time to walk away and find something better."
  },
  {
    name: "Nine of Cups",
    arcana: "minor",
    suit: "cups",
    number: 9,
    keywords: ["satisfaction", "emotional stability", "luxury", "self-sufficiency"],
    description: "The Nine of Cups represents satisfaction, emotional stability, luxury, and self-sufficiency. Your wishes are coming true."
  },
  {
    name: "Ten of Cups",
    arcana: "minor",
    suit: "cups",
    number: 10,
    keywords: ["harmony", "marriage", "happiness", "alignment"],
    description: "The Ten of Cups represents harmony, marriage, happiness, and alignment. Perfect emotional fulfillment and family bliss."
  },
  {
    name: "Page of Cups",
    arcana: "minor",
    suit: "cups",
    number: 11,
    keywords: ["creative opportunities", "intuitive messages", "curiosity", "possibility"],
    description: "The Page of Cups represents creative opportunities, intuitive messages, curiosity, and possibility. New emotional experiences await."
  },
  {
    name: "Knight of Cups",
    arcana: "minor",
    suit: "cups",
    number: 12,
    keywords: ["creativity", "romance", "charm", "imagination"],
    description: "The Knight of Cups represents creativity, romance, charm, and imagination. He follows his heart and intuition."
  },
  {
    name: "Queen of Cups",
    arcana: "minor",
    suit: "cups",
    number: 13,
    keywords: ["compassion", "calm", "comfort", "intuition"],
    description: "The Queen of Cups represents compassion, calm, comfort, and intuition. She is emotionally stable and intuitive."
  },
  {
    name: "King of Cups",
    arcana: "minor",
    suit: "cups",
    number: 14,
    keywords: ["emotional balance", "generous", "diplomatic", "devotion"],
    description: "The King of Cups represents emotional balance, generosity, diplomacy, and devotion. He masters his emotions and helps others."
  },

  // Minor Arcana - Swords (Air) - 14 cards
  {
    name: "Ace of Swords",
    arcana: "minor",
    suit: "swords",
    number: 1,
    keywords: ["new ideas", "mental clarity", "breakthrough", "communication"],
    description: "The Ace of Swords represents new ideas, mental clarity, breakthrough, and communication. A new way of thinking emerges."
  },
  {
    name: "Two of Swords",
    arcana: "minor",
    suit: "swords",
    number: 2,
    keywords: ["difficult decisions", "weighing options", "indecision", "blocked emotions"],
    description: "The Two of Swords represents difficult decisions, weighing options, indecision, and blocked emotions. You're at a crossroads."
  },
  {
    name: "Three of Swords",
    arcana: "minor",
    suit: "swords",
    number: 3,
    keywords: ["broken heart", "emotional pain", "sorrow", "grief"],
    description: "The Three of Swords represents broken heart, emotional pain, sorrow, and grief. Heartbreak is painful but leads to growth."
  },
  {
    name: "Four of Swords",
    arcana: "minor",
    suit: "swords",
    number: 4,
    keywords: ["rest", "relaxation", "meditation", "contemplation"],
    description: "The Four of Swords represents rest, relaxation, meditation, and contemplation. Take time to rest and recharge."
  },
  {
    name: "Five of Swords",
    arcana: "minor",
    suit: "swords",
    number: 5,
    keywords: ["conflict", "dishonor", "win at all costs", "betrayal"],
    description: "The Five of Swords represents conflict, dishonor, winning at all costs, and betrayal. Victory may come at a high price."
  },
  {
    name: "Six of Swords",
    arcana: "minor",
    suit: "swords",
    number: 6,
    keywords: ["transition", "change", "rite of passage", "moving on"],
    description: "The Six of Swords represents transition, change, rite of passage, and moving on. You're moving toward calmer waters."
  },
  {
    name: "Seven of Swords",
    arcana: "minor",
    suit: "swords",
    number: 7,
    keywords: ["betrayal", "deception", "getting away with something", "stealth"],
    description: "The Seven of Swords represents betrayal, deception, getting away with something, and stealth. Someone may not be trustworthy."
  },
  {
    name: "Eight of Swords",
    arcana: "minor",
    suit: "swords",
    number: 8,
    keywords: ["imprisonment", "restriction", "self-sabotage", "victim mentality"],
    description: "The Eight of Swords represents imprisonment, restriction, self-sabotage, and victim mentality. You may feel trapped but freedom is possible."
  },
  {
    name: "Nine of Swords",
    arcana: "minor",
    suit: "swords",
    number: 9,
    keywords: ["anxiety", "worry", "fear", "depression"],
    description: "The Nine of Swords represents anxiety, worry, fear, and depression. Your fears may be worse than reality."
  },
  {
    name: "Ten of Swords",
    arcana: "minor",
    suit: "swords",
    number: 10,
    keywords: ["painful endings", "deep wounds", "betrayal", "rock bottom"],
    description: "The Ten of Swords represents painful endings, deep wounds, betrayal, and rock bottom. The worst is over and recovery begins."
  },
  {
    name: "Page of Swords",
    arcana: "minor",
    suit: "swords",
    number: 11,
    keywords: ["new ideas", "curiosity", "thirst for knowledge", "new ways of communicating"],
    description: "The Page of Swords represents new ideas, curiosity, thirst for knowledge, and new ways of communicating. Mental energy and curiosity drive you."
  },
  {
    name: "Knight of Swords",
    arcana: "minor",
    suit: "swords",
    number: 12,
    keywords: ["ambition", "drive", "determination", "assertiveness"],
    description: "The Knight of Swords represents ambition, drive, determination, and assertiveness. You charge ahead with single-minded focus."
  },
  {
    name: "Queen of Swords",
    arcana: "minor",
    suit: "swords",
    number: 13,
    keywords: ["independence", "unbiased judgement", "clear boundaries", "direct communication"],
    description: "The Queen of Swords represents independence, unbiased judgement, clear boundaries, and direct communication. She thinks with her head, not heart."
  },
  {
    name: "King of Swords",
    arcana: "minor",
    suit: "swords",
    number: 14,
    keywords: ["intellectual power", "authority", "truth", "clear thinking"],
    description: "The King of Swords represents intellectual power, authority, truth, and clear thinking. He rules with logic and fairness."
  },

  // Minor Arcana - Pentacles (Earth) - 14 cards
  {
    name: "Ace of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 1,
    keywords: ["opportunity", "prosperity", "new venture", "manifestation"],
    description: "The Ace of Pentacles represents opportunity, prosperity, new venture, and manifestation. A new financial or career opportunity appears."
  },
  {
    name: "Two of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 2,
    keywords: ["multiple priorities", "time management", "prioritization", "adaptability"],
    description: "The Two of Pentacles represents multiple priorities, time management, prioritization, and adaptability. You're juggling multiple responsibilities."
  },
  {
    name: "Three of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 3,
    keywords: ["collaboration", "learning", "implementation", "teamwork"],
    description: "The Three of Pentacles represents collaboration, learning, implementation, and teamwork. Working with others brings success."
  },
  {
    name: "Four of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 4,
    keywords: ["saving money", "security", "conservatism", "scarcity"],
    description: "The Four of Pentacles represents saving money, security, conservatism, and scarcity. You may be holding too tightly to resources."
  },
  {
    name: "Five of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 5,
    keywords: ["financial loss", "poverty", "lack mindset", "isolation"],
    description: "The Five of Pentacles represents financial loss, poverty, lack mindset, and isolation. Hard times may be temporary."
  },
  {
    name: "Six of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 6,
    keywords: ["giving", "receiving", "sharing wealth", "generosity"],
    description: "The Six of Pentacles represents giving, receiving, sharing wealth, and generosity. Balance in giving and receiving creates harmony."
  },
  {
    name: "Seven of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 7,
    keywords: ["long-term view", "sustainable results", "perseverance", "investment"],
    description: "The Seven of Pentacles represents long-term view, sustainable results, perseverance, and investment. Your efforts will pay off with time."
  },
  {
    name: "Eight of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 8,
    keywords: ["apprenticeship", "repetitive tasks", "mastery", "skill development"],
    description: "The Eight of Pentacles represents apprenticeship, repetitive tasks, mastery, and skill development. Practice leads to mastery."
  },
  {
    name: "Nine of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 9,
    keywords: ["abundance", "luxury", "self-sufficiency", "financial independence"],
    description: "The Nine of Pentacles represents abundance, luxury, self-sufficiency, and financial independence. You've achieved material success."
  },
  {
    name: "Ten of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 10,
    keywords: ["wealth", "financial security", "family", "long-term success"],
    description: "The Ten of Pentacles represents wealth, financial security, family, and long-term success. Generational wealth and family stability."
  },
  {
    name: "Page of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 11,
    keywords: ["manifestation", "financial opportunity", "skill development", "ambition"],
    description: "The Page of Pentacles represents manifestation, financial opportunity, skill development, and ambition. New learning opportunities in practical matters."
  },
  {
    name: "Knight of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 12,
    keywords: ["efficiency", "routine", "conservatism", "hard work"],
    description: "The Knight of Pentacles represents efficiency, routine, conservatism, and hard work. Steady progress through consistent effort."
  },
  {
    name: "Queen of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 13,
    keywords: ["nurturing", "practical", "providing financially", "down-to-earth"],
    description: "The Queen of Pentacles represents nurturing, being practical, providing financially, and being down-to-earth. She creates a secure, comfortable environment."
  },
  {
    name: "King of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    number: 14,
    keywords: ["abundance", "business", "leadership", "security"],
    description: "The King of Pentacles represents abundance, business, leadership, and security. He has achieved material success through hard work and wise decisions."
  }
];

async function main() {
  console.log('🃏 Starting tarot card seeding...');
  
  try {
    // Clear existing cards first
    await prisma.tarotCard.deleteMany({});
    console.log('🗑️ Cleared existing tarot cards');

    // Insert all 78 cards
    const result = await prisma.tarotCard.createMany({
      data: tarotCards
    });

    console.log(`✅ Successfully seeded ${result.count} tarot cards`);
    
    // Verify the seed worked
    const majorArcanaCount = await prisma.tarotCard.count({
      where: { arcana: 'major' }
    });
    
    const minorArcanaCount = await prisma.tarotCard.count({
      where: { arcana: 'minor' }
    });

    console.log(`📊 Verification:`);
    console.log(`   - Major Arcana: ${majorArcanaCount} cards`);
    console.log(`   - Minor Arcana: ${minorArcanaCount} cards`);
    console.log(`   - Total: ${majorArcanaCount + minorArcanaCount} cards`);

    if (majorArcanaCount === 22 && minorArcanaCount === 56) {
      console.log('🎉 Perfect! Complete Rider-Waite-Smith deck seeded successfully');
    } else {
      console.log('⚠️ Warning: Card counts don\'t match expected values (22 Major + 56 Minor = 78 total)');
    }

  } catch (error) {
    console.error('❌ Error seeding tarot cards:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
