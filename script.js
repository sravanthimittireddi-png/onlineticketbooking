/**
 * ============================================================================
 * TicketBook - Online Ticket Booking Web Application
 * Core JavaScript Engine (Single Shared File for All 5 Pages)
 * SDC Frontend Project - 100% Vanilla JavaScript & LocalStorage
 * ============================================================================
 */

// ==========================================
// 1. DATA INITIALIZATION & 60 SAMPLE EVENTS
// ==========================================

const STORAGE_KEYS = {
  USERS: 'users',
  CURRENT_USER: 'currentUser',
  MALLS: 'malls',
  EVENTS: 'events',
  BOOKINGS: 'bookings',
  SELECTED_MALL: 'selectedMall',
  SELECTED_EVENT: 'selectedEvent',
  SELECTED_SEATS: 'selectedSeats'
};

// 60 Comprehensive Events: Exactly 10 Unique Events for Each of the 6 Malls
const ALL_60_EVENTS = [
  // -------------------------------------------------------------
  // MALL 1: PVR INOX Mall (10 Events)
  // -------------------------------------------------------------
  {
    id: 'EVT-PVR-1',
    title: 'Avengers: Secret Wars',
    category: 'Movies',
    description: 'Earth’s mightiest heroes clash across the multiverse in an epic cinematic battle for the survival of reality.',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-15',
    time: '07:30 PM',
    venue: 'Audi 1 (IMAX Laser)',
    mall: 'PVR INOX Mall',
    duration: '2h 45m',
    language: 'English, Hindi',
    price: 280,
    totalSeats: 40
  },
  {
    id: 'EVT-PVR-2',
    title: 'Avatar: Fire and Ash',
    category: 'Movies',
    description: 'Jake Sully and Neytiri encounter a fierce new volcanic clan of Na’vi in James Cameron’s visual spectacle.',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-16',
    time: '06:15 PM',
    venue: 'Audi 2 (Dolby Cinema)',
    mall: 'PVR INOX Mall',
    duration: '3h 10m',
    language: 'English, Hindi',
    price: 320,
    totalSeats: 40
  },
  {
    id: 'EVT-PVR-3',
    title: 'Interstellar: 70mm IMAX Special',
    category: 'Movies',
    description: 'Christopher Nolan’s legendary sci-fi masterpiece returns to the massive screen with uncompressed audio.',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-17',
    time: '08:45 PM',
    venue: 'Audi 3 (IMAX 70mm)',
    mall: 'PVR INOX Mall',
    duration: '2h 49m',
    language: 'English',
    price: 300,
    totalSeats: 40
  },
  {
    id: 'EVT-PVR-4',
    title: 'Spider-Man: Beyond the Spider-Verse',
    category: 'Movies',
    description: 'Miles Morales faces his greatest multiversal challenge yet as he fights to save both his family and friends.',
    poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-18',
    time: '04:00 PM',
    venue: 'Audi 4 (4DX 3D)',
    mall: 'PVR INOX Mall',
    duration: '2h 20m',
    language: 'English, Hindi',
    price: 250,
    totalSeats: 40
  },
  {
    id: 'EVT-PVR-5',
    title: 'Pushpa 2: The Rule — Grand Premiere',
    category: 'Movies',
    description: 'Allu Arjun returns as Pushpa Raj in the most anticipated action spectacle of the decade with high-octane mass action.',
    poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-19',
    time: '09:30 PM',
    venue: 'Audi 5 (Dolby Atmos)',
    mall: 'PVR INOX Mall',
    duration: '3h 05m',
    language: 'Hindi, Telugu',
    price: 350,
    totalSeats: 40
  },
  {
    id: 'EVT-PVR-6',
    title: 'Jailer 2: The Vengeance',
    category: 'Movies',
    description: 'Superstar Rajinikanth reprises his iconic role as Tiger Muthuvel Pandian in an explosive clash against syndicates.',
    poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-20',
    time: '06:45 PM',
    venue: 'Audi 6 (RGB Laser)',
    mall: 'PVR INOX Mall',
    duration: '2h 40m',
    language: 'Tamil, Hindi',
    price: 260,
    totalSeats: 40
  },
  {
    id: 'EVT-PVR-7',
    title: 'Comedy Night with Zakir Khan',
    category: 'Comedy',
    description: 'An evening of soulful humor, heartwarming nostalgia, and classic punchlines with India’s favorite storyteller.',
    poster: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-21',
    time: '08:00 PM',
    venue: 'PVR Grand Atrium Stage',
    mall: 'PVR INOX Mall',
    duration: '1h 45m',
    language: 'Hindi',
    price: 499,
    totalSeats: 40
  },
  {
    id: 'EVT-PVR-8',
    title: 'Sunburn Arena: Martin Garrix Live',
    category: 'Music',
    description: 'The world-renowned EDM pioneer delivers an electrifying live DJ set with laser displays and festival anthems.',
    poster: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-22',
    time: '05:30 PM',
    venue: 'Courtyard Amphitheatre',
    mall: 'PVR INOX Mall',
    duration: '4h 00m',
    language: 'English',
    price: 999,
    totalSeats: 40
  },
  {
    id: 'EVT-PVR-9',
    title: 'Arijit Singh Symphony Live Concert',
    category: 'Concerts',
    description: 'Experience an unforgettable night of soulful romantic melodies and grand orchestral arrangements.',
    poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-23',
    time: '06:30 PM',
    venue: 'Phoenix Concert Arena',
    mall: 'PVR INOX Mall',
    duration: '3h 30m',
    language: 'Hindi',
    price: 1250,
    totalSeats: 40
  },
  {
    id: 'EVT-PVR-10',
    title: 'IPL Championship Final: FanPark Live',
    category: 'Sports',
    description: 'Feel the stadium thunder on the massive 4K laser projection wall with live commentary and food trucks.',
    poster: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-24',
    time: '07:00 PM',
    venue: 'PVR Sports Dome',
    mall: 'PVR INOX Mall',
    duration: '4h 00m',
    language: 'English, Hindi',
    price: 450,
    totalSeats: 40
  },

  // -------------------------------------------------------------
  // MALL 2: City Center Mall (10 Events)
  // -------------------------------------------------------------
  {
    id: 'EVT-CC-1',
    title: 'Oppenheimer: The Director’s Cut',
    category: 'Movies',
    description: 'Christopher Nolan’s Oscar-winning biography featuring extended footage and thunderous acoustic sound design.',
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-15',
    time: '07:00 PM',
    venue: 'Screen 1 (Cinemark Laser)',
    mall: 'City Center Mall',
    duration: '3h 15m',
    language: 'English',
    price: 290,
    totalSeats: 40
  },
  {
    id: 'EVT-CC-2',
    title: 'Dune: Part Three — Messiah',
    category: 'Movies',
    description: 'Denis Villeneuve concludes the epic desert saga of Paul Atreides and the fate of Arrakis amidst rebellion.',
    poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-16',
    time: '08:30 PM',
    venue: 'Screen 2 (Laser Ultra)',
    mall: 'City Center Mall',
    duration: '2h 55m',
    language: 'English',
    price: 320,
    totalSeats: 40
  },
  {
    id: 'EVT-CC-3',
    title: 'The Batman: Part II',
    category: 'Movies',
    description: 'Robert Pattinson returns as Gotham’s detective navigating corruption and a sinister underworld conspiracy.',
    poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-17',
    time: '09:15 PM',
    venue: 'Screen 3 (Dolby Atmos)',
    mall: 'City Center Mall',
    duration: '2h 50m',
    language: 'English',
    price: 270,
    totalSeats: 40
  },
  {
    id: 'EVT-CC-4',
    title: 'Kalki 2898 AD: The Sequel',
    category: 'Movies',
    description: 'The futuristic mytho-sci-fi saga reaches explosive heights as the ancient prophecy unfolds in dystopian Kasi.',
    poster: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-18',
    time: '06:30 PM',
    venue: 'Screen 4 (ScreenX 270°)',
    mall: 'City Center Mall',
    duration: '3h 00m',
    language: 'Hindi, Telugu',
    price: 340,
    totalSeats: 40
  },
  {
    id: 'EVT-CC-5',
    title: 'Midnight Jazz & Blues Session',
    category: 'Music',
    description: 'An intimate evening of velvety saxophone solos, soulful bass lines, and smooth vintage vocals over city views.',
    poster: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-19',
    time: '09:00 PM',
    venue: 'Skyline Rooftop Lounge',
    mall: 'City Center Mall',
    duration: '2h 30m',
    language: 'English',
    price: 550,
    totalSeats: 40
  },
  {
    id: 'EVT-CC-6',
    title: 'Anubhav Singh Bassi: Bas Kar Bassi',
    category: 'Comedy',
    description: 'Bassi brings his hilarious standup special packed with wild college antics, law school trials, and everyday absurdity.',
    poster: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-20',
    time: '07:30 PM',
    venue: 'City Center Auditorium',
    mall: 'City Center Mall',
    duration: '1h 30m',
    language: 'Hindi',
    price: 450,
    totalSeats: 40
  },
  {
    id: 'EVT-CC-7',
    title: 'Coke Studio Global Live Showcase',
    category: 'Concerts',
    description: 'A vibrant fusion of folk, classical, and contemporary pop artists sharing one energetic live stage.',
    poster: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-21',
    time: '06:00 PM',
    venue: 'Central Atrium Arena',
    mall: 'City Center Mall',
    duration: '3h 15m',
    language: 'Hindi, Punjabi',
    price: 799,
    totalSeats: 40
  },
  {
    id: 'EVT-CC-8',
    title: 'The Merchant of Venice — Modern Theatre',
    category: 'Theatre',
    description: 'Shakespeare’s classic drama reimagined in a high-stakes corporate financial district with gripping performances.',
    poster: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-22',
    time: '07:00 PM',
    venue: 'BlackBox Playhouse',
    mall: 'City Center Mall',
    duration: '2h 15m',
    language: 'English',
    price: 400,
    totalSeats: 40
  },
  {
    id: 'EVT-CC-9',
    title: 'FIFA World Cup Qualifier: Fan Screening',
    category: 'Sports',
    description: 'Watch the fierce international football clash on the giant screen with surround audio and cheering squads.',
    poster: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-23',
    time: '08:00 PM',
    venue: 'Screen 5 Sports Club',
    mall: 'City Center Mall',
    duration: '2h 30m',
    language: 'English',
    price: 350,
    totalSeats: 40
  },
  {
    id: 'EVT-CC-10',
    title: 'Magic & Mind Reading Gala with Karan Singh',
    category: 'Live Shows',
    description: 'Mind-boggling psychological illusions, telepathy experiments, and interactive sleight-of-hand.',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-24',
    time: '05:00 PM',
    venue: 'Main Cultural Stage',
    mall: 'City Center Mall',
    duration: '1h 45m',
    language: 'English, Hindi',
    price: 399,
    totalSeats: 40
  },

  // -------------------------------------------------------------
  // MALL 3: Trend Mall (10 Events)
  // -------------------------------------------------------------
  {
    id: 'EVT-TR-1',
    title: 'Deadpool & Wolverine: The Extended Cut',
    category: 'Movies',
    description: 'Ryan Reynolds and Hugh Jackman team up in this wild, fourth-wall-breaking blockbuster packed with action.',
    poster: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-15',
    time: '08:00 PM',
    venue: 'Audi 1 (Laser 4K)',
    mall: 'Trend Mall',
    duration: '2h 15m',
    language: 'English, Hindi',
    price: 260,
    totalSeats: 40
  },
  {
    id: 'EVT-TR-2',
    title: 'Inception: 15th Anniversary Special',
    category: 'Movies',
    description: 'Relive the mind-bending dream heist that defined modern sci-fi cinema with Hans Zimmer’s booming score.',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-16',
    time: '06:45 PM',
    venue: 'Audi 2 (Dolby Atmos)',
    mall: 'Trend Mall',
    duration: '2h 28m',
    language: 'English',
    price: 240,
    totalSeats: 40
  },
  {
    id: 'EVT-TR-3',
    title: 'Fast & Furious: The Final Ride',
    category: 'Movies',
    description: 'Dominic Toretto and the crew reunite for the ultimate high-speed mission pushing cars and stunts to new limits.',
    poster: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-17',
    time: '09:30 PM',
    venue: 'Audi 3 (4DX)',
    mall: 'Trend Mall',
    duration: '2h 35m',
    language: 'English, Hindi',
    price: 260,
    totalSeats: 40
  },
  {
    id: 'EVT-TR-4',
    title: 'KGF Chapter 3: The Empire',
    category: 'Movies',
    description: 'The roaring chronicle of the gold fields returns with earth-shaking action, massive gunfire, and unstoppable bravado.',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-18',
    time: '07:15 PM',
    venue: 'Audi 4 (RGB Laser)',
    mall: 'Trend Mall',
    duration: '3h 10m',
    language: 'Hindi, Kannada',
    price: 350,
    totalSeats: 40
  },
  {
    id: 'EVT-TR-5',
    title: 'EDM Madness: Alan Walker Tour',
    category: 'Music',
    description: 'Electronic music superstar Alan Walker performs his iconic synth anthems with stunning stage visuals.',
    poster: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-19',
    time: '05:00 PM',
    venue: 'Trend Open Grounds',
    mall: 'Trend Mall',
    duration: '4h 00m',
    language: 'English',
    price: 899,
    totalSeats: 40
  },
  {
    id: 'EVT-TR-6',
    title: 'Vir Das: Mind Fool Comedy Tour',
    category: 'Comedy',
    description: 'Emmy-winning comedian Vir Das takes the stage with sharp global perspectives and witty observational banter.',
    poster: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-20',
    time: '08:30 PM',
    venue: 'Trend Grand Hall',
    mall: 'Trend Mall',
    duration: '1h 45m',
    language: 'English',
    price: 600,
    totalSeats: 40
  },
  {
    id: 'EVT-TR-7',
    title: 'Bollywood Retro 90s Night Live',
    category: 'Concerts',
    description: 'Relive the golden nineties with a 12-piece live orchestra singing Rahman, Sanu, and iconic chartbusters.',
    poster: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-21',
    time: '07:00 PM',
    venue: 'Boulevard Stage',
    mall: 'Trend Mall',
    duration: '2h 45m',
    language: 'Hindi',
    price: 450,
    totalSeats: 40
  },
  {
    id: 'EVT-TR-8',
    title: 'Romeo & Juliet: Contemporary Musical',
    category: 'Theatre',
    description: 'Verona’s classic romance retold with contemporary rock orchestration, dazzling choreography, and passionate acting.',
    poster: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-22',
    time: '06:30 PM',
    venue: 'Trend Arts Theatre',
    mall: 'Trend Mall',
    duration: '2h 10m',
    language: 'English',
    price: 380,
    totalSeats: 40
  },
  {
    id: 'EVT-TR-9',
    title: 'Pro Kabaddi League: Finals Fan Arena',
    category: 'Sports',
    description: 'High-flying tackles and lightning raids live on the multiplex screen with pumped-up crowd commentary.',
    poster: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-23',
    time: '07:30 PM',
    venue: 'Sports Hub Screen 5',
    mall: 'Trend Mall',
    duration: '2h 15m',
    language: 'Hindi, English',
    price: 300,
    totalSeats: 40
  },
  {
    id: 'EVT-TR-10',
    title: 'Mentalism & Telepathy: The Mind Lab',
    category: 'Live Shows',
    description: 'An interactive demonstration of impossible memory feats, psychological influence, and uncanny mind reading.',
    poster: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-24',
    time: '05:30 PM',
    venue: 'Studio Screen 6',
    mall: 'Trend Mall',
    duration: '1h 30m',
    language: 'English, Hindi',
    price: 350,
    totalSeats: 40
  },

  // -------------------------------------------------------------
  // MALL 4: Central Plaza (10 Events)
  // -------------------------------------------------------------
  {
    id: 'EVT-CP-1',
    title: 'Gladiator II: Epic Arena Premiere',
    category: 'Movies',
    description: 'Ridley Scott returns to ancient Rome as Lucius enters the Colosseum to avenge his lineage in gladiatorial warfare.',
    poster: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-15',
    time: '07:30 PM',
    venue: 'Regal Audi 1',
    mall: 'Central Plaza',
    duration: '2h 40m',
    language: 'English',
    price: 290,
    totalSeats: 40
  },
  {
    id: 'EVT-CP-2',
    title: 'The Dark Knight: IMAX Trilogy Marathon',
    category: 'Movies',
    description: 'Christopher Nolan’s unmatched superhero trilogy presented in crystal-clear IMAX digital projection and audio.',
    poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-16',
    time: '05:00 PM',
    venue: 'IMAX Hall A',
    mall: 'Central Plaza',
    duration: '5h 30m',
    language: 'English',
    price: 380,
    totalSeats: 40
  },
  {
    id: 'EVT-CP-3',
    title: 'Mission: Impossible — Final Reckoning',
    category: 'Movies',
    description: 'Tom Cruise performs death-defying aerial and underwater stunts in the pulse-pounding conclusion to Ethan Hunt.',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-17',
    time: '08:15 PM',
    venue: 'Regal Audi 2',
    mall: 'Central Plaza',
    duration: '2h 45m',
    language: 'English, Hindi',
    price: 280,
    totalSeats: 40
  },
  {
    id: 'EVT-CP-4',
    title: 'Sholay 4K: 50th Golden Anniversary',
    category: 'Movies',
    description: 'Indian cinema’s greatest action epic digitally restored frame-by-frame with immersive 7.1 surround sound audio.',
    poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-18',
    time: '06:00 PM',
    venue: 'Heritage Screen',
    mall: 'Central Plaza',
    duration: '3h 24m',
    language: 'Hindi',
    price: 220,
    totalSeats: 40
  },
  {
    id: 'EVT-CP-5',
    title: 'Mystic Sufi & Qawwali Ensemble',
    category: 'Music',
    description: 'Spiritual poetry, harmoniums, and hypnotic dholak beats create a transcendent evening of traditional Sufi music.',
    poster: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-19',
    time: '07:00 PM',
    venue: 'Central Courtyard Atrium',
    mall: 'Central Plaza',
    duration: '2h 30m',
    language: 'Urdu, Hindi',
    price: 500,
    totalSeats: 40
  },
  {
    id: 'EVT-CP-6',
    title: 'Abhishek Upmanyu: Jealous of Sabziwala',
    category: 'Comedy',
    description: 'Rapid-fire pacing and uniquely eccentric observations on adulthood, childhood fears, and awkward social encounters.',
    poster: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-20',
    time: '08:00 PM',
    venue: 'Plaza Grand Auditorium',
    mall: 'Central Plaza',
    duration: '1h 30m',
    language: 'Hindi',
    price: 550,
    totalSeats: 40
  },
  {
    id: 'EVT-CP-7',
    title: 'Prateek Kuhad: Silhouettes Acoustic',
    category: 'Concerts',
    description: 'The celebrated indie singer-songwriter delivers an intimate, heart-stirring acoustic set of classic melodies.',
    poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-21',
    time: '06:30 PM',
    venue: 'Plaza Open Amphitheatre',
    mall: 'Central Plaza',
    duration: '2h 15m',
    language: 'English, Hindi',
    price: 750,
    totalSeats: 40
  },
  {
    id: 'EVT-CP-8',
    title: 'Mughal-e-Azam: The Grand Musical',
    category: 'Theatre',
    description: 'India’s most lavish stage production featuring classical Kathak dancers, royal costumes, and live singing.',
    poster: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-22',
    time: '07:00 PM',
    venue: 'Royal Opera Hall',
    mall: 'Central Plaza',
    duration: '2h 45m',
    language: 'Hindi, Urdu',
    price: 650,
    totalSeats: 40
  },
  {
    id: 'EVT-CP-9',
    title: 'Wimbledon Finals: Grand Slam Screening',
    category: 'Sports',
    description: 'Grass-court tennis drama unfolds live on giant cinema screens with traditional strawberries and luxury seats.',
    poster: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-23',
    time: '06:00 PM',
    venue: 'Sports Bar Audi 3',
    mall: 'Central Plaza',
    duration: '3h 30m',
    language: 'English',
    price: 400,
    totalSeats: 40
  },
  {
    id: 'EVT-CP-10',
    title: 'Dastaan-e-Hind: Classical Storytelling',
    category: 'Live Shows',
    description: 'Master Dastangos revive the ancient Persian and Urdu art of oral storytelling with spellbinding poetry and emotion.',
    poster: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-24',
    time: '05:00 PM',
    venue: 'Artisan Heritage Lounge',
    mall: 'Central Plaza',
    duration: '1h 45m',
    language: 'Hindi, Urdu',
    price: 300,
    totalSeats: 40
  },

  // -------------------------------------------------------------
  // MALL 5: Grand Galaxy Mall (10 Events)
  // -------------------------------------------------------------
  {
    id: 'EVT-GG-1',
    title: 'Tron: Ares 3D Special Experience',
    category: 'Movies',
    description: 'Enter the glowing digital grid as a sophisticated program crosses into the human world in a cyberpunk adventure.',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-15',
    time: '07:15 PM',
    venue: 'Galaxy 3D Max 1',
    mall: 'Grand Galaxy Mall',
    duration: '2h 15m',
    language: 'English',
    price: 300,
    totalSeats: 40
  },
  {
    id: 'EVT-GG-2',
    title: 'Godzilla x Kong: Super Titan War',
    category: 'Movies',
    description: 'The colossal Titan alliance faces a terrifying hollow-earth threat in an earth-shattering clash of primitive fury.',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-16',
    time: '08:30 PM',
    venue: 'Audi 2 (Dolby Cinema)',
    mall: 'Grand Galaxy Mall',
    duration: '2h 10m',
    language: 'English, Hindi',
    price: 270,
    totalSeats: 40
  },
  {
    id: 'EVT-GG-3',
    title: 'Kantara: Chapter 1 — The Legend',
    category: 'Movies',
    description: 'Rishab Shetty returns to the mystical folklore of coastal Karnataka in this grand mythological prequel of divine power.',
    poster: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-17',
    time: '09:00 PM',
    venue: 'Audi 3 (Dolby Atmos)',
    mall: 'Grand Galaxy Mall',
    duration: '2h 50m',
    language: 'Hindi, Kannada',
    price: 320,
    totalSeats: 40
  },
  {
    id: 'EVT-GG-4',
    title: 'John Wick: Chapter 5 Special Edition',
    category: 'Movies',
    description: 'Keanu Reeves’ legendary assassin returns with gun-fu mastery, neon underworld syndicates, and relentless action.',
    poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-18',
    time: '06:45 PM',
    venue: 'Audi 4 (Laser Ultra)',
    mall: 'Grand Galaxy Mall',
    duration: '2h 40m',
    language: 'English',
    price: 280,
    totalSeats: 40
  },
  {
    id: 'EVT-GG-5',
    title: 'Rock & Indie Fest: Thermal And A Quarter',
    category: 'Music',
    description: 'Bangalore’s finest progressive rock veterans deliver searing guitar solos, clever lyrics, and infectious rhythm grooves.',
    poster: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-19',
    time: '06:00 PM',
    venue: 'Galaxy Outdoor Arena',
    mall: 'Grand Galaxy Mall',
    duration: '3h 30m',
    language: 'English',
    price: 600,
    totalSeats: 40
  },
  {
    id: 'EVT-GG-6',
    title: 'Samay Raina: Unfiltered Comedy Riot',
    category: 'Comedy',
    description: 'Dark humor, unfiltered crowd work, and chess-level wit from India’s most viral internet comedian.',
    poster: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-20',
    time: '08:30 PM',
    venue: 'Galaxy Convention Hall',
    mall: 'Grand Galaxy Mall',
    duration: '1h 45m',
    language: 'Hindi',
    price: 500,
    totalSeats: 40
  },
  {
    id: 'EVT-GG-7',
    title: 'Armaan Malik: Live in Whitefield',
    category: 'Concerts',
    description: 'Chart-topping pop prince Armaan Malik performs romantic ballads, high-energy dance tracks, and multilingual hits.',
    poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-21',
    time: '06:30 PM',
    venue: 'TechZone Concert Ground',
    mall: 'Grand Galaxy Mall',
    duration: '3h 00m',
    language: 'Hindi, English',
    price: 850,
    totalSeats: 40
  },
  {
    id: 'EVT-GG-8',
    title: 'Hamlet: Modern Cyberpunk Edition',
    category: 'Theatre',
    description: 'Shakespeare’s prince in a high-tech corporate surveillance state with interactive digital sets and gripping drama.',
    poster: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-22',
    time: '07:00 PM',
    venue: 'Galaxy Experimental Stage',
    mall: 'Grand Galaxy Mall',
    duration: '2h 15m',
    language: 'English',
    price: 420,
    totalSeats: 40
  },
  {
    id: 'EVT-GG-9',
    title: 'Premier League: Super Sunday Derby',
    category: 'Sports',
    description: 'Arsenal vs Manchester City live on the big screen with booming audio, rival fan clubs, and football food combos.',
    poster: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-23',
    time: '08:00 PM',
    venue: 'Fan Lounge Audi 5',
    mall: 'Grand Galaxy Mall',
    duration: '2h 30m',
    language: 'English',
    price: 350,
    totalSeats: 40
  },
  {
    id: 'EVT-GG-10',
    title: 'Broadway Tap & Jazz Spectacular',
    category: 'Live Shows',
    description: 'Dazzling rhythmic footwork, roaring jazz brass, and vintage Broadway chorus routines in an exhilarating live revue.',
    poster: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-24',
    time: '05:00 PM',
    venue: 'Audi 6 Main Theatre',
    mall: 'Grand Galaxy Mall',
    duration: '2h 00m',
    language: 'English',
    price: 480,
    totalSeats: 40
  },

  // -------------------------------------------------------------
  // MALL 6: Metro Square (10 Events)
  // -------------------------------------------------------------
  {
    id: 'EVT-MS-1',
    title: 'Blade Runner 2099: Special Preview',
    category: 'Movies',
    description: 'Replicant detectives, rain-soaked neon spires, and synthetic souls collide in this mesmerizing sci-fi neo-noir.',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-15',
    time: '07:45 PM',
    venue: 'Metro Screen 1 (Laser 4K)',
    mall: 'Metro Square',
    duration: '2h 35m',
    language: 'English',
    price: 310,
    totalSeats: 40
  },
  {
    id: 'EVT-MS-2',
    title: 'The Matrix: 4K 25th Anniversary',
    category: 'Movies',
    description: 'Keanu Reeves and Carrie-Anne Moss dodge bullets and bend reality in the revolutionary sci-fi action film.',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-16',
    time: '06:30 PM',
    venue: 'Metro Screen 2 (Dolby Atmos)',
    mall: 'Metro Square',
    duration: '2h 16m',
    language: 'English',
    price: 260,
    totalSeats: 40
  },
  {
    id: 'EVT-MS-3',
    title: 'Baahubali: Crown of Blood Theatrical',
    category: 'Movies',
    description: 'The animated epic of Mahishmati kingdom brought to the big screen with grand battles and royal valor.',
    poster: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-17',
    time: '08:15 PM',
    venue: 'Metro Screen 3',
    mall: 'Metro Square',
    duration: '2h 20m',
    language: 'Telugu, Hindi',
    price: 280,
    totalSeats: 40
  },
  {
    id: 'EVT-MS-4',
    title: 'Jurassic World: Extinction Reborn',
    category: 'Movies',
    description: 'Genetically resurrected prehistoric apex predators reclaim modern territory in a terrifying survival thriller.',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-18',
    time: '04:30 PM',
    venue: 'Metro Screen 4 (4DX 3D)',
    mall: 'Metro Square',
    duration: '2h 10m',
    language: 'English, Hindi',
    price: 300,
    totalSeats: 40
  },
  {
    id: 'EVT-MS-5',
    title: 'Electronic Pulse: Nucleya Live',
    category: 'Music',
    description: 'India’s bass raja Nucleya ignites the skydeck with earth-shattering street beats, south Indian horns, and drops.',
    poster: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-19',
    time: '06:00 PM',
    venue: 'Metro Skydeck Arena',
    mall: 'Metro Square',
    duration: '3h 30m',
    language: 'Hindi, English',
    price: 750,
    totalSeats: 40
  },
  {
    id: 'EVT-MS-6',
    title: 'Kenny Sebastian: Professor of Logic',
    category: 'Comedy',
    description: 'Kenny unpacks everyday middle-class quirks, tea etiquette, and relationship paradoxes with musical interludes.',
    poster: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-20',
    time: '08:00 PM',
    venue: 'Boulevard Auditorium',
    mall: 'Metro Square',
    duration: '1h 30m',
    language: 'English',
    price: 550,
    totalSeats: 40
  },
  {
    id: 'EVT-MS-7',
    title: 'Shreya Ghoshal: Melodies Across Decades',
    category: 'Concerts',
    description: 'Four-time National Award winner Shreya Ghoshal serenades fans with timeless romantic classics and vocal perfection.',
    poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-21',
    time: '06:30 PM',
    venue: 'Grand Concert Hall',
    mall: 'Metro Square',
    duration: '3h 15m',
    language: 'Hindi, Telugu',
    price: 1100,
    totalSeats: 40
  },
  {
    id: 'EVT-MS-8',
    title: 'Court Martial: Acclaimed Hindi Drama',
    category: 'Theatre',
    description: 'Swadesh Deepak’s hard-hitting courtroom play exposing systemic hierarchies through a gripping military trial.',
    poster: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-22',
    time: '07:00 PM',
    venue: 'Metro Drama Hall',
    mall: 'Metro Square',
    duration: '2h 00m',
    language: 'Hindi',
    price: 350,
    totalSeats: 40
  },
  {
    id: 'EVT-MS-9',
    title: 'NBA Finals 2026: Live Cinema Broadcast',
    category: 'Sports',
    description: 'Championship basketball at breakneck speed with arena sound, slam dunks, and breakfast fan combos.',
    poster: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-23',
    time: '06:30 AM',
    venue: 'Sports Arena Audi 5',
    mall: 'Metro Square',
    duration: '3h 00m',
    language: 'English',
    price: 399,
    totalSeats: 40
  },
  {
    id: 'EVT-MS-10',
    title: 'The Illusionists: Impossible Live Feats',
    category: 'Live Shows',
    description: 'Escapology, razor blade swallowing, and impossible predictions live on stage with audience participation.',
    poster: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80',
    date: '2026-10-24',
    time: '05:00 PM',
    venue: 'Studio Screen 6',
    mall: 'Metro Square',
    duration: '1h 45m',
    language: 'English, Hindi',
    price: 320,
    totalSeats: 40
  }
];

