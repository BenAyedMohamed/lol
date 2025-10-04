import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class ChampionDataService implements InMemoryDbService {
  createDb() {
    const champions =[
  {
    "id": 1,
    "name": "Annie",
    "key": "Annie",
    "title": "the Dark Child",
    "tags": [
      "Mage"
    ],
    "winRate": "50.26",
    "pickRate": 3277,
    "banRate": 2108
  },
  {
    "id": 2,
    "name": "Olaf",
    "key": "Olaf",
    "title": "the Berserker",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "47.86",
    "pickRate": 1569,
    "banRate": 377
  },
  {
    "id": 3,
    "name": "Galio",
    "key": "Galio",
    "title": "the Colossus",
    "tags": [
      "Tank",
      "Mage"
    ],
    "winRate": "46.78",
    "pickRate": 2717,
    "banRate": 2072
  },
  {
    "id": 4,
    "name": "Twisted Fate",
    "key": "TwistedFate",
    "title": "the Card Master",
    "tags": [
      "Mage"
    ],
    "winRate": "51.45",
    "pickRate": 3590,
    "banRate": 284
  },
  {
    "id": 5,
    "name": "Xin Zhao",
    "key": "XinZhao",
    "title": "the Seneschal of Demacia",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "winRate": "51.59",
    "pickRate": 3245,
    "banRate": 1357
  },
  {
    "id": 6,
    "name": "Urgot",
    "key": "Urgot",
    "title": "the Dreadnought",
    "tags": [
      "Fighter",
      "Marksman"
    ],
    "winRate": "48.50",
    "pickRate": 2365,
    "banRate": 4229
  },
  {
    "id": 7,
    "name": "LeBlanc",
    "key": "Leblanc",
    "title": "the Deceiver",
    "tags": [
      "Assassin",
      "Mage"
    ],
    "winRate": "46.93",
    "pickRate": 2233,
    "banRate": 3551
  },
  {
    "id": 8,
    "name": "Vladimir",
    "key": "Vladimir",
    "title": "the Crimson Reaper",
    "tags": [
      "Mage",
      "Tank"
    ],
    "winRate": "49.11",
    "pickRate": 3203,
    "banRate": 3167
  },
  {
    "id": 9,
    "name": "Fiddlesticks",
    "key": "Fiddlesticks",
    "title": "the Harbinger of Doom",
    "tags": [
      "Mage",
      "Support"
    ],
    "winRate": "49.57",
    "pickRate": 1739,
    "banRate": 286
  },
  {
    "id": 10,
    "name": "Kayle",
    "key": "Kayle",
    "title": "The Judicator",
    "tags": [
      "Fighter",
      "Support"
    ],
    "winRate": "50.82",
    "pickRate": 2003,
    "banRate": 651
  },
  {
    "id": 11,
    "name": "Master Yi",
    "key": "MasterYi",
    "title": "the Wuju Bladesman",
    "tags": [
      "Assassin",
      "Fighter"
    ],
    "winRate": "50.93",
    "pickRate": 5955,
    "banRate": 11199
  },
  {
    "id": 12,
    "name": "Alistar",
    "key": "Alistar",
    "title": "the Minotaur",
    "tags": [
      "Tank",
      "Support"
    ],
    "winRate": "49.60",
    "pickRate": 3476,
    "banRate": 696
  },
  {
    "id": 13,
    "name": "Ryze",
    "key": "Ryze",
    "title": "the Rune Mage",
    "tags": [
      "Mage",
      "Fighter"
    ],
    "winRate": "40.79",
    "pickRate": 1032,
    "banRate": 96
  },
  {
    "id": 14,
    "name": "Sion",
    "key": "Sion",
    "title": "The Undead Juggernaut",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "winRate": "49.90",
    "pickRate": 2100,
    "banRate": 117
  },
  {
    "id": 15,
    "name": "Sivir",
    "key": "Sivir",
    "title": "the Battle Mistress",
    "tags": [
      "Marksman"
    ],
    "winRate": "50.73",
    "pickRate": 3976,
    "banRate": 304
  },
  {
    "id": 16,
    "name": "Soraka",
    "key": "Soraka",
    "title": "the Starchild",
    "tags": [
      "Support",
      "Mage"
    ],
    "winRate": "52.85",
    "pickRate": 6144,
    "banRate": 4796
  },
  {
    "id": 17,
    "name": "Teemo",
    "key": "Teemo",
    "title": "the Swift Scout",
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "winRate": "51.86",
    "pickRate": 4144,
    "banRate": 3956
  },
  {
    "id": 18,
    "name": "Tristana",
    "key": "Tristana",
    "title": "the Yordle Gunner",
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "winRate": "51.71",
    "pickRate": 12983,
    "banRate": 13067
  },
  {
    "id": 19,
    "name": "Warwick",
    "key": "Warwick",
    "title": "the Uncaged Wrath of Zaun",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "51.60",
    "pickRate": 5851,
    "banRate": 5667
  },
  {
    "id": 20,
    "name": "Nunu",
    "key": "Nunu",
    "title": "the Yeti Rider",
    "tags": [
      "Support",
      "Fighter"
    ],
    "winRate": "49.54",
    "pickRate": 1308,
    "banRate": 384
  },
  {
    "id": 21,
    "name": "Miss Fortune",
    "key": "MissFortune",
    "title": "the Bounty Hunter",
    "tags": [
      "Marksman"
    ],
    "winRate": "52.68",
    "pickRate": 6181,
    "banRate": 1250
  },
  {
    "id": 22,
    "name": "Ashe",
    "key": "Ashe",
    "title": "the Frost Archer",
    "tags": [
      "Marksman",
      "Support"
    ],
    "winRate": "47.69",
    "pickRate": 5391,
    "banRate": 493
  },
  {
    "id": 23,
    "name": "Tryndamere",
    "key": "Tryndamere",
    "title": "the Barbarian King",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "winRate": "52.88",
    "pickRate": 4083,
    "banRate": 5891
  },
  {
    "id": 24,
    "name": "Jax",
    "key": "Jax",
    "title": "Grandmaster at Arms",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "winRate": "50.57",
    "pickRate": 6618,
    "banRate": 4934
  },
  {
    "id": 25,
    "name": "Morgana",
    "key": "Morgana",
    "title": "Fallen Angel",
    "tags": [
      "Mage",
      "Support"
    ],
    "winRate": "48.00",
    "pickRate": 5936,
    "banRate": 3271
  },
  {
    "id": 26,
    "name": "Zilean",
    "key": "Zilean",
    "title": "the Chronokeeper",
    "tags": [
      "Support",
      "Mage"
    ],
    "winRate": "49.21",
    "pickRate": 1451,
    "banRate": 184
  },
  {
    "id": 27,
    "name": "Singed",
    "key": "Singed",
    "title": "the Mad Chemist",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "winRate": "53.47",
    "pickRate": 1425,
    "banRate": 504
  },
  {
    "id": 28,
    "name": "Evelynn",
    "key": "Evelynn",
    "title": "the Widowmaker",
    "tags": [
      "Assassin",
      "Mage"
    ],
    "winRate": "47.77",
    "pickRate": 1616,
    "banRate": 1426
  },
  {
    "id": 29,
    "name": "Twitch",
    "key": "Twitch",
    "title": "the Plague Rat",
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "winRate": "52.78",
    "pickRate": 8838,
    "banRate": 15832
  },
  {
    "id": 30,
    "name": "Karthus",
    "key": "Karthus",
    "title": "the Deathsinger",
    "tags": [
      "Mage"
    ],
    "winRate": "51.04",
    "pickRate": 1007,
    "banRate": 131
  },
  {
    "id": 31,
    "name": "Cho'Gath",
    "key": "Chogath",
    "title": "the Terror of the Void",
    "tags": [
      "Tank",
      "Mage"
    ],
    "winRate": "52.67",
    "pickRate": 4175,
    "banRate": 25175
  },
  {
    "id": 32,
    "name": "Amumu",
    "key": "Amumu",
    "title": "the Sad Mummy",
    "tags": [
      "Tank",
      "Mage"
    ],
    "winRate": "50.95",
    "pickRate": 2312,
    "banRate": 587
  },
  {
    "id": 33,
    "name": "Rammus",
    "key": "Rammus",
    "title": "the Armordillo",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "winRate": "53.85",
    "pickRate": 2997,
    "banRate": 1846
  },
  {
    "id": 34,
    "name": "Anivia",
    "key": "Anivia",
    "title": "the Cryophoenix",
    "tags": [
      "Mage",
      "Support"
    ],
    "winRate": "53.60",
    "pickRate": 2252,
    "banRate": 877
  },
  {
    "id": 35,
    "name": "Shaco",
    "key": "Shaco",
    "title": "the Demon Jester",
    "tags": [
      "Assassin"
    ],
    "winRate": "49.39",
    "pickRate": 2557,
    "banRate": 1497
  },
  {
    "id": 36,
    "name": "Dr. Mundo",
    "key": "DrMundo",
    "title": "the Madman of Zaun",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "49.97",
    "pickRate": 1567,
    "banRate": 640
  },
  {
    "id": 37,
    "name": "Sona",
    "key": "Sona",
    "title": "Maven of the Strings",
    "tags": [
      "Support",
      "Mage"
    ],
    "winRate": "54.19",
    "pickRate": 5429,
    "banRate": 613
  },
  {
    "id": 38,
    "name": "Kassadin",
    "key": "Kassadin",
    "title": "the Void Walker",
    "tags": [
      "Assassin",
      "Mage"
    ],
    "winRate": "49.28",
    "pickRate": 3046,
    "banRate": 5280
  },
  {
    "id": 39,
    "name": "Irelia",
    "key": "Irelia",
    "title": "the Will of the Blades",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "winRate": "50.68",
    "pickRate": 2291,
    "banRate": 1143
  },
  {
    "id": 40,
    "name": "Janna",
    "key": "Janna",
    "title": "the Storm's Fury",
    "tags": [
      "Support",
      "Mage"
    ],
    "winRate": "55.53",
    "pickRate": 8691,
    "banRate": 21390
  },
  {
    "id": 41,
    "name": "Gangplank",
    "key": "Gangplank",
    "title": "the Saltwater Scourge",
    "tags": [
      "Fighter"
    ],
    "winRate": "49.14",
    "pickRate": 4204,
    "banRate": 821
  },
  {
    "id": 42,
    "name": "Corki",
    "key": "Corki",
    "title": "the Daring Bombardier",
    "tags": [
      "Marksman"
    ],
    "winRate": "46.47",
    "pickRate": 2449,
    "banRate": 646
  },
  {
    "id": 43,
    "name": "Karma",
    "key": "Karma",
    "title": "the Enlightened One",
    "tags": [
      "Mage",
      "Support"
    ],
    "winRate": "45.15",
    "pickRate": 3134,
    "banRate": 215
  },
  {
    "id": 44,
    "name": "Taric",
    "key": "Taric",
    "title": "the Shield of Valoran",
    "tags": [
      "Support",
      "Fighter"
    ],
    "winRate": "52.63",
    "pickRate": 2586,
    "banRate": 210
  },
  {
    "id": 45,
    "name": "Veigar",
    "key": "Veigar",
    "title": "the Tiny Master of Evil",
    "tags": [
      "Mage"
    ],
    "winRate": "49.39",
    "pickRate": 3914,
    "banRate": 1327
  },
  {
    "id": 48,
    "name": "Trundle",
    "key": "Trundle",
    "title": "the Troll King",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "47.65",
    "pickRate": 1958,
    "banRate": 238
  },
  {
    "id": 50,
    "name": "Swain",
    "key": "Swain",
    "title": "the Master Tactician",
    "tags": [
      "Mage",
      "Fighter"
    ],
    "winRate": "53.15",
    "pickRate": 1494,
    "banRate": 467
  },
  {
    "id": 51,
    "name": "Caitlyn",
    "key": "Caitlyn",
    "title": "the Sheriff of Piltover",
    "tags": [
      "Marksman"
    ],
    "winRate": "46.97",
    "pickRate": 6776,
    "banRate": 10248
  },
  {
    "id": 53,
    "name": "Blitzcrank",
    "key": "Blitzcrank",
    "title": "the Great Steam Golem",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "winRate": "51.20",
    "pickRate": 6847,
    "banRate": 18795
  },
  {
    "id": 54,
    "name": "Malphite",
    "key": "Malphite",
    "title": "Shard of the Monolith",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "winRate": "50.12",
    "pickRate": 2518,
    "banRate": 486
  },
  {
    "id": 55,
    "name": "Katarina",
    "key": "Katarina",
    "title": "the Sinister Blade",
    "tags": [
      "Assassin",
      "Mage"
    ],
    "winRate": "50.23",
    "pickRate": 3416,
    "banRate": 6347
  },
  {
    "id": 56,
    "name": "Nocturne",
    "key": "Nocturne",
    "title": "the Eternal Nightmare",
    "tags": [
      "Assassin",
      "Fighter"
    ],
    "winRate": "51.61",
    "pickRate": 1676,
    "banRate": 287
  },
  {
    "id": 57,
    "name": "Maokai",
    "key": "Maokai",
    "title": "the Twisted Treant",
    "tags": [
      "Tank",
      "Mage"
    ],
    "winRate": "51.60",
    "pickRate": 4310,
    "banRate": 7320
  },
  {
    "id": 58,
    "name": "Renekton",
    "key": "Renekton",
    "title": "the Butcher of the Sands",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "50.14",
    "pickRate": 3871,
    "banRate": 2253
  },
  {
    "id": 59,
    "name": "Jarvan IV",
    "key": "JarvanIV",
    "title": "the Exemplar of Demacia",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "winRate": "52.32",
    "pickRate": 6025,
    "banRate": 2043
  },
  {
    "id": 60,
    "name": "Elise",
    "key": "Elise",
    "title": "the Spider Queen",
    "tags": [
      "Mage",
      "Fighter"
    ],
    "winRate": "49.21",
    "pickRate": 2607,
    "banRate": 1261
  },
  {
    "id": 61,
    "name": "Orianna",
    "key": "Orianna",
    "title": "the Lady of Clockwork",
    "tags": [
      "Mage",
      "Support"
    ],
    "winRate": "50.26",
    "pickRate": 6538,
    "banRate": 2764
  },
  {
    "id": 62,
    "name": "Wukong",
    "key": "MonkeyKing",
    "title": "the Monkey King",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "52.33",
    "pickRate": 2167,
    "banRate": 355
  },
  {
    "id": 63,
    "name": "Brand",
    "key": "Brand",
    "title": "the Burning Vengeance",
    "tags": [
      "Mage"
    ],
    "winRate": "51.50",
    "pickRate": 3876,
    "banRate": 2857
  },
  {
    "id": 64,
    "name": "Lee Sin",
    "key": "LeeSin",
    "title": "the Blind Monk",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "winRate": "45.90",
    "pickRate": 9188,
    "banRate": 6516
  },
  {
    "id": 67,
    "name": "Vayne",
    "key": "Vayne",
    "title": "the Night Hunter",
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "winRate": "51.59",
    "pickRate": 10658,
    "banRate": 9026
  },
  {
    "id": 68,
    "name": "Rumble",
    "key": "Rumble",
    "title": "the Mechanized Menace",
    "tags": [
      "Fighter",
      "Mage"
    ],
    "winRate": "49.21",
    "pickRate": 1581,
    "banRate": 335
  },
  {
    "id": 69,
    "name": "Cassiopeia",
    "key": "Cassiopeia",
    "title": "the Serpent's Embrace",
    "tags": [
      "Mage"
    ],
    "winRate": "48.88",
    "pickRate": 2766,
    "banRate": 1605
  },
  {
    "id": 72,
    "name": "Skarner",
    "key": "Skarner",
    "title": "the Crystal Vanguard",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "48.78",
    "pickRate": 574,
    "banRate": 70
  },
  {
    "id": 74,
    "name": "Heimerdinger",
    "key": "Heimerdinger",
    "title": "the Revered Inventor",
    "tags": [
      "Mage",
      "Support"
    ],
    "winRate": "48.33",
    "pickRate": 1678,
    "banRate": 694
  },
  {
    "id": 75,
    "name": "Nasus",
    "key": "Nasus",
    "title": "the Curator of the Sands",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "50.97",
    "pickRate": 4361,
    "banRate": 8026
  },
  {
    "id": 76,
    "name": "Nidalee",
    "key": "Nidalee",
    "title": "the Bestial Huntress",
    "tags": [
      "Assassin",
      "Fighter"
    ],
    "winRate": "46.24",
    "pickRate": 1689,
    "banRate": 232
  },
  {
    "id": 77,
    "name": "Udyr",
    "key": "Udyr",
    "title": "the Spirit Walker",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "49.69",
    "pickRate": 1113,
    "banRate": 90
  },
  {
    "id": 78,
    "name": "Poppy",
    "key": "Poppy",
    "title": "Keeper of the Hammer",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "winRate": "45.17",
    "pickRate": 1886,
    "banRate": 161
  },
  {
    "id": 79,
    "name": "Gragas",
    "key": "Gragas",
    "title": "the Rabble Rouser",
    "tags": [
      "Fighter",
      "Mage"
    ],
    "winRate": "49.05",
    "pickRate": 6424,
    "banRate": 1768
  },
  {
    "id": 80,
    "name": "Pantheon",
    "key": "Pantheon",
    "title": "the Artisan of War",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "winRate": "50.72",
    "pickRate": 2654,
    "banRate": 2662
  },
  {
    "id": 81,
    "name": "Ezreal",
    "key": "Ezreal",
    "title": "the Prodigal Explorer",
    "tags": [
      "Marksman",
      "Mage"
    ],
    "winRate": "46.45",
    "pickRate": 5337,
    "banRate": 806
  },
  {
    "id": 82,
    "name": "Mordekaiser",
    "key": "Mordekaiser",
    "title": "the Iron Revenant",
    "tags": [
      "Fighter"
    ],
    "winRate": "51.10",
    "pickRate": 1182,
    "banRate": 227
  },
  {
    "id": 83,
    "name": "Yorick",
    "key": "Yorick",
    "title": "Shepherd of Souls",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "53.99",
    "pickRate": 1378,
    "banRate": 505
  },
  {
    "id": 84,
    "name": "Akali",
    "key": "Akali",
    "title": "the Fist of Shadow",
    "tags": [
      "Assassin"
    ],
    "winRate": "50.32",
    "pickRate": 2949,
    "banRate": 4501
  },
  {
    "id": 85,
    "name": "Kennen",
    "key": "Kennen",
    "title": "the Heart of the Tempest",
    "tags": [
      "Mage",
      "Marksman"
    ],
    "winRate": "47.94",
    "pickRate": 1848,
    "banRate": 689
  },
  {
    "id": 86,
    "name": "Garen",
    "key": "Garen",
    "title": "The Might of Demacia",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "53.10",
    "pickRate": 3893,
    "banRate": 1869
  },
  {
    "id": 89,
    "name": "Leona",
    "key": "Leona",
    "title": "the Radiant Dawn",
    "tags": [
      "Tank",
      "Support"
    ],
    "winRate": "51.28",
    "pickRate": 4961,
    "banRate": 1743
  },
  {
    "id": 90,
    "name": "Malzahar",
    "key": "Malzahar",
    "title": "the Prophet of the Void",
    "tags": [
      "Mage",
      "Assassin"
    ],
    "winRate": "52.93",
    "pickRate": 3752,
    "banRate": 5480
  },
  {
    "id": 91,
    "name": "Talon",
    "key": "Talon",
    "title": "the Blade's Shadow",
    "tags": [
      "Assassin",
      "Fighter"
    ],
    "winRate": "50.08",
    "pickRate": 3173,
    "banRate": 2987
  },
  {
    "id": 92,
    "name": "Riven",
    "key": "Riven",
    "title": "the Exile",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "winRate": "49.87",
    "pickRate": 6074,
    "banRate": 4400
  },
  {
    "id": 96,
    "name": "Kog'Maw",
    "key": "KogMaw",
    "title": "the Mouth of the Abyss",
    "tags": [
      "Marksman",
      "Mage"
    ],
    "winRate": "50.45",
    "pickRate": 3227,
    "banRate": 1575
  },
  {
    "id": 98,
    "name": "Shen",
    "key": "Shen",
    "title": "the Eye of Twilight",
    "tags": [
      "Tank"
    ],
    "winRate": "48.59",
    "pickRate": 3161,
    "banRate": 244
  },
  {
    "id": 99,
    "name": "Lux",
    "key": "Lux",
    "title": "the Lady of Luminosity",
    "tags": [
      "Mage",
      "Support"
    ],
    "winRate": "49.45",
    "pickRate": 7199,
    "banRate": 1208
  },
  {
    "id": 101,
    "name": "Xerath",
    "key": "Xerath",
    "title": "the Magus Ascendant",
    "tags": [
      "Mage",
      "Assassin"
    ],
    "winRate": "52.74",
    "pickRate": 1695,
    "banRate": 219
  },
  {
    "id": 102,
    "name": "Shyvana",
    "key": "Shyvana",
    "title": "the Half-Dragon",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "53.01",
    "pickRate": 2445,
    "banRate": 387
  },
  {
    "id": 103,
    "name": "Ahri",
    "key": "Ahri",
    "title": "the Nine-Tailed Fox",
    "tags": [
      "Mage",
      "Assassin"
    ],
    "winRate": "52.17",
    "pickRate": 6316,
    "banRate": 4481
  },
  {
    "id": 104,
    "name": "Graves",
    "key": "Graves",
    "title": "the Outlaw",
    "tags": [
      "Marksman"
    ],
    "winRate": "47.37",
    "pickRate": 1444,
    "banRate": 224
  },
  {
    "id": 105,
    "name": "Fizz",
    "key": "Fizz",
    "title": "the Tidal Trickster",
    "tags": [
      "Assassin",
      "Fighter"
    ],
    "winRate": "48.90",
    "pickRate": 3468,
    "banRate": 13291
  },
  {
    "id": 106,
    "name": "Volibear",
    "key": "Volibear",
    "title": "the Thunder's Roar",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "49.58",
    "pickRate": 1198,
    "banRate": 183
  },
  {
    "id": 107,
    "name": "Rengar",
    "key": "Rengar",
    "title": "the Pridestalker",
    "tags": [
      "Assassin",
      "Fighter"
    ],
    "winRate": "48.12",
    "pickRate": 2157,
    "banRate": 594
  },
  {
    "id": 110,
    "name": "Varus",
    "key": "Varus",
    "title": "the Arrow of Retribution",
    "tags": [
      "Marksman",
      "Mage"
    ],
    "winRate": "49.95",
    "pickRate": 2887,
    "banRate": 142
  },
  {
    "id": 111,
    "name": "Nautilus",
    "key": "Nautilus",
    "title": "the Titan of the Depths",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "winRate": "48.48",
    "pickRate": 2104,
    "banRate": 195
  },
  {
    "id": 112,
    "name": "Viktor",
    "key": "Viktor",
    "title": "the Machine Herald",
    "tags": [
      "Mage"
    ],
    "winRate": "47.31",
    "pickRate": 1769,
    "banRate": 128
  },
  {
    "id": 113,
    "name": "Sejuani",
    "key": "Sejuani",
    "title": "Fury of the North",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "winRate": "53.12",
    "pickRate": 3867,
    "banRate": 5231
  },
  {
    "id": 114,
    "name": "Fiora",
    "key": "Fiora",
    "title": "the Grand Duelist",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "winRate": "49.74",
    "pickRate": 3078,
    "banRate": 14855
  },
  {
    "id": 115,
    "name": "Ziggs",
    "key": "Ziggs",
    "title": "the Hexplosives Expert",
    "tags": [
      "Mage"
    ],
    "winRate": "51.53",
    "pickRate": 2313,
    "banRate": 272
  },
  {
    "id": 117,
    "name": "Lulu",
    "key": "Lulu",
    "title": "the Fae Sorceress",
    "tags": [
      "Support",
      "Mage"
    ],
    "winRate": "50.22",
    "pickRate": 6705,
    "banRate": 13461
  },
  {
    "id": 119,
    "name": "Draven",
    "key": "Draven",
    "title": "the Glorious Executioner",
    "tags": [
      "Marksman"
    ],
    "winRate": "50.11",
    "pickRate": 5081,
    "banRate": 20262
  },
  {
    "id": 120,
    "name": "Hecarim",
    "key": "Hecarim",
    "title": "the Shadow of War",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "50.95",
    "pickRate": 2002,
    "banRate": 658
  },
  {
    "id": 121,
    "name": "Kha'Zix",
    "key": "Khazix",
    "title": "the Voidreaver",
    "tags": [
      "Assassin",
      "Fighter"
    ],
    "winRate": "48.62",
    "pickRate": 4303,
    "banRate": 2193
  },
  {
    "id": 122,
    "name": "Darius",
    "key": "Darius",
    "title": "the Hand of Noxus",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "51.67",
    "pickRate": 3894,
    "banRate": 22870
  },
  {
    "id": 126,
    "name": "Jayce",
    "key": "Jayce",
    "title": "the Defender of Tomorrow",
    "tags": [
      "Fighter",
      "Marksman"
    ],
    "winRate": "50.42",
    "pickRate": 3199,
    "banRate": 2196
  },
  {
    "id": 127,
    "name": "Lissandra",
    "key": "Lissandra",
    "title": "the Ice Witch",
    "tags": [
      "Mage"
    ],
    "winRate": "46.06",
    "pickRate": 1105,
    "banRate": 188
  },
  {
    "id": 131,
    "name": "Diana",
    "key": "Diana",
    "title": "Scorn of the Moon",
    "tags": [
      "Fighter",
      "Mage"
    ],
    "winRate": "51.51",
    "pickRate": 3079,
    "banRate": 1624
  },
  {
    "id": 133,
    "name": "Quinn",
    "key": "Quinn",
    "title": "Demacia's Wings",
    "tags": [
      "Marksman",
      "Fighter"
    ],
    "winRate": "50.00",
    "pickRate": 1288,
    "banRate": 298
  },
  {
    "id": 134,
    "name": "Syndra",
    "key": "Syndra",
    "title": "the Dark Sovereign",
    "tags": [
      "Mage",
      "Support"
    ],
    "winRate": "46.57",
    "pickRate": 3751,
    "banRate": 4543
  },
  {
    "id": 136,
    "name": "Aurelion Sol",
    "key": "AurelionSol",
    "title": "The Star Forger",
    "tags": [
      "Mage",
      "Fighter"
    ],
    "winRate": "52.56",
    "pickRate": 841,
    "banRate": 443
  },
  {
    "id": 141,
    "name": "Kayn",
    "key": "Kayn",
    "title": "the Shadow Reaper",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "winRate": "48.79",
    "pickRate": 9853,
    "banRate": 17384
  },
  {
    "id": 143,
    "name": "Zyra",
    "key": "Zyra",
    "title": "Rise of the Thorns",
    "tags": [
      "Mage",
      "Support"
    ],
    "winRate": "49.89",
    "pickRate": 2355,
    "banRate": 943
  },
  {
    "id": 150,
    "name": "Gnar",
    "key": "Gnar",
    "title": "the Missing Link",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "49.41",
    "pickRate": 3922,
    "banRate": 1974
  },
  {
    "id": 154,
    "name": "Zac",
    "key": "Zac",
    "title": "the Secret Weapon",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "winRate": "49.20",
    "pickRate": 2508,
    "banRate": 15786
  },
  {
    "id": 157,
    "name": "Yasuo",
    "key": "Yasuo",
    "title": "the Unforgiven",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "winRate": "50.15",
    "pickRate": 7872,
    "banRate": 33015
  },
  {
    "id": 161,
    "name": "Vel'Koz",
    "key": "Velkoz",
    "title": "the Eye of the Void",
    "tags": [
      "Mage"
    ],
    "winRate": "51.02",
    "pickRate": 3187,
    "banRate": 417
  },
  {
    "id": 163,
    "name": "Taliyah",
    "key": "Taliyah",
    "title": "the Stoneweaver",
    "tags": [
      "Mage",
      "Support"
    ],
    "winRate": "47.13",
    "pickRate": 2001,
    "banRate": 262
  },
  {
    "id": 164,
    "name": "Camille",
    "key": "Camille",
    "title": "the Steel Shadow",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "48.04",
    "pickRate": 1886,
    "banRate": 1739
  },
  {
    "id": 201,
    "name": "Braum",
    "key": "Braum",
    "title": "the Heart of the Freljord",
    "tags": [
      "Support",
      "Tank"
    ],
    "winRate": "51.01",
    "pickRate": 3744,
    "banRate": 1381
  },
  {
    "id": 202,
    "name": "Jhin",
    "key": "Jhin",
    "title": "the Virtuoso",
    "tags": [
      "Marksman",
      "Assassin"
    ],
    "winRate": "48.79",
    "pickRate": 8044,
    "banRate": 1670
  },
  {
    "id": 203,
    "name": "Kindred",
    "key": "Kindred",
    "title": "The Eternal Hunters",
    "tags": [
      "Marksman"
    ],
    "winRate": "48.65",
    "pickRate": 1147,
    "banRate": 158
  },
  {
    "id": 222,
    "name": "Jinx",
    "key": "Jinx",
    "title": "the Loose Cannon",
    "tags": [
      "Marksman"
    ],
    "winRate": "51.22",
    "pickRate": 7980,
    "banRate": 880
  },
  {
    "id": 223,
    "name": "Tahm Kench",
    "key": "TahmKench",
    "title": "the River King",
    "tags": [
      "Support",
      "Tank"
    ],
    "winRate": "46.04",
    "pickRate": 1692,
    "banRate": 432
  },
  {
    "id": 236,
    "name": "Lucian",
    "key": "Lucian",
    "title": "the Purifier",
    "tags": [
      "Marksman"
    ],
    "winRate": "47.17",
    "pickRate": 8300,
    "banRate": 1331
  },
  {
    "id": 238,
    "name": "Zed",
    "key": "Zed",
    "title": "the Master of Shadows",
    "tags": [
      "Assassin",
      "Fighter"
    ],
    "winRate": "49.37",
    "pickRate": 6460,
    "banRate": 25393
  },
  {
    "id": 240,
    "name": "Kled",
    "key": "Kled",
    "title": "the Cantankerous Cavalier",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "51.44",
    "pickRate": 1769,
    "banRate": 1518
  },
  {
    "id": 245,
    "name": "Ekko",
    "key": "Ekko",
    "title": "the Boy Who Shattered Time",
    "tags": [
      "Assassin",
      "Fighter"
    ],
    "winRate": "49.90",
    "pickRate": 4866,
    "banRate": 2750
  },
  {
    "id": 254,
    "name": "Vi",
    "key": "Vi",
    "title": "the Piltover Enforcer",
    "tags": [
      "Fighter",
      "Assassin"
    ],
    "winRate": "50.60",
    "pickRate": 3002,
    "banRate": 556
  },
  {
    "id": 266,
    "name": "Aatrox",
    "key": "Aatrox",
    "title": "the Darkin Blade",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "47.01",
    "pickRate": 753,
    "banRate": 712
  },
  {
    "id": 267,
    "name": "Nami",
    "key": "Nami",
    "title": "the Tidecaller",
    "tags": [
      "Support",
      "Mage"
    ],
    "winRate": "51.77",
    "pickRate": 4694,
    "banRate": 245
  },
  {
    "id": 268,
    "name": "Azir",
    "key": "Azir",
    "title": "the Emperor of the Sands",
    "tags": [
      "Mage",
      "Marksman"
    ],
    "winRate": "43.36",
    "pickRate": 1280,
    "banRate": 419
  },
  {
    "id": 412,
    "name": "Thresh",
    "key": "Thresh",
    "title": "the Chain Warden",
    "tags": [
      "Support",
      "Fighter"
    ],
    "winRate": "47.25",
    "pickRate": 13002,
    "banRate": 5867
  },
  {
    "id": 420,
    "name": "Illaoi",
    "key": "Illaoi",
    "title": "the Kraken Priestess",
    "tags": [
      "Fighter",
      "Tank"
    ],
    "winRate": "48.72",
    "pickRate": 1482,
    "banRate": 3085
  },
  {
    "id": 421,
    "name": "Rek'Sai",
    "key": "RekSai",
    "title": "the Void Burrower",
    "tags": [
      "Fighter"
    ],
    "winRate": "48.82",
    "pickRate": 1436,
    "banRate": 324
  },
  {
    "id": 427,
    "name": "Ivern",
    "key": "Ivern",
    "title": "the Green Father",
    "tags": [
      "Support",
      "Mage"
    ],
    "winRate": "46.93",
    "pickRate": 1076,
    "banRate": 623
  },
  {
    "id": 429,
    "name": "Kalista",
    "key": "Kalista",
    "title": "the Spear of Vengeance",
    "tags": [
      "Marksman"
    ],
    "winRate": "47.79",
    "pickRate": 3572,
    "banRate": 900
  },
  {
    "id": 432,
    "name": "Bard",
    "key": "Bard",
    "title": "the Wandering Caretaker",
    "tags": [
      "Support",
      "Mage"
    ],
    "winRate": "47.82",
    "pickRate": 3733,
    "banRate": 529
  },
  {
    "id": 497,
    "name": "Rakan",
    "key": "Rakan",
    "title": "The Charmer",
    "tags": [
      "Support"
    ],
    "winRate": "50.18",
    "pickRate": 6841,
    "banRate": 2157
  },
  {
    "id": 498,
    "name": "Xayah",
    "key": "Xayah",
    "title": "the Rebel",
    "tags": [
      "Marksman"
    ],
    "winRate": "49.80",
    "pickRate": 7843,
    "banRate": 6274
  },
  {
    "id": 516,
    "name": "Ornn",
    "key": "Ornn",
    "title": "The Fire below the Mountain",
    "tags": [
      "Tank",
      "Fighter"
    ],
    "winRate": "41.02",
    "pickRate": 4766,
    "banRate": 5685
  }
];
    
    return { champions };
  }
}