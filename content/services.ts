// content/services.ts — the six services, written once and read by both the home grid
// and the services page. Symptoms are the ones a Fountain Hills homeowner actually
// reports; the fix text is what the work involves, not a sales line.
import { photos, type Photo } from '@/lib/images';

export type Service = {
  slug: string;
  name: string;
  short: string;
  symptoms: string[];
  detail: string;
  photo: Photo;
};

export const services: readonly Service[] = [
  {
    slug: 'spring-replacement',
    name: 'Spring replacement',
    short:
      'Torsion and extension springs, replaced in matched pairs and wound to the weight of the door they are actually lifting.',
    symptoms: [
      'A bang from the garage, then a door that will not lift',
      'A visible gap in the coil across the shaft',
      'The opener straining and reversing halfway up',
    ],
    detail:
      'A torsion spring is rated in cycles, not years, and a two-car door in this valley gets opened more often than most because the garage is where the heat is kept out of the house. When one lets go it goes with a noise the whole street hears and the door becomes a two-hundred-pound weight held by nothing. We measure the wire, the inside diameter and the wound length off the failed spring, match the cycle rating to how the household actually uses the door, and replace both sides even when only one broke — a fresh spring paired with a tired one just pulls the door out of balance and puts the load back on the opener.',
    photo: photos.torsionSpringOnShaft,
  },
  {
    slug: 'opener-repair-and-install',
    name: 'Opener repair and install',
    short:
      'Chain, belt and wall-mount units — logic boards, gear kits, travel limits, safety eyes, and full replacements when the repair no longer pays.',
    symptoms: [
      'The motor runs but the door does not move',
      'The door reverses a foot off the floor for no reason',
      'The remote works from inside but not from the driveway',
    ],
    detail:
      'Most opener calls out here are one of three things: a stripped nylon gear in the drive sprocket, safety eyes knocked out of alignment by a bike or bumped by a bin, or a logic board that has spent a decade in a ceiling that hits 130 degrees in July. We test the travel and force settings before replacing anything, because a door that reverses is often telling you about binding in the track, not about the opener. When the unit is genuinely finished we will say so and quote the replacement rather than sell a repair that buys six months.',
    photo: photos.maroonLiftmaster,
  },
  {
    slug: 'cable-and-drum-repair',
    name: 'Cable and drum repair',
    short:
      'Frayed or jumped lift cables re-run, drums re-seated and re-set so both sides carry the same load.',
    symptoms: [
      'One corner of the door hangs lower than the other',
      'Loose cable coiled at the bottom bracket',
      'A grinding sound from one side as the door travels',
    ],
    detail:
      'A lift cable is a thin steel rope doing a serious job, and it fails the same way every time: a few strands go at the drum or the bottom bracket, then the rest let go under load and the door drops on one side and wedges in the track. Once a cable jumps its drum the two sides are no longer wound to the same length, so re-hanging the cable is only half the job — the drums have to be re-set on the shaft and the door levelled before it is put back under tension. We check the bottom brackets while we are in there, because that is the part people are most tempted to unbolt themselves and it is under full spring load.',
    photo: photos.cableDrum,
  },
  {
    slug: 'off-track-realignment',
    name: 'Off-track door realignment',
    short:
      'Doors that have come out of the vertical track put back square, with the rollers, hinges and track bolts checked before it is run again.',
    symptoms: [
      'The door is jammed at an angle and will not go up or down',
      'A roller sitting outside the track',
      'A visible bend or flare in the vertical track',
    ],
    detail:
      'A door comes off track for a reason, and the reason is almost never the track itself. A backed-out lag bolt, a roller with a seized bearing, a broken hinge, or a car door caught on the way out — something moved first. Putting the panels back in the channel without finding that is how the same door comes off again a fortnight later. We take the door down to the section that failed, straighten or replace the track, check every hinge and roller through the travel, and re-torque the jamb brackets before we hand it back. Please do not run an off-track door with the opener; that is how a bent track becomes three bent panels.',
    photo: photos.curvedTrackBracket,
  },
  {
    slug: 'panel-and-section-replacement',
    name: 'Panel and section replacement',
    short:
      'Single sections matched and swapped where the rest of the door is sound, full replacement where it is not.',
    symptoms: [
      'A cracked or delaminating bottom section',
      'Paint chalked and flaking on the south-facing face',
      'A dented panel from a reversing car',
    ],
    detail:
      'West and south-facing doors in Fountain Hills take a beating that has nothing to do with use. The finish chalks, the steel skin oil-cans in the afternoon, and on older wood doors the stiles open at the joints until water from a monsoon storm gets in and swells them. Where the rest of the door is straight and the hardware is sound, a single section can be matched and swapped for a fraction of a new door — we take the profile, gauge and colour off the existing panels first. Where three of four sections are gone, we will tell you plainly that the replacement is the better spend.',
    photo: photos.newWoodgrainDoor,
  },
  {
    slug: 'weather-seal-and-roller-tune-ups',
    name: 'Weather-seal and roller tune-ups',
    short:
      'Bottom seal, jamb seal and top seal renewed, rollers replaced, hardware re-torqued and the door re-balanced.',
    symptoms: [
      'Daylight along the bottom of a closed door',
      'Dust and grit blowing under after a storm',
      'A door that rattles or squeals through its travel',
    ],
    detail:
      'The bottom seal is the part of a garage door the desert destroys fastest. Rubber that has spent five summers on hot concrete goes hard, then brittle, then splits along the retainer, and after that every haboob deposits a layer of grit across the garage floor and the garage stops holding any cool at all. A tune-up is the cheapest visit we do: new bottom seal cut to length, jamb and header seal where the vinyl has shrunk back, nylon rollers in place of the steel ones that have gone noisy, every hinge and bracket re-torqued, and a balance check so the springs, not the opener, are carrying the door.',
    photo: photos.trackFootAndSensor,
  },
];

