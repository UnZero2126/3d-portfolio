# Railey · 3D Portfolio

A dark, responsive, static portfolio built with HTML, CSS, and JavaScript. No build, database, account system, API key, or paid service is required. Includes six clearly labeled original sample projects, still galleries, a real silent MP4 turntable, and an original GLB model.

## Start here

1. Extract the ZIP into a folder such as `C:\Users\YourName\Documents\3d-portfolio`.
2. Open `index.html` in Edge or Chrome to view the ordinary gallery immediately.
3. For interactive 3D, use the local server instructions below.
4. Edit `js/profile.js` to personalize your biography, skills, software and contact details.
5. Edit `js/projects.js` to replace or add artwork. You do not need to edit the gallery code.
6. Replace the samples before using the site for applications. They are demonstration assets, not claims about your work or software experience.

## Files and folders

| Path | Purpose |
| --- | --- |
| `index.html` | Page sections, navigation, headings and dialog container |
| `css/style.css` | Colors, typography, layouts, mobile rules and reduced-motion support |
| `js/profile.js` | Name, introduction, biography, profile image, skills, education, experience, email, social links |
| `js/projects.js` | The single editable list of artwork projects |
| `js/app.js` | Automatically builds filters/cards/details and handles media loading |
| `assets/images/` | Thumbnails, renders, alternate views and fallback image |
| `assets/videos/` | MP4 animations and optional VTT subtitle files |
| `assets/models/` | GLB files, or GLTF plus its BIN/textures |
| `assets/profile/` | Brand icon and your future profile images |
| `.nojekyll` | Tells GitHub Pages to serve the static files directly |
| `.gitignore` | Keeps Blender source files, secrets, dependencies and OS clutter out of Git |
| `LICENSE.md` | Code/sample asset usage and third-party viewer attribution |
| `VALIDATION.md` | Checks completed and verification limits |

The supplied repository uses branch `main`. The ZIP includes Git history. The intended remote is `https://github.com/UnZero2126/3d-portfolio.git`. Hidden files may be invisible in Explorer; do not delete them.

## Upload artwork by category

Both `assets/images/` and `assets/models/` contain these subfolders:

- `environment/`
- `characters/`
- `hardsurfacemodel/`
- `sculpt/`
- `props/`
- `other-projects/` (Other Projects; hyphenated for simple web paths)

Upload renders into the matching images folder and GLB models into the matching models folder. For example, use `assets/images/characters/my-character-front.webp` and `assets/models/characters/my-character.glb`. You can create a project subfolder within a category to keep multiple views or GLTF dependencies together.

In GitHub, open the category folder, choose **Add file → Upload files**, then commit the upload. Empty categories contain a `.gitkeep` file so GitHub keeps the folder visible; it is not artwork.

Uploading files does not automatically add gallery cards. After uploading, send the filenames, project title, thumbnail choice, and category so the project list can be connected, or edit `js/projects.js` yourself. Use `Sculpt` as a gallery category for sculpting projects. Videos remain in `assets/videos/`; the shared missing-image fallback remains at `assets/images/fallback.svg`.

## Run locally on Windows

**Quickest:** double-click `index.html`. Ordinary images, filtering and project dialogs work without a server. Models should be tested over HTTP, not `file://`.

**Recommended:** install Python 3 from https://www.python.org/downloads/windows/ if needed. Open the extracted folder in Explorer, type `powershell` into the address bar and press Enter. Run:

```powershell
py -m http.server 8000
```

Visit http://localhost:8000 in your browser. Keep PowerShell open while previewing. Stop with Ctrl+C. If `py` is not found, try `python -m http.server 8000`. An alternative is VS Code's Live Server extension: open the project folder and use **Open with Live Server** on `index.html`.

## Add images from Blender

1. Set a camera and lighting. In Blender's Output Properties set your desired resolution, for example 1920 × 1600 for a main render or 1200 × 1000 for a thumbnail.
2. Render with F12. In the Render Result window choose **Image → Save As**. Save PNG for a lossless master or JPEG for a smaller web image. Blender's interface can vary by version.
3. Keep master images outside the website. Export an optimized JPEG/WebP copy using your image editor. Aim for roughly 150–500 KB per thumbnail and under 1 MB per large render when practical; these are recommendations, not platform limits. PNG is fine for transparency but often larger.
4. Put files in the appropriate category subfolder, such as `assets/images/characters/`. Use lowercase, descriptive, hyphenated filenames: `robot-front.webp`, `robot-back.webp`, `robot-wireframe.webp`.
5. Edit the project object in `js/projects.js`:

