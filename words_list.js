const words_1 = {"citadel": {"ko-meaning" : "요새", "en-meaning" : "(n.) a fortress that overlooks and protects a city; any strong or commanding place", "synonyms" : "fort, stronghold, bulwark, bastion", "antonym" : "X"},
"collaborate": {"ko-meaning" : "협업하다", "en-meaning" : "(v.) to work with, work together", "synonyms" : "team up, join forces", "antonym" : "work alone"},
"decree":{"en-meaning" : "(n.) an order having the force of law; (v.) to issue such an order; to command firmly or forcefully", "ko-meaning" : "명령  조례  명하다", "synonyms" : "(n.)proclamation edict;(v.)proclaim", "antonym" : "X"},
"discordant":{"en-meaning" : "(adj.) disagreeable in sound, jarring; lacking in harmony, conflicting", "ko-meaning" : "불협화음", "synonyms" : "grating, shrill, different, divergent, conflicting", "antonym" : "harmonious, in agreement"},
"evolve":{"en-meaning" : "(v.) to develop gradually; to rise to a higher level", "ko-meaning" : "진화하다", "synonyms" : "unfold, emerge", "antonym" : "wither, atrophy"},
"excerpt":{"en-meaning" : "(n.) a passage taken from a book, article, etc.; (v.) to take such a passage; to quote", "ko-meaning" : "발췌  인용  발췌하다  인용하다", "synonyms" : "portion, section, extract", "antonym" : "X"},
"grope":{"en-meaning" : "(v.) to feel about hesitantly with the hands; to search blindly and uncertainly", "ko-meaning" : "더듬다", "synonyms" : "fumble for, cast about for", "antonym" : "X"},
"hover":{"en-meaning" : "(v.) to float or hang suspended over; to move back and forth uncertainly over or around", "ko-meaning" : "날다  떠다니다", "synonyms" : "linger, waver, seesaw", "antonym" : "soar"},
"preclude":{"en-meaning" : "(v.) to make impossible, prevent, shut out", "ko-meaning" : "방해하다  막다  배제하다", "synonyms" : "hinder, check, stop", "antonym" : "X"},
"revert":{"en-meaning" : "(v.) to return, go back", "ko-meaning" : "되돌아가다  복귀하다  회고하다", "synonyms" : "relapse, regress", "antonym" : "progress, advance"},
"servile":{"en-meaning" : "(adj.) of or relating to a slave; behaving like or suitable for a slave or a servant, menial; lacking spirit or independence, abjectly submissive", "ko-meaning" : "노예의  아첨하는", "synonyms" : "slavish, groveling", "antonym" : "X"},
"vigil":{"en-meaning" : "(n.) a watch, especially at night; any period of watchful attention", "ko-meaning" : "불침번  철야 ", "synonyms" : "X", "antonym" : "X"},

};

const words_2 = { 
    "bontiful": { "en-meaning" : "(adj.) giving freely, generous; plentiful, given abundantly", "ko-meaning" : "풍부한  관대한", "synonyms" : "liberal, abundant, copious", "antonym" : "scarce, scantly, in short supply"},
    "congested": { "en-meaning" : "(adj., part.) overcrowded, filled or occupied to excess", "ko-meaning" : "혼잡한  밀집한  가득한", "synonyms" : "jammed, choked, packed", "antonym" : "uncluttered, unimpeded"},
    "detriment": { "en-meaning" : "(n.) harm or loss; injury, damage; a disadvantage; a cause of harm, injury, loss, or damage", "ko-meaning" : "손해  손상  해", "synonyms" : "hindrance, liability", "antonym" : "advantage, help, plus"},
    "durable": { "en-meaning" : "(adj.) sturdy, not easily worn out or destroyed; lasting for a long time; (n. pl.) consumer goods used repeatedly over a series of years", "ko-meaning" : "튼튼한  내구력이 있는", "synonyms" : "(adj.)long-lasting, enduring", "antonym" : "(adj.)fragile, persialbe, fleeting, ephemeral"},

    "enterprising": { "en-meaning" : "(adj.) energetic, willing and able to start something new; showing boldness and imagination", "ko-meaning" : "진취적인  적극적인", "synonyms" : "vigorous, aggressive, audacious", "antonym" : "lazy, indolent, timid, diffident"},
    "frugal": { "en-meaning" : "(adj.) economical, avoiding waste and luxury; scanty, poor, meager", "ko-meaning" : "검소한", "synonyms" : "thrifty, skimpy;", "antonym" : "wasteful, indulgent, lavish"},
    "invalidate": { "en-meaning" : "(v.) to make valueless, take away all force or effect", "ko-meaning" : "무효화하다  무효로 하다  무효로 만들다", "synonyms" : "cancel, annul, disapprove, discredit", "antonym" : "supprot, confirm, back up, legalize"},
    "legendary": { "en-meaning" : "(adj.) described in well-known stories (legends) rather than in real life", "ko-meaning" : "전설적인", "synonyms" : "mythical, fabulous, famous", "antonym" : "X"},

    "maim": { "en-meaning" : "(v.) to cripple, disable, injure, mar, disfigure, mutilate", "ko-meaning" : "불구로 만들다  쓸모없게 하다  손상하다", "synonyms" : "X", "antonym" : "X"},
    "minimize": { "en-meaning" : "(v.) to make as small as possible, make the least of; to make smaller than before", "ko-meaning" : "과소평가하다  줄이다", "synonyms" : "belittle, downplay", "antonym" : "magnify, enlarge, exaggerate"},
    "oblique": { "en-meaning" : "(adj.) slanting or sloping; not straightforward or direct", "ko-meaning" : "비스듬한  사선의  사격의", "synonyms" : "diagonal, indirect", "antonym" : "direct, straight to the point"},
    "venerate": { "en-meaning" : "(v.) to regard with reverence, look up to with great respect", "ko-meaning" : "존경하다  숭배하다  경모하다", "synonyms" : "worship, revere, idolize", "antonym" : "despise, detest, ridicule, deride"}
};

