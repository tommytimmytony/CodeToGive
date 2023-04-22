const cardExamples = [
  {
    name: "Olivia Johnson",
    wish: "To meet her favorite singer",
    guardian: "Sarah Johnson (Mother)",
    contact: "555-123-4567",
  },
  {
    name: "Ethan Lee",
    wish: "To go on a shopping spree",
    guardian: "Jennifer Lee (Mother)",
    contact: "555-123-4567",
  },
  {
    name: "Mia Brown",
    wish: "To visit Disney World",
    guardian: "Karen Brown (Mother)",
    contact: "555-123-4567",
  },
  {
    name: "Jacob Martinez",
    wish: "To attend a professional basketball game",
    guardian: "Maria Martinez (Mother)",
    contact: "555-123-4567",
  },
  {
    name: "Sophia Davis",
    wish: "To meet a famous actor",
    guardian: "David Davis (Father)",
    contact: "555-123-4567",
  },
  {
    name: "Aiden Rodriguez",
    wish: "To go on a trip to Hawaii",
    guardian: "Sara Rodriguez (Mother)",
    contact: "555-123-4567",
  },
  {
    name: "Madison Jackson",
    wish: "Pending...",
    guardian: "Amy Jackson (Mother)",
    contact: "555-123-4567",
  },
  {
    name: "Liam Carter",
    wish: "To ride in a helicopter",
    guardian: "Kelly Carter (Mother)",
    contact: "555-123-4567",
  },
  {
    name: "Chloe White",
    wish: "To go on a horseback riding adventure",
    guardian: "Rachel White (Mother)",
    contact: "555-123-4567",
  },
  {
    name: "Lucas Harris",
    wish: "To attend a professional football game",
    guardian: "John Harris (Father)",
    contact: "555-123-4567",
  },
  {
    name: "Lily Allen",
    wish: "To meet a famous artist",
    guardian: "Melanie Allen (Mother)",
    contact: "555-123-4567",
  },
  {
    name: "Noah Wright",
    wish: "To go on a hot air balloon ride",
    guardian: "Jessica Wright (Mother)",
    contact: "555-123-4567",
  },
  {
    name: "Avery Scott",
    wish: "To go to a water park",
    guardian: "Michael Scott (Father)",
    contact: "555-123-4567",
  },
  {
    name: "Logan Green",
    wish: "To meet a famous athlete",
    guardian: "Laura Green (Mother)",
    contact: "555-123-4567",
  },
  {
    name: "Evelyn Adams",
    wish: "To visit New York City",
    guardian: "Elizabeth Adams (Mother)",
    contact: "555-123-4567",
  },
  {
    name: "Mason Baker",
    wish: "To go on a fishing trip",
    guardian: "David Baker (Father)",
    contact: "555-203-3333"
  },
  {
    name: "Sarah Lee",
    wish: "Want to go to Japan",
    guardian: "David Lee (Father)",
    contact: "555-123-4567",
  },
  {
    name: "Tina Nguyen",
    wish: "Want to meet a famous singer",
    guardian: "Phuong Nguyen (Mother)",
    contact: "555-555-5555",
  },
  {
    name: "Cameron Hernandez",
    wish: "Want to go to the beach",
    guardian: "Julia Hernandez (Auntie)",
    contact: "555-999-8888",
  },
  {
    name: "Oscar Wong",
    wish: "Want to visit China",
    guardian: "Wei Wong (Uncle)",
    contact: "555-222-3333",
  },
  {
    name: "Carla Smith",
    wish: "Want to meet a dolphin",
    guardian: "Mark Smith (Father)",
    contact: "555-444-5555",
  },
  {
    name: "Maxwell Johnson",
    wish: "Want to go to a baseball game",
    guardian: "Emily Johnson (Mother)",
    contact: "555-666-7777",
  },
  {
    name: "Jasmine Patel",
    wish: "Want to go on a roller coaster",
    guardian: "Neha Patel (Auntie)",
    contact: "555-888-9999",
  },
  {
    name: "Lucas Kim",
    wish: "Want to go to the Grand Canyon",
    guardian: "Jin Kim (Father)",
    contact: "555-222-3333",
  },
  {
    name: "Aaliyah Brown",
    wish: "Want to see a Broadway show",
    guardian: "Jessica Brown (Mother)",
    contact: "555-777-8888",
  },
  {
    name: "Mia Davis",
    wish: "Want to meet a mermaid",
    guardian: "John Davis (Father)",
    contact: "555-666-7777",
  },
  {
    name: "William Jackson",
    wish: "Want to go to a museum",
    guardian: "Karen Jackson (Mother)",
    contact: "555-888-9999",
  },
  {
    name: "Sophia Kim",
    wish: "Want to visit Paris",
    guardian: "Jiyoung Kim (Auntie)",
    contact: "555-444-5555",
  },
  {
    name: "Aiden Thomas",
    wish: "Want to go to Legoland",
    guardian: "Stephanie Thomas (Mother)",
    contact: "555-123-4567",
  },
  {
    name: "Madison Wilson",
    wish: "Want to go to a water park",
    guardian: "Michael Wilson (Father)",
    contact: "555-222-3333",
  },
  {
    name: "Ethan Nguyen",
    wish: "Want to go to the zoo",
    guardian: "Thuan Nguyen (Father)",
    contact: "555-444-5555",
  },
  {
    name: "Isabella Rodriguez",
    wish: "To swim with dolphins",
    guardian: "Sofia Rodriguez (Mother)",
    contact: "555-123-4567",
  },

  {
    name: "Leo Hernandez",
    wish: "To go on a hot air balloon ride",
    guardian: "Marisol Hernandez (Aunt)",
    contact: "555-234-5678",
  },

  {
    name: "Sophia Martinez",
    wish: "To meet a celebrity",
    guardian: "Maria Martinez (Grandmother)",
    contact: "555-345-6789",
  },

  {
    name: "David Alvarez",
    wish: "To visit the Grand Canyon",
    guardian: "Carmen Alvarez (Mother)",
    contact: "555-456-7890",
  },

  {
    name: "Oliver Cruz",
    wish: "To go on a safari",
    guardian: "Laura Cruz (Aunt)",
    contact: "555-567-8901",
  },

  {
    name: "Emma Torres",
    wish: "To go to Disneyland",
    guardian: "Ana Torres (Grandmother)",
    contact: "555-678-9012",
  },

  {
    name: "Gabriel Fernandez",
    wish: "To meet a professional athlete",
    guardian: "Jose Fernandez (Father)",
    contact: "555-789-0123",
  },

  {
    name: "Ava Gomez",
    wish: "To visit Hawaii",
    guardian: "Lucia Gomez (Mother)",
    contact: "555-890-1234",
  },

  {
    name: "Ethan Davis",
    wish: "To go on a cruise",
    guardian: "Megan Davis (Aunt)",
    contact: "555-901-2345",
  },

  {
    name: "Mia Wilson",
    wish: "To see the Northern Lights",
    guardian: "Jennifer Wilson (Mother)",
    contact: "555-012-3456",
  },

  {
    name: "Daniel Perez",
    wish: "To go to Legoland",
    guardian: "Monica Perez (Aunt)",
    contact: "555-123-4567",
  },

  {
    name: "Sofia Ramirez",
    wish: "To go on a road trip",
    guardian: "Ana Ramirez (Mother)",
    contact: "555-234-5678",
  },

  {
    name: "Liam Flores",
    wish: "To visit a chocolate factory",
    guardian: "Laura Flores (Grandmother)",
    contact: "555-345-6789",
  },

  {
    name: "Emma Sanchez",
    wish: "To go to Harry Potter World",
    guardian: "Maria Sanchez (Mother)",
    contact: "555-456-7890",
  },

  {
    name: "Julian Ortiz",
    wish: "To go on a helicopter ride",
    guardian: "Sandra Ortiz (Aunt)",
    contact: "555-567-8901",
  },
];

export default cardExamples;