// Seed sample malls and all 60 events if not present or incomplete
function seedInitialData() {
  // 1. Seed Users (Include Demo Admin and Demo Users)
  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    const initialUsers = [
      {
        id: 'USR-ADM-1',
        name: 'System Admin',
        email: 'admin@ticketbook.com',
        phone: '9876543210',
        password: 'admin123',
        role: 'admin',
        createdAt: '2026-01-10'
      },
      {
        id: 'USR-DEMO-1',
        name: 'Rahul Sharma',
        email: 'user@ticketbook.com',
        phone: '9123456780',
        password: 'user123',
        role: 'user',
        createdAt: '2026-02-15'
      },
      {
        id: 'USR-DEMO-2',
        name: 'Priya Patel',
        email: 'priya@ticketbook.com',
        phone: '9988776655',
        password: 'user123',
        role: 'user',
        createdAt: '2026-03-01'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(initialUsers));
  }

  // 2. Seed 6 Malls (Per Specification)
  if (!localStorage.getItem(STORAGE_KEYS.MALLS)) {
    const initialMalls = [
      {
        id: 'MALL-1',
        name: 'PVR INOX Mall',
        location: 'Phoenix Marketcity, Kurla',
        screens: 8,
        eventsCount: 10,
        image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&auto=format&fit=crop&q=80'
      },
      {
        id: 'MALL-2',
        name: 'City Center Mall',
        location: 'Bandra West, Downtown',
        screens: 6,
        eventsCount: 10,
        image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd301?w=600&auto=format&fit=crop&q=80'
      },
      {
        id: 'MALL-3',
        name: 'Trend Mall',
        location: 'MG Road, City Centre',
        screens: 10,
        eventsCount: 10,
        image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=600&auto=format&fit=crop&q=80'
      },
      {
        id: 'MALL-4',
        name: 'Central Plaza',
        location: 'Connaught Place',
        screens: 5,
        eventsCount: 10,
        image: 'https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?w=600&auto=format&fit=crop&q=80'
      },
      {
        id: 'MALL-5',
        name: 'Grand Galaxy Mall',
        location: 'Whitefield Tech Zone',
        screens: 7,
        eventsCount: 10,
        image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&auto=format&fit=crop&q=80'
      },
      {
        id: 'MALL-6',
        name: 'Metro Square',
        location: 'HiTech City Boulevard',
        screens: 9,
        eventsCount: 10,
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.MALLS, JSON.stringify(initialMalls));
  }

  // 3. Seed ALL 60 Events (10 unique events per mall)
  // Ensure that if existing stored events count < 60, we seed the complete 60 events catalog
  const storedEvents = JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS) || '[]');
  if (!storedEvents || storedEvents.length < 60) {
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(ALL_60_EVENTS));
  }

  // 4. Seed Initial Bookings for Demonstration
  if (!localStorage.getItem(STORAGE_KEYS.BOOKINGS)) {
    const initialBookings = [
      {
        id: 'TB-928172',
        userEmail: 'priya@ticketbook.com',
        userName: 'Priya Patel',
        eventId: 'EVT-PVR-1',
        eventTitle: 'Avengers: Secret Wars',
        mall: 'PVR INOX Mall',
        venue: 'Audi 1 (IMAX Laser)',
        date: '2026-10-15',
        time: '07:30 PM',
        seats: ['B3', 'B4'],
        ticketPrice: 280,
        convenienceFee: 30,
        totalAmount: 590,
        status: 'Confirmed',
        paymentMethod: 'UPI (GPay)',
        bookedAt: '2026-10-01T14:32:00.000Z'
      },
      {
        id: 'TB-847291',
        userEmail: 'user@ticketbook.com',
        userName: 'Rahul Sharma',
        eventId: 'EVT-CC-6',
        eventTitle: 'Anubhav Singh Bassi: Bas Kar Bassi',
        mall: 'City Center Mall',
        venue: 'City Center Auditorium',
        date: '2026-10-20',
        time: '07:30 PM',
        seats: ['C1', 'C2'],
        ticketPrice: 450,
        convenienceFee: 30,
        totalAmount: 930,
        status: 'Confirmed',
        paymentMethod: 'Credit Card',
        bookedAt: '2026-10-02T10:15:00.000Z'
      }
    ];
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(initialBookings));
  }

  // Ensure default selected mall
  if (!localStorage.getItem(STORAGE_KEYS.SELECTED_MALL)) {
    const malls = JSON.parse(localStorage.getItem(STORAGE_KEYS.MALLS));
    if (malls && malls.length > 0) {
      localStorage.setItem(STORAGE_KEYS.SELECTED_MALL, JSON.stringify(malls[0]));
    }
  }

  // Ensure selected seats is an array
  if (!localStorage.getItem(STORAGE_KEYS.SELECTED_SEATS)) {
    localStorage.setItem(STORAGE_KEYS.SELECTED_SEATS, JSON.stringify([]));
  }
}