```javascript
thumbnail: 'assets/images/characters/robot-front.webp',
images: [
  { src: 'assets/images/characters/robot-front.webp', alt: 'Robot — front view' },
  { src: 'assets/images/characters/robot-back.webp', alt: 'Robot — rear view' },
  { src: 'assets/images/characters/robot-wireframe.webp', alt: 'Robot — topology breakdown' }
],
```

The `thumbnail` is the card and hero preview. The `images` list controls the order of large images in the detail view. Use meaningful alt text; it also becomes the visible caption. A failed image is replaced with `fallback.svg`, without breaking other projects. For a simple replacement, overwrite an existing image with the same filename and extension. Otherwise update the path. Renaming `photo.png` to `photo.webp` does NOT convert its format.

## Add a new project

Open `js/projects.js`. Copy the first complete object (from its opening `{` to its matching `},`) and paste it inside the `window.PROJECTS = [ ... ];` list. Use a unique `id`, for example `my-robot`. The URL becomes `#project/my-robot`; this link works on GitHub Pages without server routing.

Here is a complete example using the already included files. Replace paths and descriptions with your actual artwork:

```javascript
{
  id: 'my-first-project',
  title: 'My First Project',
  category: 'Props',
  description: 'Describe your goal, your process, and what you contributed.',
  thumbnail: 'assets/images/other-projects/orbit.webp',
  images: [
    { src: 'assets/images/other-projects/orbit.webp', alt: 'Front view' },
    { src: 'assets/images/other-projects/orbit-detail.webp', alt: 'Alternate view' }
  ],
  videos: [{
    src: 'assets/videos/orbit-turntable.mp4',
    poster: 'assets/images/other-projects/orbit.webp',
    caption: '360-degree turntable',
    captions: ''
  }],
  embeds: [],
  model: 'assets/models/other-projects/orbit.glb',
  modelPoster: 'assets/images/other-projects/orbit.webp',
  software: ['Blender', 'Substance 3D Painter'],
  type: 'Personal project',
  credits: '',
  year: '2026',
  featured: false,
  placeholder: true
},
```

Change `placeholder` to `false` only after replacing all sample content. Set `featured: true` on one project to put it in the hero; the first featured project wins. If none is featured, the first project is used. Reorder blocks to reorder the gallery. Delete a complete block to remove it. Keep commas between blocks and strings in quotes. Use `\'` for an apostrophe inside a single-quoted string, or wrap that string in double quotes.

Filters are built automatically. Use `Character Art`, `Hard Surface`, `Props`, `Environments`, `Sculpt`, or `Other Projects`. You can add any other category by typing it into `category`; matching is case-sensitive. Empty optional fields are hidden. Use `images: []`, `videos: []`, `embeds: []`, `model: ''`, `software: []`, or omit those properties entirely. Every project should have an id, title, category, description, and thumbnail.

## MP4 videos and turntables

1. Export your animation as MP4 with H.264 video and yuv420p pixel format for broad browser support. AAC is appropriate for audio. Web browsers do not reliably play Blender source files, AVI, or every MOV codec.
2. Put the MP4 into `assets/videos/`, for example `robot-turntable.mp4`.
3. Save a representative still frame to `assets/images/characters/robot-poster.webp`.
4. Update the project's video list:

```javascript
videos: [{
  src: 'assets/videos/robot-turntable.mp4',
  poster: 'assets/images/characters/robot-poster.webp',
  caption: 'Robot turntable — modeling and texturing by me',
  captions: ''
}],
```

Videos display a poster and native playback controls. They do not autoplay or download in full on page load, and pause when their detail view closes. The included turntable is silent. If your video contains speech, provide a WebVTT captions file, set `captions: 'assets/videos/robot-en.vtt'`, and ensure text is synchronized.

For Blender animation, render an image sequence first if you want a recoverable export, then encode it through Blender's Video Sequencer or an encoder such as HandBrake. For a portfolio, 720p/1080p H.264 and short clips are often sufficient. Aim for 5–20 MB per clip; this is a practical target, not a requirement.

For long showreels, host the video on YouTube or Vimeo and add:

```javascript
embeds: [{
  url: 'https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID',
  title: 'My showreel'
}],
```

Replace `YOUR_VIDEO_ID` with the real ID. Vimeo uses `https://player.vimeo.com/video/YOUR_VIDEO_ID`. Ordinary watch-page links are not embed URLs. Only supported YouTube/Vimeo embed addresses are accepted. External video content loads after the visitor clicks **Load external video**. Do not add this example unchanged; it is not a real video.