const words_3 = { 
    "allot": { "en-meaning" : "(v.) to assign or distribute in shares or portions", "ko-meaning" : "할당하다", "synonyms" : "apportion, parcel out, allocate", "antonym" : "X"},
    "amass": { "en-meaning" : "(v.) to bring together, collect, gather, especially for oneself; to come together, assemble", "ko-meaning" : "축적하다  모으다  모이다", "synonyms" : "pile up, garner", "antonym" : "scatter, dissipate, squander, waste"},
    "audacious": { "en-meaning" : "(adj.) bold, adventurous, recklessly daring", "ko-meaning" : "대담한  넉살좋은  무례한", "synonyms" : "enterprising,brave", "antonym" : "timid, cowardly"},
    "comply": { "en-meaning" : "(v.) to yield to a request or command", "ko-meaning" : "지키다  따르다  응하다  동의하다", "synonyms" : "consent, acquiesce", "antonym" : "reject, refuse, decline"},

    "devoid": { "en-meaning" : "(adj.) not having or using, lacking", "ko-meaning" : "없는  결여된  빠진  사라진  결핍된", "synonyms" : "wanting, bereft", "antonym" : "full, abounding"},
    "grapple": { "en-meaning" : "(n.) an iron hook used to grab and hold; (v.) to come to grips with, wrestle or fight with", "ko-meaning" : "잡아거는 갈고리  갈고리  파악하다  격투하다", "synonyms" : "tackle, confront, struggle with", "antonym" : "X"},
    "instigate": { "en-meaning" : "(v.) to urge on; to stir up, provoke, start, incite", "ko-meaning" : "부추기다  유발시키다  선동하다  일으키다  충동하다", "synonyms" : "X", "antonym" : "stop, quell, squelch, quash"},
    "longevity": { "en-meaning" : "(n.) long life, long duration, length of life", "ko-meaning" : "장수  수명  장명", "synonyms" : "X", "antonym" : "shortness, transience"},

    "perspective": { "en-meaning" : "(n.) a point of view or general standpoint from which different things are viewed, physically or mentally; the appearance to the eye of various objects at a given time, place, or distance", "ko-meaning" : "관점  시각  전망  견해", "synonyms" : "viewpoint, sense of proportion", "antonym" : "X"},
    "perturb": { "en-meaning" : "(v.) to trouble, make uneasy; to disturb greatly; to throw into confusion", "ko-meaning" : "혼란시키다  교란하다  당황하다", "synonyms" : "upset, agitate, anger", "antonym" : "delight, gladden, please"},
    "relevant": { "en-meaning" : "(adj.) connected with or related to the matter at hand", "ko-meaning" : "관계가 있는  상당하는  연관된  적절한", "synonyms" : "pertinent, germane, appicable", "antonym" : "unconnected, extraneous"},
    "willful": { "en-meaning" : "(adj.) stubbornly self-willed; done on purpose, deliberate", "ko-meaning" : "계획적인  옹고집의  외고집의", "synonyms" : "headstrong, obstinate, permediated", "antonym" : "docile, obedient, tractable"}
}

