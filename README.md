Build a production-quality React website for a B2B SaaS company called ContainPoint.

Core objective

This website is for real buyers to:

understand the product quickly,
trust the company,
request a demo,
view pricing,
see a sample audit pack.

This is not a generic startup landing page. It should feel like a premium industrial-compliance brand: calm, elegant, intelligent, structured, and highly credible.

Brand and positioning
Company name

ContainPoint

Positioning

System of record for SPCC compliance

Primary tagline

SPCC compliance that stays current, complete, and audit-ready.

Short description

ContainPoint helps facilities and consultants manage SPCC compliance by tracking inspections, corrective actions, and audit-ready evidence in one system.

Full description

ContainPoint is a compliance infrastructure platform built for facilities managing SPCC obligations. It replaces spreadsheets, binders, and fragmented workflows with a single system that tracks inspections, manages corrective actions, and generates audit-ready documentation instantly.

Aesthetic direction

I do not want the usual modern SaaS look with Inter, bright blues, generic gradients, and template-style cards.

Desired feeling

The site should feel:

premium
editorial
slightly architectural
intelligent
technical but not cold
highly intentional
visually smooth
minimal but not sterile
expensive without being flashy

Think:

a refined compliance-tech company
elegant serif-led typography
white / bone / mist-gray / steel-blue palette
understated motion
lots of breathing room
beautiful hierarchy
excellent spacing
subtle lines and framing
restrained polish
Avoid
generic SaaS hero sections
startup-style blobs
loud gradients
overused blue-purple palettes
cartoonish illustrations
overly rounded bubbly UI
dashboard screenshots that look fake and cluttered
template-looking cards everywhere
Inter or similar generic body-first SaaS typography
Typography

Use a more distinctive, elegant type system.

Preferred font pairing
Headings / display: Cormorant Garamond or Bodoni Moda or Fraunces
Body / UI labels / navigation: Manrope, Söhne-like alternative, General Sans if available, or Source Sans 3

Pick the combination that looks the most premium and readable.

Typography rules
Headings should feel editorial and refined, with slightly tight tracking where appropriate.
Body text should still be very readable and modern.
Navigation and UI labels should feel crisp and disciplined.
Use strong size contrast.
Do not make everything large and soft; it should have a sense of structure.

If you need one concrete pairing, use:

Cormorant Garamond for headings
Manrope for body and UI
Color palette

Use a restrained palette:

background primary: warm white / bone
alternate section background: very light gray-blue
text primary: deep charcoal
text secondary: muted slate
accent: muted steel blue, not bright SaaS blue
border lines: subtle cool gray

Suggested palette:

#FAF9F6 background
#F2F5F7 alternate section
#171717 primary text
#5E6873 secondary text
#5F7C99 primary accent
#CED6DD borders
#E7ECEF subtle surfaces

No harsh black. No neon blue.

Layout and motion
Layout style
clean editorial grid
strong margins
lots of whitespace
deliberate rhythm between sections
mix of left-aligned structured content and centered headline moments
occasional fine divider lines or framed content areas
premium card design with very subtle shadows
Motion

Use subtle Framer Motion:

fade-up on section entry
small translate + fade
very restrained hover states
elegant button transitions
no excessive animation
no parallax gimmicks unless extremely subtle
Overall feel

The site should feel like it was designed by someone with taste, not generated from a startup kit.

Tech requirements

Build this as a single-file or small multi-component React app with:

Tailwind CSS
responsive design
smooth scroll
clean semantic structure
mobile-first responsiveness
sticky top navigation
reusable section components
polished buttons
polished cards
realistic mock UI panels for product visuals

Use shadcn/ui components where helpful, but customize them so they do not look default.

Site architecture

Create these pages or sections:

Home
Product
How It Works
Pricing
For Consultants
Resources
Book Demo

If implementing as a single-page site first, create these as major anchored sections in the page with a nav that scrolls to each. Structure the code so it can be split into routes later.

Navigation

Top nav should include:

logo / wordmark: ContainPoint
Product
How It Works
Pricing
For Consultants
Resources
Book Demo

Right side CTA:

Book Demo

Use a minimal elegant nav with a subtle bottom border or translucent backing on scroll.

HOME PAGE
Hero section

This is the highest-conversion area. It must look exceptional.

Hero headline

Never miss an SPCC requirement.

Hero supporting text

SPCC compliance that stays current, complete, and audit-ready — without spreadsheets, binders, or manual tracking.

CTA buttons
Primary: Book Demo
Secondary: See Sample Audit Pack
Hero visual

Create a premium mock product visual, not a cheesy fake dashboard.
This visual should show:

asset registry
inspection status
corrective action summary
audit readiness indicator

It should look like a sophisticated internal operations tool with calm colors and disciplined layout.

Problem section

Title:
SPCC programs fail operationally.

Body:
Most facilities do not struggle with understanding the rules — they struggle with execution.

Show this as elegant structured points:

inspections are missed silently
records are scattered across Excel, emails, and paper
corrective actions are not tracked to closure
audits turn into multi-day scrambles

Present this in a visually strong way, perhaps with a split layout or framed list.

Solution section

Title:
ContainPoint makes compliance operational.

Body copy:
ContainPoint is your system of record for SPCC compliance:

Track every tank, inspection, and requirement
Capture evidence with photos, timestamps, and signatures
Automatically manage corrective actions
Generate audit-ready documentation instantly

Design this section to feel precise and credible.

Capabilities section

Use 4 premium cards or framed blocks.

Card 1

Inspection Tracking
Never miss required inspections with automated schedules tied to your facility.

Card 2

Corrective Actions
Every failure becomes a tracked task with ownership, deadlines, and proof of closure.

Card 3

