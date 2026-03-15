import type { Chapter } from "../../types";

const ch01: Chapter = {
  id: "ch01",
  number: 1,
  title: "Physiology of Conception",
  subject: "Obstetrics",

  sections: [
    {
      id: "spermatogenesis",
      title: "Spermatogenesis",
      content: [
        {
          type: "flowchart",
          nodes: [
            { id: "sg", label: "Spermatogonium", sublabel: "2n" },
            { id: "ps", label: "Primary Spermatocyte", sublabel: "2n, Diploid" },
            { id: "ss", label: "Secondary Spermatocyte", sublabel: "n, Haploid" },
            { id: "st", label: "Spermatids", sublabel: "n" },
            { id: "ms", label: "Mature Sperm Cells", highlight: true },
          ],
          edges: [
            { from: "sg", to: "ps", label: "Mitosis" },
            { from: "ps", to: "ss", label: "Meiosis I (Reduction Division)" },
            { from: "ss", to: "st", label: "Meiosis II" },
            { from: "st", to: "ms", label: "Spermiogenesis" },
          ],
        },
        {
          type: "bulletList",
          items: [
            "Each **primary spermatocyte** gives rise to **4 sperm**",
            "**Reductional division** occurs at: Primary → Secondary spermatocyte (Meiosis I)",
          ],
        },
        {
          type: "keyPoint",
          label: "Spermiogenesis",
          value:
            "Conversion of **spermatid → mature sperm**. Involves nuclear condensation, development of flagellum, acrosome.",
        },
        {
          type: "keyPoint",
          label: "Capacitation",
          value:
            "Final **maturation** of sperm making them capable of fertilising the egg. Occurs during passage through **female genital tract** — starts at cervix, maximum at Fallopian tube. Time: **6–8 hours**.",
        },
        {
          type: "table",
          headers: ["Process", "Duration"],
          rows: [
            ["Spermatogenesis", "70–74 days"],
            ["Spermiogenesis", "16 days"],
            ["Transport (testis → ejaculatory duct)", "12–21 days"],
            ["Total (approximate)", "~3 months"],
          ],
        },
        {
          type: "clinicalNote",
          text: "In a man with **azoospermia** who has completed hormonal treatment, retest sperm count after **80–90 days (~3 months)**.",
        },
      ],
    },
    {
      id: "acrosomal-cortical",
      title: "Acrosomal & Cortical Reactions",
      content: [
        {
          type: "keyPoint",
          label: "Acrosomal Reaction",
          value:
            "Sperm fuses with oocyte's membrane → contents of **acrosome** break the tough coating of ovum (zona pellucida) → allows sperm to **penetrate ovum**.",
        },
        {
          type: "keyPoint",
          label: "Cortical Reaction",
          value:
            "Release of **cortical granules** → **Hardening of zona pellucida** → **Prevents polyspermy**.",
        },
      ],
    },
    {
      id: "oogenesis",
      title: "Oogenesis — Development of Ovum",
      content: [
        {
          type: "flowchart",
          nodes: [
            { id: "pgc", label: "Primordial Germ Cell" },
            { id: "og", label: "Oogonium", sublabel: "2n" },
            { id: "po", label: "Primary Oocyte", sublabel: "2n — Arrested in Diplotene phase of Prophase I" },
            { id: "so", label: "Secondary Oocyte + 1st Polar Body", sublabel: "n — Arrested at Metaphase II" },
            { id: "ov", label: "Ovum + 2nd Polar Body", sublabel: "n", highlight: true },
          ],
          edges: [
            { from: "pgc", to: "og" },
            { from: "og", to: "po" },
            { from: "po", to: "so", label: "Meiosis I (completed by LH surge)" },
            { from: "so", to: "ov", label: "Meiosis II (completed by sperm entry)" },
          ],
        },
        {
          type: "table",
          headers: ["Stage", "Arrested At", "Completed By"],
          rows: [
            ["Primary Oocyte", "Diplotene phase of Prophase I", "LH surge (prior to ovulation)"],
            ["Secondary Oocyte", "Metaphase II", "Sperm entry / Fertilisation"],
          ],
        },
        {
          type: "bulletList",
          items: [
            "At ovulation: **Secondary oocyte** (arrested in Meiosis I) is released from the ovary",
            "Released along with the **1st polar body**",
          ],
        },
      ],
    },
    {
      id: "follicle-numbers",
      title: "Follicle Numbers & Sperm Production",
      content: [
        {
          type: "table",
          headers: ["Time Point", "Follicles in Ovary"],
          rows: [
            ["20 weeks IU life", "6–7 million (maximum)"],
            ["At birth", "1–2 million"],
            ["At puberty", "3–4 lakh"],
            ["Ovulate in lifetime", "~400"],
            ["Remaining", "Undergo atresia"],
          ],
        },
        {
          type: "table",
          headers: ["Time Point", "Sperm Production"],
          rows: [
            ["During embryogenesis", "3,00,000 / testis"],
            ["At puberty", "600 million / testis"],
            ["Adult production rate", "100–200 million / day"],
          ],
        },
      ],
    },
    {
      id: "fertilisation-implantation",
      title: "Fertilisation & Implantation",
      content: [
        {
          type: "flowchart",
          nodes: [
            { id: "fert", label: "Fertilisation", sublabel: "at AMPULLA of Fallopian tube" },
            { id: "pne", label: "Pronuclear Embryo", sublabel: "Cell division begins" },
            { id: "mor", label: "MORULA", sublabel: "16 cells — enters uterus Day 4", highlight: true },
            { id: "bla", label: "BLASTOCYST", sublabel: "Day 5–6" },
            { id: "imp", label: "IMPLANTATION", sublabel: "Day 6–10", highlight: true },
          ],
          edges: [
            { from: "fert", to: "pne" },
            { from: "pne", to: "mor", label: "Day 4" },
            { from: "mor", to: "bla", label: "Day 5" },
            { from: "bla", to: "imp", label: "Starts Day 6" },
          ],
        },
        {
          type: "clinicalNote",
          text: "Embryo enters the uterine cavity on Day 4 as a **MORULA** (not blastocyst).",
        },
        {
          type: "table",
          headers: ["Feature", "Detail"],
          rows: [
            ["Begins with", "Zonal hatching (zona pellucida disappears Day 5–6)"],
            ["Site of implantation", "Upper posterior wall of uterus"],
            ["Type of implantation", "Interstitial"],
            ["Timing", "Day 6–10 (starts by Day 6)"],
          ],
        },
      ],
    },
    {
      id: "blastocyst-structure",
      title: "Blastocyst Structure",
      content: [
        {
          type: "flowchart",
          nodes: [
            { id: "blast", label: "BLASTOCYST" },
            { id: "icm", label: "Inner Cell Mass" },
            { id: "troph", label: "Trophoblast" },
            { id: "embryo", label: "EMBRYO", highlight: true },
            { id: "sync", label: "Syncytiotrophoblast", sublabel: "Outer — secretes hCG" },
            { id: "cyto", label: "Cytotrophoblast", sublabel: "Inner — forms villi" },
          ],
          edges: [
            { from: "blast", to: "icm" },
            { from: "blast", to: "troph" },
            { from: "icm", to: "embryo" },
            { from: "troph", to: "sync" },
            { from: "troph", to: "cyto" },
          ],
        },
      ],
    },
  ],

  flashcards: [
    {
      id: "fc01",
      front: "Each primary spermatocyte gives rise to how many sperm?",
      back: "4 sperm",
      tags: ["spermatogenesis"],
    },
    {
      id: "fc02",
      front: "What is spermiogenesis?",
      back: "Conversion of spermatid → mature sperm. Involves nuclear condensation, development of flagellum and acrosome.",
      tags: ["spermatogenesis"],
    },
    {
      id: "fc03",
      front: "Where does capacitation start and where is it maximum?",
      back: "Starts at the cervix, maximum at the Fallopian tube. Takes 6–8 hours.",
      tags: ["capacitation", "high-yield"],
    },
    {
      id: "fc04",
      front: "Time required for spermatogenesis?",
      back: "70–74 days",
      tags: ["timing", "high-yield"],
    },
    {
      id: "fc05",
      front: "Time for spermiogenesis?",
      back: "16 days",
      tags: ["timing"],
    },
    {
      id: "fc06",
      front: "Time for sperm transport from testis to ejaculatory duct?",
      back: "12–21 days",
      tags: ["timing"],
    },
    {
      id: "fc07",
      front: "What prevents polyspermy?",
      back: "Cortical reaction: release of cortical granules → hardening of zona pellucida.",
      tags: ["fertilisation", "high-yield"],
    },
    {
      id: "fc08",
      front: "Primary oocyte is arrested at which stage?",
      back: "Diplotene phase of Prophase I. Completed by LH surge prior to ovulation.",
      tags: ["oogenesis", "high-yield"],
    },
    {
      id: "fc09",
      front: "Secondary oocyte is arrested at which stage?",
      back: "Metaphase II. Completed only upon sperm entry (fertilisation).",
      tags: ["oogenesis", "high-yield"],
    },
    {
      id: "fc10",
      front: "Maximum number of oocytes and when?",
      back: "6–7 million at 20 weeks intrauterine life.",
      tags: ["numbers", "high-yield"],
    },
    {
      id: "fc11",
      front: "How many follicles ovulate in a woman's lifetime?",
      back: "~400 follicles. Remaining undergo atresia.",
      tags: ["numbers"],
    },
    {
      id: "fc12",
      front: "Where does fertilisation occur?",
      back: "Ampulla of the Fallopian tube.",
      tags: ["fertilisation", "high-yield"],
    },
    {
      id: "fc13",
      front: "Embryo enters uterine cavity on which day and as what?",
      back: "Day 4, as a MORULA (16 cells). NOT as blastocyst.",
      tags: ["implantation", "high-yield"],
    },
    {
      id: "fc14",
      front: "Site and type of implantation?",
      back: "Site: Upper posterior wall of uterus. Type: Interstitial.",
      tags: ["implantation", "high-yield"],
    },
    {
      id: "fc15",
      front: "Blastocyst: what does each part become?",
      back: "Inner cell mass → Embryo. Trophoblast → Syncytiotrophoblast (outer, secretes hCG) + Cytotrophoblast (inner, forms villi).",
      tags: ["blastocyst", "high-yield"],
    },
  ],

  mcqs: [
    // --- RECALL (5) ---
    {
      id: "mcq01",
      question:
        "In a man with azoospermia who has completed his treatment course of hormonal treatment, when will you retest his sperm count?",
      options: ["50–60 days", "60–70 days", "70–80 days", "80–90 days"],
      correctIndex: 3,
      explanation:
        "Total time = spermatogenesis (70–74 days) + spermiogenesis (16 days) + transport (12–21 days) ≈ 3 months (80–90 days).",
      difficulty: "recall",
    },
    {
      id: "mcq02",
      question:
        "In which of the following steps does reductional division occur?",
      options: [
        "Primary to secondary spermatocyte",
        "Secondary spermatocyte to spermatid",
        "Germ cells to spermatogonium",
        "Spermatogonium to primary spermatocyte",
      ],
      correctIndex: 0,
      explanation:
        "Meiosis I (reduction division) occurs during the conversion of primary spermatocyte (2n) to secondary spermatocyte (n).",
      difficulty: "recall",
    },
    {
      id: "mcq03",
      question: "At ovulation, what is released?",
      options: [
        "Secondary oocyte arrested in meiosis I",
        "Secondary oocyte at end of meiosis II",
        "Primary oocyte at end of meiosis I",
        "Primary oocyte at end of meiosis II",
      ],
      correctIndex: 0,
      explanation:
        "At ovulation, the secondary oocyte (arrested at Metaphase II after completing Meiosis I) is released along with the 1st polar body.",
      difficulty: "recall",
    },
    {
      id: "mcq04",
      question: "Which of the following statements is FALSE?",
      options: [
        "Implantation occurs in blastocyst stage",
        "Implantation starts by day 6",
        "After fertilisation, embryo enters the uterine cavity on Day 4 as blastocyst stage",
        "Type of implantation is interstitial",
      ],
      correctIndex: 2,
      explanation:
        "FALSE: Embryo enters the uterine cavity on Day 4 as a MORULA (16 cells), not as a blastocyst. The blastocyst stage is reached on Day 5–6.",
      difficulty: "recall",
    },
    {
      id: "mcq05",
      question: "The number of oocytes present at birth is approximately:",
      options: ["6–7 million", "3–4 lakh", "1–2 million", "400"],
      correctIndex: 2,
      explanation:
        "At birth there are 1–2 million oocytes. The maximum (6–7 million) is at 20 weeks IU life. By puberty only 3–4 lakh remain, and ~400 ovulate in a lifetime.",
      difficulty: "recall",
    },

    // --- CLINICAL (5) ---
    {
      id: "mcq06",
      question:
        "A 28-year-old woman with primary infertility undergoes diagnostic laparoscopy. During chromopertubation, dye is seen spilling from the fimbrial end. The most common site of fertilisation in this patient would be:",
      options: [
        "Isthmus of the Fallopian tube",
        "Ampulla of the Fallopian tube",
        "Fimbrial end of the Fallopian tube",
        "Uterine cavity",
      ],
      correctIndex: 1,
      explanation:
        "Fertilisation normally occurs at the ampulla of the Fallopian tube. The patent tubes confirmed by chromopertubation indicate normal anatomy.",
      difficulty: "clinical",
    },
    {
      id: "mcq07",
      question:
        "A 32-year-old man undergoes varicocelectomy for infertility. His wife asks the doctor when they can expect improvement in his semen analysis. The most appropriate answer is:",
      options: [
        "2 weeks",
        "4–6 weeks",
        "3 months",
        "6 months",
      ],
      correctIndex: 2,
      explanation:
        "Spermatogenesis takes 70–74 days, spermiogenesis 16 days, and transport 12–21 days. New sperm reflecting the post-surgical improvement will appear in the ejaculate after ~3 months.",
      difficulty: "clinical",
    },
    {
      id: "mcq08",
      question:
        "During an IVF cycle, the embryologist informs the couple that their embryo will be transferred on Day 5. At this stage the embryo is most likely a:",
      options: ["Zygote", "Morula", "Blastocyst", "Gastrula"],
      correctIndex: 2,
      explanation:
        "By Day 5 the embryo has developed into a blastocyst. The morula stage (16 cells) is reached by Day 4. Day 5 blastocyst transfer is preferred in IVF for better implantation rates.",
      difficulty: "clinical",
    },
    {
      id: "mcq09",
      question:
        "A 26-year-old woman presents with 6 weeks amenorrhoea and vaginal bleeding. Ultrasound shows a gestational sac in the posterior wall of the uterus with a yolk sac. This is consistent with:",
      options: [
        "Ectopic pregnancy",
        "Normal intrauterine pregnancy",
        "Cornual pregnancy",
        "Cervical pregnancy",
      ],
      correctIndex: 1,
      explanation:
        "The normal site of implantation is the upper posterior wall of the uterus. A gestational sac with yolk sac at this location is consistent with normal intrauterine pregnancy.",
      difficulty: "clinical",
    },
    {
      id: "mcq10",
      question:
        "A couple presents with infertility. Post-coital test shows non-motile spermatozoa in cervical mucus. Which of the following processes is most likely defective?",
      options: [
        "Spermatogenesis",
        "Capacitation",
        "Acrosomal reaction",
        "Cortical reaction",
      ],
      correctIndex: 1,
      explanation:
        "Capacitation is the final maturation of sperm during passage through the female genital tract (starting at the cervix). Defective capacitation leads to non-motile, non-functional sperm in cervical mucus.",
      difficulty: "clinical",
    },

    // --- TRICKY (5) ---
    {
      id: "mcq11",
      question: "All of the following are true about the cortical reaction EXCEPT:",
      options: [
        "It is triggered after sperm penetration",
        "It involves release of cortical granules",
        "It leads to softening of zona pellucida",
        "It prevents polyspermy",
      ],
      correctIndex: 2,
      explanation:
        "The cortical reaction causes HARDENING (not softening) of the zona pellucida, which prevents polyspermy. This is a common FMGE trap — softening vs hardening.",
      difficulty: "tricky",
    },
    {
      id: "mcq12",
      question:
        "Assertion: Primary oocyte completes meiosis I just before ovulation.\nReason: LH surge triggers completion of meiosis I in the primary oocyte.\n\nChoose the correct option:",
      options: [
        "Both assertion and reason are true, and reason explains the assertion",
        "Both are true, but reason does not explain the assertion",
        "Assertion is true, reason is false",
        "Both are false",
      ],
      correctIndex: 0,
      explanation:
        "Both are true and causally related. The LH surge prior to ovulation triggers completion of meiosis I in the primary oocyte, producing the secondary oocyte (arrested at metaphase II) and the first polar body.",
      difficulty: "tricky",
    },
    {
      id: "mcq13",
      question:
        "In a blastocyst, the outer layer that invades the endometrium and is responsible for hCG secretion is:",
      options: [
        "Cytotrophoblast",
        "Syncytiotrophoblast",
        "Inner cell mass",
        "Extraembryonic mesoderm",
      ],
      correctIndex: 1,
      explanation:
        "The syncytiotrophoblast is the outer layer of the trophoblast. It is the invasive layer that erodes into the endometrium during implantation and secretes hCG. The cytotrophoblast (inner) forms villi.",
      difficulty: "tricky",
    },
    {
      id: "mcq14",
      question:
        "Which of the following is NOT a feature of normal implantation in humans?",
      options: [
        "Occurs in the blastocyst stage",
        "Type is superficial (central)",
        "Begins with zona hatching",
        "Site is upper posterior wall of uterus",
      ],
      correctIndex: 1,
      explanation:
        "Human implantation is INTERSTITIAL (not superficial/central). In interstitial implantation, the blastocyst completely embeds within the endometrial stroma. Superficial implantation is seen in domestic animals like pigs.",
      difficulty: "tricky",
    },
    {
      id: "mcq15",
      question:
        "After fertilisation, the earliest day a urine pregnancy test (detecting hCG) can become positive is approximately:",
      options: ["Day 3–4", "Day 6–7", "Day 10–12", "Day 14–16"],
      correctIndex: 2,
      explanation:
        "Implantation begins Day 6–10. Syncytiotrophoblast starts secreting hCG after implantation. Detectable levels in urine appear around Day 10–12 post-fertilisation (roughly around the time of expected period).",
      difficulty: "tricky",
    },
  ],

  fillBlanks: [
    {
      id: "fb01",
      sentence: "Each primary spermatocyte gives rise to _____ sperm.",
      blanks: ["4"],
    },
    {
      id: "fb02",
      sentence: "Capacitation takes _____ hours and is maximum at the _____.",
      blanks: ["6–8", "Fallopian tube"],
    },
    {
      id: "fb03",
      sentence:
        "Time required for spermatogenesis is _____ days.",
      blanks: ["70–74"],
    },
    {
      id: "fb04",
      sentence:
        "Release of cortical granules causes hardening of _____ which prevents _____.",
      blanks: ["zona pellucida", "polyspermy"],
    },
    {
      id: "fb05",
      sentence:
        "Primary oocyte is arrested in _____ phase of _____.",
      blanks: ["Diplotene", "Prophase I"],
    },
    {
      id: "fb06",
      sentence:
        "Maximum number of oocytes is _____ million at _____ weeks intrauterine life.",
      blanks: ["6–7", "20"],
    },
    {
      id: "fb07",
      sentence:
        "Fertilisation occurs at the _____ of the Fallopian tube. Embryo enters uterus on Day _____ as a _____.",
      blanks: ["Ampulla", "4", "Morula"],
    },
    {
      id: "fb08",
      sentence:
        "Implantation site is the _____ wall of the uterus. Type of implantation is _____.",
      blanks: ["upper posterior", "interstitial"],
    },
  ],

  matchPairs: [
    { id: "mp01", left: "Spermatogenesis", right: "70–74 days" },
    { id: "mp02", left: "Spermiogenesis", right: "16 days" },
    { id: "mp03", left: "Sperm transport", right: "12–21 days" },
    { id: "mp04", left: "Primary oocyte arrest", right: "Diplotene / Prophase I" },
    { id: "mp05", left: "Secondary oocyte arrest", right: "Metaphase II" },
    { id: "mp06", left: "Inner cell mass", right: "Embryo" },
    { id: "mp07", left: "Syncytiotrophoblast", right: "Secretes hCG" },
    { id: "mp08", left: "Cytotrophoblast", right: "Forms villi" },
    { id: "mp09", left: "Fertilisation site", right: "Ampulla" },
    { id: "mp10", left: "Implantation site", right: "Upper posterior wall" },
  ],

  quickRevision: [
    "**Spermatogenesis:** Spermatogonium → (Mitosis) → 1° Spermatocyte → (Meiosis I) → 2° Spermatocyte → (Meiosis II) → Spermatid → (Spermiogenesis) → Sperm. Each 1° spermatocyte → **4 sperm**.",
    "**Capacitation** occurs in female genital tract (cervix → max at Fallopian tube), takes **6–8 hrs**.",
    "**Acrosomal reaction** breaks zona pellucida; **Cortical reaction** prevents polyspermy.",
    "**Oogenesis arrest:** 1° oocyte at **Diplotene/Prophase I**; 2° oocyte at **Metaphase II**.",
    "**Max oocytes:** 6–7 million at 20 weeks IUL; only **~400 ovulate** in lifetime.",
    "**Fertilisation** at **ampulla**; embryo enters uterus on **Day 4 as morula**.",
    "**Implantation:** Day 6–10, at **upper posterior wall**, type = **interstitial**, begins with **zonal hatching**.",
    "**Blastocyst:** Inner cell mass → embryo; Trophoblast → syncytiotrophoblast (outer, secretes hCG) + cytotrophoblast (inner, forms villi).",
  ],
};

export default ch01;
