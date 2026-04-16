// generate-blogs.js
// Premium SEO-Optimized Blog Generator for D.M. Munyaka & Company Advocates
// Run with: node generate-blogs.js

const fs = require('fs');
const path = require('path');

// ============================================
// CONFIGURATION
// ============================================
const BLOG_DIR = path.join(__dirname, 'blogs');
const PILLAR_DIR = path.join(__dirname, 'pillars');
const SITEMAP_PATH = path.join(__dirname, 'sitemap.xml');

if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
}
if (!fs.existsSync(PILLAR_DIR)) {
    fs.mkdirSync(PILLAR_DIR, { recursive: true });
}

// ============================================
// ROTATIONAL IMAGES
// ============================================
const ROTATIONAL_IMAGES = [
    "https://d1imjpjik7kc4g.cloudfront.net/images/5-Law-Firm-Titles-You-Should-Know-About-new.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtBMM7W4WRmFxnl5rHA5BcPFnt4-m11AwyQ&s",
    "https://blog.ipleaders.in/wp-content/uploads/2020/03/TrendsinLawFirms_KL_1024x680-1024x680.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokd3gfv4qxMgG8QFN79fRXTSeF3ei3Fti3w&s",
    "https://cdn.prod.website-files.com/672b8fcccce3fc53bb92fb97/685e2a97977d627fe3e82ad2_pexels-photo-6077797.jpeg",
    "https://thebusinessfame.com/wp-content/uploads/2021/05/lawfirm-1.jpg",
    "https://actionableagency.com/wp-content/uploads/2025/05/law-firm-2-62fe1b3dd3871-sej.png",
    "https://static.wixstatic.com/media/2554b6_308d100dc6324445ba42afd11e102a1f~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2554b6_308d100dc6324445ba42afd11e102a1f~mv2.jpg",
    "https://media.licdn.com/dms/image/v2/D4D12AQFQfSB5dfCfXw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1725535240726?e=2147483647&v=beta&t=c9SMOZSt15lW3lMqbI6iHyGSVRHvsvqQ-ygUa1y8pho",
    "https://mmw.legal/wp-content/uploads/2025/03/quality-law-services-offred-at-MMW-legal-scaled.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUNgLoIXfhpIqJw-MNwJ9HLnuxjDIi8y8Gw&s",
    "https://www.tekedia.com/wp-content/uploads/2019/06/law-firm-768x512.png",
    "https://biznakenya.com/wp-content/uploads/2019/07/Top-Law-Firms-in-Kenya.jpg",
    "https://ntpartnerlawfirm.com/wp-content/uploads/2023/12/Legal-Scales-Image-Hoyt-Law-Firm-540x304-1.jpg",
    "https://thumbs.dreamstime.com/b/lady-justice-statue-law-firm-office-lady-justice-statue-law-firm-attorney-office-blindfolded-justitia-balance-scales-141090147.jpg"
];

function getRandomImage(index) {
    return ROTATIONAL_IMAGES[index % ROTATIONAL_IMAGES.length];
}

// ============================================
// CONTENT VARIATION (CRITICAL FOR GOOGLE)
// ============================================
const introVariants = [
    (p, s) => `Understanding ${p} in Kenya requires both legal precision and practical awareness. At D.M. Munyaka & Company Advocates, we regularly advise clients on ${s} and related matters from our chambers opposite Machakos Stadium.`,
    (p, s) => `Clients frequently ask about ${p}, particularly in Machakos and surrounding areas. This comprehensive guide explains the legal process, risks, and practical considerations.`,
    (p, s) => `In Kenya, ${p} is governed by a structured legal framework. Our team at D.M. Munyaka & Company Advocates provides strategic guidance on ${s} and compliance.`,
    (p, s) => `Whether you are an individual or business, understanding ${p} is essential for protecting your interests. This article outlines the legal principles and steps involved in Kenya.`,
    (p, s) => `Legal issues around ${p} can be complex without proper guidance. This article provides a clear breakdown based on Kenyan law and our experience at Anam Annex, opposite Machakos Stadium.`,
    (p, s) => `As an advocate with an LLB (Hons) from Moi University and a Postgraduate Diploma from the Kenya School of Law (KSL), I regularly handle ${p} matters. This guide shares key insights.`
];

function getIntro(primary, secondary, index) {
    return introVariants[index % introVariants.length](primary, secondary);
}

// ============================================
// PREMIUM NAVBAR GENERATION (WITH LOGO)
// ============================================
function generateNavbar() {
    return `
<!-- Premium Navigation Bar -->
<div class="top-nav">
    <div class="container">
        <div class="logo">
            <a href="/index.html">
                <img src="/dm-munyaka-favicon.webp" alt="D.M. Munyaka & Company Advocates Logo" class="logo-img">
                D.M. MUNYAKA <span>& COMPANY</span>
            </a>
        </div>
        <div class="nav-links">
            <a href="/index.html">Home</a>
            <a href="/about.html">The Firm</a>
            <a href="/services.html">Services</a>
            <a href="/team.html">Our Team</a>
            <a href="/blogs/index.html" class="active">Insights</a>
            <a href="/contact.html" class="nav-cta">Consultation</a>
        </div>
        <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</div>

<!-- Mobile Menu -->
<div class="mobile-menu" id="mobileMenu">
    <div class="close-menu" id="closeMenu">✕</div>
    <a href="/index.html">Home</a>
    <a href="/about.html">The Firm</a>
    <a href="/services.html">Services</a>
    <a href="/team.html">Our Team</a>
    <a href="/blogs/index.html">Insights</a>
    <a href="/contact.html" class="nav-cta">Consultation</a>
</div>

<style>
/* Navbar Styles */
.top-nav {
    background: #1E2B3C;
    padding: 18px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(181,154,93,0.25);
}
.top-nav .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}
.logo a {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 600;
    color: #FFFFFF;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
}
.logo-img {
    width: 40px;
    height:40px;
    object-fit: contain;
}
.logo span { color: #B59A5D; }
.nav-links {
    display: flex;
    gap: 36px;
    align-items: center;
}
.nav-links a {
    color: #cfdde6;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}
.nav-links a:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: #B59A5D;
    transition: 0.3s;
}
.nav-links a:hover:after, .nav-links a.active:after {
    width: 100%;
}
.nav-links a:hover, .nav-links a.active { color: #B59A5D; }
.nav-cta {
    background: #B59A5D;
    color: #1E2B3C !important;
    padding: 8px 20px;
}
.nav-cta:after { display: none; }
.nav-cta:hover { background: #c9ae6e; transform: translateY(-2px); }

/* Hamburger Menu */
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
}
.hamburger span {
    width: 25px;
    height: 2px;
    background: #B59A5D;
    transition: 0.3s;
}

/* Mobile Menu */
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #141f2c;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    transform: translateX(100%);
    transition: transform 0.4s ease-in-out;
    visibility: hidden;
}
.mobile-menu.active {
    transform: translateX(0);
    visibility: visible;
}
.mobile-menu a {
    color: white;
    font-size: 24px;
    font-family: 'Playfair Display', serif;
    text-decoration: none;
    transition: color 0.3s;
}
.mobile-menu a:hover { color: #B59A5D; }
.close-menu {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 32px;
    color: #B59A5D;
    cursor: pointer;
    font-family: monospace;
}

@media (max-width: 992px) {
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .top-nav .container { padding: 0 24px; }
}

/* Mobile Menu JS */
.mobile-menu-js {
    overflow: hidden;
}
</style>

<script>
(function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    
    if (hamburger && mobileMenu && closeMenu) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
        document.querySelectorAll('.mobile-menu a').forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
})();
</script>`;
}

