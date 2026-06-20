from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "cv" / "ionut-francisc-cv-en.pdf"

INK = colors.HexColor("#111827")
MUTED = colors.HexColor("#4B5563")
ACCENT = colors.HexColor("#047857")
LIGHT = colors.HexColor("#D1FAE5")
LINE = colors.HexColor("#D1D5DB")


def register_fonts():
    font_dir = Path("/System/Library/Fonts/Supplemental")
    pdfmetrics.registerFont(TTFont("Arial", font_dir / "Arial.ttf"))
    pdfmetrics.registerFont(TTFont("Arial-Bold", font_dir / "Arial Bold.ttf"))
    pdfmetrics.registerFont(TTFont("Arial-Italic", font_dir / "Arial Italic.ttf"))


def draw_page(canvas, doc):
    canvas.saveState()
    width, height = A4

    if doc.page == 1:
        canvas.setFillColor(INK)
        canvas.rect(0, height - 43 * mm, width, 43 * mm, fill=1, stroke=0)
        canvas.setFillColor(ACCENT)
        canvas.rect(0, height - 43 * mm, width, 2.5 * mm, fill=1, stroke=0)
        canvas.setFillColor(colors.white)
        canvas.setFont("Arial-Bold", 24)
        canvas.drawCentredString(width / 2, height - 15 * mm, "IONUȚ FRANCISC")
        canvas.setFillColor(LIGHT)
        canvas.setFont("Arial", 9.5)
        canvas.drawCentredString(
            width / 2,
            height - 24 * mm,
            "Security & Privacy (GRC) Consultant | Secure-by-Design | Incident Governance | PKI / HSM",
        )
        canvas.setFillColor(colors.white)
        canvas.setFont("Arial", 7.8)
        canvas.drawCentredString(
            width / 2,
            height - 32 * mm,
            "Bucharest, Romania | +40 725 969 006 (WhatsApp) | Contact form on website",
        )
        canvas.drawCentredString(
            width / 2,
            height - 37 * mm,
            "linkedin.com/in/ionut-iulian-francisc | github.com/joahn3 | ionut-francisc.netlify.app",
        )

    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 13 * mm, width - 18 * mm, 13 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Arial", 7.5)
    canvas.drawString(18 * mm, 8.5 * mm, "Ionuț Francisc - Public CV - June 2026")
    canvas.drawRightString(width - 18 * mm, 8.5 * mm, f"Page {doc.page}")

    canvas.setTitle("Ionuț Francisc - Security and Privacy Consultant CV")
    canvas.setAuthor("Ionuț Francisc")
    canvas.setSubject("Public professional resume")
    canvas.saveState()
    canvas.restoreState()
    canvas.restoreState()


def bullets(items, style):
    return ListFlowable(
        [ListItem(Paragraph(item, style), leftIndent=8) for item in items],
        bulletColor=ACCENT,
        bulletFontName="Arial-Bold",
        bulletFontSize=7,
        bulletType="bullet",
        leftIndent=12,
        spaceAfter=5,
    )


def role(title, context, items, styles):
    return KeepTogether(
        [
            Paragraph(title, styles["role"]),
            Paragraph(context, styles["context"]),
            bullets(items, styles["body"]),
            Spacer(1, 2),
        ]
    )


