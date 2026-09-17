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
    place: "GLC, Room E24",
    photo: "images/exercise-room.jpg",
    when: "Fridays, 10:15",
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
          links: [{ label: "Open the polybox folder", href: "[polybox link]" }],
          note: "The link will stay the same all semester."
        }
      },
      {
        id: "books",
        x: 61.25, y: 57.4,
        label: "Further reading",
        panel: {
          kicker: "On the table",
          title: "If you want to go deeper",
          lead: "Optional, but useful when the lecture notes move faster than you would like.",
          list: [
            "bla",
            "bla",
            "bla"
          ],
          links: [{ label: "Full reading list", href: "[reading list link]" }]
        }
      },
      {
        id: "robot",
        x: 83, y: 53.3,
        label: "This week's tool",
        panel: {
          kicker: "Week 4 · Try it yourself",
          title: "Play with a second-order system",
          lead: "Drag the damping ratio and natural frequency, and watch the step response react.",
          list: [
            "Guess what happens before you drag anything",
            "Overshoot is set by ζ alone",
            "ωn only changes how fast it gets there"
          ],
          links: [{ label: "Open the tool", href: "#" }],
          note: "A different tool appears here each week, matched to the topic."
        }
      },
      {
        id: "today",
        x: 73.5, y: 44.9,
        label: "Today's exercise",
        panel: {
          kicker: "Week 4 · Today",
          title: "Time response",
          lead: "What we are working through in this session, and everything shown on screen.",
          list: [
            "First- and second-order systems",
            "Damping ratio ζ and natural frequency ωn",
            "Rise time, overshoot, and 2% settling time"
          ],
          links: [
            { label: "Worksheet 4", href: "#" },
            { label: "Slides", href: "#" }
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
            "Fridays 10:15–12:00, Room E24",
            "Attendance is optional",
            "Nothing is graded",
            "Missed one? You can access all material here"
          ],
          links: [
            { label: "Email me", href: "mailto:dyurtsever@ethz.ch" },
            { label: "Course page", href: "[Canvas link]" }
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
        x: 54, y: 24.5,
        label: "Lecture recording",
        panel: {
          kicker: "Every lecture",
          title: "Watch the recording",
          lead: "Recordings of the Wednesday lectures in ML D 28.",
          links: [{ label: "Open the recordings", href: "[recordings link]" }]
        }
      },
      {
        id: "recap",
        x: 47.3, y: 63.3,
        label: "Lecture recap",
        panel: {
          kicker: "AI-generated",
          title: "Lecture recaps",
          lead: "A short AI-generated summary of each lecture, for catching up or revising. If something looks off, the slides are the reference.",
          links: [
            { label: "This week's recap", href: "[current recap link]" },
            { label: "All recaps", href: "[recap list link]" }
          ]
        }
      },
      {
        id: "exam",
        x: 77, y: 48.7,
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
