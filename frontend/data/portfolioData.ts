export type Language = 'en' | 'de';

export interface ProjectItem {
  id: string;
  title: string;
  category: { en: string; de: string };
  metrics: string;
  tech: string[];
  description: { en: string; de: string };
  image: string;
  link?: string;
}

export interface PhotoItem {
  id: string;
  title: { en: string; de: string };
  category: 'portraits' | 'architecture' | 'street' | 'atmospheric';
  location: string;
  exif: string;
  aspect: 'square' | 'portrait' | 'landscape';
  imageUrl: string;
}

export interface VideoItem {
  id: string;
  title: { en: string; de: string };
  category: { en: string; de: string };
  role: { en: string; de: string };
  format: string;
  description: { en: string; de: string };
  thumbnailUrl: string;
  duration: string;
  videoUrl?: string;
}

export const portfolioData = {
  navigation: {
    en: {
      webDev: 'Web development',
      photo: 'photography',
      video: 'Videography',
      about: 'The person behind it',
      contact: 'contact',
      seoTest: 'SEO Quick Test',
      imprint: 'imprint',
      privacy: 'Data protection',
      rights: 'All rights reserved',
    },
    de: {
      webDev: 'Webentwicklung',
      photo: 'Fotografie',
      video: 'Videografie',
      about: 'Der Mensch dahinter',
      contact: 'Kontakt',
      seoTest: 'SEO Schnelltest',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      rights: 'Alle Rechte vorbehalten',
    }
  },

  heroSlides: [
    {
      id: 'code',
      number: '01',
      word: 'Code.',
      name: 'CHRISTOPH NAGEL',
      subtitle: {
        en: 'Web developer, photographer and videographer from Dorsten in the Ruhr area',
        de: 'Webentwickler, Fotograf und Videograf aus Dorsten im Ruhrgebiet'
      },
      descriptor: {
        en: 'Frontend Architecture · High Performance · AI Automations',
        de: 'Frontend-Architektur · Höchstleistung · KI-Automatisierung'
      }
    },
    {
      id: 'photo',
      number: '02',
      word: 'Photo.',
      name: 'CHRISTOPH NAGEL',
      subtitle: {
        en: 'Visual storyteller, monochrome depth and architectural geometry',
        de: 'Visueller Geschichtenerzähler, Schwarz-Weiß-Tiefe und architektonische Geometrie'
      },
      descriptor: {
        en: 'Authentic Portraits · Brutalism · Atmospheric Light',
        de: 'Authentische Porträts · Brutalismus · Atmosphärisches Licht'
      }
    },
    {
      id: 'video',
      number: '03',
      word: 'Film.',
      name: 'CHRISTOPH NAGEL',
      subtitle: {
        en: 'Cinematic rhythm, concept-driven motion, and focused storytelling',
        de: 'Kinetischer Rhythmus, bewusste Bewegung und fokussiertes Storytelling'
      },
      descriptor: {
        en: 'Directing · Cinematography · DaVinci Resolve Color',
        de: 'Regie · Kameraführung · DaVinci Resolve Color Grading'
      }
    }
  ],

  webDev: {
    kicker: { en: '01 Web development', de: '01 Webentwicklung' },
    headline: {
      en: 'Digital solutions with substance',
      de: 'Digitale Lösungen mit Substanz'
    },
    paragraphs: {
      en: [
        'Good web development does not begin with the first line of code, but with understanding what is truly needed. I want to know what goal is to be achieved, what requirements are behind it, and what a solution can look like that convinces not only today, but in the long term.',
        'That is why I take the time to closely examine technical conditions and relationships before deciding on the right path. In doing so, I combine profound technical knowledge with a clear sense of user experience, speed, and sustainable structures.',
        'AI and automation are also a natural part of modern development. Not because every problem requires artificial intelligence, but because modern tools simplify processes, eliminate repetitive work, and create entirely new possibilities. I find solutions particularly exciting where technology works seamlessly in the background while feeling effortless to the user.',
        'My goal: digital solutions that work reliably, deliver real value, and remain future-proof. Technology may be complex – using it should never be.'
      ],
      de: [
        'Gute Webentwicklung beginnt für mich nicht mit der ersten Zeile Code, sondern mit dem Verständnis dafür, was wirklich gebraucht wird. Ich möchte wissen, welches Ziel erreicht werden soll, welche Anforderungen dahinterstehen und wie eine Lösung aussehen kann, die nicht nur heute funktioniert, sondern auch langfristig überzeugt.',
        'Deshalb nehme ich mir die Zeit, technische Rahmenbedingungen und Zusammenhänge genau zu betrachten, bevor ich entscheide, welcher Weg der richtige ist. Dabei verbinde ich fundiertes technisches Wissen mit einem klaren Gespür für Benutzerfreundlichkeit, Performance und nachhaltige Strukturen.',
        'Auch KI und Automatisierung gehören für mich heute selbstverständlich dazu. Nicht, weil jede Aufgabe künstliche Intelligenz braucht, sondern weil moderne Technologien Prozesse vereinfachen, wiederkehrende Arbeit reduzieren und neue Möglichkeiten schaffen können. Besonders spannend finde ich Lösungen, bei denen Technik im Hintergrund komplexe Aufgaben übernimmt und sich für den Menschen trotzdem einfach anfühlt.',
        'Mein Ziel sind digitale Lösungen, die zuverlässig funktionieren, echten Mehrwert schaffen und langfristig sinnvoll bleiben. Technik darf komplex sein – die Nutzung sollte es nicht sein.'
      ]
    },
    capabilities: [
      {
        title: { en: 'Modern Frontend & UX', de: 'Modernes Frontend & UX' },
        desc: {
          en: 'Semantic React, TypeScript, Next.js and Tailwind CSS built for responsive perfection and zero bloat.',
          de: 'Semantisches React, TypeScript, Next.js und Tailwind CSS für kompromisslose Responsivität und schlanken Code.'
        }
      },
      {
        title: { en: 'High Performance & SEO', de: 'Höchstleistung & SEO' },
        desc: {
          en: 'Sub-second initial server response, optimized asset delivery, 98+ Core Web Vitals, and structured Schema.org data.',
          de: 'Subsekunden-Antwortzeiten, optimiertes Asset-Delivery, 98+ Core Web Vitals und strukturierte Schema.org-Daten.'
        }
      },
      {
        title: { en: 'WordPress & Headless', de: 'WordPress & Headless CMS' },
        desc: {
          en: 'Over 18 years of WordPress mastery. Custom Gutenberg blocks, headless architectures, and WooCommerce tailored to your needs.',
          de: 'Über 18 Jahre WordPress-Erfahrung. Maßgeschneiderte Gutenberg-Blocks, Headless-Architekturen und WooCommerce.'
        }
      },
      {
        title: { en: 'AI & Process Automation', de: 'KI & Prozess-Automatisierung' },
        desc: {
          en: 'Integrating intelligent LLMs, autonomous pipelines, and API integrations that save hours of manual overhead.',
          de: 'Integration intelligenter Sprachmodelle, automatisierter Pipelines und API-Workflows, die echten Zeitgewinn bringen.'
        }
      }
    ],
    projects: [
      {
        id: 'velox-commerce',
        title: 'Velox Headless Commerce',
        category: { en: 'Headless E-Commerce', de: 'Headless E-Commerce' },
        metrics: '0.4s LCP · +185% Conversion',
        tech: ['Next.js', 'React', 'WooCommerce API', 'Tailwind CSS'],
        description: {
          en: 'High-speed headless storefront with instant client-side filtering, Cart/Checkout resilience, and sub-second page switches.',
          de: 'Hochperformanter Headless-Webshop mit blitzschneller Filterung, stabiler Warenkorb-Synchronisation und minimalen Ladezeiten.'
        },
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        link: 'https://christoph-nagel.dev'
      },
      {
        id: 'klartext-studio',
        title: 'Klartext Agency Platform',
        category: { en: 'Editorial & Brand Architecture', de: 'Editorial & Markenarchitektur' },
        metrics: 'Awwwards Honoree · 99 Performance',
        tech: ['TypeScript', 'Vite', 'GSAP Motion', 'Tailwind'],
        description: {
          en: 'Minimalist monochromatic agency showcase engineered with fluid smooth-scroll interactions and typography-first hierarchy.',
          de: 'Minimalistische, monochrome Agentur-Website mit butterweichen Scroll-Übergängen und typografischer Klarheit.'
        },
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        link: 'https://christoph-nagel.dev'
      },
      {
        id: 'ruhr-telemetry',
        title: 'Ruhr Industry IoT Dashboard',
        category: { en: 'AI & Real-Time Telemetry', de: 'KI & Echtzeit-Telemetrie' },
        metrics: 'Sub-40ms WebSocket · AI Anomaly Alerts',
        tech: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'Chart.js'],
        description: {
          en: 'Industrial sensor monitoring dashboard processing continuous telemetry with automated ML anomaly flags for plant managers.',
          de: 'Industrielles Monitoring-Dashboard zur Verarbeitung von Live-Sensordaten mit automatisierten KI-Anomalieerkennungen.'
        },
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        link: 'https://christoph-nagel.dev'
      },
      {
        id: 'nordic-monograph',
        title: 'Nordic Architectural Monograph',
        category: { en: 'Architectural Portfolio', de: 'Architektur-Portfolio' },
        metrics: '100% Core Web Vitals · Responsive Canvas',
        tech: ['Next.js', 'Headless WordPress', 'Tailwind', 'GraphQL'],
        description: {
          en: 'Monograph showcase for an architectural practice featuring dynamic viewport scaling and adaptive monochrome asset streaming.',
          de: 'Monografische Werkübersicht für ein Architekturbüro mit dynamischer Skalierung und optimiertem Bild-Streaming.'
        },
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        link: 'https://christoph-nagel.dev'
      }
    ]
  },

  photography: {
    kicker: { en: '02 Photography', de: '02 Fotografie' },
    headline: {
      en: 'A clear eye for the right moment',
      de: 'Ein klarer Blick für den richtigen Moment'
    },
    paragraphs: {
      en: [
        'Photography for me is more than capturing a fleeting second. It means observing closely, sensing moods, and unveiling what is often only felt for a brief moment in everyday life.',
        'Light, perspective, composition, and atmosphere work together to tell a story. I approach every scene with quiet attention, observing first, then developing a visual language that fits the person, the location, or the emotion.',
        'My experience allows me to deploy technical precision without it getting in the way. A powerful image is never born from excessive gear, but from a resolute eye for what is essential.',
        'I care about photographs that feel authentic, create intimacy, and resonate long after you look away. A good picture does not need to be loud. But it should remain in your memory.'
      ],
      de: [
        'Fotografie ist für mich mehr als das Festhalten eines Augenblicks. Sie bedeutet, genau hinzusehen, Stimmungen wahrzunehmen und das sichtbar zu machen, was im Alltag oft nur für einen kurzen Moment spürbar ist.',
        'Licht, Perspektive, Komposition und Atmosphäre ergeben erst gemeinsam ein Bild, das etwas erzählt. Ich nähere mich fotografischen Situationen ruhig und aufmerksam, beobachte zunächst und entwickle daraus eine Bildsprache, die zum Menschen, zum Ort oder zum Augenblick passt.',
        'Meine Erfahrung hilft mir dabei, Technik gezielt einzusetzen, ohne dass sie sich in den Vordergrund drängt. Denn ein starkes Bild entsteht nicht durch möglichst viel Ausrüstung, sondern durch den Blick für das Wesentliche.',
        'Mich interessieren Aufnahmen, die authentisch wirken, Nähe schaffen und auch später noch ein Gefühl auslösen. Ein gutes Bild muss nicht laut sein. Aber es darf im Kopf bleiben.'
      ]
    },
    categories: [
      { id: 'all', label: { en: 'All Works', de: 'Alle Arbeiten' } },
      { id: 'portraits', label: { en: 'Portraits', de: 'Porträts' } },
      { id: 'architecture', label: { en: 'Architecture & Form', de: 'Architektur & Form' } },
      { id: 'street', label: { en: 'Street & Ruhr Area', de: 'Street & Ruhrgebiet' } },
      { id: 'atmospheric', label: { en: 'Atmospheric & Mood', de: 'Atmosphäre & Licht' } }
    ],
    items: [
      {
        id: 'photo-1',
        title: { en: 'The Contemplative Portrait', de: 'Das kontemplative Porträt' },
        category: 'portraits' as const,
        location: 'Dorsten Studio',
        exif: 'Leica M11 · 35mm Summilux f/1.4 · 1/250s · ISO 100',
        aspect: 'portrait' as const,
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'photo-2',
        title: { en: 'Industrial Monolith: Zeche Zollverein', de: 'Industrieller Monolith: Zeche Zollverein' },
        category: 'architecture' as const,
        location: 'Essen, Ruhrgebiet',
        exif: 'Sony A7R V · 24-70mm GM II @ 28mm f/8 · 1/640s · ISO 100',
        aspect: 'landscape' as const,
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'photo-3',
        title: { en: 'Urban Solitude in Rain', de: 'Urbane Einsamkeit im Regen' },
        category: 'street' as const,
        location: 'Dortmund Central',
        exif: 'Fujifilm X100V · 23mm f/2 · 1/125s · ISO 800',
        aspect: 'square' as const,
        imageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'photo-4',
        title: { en: 'Geometric Brutalism & Shadow', de: 'Geometrischer Brutalismus & Schatten' },
        category: 'architecture' as const,
        location: 'Ruhr-Universität Bochum',
        exif: 'Sony A7R V · 16-35mm GM @ 18mm f/9 · 1/400s · ISO 64',
        aspect: 'portrait' as const,
        imageUrl: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'photo-5',
        title: { en: 'Morning Mist Across Lippe River', de: 'Morgennebel an den Lippe-Auen' },
        category: 'atmospheric' as const,
        location: 'Dorsten Lippetal',
        exif: 'Sony A7R V · 70-200mm GM II @ 135mm f/4 · 1/500s · ISO 200',
        aspect: 'landscape' as const,
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'photo-6',
        title: { en: 'High-Contrast Creator Expression', de: 'Ausdrucksstarkes Entwickler-Porträt' },
        category: 'portraits' as const,
        location: 'Ruhr Studio',
        exif: 'Sony A7 IV · 85mm GM f/1.4 · 1/320s · ISO 100',
        aspect: 'square' as const,
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },

  videography: {
    kicker: { en: '03 Videography', de: '03 Videografie' },
    headline: {
      en: 'Movement with concept',
      de: 'Bewegung mit Konzept'
    },
    paragraphs: {
      en: [
        'Videography brings together technical mastery, aesthetic design, and genuine emotion. A persuasive video comes to life when frames don’t just look polished, but carry an intentional narrative together.',
        'Before setting up a camera or cutting the first sequence, I thoroughly explore what needs to be communicated and what mood should unfold. From this, I craft a clear visual treatment where framing, movement, audio, and pace interact deliberately.',
        'I work with structure, focus, and an acute sense of nuance. The goal is never to pack in maximum VFX, but to make the right creative decisions for the story at hand.',
        'Sometimes that calls for dynamic tempo; other times for quiet stillness and an edit that lands at precisely the right beat. Twelve transitions, flashing strobe effects, and gratuitous smoke are surprisingly rarely the answer.',
        'My benchmark: moving images that look professional, touch people emotionally, and still have something to say on the third viewing.'
      ],
      de: [
        'Videografie verbindet für mich Technik, Gestaltung und Emotion. Ein überzeugendes Video entsteht dann, wenn Bilder nicht nur gut aussehen, sondern gemeinsam eine Geschichte tragen.',
        'Bevor ich eine Kamera ausrichte oder mit dem Schnitt beginne, beschäftige ich mich intensiv mit der Frage, was vermittelt werden soll und welche Stimmung dabei entstehen darf. Daraus entwickle ich einen klaren visuellen Ansatz, bei dem Bildgestaltung, Bewegung, Ton und Rhythmus bewusst zusammenspielen.',
        'Ich arbeite strukturiert, aufmerksam und mit einem guten Gespür für Details. Dabei geht es mir nicht darum, möglichst viele Effekte unterzubringen, sondern darum, die richtigen Entscheidungen für die jeweilige Geschichte zu treffen.',
        'Manchmal braucht es Dynamik, manchmal Ruhe und manchmal einfach einen Schnitt, der genau im richtigen Moment sitzt. Zwölf Übergänge, drei Lichtblitze und dramatischer Nebel sind dagegen überraschend selten die Lösung.',
        'Mein Anspruch ist Bewegtbild, das professionell wirkt, emotional erreicht und auch nach dem dritten Anschauen noch etwas zu erzählen hat.'
      ]
    },
    productions: [
      {
        id: 'video-1',
        title: { en: 'Ruhrgebiet Nocturne: Industrial Stillness', de: 'Ruhrgebiet Nocturne: Industrielle Stille' },
        category: { en: 'Cinematic Documentary', de: 'Filmische Dokumentation' },
        role: { en: 'Concept, DP & Colorist', de: 'Konzept, Kamera & Color Grading' },
        format: '4K DCI · 2.39:1 Anamorphic',
        duration: '03:42 min',
        description: {
          en: 'A meditation on silence across former coal and steel monoliths in nocturnal North Rhine-Westphalia.',
          de: 'Eine visuelle Studie über Ruhe und Monumentalität im nächtlichen Ruhrgebiet.'
        },
        thumbnailUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'video-2',
        title: { en: 'The Precision of Metal: Craft Heritage', de: 'Präzision aus Metall: Handwerkskultur' },
        category: { en: 'Commercial Brand Film', de: 'Marken- & Unternehmensfilm' },
        role: { en: 'Director, Sound Design', de: 'Regie, Schnitt & Sounddesign' },
        format: '4K ProRes 422 HQ · 24fps',
        duration: '02:18 min',
        description: {
          en: 'Intimate visual exploration of tactile artisanal manufacturing, sparks, and relentless engineering standards.',
          de: 'Taktile Erkundung handwerklicher Präzision, Funkenflug und kompromissloser Qualitätsstandards.'
        },
        thumbnailUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'video-3',
        title: { en: 'Structures in Light: Architectural Motion', de: 'Licht & Struktur: Architektur in Bewegung' },
        category: { en: 'Architecture & Spatial Film', de: 'Architektur & Raumfilm' },
        role: { en: 'Cinematographer', de: 'Kameraführung & Postproduktion' },
        format: 'Sony FX3 · 10-Bit 4:2:2',
        duration: '01:55 min',
        description: {
          en: 'Smooth spatial tracking showcasing clean minimalist concrete, glass reflection, and changing daylight.',
          de: 'Fließende Raumaufnahmen von Sichtbeton, Glasreflexionen und natürlicher Lichtwanderung.'
        },
        thumbnailUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  about: {
    kicker: { en: '04 The person behind it', de: '04 Der Mensch dahinter' },
    headline: {
      en: 'Code, AI and Nature',
      de: 'Code, KI und Natur'
    },
    paragraphs: {
      en: [
        'I am Christoph, usually just Chris, a web developer from the Ruhr area and someone who approaches new ideas with genuine curiosity.',
        'Alongside classic web engineering, I work intensively with artificial intelligence and AI-backed automations. I am fascinated by how we can rethink workflows, simplify recurring tasks, and develop sensible solutions from new technical capabilities.',
        'I see immense opportunity in these developments. At the same time, it is vital to me not to chase every trend blindly. What matters is not what is somehow technically possible, but what genuinely relieves people in everyday reality and creates tangible value.',
        'With all the excitement for digital realms, I need equal balance beyond screens. I love being in nature, roaming with my camera, or simply being where thoughts find room to breathe. This very contrast fuels new perspectives and helps me see problems with clarity.',
        'Perhaps that blend characterizes me best: receptive to emerging technologies, anchored in nature, and pragmatically grounded in execution. Direct, curious, and with both feet on the ground. Typical Ruhrgebiet, through and through.'
      ],
      de: [
        'Ich bin Christoph, meist einfach Chris, Webentwickler aus dem Ruhrgebiet und jemand, der neuen Ideen mit echter Neugier begegnet.',
        'Neben der klassischen Webentwicklung beschäftige ich mich intensiv mit künstlicher Intelligenz und KI-gestützten Automatisierungen. Mich fasziniert, wie sich Prozesse neu denken, wiederkehrende Aufgaben vereinfachen und aus technischen Möglichkeiten sinnvolle Lösungen entwickeln lassen.',
        'Ich sehe in diesen Entwicklungen eine große Chance. Gleichzeitig ist mir wichtig, nicht jedem Trend blind hinterherzulaufen. Für mich zählt nicht, was technisch irgendwie möglich ist, sondern was im Alltag wirklich hilft, Menschen entlastet und einen echten Mehrwert schafft.',
        'Bei aller Begeisterung für digitale Themen brauche ich ebenso den Ausgleich außerhalb dieser Welt. Ich bin gerne in der Natur, unterwegs mit der Kamera oder einfach dort, wo Gedanken wieder etwas mehr Raum bekommen. Gerade dieser Kontrast hilft mir, neue Perspektiven zu entwickeln und Dinge klarer zu sehen.',
        'Vielleicht beschreibt mich genau diese Mischung ganz gut: offen für neue Technologien, verbunden mit der Natur und bodenständig in der Umsetzung. Ich denke gerne voraus, verliere dabei aber ungern den Blick für das, was wirklich wichtig ist. Ganz Ruhrgebiet eben. Direkt, neugierig und mit beiden Füßen auf dem Boden. Meistens jedenfalls.'
      ]
    },
    stats: [
      { value: '18+', label: { en: 'Years with Code & CMS', de: 'Jahre Web & CMS Erfahrung' } },
      { value: '120+', label: { en: 'Projects Shipped', de: 'Erfolgreiche Projekte' } },
      { value: '99', label: { en: 'Average Lighthouse Score', de: 'Durchschnittlicher Lighthouse Score' } },
      { value: '100%', label: { en: 'Ruhrgebiet Pragmatism', de: 'Ehrliche Ruhrgebiets-Klarheit' } }
    ],
    gearAndStack: [
      {
        category: { en: 'Development Stack', de: 'Entwicklungs-Stack' },
        items: ['React 19 & TypeScript', 'Next.js & Vite', 'Tailwind CSS', 'WordPress / Headless WooCommerce', 'Node.js & Python', 'REST & GraphQL APIs', 'Git & Docker']
      },
      {
        category: { en: 'AI & Automation', de: 'KI & Automatisierung' },
        items: ['LLM APIs (Claude, OpenAI, Gemini)', 'Custom Agent Workflows', 'Python Scraping & Data Pipelines', 'n8n & Webhooks', 'Automated SEO & Content Audits']
      },
      {
        category: { en: 'Camera & Optics', de: 'Kameras & Optiken' },
        items: ['Sony FX3 Cinema Line', 'Sony Alpha 7R V (61MP)', 'Leica M System', 'Sony G-Master Primes (24mm, 35mm, 50mm, 85mm f/1.4)', 'DJI Ronin RS3 Pro Gimbal']
      },
      {
        category: { en: 'Post-Production & Audio', de: 'Postproduktion & Audio' },
        items: ['DaVinci Resolve Studio (Color & Edit)', 'Capture One Pro', 'Adobe Creative Cloud', 'Sennheiser & Røde Wireless Audio', 'ProArt Color-Calibrated Displays']
      }
    ]
  },

  seoTestModal: {
    title: { en: 'SEO Quick Test', de: 'SEO Schnelltest' },
    headline: {
      en: 'Is your website technically fit for search engines?',
      de: 'Ist deine Webseite gut aufgestellt?'
    },
    subline: {
      en: 'Enter your domain to inspect the most critical technical SEO foundations, Core Web Vitals, and indexability in seconds.',
      de: 'URL eingeben und direkt sehen, ob bei den wichtigsten technischen SEO-Grundlagen Optimierungsbedarf besteht.'
    },
    placeholder: 'https://your-company.com',
    submitButton: { en: 'Run Audit', de: 'Analysieren' },
    loadingText: {
      en: 'Evaluating website performance, HTML semantics, accessibility, and crawlability...',
      de: 'Webseite wird geprüft … SEO, Barrierefreiheit und technische Ladezeiten werden ausgewertet.'
    },
    sampleScenarios: {
      fast: {
        score: 94,
        grade: 'A+',
        summary: {
          en: 'Exceptional technical baseline. Fast load times, clean semantics, and solid crawlability.',
          de: 'Hervorragende technische Grundlage. Schnelle Ladezeiten, saubere Semantik und gute Indexierbarkeit.'
        },
        checks: [
          { name: 'Core Web Vitals (LCP < 1.2s)', status: 'pass', note: '0.85s LCP measured' },
          { name: 'Semantic H1-H6 Hierarchy', status: 'pass', note: 'Proper single H1 and logical hierarchy' },
          { name: 'Meta Description & OpenGraph', status: 'pass', note: 'All preview cards configured' },
          { name: 'Mobile Viewport & Touch Targets', status: 'pass', note: 'Fully responsive and accessible' },
          { name: 'SSL / TLS Security & HTTP/2', status: 'pass', note: 'Modern encryption active' },
          { name: 'Schema.org Structured Data', status: 'advisory', note: 'Consider adding Organization and Breadcrumb JSON-LD' }
        ]
      },
      standard: {
        score: 72,
        grade: 'B',
        summary: {
          en: 'Solid foundation, but notable optimization potential in asset delivery and structured data.',
          de: 'Gute Basis, aber deutliches Optimierungspotenzial bei Ladezeiten und strukturierten Daten.'
        },
        checks: [
          { name: 'Core Web Vitals (LCP)', status: 'warn', note: '2.9s LCP – uncompressed imagery detected' },
          { name: 'Semantic H1-H6 Hierarchy', status: 'pass', note: 'Valid heading structure' },
          { name: 'Meta Description & OpenGraph', status: 'warn', note: 'Missing OpenGraph image tags' },
          { name: 'Mobile Viewport & Touch Targets', status: 'pass', note: 'Good responsiveness' },
          { name: 'SSL / TLS Security', status: 'pass', note: 'Valid HTTPS certificate' },
          { name: 'Schema.org Structured Data', status: 'fail', note: 'No Schema.org markup found' }
        ]
      }
    }
  },

  contact: {
    title: { en: 'Let’s talk directly', de: 'Lass uns direkt sprechen' },
    subtitle: {
      en: 'No automated call centers, no sales fluff. Honest advice from Dorsten.',
      de: 'Kein Callcenter, kein Marketing-Sprech. Ehrliche Beratung aus Dorsten.'
    },
    email: 'hello@just-a-web-developer.com',
    location: 'Dorsten, Ruhrgebiet · Germany',
    services: [
      { id: 'web', label: { en: 'Web Development / WordPress', de: 'Webentwicklung / WordPress' } },
      { id: 'seo', label: { en: 'Technical SEO Audit & Speed', de: 'Technisches SEO & Performance' } },
      { id: 'ai', label: { en: 'AI & Automation Workflow', de: 'KI & Prozess-Automatisierung' } },
      { id: 'photo', label: { en: 'Photography (Portraits / Commercial)', de: 'Fotografie (Porträts / Architektur)' } },
      { id: 'video', label: { en: 'Videography / Video Production', de: 'Videografie / Filmproduktion' } }
    ],
    form: {
      nameLabel: { en: 'Your Name', de: 'Dein Name' },
      emailLabel: { en: 'Your Email', de: 'Deine E-Mail-Adresse' },
      messageLabel: { en: 'Project Details & Goals', de: 'Projekt-Details & Zielsetzung' },
      sendButton: { en: 'Send Inquiry', de: 'Nachricht senden' },
      success: {
        en: 'Thank you! Your message has been received. Chris will get back to you shortly.',
        de: 'Vielen Dank! Deine Nachricht wurde empfangen. Chris meldet sich in Kürze bei dir.'
      }
    },
    socials: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/christoph-nagel/' },
      { name: 'Instagram', url: 'https://www.instagram.com/just.a.web.developer/' },
      { name: 'Xing', url: 'https://www.xing.com/profile/Christoph_Nagel38/' },
      { name: 'Behance', url: 'https://www.behance.net/just-a-web-developer' },
      { name: 'WordPress', url: 'https://profiles.wordpress.org/cmsgeek/' }
    ]
  },

  legal: {
    impressum: {
      title: { en: 'Legal Notice (Impressum)', de: 'Impressum' },
      content: {
        en: `Information pursuant to § 5 TMG:
Christoph Nagel
Webentwicklung & Fotografie
Dorsten im Ruhrgebiet, Germany

Contact:
Email: hello@just-a-web-developer.com
Website: https://christoph-nagel.dev

Responsible for journalistic-editorial content according to § 55 Abs. 2 RStV:
Christoph Nagel
Dorsten, Germany

EU Dispute Resolution:
The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/`,
        de: `Angaben gemäß § 5 TMG:
Christoph Nagel
Webentwicklung, Fotografie & Videografie
Dorsten im Ruhrgebiet, Deutschland

Kontakt:
E-Mail: hello@just-a-web-developer.com
Webseite: https://christoph-nagel.dev

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
Christoph Nagel
Dorsten, Deutschland

EU-Streitschlichtung:
Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/
Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`
      }
    },
    datenschutz: {
      title: { en: 'Data Protection (Privacy Policy)', de: 'Datenschutzerklärung' },
      content: {
        en: `1. Data Protection Overview
We take the protection of your personal data very seriously. We treat your personal information confidentially and in accordance with the statutory data protection regulations (GDPR) and this privacy notice.

2. Data Collection on This Website
Server log files: The provider of these pages automatically collects and stores information in server log files that your browser transmits automatically (browser type, operating system, referrer URL, IP address, time). This data cannot be assigned to specific persons and is not combined with other sources.

3. Contact Form and Email
When you send inquiries via email or the contact form, your details from the inquiry form, including the contact details you provided there, will be stored for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your explicit consent.`,
        de: `1. Datenschutz auf einen Blick
Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung.

2. Datenerfassung auf unserer Website
Server-Log-Dateien: Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse). Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.

3. Kontaktformular und E-Mail-Kontakt
Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.`
      }
    }
  }
};