// Run initial seed on load
seedInitialData();

// ==========================================
// 2. HELPER UTILITIES & NOTIFICATIONS
// ==========================================

function showToast(title, message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    warning: '⚠️'
  };

  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || 'ℹ️'}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div>${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function getCurrentUser() {
  const userJson = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  return userJson ? JSON.parse(userJson) : null;
}

function getSelectedMall() {
  const mallJson = localStorage.getItem(STORAGE_KEYS.SELECTED_MALL);
  return mallJson ? JSON.parse(mallJson) : null;
}

function getSelectedEvent() {
  const eventJson = localStorage.getItem(STORAGE_KEYS.SELECTED_EVENT);
  return eventJson ? JSON.parse(eventJson) : null;
}

function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId);
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('nav-menu');
  if (menu) {
    menu.classList.toggle('mobile-open');
  }
}

// ==========================================
// 3. AUTHENTICATION (USER & ADMIN BOTH WORK)
// ==========================================

function handleLoginSubmit(event) {
  event.preventDefault();
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const roleInput = document.getElementById('login-role');
  const errorDiv = document.getElementById('login-error-msg');

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();
  const role = roleInput.value;

  if (errorDiv) {
    errorDiv.classList.remove('visible');
    errorDiv.innerText = '';
  }

  const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];

  // ========================================
  // CASE A: ADMIN LOGIN
  // ========================================
  if (role === 'admin') {
    // 1. Check master admin credentials OR registered admin user
    const isMasterAdmin = (email === 'admin@ticketbook.com' && password === 'admin123');
    const registeredAdmin = users.find(u => u.email.toLowerCase() === email && u.password === password && u.role === 'admin');

    if (isMasterAdmin || registeredAdmin) {
      const adminSession = {
        id: registeredAdmin ? registeredAdmin.id : 'USR-ADM-1',
        name: registeredAdmin ? registeredAdmin.name : 'System Admin',
        email: email,
        role: 'admin'
      };
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(adminSession));
      showToast('Admin Authenticated', 'Access granted! Opening Admin Dashboard...', 'success');
      setTimeout(() => {
        window.location.href = 'admin.html';
      }, 600);
      return;
    }

    // Check if user is registered but as a normal user
    const isNormalUser = users.find(u => u.email.toLowerCase() === email && u.password === password);
    if (isNormalUser && isNormalUser.role !== 'admin') {
      if (errorDiv) {
        errorDiv.innerText = 'Access Denied: This is a standard User account. Please select "User" role to login.';
        errorDiv.classList.add('visible');
      }
      showToast('Access Denied', 'This account does not have Admin privileges.', 'error');
      return;
    }

    if (errorDiv) {
      errorDiv.innerText = 'Invalid Admin credentials! Demo: admin@ticketbook.com / admin123';
      errorDiv.classList.add('visible');
    }
    showToast('Login Failed', 'Incorrect Admin credentials.', 'error');
    return;
  }

  // ========================================
  // CASE B: NORMAL USER LOGIN
  // ========================================
  const foundUser = users.find(u => u.email.toLowerCase() === email && u.password === password);

  if (foundUser) {
    if (foundUser.role === 'admin') {
      if (errorDiv) {
        errorDiv.innerText = 'This is an Administrator account! Please select "Admin" role to login.';
        errorDiv.classList.add('visible');
      }
      showToast('Role Notice', 'Please select Admin role to access Admin Dashboard.', 'warning');
      return;
    }

    const sessionUser = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      phone: foundUser.phone,
      role: 'user'
    };

    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(sessionUser));
    showToast('Login Successful', `Welcome to TicketBook, ${sessionUser.name}!`, 'success');

    // Smooth transition to Mall selection or Home
    updateHeaderUI();
    const selectedMall = getSelectedMall();
    if (selectedMall) {
      navigateTo('home');
    } else {
      navigateTo('malls');
    }
  } else {
    if (errorDiv) {
      errorDiv.innerText = 'Invalid email or password. Please verify your details or Sign Up.';
      errorDiv.classList.add('visible');
    }
    showToast('Login Failed', 'User not found or password incorrect.', 'error');
  }
}