const words_4 = { 
    "bolster": { "en-meaning" : "(v.) to support, give a boost to; (n.) a long pillow or cushion; a supporting post", "ko-meaning" : "지지하다  보강하다  긴 배개", "synonyms" : "reinforce, buttress, validate", "antonym" : "undermine, weaken, impair"},
    "deplore": { "en-meaning" : "(v.) to feel or express regret or disapproval", "ko-meaning" : "한탄하다  개탄하다  슬퍼하다", "synonyms" : "lament, bemoan, bewail", "antonym" : "approve, commend, extol"},
    "frivolous": { "en-meaning" : "(adj.) of little importance, not worthy of serious attention; not meant seriously", "ko-meaning" : "하찮은  경박한  경솔한  사소한", "synonyms" : "silly, foolish, inane, petty", "antonym" : "serious, important, significant"},
    "obsess": { "en-meaning" : "(v.) to trouble, haunt, or fill the mind", "ko-meaning" : "사로잡히다  늘러붙다  붙어 다니다", "synonyms" : "preoccupy", "antonym" : "X"},

    "ornate": { "en-meaning" : "(adj.) elaborately decorated; showily splendid", "ko-meaning" : "화려하게 장식한  화려한", "synonyms" : "fancy, flashy, flamboyant", "antonym" : "plain, stark, austere"},
    "oust": { "en-meaning" : "(v.) to remove, drive out of a position or place", "ko-meaning" : "빼앗다  내쫓다  축출하다", "synonyms" : "expel, eject", "antonym" : "admit, welcome"},
    "peruse": { "en-meaning" : "(v.) to read thoroughly and carefully", "ko-meaning" : "통독하다  숙독하다  읽다", "synonyms" : "study, pore over, scrutinize", "antonym" : "X"},
    "prone": { "en-meaning" : "(adj.) lying face down; inclined, likely", "ko-meaning" : "경향이 있는", "synonyms" : "prostrate, liable", "antonym" : "standing upright, inlikely"},

    "residue": { "en-meaning" : "(n.) a remainder, that which remains when a part has been used up or removed", "ko-meaning" : "잔류물  잔존  잔여  찌꺼기", "synonyms" : "remnant, remains, leavings", "antonym" : "X"},
    "solicitous": { "en-meaning" : "(adj.) showing concern or care; fearful or anxious about someone or something", "ko-meaning" : "염려하는  걱정하는  열심인", "synonyms" : "concerned", "antonym" : "unconernced, indifferent, apathetic"},
    "staid": { "en-meaning" : "(adj.) serious and dignified; quiet or subdued in character or conduct", "ko-meaning" : "침착한  성실한  불변의", "synonyms" : "sedate, sober, prim", "antonym" : "gaudy, jaunty, unconventional"},
    "sustain": { "en-meaning" : "(v.) to support, nourish, keep up; to suffer, undergo; to bear up under, withstand; to affirm the validity of", "ko-meaning" : "지속하다  지탱하다  견디다  지지하다  부상을 입다", "synonyms" : "foster, uphold", "antonym" : "X"}
}

