import type { Chapter } from "../../types";

const ch04: Chapter = {
  id: "ch04",
  number: 4,
  title: "Amniotic Fluid & Related Abnormalities",
  subject: "Obstetrics",

  sections: [
    {
      id: "function",
      title: "Functions of Amniotic Fluid",
      content: [
        {
          type: "bulletList",
          items: [
            "**Shock absorber** — protects fetus from trauma",
            "**Allows movement** of the fetus",
            "**Temperature regulation**",
            "**NOT nutritive**",
            "**Protective** barrier",
          ],
        },
      ],
    },
    {
      id: "characteristics",
      title: "Characteristics of Amniotic Fluid",
      content: [
        {
          type: "table",
          headers: ["Property", "Value"],
          rows: [
            ["Main content", "99% Water (H₂O)"],
            ["Osmolality", "260 mOsm/L"],
            ["pH", "7–7.5 → ALKALINE"],
            ["Test", "Nitrazine Paper Test"],
            ["Specific gravity", "1.010"],
            ["Odour", "Odourless"],
          ],
        },
        {
          type: "clinicalNote",
          text: "Composition of amniotic fluid changes as pregnancy advances. The **alkaline pH** is the basis of the **Nitrazine paper test** used to detect rupture of membranes.",
        },
      ],
    },
    {
      id: "color-significance",
      title: "Colour Significance of Amniotic Fluid",
      content: [
        {
          type: "table",
          headers: ["Colour", "Significance"],
          rows: [
            ["Clear", "Preterm (<37 weeks)"],
            ["Straw coloured", "Term (37–42 weeks)"],
            ["Saffron", "Post-maturity"],
            ["Dark blood stained", "Abruption"],
            ["Tobacco juice", "IUD (Intrauterine death); Rh isoimmunisation"],
            ["Green coloured", "Meconium → Fetal distress"],
            ["Golden colour", "Normal"],
          ],
        },
        {
          type: "keyPoint",
          label: "High-Yield",
          value: "Green amniotic fluid = **Meconium** = **Fetal distress**. Tobacco juice colour = **Intrauterine death** or **Rh isoimmunisation**.",
        },
      ],
    },
    {
      id: "regulation",
      title: "Regulation of Amniotic Fluid",
      content: [
        {
          type: "text",
          value: "**Production — changes with gestational age:**",
        },
        {
          type: "table",
          headers: ["Gestational Age", "Source"],
          rows: [
            ["Till 12 weeks", "Ultrafiltrate from maternal plasma through placenta"],
            ["12–20 weeks", "Fetal plasma through fetal skin"],
            [">20 weeks", "FETAL URINE (main source)"],
          ],
        },
        {
          type: "bulletList",
          items: [
            "Fetal urine production starts by **12 weeks**",
            "**Keratinisation** of fetal skin: **22–25 weeks**",
            "**Maximum volume** at: **32–34 weeks**",
            "Main source at term: **Fetal urine**",
          ],
        },
        {
          type: "keyPoint",
          label: "Resorption",
          value: "Main mechanism: **Fetal SWALLOWING** (intramembranous flow).",
        },
      ],
    },
    {
      id: "assessment",
      title: "Assessment of Amniotic Fluid Volume",
      content: [
        {
          type: "table",
          headers: ["Parameter", "Normal", "Oligohydramnios", "Polyhydramnios"],
          rows: [
            ["AFI (cm)", "5–25", "<5", ">25"],
            ["SDP (cm)", "2–8", "<2", ">8"],
            ["Volume", "—", "<200 ml", ">2000 ml"],
          ],
        },
        {
          type: "keyPoint",
          label: "AFI",
          value: "**Amniotic Fluid Index** = sum of deepest vertical pocket in all **4 quadrants** of the uterus.",
        },
      ],
    },
    {
      id: "causes-oligohydramnios",
      title: "Causes of Oligohydramnios",
      content: [
        {
          type: "bulletList",
          items: [
            "**RENAL AGENESIS** (most important cause)",
            "**Posterior urethral valves**",
            "**Uteroplacental insufficiency** → pre-eclampsia, IUGR",
            "**Drugs:** ACEI (Enalapril), ARB (Losartan), NSAIDs",
            "**Undiagnosed rupture of membranes**",
            "**Post-term pregnancy**",
          ],
        },
        {
          type: "clinicalNote",
          text: "Think **decreased production** (renal agenesis, posterior urethral valves) or **increased loss** (ruptured membranes) or **placental insufficiency** (pre-eclampsia, post-term).",
        },
      ],
    },
    {
      id: "causes-polyhydramnios",
      title: "Causes of Polyhydramnios",
      content: [
        {
          type: "bulletList",
          items: [
            "**MCC: Idiopathic**",
            "**Impaired swallowing:** Cleft lip/palate, Esophageal atresia, Duodenal atresia",
            "**Skin defect:** Anencephaly, Neural Tube Defect (Spina Bifida)",
            "**Abdominal wall defect:** Omphalocele, Gastroschisis",
            "**Placental tumour:** Chorangioma",
            "**Rh incompatibility**, Hydrops",
            "**Increased urine:** Diabetes, Twins",
            "**Neck swellings**",
          ],
        },
        {
          type: "clinicalNote",
          text: "Think **decreased resorption** (anything preventing fetal swallowing — esophageal/duodenal atresia, anencephaly) or **increased production** (diabetes → fetal polyuria).",
        },
      ],
    },
    {
      id: "management",
      title: "Management",
      content: [
        {
          type: "text",
          value: "**Oligohydramnios:**",
        },
        {
          type: "bulletList",
          items: [
            "Expectant management with **fetal surveillance/monitoring**",
            "**Amnioinfusion:** infuse normal saline to increase amniotic space (in early oligohydramnios)",
          ],
        },
        {
          type: "text",
          value: "**Polyhydramnios:**",
        },
        {
          type: "bulletList",
          items: [
            "**Amnioreduction / Therapeutic Amniocentesis**",
            "**Indomethacin** (medical treatment of polyhydramnios)",
          ],
        },
        {
          type: "clinicalNote",
          text: "Indomethacin is an **NSAID** that reduces fetal urine output. Side effect: causes **premature closure of ductus arteriosus** — use with caution and avoid after 32 weeks.",
        },
      ],
    },
    {
      id: "complications-oligohydramnios",
      title: "Complications of Oligohydramnios",
      content: [
        {
          type: "bulletList",
          items: [
            "**Growth limitation**",
            "**Premature labour**",
            "**Developmental abnormalities** — CTEV (Clubfoot)",
          ],
        },
      ],
    },
    {
      id: "streeters-syndrome",
      title: "Amniotic Constriction Band / Streeter's Syndrome",
      content: [
        {
          type: "bulletList",
          items: [
            "Occurs in **severe oligohydramnios**",
            "Amniotic bands form **constriction rings** around fetal parts",
            "Can lead to **autoamputation of extremities**",
          ],
        },
      ],
    },
    {
      id: "potters-syndrome",
      title: "Potter's Syndrome",
      content: [
        {
          type: "keyPoint",
          label: "Cause",
          value: "Severe oligohydramnios associated with **RENAL AGENESIS**.",
        },
        {
          type: "bulletList",
          items: [
            "**Potter's facies:** Flat face, low-set ears",
            "**Lung hypoplasia** (most serious — cause of death)",
            "**Deformities of feet** → Club feet (CTEV)",
          ],
        },
      ],
    },
  ],

  flashcards: [
    {
      id: "fc01",
      front: "What are the functions of amniotic fluid?",
      back: "Shock absorber (trauma protection), allows fetal movement, temperature regulation, protective. NOT nutritive.",
      tags: ["function"],
    },
    {
      id: "fc02",
      front: "What is the pH of amniotic fluid and how is it tested?",
      back: "pH 7–7.5 (ALKALINE). Detected by Nitrazine Paper Test.",
      tags: ["characteristics", "high-yield"],
    },
    {
      id: "fc03",
      front: "What does green-coloured amniotic fluid indicate?",
      back: "Meconium → Fetal distress.",
      tags: ["color", "high-yield"],
    },
    {
      id: "fc04",
      front: "What does tobacco juice coloured amniotic fluid indicate?",
      back: "Intrauterine death (IUD) or Rh isoimmunisation.",
      tags: ["color", "high-yield"],
    },
    {
      id: "fc05",
      front: "What is the main source of amniotic fluid after 20 weeks?",
      back: "FETAL URINE. Before 12 wk: ultrafiltrate from maternal plasma. 12–20 wk: fetal plasma through fetal skin.",
      tags: ["regulation", "high-yield"],
    },
    {
      id: "fc06",
      front: "When is amniotic fluid volume maximum?",
      back: "32–34 weeks gestation.",
      tags: ["regulation", "high-yield"],
    },
    {
      id: "fc07",
      front: "How is amniotic fluid resorbed?",
      back: "Fetal SWALLOWING (intramembranous flow).",
      tags: ["regulation"],
    },
    {
      id: "fc08",
      front: "What AFI values define oligohydramnios and polyhydramnios?",
      back: "Oligohydramnios: AFI <5 cm, SDP <2 cm, volume <200 ml. Polyhydramnios: AFI >25 cm, SDP >8 cm, volume >2000 ml.",
      tags: ["assessment", "high-yield"],
    },
    {
      id: "fc09",
      front: "Most important cause of oligohydramnios?",
      back: "RENAL AGENESIS. Other causes: posterior urethral valves, pre-eclampsia/IUGR, ACEI/ARB/NSAIDs, ruptured membranes, post-term.",
      tags: ["oligohydramnios", "high-yield"],
    },
    {
      id: "fc10",
      front: "Most common cause of polyhydramnios?",
      back: "Idiopathic. Pathological causes: impaired swallowing (esophageal/duodenal atresia), anencephaly, diabetes, Rh incompatibility.",
      tags: ["polyhydramnios", "high-yield"],
    },
    {
      id: "fc11",
      front: "What drug is used to treat polyhydramnios and what is its major side effect?",
      back: "Indomethacin (NSAID). Side effect: premature closure of ductus arteriosus.",
      tags: ["management", "high-yield"],
    },
    {
      id: "fc12",
      front: "What is Potter's Syndrome?",
      back: "Severe oligohydramnios from RENAL AGENESIS. Features: Potter's facies (flat face, low-set ears), lung hypoplasia, club feet.",
      tags: ["potters", "high-yield"],
    },
    {
      id: "fc13",
      front: "What is Streeter's Syndrome?",
      back: "Amniotic constriction band syndrome. Severe oligohydramnios → constriction bands → autoamputation of extremities.",
      tags: ["streeters", "high-yield"],
    },
    {
      id: "fc14",
      front: "What colour is amniotic fluid at term?",
      back: "Straw coloured (37–42 weeks). Clear = preterm. Saffron = post-maturity.",
      tags: ["color"],
    },
    {
      id: "fc15",
      front: "When does keratinisation of fetal skin occur and why is it important?",
      back: "22–25 weeks. After keratinisation, fetal skin becomes impermeable — amniotic fluid production shifts entirely to fetal urine.",
      tags: ["regulation"],
    },
  ],

  mcqs: [
    // --- RECALL (5) ---
    {
      id: "mcq01",
      question:
        "A 32-week pregnant woman presents with breathlessness, excessive abdominal distension, normal fetal movements, difficulty feeling fetal parts, muffled fetal heartbeat, fundal height raised, and a tense but non-tender abdomen. The most likely diagnosis is:",
      options: [
        "Twins",
        "Placenta previa",
        "Polyhydramnios",
        "Gestational diabetes",
      ],
      correctIndex: 2,
      explanation:
        "Excessive abdominal distension with difficulty feeling fetal parts and muffled fetal heart sounds are classic features of polyhydramnios. The tense, non-tender abdomen differentiates it from abruption.",
      difficulty: "recall",
    },
    {
      id: "mcq02",
      question:
        "At 30 weeks, uterine size corresponds to only 26 weeks. USG shows oligohydramnios. The most likely cause is:",
      options: [
        "Anencephaly",
        "Esophageal atresia",
        "Renal agenesis",
        "Gestational diabetes",
      ],
      correctIndex: 2,
      explanation:
        "Renal agenesis is the most important cause of oligohydramnios. No fetal kidneys → no fetal urine → decreased amniotic fluid → small-for-dates uterus. Anencephaly and esophageal atresia cause polyhydramnios.",
      difficulty: "recall",
    },
    {
      id: "mcq03",
      question:
        "USG reveals AFI of 27 cm. Which of the following CANNOT cause this condition?",
      options: [
        "Cleft lip",
        "Pre-eclampsia",
        "Diabetes",
        "Open spina bifida",
      ],
      correctIndex: 1,
      explanation:
        "AFI >25 cm = polyhydramnios. Pre-eclampsia causes uteroplacental insufficiency → oligohydramnios, not polyhydramnios. Cleft lip, diabetes, and open spina bifida all cause polyhydramnios.",
      difficulty: "recall",
    },
    {
      id: "mcq04",
      question:
        "A pregnant woman at 34 weeks with difficulty in breathing and walking presents with acute hydramnios and maternal distress. The best treatment is:",
      options: [
        "Expectant management",
        "Amnioinfusion",
        "Indomethacin",
        "Therapeutic amniocentesis / Amnioreduction",
      ],
      correctIndex: 3,
      explanation:
        "In acute polyhydramnios with maternal distress, therapeutic amniocentesis (amnioreduction) provides immediate relief. Indomethacin is used for chronic polyhydramnios. Amnioinfusion is for oligohydramnios.",
      difficulty: "recall",
    },
    {
      id: "mcq05",
      question:
        "The main source of amniotic fluid after 20 weeks of gestation is:",
      options: [
        "Maternal plasma ultrafiltrate",
        "Fetal plasma through skin",
        "Fetal urine",
        "Fetal lung secretions",
      ],
      correctIndex: 2,
      explanation:
        "After 20 weeks, fetal urine is the main source of amniotic fluid. Before 12 weeks it is an ultrafiltrate of maternal plasma; between 12–20 weeks it passes through fetal skin.",
      difficulty: "recall",
    },

    // --- CLINICAL (5) ---
    {
      id: "mcq06",
      question:
        "A 28-year-old primigravida at 36 weeks is on enalapril for chronic hypertension. USG shows AFI of 3 cm. The most likely cause of oligohydramnios in this patient is:",
      options: [
        "Renal agenesis",
        "Posterior urethral valves",
        "ACE inhibitor use",
        "Post-term pregnancy",
      ],
      correctIndex: 2,
      explanation:
        "ACE inhibitors (e.g. enalapril) cause fetal renal dysfunction leading to oligohydramnios. They are contraindicated in pregnancy. The clinical history of enalapril use makes this the most likely cause.",
      difficulty: "clinical",
    },
    {
      id: "mcq07",
      question:
        "A neonate is born with flat face, low-set ears, bilateral club feet, and dies shortly after birth due to respiratory failure. Antenatal USG had shown absent kidneys. The most likely diagnosis is:",
      options: [
        "Edward syndrome",
        "Streeter's syndrome",
        "Potter's syndrome",
        "Turner syndrome",
      ],
      correctIndex: 2,
      explanation:
        "Potter's syndrome = renal agenesis → severe oligohydramnios → Potter's facies (flat face, low-set ears), lung hypoplasia (cause of death from respiratory failure), and club feet.",
      difficulty: "clinical",
    },
    {
      id: "mcq08",
      question:
        "During labour, artificial rupture of membranes reveals green-coloured amniotic fluid. The immediate concern is:",
      options: [
        "Intrauterine death",
        "Rh isoimmunisation",
        "Fetal distress with meconium passage",
        "Post-maturity",
      ],
      correctIndex: 2,
      explanation:
        "Green amniotic fluid indicates meconium staining, which is a sign of fetal distress. Tobacco juice colour suggests IUD or Rh isoimmunisation. Saffron colour suggests post-maturity.",
      difficulty: "clinical",
    },
    {
      id: "mcq09",
      question:
        "A 30-year-old woman at 28 weeks with polyhydramnios undergoes fetal USG which reveals absence of the stomach bubble and a blind-ending proximal esophagus. The most likely fetal anomaly is:",
      options: [
        "Duodenal atresia",
        "Esophageal atresia",
        "Anencephaly",
        "Renal agenesis",
      ],
      correctIndex: 1,
      explanation:
        "Absent stomach bubble + blind-ending proximal esophagus = esophageal atresia. The fetus cannot swallow amniotic fluid → polyhydramnios. Duodenal atresia shows a 'double bubble' sign.",
      difficulty: "clinical",
    },
    {
      id: "mcq10",
      question:
        "A pregnant woman at 38 weeks presents with a gush of fluid per vaginum. On examination, the fluid turns nitrazine paper dark blue. This suggests:",
      options: [
        "Urinary incontinence",
        "Bacterial vaginosis discharge",
        "Rupture of membranes",
        "Bloody show",
      ],
      correctIndex: 2,
      explanation:
        "Nitrazine paper turns dark blue in the presence of alkaline fluid. Amniotic fluid has a pH of 7–7.5 (alkaline). A positive nitrazine test confirms rupture of membranes. Urine is acidic and would not turn it blue.",
      difficulty: "clinical",
    },

    // --- TRICKY (5) ---
    {
      id: "mcq11",
      question:
        "All of the following are causes of polyhydramnios EXCEPT:",
      options: [
        "Esophageal atresia",
        "Posterior urethral valves",
        "Anencephaly",
        "Gestational diabetes",
      ],
      correctIndex: 1,
      explanation:
        "Posterior urethral valves cause obstructive uropathy → decreased fetal urine → OLIGOHYDRAMNIOS (not polyhydramnios). Esophageal atresia (impaired swallowing), anencephaly (skin defect), and diabetes (increased urine) all cause polyhydramnios.",
      difficulty: "tricky",
    },
    {
      id: "mcq12",
      question:
        "A newborn presents with constriction rings around the fingers with autoamputation of the ring finger. The most likely underlying condition during pregnancy was:",
      options: [
        "Polyhydramnios",
        "Potter's syndrome",
        "Amniotic constriction band (Streeter's) syndrome",
        "Gestational diabetes",
      ],
      correctIndex: 2,
      explanation:
        "Streeter's syndrome (amniotic constriction band syndrome) occurs in severe oligohydramnios. Amniotic bands form constriction rings that can cause autoamputation of extremities. Potter's syndrome has renal agenesis with facies and lung hypoplasia.",
      difficulty: "tricky",
    },
    {
      id: "mcq13",
      question:
        "Which of the following is TRUE about amniotic fluid?",
      options: [
        "It is acidic in nature",
        "It provides nutrition to the fetus",
        "Maximum volume is at 38–40 weeks",
        "Specific gravity is 1.010",
      ],
      correctIndex: 3,
      explanation:
        "Amniotic fluid specific gravity is 1.010. It is ALKALINE (pH 7–7.5), not acidic. It is NOT nutritive. Maximum volume is at 32–34 weeks, not 38–40 weeks.",
      difficulty: "tricky",
    },
    {
      id: "mcq14",
      question:
        "Indomethacin is used in the treatment of polyhydramnios. Its use is limited because it causes:",
      options: [
        "Premature closure of ductus arteriosus",
        "Renal agenesis in the fetus",
        "Neural tube defects",
        "Fetal tachycardia",
      ],
      correctIndex: 0,
      explanation:
        "Indomethacin (NSAID) reduces fetal urine production, decreasing amniotic fluid. However, it inhibits prostaglandin synthesis → premature closure of ductus arteriosus. It should be avoided after 32 weeks.",
      difficulty: "tricky",
    },
    {
      id: "mcq15",
      question:
        "A patient with oligohydramnios has AFI of 4 cm. Potter's syndrome is suspected. Which finding would BEST support this diagnosis?",
      options: [
        "Bilateral renal agenesis on USG",
        "Esophageal atresia on USG",
        "Single umbilical artery",
        "Nuchal translucency >3.5 mm",
      ],
      correctIndex: 0,
      explanation:
        "Potter's syndrome is specifically associated with bilateral RENAL AGENESIS → severe oligohydramnios → Potter's facies + lung hypoplasia + limb deformities. Esophageal atresia causes polyhydramnios, not oligohydramnios.",
      difficulty: "tricky",
    },
  ],

  fillBlanks: [
    {
      id: "fb01",
      sentence:
        "Amniotic fluid pH is _____ and is detected by the _____ test.",
      blanks: ["7–7.5 (alkaline)", "Nitrazine paper"],
    },
    {
      id: "fb02",
      sentence:
        "The main source of amniotic fluid after 20 weeks is _____.",
      blanks: ["fetal urine"],
    },
    {
      id: "fb03",
      sentence:
        "Maximum amniotic fluid volume is reached at _____ weeks gestation.",
      blanks: ["32–34"],
    },
    {
      id: "fb04",
      sentence:
        "Oligohydramnios is defined as AFI < _____ cm or SDP < _____ cm.",
      blanks: ["5", "2"],
    },
    {
      id: "fb05",
      sentence:
        "Polyhydramnios is defined as AFI > _____ cm or volume > _____ ml.",
      blanks: ["25", "2000"],
    },
    {
      id: "fb06",
      sentence:
        "The most common cause of polyhydramnios is _____.",
      blanks: ["idiopathic"],
    },
    {
      id: "fb07",
      sentence:
        "Potter's syndrome is caused by _____ leading to severe oligohydramnios with _____, lung hypoplasia, and club feet.",
      blanks: ["renal agenesis", "Potter's facies (flat face, low-set ears)"],
    },
    {
      id: "fb08",
      sentence:
        "Keratinisation of fetal skin occurs at _____ weeks; after this, amniotic fluid is produced mainly by _____.",
      blanks: ["22–25", "fetal urine"],
    },
  ],

  matchPairs: [
    { id: "mp01", left: "Renal agenesis", right: "Potter's syndrome" },
    { id: "mp02", left: "Green amniotic fluid", right: "Meconium / Fetal distress" },
    { id: "mp03", left: "Tobacco juice colour", right: "Intrauterine death (IUD)" },
    { id: "mp04", left: "Oligohydramnios", right: "AFI <5 cm" },
    { id: "mp05", left: "Polyhydramnios", right: "AFI >25 cm" },
    { id: "mp06", left: "Main source of amniotic fluid", right: "Fetal urine" },
    { id: "mp07", left: "Resorption of amniotic fluid", right: "Fetal swallowing" },
    { id: "mp08", left: "Indomethacin", right: "Polyhydramnios treatment" },
    { id: "mp09", left: "Maximum amniotic fluid", right: "32–34 weeks" },
    { id: "mp10", left: "Nitrazine paper test", right: "Alkaline pH detection" },
  ],

  quickRevision: [
    "**Functions:** Shock absorber, allows movement, temperature regulation, protective. **NOT nutritive.**",
    "**Characteristics:** 99% water, pH 7–7.5 (alkaline), specific gravity 1.010, odourless. Test: **Nitrazine paper test**.",
    "**Colour:** Clear = preterm; Straw = term; Saffron = post-maturity; Dark blood = abruption; Tobacco juice = IUD/Rh; **Green = meconium/fetal distress**; Golden = normal.",
    "**Regulation:** Till 12 wk = maternal plasma ultrafiltrate; 12–20 wk = through fetal skin; **>20 wk = fetal urine** (main source). Resorption by **fetal swallowing**. Max volume at **32–34 weeks**.",
    "**Assessment:** Normal AFI 5–25 cm (SDP 2–8). **Oligo: AFI <5, SDP <2, <200 ml.** **Poly: AFI >25, SDP >8, >2000 ml.**",
    "**Oligohydramnios causes:** Renal agenesis (most important), posterior urethral valves, pre-eclampsia/IUGR, ACEI/ARB/NSAIDs, ruptured membranes, post-term. **Mx:** Amnioinfusion.",
    "**Polyhydramnios causes:** MCC idiopathic; esophageal/duodenal atresia, anencephaly, diabetes, Rh incompatibility, chorangioma. **Mx:** Amnioreduction, Indomethacin (risk: premature closure of ductus arteriosus).",
    "**Potter's syndrome:** Renal agenesis → severe oligo → flat face, low-set ears, lung hypoplasia, club feet. **Streeter's syndrome:** Oligo → amniotic constriction bands → autoamputation.",
  ],
};

export default ch04;