function fillDemoCredentials(role) {
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const roleInput = document.getElementById('login-role');

  if (role === 'admin') {
    if (emailInput) emailInput.value = 'admin@ticketbook.com';
    if (passwordInput) passwordInput.value = 'admin123';
    if (roleInput) roleInput.value = 'admin';
  } else {
    if (emailInput) emailInput.value = 'user@ticketbook.com';
    if (passwordInput) passwordInput.value = 'user123';
    if (roleInput) roleInput.value = 'user';
  }
}

function handleSignupSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim().toLowerCase();
  const phone = document.getElementById('signup-phone').value.trim();
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;
  const errorDiv = document.getElementById('signup-error-msg');

  if (errorDiv) {
    errorDiv.classList.remove('visible');
    errorDiv.innerText = '';
  }

  // Validations
  if (!name || !email || !phone || !password || !confirmPassword) {
    if (errorDiv) {
      errorDiv.innerText = 'All fields are strictly required!';
      errorDiv.classList.add('visible');
    }
    return;
  }

  if (password.length < 6) {
    if (errorDiv) {
      errorDiv.innerText = 'Password must be at least 6 characters long!';
      errorDiv.classList.add('visible');
    }
    return;
  }

  if (password !== confirmPassword) {
    if (errorDiv) {
      errorDiv.innerText = 'Passwords do not match!';
      errorDiv.classList.add('visible');
    }
    return;
  }

  // Duplicate email prevention
  const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
  const exists = users.some(u => u.email.toLowerCase() === email);
  if (exists) {
    if (errorDiv) {
      errorDiv.innerText = 'An account with this email already exists!';
      errorDiv.classList.add('visible');
    }
    showToast('Registration Error', 'Email already registered. Please login.', 'error');
    return;
  }

  // Create and save new user
  const newUser = {
    id: 'USR-' + Date.now(),
    name,
    email,
    phone,
    password,
    role: 'user',
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));

  showToast('Account Created!', 'Signup successful! Redirecting to login...', 'success');

  // Redirect to index.html with registered email for smooth, realistic login
  setTimeout(() => {
    window.location.href = 'index.html?registered=' + encodeURIComponent(newUser.email);
  }, 1000);
}

function logoutUser() {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  localStorage.setItem(STORAGE_KEYS.SELECTED_SEATS, JSON.stringify([]));
  showToast('Logged Out', 'You have been safely signed out.', 'info');

  if (window.location.pathname.includes('admin.html') || window.location.pathname.includes('signup.html')) {
    window.location.href = 'index.html';
  } else {
    updateHeaderUI();
    navigateTo('login');
  }
}

// Forgot Password Support
function openForgotPasswordModal(event) {
  if (event) event.preventDefault();
  const modal = document.getElementById('forgot-password-modal');
  if (modal) modal.classList.add('active');
}

function closeForgotPasswordModal() {
  const modal = document.getElementById('forgot-password-modal');
  if (modal) modal.classList.remove('active');
}

function handleForgotPasswordSubmit(event) {
  event.preventDefault();
  const emailInput = document.getElementById('reset-email');
  const passwordInput = document.getElementById('reset-new-password');
  const email = emailInput.value.trim().toLowerCase();
  const newPassword = passwordInput.value;

  const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
  const user = users.find(u => u.email.toLowerCase() === email);

  if (!user) {
    showToast('Reset Failed', 'No account found with this email address.', 'error');
    return;
  }

  user.password = newPassword;
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  showToast('Password Updated', 'Your password has been reset. You can now login.', 'success');
  closeForgotPasswordModal();
}

// Update Top Navigation Bar according to login state
function updateHeaderUI() {
  const header = document.getElementById('main-header');
  const currentUser = getCurrentUser();
  const selectedMall = getSelectedMall();

  if (!header) return;

  if (currentUser) {
    header.style.display = 'block';
    const nameEl = document.getElementById('user-display-name');
    const avatarEl = document.getElementById('user-avatar-initial');
    const mallNameEl = document.getElementById('nav-mall-name');
    const adminLink = document.getElementById('admin-portal-link');

    if (nameEl) nameEl.innerText = currentUser.name || currentUser.email;
    if (avatarEl) avatarEl.innerText = (currentUser.name ? currentUser.name[0] : 'U').toUpperCase();
    if (mallNameEl) mallNameEl.innerText = selectedMall ? selectedMall.name : 'Select Mall';

    if (adminLink) {
      adminLink.style.display = currentUser.role === 'admin' ? 'inline-flex' : 'none';
    }
  } else {
    header.style.display = 'none';
  }
}

// ==========================================
// 4. SINGLE PAGE NAVIGATION (index.html)
// ==========================================