GitHub blocks individual Git files larger than 100 MiB; browser uploads have a smaller limit (25 MiB). GitHub Pages sites must stay within the published site limit (1 GB); bandwidth has a 100 GB/month soft limit. Large video libraries are a poor fit. Git LFS is not a solution for serving media on GitHub Pages. Compress, shorten, or externally embed large videos. Keep `.blend` masters outside this repository.

Official limits: https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github and https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits . Check these if limits change.

## Interactive 3D models

The site loads Google's open-source `<model-viewer>` (pinned version 4.1.0) from a public CDN only when **Explore in 3D** is clicked. It needs no API key, subscription or backend. Internet access and a WebGL-capable browser are needed. If the library, model, or rendering cannot load, a still preview remains available.

1. In Blender, make a web-friendly copy of your model. Apply intended transforms, remove unused objects, and simplify excessive geometry.
2. Use glTF-compatible PBR materials. Bake complex procedural materials into textures; Blender-specific nodes may not export as expected. Prefer modest texture dimensions (often 1024 or 2048 pixels).
3. Choose **File → Export → glTF 2.0** and select **glTF Binary (.glb)**. Export selected objects if needed. Enable animation export when relevant. Menu details can vary by Blender version.
4. Put it in `assets/models/characters/robot.glb`. A GLB normally packs mesh and textures into one file.
5. Set:

```javascript
model: 'assets/models/characters/robot.glb',
modelPoster: 'assets/images/characters/robot-front.webp',
```

No extra configuration is needed for a standard GLB. The provided `orbit.glb` is a real sample to test rotation/zoom. This site supports model inspection; use an MP4 for reliable animation playback, as no animation-selection UI is included.

For `.gltf`, keep its referenced `.bin` and texture files in the relative locations encoded by the export. Upload ALL of them. Set `model: 'assets/models/characters/robot/scene.gltf'`. A missing texture or BIN can break the viewer. Prefer GLB for a beginner workflow. `.blend`, `.fbx`, `.obj`, and `.stl` are not accepted directly by this viewer; convert them to glTF/GLB first. Aim for a few MB per model when practical. Always test on a phone.

An external model may require CORS permission on its host. Local relative model paths avoid that issue. The CDN viewer is the only optional runtime library; ordinary portfolio content works without it. You may self-host a tested model-viewer distribution later by changing its script URL in `js/app.js`; preserve its license.

Viewer documentation: https://modelviewer.dev/docs/ . Blender glTF guide: https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html .

## Personalize the artist information

Edit `js/profile.js`. `name` updates the header, page title, and footer. `nickname` sets the artist alias (currently `LUMN`) in the header and page title. `intro`, `bio`, `skills` and `software` are ordinary text/list entries. `education` and `experience` are hidden when empty. All current skills and copy are editable samples; confirm them before publishing for recruitment.

Put your image in `assets/profile/portrait.webp` and set `image` to that path. Set `imageAlt` to a useful description. Enter your actual email in `email`; it becomes a clickable email link. Enter full HTTPS social URLs. Empty social URLs are clearly marked **ADD YOUR LINK**, not fake links. Remove a social object if you do not want it displayed.

To fully rebrand, edit `name` and `nickname` in `js/profile.js`, update the fallback branding in `index.html` and the favicon in `assets/profile/mark.svg`, and update the page description in `index.html`. Hero headings and other section copy also live in `index.html`. Colors are the named variables at the top of `css/style.css`.

## Preview before publishing

Start the local server and check:

- All six categories/filters work and the correct cards appear.
- Clicking each card opens its project; Escape and Close dismiss it.
- Tab reaches links, filters, and dialog controls with a visible outline.
- Images, MP4 playback, and model rotation work. Test the viewer while online.
- Empty optional fields do not show unwanted sections.
- Your email/social links go to the correct destination.
- Use Edge/Chrome DevTools device mode to check 390px mobile, 768px tablet, and desktop widths. Verify there is no horizontal overflow.
- Check DevTools Console and Network for errors/404s.

Reduced-motion users get no decorative transitions. Project dialogs use native modal focus containment. Images have alt text. Model/video controls are user-initiated. Do not rely on color alone in the artwork descriptions.

## Create the GitHub repository and enable free Pages

Authentication and write access were confirmed for `UnZero2126/3d-portfolio`. Source upload is supported; Pages settings are not exposed by the available connector. A source upload does not by itself mean the website is live. For this existing repository, start at step 7 below to enable Pages. The creation commands are for recreating the project in a new empty repository, not for running again on the existing repository.

For the cleanest Windows setup after upload, install Git and run:

```powershell
git clone https://github.com/UnZero2126/3d-portfolio.git
cd 3d-portfolio
py -m http.server 8000
```

### Browser steps (no GitHub CLI needed)

1. Sign in to GitHub and open https://github.com/new .
2. Choose your personal account and repository name `3d-portfolio`.
3. Choose **Public** for free GitHub Pages on a free personal plan. Do not add a README, license, or `.gitignore` because this project already contains files.
4. Click **Create repository**.
5. Install Git for Windows from https://git-scm.com/download/win if it is missing. Open a new PowerShell window in the extracted project folder.
6. Run these commands (replace identity placeholders with your own name and GitHub no-reply email; do not enter a fake email):

```powershell
git status
git config user.name "YOUR NAME"
git config user.email "YOUR GITHUB NO-REPLY EMAIL"
git branch -M main
git remote add origin https://github.com/UnZero2126/3d-portfolio.git
git push -u origin main
```

Complete the browser authentication prompt from Git Credential Manager. Do not paste passwords or access tokens into source code. If `origin` already exists, use `git remote set-url origin https://github.com/UnZero2126/3d-portfolio.git` instead of `remote add`.

If your ZIP tool omitted `.git`, initialize first:

```powershell
git init -b main
git config user.name "YOUR NAME"
git config user.email "YOUR GITHUB NO-REPLY EMAIL"
git add .
git commit -m "Create 3D artist portfolio"
```

Then run the remote and push commands above.

7. In GitHub, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main**, select **/(root)**, and click **Save**.
8. Wait for the Pages deployment in the **Actions** tab to succeed. Open the URL shown by **Settings → Pages** and test it. The expected address is `https://UnZero2126.github.io/3d-portfolio/`; this is an expected address, NOT a verified live URL.

The site uses relative asset paths and hash-based project detail URLs, so the `/3d-portfolio/` prefix works. No custom domain or build action is required.

### Optional GitHub CLI method

Install the official GitHub CLI and Git, then reopen PowerShell. Inside this project run:

```powershell
gh auth login
gh repo create 3d-portfolio --public --source=. --remote=origin --push
gh api --method POST repos/UnZero2126/3d-portfolio/pages -f "source[branch]=main" -f "source[path]=/"
gh api repos/UnZero2126/3d-portfolio/pages --jq .html_url
```

Use this method instead of creating the same repository twice. If Pages already exists, use Settings → Pages to confirm its source. A returned URL alone is not proof the deployment has completed; wait for the Pages build and open it.

## Update the live website

Edit files, preview locally, and run in PowerShell:

```powershell
git status
git add .
git commit -m "Update portfolio artwork"
git push
```

GitHub Pages rebuilds after each push to `main`. Wait for its deployment to complete, then refresh the live page. Keep changes on one computer or run `git pull --ff-only` before starting work on another. If Git reports conflicts, do not force push; resolve the named files first.

## Common problems

| Problem | Fix |
| --- | --- |
| Image missing on GitHub but works on Windows | Match filename capitalization exactly. GitHub paths are case-sensitive. Use `/`, not Windows backslashes. |
| All cards disappear after editing | Check `js/projects.js` for a missing comma, quote or bracket. Open the Console to find the line. Undo the last edit and retry. |
| Thumbnail looks cropped | Cards crop deliberately with `object-fit: cover`. Leave room around your model or adjust `.card img` to `object-fit: contain`. Large project images are contained. |
| Video does not play | Export MP4 H.264/yuv420p, verify its path, reduce size, test locally. MP4 is a container; an unsupported codec can still fail. |
| Model does not appear | Use HTTP preview, check the GLB path, allow CDN access, confirm WebGL works. For GLTF, upload BIN and textures. A Blender file is not a web model. |
| Large push rejected | Compress or remove the oversized asset before committing. If already committed, removing it in a later commit does not remove the earlier blob; fix the local unpushed commit/history before retrying. Do not force push casually. |
| 404 after publishing | Verify main / root Pages source, repository visibility, successful deployment and `index.html` at repository root. |
| Old version still appears | Wait for deployment, then use Ctrl+F5. Replacing assets with new filenames can help avoid stale caches. |
| No local Python command | Install Python or use VS Code Live Server. Restart the terminal after installation. |
| Contacts do nothing | Empty contact fields are intentional placeholders. Add your real email/HTTPS URLs in `profile.js`. |
| A filter is duplicated | Correct inconsistent spelling/case in `category`. |
| Two projects open the same content | Give each project a unique `id`. |

No visitor tracking, cookies, form backend, analytics or paid services are included. Clicking an external social/video link goes to that service, whose own policies apply.
