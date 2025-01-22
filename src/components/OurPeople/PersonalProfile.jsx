import React from "react";
import { useParams } from "react-router-dom";
import {  haroon_jan,
    asad_ijaz,
    muhammad_hadi,
    ali_awais,
    omar_majid,
    othman_shoukat,
    kristine_chong,
    sharjil_khwaja} from "../../assets/"
// Updated data with `id` based on names and `brief` as an array of strings

const legalTeam = [
    {
      id:"haroon-jan-baryalay",

      name: "Haroon Jan Baryalay",
      title: "Managing Partner & Director Legal Services – Pakistan",
      image: haroon_jan,
      brief: ["Haroon is an advocate of the High Courts of Pakistan with over 18 years of experience advising clients on corporate transactional matters. Haroon has over 11 years’ experience working in Pakistan and has spent 7 years working at various regional and international law firms in Dubai, United Arab Emirates. Haroon specializes in corporate transactional advisory including general corporate, mergers & acquisitions, private equity and banking & finance including project finance & Islamic finance. Haroon has advised clients on project finance transactions in the energy & power sector including negotiating financing documentation, off-take contracts, power purchase agreements and EPC contracts.",
            "Haroon has served on the board of directors of various public and private sector companies including National Transmission & Dispatch Company Limited (NTDC), Taurus Securities Limited (a subsidiary of National Bank of Pakistan) and Bykea Technologies (Private) Limited. ",
            "Haroon is a graduate of the Lahore University of Management Sciences (LUMS) (B.Sc. (Hons) Economics) (2001), the University of London (LL.B. Hons) (2004) and Harvard Law School (LL.M.) (2005). "
      ],
    },
    {
      id:"ali-awais",
      name: "Ali Awais",
      title: "Director Legal Services – Pakistan",
      image: ali_awais,
      brief: ["Ali Awais has 25 years of working with top tier international law firms and multilateral organizations, and is spearheading the corporate, banking and finance practice of the firm and managing teams. He is advising banks, investment funds and major corporations and project sponsors on all aspects of finance transactions, including Islamic finance, corporate finance, real estate, and project finance. Advising private equity and financial advisory firms in connection with funds structures and M&A and cross border transactions. Advising major corporations on corporate governance matters in connection with SECP requirements and in line with international best practices.",
        "Mr Awais has extensive experience in providing Boards and CEOs strategic advice on investments, growth and international expansions for business value creation and corporate governance. Inspiring leadership skills with a track-record of successful and efficient management and team building. Advisor to investment banks and private equity funds on corporate and projects investments, M&A and structured finance transactions, including project placements, equity and debt raising and setting up structured products, including investment funds. Specialized legal counsel in international transactions and infrastructure-related project finance/Islamic finance, including projects involving power, hydroelectric plants, pipelines, municipal water, wastewater treatment plants, highways, and airports. Set up and execute corporate governance and risk management structures, internal policies and rules in line with complex regulatory requirements.",
        "Mr Awais is also a Partner in a US based law firm, Diaz, Reus & Targ where his practice is centered around infrastructure, corporate M&A and banking and finance. Earlier Ali was a senior counsel in the World Bank in Washington DC where he actively covered the Middle East, North Africa and South Asia regions, including working as the World Bank’s lead lawyer for putting together strategies for post-conflict countries and frontier markets. Mr Awais started his legal career with a Wall Street law firm, Milbank, Tweed, Hadley & McCloy in their New York office and have also worked in top international law firms, Baker Botts (Washington DC and Dubai offices), and Jones Day (London and Dubai offices). In addition, he has also worked for about 5 years in an investment banking firm out of Dubai International Financial Centre, where he was their Chief Operating Officer and General Counsel.",
        "Mr Awais is also a visiting faculty at LUMS Law School, Lahore teaching Public Private Partnerships and Project Finance, Mergers & Acquisitions and Company Law.",
        "Mr Awais has been Ranked in Legal 500 as one of the Leading Lawyers in Asia Pacific. "
      ],
    },
  ];

  const taxAuditAccountingTeam = [
    {
      id: "asad-ijaz",
      name: "Asad Ijaz, FCA",
      title: "Director Business and Risk Advisory Services",
      image: asad_ijaz,
      brief: ["Asad is a fellow member of the Institute of Chartered Accountants of Pakistan having over thirteen years of diversified professional experience in strategy, corporate finance, business advisory transaction advisory, risk advisory, audit, accounting and taxation services. ",
        "His specializes in strategic planning, transaction advisory, financial analysis, financial and operational due diligences, business risk assessment and management, business process optimization, training and capacity building, financial audits, forensic audits, procurement audits, fixed assets management, policies and procedures development, corporate governance and taxation services.",
    "He has been engaged in providing services to various local and multinational clients in a variety of industries including energy and natural resources, power, manufacturing, construction and real estate, retail, telecommunication, stock exchanges, non-banking financial institutions, microfinance, fintech, information technology, education, healthcare, hospitality, professional service providers, marketing, electronic media and various government and non-government not for profit organizations.",
"He is also serving as managing partner of Asad Ijaz & Co., Chartered Accountants and director at Impact Advisory Services. He also holds leadership positions at various leading advisory and consulting firms as well as served non-executive director and advisor for various business ventures. He has previously been associated with A.F. Ferguson & Co., Chartered Accountants (a member firm of PwC) in managerial roles. "      ],
    },
    {
      id: "muhammad-nohman-khan",
      name: "Muhammad Nohman Khan, ACA",
      title: "Director Tax, Accounting and Audit",
      image: "https://i.pinimg.com/564x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg",
      brief: ["Nohman is an associate member of the Institute of Chartered Accountants of Pakistan, with nearly twelve years of diversified professional experience in audit, accounting, taxation, business and risk advisory services to various local and multinational clients in a variety of industries.",
        "He specializes in providing complete suite of corporate and taxation advisory services comprising tax planning and compliance, clinical reviews, tax accounting, withholding tax advisory, tax audits, litigation support, correspondence and representation before tax authorities, corporate matters including registration, filing of statutory returns and dealing with company and non-company registration authorities etc.",
        "He also specializes in tax litigation and has been handling income tax, sales tax and federal excise litigation matters before appellate tax authorities including commissioner and tribunal concerning both corporate and personal taxation matters.",
        "He is also serving as partner taxation and legal services at Asad Ijaz & Co., Chartered Accountants and has previously been manager tax planning and acting head of finance for Imarat Group of Companies (12 companies in total) managing the whole finance department by providing robust support to the top management including year-end financial statements, monthly financial reports, preparation of financial models, cash flow forecasts, tax planning, analysis and advising on key changes that effects the group. He has also been associated with Pak Gulf Construction (Private) Limited and Nexia International.",
        "He also gained diversified experience in ERP implementation including Microsoft Dynamics GP and SAP."
      ],
    },
  ];

  const businessAdvisoryTeam = [
    {
      id: "muhammad-habib",
      name: "Muhammad Habib, CFA, ACCA",
      title: "Director Business and Financial Advisory Services",
      image: "https://i.pinimg.com/564x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg",
      brief: ["Muhammad has over eleven years of professional experience in investment analysis and management, financial consultancy, accounting and external audits. He specializes in private equity real estate investments, risk management, financial analysis and modelling, mergers and acquisitions and portfolio management.",
        "He has effectively sourced and executed transactions worth more than one billion dollars across various industries in Europe, South Asia and Middle East. Over the period, he has been associated with various advisory firms and investment managers including A.F. Ferguson & Co., Chartered Accountants (a member firm of PricewaterhouseCoopers), Rivercrossing Investment Manager, Golden Gate Bahrain Bay, Ritz Carlton Montenegro, Retail Centers Germany Investments. ",
        "He is also serving as investment advisor to various family offices across Gulf Cooperation Counties advising them on private equity investment and real estate portfolios.",
        "He is a member of the Chartered Financial Analyst (CFA) Institute, USA and is also an associate member of the Association of Chartered Certified Accountants (ACCA), UK. He also has bachelor of science politics and international relations from London School of Economics and University of London.",
        ""
      ],
    },
    {
      id: "farrukh-ansari",
      name: "Farrukh Ansari",
      title: "Director Business & Financial Advisory – Pakistan ",
      image: "https://i.pinimg.com/564x/82/a3/3a/82a33a43be59e913b58efbdfd64e281e.jpg",
      brief: [""],
    },
    {
      id: "othman-shaukat",
      name: "Othman Shaukat",
      title: "Director Business & Financial Advisory – UK, Europe and Middle East ",
      image: othman_shoukat,
      brief: ["Othman focuses on scaling up businesses and turnarounds. Othman has end-to-end deal cycle experience. Prior to joining Salonica, Othman worked at KPMG within Transactions & Restructuring, specialising in M&A and Restructuring. "],
      education: [
        "Chartered Accountant (ACA)",
        "BSc Bayes Business School",
        "MSt University of Cambridge, Downing College"
      ]
    },
    {
      id: "omar-majid",
      name: "Omar Majid",
      title: "Director Business & Financial Advisory – UK, Europe and Middle East",
      image: omar_majid,
      brief: ["Omar focuses on sourcing companies and fundraising across the UK and EMEA. Prior to joining Salonica, Omar was a Director at RBS within Debt Capital Markets."],
      education: [
        
        "BSc Bayes Business School",
        "MSt University of Cambridge, Wolfson College"
      ]
    },
    {
      id: "kristine-chong",
      name: "Kristine Chong",
      title: "Associate Director",
      image: kristine_chong,
      brief: ["Kristine has extensive end-to-end deal cycle experience. Prior to joining Salonica in 2019, Kristine worked at KPMG within Transactions & Restructuring specialising in M&A and Strategy. "],
      education: [
        
        "Chartered Accountant (ACA)",
        "BSc London School of Economics"
      ]
    },
  ];

  const transactionAdvisoryTeam = [
    {
      id: "sharjeel-khwaja",
      name: "Sharjeel Khwaja",
      title: "Director Transaction Advisory & Business Development – Pakistan ",
      image: sharjil_khwaja,
      brief: ["A seasoned Energy Business Development and Strategy executive with over 20 years of experience in the energy industry, Sharjil  combines strategic vision, collaborative leadership, and a relentless curiosity to drive transformational growth and long-term partnerships. His expertise spans corporate strategy, business development, regulatory affairs, and joint venture management, with a proven track record of spearheading market expansions, leading high-value partnerships, and navigating complex industry dynamics.",
        "Throughout his career, Sharjil has worked closely with C-suite executives and board members, serving as a cornerstone for company operations and strategy. He has led initiatives to reinvent business models, enhance revenue, and foster sustainable growth. With an MBA from Arizona State University's W.P. Carey School of Business and an MSc in Accounting & Finance from The University of Birmingham, Sharjil's academic foundation strengthens his expertise in corporate strategy, business analysis, and governance. Beyond his professional career, he has represented his club, university, and country in Rugby Union, embodying teamwork, discipline, and an unwavering drive to succeed.",
    "Sharjil is deeply invested in the future of energy, with a focus on energy transition, security, policy, geopolitics, emerging energy demands of AI and critical minerals for renewable energy. "  
    ],
  //   contact:[ 
  //       "00923215277006",
  //       "sharjil@^^^^^^^^.com",
  //       " linkedin.com/in/sharjilkhwaja"
  // ]
    },
    {
      id: "muhammad-hadi",
      name: "Muhammad Hadi",
      title: "Director Transaction Advisory & Business Development – Middle East",
      image: muhammad_hadi,
      brief: ["Mohammad Hadi is a senior banking executive and startup entrepreneur with extensive experience in investments and an MBA from Columbia Business School.  ",
        "He has executed over $8B in capital markets transactions over a 14 year career at in the investment banking division of Credit Suisse in New York and managed family office investment portfolios at Citibank in Dubai. A technology and green mobility enthusiast, Hadi is the founder and Chairman of a leading electric mobility startup in Pakistan"
      ],
    },
  ];

