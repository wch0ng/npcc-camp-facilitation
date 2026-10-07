// Scenario practice for the Camp Facilitator Training notes.
// The notes have no scenarios, so the situations and `consider` points are written for this app.
// They apply only the frameworks in the notes: general checks, briefing, what to observe,
// PEEP and the 4 Ts, Kolb's cycle, questioning techniques, the 5 questions and the stages of processing.

const FOUR_T = { id: 'manage', label: 'How will you manage the main risk?', options: ['Tolerate', 'Treat', 'Transfer', 'Terminate'] }

const PEEP = [
  { id: 'people', label: 'People', hint: 'Risks from the participants and staff.' },
  { id: 'environment', label: 'Environment', hint: 'Risks from the area, weather and surroundings.' },
  { id: 'equipment', label: 'Equipment', hint: 'Risks from the props, logistics and attire.' },
  { id: 'process', label: 'Process', hint: 'Risks from how the activity is run.' },
]

const FIVE_Q = [
  { id: 'notice', label: 'Did you notice…?' },
  { id: 'why', label: 'Why did that happen?' },
  { id: 'life', label: 'Does that happen in life?' },
  { id: 'how', label: 'How does that happen?' },
  { id: 'use', label: 'How can you use that?' },
]

export const SCENARIO_GROUPS = [
  {
    id: 'leading',
    title: 'Leading an activity',
    blurb: 'Run your checks, brief the group and know what to watch for.',
    module: 'leading',
    scenarios: [
      {
        id: 'la1', title: 'Situation 1 · The 2 pm field game',
        text: 'Your group of 15 is about to start a running game on the open field at 2 pm. The sun is out and there is no shade on the field. One participant looks pale and is sitting apart. Several are wearing watches and bracelets, and two are in slippers.',
        prompts: [
          { id: 'checks', label: 'Which general checks will you run, and what do you find?' },
          { id: 'do', label: 'What will you do before the game starts?' },
        ],
        consider: [
          'Go through the general checks in order: headcount, anyone not feeling well, hydration, area activity check, removal of accessories, check attire.',
          'Anyone not feeling well: speak to the pale participant before starting.',
          'Area activity check: sun / shade / shelter. Is the open field at 2 pm suitable and comfortable? Is there any danger?',
          'Have the group remove accessories, and check attire (the two in slippers) before the game.',
        ],
      },
      {
        id: 'la2', title: 'Situation 2 · The restless briefing',
        text: 'You are briefing a team-building activity. The ropes and planks are laid out next to the group. While you explain, some participants pick up the ropes and start swinging them, and a few drift towards the toilets.',
        prompts: [
          { id: 'fix', label: 'What went wrong with the set-up of this briefing?' },
          { id: 'brief', label: 'Rewrite your briefing. What must it cover?' },
        ],
        consider: [
          'During the briefing, don’t let participants wander off or fiddle with the props. Keep props away from the group until you are ready.',
          'Cover the objectives, state the constraints and rules, and highlight the safety considerations.',
          'Set a tentative target, with challenge by choice.',
          'Use eye contact, and think about your positioning as the facilitator so everyone can see and hear you.',
        ],
      },
      {
        id: 'la3', title: 'Situation 3 · One voice, one silence',
        text: 'During a problem-solving challenge, one participant takes charge and gives every instruction. Another participant, who suggested a good idea at the start, was ignored and has stopped talking. The group fails the first two attempts.',
        prompts: [
          { id: 'observe', label: 'What do you observe?' },
          { id: 'when', label: 'When and where will you facilitate the learning?' },
        ],
        consider: [
          'What to observe: mood of the group and individuals, team leader / follower, problem-solving effectiveness and group dynamics.',
          'The ignored idea is a teachable moment to bring up in the debrief.',
          'Facilitate immediately after the activity, at or near the activity area, in a circle.',
        ],
      },
    ],
  },
  {
    id: 'risk',
    title: 'Risk assessment',
    blurb: 'Identify risks with PEEP, then choose one of the 4 Ts.',
    module: 'rams',
    scenarios: [
      {
        id: 'rk1', title: 'Situation 1 · The night trail',
        text: 'Your camp has a night walk along a dimly lit path next to a monsoon drain. Groups of 10 walk with one facilitator each. Some participants have only their phone torches.',
        prompts: [...PEEP, FOUR_T],
        consider: [
          'People: headcount at the start and end, anyone not feeling well, the group spreading out in the dark.',
          'Environment: the monsoon drain, poor lighting, uneven ground.',
          'Equipment: are phone torches suitable and sufficient for the group?',
          'Process: group size per facilitator, where the facilitator is positioned, the route.',
          'Choose a T with reasons. For example, treat the risk (better torches, staying away from the drain side) or terminate the activity if it can’t be brought to an acceptable level.',
        ],
      },
      {
        id: 'rk2', title: 'Situation 2 · Dark clouds',
        text: 'Halfway through an outdoor station game on the field, the sky turns dark and you hear thunder in the distance. The participants want to finish the last two stations.',
        prompts: [...PEEP, FOUR_T],
        consider: [
          'Environment is the main risk: thunder means the open field is no longer a safe area.',
          'Safety is about keeping risks within an acceptable range. Can the risk be reasonably managed here?',
          'Terminate (stop or move the activity under shelter) is a valid choice. Participants wanting to continue does not change the risk.',
        ],
      },
      {
        id: 'rk3', title: 'Situation 3 · The trust fall',
        text: 'The programme includes a trust fall from a low platform. Two participants tell you privately that they are scared of falling, and one of them mentions a recent back injury.',
        prompts: [...PEEP, FOUR_T],
        consider: [
          'Risk includes emotional trauma, not only physical injury.',
          'People: the back injury is a physical risk; fear is an emotional risk.',
          'Challenge by choice: participants decide their own level of challenge.',
          'Treat the risk for the group (spotters, briefing, safety considerations) and decide separately for the injured participant.',
          'If a qualified Instructor runs the activity, tell them about the injury and the fears before it starts. They are in charge of safety during the activity.',
        ],
      },
    ],
  },
  {
    id: 'facilitate',
    title: 'Facilitating the debrief',
    blurb: 'Use questioning techniques, the 5 questions and the stages of processing.',
    module: 'facilitation',
    scenarios: [
      {
        id: 'fc1', title: 'Situation 1 · The blindfold maze',
        text: 'Your group just finished a blindfold maze. Only one sighted person could guide them. They took twice as long as other groups, and several people were shouting instructions at once. Plan your debrief using the 5 questions.',
        prompts: FIVE_Q,
        consider: [
          'Did you notice…? “Did you notice how many people were giving instructions at the same time?”',
          'Why did that happen? Let them explain the shouting and confusion.',
          'Does that happen in life? Connect it to school, CCA or camp.',
          'How does that happen? Explore what causes messages to get lost.',
          'How can you use that? Agree on what they will do differently next time.',
        ],
      },
      {
        id: 'fc2', title: 'Situation 2 · The silent circle',
        text: 'You gather the group in a circle and ask, “So, did you enjoy it?” Everyone says “Yes.” Then you ask, “What did you learn?” Nobody answers and people look at the ground.',
        prompts: [
          { id: 'wrong', label: 'Which questioning techniques were missed?' },
          { id: 'better', label: 'Write three better questions to open this debrief.' },
        ],
        consider: [
          'Start with a description question: “Can you describe what just happened?”',
          'A close-ended question (“Did you enjoy it?”) should always be followed by an open-ended one.',
          'Be specific: “What did you learn about communication?” instead of “What did you learn?”',
          'Use silence and eye contact. Give the group time before you jump in.',
        ],
      },
      {
        id: 'fc3', title: 'Situation 3 · Around the cycle',
        text: 'Your group has finished building a tower with straws and tape. The tower collapsed twice before it stood. Plan how you will take them around Kolb’s Experiential Learning Cycle.',
        prompts: [
          { id: 'reviewing', label: 'Reviewing', hint: 'How will you get them to reflect, describe and communicate what happened?' },
          { id: 'concluding', label: 'Concluding', hint: 'What conclusion or idea can they draw from it?' },
          { id: 'planning', label: 'Planning', hint: 'How will they apply this new learning next time?' },
          { id: 'transfer', label: 'Transfer of learning', hint: 'Where else in their life can this be used?' },
        ],
        consider: [
          'Experiencing is done: the tower challenge was the personal and group challenge.',
          'Reviewing: encourage individuals to reflect, describe, communicate and learn from the experience.',
          'Concluding: use models and theories to draw conclusions from past and present experiences.',
          'Planning: apply the new learning, for example to the next activity in camp.',
        ],
      },
      {
        id: 'fc4', title: 'Situation 4 · Choose the right question',
        text: 'Your group is stuck halfway through a challenge and arguing. You call a time-out. Later, after they finish, you run the full debrief and wrap up the day.',
        prompts: [
          { id: 'timeout', label: 'One question for the process time-out' },
          { id: 'end', label: 'One question at the end of the challenge' },
          { id: 'analysis', label: 'One question to start the processing / analysis' },
          { id: 'apply', label: 'One question to move from generalising to applying' },
          { id: 'consolidate', label: 'One question to consolidate' },
        ],
        consider: [
          'Time-out: “What is going on?” or “What do you need to do differently to be successful?”',
          'End of the challenge: “Who would recap what happened? Who else?” or “Who reacted differently?”',
          'Start of processing: “What impact did that event have on you?” or “How might it have been different?”',
          'Applying: “How could you apply that to your school / club setting?”',
          'Consolidating: “What were the plus / minus points?” or “If you had to do it all over again, what would you do?”',
        ],
      },
    ],
  },
  {
    id: 'conduct',
    title: 'Code of conduct',
    blurb: 'Apply your duties and the standard procedures.',
    module: 'conduct',
    scenarios: [
      {
        id: 'cc1', title: 'Situation 1 · Missing on the trail',
        text: 'Your sub-group is walking between game stations along a trail. When you arrive at the next station, you count 11 campers instead of 12. Nobody remembers when they last saw the missing camper.',
        prompts: [
          { id: 'now', label: 'What do you do right now?' },
          { id: 'prevent', label: 'How could this have been prevented?' },
        ],
        consider: [
          'Follow the standard procedure for a lost person: get the group to backtrack, and inform the Camp Organisers.',
          'Keep the rest of the group together while you search. Don’t lose a second camper.',
          'Prevention: do a roll-call after each activity, and position yourself so you can see the whole group while moving.',
        ],
      },
      {
        id: 'cc2', title: 'Situation 2 · The game that won’t end',
        text: 'You are the Activity Leader at a station. The group is close to solving the challenge, but they are already 10 minutes over time. The next group is waiting, and the group’s facilitator is checking the watch.',
        prompts: [
          { id: 'do', label: 'What do you do?' },
          { id: 'debrief', label: 'Which questions would you use in a quick debrief?' },
        ],
        consider: [
          'Keep each activity within its time. If it runs over, stop it, debrief the group and let them move on.',
          'A short debrief still helps: try “What went on?” and “What would you do differently to be successful?”',
          'The facilitator’s duty is to keep the sub-group on time, so work with them. The whole programme depends on it.',
          'Before the next group: make sure the station’s equipment is reset and accounted for.',
        ],
      },
    ],
  },
  {
    id: 'self',
    title: 'Self-reflection',
    blurb: 'Which hats and qualities will you bring to camp?',
    module: 'facilitator',
    scenarios: [
      {
        id: 'sf1', title: 'Reflection · Me as a Camp Facilitator',
        text: 'Think about the camp you will be facilitating. A Camp Facilitator puts on many hats and needs many qualities.',
        prompts: [
          { id: 'easy', label: 'Which hats come easily to you? Why?' },
          { id: 'hard', label: 'Which hats will be hardest for you? Why?' },
          { id: 'quality', label: 'Which characteristic will you work on before camp, and how?' },
        ],
        consider: [
          'Hats: Friend, Senior, Instructor, Facilitator, Care giver (Duty of Care), Disciplinarian, Safety Officer, Motivator, Games Master / Referee, Role Model, Listener, Observer.',
          'Switching between Friend and Disciplinarian is often the hardest. When does each one apply?',
          'Characteristics: safety consciousness, good communication skills, enthusiasm, dependability, patience, integrity, ability to cooperate, sportsmanship, open, honest, accountable, confidential.',
        ],
      },
    ],
  },
]

export const ALL_SCENARIOS = SCENARIO_GROUPS.flatMap((g) => g.scenarios.map((s) => ({ ...s, group: g.id })))