function navigateTo(viewName) {
  const currentUser = getCurrentUser();

  // Guard: If not logged in and requesting protected view, force login view
  if (!currentUser && viewName !== 'login') {
    showToast('Login Required', 'Please sign in to continue.', 'warning');
    viewName = 'login';
  }

  // Close mobile nav if open
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) navMenu.classList.remove('mobile-open');

  // Hide all views
  const sections = document.querySelectorAll('.view-section');
  sections.forEach(sec => sec.classList.remove('active'));

  // Show target view
  const targetSec = document.getElementById(`view-${viewName}`);
  if (targetSec) {
    targetSec.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update navigation active states
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  const activeLink = document.getElementById(`nav-link-${viewName}`);
  if (activeLink) activeLink.classList.add('active');

  // Trigger view data loaders
  switch (viewName) {
    case 'malls':
      loadMalls();
      break;
    case 'home':
      loadHomeSection();
      break;
    case 'events':
      loadEvents();
      break;
    case 'event-details':
      renderEventDetails();
      break;
    case 'seats':
      loadSeats();
      break;
    case 'payment':
      setupPaymentView();
      break;
    case 'ticket':
      break;
    case 'bookings':
      loadBookings();
      break;
    default:
      break;
  }

  updateHeaderUI();
}

// ==========================================
// 5. MALL SELECTION ENGINE
// ==========================================

function loadMalls() {
  const container = document.getElementById('malls-container');
  if (!container) return;

  const malls = JSON.parse(localStorage.getItem(STORAGE_KEYS.MALLS)) || [];
  const currentSelected = getSelectedMall();
  const allEvents = JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS)) || [];

  container.innerHTML = malls.map(mall => {
    const isSelected = currentSelected && currentSelected.id === mall.id;
    // Count exact events for this mall
    const mallEventsCount = allEvents.filter(e => e.mall === mall.name).length || 10;

    return `
      <div class="mall-card ${isSelected ? 'selected-mall' : ''}">
        <div class="mall-image-wrapper">
          <img src="${mall.image}" alt="${mall.name}" class="mall-image" onerror="this.src='https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600'">
          <span class="mall-screens-badge">🎬 ${mall.screens} Screens</span>
        </div>
        <div class="mall-body">
          <h3 class="mall-title">${mall.name}</h3>
          <div class="mall-location">📍 ${mall.location}</div>
          <div class="mall-stats">
            <span>⚡ ${mallEventsCount} Exclusive Shows</span>
            <span>🅿️ Valet & Parking</span>
          </div>
          <div class="mall-footer">
            <button class="btn btn-primary btn-block" onclick="selectMall('${mall.id}')">
              ${isSelected ? '✓ Mall Active — Explore 10 Shows' : 'Explore Mall →'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function selectMall(mallId) {
  const malls = JSON.parse(localStorage.getItem(STORAGE_KEYS.MALLS)) || [];
  const mall = malls.find(m => m.id === mallId);
  if (!mall) return;

  localStorage.setItem(STORAGE_KEYS.SELECTED_MALL, JSON.stringify(mall));
  showToast('Mall Selected', `Loaded 10 exclusive events at ${mall.name}`, 'success');

  // Update navbar indicator
  const mallBadge = document.getElementById('nav-mall-name');
  if (mallBadge) mallBadge.innerText = mall.name;

  // Navigate to Home section
  navigateTo('home');
}

// ==========================================
// 6. HOME SECTION ENGINE (STRICTLY MALL-WISE)
// ==========================================

function loadHomeSection() {
  const currentMall = getSelectedMall();
  const mallIndicator = document.getElementById('home-mall-indicator');
  if (mallIndicator && currentMall) {
    mallIndicator.innerText = currentMall.name;
  }

  // Load events strictly belonging to the selected mall
  const allEvents = JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS)) || [];
  const container = document.getElementById('home-featured-grid');
  if (!container) return;

  // STRICT REQUIREMENT: Only show events belonging to the selected mall
  const mallName = currentMall ? currentMall.name : 'PVR INOX Mall';
  const mallEvents = allEvents.filter(e => e.mall === mallName);

  if (mallEvents.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🏬</div>
        <h3>No events scheduled for ${mallName}</h3>
        <p style="color: var(--text-muted); margin-top: 6px;">Please choose another mall from the mall selector.</p>
        <button class="btn btn-primary" style="margin-top: 14px;" onclick="navigateTo('malls')">Browse All Malls →</button>
      </div>
    `;
  } else {
    // Show the mall's events
    container.innerHTML = mallEvents.map(e => renderEventCardHTML(e)).join('');
  }
}

function filterHomeCategory(category, buttonEl) {
  const pills = document.querySelectorAll('.category-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (buttonEl) buttonEl.classList.add('active');

  const currentMall = getSelectedMall();
  const mallName = currentMall ? currentMall.name : 'PVR INOX Mall';

  const allEvents = JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS)) || [];
  const container = document.getElementById('home-featured-grid');
  if (!container) return;

  // First filter strictly by selected mall
  let filtered = allEvents.filter(e => e.mall === mallName);

  // Then filter by category if not 'All'
  if (category !== 'All') {
    filtered = filtered.filter(e => e.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🎭</div>
        <h3>No ${category} shows at ${mallName}</h3>
        <p style="color: var(--text-muted); margin-top: 6px;">Check out other categories or explore all shows at this mall.</p>
      </div>
    `;
  } else {
    container.innerHTML = filtered.map(e => renderEventCardHTML(e)).join('');
  }
}

// ==========================================
// 7. EVENTS CATALOG (MALL-WISE & SEARCH/FILTER)
// ==========================================

function getBookedSeatsForEvent(eventId) {
  const bookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS)) || [];
  const bookedSet = new Set();
  bookings.forEach(b => {
    if (b.eventId === eventId && b.status === 'Confirmed') {
      if (Array.isArray(b.seats)) {
        b.seats.forEach(seat => bookedSet.add(seat));
      }
    }
  });
  return bookedSet;
}

function renderEventCardHTML(event) {
  const bookedSeats = getBookedSeatsForEvent(event.id);
  const totalSeats = event.totalSeats || 40;
  const availableSeatsCount = Math.max(0, totalSeats - bookedSeats.size);

  const seatsBadgeClass = availableSeatsCount <= 6 ? 'badge-danger' : 'badge-success';

  return `
    <div class="event-card">
      <div class="event-poster-wrapper">
        <img src="${event.poster}" alt="${event.title}" class="event-poster" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600'">
        <span class="badge badge-primary event-category-badge">${event.category}</span>
        <span class="event-price-badge">₹${event.price}</span>
      </div>
      <div class="event-body">
        <h4 class="event-title">${event.title}</h4>
        <div class="event-meta-info">
          <div class="event-meta-item"><span>📍</span> <span>${event.mall} • ${event.venue}</span></div>
          <div class="event-meta-item"><span>🗓️</span> <span>${event.date} • ${event.time}</span></div>
          <div class="event-meta-item"><span>⏱️</span> <span>${event.duration || '2h 30m'} • ${event.language || 'English'}</span></div>
        </div>
        <div class="event-seats-status">
          <span class="badge ${seatsBadgeClass}">${availableSeatsCount} seats available</span>
          <span style="font-size: 0.78rem; color: var(--text-dim);">Total: ${totalSeats}</span>
        </div>
        <button class="btn btn-primary btn-block" onclick="showEventDetails('${event.id}')">
          Book Now 🎟️
        </button>
      </div>
    </div>
  `;
}

function loadEvents() {
  populateMallFilterDropdown();
  handleEventsFilter();
}

function populateMallFilterDropdown() {
  const select = document.getElementById('filter-mall');
  if (!select) return;

  const malls = JSON.parse(localStorage.getItem(STORAGE_KEYS.MALLS)) || [];
  const selectedMall = getSelectedMall();

  let optionsHTML = '';
  malls.forEach(m => {
    const isSelected = selectedMall && selectedMall.name === m.name ? 'selected' : '';
    optionsHTML += `<option value="${m.name}" ${isSelected}>${m.name}</option>`;
  });
  select.innerHTML = optionsHTML;
}

function handleEventsFilter() {
  const container = document.getElementById('events-grid-container');
  if (!container) return;

  const searchVal = (document.getElementById('event-search-input')?.value || '').toLowerCase().trim();
  const categoryVal = document.getElementById('filter-category')?.value || 'All';
  const mallSelect = document.getElementById('filter-mall');
  const selectedMall = getSelectedMall();

  // If user changed the mall dropdown, update the selectedMall in LocalStorage
  let mallVal = mallSelect?.value;
  if (!mallVal || mallVal === 'All') {
    mallVal = selectedMall ? selectedMall.name : 'PVR INOX Mall';
    if (mallSelect) mallSelect.value = mallVal;
  } else if (selectedMall && selectedMall.name !== mallVal) {
    const malls = JSON.parse(localStorage.getItem(STORAGE_KEYS.MALLS)) || [];
    const matched = malls.find(m => m.name === mallVal);
    if (matched) {
      localStorage.setItem(STORAGE_KEYS.SELECTED_MALL, JSON.stringify(matched));
      updateHeaderUI();
    }
  }

  const dateVal = document.getElementById('filter-date')?.value || '';
  const priceVal = document.getElementById('filter-price')?.value || 'All';

  let events = JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS)) || [];

  // STRICT REQUIREMENT: Filter events strictly for the selected mall
  events = events.filter(e => e.mall === mallVal);

  // Filter by search string
  if (searchVal) {
    events = events.filter(e =>
      e.title.toLowerCase().includes(searchVal) ||
      e.description.toLowerCase().includes(searchVal) ||
      e.venue.toLowerCase().includes(searchVal)
    );
  }

  // Filter by category
  if (categoryVal !== 'All') {
    events = events.filter(e => e.category.toLowerCase().includes(categoryVal.toLowerCase()));
  }

  // Filter by date
  if (dateVal) {
    events = events.filter(e => e.date === dateVal);
  }

  // Filter / Sort by price
  if (priceVal === 'under300') {
    events = events.filter(e => e.price < 300);
  } else if (priceVal === '300to500') {
    events = events.filter(e => e.price >= 300 && e.price <= 500);
  } else if (priceVal === 'above500') {
    events = events.filter(e => e.price > 500);
  } else if (priceVal === 'sortAsc') {
    events.sort((a, b) => a.price - b.price);
  } else if (priceVal === 'sortDesc') {
    events.sort((a, b) => b.price - a.price);
  }

  if (events.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <h3>No matching events found at ${mallVal}</h3>
        <p style="color: var(--text-muted); margin-top: 6px;">Try adjusting your search keywords, category, or price range.</p>
        <button class="btn btn-outline btn-sm" style="margin-top: 14px;" onclick="resetEventFilters()">Reset All Filters</button>
      </div>
    `;
  } else {
    container.innerHTML = events.map(e => renderEventCardHTML(e)).join('');
  }
}

function resetEventFilters() {
  const search = document.getElementById('event-search-input');
  const cat = document.getElementById('filter-category');
  const date = document.getElementById('filter-date');
  const price = document.getElementById('filter-price');

  if (search) search.value = '';
  if (cat) cat.value = 'All';
  if (date) date.value = '';
  if (price) price.value = 'All';

  handleEventsFilter();
}

// ==========================================
// 8. EVENT DETAILS VIEW
// ==========================================

