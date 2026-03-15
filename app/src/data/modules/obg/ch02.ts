import type { Chapter } from "../../types";

const ch02: Chapter = {
  id: "ch02",
  number: 2,
  title: "Physiological Changes in Pregnancy",
  subject: "Obstetrics",

  sections: [
    {
      id: "uterine-changes",
      title: "Uterine Changes",
      content: [
        {
          type: "text",
          value:
            "Uterine size increases due to **Estrogen** (Hypertrophy + Hyperplasia of myometrial cells).",
        },
        {
          type: "table",
          headers: ["Parameter", "Value"],
          rows: [
            ["Pre-pregnancy uterine weight", "50 gm"],
            ["Uterine weight at term", "1100 gm"],
            ["Uterine blood flow at term", "500–750 ml/min"],
          ],
        },
        {
          type: "keyPoint",
          label: "Myometrial Sensitivity",
          value:
            "Sensitivity of uterine musculature (myocytes) for contraction is **increased by Estrogen** and **decreased by Progesterone**.",
        },
        {
          type: "clinicalNote",
          text: "**Supine Hypotension Syndrome (Vena Caval Syndrome):** Supine position → compression of IVC by gravid uterus → ↓ venous return → **Hypotension, Tachycardia, Syncope**. Management: **Left lateral position**, avoid supine position.",
        },
      ],
    },
    {
      id: "vaginal-changes",
      title: "Vaginal Changes",
      content: [
        {
          type: "table",
          headers: ["Parameter", "Change"],
          rows: [
            ["Lactobacilli", "↑↑ (increased)"],
            ["Glycogen metabolism", "↑↑↑ (markedly increased)"],
            ["Vaginal pH", "ACIDIC → 3.5–4.5"],
            ["Predominant cell type", "INTERMEDIATE cells (d/t Progesterone)"],
          ],
        },
      ],
    },
    {
      id: "breast-changes",
      title: "Breast Changes",
      content: [
        {
          type: "bulletList",
          items: [
            "Fat deposition ↑↑ → driven by **Insulin**",
            "Acini / Alveoli development → d/t **Progesterone + Estrogen**",
            "Ductal proliferation → d/t **Estrogen**",
            "**Montgomery tubercles** → modified sebaceous glands on the areola",
          ],
        },
      ],
    },
    {
      id: "skin-changes",
      title: "Skin Changes",
      content: [
        {
          type: "bulletList",
          items: [
            "**Linea Nigra** — dark vertical line on the abdomen",
            "**Striae Gravidarum** (d/t Estrogen) → later become **Striae Albicans** (↑ collagen deposition)",
            "**Chloasma / Melasma** of pregnancy — hyperpigmentation of face",
            "**Palmar Erythema**",
            "**Spider Naevi / Telangiectasia**",
            "**Thermogenic action** d/t Progesterone",
          ],
        },
      ],
    },
    {
      id: "hematological-changes",
      title: "Hematological Changes",
      content: [
        {
          type: "table",
          headers: ["Parameter", "Change", "Notes"],
          rows: [
            ["Blood volume", "↑↑", "d/t Estrogen, Renin-Angiotensin-Aldosterone"],
            ["Plasma volume", "↑↑↑", "d/t water retention (Progesterone)"],
            ["RBC / Hb mass", "↑", ""],
            [
              "Haemoglobin concentration",
              "↓",
              "→ Physiological Anemia (MCC of anemia in pregnancy)",
            ],
            [
              "Platelet concentration",
              "↓",
              "→ Gestational Thrombocytopenia (MCC of thrombocytopenia in pregnancy)",
            ],
            ["Iron requirement", "↑", ""],
            ["S. Iron, Ferritin", "↓", ""],
            ["TIBC", "↑", "(1–1.5 L/dl)"],
            ["Transferrin", "↑", ""],
            ["Blood O₂ carrying capacity", "↑", ""],
            ["Clotting factors", "↑", "EXCEPT factors 11, 13 (↓)"],
            ["ESR / CRP", "↑", ""],
            ["Fibrinogen", "↑", ""],
            ["Protein (A:G ratio)", "→ 1:1", ""],
            ["Albumin", "↓", ""],
            [
              "Globulin (SHBG, TBG)",
              "↑",
              "SHBG = Sex Hormone Binding Globulin, TBG = Thyroid Binding Globulin",
            ],
            ["Alkaline phosphatase", "↑", ""],
            ["Insulin", "↑", ""],
          ],
        },
        {
          type: "clinicalNote",
          text: "Plasma volume rises disproportionately more than RBC mass → **dilutional / physiological anemia**. This is the most common cause of anemia in pregnancy.",
        },
      ],
    },
    {
      id: "cardiac-changes",
      title: "Cardiac Changes",
      content: [
        {
          type: "bulletList",
          items: [
            "**Cardiac output, Stroke volume, Heart rate** — ALL ↑",
            "CO starts increasing by **5th week**; maximum in pregnancy at **28–32 weeks**; absolute maximum at **immediate postpartum**",
            "Heart rate increases by **10–15 bpm**",
            "**BP:** ↓ SBP and DBP → d/t ↓ peripheral vascular resistance → d/t Progesterone (vasodilation)",
            "Apex beat shifted **upwards & laterally** (4th ICS)",
            "ECG: **Left axis deviation**",
          ],
        },
        {
          type: "table",
          headers: ["Heart Sound / Finding", "Status in Pregnancy"],
          rows: [
            ["S1", "LOUD, SPLIT"],
            ["S2", "LOUD"],
            ["S3", "PHYSIOLOGICALLY PRESENT (normal)"],
            ["S4", "PATHOLOGICAL (abnormal)"],
            ["Systolic murmur < grade 3", "Ejection systolic murmur (physiological)"],
          ],
        },
        {
          type: "keyPoint",
          label: "Abnormal Cardiac Findings in Pregnancy",
          value:
            "**S4**, **Fixed split S2**, **Diastolic murmur**, **Systolic murmur ≥ grade 3**, **Pericardial knock** — all are PATHOLOGICAL and need further evaluation.",
        },
      ],
    },
    {
      id: "thyroid-metabolism",
      title: "Thyroid Metabolism",
      content: [
        {
          type: "table",
          headers: ["Parameter", "Change"],
          rows: [
            ["Thyroid requirement", "↑"],
            ["Iodine requirement", "↑"],
            ["Thyroid size", "↑"],
            ["Total T4 level", "↑ (bound form ↑)"],
            ["TSH", "↓ (hCG β subunit mimics TSH → −ve feedback)"],
            ["TBG (Thyroid Binding Globulin)", "↑"],
            ["Free T4, Free T3", "CONSTANT (no change)"],
            ["BMR", "↑"],
          ],
        },
        {
          type: "keyPoint",
          label: "Thyroid Status",
          value:
            "Pregnant women remain **EUTHYROID** — free T4 and T3 are unchanged despite total T4 being elevated.",
        },
        {
          type: "clinicalNote",
          text: "**Hyperthyroid drugs in pregnancy:** **PTU (Propylthiouracil)** → safer in **1st trimester**. **Methimazole / Carbimazole** → used in **2nd & 3rd trimester**. **Radioactive iodine** → **CONTRAINDICATED** in pregnancy. Methimazole is associated with **Aplasia Cutis** (congenital absence of skin); Carbimazole is a prodrug of Methimazole.",
        },
      ],
    },
    {
      id: "respiratory-changes",
      title: "Respiratory Changes",
      content: [
        {
          type: "bulletList",
          items: [
            "Diaphragm elevated by **4 cm**",
            "Subcostal angle: **103.5°**",
            "Chest circumference increase: **5–7 cm (≈6 cm)**",
            "Transverse diameter of chest increase: **2 cm**",
          ],
        },
        {
          type: "table",
          headers: ["Increased", "Decreased", "Unaffected"],
          rows: [
            [
              "Inspiratory Capacity",
              "Functional Residual Capacity (FRC)",
              "Inspiratory Reserve Volume",
            ],
            ["Minute Ventilation", "Expiratory Reserve Volume", "Respiratory Rate"],
            ["Tidal Volume", "Residual Volume", "Vital Capacity"],
            ["", "Total Lung Capacity", ""],
          ],
        },
      ],
    },
    {
      id: "renal-changes",
      title: "Renal Changes",
      content: [
        {
          type: "table",
          headers: ["Parameter", "Change"],
          rows: [
            ["Renal blood flow", "↑"],
            ["GFR", "↑"],
            ["Renal clearance", "↑"],
            ["Kidney size", "↑"],
            ["Ureteral dilation", "↑ (d/t Progesterone)"],
            ["S. Creatinine / Urea", "↓"],
            ["S. Na / K / Ca", "↓"],
          ],
        },
      ],
    },
  ],

  flashcards: [
    {
      id: "fc01",
      front: "What is the weight of the uterus pre-pregnancy and at term?",
      back: "Pre-pregnancy: 50 gm. At term: 1100 gm.",
      tags: ["uterine", "numbers"],
    },
    {
      id: "fc02",
      front: "What is the uterine blood flow at term?",
      back: "500–750 ml/min.",
      tags: ["uterine", "numbers"],
    },
    {
      id: "fc03",
      front: "What is Supine Hypotension Syndrome?",
      back: "Supine position → IVC compression by gravid uterus → ↓ venous return → Hypotension, Tachycardia, Syncope. Rx: Left lateral position.",
      tags: ["uterine", "high-yield"],
    },
    {
      id: "fc04",
      front: "What is the vaginal pH in pregnancy and why?",
      back: "Acidic (3.5–4.5) due to increased Lactobacilli and glycogen metabolism.",
      tags: ["vaginal", "high-yield"],
    },
    {
      id: "fc05",
      front: "What causes physiological anemia of pregnancy?",
      back: "Plasma volume rises disproportionately more (↑↑↑) than RBC mass (↑), leading to dilutional anemia. MCC of anemia in pregnancy.",
      tags: ["hematology", "high-yield"],
    },
    {
      id: "fc06",
      front: "Which clotting factors DECREASE in pregnancy?",
      back: "Factors 11 and 13. All other clotting factors increase.",
      tags: ["hematology", "high-yield"],
    },
    {
      id: "fc07",
      front: "When does cardiac output reach its maximum?",
      back: "Starts increasing at 5th week; maximum in pregnancy at 28–32 weeks; absolute maximum at IMMEDIATE POSTPARTUM.",
      tags: ["cardiac", "high-yield"],
    },
    {
      id: "fc08",
      front: "Which heart sound is pathological in pregnancy?",
      back: "S4 is PATHOLOGICAL. S3 is physiologically present (normal). S1 is loud & split, S2 is loud.",
      tags: ["cardiac", "high-yield"],
    },
    {
      id: "fc09",
      front: "What are the abnormal cardiac findings in pregnancy?",
      back: "S4, Fixed split S2, Diastolic murmur, Systolic murmur ≥ grade 3, Pericardial knock.",
      tags: ["cardiac", "high-yield"],
    },
    {
      id: "fc10",
      front: "Thyroid status in pregnancy?",
      back: "EUTHYROID. Total T4 ↑ (bound form), TSH ↓ (hCG mimics TSH), but Free T4 and Free T3 remain CONSTANT.",
      tags: ["thyroid", "high-yield"],
    },
    {
      id: "fc11",
      front: "Which antithyroid drug is safest in the 1st trimester of pregnancy?",
      back: "PTU (Propylthiouracil). Methimazole/Carbimazole in 2nd/3rd trimester. Radioactive iodine is CONTRAINDICATED.",
      tags: ["thyroid", "high-yield"],
    },
    {
      id: "fc12",
      front: "What is Aplasia Cutis associated with?",
      back: "Methimazole (congenital absence of skin). Carbimazole is a prodrug of Methimazole.",
      tags: ["thyroid"],
    },
    {
      id: "fc13",
      front: "Which lung volumes DECREASE in pregnancy?",
      back: "FRC (Functional Residual Capacity), Expiratory Reserve Volume, Residual Volume, Total Lung Capacity.",
      tags: ["respiratory", "high-yield"],
    },
    {
      id: "fc14",
      front: "Which lung volumes are UNAFFECTED in pregnancy?",
      back: "Inspiratory Reserve Volume, Respiratory Rate, Vital Capacity.",
      tags: ["respiratory", "high-yield"],
    },
    {
      id: "fc15",
      front: "What happens to GFR and serum creatinine in pregnancy?",
      back: "GFR ↑, Serum creatinine ↓. Kidney size and renal blood flow also increase.",
      tags: ["renal", "high-yield"],
    },
  ],

  mcqs: [
    // --- RECALL (5) ---
    {
      id: "mcq01",
      question:
        "A pregnant woman complains of feeling faint while lying down, but feels better when she turns to her side. The most likely cause is:",
      options: [
        "IVC compression",
        "SVC compression",
        "Increased intracranial pressure",
        "Hypertension",
      ],
      correctIndex: 0,
      explanation:
        "Supine Hypotension Syndrome — the gravid uterus compresses the IVC in supine position, reducing venous return and causing hypotension, tachycardia, and syncope. Relieved by left lateral position.",
      difficulty: "recall",
    },
    {
      id: "mcq02",
      question:
        "Which antithyroid drug is safer during the first trimester of pregnancy?",
      options: [
        "Propylthiouracil (PTU)",
        "Methimazole",
        "Carbimazole",
        "Radioactive iodine",
      ],
      correctIndex: 0,
      explanation:
        "PTU is preferred in the 1st trimester. Methimazole/Carbimazole are used in 2nd and 3rd trimesters. Methimazole is associated with Aplasia Cutis. Radioactive iodine is absolutely contraindicated in pregnancy.",
      difficulty: "recall",
    },
    {
      id: "mcq03",
      question:
        "Which coagulation factor decreases in pregnancy?",
      options: ["Factor 2", "Factor 8", "Factor 11", "Factor 9"],
      correctIndex: 2,
      explanation:
        "Factors 11 and 13 are the only clotting factors that DECREASE in pregnancy. All other clotting factors increase, creating a hypercoagulable state.",
      difficulty: "recall",
    },
    {
      id: "mcq04",
      question:
        "Which of the following changes is NOT seen in the renal system during pregnancy?",
      options: [
        "Increase in kidney size",
        "Increase in serum creatinine",
        "Increased GFR",
        "Increased renal blood flow",
      ],
      correctIndex: 1,
      explanation:
        "Serum creatinine DECREASES in pregnancy because GFR and renal blood flow increase, leading to greater clearance. All other options are true physiological changes.",
      difficulty: "recall",
    },
    {
      id: "mcq05",
      question:
        "Which of the following is FALSE regarding physiological changes in pregnancy?",
      options: [
        "Increased cardiac output",
        "Increased total protein",
        "Increased residual volume",
        "Increased GFR",
      ],
      correctIndex: 2,
      explanation:
        "Residual volume DECREASES in pregnancy due to diaphragmatic elevation. Total protein changes (albumin ↓, globulin ↑, A:G ratio → 1:1) — this option refers to total protein increase which is also debatable, but residual volume is clearly false.",
      difficulty: "recall",
    },

    // --- CLINICAL (5) ---
    {
      id: "mcq06",
      question:
        "A 30-year-old woman at 36 weeks gestation develops sudden tachycardia and hypotension while lying supine for an ultrasound. She becomes pale and feels like fainting. The most appropriate immediate management is:",
      options: [
        "IV adrenaline",
        "Turn patient to left lateral position",
        "Emergency caesarean section",
        "Elevate legs and give IV fluids",
      ],
      correctIndex: 1,
      explanation:
        "This is Supine Hypotension Syndrome (Vena Caval Syndrome). The gravid uterus compresses the IVC in supine position. Immediate management is to turn the patient to the left lateral position to relieve IVC compression.",
      difficulty: "clinical",
    },
    {
      id: "mcq07",
      question:
        "A 26-year-old primigravida at 32 weeks has Hb 10 g/dL. Her peripheral smear shows normocytic normochromic picture. Serum iron and ferritin are normal. The most likely diagnosis is:",
      options: [
        "Iron deficiency anemia",
        "Physiological anemia of pregnancy",
        "Megaloblastic anemia",
        "Aplastic anemia",
      ],
      correctIndex: 1,
      explanation:
        "Hb 10 g/dL at 32 weeks with normal iron indices and normocytic normochromic picture is consistent with physiological (dilutional) anemia of pregnancy. Plasma volume rises disproportionately more than RBC mass, causing a relative drop in Hb concentration.",
      difficulty: "clinical",
    },
    {
      id: "mcq08",
      question:
        "A 28-year-old woman at 14 weeks of pregnancy has TSH 0.3 mIU/L (low) and elevated total T4 but normal free T4. She is clinically euthyroid. The most appropriate next step is:",
      options: [
        "Start Propylthiouracil",
        "Start Methimazole",
        "Reassurance — normal physiological change",
        "Radioactive iodine uptake test",
      ],
      correctIndex: 2,
      explanation:
        "In pregnancy, TSH decreases (hCG β subunit has structural similarity to TSH receptor), total T4 increases (↑ TBG), but free T4 remains constant. The patient is EUTHYROID — this is a normal physiological change requiring only reassurance.",
      difficulty: "clinical",
    },
    {
      id: "mcq09",
      question:
        "A 32-year-old woman at 34 weeks of pregnancy complains of breathlessness on exertion. Examination reveals a Grade 2 ejection systolic murmur, loud S1, and an audible S3. Chest X-ray shows elevated diaphragm. The most likely explanation is:",
      options: [
        "Peripartum cardiomyopathy",
        "Mitral stenosis",
        "Normal physiological changes of pregnancy",
        "Pulmonary embolism",
      ],
      correctIndex: 2,
      explanation:
        "In pregnancy: S1 is loud and split, S3 is physiologically present, and ejection systolic murmur < grade 3 is normal. Diaphragm elevation by 4 cm is expected. These are all normal physiological changes and do not indicate pathology.",
      difficulty: "clinical",
    },
    {
      id: "mcq10",
      question:
        "A pregnant woman at 28 weeks presents with dyspnoea. Pulmonary function tests show decreased FRC with unchanged vital capacity. The most likely explanation is:",
      options: [
        "Restrictive lung disease",
        "Obstructive lung disease",
        "Normal respiratory changes of pregnancy",
        "Pleural effusion",
      ],
      correctIndex: 2,
      explanation:
        "In pregnancy, FRC decreases (due to diaphragmatic elevation by 4 cm) while Vital Capacity remains unchanged. Tidal Volume and Minute Ventilation increase. Inspiratory Reserve Volume and Respiratory Rate are unaffected. This pattern is a normal physiological change.",
      difficulty: "clinical",
    },

    // --- TRICKY (5) ---
    {
      id: "mcq11",
      question:
        "All of the following cardiac findings are NORMAL in pregnancy EXCEPT:",
      options: [
        "S3 heart sound",
        "Grade 2 ejection systolic murmur",
        "S4 heart sound",
        "Loud S1",
      ],
      correctIndex: 2,
      explanation:
        "S4 is ALWAYS PATHOLOGICAL in pregnancy. Normal findings include: loud split S1, loud S2, physiological S3, and systolic murmur < grade 3. Other abnormal findings: fixed split S2, diastolic murmur, systolic murmur ≥ grade 3, and pericardial knock.",
      difficulty: "tricky",
    },
    {
      id: "mcq12",
      question:
        "Which of the following does NOT decrease in pregnancy?",
      options: [
        "Serum albumin",
        "Platelet concentration",
        "Transferrin",
        "Haemoglobin concentration",
      ],
      correctIndex: 2,
      explanation:
        "Transferrin INCREASES in pregnancy (along with TIBC). Serum albumin ↓, platelet concentration ↓ (gestational thrombocytopenia), and Hb concentration ↓ (physiological anemia) — all decrease.",
      difficulty: "tricky",
    },
    {
      id: "mcq13",
      question:
        "Assertion: Haemoglobin concentration decreases in pregnancy.\nReason: Plasma volume increases disproportionately more than RBC mass.\n\nChoose the correct option:",
      options: [
        "Both assertion and reason are true, and reason explains the assertion",
        "Both are true, but reason does not explain the assertion",
        "Assertion is true, reason is false",
        "Both are false",
      ],
      correctIndex: 0,
      explanation:
        "Both are true and causally related. Plasma volume increases much more (↑↑↑) than RBC mass (↑), causing dilutional / physiological anemia — this is why Hb concentration drops despite overall blood volume increasing.",
      difficulty: "tricky",
    },
    {
      id: "mcq14",
      question:
        "Which of the following lung volumes / parameters is UNAFFECTED in pregnancy?",
      options: [
        "Tidal Volume",
        "Functional Residual Capacity",
        "Vital Capacity",
        "Minute Ventilation",
      ],
      correctIndex: 2,
      explanation:
        "Vital Capacity is UNAFFECTED in pregnancy. Tidal Volume and Minute Ventilation increase. FRC decreases. Other unaffected parameters: Inspiratory Reserve Volume and Respiratory Rate.",
      difficulty: "tricky",
    },
    {
      id: "mcq15",
      question:
        "Which of the following skin changes in pregnancy is caused by Progesterone rather than Estrogen?",
      options: [
        "Striae Gravidarum",
        "Spider Naevi",
        "Thermogenic effect (raised body temperature)",
        "Chloasma",
      ],
      correctIndex: 2,
      explanation:
        "The thermogenic action (raised basal body temperature) in pregnancy is due to Progesterone, not Estrogen. Striae Gravidarum are caused by Estrogen. Spider naevi and palmar erythema are related to hyperestrogenism.",
      difficulty: "tricky",
    },
  ],

  fillBlanks: [
    {
      id: "fb01",
      sentence:
        "Pre-pregnancy uterine weight is _____ gm which increases to _____ gm at term.",
      blanks: ["50", "1100"],
    },
    {
      id: "fb02",
      sentence: "Uterine blood flow at term is _____ ml/min.",
      blanks: ["500–750"],
    },
    {
      id: "fb03",
      sentence:
        "Vaginal pH in pregnancy becomes acidic at _____.",
      blanks: ["3.5–4.5"],
    },
    {
      id: "fb04",
      sentence:
        "Cardiac output reaches maximum during pregnancy at _____ weeks, and absolute maximum at _____.",
      blanks: ["28–32", "immediate postpartum"],
    },
    {
      id: "fb05",
      sentence:
        "Thyroid status in pregnancy is _____; free T4 and T3 remain _____.",
      blanks: ["euthyroid", "constant"],
    },
    {
      id: "fb06",
      sentence:
        "Diaphragm is elevated by _____ cm in pregnancy and chest circumference increases by _____ cm.",
      blanks: ["4", "5–7"],
    },
    {
      id: "fb07",
      sentence:
        "Clotting factors that DECREASE in pregnancy are factor _____ and factor _____.",
      blanks: ["11", "13"],
    },
    {
      id: "fb08",
      sentence:
        "The antithyroid drug safer in the first trimester is _____; Methimazole is associated with _____.",
      blanks: ["PTU (Propylthiouracil)", "Aplasia Cutis"],
    },
  ],

  matchPairs: [
    { id: "mp01", left: "Uterine hypertrophy", right: "Estrogen" },
    { id: "mp02", left: "Myometrial relaxation", right: "Progesterone" },
    { id: "mp03", left: "Physiological anemia", right: "Dilutional (↑↑↑ plasma > ↑ RBC)" },
    { id: "mp04", left: "Gestational thrombocytopenia", right: "↓ Platelet concentration" },
    { id: "mp05", left: "Montgomery tubercles", right: "Modified sebaceous glands" },
    { id: "mp06", left: "Striae Gravidarum", right: "Estrogen" },
    { id: "mp07", left: "Thermogenic effect", right: "Progesterone" },
    { id: "mp08", left: "TSH ↓ in pregnancy", right: "hCG mimics TSH receptor" },
    { id: "mp09", left: "PTU", right: "Safer in 1st trimester" },
    { id: "mp10", left: "Aplasia Cutis", right: "Methimazole" },
  ],

  quickRevision: [
    "**Uterus:** Weight 50 gm → 1100 gm; blood flow 500–750 ml/min at term; growth driven by **Estrogen** (hypertrophy + hyperplasia).",
    "**Supine Hypotension:** IVC compression in supine → ↓ venous return → hypotension/syncope; Rx = **left lateral position**.",
    "**Hematology:** Plasma ↑↑↑ > RBC ↑ → **physiological anemia**; clotting factors ↑ EXCEPT **11 & 13**; platelet concentration ↓ → gestational thrombocytopenia.",
    "**Cardiac:** CO ↑ (max at **28–32 wk**, absolute max **immediate postpartum**); **S3 = normal, S4 = pathological**; systolic murmur < grade 3 is normal.",
    "**Thyroid:** Total T4 ↑, TSH ↓ (hCG mimics), Free T4/T3 **constant** → patient is **euthyroid**; PTU in 1st trimester, Methimazole later.",
    "**Respiratory:** Diaphragm elevated **4 cm**; ↑ Tidal Volume & Minute Ventilation; ↓ FRC, ERV, RV; **Vital Capacity unchanged**.",
    "**Renal:** GFR ↑, renal blood flow ↑, S. creatinine ↓, ureteral dilation ↑ (Progesterone).",
    "**Skin:** Linea Nigra, Chloasma, Striae Gravidarum (Estrogen), Palmar erythema, Spider naevi; **Thermogenic action = Progesterone**.",
  ],
};

export default ch02;