Audit-Ready Evidence
Generate inspection logs, training records, and compliance documentation instantly.

Card 4

SPCC Plan Continuity
Keep your plan current with version tracking and review reminders.

These should look high-end, not like generic feature cards.

Industries / who it’s for

Title:
Built for regulated facilities and the consultants who support them.

Include:

Trucking depots
Manufacturing plants
Equipment yards
Farms
Data center sites
Environmental consultants

Present these in a refined grid.

Consultant callout

This should be a prominent section.

Title:
Built for consultants managing multiple sites

Copy:

Manage all client facilities in one system
Standardize inspections and reporting
Deliver audit-ready documentation instantly

CTA:
View Consultant Features

Make this feel like a high-value secondary audience, not an afterthought.

Pricing preview

Title:
Simple, site-based pricing

Copy:
Starts at $149/site/month

CTA:
View Pricing

Final CTA

Title:
Stop managing compliance manually.

Buttons:

Book Demo
Start Pilot
PRODUCT PAGE / SECTION

Create a deeper product section with elegant product modules.

Include these modules:

Asset Registry
Inspection Engine
Corrective Actions
Training Records
Audit Pack
Consultant Console

For each:

title
short description
small polished UI mockup or icon block

Use language like this:

Asset Registry

Track tanks, containers, oil types, and containment details in one structured system.

Inspection Engine

Run recurring inspections with mobile-friendly execution, timestamps, photos, and signatures.

Corrective Actions

Convert failed checks into owned, trackable tasks with deadlines and closure evidence.

Training Records

Maintain clear records of oil-handling personnel training and acknowledgments.

Audit Pack

Export inspection records, corrective actions, training history, and compliance documentation instantly.

Consultant Console

Manage multiple client sites, standardize templates, and deliver professional audit-ready outputs.

HOW IT WORKS SECTION

Create a 5-step visual process.

Step 1

Add your facility and tanks

Step 2

Set inspection schedules

Step 3

Run inspections in the field

Step 4

Track corrective actions to closure

Step 5

Generate audit-ready documentation

This should be elegant and linear.

PRICING SECTION

Design a premium pricing block.

Core

$149/site/month
For smaller facilities that need a structured SPCC system of record.

Include:

Asset registry
Inspection tracking
Audit export
Basic support
Pro

$249/site/month
For multi-site operators and consultant-supported workflows.

Include:

Everything in Core
Corrective actions
Multi-site management
Consultant features
Priority support
Enterprise / Custom

For larger portfolios, advanced onboarding, or custom implementation.

Include:

Portfolio rollups
Advanced onboarding
Custom workflows
Dedicated support

Also include a note:

onboarding/setup fees may apply
annual billing preferred
consultant/portfolio pricing available

Make the pricing section trustworthy and clear.

FOR CONSULTANTS SECTION

This needs its own strong section.

Headline:
Manage every client site in one system.

Copy:
ContainPoint gives environmental consultants a structured way to standardize inspections, track deficiencies, and deliver clean audit-ready documentation across multiple facilities.

Feature bullets:

Multi-site dashboard
Reusable inspection templates
Review and QA workflows
Client-ready exports
Faster, more professional delivery

CTA:
Request Pilot Access

RESOURCES SECTION

Create a lightweight resource hub preview with elegant article cards.

Articles:

What is SPCC?
Who needs an SPCC plan?
Common compliance failures
Inspection requirements explained

These can be static cards for now.

BOOK DEMO SECTION

Create a polished form with:

Name
Company
Work email
Industry
Number of sites
Current compliance method

Add headline:
See how ContainPoint works for your facilities.

Subtext:
Book a short demo to see inspection workflows, corrective action tracking, and an example audit pack.

Include a polished submit button.

FOOTER

Footer should be elegant and minimal.

Include:

ContainPoint
SPCC compliance that stays current, complete, and audit-ready.
Nav links
contact email placeholder
copyright
optionally a line such as:
“Built for facilities and consultants managing SPCC compliance.”

No clutter.

Content tone

The copy should sound:

precise
calm
credible
not salesy
not buzzword-heavy
not legalistic
not vague

It should feel like a serious company speaking to serious operators.

Avoid:

“revolutionize”
“game-changing”
“AI-powered” unless truly necessary
fluff mission language
Product visuals to create

Create refined mock visuals for:

compliance dashboard
inspection form
corrective action tracker
audit pack preview
consultant multi-site overview

These should look realistic and consistent with the site branding.

SEO requirements

The site should still be SEO-aware even though the brand is ContainPoint.

Use headings and metadata that support:

SPCC compliance software
SPCC inspection tracking
SPCC audit documentation
SPCC compliance management
environmental compliance software for oil storage facilities

Include strong page titles and meta descriptions.

Do not make the site feel SEO-spammy.

UX requirements
fully responsive
excellent desktop layout
strong tablet adaptation
mobile nav drawer
sticky nav
smooth anchor scrolling
accessible contrast
semantic sections
tasteful hover states
high visual polish
Deliverable expectations

Build the site so it looks close to launch-ready.
Do not leave placeholder lorem ipsum.
Do not leave generic components.
Do not create a generic SaaS template.
Make every section feel intentional and premium.

Where possible, use clean reusable React components and keep the code organized.

Extra design instruction

If there is any tension between:

trendy startup UI
and timeless editorial-industrial elegance

choose timeless editorial-industrial elegance.

This site should make a buyer think:

“These people understand compliance, structure, and seriousness.”

not:

“This is another SaaS landing page.”

Optional extras if there is time
subtle sample audit-pack modal preview
FAQ section
small “why buyers switch from spreadsheets” section
a polished empty-state UI in product visuals
a simple demo success confirmation state