function showEventDetails(eventId) {
  const events = JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS)) || [];
  const event = events.find(e => e.id === eventId);
  if (!event) {
    showToast('Event Not Found', 'Could not retrieve event details.', 'error');
    return;
  }

  localStorage.setItem(STORAGE_KEYS.SELECTED_EVENT, JSON.stringify(event));
  // Clear previous seat selection for newly opened event
  localStorage.setItem(STORAGE_KEYS.SELECTED_SEATS, JSON.stringify([]));

  navigateTo('event-details');
}

function renderEventDetails() {
  const container = document.getElementById('event-details-container');
  const event = getSelectedEvent();
  if (!container || !event) return;

  const bookedSeats = getBookedSeatsForEvent(event.id);
  const totalSeats = event.totalSeats || 40;
  const availableSeatsCount = Math.max(0, totalSeats - bookedSeats.size);

  container.innerHTML = `
    <div class="event-details-hero">
      <div class="details-poster-wrapper">
        <img src="${event.poster}" alt="${event.title}" class="details-poster" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600'">
      </div>
      <div class="details-info">
        <div class="details-pills-row">
          <span class="badge badge-primary">${event.category}</span>
          <span class="badge badge-info">${event.language || 'English'}</span>
          <span class="badge badge-warning">${event.duration || '2h 30m'}</span>
        </div>
        <h1 class="details-title">${event.title}</h1>
        <p style="color: var(--accent-cyan); font-size: 1.05rem; font-weight: 600; margin-bottom: 20px;">
          📍 ${event.mall} — ${event.venue}
        </p>

        <div class="details-grid-meta">
          <div class="meta-block">
            <span class="meta-block-label">Date & Show Time</span>
            <span class="meta-block-val">🗓️ ${event.date} • ${event.time}</span>
          </div>
          <div class="meta-block">
            <span class="meta-block-label">Ticket Price</span>
            <span class="meta-block-val" style="color: #6ee7b7;">₹${event.price} / seat</span>
          </div>
          <div class="meta-block">
            <span class="meta-block-label">Seat Availability</span>
            <span class="meta-block-val ${availableSeatsCount <= 6 ? 'text-danger' : 'text-success'}">
              ${availableSeatsCount} of ${totalSeats} available
            </span>
          </div>
        </div>

        <div>
          <button class="btn btn-primary btn-lg" onclick="navigateTo('seats')">
            Proceed to Select Seats 💺
          </button>
        </div>
      </div>
    </div>

    <div class="details-body">
      <h3 class="details-section-title">About the Experience</h3>
      <p class="details-description-text">${event.description}</p>

      <h3 class="details-section-title" style="margin-top: 24px;">Terms & Venue Guidelines</h3>
      <ul style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.8; padding-left: 20px;">
        <li>Entry commences 30 minutes prior to scheduled showtime.</li>
        <li>Seats are reserved immediately upon payment confirmation.</li>
        <li>100% full refund available on cancellations prior to show start.</li>
        <li>Outside food and beverages are strictly prohibited inside the auditorium.</li>
      </ul>
    </div>
  `;
}

// ==========================================
// 9. SEAT SELECTION & REAL-TIME LOGIC
// ==========================================

function loadSeats() {
  const event = getSelectedEvent();
  if (!event) {
    navigateTo('events');
    return;
  }

  const bookedSeats = getBookedSeatsForEvent(event.id);
  const selectedSeats = JSON.parse(localStorage.getItem(STORAGE_KEYS.SELECTED_SEATS)) || [];

  // Update summary header
  const titleEl = document.getElementById('seat-summary-title');
  const mallEl = document.getElementById('seat-summary-mall');
  const dtEl = document.getElementById('seat-summary-datetime');

  if (titleEl) titleEl.innerText = event.title;
  if (mallEl) mallEl.innerText = `${event.mall} (${event.venue})`;
  if (dtEl) dtEl.innerText = `${event.date} • ${event.time}`;

  // Build Seat Matrix HTML
  const matrixContainer = document.getElementById('seat-matrix-container');
  if (!matrixContainer) return;

  const rows = ['A', 'B', 'C', 'D', 'E'];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8];

  let matrixHTML = '';
  rows.forEach(row => {
    let rowSeatsHTML = '';
    cols.forEach(col => {
      const seatCode = `${row}${col}`;
      const isBooked = bookedSeats.has(seatCode);
      const isSelected = selectedSeats.includes(seatCode);

      let seatClass = 'seat';
      let disabledAttr = '';

      if (isBooked) {
        seatClass += ' booked';
        disabledAttr = 'disabled title="Seat already booked"';
      } else if (isSelected) {
        seatClass += ' selected';
        disabledAttr = 'title="Click to deselect"';
      } else {
        seatClass += ' available';
        disabledAttr = 'title="Available for booking"';
      }

      rowSeatsHTML += `
        <button type="button" class="${seatClass}" ${disabledAttr} onclick="toggleSeat('${seatCode}')">
          ${seatCode}
        </button>
      `;
    });

    matrixHTML += `
      <div class="seat-row">
        <span class="seat-row-label">${row}</span>
        <div class="seats-row-group">${rowSeatsHTML}</div>
        <span class="seat-row-label">${row}</span>
      </div>
    `;
  });

  matrixContainer.innerHTML = matrixHTML;
  updateSeatSummaryUI();
}

function toggleSeat(seatCode) {
  const event = getSelectedEvent();
  if (!event) return;

  const bookedSeats = getBookedSeatsForEvent(event.id);
  if (bookedSeats.has(seatCode)) {
    showToast('Seat Unavailable', `Seat ${seatCode} is already booked by another customer.`, 'error');
    return;
  }

  let selectedSeats = JSON.parse(localStorage.getItem(STORAGE_KEYS.SELECTED_SEATS)) || [];

  if (selectedSeats.includes(seatCode)) {
    selectedSeats = selectedSeats.filter(s => s !== seatCode);
  } else {
    if (selectedSeats.length >= 8) {
      showToast('Limit Reached', 'You can select a maximum of 8 seats per booking.', 'warning');
      return;
    }
    selectedSeats.push(seatCode);
  }

  selectedSeats.sort();
  localStorage.setItem(STORAGE_KEYS.SELECTED_SEATS, JSON.stringify(selectedSeats));

  loadSeats();
}

function updateSeatSummaryUI() {
  const event = getSelectedEvent();
  if (!event) return;

  const selectedSeats = JSON.parse(localStorage.getItem(STORAGE_KEYS.SELECTED_SEATS)) || [];
  const badgeContainer = document.getElementById('selected-seats-badges');
  const priceEl = document.getElementById('seat-summary-price');
  const qtyEl = document.getElementById('seat-summary-qty');
  const feeEl = document.getElementById('seat-summary-fee');
  const totalEl = document.getElementById('seat-summary-total');
  const proceedBtn = document.getElementById('btn-proceed-payment');

  const count = selectedSeats.length;
  const ticketPrice = event.price;
  const baseAmount = count * ticketPrice;
  const fee = count > 0 ? 30 : 0;
  const totalAmount = baseAmount + fee;

  if (badgeContainer) {
    if (count === 0) {
      badgeContainer.innerHTML = '<span class="no-seats-text">No seats selected yet</span>';
    } else {
      badgeContainer.innerHTML = selectedSeats.map(s => `<span class="seat-tag">${s}</span>`).join('');
    }
  }

  if (priceEl) priceEl.innerText = `₹${ticketPrice}`;
  if (qtyEl) qtyEl.innerText = count;
  if (feeEl) feeEl.innerText = `₹${fee}`;
  if (totalEl) totalEl.innerText = `₹${totalAmount}`;

  if (proceedBtn) {
    proceedBtn.disabled = count === 0;
  }
}

function proceedToPayment() {
  const selectedSeats = JSON.parse(localStorage.getItem(STORAGE_KEYS.SELECTED_SEATS)) || [];
  if (selectedSeats.length === 0) {
    showToast('No Seats Selected', 'Please select at least 1 seat before proceeding.', 'warning');
    return;
  }

  navigateTo('payment');
}

// ==========================================
// 10. DEMO PAYMENT GATEWAY ENGINE
// ==========================================

let activePaymentTab = 'upi';

function switchPaymentTab(tabName) {
  activePaymentTab = tabName;
  const tabs = ['upi', 'card', 'wallet'];

  tabs.forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    const content = document.getElementById(`payment-tab-${t}`);
    if (btn) btn.classList.toggle('active', t === tabName);
    if (content) content.classList.toggle('active', t === tabName);
  });
}

function setupPaymentView() {
  const event = getSelectedEvent();
  const selectedSeats = JSON.parse(localStorage.getItem(STORAGE_KEYS.SELECTED_SEATS)) || [];

  if (!event || selectedSeats.length === 0) {
    navigateTo('seats');
    return;
  }

  const count = selectedSeats.length;
  const baseAmount = count * event.price;
  const fee = 30;
  const grandTotal = baseAmount + fee;

  // Fill Recap
  document.getElementById('pay-summary-title').innerText = event.title;
  document.getElementById('pay-summary-mall').innerText = `${event.mall} • ${event.venue}`;
  document.getElementById('pay-summary-datetime').innerText = `${event.date} • ${event.time}`;
  document.getElementById('pay-summary-seats').innerText = selectedSeats.join(', ');
  document.getElementById('pay-summary-qty').innerText = `${count} Seat${count > 1 ? 's' : ''}`;

  document.getElementById('pay-breakdown-base').innerText = `₹${baseAmount}`;
  document.getElementById('pay-breakdown-fee').innerText = `₹${fee}`;
  document.getElementById('pay-breakdown-total').innerText = `₹${grandTotal}`;
  document.getElementById('pay-btn-amount').innerText = `₹${grandTotal}`;
}