const words_5 = { 
    "ample": { "en-meaning" : "(adj.) more than enough, large, spacious", "ko-meaning" : "풍부  충분한  넓은", "synonyms" : "sufficient, adequate, condiserable", "antonym" : "insufficient, inadequate"},
    "assert": { "en-meaning" : "(v.) to declare or state as truth, maintain or defend, put forward forcefully", "ko-meaning" : "주장하다  단언하다  강력히 주장하다", "synonyms" : "affirm, avow", "antonym" : "X"},
    "disdain": { "en-meaning" : "(v.) to look upon with scorn; to refuse scornfully; (n.) a feeling of contempt", "ko-meaning" : "경멸하다  경멸  멸시하다", "synonyms" : "(v.) sprun, reject", "antonym" : "(v.) revere, venerate, esteem, respect"},
    "ethical": { "en-meaning" : "(adj.) having to do with morals, values, right and wrong; in accordance with standards of right conduct; requiring a prescription for purchase", "ko-meaning" : "윤리의  도덕의", "synonyms" : "upright, virtuous, honorable", "antonym" : "immoral, unscrupulous, dishonest"},

    "inaudible": { "en-meaning" : "(adj.) not able to be heard", "ko-meaning" : "들리지 않는  알아들을 수 없는  들을 수 없는", "synonyms" : "faint, indistinct", "antonym" : "audible, perceptible"},
    "indiscriminate": { "en-meaning" : "(adj.) without restraint or control; unselective", "ko-meaning" : "무차별의  닥치는 대로의  분간 없는", "synonyms" : "haphazard, random, uncritical", "antonym" : "selective, discriminating, judicious"},
    "intrigue": { "en-meaning" : "(n.) crafty dealings, underhanded plotting; (v.) to form and carry out plots; to puzzle or excite the curiosity", "ko-meaning" : "음모를 꾸미다  끌다  호기심을 돋우다", "synonyms" : "(n.)scheme, plot, conspiracy", "antonym" : "(n.)fair play"},
    "jurisdiction": { "en-meaning" : "(n.) an area of authority or control; the right to administer justice", "ko-meaning" : "사법권  관할권  권한", "synonyms" : "purview, supervision", "antonym" : "X"},

    "plausible": { "en-meaning" : "(adj.) appearing true, reasonable, or fair", "ko-meaning" : "그럴듯한  정말 같은  외양만 좋은", "synonyms" : "believe, probable", "antonym" : "improbable, unbelievable, unlikely"},
    "prodigal": { "en-meaning" : "(adj.) wastefully extravagant; lavishly or generously abundant; (n.) one who is wasteful and self-indulgent", "ko-meaning" : "낭비하는  방탕한  풍부한", "synonyms" : "(adj.)improvident; (n.)spendthrift, wastrel", "antonym" : "(adj.)frugal, economical, stingy, miserly"},
    "proximity": { "en-meaning" : "(n.) nearness, closeness", "ko-meaning" : "근접  가까움  접근", "synonyms" : "X", "antonym" : "distance, remoteness"},
    "volatile": { "en-meaning" : "(adj.) highly changeable, fickle; tending to become violent or explosive; changing readily from the liquid to the gaseous state", "ko-meaning" : "휘발성의  불안정한  휘발하는", "synonyms" : "unstable, erratic", "antonym" : "stable, steady, static, inert, dormant"}
}

const words_6 = { 
    "aloof": { "en-meaning" : "(adj.) withdrawn, standing apart from others (usually as a matter of choice)", "ko-meaning" : "냉담한  초연한  떨어져서", "synonyms" : "distant, cold;", "antonym" : "involved, sociable"},
    "anguish": { "en-meaning" : "(n.) great mental suffering, distress, or pain; (v.) to be deeply tormented by pain or sorrow", "ko-meaning" : "고통  괴로워하다  비통  분노  고민", "synonyms" : "(n.)misery, woe, torement", "antonym" : "(n.)joy, delight, peace of mind"},
    "articulate": { "en-meaning" : "(v.) to pronounce distinctly; to express well in words; to fit together into a system; (adj.) able to use language effectively; expressed clearly and forcefully", "ko-meaning" : "똑똑히 발음하다  체절 동물  음절로 나누다", "synonyms" : "(v.)expound,; (adj.)eloquent", "antonym" : "(adj.)tongue-tied, mumbled"},
    "defect": { "en-meaning" : "(n.) an imperfection, flaw, or blemish of some kind; (v.) to desert a cause or organization", "ko-meaning" : "결함  장애  탈주  이탈", "synonyms" : "X", "antonym" : "X"},

    "forthright": { "en-meaning" : "(adj.) frank, direct, straightforward", "ko-meaning" : "솔직한  똑바른  똑바로 앞으로", "synonyms" : "candid, blunt", "antonym" : "indirect, evasive, decetiful, two-faced"},
    "genial": { "en-meaning" : "(adj.) cordial, pleasantly cheerful or warm", "ko-meaning" : "친절한  온화한  따뜻한", "synonyms" : "friendly, amiable", "antonym" : "cold, unfriendly, unsociable"},
    "instill": { "en-meaning" : "(v.) to add gradually; to introduce or cause to be taken in", "ko-meaning" : "서서히 불어넣다  주입하다  주입시키다", "synonyms" : "implant, infuse, inculcate", "antonym" : "root out, eradicate, extirpate"},
    "ostracize": { "en-meaning" : "(v.) to exclude from a group, banish, send away", "ko-meaning" : "~을 추방하다  배척하다  절교하다", "synonyms" : "cast out, expel, blackball", "antonym" : "fraternize with, associate with"},

    "rehabilitate": { "en-meaning" : "(v.) to make over in good form; to restore to good condition or to a former position", "ko-meaning" : "명예를 회복시키다  사회로 복귀시키다  복직시키다", "synonyms" : "reclaim, rebuild, reform", "antonym" : "X"},
    "resolute": { "en-meaning" : "(adj.) bold, determined; firm", "ko-meaning" : "단호한  결의에 찬  의지가 굳은", "synonyms" : "steadfast, unflinching;" , "antonym" : "weak, spineless"},
    "retentive": { "en-meaning" : "(adj.) able to hold, keep, or recall; retaining knowledge easily", "ko-meaning" : "보유하는  기억력이 좋은  보존하는", "synonyms" : "X", "antonym" : "porous, forgetful"},
    "scapegoat": { "en-meaning" : "(n.) a person or thing carrying the blame for others", "ko-meaning" : "남의 죄를 대신 지는 사람  희생양  희생", "synonyms" : "whipping boy", "antonym" : "X"}
}

