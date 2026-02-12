const cast = {
  scrumMaster: "Scrum Master 😅",
  dev1: "Dev 1 🤓",
  dev2Now: "Dev 2 🫠",
  dev2Future: "Dev 2 😌",
  dev3Now: "Dev 3 😶",
  dev3Future: "Dev 3 😊",
  manager: "Manager 🧐",
  jira: "JIRA ⚙️",
  ai: "AI ✨",
};

export const scenes = [
  {
    id: "title",
    type: "title",
    text: "THE JIRA CHRONICLES",
    subtitle: "A tale of two timelines",
    emoji: "⏳",
  },
  {
    id: "standup-jira",
    type: "vs",
    era: "now",
    title: "The Daily Standup",
    panel: {
      scene: "🧍‍♂️🧍‍♀️🧍🧍‍♂️🧍‍♀️",
      dialogue: [
        {
          speaker: cast.scrumMaster,
          text: "Let's go around. What's your JIRA status?",
          color: "#ff6b6b",
        },
        {
          speaker: cast.dev1,
          text: "I moved PROJ-4872 from 'In Progress' to 'In Review' but then back to 'In Progress' because the acceptance criteria changed in a comment no one saw.",
          color: "#4ecdc4",
        },
        {
          speaker: cast.dev2Now,
          text: "I'm blocked by PROJ-4901 which is assigned to someone on PTO. I left a comment 3 days ago.",
          color: "#45b7d1",
        },
        {
          speaker: cast.dev3Now,
          text: "I spent 45 minutes yesterday updating ticket descriptions so the board looks accurate for the sprint review.",
          color: "#96ceb4",
        },
        {
          speaker: cast.scrumMaster,
          text: "Great. Let's do this again tomorrow. 👍",
          color: "#ff6b6b",
        },
      ],
      footnote: "⏱️ 28 minutes of life: gone",
    },
  },
  {
    id: "standup-ai",
    type: "vs",
    era: "future",
    title: "The AI-Native Morning",
    panel: {
      scene: "☕💻🤖✨",
      dialogue: [
        {
          speaker: cast.ai,
          text: "Morning team. Here's what I see: the auth flow is 90% there but there's an unspoken dependency on the design system migration. Also, the legacy API contract shifted Tuesday. The mocks are stale. I pinged the API team in Teams.",
          color: "#a29bfe",
        },
        {
          speaker: cast.dev1,
          text: "Oh wow, I didn't even realize the mocks were out of date.",
          color: "#4ecdc4",
        },
        {
          speaker: cast.ai,
          text: "Also, you've all been context-switching more than usual this week. Might be worth protecting Thursday for deep work.",
          color: "#a29bfe",
        },
        {
          speaker: cast.dev2Future,
          text: "...can we keep this thing? 🥺",
          color: "#45b7d1",
        },
      ],
      footnote: "⏱️ 4 minutes. Everyone actually informed.",
    },
  },
  {
    id: "estimation-jira",
    type: "vs",
    era: "now",
    title: "Sprint Planning",
    panel: {
      scene: "🃏🃏🃏🃏🃏",
      dialogue: [
        {
          speaker: cast.scrumMaster,
          text: "Planning poker time! How many points for this ticket?",
          color: "#ff6b6b",
        },
        { speaker: cast.dev1, text: "3", color: "#4ecdc4" },
        { speaker: cast.dev2Now, text: "3", color: "#45b7d1" },
        { speaker: cast.dev3Now, text: "5", color: "#96ceb4" },
        {
          speaker: cast.dev1,
          text: "I said 3 because last time I said 8 and got asked why it was so high. 😐",
          color: "#4ecdc4",
        },
        {
          speaker: cast.scrumMaster,
          text: "Looks like consensus! We'll go with 3. 👍",
          color: "#ff6b6b",
        },
      ],
      footnote: "🎭 Estimation Theater: where everyone performs confidence",
    },
  },
  {
    id: "estimation-ai",
    type: "vs",
    era: "future",
    title: "AI-Native Planning",
    panel: {
      scene: "📊🧠✨",
      dialogue: [
        {
          speaker: cast.ai,
          text: "Based on your last 6 months of similar work: this type of auth integration typically takes your team 4-6 days. But this one touches the legacy adapter, which has historically added ~40% more time due to undocumented edge cases.",
          color: "#a29bfe",
        },
        {
          speaker: cast.dev2Future,
          text: "That's... annoyingly accurate.",
          color: "#45b7d1",
        },
        {
          speaker: cast.ai,
          text: "I'd also flag: if you ship this alongside the onboarding redesign, there's a merge conflict pattern I've seen three times. Stagger by two days?",
          color: "#a29bfe",
        },
        {
          speaker: cast.dev1,
          text: "No one had to hold up a card for this. 🙌",
          color: "#4ecdc4",
        },
      ],
      footnote: "📈 Actual data. Zero theater.",
    },
  },
  {
    id: "ticket-jira",
    type: "vs",
    era: "now",
    title: "The Ticket Update Ritual",
    panel: {
      scene: "📝😩💀",
      dialogue: [
        {
          speaker: cast.dev1,
          text: "I need to update my tickets before end of day or the dashboard will look wrong for tomorrow.",
          color: "#4ecdc4",
        },
        {
          speaker: cast.dev2Now,
          text: "I have 14 subtasks across 3 epics. Two of them are duplicates but I'm afraid to close them because someone might be tracking them.",
          color: "#45b7d1",
        },
        {
          speaker: cast.dev3Now,
          text: "I just mass-moved everything to 'In Progress' so it looks like I'm not behind. I am behind. But now JIRA doesn't know that. 🤷",
          color: "#96ceb4",
        },
        {
          speaker: cast.jira,
          text: "✅ Board updated! Velocity: on track! 🎉",
          color: "#ff6b6b",
        },
      ],
      footnote:
        "📊 The dashboard is green. Everything is fine. Everything is fine.",
    },
  },
  {
    id: "ticket-ai",
    type: "vs",
    era: "future",
    title: "AI-Native Status",
    panel: {
      scene: "🔍🤖💡",
      dialogue: [
        {
          speaker: cast.ai,
          text: "End of day snapshot: The core auth flow shipped to staging. Edge case coverage is at 70%. There's a quiet risk: the error handling assumes the new API timeout values, but production still uses the old ones.",
          color: "#a29bfe",
        },
        {
          speaker: cast.ai,
          text: "Also, nobody updated anything. I observed the commits, the PR conversations, and the Teams thread where you debated the retry logic. That's your status.",
          color: "#a29bfe",
        },
        {
          speaker: cast.dev1,
          text: "I literally just... wrote code today? That's it? 😳",
          color: "#4ecdc4",
        },
        {
          speaker: cast.ai,
          text: "That's it. That's the job.",
          color: "#a29bfe",
        },
      ],
      footnote: "🎯 Status from the work itself. Revolutionary concept.",
    },
  },
  {
    id: "invisible-jira",
    type: "vs",
    era: "now",
    title: "The Invisible Work Problem",
    panel: {
      scene: "👻📉🫥",
      dialogue: [
        {
          speaker: cast.manager,
          text: "Looking at the sprint data, Dev 3 has the lowest velocity this quarter.",
          color: "#ff6b6b",
        },
        {
          speaker: cast.dev3Now,
          text: "(spent 30% of their time mentoring two junior devs, reviewed 40 PRs, redesigned the deployment runbook, and de-escalated a stakeholder conflict)",
          color: "#96ceb4",
        },
        {
          speaker: cast.jira,
          text: "I see 12 story points closed. That's what I have.",
          color: "#ddd",
        },
        {
          speaker: cast.dev3Now,
          text: "Cool. Cool cool cool. 🙃",
          color: "#96ceb4",
        },
      ],
      footnote: "🫥 If JIRA can't see it, it didn't happen",
    },
  },
  {
    id: "invisible-ai",
    type: "vs",
    era: "future",
    title: "The Visible Everything",
    panel: {
      scene: "🔮👁️✨💪",
      dialogue: [
        {
          speaker: cast.ai,
          text: "Team health report: Dev 3 was the connective tissue of the team this quarter. They unblocked 23 PRs with review turnaround under 2 hours, onboarded two new contributors who are now autonomous, and their deployment runbook reduced incident response time by 40%.",
          color: "#a29bfe",
        },
        {
          speaker: cast.ai,
          text: "Their 'velocity' looks low because the system was only counting tickets. The actual impact was multiplied across the entire team.",
          color: "#a29bfe",
        },
        {
          speaker: cast.manager,
          text: "...we need to promote this person. 😮",
          color: "#ff6b6b",
        },
        { speaker: cast.dev3Future, text: "🥹", color: "#96ceb4" },
      ],
      footnote: "👀 See all the work, not just the tickets",
    },
  },
  {
    id: "structure-jira",
    type: "vs",
    era: "now",
    title: "The Board Is Law",
    panel: {
      scene: "📋📋📋📋📋",
      dialogue: [
        {
          speaker: cast.manager,
          text: "If it's not on the board, it doesn't exist.",
          color: "#ff6b6b",
        },
        {
          speaker: cast.dev1,
          text: "I finished the API integration but I can't move the ticket because the subtasks are linked to an epic that's locked by another team's workflow.",
          color: "#4ecdc4",
        },
        {
          speaker: cast.dev2Now,
          text: "I created a ticket for the thing I did yesterday so it shows up in the sprint report. Backdated the start date. Don't tell anyone.",
          color: "#45b7d1",
        },
        {
          speaker: cast.dev3Now,
          text: "I spend more time maintaining the board than writing code. The board is my full-time job. Code is my side hustle. 💀",
          color: "#96ceb4",
        },
        {
          speaker: cast.jira,
          text: "Board health: ✅ Excellent! All tickets accounted for!",
          color: "#ddd",
        },
      ],
      footnote:
        "🏗️ The structure is pristine. The work is somewhere else entirely.",
    },
  },
  {
    id: "missed-jira",
    type: "vs",
    era: "future",
    title: "The Relapse",
    panel: {
      scene: "😳🤖📋✨",
      dialogue: [
        {
          speaker: cast.dev2Future,
          text: "Don't judge me but... I kind of miss having a board? Like, I just want to see everything laid out.",
          color: "#45b7d1",
        },
        {
          speaker: cast.dev1,
          text: "...did you just say you miss Jira? 😧",
          color: "#4ecdc4",
        },
        {
          speaker: cast.dev2Future,
          text: "NOT JIRA. Just... a board. A visual thing. Columns. Something I can look at.",
          color: "#45b7d1",
        },
        {
          speaker: cast.ai,
          text: "Say less. I generated one from this week's commits, PRs, and threads. Every item is real. Nothing is stale.",
          color: "#a29bfe",
        },
        {
          speaker: cast.dev2Future,
          text: "Okay. Yeah. This is better. Forget I said anything. 😅",
          color: "#45b7d1",
        },
      ],
      footnote:
        "📋 You can still have structure. It just stops being your job.",
    },
  },
  {
    id: "meta",
    type: "meta",
    title: "This Didn't Start With a Ticket.",
    subtitle:
      "It started as a conversation amongst people who live this every day — and became a story exploring what the future of work could look like.",
    steps: [
      {
        emoji: "😩",
        label: "Start with the pain",
        text: '"What would the world look like without Jira?" Not a better Jira. No Jira. That\'s where it started.',
      },
      {
        emoji: "🌀",
        label: "Imagine the absence",
        text: "Throw away every assumption. No tickets. No boards. No sprint rituals. Just: what do humans actually need to do great work?",
      },
      {
        emoji: "🤔",
        label: "Push back and refine",
        text: '"What about metrics?" "Teams still need structure." "Where\'s the accountability?" Every challenge makes the idea sharper, not weaker.',
      },
      {
        emoji: "🔧",
        label: "Experiment with AI",
        text: "This story took shape through real conversation, and then to ideating with AI.",
      },
      {
        emoji: "🤝",
        label: "Bring ideas together",
        text: "Challenge it. Poke holes. Add what's missing. Expand on each other's thinking until the idea is sharper than any one person could make it.",
      },
      {
        emoji: "⚡",
        label: "AI accelerates the build",
        text: "Instead of waiting on approvals and aligning schedules, quickly experiment with solutions and collaborate on next steps. AI as an accelerator, not a replacement.",
      },
    ],
    closing: null,
  },
  {
    id: "finale",
    type: "finale",
    title: "So What Could Change?",
    sections: [
      {
        type: "shifts",
        items: [
          {
            from: "Ticket velocity",
            to: "Team health",
            fromColor: "#ff6b6b",
            toColor: "#a29bfe",
          },
          {
            from: "Story points",
            to: "Actual outcomes",
            fromColor: "#ff6b6b",
            toColor: "#a29bfe",
          },
          {
            from: "Status theater",
            to: "Organizational awareness",
            fromColor: "#ff6b6b",
            toColor: "#a29bfe",
          },
          {
            from: "Burn-down charts",
            to: "Confidence signals",
            fromColor: "#ff6b6b",
            toColor: "#a29bfe",
          },
          {
            from: "Invisible work",
            to: "The full picture",
            fromColor: "#ff6b6b",
            toColor: "#a29bfe",
          },
        ],
      },
      {
        type: "punchline",
        text: "It starts the way this started. With a pain point, a question, and the willingness to reimagine the answer together. 🥹",
      },
      {
        type: "cta",
        text: "Ok so... let's talk about how we get rid of Jira forever. 😎",
      },
    ],
  },
];