// ============================================
// PREMIUM FOOTER GENERATION
// ============================================
function generateFooter() {
    return `
<!-- Premium Footer -->
<footer class="premium-footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <img src="/dm-munyaka-favicon.webp" alt="D.M. Munyaka & Company Advocates Logo" class="footer-logo">
                <p class="tagline">Excellence. Integrity. Professionalism.</p>
                <div class="socials">
                    <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                </div>
            </div>
            <div>
                <h4>The Office</h4>
                <p>Suite 1, Anam Annex Building<br>Opp. Machakos Stadium<br>Machakos, Kenya</p>
                <a href="https://maps.google.com/?q=Anam+Annex+Building+Machakos" target="_blank" class="footer-link">Get Directions <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div>
                <h4>Contact</h4>
                <div class="footer-contact-item"><i class="fa-solid fa-phone"></i><a href="tel:+254724327060">+254 724 327060</a></div>
                <div class="footer-contact-item"><i class="fa-solid fa-phone"></i><a href="tel:+254750698847">+254 750 698847</a></div>
                <div class="footer-contact-item"><i class="fa-solid fa-envelope"></i><a href="mailto:info@dmmunyakaadv.co.ke">info@dmmunyakaadv.co.ke</a></div>
            </div>
            <div>
                <h4>Qualifications</h4>
                <p>LLB (Hons), Moi University<br>Diploma in Law, KSL<br>Member, Law Society of Kenya</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; <span id="currentYear"></span> D.M. Munyaka & Company Advocates. All Rights Reserved.</p>
            <p>Designed & Developed By <a href="https://sarahadevelopers.co.ke" target="_blank" class="dev-link">Saraha Developers</a></p>
        </div>
    </div>
</footer>

<style>
.premium-footer {
    background: #1E2B3C;
    color: rgba(255,255,255,0.75);
    padding-top: 60px;
    margin-top: 60px;
}
.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}
.premium-footer h4 {
    color: #B59A5D;
    margin-bottom: 20px;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.footer-logo { width: 50px; margin-bottom: 16px; }
.tagline { font-size: 13px; margin-bottom: 20px; }
.socials { display: flex; gap: 12px; margin-top: 10px; }
.socials a {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: rgba(181,154,93,0.15);
    color: #B59A5D;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
}
.socials a:hover { background: #B59A5D; color: #1E2B3C; }
.footer-contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
}
.footer-contact-item i { color: #B59A5D; width: 16px; }
.footer-contact-item a { color: rgba(255,255,255,0.85); text-decoration: none; }
.footer-contact-item a:hover { color: #B59A5D; }
.footer-link { color: #B59A5D; text-decoration: none; display: inline-block; margin-top: 12px; }
.footer-bottom {
    border-top: 1px solid rgba(181,154,93,0.2);
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 12px;
    gap: 12px;
}
.dev-link { color: #B59A5D; font-weight: 500; text-decoration: none; }
@media (max-width: 768px) {
    .footer-grid { gap: 32px; }
    .footer-bottom { flex-direction: column; text-align: center; }
    .footer-brand { text-align: center; }
    .socials { justify-content: center; }
}
</style>

<script>
document.getElementById('currentYear').innerHTML = new Date().getFullYear();
</script>`;
}

// ============================================
// FLOATING WHATSAPP BUTTON
// ============================================
function generateWhatsAppButton() {
    return `
<!-- Floating WhatsApp Button -->
<a href="https://wa.me/254724327060?text=Hello%2C%20I%20need%20legal%20assistance%20from%20D.M.%20Munyaka%20Advocates" class="float-wa" target="_blank">
    <i class="fa-brands fa-whatsapp"></i>
</a>

<style>
.float-wa {
    position: fixed;
    bottom: 25px;
    right: 25px;
    background: #25D366;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(0,0,0,0.25);
    transition: 0.2s;
    text-decoration: none;
}
.float-wa i { font-size: 28px; color: white; }
.float-wa:hover { transform: scale(1.08); background: #20b358; }
@media (max-width: 768px) {
    .float-wa { width: 50px; height: 50px; bottom: 20px; right: 20px; }
    .float-wa i { font-size: 24px; }
}
</style>`;
}

// ============================================
// AUTHOR BIO BOX (E-E-A-T SIGNAL)
// ============================================
function generateAuthorBio() {
    return `
<div class="author-box">
    <div class="author-avatar">DM</div>
    <div class="author-info">
        <strong>D.M. Munyaka</strong><br>
        Advocate of the High Court of Kenya<br>
        LLB (Hons) Moi University | Postgraduate Diploma, Kenya School of Law (KSL)<br>
        <a href="/about.html">Learn more about our firm →</a>
    </div>
</div>
<style>
.author-box { display: flex; gap: 20px; background: #F8F9FA; padding: 25px; margin: 40px 0; border-left: 4px solid #B59A5D; }
.author-avatar { width: 60px; height: 60px; background: #1E2B3C; color: #B59A5D; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; border-radius: 50%; }
.author-info { flex: 1; }
@media (max-width: 600px) { .author-box { flex-direction: column; text-align: center; } .author-avatar { margin: 0 auto; } }
</style>`;
}

// ============================================
// INTERNAL LINK INJECTION (AUTHORITY FLOW)
// ============================================
function injectInternalLinks(content, category, slug) {
    const pillarLinks = {
        conveyancing: '/pillars/conveyancing-lawyer-machakos.html',
        family: '/pillars/family-lawyer-machakos.html',
        corporate: '/pillars/corporate-lawyer-machakos.html',
        litigation: '/pillars/litigation-lawyer-machakos.html',
        constitutional: '/pillars/criminal-lawyer-machakos.html',
        employment: '/pillars/employment-lawyer-machakos.html',
        banking: '/pillars/banking-lawyer-machakos.html',
        local: '/pillars/lawyer-machakos.html'
    };
    
    const pillarUrl = pillarLinks[category] || '/contact.html';
    const anchorTexts = [
        `lawyer in Machakos`,
        `advocate near Machakos Stadium`,
        `legal services in Machakos`,
        `attorney in Machakos`,
        `law firm near Machakos town`
    ];
    const randomAnchor = anchorTexts[Math.floor(Math.random() * anchorTexts.length)];
    
    const linkHtml = `<p><strong>Looking for a ${randomAnchor}?</strong> <a href="${pillarUrl}">Contact our chambers at Anam Annex today →</a></p>`;
    
    return content + linkHtml;
}

