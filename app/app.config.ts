// app.config.ts
export default defineAppConfig({
  "base": {
    "email": "inofo@daddytemplate.com",
    "companyName": "daddytemplate Corporate",
    "phone": "+86 (136) 5661-7631",
    "address": "123 Main St, Anytown, CHina"
  },
  "logo": {
    "darklogoUrl": "https://hidaddy.oss-cn-shanghai.aliyuncs.com/daddytemplate/fortemplate/dark-logo.png",
    "lightlogoUrl": "https://hidaddy.oss-cn-shanghai.aliyuncs.com/daddytemplate/fortemplate/logo.png",
    "logoName": "",
  },
  "index": {
    "hero": {
      "welcomeText": "SINCE 1980 | ISO 9001:2008 CERTIFIED",
      "mainHeading": "Aroma Chemicals, Natural Products & Menthol Synthetic",
      "description": "Leading manufacturer and exporter of high-purity fragrance ingredients. Backed by 40 years of expertise and a global supply chain, we deliver sustainable quality for the perfumery and food industries worldwide.",
      "ctaButton": "Discover our products",
      "cardTitle": "Your Trusted Partner in China",
      "cardDescription": "We simplify your sourcing with a specialized logistics system and reliable warehouse capacity. From custom synthesis in our labs to global distribution, your satisfaction is our pleasure. Trust the experience that has been leading the industry since 1980.",
    },
    "case": {
      "tag": "CATEGORY",
      "mainHeading": "Core Excellence",
      "subtitle": "Since 1980, we have specialized in high-purity aromachemicalsand natural products.",
      "product": [
        {
          brand: "Sheng Yuan Lab Control",
          title: "Aroma Chemicals",
          products: [
            { id: '00001', name: '2,3-PENTANEDIONE', cas: '600-14-6' },
            { id: '00002', name: '2-METHYL-2-PENTENOIC ACID', cas: '3142-72-1' },
            { id: '00003', name: '3-HYDROXY-2-BUTANONE', cas: '513-86-0' },
            { id: '00004', name: '6-METHYL COUMARIN', cas: '92-48-8' },

          ],
         
          image: "https://framerusercontent.com/images/5umROpQf1LFQZpL5TNpSAKSt0M.jpg",
          impact: ["40% Less Inventory Waste", "35% Faster Production", "20% More Accurate Forecasting", "25% Faster Fulfillment"]
        },
        {
          brand: "Sheng Yuan Lab Control",
          title: "Natural Products",
          products: [
            { id: '00001', name: 'ANETHOLE', cas: '104-46-1' },
            { id: '00002', name: 'BENZALDEHYDE NATURAL', cas: '100-52-7' },
            { id: '00003', name: 'CASSIA OIL', cas: '8007-80-5' },
            { id: '00004', name: 'CEDARWOOD OIL', cas: '8000-27-9' },
            { id: '00005', name: 'CITRONELLA OIL', cas: '8000-29-1' }
          ],

          image: "https://framerusercontent.com/images/lQWHGHShPHUTMe37bAqGhhIDkI.jpg",

        },
        {
          brand: "Sheng Yuan Lab Control",
          title: "Menthol Synthetic",
          description: `Production Route: M-Cresol → Thymol → L-Menthol & D-Menthol We are a manufacturer of all raw materials along this production chain and are the largest producer of cresol. Our synthetic menthol is produced through our joint venture company, Anhui Haihua, for which Shengyuan serves as the global exclusive agency.

Menthol and its related products are widely used in personal care applications.`,
          image: "https://media.istockphoto.com/id/1405646574/zh/%E7%85%A7%E7%89%87/translucent-menthol-crystals-and-green-mint-leaves-falling-on-white-background.webp?s=2048x2048&w=is&k=20&c=ckqSAmSzW05UuHudasbLuHwHSKJW__rrw6W858ga5ZQ=",
          impact: ["115% Fuel Efficiency Increase", "12,000 Tons CO2 Saved Yearly", "100% On-time Delivery Rate", "Real-time Fleet Visibility"]
        }
      ]
    },
    "benefitsGrid": {
      "tag": "PRODUCTS",
      "mainHeading": "Explore Now",
      "subtitle": "Quickly locate the exact CAS number or chemical name you need.",
      "benefits": [
        {
          title: "Iqqqncreased Productivity",
          description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
          icon: 'Zap'
        },
        {
          title: "Better Customer Experience",
          description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
          icon: 'Users'
        },
        {
          title: "24/7 Availability",
          description: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
          icon: 'Clock'
        },
        {
          title: "Cost Reduction",
          description: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
          icon: 'DollarSign'
        },
        {
          title: "Data-Driven Insights",
          description: "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
          icon: 'Database'
        },
        {
          title: "Scalability & Growth",
          description: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
          icon: 'TrendingUp'
        }
      ],
      "name": "North Partners",
      "logo": "https://the7.io/fse-corporate/wp-content/uploads/sites/142/2025/08/Slide-3_2-logo-6.svg"
    },
    "faq": {
      "tag": "FAQS",
      "mainHeading": " We've Got the Answers You're Looking For",
      "subtitle": "Quick answers to your AI automation questions.",
      "faqs": [
        {
          question: "这个模板是免费的吗?",
          answer: "是的，这个模板是免费的。不收取任何费用, 你可以免费使用这个模板来实现你的业务需求。"
        },
        {
          question: "How can AI automation help my business?",
          answer: "AI automation streamlines your repetitive tasks, reduces human error, and provides data-driven insights, allowing your team to focus on strategic growth activities."
        },
        {
          question: "Is AI automation difficult to integrate?",
          answer: "Not at all. Our platform is designed for seamless integration with your existing workflow, requiring minimal technical setup to get started."
        },
        {
          question: "What industries can benefit from AI automation?",
          answer: "From e-commerce and logistics to manufacturing and finance, any industry with standardized processes can see immediate ROI from AI implementation."
        },
        {
          question: "Do I need technical knowledge to use AI automation?",
          answer: "No. Our user-friendly dashboard and pre-built templates make it easy for anyone to deploy and manage sophisticated AI agents without writing code."
        },
        {
          question: "What kind of support do you offer?",
          answer: "We provide 24/7 technical support, comprehensive documentation, and a dedicated success manager to ensure your transition to AI is smooth and effective."
        }
      ]
    },
    "cart": {
      "tag": "Cart",
      "mainHeading": "Book a Call Today and Start Automating",
      "subtitle": "1Get started with AI automation today and watch your business grow."
    },
  },
  "productFeature": {

    "secondSection": {
      "subtitle": "1Top-notch financial stability",
      "title": "1Investing with clarity, navigating with confidence",
      "description": "1Ut elit tellus - luctus nec, luctus consectetur adipiscing elit tellus mattis pulvinar corper mattis nisl pellentesque elit tellus nec elit dapibus. Lorem aliquam commodo, ipsum corper mattis pulvinar dapibus luctus consectetur adipiscing eros nisl pellentesque elit tellus nec elit tellus nec ullam lorvm nulla ipsum corper mattis pulvinar dapibu.",
      "image": "https://the7.io/fse-corporate/wp-content/uploads/sites/142/2025/03/landsc-2x3-094.webp",
      "imageAlt": "Professional working on laptop",
      "customerSatisfaction": "95%",
      "featureBadges": [
        {
          "title": "1Modern professional approach",
          "description": "1Tailored strategies for your unique financial goals",
          "icon": "https://api.iconify.design/lucide:shield-check.svg?color=%233b82f6"
        },
        {
          "title": "1Guaranteed capital growth",
          "description": "1Secure investments with proven returns",
          "icon": "https://api.iconify.design/lucide:trending-up.svg?color=%233b82f6"
        }
      ]
    }
  },
  "about": {
    "tag": "WHO WE ARE",
    "titleOne": "We bridge the gap between",
    "titleTwo": "vision",
    "titleThree": "and reality.",
    "description": "Driven by passion and precision, we craft digital experiences that redefine industry standards and empower global growth.",
    "stats": [
      { number: '6+', 'label': 'Years Experience' },
      { number: '120+', 'label': 'Projects Completed' },
      { number: '15+', 'label': 'Industry Awards' },
      { number: '98%', 'label': 'Client Retention' }
    ],
    "storyTitle": "Our Story",
    "storyParagraphs": [
      "Founded in the heart of global commerce, [Company Name] has evolved from a specialized sourcing agent into a comprehensive international trade powerhouse. For over six years, we have stood at the intersection of supply and demand, providing seamless connectivity for businesses across the globe. Our journey is built on a foundation of unwavering integrity and a deep understanding of market dynamics.",
      "With a robust network spanning over 50 countries and regions, we facilitate the flow of high-quality goods across continents. We don't just move products; we manage complex supply chains. From rigorous factory audits and quality control to optimized logistics and customs clearance, our team ensures that every link in the chain is optimized for efficiency and reliability."
    ],
    "gallery": [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80'
    ]
    ,
    "ourvalue": {
      "tag": "VALUE",
      "title": "Our Value",
      "subtitle": "Our core values drive our success and ensure customer trust satisfaction.",
      "benefits": [
        {
          title: "Iqqqncreased Productivity",
          description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
          icon: 'Target'
        },
        {
          title: "Better Customer Experience",
          description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
          icon: 'Users'
        },
        {
          title: "24/7 Availability",
          description: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
          icon: 'ShieldCheck'
        },
      ],
    },

    "features": {
      "title": "Why Partner With Us?",
      "description": "We don't just supply products; we provide complete solutions to help your business grow and stay competitive in the market.",
      "list": [
        {
          "icon": "Factory",
          "title": "OEM & ODM Capability",
          "description": "Strong R&D team and flexible production lines to meet your customized requirements perfectly."
        },
        {
          "icon": "ShieldCheck",
          "title": "Strict Quality Control",
          "description": "From raw materials to final packaging, every step is strictly monitored to ensure zero defects."
        },
        {
          "icon": "Globe",
          "title": "Global Export Experience",
          "description": "Familiar with international trade standards, certifications, and smooth customs clearance."
        },
        {
          "icon": "Truck",
          "title": "Fast & Reliable Delivery",
          "description": "Optimized supply chain and strategic logistics partnerships ensure your goods arrive on time."
        },
        {
          "icon": "Settings",
          "title": "Advanced Technology",
          "description": "Equipped with state-of-the-art machinery to guarantee precision, efficiency, and scale."
        },
        {
          "icon": "Users",
          "title": "24/7 Professional Support",
          "description": "Our multilingual sales team is always ready to provide rapid responses and dedicated service."
        }
      ]
    }
  },
  "contact": {
    "tag": "Contact Us",
    "title": "Start your next",
    "sptext": "project",
    "contactInfo": [
      { icon: 'Mail', label: 'Email', value: 'hello@dadymemplate.com' },
      { icon: 'Phone', label: 'Phone', value: '+86 136 5661 7631' },
      { icon: 'MapPin', label: 'Office', value: 'jiaxing, zhejiang, China' }
    ],
    "email": "inquiry@yourfactory.com",
    "phone": "+86 136 5661 7631",
    "address": "123 Business Avenue, Tech Industrial Zone, Shenzhen, China"
  },
  "footer": {
    "emailmessage": "Request a Product Sample",
    "socials": [
      { label: 'X', href: 'https://x.com/Zhuxiaoming1987' },
      { label: 'Facebook', href: 'https://facebook.com/daddytemplate' },
      { label: 'Discord', href: '#' }
    ]
  },
  "seo": {
    "index": {
      "title": "老爹模板 - 首页",
      "description": "老爹模板为外贸企业提供免费模板,帮助他们快速启动业务,提高效率。",
      "ogImage": "/default-og.jpg",
      "twitterCard": "summary_large_image"
    },
    "about": {
      "tag": "About Us",
      "title": "老爹模板 - 关于我们",
      "description": "老爹模板为外贸企业提供免费模板,帮助他们快速启动业务,提高效率。",
      "ogImage": "/default-og.jpg",
      "twitterCard": "summary_large_image"
    },
    "contact": {
      "title": "老爹模板 - 联系我们",
      "description": "老爹模板为外贸企业提供免费模板,帮助他们快速启动业务,提高效率。",
      "ogImage": "/default-og.jpg",
      "twitterCard": "summary_large_image"
    }
  }
})