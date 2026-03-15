import type { Chapter } from "../../types";

const ch10: Chapter = {
  id: "ch10",
  number: 10,
  title: "Ectopic Pregnancy",
  subject: "Obstetrics",

  sections: [
    {
      id: "site",
      title: "Site",
      content: [
        {
          type: "bulletList",
          items: [
            "MC site overall → **Fallopian Tube** > Ovary",
            "MC non-tubal site → **Ovary**",
            "Ectopic with MAX SURVIVAL overall → **Abdominal** (can go to T2/T3)",
          ],
        },
        {
          type: "table",
          headers: [
            "Tubal Site",
            "Frequency Rank",
            "Narrowness",
            "Rupture Timing",
          ],
          rows: [
            ["Ampulla", "1st (MC)", "—", "—"],
            ["Isthmus", "2nd", "2nd narrowest", "Earliest to rupture"],
            ["Infundibulum", "3rd", "—", "—"],
            [
              "Intramural / Interstitial",
              "4th (Least common)",
              "Narrowest",
              "Last to rupture (12–16 wk) — MOST DANGEROUS",
            ],
          ],
        },
        {
          type: "clinicalNote",
          text: "**Isthmus** is earliest to rupture despite not being the narrowest. **Intramural** ruptures last (12–16 weeks) but is the **most dangerous** due to rich blood supply. Intramural has **maximum tubal survival**.",
        },
      ],
    },
    {
      id: "risk-factors",
      title: "Risk Factors",
      content: [
        {
          type: "bulletList",
          items: [
            "**PID** → MC risk factor",
            "**Prior tubal damage** → MAX RISK (previous tubal surgery, prior history of ectopic)",
            "Smoking",
            "Advanced age",
            "ART / IVF",
            "Endometriosis",
          ],
        },
      ],
    },
    {
      id: "clinical-presentation",
      title: "Clinical Presentation (Triad)",
      content: [
        {
          type: "keyPoint",
          label: "Classic Triad",
          value:
            "**Amenorrhoea** + **BPV** (Bleeding Per Vaginum) + **Pain**",
        },
        {
          type: "bulletList",
          items: [
            "**Pain** → Most significant / Hallmark symptom",
            "**Decidual cast:** shed due to fall in hCG and progesterone levels",
          ],
        },
      ],
    },
    {
      id: "evaluation",
      title: "Evaluation / Investigation",
      content: [
        {
          type: "flowchart",
          nodes: [
            {
              id: "upt",
              label: "UPT (Urine Pregnancy Test)",
              sublabel: "First step — must be +ve",
            },
            {
              id: "tvs",
              label: "TVS (Transvaginal Sonography)",
              sublabel: "Next / IOC",
              highlight: true,
            },
            {
              id: "lap",
              label: "LAPAROSCOPY",
              sublabel: "Gold standard / Confirmatory",
              highlight: true,
            },
          ],
          edges: [
            { from: "upt", to: "tvs", label: "+ve → Next step" },
            { from: "tvs", to: "lap", label: "If inconclusive" },
          ],
        },
        {
          type: "bulletList",
          items: [
            "**TVS findings:** Empty uterus with adnexal mass, **BAGEL SIGN / DOUGHNUT SIGN**, Free fluid in POD",
            "**Doppler:** RING OF FIRE sign",
          ],
        },
        {
          type: "keyPoint",
          label: "βhCG in Ectopic",
          value:
            "Lower level than normal pregnancy. **No doubling in 48 hrs** → prolonged doubling time of **5–7 days** (normal IU pregnancy doubles every 48 hrs).",
        },
      ],
    },
    {
      id: "mgmt-ruptured",
      title: "Management — Ruptured",
      content: [
        {
          type: "flowchart",
          nodes: [
            { id: "rupt", label: "RUPTURED ECTOPIC" },
            { id: "stable", label: "Haemodynamically Stable" },
            {
              id: "unstable",
              label: "Haemodynamically Unstable",
              highlight: true,
            },
            { id: "lap-salp", label: "Laparoscopic Salpingectomy" },
            {
              id: "stab",
              label: "STABILIZE",
              sublabel: "IV fluids, Blood, ABC",
            },
            {
              id: "laparo",
              label: "LAPAROTOMY → Salpingectomy",
              highlight: true,
            },
          ],
          edges: [
            { from: "rupt", to: "stable" },
            { from: "rupt", to: "unstable" },
            { from: "stable", to: "lap-salp" },
            { from: "unstable", to: "stab", label: "Initial" },
            { from: "stab", to: "laparo", label: "Next" },
          ],
        },
        {
          type: "clinicalNote",
          text: "Best approach for **haemodynamically unstable** ruptured ectopic: **LAPAROTOMY** (not laparoscopy).",
        },
      ],
    },
    {
      id: "mgmt-unruptured",
      title: "Management — Unruptured (Medical vs Surgical)",
      content: [
        {
          type: "keyPoint",
          label: "Medical (Methotrexate) — ALL criteria must be met",
          value:
            "Unruptured, no significant pain • Haemodynamically stable • Size **< 4 cm** • hCG **< 5000 mIU/mL** • Cardiac activity **ABSENT** • Patient willing for follow-up • No contraindication for MTX",
        },
        {
          type: "keyPoint",
          label: "Surgical — if ANY 1 criterion not fulfilled",
          value:
            "**Salpingectomy** = standard surgery. **Salpingostomy** = if patient desires fertility OR contralateral tube is damaged (open tube → remove product → leave open).",
        },
      ],
    },
    {
      id: "mtx-protocol",
      title: "Methotrexate Protocol",
      content: [
        {
          type: "table",
          headers: ["Parameter", "Detail"],
          rows: [
            ["Dose", "1 mg/kg OR 50 mg/m² (by BSA)"],
            ["Route", "IM or IV"],
            ["Regimen", "SINGLE DOSE"],
            ["Day of administration", "D1"],
            ["hCG monitoring", "D1, D4, D7"],
            ["Success criterion", "Fall of ≥15% between D4 and D7"],
            ["If fall <15%", "Repeat dose of MTX"],
          ],
        },
        {
          type: "bulletList",
          items: [
            "Other medical options: KCL, Actinomycin, Hyperosmolar glucose, PGF2α / Carboprost",
            "**NOT used:** Misoprostol",
          ],
        },
      ],
    },
    {
      id: "mtx-contraindications",
      title: "Contraindications for Methotrexate",
      content: [
        {
          type: "bulletList",
          items: [
            "Ruptured ectopic / HD unstable",
            "Viable IU pregnancy / Cardiac activity present",
            "Hypersensitivity to MTX",
            "Immunodeficiency",
            "Thromboembolic disorder",
            "Active pulmonary disease",
            "Active peptic ulcer disease",
            "Hepatic / renal dysfunction",
            "Moderate–severe anaemia, leukopenia, thrombocytopenia",
            "Breast feeding",
            "Non-compliant patient",
          ],
        },
      ],
    },
    {
      id: "other-ectopic-criteria",
      title: "Criteria for Other Ectopic Types",
      content: [
        {
          type: "table",
          headers: ["Ectopic Type", "Diagnostic Criteria"],
          rows: [
            ["Abdominal Ectopic", "STUDDIFORD criteria"],
            [
              "Cervical Ectopic",
              "RUBIN'S criteria / PAALMAN McNELCK criteria",
            ],
            ["Ovarian Ectopic", "SPIEGELBERG criteria"],
          ],
        },
      ],
    },
    {
      id: "special-situations",
      title: "Special Situations",
      content: [
        {
          type: "keyPoint",
          label: "Heterotopic Pregnancy",
          value:
            "Coexistence of **IU pregnancy + ectopic pregnancy**. More common after **IVF/ART**. Management: **SURGERY** (cannot give MTX — viable IU pregnancy exists).",
        },
        {
          type: "keyPoint",
          label: "Pregnancy of Unknown Location (PUL)",
          value:
            "UPT +ve, βhCG below discriminatory zone, USG shows no IU or ectopic mass. Management: **Repeat βhCG after 48 hours** to determine trend.",
        },
      ],
    },
  ],

  flashcards: [
    {
      id: "fc01",
      front: "Most common site of ectopic pregnancy?",
      back: "Fallopian tube (specifically the Ampulla is the MC tubal site).",
      tags: ["site", "high-yield"],
    },
    {
      id: "fc02",
      front: "MC non-tubal site of ectopic pregnancy?",
      back: "Ovary.",
      tags: ["site"],
    },
    {
      id: "fc03",
      front: "Rank tubal ectopic sites by frequency.",
      back: "Ampulla (MC) > Isthmus > Infundibulum > Intramural/Interstitial (least common).",
      tags: ["site", "high-yield"],
    },
    {
      id: "fc04",
      front: "Which tubal site ruptures earliest? Which ruptures last?",
      back: "Earliest: Isthmus. Last: Intramural (12–16 weeks) — most dangerous type.",
      tags: ["site", "high-yield"],
    },
    {
      id: "fc05",
      front: "Which ectopic has maximum survival overall?",
      back: "Abdominal ectopic — can go to T2/T3.",
      tags: ["site", "high-yield"],
    },
    {
      id: "fc06",
      front: "MC risk factor vs maximum risk factor for ectopic?",
      back: "MC risk factor: PID. Maximum risk: Prior tubal damage (previous surgery, prior ectopic).",
      tags: ["risk-factors", "high-yield"],
    },
    {
      id: "fc07",
      front: "Classic triad of ectopic pregnancy?",
      back: "Amenorrhoea + BPV (Bleeding Per Vaginum) + Pain. Pain is the hallmark symptom.",
      tags: ["clinical-presentation", "high-yield"],
    },
    {
      id: "fc08",
      front: "What causes decidual cast in ectopic pregnancy?",
      back: "Fall in hCG and progesterone levels.",
      tags: ["clinical-presentation"],
    },
    {
      id: "fc09",
      front: "IOC and Gold standard for ectopic pregnancy?",
      back: "IOC: TVS (Transvaginal Sonography). Gold standard: Laparoscopy.",
      tags: ["evaluation", "high-yield"],
    },
    {
      id: "fc10",
      front: "TVS and Doppler signs in ectopic pregnancy?",
      back: "TVS: Empty uterus with adnexal mass, Bagel/Doughnut sign, free fluid in POD. Doppler: Ring of Fire sign.",
      tags: ["evaluation", "high-yield"],
    },
    {
      id: "fc11",
      front: "βhCG pattern in ectopic vs normal IU pregnancy?",
      back: "Normal: doubles every 48 hrs. Ectopic: lower levels, prolonged doubling time of 5–7 days.",
      tags: ["evaluation", "high-yield"],
    },
    {
      id: "fc12",
      front:
        "Criteria for medical (MTX) management of unruptured ectopic (all must be met)?",
      back: "Unruptured, stable, size <4 cm, hCG <5000, cardiac activity ABSENT, willing for follow-up, no MTX contraindication.",
      tags: ["management", "high-yield"],
    },
    {
      id: "fc13",
      front: "MTX protocol: when is treatment considered successful?",
      back: "hCG monitored on D1, D4, D7. Fall of ≥15% between D4 and D7 = successful.",
      tags: ["management", "high-yield"],
    },
    {
      id: "fc14",
      front: "When is salpingostomy preferred over salpingectomy?",
      back: "When patient desires fertility OR contralateral tube is damaged.",
      tags: ["management"],
    },
    {
      id: "fc15",
      front: "What is heterotopic pregnancy and how is it managed?",
      back: "Coexistence of IU pregnancy + ectopic. More common after IVF/ART. Managed by SURGERY (MTX contraindicated due to viable IU pregnancy).",
      tags: ["special", "high-yield"],
    },
  ],

  mcqs: [
    // --- RECALL (5) ---
    {
      id: "mcq01",
      question: "Most common site of ectopic pregnancy?",
      options: ["Ampulla", "Isthmus", "Infundibulum", "Intramural"],
      correctIndex: 0,
      explanation:
        "Ampulla is the MC site of tubal (and overall) ectopic pregnancy.",
      difficulty: "recall",
    },
    {
      id: "mcq02",
      question:
        "Which among the following is last to rupture among tubal ectopic pregnancy?",
      options: ["Ampulla", "Isthmus", "Infundibulum", "Intramural"],
      correctIndex: 3,
      explanation:
        "Intramural (interstitial) ectopic is last to rupture (12–16 weeks) and is the most dangerous type due to rich blood supply.",
      difficulty: "recall",
    },
    {
      id: "mcq03",
      question:
        "In cases of suspected ectopic pregnancy, which hormone is typically measured?",
      options: ["Estrogen", "Progesterone", "Beta hCG", "LH"],
      correctIndex: 2,
      explanation:
        "Beta hCG is the hormone measured. In ectopic pregnancy, levels are lower than normal and show prolonged doubling time (5–7 days instead of 48 hours).",
      difficulty: "recall",
    },
    {
      id: "mcq04",
      question:
        "The correct characteristic feature in ectopic pregnancy on TVS is:",
      options: [
        "Thin endometrium with no adnexal mass",
        "Empty uterus with adnexal mass and fluid in pelvis",
        "Intrauterine gestational sac",
        "Thick endometrium",
      ],
      correctIndex: 1,
      explanation:
        "TVS in ectopic shows an empty uterus with adnexal mass and free fluid in the pouch of Douglas (POD). Other signs include Bagel/Doughnut sign.",
      difficulty: "recall",
    },
    {
      id: "mcq05",
      question: "Most common risk factor for ectopic pregnancy is:",
      options: [
        "Endometriosis",
        "PID (Pelvic Inflammatory Disease)",
        "Prior tubal surgery",
        "Smoking",
      ],
      correctIndex: 1,
      explanation:
        "PID is the MC risk factor for ectopic pregnancy. However, prior tubal damage (surgery/prior ectopic) carries the MAXIMUM risk.",
      difficulty: "recall",
    },

    // --- CLINICAL (5) ---
    {
      id: "mcq06",
      question:
        "A G2A1 presents in the emergency with spotting per vagina, preceded by amenorrhea for 8 weeks. Her blood pressure is 70/50 mmHg and pulse rate of 110 beats/minute, with urine pregnancy test positive. What is the next step in management?",
      options: [
        "Manage hypovolemic shock with fluids and bed rest",
        "Immediate Laparotomy",
        "Laparoscopic salpingectomy",
        "Stabilization and then reassess",
      ],
      correctIndex: 1,
      explanation:
        "Patient is haemodynamically unstable (BP 70/50, pulse 110) with suspected ruptured ectopic. After initial stabilization, immediate LAPAROTOMY with salpingectomy is the definitive management — not laparoscopy.",
      difficulty: "clinical",
    },
    {
      id: "mcq07",
      question:
        "Which of the following is an indication for surgery in ectopic pregnancy for a woman who is desirous of another pregnancy?",
      options: [
        "Serum beta HCG level <1000 mIU/mL",
        "Patient with insignificant pain",
        "Ectopic mass >4 cm",
        "Unruptured ectopic pregnancy",
      ],
      correctIndex: 2,
      explanation:
        "Ectopic mass >4 cm is a contraindication for medical (MTX) management, making surgery necessary. Medical management requires size <4 cm among other criteria.",
      difficulty: "clinical",
    },
    {
      id: "mcq08",
      question:
        "A patient who underwent IVF presents with minimal vaginal bleeding and abdominal pain. USG showed a viable intrauterine pregnancy associated with adnexal mass of 3 cm with increased vascularity suggestive of ectopic. What is the appropriate management?",
      options: [
        "Methotrexate",
        "MTP",
        "Surgery",
        "Expectant management",
      ],
      correctIndex: 2,
      explanation:
        "This is a heterotopic pregnancy (IU + ectopic), more common after IVF. MTX is contraindicated because a viable IU pregnancy exists. Surgery is the appropriate management.",
      difficulty: "clinical",
    },
    {
      id: "mcq09",
      question:
        "A woman presents with amenorrhea since 5 weeks, UPT+. On investigations, beta-hCG is 1400 mIU/mL. USG shows a normal trilaminar endometrium and adnexa. What would be the most appropriate next step?",
      options: [
        "Repeat beta-hCG after 48 hours",
        "Repeat ultrasound after 3 days",
        "Measurement of progesterone",
        "Laparoscopy",
      ],
      correctIndex: 0,
      explanation:
        "This is a Pregnancy of Unknown Location (PUL) — UPT+, hCG below discriminatory zone, no IU or ectopic mass on USG. Repeat βhCG after 48 hours to determine the trend.",
      difficulty: "clinical",
    },
    {
      id: "mcq10",
      question:
        "A patient with unruptured ectopic pregnancy is given Methotrexate on Day 1. Her βhCG levels are: D1 = 3800, D4 = 4200, D7 = 3000 mIU/mL. What is the interpretation?",
      options: [
        "Treatment failed — repeat MTX dose",
        "Treatment successful — continue monitoring",
        "Treatment failed — proceed to surgery",
        "Indeterminate — repeat hCG on D10",
      ],
      correctIndex: 1,
      explanation:
        "Success is defined as ≥15% fall between D4 and D7. Fall = (4200 – 3000) / 4200 = 28.6%, which is >15%. Treatment is successful. Note: initial rise in hCG (D1→D4) is expected.",
      difficulty: "clinical",
    },

    // --- TRICKY (5) ---
    {
      id: "mcq11",
      question: "The narrowest part of the fallopian tube is:",
      options: [
        "Ampulla",
        "Isthmus",
        "Infundibulum",
        "Intramural / Interstitial",
      ],
      correctIndex: 3,
      explanation:
        "Intramural (interstitial) is the NARROWEST part. Common trap: students confuse narrowest with earliest to rupture. Isthmus is earliest to rupture, but intramural is the narrowest.",
      difficulty: "tricky",
    },
    {
      id: "mcq12",
      question:
        "All of the following are criteria for medical management of ectopic pregnancy with Methotrexate EXCEPT:",
      options: [
        "hCG < 5000 mIU/mL",
        "Size < 4 cm",
        "Fetal cardiac activity present",
        "Patient haemodynamically stable",
      ],
      correctIndex: 2,
      explanation:
        "Cardiac activity must be ABSENT for MTX therapy. Presence of fetal cardiac activity is a contraindication for medical management and an indication for surgical management.",
      difficulty: "tricky",
    },
    {
      id: "mcq13",
      question: "Decidual cast in ectopic pregnancy is seen due to:",
      options: [
        "Trophoblastic invasion of endometrium",
        "Rise in estrogen and progesterone",
        "Fall in hCG and progesterone levels",
        "Endometrial infection",
      ],
      correctIndex: 2,
      explanation:
        "Decidual cast is shed due to falling hCG and progesterone levels. The decidualized endometrium can no longer be maintained and is expelled as a cast.",
      difficulty: "tricky",
    },
    {
      id: "mcq14",
      question: "Spiegelberg criteria is used for diagnosis of:",
      options: [
        "Abdominal ectopic",
        "Cervical ectopic",
        "Ovarian ectopic",
        "Tubal ectopic",
      ],
      correctIndex: 2,
      explanation:
        "Spiegelberg criteria → Ovarian ectopic. Studdiford criteria → Abdominal ectopic. Rubin's / Paalman McNelck criteria → Cervical ectopic.",
      difficulty: "tricky",
    },
    {
      id: "mcq15",
      question:
        "Which of the following drugs is NOT used in medical management of ectopic pregnancy?",
      options: ["Methotrexate", "KCL", "Misoprostol", "Actinomycin"],
      correctIndex: 2,
      explanation:
        "Misoprostol is NOT used for ectopic pregnancy. Drugs used include: Methotrexate (first line), KCL, Actinomycin, Hyperosmolar glucose, and PGF2α/Carboprost.",
      difficulty: "tricky",
    },
  ],

  fillBlanks: [
    {
      id: "fb01",
      sentence:
        "MC site of ectopic pregnancy is _____ of the fallopian tube.",
      blanks: ["Ampulla"],
    },
    {
      id: "fb02",
      sentence:
        "Earliest tubal site to rupture is _____, while last to rupture is _____ (at 12–16 weeks).",
      blanks: ["Isthmus", "Intramural"],
    },
    {
      id: "fb03",
      sentence:
        "MC risk factor for ectopic is _____, while maximum risk is from _____.",
      blanks: ["PID", "prior tubal damage"],
    },
    {
      id: "fb04",
      sentence:
        "Normal IU pregnancy βhCG doubles every _____ hours; in ectopic the doubling time is prolonged to _____ days.",
      blanks: ["48", "5–7"],
    },
    {
      id: "fb05",
      sentence:
        "Medical management with MTX requires ectopic size < _____ cm and hCG < _____ mIU/mL.",
      blanks: ["4", "5000"],
    },
    {
      id: "fb06",
      sentence:
        "MTX success is defined as ≥_____% fall in hCG between D4 and D7.",
      blanks: ["15"],
    },
    {
      id: "fb07",
      sentence:
        "Salpingostomy is preferred when patient desires _____ or contralateral tube is _____.",
      blanks: ["fertility", "damaged"],
    },
    {
      id: "fb08",
      sentence:
        "Spiegelberg criteria → _____ ectopic; Studdiford criteria → _____ ectopic.",
      blanks: ["Ovarian", "Abdominal"],
    },
  ],

  matchPairs: [
    { id: "mp01", left: "Ampulla", right: "MC site of ectopic" },
    { id: "mp02", left: "Isthmus", right: "Earliest to rupture" },
    {
      id: "mp03",
      left: "Intramural",
      right: "Last to rupture / Most dangerous",
    },
    { id: "mp04", left: "PID", right: "MC risk factor" },
    { id: "mp05", left: "Prior tubal damage", right: "Maximum risk" },
    {
      id: "mp06",
      left: "Abdominal ectopic",
      right: "Studdiford criteria",
    },
    { id: "mp07", left: "Cervical ectopic", right: "Rubin's criteria" },
    {
      id: "mp08",
      left: "Ovarian ectopic",
      right: "Spiegelberg criteria",
    },
    { id: "mp09", left: "Bagel sign", right: "TVS finding in ectopic" },
    {
      id: "mp10",
      left: "Ring of Fire",
      right: "Doppler finding in ectopic",
    },
  ],

  quickRevision: [
    "**Sites:** MC overall = Fallopian tube (Ampulla > Isthmus > Infundibulum > Intramural). MC non-tubal = Ovary. Max survival = Abdominal.",
    "**Tubal key facts:** Isthmus = earliest to rupture. Intramural = narrowest, last to rupture (12–16 wk), most dangerous, max tubal survival.",
    "**Risk factors:** MC = PID. Max risk = prior tubal damage. Others: smoking, advanced age, ART/IVF, endometriosis.",
    "**Triad:** Amenorrhoea + BPV + Pain (hallmark). Decidual cast = fall in hCG/progesterone.",
    "**Investigations:** First step = UPT. IOC = TVS (Bagel/Doughnut sign, Ring of Fire on Doppler). Gold standard = Laparoscopy. βhCG doubles in 5–7 days (not 48 hrs).",
    "**Ruptured management:** Stable → laparoscopic salpingectomy. Unstable → stabilize → LAPAROTOMY → salpingectomy.",
    "**MTX criteria (ALL):** Unruptured, stable, <4 cm, hCG <5000, cardiac activity ABSENT, compliant, no MTX contraindication. Protocol: D1/D4/D7 — ≥15% fall D4→D7 = success. NOT used: Misoprostol.",
    "**Special:** Heterotopic (IU + ectopic, common after IVF) → Surgery only. PUL → repeat βhCG after 48 hrs. Criteria: Spiegelberg (ovarian), Studdiford (abdominal), Rubin's (cervical).",
  ],
};

export default ch10;