// ============================================
// KEYWORD CLUSTERS (SAME AS YOUR EXISTING)
// ============================================
const keywordClusters = {
    conveyancing: [
        { primary: "land verification Machakos", secondary: "title deed search Kenya", intent: "How to Verify a Land Title at Machakos Land Registry" },
        { primary: "property transfer Kenya", secondary: "conveyancing process", intent: "The Complete Guide to Property Transfer in Kenya" },
        { primary: "land fraud prevention", secondary: "due diligence Machakos", intent: "How to Avoid Land Fraud in Machakos County" },
        { primary: "lease agreement Kenya", secondary: "commercial tenancy", intent: "Essential Clauses in Commercial Lease Agreements" },
        { primary: "buying land in Machakos", secondary: "land lawyers near me", intent: "Buying Land Opposite Machakos Stadium: What You Need to Know" },
        { primary: "title deed registration", secondary: "land registry Kenya", intent: "Title Deed Registration Process at Ardhi House" },
        { primary: "land disputes Machakos", secondary: "boundary disputes", intent: "Resolving Land Boundary Disputes in Machakos Courts" },
        { primary: "subdivision of land Kenya", secondary: "land survey", intent: "Legal Requirements for Land Subdivision in Kenya" },
        { primary: "mortgage process Kenya", secondary: "charge documents", intent: "Understanding Mortgage Charges and Loan Agreements" },
        { primary: "sectional properties Kenya", secondary: "apartment ownership", intent: "Buying Apartments: Sectional Properties Act Explained" },
        { primary: "land control board Machakos", secondary: "land consent", intent: "Land Control Board Consent Process in Machakos" },
        { primary: "environmental impact assessment", secondary: "EIA license Kenya", intent: "When You Need an Environmental Impact Assessment for Land" },
        { primary: "land rent payment Kenya", secondary: "ground rent", intent: "How to Pay Land Rent and Rates in Machakos County" },
        { primary: "adverse possession Kenya", secondary: "squatter rights", intent: "Adverse Possession Claims: Can Squatters Own Your Land?" },
        { primary: "land succession Kenya", secondary: "inheritance of land", intent: "Inheriting Land: Succession Process for Property" },
        { primary: "public land Kenya", secondary: "government land", intent: "Buying Public Land: What the Law Says" },
        { primary: "land valuation Kenya", secondary: "property valuation", intent: "Land Valuation Process for Stamp Duty Purposes" },
        { primary: "chargee sale Kenya", secondary: "mortgagee sale", intent: "Your Rights During a Chargee (Mortgagee) Sale" },
        { primary: "land leases Kenya", secondary: "99 year lease", intent: "Understanding 99-Year Leases vs Freehold Titles" },
        { primary: "Anam Annex advocates", secondary: "Machakos law firm", intent: "Why Choose D.M. Munyaka for Conveyancing Near Machakos Stadium" }
    ],
    corporate: [
        { primary: "company registration Kenya", secondary: "incorporation process", intent: "How to Register a Company in Kenya via eCitizen" },
        { primary: "business name registration", secondary: "sole proprietorship", intent: "Business Name vs Limited Company: Which is Right for You?" },
        { primary: "partnership agreement Kenya", secondary: "business partnership", intent: "Why Every Partnership Needs a Written Agreement" },
        { primary: "company secretarial services", secondary: "annual returns", intent: "Company Secretarial Duties and Annual Return Filing" },
        { primary: "mergers and acquisitions Kenya", secondary: "business sale", intent: "Legal Process for Mergers and Acquisitions in Kenya" },
        { primary: "commercial contracts Kenya", secondary: "contract drafting", intent: "Essential Elements of Enforceable Commercial Contracts" },
        { primary: "intellectual property Kenya", secondary: "trademark registration", intent: "Protecting Your Brand: Trademark Registration in Kenya" },
        { primary: "KRA tax compliance", secondary: "PIN registration", intent: "KRA Compliance for New Businesses: PIN, VAT, and Withholding Tax" },
        { primary: "data protection Kenya", secondary: "DPO appointment", intent: "Data Protection Act Compliance for SMEs in 2024" },
        { primary: "business licensing Kenya", secondary: "single business permit", intent: "Business Permits and Licenses in Machakos County" },
        { primary: "shareholders agreement", secondary: "company shares", intent: "Shareholders Agreements vs Company Articles of Association" },
        { primary: "insolvency Kenya", secondary: "bankruptcy", intent: "Insolvency and Bankruptcy: Legal Options for Struggling Businesses" },
        { primary: "competition law Kenya", secondary: "CAK compliance", intent: "Competition Authority of Kenya: Compliance for Businesses" },
        { primary: "foreign investment Kenya", secondary: "investor visa", intent: "Legal Guide for Foreign Investors in Kenya" },
        { primary: "business succession planning", secondary: "exit strategy", intent: "Succession Planning for Family Businesses in Machakos" }
    ],
    litigation: [
        { primary: "civil litigation Kenya", secondary: "court process", intent: "Civil Litigation Process in Kenya: From Filing to Judgment" },
        { primary: "debt recovery Kenya", secondary: "small claims court", intent: "Debt Recovery Options: Small Claims Court vs Ordinary Procedure" },
        { primary: "alternative dispute resolution", secondary: "mediation Kenya", intent: "ADR vs Litigation: Benefits of Mediation and Arbitration" },
        { primary: "employment disputes Kenya", secondary: "ELRC", intent: "Employment and Labour Relations Court: What to Expect" },
        { primary: "commercial arbitration", secondary: "arbitration clause", intent: "Commercial Arbitration in Kenya: A Faster Dispute Resolution" },
        { primary: "court procedure Kenya", secondary: "filing a case", intent: "Court Procedure in Kenya: Step-by-Step Guide for Litigants" },
        { primary: "summary judgment Kenya", secondary: "fast track", intent: "When Can You Apply for Summary Judgment in Civil Cases?" },
        { primary: "injunction orders Kenya", secondary: "temporary injunction", intent: "Injunctions in Kenya: Protecting Your Rights Pending Trial" },
        { primary: "judicial review Kenya", secondary: "quashing orders", intent: "Judicial Review: Challenging Government Decisions" },
        { primary: "professional negligence", secondary: "malpractice claim", intent: "Suing for Professional Negligence: What You Need to Prove" },
        { primary: "small claims court Machakos", secondary: "fast dispute resolution", intent: "Small Claims Court in Machakos: Claims up to KES 1M" },
        { primary: "mediation Machakos", secondary: "court annexed mediation", intent: "Court-Annexed Mediation in Machakos: A Faster Alternative" }
    ],
    family: [
        { primary: "writing a will Kenya", secondary: "last testament", intent: "How to Write a Valid Will in Kenya: Legal Requirements" },
        { primary: "probate process Kenya", secondary: "letters of administration", intent: "Probate and Letters of Administration: Settling an Estate" },
        { primary: "divorce in Kenya", secondary: "matrimonial causes", intent: "Divorce in Kenya: Grounds, Process, and Children's Rights" },
        { primary: "child custody Kenya", secondary: "parental responsibility", intent: "Child Custody and Maintenance in Kenya: Parental Rights" },
        { primary: "matrimonial property", secondary: "division of assets", intent: "Matrimonial Property Division During Divorce in Kenya" },
        { primary: "succession law Kenya", secondary: "law of succession act", intent: "Succession Law in Kenya: Intestate vs Testate Succession" },
        { primary: "adoption in Kenya", secondary: "child adoption", intent: "Adoption Process in Kenya: Legal Requirements and Steps" },
        { primary: "guardianship Kenya", secondary: "legal guardian", intent: "Legal Guardianship in Kenya: Appointing a Guardian for Minors" },
        { primary: "inheritance disputes", secondary: "family inheritance", intent: "Inheritance Disputes in Kenya: How to Resolve Family Conflicts" },
        { primary: "prenuptial agreement Kenya", secondary: "marriage contract", intent: "Prenuptial Agreements in Kenya: Are They Enforceable?" },
        { primary: "FGM cases Kenya", secondary: "female genital mutilation", intent: "Legal Remedies for FGM and GBV Cases in Kenya" },
        { primary: "child protection Kenya", secondary: "children's court", intent: "Child Protection in Kenya: Reporting Abuse and Neglect" },
        { primary: "estate planning Kenya", secondary: "trust fund", intent: "Estate Planning in Kenya: Trusts, Wills, and Tax Efficiency" },
        { primary: "marriage laws Kenya", secondary: "customary marriage", intent: "Types of Marriage in Kenya: Christian, Islamic, Hindu, Customary" },
        { primary: "separation vs divorce", secondary: "legal separation", intent: "Legal Separation vs Divorce in Kenya: Which is Right?" }
    ],
    employment: [
        { primary: "unfair dismissal Kenya", secondary: "wrongful termination", intent: "Unfair Dismissal in Kenya: Your Rights Under Employment Act" },
        { primary: "employment contract Kenya", secondary: "terms of employment", intent: "Employment Contracts in Kenya: Mandatory Clauses" },
        { primary: "redundancy procedure Kenya", secondary: "layoff process", intent: "Redundancy in Kenya: Legal Procedure and Severance Pay" },
        { primary: "discrimination at work", secondary: "workplace harassment", intent: "Workplace Discrimination and Harassment in Kenya" },
        { primary: "minimum wage Kenya", secondary: "wage guidelines", intent: "Minimum Wage in Kenya 2024: Sector-by-Sector Breakdown" },
        { primary: "NHIF NSSF compliance", secondary: "statutory deductions", intent: "NHIF and NSSF Compliance for Employers in Kenya" },
        { primary: "collective bargaining Kenya", secondary: "trade unions", intent: "Collective Bargaining Agreements in Kenya: Employer's Guide" },
        { primary: "annual leave Kenya", secondary: "employee rights", intent: "Annual Leave, Sick Leave, and Maternity Leave in Kenya" },
        { primary: "probation period Kenya", secondary: "trial period", intent: "Probation Period in Kenya: Duration and Termination Rules" },
        { primary: "occupational safety Kenya", secondary: "OSHA compliance", intent: "OSHA Compliance: Workplace Health and Safety in Kenya" },
        { primary: "whistleblower protection", secondary: "protected disclosure", intent: "Whistleblower Protection in Kenya: Reporting Misconduct" },
        { primary: "industrial action Kenya", secondary: "strike law", intent: "Industrial Action in Kenya: Legal Strikes vs Illegal Work Stoppages" }
    ],
    banking: [
        { primary: "banking regulation Kenya", secondary: "CBK guidelines", intent: "Banking Regulation in Kenya: Central Bank of Kenya Guidelines" },
        { primary: "anti-money laundering Kenya", secondary: "AML compliance", intent: "Anti-Money Laundering Compliance for Financial Institutions" },
        { primary: "insurance claims Kenya", secondary: "policy disputes", intent: "Insurance Claims in Kenya: How to Dispute Denied Coverage" },
        { primary: "fintech regulation Kenya", secondary: "digital lending", intent: "Fintech Regulation in Kenya: Digital Lending and Payments" },
        { primary: "bank loan default Kenya", secondary: "debt recovery", intent: "Bank Loan Default in Kenya: Legal Consequences and Options" },
        { primary: "insurance bad faith", secondary: "unfair settlement", intent: "Insurance Bad Faith in Kenya: Suing Your Insurer" },
        { primary: "microfinance regulation", secondary: "DTM licencing", intent: "Microfinance and DTM Regulation in Kenya" },
        { primary: "mobile lending apps", secondary: "digital credit", intent: "Mobile Lending Apps in Kenya: Legal and Regulatory Framework" }
    ],
    constitutional: [
        { primary: "constitutional petitions Kenya", secondary: "bill of rights", intent: "Constitutional Petitions in Kenya: Enforcing Your Rights" },
        { primary: "human rights Kenya", secondary: "fundamental freedoms", intent: "Fundamental Rights and Freedoms Under Kenya's Constitution" },
        { primary: "criminal defense Kenya", secondary: "bail application", intent: "Criminal Defense in Kenya: Bail Applications and Trial Rights" },
        { primary: "police misconduct Kenya", secondary: "unlawful arrest", intent: "Police Misconduct in Kenya: Reporting and Legal Remedies" },
        { primary: "right to property Kenya", secondary: "compulsory acquisition", intent: "Right to Property in Kenya: Protection from Unlawful Eviction" },
        { primary: "fair trial rights", secondary: "access to justice", intent: "Fair Trial Rights in Kenya: Legal Representation and Due Process" },
        { primary: "public interest litigation", secondary: "social justice", intent: "Public Interest Litigation in Kenya: Suing for Social Change" },
        { primary: "victim rights Kenya", secondary: "witness protection", intent: "Victim Rights in Kenya: Compensation and Witness Protection" }
    ],
    local: [
        { primary: "lawyer near Machakos Stadium", secondary: "advocates near me", intent: "Find a Lawyer Near Machakos Stadium at Anam Annex Building" },
        { primary: "law firm near Machakos town", secondary: "legal services Machakos", intent: "Top-Rated Law Firm Near Machakos Town: D.M. Munyaka & Co" },
        { primary: "advocate near Kyumvi", secondary: "Kyumvi lawyer", intent: "Advocate Near Kyumvi: Legal Services on Machakos-Kitui Road" },
        { primary: "legal advice Machakos", secondary: "consultation near me", intent: "Legal Advice in Machakos: Schedule a Consultation Today" },
        { primary: "property lawyer Machakos", secondary: "land advocate", intent: "Property Lawyer in Machakos: Land Transactions and Disputes" },
        { primary: "family lawyer Machakos", secondary: "divorce advocate", intent: "Family Lawyer in Machakos: Divorce, Custody, and Succession" },
        { primary: "corporate lawyer Machakos", secondary: "business attorney", intent: "Corporate Lawyer in Machakos: Business Registration and Compliance" },
        { primary: "criminal lawyer Machakos", secondary: "defense attorney", intent: "Criminal Lawyer in Machakos: Defense and Bail Applications" },
        { primary: "Anam Annex advocates", secondary: "Suite 1 law firm", intent: "Anam Annex Advocates: Legal Services Opposite Machakos Stadium" },
        { primary: "law firm near Machakos court", secondary: "court lawyers", intent: "Law Firm Near Machakos Law Courts: Experienced Litigators" }
    ]
};