function processPayment() {
  const event = getSelectedEvent();
  const selectedSeats = JSON.parse(localStorage.getItem(STORAGE_KEYS.SELECTED_SEATS)) || [];
  const currentUser = getCurrentUser();

  if (!event || selectedSeats.length === 0 || !currentUser) {
    showToast('Error', 'Invalid booking session. Please retry.', 'error');
    navigateTo('events');
    return;
  }

  // Validate form based on active tab
  let paymentMethodName = 'UPI';

  if (activePaymentTab === 'upi') {
    const upiId = document.getElementById('payment-upi-id')?.value.trim();
    if (!upiId || !upiId.includes('@')) {
      showToast('Validation Error', 'Please enter a valid UPI ID (e.g. user@upi).', 'error');
      return;
    }
    paymentMethodName = `UPI (${upiId})`;
  } else if (activePaymentTab === 'card') {
    const cardName = document.getElementById('payment-card-name')?.value.trim();
    const cardNumber = document.getElementById('payment-card-number')?.value.trim();
    const cardExpiry = document.getElementById('payment-card-expiry')?.value.trim();
    const cardCvv = document.getElementById('payment-card-cvv')?.value.trim();

    if (!cardName || !cardNumber || !cardExpiry || !cardCvv) {
      showToast('Validation Error', 'Please complete all card details.', 'error');
      return;
    }
    paymentMethodName = `Card (Ending in ${cardNumber.slice(-4) || '8892'})`;
  } else if (activePaymentTab === 'wallet') {
    const walletSelect = document.getElementById('payment-wallet-select');
    paymentMethodName = walletSelect ? walletSelect.value : 'Digital Wallet';
  }

  // Pre-check for race conditions: Ensure seats were not booked by another window
  const bookedSeats = getBookedSeatsForEvent(event.id);
  const conflict = selectedSeats.some(s => bookedSeats.has(s));
  if (conflict) {
    showToast('Booking Conflict', 'One or more of your chosen seats were just booked. Please pick other seats.', 'error');
    navigateTo('seats');
    return;
  }

  // Show simulated payment processing modal
  const overlay = document.getElementById('payment-modal-overlay');
  const statusMsg = document.getElementById('payment-status-message');

  if (overlay) overlay.classList.add('active');
  if (statusMsg) statusMsg.innerText = 'Contacting payment server & holding seats...';

  setTimeout(() => {
    if (statusMsg) statusMsg.innerText = 'Authorizing transaction...';
  }, 700);

  setTimeout(() => {
    if (statusMsg) statusMsg.innerText = 'Payment Approved! Creating your official E-Ticket...';
  }, 1400);

  setTimeout(() => {
    if (overlay) overlay.classList.remove('active');

    // Create Booking Record in LocalStorage
    const count = selectedSeats.length;
    const baseAmount = count * event.price;
    const fee = 30;
    const grandTotal = baseAmount + fee;

    const newBooking = {
      id: 'TB-' + Math.floor(100000 + Math.random() * 900000),
      userEmail: currentUser.email,
      userName: currentUser.name,
      eventId: event.id,
      eventTitle: event.title,
      mall: event.mall,
      venue: event.venue,
      date: event.date,
      time: event.time,
      seats: [...selectedSeats],
      ticketPrice: event.price,
      convenienceFee: fee,
      totalAmount: grandTotal,
      status: 'Confirmed',
      paymentMethod: paymentMethodName,
      bookedAt: new Date().toISOString()
    };

    const bookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS)) || [];
    bookings.unshift(newBooking);
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));

    // Clear selected seats state
    localStorage.setItem(STORAGE_KEYS.SELECTED_SEATS, JSON.stringify([]));

    showToast('Payment Successful! 🎉', `Booking ${newBooking.id} is confirmed!`, 'success');

    // Display Digital Ticket
    renderTicket(newBooking);
    navigateTo('ticket');
  }, 2000);
}

// ==========================================
// 11. DIGITAL TICKET VIEW
// ==========================================

function renderTicket(booking) {
  if (!booking) return;

  document.getElementById('ticket-event-name').innerText = booking.eventTitle;
  document.getElementById('ticket-mall-venue').innerText = `${booking.mall} • ${booking.venue}`;
  document.getElementById('ticket-booking-id').innerText = booking.id;
  document.getElementById('ticket-customer-name').innerText = booking.userName || booking.userEmail;
  document.getElementById('ticket-datetime').innerText = `${booking.date} • ${booking.time}`;
  document.getElementById('ticket-seats-list').innerText = `${booking.seats.join(', ')} (${booking.seats.length} Tickets)`;
  document.getElementById('ticket-total-paid').innerText = `₹${booking.totalAmount}`;
  document.getElementById('ticket-payment-method').innerText = booking.paymentMethod;
  document.getElementById('ticket-barcode').innerText = `*${booking.id}*${booking.eventId}*`;
}

function downloadTicket() {
  window.print();
}

// ==========================================
// 12. MY BOOKINGS ENGINE & CANCELLATION
// ==========================================

let currentBookingsFilter = 'All';

function filterMyBookings(filter) {
  currentBookingsFilter = filter;
  ['all', 'confirmed', 'cancelled'].forEach(f => {
    const btn = document.getElementById(`filter-book-${f}`);
    if (btn) btn.classList.toggle('active', f.toLowerCase() === filter.toLowerCase());
  });
  loadBookings();
}

function loadBookings() {
  const container = document.getElementById('my-bookings-container');
  const currentUser = getCurrentUser();
  if (!container || !currentUser) return;

  const allBookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS)) || [];
  let userBookings = allBookings.filter(b => b.userEmail === currentUser.email);

  if (currentBookingsFilter !== 'All') {
    userBookings = userBookings.filter(b => b.status === currentBookingsFilter);
  }

  if (userBookings.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🎟️</div>
        <h3>No bookings found</h3>
        <p style="color: var(--text-muted); margin-top: 6px;">You haven't made any bookings in this category yet.</p>
        <button class="btn btn-primary" style="margin-top: 14px;" onclick="navigateTo('events')">Browse Live Events →</button>
      </div>
    `;
    return;
  }

  container.innerHTML = userBookings.map(b => {
    const isConfirmed = b.status === 'Confirmed';
    const statusBadge = isConfirmed
      ? `<span class="badge badge-success">✓ Confirmed</span>`
      : `<span class="badge badge-danger">✕ Cancelled / Refunded</span>`;

    return `
      <div class="booking-item-card">
        <div class="booking-card-main">
          <div class="booking-card-header">
            <span class="booking-id-text">${b.id}</span>
            ${statusBadge}
            <span style="font-size: 0.8rem; color: var(--text-dim);">Booked on: ${new Date(b.bookedAt).toLocaleDateString()}</span>
          </div>
          <h3 class="booking-card-title">${b.eventTitle}</h3>
          <div class="booking-card-meta">
            <span>📍 ${b.mall} (${b.venue})</span>
            <span>🗓️ ${b.date} • ${b.time}</span>
            <span>💺 Seats: <strong style="color: #6ee7b7;">${b.seats.join(', ')}</strong> (${b.seats.length} Tickets)</span>
            <span>💳 Total Paid: <strong>₹${b.totalAmount}</strong></span>
          </div>
        </div>
        <div class="booking-card-actions">
          <button class="btn btn-outline btn-sm" onclick="viewExistingTicket('${b.id}')">
            View Ticket 🎫
          </button>
          ${isConfirmed ? `
            <button class="btn btn-danger btn-sm" onclick="cancelBooking('${b.id}')">
              Cancel Booking ✕
            </button>
          ` : `
            <span style="font-size: 0.78rem; color: var(--accent-cyan); text-align: center;">Refund: ₹${b.totalAmount} Processed</span>
          `}
        </div>
      </div>
    `;
  }).join('');
}

function viewExistingTicket(bookingId) {
  const bookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS)) || [];
  const booking = bookings.find(b => b.id === bookingId);
  if (!booking) {
    showToast('Not Found', 'Could not locate ticket details.', 'error');
    return;
  }
  renderTicket(booking);
  navigateTo('ticket');
}

/**
 * Crucial Cancellation & Seat Release Logic:
 * Changes booking status to Cancelled and instantly frees up seats in LocalStorage.
 */
function cancelBooking(bookingId) {
  const bookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS)) || [];
  const bookingIndex = bookings.findIndex(b => b.id === bookingId);

  if (bookingIndex === -1) {
    showToast('Error', 'Booking not found.', 'error');
    return;
  }

  const booking = bookings[bookingIndex];

  const confirmed = confirm(
    `Are you sure you want to cancel booking ${booking.id} for "${booking.eventTitle}"?\n\n` +
    `• Seats [${booking.seats.join(', ')}] will be immediately released for other guests.\n` +
    `• 100% Full Refund of ₹${booking.totalAmount} will be returned to your original payment method.`
  );

  if (!confirmed) return;

  // Update status to Cancelled
  booking.status = 'Cancelled';
  booking.cancelledAt = new Date().toISOString();
  bookings[bookingIndex] = booking;

  localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));

  showToast('Booking Cancelled', `Seats [${booking.seats.join(', ')}] released & ₹${booking.totalAmount} refunded!`, 'success');
  loadBookings();
}

// ==========================================
// 13. ADMIN DASHBOARD ENGINE (admin.html)
// ==========================================

function checkAdminAuth() {
  const currentUser = getCurrentUser();
  if (!currentUser || currentUser.role !== 'admin') {
    alert('Unauthorized: You must be logged in as an Administrator to view this dashboard.');
    window.location.href = 'index.html';
    return false;
  }

  const adminNameEl = document.getElementById('admin-user-name');
  if (adminNameEl) {
    adminNameEl.innerText = currentUser.name || currentUser.email;
  }
  return true;
}

function switchAdminTab(tabName) {
  // Highlight sidebar
  const navItems = document.querySelectorAll('.admin-nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  const activeNavItem = document.getElementById(`admin-nav-${tabName}`);
  if (activeNavItem) activeNavItem.classList.add('active');

  // Switch tab panes
  const panes = document.querySelectorAll('.admin-tab-pane');
  panes.forEach(pane => pane.style.display = 'none');
  const targetPane = document.getElementById(`admin-tab-${tabName}`);
  if (targetPane) targetPane.style.display = 'block';

  // Update page title
  const titleEl = document.getElementById('admin-page-title');
  const titles = {
    dashboard: 'Dashboard Overview',
    events: 'Manage Events Catalog',
    'add-event': 'Add / Edit Event',
    bookings: 'All Customer Bookings',
    users: 'Registered Users'
  };
  if (titleEl) titleEl.innerText = titles[tabName] || 'Admin Dashboard';

  // Refresh tab data
  if (tabName === 'dashboard') loadAdminDashboard();
  if (tabName === 'events') loadAdminEvents();
  if (tabName === 'add-event') prepareAddEventForm();
  if (tabName === 'bookings') loadAdminBookings();
  if (tabName === 'users') loadAdminUsers();
}

function loadAdminDashboard() {
  const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
  const events = JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS)) || [];
  const bookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS)) || [];

  const confirmedBookings = bookings.filter(b => b.status === 'Confirmed');
  const totalRevenue = confirmedBookings.reduce((sum, b) => sum + (b.totalAmount || 0), 0);

  // Update KPI counters
  const usersEl = document.getElementById('stat-total-users');
  const eventsEl = document.getElementById('stat-total-events');
  const bookingsEl = document.getElementById('stat-total-bookings');
  const revEl = document.getElementById('stat-total-revenue');

  if (usersEl) usersEl.innerText = users.length;
  if (eventsEl) eventsEl.innerText = events.length;
  if (bookingsEl) bookingsEl.innerText = bookings.length;
  if (revEl) revEl.innerText = `₹${totalRevenue.toLocaleString()}`;

  // Recent 5 Bookings Table
  const tbody = document.getElementById('admin-recent-bookings-tbody');
  if (!tbody) return;

  const recent = bookings.slice(0, 5);
  if (recent.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-dim);">No bookings recorded yet</td></tr>`;
  } else {
    tbody.innerHTML = recent.map(b => `
      <tr>
        <td style="font-family: monospace; font-weight: 700; color: var(--accent-cyan);">${b.id}</td>
        <td><strong>${b.userName || 'Guest'}</strong><br><span style="font-size: 0.78rem; color: var(--text-dim);">${b.userEmail}</span></td>
        <td>${b.eventTitle}</td>
        <td>${b.mall}</td>
        <td>${b.seats.join(', ')}</td>
        <td style="font-weight: 700;">₹${b.totalAmount}</td>
        <td>
          <span class="badge ${b.status === 'Confirmed' ? 'badge-success' : 'badge-danger'}">${b.status}</span>
        </td>
      </tr>
    `).join('');
  }
}

