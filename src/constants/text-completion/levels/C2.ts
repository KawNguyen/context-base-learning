import { TextCompletionPassage } from "../types";

export const C2_TEXT_COMPLETION: TextCompletionPassage[] = [
  {
    id: "c2-1",
    title: "Economic Forecast - Report",
    level: "C2",
    content:
      "Global Economic Outlook: A Prism of Uncertainty\n\nThe global economy currently stands at a precipice, grappling with a confluence of inflationary pressures and geopolitical instability. Central banks have adopted a hawkish stance, implementing aggressive interest rate hikes in a bid to curb runaway prices. However, this monetary tightening risks precipitating a widespread {{1}}.\n\nAnalysts warn that the resilience of emerging markets is being tested by capital flight and currency depreciation. Furthermore, the decoupling of major trade blocs threatens to fragment the established economic order. In this volatile landscape, policymakers must tread a fine line between stabilizing inflation and fostering sustainable growth. The path forward remains fraught with {{2}}. Investors are advised to exercise extreme {{3}}. The outlook is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "recession", isCorrect: true },
          { option: "procession", isCorrect: false },
          { option: "concession", isCorrect: false },
          { option: "succession", isCorrect: false },
        ],
        explanationVi:
          "Gây ra một 'recession' (suy thoái kinh tế) lan rộng. 'Precipitating' nghĩa là kích hoạt hoặc gây ra sự kiện này.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "ambiguity", isCorrect: true },
          { option: "certainty", isCorrect: false },
          { option: "clarity", isCorrect: false },
          { option: "brevity", isCorrect: false },
        ],
        explanationVi: "Fraught with 'ambiguity'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "caution", isCorrect: true },
          { option: "motion", isCorrect: false },
          { option: "notion", isCorrect: false },
          { option: "portion", isCorrect: false },
        ],
        explanationVi: "Exercise extreme 'caution'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "opaque", isCorrect: true },
          { option: "clear", isCorrect: false },
          { option: "bright", isCorrect: false },
          { option: "simple", isCorrect: false },
        ],
        explanationVi: "The outlook is 'opaque' (unclear).",
      },
    ],
  },
  {
    id: "c2-2",
    title: "Legal merger - Contract",
    level: "C2",
    content:
      "Merger Agreement: Stipulations of Indemnity\n\nSection 4.2: Indemnification. The Acquiring Party agrees to indemnify, defend, and hold harmless the Target Company and its respective officers, directors, and employees from and against any and all losses, liabilities, claims, damages, and expenses arising out of or in connection with any breach of representation or {{1}}.\n\nNotwithstanding the foregoing, the Acquiring Party shall not be liable for any incidental, indirect, or consequential damages, including but not limited to loss of profits. This provision shall survive the closing of the transaction for a period of eighteen months. Any disputes regarding indemnification shall be subject to binding arbitration, as set forth in Article 9. The parties hereby acknowledge that this clause is a material inducement to the {{2}}. Compliance is {{3}}. Signed {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "warranty", isCorrect: true },
          { option: "guaranty", isCorrect: false },
          { option: "certainty", isCorrect: false },
          { option: "sovereignty", isCorrect: false },
        ],
        explanationVi: "Breach of representation or 'warranty'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "execution", isCorrect: true },
          { option: "persecution", isCorrect: false },
          { option: "prosecution", isCorrect: false },
          { option: "solution", isCorrect: false },
        ],
        explanationVi: "Inducement to the 'execution' of the agreement.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "obligatory", isCorrect: true },
          { option: "advisory", isCorrect: false },
          { option: "cursory", isCorrect: false },
          { option: "illusory", isCorrect: false },
        ],
        explanationVi: "Compliance is 'obligatory'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "hereunder", isCorrect: true },
          { option: "thereunder", isCorrect: false },
          { option: "whereunder", isCorrect: false },
          { option: "under", isCorrect: false },
        ],
        explanationVi: "Signed 'hereunder'.",
      },
    ],
  },
  {
    id: "c2-3",
    title: "Scientific Abstract - Journal",
    level: "C2",
    content:
      "Abstract: Neuroplasticity in Geriatric Populations\n\nRecent longitudinal studies have challenged the prevailing dogma that neuroplasticity significantly diminishes with age. Our research demonstrates that targeted cognitive interventions can induce structural and functional reorganization in the geriatric brain. Using functional magnetic resonance imaging (fMRI), we observed increased synaptic density in the hippocampus following a twelve-week regimen of complex motor skill {{1}}.\n\nThese findings suggest that the aging brain retains a remarkable capacity for adaptation, provided that adequate stimuli are presented. This has profound implications for the treatment of neurodegenerative diseases, potentially offering a non-pharmacological avenue to mitigate cognitive decline. Further clinical trials are warranted to substantiate these preliminary {{2}}. The potential is {{3}}. We urge further {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "acquisition", isCorrect: true },
          { option: "inquisition", isCorrect: false },
          { option: "requisition", isCorrect: false },
          { option: "disposition", isCorrect: false },
        ],
        explanationVi: "Motor skill 'acquisition'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "observations", isCorrect: true },
          { option: "conservations", isCorrect: false },
          { option: "reservations", isCorrect: false },
          { option: "preservations", isCorrect: false },
        ],
        explanationVi: "Substantiate these preliminary 'observations'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "immense", isCorrect: true },
          { option: "tense", isCorrect: false },
          { option: "dense", isCorrect: false },
          { option: "sense", isCorrect: false },
        ],
        explanationVi: "The potential is 'immense'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "investigation", isCorrect: true },
          { option: "mitigation", isCorrect: false },
          { option: "litigation", isCorrect: false },
          { option: "instigation", isCorrect: false },
        ],
        explanationVi: "Urge further 'investigation'.",
      },
    ],
  },
  {
    id: "c2-4",
    title: "Philosophical Essay - Excerpt",
    level: "C2",
    content:
      "The Paradigm of existentialism\n\nExistentialism, in its core essence, posits that existence precedes essence, asserting that individuals are solely responsible for giving meaning to their lives and living them passionately and sincerely. This philosophy rejects the notion of inherent purpose, challenging us to confront the inherent absurdity of the universe. It is a call to radical freedom, a burden that Sartre famously described as being 'condemned to be free.'\n\nYet, this freedom is not without its anguish. The realization that our choices are ours alone, bereft of divine guidance or deterministic fate, can be paralyzing. However, it is precisely within this void that the authentic self can {{1}}. To embrace this responsibility is to transcend the mundane and achieve a state of true {{2}}. The journey is {{3}}. Meaning is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "emerge", isCorrect: true },
          { option: "submerge", isCorrect: false },
          { option: "diverge", isCorrect: false },
          { option: "converge", isCorrect: false },
        ],
        explanationVi: "Authentic self can 'emerge'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "autonomy", isCorrect: true },
          { option: "anatomy", isCorrect: false },
          { option: "astronomy", isCorrect: false },
          { option: "economy", isCorrect: false },
        ],
        explanationVi: "State of true 'autonomy'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "arduous", isCorrect: true },
          { option: "tenuous", isCorrect: false },
          { option: "virtuous", isCorrect: false },
          { option: "sinuous", isCorrect: false },
        ],
        explanationVi: "Journey is 'arduous' (difficult).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "constructed", isCorrect: true },
          { option: "obstructed", isCorrect: false },
          { option: "instructed", isCorrect: false },
          { option: "deducted", isCorrect: false },
        ],
        explanationVi: "Meaning is 'constructed'.",
      },
    ],
  },
  {
    id: "c2-5",
    title: "Literary Critique - Review",
    level: "C2",
    content:
      "Review: The Shadow's Echo\n\nJameson's latest novel is a tour de force of narrative complexity, weaving temporal shifts and unreliable narrators into a tapestry of unparalleled depth. The protagonist's psychological disintegration is depicted with a visceral intensity that is both disturbing and mesmerizing. Jameson masterfully employs stream-of-consciousness techniques to blur the lines between reality and {{1}}.\n\nThe novel's prose is dense, laden with allusions and metaphors that demand the reader's full engagement. It is not a book to be skimmed, but rather one to be savored and deconstructed. While some may find the nonlinear structure disorienting, it serves to mirror the fragmented psyche of the central character. A masterpiece of modern {{2}}. It defies {{3}}. A must {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "hallucination", isCorrect: true },
          { option: "illumination", isCorrect: false },
          { option: "destination", isCorrect: false },
          { option: "fascination", isCorrect: false },
        ],
        explanationVi: "Reality and 'hallucination'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "fiction", isCorrect: true },
          { option: "diction", isCorrect: false },
          { option: "friction", isCorrect: false },
          { option: "fraction", isCorrect: false },
        ],
        explanationVi: "Masterpiece of modern 'fiction'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "categorization", isCorrect: true },
          { option: "authorization", isCorrect: false },
          { option: "vaporization", isCorrect: false },
          { option: "memorization", isCorrect: false },
        ],
        explanationVi: "Defies 'categorization'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "read", isCorrect: true },
          { option: "seed", isCorrect: false },
          { option: "need", isCorrect: false },
          { option: "deed", isCorrect: false },
        ],
        explanationVi: "A must 'read'.",
      },
    ],
  },
  {
    id: "c2-6",
    title: "Geopolitical Analysis - Article",
    level: "C2",
    content:
      "The Shifts in Soft Power\n\nIn the contemporary international arena, the efficacy of hard power—military and economic coercion—is increasingly being supplanted by the nuances of soft power. Nations are realizing that influence is best accrued through cultural appeal, diplomatic engagement, and the projection of moral authority. This paradigm shift requires a recalibration of foreign policy {{1}}.\n\nHowever, the deployment of soft power is not without its challenges. It requires a long-term commitment to building relationships and trust, assets that are easily eroded by unilateral actions or hypocrisy. Furthermore, the digital age has democratized information, making it harder for states to control their narratives. Legitimacy is the new currency of global {{2}}. Adaptation is {{3}}. The stakes are {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "objectives", isCorrect: true },
          { option: "adjectives", isCorrect: false },
          { option: "detectives", isCorrect: false },
          { option: "invectives", isCorrect: false },
        ],
        explanationVi: "Foreign policy 'objectives'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "dominance", isCorrect: true },
          { option: "ordinance", isCorrect: false },
          { option: "finance", isCorrect: false },
          { option: "maintenance", isCorrect: false },
        ],
        explanationVi: "Currency of global 'dominance'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "imperative", isCorrect: true },
          { option: "comparative", isCorrect: false },
          { option: "narrative", isCorrect: false },
          { option: "relative", isCorrect: false },
        ],
        explanationVi: "Adaptation is 'imperative'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "high", isCorrect: true },
          { option: "low", isCorrect: false },
          { option: "medium", isCorrect: false },
          { option: "small", isCorrect: false },
        ],
        explanationVi: "The stakes are 'high'.",
      },
    ],
  },
  {
    id: "c2-7",
    title: "Corporate Governance - White Paper",
    level: "C2",
    content:
      "Evolving Standards in Board Oversight\n\nThe landscape of corporate governance is undergoing a seismic shift, driven by increasing stakeholder activism and regulatory scrutiny. Boards are no longer passive observers but active participants in strategic decision-making and risk management. Key areas of focus include ESG (Environmental, Social, and Governance) integration and executive compensation {{1}}.\n\nDirectors are expected to possess a diverse set of skills and deeper industry knowledge to effectively challenge management assumptions. Furthermore, there is a growing emphasis on board diversity as a driver of cognitive variety and better decision outcomes. Transparency and accountability are paramount. Corporations must align with societal {{2}}. Oversight is {{3}}. Trust is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "alignment", isCorrect: true },
          { option: "malignant", isCorrect: false },
          { option: "assignment", isCorrect: false },
          { option: "consignment", isCorrect: false },
        ],
        explanationVi: "Compensation 'alignment'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "expectations", isCorrect: true },
          { option: "exclamations", isCorrect: false },
          { option: "excavations", isCorrect: false },
          { option: "exhalations", isCorrect: false },
        ],
        explanationVi: "Societal 'expectations'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "critical", isCorrect: true },
          { option: "clinical", isCorrect: false },
          { option: "cynical", isCorrect: false },
          { option: "typical", isCorrect: false },
        ],
        explanationVi: "Oversight is 'critical'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "essential", isCorrect: true },
          { option: "potential", isCorrect: false },
          { option: "sequential", isCorrect: false },
          { option: "torrential", isCorrect: false },
        ],
        explanationVi: "Trust is 'essential'.",
      },
    ],
  },
  {
    id: "c2-8",
    title: "Architectural Theory - Essay",
    level: "C2",
    content:
      "Brutalism and the Urban Fabric\n\nBrutalism, often maligned for its austere aesthetic and imposing concrete structures, arguably represents an honest expression of materials and function. Emerging in the post-war era, it prioritized social utility over ornamentation, embodying a utopian vision of communal living. However, its legacy is complex, with many buildings suffering from neglect and public {{1}}.\n\nCritics argue that the style is dehumanizing and alienating, contributing to urban decay. Proponents, conversely, champion its sculptural qualities and structural integrity. Today, we are witnessing a re-evaluation of Brutalist heritage, with preservationists advocating for the adaptive reuse of these icons. The debate highlights the tension between aesthetics and {{2}}. Form follows {{3}}. Context is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "disdain", isCorrect: true },
          { option: "refrain", isCorrect: false },
          { option: "domain", isCorrect: false },
          { option: "terrain", isCorrect: false },
        ],
        explanationVi: "Public 'disdain' (dislike).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "livability", isCorrect: true },
          { option: "liability", isCorrect: false },
          { option: "capability", isCorrect: false },
          { option: "stability", isCorrect: false },
        ],
        explanationVi: "Aesthetics and 'livability'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "function", isCorrect: true },
          { option: "junction", isCorrect: false },
          { option: "sanction", isCorrect: false },
          { option: "fiction", isCorrect: false },
        ],
        explanationVi: "Form follows 'function'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "key", isCorrect: true },
          { option: "lock", isCorrect: false },
          { option: "door", isCorrect: false },
          { option: "floor", isCorrect: false },
        ],
        explanationVi: "Context is 'key'.",
      },
    ],
  },
  {
    id: "c2-9",
    title: "AI Ethics - Commentary",
    level: "C2",
    content:
      "The Moral Algorithms: AI and Agency\n\nAs artificial intelligence becomes increasingly autonomous, the question of moral agency moves from science fiction to urgent reality. If an AI makes a decision that results in harm, where does the liability lie? The 'black box' nature of deep learning algorithms exacerbates this dilemma, as the decision-making process is often opaque even to its {{1}}.\n\nWe must establish robust ethical frameworks that govern AI development, ensuring alignment with human values. This involves addressing algorithmic bias, accountability, and the potential for misuse. We cannot afford to be passive observers of this technological revolution; we must be active stewards. Regulation is {{2}}. Transparency is {{3}}. The future is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "creators", isCorrect: true },
          { option: "predators", isCorrect: false },
          { option: "senators", isCorrect: false },
          { option: "spectators", isCorrect: false },
        ],
        explanationVi: "Opaque even to its 'creators'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "necessary", isCorrect: true },
          { option: "accessory", isCorrect: false },
          { option: "advisory", isCorrect: false },
          { option: "cursory", isCorrect: false },
        ],
        explanationVi: "Regulation is 'necessary'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "paramount", isCorrect: true },
          { option: "amount", isCorrect: false },
          { option: "account", isCorrect: false },
          { option: "surmount", isCorrect: false },
        ],
        explanationVi: "Transparency is 'paramount' (most important).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "now", isCorrect: true },
          { option: "then", isCorrect: false },
          { option: "gone", isCorrect: false },
          { option: "past", isCorrect: false },
        ],
        explanationVi: "The future is 'now'.",
      },
    ],
  },
  {
    id: "c2-10",
    title: "Climate Policy - Brief",
    level: "C2",
    content:
      "The Decarbonization Imperative\n\nThe scientific consensus is unequivocal: immediate and drastic reductions in carbon emissions are required to avert catastrophic climate change. The transition to a low-carbon economy necessitates a fundamental restructuring of our energy systems, industrial processes, and consumption patterns. Carbon pricing mechanisms, such as cap-and-trade or carbon taxes, are viewed by economists as the most efficient tools to internalize the external costs of {{1}}.\n\nHowever, political resistance and the vested interests of the fossil fuel industry remain significant hurdles. International cooperation is essential to prevent 'carbon leakage,' where businesses relocate to jurisdictions with laxer regulations. The window of opportunity is rapidly closing. Action must be {{2}}. Equity is {{3}}. Survival is at {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "pollution", isCorrect: true },
          { option: "solution", isCorrect: false },
          { option: "dilution", isCorrect: false },
          { option: "evolution", isCorrect: false },
        ],
        explanationVi: "External costs of 'pollution'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "decisive", isCorrect: true },
          { option: "divisive", isCorrect: false },
          { option: "derisive", isCorrect: false },
          { option: "passive", isCorrect: false },
        ],
        explanationVi: "Action must be 'decisive'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "central", isCorrect: true },
          { option: "peripheral", isCorrect: false },
          { option: "lateral", isCorrect: false },
          { option: "ventral", isCorrect: false },
        ],
        explanationVi: "Equity is 'central'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "stake", isCorrect: true },
          { option: "steak", isCorrect: false },
          { option: "lake", isCorrect: false },
          { option: "brake", isCorrect: false },
        ],
        explanationVi: "Survival is at 'stake'.",
      },
    ],
  },
  {
    id: "c2-11",
    title: "History Critical - Essay",
    level: "C2",
    content:
      "Revisionist History: A Necessity?\n\nHistorical revisionism often carries a negative connotation, implying a distortion of facts to serve a contemporary agenda. However, in its academic sense, it is a legitimate and essential process of re-interpreting the past in light of new evidence or evolving perspectives. It challenges established narratives that may be biased, incomplete, or exclusionary. By interrogating primary sources with fresh eyes, historians can uncover silenced voices and marginalized {{1}}.\n\nThis continuous process of inquiry ensures that history remains a dynamic discipline rather than a static dogma. Of course, it is crucial to distinguish between scholarly revisionism and negationism, which willfully denies proven facts. Truth is the ultimate goal. Perspective is {{2}}. Context matters {{3}}. History is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "experiences", isCorrect: true },
          { option: "expeditions", isCorrect: false },
          { option: "experiments", isCorrect: false },
          { option: "exports", isCorrect: false },
        ],
        explanationVi: "Marginalized 'experiences'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "subjective", isCorrect: true },
          { option: "objective", isCorrect: false },
          { option: "collective", isCorrect: false },
          { option: "effective", isCorrect: false },
        ],
        explanationVi: "Perspective is 'subjective'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "immensely", isCorrect: true },
          { option: "tensely", isCorrect: false },
          { option: "densely", isCorrect: false },
          { option: "barely", isCorrect: false },
        ],
        explanationVi: "Context matters 'immensely'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "alive", isCorrect: true },
          { option: "dead", isCorrect: false },
          { option: "gone", isCorrect: false },
          { option: "done", isCorrect: false },
        ],
        explanationVi: "History is 'alive'.",
      },
    ],
  },
  {
    id: "c2-12",
    title: "Art Restoration - Report",
    level: "C2",
    content:
      "The Ethics of Restoration\n\nThe restoration of the Sistine Chapel frescoes ignited a fierce debate within the art world regarding the extent to which a conservator should intervene. Critics argued that the removal of centuries of soot also stripped away the final layers of glaze applied by Michelangelo himself, irrevocably altering the work's tonal balance. They claimed the result was a garish distortion of the artist's original {{1}}.\n\nProponents, however, maintained that the cleaning revealed the vibrant chromatic palette that had been obscured by time and candle smoke. The dilemma lies in balancing preservation with aesthetic revelation. Modern conservation adheres to the principle of reversibility, ensuring that any intervention can be undone. Authenticity is {{2}}. Judgment is {{3}}. Art is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "intent", isCorrect: true },
          { option: "content", isCorrect: false },
          { option: "extent", isCorrect: false },
          { option: "descent", isCorrect: false },
        ],
        explanationVi: "Artist's original 'intent'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "elusive", isCorrect: true },
          { option: "conclusive", isCorrect: false },
          { option: "exclusive", isCorrect: false },
          { option: "intrusive", isCorrect: false },
        ],
        explanationVi: "Authenticity is 'elusive'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "difficult", isCorrect: true },
          { option: "easy", isCorrect: false },
          { option: "simple", isCorrect: false },
          { option: "fast", isCorrect: false },
        ],
        explanationVi: "Judgment is 'difficult'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "eternal", isCorrect: true },
          { option: "internal", isCorrect: false },
          { option: "external", isCorrect: false },
          { option: "infernal", isCorrect: false },
        ],
        explanationVi: "Art is 'eternal'.",
      },
    ],
  },
  {
    id: "c2-13",
    title: "Quantum Computing - Tech",
    level: "C2",
    content:
      "Quantum Supremacy and the Post-Silicon Era\n\nQuantum computing promises to revolutionize fields ranging from cryptography to drug discovery by leveraging the principles of superposition and entanglement. Unlike classical bits, which exist in a state of either 0 or 1, qubits can exist in both states simultaneously, allowing for exponential processing power. This capability could render current encryption standards {{1}}.\n\nHowever, achieving stable quantum coherence remains a formidable engineering challenge. Qubits are notoriously susceptible to environmental noise, leading to calculation errors. The race to build a fault-tolerant quantum computer is the new space race. The implications for national security and economic competitiveness are profound. Disruption is {{2}}. Preparation is {{3}}. Physics is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "obsolete", isCorrect: true },
          { option: "absolute", isCorrect: false },
          { option: "concrete", isCorrect: false },
          { option: "complete", isCorrect: false },
        ],
        explanationVi: "Render encryption standards 'obsolete'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "imminent", isCorrect: true },
          { option: "eminent", isCorrect: false },
          { option: "permanent", isCorrect: false },
          { option: "dominant", isCorrect: false },
        ],
        explanationVi: "Disruption is 'imminent'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "vital", isCorrect: true },
          { option: "fatal", isCorrect: false },
          { option: "menial", isCorrect: false },
          { option: "venial", isCorrect: false },
        ],
        explanationVi: "Preparation is 'vital'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "limitless", isCorrect: true },
          { option: "limited", isCorrect: false },
          { option: "limp", isCorrect: false },
          { option: "lame", isCorrect: false },
        ],
        explanationVi: "Physics is 'limitless' (in context of potential).",
      },
    ],
  },
  {
    id: "c2-14",
    title: "Supply Chain - Analysis",
    level: "C2",
    content:
      "Resilience in Global Logistics\n\nThe recent global disruptions have exposed the fragility of 'just-in-time' supply chain models, which prioritize efficiency over resilience. The reliance on single-source suppliers and lean inventories left manufacturers vulnerable to systemic shocks. Companies are now pivoting towards 'just-in-case' strategies, increasing safety stocks and diversifying their supplier {{1}}.\n\nThis shift entails higher carrying costs but provides a buffer against volatility. Furthermore, the near-shoring of critical production is gaining traction as a means to shorten supply lines and reduce geopolitical risk. The balance between cost-efficiency and risk mitigation is being recalibrated. Agility is {{2}}. Redundancy is {{3}}. Stability is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "base", isCorrect: true },
          { option: "case", isCorrect: false },
          { option: "chase", isCorrect: false },
          { option: "vase", isCorrect: false },
        ],
        explanationVi: "Diversifying their supplier 'base'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "prized", isCorrect: true },
          { option: "sized", isCorrect: false },
          { option: "mechanized", isCorrect: false },
          { option: "capsized", isCorrect: false },
        ],
        explanationVi: "Agility is 'prized' (valued).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "strategic", isCorrect: true },
          { option: "pediatric", isCorrect: false },
          { option: "geriatric", isCorrect: false },
          { option: "theatric", isCorrect: false },
        ],
        explanationVi: "Redundancy is 'strategic'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "goal", isCorrect: true },
          { option: "foul", isCorrect: false },
          { option: "hole", isCorrect: false },
          { option: "roll", isCorrect: false },
        ],
        explanationVi: "Stability is the 'goal'.",
      },
    ],
  },
  {
    id: "c2-15",
    title: "Linguistic Anthropology",
    level: "C2",
    content:
      "Language and Cognition: Returns of Whorf\n\nThe Sapir-Whorf hypothesis, which posits that the structure of a language influences its speakers' worldview and cognition, fell out of favor in the late 20th century. However, recent neo-Whorfian research provides compelling evidence that language does indeed shape thought in subtle ways, particularly in domains such as spatial orientation and color {{1}}.\n\nFor instance, speakers of languages with absolute cardinal directions navigate their environment differently than those using relative terms like 'left' and 'right'. This does not imply linguistic determinism, but rather linguistic relativity. Language offers a habitual framework for attending to experience. Culture is {{2}}. Thought is {{3}}. Words have {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "perception", isCorrect: true },
          { option: "deception", isCorrect: false },
          { option: "reception", isCorrect: false },
          { option: "exception", isCorrect: false },
        ],
        explanationVi: "Color 'perception'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "embedded", isCorrect: true },
          { option: "shredded", isCorrect: false },
          { option: "dreaded", isCorrect: false },
          { option: "wedding", isCorrect: false },
        ],
        explanationVi: "Culture is 'embedded' (in language).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "malleable", isCorrect: true },
          { option: "palpable", isCorrect: false },
          { option: "culpable", isCorrect: false },
          { option: "audible", isCorrect: false },
        ],
        explanationVi: "Thought is 'malleable'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "power", isCorrect: true },
          { option: "tower", isCorrect: false },
          { option: "flower", isCorrect: false },
          { option: "shower", isCorrect: false },
        ],
        explanationVi: "Words have 'power'.",
      },
    ],
  },
  {
    id: "c2-16",
    title: "Bioethics - Commentary",
    level: "C2",
    content:
      "The CRISPR Conundrum: Editing the Germline\n\nThe advent of CRISPR-Cas9 technology has bestowed upon humanity the god-like power to rewrite the code of life. While somatic gene editing offers immense therapeutic potential for curing genetic disorders, germline editing—altering the DNA of embryos—crosses a precarious ethical {{1}}.\n\nModifications made to the germline are heritable, meaning they will be passed down to future generations. This raises the specter of eugenics and the commodification of human traits. The scientific community is currently debating asking for a global moratorium on heritable genome editing until the long-term consequences are fully understood. The risks are {{2}}. Prudence is {{3}}. Humanity is at a {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "threshold", isCorrect: true },
          { option: "household", isCorrect: false },
          { option: "stronghold", isCorrect: false },
          { option: "footstep", isCorrect: false },
        ],
        explanationVi: "Crosses a precarious ethical 'threshold'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "existential", isCorrect: true },
          { option: "presidential", isCorrect: false },
          { option: "differential", isCorrect: false },
          { option: "exponential", isCorrect: false },
        ],
        explanationVi: "The risks are 'existential'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "warranted", isCorrect: true },
          { option: "guaranteed", isCorrect: false },
          { option: "cemented", isCorrect: false },
          { option: "demented", isCorrect: false },
        ],
        explanationVi: "Prudence is 'warranted'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "crossroads", isCorrect: true },
          { option: "roadblock", isCorrect: false },
          { option: "sidewalk", isCorrect: false },
          { option: "driveway", isCorrect: false },
        ],
        explanationVi: "Humanity is at a 'crossroads'.",
      },
    ],
  },
  {
    id: "c2-17",
    title: "Astrophysics - Abstract",
    level: "C2",
    content:
      "Dark Matter: The Invisible Scaffold\n\nCosmological observations indicate that visible matter constitutes a mere fraction of the universe's total mass-energy content. The vast majority is comprised of dark matter, an enigmatic substance that does not interact with electromagnetic radiation. its existence is inferred solely through its gravitational effects on galactic rotation curves and gravitational {{1}}.\n\nDespite decades of searching, direct detection of dark matter particles remains elusive. Theories range from Weakly Interacting Massive Particles (WIMPs) to modifications of the laws of gravity. Unraveling this mystery is paramount to understanding the structure and evolution of the cosmos. The search is {{2}}. The universe is {{3}}. Physics is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "lensing", isCorrect: true },
          { option: "sensing", isCorrect: false },
          { option: "fencing", isCorrect: false },
          { option: "cleansing", isCorrect: false },
        ],
        explanationVi: "Gravitational 'lensing'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "relentless", isCorrect: true },
          { option: "meaningless", isCorrect: false },
          { option: "careless", isCorrect: false },
          { option: "harmless", isCorrect: false },
        ],
        explanationVi: "The search is 'relentless'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "vast", isCorrect: true },
          { option: "small", isCorrect: false },
          { option: "fast", isCorrect: false },
          { option: "last", isCorrect: false },
        ],
        explanationVi: "The universe is 'vast'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "incomplete", isCorrect: true },
          { option: "obsolete", isCorrect: false },
          { option: "concrete", isCorrect: false },
          { option: "discrete", isCorrect: false },
        ],
        explanationVi: "Physics (our understanding) is 'incomplete'.",
      },
    ],
  },
  {
    id: "c2-18",
    title: "International Law - Brief",
    level: "C2",
    content:
      "Maritime Disputes and Sovereignty\n\nThe adjudication of maritime boundary disputes often hinges on the interpretation of the United Nations Convention on the Law of the Sea (UNCLOS). A critical point of contention is the distinction between islands, which generate an Exclusive Economic Zone (EEZ), and rocks, which do not. This classification has profound economic and strategic {{1}}.\n\nStates often engage in land reclamation activities to bolster their claims, blurring the lines between natural features and artificial installations. Tribunals must meticulously analyze historical evidence and geological data to render impartial judgments. The maintenance of a rules-based international order depends on strict adherence to these legal frameworks. Law is {{2}}. Order is {{3}}. Peace is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "implications", isCorrect: true },
          { option: "applications", isCorrect: false },
          { option: "complications", isCorrect: false },
          { option: "duplications", isCorrect: false },
        ],
        explanationVi: "Strategic 'implications'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "binding", isCorrect: true },
          { option: "blinding", isCorrect: false },
          { option: "winding", isCorrect: false },
          { option: "finding", isCorrect: false },
        ],
        explanationVi: "Law is 'binding'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "fragile", isCorrect: true },
          { option: "agile", isCorrect: false },
          { option: "hostile", isCorrect: false },
          { option: "futile", isCorrect: false },
        ],
        explanationVi: "Order is 'fragile'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "paramount", isCorrect: true },
          { option: "amount", isCorrect: false },
          { option: "discount", isCorrect: false },
          { option: "account", isCorrect: false },
        ],
        explanationVi: "Peace is 'paramount'.",
      },
    ],
  },
  {
    id: "c2-19",
    title: "Cyber Warfare - Report",
    level: "C2",
    content:
      "The Asymmetry of Cyber Conflict\n\nCyber warfare represents a paradigmatic shift in military strategy, characterized by asymmetry and plausible deniability. Unlike conventional kinetic warfare, cyber attacks can cripple a nation's critical infrastructure without a single soldier crossing a border. State-sponsored actors employ sophisticated malware to infiltrate power grids, financial systems, and communication {{1}}.\n\nThe attribution problem makes deterrence difficult, as identifying the perpetrator with certainty is often impossible. Consequently, nations are investing heavily in both offensive capabilities and defensive resilience. The militarization of cyberspace creates a volatile environment where a miscalculation could escalate into full-scale conflict. vigilance is {{2}}. Defense is {{3}}. The threat is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "networks", isCorrect: true },
          { option: "artworks", isCorrect: false },
          { option: "fireworks", isCorrect: false },
          { option: "homeworks", isCorrect: false },
        ],
        explanationVi: "Communication 'networks'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "constant", isCorrect: true },
          { option: "instant", isCorrect: false },
          { option: "distant", isCorrect: false },
          { option: "resistant", isCorrect: false },
        ],
        explanationVi: "Vigilance is 'constant'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "crucial", isCorrect: true },
          { option: "social", isCorrect: false },
          { option: "facial", isCorrect: false },
          { option: "glacial", isCorrect: false },
        ],
        explanationVi: "Defense is 'crucial'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "pervasive", isCorrect: true },
          { option: "invasive", isCorrect: false },
          { option: "persuasive", isCorrect: false },
          { option: "abrasive", isCorrect: false },
        ],
        explanationVi: "The threat is 'pervasive' (everywhere).",
      },
    ],
  },
  {
    id: "c2-20",
    title: "Genetics - Article",
    level: "C2",
    content:
      "Epigenetics: Beyond the DNA Sequence\n\nFor decades, the central dogma of biology held that our genetic destiny was written in stone within our DNA sequence. However, the burgeoning field of epigenetics has revealed a layer of complexity above the genome. Epigenetic mechanisms, such as DNA methylation and histone modification, regulate gene expression without altering the underlying {{1}}.\n\nThese modifications can be influenced by environmental factors, including diet, stress, and toxin exposure. remarkably, some epigenetic markers can be heritable, suggesting that the experiences of our ancestors may leave a molecular imprint on our biology. This challenges the strict dichotomy between nature and nurture. The genome is {{2}}. Life is {{3}}. Science is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "sequence", isCorrect: true },
          { option: "frequency", isCorrect: false },
          { option: "cadence", isCorrect: false },
          { option: "presence", isCorrect: false },
        ],
        explanationVi: "Underlying 'sequence'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "responsive", isCorrect: true },
          { option: "defensive", isCorrect: false },
          { option: "expensive", isCorrect: false },
          { option: "passive", isCorrect: false },
        ],
        explanationVi: "The genome is 'responsive'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "complex", isCorrect: true },
          { option: "convex", isCorrect: false },
          { option: "simple", isCorrect: false },
          { option: "reflex", isCorrect: false },
        ],
        explanationVi: "Life is 'complex'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "evolving", isCorrect: true },
          { option: "revolving", isCorrect: false },
          { option: "dissolving", isCorrect: false },
          { option: "involving", isCorrect: false },
        ],
        explanationVi: "Science is 'evolving'.",
      },
    ],
  },
  {
    id: "c2-21",
    title: "Monetary Policy - Analysis",
    level: "C2",
    content:
      "Quantitative Easing: A Double-Edged Sword\n\nIn the aftermath of the financial crisis, central banks resorted to quantitative easing (QE)—large-scale asset purchases—to inject liquidity into the economy and stave off deflation. While this unconventional monetary policy succeeded in stabilizing financial markets and lowering long-term interest rates, its long-term side effects are becoming increasingly {{1}}.\n\nCritics argue that prolonged QE distorts asset prices, exacerbates wealth inequality, and creates dependency on cheap credit. Unwinding these massive balance sheets without triggering market turmoil is the current challenge facing policymakers. The era of easy money may be drawing to a close, but the consequences will linger. Policy is {{2}}. Markets are {{3}}. Balance is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "apparent", isCorrect: true },
          { option: "transparent", isCorrect: false },
          { option: "aberrant", isCorrect: false },
          { option: "coherent", isCorrect: false },
        ],
        explanationVi: "Becoming increasingly 'apparent'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "shifting", isCorrect: true },
          { option: "drifting", isCorrect: false },
          { option: "lifting", isCorrect: false },
          { option: "gifting", isCorrect: false },
        ],
        explanationVi: "Policy is 'shifting'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "nervous", isCorrect: true },
          { option: "curious", isCorrect: false },
          { option: "furious", isCorrect: false },
          { option: "previous", isCorrect: false },
        ],
        explanationVi: "Markets are 'nervous'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "delicate", isCorrect: true },
          { option: "duplicate", isCorrect: false },
          { option: "indicate", isCorrect: false },
          { option: "dedicate", isCorrect: false },
        ],
        explanationVi: "Balance is 'delicate'.",
      },
    ],
  },
  {
    id: "c2-22",
    title: "Social Psychology - Abstract",
    level: "C2",
    content:
      "Group Polarization and Echo Chambers\n\nThe phenomenon of group polarization describes the tendency for members of a deliberating group to move toward a more extreme position than their initial inclination. In the digital age, this effect is amplified by algorithmic curation, which creates 'echo chambers' where individuals are exposed primarily to information that confirms their pre-existing {{1}}.\n\nThis segregation leads to the entrenchment of beliefs and the demonization of opposing viewpoints, eroding the common ground necessary for civil discourse. Overcoming this fragmentation requires active engagement with diverse perspectives and potential regulatory oversight of social media algorithms. Society is {{2}}. Dialogue is {{3}}. Unity is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "biases", isCorrect: true },
          { option: "bases", isCorrect: false },
          { option: "cases", isCorrect: false },
          { option: "phases", isCorrect: false },
        ],
        explanationVi: "Pre-existing 'biases'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "fragmented", isCorrect: true },
          { option: "pigmented", isCorrect: false },
          { option: "tormented", isCorrect: false },
          { option: "fermented", isCorrect: false },
        ],
        explanationVi: "Society is 'fragmented'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "stifled", isCorrect: true },
          { option: "rifled", isCorrect: false },
          { option: "trifled", isCorrect: false },
          { option: "baffled", isCorrect: false },
        ],
        explanationVi: "Dialogue is 'stifled' (suppressed).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "elusive", isCorrect: true },
          { option: "inclusive", isCorrect: false },
          { option: "exclusive", isCorrect: false },
          { option: "effusive", isCorrect: false },
        ],
        explanationVi: "Unity is 'elusive'.",
      },
    ],
  },
  {
    id: "c2-23",
    title: "Energy Grid - Technical",
    level: "C2",
    content:
      "The Smart Grid Transition\n\nThe transition to a cleaner energy future is contingent upon the modernization of the electrical grid. Traditional grids, designed for one-way power flow from centralized plants, are ill-equipped to handle the intermittency of renewable energy sources and the decentralized nature of distributed generation. The 'smart grid' integrates digital technology to enable two-way communication and automated {{1}}.\n\nKey features include advanced metering infrastructure, demand response capabilities, and energy storage integration. This intelligent network increases reliability, efficiency, and sustainability. However, it also introduces new cybersecurity vulnerabilities that must be addressed. Innovation is {{2}}. Infrastructure is {{3}}. Resilience is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "controls", isCorrect: true },
          { option: "patrols", isCorrect: false },
          { option: "scrolls", isCorrect: false },
          { option: "trolls", isCorrect: false },
        ],
        explanationVi: "Automated 'controls'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "key", isCorrect: true },
          { option: "lock", isCorrect: false },
          { option: "door", isCorrect: false },
          { option: "floor", isCorrect: false },
        ],
        explanationVi: "Innovation is 'key'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "aging", isCorrect: true },
          { option: "raging", isCorrect: false },
          { option: "waging", isCorrect: false },
          { option: "caging", isCorrect: false },
        ],
        explanationVi: "Infrastructure is 'aging'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "required", isCorrect: true },
          { option: "retired", isCorrect: false },
          { option: "expired", isCorrect: false },
          { option: "hired", isCorrect: false },
        ],
        explanationVi: "Resilience is 'required'.",
      },
    ],
  },
  {
    id: "c2-24",
    title: "Anthropocene - Essay",
    level: "C2",
    content:
      "Defining the Anthropocene\n\nGeologists are currently debating the formal designation of a new geological epoch: the Anthropocene. This proposal acknowledges that human activity has become the dominant influence on the Earth's climate and environment. From the deposition of radionuclides to the ubiquity of microplastics, the human footprint is now indelibly etched into the stratigraphic {{1}}.\n\nCritics argue that the term assigns universal blame to humanity, obscuring the disproportionate responsibility of industrialized nations and corporate entities. They propose alternatives like the 'Capitalocene.' Regardless of the nomenclature, the evidence of planetary-scale transformation is irrefutable. We are the architects of a new world. Responsibility is {{2}}. Change is {{3}}. Earth is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "record", isCorrect: true },
          { option: "chord", isCorrect: false },
          { option: "ward", isCorrect: false },
          { option: "board", isCorrect: false },
        ],
        explanationVi: "Stratigraphic 'record'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "ours", isCorrect: true },
          { option: "yours", isCorrect: false },
          { option: "theirs", isCorrect: false },
          { option: "mine", isCorrect: false },
        ],
        explanationVi: "Responsibility is 'ours'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "irreversible", isCorrect: true },
          { option: "reversible", isCorrect: false },
          { option: "invisible", isCorrect: false },
          { option: "divisible", isCorrect: false },
        ],
        explanationVi: "Change is 'irreversible' (in some contexts).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "changing", isCorrect: true },
          { option: "staying", isCorrect: false },
          { option: "playing", isCorrect: false },
          { option: "paying", isCorrect: false },
        ],
        explanationVi: "Earth is 'changing'.",
      },
    ],
  },
  {
    id: "c2-25",
    title: "Digital Currency - Report",
    level: "C2",
    content:
      "The Rise of CBDCs\n\nCentral Bank Digital Currencies (CBDCs) represent a digital form of fiat money that is a direct liability of the central bank. Unlike cryptocurrencies, which are decentralized and often volatile, CBDCs offer the safety and stability of sovereign currency combined with the efficiency of digital payments. Their implementation could enhance financial inclusion and streamline cross-border {{1}}.\n\nHowever, the rollout of CBDCs raises significant privacy concerns. A programmable currency could theoretically allow governments to surveil transactions and enforce monetary policy directly on citizens. Striking the right balance between innovation, privacy, and financial stability is the primary challenge. Money is {{2}}. Privacy is {{3}}. Adoption is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "transactions", isCorrect: true },
          { option: "reactions", isCorrect: false },
          { option: "fractions", isCorrect: false },
          { option: "contractions", isCorrect: false },
        ],
        explanationVi: "Cross-border 'transactions'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "digital", isCorrect: true },
          { option: "physical", isCorrect: false },
          { option: "magical", isCorrect: false },
          { option: "radical", isCorrect: false },
        ],
        explanationVi: "Money is 'digital'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "sacrosanct", isCorrect: true },
          { option: "extinct", isCorrect: false },
          { option: "succinct", isCorrect: false },
          { option: "distinct", isCorrect: false },
        ],
        explanationVi: "Privacy is 'sacrosanct'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "pending", isCorrect: true },
          { option: "ending", isCorrect: false },
          { option: "spending", isCorrect: false },
          { option: "tending", isCorrect: false },
        ],
        explanationVi: "Adoption is 'pending' (or inevitable).",
      },
    ],
  },
  {
    id: "c2-26",
    title: "Smart Cities - Critique",
    level: "C2",
    content:
      "The Panopticon of the Smart City\n\nThe vision of the 'smart city' promises an urban utopia of efficiency, safety, and sustainability, powered by ubiquitous data collection and algorithmic governance. Sensors embedded in the infrastructure monitor everything from traffic flow to air quality, optimizing resource allocation in real-time. Yet, this technocratic dream has a dystopian underbelly. The pervasive surveillance required to fuel these systems threatens to turn cities into digital {{1}}.\n\nFurthermore, the privatization of public infrastructure by tech giants raises questions about democratic accountability and data sovereignty. Who owns the data generated by citizens? We must ensure that technology serves the public interest, not just corporate profit. Cities are for {{2}}. Data is {{3}}. Freedom is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "panopticons", isCorrect: true },
          { option: "polygons", isCorrect: false },
          { option: "octagons", isCorrect: false },
          { option: "hexagons", isCorrect: false },
        ],
        explanationVi: "Digital 'panopticons' (prisons).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "people", isCorrect: true },
          { option: "cars", isCorrect: false },
          { option: "robots", isCorrect: false },
          { option: "buildings", isCorrect: false },
        ],
        explanationVi: "Cities are for 'people'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "valuable", isCorrect: true },
          { option: "useless", isCorrect: false },
          { option: "free", isCorrect: false },
          { option: "cheap", isCorrect: false },
        ],
        explanationVi: "Data is 'valuable'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "non-negotiable", isCorrect: true },
          { option: "negotiable", isCorrect: false },
          { option: "saleable", isCorrect: false },
          { option: "forgettable", isCorrect: false },
        ],
        explanationVi: "Freedom is 'non-negotiable'.",
      },
    ],
  },
  {
    id: "c2-27",
    title: "Consciousness - Theory",
    level: "C2",
    content:
      "The Hard Problem of Consciousness\n\nExplaining how subjective experience arises from physical brain processes remains the 'hard problem' of cognitive science. While we can map neural correlates of consciousness, bridging the explanatory gap between neuronal firing and the feeling of 'redness' or pain remains elusive. Some theorists propose panpsychism, the idea that consciousness is a fundamental property of matter, akin to mass or {{1}}.\n\nOthers suggest that consciousness is an emergent property of complex information processing, a user illusion evolved to facilitate social interaction. As AI systems become more sophisticated, the question of whether a machine can be sentient gains practical urgency. The mind is a {{2}}. Science is a {{3}}. The answer is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "charge", isCorrect: true },
          { option: "barge", isCorrect: false },
          { option: "large", isCorrect: false },
          { option: "margin", isCorrect: false },
        ],
        explanationVi: "Mass or 'charge' (physics properties).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "mystery", isCorrect: true },
          { option: "history", isCorrect: false },
          { option: "blister", isCorrect: false },
          { option: "sister", isCorrect: false },
        ],
        explanationVi: "The mind is a 'mystery'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "tool", isCorrect: true },
          { option: "fool", isCorrect: false },
          { option: "pool", isCorrect: false },
          { option: "stool", isCorrect: false },
        ],
        explanationVi: "Science is a 'tool'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "unknown", isCorrect: true },
          { option: "known", isCorrect: false },
          { option: "shown", isCorrect: false },
          { option: "blown", isCorrect: false },
        ],
        explanationVi: "The answer is 'unknown'.",
      },
    ],
  },
  {
    id: "c2-28",
    title: "Mars Colonization - Brief",
    level: "C2",
    content:
      "The Challenges of Multi-Planetary Life\n\nThe ambition to colonize Mars represents the next great leap for humanity, potentially safeguarding our species against extinction events. However, the physiological and psychological challenges of long-duration spaceflight and habitation on a hostile world are immense. Exposure to cosmic radiation, microgravity-induced bone loss, and the isolation of deep space pose severe risks to human {{1}}.\n\nFurthermore, creating a self-sustaining biosphere requires solving complex engineering problems in closed-loop life support systems. Ethical questions also arise: do we have the right to terraform another planet, potentially destroying indigenous microbial life? The journey is {{2}}. The cost is {{3}}. The dream is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "health", isCorrect: true },
          { option: "wealth", isCorrect: false },
          { option: "stealth", isCorrect: false },
          { option: "breath", isCorrect: false },
        ],
        explanationVi: "Risks to human 'health'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "perilous", isCorrect: true },
          { option: "frivolous", isCorrect: false },
          { option: "nebulous", isCorrect: false },
          { option: "credulous", isCorrect: false },
        ],
        explanationVi: "The journey is 'perilous'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "astronomical", isCorrect: true },
          { option: "anatomical", isCorrect: false },
          { option: "comical", isCorrect: false },
          { option: "chemical", isCorrect: false },
        ],
        explanationVi: "Cost is 'astronomical' (very high).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "alive", isCorrect: true },
          { option: "dead", isCorrect: false },
          { option: "gone", isCorrect: false },
          { option: "lost", isCorrect: false },
        ],
        explanationVi: "The dream is 'alive'.",
      },
    ],
  },
  {
    id: "c2-29",
    title: "Biodiversity - Report",
    level: "C2",
    content:
      "The Sixth Mass Extinction\n\nWe are currently witnessing a precipitous decline in global biodiversity, a phenomenon often termed the 'Sixth Mass Extinction.' Unlike previous extinction events caused by natural cataclysms, this crisis is driven almost exclusively by human activity: habitat destruction, overexploitation, pollution, and climate change. The loss of keystone species threatens to cause the collapse of entire {{1}}.\n\nEcosystem services, such as pollination, water purification, and carbon sequestration, which underpin human civilization, are being degraded at an alarming rate. Conservation efforts must move beyond individual species protection to the preservation of functional landscapes. Time is {{2}}. Nature is {{3}}. We are {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "ecosystems", isCorrect: true },
          { option: "mechanisms", isCorrect: false },
          { option: "organisms", isCorrect: false },
          { option: "prisms", isCorrect: false },
        ],
        explanationVi: "Collapse of entire 'ecosystems'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "short", isCorrect: true },
          { option: "long", isCorrect: false },
          { option: "fast", isCorrect: false },
          { option: "slow", isCorrect: false },
        ],
        explanationVi: "Time is 'short'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "resilient", isCorrect: true },
          { option: "brilliant", isCorrect: false },
          { option: "silent", isCorrect: false },
          { option: "violent", isCorrect: false },
        ],
        explanationVi: "Nature is 'resilient' (but limits exist).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "responsible", isCorrect: true },
          { option: "sensible", isCorrect: false },
          { option: "audible", isCorrect: false },
          { option: "edible", isCorrect: false },
        ],
        explanationVi: "We are 'responsible'.",
      },
    ],
  },
  {
    id: "c2-30",
    title: "Post-Modernism - Essay",
    level: "C2",
    content:
      "The Condition of Postmodernity\n\nPostmodernism defines our current epoch as one characterized by skepticism towards grand narratives and universal truths. It posits that reality is not a fixed entity but a social construct, mediated by language and power relations. This fragmentation of meaning is reflected in art, architecture, and literature, which embrace pastiche, irony, and {{1}}.\n\nWhile this deconstruction has liberated us from dogmatic ideologies, it has also led to a crisis of values and the rise of relativism. In a world of 'fake news' and 'alternative facts,' the search for objective truth becomes a revolutionary act. We navigate a hyper-real landscape of simulacra. Meaning is {{2}}. Truth is {{3}}. We are {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "intertextuality", isCorrect: true },
          { option: "sexuality", isCorrect: false },
          { option: "mortality", isCorrect: false },
          { option: "frugality", isCorrect: false },
        ],
        explanationVi: "Embrace... 'intertextuality'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "fluid", isCorrect: true },
          { option: "solid", isCorrect: false },
          { option: "rigid", isCorrect: false },
          { option: "vapid", isCorrect: false },
        ],
        explanationVi: "Meaning is 'fluid'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "contested", isCorrect: true },
          { option: "infested", isCorrect: false },
          { option: "digested", isCorrect: false },
          { option: "arrested", isCorrect: false },
        ],
        explanationVi: "Truth is 'contested'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "adrift", isCorrect: true },
          { option: "gift", isCorrect: false },
          { option: "lift", isCorrect: false },
          { option: "swift", isCorrect: false },
        ],
        explanationVi: "We are 'adrift'.",
      },
    ],
  },
];
