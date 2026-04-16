export type Locale = "en" | "ar";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "ar"];

export type Translations = typeof translations.en;

export const translations = {
  en: {
    // Meta
    meta: {
      title: "EdPro Academy (part of EdPro Education Services) | KHDA-Recognized Training Institute | Dubai",
      description:
        "EdPro Academy (part of EdPro Education Services) is a KHDA-recognized training institute in Dubai offering professional development programs in-person, online, and blended formats.",
      siteName: "EdPro Academy",
    },

    // Navigation
    nav: {
      home: "Home",
      programs: "Programs",
      about: "About",
      partners: "Partners",
      login: "Login",
      parentSite: "Visit EdPro.me",
      switchLang: "عربي",
      switchLangLabel: "Switch to Arabic",
    },

    // Hero
    hero: {
      badge: "KHDA-Recognized Training Institute",
      heading: "EdPro Academy:",
      headingHighlight: "KHDA-Recognized Training Institute",
      subheading:
        "Empowering professionals and learners across the UAE and the region with world-class education. A proud initiative of",
      parentOrg: "EdPro Education Services",
      cta: "Explore Programs",
      ctaSecondary: "Learn About Us",
      stat1Value: "KHDA",
      stat1Label: "Recognized",
      stat2Value: "3+",
      stat2Label: "Programs",
      stat3Value: "UAE",
      stat3Label: "Based",
    },

    // Programs
    programs: {
      sectionTitle: "Academic Programs",
      sectionSubtitle:
        "Professionally designed programs to advance your career and expertise",
      enrollBtn: "Enroll Now",
      syllabusBtn: "View Syllabus",
      deliveryLabel: "Delivery Mode",
      feeLabel: "Program Fee",
      durationLabel: "Duration",
      cards: [
        {
          id: "educational-leadership",
          title: "Professional Development in Educational Leadership",
          deliveryMode: "Blended",
          deliveryIcon: "🎓",
          duration: "12 Weeks",
          fee: "Contact for Tuition",
          level: "Advanced",
          overview:
            "This program equips educational professionals with the strategic leadership skills required to drive institutional excellence. Participants will explore evidence-based frameworks for school improvement, staff development, and curriculum innovation.",
          syllabus: [
            "Foundations of Educational Leadership",
            "Strategic Planning & Institutional Development",
            "Curriculum Design & Assessment",
            "Staff Mentoring & Performance Management",
            "Educational Policy & Compliance (UAE Context)",
          ],
          badge: "Most Popular",
        },
        {
          id: "corporate-training",
          title: "Corporate Training & Instructional Design",
          deliveryMode: "Online",
          deliveryIcon: "💻",
          duration: "8 Weeks",
          fee: "Contact for Tuition",
          level: "Intermediate",
          overview:
            "Designed for L&D professionals and corporate trainers, this program covers modern instructional design methodologies, e-learning development, and training needs analysis to create impactful learning experiences.",
          syllabus: [
            "Instructional Systems Design (ISD) Models",
            "Adult Learning Theory & Andragogy",
            "E-Learning Development Tools",
            "Training Needs Analysis",
            "Measuring Training Effectiveness (ROI)",
          ],
          badge: "Online",
        },
        {
          id: "early-childhood",
          title: "Early Childhood Education & Development",
          deliveryMode: "In-person",
          deliveryIcon: "🌱",
          duration: "10 Weeks",
          fee: "Contact for Tuition",
          level: "Foundation",
          overview:
            "A comprehensive program for educators and caregivers working with children aged 0–8. Grounded in developmental psychology and best practices, this program prepares participants to create nurturing, stimulating learning environments.",
          syllabus: [
            "Child Development Theories & Milestones",
            "Play-Based Learning Environments",
            "Inclusive Education Practices",
            "Parent & Community Engagement",
            "Observation, Documentation & Assessment",
          ],
          badge: "In-person",
        },
      ],
    },

    // Course Detail (shared labels)
    courseDetail: {
      enrollBtn: "Enroll Now",
      feeLabel: "Program Fee",
      durationLabel: "Duration",
      deliveryLabel: "Delivery Mode",
      levelLabel: "Level",
      startLabel: "Next Intake",
      startValue: "Rolling Admissions",
      languageLabel: "Language",
      languageValue: "English / Arabic",
      certLabel: "Certificate",
      certValue: "Certificate of Completion",
      khdaLabel: "KHDA Permit",
      khdaValue: "No. 631118",
      videoPlaceholder: "Program Overview Video",
      videoNote: "Video content will be available upon program launch.",
      contentTitle: "Program Content",
      instructorTitle: "Your Instructor",
      instructorName: "To Be Announced",
      instructorBio:
        "Our programs are delivered by experienced industry practitioners and certified educators with extensive experience in the UAE education sector. Instructor details will be published prior to program commencement.",
      instructorCredentials: [
        "10+ Years Industry Experience",
        "UAE Ministry of Education Certified",
        "KHDA-Approved Trainer",
      ],
      requirementsTitle: "Admission Requirements",
      requirementsItems: [
        "Bachelor's degree or equivalent professional qualification",
        "Minimum 2 years of relevant work experience",
        "Proficiency in English (Arabic support available)",
        "Completed online application form",
      ],
      outcomesTitle: "Learning Outcomes",
      sidebarTitle: "Enroll in This Program",
      contactAdmissions: "Contact Admissions",
      contactFormUrl: "https://forms.gle/bos9erAbaQK7cpDr7",
      backToPrograms: "Back to Programs",
      modules: [
        {
          title: "Module 1: Foundations & Frameworks",
          lessons: [
            "Introduction & Program Overview",
            "Core Theoretical Frameworks",
            "UAE Context & Regulatory Environment",
            "Self-Assessment & Goal Setting",
          ],
        },
        {
          title: "Module 2: Core Competencies",
          lessons: [
            "Strategic Thinking & Planning",
            "Communication & Stakeholder Engagement",
            "Data-Driven Decision Making",
            "Case Studies & Applied Learning",
          ],
        },
        {
          title: "Module 3: Practical Application",
          lessons: [
            "Workplace Project Design",
            "Peer Collaboration & Feedback",
            "Mentoring Sessions",
            "Mid-Program Assessment",
          ],
        },
        {
          title: "Module 4: Leadership & Innovation",
          lessons: [
            "Change Management Principles",
            "Innovation in Practice",
            "Building High-Performance Teams",
            "Policy Development Workshop",
          ],
        },
        {
          title: "Module 5: Capstone & Certification",
          lessons: [
            "Capstone Project Presentation",
            "Final Assessment",
            "Program Reflection & Review",
            "Certificate Award Ceremony",
          ],
        },
      ],
      outcomes: [
        "Apply evidence-based frameworks to real-world professional challenges",
        "Develop strategic plans aligned with UAE educational and regulatory standards",
        "Lead teams and manage institutional change effectively",
        "Design and evaluate professional development initiatives",
        "Earn a KHDA-recognized Certificate of Completion",
      ],
    },

    // Partners / Accreditation
    partners: {
      sectionTitle: "Our Partners & Accreditation",
      sectionSubtitle:
        "EdPro Academy (part of EdPro Education Services) is committed to maintaining the highest standards through institutional partnerships and accreditation",
      khda: {
        name: "KHDA",
        fullName: "Knowledge and Human Development Authority",
        description:
          "EdPro Academy (part of EdPro Education Services) operates under the regulatory oversight of the KHDA, ensuring all programs meet Dubai's educational quality standards.",
        status: "Recognized Partner",
      },
      upcoming: {
        title: "International Accrediting Body",
        description:
          "EdPro Academy is currently in the process of obtaining international accreditation. An announcement will be made upon completion.",
        status: "Coming Soon",
      },
    },

    // About
    about: {
      sectionTitle: "About EdPro Academy (part of EdPro Education Services)",
      disclosure:
        "EdPro Academy (part of EdPro Education Services) is a brand owned and operated by EdPro Education Services, a training institute officially recognized and permitted by the Knowledge and Human Development Authority (KHDA) in Dubai.",
      mission: "Our Mission",
      missionText:
        "To provide accessible, high-quality professional development and academic programs that empower individuals and organizations across the UAE and the region.",
      vision: "Our Vision",
      visionText:
        "To be the leading KHDA-recognized training institute in the region, known for academic excellence, innovation, and measurable impact.",
      values: "Our Values",
      valuesItems: [
        "Academic Excellence",
        "Integrity & Transparency",
        "Inclusive Education",
        "Continuous Innovation",
        "Community Impact",
      ],
    },

    // Footer
    footer: {
      disclosure:
        "EdPro Academy (part of EdPro Education Services) is a brand owned and operated by EdPro Education Services, a training institute officially recognized and permitted by the Knowledge and Human Development Authority (KHDA) in Dubai. KHDA Permit No. 631118.",
      quickLinks: "Quick Links",
      legal: "Legal",
      contact: "Contact",
      links: {
        home: "Home",
        programs: "Programs",
        about: "About Us",
        partners: "Partners",
        parentSite: "EdPro.me",
        admissionPolicy: "Admission Policy",
        termsOfService: "Terms of Service",
        privacyPolicy: "Privacy Policy",
      },
      contactInfo: {
        location: "Dubai, United Arab Emirates",
        email: "info@edpro.academy",
        website: "www.edpro.academy",
      },
      copyright:
        "© 2024 EdPro Academy (part of EdPro Education Services). All rights reserved.",
      regulatoryNote: "Regulated by KHDA, Dubai. Permit No. 631118.",
    },

    // Success page
    success: {
      title: "Enrollment Confirmed!",
      heading: "Welcome to EdPro Academy",
      message:
        "Thank you for enrolling. Your registration has been successfully processed. Our academic team will be in touch within 24–48 hours with your program details, schedule, and onboarding materials.",
      nextSteps: "Next Steps",
      steps: [
        "Check your email for a confirmation receipt",
        "Our team will contact you within 24–48 hours",
        "Prepare for your orientation session",
        "Access your learning portal upon program commencement",
      ],
      backHome: "Return to Home",
      contact: "Contact Admissions",
    },

    // Login Modal
    login: {
      title: "Sign In to EdPro Academy",
      subtitle: "Access your learning portal",
      googleBtn: "Continue with Google",
      microsoftBtn: "Continue with Microsoft",
      note: "SSO login is available for enrolled students and staff.",
    },
  },

  ar: {
    // Meta
    meta: {
      title: "أكاديمية إيدبرو (جزء من إي دي برو لخدمات التعليم) | معهد تدريب معتمد من KHDA | دبي",
      description:
        "أكاديمية إيدبرو (جزء من إي دي برو لخدمات التعليم) معهد تدريب معتمد من هيئة المعرفة والتنمية البشرية في دبي، يقدم برامج تطوير مهني حضورية وإلكترونية ومدمجة.",
      siteName: "أكاديمية إيدبرو",
    },

    // Navigation
    nav: {
      home: "الرئيسية",
      programs: "البرامج",
      about: "عن الأكاديمية",
      partners: "الشركاء",
      login: "تسجيل الدخول",
      parentSite: "زيارة EdPro.me",
      switchLang: "English",
      switchLangLabel: "التبديل إلى الإنجليزية",
    },

    // Hero
    hero: {
      badge: "معهد تدريب معتمد من KHDA",
      heading: "أكاديمية إيدبرو:",
      headingHighlight: "معهد تدريب معتمد من هيئة المعرفة والتنمية البشرية",
      subheading:
        "نُمكّن المهنيين والمتعلمين في جميع أنحاء الإمارات والمنطقة من خلال تعليم عالمي المستوى. مبادرة فخورة من",
      parentOrg: "إي دي برو لخدمات التعليم",
      cta: "استعرض البرامج",
      ctaSecondary: "تعرف علينا",
      stat1Value: "KHDA",
      stat1Label: "معتمد",
      stat2Value: "+3",
      stat2Label: "برامج",
      stat3Value: "الإمارات",
      stat3Label: "مقرنا",
    },

    // Programs
    programs: {
      sectionTitle: "البرامج الأكاديمية",
      sectionSubtitle:
        "برامج مصممة بعناية لتطوير مسيرتك المهنية وتعزيز خبراتك",
      enrollBtn: "سجّل الآن",
      syllabusBtn: "عرض المنهج",
      deliveryLabel: "طريقة التقديم",
      feeLabel: "رسوم البرنامج",
      durationLabel: "المدة",
      cards: [
        {
          id: "educational-leadership",
          title: "التطوير المهني في القيادة التربوية",
          deliveryMode: "مدمج",
          deliveryIcon: "🎓",
          duration: "١٢ أسبوعاً",
          fee: "تواصل للاستفسار عن الرسوم",
          level: "متقدم",
          overview:
            "يُزوّد هذا البرنامج المهنيين في قطاع التعليم بمهارات القيادة الاستراتيجية اللازمة لتحقيق التميز المؤسسي. يستكشف المشاركون أُطراً قائمة على الأدلة لتحسين المدارس وتطوير الكوادر وابتكار المناهج.",
          syllabus: [
            "أسس القيادة التربوية",
            "التخطيط الاستراتيجي والتطوير المؤسسي",
            "تصميم المناهج والتقييم",
            "الإرشاد الوظيفي وإدارة الأداء",
            "السياسات التعليمية والامتثال (السياق الإماراتي)",
          ],
          badge: "الأكثر طلباً",
        },
        {
          id: "corporate-training",
          title: "التدريب المؤسسي وتصميم التعليم",
          deliveryMode: "إلكتروني",
          deliveryIcon: "💻",
          duration: "٨ أسابيع",
          fee: "تواصل للاستفسار عن الرسوم",
          level: "متوسط",
          overview:
            "صُمّم هذا البرنامج لمتخصصي التعلم والتطوير والمدربين المؤسسيين، ويغطي منهجيات تصميم التعليم الحديثة وتطوير التعلم الإلكتروني وتحليل الاحتياجات التدريبية.",
          syllabus: [
            "نماذج تصميم الأنظمة التعليمية",
            "نظرية تعلم الكبار والأندراغوجيا",
            "أدوات تطوير التعلم الإلكتروني",
            "تحليل الاحتياجات التدريبية",
            "قياس فاعلية التدريب (العائد على الاستثمار)",
          ],
          badge: "إلكتروني",
        },
        {
          id: "early-childhood",
          title: "تعليم وتنمية الطفولة المبكرة",
          deliveryMode: "حضوري",
          deliveryIcon: "🌱",
          duration: "١٠ أسابيع",
          fee: "تواصل للاستفسار عن الرسوم",
          level: "أساسي",
          overview:
            "برنامج شامل للمعلمين ومقدمي الرعاية العاملين مع الأطفال من عمر ٠–٨ سنوات. يُعدّ المشاركين لإنشاء بيئات تعلم محفّزة وداعمة وفق أفضل الممارسات العالمية.",
          syllabus: [
            "نظريات ومراحل نمو الطفل",
            "بيئات التعلم القائمة على اللعب",
            "ممارسات التعليم الشامل",
            "إشراك الأسرة والمجتمع",
            "الملاحظة والتوثيق والتقييم",
          ],
          badge: "حضوري",
        },
      ],
    },

    // Course Detail (shared labels)
    courseDetail: {
      enrollBtn: "سجّل الآن",
      feeLabel: "رسوم البرنامج",
      durationLabel: "المدة",
      deliveryLabel: "طريقة التقديم",
      levelLabel: "المستوى",
      startLabel: "القبول التالي",
      startValue: "قبول مستمر",
      languageLabel: "لغة التدريس",
      languageValue: "الإنجليزية / العربية",
      certLabel: "الشهادة",
      certValue: "شهادة إتمام البرنامج",
      khdaLabel: "تصريح KHDA",
      khdaValue: "رقم ٦٣١١١٨",
      videoPlaceholder: "فيديو نظرة عامة على البرنامج",
      videoNote: "سيتوفر محتوى الفيديو عند إطلاق البرنامج.",
      contentTitle: "محتوى البرنامج",
      instructorTitle: "المدرب",
      instructorName: "سيتم الإعلان قريباً",
      instructorBio:
        "تُقدَّم برامجنا من قِبل ممارسين متمرسين في الصناعة ومعلمين معتمدين يتمتعون بخبرة واسعة في قطاع التعليم بالإمارات. سيتم نشر تفاصيل المدرب قبيل بدء البرنامج.",
      instructorCredentials: [
        "أكثر من ١٠ سنوات خبرة في المجال",
        "معتمد من وزارة التربية والتعليم الإماراتية",
        "مدرب معتمد من KHDA",
      ],
      requirementsTitle: "متطلبات القبول",
      requirementsItems: [
        "درجة البكالوريوس أو مؤهل مهني معادل",
        "خبرة عمل ذات صلة لا تقل عن سنتين",
        "إتقان اللغة الإنجليزية (الدعم بالعربية متاح)",
        "استمارة التقديم الإلكتروني مكتملة",
      ],
      outcomesTitle: "مخرجات التعلم",
      sidebarTitle: "سجّل في هذا البرنامج",
      contactAdmissions: "تواصل مع القبول",
      contactFormUrl: "https://forms.gle/bos9erAbaQK7cpDr7",
      backToPrograms: "العودة إلى البرامج",
      modules: [
        {
          title: "الوحدة ١: الأسس والأطر",
          lessons: [
            "مقدمة ونظرة عامة على البرنامج",
            "الأطر النظرية الأساسية",
            "السياق الإماراتي والبيئة التنظيمية",
            "التقييم الذاتي وتحديد الأهداف",
          ],
        },
        {
          title: "الوحدة ٢: الكفاءات الأساسية",
          lessons: [
            "التفكير الاستراتيجي والتخطيط",
            "التواصل وإشراك أصحاب المصلحة",
            "اتخاذ القرار المبني على البيانات",
            "دراسات الحالة والتعلم التطبيقي",
          ],
        },
        {
          title: "الوحدة ٣: التطبيق العملي",
          lessons: [
            "تصميم مشروع مكان العمل",
            "التعاون بين الزملاء والتغذية الراجعة",
            "جلسات الإرشاد",
            "تقييم منتصف البرنامج",
          ],
        },
        {
          title: "الوحدة ٤: القيادة والابتكار",
          lessons: [
            "مبادئ إدارة التغيير",
            "الابتكار في التطبيق",
            "بناء فرق عالية الأداء",
            "ورشة تطوير السياسات",
          ],
        },
        {
          title: "الوحدة ٥: المشروع الختامي والشهادة",
          lessons: [
            "عرض المشروع الختامي",
            "التقييم النهائي",
            "مراجعة البرنامج والتأمل",
            "حفل توزيع الشهادات",
          ],
        },
      ],
      outcomes: [
        "تطبيق أطر قائمة على الأدلة في التحديات المهنية الواقعية",
        "وضع خطط استراتيجية متوافقة مع المعايير التعليمية والتنظيمية الإماراتية",
        "قيادة الفرق وإدارة التغيير المؤسسي بفاعلية",
        "تصميم وتقييم مبادرات التطوير المهني",
        "الحصول على شهادة إتمام معتمدة من KHDA",
      ],
    },

    // Partners / Accreditation
    partners: {
      sectionTitle: "شركاؤنا والاعتماد المؤسسي",
      sectionSubtitle:
        "تلتزم أكاديمية إيدبرو (جزء من إي دي برو لخدمات التعليم) بأعلى معايير الجودة من خلال الشراكات المؤسسية والاعتماد الدولي",
      khda: {
        name: "KHDA",
        fullName: "هيئة المعرفة والتنمية البشرية",
        description:
          "تعمل أكاديمية إيدبرو (جزء من إي دي برو لخدمات التعليم) تحت إشراف هيئة المعرفة والتنمية البشرية، مما يضمن أن جميع البرامج تلبي معايير الجودة التعليمية في دبي.",
        status: "شريك معتمد",
      },
      upcoming: {
        title: "هيئة الاعتماد الدولية",
        description:
          "تسعى أكاديمية إيدبرو حالياً للحصول على الاعتماد الدولي. سيتم الإعلان عند اكتمال الإجراءات.",
        status: "قريباً",
      },
    },

    // About
    about: {
      sectionTitle: "عن أكاديمية إيدبرو (جزء من إي دي برو لخدمات التعليم)",
      disclosure:
        "أكاديمية إيدبرو (جزء من إي دي برو لخدمات التعليم) علامة تجارية مملوكة وتُدار من قِبل إي دي برو لخدمات التعليم، وهو معهد تدريب معترف به ومرخص رسمياً من هيئة المعرفة والتنمية البشرية (KHDA) في دبي.",
      mission: "رسالتنا",
      missionText:
        "تقديم برامج تطوير مهني وأكاديمي عالية الجودة وميسورة التكلفة تُمكّن الأفراد والمؤسسات في جميع أنحاء الإمارات والمنطقة.",
      vision: "رؤيتنا",
      visionText:
        "أن نكون المعهد التدريبي المعتمد من KHDA الرائد في المنطقة، المعروف بالتميز الأكاديمي والابتكار والأثر الملموس.",
      values: "قيمنا",
      valuesItems: [
        "التميز الأكاديمي",
        "النزاهة والشفافية",
        "التعليم الشامل",
        "الابتكار المستمر",
        "الأثر المجتمعي",
      ],
    },

    // Footer
    footer: {
      disclosure:
        "أكاديمية إيدبرو (جزء من إي دي برو لخدمات التعليم) علامة تجارية مملوكة وتُدار من قِبل إي دي برو لخدمات التعليم، وهو معهد تدريب معترف به ومرخص رسمياً من هيئة المعرفة والتنمية البشرية (KHDA) في دبي. تصريح هيئة المعرفة رقم ٦٣١١١٨.",
      quickLinks: "روابط سريعة",
      legal: "القانونية",
      contact: "تواصل معنا",
      links: {
        home: "الرئيسية",
        programs: "البرامج",
        about: "عن الأكاديمية",
        partners: "الشركاء",
        parentSite: "EdPro.me",
        admissionPolicy: "سياسة القبول",
        termsOfService: "شروط الخدمة",
        privacyPolicy: "سياسة الخصوصية",
      },
      contactInfo: {
        location: "دبي، الإمارات العربية المتحدة",
        email: "info@edpro.academy",
        website: "www.edpro.academy",
      },
      copyright:
        "© ٢٠٢٤ أكاديمية إيدبرو (جزء من إي دي برو لخدمات التعليم). جميع الحقوق محفوظة.",
      regulatoryNote: "مُنظَّم من قِبل KHDA، دبي. تصريح رقم ٦٣١١١٨.",
    },

    // Success page
    success: {
      title: "تم تأكيد التسجيل!",
      heading: "مرحباً بك في أكاديمية إيدبرو",
      message:
        "شكراً لتسجيلك. تمت معالجة طلبك بنجاح. سيتواصل معك فريقنا الأكاديمي خلال ٢٤–٤٨ ساعة بتفاصيل البرنامج والجدول الزمني ومواد التوجيه.",
      nextSteps: "الخطوات التالية",
      steps: [
        "تحقق من بريدك الإلكتروني لاستلام إيصال التأكيد",
        "سيتواصل معك فريقنا خلال ٢٤–٤٨ ساعة",
        "استعد لجلسة التوجيه",
        "ادخل إلى بوابة التعلم عند بدء البرنامج",
      ],
      backHome: "العودة إلى الرئيسية",
      contact: "تواصل مع القبول",
    },

    // Login Modal
    login: {
      title: "تسجيل الدخول إلى أكاديمية إيدبرو",
      subtitle: "الوصول إلى بوابة التعلم",
      googleBtn: "المتابعة عبر Google",
      microsoftBtn: "المتابعة عبر Microsoft",
      note: "تسجيل الدخول الموحد متاح للطلاب المسجلين والموظفين.",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.en;
}