function PersonalProfile() {
  const { id } = useParams();

  // Combine all teams into one array
  const allTeams = [
    ...legalTeam,
    ...taxAuditAccountingTeam,
    ...businessAdvisoryTeam,
    ...transactionAdvisoryTeam,
  ];

  // Find the member by ID
  const member = allTeams.find((person) => person.id === id);

  if (!member) return <p>Profile not found.</p>;

return (
  <div className="max-w-5xl mx-auto p-6 lg:p-12 bg-white rounded-lg shadow-xl space-y-10">
    {/* Header */}
    <div className="text-center">
      <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4">{member.name}</h1>
      <p className="text-lg lg:text-xl text-gray-600 italic">{member.title}</p>
    </div>

    {/* Image and Details Section */}
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
      {/* Image on the left */}
      <div className="relative flex-shrink-0 overflow-hidden rounded-lg shadow-lg w-32 h-32 lg:w-60 lg:h-60 max-w-xs lg:max-w-sm">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Text and Other Details */}
      <div className="flex-grow text-gray-700 space-y-6">
        {member.brief.map((line, index) => (
          <p key={index} className="text-base lg:text-lg leading-relaxed text-justify">
            {line}
          </p>
        ))}

        {member.education && (
          <div className="text-gray-800">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Education</h2>
            <ul className="list-inside list-disc space-y-2 lg:space-y-3">
              {member.education.map((line, index) => (
                <li key={index} className="text-base lg:text-lg leading-relaxed tracking-wide">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        )}

        {member.contact && (
          <div className="text-gray-800">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Contact</h2>
            <ul className="list-none space-y-2 lg:space-y-3">
              {member.contact.map((line, index) => (
                <li key={index} className="flex items-center text-base lg:text-lg text-blue-600 hover:underline">
                  <span className="mr-2 text-gray-500">📞</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
);

  
  
  
}

export default PersonalProfile;
