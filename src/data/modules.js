// Course modules — from reference/Camp Facilitation.pdf (Introduction to Camp Facilitator Training, SSO 2016).
// Section blocks: { type: 'text' | 'points' | 'chips' | 'terms' | 'steps' | 'quote' | 'acrostic' | 'table' | 'part' | 'cycle' }

export const MODULES = [
  {
    id: 'facilitator',
    num: 1,
    title: 'The Camp Facilitator',
    tagline: 'The roles you play and the qualities you need',
    icon: 'Tent',
    objectives: [
      'Understand why Camp Facilitators matter to a camp',
      'Know the different roles (hats) a Camp Facilitator puts on',
      'Know the characteristics of a good Camp Facilitator',
    ],
    sections: [
      {
        type: 'text',
        heading: 'Camp Facilitator',
        text: 'Training camp can be a very memorable experience for any camper. To create a positive experience for campers, Camp Facilitators are responsible for making sure the camp runs smoothly and that every camper has an exciting time in the camp.',
      },
      {
        type: 'chips',
        heading: 'Role of a Camp Facilitator',
        intro: 'In a camp, a Camp Facilitator often plays different roles, switching from one to another. In different settings, the Camp Facilitator puts on a different hat.',
        items: ['Friend', 'Senior', 'Instructor', 'Facilitator', 'Care giver (Duty of Care)', 'Disciplinarian', 'Safety Officer', 'Motivator', 'Games Master / Referee', 'Role Model', 'Listener', 'Observer'],
      },
      {
        type: 'text',
        heading: 'Your responsibilities',
        text: 'Your responsibilities include overall supervision of your campers and ensuring their well-being and safety while they are enjoying the fun and rewarding experience of training camp. As a Camp Facilitator you will be with your campers 24 hours a day, making sure they eat meals, attend day and evening activities and are getting to sleep at night.',
      },
      {
        type: 'chips',
        heading: 'Characteristics of a Camp Facilitator',
        intro: 'Camp Facilitators are at the front line of a camp, and very often a Camp Facilitator has the power to make or break a camp. There are many important qualities that a good Camp Facilitator should possess.',
        items: ['Safety consciousness', 'Good communication skills', 'Enthusiasm', 'Dependability', 'Patience', 'Integrity', 'Ability to cooperate', 'Sportsmanship', 'Open', 'Honest', 'Accountable', 'Confidential'],
      },
    ],
  },
  {
    id: 'leading',
    num: 2,
    title: 'Leading an Activity',
    tagline: 'Checks, briefing, observing and safety',
    icon: 'Flag',
    objectives: [
      'Run the general and logistics checks before an activity',
      'Brief an activity clearly and safely',
      'Know what to observe, and where and when to facilitate learning',
    ],
    sections: [
      {
        type: 'text',
        heading: 'Leading activity',
        text: 'Part of the job scope of a Camp Facilitator is to lead activities. The Camp Facilitator sets the tone for the activity. Often, the success of the activity depends on the Camp Facilitator.',
      },
      {
        type: 'points',
        heading: '1 · General checks',
        points: [
          'Headcount',
          'Anyone not feeling well',
          'Hydration',
          'Area activity check: sun / shade / shelter, suitability, comfort, danger',
          'Removal of accessories',
          'Check attire',
        ],
      },
      {
        type: 'points',
        heading: '2 · Logistics / equipment',
        points: ['Sufficient logistics for the group', 'Suitability of equipment'],
      },
      {
        type: 'points',
        heading: '3 · Knowing the activity',
        points: [
          'Briefing of the activity: don’t let participants wander off or fiddle with the props',
          'Objectives',
          'State the constraints and the rules',
          'Highlight the safety considerations',
          'Set a tentative target: challenge by choice',
        ],
      },
      {
        type: 'points',
        heading: '4 & 5 · Eye contact and positioning',
        points: ['Eye contact', 'Positioning of the Facilitator'],
      },
      {
        type: 'chips',
        heading: '6 · What to observe',
        items: ['Safety', 'Mood of the group and individuals', 'Teachable moments', 'Team leader / follower', 'Problem-solving effectiveness', 'Group dynamics'],
      },
      {
        type: 'acrostic',
        heading: '7 · Safety (RAMS): identifying risks',
        items: [
          ['P', 'People'],
          ['E', 'Environment'],
          ['E', 'Equipment'],
          ['P', 'Process'],
        ],
      },
      {
        type: 'points',
        heading: '8 · Facilitating learning outcomes',
        points: ['Immediately after the activity, if possible', 'At or near the activity area, if possible', 'In a circle'],
      },
    ],
  },
  {
    id: 'rams',
    num: 3,
    title: 'Risk Assessment (RAMS)',
    tagline: 'Identifying and managing risks',
    icon: 'ShieldAlert',
    objectives: [
      'Know what RAMS is for',
      'Define risk and safety',
      'Identify risks with People, Equipment, Environment, Process',
      'Know the four ways to manage risks',
    ],
    sections: [
      {
        type: 'text',
        heading: 'Risk Assessment Management System',
        text: 'The Risk Assessment Management System (RAMS) provides organisations with a useful tool to systematically identify possible hazards of an activity or work process, and take reasonably practicable measures to eliminate or reduce the potential risks to an acceptable level.',
      },
      {
        type: 'quote',
        text: 'A responsible camp committee will offer activities that serve the camp’s mission and that have physical and emotional risks that all staff and participants can reasonably manage.',
      },
      {
        type: 'terms',
        heading: 'Definitions',
        items: [
          { term: 'Risk', def: ['Exposure to the possibility of some loss, including physical or emotional trauma'] },
          { term: 'Safety', def: ['The collective procedures used to keep risks and losses within an acceptable range'] },
        ],
      },
      {
        type: 'acrostic',
        heading: 'Strategy for identifying risks',
        items: [
          ['P', 'People'],
          ['E', 'Equipment'],
          ['E', 'Environment'],
          ['P', 'Process'],
        ],
      },
      {
        type: 'steps',
        heading: 'Managing risks',
        intro: 'Having identified the risks and evaluated them, the next step is to manage them. Now that we know the risks involved, we have to decide what is next.',
        steps: ['Tolerate', 'Treat', 'Transfer', 'Terminate'],
      },
    ],
  },
  {
    id: 'facilitation',
    num: 4,
    title: 'Facilitation',
    tagline: 'The experiential learning cycle and questioning',
    icon: 'RefreshCcw',
    objectives: [
      'Know what facilitation is and why we facilitate',
      'Know the stages of Kolb’s Experiential Learning Cycle',
      'Use questioning techniques, including the 5 questions',
      'Know the props and techniques for facilitating',
    ],
    sections: [
      {
        type: 'text',
        heading: 'What is facilitation?',
        text: 'To facilitate is to help something (usually a process) move along, to make something easier. Through facilitation, the instructor provides subtle “boosts” to help participants through a series of experiences which combine to create a desired effect.',
      },
      {
        type: 'text',
        heading: 'Why facilitate?',
        text: 'In general, the goals of facilitation often include participants analysing and better understanding their thoughts, feelings and behaviours. This aids their experiential learning cycle.',
      },
      {
        type: 'cycle',
        heading: 'David Kolb’s Experiential Learning Cycle',
        stages: [
          { title: 'Experiencing', text: 'Outdoor activities: personal and group challenges' },
          { title: 'Reviewing', text: 'Encourage individuals to reflect, describe, communicate and learn from the experience' },
          { title: 'Concluding', text: 'Use of models and theories to draw conclusions from past and present experiences' },
          { title: 'Planning', text: 'Applying new learning from previous experiences' },
        ],
        outer: 'Transfer of Learning',
      },
      { type: 'part', label: 'How', title: 'How to facilitate' },
      {
        type: 'points',
        heading: 'Key ideas',
        points: ['There is always a learning outcome in facilitation.', '4th generation of facilitation: front loading.'],
      },
      {
        type: 'points',
        heading: 'Questioning techniques',
        points: [
          'Silence',
          'Eye contact',
          'Start with a description question: “Can you describe what just happened?”',
          'A close-ended question should always be followed up with an open-ended question.',
          'Be specific in your questions: “What did you learn about communication?” instead of “What did you learn?”',
        ],
      },
      {
        type: 'steps',
        heading: 'The 5 questions',
        steps: ['Did you notice…?', 'Why did that happen?', 'Does that happen in life?', 'How does that happen?', 'How can you use that?'],
      },
      {
        type: 'table',
        heading: 'Props & different techniques',
        cols: ['Technique', 'Good for', 'How it works'],
        rows: [
          ['Missing Person', 'Objective setting', 'Lay a rope shaped like a person in the middle of the circle. The group pictures the team member they are missing and what that person would bring.'],
          ['Happy Chart', 'Wrapping up / end of the day', 'Agree on about 10 key moments. Each person draws a line graph of how they felt through them, then the group compares the ups and downs.'],
          ['Pebbles', 'Seeing how the group gets along', 'Use pebbles to stand for the people in the group. Arrange them to show how you see the group and where you are in it, then arrange them again to show how you would like the group to be.'],
          ['Empathy Test', 'Paired activities', 'Guess how your partner felt during the activity, then check with them. It also works as a quick mood check.'],
          ['Roving Mic', 'Recalling key moments', 'The group replays key moments of the activity while a “reporter” with a pretend mic interviews people to bring out what happened.'],
          ['Talking Knots', 'Giving everyone a fair turn to speak', 'Stand in a circle holding a rope with a knot in it. Only the person with the knot in front of them speaks, then passes it on.'],
          ['Horse Shoe', 'Scale of 1 to 10', 'Stand along a curved line from 1 to 10 to show your view, check with your neighbours, then talk about why you stand there.'],
          ['Spokes', 'Rating progress towards a team goal', 'Ropes are laid like the spokes of a wheel, with the goal at the centre. Move in or out along your spoke to show how well you did, and invite others closer by naming what they did well.'],
          ['Hokey Pokey', 'New teams; recognising what went well', 'Often done around a rope circle, to bring out what the group and each person did well.'],
        ],
      },
    ],
  },
  {
    id: 'questions',
    num: 5,
    title: 'Suggested Questions',
    tagline: 'What to ask at each stage of a debrief',
    icon: 'MessagesSquare',
    objectives: [
      'Know the stages of processing an activity, in order',
      'Pick suitable questions for each stage',
    ],
    sections: [
      {
        type: 'steps',
        heading: 'The flow of processing',
        steps: ['During a process time-out', 'At the end of the challenge', 'At the start of the processing / analysis', 'From processing to generalising', 'Generalising leads to applying', 'Consolidating'],
      },
      {
        type: 'points',
        heading: 'During a process time-out',
        points: [
          'What is going on?',
          'How do you feel (or think) about that?',
          'What do you need to know…?',
          'What are you intending to do?',
          'Could you be more specific?',
          'Could you offer a suggestion?',
          'Which are the areas that you are not satisfied with…?',
          'Can you say that in another way?',
          'What is the worst / best case that could happen?',
          'What helpful / unhelpful actions were inhibited by…?',
          'What do you need to do differently to be successful…?',
        ],
      },
      {
        type: 'points',
        heading: 'At the end of the challenge',
        points: [
          'Who would state / recap what happened? Who else?',
          'What went on / happened?',
          'Who else is feeling the same way?',
          'Who else had the same experience?',
          'Who reacted differently?',
          'Were there any surprises / puzzlement?',
          'How many felt differently?',
          'What did you observe? What else?',
          'What were you aware of?',
        ],
      },
      {
        type: 'points',
        heading: 'At the start of the processing / analysis',
        points: [
          'What impact / effect did that event have on you?',
          'What was your reaction when X did…?',
          'How did you account for that?',
          'What does that mean to you?',
          'How was that significant?',
          'How do those fit together?',
          'How might it have been different?',
          'What do you understand better about yourself / your group?',
        ],
      },
      {
        type: 'points',
        heading: 'From processing to generalising',
        points: [
          'What was your intention by that action?',
          'Did you get that result?',
          'What might we draw from that?',
          'Is that plugging in or linking to anything?',
          'How does this relate to other experiences in your school setting?',
        ],
      },
      {
        type: 'points',
        heading: 'Generalising leads to applying',
        points: [
          'How could you apply / transfer that to your school / club setting?',
          'What would you like to do with that?',
          'How could you make it better?',
          'What would be the consequences of doing / not doing that?',
        ],
      },
      {
        type: 'points',
        heading: 'Consolidating',
        points: [
          'How was that for you?',
          'What were the plus / minus points?',
          'How might it have been more meaningful?',
          'What changes would you make?',
          'What could you continue to do?',
          'If you had to do it all over again, what would you do?',
        ],
      },
    ],
  },
]

export const moduleById = Object.fromEntries(MODULES.map((m) => [m.id, m]))
