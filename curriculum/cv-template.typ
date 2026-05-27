// Shared CV template - clean, single-column, ATS-friendly.
// Usage: #import "cv-template.typ": *  then call #cv(...)

#let accent = rgb("#1f3a5f")
#let muted = rgb("#555555")
#let rule-color = rgb("#dddddd")

#let cv(
  name: "",
  headline: "",
  location: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  portfolio: none,
  body,
) = {
  set document(title: name + " CV", author: name)
  set page(
    paper: "a4",
    margin: (x: 1.6cm, y: 1.4cm),
  )
  set text(
    font: ("Inter", "Helvetica Neue", "Helvetica", "Arial"),
    size: 10pt,
    fill: rgb("#222222"),
  )
  set par(justify: false, leading: 0.65em)
  set block(spacing: 0.9em)

  // Header
  block[
    #text(size: 22pt, weight: "bold", fill: accent)[#name] \
    #v(-0.2em)
    #text(size: 11pt, fill: muted)[#headline]
  ]

  // Contact line
  let sep = text(fill: muted)[ #sym.bullet ]
  let parts = (
    location,
    link("mailto:" + email)[#email],
    phone,
    link("https://" + linkedin)[#linkedin],
    link("https://" + github)[#github],
  )
  if portfolio != none {
    parts.push(link("https://" + portfolio)[#portfolio])
  }
  block(above: 0.4em, below: 0.6em)[
    #text(size: 9pt, fill: muted)[#parts.join(sep)]
  ]

  line(length: 100%, stroke: 0.5pt + rule-color)
  v(0.2em)

  body
}

// Section heading
#let section(title) = {
  v(0.4em)
  block[
    #text(size: 11pt, weight: "bold", fill: accent, tracking: 0.6pt)[#upper(title)]
    #v(-0.4em)
    #line(length: 100%, stroke: 0.4pt + rule-color)
  ]
}

// One job/role entry
#let entry(
  role: "",
  org: "",
  dates: "",
  bullets: (),
) = {
  block(above: 1.2em, below: 0.3em)[
    #grid(
      columns: (1fr, auto),
      align: (left, right),
      [#text(weight: "bold")[#role] #text(fill: muted)[ #sym.dash.en #org]],
      text(size: 9pt, fill: muted)[#dates],
    )
  ]
  for b in bullets {
    block(above: 0.5em, below: 0.5em)[
      #text(fill: muted)[#sym.bullet] #b
    ]
  }
}

// Selected project entry
#let project(name: "", stack: "", desc: "", url: none) = {
  block(above: 0.4em, below: 0.4em)[
    #text(weight: "bold")[#name]
    #if stack != "" [ #text(fill: muted, size: 9pt)[ #sym.dash.en #stack]]
    #if url != none [ #text(size: 9pt)[ #sym.dash.en #link("https://" + url)[#url]]]
    \
    #desc
  ]
}

// Skills line (label + value)
#let skill-line(label, value) = {
  block(above: 0.35em, below: 0.35em)[
    #text(weight: "bold")[#label:] #value
  ]
}
