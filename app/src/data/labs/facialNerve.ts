export type SiteId = "U" | "D" | "C" | "B" | "A";

export type FunctionId =
  | "upperFace"
  | "lowerFace"
  | "lacrimation"
  | "stapedius"
  | "taste"
  | "salivation";

export interface LesionSite {
  id: SiteId;
  title: string;
  where: string;
  summary: string;
  tip: string;
  vignette: string;
}

export interface NerveFunction {
  id: FunctionId;
  label: string;
  via: string;
  lostAs: string;
  lostAt: SiteId[];
}

// The diagram shows the RIGHT facial nerve. Sites A–D follow the lettering in
// the notes (distal → proximal); U is the supranuclear (UMN) lesion.
export const sites: LesionSite[] = [
  {
    id: "U",
    title: "UMN (supranuclear) lesion",
    where: "Left corticonuclear fibres, above the facial nucleus",
    summary:
      "Contralateral lower face paralysis only. The forehead and eye closure are spared.",
    tip: "The upper-face part of the nucleus gets fibres from both cortices; the lower-face part only from the opposite cortex.",
    vignette:
      "After a left-sided stroke, the right angle of the mouth droops. The patient can still wrinkle the forehead and close both eyes tightly.",
  },
  {
    id: "D",
    title: "Lesion D — at the geniculate ganglion",
    where: "Above the origin of the greater petrosal nerve",
    summary:
      "Lesion C + dry eye and dry nose. Every function of the nerve on that side is lost.",
    tip: "The parotid still secretes — it is supplied by IX, not VII.",
    vignette:
      "Right-sided weakness of the whole face, sounds seem too loud in the right ear, taste is lost on the front of the tongue, and the right eye is dry.",
  },
  {
    id: "C",
    title: "Lesion C — above the nerve to stapedius",
    where: "Facial canal, between the geniculate ganglion and nerve to stapedius",
    summary:
      "Lesion B + hyperacusis. Lacrimation is preserved.",
    tip: "Stapedius dampens loud sound; without it, normal sounds are painfully loud.",
    vignette:
      "Right-sided weakness of the whole face, loss of taste on the front of the tongue, and normal sounds are painfully loud in the right ear. Tearing is normal.",
  },
  {
    id: "B",
    title: "Lesion B — above the chorda tympani",
    where: "Facial canal, between nerve to stapedius and chorda tympani",
    summary:
      "Lesion A + loss of taste from the anterior ⅔ of the tongue and reduced submandibular and sublingual secretion.",
    tip: "Chorda tympani carries taste from the anterior ⅔ and is the functional nerve of the submandibular ganglion.",
    vignette:
      "Right-sided weakness of the whole face with loss of taste on the front of the tongue and a dry mouth. Hearing is comfortable and tearing is normal.",
  },
  {
    id: "A",
    title: "Lesion A — at the stylomastoid foramen",
    where: "After all branches inside the facial canal have left",
    summary:
      "Ipsilateral upper and lower face paralysis only. Taste, hearing and tearing are normal.",
    tip: "VII pierces the parotid gland but does not supply it.",
    vignette:
      "After parotid surgery, the patient cannot wrinkle the forehead, close the eye or smile on the right. Taste, hearing and tearing are all normal.",
  },
];

export const functions: NerveFunction[] = [
  {
    id: "upperFace",
    label: "Upper face muscles",
    via: "Terminal branches",
    lostAs: "Cannot wrinkle forehead or close the eye",
    lostAt: ["A", "B", "C", "D"],
  },
  {
    id: "lowerFace",
    label: "Lower face muscles",
    via: "Terminal branches",
    lostAs: "Drooping mouth, loss of nasolabial fold",
    lostAt: ["A", "B", "C", "D", "U"],
  },
  {
    id: "taste",
    label: "Taste, anterior ⅔ of tongue",
    via: "Chorda tympani",
    lostAs: "Taste lost on the front of the tongue",
    lostAt: ["B", "C", "D"],
  },
  {
    id: "salivation",
    label: "Submandibular & sublingual glands",
    via: "Chorda tympani",
    lostAs: "Reduced salivation",
    lostAt: ["B", "C", "D"],
  },
  {
    id: "stapedius",
    label: "Stapedius",
    via: "Nerve to stapedius",
    lostAs: "Hyperacusis",
    lostAt: ["C", "D"],
  },
  {
    id: "lacrimation",
    label: "Lacrimal, nasal & palatal glands",
    via: "Greater petrosal nerve",
    lostAs: "Dry eye and dry nose",
    lostAt: ["D"],
  },
];

export function getSite(id: SiteId): LesionSite {
  return sites.find((s) => s.id === id)!;
}

export function isLost(fn: FunctionId, site: SiteId | null): boolean {
  if (!site) return false;
  return functions.find((f) => f.id === fn)!.lostAt.includes(site);
}
