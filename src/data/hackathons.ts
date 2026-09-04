export type OperatingStep = {
  step: string
  title: string
  desc: string
  icon: string
}

export type HackathonProject = {
  id: string
  title: string
  hackathon: string
  track: string
  badgeColor: string
  repoUrl: string
  liveDemo?: string
  image?: string
  imageCaption?: string
  tagline: string
  problem: string
  solution: string
  operatingWorkflow: OperatingStep[]
  architectureDAG: string
  keyCapabilities: string[]
  techStack: string[]
  metrics: Array<{ label: string; value: string }>
}

export const hackathons: HackathonProject[] = [
  {
    id: 'autoguard-ai',
    title: 'AutoGuard AI — Autonomous AI Red-Teaming & Prompt Hardening',
    hackathon: 'Google All Things Agentic Hackathon',
    track: 'The Taskmaster Track',
    badgeColor: 'linear-gradient(135deg, #4285F4, #EA4335 35%, #FBBC05 70%, #34A853)',
    repoUrl: 'https://github.com/Bashar-ml-en/Auto_Guard_AI_Agent',
    liveDemo: 'https://autoguard-ai-agent.vercel.app',
    tagline: 'Autonomous multi-agent SecOps taskmaster that red-teams LLMs, evaluates leaks, and self-heals system prompts with zero human in the loop.',
    problem: 'Deploying LLMs in production exposes systems to jailbreaks, delimiter escapes, and PII leaks. Traditional red-teaming requires weeks of manual pen-testing.',
    solution: 'Replaces manual testing with a <30s autonomous 6-stage DAG pipeline executing parallel sandboxed probing with Gemini 3.7 Flash and evolutionary Model Armor prompt mutation.',
    operatingWorkflow: [
      {
        step: '01',
        title: 'Threat Boundary Ingestion',
        desc: 'Parses target system prompts, business constraints, and confidential variables into an isolated security boundary.',
        icon: '📥'
      },
      {
        step: '02',
        title: 'Adversarial Vector Synthesis',
        desc: 'Generates 50+ domain-tailored attack vectors mapped directly to OWASP LLM Top 10 standards with Gemini 3.7 Flash.',
        icon: '⚔️'
      },
      {
        step: '03',
        title: 'Parallel Sandboxed Probing',
        desc: 'Dispatches non-blocking async probe batches against the target model in isolated evaluation runtimes.',
        icon: '⚡'
      },
      {
        step: '04',
        title: 'Critic & Leak Analysis',
        desc: 'Dual-gate regex & LLM Judge audit scoring reveals vulnerabilities (typically baseline ~28.4% resilience).',
        icon: '🔍'
      },
      {
        step: '05',
        title: 'Evolutionary Model Armor',
        desc: 'Iteratively mutates delimiters and structural prompt hierarchies until safety resilience reaches >98.6% (Grade A+).',
        icon: '🛡️'
      },
      {
        step: '06',
        title: 'Cloud Run & Passport Delivery',
        desc: 'Packages hardened microservices for Google Cloud Run and registers verified audit state in Firestore.',
        icon: '☁️'
      }
    ],
    architectureDAG: 'Client Console / CLI / GitHub Action ──> FastAPI DAG Engine ──> Gemini 3.7 Flash Red-Team ──> Model Armor Evolutionary Optimizer ──> Google Cloud Run & Firestore',
    keyCapabilities: [
      '⚡ 6-Stage Autonomous DAG Execution Graph with live SSE streaming',
      '💥 Real-Time Red-Team vs Model Armor Combat Duel Arena',
      '📜 Git-Style Diff Viewer tracking deletions (-3) and additions (+12)',
      '🤖 Native CI/CD GitHub Action (action.yml) & CLI (python -m backend.app.cli)',
      '🏷️ OWASP LLM Top 10 automated threat vector mapping & audit passports'
    ],
    techStack: ['Google Gemini 3.7 Flash', 'Google GenAI SDK', 'FastAPI', 'Google Cloud Run', 'Firestore', 'Tailwind CSS', 'Pytest', 'GitHub Actions'],
    metrics: [
      { label: 'Safety Resilience', value: '98.6%' },
      { label: 'Vulnerability Delta', value: '+70.2%' },
      { label: 'Automated Tests', value: '14/14 (100%)' },
      { label: 'Execution Speed', value: '<30s' }
    ]
  },
  {
    id: 'smartflow-one',
    title: 'SmartFlow One — AI-Powered Financial Document Intelligence',
    hackathon: 'Experian Digital Transformation Hackathon',
    track: 'Lab 1: Digital Transformation & Operations',
    badgeColor: 'linear-gradient(135deg, #00F0FF, #3B82F6 60%, #6366F1)',
    repoUrl: 'https://github.com/vaiyud/ai-powered-financial-report-analysis',
    liveDemo: 'https://ai-powered-financial-report-analysi.vercel.app',
    image: '/hackathons/smartflow-experian-devleague.jpg',
    imageCaption: '🏆 DevLeague 2026 Hackathon Team — Experian AI-Powered Financial Document Intelligence (TalentLabs)',
    tagline: 'Financial document intelligence platform that automatically scrubs PII for PDPA compliance and generates CFO-level executive insights with Google Gemini.',
    problem: 'Financial teams spend hours manually extracting metrics and identifying risks across dense reports, while strict PDPA regulations forbid uploading unmasked personal data to AI.',
    solution: 'Engineered an end-to-end processing pipeline that detects and masks PII client-side before indexing with FAISS and synthesizing financial insights with Gemini 2.5 Flash.',
    operatingWorkflow: [
      {
        step: '01',
        title: 'Multi-Format Ingestion',
        desc: 'Ingests financial reports via drag-and-drop supporting PDF, Excel (XLSX), and CSV spreadsheets.',
        icon: '📄'
      },
      {
        step: '02',
        title: 'Client-Side PII Scrubbing',
        desc: 'Regex-based privacy engine detects and masks NRICs, phone numbers, emails, IBANs, and credit cards before network dispatch.',
        icon: '🔒'
      },
      {
        step: '03',
        title: 'Vector Indexing & Chunking',
        desc: 'Performs semantic chunking and creates vector embeddings stored in high-speed FAISS vector indices.',
        icon: '🧠'
      },
      {
        step: '04',
        title: 'Deterministic Metric Extraction',
        desc: 'Google Gemini extracts Revenue, Opex, Net Profit, and Cash Flow; percentage changes are computed deterministically.',
        icon: '📊'
      },
      {
        step: '05',
        title: '3-Tier Risk Severity Matrix',
        desc: 'Generates classified risk levels (High / Med / Low) with page-level citations and cited mitigation strategies.',
        icon: '⚠️'
      },
      {
        step: '06',
        title: 'Executive Voice Narration',
        desc: 'Web Speech API condenses core findings into a ~75-word audio briefing narrated aloud in ~30 seconds.',
        icon: '🎙️'
      }
    ],
    architectureDAG: 'Document Upload (PDF/XLSX) ──> Regex PII Masking (PDPA) ──> FAISS Vector Index ──> Gemini 2.5 Flash ──> Risk Severity Matrix ──> Voice Narration',
    keyCapabilities: [
      '🛡️ Zero-PII Leakage Engine with partial masking (preserves last 4 digits)',
      '📈 Deterministic Financial Calculations (Revenue, Net Profit, Opex, Cash Flow)',
      '📑 Page-level citation linking for audit compliance and provenance',
      '🎙️ Instant Web Speech API audio executive briefing (~30s spoken summary)',
      '🔐 Supabase Edge Auth with session refresh middleware and data purge center'
    ],
    techStack: ['Next.js', 'React', 'Google Gemini 2.5 Flash', 'FAISS Vector Index', 'Supabase Auth', 'Recharts', 'Tailwind CSS', 'Web Speech API'],
    metrics: [
      { label: 'PII Protection', value: '100% PDPA' },
      { label: 'Analysis Speed', value: '<15s' },
      { label: 'Doc Formats', value: 'PDF / XLSX / CSV' },
      { label: 'Audio Briefing', value: '~30s Voice' }
    ]
  },
  {
    id: 'rakyatos',
    title: 'RakyatOS — Grounded Civic & Anti-Scam Intelligence OS',
    hackathon: 'RektHackathon 2026',
    track: 'AI Civic Infrastructure & Fraud Defense',
    badgeColor: 'linear-gradient(135deg, #10B981, #06B6D4 50%, #3B82F6)',
    repoUrl: 'https://github.com/rekthackathon/rakyatos',
    liveDemo: 'https://rakyatos.vercel.app',
    image: '/hackathons/rakyatos-microsoft-rekthackathon.png',
    imageCaption: '🏆 RektHackathon 2026 Team at Microsoft — RakyatOS Grounded Civic AI & Anti-Scam Platform (Claw Collective)',
    tagline: 'Grounded bilingual intelligence layer helping everyday citizens safely navigate government services while proactively screening impersonation scams.',
    problem: 'Malaysians lost RM2.97B to online scams in 2025 due to fragmented government portals and rampant SMS/message impersonations. Victims usually seek help after being hit.',
    solution: 'Pre-screens messages with ScamShield, anchors every single factual answer to verified official registries (Semak Mule, NSRC 997, MyGOV), and rejects hallucinations before reaching users.',
    operatingWorkflow: [
      {
        step: '01',
        title: 'Bilingual Situation Intake',
        desc: 'Citizens input real-life scenarios (job loss, business permits, suspicious SMS) in Bahasa Melayu or English.',
        icon: '🇲🇾'
      },
      {
        step: '02',
        title: 'ScamShield Threat Screening',
        desc: 'Cross-checks suspicious URLs, phone numbers, and messaging against PDRM Semak Mule and NSRC 997 fraud registries.',
        icon: '🛡️'
      },
      {
        step: '03',
        title: 'Official Source Grounding',
        desc: 'Queries verified registry of official agencies (MyGOV, STR/LHDN, SARA, SSM, SMEinfo) with last-verified timestamps.',
        icon: '🏛️'
      },
      {
        step: '04',
        title: 'Anti-Hallucination Guardrail',
        desc: 'Rejects any generated response containing unverified citations before it can be rendered to the user.',
        icon: '🚫'
      },
      {
        step: '05',
        title: 'Step-by-Step Action Roadmap',
        desc: 'Provides pre-screened eligibility checklists and direct official links to legitimate digital portals.',
        icon: '📋'
      },
      {
        step: '06',
        title: 'Human-in-the-Loop Consent',
        desc: 'Enforces explicit user confirmation before any external agency redirect or data storage occurs.',
        icon: '✅'
      }
    ],
    architectureDAG: 'User Situation (BM/EN) ──> ScamShield Threat Filter ──> Official Sources Registry (sources.json) ──> Anti-Hallucination Gate ──> Grounded Action Plan',
    keyCapabilities: [
      '🛡️ Proactive ScamShield Screening protecting against RM2.97B impersonation fraud',
      '📚 Anti-Hallucination Hard Rules enforcing 100% verified official citation links',
      '🇲🇾 Native Bilingual Processing in Bahasa Melayu and English',
      '⏱️ 90-Day Recency Tagging ensuring all government policies are current',
      '👤 Zero-Compromise Privacy requiring explicit consent before minimum field storage'
    ],
    techStack: ['Python', 'FastAPI', 'Qwen LLM', 'Vector Store', 'React', 'Tailwind CSS', 'Vercel', 'PDRM Semak Mule API'],
    metrics: [
      { label: 'Scam Interception', value: 'Pre-Attack' },
      { label: 'Source Grounding', value: '100% Official' },
      { label: 'Hallucinations', value: '0% (Hard Gate)' },
      { label: 'Language Support', value: 'Bilingual (BM/EN)' }
    ]
  }
]
