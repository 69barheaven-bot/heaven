export const repertoireDayOptions = [
  {
    "key": "monday",
    "label": "月",
    "shortLabel": "M",
    "column": "M"
  },
  {
    "key": "tuesday",
    "label": "火",
    "shortLabel": "Tu",
    "column": "Tu"
  },
  {
    "key": "wednesday",
    "label": "水",
    "shortLabel": "W",
    "column": "W"
  },
  {
    "key": "thursday",
    "label": "木",
    "shortLabel": "Th",
    "column": "Th"
  },
  {
    "key": "friday",
    "label": "金",
    "shortLabel": "F",
    "column": "F"
  },
  {
    "key": "saturday",
    "label": "土",
    "shortLabel": "S",
    "column": "S"
  }
] as const;

export type RepertoireDayKey = (typeof repertoireDayOptions)[number]["key"];

export type RepertoireSong = {
  artist: string;
  title: string;
  days: RepertoireDayKey[];
  request: boolean;
  note?: string;
};

export const repertoireSongs: RepertoireSong[] = [
  {
    "artist": "AC/DC",
    "title": "Back in Black",
    "days": [],
    "request": false
  },
  {
    "artist": "AC/DC",
    "title": "Highway to Hell",
    "days": [],
    "request": false
  },
  {
    "artist": "AC/DC",
    "title": "You Shook Me All Night Long",
    "days": [],
    "request": false
  },
  {
    "artist": "Aerosmith",
    "title": "Eat the Rich",
    "days": [],
    "request": false
  },
  {
    "artist": "Aerosmith",
    "title": "Sweet Emotion",
    "days": [],
    "request": false
  },
  {
    "artist": "Aerosmith",
    "title": "Walk This Way",
    "days": [],
    "request": false
  },
  {
    "artist": "Aerosmith",
    "title": "I Don't Want to Miss a Thing",
    "days": [
      "thursday",
      "saturday"
    ],
    "request": false
  },
  {
    "artist": "Asia",
    "title": "Heat of the Moment",
    "days": [],
    "request": false
  },
  {
    "artist": "Bad Company",
    "title": "Can't Get Enough",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Bad Company",
    "title": "Rock Steady",
    "days": [],
    "request": false
  },
  {
    "artist": "Bad Company",
    "title": "Ready for Love",
    "days": [],
    "request": false
  },
  {
    "artist": "Beck, Bogert & Appice",
    "title": "Jeff's Boogie",
    "days": [],
    "request": false
  },
  {
    "artist": "Beck, Bogert & Appice",
    "title": "Sweet Sweet Surrender",
    "days": [],
    "request": false
  },
  {
    "artist": "Beck, Bogert & Appice",
    "title": "Superstition",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Big Brother & The Holding Company",
    "title": "Piece of My Heart",
    "days": [],
    "request": false
  },
  {
    "artist": "Blondie",
    "title": "Call Me",
    "days": [],
    "request": false
  },
  {
    "artist": "Bon Jovi",
    "title": "Bad Medicine",
    "days": [],
    "request": false
  },
  {
    "artist": "Bon Jovi",
    "title": "Livin' on a Prayer",
    "days": [
      "friday",
      "saturday"
    ],
    "request": false
  },
  {
    "artist": "Bon Jovi",
    "title": "You Give Love a Bad Name",
    "days": [],
    "request": false
  },
  {
    "artist": "Bon Jovi",
    "title": "I'll Be There for You",
    "days": [],
    "request": false
  },
  {
    "artist": "Boston",
    "title": "More Than a Feeling",
    "days": [],
    "request": false
  },
  {
    "artist": "Bryan Adams",
    "title": "Summer of '69",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Char",
    "title": "からまわり",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Cheap Trick",
    "title": "Surrender",
    "days": [],
    "request": false
  },
  {
    "artist": "Chicago",
    "title": "24 or 6 to 4",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Chicago",
    "title": "Hard to Say I'm Sorry / Get Away",
    "days": [],
    "request": false
  },
  {
    "artist": "Coldplay",
    "title": "Viva La Vida",
    "days": [],
    "request": false
  },
  {
    "artist": "Cream",
    "title": "Badge",
    "days": [],
    "request": false
  },
  {
    "artist": "Cream",
    "title": "Crossroads",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Cream",
    "title": "Sunshine of Your Love",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Cream",
    "title": "White Room",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Creedence Clearwater Revival",
    "title": "Have You Ever Seen the Rain?",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Creedence Clearwater Revival",
    "title": "Proud Mary",
    "days": [],
    "request": false
  },
  {
    "artist": "Cyndi Lauper",
    "title": "True Colors",
    "days": [],
    "request": false
  },
  {
    "artist": "Deep Purple",
    "title": "Smoke on the Water",
    "days": [
      "monday",
      "thursday",
      "friday",
      "saturday"
    ],
    "request": false
  },
  {
    "artist": "Deep Purple",
    "title": "Black Night",
    "days": [],
    "request": false
  },
  {
    "artist": "Deep Purple",
    "title": "Burn",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Deep Purple",
    "title": "Into the Fire",
    "days": [],
    "request": false
  },
  {
    "artist": "Deep Purple",
    "title": "Highway Star",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Deep Purple",
    "title": "Never Before",
    "days": [],
    "request": false
  },
  {
    "artist": "Deep Purple",
    "title": "Space Truckin'",
    "days": [],
    "request": false
  },
  {
    "artist": "Deep Purple",
    "title": "Stormbringer",
    "days": [],
    "request": false
  },
  {
    "artist": "Derek and the Dominos",
    "title": "Layla",
    "days": [],
    "request": false
  },
  {
    "artist": "Eagles",
    "title": "Desperado",
    "days": [],
    "request": false
  },
  {
    "artist": "Eagles",
    "title": "Hotel California",
    "days": [],
    "request": false
  },
  {
    "artist": "Eagles",
    "title": "One of These Nights",
    "days": [],
    "request": false
  },
  {
    "artist": "Eagles",
    "title": "Take It Easy",
    "days": [],
    "request": false
  },
  {
    "artist": "Eric Clapton",
    "title": "Cocaine",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Eric Clapton",
    "title": "Forever Man",
    "days": [],
    "request": false
  },
  {
    "artist": "Eric Clapton",
    "title": "I Shot the Sheriff",
    "days": [],
    "request": false
  },
  {
    "artist": "Eric Clapton",
    "title": "Old Love",
    "days": [],
    "request": false
  },
  {
    "artist": "Eric Clapton",
    "title": "Tears in Heaven",
    "days": [],
    "request": false
  },
  {
    "artist": "Eric Clapton",
    "title": "Wonderful Tonight",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Europe",
    "title": "The Final Countdown",
    "days": [],
    "request": false
  },
  {
    "artist": "Extreme",
    "title": "Decadence Dance",
    "days": [],
    "request": false
  },
  {
    "artist": "Fair Warning",
    "title": "Burning Heart",
    "days": [],
    "request": false
  },
  {
    "artist": "Foo Fighters",
    "title": "The Pretender",
    "days": [],
    "request": false
  },
  {
    "artist": "Free",
    "title": "All Right Now",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Free",
    "title": "Wishing Well",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Gary Moore",
    "title": "Always Gonna Love You",
    "days": [],
    "request": false
  },
  {
    "artist": "Gary Moore",
    "title": "Oh Pretty Woman",
    "days": [],
    "request": false
  },
  {
    "artist": "Gary Moore",
    "title": "Still Got the Blues",
    "days": [],
    "request": false
  },
  {
    "artist": "Gary Moore",
    "title": "Parisienne Walkways (feat. Phil Lynott)",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Grand Funk Railroad",
    "title": "Are You Ready",
    "days": [],
    "request": false
  },
  {
    "artist": "Grand Funk Railroad",
    "title": "Heartbreaker",
    "days": [],
    "request": false
  },
  {
    "artist": "Grand Funk Railroad",
    "title": "Inside Looking Out",
    "days": [],
    "request": false
  },
  {
    "artist": "Grand Funk Railroad",
    "title": "We're an American Band",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Green Day",
    "title": "American Idiot",
    "days": [],
    "request": false
  },
  {
    "artist": "Green Day",
    "title": "Basket Case",
    "days": [],
    "request": false
  },
  {
    "artist": "Green Day",
    "title": "Minority",
    "days": [],
    "request": false
  },
  {
    "artist": "Guns N' Roses",
    "title": "Don't Cry",
    "days": [],
    "request": false
  },
  {
    "artist": "Guns N' Roses",
    "title": "Paradise City",
    "days": [],
    "request": false
  },
  {
    "artist": "Guns N' Roses",
    "title": "Sweet Child O' Mine",
    "days": [],
    "request": false
  },
  {
    "artist": "Guns N' Roses",
    "title": "Welcome to the Jungle",
    "days": [],
    "request": false
  },
  {
    "artist": "Heart",
    "title": "Alone",
    "days": [],
    "request": false
  },
  {
    "artist": "Hoobastank",
    "title": "Just One",
    "days": [],
    "request": false
  },
  {
    "artist": "Hoobastank",
    "title": "The Reason",
    "days": [],
    "request": false
  },
  {
    "artist": "Iron Maiden",
    "title": "The Trooper",
    "days": [],
    "request": false
  },
  {
    "artist": "Janis Joplin",
    "title": "Move Over",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Jeff Beck",
    "title": "Led Boots",
    "days": [],
    "request": false
  },
  {
    "artist": "Jeff Beck",
    "title": "Cause We've Ended as Lovers",
    "days": [],
    "request": false
  },
  {
    "artist": "Jimi Hendrix",
    "title": "Fire",
    "days": [],
    "request": false
  },
  {
    "artist": "Jimi Hendrix",
    "title": "Little Wing",
    "days": [],
    "request": false
  },
  {
    "artist": "Joan Jett & The Blackhearts",
    "title": "I Love Rock 'n Roll",
    "days": [],
    "request": false
  },
  {
    "artist": "Johnny, Louis & Char",
    "title": "Wasted",
    "days": [],
    "request": false
  },
  {
    "artist": "Jon Bon Jovi",
    "title": "Janie, Don't Take Your Love to Town",
    "days": [],
    "request": false
  },
  {
    "artist": "Journey",
    "title": "Any Way You Want It",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Journey",
    "title": "Don't Stop Believin'",
    "days": [],
    "request": false
  },
  {
    "artist": "Journey",
    "title": "Open Arms",
    "days": [],
    "request": false
  },
  {
    "artist": "Journey",
    "title": "Separate Ways (Worlds Apart)",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Judas Priest",
    "title": "The Hellion",
    "days": [],
    "request": false
  },
  {
    "artist": "Judas Priest",
    "title": "Electric Eye",
    "days": [],
    "request": false
  },
  {
    "artist": "King Crimson",
    "title": "Red",
    "days": [],
    "request": false
  },
  {
    "artist": "Kiss",
    "title": "Black Diamond",
    "days": [],
    "request": false
  },
  {
    "artist": "Kiss",
    "title": "Creatures of the Night",
    "days": [],
    "request": false
  },
  {
    "artist": "Kiss",
    "title": "Cold Gin",
    "days": [],
    "request": false
  },
  {
    "artist": "Kiss",
    "title": "Deuce",
    "days": [],
    "request": false
  },
  {
    "artist": "Kiss",
    "title": "Detroit Rock City",
    "days": [],
    "request": false
  },
  {
    "artist": "Kiss",
    "title": "God Gave Rock 'N' Roll to You II",
    "days": [],
    "request": false
  },
  {
    "artist": "Kiss",
    "title": "I Was Made for Lovin' You",
    "days": [],
    "request": false
  },
  {
    "artist": "Kiss",
    "title": "Sure Know Something",
    "days": [],
    "request": false
  },
  {
    "artist": "Kiss",
    "title": "Love Gun",
    "days": [],
    "request": false
  },
  {
    "artist": "Kiss",
    "title": "Parasite",
    "days": [],
    "request": false
  },
  {
    "artist": "Kiss",
    "title": "Rock and Roll All Nite",
    "days": [],
    "request": false
  },
  {
    "artist": "Kiss",
    "title": "Shout It Out Loud",
    "days": [],
    "request": false
  },
  {
    "artist": "Kiss",
    "title": "Watchin' You",
    "days": [],
    "request": false
  },
  {
    "artist": "Led Zeppelin",
    "title": "Communication Breakdown",
    "days": [],
    "request": false
  },
  {
    "artist": "Led Zeppelin",
    "title": "Good Times Bad Times",
    "days": [],
    "request": false
  },
  {
    "artist": "Led Zeppelin",
    "title": "Living Loving Maid (She's Just a Woman)",
    "days": [],
    "request": false
  },
  {
    "artist": "Led Zeppelin",
    "title": "Immigrant Song",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Led Zeppelin",
    "title": "Rock and Roll",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Led Zeppelin",
    "title": "Stairway to Heaven",
    "days": [],
    "request": false
  },
  {
    "artist": "Led Zeppelin",
    "title": "Whole Lotta Love",
    "days": [],
    "request": false
  },
  {
    "artist": "Linda Ronstadt",
    "title": "It's So Easy",
    "days": [],
    "request": false
  },
  {
    "artist": "Lynyrd Skynyrd",
    "title": "Sweet Home Alabama",
    "days": [],
    "request": false
  },
  {
    "artist": "Måneskin",
    "title": "I Wanna Be Your Slave",
    "days": [],
    "request": false
  },
  {
    "artist": "Metallica",
    "title": "Enter Sandman",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Michael Schenker",
    "title": "Into the Arena",
    "days": [],
    "request": false
  },
  {
    "artist": "Mötley Crüe",
    "title": "Dr. Feelgood",
    "days": [],
    "request": false
  },
  {
    "artist": "Mötley Crüe",
    "title": "Don't Go Away Mad (Just Go Away)",
    "days": [],
    "request": false
  },
  {
    "artist": "Mötley Crüe",
    "title": "Kickstart My Heart",
    "days": [],
    "request": false
  },
  {
    "artist": "Mötley Crüe",
    "title": "Live Wire",
    "days": [],
    "request": false
  },
  {
    "artist": "Mötley Crüe",
    "title": "Home Sweet Home",
    "days": [],
    "request": false
  },
  {
    "artist": "Mötley Crüe",
    "title": "Shout at the Devil",
    "days": [],
    "request": false
  },
  {
    "artist": "Mötley Crüe",
    "title": "Wild Side",
    "days": [],
    "request": false
  },
  {
    "artist": "Mountain",
    "title": "Mississippi Queen",
    "days": [],
    "request": false
  },
  {
    "artist": "Mr. Big",
    "title": "Green-Tinted Sixties Mind",
    "days": [],
    "request": false
  },
  {
    "artist": "Mr. Big",
    "title": "Daddy, Brother, Lover Little Boy (the Electric Drill Song)",
    "days": [],
    "request": false
  },
  {
    "artist": "Mr. Big",
    "title": "To Be With You",
    "days": [],
    "request": false
  },
  {
    "artist": "Nirvana",
    "title": "Lithium",
    "days": [],
    "request": false
  },
  {
    "artist": "Nirvana",
    "title": "Smells Like Teen Spirit",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Oasis",
    "title": "Don't Look Back in Anger",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Oasis",
    "title": "Wonderwall",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Ozzy Osbourne",
    "title": "Crazy Train",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Ozzy Osbourne",
    "title": "Mr. Crowley",
    "days": [],
    "request": false
  },
  {
    "artist": "Pantera",
    "title": "Cowboys from Hell",
    "days": [],
    "request": false
  },
  {
    "artist": "Pat Benatar",
    "title": "Helter Skelter",
    "days": [],
    "request": false
  },
  {
    "artist": "Pink Floyd",
    "title": "Comfortably Numb",
    "days": [],
    "request": false
  },
  {
    "artist": "Pink Floyd",
    "title": "Have a Cigar",
    "days": [],
    "request": false
  },
  {
    "artist": "Pink Floyd",
    "title": "Time",
    "days": [],
    "request": false
  },
  {
    "artist": "Poison",
    "title": "Fallen Angel",
    "days": [],
    "request": false
  },
  {
    "artist": "Pretty Maids",
    "title": "Please Don't Leave Me",
    "days": [],
    "request": false
  },
  {
    "artist": "Prince & The Revolution",
    "title": "Purple Rain",
    "days": [],
    "request": false
  },
  {
    "artist": "Queen",
    "title": "Another One Bites the Dust",
    "days": [],
    "request": false
  },
  {
    "artist": "Queen",
    "title": "Keep Yourself Alive",
    "days": [],
    "request": false
  },
  {
    "artist": "Queen",
    "title": "Radio Ga Ga",
    "days": [],
    "request": false
  },
  {
    "artist": "Queen",
    "title": "Save Me",
    "days": [],
    "request": false
  },
  {
    "artist": "Queen",
    "title": "Tie Your Mother Down",
    "days": [],
    "request": false
  },
  {
    "artist": "Queen",
    "title": "We Will Rock You",
    "days": [],
    "request": false
  },
  {
    "artist": "Queen",
    "title": "We Are the Champions",
    "days": [],
    "request": false
  },
  {
    "artist": "Rainbow",
    "title": "Gates of Babylon",
    "days": [],
    "request": false
  },
  {
    "artist": "Rainbow",
    "title": "Kill the King",
    "days": [],
    "request": false
  },
  {
    "artist": "Rainbow",
    "title": "Long Live Rock 'n' Roll",
    "days": [],
    "request": false
  },
  {
    "artist": "Rainbow",
    "title": "I Surrender",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Rainbow",
    "title": "Man on the Silver Mountain",
    "days": [],
    "request": false
  },
  {
    "artist": "Rainbow",
    "title": "Since You Been Gone",
    "days": [],
    "request": false
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Around the World",
    "days": [],
    "request": false
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Can't Stop",
    "days": [],
    "request": false
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Californication",
    "days": [],
    "request": false
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Dani California",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Give It Away",
    "days": [],
    "request": false
  },
  {
    "artist": "Red Hot Chili Peppers",
    "title": "Higher Ground",
    "days": [],
    "request": false
  },
  {
    "artist": "Rick Derringer",
    "title": "Rock and Roll, Hoochie Koo",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Santana",
    "title": "Black Magic Woman / Gypsy Queen",
    "days": [],
    "request": false
  },
  {
    "artist": "Santana",
    "title": "Europa (Earth's Cry Heaven's Smile)",
    "days": [],
    "request": false
  },
  {
    "artist": "Santana",
    "title": "Oye Como Va",
    "days": [],
    "request": false
  },
  {
    "artist": "Santana",
    "title": "Samba Pa Ti",
    "days": [],
    "request": false
  },
  {
    "artist": "Santana",
    "title": "Soul Sacrifice",
    "days": [],
    "request": false
  },
  {
    "artist": "Sex Pistols",
    "title": "Anarchy in the U.K.",
    "days": [],
    "request": false
  },
  {
    "artist": "Shocking Blue",
    "title": "Hot Sand",
    "days": [],
    "request": false
  },
  {
    "artist": "Shocking Blue",
    "title": "Venus",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "SHOW-YA",
    "title": "限界LOVERS",
    "days": [],
    "request": false
  },
  {
    "artist": "Skid Row",
    "title": "Monkey Business",
    "days": [],
    "request": false
  },
  {
    "artist": "Skid Row",
    "title": "I Remember You",
    "days": [],
    "request": false
  },
  {
    "artist": "Steppenwolf",
    "title": "Born to Be Wild",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Survivor",
    "title": "Eye of the Tiger",
    "days": [],
    "request": false
  },
  {
    "artist": "T. Rex",
    "title": "20th Century Boy",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "The Beatles",
    "title": "While My Guitar Gently Weeps",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "The Doobie Brothers",
    "title": "China Grove",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "The Doobie Brothers",
    "title": "Jesus Is Just Alright",
    "days": [],
    "request": false
  },
  {
    "artist": "The Doobie Brothers",
    "title": "Listen to the Music",
    "days": [],
    "request": false
  },
  {
    "artist": "The Doobie Brothers",
    "title": "Long Train Runnin'",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "The Jimi Hendrix Experience",
    "title": "Voodoo Child (Slight Return)",
    "days": [],
    "request": false
  },
  {
    "artist": "The Jimi Hendrix Experience",
    "title": "Hey Joe",
    "days": [],
    "request": false
  },
  {
    "artist": "The Jimi Hendrix Experience",
    "title": "Purple Haze",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "The Michael Schenker Group",
    "title": "Armed and Ready",
    "days": [],
    "request": false
  },
  {
    "artist": "The Police",
    "title": "Every Breath You Take",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "The Rolling Stones",
    "title": "Brown Sugar",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "The Rolling Stones",
    "title": "Honky Tonk Women",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "The Rolling Stones",
    "title": "(I Can't Get No) Satisfaction",
    "days": [],
    "request": false
  },
  {
    "artist": "The Rolling Stones",
    "title": "Jumpin' Jack Flash",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "The Who",
    "title": "Summertime Blues",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Three Dog Night",
    "title": "One",
    "days": [],
    "request": false
  },
  {
    "artist": "Toto",
    "title": "99",
    "days": [],
    "request": false
  },
  {
    "artist": "Toto",
    "title": "Girl Goodbye",
    "days": [],
    "request": false
  },
  {
    "artist": "Toto",
    "title": "Goodbye Elenore",
    "days": [],
    "request": false
  },
  {
    "artist": "Toto",
    "title": "Georgy Porgy",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Toto",
    "title": "I'll Supply the Love",
    "days": [],
    "request": false
  },
  {
    "artist": "Toto",
    "title": "Hold the Line",
    "days": [],
    "request": false
  },
  {
    "artist": "Toto",
    "title": "Rosanna",
    "days": [],
    "request": false
  },
  {
    "artist": "Twisted Sister",
    "title": "We're Not Gonna Take It",
    "days": [],
    "request": false
  },
  {
    "artist": "UFO",
    "title": "Doctor Doctor",
    "days": [],
    "request": false
  },
  {
    "artist": "Van Halen",
    "title": "Ain't Talkin' 'Bout Love",
    "days": [],
    "request": false
  },
  {
    "artist": "Van Halen",
    "title": "Can't Stop Lovin' You",
    "days": [],
    "request": false
  },
  {
    "artist": "Van Halen",
    "title": "Best of Both Worlds",
    "days": [],
    "request": false
  },
  {
    "artist": "Van Halen",
    "title": "Eruption",
    "days": [],
    "request": false
  },
  {
    "artist": "Van Halen",
    "title": "Finish What Ya Started",
    "days": [],
    "request": false
  },
  {
    "artist": "Van Halen",
    "title": "Humans Being",
    "days": [],
    "request": false
  },
  {
    "artist": "Van Halen",
    "title": "Jump",
    "days": [],
    "request": false
  },
  {
    "artist": "Van Halen",
    "title": "Panama",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Van Halen",
    "title": "Runaround",
    "days": [],
    "request": false
  },
  {
    "artist": "Van Halen",
    "title": "(Oh) Pretty Woman",
    "days": [],
    "request": false
  },
  {
    "artist": "Van Halen",
    "title": "Runnin' with the Devil",
    "days": [],
    "request": false
  },
  {
    "artist": "Van Halen",
    "title": "You Really Got Me",
    "days": [
      "friday"
    ],
    "request": false
  },
  {
    "artist": "Whitesnake",
    "title": "Bad Boys",
    "days": [],
    "request": false
  },
  {
    "artist": "Whitesnake",
    "title": "Crying in the Rain",
    "days": [],
    "request": false
  },
  {
    "artist": "Whitesnake",
    "title": "Fool for Your Loving",
    "days": [],
    "request": false
  },
  {
    "artist": "Whitesnake",
    "title": "Forevermore",
    "days": [],
    "request": false
  },
  {
    "artist": "Whitesnake",
    "title": "Give Me All Your Love",
    "days": [],
    "request": false
  },
  {
    "artist": "Whitesnake",
    "title": "Here I Go Again",
    "days": [],
    "request": false
  },
  {
    "artist": "Whitesnake",
    "title": "Is This Love",
    "days": [],
    "request": false
  },
  {
    "artist": "Whitesnake",
    "title": "Looking for Love",
    "days": [],
    "request": false
  },
  {
    "artist": "Whitesnake",
    "title": "Slip of the Tongue",
    "days": [],
    "request": false
  },
  {
    "artist": "Whitesnake",
    "title": "Still of the Night",
    "days": [],
    "request": false
  },
  {
    "artist": "Yes",
    "title": "Roundabout",
    "days": [],
    "request": false
  },
  {
    "artist": "ZZ Top",
    "title": "Tush",
    "days": [],
    "request": false
  },
  {
    "artist": "アン・ルイス",
    "title": "あゝ無情",
    "days": [],
    "request": false
  },
  {
    "artist": "アン・ルイス",
    "title": "天使よ故郷を見よ",
    "days": [],
    "request": false
  },
  {
    "artist": "アン・ルイス",
    "title": "WOMAN",
    "days": [],
    "request": false
  },
  {
    "artist": "アン・ルイス",
    "title": "六本木心中",
    "days": [],
    "request": false
  }
];
