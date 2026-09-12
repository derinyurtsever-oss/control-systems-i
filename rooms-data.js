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
    place: "[Building], Room E24",
    photo: "images/exercise-room.jpg",
    when: "Thursdays, 10:15",
    hotspots: [
      {
        id: "drive",
        x: 30.5, y: 64.8,
        label: "Course drive",
        panel: {
          kicker: "polybox",
          title: "Everything in one folder",
          lead: "Every worksheet, solution and slide deck from the exercise sessions lives here.",
          list: [
            "Worksheets and solutions, week by week",
            "Slides from each session",
            "Formula sheet and reference material"
          ],
          links: [{ label: "Open the polybox folder", href: "[polybox link]" }],
          note: "Worth bookmarking — the link stays the same all semester."
        }
      },
      {
        id: "books",
        x: 61.3, y: 60.3,
        label: "Further reading",
        panel: {
          kicker: "On the table",
          title: "If you want to go deeper",
          lead: "Optional, but useful when the lecture notes move faster than you would like.",
          list: [
            "[Textbook, author, edition] — the main reference",
            "[Second reference] — stronger on worked examples",
            "Copies are on reserve at [library]"
          ],
          links: [{ label: "Full reading list", href: "[reading list link]" }]
        }
      },
      {
        id: "robot",
        x: 83.5, y: 54.7,
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
        x: 73.8, y: 44.8,
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
        x: 6.5, y: 35.1,
        label: "Admin",
        panel: {
          kicker: "Exercise sessions",
          title: "How the sessions run",
          lead: "The practical details: when, where, and what actually counts towards your grade.",
          list: [
            "Thursdays 10:15–12:00, Room E24",
            "Attendance is [required / optional]",
            "Worksheets are not graded — the homework is",
            "Missed one? The material goes up the same day"
          ],
          links: [
            { label: "Email me", href: "[your.email@university.edu]" },
            { label: "Course page", href: "[Canvas link]" }
          ]
        }
      }
    ]
  },

  {
    id: "lecture",
    name: "Lecture hall",
    place: "[Building], Main auditorium",
    photo: "images/lecture-hall.jpg",
    when: "Mondays and Wednesdays, 08:15",
    hotspots: [
      {
        id: "screen",
        x: 39.5, y: 42,
        label: "Lecture recap",
        panel: {
          kicker: "Last lecture · Monday",
          title: "Second-order systems",
          lead: "The short version, in case you missed it or want a reminder before the exercise session.",
          list: [
            "Every second-order system is set by just ζ and ωn",
            "ζ alone fixes the overshoot — ωn only sets the speed",
            "Settling time ≈ 4 / (ζ·ωn), the rule you will use constantly"
          ],
          links: [
            { label: "Full lecture notes", href: "#" },
            { label: "Recording", href: "#" }
          ],
          note: "If only one thing sticks: overshoot is about ζ, speed is about ωn."
        }
      },
      {
        id: "lectern",
        x: 49, y: 50.3,
        label: "The lecturer",
        panel: {
          kicker: "Teaching team",
          title: "[Prof. Name]",
          lead: "Lectures Monday and Wednesday. I run the Thursday exercise session.",
          list: [
            "Lecturer office hours: [day and time]",
            "Exercise session questions come to me"
          ],
          links: [
            { label: "Syllabus", href: "#" },
            { label: "Course page", href: "#" }
          ]
        }
      },
      {
        id: "recordings",
        x: 63.75, y: 51.8,
        label: "Recordings",
        panel: {
          kicker: "Every lecture",
          title: "Watch it back",
          lead: "Recordings usually appear within a day of the lecture.",
          links: [
            { label: "This week's recording", href: "#" },
            { label: "Full archive", href: "#" }
          ]
        }
      },
      {
        id: "seats",
        x: 65, y: 75,
        label: "Lecture notes",
        panel: {
          kicker: "From the seats",
          title: "Notes and readings",
          lead: "What to read alongside each lecture.",
          list: [
            "Chapter 4 — time response",
            "Worked examples 4.3 to 4.9",
            "Skip section 4.8 for now, it comes back in week 9"
          ],
          links: [{ label: "Reading list", href: "#" }]
        }
      },
      {
        id: "clock",
        x: 53.2, y: 42.8,
        label: "Schedule",
        panel: {
          kicker: "Week 4 of 15",
          title: "What is coming up",
          lead: "Lectures Monday and Wednesday 08:15. Exercise session Thursday 10:15.",
          list: [
            "Homework 3 due Friday, 23:59",
            "Midterm 1 on Tuesday 6 October, covering weeks 1–6"
          ],
          links: [{ label: "Add to your calendar", href: "#" }]
        }
      }
    ]
  }
];
