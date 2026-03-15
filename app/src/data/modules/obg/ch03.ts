import type { Chapter } from "../../types";

const ch03: Chapter = {
  id: "ch03",
  number: 3,
  title: "Placenta",
  subject: "Obstetrics",

  sections: [
    {
      id: "placental-characteristics",
      title: "Placental Characteristics",
      content: [
        {
          type: "table",
          headers: ["Feature", "Detail"],
          rows: [
            ["Shape", "Discoid / Round-Oval"],
            ["Diameter", "20–25 cm"],
            ["Weight", "500 gm"],
            ["Volume", "500 mL"],
            ["Thickness", "2.5–4 cm (>4 cm = Placentomegaly)"],
            [
              "Type",
              "Deciduate (shed at parturition), Hemochorial (maternal blood in contact with fetal trophoblast/villi)",
            ],
          ],
        },
        {
          type: "bulletList",
          items: [
            "Fetal & placental weight equal at **17 weeks**",
            "Placenta:fetus ratio at term → **1:6**",
          ],
        },
      ],
    },
    {
      id: "umbilical-cord",
      title: "Umbilical Cord",
      content: [
        {
          type: "bulletList",
          items: [
            "Length: **50–70 cm**",
            "**2 Arteries** (carry deoxygenated blood) + **1 Vein** (carries oxygenated blood — left umbilical vein)",
            "Protected by **Wharton's Jelly**",
          ],
        },
      ],
    },
    {
      id: "placental-surfaces",
      title: "Placental Surfaces",
      content: [
        {
          type: "table",
          headers: ["Surface", "AKA", "Contribution"],
          rows: [
            ["Fetal surface", "Chorionic Plate", "Forms 4/5th of placenta"],
            [
              "Maternal surface",
              "Basal / Decidual Surface",
              "Forms 1/5th of placenta; has cotyledons",
            ],
          ],
        },
      ],
    },
    {
      id: "cotyledon-chorionic-villi",
      title: "Cotyledon & Chorionic Villi",
      content: [
        {
          type: "keyPoint",
          label: "Cotyledon",
          value:
            "AKA Placental lobule = **FUNCTIONAL UNIT OF PLACENTA**. Basal plate divided by cleft, supplied by 1 truncal branch of chorionic artery + 1 truncal/main chorionic villus.",
        },
        {
          type: "bulletList",
          items: [
            "**Chorionic Villi:** outer layer = **Syncytiotrophoblast**; inner layer = **Langhan layer / Cytotrophoblast**",
            "**Intervillous space** receives blood from **spiral arteries**",
          ],
        },
        {
          type: "table",
          headers: ["Villus Type", "Composition"],
          rows: [
            ["Primary (1°)", "Cytotrophoblast + Syncytiotrophoblast"],
            [
              "Secondary (2°)",
              "Cytotrophoblast + Syncytiotrophoblast + Extra-embryonic mesoderm",
            ],
            [
              "Tertiary (3°)",
              "Cytotrophoblast + Syncytiotrophoblast + Extra-embryonic mesoderm + Fetal blood vessels",
            ],
          ],
        },
      ],
    },
    {
      id: "placental-barrier",
      title: "Placental Barrier / Membrane",
      content: [
        {
          type: "text",
          value: "Layers from **maternal to fetal** side:",
        },
        {
          type: "bulletList",
          items: [
            "1. **Syncytiotrophoblast**",
            "2. **Cytotrophoblast**",
            "3. **Extra-embryonic mesoderm / Mesenchyme**",
            "4. **Endothelium of fetal capillary** with its Basement membrane",
          ],
        },
        {
          type: "clinicalNote",
          text: "**IgM, Albumin, Heparin, Insulin** do NOT cross the placenta. **IgG DOES cross.**",
        },
      ],
    },
    {
      id: "development-decidua",
      title: "Development & Decidua",
      content: [
        {
          type: "table",
          headers: ["Component", "Origin"],
          rows: [
            ["Fetal part of placenta", "Chorion Frondosum"],
            ["Maternal part of placenta", "Decidua Basalis"],
          ],
        },
        {
          type: "table",
          headers: ["Decidua Type", "Location"],
          rows: [
            ["Decidua Basalis", "Base of embryo"],
            ["Decidua Capsularis", "Covers embryo"],
            ["Decidua Parietalis", "Lines uterine cavity"],
          ],
        },
        {
          type: "bulletList",
          items: [
            "**Chorion Laeve** = \"Chorion — flat\" (smooth chorion)",
            "**Double Decidual Sign** = D. Capsularis + D. Parietalis",
          ],
        },
      ],
    },
    {
      id: "placental-circulation",
      title: "Placental Circulation",
      content: [
        {
          type: "table",
          headers: ["Feature", "Uteroplacental", "Fetoplacental"],
          rows: [
            [
              "Artery",
              "Spiral artery (branch of uterine artery)",
              "Umbilical vessels",
            ],
            ["Flow", "500–750 ml/min", "400 ml/min"],
            ["Volume of blood", "150 ml", "350 ml"],
            ["Starts at", "Day 15", "Day 17"],
          ],
        },
        {
          type: "bulletList",
          items: [
            "Placental circulation established by **3rd week** of development",
            "Placental development completed by **3rd month**",
          ],
        },
      ],
    },
    {
      id: "placenta-anomalies",
      title: "Placenta Anomalies",
      content: [
        {
          type: "keyPoint",
          label: "Succenturiate Lobe",
          value:
            "Interconnecting blood vessel. Cx: **PPH, retained placenta, subinvolution, sepsis**.",
        },
        {
          type: "keyPoint",
          label: "Placenta Bilobata",
          value: "Placenta with **2 lobes**.",
        },
        {
          type: "keyPoint",
          label: "Extrachorial Placenta",
          value:
            "Basal plate bigger than chorionic plate.",
        },
        {
          type: "table",
          headers: ["Type", "Feature", "Complications"],
          rows: [
            [
              "Circumvallate",
              "Valve/ridge-like infolding of basal plate; depressed fetal surface",
              "APH, IUGR, abortion, preterm labour",
            ],
            ["Circummarginate", "Smooth margins", "Usually benign"],
          ],
        },
      ],
    },
    {
      id: "cord-insertions",
      title: "Cord Insertions",
      content: [
        {
          type: "keyPoint",
          label: "Marginal Insertion (Battledore Placenta)",
          value:
            "Cord inserts at the edge. Cx: cord avulsion, retained placenta. In OT → ↓ anesthesia requirements.",
        },
        {
          type: "keyPoint",
          label: "Velamentous Insertion",
          value:
            "Cord attached to **MEMBRANE** (not placenta). Umbilical vessels exposed, **not protected by Wharton's Jelly**. Cx: **VASA PREVIA**.",
        },
      ],
    },
    {
      id: "vasa-previa",
      title: "Vasa Previa",
      content: [
        {
          type: "table",
          headers: ["Feature", "Detail"],
          rows: [
            ["Incidence", "1 in 2000–3000 deliveries"],
            ["Definition", "Fetal blood vessels traversing over internal os"],
            ["Bleeding origin", "FETAL"],
            ["Fetal mortality", ">50% due to exsanguination"],
          ],
        },
        {
          type: "table",
          headers: ["Type", "Cause"],
          rows: [
            ["Type 1 (MCC)", "Velamentous insertion"],
            ["Type 2", "Succenturiate lobe"],
          ],
        },
        {
          type: "keyPoint",
          label: "Clinical Feature",
          value:
            "After **ROM** (rupture of membranes) → bleeding with rapid severe **fetal distress**.",
        },
        {
          type: "keyPoint",
          label: "IOC",
          value: "**USG Color Doppler** (diagnosis in antenatal period).",
        },
        {
          type: "keyPoint",
          label: "Apt Test / Singer's Alkali Denaturation Test",
          value:
            "Fetal blood is **resistant to denaturation** (retains colour). Maternal blood is **denatured** (loses colour).",
        },
        {
          type: "keyPoint",
          label: "Management",
          value:
            "**Emergency LSCS**. If detected antenatally → **Elective CS**.",
        },
      ],
    },
    {
      id: "single-umbilical-artery",
      title: "Single Umbilical Artery",
      content: [
        {
          type: "bulletList",
          items: [
            "**MC vascular abnormality** of cord",
            "Associated with other anomalies: MC **renal**, cardiac",
            "Associated with **aneuploidy**",
          ],
        },
      ],
    },
    {
      id: "hcg",
      title: "Placental Hormones — hCG",
      content: [
        {
          type: "bulletList",
          items: [
            "**Glycoprotein** hormone",
            "Produced by: **Syncytiotrophoblast**",
            "Subunits: **α** (similar to LH, FSH, TSH) + **β** (SPECIFIC — tested)",
            "hCG is structurally and functionally similar to **LH**",
          ],
        },
        {
          type: "keyPoint",
          label: "Function",
          value:
            "Exclusively maintains **Corpus Luteum** in pregnancy (produces progesterone in initial 2 months). Also responsible for **nausea and vomiting** in pregnancy.",
        },
        {
          type: "table",
          headers: ["Parameter", "Value"],
          rows: [
            ["Doubling time", "Every 48 hours (IUP); prolonged → ectopic"],
            ["Appears by", "8 days after fertilisation / Day 22 of cycle"],
            ["Peaks at", "9–10 weeks"],
            ["Plateau", "16–20 weeks"],
            ["Discriminatory zone (TVS)", "1500 IU/L"],
            ["Discriminatory zone (TAS)", "6500 IU/L"],
          ],
        },
      ],
    },
    {
      id: "high-low-hcg",
      title: "High & Low hCG",
      content: [
        {
          type: "table",
          headers: ["High hCG", "Low hCG"],
          rows: [
            ["Multiple pregnancy", "Ectopic pregnancy"],
            ["Molar pregnancy (hyperplacentosis)", "Spontaneous abortion"],
            ["Rh incompatibility", "Edward syndrome"],
            ["Down syndrome", "—"],
          ],
        },
      ],
    },
    {
      id: "corpus-luteum-role",
      title: "Corpus Luteum Role in Pregnancy",
      content: [
        {
          type: "table",
          headers: ["State", "Maintained by", "Role"],
          rows: [
            ["Non-pregnant", "LH", "Produces progesterone (luteal phase)"],
            [
              "Pregnant (1st trimester)",
              "hCG",
              "Produces Progesterone for 1–3 months",
            ],
            [
              "From 3rd month onward",
              "—",
              "Main source of Progesterone = PLACENTA",
            ],
          ],
        },
      ],
    },
  ],

  flashcards: [
    {
      id: "fc01",
      front: "What is the weight, diameter, and thickness of a normal placenta?",
      back: "Weight: 500 gm. Diameter: 20–25 cm. Thickness: 2.5–4 cm (>4 cm = Placentomegaly).",
      tags: ["placental-characteristics", "high-yield"],
    },
    {
      id: "fc02",
      front: "What type of placenta is found in humans?",
      back: "Deciduate (shed at parturition) and Hemochorial (maternal blood in direct contact with fetal trophoblast/villi).",
      tags: ["placental-characteristics"],
    },
    {
      id: "fc03",
      front: "Umbilical cord: how many vessels and what do they carry?",
      back: "2 Arteries (deoxygenated blood) + 1 Vein (oxygenated blood — left umbilical vein). Protected by Wharton's Jelly.",
      tags: ["umbilical-cord", "high-yield"],
    },
    {
      id: "fc04",
      front: "What is the functional unit of the placenta?",
      back: "Cotyledon (AKA Placental lobule).",
      tags: ["cotyledon", "high-yield"],
    },
    {
      id: "fc05",
      front: "What are the layers of the placental barrier (maternal to fetal)?",
      back: "1. Syncytiotrophoblast → 2. Cytotrophoblast → 3. Extra-embryonic mesoderm/Mesenchyme → 4. Endothelium of fetal capillary with basement membrane.",
      tags: ["placental-barrier", "high-yield"],
    },
    {
      id: "fc06",
      front: "What is the Double Decidual Sign?",
      back: "Decidua Capsularis + Decidua Parietalis.",
      tags: ["decidua"],
    },
    {
      id: "fc07",
      front: "Uteroplacental vs Fetoplacental blood flow?",
      back: "Uteroplacental: 500–750 ml/min (starts Day 15). Fetoplacental: 400 ml/min (starts Day 17).",
      tags: ["circulation", "high-yield"],
    },
    {
      id: "fc08",
      front: "What is vasa previa and its MCC?",
      back: "Fetal blood vessels traversing over internal os. MCC = Velamentous insertion (Type 1). >50% fetal mortality due to exsanguination.",
      tags: ["vasa-previa", "high-yield"],
    },
    {
      id: "fc09",
      front: "What is the Apt Test?",
      back: "Singer's Alkali Denaturation Test: fetal blood is resistant to denaturation (retains colour), maternal blood is denatured (loses colour). Used to distinguish fetal from maternal bleeding.",
      tags: ["vasa-previa", "high-yield"],
    },
    {
      id: "fc10",
      front: "What is velamentous insertion?",
      back: "Cord attached to MEMBRANE (not placenta). Umbilical vessels exposed, not protected by Wharton's Jelly. Complication: Vasa Previa.",
      tags: ["cord-insertions", "high-yield"],
    },
    {
      id: "fc11",
      front: "MC vascular abnormality of the umbilical cord?",
      back: "Single Umbilical Artery. Associated with renal anomalies (MC), cardiac anomalies, and aneuploidy.",
      tags: ["single-umbilical-artery"],
    },
    {
      id: "fc12",
      front: "hCG: which subunit is specific and which is shared?",
      back: "α subunit is similar to LH, FSH, TSH. β subunit is SPECIFIC (the one tested).",
      tags: ["hcg", "high-yield"],
    },
    {
      id: "fc13",
      front: "When does hCG appear, peak, and plateau?",
      back: "Appears: 8 days post-fertilisation. Peaks: 9–10 weeks. Plateau: 16–20 weeks. Doubling time: every 48 hours.",
      tags: ["hcg", "high-yield"],
    },
    {
      id: "fc14",
      front: "hCG discriminatory zone for TVS and TAS?",
      back: "TVS: 1500 IU/L. TAS: 6500 IU/L. Above these levels a gestational sac must be visible.",
      tags: ["hcg", "high-yield"],
    },
    {
      id: "fc15",
      front: "What substances do NOT cross the placenta?",
      back: "IgM, Albumin, Heparin, Insulin. (IgG DOES cross the placenta.)",
      tags: ["placental-barrier", "high-yield"],
    },
  ],

  mcqs: [
    // --- RECALL (5) ---
    {
      id: "mcq01",
      question:
        "The following are correct regarding normal placenta EXCEPT:",
      options: [
        "Placenta weight 500 gm",
        "Round-oval with 22 cm diameter",
        "Central thickness >2.5 cm",
        "Extraplacental membranes and 2-vessel umbilical cord",
      ],
      correctIndex: 3,
      explanation:
        "The umbilical cord normally has 3 vessels (2 arteries + 1 vein), not 2. All other options describe normal placental features.",
      difficulty: "recall",
    },
    {
      id: "mcq02",
      question:
        "Which of the following is true about hCG?",
      options: [
        "Alpha subunit is identical to LH, FSH, TSH",
        "Causes involution of corpus luteum",
        "Maximum levels at 60–70 days of gestation",
        "Doubles every 7–10 days",
      ],
      correctIndex: 0,
      explanation:
        "The α subunit of hCG is structurally similar/identical to LH, FSH, and TSH. The β subunit is specific to hCG. hCG maintains (not involutes) the corpus luteum, peaks at 9–10 weeks (60–70 days), and doubles every 48 hours.",
      difficulty: "recall",
    },
    {
      id: "mcq03",
      question:
        "Which of the following doesn't cross the placenta?",
      options: ["IgG", "Albumin", "Globulin", "Glucose"],
      correctIndex: 1,
      explanation:
        "Albumin does NOT cross the placenta. IgM, Heparin, and Insulin also don't cross. IgG is the only immunoglobulin that crosses the placenta.",
      difficulty: "recall",
    },
    {
      id: "mcq04",
      question:
        "The functional unit of the placenta is:",
      options: [
        "Chorionic villus",
        "Cotyledon",
        "Intervillous space",
        "Syncytiotrophoblast",
      ],
      correctIndex: 1,
      explanation:
        "Cotyledon (AKA Placental lobule) is the functional unit of the placenta. Each cotyledon is supplied by 1 truncal branch of the chorionic artery.",
      difficulty: "recall",
    },
    {
      id: "mcq05",
      question:
        "The MC vascular abnormality of the umbilical cord is:",
      options: [
        "Umbilical artery aneurysm",
        "Single umbilical artery",
        "Umbilical vein thrombosis",
        "True knot of cord",
      ],
      correctIndex: 1,
      explanation:
        "Single umbilical artery is the MC vascular abnormality of the cord. It is associated with renal anomalies (MC), cardiac anomalies, and aneuploidy.",
      difficulty: "recall",
    },

    // --- CLINICAL (5) ---
    {
      id: "mcq06",
      question:
        "A woman in labour complains of painless bleeding from the vagina. On examination, blood per vaginum is positive, membranes are ruptured. NST shows severe fetal distress, FHR 80 bpm. Management?",
      options: [
        "Rapid delivery by vacuum",
        "Rapid delivery by forceps",
        "Immediate LSCS",
        "Apt test",
      ],
      correctIndex: 2,
      explanation:
        "This is a classic presentation of vasa previa: painless bleeding after ROM with rapid severe fetal distress. With fetal bradycardia (FHR 80 bpm), immediate emergency LSCS is the management to save the fetus.",
      difficulty: "clinical",
    },
    {
      id: "mcq07",
      question:
        "A 30-year-old woman at 32 weeks gestation presents with antepartum haemorrhage. Ultrasound shows a ridge-like infolding at the placental margin with a depressed fetal surface. The most likely diagnosis is:",
      options: [
        "Placenta praevia",
        "Circumvallate placenta",
        "Circummarginate placenta",
        "Succenturiate lobe",
      ],
      correctIndex: 1,
      explanation:
        "Circumvallate placenta has a valve/ridge-like infolding of the basal plate with a depressed fetal surface. It is associated with APH, IUGR, abortion, and preterm labour.",
      difficulty: "clinical",
    },
    {
      id: "mcq08",
      question:
        "A 28-year-old primigravida at 6 weeks gestation has a serum β-hCG of 2000 IU/L. Transvaginal ultrasound shows no gestational sac in the uterus. Repeat β-hCG after 48 hours is 2400 IU/L. The most likely diagnosis is:",
      options: [
        "Normal intrauterine pregnancy",
        "Complete molar pregnancy",
        "Ectopic pregnancy",
        "Missed abortion",
      ],
      correctIndex: 2,
      explanation:
        "β-hCG is above the TVS discriminatory zone (1500 IU/L) but no gestational sac is seen — strongly suggests ectopic pregnancy. Additionally, the doubling time is prolonged (normal = doubles every 48 hours; here 2000→2400 is only 20% rise).",
      difficulty: "clinical",
    },
    {
      id: "mcq09",
      question:
        "During delivery of the placenta, the obstetrician notes that the umbilical cord is attached at the edge of the placenta. This is known as:",
      options: [
        "Velamentous insertion",
        "Battledore placenta",
        "Succenturiate lobe",
        "Circumvallate placenta",
      ],
      correctIndex: 1,
      explanation:
        "Marginal insertion of the cord (at the edge of the placenta) is called Battledore placenta. Velamentous insertion is when the cord attaches to the membranes, not the placenta.",
      difficulty: "clinical",
    },
    {
      id: "mcq10",
      question:
        "A 35-year-old woman with a twin pregnancy has markedly elevated β-hCG levels and persistent vomiting. On examination, uterine size is larger than dates. Which of the following conditions is NOT associated with high hCG?",
      options: [
        "Multiple pregnancy",
        "Molar pregnancy",
        "Ectopic pregnancy",
        "Rh incompatibility",
      ],
      correctIndex: 2,
      explanation:
        "Ectopic pregnancy is associated with LOW hCG (suboptimal rise). High hCG is associated with multiple pregnancy, molar pregnancy (hyperplacentosis), Rh incompatibility, and Down syndrome.",
      difficulty: "clinical",
    },

    // --- TRICKY (5) ---
    {
      id: "mcq11",
      question:
        "Which type of vasa previa is caused by a succenturiate lobe?",
      options: [
        "Type 1",
        "Type 2",
        "Type 3",
        "Type 4",
      ],
      correctIndex: 1,
      explanation:
        "Type 1 vasa previa is caused by velamentous insertion (MCC). Type 2 vasa previa is caused by a succenturiate lobe where vessels connecting the lobes traverse the internal os.",
      difficulty: "tricky",
    },
    {
      id: "mcq12",
      question:
        "All of the following are layers of the placental barrier EXCEPT:",
      options: [
        "Syncytiotrophoblast",
        "Cytotrophoblast",
        "Decidua basalis",
        "Endothelium of fetal capillary",
      ],
      correctIndex: 2,
      explanation:
        "The 4 layers of the placental barrier (maternal to fetal) are: Syncytiotrophoblast → Cytotrophoblast → Extra-embryonic mesoderm → Endothelium of fetal capillary. Decidua basalis is the maternal part of the placenta, not a layer of the barrier.",
      difficulty: "tricky",
    },
    {
      id: "mcq13",
      question:
        "The 'Double Decidual Sign' on ultrasound is formed by:",
      options: [
        "Decidua Basalis + Decidua Capsularis",
        "Decidua Capsularis + Decidua Parietalis",
        "Decidua Basalis + Decidua Parietalis",
        "Decidua Capsularis + Chorion Laeve",
      ],
      correctIndex: 1,
      explanation:
        "The Double Decidual Sign = Decidua Capsularis + Decidua Parietalis. It is an early sonographic sign of intrauterine pregnancy.",
      difficulty: "tricky",
    },
    {
      id: "mcq14",
      question:
        "Assertion: In circumvallate placenta, the basal plate is larger than the chorionic plate.\nReason: Circumvallate placenta is a type of extrachorial placenta.\n\nChoose the correct option:",
      options: [
        "Both assertion and reason are true, and reason explains the assertion",
        "Both are true, but reason does not explain the assertion",
        "Assertion is true, reason is false",
        "Assertion is false, reason is true",
      ],
      correctIndex: 0,
      explanation:
        "Both are true and causally related. In extrachorial placenta, the basal plate is bigger than the chorionic plate. Circumvallate placenta is a type of extrachorial placenta with ridge-like infolding of the basal plate. The larger basal plate is a direct consequence of its extrachorial nature.",
      difficulty: "tricky",
    },
    {
      id: "mcq15",
      question:
        "hCG has structural similarity to which of the following pituitary hormones, and this similarity can cause which clinical effect in molar pregnancy?",
      options: [
        "FSH — causes ovarian hyperstimulation",
        "LH — causes theca lutein cysts",
        "TSH — causes hyperthyroidism",
        "ACTH — causes Cushing syndrome",
      ],
      correctIndex: 2,
      explanation:
        "The α subunit of hCG is shared with TSH (as well as LH and FSH). At very high levels (as in molar pregnancy), hCG can stimulate the TSH receptor causing hyperthyroidism. While hCG is most similar to LH, the clinical consequence asked here is the TSH cross-reactivity causing thyrotoxicosis.",
      difficulty: "tricky",
    },
  ],

  fillBlanks: [
    {
      id: "fb01",
      sentence:
        "Normal placenta weighs _____ gm, has a diameter of _____ cm, and thickness >4 cm is called _____.",
      blanks: ["500", "20–25", "Placentomegaly"],
    },
    {
      id: "fb02",
      sentence:
        "Umbilical cord has _____ arteries carrying _____ blood and _____ vein carrying _____ blood.",
      blanks: ["2", "deoxygenated", "1", "oxygenated"],
    },
    {
      id: "fb03",
      sentence:
        "The functional unit of the placenta is the _____, also called the _____.",
      blanks: ["Cotyledon", "Placental lobule"],
    },
    {
      id: "fb04",
      sentence:
        "Fetal part of placenta develops from _____ and maternal part from _____.",
      blanks: ["Chorion Frondosum", "Decidua Basalis"],
    },
    {
      id: "fb05",
      sentence:
        "Uteroplacental blood flow is _____ ml/min via _____ arteries, starting at Day _____.",
      blanks: ["500–750", "spiral", "15"],
    },
    {
      id: "fb06",
      sentence:
        "MCC of Vasa Previa is _____ insertion (Type _____). Fetal mortality is >_____.",
      blanks: ["Velamentous", "1", "50%"],
    },
    {
      id: "fb07",
      sentence:
        "hCG is produced by _____, peaks at _____ weeks, and doubles every _____ hours.",
      blanks: ["Syncytiotrophoblast", "9–10", "48"],
    },
    {
      id: "fb08",
      sentence:
        "The discriminatory zone for hCG on TVS is _____ IU/L and on TAS is _____ IU/L.",
      blanks: ["1500", "6500"],
    },
  ],

  matchPairs: [
    { id: "mp01", left: "Fetal surface", right: "Chorionic plate" },
    { id: "mp02", left: "Maternal surface", right: "Basal / Decidual surface" },
    { id: "mp03", left: "Syncytiotrophoblast", right: "Produces hCG" },
    { id: "mp04", left: "Cotyledon", right: "Functional unit of placenta" },
    {
      id: "mp05",
      left: "Umbilical cord arteries",
      right: "2 (deoxygenated blood)",
    },
    {
      id: "mp06",
      left: "Umbilical cord vein",
      right: "1 (oxygenated blood)",
    },
    {
      id: "mp07",
      left: "Uteroplacental flow",
      right: "500–750 ml/min",
    },
    { id: "mp08", left: "Fetoplacental flow", right: "400 ml/min" },
    {
      id: "mp09",
      left: "Circumvallate placenta",
      right: "Ridge-like infolding",
    },
    { id: "mp10", left: "Velamentous insertion", right: "Vasa previa" },
  ],

  quickRevision: [
    "**Placenta:** Discoid, 500 gm, 20–25 cm diameter, 2.5–4 cm thick. Type: **Deciduate + Hemochorial**. Placenta:fetus ratio at term = **1:6**.",
    "**Umbilical cord:** 50–70 cm long, **2 arteries** (deoxy) + **1 vein** (oxy), protected by **Wharton's Jelly**. MC vascular abnormality = **Single umbilical artery** (assoc. renal, cardiac anomalies).",
    "**Cotyledon** = functional unit. Chorionic villi: outer = **Syncytiotrophoblast**, inner = **Cytotrophoblast**. Tertiary villi contain fetal blood vessels.",
    "**Placental barrier** (maternal → fetal): Syncytiotrophoblast → Cytotrophoblast → Mesenchyme → Fetal capillary endothelium. **IgG crosses; IgM, Albumin, Heparin, Insulin do NOT.**",
    "**Decidua:** Basalis (base) → maternal placenta; Capsularis (covers embryo) + Parietalis (lines uterus) = **Double Decidual Sign**. Fetal part = **Chorion Frondosum**.",
    "**Circulation:** Uteroplacental (spiral artery, 500–750 ml/min, Day 15) vs Fetoplacental (umbilical vessels, 400 ml/min, Day 17). Established by **3rd week**, completed by **3rd month**.",
    "**Vasa previa:** Fetal vessels over internal os. MCC = **Velamentous insertion** (Type 1). After ROM → fetal bleeding + severe distress. IOC: **USG Color Doppler**. Rx: **Emergency LSCS**. **Apt Test** distinguishes fetal from maternal blood.",
    "**hCG:** Produced by **Syncytiotrophoblast**. α subunit shared with LH/FSH/TSH; **β subunit is specific**. Appears Day 8, peaks **9–10 weeks**, doubles q48h. Discriminatory zone: TVS **1500 IU/L**, TAS **6500 IU/L**. High in molar/multiple pregnancy; Low in ectopic/abortion.",
  ],
};

export default ch03;
