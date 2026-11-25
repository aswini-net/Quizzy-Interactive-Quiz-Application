/**
 * Quizzy - Interactive Quiz Application
 * Comprehensive Vanilla JavaScript Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. QUESTION BANK (90+ Questions)
    // ==========================================
    const questionBank = [
        // --- GENERAL KNOWLEDGE: EASY ---
        {
            category: "General Knowledge",
            difficulty: "Easy",
            question: "Which is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            answer: "Pacific Ocean",
            explanation: "The Pacific Ocean covers over 30% of the Earth's surface, making it the largest ocean."
        },
        {
            category: "General Knowledge",
            difficulty: "Easy",
            question: "How many colors are there in a standard rainbow?",
            options: ["6", "7", "8", "5"],
            answer: "7",
            explanation: "A standard rainbow consists of 7 colors: Red, Orange, Yellow, Green, Blue, Indigo, and Violet."
        },
        {
            category: "General Knowledge",
            difficulty: "Easy",
            question: "Which country is famous for the Eiffel Tower?",
            options: ["Italy", "Spain", "France", "Germany"],
            answer: "France",
            explanation: "The Eiffel Tower is located in Paris, France."
        },
        {
            category: "General Knowledge",
            difficulty: "Easy",
            question: "What is the capital city of Japan?",
            options: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"],
            answer: "Tokyo",
            explanation: "Tokyo has been the capital city of Japan since 1868."
        },
        {
            category: "General Knowledge",
            difficulty: "Easy",
            question: "Which animal is known as the 'Ship of the Desert'?",
            options: ["Horse", "Camel", "Elephant", "Llama"],
            answer: "Camel",
            explanation: "Camels are well-adapted to harsh desert environments and can travel long distances with minimal water."
        },

        // --- GENERAL KNOWLEDGE: MEDIUM ---
        {
            category: "General Knowledge",
            difficulty: "Medium",
            question: "In which year did the Titanic sink?",
            options: ["1912", "1905", "1920", "1898"],
            answer: "1912",
            explanation: "The RMS Titanic hit an iceberg and sank on April 15, 1912."
        },
        {
            category: "General Knowledge",
            difficulty: "Medium",
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
            answer: "Leonardo da Vinci",
            explanation: "Italian Renaissance master Leonardo da Vinci painted the Mona Lisa in the early 16th century."
        },
        {
            category: "General Knowledge",
            difficulty: "Medium",
            question: "What is the smallest country in the world by area?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            answer: "Vatican City",
            explanation: "Vatican City is an independent city-state spanning about 0.49 square kilometers."
        },
        {
            category: "General Knowledge",
            difficulty: "Medium",
            question: "Which continent is known as the 'Dark Continent' historically?",
            options: ["Asia", "Africa", "South America", "Australia"],
            answer: "Africa",
            explanation: "Africa was historically referred to as the Dark Continent due to its unexplored interior by Europeans."
        },
        {
            category: "General Knowledge",
            difficulty: "Medium",
            question: "What currency is used in the United Kingdom?",
            options: ["Euro", "Pound Sterling", "Dollar", "Franc"],
            answer: "Pound Sterling",
            explanation: "The official currency of the United Kingdom is the Pound Sterling (£)."
        },

        // --- GENERAL KNOWLEDGE: HARD ---
        {
            category: "General Knowledge",
            difficulty: "Hard",
            question: "Which country was previously known as Abyssinia?",
            options: ["Ethiopia", "Sudan", "Somalia", "Kenya"],
            answer: "Ethiopia",
            explanation: "Ethiopia was historically known as Abyssinia until the mid-20th century."
        },
        {
            category: "General Knowledge",
            difficulty: "Hard",
            question: "What is the longest river in South America?",
            options: ["Parana River", "Amazon River", "Orinoco River", "Magdalena River"],
            answer: "Amazon River",
            explanation: "The Amazon River is the longest river in South America and the largest by discharge volume globally."
        },
        {
            category: "General Knowledge",
            difficulty: "Hard",
            question: "Who was the first woman to win a Nobel Prize?",
            options: ["Rosalind Franklin", "Marie Curie", "Mother Teresa", "Ada Lovelace"],
            answer: "Marie Curie",
            explanation: "Marie Curie won the Nobel Prize in Physics in 1903, becoming the first woman to receive a Nobel Prize."
        },
        {
            category: "General Knowledge",
            difficulty: "Hard",
            question: "Which ancient civilization built the city of Machu Picchu?",
            options: ["Aztecs", "Mayans", "Incas", "Olmecs"],
            answer: "Incas",
            explanation: "Machu Picchu was built by the Inca Empire in the 15th century in present-day Peru."
        },
        {
            category: "General Knowledge",
            difficulty: "Hard",
            question: "What is the national flower of India?",
            options: ["Rose", "Jasmine", "Lotus", "Sunflower"],
            answer: "Lotus",
            explanation: "The Sacred Lotus (Nelumbo nucifera) is the official national flower of India."
        },

        // --- SCIENCE: EASY ---
        {
            category: "Science",
            difficulty: "Easy",
            question: "What chemical element does 'O' stand for in the periodic table?",
            options: ["Gold", "Oxygen", "Osmium", "Silver"],
            answer: "Oxygen",
            explanation: "'O' is the chemical symbol for Oxygen, essential for aerobic respiration."
        },
        {
            category: "Science",
            difficulty: "Easy",
            question: "Which planet in our solar system is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
            explanation: "Mars appears red due to iron oxide (rust) on its surface."
        },
        {
            category: "Science",
            difficulty: "Easy",
            question: "What state of matter is water when frozen?",
            options: ["Gas", "Liquid", "Solid", "Plasma"],
            answer: "Solid",
            explanation: "Water forms ice, which is a solid state of matter."
        },
        {
            category: "Science",
            difficulty: "Easy",
            question: "What gas do plants absorb from the atmosphere for photosynthesis?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Carbon Dioxide",
            explanation: "Plants convert Carbon Dioxide and water into glucose and oxygen using sunlight."
        },
        {
            category: "Science",
            difficulty: "Easy",
            question: "What force pulls objects toward the center of the Earth?",
            options: ["Magnetism", "Friction", "Gravity", "Tension"],
            answer: "Gravity",
            explanation: "Gravity is the fundamental force of attraction between mass-bearing objects."
        },

        // --- SCIENCE: MEDIUM ---
        {
            category: "Science",
            difficulty: "Medium",
            question: "What is the speed of light in vacuum approximately?",
            options: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "30,000 km/s"],
            answer: "300,000 km/s",
            explanation: "Light travels at approximately 299,792 kilometers per second in a vacuum."
        },
        {
            category: "Science",
            difficulty: "Medium",
            question: "Which organ in the human body produces insulin?",
            options: ["Liver", "Kidney", "Pancreas", "Stomach"],
            answer: "Pancreas",
            explanation: "Beta cells in the islets of Langerhans inside the pancreas produce insulin."
        },
        {
            category: "Science",
            difficulty: "Medium",
            question: "What is the pH value of pure water at room temperature?",
            options: ["5", "7", "9", "14"],
            answer: "7",
            explanation: "A pH of 7 is considered neutral on the pH scale."
        },
        {
            category: "Science",
            difficulty: "Medium",
            question: "What type of blood cells carry oxygen throughout the human body?",
            options: ["White Blood Cells", "Red Blood Cells", "Platelets", "Plasma"],
            answer: "Red Blood Cells",
            explanation: "Red blood cells contain hemoglobin, which binds to oxygen."
        },
        {
            category: "Science",
            difficulty: "Medium",
            question: "Which layer of Earth's atmosphere absorbs most of the sun's ultraviolet radiation?",
            options: ["Troposphere", "Ozone Layer", "Mesosphere", "Thermosphere"],
            answer: "Ozone Layer",
            explanation: "The ozone layer located in the stratosphere shields Earth from harmful UV rays."
        },

        // --- SCIENCE: HARD ---
        {
            category: "Science",
            difficulty: "Hard",
            question: "What particle is considered the fundamental carrier of electromagnetic radiation?",
            options: ["Electron", "Proton", "Photon", "Neutrino"],
            answer: "Photon",
            explanation: "Photons are elementary particles representing quantum packets of light and electromagnetic radiation."
        },
        {
            category: "Science",
            difficulty: "Hard",
            question: "Which law states that energy cannot be created or destroyed?",
            options: ["Newton's First Law", "First Law of Thermodynamics", "Boyle's Law", "Hooke's Law"],
            answer: "First Law of Thermodynamics",
            explanation: "The First Law of Thermodynamics is also known as the Law of Conservation of Energy."
        },
        {
            category: "Science",
            difficulty: "Hard",
            question: "What is the powerhouse organelle of eukaryotic cells?",
            options: ["Ribosome", "Golgi Apparatus", "Mitochondria", "Endoplasmic Reticulum"],
            answer: "Mitochondria",
            explanation: "Mitochondria produce ATP through cellular respiration, powering the cell."
        },
        {
            category: "Science",
            difficulty: "Hard",
            question: "Which chemical compound has the formula NaHCO3?",
            options: ["Table Salt", "Baking Soda", "Caustic Soda", "Washing Soda"],
            answer: "Baking Soda",
            explanation: "NaHCO3 is Sodium Bicarbonate, commonly known as baking soda."
        },
        {
            category: "Science",
            difficulty: "Hard",
            question: "What is absolute zero temperature in Celsius?",
            options: ["-273.15 °C", "0 °C", "-100 °C", "-459.67 °C"],
            answer: "-273.15 °C",
            explanation: "Absolute zero (0 Kelvin) corresponds to -273.15 degrees Celsius."
        },

        // --- TECHNOLOGY: EASY ---
        {
            category: "Technology",
            difficulty: "Easy",
            question: "What does 'CPU' stand for in computer hardware?",
            options: ["Central Processing Unit", "Computer Power Unit", "Core Processing Utility", "Central Performance Union"],
            answer: "Central Processing Unit",
            explanation: "The CPU executes instructions making up computer programs."
        },
        {
            category: "Technology",
            difficulty: "Easy",
            question: "Which company developed the Android operating system?",
            options: ["Apple", "Microsoft", "Google", "IBM"],
            answer: "Google",
            explanation: "Android was originally created by Android Inc. and acquired by Google in 2005."
        },
        {
            category: "Technology",
            difficulty: "Easy",
            question: "What does 'RAM' stand for?",
            options: ["Random Access Memory", "Read Access Media", "Rapid Action Memory", "Run Auto Memory"],
            answer: "Random Access Memory",
            explanation: "RAM is short-term volatile memory used by computers to store current work data."
        },
        {
            category: "Technology",
            difficulty: "Easy",
            question: "What symbol is commonly used in email addresses to separate username and domain?",
            options: ["#", "@", "$", "&"],
            answer: "@",
            explanation: "The '@' symbol separates the local user identifier from the domain name."
        },
        {
            category: "Technology",
            difficulty: "Easy",
            question: "Which tech giant created the iPhone?",
            options: ["Samsung", "Apple", "Nokia", "Sony"],
            answer: "Apple",
            explanation: "Apple Inc. introduced the first iPhone in 2007."
        },

        // --- TECHNOLOGY: MEDIUM ---
        {
            category: "Technology",
            difficulty: "Medium",
            question: "What does HTTP stand for in web technology?",
            options: ["HyperText Transfer Protocol", "High Transfer Text Process", "Hyperlink Text Technical Program", "Home Tool Transfer Protocol"],
            answer: "HyperText Transfer Protocol",
            explanation: "HTTP is the foundational protocol used for transmitting web documents."
        },
        {
            category: "Technology",
            difficulty: "Medium",
            question: "Which key component stores permanent data on a computer even when powered off?",
            options: ["RAM", "Cache", "Hard Drive / SSD", "Register"],
            answer: "Hard Drive / SSD",
            explanation: "Solid State Drives (SSDs) and Hard Disk Drives (HDDs) provide persistent non-volatile storage."
        },
        {
            category: "Technology",
            difficulty: "Medium",
            question: "What domain extension is primarily reserved for non-profit organizations?",
            options: [".com", ".org", ".net", ".gov"],
            answer: ".org",
            explanation: ".org stands for organization and is widely used by non-profits."
        },
        {
            category: "Technology",
            difficulty: "Medium",
            question: "Who co-founded Microsoft alongside Bill Gates?",
            options: ["Steve Wozniak", "Paul Allen", "Larry Page", "Steve Ballmer"],
            answer: "Paul Allen",
            explanation: "Paul Allen founded Microsoft with Bill Gates in Albuquerque in 1975."
        },
        {
            category: "Technology",
            difficulty: "Medium",
            question: "What wireless technology allows short-range data exchange between devices?",
            options: ["Wi-Fi", "Bluetooth", "NFC", "Ethernet"],
            answer: "Bluetooth",
            explanation: "Bluetooth operates at short distances using UHF radio waves."
        },

        // --- TECHNOLOGY: HARD ---
        {
            category: "Technology",
            difficulty: "Hard",
            question: "What port number is standard for HTTPS encrypted web traffic?",
            options: ["80", "21", "443", "8080"],
            answer: "443",
            explanation: "HTTPS secure traffic defaults to TCP port 443, whereas unencrypted HTTP uses port 80."
        },
        {
            category: "Technology",
            difficulty: "Hard",
            question: "What cryptography system relies on a public key and a private key pair?",
            options: ["Symmetric Encryption", "Asymmetric Encryption", "Hashing", "Steganography"],
            answer: "Asymmetric Encryption",
            explanation: "Asymmetric encryption (public-key cryptography) uses non-identical keys for encryption and decryption."
        },
        {
            category: "Technology",
            difficulty: "Hard",
            question: "In computer architecture, what does 'GPU' stand for?",
            options: ["General Processing Unit", "Graphics Processing Unit", "Graphical Power Utility", "Grid Processing Unit"],
            answer: "Graphics Processing Unit",
            explanation: "A GPU is designed to rapidly manipulate computer graphics and parallel computation."
        },
        {
            category: "Technology",
            difficulty: "Hard",
            question: "Which company originally created the Java programming language?",
            options: ["Sun Microsystems", "Oracle", "Microsoft", "Netscape"],
            answer: "Sun Microsystems",
            explanation: "Java was developed by James Gosling and team at Sun Microsystems in 1995."
        },
        {
            category: "Technology",
            difficulty: "Hard",
            question: "What open-source containerization platform was released in 2013?",
            options: ["Kubernetes", "Docker", "Vagrant", "OpenShift"],
            answer: "Docker",
            explanation: "Docker revolutionized application deployment using lightweight OS-level virtualization containers."
        },

        // --- PROGRAMMING: EASY ---
        {
            category: "Programming",
            difficulty: "Easy",
            question: "Which language is primarily used for structuring content on web pages?",
            options: ["CSS", "HTML", "JavaScript", "Python"],
            answer: "HTML",
            explanation: "HTML (HyperText Markup Language) provides the core structure of web documents."
        },
        {
            category: "Programming",
            difficulty: "Easy",
            question: "Which character is typically used to end statements in C, C++, and Java?",
            options: [":", ";", ".", ","],
            answer: ";",
            explanation: "The semicolon ';' terminates statements in C-family programming languages."
        },
        {
            category: "Programming",
            difficulty: "Easy",
            question: "What keyword is used in JavaScript to declare a constant variable?",
            options: ["var", "let", "const", "def"],
            answer: "const",
            explanation: "'const' creates read-only, block-scoped constant variable bindings."
        },
        {
            category: "Programming",
            difficulty: "Easy",
            question: "What is the output symbol used for single-line comments in Python?",
            options: ["//", "#", "/*", "--"],
            answer: "#",
            explanation: "Python uses the hash '#' symbol for single-line comments."
        },
        {
            category: "Programming",
            difficulty: "Easy",
            question: "What data type represents true or false values?",
            options: ["String", "Integer", "Boolean", "Float"],
            answer: "Boolean",
            explanation: "Boolean values can evaluate to either true or false."
        },

        // --- PROGRAMMING: MEDIUM ---
        {
            category: "Programming",
            difficulty: "Medium",
            question: "In JavaScript, what result does `typeof null` return?",
            options: ["'null'", "'undefined'", "'object'", "'boolean'"],
            answer: "'object'",
            explanation: "`typeof null` returning 'object' is a historical legacy bug in JavaScript."
        },
        {
            category: "Programming",
            difficulty: "Medium",
            question: "Which array method adds one or more elements to the end of an array in JavaScript?",
            options: ["pop()", "shift()", "push()", "unshift()"],
            answer: "push()",
            explanation: "The push() method appends new elements to the end of an array."
        },
        {
            category: "Programming",
            difficulty: "Medium",
            question: "Which data structure operates on a First-In, First-Out (FIFO) basis?",
            options: ["Stack", "Queue", "Binary Tree", "Heap"],
            answer: "Queue",
            explanation: "Queues process items in FIFO order, like a physical waiting line."
        },
        {
            category: "Programming",
            difficulty: "Medium",
            question: "What does SQL stand for?",
            options: ["Structured Query Language", "Simple Question Language", "Sequential Query Logic", "System Quality Language"],
            answer: "Structured Query Language",
            explanation: "SQL is the standard language for querying and managing relational databases."
        },
        {
            category: "Programming",
            difficulty: "Medium",
            question: "In Object-Oriented Programming, what concept hides complex implementation details?",
            options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
            answer: "Abstraction",
            explanation: "Abstraction simplifies complex systems by hiding implementation specifics behind clear interfaces."
        },

        // --- PROGRAMMING: HARD ---
        {
            category: "Programming",
            difficulty: "Hard",
            question: "What is the worst-case time complexity of Quick Sort?",
            options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
            answer: "O(n²)",
            explanation: "Quick Sort degrades to O(n²) when poor pivot choices occur on sorted/reversed data."
        },
        {
            category: "Programming",
            difficulty: "Hard",
            question: "Which design pattern restricts a class to a single instance and provides global access?",
            options: ["Factory", "Observer", "Singleton", "Decorator"],
            answer: "Singleton",
            explanation: "The Singleton pattern ensures only one instance of a class exists across an application."
        },
        {
            category: "Programming",
            difficulty: "Hard",
            question: "In JavaScript, what feature allows inner functions to remember variables from outer scopes?",
            options: ["Callback", "Closure", "Promise", "Generator"],
            answer: "Closure",
            explanation: "A closure gives an inner function access to an outer function's scope even after the outer function finishes executing."
        },
        {
            category: "Programming",
            difficulty: "Hard",
            question: "Which Git command records changes permanently in the local repository history?",
            options: ["git add", "git push", "git commit", "git checkout"],
            answer: "git commit",
            explanation: "git commit saves staged snapshots into the local repository history log."
        },
        {
            category: "Programming",
            difficulty: "Hard",
            question: "What mechanism handles asynchronous operations without blocking JavaScript's single thread?",
            options: ["Event Loop", "Garbage Collector", "JIT Compiler", "Call Stack"],
            answer: "Event Loop",
            explanation: "The Event Loop continuously monitors the call stack and task queues to handle non-blocking asynchronous execution."
        },

        // --- SPORTS: EASY ---
        {
            category: "Sports",
            difficulty: "Easy",
            question: "How many players are on the field for one team in a standard soccer match?",
            options: ["9", "10", "11", "12"],
            answer: "11",
            explanation: "Each soccer team fields 11 players including 1 goalkeeper."
        },
        {
            category: "Sports",
            difficulty: "Easy",
            question: "In which sport do players hit a shuttlecock over a net?",
            options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
            answer: "Badminton",
            explanation: "Badminton is played using rackets to hit a shuttlecock across a net."
        },
        {
            category: "Sports",
            difficulty: "Easy",
            question: "What sport is Michael Jordan legendary for playing?",
            options: ["Baseball", "Basketball", "American Football", "Golf"],
            answer: "Basketball",
            explanation: "Michael Jordan is widely regarded as one of the greatest basketball players of all time."
        },
        {
            category: "Sports",
            difficulty: "Easy",
            question: "How many rings are in the official Olympic logo?",
            options: ["4", "5", "6", "7"],
            answer: "5",
            explanation: "The Olympic symbol consists of 5 interlocking rings representing the participating continents."
        },
        {
            category: "Sports",
            difficulty: "Easy",
            question: "Which game is played on a chessboard?",
            options: ["Checkers", "Chess", "Backgammon", "Go"],
            answer: "Chess",
            explanation: "Chess is played on an 8x8 grid board between two players."
        },

        // --- SPORTS: MEDIUM ---
        {
            category: "Sports",
            difficulty: "Medium",
            question: "How long is an official Olympic swimming pool?",
            options: ["25 meters", "50 meters", "75 meters", "100 meters"],
            answer: "50 meters",
            explanation: "Olympic long-course swimming pools are exactly 50 meters in length."
        },
        {
            category: "Sports",
            difficulty: "Medium",
            question: "What term is used in golf for scoring one stroke under par on a hole?",
            options: ["Eagle", "Birdie", "Bogey", "Albatross"],
            answer: "Birdie",
            explanation: "A score of one stroke under par on an individual hole is called a Birdie."
        },
        {
            category: "Sports",
            difficulty: "Medium",
            question: "Which country won the FIFA Men's World Cup in 2018?",
            options: ["Croatia", "Brazil", "France", "Germany"],
            answer: "France",
            explanation: "France defeated Croatia 4-2 in the 2018 World Cup final held in Russia."
        },
        {
            category: "Sports",
            difficulty: "Medium",
            question: "In tennis, what is the term for a score of zero?",
            options: ["Nil", "Blank", "Love", "Zero"],
            answer: "Love",
            explanation: "'Love' represents a score of zero in tennis scoring."
        },
        {
            category: "Sports",
            difficulty: "Medium",
            question: "How many points is a touchdown worth in American Football?",
            options: ["3", "6", "7", "2"],
            answer: "6",
            explanation: "A touchdown awards 6 points, with an opportunity for extra point attempts."
        },

        // --- SPORTS: HARD ---
        {
            category: "Sports",
            difficulty: "Hard",
            question: "Which athlete holds the world record for the 100-meter sprint at 9.58 seconds?",
            options: ["Tyson Gay", "Usain Bolt", "Yohan Blake", "Justin Gatlin"],
            answer: "Usain Bolt",
            explanation: "Usain Bolt set the 100m world record of 9.58 seconds in Berlin in 2009."
        },
        {
            category: "Sports",
            difficulty: "Hard",
            question: "In cricket, what is the maximum number of overs allowed per bowler in a standard T20 match?",
            options: ["2", "4", "5", "10"],
            answer: "4",
            explanation: "In T20 International cricket, each bowler can bowl a maximum of 4 overs per innings."
        },
        {
            category: "Sports",
            difficulty: "Hard",
            question: "Which Grand Slam tennis tournament is played on grass courts?",
            options: ["Australian Open", "French Open", "Wimbledon", "US Open"],
            answer: "Wimbledon",
            explanation: "Wimbledon is the only major Grand Slam tournament played on natural grass."
        },
        {
            category: "Sports",
            difficulty: "Hard",
            question: "What is the distance of an official marathon race?",
            options: ["40.0 km", "42.195 km", "45.5 km", "50.0 km"],
            answer: "42.195 km",
            explanation: "The official marathon length is 42.195 kilometers (26 miles 385 yards)."
        },
        {
            category: "Sports",
            difficulty: "Hard",
            question: "Which country hosted the first modern Olympic Games in 1896?",
            options: ["France", "United Kingdom", "Greece", "United States"],
            answer: "Greece",
            explanation: "The first modern Olympic Games were held in Athens, Greece in 1896."
        },

        // --- GEOGRAPHY: EASY ---
        {
            category: "Geography",
            difficulty: "Easy",
            question: "What is the capital city of France?",
            options: ["Lyon", "Marseille", "Paris", "Nice"],
            answer: "Paris",
            explanation: "Paris is the capital and largest city of France."
        },
        {
            category: "Geography",
            difficulty: "Easy",
            question: "On which continent is the Sahara Desert located?",
            options: ["Asia", "Africa", "Australia", "North America"],
            answer: "Africa",
            explanation: "The Sahara is the world's largest hot desert, spanning northern Africa."
        },
        {
            category: "Geography",
            difficulty: "Easy",
            question: "What is the largest country in the world by land area?",
            options: ["China", "Canada", "United States", "Russia"],
            answer: "Russia",
            explanation: "Russia spans over 17 million square kilometers across Europe and Asia."
        },
        {
            category: "Geography",
            difficulty: "Easy",
            question: "Which ocean lies between North America and Europe?",
            options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
            answer: "Atlantic Ocean",
            explanation: "The Atlantic Ocean separates the Americas from Europe and Africa."
        },
        {
            category: "Geography",
            difficulty: "Easy",
            question: "What is the capital city of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            answer: "Canberra",
            explanation: "Canberra was chosen as Australia's capital city in 1908 as a compromise between Sydney and Melbourne."
        },

        // --- GEOGRAPHY: MEDIUM ---
        {
            category: "Geography",
            difficulty: "Medium",
            question: "What mountain range separates Europe from Asia?",
            options: ["Alps", "Himalayas", "Ural Mountains", "Andes"],
            answer: "Ural Mountains",
            explanation: "The Ural Mountains run north-to-south through western Russia forming a natural continental boundary."
        },
        {
            category: "Geography",
            difficulty: "Medium",
            question: "Which river is the longest in the world?",
            options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            answer: "Nile River",
            explanation: "The Nile River in northeastern Africa is widely recognized as the longest river in the world."
        },
        {
            category: "Geography",
            difficulty: "Medium",
            question: "What is the capital city of Canada?",
            options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            answer: "Ottawa",
            explanation: "Ottawa is the political capital city of Canada."
        },
        {
            category: "Geography",
            difficulty: "Medium",
            question: "Which island nation is located off the southeastern coast of Africa?",
            options: ["Madagascar", "Sri Lanka", "Seychelles", "Mauritius"],
            answer: "Madagascar",
            explanation: "Madagascar is the world's fourth-largest island, situated in the Indian Ocean."
        },
        {
            category: "Geography",
            difficulty: "Medium",
            question: "Which US state has the longest coastline?",
            options: ["California", "Florida", "Alaska", "Hawaii"],
            answer: "Alaska",
            explanation: "Alaska's coastline spans over 6,600 miles, longer than all other US states combined."
        },

        // --- GEOGRAPHY: HARD ---
        {
            category: "Geography",
            difficulty: "Hard",
            question: "What is the deepest known location in Earth's oceans?",
            options: ["Puerto Rico Trench", "Challenger Deep", "Java Trench", "Sunda Trench"],
            answer: "Challenger Deep",
            explanation: "Challenger Deep in the Mariana Trench reaches a depth of approximately 10,994 meters."
        },
        {
            category: "Geography",
            difficulty: "Hard",
            question: "Which African country has three official capital cities?",
            options: ["Nigeria", "South Africa", "Kenya", "Tanzania"],
            answer: "South Africa",
            explanation: "South Africa has Executive (Pretoria), Judicial (Bloemfontein), and Legislative (Cape Town) capitals."
        },
        {
            category: "Geography",
            difficulty: "Hard",
            question: "What is the capital city of Mongolia?",
            options: ["Ulaanbaatar", "Astana", "Tashkent", "Bishkek"],
            answer: "Ulaanbaatar",
            explanation: "Ulaanbaatar is the capital and largest city of Mongolia."
        },
        {
            category: "Geography",
            difficulty: "Hard",
            question: "Which strait connects the Black Sea to the Sea of Marmara?",
            options: ["Dardanelles", "Bosporus Strait", "Strait of Gibraltar", "Strait of Hormuz"],
            answer: "Bosporus Strait",
            explanation: "The Bosporus Strait runs through Istanbul, connecting the Black Sea to the Sea of Marmara."
        },
        {
            category: "Geography",
            difficulty: "Hard",
            question: "Which country enclaves both San Marino and Vatican City?",
            options: ["France", "Switzerland", "Italy", "Austria"],
            answer: "Italy",
            explanation: "Italy completely surrounds both landlocked sovereign microstates."
        }
    ];

    // Additional questions to comfortably exceed 90 items
    const extraQuestions = [
        // Science Additions
        { category: "Science", difficulty: "Easy", question: "What planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: "Mercury", explanation: "Mercury orbits closest to the Sun." },
        { category: "Science", difficulty: "Medium", question: "What element has atomic number 1?", options: ["Helium", "Hydrogen", "Lithium", "Carbon"], answer: "Hydrogen", explanation: "Hydrogen has 1 proton and atomic number 1." },
        { category: "Science", difficulty: "Hard", question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], answer: "Nitrogen", explanation: "Nitrogen accounts for about 78% of Earth's atmosphere." },
        
        // Technology Additions
        { category: "Technology", difficulty: "Easy", question: "What does 'URL' stand for?", options: ["Uniform Resource Locator", "Universal Reference Link", "Unified Response Line", "User Resource List"], answer: "Uniform Resource Locator", explanation: "URL specifies the web address of a resource." },
        { category: "Technology", difficulty: "Medium", question: "Which operating system uses the Linux kernel?", options: ["Windows 11", "macOS", "Ubuntu", "iOS"], answer: "Ubuntu", explanation: "Ubuntu is a popular open-source Linux distribution." },
        { category: "Technology", difficulty: "Hard", question: "What does 'DNS' stand for?", options: ["Domain Name System", "Digital Network Server", "Data Navigation Structure", "Domain Network Socket"], answer: "Domain Name System", explanation: "DNS translates human-readable domain names into IP addresses." },
        
        // Programming Additions
        { category: "Programming", difficulty: "Easy", question: "What keyword defines a function in Python?", options: ["func", "function", "def", "define"], answer: "def", explanation: "'def' is used to define functions in Python." },
        { category: "Programming", difficulty: "Medium", question: "Which symbol denotes strict equality in JavaScript?", options: ["==", "=", "===", "=>"], answer: "===", explanation: "'===' checks both value and type equality without coercion." },
        { category: "Programming", difficulty: "Hard", question: "What data structure uses LIFO (Last-In, First-Out)?", options: ["Queue", "Stack", "Array", "Tree"], answer: "Stack", explanation: "Stacks process items in Last-In First-Out order." },
        
        // Sports Additions
        { category: "Sports", difficulty: "Easy", question: "In bowling, what is it called when you knock down all pins in one roll?", options: ["Spare", "Strike", "Turkey", "Gutter"], answer: "Strike", explanation: "Knocking down all 10 pins on the first roll is a Strike." },
        { category: "Sports", difficulty: "Medium", question: "Which sport takes place in a velodrome?", options: ["Track Cycling", "Horse Racing", "Fencing", "Rowing"], answer: "Track Cycling", explanation: "Velodromes are banked oval arenas for track cycling." },
        { category: "Sports", difficulty: "Hard", question: "Which country has won the most FIFA Men's World Cup titles?", options: ["Germany", "Italy", "Brazil", "Argentina"], answer: "Brazil", explanation: "Brazil has won 5 FIFA World Cup titles." },
        
        // Geography Additions
        { category: "Geography", difficulty: "Easy", question: "What is the capital city of Germany?", options: ["Munich", "Frankfurt", "Berlin", "Hamburg"], answer: "Berlin", explanation: "Berlin is the capital of Germany." },
        { category: "Geography", difficulty: "Medium", question: "Which mountain is the highest peak in the world?", options: ["K2", "Mount Everest", "Kangchenjunga", "Kilimanjaro"], answer: "Mount Everest", explanation: "Mount Everest reaches 8,848.86 meters above sea level." },
        { category: "Geography", difficulty: "Hard", question: "What is the capital city of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], answer: "Brasília", explanation: "Brasília was constructed in the 1950s to serve as Brazil's capital." }
    ];

    const ALL_QUESTIONS = [...questionBank, ...extraQuestions];

    // ==========================================
    // 2. STATE MANAGEMENT
    // ==========================================
    const state = {
        quizMode: 'category', // 'category' or 'random'
        selectedCategory: 'General Knowledge',
        selectedDifficulty: 'Medium',
        selectedCount: 5,
        
        activeQuestions: [],
        currentIndex: 0,
        score: 0,
        userAnswers: [], // Stores { question, selected, correct, isCorrect, explanation }
        
        timer: null,
        timeLeft: 0,
        isAnswered: false,
        bestScorePercent: 0
    };

    // Time limits per difficulty (in seconds)
    const TIME_LIMITS = {
        'Easy': 20,
        'Medium': 15,
        'Hard': 10
    };

    // ==========================================
    // 3. DOM ELEMENTS
    // ==========================================
    const screens = {
        welcome: document.getElementById('welcomeScreen'),
        config: document.getElementById('configScreen'),
        question: document.getElementById('questionScreen'),
        results: document.getElementById('resultsScreen'),
        review: document.getElementById('reviewScreen')
    };

    // Header & Global
    const globalBestScoreEl = document.getElementById('globalBestScore');
    const headerLogoEl = document.getElementById('headerLogo');

    // Welcome Screen Buttons
    const btnStartWelcome = document.getElementById('btnStartWelcome');

    // Config Screen Elements
    const modeCards = document.querySelectorAll('.mode-card');
    const categoryGrid = document.getElementById('categoryGrid');
    const categoryCards = document.querySelectorAll('.category-card');
    const categoryStepContainer = document.getElementById('categoryStepContainer');
    const difficultyCards = document.querySelectorAll('.difficulty-card');
    const countButtons = document.querySelectorAll('.btn-count');
    const configError = document.getElementById('configError');
    const btnLaunchQuiz = document.getElementById('btnLaunchQuiz');
    const btnBackToHome = document.getElementById('btnBackToHome');

    // Question Screen Elements
    const metaCategory = document.getElementById('metaCategory');
    const metaDifficulty = document.getElementById('metaDifficulty');
    const timerBox = document.getElementById('timerBox');
    const timerText = document.getElementById('timerText');
    const questionCounter = document.getElementById('questionCounter');
    const progressPercent = document.getElementById('progressPercent');
    const progressBarFill = document.getElementById('progressBarFill');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackExplanation = document.getElementById('feedbackExplanation');

    // Results Screen Elements
    const resultHeadlineBadge = document.getElementById('resultHeadlineBadge');
    const scoreRingProgress = document.getElementById('scoreRingProgress');
    const resultPercentageText = document.getElementById('resultPercentageText');
    const resScoreText = document.getElementById('resScoreText');
    const resCorrectCount = document.getElementById('resCorrectCount');
    const resIncorrectCount = document.getElementById('resIncorrectCount');
    const resSummaryMode = document.getElementById('resSummaryMode');
    const resSummaryCategoryRow = document.getElementById('resSummaryCategoryRow');
    const resSummaryCategory = document.getElementById('resSummaryCategory');
    const resSummaryDifficulty = document.getElementById('resSummaryDifficulty');
    const resSummaryBest = document.getElementById('resSummaryBest');
    const btnReviewAnswers = document.getElementById('btnReviewAnswers');
    const btnPlayAgain = document.getElementById('btnPlayAgain');
    const btnHomeFromResults = document.getElementById('btnHomeFromResults');

    // Review Screen Elements
    const reviewList = document.getElementById('reviewList');
    const btnBackToResults = document.getElementById('btnBackToResults');
    const btnRestartFromReview = document.getElementById('btnRestartFromReview');

    // ==========================================
    // 4. CORE INITIALIZATION
    // ==========================================
    function initializeApp() {
        loadBestScore();
        bindEvents();
        showScreen('welcome');
    }

    function loadBestScore() {
        try {
            const saved = localStorage.getItem('quizzy_best_score');
            if (saved !== null) {
                const parsed = parseInt(saved, 10);
                if (!isNaN(parsed) && parsed >= 0 && parsed <= 100) {
                    state.bestScorePercent = parsed;
                }
            }
        } catch (e) {
            console.warn('localStorage read error:', e);
        }
        globalBestScoreEl.textContent = `${state.bestScorePercent}%`;
    }

    function saveBestScore(newPercent) {
        if (newPercent > state.bestScorePercent) {
            state.bestScorePercent = newPercent;
            try {
                localStorage.setItem('quizzy_best_score', newPercent.toString());
            } catch (e) {
                console.warn('localStorage write error:', e);
            }
            globalBestScoreEl.textContent = `${state.bestScorePercent}%`;
        }
    }

    function showScreen(screenKey) {
        Object.keys(screens).forEach(key => {
            if (key === screenKey) {
                screens[key].classList.add('active');
            } else {
                screens[key].classList.remove('active');
            }
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Shuffle Array Utility
    function shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // ==========================================
    // 5. EVENT BINDING & CONFIGURATION LOGIC
    // ==========================================
    function bindEvents() {
        // Logo Click
        headerLogoEl.addEventListener('click', () => {
            clearTimer();
            showScreen('welcome');
        });

        // Welcome screen navigation
        btnStartWelcome.addEventListener('click', () => {
            showScreen('config');
        });

        // Mode Card Selection
        modeCards.forEach(card => {
            card.addEventListener('click', () => {
                modeCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                state.quizMode = card.getAttribute('data-mode');

                if (state.quizMode === 'random') {
                    categoryStepContainer.style.opacity = '0.5';
                    categoryStepContainer.style.pointerEvents = 'none';
                } else {
                    categoryStepContainer.style.opacity = '1';
                    categoryStepContainer.style.pointerEvents = 'auto';
                }
            });
        });

        // Category Card Selection
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                categoryCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                state.selectedCategory = card.getAttribute('data-category');
            });
        });

        // Difficulty Card Selection
        difficultyCards.forEach(card => {
            card.addEventListener('click', () => {
                difficultyCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                state.selectedDifficulty = card.getAttribute('data-difficulty');
            });
        });

        // Question Count Selection
        countButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                countButtons.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                state.selectedCount = parseInt(btn.getAttribute('data-count'), 10);
            });
        });

        // Launch Quiz Button
        btnLaunchQuiz.addEventListener('click', validateAndStartQuiz);
        btnBackToHome.addEventListener('click', () => showScreen('welcome'));

        // Results buttons
        btnReviewAnswers.addEventListener('click', renderReviewScreen);
        btnPlayAgain.addEventListener('click', () => showScreen('config'));
        btnHomeFromResults.addEventListener('click', () => showScreen('welcome'));

        // Review buttons
        btnBackToResults.addEventListener('click', () => showScreen('results'));
        btnRestartFromReview.addEventListener('click', () => showScreen('config'));
    }

    function validateAndStartQuiz() {
        configError.classList.add('hidden');
        configError.textContent = '';

        let pool = ALL_QUESTIONS.filter(q => q.difficulty === state.selectedDifficulty);

        if (state.quizMode === 'category') {
            pool = pool.filter(q => q.category === state.selectedCategory);
        }

        if (pool.length === 0) {
            configError.textContent = `No questions found for ${state.selectedCategory} on ${state.selectedDifficulty} difficulty. Please choose another combination.`;
            configError.classList.remove('hidden');
            return;
        }

        if (pool.length < state.selectedCount) {
            configError.textContent = `Only ${pool.length} questions available for your selection. Starting quiz with ${pool.length} questions.`;
            configError.classList.remove('hidden');
            
            setTimeout(() => {
                startQuiz(pool, pool.length);
            }, 1500);
            return;
        }

        startQuiz(pool, state.selectedCount);
    }

    // ==========================================
    // 6. QUIZ EXECUTION ENGINE
    // ==========================================
    function startQuiz(pool, requestedCount) {
        const shuffledPool = shuffleArray(pool);
        state.activeQuestions = shuffledPool.slice(0, requestedCount).map(q => {
            return {
                ...q,
                shuffledOptions: shuffleArray(q.options)
            };
        });

        state.currentIndex = 0;
        state.score = 0;
        state.userAnswers = [];
        state.isAnswered = false;

        showScreen('question');
        displayQuestion();
    }

    function displayQuestion() {
        clearTimer();
        state.isAnswered = false;
        feedbackBox.classList.add('hidden');
        feedbackBox.className = 'feedback-box hidden';

        const q = state.activeQuestions[state.currentIndex];
        const total = state.activeQuestions.length;

        // Header metadata
        metaCategory.textContent = state.quizMode === 'random' ? 'Random Mixed' : q.category;
        metaDifficulty.textContent = q.difficulty;
        questionCounter.textContent = `Question ${state.currentIndex + 1} of ${total}`;
        
        const percentVal = Math.round(((state.currentIndex) / total) * 100);
        progressPercent.textContent = `${percentVal}%`;
        progressBarFill.style.width = `${percentVal}%`;

        // Question text
        questionText.textContent = q.question;

        // Options
        optionsContainer.innerHTML = '';
        const prefixes = ['A', 'B', 'C', 'D'];

        q.shuffledOptions.forEach((optText, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `
                <span class="option-prefix">${prefixes[index]}</span>
                <span class="option-text">${escapeHtml(optText)}</span>
            `;
            btn.addEventListener('click', () => handleAnswerSelection(optText, btn));
            optionsContainer.appendChild(btn);
        });

        startTimer();
    }

    function escapeHtml(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }

    // ==========================================
    // 7. TIMER LOGIC
    // ==========================================
    function startTimer() {
        state.timeLeft = TIME_LIMITS[state.selectedDifficulty] || 15;
        updateTimerDisplay();

        state.timer = setInterval(() => {
            state.timeLeft--;
            updateTimerDisplay();

            if (state.timeLeft <= 0) {
                clearTimer();
                handleTimeUp();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        timerText.textContent = `${state.timeLeft}s`;
        if (state.timeLeft <= 5) {
            timerBox.classList.add('warning');
        } else {
            timerBox.classList.remove('warning');
        }
    }

    function clearTimer() {
        if (state.timer) {
            clearInterval(state.timer);
            state.timer = null;
        }
    }

    // ==========================================
    // 8. ANSWER HANDLING & FEEDBACK
    // ==========================================
    function handleAnswerSelection(selectedOptionText, clickedBtn) {
        if (state.isAnswered) return;
        state.isAnswered = true;
        clearTimer();

        const q = state.activeQuestions[state.currentIndex];
        const isCorrect = (selectedOptionText === q.answer);

        if (isCorrect) {
            state.score++;
        }

        // Save detailed response
        state.userAnswers.push({
            question: q.question,
            selected: selectedOptionText,
            correct: q.answer,
            isCorrect: isCorrect,
            explanation: q.explanation
        });

        // Lock options & style them
        const buttons = optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            btn.disabled = true;
            const textSpan = btn.querySelector('.option-text').textContent;

            if (textSpan === q.answer) {
                btn.classList.add('correct');
            }
            if (textSpan === selectedOptionText && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        // Display feedback box
        if (isCorrect) {
            feedbackTitle.textContent = "Correct Answer!";
            feedbackBox.className = "feedback-box correct";
        } else {
            feedbackTitle.textContent = "Incorrect Answer";
            feedbackBox.className = "feedback-box incorrect";
        }
        feedbackExplanation.textContent = q.explanation;
        feedbackBox.classList.remove('hidden');

        // Transition to next question
        setTimeout(nextQuestion, 2000);
    }

    function handleTimeUp() {
        if (state.isAnswered) return;
        state.isAnswered = true;

        const q = state.activeQuestions[state.currentIndex];

        state.userAnswers.push({
            question: q.question,
            selected: "Time Expired",
            correct: q.answer,
            isCorrect: false,
            explanation: q.explanation
        });

        const buttons = optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            btn.disabled = true;
            const textSpan = btn.querySelector('.option-text').textContent;
            if (textSpan === q.answer) {
                btn.classList.add('correct');
            }
        });

        feedbackTitle.textContent = "Time's Up!";
        feedbackExplanation.textContent = `The correct answer was: ${q.answer}. ${q.explanation}`;
        feedbackBox.className = "feedback-box incorrect";
        feedbackBox.classList.remove('hidden');

        setTimeout(nextQuestion, 2200);
    }

    function nextQuestion() {
        state.currentIndex++;
        if (state.currentIndex < state.activeQuestions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }

    // ==========================================
    // 9. RESULTS & PERFORMANCE REVIEW
    // ==========================================
    function showResults() {
        clearTimer();
        const total = state.activeQuestions.length;
        const percentage = Math.round((state.score / total) * 100);

        // Update high score in localStorage
        saveBestScore(percentage);

        // Set Headline Message
        if (percentage === 100) {
            resultHeadlineBadge.textContent = "Outstanding! Perfect Score!";
        } else if (percentage >= 80) {
            resultHeadlineBadge.textContent = "Excellent Performance!";
        } else if (percentage >= 60) {
            resultHeadlineBadge.textContent = "Great Job!";
        } else if (percentage >= 40) {
            resultHeadlineBadge.textContent = "Good Effort!";
        } else {
            resultHeadlineBadge.textContent = "Keep Practising!";
        }

        // Circular progress ring setup (Circumference ~ 326.72 for r=52)
        const circumference = 326.72;
        const offset = circumference - (percentage / 100) * circumference;
        scoreRingProgress.style.strokeDashoffset = offset;
        resultPercentageText.textContent = `${percentage}%`;

        // Text Metrics
        resScoreText.textContent = `${state.score} / ${total}`;
        resCorrectCount.textContent = state.score;
        resIncorrectCount.textContent = total - state.score;

        // Summary Info
        resSummaryMode.textContent = state.quizMode === 'random' ? 'Random Mixed' : 'Category-Based';
        if (state.quizMode === 'random') {
            resSummaryCategoryRow.style.display = 'none';
        } else {
            resSummaryCategoryRow.style.display = 'flex';
            resSummaryCategory.textContent = state.selectedCategory;
        }
        resSummaryDifficulty.textContent = state.selectedDifficulty;
        resSummaryBest.textContent = `${state.bestScorePercent}%`;

        showScreen('results');
    }

    function renderReviewScreen() {
        reviewList.innerHTML = '';

        state.userAnswers.forEach((ans, idx) => {
            const item = document.createElement('div');
            item.className = `review-item ${ans.isCorrect ? 'is-correct' : 'is-incorrect'}`;

            item.innerHTML = `
                <div class="review-item-header">
                    <div class="review-question">Q${idx + 1}: ${escapeHtml(ans.question)}</div>
                    <span class="status-badge ${ans.isCorrect ? 'correct' : 'incorrect'}">
                        ${ans.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                </div>
                <div class="review-answer-info">
                    <p>Your Answer: <span class="${ans.isCorrect ? 'text-success' : 'text-danger'}">${escapeHtml(ans.selected)}</span></p>
                    ${!ans.isCorrect ? `<p>Correct Answer: <span class="text-success">${escapeHtml(ans.correct)}</span></p>` : ''}
                </div>
                <div class="review-explanation">
                    <strong>Explanation:</strong> ${escapeHtml(ans.explanation)}
                </div>
            `;
            reviewList.appendChild(item);
        });

        showScreen('review');
    }

    // Launch Application
    initializeApp();
});