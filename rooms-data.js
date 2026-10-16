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
            { label: "Definitely do", tone: "must", items: ["1", "2", "3"] },
                        { label: "If you are interested", tone: "could", items: ["4", "5"] }
          ]
        }
      },
      {
        id: "robot",
        x: 83, y: 53.3,
        label: "This week's tool",
        panel: {
          kicker: "Week 5 · Try it yourself",
          title: "Shake the spring",
          lead: "The experiment from the worksheet: a mass on a rubber band, a hand moving up and down at three different speeds. Same frequency out every time — only the size and the delay change.",
          list: [
            "Slow hand: the mass just follows",
            "The spring's own speed: 2.5× the swing, a quarter period late",
            "Fast hand: it barely moves, and goes the other way",
            "Then G(jω) predicts all of it without solving the ODE"
          ],
          links: [
            { label: "Open the demo", href: "tools/spring-frequency.html" },
            { label: "Last week: eigenvalues decide", href: "tools/phase-portrait.html" },
            { label: "Last week: two matrices", href: "tools/pendulum-matrices.html" }
          ],
          note: "Sinusoid in, sinusoid out: |G(jω)| is the stretch, ∠G(jω) the delay."
        }
      },
      {
        id: "today",
        x: 73.5, y: 44.9,
        label: "Today's exercise",
        panel: {
          kicker: "Week 5 · Today",
          title: "Transfer Functions",
          lead: "Last week the initial-condition response became easy to read. Today the forced response gets the same treatment.",
          list: [
            "Why a sinusoid comes out with exactly the frequency it went in with",
            "Feed in e^st and you get G(s)·e^st back: G(s) = C(sI − A)⁻¹B + D",
            "Stretch and delay from |G(jω)| and ∠G(jω); poles, zeros and interconnections"
          ],
          links: [
            { label: "Worksheet 5", href: "files/week-5-worksheet.pdf" },
            { label: "Worksheet 4", href: "files/week-4-worksheet.pdf" }
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
            { label: "This week's recap", href: "recaps/lecture-05.html" },
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
