const caseStudies = [
  {
    slug: "skillforge",
    title: "SkillForge Marketplace",
    type: "B2B / B2C Platform Architecture",
    tagline: "High-concurrency matching engine connecting universities and enterprise projects.",
    metrics: [
      { value: "0 Latency", label: "Real-time Matching" },
      { value: "Microservices", label: "Go & Python" }
    ],
    problem: "A monolithic legacy architecture couldn't handle the complex, real-time matching of thousands of student profiles with enterprise project requirements without severe latency.",
    solution: "Architected a decoupled microservices backend. Used Go for high-throughput concurrency, Python/FastAPI for the AI matching algorithms, and SvelteKit for a blazing-fast, reactive frontend. Containerized via Docker for zero-downtime deployment.",
    outcome: "Delivered a production-ready MVP capable of handling 10k+ concurrent connections flawlessly, significantly reducing operational bottlenecks for the founding team.",
    tech: ["Go", "Python", "FastAPI", "SvelteKit", "MongoDB", "Docker"],
    links: { code: "https://github.com/iknizzz1807/SkillForge" }
  },
  {
    slug: "data-ingestion",
    title: "Enterprise Data Ingestion (Visual Hive UK)",
    type: "AI / Data Pipeline Infrastructure",
    tagline: "Automated unstructured document ingestion and RAG-ready vector indexing.",
    metrics: [
      { value: "90%", label: "Automation Increase" },
      { value: "Zero", label: "Hallucinations" }
    ],
    problem: "A UK startup faced a critical bottleneck: manually parsing complex, unstructured documents. Standard RAG pipelines suffered from context fragmentation and dangerous AI hallucinations in enterprise settings.",
    solution: "Built a multi-stage, asynchronous ingestion pipeline using Next.js and Python (FastAPI). Implemented semantic chunking and dynamic query routing with Qdrant vector database to ensure absolute data isolation (multi-tenant RAG) and semantic accuracy.",
    outcome: "Eliminated manual data entry, providing an enterprise-grade, hallucination-free retrieval system that drastically reduced API inference costs.",
    tech: ["Next.js", "Python", "FastAPI", "Qdrant", "Prisma", "Directus"],
    links: { code: "https://github.com/iknizzz1807/data-ingestion" }
  },
  {
    slug: "jarvis",
    title: "JARVIS Autonomous Voice Agent",
    type: "Hardware / Edge AI Integration",
    tagline: "Local-first, low-latency voice assistant on ESP32 with persistent vector memory.",
    metrics: [
      { value: "<500ms", label: "Response Latency" },
      { value: "5-Layer", label: "Vector Memory" }
    ],
    problem: "Cloud-dependent AI voice assistants suffer from high latency, lack of privacy, and an inability to maintain long-term, multi-session contextual memory on embedded devices.",
    solution: "Engineered an ESP32-based hardware integration using C++ and WebSockets for real-time, bidirectional audio streaming. Built a Python backend utilizing Whisper (ASR), Gemini (LLM reasoning), and ChromaDB for a 5-layer persistent memory architecture.",
    outcome: "Achieved near-human conversational latency (<500ms) with deep contextual reasoning, entirely bypassing traditional cloud API bottlenecks for edge hardware.",
    tech: ["Python", "C++", "ESP32", "WebSockets", "ChromaDB", "Whisper", "Gemini"],
    links: null
  },
  {
    slug: "aic-multimodal",
    title: "AIC Multimodal Search Engine",
    type: "High-Performance Search Infrastructure",
    tagline: "Unified semantic search across heterogeneous media (video, audio, image).",
    metrics: [
      { value: "Sub-sec", label: "Semantic Search" },
      { value: "Hybrid", label: "Vector + Lexical" }
    ],
    problem: "Standard text-based search engines fail when navigating massive, unstructured media libraries (audio, video), drastically slowing down content discovery and retrieval.",
    solution: "Architected a hybrid retrieval pipeline combining Milvus (vector embeddings) and Elasticsearch (lexical search). Developed automated background workers using OpenCV and FFmpeg to extract, chunk, and index frames and audio tracks asynchronously.",
    outcome: "Enabled instantaneous, highly accurate semantic discovery across diverse media formats, eliminating the need for manual media tagging.",
    tech: ["Python", "FastAPI", "Milvus", "Elasticsearch", "OpenCV", "FFmpeg"],
    links: null
  }
];
