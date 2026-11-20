/* All the content for the room explorer.
   Edit this file to change what the dots say.

   x and y are percentages of the PHOTO (not the screen), measured from its
   top-left corner. Open the page with ?edit on the end of the URL to drag the
   dots where you want them and copy the new numbers out.

   Anything in [square brackets] is still a placeholder — it shows up
   highlighted on the page until you replace it. */

window.ROOMS = [
  {
    id: "exercise",
    name: "Exercise room",
    place: "LFW B2",
    photo: "images/exercise-room.jpg",
    when: "Fridays, 10:15–12:00",
    hotspots: [
      {
        id: "drive",
        x: 30.3, y: 60.8,
        label: "Course drive",
        panel: {
          kicker: "polybox",
          title: "Everything in one folder",
          lead: "Every worksheet, solution and slide deck from the exercise sessions lives here.",
          list: [
            "Worksheets and solutions, week by week",
            "Slides from each session",
            "Cheat sheet and reference material"
          ],
          links: [{ label: "Open the polybox folder", href: "https://polybox.ethz.ch/index.php/s/imtwa4ZjMFykYSi" }],
          note: "The link will stay the same all semester."
        }
      },
      {
        id: "books",
        x: 61.25, y: 57.4,
        label: "This week's homework",
        panel: {
          kicker: "Homework",
          title: "This week's homework",
          lead: "Start at the top and work down as far as your time allows.",
          // One entry per week, oldest first. The last one is the current week and opens first,
          // so a new week just gets added at the bottom. tiers: [] means no homework that week,
          // and pending: true means it has not been announced yet ("coming soon").
          // tone: "must" (red), "should" (orange) or "could" (purple)
          weeks: [
            { week: 1, tiers: [] },
            { week: 2, tiers: [
              { label: "Definitely do", tone: "must", items: ["1", "4"] },
              { label: "If you have time", tone: "should", items: ["2", "3"] }
            ] },
            { week: 3, tiers: [
              { label: "Definitely do", tone: "must", items: ["1", "2"] },
              { label: "If you have time", tone: "should", items: ["3"] }
            ] },
            { week: 4, tiers: [
              { label: "Definitely do", tone: "must", items: ["1", "2"] },
              { label: "If you have time", tone: "should", items: ["3", "4", "5"] },
              { label: "If you are interested", tone: "could", items: ["6"] }
            ] },
            { week: 5, tiers: [
              { label: "Definitely do", tone: "must", items: ["1", "2", "3"] },
              { label: "If you are interested", tone: "could", items: ["4", "5"] }
            ] },
            { week: 6, tiers: [
              { label: "Definitely do", tone: "must", items: ["1", "2", "3"] },
              { label: "If you have time", tone: "should", items: ["4", "5", "6"] }
            ] },
            { week: 7, tiers: [
              { label: "Definitely do", tone: "must", items: ["1", "2", "3", "5"] },
              { label: "If you have time", tone: "should", items: ["4", "6"] }
            ] },
            { week: 8, tiers: [
              { label: "Definitely do", tone: "must", items: ["1", "2", "3"] }
            ] },
            { week: 9, tiers: [
              { label: "Definitely do", tone: "must", items: ["1", "2"] },
              { label: "If you have time", tone: "should", items: ["5"] },
              { label: "If you are interested", tone: "could", items: ["3", "4"] }
            ] },
            { week: 10, pending: true, tiers: [] }
          ]
        }
      },
      {
        id: "robot",
        x: 83, y: 53.3,
        label: "This week's tool",
        panel: {
          kicker: "Week 9 · Try it yourself",
          title: "From arrow to Bode plot",
          lead: "The first block on page 8: one pole, G(s) = 1/(s + 1). Walk s = jω up the imaginary axis and watch the arrow from the pole draw the Bode plot.",
          list: [
            "|G| = 1 / arrow length, ∠G = − arrow angle",
            "ω = 0.2, 1, 5: the three arrows from the sheet",
            "At the corner: √2 long, 45°, so −3 dB and −45°",
            "Far above it: 10× higher, 10× longer, −20 dB per decade"
          ],
          links: [
            { label: "Open the demo", href: "tools/bode-pole.html" },
            { label: "Week 5: shake the spring", href: "tools/spring-frequency.html" }
          ],
          note: "Every other block in the Bode alphabet works the same way: a zero is the same arrow, upside down."
        }
      },
      {
        id: "today",
        x: 73.5, y: 44.9,
        label: "Today's exercise",
        panel: {
          kicker: "Week 9 · Today",
          title: "Frequency Response, Bode Plot, Polar Plot",
          lead: "A step response is only one test. Real signals keep oscillating, so today we ask how a system reacts to every frequency at once.",
          list: [
            "Back to the rubber band: each experiment is one complex number G(jω)",
            "From three frequencies to all of them, on log axes and in decibels",
            "Multiplying becomes adding: the Bode alphabet of building blocks",
            "Two complex poles, and the polar plot"
          ],
          links: [
            { label: "Worksheet 9", href: "files/week-9-worksheet.pdf" },
            { label: "Worksheet 8", href: "files/week-8-worksheet.pdf" }
          ],
          note: "Solutions go up straight after the session."
        }
      },
      {
        id: "admin",
        x: 7, y: 36,
        label: "Admin",
        panel: {
          kicker: "Exercise sessions",
          title: "How the sessions run",
          lead: "The practical details: when, where, and what actually counts towards your grade.",
          list: [
            "Fridays 10:15–12:00, LFW B2",
            "Attendance is optional",
            "Nothing is graded",
            "Missed one? You can access all material here"
          ],
          links: [
            { label: "Email me", href: "mailto:dyurtsever@ethz.ch" },
            { label: "Course page", href: "https://idsc.ethz.ch/education/lectures/control-systems-i.html" }
          ]
        }
      }
    ]
  },

  {
    id: "lecture",
    name: "Lecture hall",
    place: "ML D 28",
    photo: "images/lecture-hall.jpg",
    when: "Wednesdays, 16:15–18:00",
    hotspots: [
      {
        id: "recording",
        x: 46.75, y: 49.5,
        label: "Lecture recording",
        panel: {
          kicker: "Every lecture",
          title: "Watch the recording",
          lead: "Recordings of the Wednesday lectures in ML D 28.",
          links: [{ label: "Open the recordings", href: "https://video.ethz.ch/lectures/d-mavt/2026/autumn/151-0591-00L" }]
        }
      },
      {
        id: "recap",
        x: 46.75, y: 27.8,
        label: "Lecture recap",
        panel: {
          kicker: "AI-generated",
          title: "Lecture recaps",
          lead: "A short AI-generated summary of each lecture, for catching up or revising. If something looks off, the slides are the reference.",
          links: [
            { label: "This week's recap", href: "recaps/lecture-10.html" },
            { label: "All recaps", href: "recaps/" }
          ]
        }
      },
      {
        id: "exam",
        x: 72.5, y: 55.1,
        label: "Exam date",
        panel: {
          kicker: "Exam",
          title: "Exam date: TBD",
          lead: "The date will be posted here as soon as it is fixed."
        }
      }
    ]
  }
];
