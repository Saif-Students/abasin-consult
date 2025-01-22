import React from "react";
import { useParams } from "react-router-dom";

function SinglePartner() {
    const memberFirms = [
        {
          id: "baryalay-law",
          name: "Baryalay.law",
          description:
[
    "Baryalay.law is an advocacy and corporate legal advisory firm with offices in Islamabad and Lahore. The managing partner of the firm, Haroon Jan Baryalay, has over 18 years’ experience working in Pakistan and Dubai in corporate, commercial, banking and finance, Islamic finance, M&A, private equity, regulatory, power and financial sectors. At Baryalay.law, we provide tailored solutions to our client’s needs, with a deep understanding of the legal and commercial landscape in Pakistan. ",
    "The firm was founded by managing partner Haroon Jan Baryalay in 2024. ",
    "The firm has expertise in the following areas:",
]   ,       website: "www.baryalay.law/",
          expertise: [
            "Corporate and Commercial Law",
            "Mergers and Acquisitions",
            "Private Equity and Venture Capital",
            "Banking and Finance",
            "Project Finance and Infrastructure Development",
            "Power Sector and Renewable Energy",
            "Regulatory Compliance and Policy",
            "Advocacy and Dispute Resolution",
            "Inward & outward foreign investment and foreign exchange regulations",
            "General Corporate Advisory Services",
          ],
        },
        {
          id: "awaislaw-drt",
          name: "Awaislaw DRT",
          description:
          [
            "AwaisLaw DRT is a litigation, banking, corporate and commercial law firm, which provides full range of legal services, including advisory work, consultancy and dispute-resolution, to Pakistani and international businesses, organizations, and institutions. We have been in the business of providing top qualityand high-profile legal advice since 1973. We are a litigation, corporate and commercial law firm, which provides full range of legal services, including advisory work, consultancy and dispute-resolution, to Pakistani and international businesses, organizations, and institutions. We have been in the business of providing top-quality and high profile legal advice since 1973.",
            "Our key areas of practice include Litigation (Constitutional, Corporate, Environmental, Civil & Criminal), corporate and commercial, banking and finance, international trade,  employment and labor, environment, securities, information technology, intellectual and real property and dispute resolution.",
            "We specialize in all aspects and areas of complex litigation from civil courts up to the Supreme Court level. We also specialize in the role of company legal adviser and work on cutting-edge, complex and high-value international transactions/disputes relating to Pakistani law; within the civil, corporate and commercial context. We provide legal assistance in all areas of law.",
            "We greatly emphasis on the manner in which we provide services to our client. We blend clarity, thoroughness, creativity, speed and accuracy required to produce a legal response with client friendly communication practices with a view to developing long-term client-firm relationship. In addition, we regularly conduct client feedback exercises to ensure that our services are fully corresponding to the needs and expectations of our clients.",
            "Our representative clients include multinationals enterprises, Pakistani business groups, banks,statutory bodies, Government organizations, universities, and non-government organizations. We subscribe to highest standards of competence, integrity and excellence by recruiting top lawyers and providing them cutting-edge training. We regularly and heavily invest in updatingour law library and technological infrastructure to support our team.",
            "Furthermore, AwaisLaw DRT has been ranked by Legal500 Asia-Pacific as one of the leading firms for Corporate and M&A for Pakistan."
        ],
          website: "www.awaislaw.com",
        },
        {
          id: "ijara-capital",
          name: "Ijara Capital",
          description:
          [
            ""
        ],
         website: "www.ijara.com.pk",
        },
        {
          id: "salonica-group",
          name: "Salonica Group",
          description:
          [
            "Salonica Group is an independent Investment Bank combining bespoke Investment Banking and Advisory Services with a Private Office. We are regulated by the Financial Conduct Authority (FCA).",
            "We provide a variety of services across multiple asset classes to institutions, corporations, family offices, governments and high net worth clients globally.",
            "We act as a trusted advisor and work with our clients in various capacities. We can sit on your Board to inform on investment decisions and bolster the governance oversight as well as provide dedicated investment and advisory solutions for specific mandates.",
            "We are thought leaders and work alongside several public sector bodies linked to the City of London Corporation.",
            " ",
            " ",
            "Salonica Group has 3 Business Divisions ",
            " ",
            "SALONICA GLOBAL ADVISORY:",
            "We provide impartial, expert advisory and execution services to small and mid-sized corporations, private equity houses, family offices and government investors",
            " ",
            "SALONICA ASSET MANAGEMENT:",
            "We offer investment opportunities within Salonica managed funds across different asset classes.",
            " ",
            "SALONICA PRIVATE OFFICE:",
            "We provide a comprehensive range of private wealth services to family offices, entrepreneurs, foundations and charities. We are a global specialist asset manager delivering bespoke investment management and advisory services"
        ],
         website: "www.salonica-group.com",
        },
        {
          id: "asad-ijaz",
          name: "Asad Ijaz & Co",
          description:
          [
            "Asad Ijaz & Co. (hereinafter referred to as “the firm”) is a firm of independent accountants offering audit and assurance, internal audit, accounting, business advisory, taxation and corporate services to a wide range of industries.",
            "We are focused on providing, proactive and innovative, high quality services to our clients helping them to navigate the ever changing economic conditions and market dynamics. We strive to provide our clients with exceptional quality and nothing takes precedence over our commitment to meet each client’s individual needs for effective, insightful and professional services.",
            "We have established strategic alliances with other professionals including legal advisors, engineers, Information Technology professionals, supply chain experts, social scientists and independent valuers to bring more insight and expertise to the engagements based on specific requirements.",
            "Our approach to client service is based on credibility, commitment, a progressive service concept, innovative thinking, efficiency, knowledge, cooperation, independence, and confidentiality.",
            "The firm operates through its office in Islamabad and is managed by our Partner in charge. Further, each assignment is handled by a director, who specializes in his field of expertise.",
            "For more information, please visit the firm’s website www.aic.com.pk"
        ],
          website: "www.aic.com.pk",
        },
        // {
        //   id: "muhammad-hadi",
        //   name: "Muhammad Hadi",
        //   description:
        //   [
        //     "An advocacy and corporate legal advisory firm with offices in Islamabad and Lahore. Founded by Haroon Jan Baryalay in 2024. Expertise in Corporate and Commercial Law, Mergers and Acquisitions, Banking and Finance, Project Finance, Renewable Energy, and more.",
        //     "An advocacy and corporate legal advisory firm with offices in Islamabad and Lahore. Founded by Haroon Jan Baryalay in 2024. Expertise in Corporate and Commercial Law, Mergers and Acquisitions, Banking and Finance, Project Finance, Renewable Energy, and more.",
        // ],
        //  website: "N/A",
        // },
        // {
        //   id: "sharjeel-khawja",
        //   name: "Sharjeel Khwaja",
        //   description:
        //   [
        //     "An advocacy and corporate legal advisory firm with offices in Islamabad and Lahore. Founded by Haroon Jan Baryalay in 2024. Expertise in Corporate and Commercial Law, Mergers and Acquisitions, Banking and Finance, Project Finance, Renewable Energy, and more.",
        //     "An advocacy and corporate legal advisory firm with offices in Islamabad and Lahore. Founded by Haroon Jan Baryalay in 2024. Expertise in Corporate and Commercial Law, Mergers and Acquisitions, Banking and Finance, Project Finance, Renewable Energy, and more.",
        // ],
        //  website: "N/A",
        // },
      ];
   
      
      const { id } = useParams();
      const firm = memberFirms.find((firm) => firm.id === id);
    
      if (!firm) {
        return (
          <div className="flex justify-center items-center h-screen">
            <p className="text-gray-500 text-lg">Partner not found.</p>
          </div>
        );
      }
    
      return (
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg mt-10 ">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">{firm.name}</h1>
          <div className="text-gray-700 space-y-4">
            {firm.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
          {firm.expertise && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Expertise:</h2>
              <ul className="list-disc list-inside text-gray-600">
                {firm.expertise.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
          )}
          {firm.website && firm.website !== "N/A" && (
            <div className="mt-6">
              <a
                href={`https://${firm.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-700 underline text-lg"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>
      );
}

export default SinglePartner