// ============================================
// HELPER FUNCTIONS
// ============================================

function createSlug(title) {
    return title.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

function getCategoryDisplayName(category) {
    const names = {
        conveyancing: "Conveyancing & Real Estate Law",
        corporate: "Corporate & Commercial Law",
        litigation: "Litigation & Dispute Resolution",
        family: "Family & Succession Law",
        employment: "Employment & Labour Law",
        banking: "Banking & Insurance Law",
        constitutional: "Constitutional & Human Rights Law",
        local: "Local Legal Services"
    };
    return names[category] || category;
}

// Store all posts for interlinking
let allPosts = [];

// ============================================
// CONTENT GENERATION WITH VARIATION
// ============================================

function generateCategorySpecificContent(category, primary, secondary) {
    const specificContent = {
        conveyancing: `<h2>Property Due Diligence in Machakos</h2>
<p>Before completing any land transaction, conduct a thorough search at the Machakos Land Registry. Our office at Anam Annex is strategically located for quick access to the registry and other government offices. We recommend the following due diligence steps:</p>
<ul>
    <li>Conduct an official search at the Land Registry to verify ownership</li>
    <li>Obtain a certified copy of the title deed</li>
    <li>Verify land rates payments with Machakos County Government</li>
    <li>Check for any caveats, cautions, or restrictions on the property</li>
    <li>Confirm the land's zoning and permitted use</li>
</ul>`,
        family: `<h2>Protecting Your Family's Future</h2>
<p>Succession planning and family law matters require compassionate yet technically precise legal handling. Our firm has extensive experience in the Law of Succession Act and the Marriage Act. We help families:</p>
<ul>
    <li>Draft legally valid Wills that reflect your true intentions</li>
    <li>Navigate the probate process efficiently</li>
    <li>Resolve inheritance disputes through mediation or litigation</li>
    <li>Protect children's interests in custody and maintenance matters</li>
    <li>Plan estates to minimize tax liability and family conflict</li>
</ul>`,
        corporate: `<h2>Business Compliance in Machakos</h2>
<p>For businesses operating in Machakos County, compliance with county government regulations, KRA requirements, and national laws is essential. We provide comprehensive corporate legal services including:</p>
<ul>
    <li>Company registration and post-incorporation compliance</li>
    <li>Drafting of shareholder and partnership agreements</li>
    <li>Intellectual property registration and protection</li>
    <li>Employment contracts and HR policy development</li>
    <li>Tax advisory and dispute resolution with KRA</li>
</ul>`,
        litigation: `<h2>Court Representation in Machakos</h2>
<p>Our advocates regularly appear before the Machakos Law Courts, Employment and Labour Relations Court, and Environment and Land Court. We provide aggressive yet strategic representation in:</p>
<ul>
    <li>Civil claims and commercial disputes</li>
    <li>Debt recovery and insolvency matters</li>
    <li>Employment and labor disputes</li>
    <li>Land and environment cases</li>
    <li>Constitutional petitions and judicial reviews</li>
</ul>`,
        employment: `<h2>Workplace Rights and Obligations</h2>
<p>The Employment Act, 2007 governs the employer-employee relationship in Kenya. Whether you are an employer or employee, understanding your rights is crucial. Our services include:</p>
<ul>
    <li>Employment contract drafting and review</li>
    <li>Defense or prosecution of unfair dismissal claims</li>
    <li>Workplace policy development and compliance audits</li>
    <li>Redundancy procedure guidance</li>
    <li>Representation at the Employment and Labour Relations Court</li>
</ul>`,
        banking: `<h2>Financial Services Regulation</h2>
<p>The banking and insurance sectors in Kenya are heavily regulated. Our team provides compliance advisory and dispute resolution services for financial institutions and policyholders:</p>
<ul>
    <li>CBK and IRA regulatory compliance</li>
    <li>Anti-Money Laundering (AML) program development</li>
    <li>Insurance claim dispute resolution</li>
    <li>Fintech and digital lending regulatory advice</li>
    <li>Debt recovery and loan restructuring</li>
</ul>`,
        constitutional: `<h2>Defending Fundamental Rights</h2>
<p>Kenya's 2010 Constitution guarantees fundamental rights and freedoms. We handle constitutional petitions, human rights cases, and criminal defense matters including:</p>
<ul>
    <li>Constitutional petitions challenging unlawful state action</li>
    <li>Criminal defense and bail applications</li>
    <li>Police misconduct and unlawful detention claims</li>
    <li>Public interest litigation for social justice</li>
    <li>Victim rights and witness protection matters</li>
</ul>`,
        local: `<h2>Serving the Machakos Community</h2>
<p>Our location at <strong>Anam Annex Building, directly opposite Machakos Stadium</strong>, makes us the most accessible law firm for clients in Machakos Town, Kyumvi, Mavoko, Katani, and along the Kyumvi-Machakos-Kitui Road. We offer:</p>
<ul>
    <li>Convenient access from the Machakos bus park and Kyumvi junction</li>
    <li>Ample client parking at Anam Annex Building</li>
    <li>Virtual consultation options for remote clients</li>
    <li>Emergency legal assistance for urgent matters</li>
    <li>Competitive fees with transparent billing</li>
</ul>`
    };
    return specificContent[category] || `<h2>Professional Legal Guidance</h2><p>Our team provides expert legal advice on ${primary} and related matters. Contact our Machakos chambers for a confidential consultation.</p>`;
}

function generateFAQ(kw) {
    return `
<h2>Frequently Asked Questions</h2>
<div class="faq-item">
    <div class="faq-question">How much does a consultation cost?</div>
    <div class="faq-answer">We offer initial consultations at a reasonable fee. Contact our office at +254 724 327060 for current rates.</div>
</div>
<div class="faq-item">
    <div class="faq-question">How long does the ${kw.primary} process take?</div>
    <div class="faq-answer">Timelines vary depending on complexity. During your consultation, we will provide a realistic estimate.</div>
</div>
<div class="faq-item">
    <div class="faq-question">Do you handle cases outside Machakos?</div>
    <div class="faq-answer">Yes. While our chambers are at Anam Annex, opposite Machakos Stadium, we represent clients in courts across Kenya.</div>
</div>`;
}

function generateClosing() {
    return `
<div class="closing-cta">
    <h3>Need Legal Advice on This Matter?</h3>
    <p>Schedule a confidential consultation with D.M. Munyaka & Company Advocates at our Anam Annex chambers, opposite Machakos Stadium.</p>
    <div class="cta-buttons">
        <a href="/contact.html" class="btn-primary">Book Consultation →</a>
        <a href="https://wa.me/254724327060" class="btn-wa">WhatsApp Us</a>
    </div>
    <p class="contact-direct">Call us directly: <strong>+254 724 327060</strong> | <strong>+254 750 698847</strong></p>
    <p class="location">Anam Annex Building, Suite 1 | Opposite Machakos Stadium | Along Kyumvi-Machakos-Kitui Road</p>
</div>`;
}

function generateRelatedPostsHTML(relatedPosts) {
    if (relatedPosts.length === 0) return '';
    
    let html = `<div class="related-posts">
        <h3>Further Legal Analysis</h3>
        <div class="related-grid">`;
    
    for (let i = 0; i < relatedPosts.length; i++) {
        const post = relatedPosts[i];
        const imageUrl = getRandomImage(i);
        html += `
            <div class="related-card">
                <img src="${imageUrl}" alt="${post.title}" class="related-img" loading="lazy">
                <div class="related-category">${post.categoryDisplay}</div>
                <h4><a href="/blogs/${post.slug}.html">${post.title}</a></h4>
                <p>${post.excerpt}</p>
                <a href="/blogs/${post.slug}.html" class="read-more">Read More →</a>
            </div>`;
    }
    
    html += `</div></div>`;
    return html;
}

function generateBlogContent(kw, category, categoryDisplay, index) {
    const primary = kw.primary;
    const secondary = kw.secondary;
    
    const intro = getIntro(primary, secondary, index);
    
    return `
<div class="blog-content">
    <div class="drop-cap">
        <p>${intro}</p>
    </div>

    <h2>Understanding ${primary} in Kenya</h2>
    <p>${primary} is a critical aspect of ${categoryDisplay} in Kenya. At D.M. Munyaka & Company Advocates, we regularly assist clients with matters relating to ${secondary} and related legal issues under the relevant Kenyan statutes and judicial precedents.</p>

    <div class="highlight-box">
        <h3>Key Takeaways</h3>
        <ul>
            <li>✓ Understanding your legal rights and obligations under Kenyan law</li>
            <li>✓ The importance of professional legal guidance from qualified advocates</li>
            <li>✓ How proper documentation protects your interests in the long term</li>
            <li>✓ Why choosing a law firm near Machakos Stadium offers convenience and accessibility</li>
        </ul>
    </div>

    <h2>Legal Framework Governing ${primary}</h2>
    <p>The legal framework for ${primary} in Kenya is primarily derived from statutes, case law, and regulatory guidelines. Our team, led by an LLB (Hons) graduate of Moi University and the Kenya School of Law, provides strategic guidance tailored to your specific circumstances.</p>

    <h3>Why Legal Expertise Matters</h3>
    <p>Navigating ${primary} without proper legal representation can lead to costly mistakes, delays, and adverse outcomes. At our <strong>Anam Annex chambers — directly opposite Machakos Stadium</strong> — we provide accessible, premium legal services to clients throughout Machakos County and beyond.</p>

    <div class="stat-box">
        <div class="stat-item">
            <div class="stat-number">5+</div>
            <div class="stat-label">Years Experience</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">500+</div>
            <div class="stat-label">Cases Handled</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">99%</div>
            <div class="stat-label">Client Satisfaction</div>
        </div>
    </div>

    ${generateCategorySpecificContent(category, primary, secondary)}
    
    <h2>Looking for a Lawyer in Machakos?</h2>
    <p>If you need legal assistance with ${primary}, our offices at <strong>Anam Annex Building, Suite 1, opposite Machakos Stadium</strong> are easily accessible. Contact us today to schedule a consultation with D.M. Munyaka, an LLB (Hons) Moi University and KSL graduate.</p>
    
    ${generateFAQ(kw)}
    
    ${generateAuthorBio()}
    
    ${generateClosing()}
</div>`;
}

// ============================================
// PILLAR PAGE GENERATION
// ============================================
function generatePillarPages() {
    const pillars = [
        { slug: "conveyancing-lawyer-machakos", title: "Conveyancing Lawyer in Machakos | Property & Land Law Experts", category: "conveyancing", description: "Expert conveyancing lawyer in Machakos. Land title transfers, due diligence, and property dispute resolution. Located at Anam Annex, opposite Machakos Stadium.", keywords: "conveyancing lawyer Machakos, land advocate, property transfer Kenya" },
        { slug: "family-lawyer-machakos", title: "Family Lawyer in Machakos | Divorce, Custody & Succession", category: "family", description: "Compassionate family lawyer in Machakos. Divorce, child custody, wills, probate, and succession planning. LLB (Hons) Moi & KSL graduate.", keywords: "family lawyer Machakos, divorce advocate, succession planning Kenya" },
        { slug: "corporate-lawyer-machakos", title: "Corporate Lawyer in Machakos | Business Registration & Compliance", category: "corporate", description: "Corporate lawyer in Machakos for company registration, contracts, mergers, and KRA compliance. Serving Machakos Town and beyond.", keywords: "corporate lawyer Machakos, business attorney, company registration Kenya" },
        { slug: "litigation-lawyer-machakos", title: "Litigation Lawyer in Machakos | Civil & Commercial Disputes", category: "litigation", description: "Experienced litigation lawyer in Machakos. Civil claims, debt recovery, employment disputes, and court representation.", keywords: "litigation lawyer Machakos, civil advocate, dispute resolution Kenya" },
        { slug: "criminal-lawyer-machakos", title: "Criminal Lawyer in Machakos | Defense & Bail Applications", category: "constitutional", description: "Criminal defense lawyer in Machakos. Bail applications, trial representation, and police matters. 24/7 emergency legal help.", keywords: "criminal lawyer Machakos, defense attorney, bail application Kenya" },
        { slug: "employment-lawyer-machakos", title: "Employment Lawyer in Machakos | Labour Law & Workplace Rights", category: "employment", description: "Employment lawyer in Machakos. Unfair dismissal, redundancy, employment contracts, and labour court representation.", keywords: "employment lawyer Machakos, labour advocate, workplace rights Kenya" },
        { slug: "banking-lawyer-machakos", title: "Banking & Insurance Lawyer in Machakos | Financial Services", category: "banking", description: "Banking and insurance lawyer in Machakos. CBK compliance, AML, insurance claims, and fintech regulation.", keywords: "banking lawyer Machakos, insurance advocate, financial services Kenya" },
        { slug: "lawyer-machakos", title: "Lawyer in Machakos | D.M. Munyaka & Company Advocates", category: "local", description: "Experienced lawyer in Machakos at Anam Annex Building, opposite Machakos Stadium. Conveyancing, corporate, family, and criminal law.", keywords: "lawyer Machakos, advocate near me, legal services Machakos" }
    ];
    
    for (const pillar of pillars) {
        const categoryPosts = allPosts.filter(p => p.category === pillar.category);
        let blogLinks = '';
        for (const post of categoryPosts.slice(0, 15)) {
            blogLinks += `<li><a href="/blogs/${post.slug}.html">${post.title}</a></li>\n`;
        }
        
        const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${pillar.title}</title><meta name="description" content="${pillar.description}"><meta name="robots" content="index, follow"><link rel="canonical" href="https://dmmunyakaadv.co.ke/pillars/${pillar.slug}.html"><style>*{margin:0;padding:0;box-sizing:border-box;}body{font-family:'Georgia',serif;line-height:1.7;color:#1a2a3a;background:#fff;}.container{max-width:1100px;margin:0 auto;padding:0 24px;}header{background:#1E2B3C;color:white;padding:60px 0;text-align:center;}header h1{font-size:2.5rem;font-family:'Playfair Display',serif;}.gold{color:#B59A5D;}.content{padding:60px 0;}h2{color:#1E2B3C;margin:30px 0 15px;border-left:4px solid #B59A5D;padding-left:20px;}.cta-box{background:#F8F9FA;padding:40px;text-align:center;margin:40px 0;border-left:4px solid #B59A5D;}.btn{background:#B59A5D;color:#1E2B3C;padding:12px 28px;text-decoration:none;display:inline-block;margin-top:20px;}.blog-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px;margin:30px 0;list-style:none;}.blog-list li{background:#F8F9FA;padding:15px;}.blog-list a{color:#1E2B3C;text-decoration:none;font-weight:500;}.contact-info{background:#1E2B3C;color:white;padding:40px;text-align:center;margin-top:40px;}.contact-info a{color:#B59A5D;}@media(max-width:768px){header h1{font-size:1.8rem;}}</style></head>
<body><header><div class="container"><h1>${pillar.title.split('|')[0]}</h1><p>📍 Anam Annex Building, Suite 1 | Opposite Machakos Stadium | <span class="gold">📞 +254 724 327060</span></p></div></header><div class="content"><div class="container"><p><strong>D.M. Munyaka & Company Advocates</strong> provides expert legal services from our chambers opposite Machakos Stadium. Led by an <strong>LLB (Hons) graduate of Moi University</strong> and the <strong>Kenya School of Law (KSL)</strong>, our firm combines academic excellence with practical experience.</p><div class="cta-box"><h3>Need a Lawyer in Machakos?</h3><p>Call us today: <strong>+254 724 327060</strong></p><a href="/contact.html" class="btn">Schedule Consultation →</a></div><h2>Related Legal Guides</h2><ul class="blog-list">${blogLinks}</ul><div class="contact-info"><p>📞 <a href="tel:+254724327060">+254 724 327060</a></p><p>✉️ <a href="mailto:info@dmmunyakaadv.co.ke">info@dmmunyakaadv.co.ke</a></p></div></div></div></body></html>`;
        
        fs.writeFileSync(path.join(PILLAR_DIR, `${pillar.slug}.html`), html);
        console.log(`✅ Generated pillar page: ${pillar.slug}.html`);
    }
}

// ============================================
// SITEMAP GENERATION
// ============================================
function generateSitemap(allPostsData) {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    ['index.html', 'about.html', 'services.html', 'team.html', 'contact.html'].forEach(page => {
        xml += `\n<url><loc>https://dmmunyakaadv.co.ke/${page}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`;
    });
    const pillarFiles = fs.readdirSync(PILLAR_DIR);
    pillarFiles.forEach(file => {
        xml += `\n<url><loc>https://dmmunyakaadv.co.ke/pillars/${file}</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`;
    });
    allPostsData.forEach(post => {
        xml += `\n<url><loc>https://dmmunyakaadv.co.ke/blogs/${post.slug}.html</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`;
    });
    xml += `\n</urlset>`;
    fs.writeFileSync(SITEMAP_PATH, xml);
    console.log('✅ Generated sitemap.xml');
}

// ============================================
// BLOG INDEX PAGE GENERATION
// ============================================
function generateBlogIndex() {
    let indexHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Legal Insights Archive | D.M. Munyaka & Company Advocates</title><meta name="description" content="Complete archive of legal insights from D.M. Munyaka & Company Advocates."><meta name="robots" content="index, follow"><style>*{margin:0;padding:0;box-sizing:border-box;}body{font-family:'Georgia',serif;background:#F8F9FA;}.top-nav{background:#1E2B3C;padding:15px 0;border-bottom:1px solid #B59A5D;}.container{max-width:1200px;margin:0 auto;padding:0 20px;}.top-nav .container{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:15px;}.logo{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:600;}.logo a{color:white;text-decoration:none;display:flex;align-items:center;gap:10px;}.logo-img{width:32px;height:32px;}.logo span{color:#B59A5D;}.nav-links{display:flex;gap:25px;}.nav-links a{color:#cfdde6;text-decoration:none;font-size:0.85rem;}.nav-links a:hover,.nav-links a.active{color:#B59A5D;}.nav-cta{background:#B59A5D;color:#1E2B3C!important;padding:6px 16px;}.hero{background:linear-gradient(135deg,#1E2B3C 0%,#141f2c 100%);color:white;padding:80px 0;text-align:center;}.hero h1{font-size:2.5rem;font-family:'Playfair Display',serif;}.hero .gold{color:#B59A5D;}.filter-bar{background:white;padding:20px 0;border-bottom:1px solid #EAECEF;position:sticky;top:0;z-index:100;}.filter-buttons{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}.filter-btn{background:none;border:1px solid #EAECEF;padding:8px 20px;cursor:pointer;font-family:inherit;}.filter-btn:hover,.filter-btn.active{background:#B59A5D;color:#1E2B3C;border-color:#B59A5D;}.blog-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:30px;padding:50px 0;}.blog-card{background:white;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,0.05);transition:transform 0.3s;}.blog-card:hover{transform:translateY(-5px);}.blog-image{width:100%;height:200px;object-fit:cover;}.blog-content{padding:25px;}.blog-category{color:#B59A5D;font-size:0.7rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;display:inline-block;}.blog-card h3{margin-bottom:12px;font-size:1.2rem;}.blog-card h3 a{color:#1E2B3C;text-decoration:none;}.blog-card h3 a:hover{color:#B59A5D;}.blog-excerpt{color:#5a6e7e;font-size:0.85rem;margin-bottom:15px;}.read-more{color:#B59A5D;text-decoration:none;font-weight:bold;}.footer{background:#1E2B3C;color:#cfdde6;padding:50px 0 30px;text-align:center;}.footer a{color:#B59A5D;text-decoration:none;}@media(max-width:768px){.blog-grid{grid-template-columns:1fr;}.hero h1{font-size:1.8rem;}}</style></head>
<body><div class="top-nav"><div class="container"><div class="logo"><a href="/index.html"><img src="/dm-munyaka-favicon.webp" alt="Logo" class="logo-img">D.M. MUNYAKA <span>& COMPANY</span></a></div><div class="nav-links"><a href="/index.html">Home</a><a href="/about.html">The Firm</a><a href="/services.html">Services</a><a href="/team.html">Our Team</a><a href="#" class="active">Insights</a><a href="/contact.html" class="nav-cta">Consultation</a></div></div></div><section class="hero"><div class="container"><h1>Legal <span class="gold">Insights</span> Archive</h1><p>Expert legal analysis from D.M. Munyaka, LLB (Hons) Moi University & Kenya School of Law (KSL) graduate.</p></div></section><div class="filter-bar"><div class="container"><div class="filter-buttons"><button class="filter-btn active" data-filter="all">All</button><button class="filter-btn" data-filter="conveyancing">Conveyancing</button><button class="filter-btn" data-filter="corporate">Corporate</button><button class="filter-btn" data-filter="litigation">Litigation</button><button class="filter-btn" data-filter="family">Family</button><button class="filter-btn" data-filter="employment">Employment</button><button class="filter-btn" data-filter="banking">Banking</button><button class="filter-btn" data-filter="constitutional">Constitutional</button><button class="filter-btn" data-filter="local">Local</button></div></div></div><div class="container"><div class="blog-grid" id="blogGrid">`;
    
    for (let i = 0; i < allPosts.length; i++) {
        const post = allPosts[i];
        const imageUrl = getRandomImage(i);
        indexHtml += `<div class="blog-card" data-category="${post.category}"><img src="${imageUrl}" alt="${post.title}" class="blog-image" loading="lazy"><div class="blog-content"><span class="blog-category">${post.categoryDisplay}</span><h3><a href="/blogs/${post.slug}.html">${post.title}</a></h3><p class="blog-excerpt">${post.excerpt}</p><a href="/blogs/${post.slug}.html" class="read-more">Read Full Insight →</a></div></div>`;
    }
    
    indexHtml += `</div></div><footer class="footer"><div class="container"><p>© ${new Date().getFullYear()} D.M. Munyaka & Company Advocates</p><p>Designed & Developed By <a href="https://sarahadevelopers.co.ke" target="_blank">Saraha Developers</a></p></div></footer><script>const filterButtons=document.querySelectorAll('.filter-btn');const blogCards=document.querySelectorAll('.blog-card');filterButtons.forEach(button=>{button.addEventListener('click',()=>{filterButtons.forEach(btn=>btn.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;blogCards.forEach(card=>{if(filter==='all'||card.dataset.category===filter){card.style.display='block';}else{card.style.display='none';}});});});</script></body></html>`;
    
    fs.writeFileSync(path.join(BLOG_DIR, 'index.html'), indexHtml);
    console.log('✅ Generated blog index: index.html');
}

// ============================================
// GENERATE ALL 100 BLOGS
// ============================================

let generatedCount = 0;
const today = new Date().toISOString().split('T')[0];

// First pass: collect all posts
for (const [category, keywordsList] of Object.entries(keywordClusters)) {
    for (const kw of keywordsList) {
        const title = kw.intent;
        const slug = createSlug(title);
        allPosts.push({
            slug: slug,
            title: title,
            category: category,
            categoryDisplay: getCategoryDisplayName(category),
            excerpt: kw.intent.substring(0, 120) + "...",
            primary: kw.primary
        });
    }
}

// Second pass: generate each blog with FULL PREMIUM TEMPLATE
let blogIndex = 0;
for (const [category, keywordsList] of Object.entries(keywordClusters)) {
    const categoryDisplay = getCategoryDisplayName(category);
    
    for (const kw of keywordsList) {
        const title = `${kw.intent} (2026 Guide) | Machakos Advocate`;
        const slug = createSlug(kw.intent);
        const primary = kw.primary;
        const secondary = kw.secondary;
        
        const relatedPosts = allPosts.filter(p => p.category === category && p.slug !== slug).slice(0, 3);
        const featuredImage = getRandomImage(blogIndex);
        
        let content = generateBlogContent(kw, category, categoryDisplay, blogIndex);
        content = injectInternalLinks(content, category, slug);
        const relatedHTML = generateRelatedPostsHTML(relatedPosts);
        
        // FULL PREMIUM HTML TEMPLATE with Navbar, Footer, and WhatsApp
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${primary}: Expert legal analysis from D.M. Munyaka, LLB (Hons) Moi University & Kenya School of Law (KSL) graduate. Located at Anam Annex, opposite Machakos Stadium.">
    <meta name="author" content="D.M. Munyaka & Company Advocates">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
    <link rel="canonical" href="https://dmmunyakaadv.co.ke/blogs/${slug}.html">
    
    <!-- Open Graph -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="Expert legal analysis on ${primary} from D.M. Munyaka & Company Advocates.">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://dmmunyakaadv.co.ke/blogs/${slug}.html">
    <meta property="og:image" content="${featuredImage}">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Georgia&display=swap" rel="stylesheet">
    
    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "${title.replace(/"/g, '\\"')}",
        "description": "Expert legal analysis on ${primary} from D.M. Munyaka & Company Advocates.",
        "mainEntityOfPage": {"@type": "WebPage", "@id": "https://dmmunyakaadv.co.ke/blogs/${slug}.html"},
        "image": "${featuredImage}",
        "datePublished": "${today}",
        "author": {
            "@type": "Person",
            "name": "D.M. Munyaka",
            "jobTitle": "Advocate of the High Court of Kenya",
            "alumniOf": [
                {"@type": "CollegeOrUniversity", "name": "Moi University", "degree": "LLB (Hons)"},
                {"@type": "CollegeOrUniversity", "name": "Kenya School of Law", "degree": "Postgraduate Diploma in Law"}
            ]
        }
    }
    </script>
    
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Georgia', 'Times New Roman', serif; line-height: 1.7; color: #1a2a3a; background: #fff; }
        .container { max-width: 900px; margin: 0 auto; padding: 0 24px; }
        .blog-header { background: #1E2B3C; color: white; padding: 60px 0 40px; }
        .blog-header h1 { font-size: 2.5rem; margin-bottom: 20px; font-family: 'Playfair Display', 'Georgia', serif; }
        .featured-image { width: 100%; max-height: 450px; object-fit: cover; margin-top: 30px; }
        .blog-wrapper { padding: 60px 0; }
        .drop-cap:first-letter { font-size: 4rem; font-weight: bold; color: #B59A5D; float: left; margin-right: 12px; line-height: 0.8; }
        h2 { color: #1E2B3C; margin: 40px 0 20px; font-size: 1.8rem; border-left: 4px solid #B59A5D; padding-left: 20px; }
        .highlight-box { background: #F8F9FA; border-left: 4px solid #B59A5D; padding: 25px; margin: 30px 0; }
        .stat-box { display: flex; justify-content: space-around; background: #1E2B3C; color: white; padding: 30px; margin: 40px 0; text-align: center; flex-wrap: wrap; gap: 20px; }
        .stat-number { font-size: 2.5rem; font-weight: bold; color: #B59A5D; }
        .faq-item { border-bottom: 1px solid #EAECEF; }
        .faq-question { padding: 20px 0; font-weight: 600; color: #1E2B3C; cursor: pointer; }
        .faq-answer { padding-bottom: 20px; color: #5a6e7e; display: block; }
        .closing-cta { background: #1E2B3C; color: white; padding: 50px 40px; text-align: center; margin: 50px 0; }
        .closing-cta h3 { color: #B59A5D; margin-bottom: 15px; }
        .btn-primary { background: #B59A5D; color: #1E2B3C; padding: 12px 28px; text-decoration: none; font-weight: bold; display: inline-block; }
        .related-posts { margin-top: 60px; padding-top: 40px; border-top: 2px solid #EAECEF; }
        .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; }
        .related-card { background: #F8F9FA; padding: 20px; }
        .related-img { width: 100%; height: 150px; object-fit: cover; margin-bottom: 15px; }
        @media (max-width: 768px) { .related-grid { grid-template-columns: 1fr; } .blog-header h1 { font-size: 1.8rem; } }
    </style>
</head>
<body>

${generateNavbar()}

<div class="blog-header">
    <div class="container">
        <h1>${title}</h1>
        <img src="${featuredImage}" alt="${primary} legal guide in Kenya - D.M. Munyaka Advocates Machakos" class="featured-image" loading="lazy">
    </div>
</div>

<div class="blog-wrapper">
    <div class="container">
        ${content}
        ${relatedHTML}
    </div>
</div>

${generateFooter()}
${generateWhatsAppButton()}

</body>
</html>`;
        
        const filePath = path.join(BLOG_DIR, `${slug}.html`);
        fs.writeFileSync(filePath, html);
        generatedCount++;
        blogIndex++;
        console.log(`✅ Generated [${generatedCount}/100]: ${slug}.html`);
    }
}

// Generate everything
generatePillarPages();
generateBlogIndex();
generateSitemap(allPosts);

console.log(`\n🎉 SUCCESS! Generated ${generatedCount} SEO-optimized blog posts`);
console.log(`📋 Generated ${fs.readdirSync(PILLAR_DIR).length} pillar pages`);
console.log('📋 Sitemap generated: sitemap.xml');
console.log('\n🔑 NEXT STEPS:');
console.log('1. Submit sitemap.xml to Google Search Console');
console.log('2. Submit pillar pages to Google Search Console');
console.log('3. Get 15-30 Google reviews mentioning "lawyer Machakos"');
console.log('\n📍 Developer Credits: Designed & Developed By <a href="https://sarahadevelopers.co.ke" target="_blank">Saraha Developers</a>');