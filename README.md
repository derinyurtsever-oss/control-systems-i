# Control Systems I - Teaching Assistant Site

A static course-support site for students in Control Systems I: office hours,
recitation materials, and resources. No build step, no dependencies - plain
HTML, CSS, and a few lines of JavaScript, served by GitHub Pages.

## Live site

https://controls.derinyurtsever.com

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure: the photo stage, the dots, and the panel. |
| `rooms-data.js` | All the content. Edit this to change what the dots say and where they sit. |
| `rooms.css` | Styling. The `:root` block at the top holds colors and fonts. |
| `rooms.js` | Places the dots on the photo, switches rooms, fills the panels. |
| `images/` | The room photos. |
| `files/` | Worksheets and anything else students download. |
| `tools/` | The interactive demos linked from the dots. |
| `recaps/` | The AI lecture recaps and their index. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is, skipping Jekyll. |
| `CNAME` | The custom domain. Managed by GitHub Settings -> Pages; do not edit by hand. |

## Filling in the placeholders

Text still waiting on real content is wrapped in `<span class="ph">...</span>`
and shows up highlighted in orange on the page. To fill one in, replace the
whole span with the real text:

```html
<!-- before -->
Teaching Assistant: <strong><span class="ph">[Your Name]</span></strong>

<!-- after -->
Teaching Assistant: <strong>Derin Yurtsever</strong>
```

When every placeholder is gone the highlighting disappears on its own. The
`.ph` rule can then be deleted from `styles.css`.

## Editing locally

Open `index.html` in a browser - that is the whole workflow. For a local
server that reloads cleanly:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Publishing an update

```bash
git add -A
git commit -m "Update office hours"
git push
```

GitHub Pages redeploys within about a minute.

## Adding course files (PDFs, slides)

Put them in a `files/` folder and link to them relatively:

```html
<a href="files/week3-worksheet.pdf">Worksheet</a>
```

Keep in mind the repository is public - only post material that is cleared
for public distribution, and check course policy before posting solutions.
