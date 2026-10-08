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
          // tone: "must" (red), "should" (orange) or "could" (purple)
          tiers: [
            { label: "Definitely do", tone: "must", items: ["1", "2"] },
            { label: "If you have time", tone: "should", items: ["3", "4", "5"] },
            { label: "If you are interested", tone: "could", items: ["6"] }
          ]
        }
      },
      {
        id: "robot",
        x: 83, y: 53.3,
        label: "This week's tool",
        panel: {
          kicker: "Week 4 · Try it yourself",
          title: "Eigenvalues decide",
          lead: "Two demos this week. First the pendulum linearized at both equilibria: one sign apart, two completely different futures. Then the phase portrait, with eigenvalues you can drag.",
          list: [
            "Hanging vs balanced: A₀ rings down, A_π leaves",
            "Full response = initial condition + forced, live",
            "Drag the eigenvalues: spiral in, spiral out, circle, saddle",
            "The page 10 stability tree, filled in as you move"
          ],
          links: [
            { label: "Two matrices, two futures", href: "tools/pendulum-matrices.html" },
            { label: "Eigenvalues decide", href: "tools/phase-portrait.html" },
            { label: "Last week: the linear pendulum", href: "tools/linearization.html" }
          ],
          note: "Real part: in or out. Imaginary part: how much it turns."
        }
      },
      {
        id: "today",
        x: 73.5, y: 44.9,
        label: "Today's exercise",
        panel: {
          kicker: "Week 4 · Today",
          title: "Time response, Stability",
          lead: "Last week we linearized the pendulum at the bottom and at the top. Today: what those two A matrices actually do over time.",
          list: [
            "Full response = initial-condition response + forced response",
            "The matrix exponential and phase portraits of ẋ = Ax",
            "Read stability off the eigenvalues: Lyapunov, asymptotic, BIBO"
          ],
          links: [
            { label: "Worksheet 4", href: "files/week-4-worksheet.pdf" },
            { label: "Worksheet 3", href: "files/week-3-worksheet.pdf" }
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
            { label: "This week's recap", href: "recaps/lecture-04.html" },
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
