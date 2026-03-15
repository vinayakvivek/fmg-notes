import type { Chapter } from "../../types";

const ch05: Chapter = {
  id: "ch05",
  number: 5,
  title: "Antenatal Care",
  subject: "Obstetrics",

  sections: [
    {
      id: "obstetric-score",
      title: "Obstetric Score (GPLA Scoring)",
      content: [
        {
          type: "table",
          headers: ["Term", "Definition"],
          rows: [
            ["Gravida (G)", "All pregnancies regardless of outcome (past + present)"],
            ["Parity (P)", "All PAST pregnancies that crossed viability (28 weeks)"],
            ["Living issue (L)", "Number of living children"],
            ["Abortion (A)", "Number of abortions"],
          ],
        },
        {
          type: "clinicalNote",
          text: "Parity is counted **1 by 1** — twins/triplets delivered in a single pregnancy count as **1 parity**, not 2.",
        },
        {
          type: "keyPoint",
          label: "Grand Multipara",
          value: "Parity **≥5** (or >4).",
        },
      ],
    },
    {
      id: "period-of-gestation",
      title: "Period of Gestation",
      content: [
        {
          type: "keyPoint",
          label: "Total Duration",
          value: "**9 months + 7 days = 280 days = 40 weeks**.",
        },
        {
          type: "table",
          headers: ["Trimester", "Duration"],
          rows: [
            ["1st Trimester (T1)", "Up to 14 weeks"],
            ["2nd Trimester (T2)", "14–28 weeks"],
            ["3rd Trimester (T3)", ">28 weeks"],
          ],
        },
      ],
    },
    {
      id: "edd-naegeles-rule",
      title: "EDD — Naegele's Rule",
      content: [
        {
          type: "keyPoint",
          label: "Naegele's Rule",
          value: "**EDD = LMP + 9 months + 7 days**. Calculated from the **1st day** of the Last Menstrual Period.",
        },
        {
          type: "clinicalNote",
          text: "Example: LMP = 4th January → EDD = **11th October** (Jan + 9 months = Oct; 4 + 7 = 11).",
        },
      ],
    },
    {
      id: "early-pregnancy-signs",
      title: "Early Pregnancy Signs (Probable Signs)",
      content: [
        {
          type: "table",
          headers: ["Sign", "Finding"],
          rows: [
            ["Goodell's sign", "Cervical softening"],
            ["Hegar's sign", "Isthmus softening"],
            ["Osiander's sign", "Pulsation felt through vaginal fornix"],
            ["Chadwick's sign (= Jacquemier's)", "Bluish discoloration of ectocervix / vagina"],
            ["Palmer's sign", "Regular rhythmic contractions"],
            ["Piskaseck's sign", "Asymmetrical growth of uterus (lateral implantation)"],
            ["Hartman's sign", "Implantation bleeding"],
          ],
        },
      ],
    },
    {
      id: "second-trimester-signs",
      title: "2nd Trimester Signs",
      content: [
        {
          type: "keyPoint",
          label: "Quickening",
          value: "Fetal movements felt for the **first time**. **Multigravida: 16–18 wk**; **Primigravida: 18–20 wk**.",
        },
        {
          type: "bulletList",
          items: [
            "**Ballottement:** One hand pushes fetal head, other hand feels the impact of displaced head",
            "**Auscultation of Fetal Heart:** 18–20 wk (by Doppler @ 10–12 wk)",
            "**Uterine souffle:** Blowing sound due to blood flow through uterine artery; corresponds to **maternal pulse**",
          ],
        },
      ],
    },
    {
      id: "third-trimester-signs",
      title: "3rd Trimester Signs",
      content: [
        {
          type: "keyPoint",
          label: "Lightening / Welcome Sign",
          value: "Sense of **relief from pressure symptoms** (breathing, heartburn) due to **engagement of the presenting part**.",
        },
      ],
    },
    {
      id: "confirmatory-signs",
      title: "Absolute / Confirmatory Signs of Pregnancy",
      content: [
        {
          type: "bulletList",
          items: [
            "**Auscultation of FHS** — Best clinical sign",
            "Palpation of fetal parts",
            "Fetal movements felt by examiner",
            "USG evidence of pregnancy",
            "X-ray: Fetal skeleton visible (>16 weeks)",
          ],
        },
        {
          type: "clinicalNote",
          text: "**Pseudocyesis** (Phantom pregnancy): Patient presents with symptoms mimicking pregnancy (amenorrhoea, abdominal enlargement, perceived fetal movements) but pregnancy test is **negative**.",
        },
      ],
    },
    {
      id: "antenatal-visits",
      title: "Antenatal Visits",
      content: [
        {
          type: "table",
          headers: ["Period", "Frequency"],
          rows: [
            ["Till 28 weeks", "Monthly"],
            ["28–36 weeks", "Fortnightly (every 2 weeks)"],
            [">36 weeks", "Weekly"],
          ],
        },
        {
          type: "keyPoint",
          label: "Ideal Visits",
          value: "**12–15 visits** over the course of pregnancy.",
        },
        {
          type: "keyPoint",
          label: "WHO Minimum",
          value: "**8 visits** (T1: 1 visit, T2: 2 visits, T3: 5 visits).",
        },
        {
          type: "keyPoint",
          label: "GOI / WHO FOCUS Model",
          value: "**4 visits**.",
        },
      ],
    },
    {
      id: "fundal-height",
      title: "Fundal Height",
      content: [
        {
          type: "table",
          headers: ["Weeks", "Landmark"],
          rows: [
            ["12 wk", "Just palpable (above symphysis pubis)"],
            ["20 wk", "Below umbilicus"],
            ["24 wk", "Above umbilicus"],
            ["36 wk", "Xiphisternum"],
            ["38 wk", "= 34 wk level (flank is full — lightening)"],
            ["40 wk", "= 32 wk level + flank is full"],
          ],
        },
        {
          type: "clinicalNote",
          text: "After 36 weeks, fundal height **decreases** because of **lightening** (engagement). Flank fullness helps distinguish 38–40 wk from true 32–34 wk.",
        },
      ],
    },
    {
      id: "vaccination",
      title: "Vaccination in Pregnancy",
      content: [
        {
          type: "keyPoint",
          label: "Td (Tetanus-Diphtheria)",
          value: "**2 doses, 4 weeks apart, IM**. If immunised within past 3 years → **Td booster** only.",
        },
        {
          type: "table",
          headers: ["Category", "Vaccines"],
          rows: [
            ["Safe", "Td, COVID, Influenza (inactivated)"],
            ["NOT safe", "HPV"],
            ["CONTRAINDICATED (Live)", "MMR, Chicken Pox / Varicella, OPV"],
          ],
        },
        {
          type: "clinicalNote",
          text: "**Exception:** Yellow Fever vaccine (live) can be given if the pregnant woman is **travelling to an endemic area**.",
        },
      ],
    },
    {
      id: "nutritional-requirements",
      title: "Nutritional Requirements in Pregnancy",
      content: [
        {
          type: "table",
          headers: ["Trimester", "Extra kcal / day"],
          rows: [
            ["T1", "+0 (no extra)"],
            ["T2", "+350 kcal"],
            ["T3", "+450 kcal"],
          ],
        },
        {
          type: "keyPoint",
          label: "Average",
          value: "**300–350 kcal/day** additional over the entire pregnancy.",
        },
      ],
    },
    {
      id: "folic-acid",
      title: "Folic Acid Supplementation",
      content: [
        {
          type: "bulletList",
          items: [
            "**Role:** Prevent Neural Tube Defects (NTD)",
            "**Start:** 1 month prior to conception",
            "**Prophylactic dose:** 400 mcg (given till end of 1st trimester / 3rd month)",
            "**Therapeutic dose:** 1 mg (= 1000 mcg)",
          ],
        },
        {
          type: "table",
          headers: ["Indication for Therapeutic Dose", "Dose"],
          rows: [
            ["Sickle cell anaemia", "5 mg throughout pregnancy"],
            ["Diabetes / GDM", "400 mcg"],
            ["Previous history / family history of NTD", "Therapeutic dose"],
            ["On antiepileptics (Valproate)", "5 mg"],
          ],
        },
      ],
    },
    {
      id: "weight-gain",
      title: "Weight Gain in Pregnancy",
      content: [
        {
          type: "table",
          headers: ["BMI Category", "Recommended Weight Gain"],
          rows: [
            ["Normal", "+11 kg"],
            ["Underweight", "12–18 kg"],
            ["Obese", "5–7 kg"],
          ],
        },
      ],
    },
    {
      id: "common-ailments",
      title: "Common Ailments in Pregnancy",
      content: [
        {
          type: "table",
          headers: ["Ailment", "Notes / Management"],
          rows: [
            ["Vomiting", "Common in early pregnancy (see Hyperemesis)"],
            ["Breast tenderness", "Hormonal — reassurance"],
            ["Urinary frequency", "Enlarged uterus irritating bladder"],
            ["Leg cramps", "Hyperextend leg, dorsiflex foot"],
            ["Pedal oedema", "Foot end elevation"],
            ["Constipation", "↑ water intake, ↑ fibre (due to Progesterone effect)"],
          ],
        },
      ],
    },
    {
      id: "hyperemesis-gravidarum",
      title: "Hyperemesis Gravidarum",
      content: [
        {
          type: "keyPoint",
          label: "Cause & Timing",
          value: "Due to **hCG**. Starts by **5–6 weeks**, maximum at **10 weeks**.",
        },
        {
          type: "table",
          headers: ["Line of Management", "Drugs / Measures"],
          rows: [
            ["Diet", "Small frequent meals"],
            ["1st line", "Pyridoxine; Pyridoxine + Doxylamine"],
            ["2nd line", "Promethazine, Prochlorperazine, Chlorpromazine"],
            ["3rd line", "Metoclopramide, Ondansetron, Domperidone"],
            ["Severe", "IV hydration + Thiamine (prevent Wernicke's encephalopathy)"],
            ["Parenteral options", "Metoclopramide, Ondansetron, Promethazine"],
          ],
        },
      ],
    },
  ],

  flashcards: [
    {
      id: "fc01",
      front: "What does Gravida include?",
      back: "All pregnancies regardless of outcome — past + present.",
      tags: ["obstetric-score"],
    },
    {
      id: "fc02",
      front: "How is Parity counted in multiple gestations (twins/triplets)?",
      back: "Twins/triplets from a single pregnancy count as 1 parity. Parity = past pregnancies that crossed viability (28 weeks).",
      tags: ["obstetric-score", "high-yield"],
    },
    {
      id: "fc03",
      front: "Definition of Grand Multipara?",
      back: "Parity ≥5 (or >4).",
      tags: ["obstetric-score"],
    },
    {
      id: "fc04",
      front: "Total duration of pregnancy?",
      back: "9 months + 7 days = 280 days = 40 weeks.",
      tags: ["gestation", "high-yield"],
    },
    {
      id: "fc05",
      front: "Naegele's rule for calculating EDD?",
      back: "EDD = LMP + 9 months + 7 days. Calculated from the 1st day of the Last Menstrual Period.",
      tags: ["edd", "high-yield"],
    },
    {
      id: "fc06",
      front: "Goodell's sign?",
      back: "Cervical softening — a probable sign of early pregnancy.",
      tags: ["pregnancy-signs"],
    },
    {
      id: "fc07",
      front: "Hegar's sign?",
      back: "Isthmus softening — a probable sign of early pregnancy.",
      tags: ["pregnancy-signs"],
    },
    {
      id: "fc08",
      front: "Chadwick's sign (= Jacquemier's sign)?",
      back: "Bluish discoloration of the ectocervix / vagina — a probable sign of early pregnancy.",
      tags: ["pregnancy-signs", "high-yield"],
    },
    {
      id: "fc09",
      front: "When is quickening felt in primigravida vs multigravida?",
      back: "Primigravida: 18–20 weeks. Multigravida: 16–18 weeks.",
      tags: ["quickening", "high-yield"],
    },
    {
      id: "fc10",
      front: "What is lightening (Welcome sign)?",
      back: "Sense of relief from pressure symptoms (breathing difficulty, heartburn) due to engagement of the presenting part in the 3rd trimester.",
      tags: ["third-trimester", "high-yield"],
    },
    {
      id: "fc11",
      front: "Best clinical sign confirming pregnancy?",
      back: "Auscultation of fetal heart sounds (FHS).",
      tags: ["confirmatory-signs", "high-yield"],
    },
    {
      id: "fc12",
      front: "What is Pseudocyesis?",
      back: "Phantom pregnancy — patient has symptoms mimicking pregnancy (amenorrhoea, abdominal enlargement) but pregnancy test is negative.",
      tags: ["confirmatory-signs"],
    },
    {
      id: "fc13",
      front: "Antenatal visit schedule?",
      back: "Monthly till 28 wk → Fortnightly 28–36 wk → Weekly >36 wk. Ideal: 12–15 visits. WHO minimum: 8 visits.",
      tags: ["anc-visits", "high-yield"],
    },
    {
      id: "fc14",
      front: "Fundal height at 36 weeks and why does it drop at 38 weeks?",
      back: "36 wk = xiphisternum. At 38 wk it drops to 34 wk level because of lightening (engagement of presenting part). Flank fullness distinguishes late pregnancy from earlier weeks.",
      tags: ["fundal-height", "high-yield"],
    },
    {
      id: "fc15",
      front: "Which live vaccines are contraindicated in pregnancy?",
      back: "MMR, Varicella (Chicken Pox), OPV. Exception: Yellow Fever — allowed if travelling to an endemic area.",
      tags: ["vaccination", "high-yield"],
    },
    {
      id: "fc16",
      front: "Prophylactic vs therapeutic dose of folic acid?",
      back: "Prophylactic: 400 mcg (started 1 month before conception, till 3rd month). Therapeutic: 1 mg (1000 mcg). Sickle cell / epileptics on valproate: 5 mg.",
      tags: ["folic-acid", "high-yield"],
    },
    {
      id: "fc17",
      front: "Recommended weight gain in normal pregnancy?",
      back: "+11 kg. Underweight: 12–18 kg. Obese: 5–7 kg.",
      tags: ["weight-gain"],
    },
    {
      id: "fc18",
      front: "1st line treatment for hyperemesis gravidarum?",
      back: "Pyridoxine (Vitamin B6) ± Doxylamine. Due to hCG; starts 5–6 wk, peaks at 10 wk. Severe cases: IV hydration + Thiamine (to prevent Wernicke's encephalopathy).",
      tags: ["hyperemesis", "high-yield"],
    },
  ],

  mcqs: [
    // --- RECALL (5) ---
    {
      id: "mcq01",
      question:
        "A 25-week pregnant female came for a regular visit. She delivered twins 4 years ago. Calculate her gravida and para.",
      options: ["G2P2L2", "G2P1L2", "G3P2L2", "G3P1L2"],
      correctIndex: 1,
      explanation:
        "Gravida = 2 (twin pregnancy + current pregnancy). Parity = 1 (twins delivered in one pregnancy = 1 parity). Living = 2 (both twins alive). Answer: G2P1L2.",
      difficulty: "recall",
    },
    {
      id: "mcq02",
      question:
        "A woman's LMP is on 4th January 2018. Calculate her EDD according to Naegele's rule.",
      options: [
        "September 11th",
        "October 11th",
        "November 11th",
        "October 12th",
      ],
      correctIndex: 1,
      explanation:
        "Naegele's rule: LMP + 9 months + 7 days. January + 9 months = October; 4 + 7 = 11. EDD = October 11th.",
      difficulty: "recall",
    },
    {
      id: "mcq03",
      question:
        "In a previously pregnant female, you decided to increase the folic acid dose to the therapeutic dose. In which of the following conditions is this indicated?",
      options: [
        "Previous premature birth",
        "Preeclampsia",
        "Previous low birth weight child",
        "Sickle cell anaemia",
      ],
      correctIndex: 3,
      explanation:
        "Therapeutic / high-dose folic acid is indicated in sickle cell anaemia (5 mg throughout pregnancy), previous/family history of NTD, diabetes/GDM, and patients on antiepileptics (valproate).",
      difficulty: "recall",
    },
    {
      id: "mcq04",
      question: "Constipation in pregnancy is due to:",
      options: [
        "Uterus enlargement",
        "Estrogen effect",
        "Progesterone effect",
        "Excessive micturition",
      ],
      correctIndex: 2,
      explanation:
        "Progesterone causes smooth muscle relaxation including the GI tract, leading to decreased gut motility and constipation. Management: increase water intake and fibre.",
      difficulty: "recall",
    },
    {
      id: "mcq05",
      question:
        "What is the recommended first approach to manage nausea and vomiting in early pregnancy?",
      options: [
        "Small and frequent meals",
        "Increase fluid intake",
        "Domperidone",
        "Metoclopramide",
      ],
      correctIndex: 0,
      explanation:
        "Dietary modification (small, frequent meals) is the first step. Pharmacologically, pyridoxine ± doxylamine is the 1st line drug. Metoclopramide and domperidone are 3rd line.",
      difficulty: "recall",
    },

    // --- CLINICAL (5) ---
    {
      id: "mcq06",
      question:
        "A woman in her 2nd trimester has a 2-year-old child who received all scheduled vaccinations. What is the recommended tetanus immunisation for this pregnancy?",
      options: [
        "Td full course — 2 doses, 4 weeks apart",
        "Td booster IM",
        "No tetanus vaccination needed during pregnancy",
        "TT single dose IM",
      ],
      correctIndex: 1,
      explanation:
        "Since she was immunised within the past 3 years (child is 2 years old, received vaccinations on schedule), she only needs a Td booster, not the full 2-dose course.",
      difficulty: "clinical",
    },
    {
      id: "mcq07",
      question:
        "A primigravida at 12 weeks gestation asks about dietary modifications. What is the correct advice regarding additional caloric intake at her current gestational age?",
      options: [
        "No additional calories needed in the 1st trimester",
        "Additional 350 kcal/day starting immediately",
        "Additional 450 kcal/day starting immediately",
        "Additional 300 kcal/day throughout pregnancy",
      ],
      correctIndex: 0,
      explanation:
        "T1 requires +0 extra kcal. Additional calories begin from T2 (+350 kcal/day) and T3 (+450 kcal/day). Average over pregnancy ≈ 300–350 kcal/day.",
      difficulty: "clinical",
    },
    {
      id: "mcq08",
      question:
        "A 30-year-old G3P2L2 at 38 weeks reports sudden relief from breathing difficulty and heartburn she had been experiencing. On examination, the fetal head is engaged. What is this phenomenon called?",
      options: [
        "Quickening",
        "Ballottement",
        "Lightening",
        "Braxton-Hicks contractions",
      ],
      correctIndex: 2,
      explanation:
        "Lightening (Welcome sign) is the relief from pressure symptoms due to engagement of the presenting part. Fundal height drops from xiphisternum (36 wk) to 34 wk level at 38 weeks.",
      difficulty: "clinical",
    },
    {
      id: "mcq09",
      question:
        "A pregnant woman at 8 weeks presents with severe intractable vomiting, dehydration, and ketonuria. After starting IV hydration, which vitamin must be supplemented to prevent a serious neurological complication?",
      options: [
        "Vitamin C",
        "Thiamine (Vitamin B1)",
        "Folic acid",
        "Vitamin B12",
      ],
      correctIndex: 1,
      explanation:
        "In severe hyperemesis gravidarum, thiamine (B1) supplementation with IV hydration is essential to prevent Wernicke's encephalopathy. This is a medical emergency if missed.",
      difficulty: "clinical",
    },
    {
      id: "mcq10",
      question:
        "A woman who delivered twins in her first pregnancy, had one subsequent abortion, and is now pregnant again has one living child from the twins. What is her obstetric score?",
      options: ["G3P1L1A1", "G3P2L1A1", "G3P1L2A1", "G2P1L1A1"],
      correctIndex: 0,
      explanation:
        "G3 = twin pregnancy + abortion + current pregnancy = 3 total. P1 = only the twin delivery crossed viability (twins = 1 parity). L1 = one living child. A1 = one abortion. Answer: G3P1L1A1.",
      difficulty: "clinical",
    },

    // --- TRICKY (5) ---
    {
      id: "mcq11",
      question:
        "All of the following are probable (presumptive) signs of pregnancy EXCEPT:",
      options: [
        "Goodell's sign — cervical softening",
        "Hegar's sign — isthmus softening",
        "Auscultation of fetal heart sounds",
        "Chadwick's sign — bluish discoloration of cervix",
      ],
      correctIndex: 2,
      explanation:
        "Auscultation of FHS is a CONFIRMATORY (absolute) sign of pregnancy, not a probable sign. Goodell's, Hegar's, and Chadwick's are all probable/presumptive signs of early pregnancy.",
      difficulty: "tricky",
    },
    {
      id: "mcq12",
      question:
        "Assertion: Fundal height at 38 weeks corresponds to the level at 34 weeks.\nReason: Lightening occurs due to engagement of the presenting part.\n\nChoose the correct option:",
      options: [
        "Both assertion and reason are true, and reason explains the assertion",
        "Both are true, but reason does not explain the assertion",
        "Assertion is true, reason is false",
        "Both are false",
      ],
      correctIndex: 0,
      explanation:
        "Both are true and causally related. At 38 weeks, fundal height drops to the 34 wk level because lightening (engagement of the presenting part) causes the uterus to descend. Flank fullness differentiates it from true 34 wk.",
      difficulty: "tricky",
    },
    {
      id: "mcq13",
      question:
        "Which of the following vaccines is NOT contraindicated in pregnancy?",
      options: ["MMR", "Varicella", "Yellow Fever", "OPV"],
      correctIndex: 2,
      explanation:
        "Yellow Fever vaccine (live) is an EXCEPTION — it can be given to pregnant women travelling to endemic areas. MMR, Varicella, and OPV are all live vaccines that are strictly contraindicated in pregnancy.",
      difficulty: "tricky",
    },
    {
      id: "mcq14",
      question:
        "A woman with epilepsy on sodium valproate is planning pregnancy. What is the correct folic acid supplementation?",
      options: [
        "400 mcg starting after conception",
        "400 mcg starting 1 month before conception",
        "5 mg starting 1 month before conception",
        "1 mg starting after confirmation of pregnancy",
      ],
      correctIndex: 2,
      explanation:
        "Women on antiepileptics (valproate) need high-dose folic acid (5 mg) starting before conception. Valproate is a potent folate antagonist that greatly increases NTD risk; the standard prophylactic 400 mcg is insufficient.",
      difficulty: "tricky",
    },
    {
      id: "mcq15",
      question: "Pseudocyesis is characterised by all of the following EXCEPT:",
      options: [
        "Amenorrhoea",
        "Abdominal enlargement",
        "Positive urine pregnancy test",
        "Perception of fetal movements",
      ],
      correctIndex: 2,
      explanation:
        "Pseudocyesis (phantom pregnancy) presents with subjective symptoms — amenorrhoea, perceived fetal movements, abdominal enlargement — but all pregnancy tests are NEGATIVE because there is no actual pregnancy or hCG production.",
      difficulty: "tricky",
    },
  ],

  fillBlanks: [
    {
      id: "fb01",
      sentence:
        "Twins / triplets delivered in a single pregnancy count as _____ parity.",
      blanks: ["1"],
    },
    {
      id: "fb02",
      sentence:
        "Total duration of pregnancy is _____ days = _____ weeks.",
      blanks: ["280", "40"],
    },
    {
      id: "fb03",
      sentence:
        "Quickening is felt at _____ weeks in primigravida and _____ weeks in multigravida.",
      blanks: ["18–20", "16–18"],
    },
    {
      id: "fb04",
      sentence:
        "The best clinical sign confirming pregnancy is _____.",
      blanks: ["auscultation of fetal heart sounds"],
    },
    {
      id: "fb05",
      sentence:
        "WHO minimum recommended antenatal visits is _____. The GOI/WHO FOCUS model recommends _____ visits.",
      blanks: ["8", "4"],
    },
    {
      id: "fb06",
      sentence:
        "Prophylactic folic acid dose is _____ mcg, started _____ month(s) prior to conception.",
      blanks: ["400", "1"],
    },
    {
      id: "fb07",
      sentence:
        "Hyperemesis gravidarum is caused by _____, starts at _____ weeks, and peaks at _____ weeks.",
      blanks: ["hCG", "5–6", "10"],
    },
    {
      id: "fb08",
      sentence:
        "The 1st line drug for hyperemesis gravidarum is _____. In severe cases, _____ is given IV to prevent Wernicke's encephalopathy.",
      blanks: ["Pyridoxine (± Doxylamine)", "Thiamine"],
    },
  ],

  matchPairs: [
    { id: "mp01", left: "Goodell's sign", right: "Cervical softening" },
    { id: "mp02", left: "Hegar's sign", right: "Isthmus softening" },
    {
      id: "mp03",
      left: "Chadwick's sign",
      right: "Bluish discoloration of cervix / vagina",
    },
    { id: "mp04", left: "Quickening (primigravida)", right: "18–20 weeks" },
    { id: "mp05", left: "Quickening (multigravida)", right: "16–18 weeks" },
    { id: "mp06", left: "Prophylactic folic acid", right: "400 mcg" },
    { id: "mp07", left: "Therapeutic folic acid", right: "1 mg (1000 mcg)" },
    { id: "mp08", left: "EDD formula", right: "LMP + 9 months + 7 days" },
    {
      id: "mp09",
      left: "Fundal height at umbilicus",
      right: "20–24 weeks",
    },
    {
      id: "mp10",
      left: "Lightening",
      right: "Engagement of presenting part",
    },
  ],

  quickRevision: [
    "**Obstetric Score (GPLA):** Gravida = all pregnancies; Parity = past pregnancies crossing 28 wk (twins = 1 parity); Grand multipara = parity ≥5.",
    "**Pregnancy duration:** 280 days = 40 wk. **EDD** = LMP + 9 months + 7 days (Naegele's rule).",
    "**Probable signs:** Goodell's (cervix soft), Hegar's (isthmus soft), Chadwick's (blue cervix), Piskaseck's (asymmetric uterus), Hartman's (implantation bleed).",
    "**Quickening:** primi 18–20 wk, multi 16–18 wk. FHS by Doppler at 10–12 wk. Best confirmatory sign = **FHS auscultation**.",
    "**ANC visits:** monthly till 28 wk → fortnightly 28–36 wk → weekly >36 wk. Ideal 12–15; WHO min **8**; FOCUS model **4**.",
    "**Vaccination:** Safe = Td, COVID, Influenza. Contraindicated (live) = MMR, Varicella, OPV. **Exception:** Yellow Fever for endemic travel.",
    "**Folic acid:** Prophylactic 400 mcg (1 month pre-conception till 3rd month). Therapeutic 1 mg. Sickle cell / valproate = **5 mg**.",
    "**Hyperemesis gravidarum:** d/t hCG, starts 5–6 wk, max 10 wk. **1st line:** Pyridoxine ± Doxylamine. **Severe:** IV hydration + **Thiamine** (prevent Wernicke's).",
  ],
};

export default ch05;
