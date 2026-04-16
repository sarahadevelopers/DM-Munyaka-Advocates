 document.getElementById('dynamicYear').innerHTML = `© ${new Date().getFullYear()} D.M. Munyaka & Company Advocates. All Rights Reserved.`;
    
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });
    
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    function openMenu() { mobileMenu.classList.add('active'); document.body.style.overflow = 'hidden'; }
    function closeMenuFunc() { mobileMenu.classList.remove('active'); document.body.style.overflow = ''; }
    hamburger.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuFunc);
    document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', closeMenuFunc));

    // ============================================
    // HARDCODED BLOG LIST - Generated from your actual blog files
    // ============================================
    
    const allBlogs = [
        { slug: "how-to-verify-a-land-title-at-machakos-land-registry", title: "How to Verify a Land Title at Machakos Land Registry", category: "conveyancing", excerpt: "Before signing any land agreement, protect your investment with this rigorous due diligence guide from our Anam Annex offices.", date: "2024-04-10" },
        { slug: "the-complete-guide-to-property-transfer-in-kenya", title: "The Complete Guide to Property Transfer in Kenya", category: "conveyancing", excerpt: "Step-by-step guide to understanding the property transfer process in Kenya, from sale agreement to title registration.", date: "2024-04-08" },
        { slug: "how-to-avoid-land-fraud-in-machakos-county", title: "How to Avoid Land Fraud in Machakos County", category: "conveyancing", excerpt: "Learn about common land fraud schemes in Machakos and how to protect yourself with proper due diligence.", date: "2024-04-05" },
        { slug: "essential-clauses-in-commercial-lease-agreements", title: "Essential Clauses in Commercial Lease Agreements", category: "conveyancing", excerpt: "Every tenant and landlord should know these critical clauses before signing a commercial lease.", date: "2024-04-01" },
        { slug: "how-to-register-a-company-in-kenya-via-ecitizen", title: "How to Register a Company in Kenya via eCitizen", category: "corporate", excerpt: "Complete guide to registering your business online through the eCitizen portal in 2024.", date: "2024-03-28" },
        { slug: "business-name-vs-limited-company-which-is-right-for-you", title: "Business Name vs Limited Company: Which is Right for You?", category: "corporate", excerpt: "Compare the legal and tax implications of different business structures in Kenya.", date: "2024-03-25" },
        { slug: "why-every-partnership-needs-a-written-agreement", title: "Why Every Partnership Needs a Written Agreement", category: "corporate", excerpt: "Avoid partnership disputes with a properly drafted partnership agreement.", date: "2024-03-20" },
        { slug: "civil-litigation-process-in-kenya-from-filing-to-judgment", title: "Civil Litigation Process in Kenya: From Filing to Judgment", category: "litigation", excerpt: "Understand the complete court process for civil cases in Kenya.", date: "2024-03-15" },
        { slug: "debt-recovery-options-small-claims-court-vs-ordinary-procedure", title: "Debt Recovery Options: Small Claims Court vs Ordinary Procedure", category: "litigation", excerpt: "Compare different legal avenues for recovering debts in Kenya.", date: "2024-03-10" },
        { slug: "adr-vs-litigation-benefits-of-mediation-and-arbitration", title: "ADR vs Litigation: Benefits of Mediation and Arbitration", category: "litigation", excerpt: "Explore alternative dispute resolution methods that can save time and money.", date: "2024-03-05" },
        { slug: "how-to-write-a-valid-will-in-kenya-legal-requirements", title: "How to Write a Valid Will in Kenya: Legal Requirements", category: "family", excerpt: "Learn the legal requirements for creating a valid Will under Kenyan law.", date: "2024-02-28" },
        { slug: "probate-and-letters-of-administration-settling-an-estate", title: "Probate and Letters of Administration: Settling an Estate", category: "family", excerpt: "Guide to the probate process and obtaining Letters of Administration in Kenya.", date: "2024-02-22" },
        { slug: "divorce-in-kenya-grounds-process-and-children-s-rights", title: "Divorce in Kenya: Grounds, Process, and Children's Rights", category: "family", excerpt: "Understanding the divorce process and protecting children's interests.", date: "2024-02-15" },
        { slug: "unfair-dismissal-in-kenya-your-rights-under-employment-act", title: "Unfair Dismissal in Kenya: Your Rights Under Employment Act", category: "employment", excerpt: "Know your rights if you have been unfairly dismissed from employment.", date: "2024-02-10" },
        { slug: "redundancy-in-kenya-legal-procedure-and-severance-pay", title: "Redundancy in Kenya: Legal Procedure and Severance Pay", category: "employment", excerpt: "Legal requirements for redundancy and calculation of severance pay.", date: "2024-02-05" },
        { slug: "employment-contracts-in-kenya-mandatory-clauses", title: "Employment Contracts in Kenya: Mandatory Clauses", category: "employment", excerpt: "Essential clauses that must be included in every employment contract.", date: "2024-01-30" },
        { slug: "banking-regulation-in-kenya-central-bank-of-kenya-guidelines", title: "Banking Regulation in Kenya: Central Bank of Kenya Guidelines", category: "banking", excerpt: "Overview of CBK regulations affecting banks and financial institutions.", date: "2024-01-25" },
        { slug: "insurance-claims-in-kenya-how-to-dispute-denied-coverage", title: "Insurance Claims in Kenya: How to Dispute Denied Coverage", category: "banking", excerpt: "Steps to take when your insurance claim is wrongfully denied.", date: "2024-01-20" },
        { slug: "constitutional-petitions-in-kenya-enforcing-your-rights", title: "Constitutional Petitions in Kenya: Enforcing Your Rights", category: "constitutional", excerpt: "How to file a constitutional petition to enforce fundamental rights.", date: "2024-01-15" },
        { slug: "criminal-defense-in-kenya-bail-applications-and-trial-rights", title: "Criminal Defense in Kenya: Bail Applications and Trial Rights", category: "constitutional", excerpt: "Understanding your rights when facing criminal charges in Kenya.", date: "2024-01-10" },
        { slug: "find-a-lawyer-near-machakos-stadium-at-anam-annex-building", title: "Find a Lawyer Near Machakos Stadium at Anam Annex Building", category: "local", excerpt: "Conveniently located legal services opposite Machakos Stadium.", date: "2024-01-05" },
        { slug: "property-lawyer-in-machakos-land-transactions-and-disputes", title: "Property Lawyer in Machakos: Land Transactions and Disputes", category: "local", excerpt: "Expert property law services for Machakos residents and investors.", date: "2024-01-01" }
    ];

    // Add more blogs from your directory - expand this list with all your blog slugs
    // You can add the remaining blog slugs here from your blogs folder
    const additionalBlogs = [
        { slug: "buying-land-opposite-machakos-stadium-what-you-need-to-know", title: "Buying Land Opposite Machakos Stadium: What You Need to Know", category: "conveyancing", excerpt: "Essential guide for purchasing property near Machakos Stadium.", date: "2024-03-30" },
        { slug: "title-deed-registration-process-at-ardhi-house", title: "Title Deed Registration Process at Ardhi House", category: "conveyancing", excerpt: "Step-by-step guide to registering your title deed in Kenya.", date: "2024-03-27" },
        { slug: "resolving-land-boundary-disputes-in-machakos-courts", title: "Resolving Land Boundary Disputes in Machakos Courts", category: "conveyancing", excerpt: "Legal options for settling boundary disputes with neighbors.", date: "2024-03-22" },
        { slug: "legal-requirements-for-land-subdivision-in-kenya", title: "Legal Requirements for Land Subdivision in Kenya", category: "conveyancing", excerpt: "What you need to know before subdividing your property.", date: "2024-03-18" },
        { slug: "understanding-mortgage-charges-and-loan-agreements", title: "Understanding Mortgage Charges and Loan Agreements", category: "conveyancing", excerpt: "Legal aspects of mortgage agreements and property charges.", date: "2024-03-12" },
        { slug: "buying-apartments-sectional-properties-act-explained", title: "Buying Apartments: Sectional Properties Act Explained", category: "conveyancing", excerpt: "Understanding sectional title ownership for apartments.", date: "2024-03-08" }
    ];

    // Merge all blogs
    const completeBlogs = [...allBlogs, ...additionalBlogs];
    
    // Rotational images array
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

    function getRandomImage(index) { return ROTATIONAL_IMAGES[index % ROTATIONAL_IMAGES.length]; }
    function getCategoryDisplay(cat) {
        const displays = { conveyancing: 'Conveyancing & Real Estate', corporate: 'Corporate & Commercial Law', litigation: 'Litigation & Dispute Resolution', family: 'Family & Succession Law', employment: 'Employment & Labour Law', banking: 'Banking & Insurance Law', constitutional: 'Constitutional & Human Rights', local: 'Local Legal Services' };
        return displays[cat] || 'Legal Insights';
    }

    let currentCategory = 'all', currentSearchTerm = '', currentPage = 1;
    const postsPerPage = 8;

    function filterBlogs() {
        let filtered = completeBlogs;
        if (currentCategory !== 'all') filtered = filtered.filter(b => b.category === currentCategory);
        if (currentSearchTerm) { const term = currentSearchTerm.toLowerCase(); filtered = filtered.filter(b => b.title.toLowerCase().includes(term) || b.excerpt.toLowerCase().includes(term)); }
        return filtered;
    }

    function updateCategoryCounts() {
        const counts = { all: completeBlogs.length, conveyancing: 0, corporate: 0, litigation: 0, family: 0, employment: 0, banking: 0, constitutional: 0, local: 0 };
        completeBlogs.forEach(b => { if (counts[b.category] !== undefined) counts[b.category]++; });
        document.getElementById('countAll').innerText = counts.all;
        document.getElementById('countConveyancing').innerText = counts.conveyancing;
        document.getElementById('countCorporate').innerText = counts.corporate;
        document.getElementById('countLitigation').innerText = counts.litigation;
        document.getElementById('countFamily').innerText = counts.family;
        document.getElementById('countEmployment').innerText = counts.employment;
        document.getElementById('countBanking').innerText = counts.banking;
        document.getElementById('countConstitutional').innerText = counts.constitutional;
        document.getElementById('countLocal').innerText = counts.local;
    }

    function renderBlogs() {
        const container = document.getElementById('blogPostsContainer');
        const filtered = filterBlogs();
        const totalPages = Math.ceil(filtered.length / postsPerPage);
        const start = (currentPage - 1) * postsPerPage;
        const paginated = filtered.slice(start, start + postsPerPage);
        
        if (filtered.length === 0) { container.innerHTML = '<div class="no-results">No insights found matching your criteria.</div>'; return; }
        
        const featured = paginated[0];
        const rest = paginated.slice(1);
        let html = '';
        
        if (featured) {
            const idx = completeBlogs.findIndex(b => b.slug === featured.slug);
            html += `<div class="featured-post"><div class="featured-image" style="background-image: url('${getRandomImage(idx)}');"></div><div class="post-category">${getCategoryDisplay(featured.category).toUpperCase()} • MACHAKOS</div><h2>${featured.title}</h2><div class="post-meta"><span>📅 ${featured.date}</span><span>⏱️ 8 min read</span><span>🏷️ ${getCategoryDisplay(featured.category)}</span></div><div class="post-excerpt"><p>${featured.excerpt}</p></div><a href="blogs/${featured.slug}.html" class="read-more-link">Read Full Analysis →</a></div>`;
        }
        
        if (rest.length) {
            html += `<div class="posts-grid">`;
            rest.forEach((post, i) => {
                const idx = completeBlogs.findIndex(b => b.slug === post.slug);
                html += `<div class="blog-post-item"><div class="post-thumbnail" style="background-image: url('${getRandomImage(idx)}');"></div><div class="post-content"><div class="post-meta-small">${getCategoryDisplay(post.category).toUpperCase()} • 5 min read</div><h3><a href="blogs/${post.slug}.html">${post.title}</a></h3><p>${post.excerpt.substring(0, 120)}...</p></div></div>`;
            });
            html += `</div>`;
        }
        
        if (totalPages > 1) {
            html += `<div class="pagination">`;
            for (let i = 1; i <= Math.min(totalPages, 5); i++) html += `<a class="${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</a>`;
            if (totalPages > 5) html += `<span>...</span><a data-page="${totalPages}">${totalPages}</a>`;
            html += `</div>`;
        }
        
        container.innerHTML = html;
        document.querySelectorAll('.pagination a').forEach(link => { link.addEventListener('click', (e) => { currentPage = parseInt(e.target.dataset.page); renderBlogs(); window.scrollTo({ top: 0, behavior: 'smooth' }); }); });
        gsap.fromTo(".featured-post, .blog-post-item", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 });
    }

    document.querySelectorAll('#categoryList a').forEach(link => { link.addEventListener('click', (e) => { e.preventDefault(); currentCategory = e.target.dataset.category; currentPage = 1; renderBlogs(); }); });
    document.getElementById('searchBtn').addEventListener('click', () => { currentSearchTerm = document.getElementById('searchInput').value; currentPage = 1; renderBlogs(); });
    document.getElementById('searchInput').addEventListener('keypress', (e) => { if (e.key === 'Enter') { currentSearchTerm = e.target.value; currentPage = 1; renderBlogs(); } });
    document.getElementById('subscribeBtn').addEventListener('click', () => { const email = document.getElementById('newsletterEmail').value; if (email && email.includes('@')) { alert(`Thank you for subscribing! You'll receive our legal insights at ${email}`); document.getElementById('newsletterEmail').value = ''; } else alert('Please enter a valid email address.'); });
    
    updateCategoryCounts();
    renderBlogs();
    gsap.from(".page-hero h1", { opacity: 0, y: 40, duration: 1, delay: 0.2 });