def build():
    register_fonts()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=18 * mm,
        bottomMargin=18 * mm,
        title="Ionuț Francisc CV",
        author="Ionuț Francisc",
    )

    sample = getSampleStyleSheet()
    styles = {
        "name": ParagraphStyle(
            "Name",
            parent=sample["Title"],
            fontName="Arial-Bold",
            fontSize=24,
            leading=27,
            textColor=colors.white,
            alignment=TA_CENTER,
            spaceAfter=4,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=sample["Normal"],
            fontName="Arial",
            fontSize=10,
            leading=13,
            textColor=LIGHT,
            alignment=TA_CENTER,
            spaceAfter=5,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=sample["Normal"],
            fontName="Arial",
            fontSize=8,
            leading=11,
            textColor=colors.white,
            alignment=TA_CENTER,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=sample["Heading2"],
            fontName="Arial-Bold",
            fontSize=11,
            leading=13,
            textColor=ACCENT,
            spaceBefore=7,
            spaceAfter=4,
            borderWidth=0,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=sample["Heading3"],
            fontName="Arial-Bold",
            fontSize=9.3,
            leading=11.5,
            textColor=INK,
            spaceBefore=4,
            spaceAfter=1,
        ),
        "context": ParagraphStyle(
            "Context",
            parent=sample["Normal"],
            fontName="Arial-Italic",
            fontSize=8.2,
            leading=10.5,
            textColor=MUTED,
            spaceAfter=2,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=sample["BodyText"],
            fontName="Arial",
            fontSize=8.3,
            leading=11,
            textColor=INK,
            spaceAfter=2,
        ),
        "compact": ParagraphStyle(
            "Compact",
            parent=sample["BodyText"],
            fontName="Arial",
            fontSize=8.3,
            leading=11,
            textColor=INK,
            spaceAfter=3,
        ),
    }

    story = [
        Spacer(1, 28 * mm),
        Paragraph("PROFILE", styles["section"]),
        bullets(
            [
                "Security, Privacy, and GRC professional with more than 10 years of experience spanning risk assessments, privacy-by-design, secure-by-design reviews, audit readiness, incident governance, and control evidence.",
                "CSIRT-facing BISO delegate experience coordinating intake, stakeholders, remediation actions, closure criteria, and lessons learned.",
                "Hands-on experience with PKI, certificate lifecycle management, key exchanges, and Gemalto Cloud HSM in a regulated banking and blockchain context.",
                "Linux administration foundation supported by historical LPIC-1 and LPIC-2 certifications (issued 2018, expired 2023).",
                "Founder and owner of ElectroVerde, supported by Romanian qualifications in electrical construction and photovoltaic solar system installation.",
            ],
            styles["body"],
        ),
        Paragraph("CORE EXPERTISE", styles["section"]),
        Paragraph(
            "<b>Security &amp; assurance:</b> risk assessments, control interpretation, control-to-evidence mapping, ITGC concepts, audit readiness, remediation follow-up.<br/>"
            "<b>Privacy &amp; governance:</b> DPIA / PIA support, privacy-by-design, GDPR awareness, data classification, incident governance.<br/>"
            "<b>Technical delivery:</b> Linux administration, PKI, certificates, HSM, Zero Trust principles, electrical and photovoltaic systems, React, Next.js, TypeScript, Netlify, WordPress, automation, AI-assisted development.",
            styles["compact"],
        ),
        Paragraph("PROFESSIONAL EXPERIENCE", styles["section"]),
        role(
            "Independent Consultant & Founder / Owner - ElectroVerde",
            "Security, privacy, electrical and photovoltaic systems, web products, automation | Current",
            [
                "Review and build privacy-aware websites, digital products, automation flows, and practical systems for founders and small teams.",
                "Own and develop ElectroVerde and operate FiraWeb, connecting technical delivery with real electrical, photovoltaic, and business operations.",
                "Contributed to the launches of Earthlink-owned SolarLink and TSTY within a strategic partner ecosystem, without ownership claims over those ventures.",
            ],
            styles,
        ),
        role(
            "Security & Privacy by Design Consultant - IBM Consulting",
            "Architecture & Assurance | Jul 2024 - Oct 2025",
            [
                "Performed secure-by-design and privacy-by-design reviews for new tools and applications, clarifying requirements, controls, evidence, findings, owners, and timelines.",
                "Aligned risk outputs with architecture and delivery constraints and supported decision-ready stakeholder communication.",
            ],
            styles,
        ),
        role(
            "CSIRT Consulting - BISO Delegate - IBM Consulting",
            "Incident governance | Jun 2020 - Jul 2024",
            [
                "Coordinated incident intake, action tracking, stakeholder alignment, documentation traceability, closure criteria, and post-incident review activities.",
                "Translated findings into remediation tasks and clear follow-up across security and technology teams.",
            ],
            styles,
        ),
        PageBreak(),
        role(
            "Security & Privacy Consultant - IBM we.trade",
            "Regulated banking / blockchain platform | Sep 2018 - Sep 2020",
            [
                "Supported security and privacy compliance, security reviews, remediation recommendations, PKI requirements, certificate issuance and QA, and audit procedures.",
                "Supported Gemalto Cloud HSM key exchanges, troubleshooting, upgrades, and documentation.",
            ],
            styles,
        ),
        role(
            "Security Risk Analyst / Advisor / Coordinator - IBM GBS DS&amp;P",
            "Multiple international assignments | Jun 2015 - Jun 2018",
            [
                "Delivered security risk assessments and control reviews across UK&amp;I, CEE, and Italy portfolios and guided teams on evidence quality.",
                "Coordinated assessment operations and performed AUP-style ITGC internal testing in SAP environments.",
            ],
            styles,
        ),
        role(
            "Customs Agent - DHL, Henri Coanda Airport",
            "Customs operations | Two years before IBM",
            [
                "Worked with regulated documentation, operational deadlines, and accuracy-sensitive customs processes at Bucharest Otopeni Airport.",
            ],
            styles,
        ),
        role(
            "Founder / Network Operator - Neighborhood Mini-ISP",
            "Entrepreneurial project during university",
            [
                "Built and operated a local network serving approximately 200-300 customers, covering infrastructure, troubleshooting, support, and daily operations.",
            ],
            styles,
        ),
        Paragraph("EDUCATION", styles["section"]),
        bullets(
            [
                "Master's degree, Economic IT - Romanian-American University, Bucharest.",
                "Bachelor's degree, Computer Science for Business Management / General Economy - Romanian-American University, Bucharest.",
            ],
            styles["body"],
        ),
        Paragraph("CERTIFICATIONS & TRAINING", styles["section"]),
        bullets(
            [
                "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900).",
                "LPIC-1 Certified Linux Administrator - issued Jun 2018, expired Jun 2023 (historical credential).",
                "LPIC-2 Certified Linux Engineer - issued Jun 2018, expired Jun 2023 (historical credential).",
                "Electrician constructor - Romanian Level III professional qualification, 720 hours (2023).",
                "Instalator sisteme fotovoltaice solare - professional specialization, COR 741103, 144 hours (2023).",
                "Digital Operational Resilience Act (DORA) & IBM Technology (2025).",
                "IBM Security Zero Trust Principles (2025).",
                "Privacy Foundations (2021).",
                "Public credential trail: credly.com/users/ionut-iulian-francisc.",
            ],
            styles["body"],
        ),
        Paragraph("LANGUAGES", styles["section"]),
        Paragraph(
            "Romanian - native | English - fluent | Italian - good",
            styles["compact"],
        ),
    ]

    doc.build(story, onFirstPage=draw_page, onLaterPages=draw_page)
    print(OUTPUT)


if __name__ == "__main__":
    build()