function loadAdminEvents() {
  filterAdminEvents();
}

function filterAdminEvents() {
  const tbody = document.getElementById('admin-events-tbody');
  if (!tbody) return;

  const search = (document.getElementById('admin-event-search')?.value || '').toLowerCase();
  let events = JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS)) || [];

  if (search) {
    events = events.filter(e =>
      e.title.toLowerCase().includes(search) ||
      e.category.toLowerCase().includes(search) ||
      e.mall.toLowerCase().includes(search)
    );
  }

  if (events.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-dim);">No events found matching search</td></tr>`;
    return;
  }

  tbody.innerHTML = events.map(e => {
    const bookedSeats = getBookedSeatsForEvent(e.id);
    const totalSeats = e.totalSeats || 40;

    return `
      <tr>
        <td>
          <img src="${e.poster}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;" onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200'">
        </td>
        <td><strong>${e.title}</strong></td>
        <td><span class="badge badge-primary">${e.category}</span></td>
        <td>${e.mall}<br><small style="color: var(--text-dim);">${e.venue}</small></td>
        <td>${e.date}<br><small style="color: var(--text-dim);">${e.time}</small></td>
        <td style="font-weight: 700; color: #6ee7b7;">₹${e.price}</td>
        <td><strong>${bookedSeats.size}</strong> / ${totalSeats}</td>
        <td>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-outline btn-sm" onclick="editEvent('${e.id}')">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteEvent('${e.id}')">Delete</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function prepareAddEventForm() {
  const form = document.getElementById('admin-event-form');
  if (form) form.reset();

  const editIdInput = document.getElementById('event-form-edit-id');
  if (editIdInput) editIdInput.value = '';

  const titleEl = document.getElementById('admin-event-form-title');
  if (titleEl) titleEl.innerText = 'Create New Event';

  const btnEl = document.getElementById('event-form-submit-btn');
  if (btnEl) btnEl.innerText = 'Save & Publish Event';

  populateMallDropdownForEventForm();
}

function populateMallDropdownForEventForm(selectedMallName = '') {
  const mallSelect = document.getElementById('event-form-mall');
  if (!mallSelect) return;

  const malls = JSON.parse(localStorage.getItem(STORAGE_KEYS.MALLS)) || [];
  mallSelect.innerHTML = malls.map(m => `
    <option value="${m.name}" ${m.name === selectedMallName ? 'selected' : ''}>${m.name} (${m.location})</option>
  `).join('');
}

function setEventImagePreset(type) {
  const imgInput = document.getElementById('event-form-image');
  if (!imgInput) return;

  const presets = {
    movie: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80',
    music: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80',
    comedy: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&auto=format&fit=crop&q=80',
    sports: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&auto=format&fit=crop&q=80',
    theatre: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=600&auto=format&fit=crop&q=80'
  };

  imgInput.value = presets[type] || presets.movie;
}

function handleAdminSaveEvent(event) {
  event.preventDefault();
  const editId = document.getElementById('event-form-edit-id')?.value;
  const title = document.getElementById('event-form-title')?.value.trim();
  const category = document.getElementById('event-form-category')?.value;
  const description = document.getElementById('event-form-desc')?.value.trim();
  let poster = document.getElementById('event-form-image')?.value.trim();
  const mall = document.getElementById('event-form-mall')?.value;
  const venue = document.getElementById('event-form-venue')?.value.trim();
  const date = document.getElementById('event-form-date')?.value;
  const time = document.getElementById('event-form-time')?.value.trim();
  const duration = document.getElementById('event-form-duration')?.value.trim() || '2h 30m';
  const language = document.getElementById('event-form-lang')?.value.trim() || 'English';
  const price = parseInt(document.getElementById('event-form-price')?.value) || 250;
  const totalSeats = 40;

  if (!poster) {
    poster = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600';
  }

  const events = JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS)) || [];

  if (editId) {
    const index = events.findIndex(e => e.id === editId);
    if (index !== -1) {
      events[index] = {
        ...events[index],
        title,
        category,
        description,
        poster,
        mall,
        venue,
        date,
        time,
        duration,
        language,
        price,
        totalSeats
      };
      showToast('Event Updated', `Successfully updated "${title}"!`, 'success');
    }
  } else {
    const newEvent = {
      id: 'EVT-' + Math.floor(100 + Math.random() * 900),
      title,
      category,
      description,
      poster,
      mall,
      venue,
      date,
      time,
      duration,
      language,
      price,
      totalSeats
    };
    events.unshift(newEvent);
    showToast('Event Created', `"${title}" has been published to all malls!`, 'success');
  }

  localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
  switchAdminTab('events');
}

function editEvent(eventId) {
  const events = JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS)) || [];
  const event = events.find(e => e.id === eventId);
  if (!event) return;

  switchAdminTab('add-event');

  document.getElementById('event-form-edit-id').value = event.id;
  document.getElementById('event-form-title').value = event.title;
  document.getElementById('event-form-category').value = event.category;
  document.getElementById('event-form-desc').value = event.description;
  document.getElementById('event-form-image').value = event.poster;
  populateMallDropdownForEventForm(event.mall);
  document.getElementById('event-form-venue').value = event.venue;
  document.getElementById('event-form-date').value = event.date;
  document.getElementById('event-form-time').value = event.time;
  document.getElementById('event-form-duration').value = event.duration || '2h 30m';
  document.getElementById('event-form-lang').value = event.language || 'English';
  document.getElementById('event-form-price').value = event.price;

  document.getElementById('admin-event-form-title').innerText = `Edit: ${event.title}`;
  document.getElementById('event-form-submit-btn').innerText = 'Update Event Details';
}

function deleteEvent(eventId) {
  const events = JSON.parse(localStorage.getItem(STORAGE_KEYS.EVENTS)) || [];
  const event = events.find(e => e.id === eventId);
  if (!event) return;

  if (confirm(`Are you sure you want to permanently delete event "${event.title}"?\n\nThis will remove it from the public booking catalog.`)) {
    const updated = events.filter(e => e.id !== eventId);
    localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(updated));
    showToast('Event Deleted', `Deleted "${event.title}" from catalog.`, 'info');
    loadAdminEvents();
  }
}

function loadAdminBookings() {
  filterAdminBookings();
}

function filterAdminBookings() {
  const tbody = document.getElementById('admin-bookings-tbody');
  if (!tbody) return;

  const search = (document.getElementById('admin-booking-search')?.value || '').toLowerCase();
  const status = document.getElementById('admin-booking-filter-status')?.value || 'All';

  let bookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS)) || [];

  if (search) {
    bookings = bookings.filter(b =>
      b.id.toLowerCase().includes(search) ||
      b.userName.toLowerCase().includes(search) ||
      b.userEmail.toLowerCase().includes(search) ||
      b.eventTitle.toLowerCase().includes(search) ||
      b.mall.toLowerCase().includes(search)
    );
  }

  if (status !== 'All') {
    bookings = bookings.filter(b => b.status === status);
  }

  if (bookings.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-dim);">No bookings match your filter</td></tr>`;
    return;
  }

  tbody.innerHTML = bookings.map(b => `
    <tr>
      <td style="font-family: monospace; font-weight: 700; color: var(--accent-cyan);">${b.id}</td>
      <td><strong>${b.userName || 'Guest'}</strong><br><small style="color: var(--text-dim);">${b.userEmail}</small></td>
      <td>${b.eventTitle}</td>
      <td>${b.mall}</td>
      <td>${b.date}<br><small style="color: var(--text-dim);">${b.time}</small></td>
      <td style="color: #6ee7b7; font-weight: 700;">${b.seats.join(', ')}</td>
      <td style="font-weight: 800;">₹${b.totalAmount}</td>
      <td>
        <span class="badge ${b.status === 'Confirmed' ? 'badge-success' : 'badge-danger'}">${b.status}</span>
      </td>
      <td>
        ${b.status === 'Confirmed' ? `
          <button class="btn btn-danger btn-sm" onclick="cancelBookingAsAdmin('${b.id}')">Cancel & Free</button>
        ` : `
          <span style="font-size: 0.78rem; color: var(--text-dim);">Resolved</span>
        `}
      </td>
    </tr>
  `).join('');
}

function cancelBookingAsAdmin(bookingId) {
  const bookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS)) || [];
  const b = bookings.find(item => item.id === bookingId);
  if (!b) return;

  if (confirm(`[Admin Action] Cancel booking ${b.id} for ${b.userName}?\nSeats [${b.seats.join(', ')}] will be freed.`)) {
    b.status = 'Cancelled';
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    showToast('Booking Cancelled', `Seats [${b.seats.join(', ')}] have been released.`, 'success');
    loadAdminBookings();
    loadAdminDashboard();
  }
}

function loadAdminUsers() {
  filterAdminUsers();
}

function filterAdminUsers() {
  const tbody = document.getElementById('admin-users-tbody');
  if (!tbody) return;

  const search = (document.getElementById('admin-user-search')?.value || '').toLowerCase();
  let users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
  const bookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS)) || [];

  if (search) {
    users = users.filter(u =>
      u.name.toLowerCase().includes(search) ||
      u.email.toLowerCase().includes(search) ||
      (u.phone && u.phone.includes(search))
    );
  }

  tbody.innerHTML = users.map(u => {
    const userBookingsCount = bookings.filter(b => b.userEmail === u.email).length;
    return `
      <tr>
        <td><strong>${u.name}</strong></td>
        <td>${u.email}</td>
        <td>${u.phone || 'N/A'}</td>
        <td><span class="badge ${u.role === 'admin' ? 'badge-danger' : 'badge-primary'}">${u.role}</span></td>
        <td><strong>${userBookingsCount}</strong> Bookings</td>
      </tr>
    `;
  }).join('');
}

// ==========================================
// 14. APPLICATION BOOTSTRAPPER & EVENT DISPATCH
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  if (path.includes('admin.html')) {
    // Admin Dashboard Page Initialization
    if (checkAdminAuth()) {
      switchAdminTab('dashboard');
    }
  } else if (path.includes('signup.html')) {
    // Signup Page Initialization
    // If already logged in, redirect to index
    const currentUser = getCurrentUser();
    if (currentUser) {
      window.location.href = 'index.html';
    }
  } else {
    // index.html Single Page Application Initialization
    // Check if redirected from successful signup
    const urlParams = new URLSearchParams(window.location.search);
    const registeredEmail = urlParams.get('registered');
    if (registeredEmail) {
      const emailInput = document.getElementById('login-email');
      const roleInput = document.getElementById('login-role');
      if (emailInput) emailInput.value = registeredEmail;
      if (roleInput) roleInput.value = 'user';
      showToast('Registration Complete', 'Account created! Please enter your password to sign in.', 'success');
    }

    const currentUser = getCurrentUser();
    if (currentUser) {
      // If an admin somehow lands on index.html, check role
      if (currentUser.role === 'admin') {
        window.location.href = 'admin.html';
        return;
      }
      updateHeaderUI();
      const selectedMall = getSelectedMall();
      if (selectedMall) {
        navigateTo('home');
      } else {
        navigateTo('malls');
      }
    } else {
      navigateTo('login');
    }
  }
});
