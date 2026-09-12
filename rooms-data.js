/* All the content for the room explorer.
   Edit this file to change what the dots say.

   x and y are percentages of the PHOTO (not the screen), measured from its
   top-left corner. Open the page with ?edit on the end of the URL to drag the
   dots where you want them and copy the new numbers out. */

window.ROOMS = [
  {
    id: "exercise",
    name: "Exercise room",
    place: "[Building], Room E24",
    photo: "images/exercise-room.jpg",
    when: "Thursdays, 10:15",
    hotspots: [
      {
        id: "screen",
        x: 82, y: 34.5,
        label: "This week",
        panel: {
          kicker: "Week 4 · On the screen",
          title: "Time response",
          lead: "What we are working through in Thursday's session.",
          list: [
            "First- and second-order systems",
            "Damping ratio ζ and natural frequency ωn",
            "Rise time, overshoot, and 2% settling time"
          ],
          links: [
            { label: "Worksheet 4", href: "#" },
            { label: "Recitation notes", href: "#" }
          ],
          note: "Solutions go up after Friday."
        }
      },
      {
        id: "seat",
        x: 63.5, y: 66.8,
        label: "Your seat",
        panel: {
          kicker: "Before you sit down",
          title: "Bring these",
          lead: "The session moves faster if you arrive with the worksheet already attempted.",
          list: [
            "Worksheet 4, printed or on a tablet",
            "Last week's solutions, for reference",
            "A calculator — no laptops needed this week"
          ],
          links: [
            { label: "Print worksheet 4", href: "#" },
            { label: "Worksheet 3 solutions", href: "#" }
          ]
        }
      },
      {
        id: "desk",
        x: 72.5, y: 45.8,
        label: "Ask a question",
        panel: {
          kicker: "Office hours",
          title: "Come and ask",
          lead: "Drop in with questions on homework, labs, or exam prep. No appointment needed.",
          list: [
            "Tuesday 14:00–16:00 · [Room]",
            "Thursday 10:00–12:00 · [Zoom link]"
          ],
          links: [
            { label: "Ask anonymously", href: "#" },
            { label: "Email me", href: "#" }
          ],
          note: "Question you would rather not ask out loud? Use the anonymous form."
        }
      },
      {
        id: "projector",
        x: 40, y: 12.4,
        label: "Slides",
        panel: {
          kicker: "From the projector",
          title: "Slides and recaps",
          lead: "Everything shown in the exercise sessions, week by week.",
          links: [
            { label: "Week 4 slides", href: "#" },
            { label: "All previous weeks", href: "#" }
          ]
        }
      },
      {
        id: "door",
        x: 7.2, y: 36,
        label: "Finding the room",
        panel: {
          kicker: "Room E24",
          title: "How to get here",
          lead: "Ground floor, through the glass-brick corridor. The door is marked E24.",
          list: [
            "Exercise session: Thursdays, 10:15–12:00",
            "Doors stay open — come in late if you have to"
          ],
          links: [{ label: "Campus map", href: "#" }]
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
