// lib/images.ts — the photographs actually used on the site.
//
// The pool was replaced: all 29 files now hold genuinely distinct photographs (verified
// by checksum — no two files match), and the dimensions below are taken verbatim from the
// regenerated public/images/manifest.json. Every entry was opened and looked at before it
// was placed, and each alt string describes THAT photograph rather than restating the
// heading it sits under.
//
// Rejected on sight and referenced nowhere, because this is a Fountain Hills, Arizona
// site: wide-04 and wide-10 (snow on the roof and the ground), wide-05 (a pine-and-ribbon
// winter wreath beside the door), wide-08 (light patches at the opening that read as snow)
// and square-02 (a wet northern autumn driveway, and soft focus besides). tall-04 is a
// sound photograph but nothing on the five pages needed it, so it is not listed here.

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const photos = {
  // ---------- wide: hero and page banners ----------

  /** HERO. Two-car garage standing open under a stucco arch in strong sun. */
  sunlitOpenGarage: {
    src: '/images/wide-07.webp',
    width: 1920,
    height: 1440,
    alt: 'A two-car garage standing fully open beneath a curved stucco arch, hard sunlight falling across the bare slab, with shelving, a ladder and a chest freezer along the side wall.',
  },
  /** Garage interior, sectional door closed, tracks and hinges lit from one side. */
  garageInteriorClosedDoor: {
    src: '/images/wide-03.webp',
    width: 1333,
    height: 1000,
    alt: 'The inside of a single garage with the white sectional door closed, vertical tracks bolted to both jambs, decorative strap hinges on each panel seam and an electrical panel on the wall alongside.',
  },
  /** Exterior: a grimy white carriage-panel door with a band of windows. */
  whiteCarriageDoorExterior: {
    src: '/images/wide-01.webp',
    width: 1333,
    height: 1000,
    alt: 'A white carriage-panel garage door seen square on from the driveway, its face grey with weathering and a band of four windows across the middle section.',
  },
  /** The full torsion assembly running across a header above a windowed door. */
  springShaftAcrossHeader: {
    src: '/images/wide-06.webp',
    width: 1333,
    height: 1000,
    alt: 'A torsion shaft running the full width of a garage header with two springs and three centre bearing brackets on it, above the glazed top section of a closed door.',
  },
  /** A single torsion spring on its shaft against a plywood-and-drywall header. */
  torsionSpringPlywoodHeader: {
    src: '/images/wide-02.webp',
    width: 1333,
    height: 1000,
    alt: 'A single black torsion spring wound onto its shaft across a garage header of bare plywood and patched drywall, the cable drum just visible at the far end.',
  },
  /** Opener head and rail bolted under a textured ceiling. */
  openerUnderCeiling: {
    src: '/images/wide-09.webp',
    width: 1920,
    height: 1440,
    alt: 'A LiftMaster opener head hanging on punched angle iron beneath a textured white ceiling, its rail and door arm running off to the top of the door and the release cord dangling below.',
  },

  // ---------- tall: service cards, split columns, gallery ----------

  /** Curved track, reinforcement bracket and spring at the top of a door. */
  curvedTrackBracket: {
    src: '/images/tall-01.webp',
    width: 750,
    height: 1000,
    alt: 'The radius bend where a vertical garage door track curves into the horizontal, held by a punched steel bracket, with the spring and cable behind it against a yellowed wall.',
  },
  /** Track radius and pulley in an older wood-framed garage. */
  trackRadiusPulley: {
    src: '/images/tall-02.webp',
    width: 750,
    height: 1000,
    alt: 'The curved section of an old galvanised garage door track bolted into rough timber framing, a small pulley behind it and cobwebs strung between the members.',
  },
  /** Opener rail and door arm, looking out at a parked van. */
  openerRailLookingOut: {
    src: '/images/tall-03.webp',
    width: 750,
    height: 1000,
    alt: 'A chain-drive opener rail and its angled door arm seen from inside a garage, the open door above and a white work van parked on the driveway beyond.',
  },
  /** Maroon LiftMaster P3 opener head. */
  maroonLiftmaster: {
    src: '/images/tall-05.webp',
    width: 750,
    height: 1000,
    alt: 'A maroon LiftMaster P3 opener head bolted to punched angle iron above a garage door, its light lens glowing at the side and a pull cord hanging from the housing.',
  },
  /** A new brown woodgrain sectional door fitted in a fresh opening. */
  newWoodgrainDoor: {
    src: '/images/tall-06.webp',
    width: 750,
    height: 1000,
    alt: 'A newly fitted garage door in a bronze woodgrain finish sitting square in its opening, the surrounding wall still wrapped in white housewrap and the concrete apron freshly poured.',
  },
  /** Cream raised-panel door against red brick with a coach lamp. */
  creamDoorOnBrick: {
    src: '/images/tall-07.webp',
    width: 750,
    height: 1000,
    alt: 'A cream raised-panel garage door in good order beneath a red brick wall, with a black coach lamp mounted above the opening and a clean concrete apron below.',
  },
  /** LiftMaster myQ opener seen from below at an angle. */
  liftmasterMyQBelow: {
    src: '/images/tall-08.webp',
    width: 750,
    height: 1000,
    alt: 'A black LiftMaster myQ opener head seen from below against a heavily textured ceiling, its wiring looped over the rail and the top of the door visible at the bottom of the frame.',
  },
  /** LiftMaster myQ opener with the serial and warning label facing the camera. */
  liftmasterMyQLabel: {
    src: '/images/tall-09.webp',
    width: 750,
    height: 1000,
    alt: 'The underside of a LiftMaster myQ opener with its serial plate and warning label facing down, low-voltage wires running to the terminals on the end panel.',
  },
  /** Foot of the vertical track: jamb bracket, floor line and a live photo eye. */
  trackFootAndSensor: {
    src: '/images/tall-10.webp',
    width: 750,
    height: 1000,
    alt: 'The bottom of a garage door track where it meets the concrete, showing the jamb bracket, the closed door edge against the floor and a safety sensor showing a green light on the timber jamb.',
  },
  /** Bracket, extension spring and drum above a wood-panelled door. */
  bracketSpringAndDrum: {
    src: '/images/tall-11.webp',
    width: 750,
    height: 1000,
    alt: 'A punched steel hanger bracket carrying the horizontal track above a wood-panelled garage door, with an extension spring and cable ends hooked into it.',
  },
  /** Cable drum on the torsion shaft with the lift cable wound on. */
  cableDrum: {
    src: '/images/tall-12.webp',
    width: 750,
    height: 1000,
    alt: 'A grooved cable drum seated on the end of a torsion shaft with the lift cable wound into it and running down the inside of the curved track to the bottom bracket.',
  },
  /** Horizontal track, hangers and spring under a sand-toned ceiling. */
  horizontalTrackHangers: {
    src: '/images/tall-13.webp',
    width: 750,
    height: 1000,
    alt: 'The horizontal track of a garage door running back from the radius under a sand-coloured ceiling, carried on bolted hangers with an extension spring stretched alongside it.',
  },
  /** Torsion spring on the shaft below a cracked ceiling. */
  torsionSpringOnShaft: {
    src: '/images/tall-14.webp',
    width: 750,
    height: 1000,
    alt: 'A black torsion spring wound onto its shaft across a garage header, the winding cone at the near end and a long crack running through the plaster ceiling above it.',
  },
  /** Extension spring and pulley against a red brick wall. */
  springAndPulleyOnBrick: {
    src: '/images/tall-15.webp',
    width: 750,
    height: 1000,
    alt: 'An extension spring hooked to a steel pulley at the end of a garage door track, mounted against an old red brick wall with the lift cable running back over the sheave.',
  },
  /** Safety photo eye clamped to the jamb beside the track. */
  photoEyeOnJamb: {
    src: '/images/tall-16.webp',
    width: 750,
    height: 1000,
    alt: 'A safety photo eye clamped to the vertical track on a timber jamb, its indicator lit green, with the gravel driveway visible through the open doorway beside it.',
  },

  // ---------- square: spot images ----------

  /** Drum, cables and opener bracket under a lit ceiling. */
  drumCablesAndBracket: {
    src: '/images/square-01.webp',
    width: 900,
    height: 900,
    alt: 'A cable drum and two taut lift cables at the top corner of a garage door, with the opener rail bracket and a bare ceiling bulb behind them.',
  },
  /** Interior face of a closed door with its centre strut and opener arm. */
  doorStrutAndArm: {
    src: '/images/square-03.webp',
    width: 900,
    height: 900,
    alt: 'The inside of a closed sand-coloured garage door with a full-height steel reinforcement strut down the centre, the opener arm and red release handle at the top.',
  },
} as const satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