const words_7 = { 
    "acme": { "en-meaning" : "(n.) the highest point", "ko-meaning" : "절정  극치  전성기", "synonyms" : "summit, top, peak, pinnacle", "antonym" : "low point, bottom, nadir"},
    "attribute": { "en-meaning" : "(n.) a quality or characteristic belonging to or associated with someone or something; (v.) to assign to, credit with; to regard as caused by or resulting from", "ko-meaning" : "특성  원인으로 여기다  ~로 여기다  ~에 따른", "synonyms" : "(n.)trait; (v.)ascribe", "antonym" : ""},
    "belittle": { "en-meaning" : "(v.) to make something appear smaller than it is; to refer to in a way that suggests lack of importance or value", "ko-meaning" : "과소 평가하다  ~을 작게 하다  얕보다", "synonyms" : "minimize, underrate, disparage", "antonym" : "exaggerate, magnify, overestimate"},
    "convey": { "en-meaning" : "(v.) to transport; to transmit; to communicate, make known; to transfer ownership or title to", "ko-meaning" : "전달하다  전하다  나타내다  의미하다", "synonyms" : "carry, send, impart", "antonym" : "X"},

    "doctrine": { "en-meaning" : "(n.) a belief, principle, or teaching; a system of such beliefs or principles; a formulation of such beliefs or principles", "ko-meaning" : "원칙  독트린", "synonyms" : "X", "antonym" : "X"},
    "exotic": { "en-meaning" : "(adj.) foreign; charmingly unfamiliar or strikingly unusual", "ko-meaning" : "이국적인  이국풍의  외국의", "synonyms" : "strange, alien, picturesque, colorful", "antonym" : "native, indigenous, familiar, commonplace"},
    "juncture": { "en-meaning" : "(n.) a joining together; the point at which two things are joined; any important point in time", "ko-meaning" : "연결  접합  시점", "synonyms" : "union, seam, joint, turning point", "antonym" : "X"},
    "menial": { "en-meaning" : "(adj.) lowly, humble, lacking importance or dignity; (n.) a person who does the humble and unpleasant tasks", "ko-meaning" : "하인  머습  비천한", "synonyms" : "(n.)undreling, sculion, servant", "antonym" : "(adj.)lofty, elevated; (n.)boss, master"},

    "predatory": { "en-meaning" : "(adj.) preying on, plundering, or piratical", "ko-meaning" : "약탈하는  생물을 잡아먹는  육식하는", "synonyms" : "looting, pillaging, ravenous, rapacious", "antonym" : "X"},
    "ravage": { "en-meaning" : "(v.) to destroy, lay waste, ruin; (n.) ruinous damage, destruction", "ko-meaning" : "황폐 파괴  ~을 약탈하다", "synonyms" : "(v.)wreck, devastate", "antonym" : "(v.)spare"},
    "stance": { "en-meaning" : "(n.) a way of holding the body; an attitude or position on an issue", "ko-meaning" : "입장  자세  태도  전망  노선", "synonyms" : "posture, bearing", "antonym" : "X"},
    "unassuming": { "en-meaning" : "(adj.) not putting on airs, unpretentious; modest", "ko-meaning" : "주제넘지 않는  젠체하지 않는  겸손한", "synonyms" : "X", "antonym" : "ceoneited, pretentious, self-important"}
}
