const cast = {
  scrumMaster: "Scrum Master 😅",
  dev1: "Dev 1 🤓",
  dev2Now: "Dev 2 🫠",
  dev2Future: "Dev 2 😌",
  dev3Now: "Dev 3 😶",
  dev3Future: "Dev 3 🥲",
  manager: "Manager 🧐",
  jira: "JIRA ⚙️",
  ai: "AI ✨",
};

const palette = {
  scrumMaster: "#ff5a36",
  dev1: "#2d5f4e",
  dev2Now: "#5b7a99",
  dev2Future: "#3d5a78",
  dev3Now: "#8a9d7d",
  dev3Future: "#6b8e5a",
  manager: "#b8624a",
  jira: "#6b6b6b",
  ai: "#5d52a8",
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
          color: "#ff5a36",
        },
        {
          speaker: cast.dev1,
          text: "I moved PROJ-4872 from 'In Progress' to 'In Review' but then back to 'In Progress' because the acceptance criteria changed in a comment no one saw.",
          color: "#2d5f4e",
        },
        {
          speaker: cast.dev2Now,
          text: "I'm blocked by PROJ-4901 which is assigned to someone on PTO. I left a comment 3 days ago.",
          color: "#5b7a99",
        },
        {
          speaker: cast.dev3Now,
          text: "I spent 45 minutes yesterday updating ticket descriptions so the board looks accurate for the sprint review.",
          color: "#8a9d7d",
        },
        {
          speaker: cast.scrumMaster,
          text: "Great. Let's do this again tomorrow. 👍",
          color: "#ff5a36",
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
          color: "#5d52a8",
        },
        {
          speaker: cast.dev1,
          text: "Oh wow, I didn't even realize the mocks were out of date.",
          color: "#2d5f4e",
        },
        {
          speaker: cast.ai,
          text: "Also, you've all been context-switching more than usual this week. Might be worth protecting Thursday for deep work.",
          color: "#5d52a8",
        },
        {
          speaker: cast.dev2Future,
          text: "...can we keep this thing? 🥺",
          color: "#5b7a99",
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
          color: "#ff5a36",
        },
        { speaker: cast.dev1, text: "3", color: "#2d5f4e" },
        { speaker: cast.dev2Now, text: "3", color: "#5b7a99" },
        { speaker: cast.dev3Now, text: "5", color: "#8a9d7d" },
        {
          speaker: cast.dev1,
          text: "I said 3 because last time I said 8 and got asked why it was so high. 😐",
          color: "#2d5f4e",
        },
        {
          speaker: cast.scrumMaster,
          text: "Looks like consensus! We'll go with 3. 👍",
          color: "#ff5a36",
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
          color: "#5d52a8",
        },
        {
          speaker: cast.dev2Future,
          text: "That's... annoyingly accurate.",
          color: "#5b7a99",
        },
        {
          speaker: cast.ai,
          text: "I'd also flag: if you ship this alongside the onboarding redesign, there's a merge conflict pattern I've seen three times. Stagger by two days?",
          color: "#5d52a8",
        },
        {
          speaker: cast.dev1,
          text: "No one had to hold up a card for this. 🙌",
          color: "#2d5f4e",
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
          color: "#2d5f4e",
        },
        {
          speaker: cast.dev2Now,
          text: "I have 14 subtasks across 3 epics. Two of them are duplicates but I'm afraid to close them because someone might be tracking them.",
          color: "#5b7a99",
        },
        {
          speaker: cast.dev3Now,
          text: "I just mass-moved everything to 'In Progress' so it looks like I'm not behind. I am behind. But now JIRA doesn't know that. 🤷",
          color: "#8a9d7d",
        },
        {
          speaker: cast.jira,
          text: "✅ Board updated! Velocity: on track! 🎉",
          color: "#ff5a36",
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
          color: "#5d52a8",
        },
        {
          speaker: cast.ai,
          text: "Also, nobody updated anything. I observed the commits, the PR conversations, and the Teams thread where you debated the retry logic. That's your status.",
          color: "#5d52a8",
        },
        {
          speaker: cast.dev1,
          text: "I literally just... wrote code today? That's it? 😳",
          color: "#2d5f4e",
        },
        {
          speaker: cast.ai,
          text: "That's it. That's the job.",
          color: "#5d52a8",
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
          color: "#ff5a36",
        },
        {
          speaker: cast.dev3Now,
          text: "(spent 30% of their time mentoring two junior devs, reviewed 40 PRs, redesigned the deployment runbook, and de-escalated a stakeholder conflict)",
          color: "#8a9d7d",
        },
        {
          speaker: cast.jira,
          text: "I see 12 story points closed. That's what I have.",
          color: "#6b6b6b",
        },
        {
          speaker: cast.dev3Now,
          text: "Cool. Cool cool cool. 🙃",
          color: "#8a9d7d",
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
          color: "#5d52a8",
        },
        {
          speaker: cast.ai,
          text: "Their 'velocity' looks low because the system was only counting tickets. The actual impact was multiplied across the entire team.",
          color: "#5d52a8",
        },
        {
          speaker: cast.manager,
          text: "...we need to promote this person. 😮",
          color: "#ff5a36",
        },
        { speaker: cast.dev3Future, text: "🥹", color: "#8a9d7d" },
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
          color: "#ff5a36",
        },
        {
          speaker: cast.dev1,
          text: "I finished the API integration but I can't move the ticket because the subtasks are linked to an epic that's locked by another team's workflow.",
          color: "#2d5f4e",
        },
        {
          speaker: cast.dev2Now,
          text: "I created a ticket for the thing I did yesterday so it shows up in the sprint report. Backdated the start date. Don't tell anyone.",
          color: "#5b7a99",
        },
        {
          speaker: cast.dev3Now,
          text: "I spend more time maintaining the board than writing code. The board is my full-time job. Code is my side hustle. 💀",
          color: "#8a9d7d",
        },
        {
          speaker: cast.jira,
          text: "Board health: ✅ Excellent! All tickets accounted for!",
          color: "#6b6b6b",
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
          color: "#5b7a99",
        },
        {
          speaker: cast.dev1,
          text: "...did you just say you miss Jira? 😧",
          color: "#2d5f4e",
        },
        {
          speaker: cast.dev2Future,
          text: "NOT JIRA. Just... a board. A visual thing. Columns. Something I can look at.",
          color: "#5b7a99",
        },
        {
          speaker: cast.ai,
          text: "Say less. I generated one from this week's commits, PRs, and threads. Every item is real. Nothing is stale.",
          color: "#5d52a8",
        },
        {
          speaker: cast.dev2Future,
          text: "Okay. Yeah. This is better. Forget I said anything. 😅",
          color: "#5b7a99",
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
    subtitle: "This started with a conversation.",
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
        text: '"What about metrics?" "Teams still need structure." "Where\'s the accountability?" Every challenge makes the idea sharper.',
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
            fromColor: "#6b6b6b",
            toColor: "#2d5f4e",
          },
          {
            from: "Story points",
            to: "Actual outcomes",
            fromColor: "#6b6b6b",
            toColor: "#2d5f4e",
          },
          {
            from: "Status theater",
            to: "Real visibility",
            fromColor: "#6b6b6b",
            toColor: "#2d5f4e",
          },
          {
            from: "Burn-down charts",
            to: "Honest forecasts",
            fromColor: "#6b6b6b",
            toColor: "#2d5f4e",
          },
          {
            from: "Invisible work",
            to: "The full picture",
            fromColor: "#6b6b6b",
            toColor: "#2d5f4e",
          },
        ],
      },
      {
        type: "punchline",
        text: "This is about giving people back the space to do what they're actually good at.",
      },
      {
        type: "cta",
        text: "So how do we delete Jira? 😎",
      },
    ],
  },
  {
    id: "credits",
    type: "credits",
    title: "Meet the Cast",
    characters: [
      {
        emoji: "😅",
        name: "Scrum Master",
        description: "Just following the process. Somebody has to, right?",
        color: "#ff5a36",
      },
      {
        emoji: "🤓",
        name: "Dev 1",
        description:
          "Eager, still learning, still trying to prove themselves. Not burned out yet.",
        color: "#2d5f4e",
      },
      {
        emoji: "🫠",
        name: "Dev 2 (Jira)",
        description: "Drowning in process overhead.",
        color: "#5b7a99",
        arcEmoji: "😌",
        arcName: "Dev 2 (AI Future)",
        arcDescription:
          "Finds contentment when the process finally stops fighting the work.",
      },
      {
        emoji: "😶",
        name: "Dev 3 (Jira)",
        description:
          "The quiet hero. Does the invisible work no ticket ever captures.",
        color: "#8a9d7d",
        arcEmoji: "🥲",
        arcName: "Dev 3 (AI Future)",
        arcDescription: "Finally seen.",
      },
      {
        emoji: "🧐",
        name: "Manager",
        description:
          "Lives in dashboards. Slowly learning to see people instead of metrics.",
        color: "#ff5a36",
      },
      {
        emoji: "⚙️",
        name: "JIRA",
        description: "No soul. Just columns and swimlanes.",
        color: "#6b6b6b",
      },
      {
        emoji: "✨",
        name: "AI",
        description: "The new teammate. Sees everything, judges nothing.",
        color: "#5d52a8",
      },
    ],
  },
];