export const faqs: readonly { q: string; a: string }[] = [
  {
    q: 'Do you charge to come out and look at the door?',
    a: 'We quote before any work starts, and the quote is for the repair in front of us rather than a package. If you would rather have a rough figure before we drive out, call and describe what the door is doing — springs, cables and openers each have a narrow range and we can usually give you a sensible bracket over the phone.',
  },
  {
    q: 'How long does a broken spring take to replace?',
    a: 'A standard residential torsion set on a two-car door is usually an hour to ninety minutes on site, including winding, balancing and a full travel test. Doors with an unusual headroom setup, low-clearance track or a converted extension-to-torsion system take longer, and we will say so when we see it rather than after.',
  },
  {
    q: 'My door works, but it is getting louder every month. Is that urgent?',
    a: 'It is not an emergency, but noise is almost always the first symptom of something with a deadline. Steel rollers that have lost their grease, a hinge that has opened up, or a spring approaching the end of its cycle count all announce themselves before they fail. A tune-up caught at the noisy stage costs a fraction of the same door caught after the cable lets go.',
  },
  {
    q: 'Can the heat really damage a garage door on its own?',
    a: 'Yes, and it is the most common thing we see here that homeowners do not expect. Sustained roof and attic temperatures cook opener logic boards and capacitors; UV chalks the finish and embrittles the bottom and jamb seals until they crack; and the daily expansion and contraction of a steel-skinned door works fasteners loose over a few seasons. None of it involves the door being used badly. It is just what a west-facing door does after enough Julys.',
  },
  {
    q: 'Do you work on the door itself, or only on the opener?',
    a: 'Both. Openers are a large part of the work but the door, the springs, the cables, the drums, the track and the seals are the mechanical system that the opener only assists. A great many opener complaints turn out to be a balance or track problem, so we test the door by hand — disconnected from the opener — on every visit before we touch the motor.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'Fountain Hills is home, and we work out from there across Scottsdale, Rio Verde, Cave Creek, Carefree and the surrounding parts of north-east Maricopa County. If you are on the edge of that and not sure, call and ask — it is a short conversation and we would rather tell you straight than have you wait on a van that is not coming.',
  },
];
