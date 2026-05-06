/* Auto-generated from sequences_structured.json — do not edit manually */

export type Touch = {
  number: number;
  type: string;
  timing: string;
  subject: string | null;
  content: string;
};

export type SequenceMetrics = {
  sent: number | null;
  replied: number | null;
  repliedPct: number | null;
  interested: number | null;
  interestedPct: number | null;
};

export type Sequence = {
  id: number;
  industry: string;
  language: string;
  metrics: SequenceMetrics;
  icp: string;
  durationDays: number;
  numTouches: number;
  channels: string[];
  abTesting: string | null;
  touches: Touch[];
};

export const SEQUENCES: Sequence[] = 
[
  {
    "id": 1,
    "industry": "B2B Sales Training",
    "language": "EN",
    "metrics": {
      "sent": null,
      "replied": null,
      "repliedPct": null,
      "interested": null,
      "interestedPct": null
    },
    "icp": "Head of Sales, Founder, CEO",
    "durationDays": 30,
    "numTouches": 8,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "TBC",
    "touches": [
      {
        "number": 1,
        "type": "Email",
        "timing": "TBC",
        "subject": "our phone call {{firstName}}",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\n\n{{Icebreaker1 - example: [I saw on LinkedIn that you… }}.\n\nMany B2B organizations like yours and their sales team meet their clients through multichannel outreach campaigns they designed following our Academy (the most comprehensive & detailed online course available).\n\nMy research showed me that {{ValueProposition - example: [companyName] helps businesses improve their customer experience and increase their ROI]}}. And you could help more customers.\n\nOne of our clients demonstrated our methodology was worth exploring when they added CHF 3.7M to their pipeline through 160 qualified leads. Before, they wasted hundreds of hours generating poor-quality leads, thus leaving a lot of money on the table.\n\nIt’d be great to give you a bit more context by phone (or also outsource your sales development to our agency?).\n\nDoes this resonate with you or am I off-topic?\n\nAll the best in {{city}},\nCharles\n\nPS: Imagine if you had access to unlimited qualified leads: your calendar could look like this 😉\n\n\nCharles Perret | CEO\nBoost your B2B sales with our Agency & Academy\nSwitzerland +41 79 758 64 03\nUSA ‭+1 (234) 201-8019‬\nLinkedIn"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "3 days after the last message",
        "subject": "same as before",
        "content": "{% spin %}{% variation %}Good morning{% variation %}Good afternoon{% variation %}Hi{% endspin %} {{firstName}},\n\nI’m writing regarding my last email: I thought you might want a bit more context.\n\nIf you want to contact more {{Target Audience - example: c-levels}} to promote your {{Product: cyber security solution}}, get free access to the first chapter of our Academy.\n\nAmong several tutorials, you will learn how to set up an automated outbound campaign on LinkedIn, up to 400 invitations per month, at no cost.\n\nAre you interested?\n\nBest\n\n{{signature}}"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "6 days after the last message",
        "subject": "Chat with {{colleaguename1}}",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\nI appreciate you’re busy, but I do not want to lose the opportunity to work with {{companyName}}: should I contact someone else to discuss sales development (lead generation, outbound, etc.)?\nMaybe {{colleaguename1}}?\n\nBest\n\nPS: My to-do list pictured below reminded me to write to you 😉\n\n{{signature}}"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "1 day after the last message",
        "subject": "same as before",
        "content": "{{firstName}},\n\nI’d like to prove to you that your leads are our priorities: would you like to receive a 100-lead generation draft for free?\n\nYou should not waste your time generating leads: you should focus on where you create the most value: meeting their potential clients, understanding their needs, and creating a relationship of trust.\n\nIf you’re interested, can we talk 15’ over the phone to discuss your Ideal Customer Profile criteria to prepare this draft? Perhaps on {% assign today = \"now\" | date: \"%A\" %}{% case today %}{% when \"Monday\" %}tomorrow or Wednesday{% when \"Tuesday\" %}tomorrow or on Thursday{% when \"Wednesday\" %}tomorrow or on Friday{% when \"Thursday\" %}tomorrow or on Monday{% when \"Friday\" %}Monday or Tuesday morning{% when \"Saturday\" %}next week{% when \"Sunday\" %}next week{% endcase %}?\n\nBest\n\n{{signature}}"
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "4 days after the last touch",
        "subject": "same as before",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\nSince you're the {{jobtitle}}, what's holding you back from getting a free lead generation draft or learning new customer acquisition methods? Is it because:\nyou don't outreach via email, cold call, and LinkedIn\nit’s not the right time\nfor another reason?\nI would be happy to discuss how our clients launched their first outbound campaign or how they improved their previous approach.\n\nBest\n\nPS: Here is a little virtual cafe to continue your day :)!\n\n\n\n{{signature}}"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "4 days after the last touch",
        "subject": "same as before",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\n\nSo..  my emails were so bad that they didn’t get your attention? \n\nI tried to contact you several times, and if you’re not interested in discussing this, this is perfectly understandable.\n\nI thought good to reach out because before meeting us, our clients were leaving a lot of money on the table: their sales reps weren't booking enough demos, their conversion rates were terrible, and they couldn’t achieve their goals.\n\nSincerely\n\nPS: if you have no interest in exploring how we could develop your business together, let me know so I will stop contacting you\n\n{{signature}}"
      },
      {
        "number": 7,
        "type": "LinkedIn",
        "timing": "1 day after the last message",
        "subject": null,
        "content": "Connection on LinkedIn\nDate sent: 1 day after the last message\nContent: from Charles's LinkedIn account\n{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}}, Charles from devlo. Looking forward to connecting together and discovering projects of {{companyName}}. Best of luck with your B2B sales initiatives in Q3"
      }
    ]
  },
  {
    "id": 2,
    "industry": "Cybersecurity",
    "language": "FR",
    "metrics": {
      "sent": 270,
      "replied": 145,
      "repliedPct": 54.0,
      "interested": 44,
      "interestedPct": 16.0
    },
    "icp": "Cybersecurity solution at the crossroads between access management and attack path simulations. RSSI, CISO, DPO, DSI, Information Security Officer, CIO, CEO, CTO, Cybersecurity",
    "durationDays": 30,
    "numTouches": 9,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "to define the best email subject",
    "touches": [
      {
        "number": 1,
        "type": "Email",
        "timing": "January 18",
        "subject": "A] our call {{firstName}} - cyber-resistance",
        "content": "Hello {{firstName}},\n\n{{Icebreaker - example - Your journey and certifications in the computer security field are impressive - I visited your LinkedIn profile.}}\n\n{{PaintPoint - example - You certainly know that in Switzerland, the number of cyberattacks doubles every year, and most of these go through the Active Directory. Our clients in {{industry}} turned to our solution to improve their cyber-resistance and better resist the next ransomware attack.}}\n\nIn (very) short, our solution:\nidentifies and prioritizes all attack paths so you can focus your attention on the most dangerous ones\nprovides prioritized and actionable recommendations to reduce the risks related to your access configurations\nmaps your entire AD (and/or Azure AD) to provide you with a continuous risk score\n\nTime and resources are limited, but thanks to our solution, you know what to prioritize to improve your resistance to attacks. The actions that require the least effort for maximum improvement are suggested to you.\n\nIf reducing cybersecurity is a priority for you, would you agree to discuss it together with our CEO [CEO_firstName]?\n\nSincerely,\nCharles\n\nPS: All our partners have reduced their internal attack surface by more than 60% thanks to [ClientCompanyName].\n\n{{signature}}"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "3 days after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nSince cyber resistance from {{CompanyName}} is important, I want to make a proposition and share with you more context about [ClientCompanyName].\n\nWe would be happy to perform a security audit on your internal (AD, Azure AD). Instead of paying consultants between CHF 20’000.- or 100’000.- to do a pentest or an audit of your limited and non-continuous environment, we offer you a 30-day test for a fraction of this cost to Analyze your entire attack surface continuously. From experience, results are guaranteed.\n\nBefore using [ClientCompanyName], our clients faced thousands of suggested recommendations based on qualitative compliance. It took time to understand where to start and the most critical issues in their organization's context.\n\nNow they know where to focus their attention and what actions to take first, thanks to simple, prioritized, and contextual recommendations.\n\n[ClientCompanyName] is a Swiss company based in Lausanne and is part of the Trust Valley. We offer on-site or cloud installation in Switzerland or Europe.\n\nCan you give us 45 minutes to discuss your cyber-resistance? You can plan the moment of your choice directly in the calendar of [ClientFirstName] (but if you prefer, I can also send you 2 or 3 proposals).\n\nThank you in advance for your answer,\n\nSincerely,\nCharles\n\nPS: Here is a little virtual coffee for you to continue your day 🙂 \n\n{{signature}}"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "Jan 25 (4 days after the last message)",
        "subject": "same as before",
        "content": "Hi {{firstName}},\n\nI assume this is a busy time? \n\nThe proposal of my last message to have you test our solution for 30 days at a highly competitive cost remains open.\n\nI invite you to read our short brochure to understand how graph theory and Machine Learning techniques allow our solution to continuously map an organization's attack surface to identify the most probable attack paths and suggest remedies.\n\nAlso, be aware that if your environment is hybrid, our solution analyzes not only Microsoft Active Directory, but also Azure Active Directory and the relationship between the two.\n\nDoes your organization use AD, Azure AD, GCP, AWS, or an in-house directory?\n\nHave a great day,\n\nSincerely,\nCharles\n\nPS: My photo to-do list below reminded me to write to you 😉 Hope it makes you laugh!\n\n\n\n\n{{signature}}"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "Jan 30 (5 days after the last message)",
        "subject": "same as before",
        "content": "Hello {{firstName}},\nI hope you are well.\nI haven’t heard from you, therefore I was wondering if it is towards you or rather your colleague {{colleague_name}} to whom I should turn?\nThank you in advance for your response,\n\nSincerely,\n{{salesRep}}\n{{signature}}"
      },
      {
        "number": 5,
        "type": "Cold Call",
        "timing": "February 3 (4 days after the last message)",
        "subject": null,
        "content": "Cold call #1\nCarried out: February 3 (4 days after the last message)\nCall script:\nIf the prospect replies:\nHi {{firstName}}, this is {{salesRep}} from [ClientCompanyName]. I have emailed you regarding our solution, which can help you improve your cyber resilience, including saving you time and money. Would you have 2 minutes to give me to see if we could be a good solution for you? \nIf yes:\nYou certainly know that in Switzerland, the number of cyberattacks doubles each year, and the IS is compromised in less than 24 hours in 80% of the audits carried out in 2020 (according to Wavestone). Faced with this observation, 53% of large companies and SMEs have a project to secure AD. Our solution solves three common problems, which are 1) prioritization in the actions to be carried out, 2) an audit that never stops 3) as well as a very affordable cost. Our customers have reduced their internal attack surface by more than 60% in just a few months. \n—---—---—---—---—---—---—---—---—---—---—---—---—- -------—---—---—---—---—---—---—-----—---—---—---—- -------------------------\nIf they are interested, \nAsk these questions to qualify the prospect:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf they are qualified, ask these questions in order to customize the demo:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nCall-to-Action → Schedule a demo with our co-founder/leader of our company directly in their calendar.\nIf they are not interested, ask why and overcome objections by being courteous, reformulate the Problem, and object):\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf you get the voicemail:\nHello {{firstName}}, this is {{salesRep}} from [ClientCompanyName]. I hope you're doing well. I tried to call you because you might be interested in discovering how our customers reduced their attack surface by more than 60%. Would you have a minute to discuss cybersecurity together? You can call me at this number, [Company Phone Number], or by email at [Email Address]. Have a nice day, and see you soon"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "Feb 4 (1 day after the last message)",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nI hope that you're doing well.\n\nI tried to reach you by phone yesterday about our attack anticipation solution (my mobile is [Phone Number]. Could I call you back at another time to see if our solution is the right one?\n\nThank you in advance for your reply,\n\nYours sincerely,\n{{salesRep}}\n\n{{signature}}"
      },
      {
        "number": 7,
        "type": "Cold Call",
        "timing": "February 7 (3 days after the last message)",
        "subject": null,
        "content": "Cold call #2\nDate sent: February 7 (3 days after the last message)\nCall script:\n(Same as Touch # 5)"
      },
      {
        "number": 8,
        "type": "Email",
        "timing": "Feb 8 (1 day after the last message)",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n \nI tried to reach you again yesterday, but it looks like you have a busy schedule. If there is a better time, or if you have no interest in discovering the added value of our solution, please let me know so that I will stop contacting you.\n \nI think our solution may be of interest to you in replacing numerous audits and pen tests with a single continuous analysis tool, covering the entire internal attack surface, at a significantly lower cost.\n \nOtherwise, could you please tell me if I should turn to another of your colleagues? Maybe {{colleague_name}}?\n \nYou will find our brochure here just in case, but I remain at your disposal if you have a question or to discuss together the protection of your infrastructure against the most damaging attacks.\n \nThank you in advance for your answer, and I wish you all the best for the future.\n\nSincerely,\n{{salesRep}}\n\n{{signature}}"
      },
      {
        "number": 9,
        "type": "LinkedIn",
        "timing": "Feb 9 (0 day after the last message)",
        "subject": null,
        "content": "Hello {{firstName}}, this is [CEO_FirstName] of [ClientCompanyName]. I look forward to connecting together and discovering the {{companyname}} projects and insights you share. See you soon"
      }
    ]
  },
  {
    "id": 3,
    "industry": "Apiary Services / Biodiversity",
    "language": "EN",
    "metrics": {
      "sent": 542,
      "replied": null,
      "repliedPct": 40.0,
      "interested": 70,
      "interestedPct": 13.0
    },
    "icp": "CSR, sustainability, HR, Employee engagement, Office manager",
    "durationDays": 30,
    "numTouches": 7,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "TBC",
    "touches": [
      {
        "number": 1,
        "type": "Email",
        "timing": "First day of sequence",
        "subject": "our call {{firstName}} - sustainability project",
        "content": "Hello {{firstName}},\n\n{{Icebreaker - example: I read your annual report, which presents the actions of your solidarity commitment for the last year.}}\n\nEmployee engagement and sustainability are probably two topics you care about. Several organizations like the WTO, WEF, Caran d'Ache work with our non-profit organization. \n\nTogether, we act for biodiversity: to protect the bees, our clients welcome beehives on their firm site or adopt them in our apiaries if their office location can't welcome bee hives.\n\nWe manage everything. You benefit from the many advantages such as:\nRaise awareness, engage and bring your employees together around different team-building activities\nStrengthen/diversify your sustainable development and solidarity commitment program\nCommunicate on your commitment internally and externally (reporting annually, ISO)\n\nIf biodiversity protection is essential to {{companyName}}, would you be interested in discussing it together during a first contact by telephone?\n\nLooking forward to your reply,\n\nBest bee-wishes,\n{{salesRep}} for [ClientCompanyName]\n\nPS: Do you like honey?\n\n{{signature}}"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "7 days after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nYou certainly have several questions following my previous email :) Here is more context and a proposal for you.\n\nWe are facing the 6th mass extinction - the last to cause the disappearance of the dinosaurs. Insects are the most impacted animals and particularly the bees. However, they are the keystone of biodiversity because they pollinate plants.\n\n[ClientCompanyName] wishes to enable this awareness and works with private partners to change the scale. Employees from {{companyName}} could get involved locally and concretely to protect bees.\n\nIf your offices do not lend themselves to the hives facilities, you can always adopt one in our apiaries. Your hive will then be personalized with your company logo, and all the produced honey will be sent to you in jars at your logo/design.\n\nWe would be happy to come to visit you and introduce you to some of our initiatives, like the one from Clarins: [video link]\n\nWould you have 45 minutes to meet us? For example, next Thursday morning?\n\nI am looking forward to hearing from you.\n\nBest regards,\n{{salesRep}}\n\n{{signature}}"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "5 days after last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\nIs it better to contact your colleague {{colleaguename}}? Or maybe someone else?\nOr is it because:\nYou prefer to discuss this together at another time\nThis proposal does not interest you\nYou already have a partnership in place\nOr another reason?\nThank you in advance for your response,\n\nRegards,\n{{salesRep}}\n\nPS: My photo to-do list below reminded me to write to you 😉\n\n{{signature}}"
      },
      {
        "number": 4,
        "type": "Cold Call",
        "timing": "3 days after the last message",
        "subject": null,
        "content": "Call for cold #1\nDate sent: 3 days after the last message\nCall script:\nIf the prospect answers:\n\nHello {{firstName}}, it's {{salesRep}}  from [ClientCompanyName]. Are you doing well? … [\"Yes, thank you, and you?\"]\n\nWell, thank you. I contacted you by email regarding our biodiversity and bee hives project. I saw that you are [JobTitle] at [ProspectCompanyName]. I wanted to give you a call. Do you have a minute to chat? \u000b\nIf yes:\n\nWe are a recognized association of public utility which sets up partnerships with companies like yours to act for biodiversity and the disappearance of bees.\n\nWe install small hives on our customers' sites; we take care of everything. We also organize team building, workshops, and gifts you can send to your clients. That's why I wanted to know if you were interested in meeting my manager [ClientFirstName] for more information about the project.\n—---—---—---—---—---—---—---—---—---—---—---—---—- -------—---—---—---—---—---—---—-----—---—---—---—- -------------------------\nIf they are interested, \nAsk these questions to qualify the prospect:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf they are qualified, ask these questions in order to customize the demo:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nCall-to-Action → Schedule a demo with our co-founder/leader of our company directly in their calendar.\nIf they are not interested, ask why and overcome objections by being courteous, reformulate the Problem, and object):\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf you get the voicemail:\nHello {{firstName}}, this is {{salesRep}} from [ClientCompanyName]. I hope you're doing well. I'm calling about [ClientCompanyName] which installs beehives in town. I was wondering if you had 45 minutes to give an introduction on how our clients engage for sustainability? If so, I'd be happy to give you a little more context. You can call me back at this number, [Phone Number]. Have a nice day and see you soon."
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "1 day after last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nYou might have received a missed call from me yesterday. Would you be available at another time?\n\nIt would be great to discuss your employee engagement, and CSR projects together. You can also tell us about your team building or volunteering day projects and I could explain how we help our clients in this regard.\n\nBest wishes to you,\u000b{{salesRep}}\n\nPS: Here is a little virtual cafe to continue your day :)!\n\n\n\n{{signature}}"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "4 days after last message",
        "subject": "same as before",
        "content": "Hello {{firstName}}, \n\nI hope you are doing well.\n \nWe attempted to contact you at various times, and if you have no interest in our association, we would understand.\n \nWould another of your colleagues be interested in the project we are proposing? Maybe {{colleaguename}}?\n \nWe remain at your entire disposal if you have any questions.\n \nI wish you all the best for the future.\n\nSincerely,\n{{salesRep}}\n\n{{signature}}"
      },
      {
        "number": 7,
        "type": "LinkedIn",
        "timing": "1 day after the last message",
        "subject": null,
        "content": "Connection on LinkedIn\nDate sent: 1 day after the last message\nContent: from LinkedIn\nHello {{firstName}}, [President_FirstName] here, President of the [ClientCompanyName]. Our member {{salesRep}} contacted you by email. Talk to you soon I hope"
      }
    ]
  },
  {
    "id": 4,
    "industry": "Employee Engagement / SaaS",
    "language": "EN",
    "metrics": {
      "sent": 225,
      "replied": 38,
      "repliedPct": 17.0,
      "interested": 20,
      "interestedPct": 9.0
    },
    "icp": "VP or Head of Human Resources, VP or Head of Corporate Social Responsibility",
    "durationDays": 16,
    "numTouches": 7,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "No",
    "touches": [
      {
        "number": 1,
        "type": "Email",
        "timing": "First day of sequence",
        "subject": "Our call {{firstName}} - Employee social engagement",
        "content": "Hello {{firstName}},\n\nWe never met before, but our team looked at the various sustainable initiatives on {{ProspectCompanyName}}'s website. We concluded that your company takes community impact seriously and involves its workforce in citizenship activities.\n \n[Name of colleague] and I work at [ClientCompanyName], a digital platform for employee social engagement, working with volunteering, giving, and sustainable challenges - here is a picture of our video call, learning more about your organization.\n \n\n\nWe work alongside hundreds of charities and companies such as PwC, L'Oréal, and BNP Paribas to innovate their programs.\n\nCould we jump on a quick phone call to see if [ClientCompanyName] would be a good fit?\n\nBest regards,\nCharles\n \n\n\n\n\n[ClientCompanyLogo]\nCharles Perret\nAccount Executive - [ClientCompanyName]\n[ClientCompanyAddress]\n[ClientCompanyAddress]\n+41 79 758 64 03\n[ClientCompanyURL]"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "4 days after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nI hope you are doing well.\n\nYour inbox probably must be a busy place, and I wanted to reach out in case my original message got lost. I thought you would be interested in knowing that our clients like BNP Paribas, L'Oréal, and PwC reoriented their corporate volunteering platform to focus on virtual missions (and August was record-breaking).\n\nUsing our digital solution, their talents are encouraged to support any Little Act of Kindness, such as helping the elderly with grocery shopping. They can also connect with virtual opportunities published by their charity partners to mentor migrant entrepreneurs online, organize a solidarity yoga class, and translate documents (please take a look at this document attached).\n\nShould we find some time together, maybe in the upcoming days?\n\nLooking forward to your reply,\n\nBest regards,\nCharles\n\n{{signature}}"
      },
      {
        "number": 3,
        "type": "LinkedIn",
        "timing": "3 days after the last message",
        "subject": "same as before",
        "content": "Hi {{firstName}}, it’s Charles from [ClientCompanyName]. It would be great to connect on LinkedIn as well. I contacted you by email a few days ago regarding your sustainable initiatives. Take care"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "3 days after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nCould we schedule a time to chat quickly over the phone together?\n\nWe could benefit from our platform and enhance your CSR program while involving your employees in this process.\n\nIf someone else is the right person to speak to, I would be very grateful if you could forward me to the best person to speak with - thanks in advance.\n\nIf you're interested, I invite you to book a time slot directly into my agenda for our discovery call so we avoid going back and forth if that's easier for you.\n\nBest wishes,\nCharles\n\n{{signature}}"
      },
      {
        "number": 5,
        "type": "Cold Call",
        "timing": "4 days after the last message",
        "subject": null,
        "content": "Cold calling\nDate sent: 4 days after the last message\nCall script:\nIf the prospect replies:\nHello {{firstName}}, this is Charles Perret from [ClientCompanyName]. How are you? [...]\nI contacted you by email regarding our employee social engagement solution. We support companies like PwC, L'Oréal, and BNP Paribas, and I was kindly wondering if you would be interested in knowing more about it. [...]\nIf yes: \nOkay, great. I suggest that we set up a demo when you are available. Would you have 2 minutes now to ask you a few questions to get a better understanding of your situation, so we can prepare a personalized presentation, including success stories from companies with a similar profile?\n—---—---—---—---—---—---—---—---—---—---—---—---—- -------—---—---—---—---—---—---—-----—---—---—---—- -------------------------\nIf they are interested, \nAsk these questions to qualify the prospect:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf they are qualified, ask these questions in order to customize the demo:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nCall-to-Action → Schedule a demo with our co-founder/leader of our company directly in their calendar.\nIf they are not interested, ask why and overcome objections by being courteous, reformulate the Problem, and object):\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf you get the voicemail:\nHello {{firstName}}, this is Charles Perret from [ClientCompanyName]. I hope you are doing well. I tried to reach out in regards to our employee social engagement solution. Would you be interested in discovering what we do with companies PwC, L'Oréal, and BNP Paribas to [Insert a specific argument according to the prospect personae]? Kindly let me know if this is the case, I would be happy to give you a bit more context. You can call me back using this number, +41 79 758 64 03, or by email at charles.perret@mail.com. Have a great day and take care"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "1 day after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n \nI tried calling you a few days ago. I hope you are doing well.\n \nYou may agree with me if I say that CSR is a broad topic, where a company can act in different areas like installing solar panels on a roof, reducing its carbon footprint, etc.\n \nCorporate citizenship is an area that companies only sometimes consider, yet it is an impactful approach to doing good while giving an active role to your employees. By involving your talents, it's not anymore just the management that takes care of developing a sustainable future.\n \nPlease look at this YouTube video to learn more about our top-down and bottom-up approaches. It shows how the [ClientCompanyName] platform matches employees with missions published by your selected charities while giving you an oversight of the whole process.\n \nPlease could you kindly forward my email if I should contact another of your colleagues instead?\n\nKind regards,\nCharles\n\n{{signature}}"
      },
      {
        "number": 7,
        "type": "Email",
        "timing": "3 day after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nFollowing my last emails, I imagine there have been some changes to your schedule and potentially to your business with everything that has been happening with COVID-19.\n \nDespite the uncertainty, we would love to keep things positive and with good perspectives in mind. Some of our clients reoriented their volunteering programs towards virtual missions to boost employee engagement.\n \nCan you connect and discuss how things have changed on your end and how we could eventually help out today or in the near future?\n\nI look forward to your reply,\n\nKind regards,\nCharles\n\n{{signature}}"
      }
    ]
  },
  {
    "id": 5,
    "industry": "Learning & Development",
    "language": "EN",
    "metrics": {
      "sent": 275,
      "replied": 124,
      "repliedPct": 45.0,
      "interested": 14,
      "interestedPct": 5.09
    },
    "icp": "L&D, organization development, training, commercial operations, talent management, teaching & learning, e-learning, knowledge",
    "durationDays": 40,
    "numTouches": 7,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "Yes",
    "touches": [
      {
        "number": 1,
        "type": "Email",
        "timing": "The first day of the sequence",
        "subject": "our call {{firstName}}",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Good morning{% else %}Good afternoon{% endif %} {{firstName}},\n\n{{Icebreaker}}\n\nMy research showed that you manage the skills development of hundreds of people at {{companyname}}. Among others, I can imagine a strong focus on leadership, communication, and facilitation skills.\n\nDozens of companies trust [ClientCompanyName] to enable their people to grow and develop in over 30 countries. In this post-covid world, business is constantly evolving. People need regular upskilling and reskilling to be effective in their roles.\n\nIn Switzerland, we have been building and delivering learning in German, French, and English since 2002.\n\nIt would be fantastic to meet you in {{city}} or by video conference and discuss together.\n\nDoes this resonate with you, or am I off-topic?\n\nBest,\n[Client_FirstName]\n\n{{signature}}"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "7 days after the last message",
        "subject": "same as before",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\n\nI’m writing regarding my last email: I thought you might want a bit more context.\n\nTraining Industry selected [ClientCompanyName] among the Top 20 companies recognized as the best leadership training providers.\n\nOur customers appreciate our solutions because they’re blended, interactive, and learner-centric. Your people, wherever they are in the world, can truly grow thanks to our robust learning approach, relying on decades of experience and innovation.\n\nAmong our different learning solutions, most of our customers appreciate [ClientSolution]: https://www.youtube.com/\n\nIt would be amazing to learn more about your future initiatives to help your people in their day-to-day lives, and exchange best practices.\n\nAre you interested?\n\nBest,\n[Client_FirstName]\n\nPS: Let me know if this situation sounds familiar 😄\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{{signature}}"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "5 days after the last message",
        "subject": "same as before",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Good morning{% else %}Good afternoon{% endif %} {{firstName}},\nI appreciate you’re busy. I do not want to lose the opportunity to work together: should I contact someone else in your organization?\nMaybe your colleague {{colleaguename1}} or {{colleaguename2}}?\n\nRegards,\n[Client_FirstName]\n\nPS: Here is a little virtual cafe to continue your day :)!\n\n\n{{signature}}"
      },
      {
        "number": 4,
        "type": "Cold Call",
        "timing": "3 days after the last message",
        "subject": null,
        "content": "Call for cold#1\nDate sent: 3 days after the last message\nIf the prospect answers:\n“John Doe speaking”\n \nHello {{firstname}}, this is {{salesRep}}  from [ClientCompanyName]. How are you?\n \n“I’m good”\n\nOur Managing Director [Director_FirstName] contacted you by email (regarding your L&D program). Does it ring a bell by any chance?\n          ↙                                                   ↓         \n“Yes”\n“No”\nSee below\n↘\nHe contacted you since you are the {{JobTitle}} at {{CompanyName}}. We work for [ClientCompanyName].  which was recognized among the Top 20 companies in the field of leadership development.\n\nI was wondering if you would have a minute to discuss?\n          ↙                                                      ↓                                       \n“Yes”\n“I don’t have time right now, I’m about to enter a meeting”\nSee below\n\n\n↘\nOh okay, could I call you back maybe tomorrow morning at like 10 am?\n\n“Yes sounds good”\n\nOkay, thank you. You’ll receive an invite. Have a great meeting and talk to you tomorrow. [END]\nTo give you a bit of context, \n(If not said before: [ClientCompanyName] was recognized among the Top 20 companies in the field of leadership development. Hundreds of companies trust us to enable their talents to grow through different learning solutions. This is why [Client_FirstName] would be happy to meet you, share best practices so you could maybe inspire your L&D program from what we’re doing. \n\nAre you interested? \n\n“Yes”\nSee below\n↘\n“No, I’m not the right person” \n\nWho is in charge of providing learning and development solutions to your organization and developing your training program?\n           ↙                                                      ↓                                       \n“Yes”\nSee below\n↘\n“It’s my colleague X”\n\nWould it make sense to organize a first meeting altogether to discuss and exchange best practices, without engagement, of course? [Get contact details]\n\nAnd at the moment, what are the projects you overview to help your colleagues in their work?\nInteresting, could we present to you how our team supports our customers in this regard so maybe it gives you new ideas? Give me one good reason for not meeting our Managing Director [Director_FirstName] during a 45-minute first intro meeting?\nIf yes, discovery call + book the meeting\n“What is important to you and your executive committee?”\n“How do you want to help your people improve their roles?\n“How many people take part in your L&D programs?\nI have the calendar of our Managing Director [Director_FirstName] in front of me, should we find it now together?\nIf not, ask why and overcome objections: (Courtesy - Problem - Action)\nWho is [ClientCompanyName]? \n100 years of growing expertise and know-how in Learning and Development \n400 certified facilitators in over 30 countries in all human skills (leadership, management, communication, emotional intelligence, presentation skills, time management….)\nAnd in Switzerland?\n[ClientCompanyName] was founded in 2002 ([ClientCompanyName] Switzerland is a branch of the [ClientCompanyName])\nFacilitators in Geneva-Lausanne-Zurich-Basel for delivery in German, English, and French\n\nHow much does it cost?\nIt depends on several factors, such as the chosen Learning Solution, the format (face-to-face, virtual, or hybrid), and the number of topics, so my colleagues will give you a better estimate during the first meeting.\nWhy is [ClientCompanyName] different?\n[ClientCompanyName] is a very broad L&D Training is old-fashioned now [ClientCompanyName] provides a library of digital tools (digital learning IS NOT e-learning)(digital learning IS asynchronous, learn at your own space, etc., dominated by LinkedIn Learning, but nobody connects, way too large catalog of courses with 35k). Our offer is different:\nDesigned by pedagogical engineers, more engaging (THIS IS A COMPETITIVE Advantage)\nmany languages (THIS IS A COMPETITIVE Advantage)\n200 modules, so easier to find what you need\nPlug on LMS or under [ClientCompanyName]’s platform\nhuman interaction (additional)"
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "0 day after the previous touch",
        "subject": "Our phone call",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\n\nI’m{{salesRep}}, and I work with [ClientName] at [ClientCompanyName].\n\nI didn’t manage to reach you today, unfortunately. I wanted to exchange a few words regarding our Managing Director’s proposition.\n\nThe idea is to discuss your future upskilling and reskilling initiatives to help your people in their day-to-day lives. We could exchange our best practices. \n\nCan we talk about this together in the next few days over a quick phone call?\n\nBest,\u000b{{salesRep}}\n\n{{signature}}"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "4 days after the last message",
        "subject": "same as before",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Good morning{% else %}Good afternoon{% endif %} {{firstName}},\n\nHope you’re well.\n\nWe tried to contact you several times, and if you’re not interested in discussing this, this is perfectly understandable.\n\nYou must be busy, but I’m confident you would be positively surprised to see what our customers put in place.  On that note, you can look at these case studies to give you a better view:\n\n[ClientsCustomer] wanted to equip their 5000 managers worldwide with the skills, knowledge and behaviors to better understand and perform their role in the new Talent Management processes\n\n[ClientsCustomer] wanted to support their pharmacist managers in their new managerial role\n\n We would happily connect you with our customers so you hear it from them. But first, how about a conversation?\n\nOr should I contact you later this year?\n\nBest\n{{salesRep}}"
      },
      {
        "number": 7,
        "type": "LinkedIn",
        "timing": "5 days after Touch#4 - Call for cold#1",
        "subject": null,
        "content": "LinkedIn connection request\nDate sent: 5 days after Touch#4 - Call for cold#1\nContent: message sent on LinkedIn (from the client’s account)\n\n{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}}, [FirstNameofClient] from [ClientCompanyName}. I am happy to connect to share best practices around our innovative learning solutions to grow and develop your people."
      }
    ]
  },
  {
    "id": 6,
    "industry": "Cleaning Management / Smart City",
    "language": "DE/FR",
    "metrics": {
      "sent": 708,
      "replied": 271,
      "repliedPct": 38.0,
      "interested": 79,
      "interestedPct": 11.16
    },
    "icp": "Political office holder (Mayor, Director) in charge of their city’s street cleanliness",
    "durationDays": 30,
    "numTouches": 7,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "Email object in Touch#4",
    "touches": [
      {
        "number": 4,
        "type": "Cold Call",
        "timing": "N/A",
        "subject": null,
        "content": "Call-to-action: Plan a discovery call to qualify the potential customer's needs\n\nTouches\n\n---\n\nDear {{salutation}} {{lastname}},\n\nWould it be better to contact your colleagues {{colleaguename1}} or {{colleaguename2}}?\n\nI imagine you have a busy schedule. However, your colleagues in charge of cleanliness, pollution, or street cleaning might be interested.\n\nA little anecdote: one of our clients (street commissioner) thought he needed more internal resources to start the project. However, it took only two months to get the first results. Not only did he understand that he and his teams saved valuable time, but they even eliminated several unknown \"critical waste hotspots\" (thanks to the clear dashboard).\n\nKind regards,\n{{salesRep}}\n\nPS: Below is an example of a weekly report. This is an essential tool to help you make decisions today and achieve concrete results tomorrow"
      },
      {
        "number": 1,
        "type": "LinkedIn",
        "timing": "1 day after the last message",
        "subject": null,
        "content": "Connection on LinkedIn\nDate sent: 1 day after the last message\nSender: Client\nContent: from LinkedIn\nOption A] Fully personalized \nOption B) Hello Mr {{last name}}, my colleague {{salesRep}} will contact you regarding the city cleanliness of {{city}}. Is {{email}} the right email to write to you?"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "first day of the sequence",
        "subject": "Our conversation - {{firstName}} & {{salesRep}}",
        "content": "Dear {{salutation}} {{lastName}},\n\n{{icebreaker}}.\n\nMy research has also shown that you are politically responsible for {{city}} cleanliness.\n\nToday, we support more than 50 cities and municipalities that have chosen our solution to control their level of cleanliness, optimize the use of their resources, and reduce their environmental footprint, especially water consumption and greenhouse gas emissions.\n\nThe city of Basel, for example, was able to reduce the number of its sweepers by 15%. The official responsible for cleanliness can objectively demonstrate that his city has become cleaner.\n\nTo achieve this, the city is mapped using our image recognition system installed on the vehicles. These cleanliness measurements also make it possible to involve the teams in a continuous improvement approach and make their working conditions more attractive.\n\nIt would be great to give you more context over the phone.\n\nAre you interested, or am I off-topic?\n\nKind regards,\n{{salesRep}}\n\nPS: This video shows how the intelligent vision system works on vehicles\n\n{{signature}}"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "7 days after the previous message",
        "subject": "same as before",
        "content": "Dear {{salutation}} {{lastName}},\n\nWhat do you think of my proposal?\n\nAdditionally, we invite you to conduct a full-scale test over the next three months, focusing on one or more concrete operational goals (this is the time of year when waste production is at its highest!).\n\nYou can try our solution in {{city}} to evaluate the results yourself. \n\nThe first five cities in {{CountrySequence}} will benefit from a preferential price. As a bonus, you will also receive personalized support from one of our experts who can help you solve your city cleanliness operational issues.\n\nFor your information, all cities and municipalities that have deployed our solution in 2022 have moved on to larger territories. Implementation is straightforward, and no RFP is required as our solution is unique and there are no competitors.\n\nWould you be interested in speaking with our CEO?\n\nKind regards,\n{{salesRep}}\n\n{{signature}}\n\nPS: My to-do list in the image below reminded me to write to you 😉"
      },
      {
        "number": 5,
        "type": "Cold Call",
        "timing": "3 days after the previous message",
        "subject": null,
        "content": "Call for cold#1\nDate sent: 3 days after the previous message\nCall script:\nIf the prospect answers:\nIntro statement: This is {{salesRep}} from [ClientCompanyName], I contacted you by e-mail because you're the {{jobtitle}} of the city of {{City}} and I wrote to you about urban cleanliness. Do you have a couple of minutes to chat?\nPurpose statement: As you can see, over 50 municipalities have turned to our solution to control their cleanliness, optimize their resources, and reduce their environmental footprint, which is why we'd like to meet you and present our customers' results. Are you interested?\nCTA: That's why our Managing Director [Director_FirstName] would like to meet you and present our customers' results. Are you interested?\nContext: 50 municipalities have turned to our solution to control their level of cleanliness, optimize the use of their resources, and reduce their environmental footprint, notably water consumption and greenhouse gases. To achieve this, they map the cleanliness of their city using our image recognition systems installed on their vehicles. These cleanliness measurements also enable us to involve our teams in a continuous improvement approach and make their working conditions more attractive.\n\nFollow the following cold call script\nIf so, ask these questions to personalize the demo and qualify the prospect\n\nIf not, ask why and overcome objections: (Courtesy - Problem - Action)\n_____\n_____\n_____"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "1 day after the previous message",
        "subject": "Missed call - city cleanliness",
        "content": "Dear {{salutation}} {{lastname}},\n\nI was unable to reach you by phone today.\n\nLike all the other political elected officials we work with, you care about the attractiveness, safety and sustainability of {{city}}. In addition, the quality of life of your residents goes hand in hand with the city's cleanliness. \n\nThese are why we would like to meet you and present the results your residents can expect.\n\nLet's discuss this over the phone?\n\nSincerely,\n{{salesRep}}\n\nPS: Here's a bit of virtual coffee to continue your day :)!"
      },
      {
        "number": 7,
        "type": "Email",
        "timing": "4 days after the previous message",
        "subject": "same as before",
        "content": "Dear {{salutation}} {{lastname}},\n\nShould I check in with you again later this year?\n\n{{city}}'s website says you are responsible for improving city cleanliness.\n\nYou know as well as I do that you can't improve what you can't measure. It’s only possible to evaluate the effectiveness of the means used and improve them by measuring them.\n\nThat's why we can help you innovate in this area to ensure your residents' quality of life.\n\nA recent case study is a business district in Utrecht, NL, where many residents complained about cleanliness. Our solution redefined cleaning zones based on measurements taken for two months. The result was no more complaints, and four street workers could be kept busy with less strenuous tasks.\n\nWould you like to learn more about the background? Or would you like to contact our customers to exchange ideas and ask them questions directly?\n\nKind regards,\n{{salesRep}}\n\nPS: Like you, we believe {{city}} is one of the cleanest cities in the {{CountrySequence}}. Together we can prove that and do even better without investing more resources.\n\n{{signature}}"
      }
    ]
  },
  {
    "id": 8,
    "industry": "Recruiting / HR Tech",
    "language": "FR",
    "metrics": {
      "sent": 538,
      "replied": 130,
      "repliedPct": 24.0,
      "interested": 33,
      "interestedPct": 6.0
    },
    "icp": "HR, recruiting, talent acquisition, employer branding",
    "durationDays": 25,
    "numTouches": 8,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "Yes",
    "touches": [
      {
        "number": 1,
        "type": "Email",
        "timing": "First day of sequence",
        "subject": "our call {{firstName}} - recruiting platform",
        "content": "Hello {{firstName}},\n\nOur recruitment platform can help you and {{companyName}} meet new talent.\n\nI was wondering if it is you or rather your colleague {{colleaguename}} that I should turn to?\n\n\n\n\nOur clients, such as {{client_ref}}  are already successfully using our solution to meet candidates over an informal lunch - virtually or in person (you may have gathered from my photo montage above 😊).\n\nThe principle is simple: students or recent graduates apply via our platform to request a lunch with an employee. If their application is successful, they meet the employee of the chosen department for an informal discussion over lunch.\n\nEvery day, our platform is enriched with new students, graduates, and young professional profiles from many universities and colleges. {{icebreaker}}\n\nHow about contacting us next week to see if our digital solution can help you recruit more talent? Over a virtual coffee, perhaps?\n\nThank you in advance for your feedback,\n\nBest regards,\n{{salesRep}}\n\nPS: Here is an example of  {{ClientCompanyName}} with {{client_ref}} 😃\n\n{{signature}}"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "4 days after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nI imagine your schedule is very busy - my to-do list pictured below reminded me to write to you 😉\n\n\n\n\n\nAll joking aside, I'm convinced that your current and potential candidate employees are central to everything {{companyName}} undertakes. Today, recruitment is crucial but a little more complex than before.\n\nThat's why you and your team will be pleasantly surprised at how well our solution supports our clients and helps you achieve your recruitment goals.\n\nHow do you currently approach recruitment? Are the results meeting your expectations?\n\nSincerely,\n{{salesRep}}\n\nPS: I hope the above photo made you laugh! Have a great day\n\n\n{{signature}}\n\n---\n\nHello {{firstName}},\n\nI imagine your schedule is very busy - my to-do list pictured below reminded me to write to you 😉\n\n\n\n\n\nJoking aside, I believe that your current and potential employees are at the center of everything {{companyName}} does. Today, recruitment is crucial but a little more complex than before.\n\nThat's why you and your team will be pleasantly surprised at how well our solution supports our clients and helps you achieve your recruitment goals.\n\nHow do you currently approach recruitment? Are the results living up to your expectations?\n\nHow about exploring this new approach together over the phone in the next few days?\n\nSincerely,\n{{salesRep}}\n\nPS: I hope the above photo made you laugh! Have a great day\n\n\n{{signature}}"
      },
      {
        "number": 3,
        "type": "LinkedIn",
        "timing": "N/A",
        "subject": "same as before",
        "content": "LinkedIn Profile Visit\nVisiting: the same day the previous touch\nSubject: same as before\nContent: None\nVisit {{ClientCompanyName}} LinkedIn profile"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "4 days after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\nI hope you are well.\nI haven't heard from you, so I guess you have a hectic schedule at the moment, or is there someone else in charge of recruitment?\nMy colleague {{salesRep}} and I would be delighted to meet someone from {{companyName}} 😃\nThank you in advance for your response,\nYours sincerely,\n{{salesRep}}\nPS: I thought of you because our most successful partners have already increased their talent pool by more than 100 profiles thanks to our solution!\n{{signature}}"
      },
      {
        "number": 5,
        "type": "LinkedIn",
        "timing": "Sent from another team member 2 days after the last message",
        "subject": "same as before",
        "content": "Hi {{firstName}}, it’s {{salesRep2}} from {{ClientCompanyName}}. I am the colleague of {{salesRep}} who contacted you via email. It would be great to connect together and get updates about {{companyName}} on LinkedIn. Take care"
      },
      {
        "number": 6,
        "type": "Cold Call",
        "timing": "3 days after the previous touch",
        "subject": null,
        "content": "Cold calling\nCarried out: 3 days after the previous touch\nCall script:\nIf the lead picks-up the phone:\nHi {{firstName}}, this is {{salesRep}} from {{ClientCompanyName}}. \nI emailed you about our recruitment platform - we help companies like {{client_ref}} increase their employer brand awareness. Would you be interested in discussing the results it delivers? [...]\nIf yes: \nOkay, great. I suggest that we arrange a demonstration when you are available. Would you have 2 minutes now to ask yourself a few questions to better understand your situation so we can prepare a personalized presentation, including success stories from companies with a similar profile?\nIf they are interested, \nAsk these questions to qualify the prospect:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf they are qualified, ask these questions in order to customize the demo:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nCall-to-Action → Schedule a demo with our co-founder/leader of our company directly in their calendar.\nIf they are not interested, ask why and overcome objections by being courteous, reformulate the Problem, and object):\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf you get the voicemail:\nHello {{firstName}}, this is {{salesRep}} from {{ProspectCompanyName}}. I hope you are well. I've been trying to contact you about our recruitment platform. Would you be interested in finding out what we do for companies like {client_ref}} to increase their pool of qualified talent and raise their employer brand awareness? Please let me know if this is the case; I'd be happy to give you more context. You can call me at [PhoneNumber] or email me at  [email] Have a good day, and take care of yourself.\n\nOr send a message on LinkedIn:\nHello {{firstName}}, , I tried to reach you today about our recruitment platform. We help companies like {{client_ref}}  to connect with candidates over lunch or coffee (informal and more friendly). Would you like to know more?"
      },
      {
        "number": 7,
        "type": "Email",
        "timing": "4 days after the previous touch",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nI hope you are well.\n\nI wanted to give you a little more context about our solution that will facilitate your recruitment process.\n\nOur platform not only creates genuine connections between top employers and top talent but also takes care of all the coordination.\n\nIn other words, your HR team receives the applications, which means you can qualify the profiles that interest you most. Our tool then automatically connects them with the available employee in the department in question for lunch or coffee.\n\nIf you have yet to receive any feedback, is recruitment not on the agenda? Or would you like to receive more information first?\n\nThank you in advance for your reply,\n{{salesRep}}\n\nPS: Here is a coffee to continue your day 🙂\n\n\n\n\n{{signature}}"
      },
      {
        "number": 8,
        "type": "Email",
        "timing": "4 days after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n \nIt seems that you have a busy schedule and I hope not to disturb you.\n \nThis email is my last attempt to get in touch with you. However, I remain at your disposal if you can find time to talk.\n \nOr should I turn to your colleague {{colleaguename}}?\n \nI wish you a wonderful day and thank you in advance for your response.\n \nBest regards,\n{{salesRep}}\n \nPS: One last nice image for the road!\n\n\n\n\n\n\n{{signature}}"
      }
    ]
  },
  {
    "id": 9,
    "industry": "Bike Parking / Urban Mobility",
    "language": "FR",
    "metrics": {
      "sent": 286,
      "replied": 125,
      "repliedPct": 44.0,
      "interested": 39,
      "interestedPct": 14.0
    },
    "icp": "University, Sports Club, Cities, Stores, Coworking Spaces",
    "durationDays": 40,
    "numTouches": 7,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "Subject line (Touch#2 - Email#1 - Intro) + job title (Touch#7 - Email#5 - Last Attempt)",
    "touches": [
      {
        "number": 2,
        "type": "Email",
        "timing": "N/A",
        "subject": null,
        "content": "Email#1 - Intro) + job title (Touch#7 - Email#5 - Last Attempt)\nCall-to-action: Plan a discovery call to qualify the potential customer's needs\n\nTouches\n\n---\n\nBonjour {{salutation}} {{lastName}},\n\n{{Icebreaker}} J'ai lu sur internet que Seneffe a installé quatre stations de réparation de vélos à différents endroits afin de promouvoir la mobilité douce et d'encourager l’utilisation du vélo comme moyen de transport ou de loisir. Belle initiative\n\nEn ce sens, j'imagine que de plus en plus d'entre eux se déplacent en deux-roues jusque dans vos locaux. Cependant vous savez que leur utilisation n'est plus sans risque. En 2022, environ 600 vélos ont été volés chaque jour en Belgique. C’est de ce constat qu’est né [Client_Name].\n\nNous avons développé des bornes de stationnement vélos 100% sécurisées, durables (matériaux recyclés) et autonomes (panneaux solaires). Nos utilisateurs gèrent la fixation de leur vélo à la station en quelques clics via notre app mobile gratuite. Nos bornes sécurisent la roue avant ET le cadre, rendant le vol et le démontage impossible.\n\nSi la sécurité de vos étudiants et une mobilité plus douce sont des sujets pertinents pour vous, je serai ravi de vous donner un peu plus de contexte par téléphone.\n\nEst-ce que ça vous intéresse ou suis-je hors sujet?\n\nBien cordialement,\nPS:  Faisons en sorte de ne pas en arriver là!\n\n{{signature}}"
      },
      {
        "number": 1,
        "type": "LinkedIn",
        "timing": "First day of sequence",
        "subject": null,
        "content": "Connection on LinkedIn\nDate sent:  First day of sequence\nSender: [Client_Name]\nContent: from LinkedIn\u000b\n1. 1. LinkedIn connection request note:\nBonjour {{salutation}} {{lastName}}, j'ai lu vos différents posts sur LinkedIn en tant que responsable du patrimoine et du développement durable. Connectons-nous sur LinkedIn. Cordialement\n\n1. 2. If the LinkedIn connection is accepted, send the following message 7 days later:\nBonjour {{salutation}} {{lastName}}, mon collègue {{salesRep}}  va vous inviter par e-mail. C’est au sujet de notre offre spéciale pour cet automne afin de protéger vos {{audience}} contre le vol de vélo vu que vous êtes.\n\n1. 3. Voice message:\n“Bonjour, c’est [Client_Name]. Nous venons de remporter l’appel à projet de {{city/region}} afin de remplir les rues de nos stations parking vélos révolutionnaires. Notre priorité est la sécurité de tous les cyclistes en proposant une solution locale et durable. Est-ce également un enjeu pour vous ?”"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "7 days after the previous touch",
        "subject": "same as before",
        "content": "Bonjour {{salutation}} {{lastName}},\n\nQue pensez-vous de ma proposition concernant nos stations antivols pour vélos [ClientCompanyName]?\n\nD’ailleurs, nous venons de remporter un appel à projet de la région de Bruxelles-Capitale.\n\nC’est aussi ce qui nous pousse à contacter des {{ICP}} sensibles à la problématique du vol de vélos, certainement comme {{companyName}}.\n\nÀ cet effet, j’aimerais vous présenter notre offre spéciale pour cet automne. Les 10 premiers candidats bénéficieront de remises jusqu’à 50% ainsi que des garanties élargies jusqu’à 5 ans pour certains contrats. \n\nEn bonus, l'installation qui normalement coûte €490 sera exceptionnellement offerte à l’achat de 3 stations minimum. Pour finir, nos équipes vous aideront à faire la promotion des stations [ClientCompanyName] afin d’assurer son utilité pour vos utilisateurs.\n\nEst-ce que ça vous intéresse d’explorer cette proposition avec [CEO_Name], notre CEO?\n\nBien cordialement,\n\nPS: ma liste des tâches en photo ci-dessous m'a rappelé de vous écrire 😉\n\n\n\n{{signature}}"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "5 days after the last message",
        "subject": "Prise de contact avec {{ColleagueName1}} ou {{ColleagueName2}}",
        "content": "Bonjour {{salutation}} {{lastName}},\n\nEst-il mieux de contacter vos collègues {{ColleagueName1}} ou {{ColleagueName2}} concernant nos bornes antivols pour vélos?\n\nVotre emploi du temps est certainement chargé, mais j’imagine que faciliter l'accès à vos locaux en favorisant une mobilité plus douce reste d'actualité. De plus, vous pourrez mettre cela en avant pour vous différencier des autres universités.\n\nBien cordialement,\n{{signature}}"
      },
      {
        "number": 5,
        "type": "Cold Call",
        "timing": "3 days after the last message",
        "subject": null,
        "content": "Call for cold#1\nDate sent: 3 days after the last message\nCall script:\nIf the prospect answers:\nIntro statement: C’est  [Client_Name] de [ClientCompanyName], je vous ai contacté par e-mail parce que vous êtes le {{jobtilte}} de la Ville de {{city}} et je vous ai écrit au sujet de la protection des vélos de vos {{audience}}. Est-ce que vous avez deux minutes pour discuter ensemble?\nPurpose statement: tbc\nCTA: C’est la raison pour laquelle j’aimerais vous rencontrer et vous présenter les résultats de nos clients. Est-ce que ça vous intéresse?\nContext: tbc\nExtra arguments depending on the role/industry of your prospect:\n\nFollow the following cold call script\nIf so, ask these questions to personalize the demo and qualify the prospect\ntbc\nIf not, ask why and overcome objections: (Courtesy - Problem - Action)\ntbc"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "0 days after last message",
        "subject": "Appel manqué - bornes pour vélos",
        "content": "Bonjour {{salutation}} {{lastName}},\n\nJe n'ai pas réussi à vous joindre par téléphone aujourd'hui.\n\nComme les autres {{ICP}} de Belgique, vous souhaitez fournir un espace attrayant, sûr et durable à vos {{Audience}}.\n\nVous le savez, les vols de vélos augmentent année après année. C'est un vrai problème qui crée du stress auprès des cyclistes et qui freine la pratique. \n\nCe n’est pas surprenant étant donné que n'importe quel cadenas peut être forcé en quelques secondes avec les bons outils.\n\nCependant, nous garantissons que nos stations protègent à 100% contre le vol. Les stations {{salesRep}} ont été pensées dans 2 uniques buts: être incassables et durables. \n\nSi la mobilité douce et le bien-être de vos {{Audience}} sont des sujets pertinents pour {{companyName}}, je serais ravi d’en discuter avec vous par téléphone.\n\nQu’en pensez-vous?\n\nCordialement,\n{{salesRep}}\n\nPS : Voici un petit café virtuel pour continuer votre journée :) !\n\n{{signature}}"
      },
      {
        "number": 7,
        "type": "Email",
        "timing": "7 days after the last message",
        "subject": "same as before",
        "content": "Bonjour {{salutation}} {{lastName}},\n\nComme vous êtes {{jobtitle}} {{companyname}}, vous avez certainement beaucoup de projets en cours et votre calendrier est très chargé.\n\nSi ça ne vous intéresse pas, faites-le moi savoir, je comprendrai.\n\nOu est-ce que c’est mieux de s’écrire en début d’année prochaine?\n\nBien cordialement,\n \n{{signature}}"
      }
    ]
  },
  {
    "id": 10,
    "industry": "IT Integration / Audiovisual",
    "language": "FR",
    "metrics": {
      "sent": 262,
      "replied": 182,
      "repliedPct": 69.0,
      "interested": 16,
      "interestedPct": 6.0
    },
    "icp": "Head of IT, CTO at engineering and architectural firms",
    "durationDays": 30,
    "numTouches": 9,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "No",
    "touches": [
      {
        "number": 1,
        "type": "Email",
        "timing": "First day of sequence",
        "subject": "projects audiovisual - {{firstName}} & {{salesRep}}",
        "content": "Hello {{firstName}},\n\n{{Icebreaker - example: post shared on LinkedIn - Your background is impressive; I visited your LinkedIn profile; As a [JobTitle], is the [subject] important to you?}}. \n\nMany {{engineering offices; architectural offices}} turned to us to find the best solutions to their clients' audiovisual problems, and I thought of {{CompanyName}}. \n\nOur company will fully accompany you in your projects, advise you with the latest innovations and technologies, and answer all your questions, such as:\n\nWhat about the elevation plan, technical diagrams, strong currents, networks, cable pulling, etc.?\nWhat solutions are used to implement hybrid work?\nHow to navigate {{client_ref}} etc., and their interoperability?\n\nOur clients also call on our experts for their dynamic display projects, room reservations, home automation, interactive visual installations, etc.\n\nIf AV integration is an essential topic for you and your customers, would you be interested in arranging a first contact?\n\nThank you for your time and your response.\n\nSincerely,\n{{salesRep}}\n\nPS: I hope this picture makes you laugh!\n\n{{signature}}"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "3 days after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nI hope you are doing well.\n\nI want to make a proposal and give you more context.\n\nWe would be happy to invite you to lunch to meet you. We are curious to learn more about {{CompanyName}}, your current and upcoming projects. \n\nSince 2001, more than 750 clients have called on our team of 40 employees, mainly based in Gland. Lately, hybrid working solutions have been a priority. Therefore, it would be a great idea to discuss this topic together.\n\nWould this invitation interest you? Or do you prefer a 10-15 minute phone interview?\n\nYou can plan the day of your choice directly in my manager's calendar. \n\nThank you in advance for your response.\n\nBest regards,\n{{salesRep}}\n\nPS: My to-do list pictured below reminded me to contact you 😉\n\n\n\n{{signature}}"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "6 days after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\nI hope you are doing well.\n\nI wondered if this is not the right time or if our services have not aroused interest in you. Is it because:\n\nDo you already have another AV partner in place?\nIt would be better to contact another of your colleagues - perhaps {{colleaguename}}?\nIs there another reason?\n\nThe invitation from my last message to have lunch together remains open.\n\nThank you in advance for your response.\n\nSincerely,\n{{salesRep}}\n{{signature}}"
      },
      {
        "number": 4,
        "type": "Cold Call",
        "timing": "5 days after the last message",
        "subject": null,
        "content": "Cold call #1\n\nDate sent: 5 days after the last message\nCall script:\nIf the prospect replies:\n\nHello {{firstName}}, this is {{salesRep}}  from [ClientCompanyName]. Are you doing well? … [“Yes, thank you and you?”]\nWell, thank you. I contacted you by email because I saw that you were in charge of the {{jobtitle}} at {{companyName}}. I thought I was going to give you a little call. Do you have 1 minute to discuss this together?\nIf yes:\nWe are an integrator of audiovisual systems and communication technologies: Video Conferencing solutions, dynamic display, home automation, and room reservation.\n\nYou know like me that [...]. [DiscoveryQuestion]? [Prospect's answer]\n\nThat's why I was wondering if you were interested in meeting my manager?\n—---—---—---—---—---—---—---—---—---—---—---—---—- -------—---—---—---—---—---—---—-----—---—---—---—- -------------------------\nIf they are interested, \nAsk these questions to qualify the prospect:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf they are qualified, ask these questions in order to customize the demo:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nCall-to-Action → Schedule a demo with our co-founder/leader of our company directly in their calendar.\nIf they are not interested, ask why and overcome objections by being courteous, reformulate the Problem, and object):\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf you get the voicemail:\nHello {{firstName}}, this is {{salesRep}} from [ClientCompanyName]. I hope you're doing well. I'm calling about our audiovisual services. I was wondering if you had 45 minutes to give you an introduction to how our [PaintPoint] help their clients? I'd be happy to give you more context. You can call me at this number, [PhoneNumber], or by e-mail at [email]. Have a nice day, and see you soon"
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "1 day after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nI tried to reach you by phone yesterday. Could I call you at another time? Otherwise, I will try to contact you again in a few days.\n\nI wanted to talk with you to learn about your current projects and see if some of our achievements are similar.\n\nI am sharing with you our short brochure. You will find several examples of achievements and more information to understand what types of projects we could explore together.\n\nHave a great day,\n{{salesRep}}\n\n{{signature}}"
      },
      {
        "number": 6,
        "type": "Cold Call",
        "timing": "2 days after the last touch",
        "subject": null,
        "content": "Cold call #2\nDate sent: 2 days after the last touch\nCall script: \n\n(Same as Touch #4)"
      },
      {
        "number": 7,
        "type": "Email",
        "timing": "1 day after last touch",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nI hope you are well.\n\nI tried to reach you by phone yesterday about your audiovisual projects (my mobile is [PhoneNumber]).\n\nCould I call you at another time? Otherwise, I will try to contact you again in a few days.\n\nThank you in advance for your reply.\n\nYours sincerely,\n{{salesRep}}\n\n{{signature}}"
      },
      {
        "number": 8,
        "type": "Email",
        "timing": "3 days after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n \nI hope you are doing well.\n \nIf there is a better time, or if you have no interest in discovering our services, please let me know.\t\n \nOr should I rather turn to another of your colleagues? Maybe {{colleaguename}}?\n \nI remain at your disposal if you have questions or want to discuss your projects.\n \nThank you in advance for your answer, and I wish you all the best for the future.\n \nSincerely,\n{{salesRep}}\n \n{{signature}}"
      },
      {
        "number": 9,
        "type": "LinkedIn",
        "timing": "1 day after the last message",
        "subject": null,
        "content": "Connection on LinkedIn\nDate sent: 1 day after the last message\nContent: from LinkedIn\nHello {{firstName}}, this is {{salesRep}}  from [ClientCompanyName]. I look forward to connecting and discovering the {{companyName}} projects and insights you share. See you soon."
      }
    ]
  },
  {
    "id": 11,
    "industry": "Merchandising / Textile Services",
    "language": "FR",
    "metrics": {
      "sent": 285,
      "replied": 200,
      "repliedPct": 70.0,
      "interested": 23,
      "interestedPct": 8.0
    },
    "icp": "universities/faculties, private/international schools, student committees/associations Launched date: Monday, September 26, 2022",
    "durationDays": 30,
    "numTouches": 7,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "activated",
    "touches": [
      {
        "number": 1,
        "type": "Email",
        "timing": "The first day of the sequence",
        "subject": "A] {{salutation}} {{lastName}} - our call",
        "content": "Hello {{salutation}} {{lastName}},\n\n{{icebreaker}} \n\nPromoting {{companyname}} and emphasizing belonging to your institution is certainly a current topic. Our partners, such as [ClientCustomer], but also high schools and international schools, turned to us with this goal. \n\nThey benefit from our merchandising services for textiles and objects personalized according to their brand image. Their students can get various items such as sweatshirts, t-shirts, notepads, and sports equipment for basketball, football, etc.\n\nNo need to deal with annoying and time-consuming tasks like collecting sizes, payments, or deliveries. Our partners particularly appreciate our platform that allows their customers to pre-order and be delivered directly to their homes or schools.\n\nMoreover, everything is produced with respect for people and the planet: 100% organic cotton, recycled materials, and certifications like Oeko-Tex or PETA-Approved Vegan.\n\nWould you like to talk about it together for 15 minutes during a first contact by phone {% assign today = \"now\" | date: \"%A\" %}{% case today %}{% when \"Monday\" %}tomorrow or Wednesday{% when \"Tuesday\" %}tomorrow or Thursday{% when \"Wednesday\" %}tomorrow or Friday{% when \"Thursday\" %}tomorrow or Monday{% when \"Friday\" %}Monday or Tuesday morning{% endcase %}?\n\nThank you in advance for your reply.\n\nBest regards,\nJanice\n\nPS: Here are some examples, and below is an illustration of a branded sweatshirt with [ClientCustomer] logo [ClientCustomer]\n\n{{signature}}"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "7 days after the last message",
        "subject": "same as before",
        "content": "Hello {{salutation}} {{lastName}},\n\nI hope you're doing well.\n\nAs the branding of {{companyname}} is important, I would like to make you an offer: the customized graphic development of your articles would be offered fully. \n\nLike our partners, you and your colleagues will be accompanied and advised by one of our experts. Everything is done to make your life easier. You will undoubtedly be surprised to discover our products' high quality, their measured ecological impact, and the latest technologies available: screen printing, embroidery, product specificity (vegan), etc.\n\nAlthough many institutions in the education sector use our services, other organizations such as the [ClientCustomer], the International Olympic Committee, and the Montreux Jazz Festival have also been turning to us for over 20 years.\n\nAre you interested in discussing this with us? If so, would you like to receive 2 or 3 proposals for a 45-minute video conference [Client_FirstName] (you can also choose a date directly from his calendar)?\n\nThank you in advance for your reply,\n\nBest regards,\n{{salesRep}}\n\nPS: Here is a little virtual coffee for you to continue your day 🙂 \n\n{{signature}}"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "6 days after the last message",
        "subject": "same as before",
        "content": "Email 3 - Contact another ElonMusk colleague/follow-up\nDate sent: 6 days after the last message\nSubject: same as before\nDate:\n\nHello {{salutation}} {{lastName}},\n\nI hope you are well. \n\nShould I write to your colleague {{colleaguename}}?\n\nOr is it that\nyou are already working with another supplier for your merchandising\nThe start of the school year is a busy period and not the best time\nanother reason, maybe?\n\nPlease note that the proposal in my last message remains open.\n\nThank you in advance for your reply,\n\nBest regards,\n{{salesRep}}\n\nPS: My to-do list pictured below reminded me to😉 I hope it makes\n\n\n\n\n!"
      },
      {
        "number": 4,
        "type": "Cold Call",
        "timing": "2 days after the last message",
        "subject": null,
        "content": "Cold call\nCarried out: 2 days after the last message\nCall script:\nIf the prospect responds:\nHello {{salutation}} {{lastName}}, this is {{salesRep}} from [ClientCompanyName]. I've contacted you by email regarding our merchandising services for your students, particularly to reinforce your institution's image. Do you have 2 minutes to spare?\nIf yes:\nSeveral educational organizations such as [ClientCustomer], and public schools work with us to offer their students clothing and objects personalized with their logos. Everything is done to simplify their life, and there is nothing to do on their side, from graphic development to ordering and payments, to delivery. Moreover, everything is produced with respect for people and the planet: 100% organic cotton with recycled and certified materials.\nIs this something you are already doing? [...]\nOkay, and would you be interested in discussing this with [Client_FirstName] during a video conference so he can tell you more and share 1 or 2 case studies from our partners?\n—---—---—---—---—---—---—---—---—---—---—---—---—- -------—---—---—---—---—---—---—-----—---—---—---—- -------------------------\nIf they are interested, \nAsk these questions to qualify the prospect:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf they are qualified, ask these questions in order to customize the demo:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nCall-to-Action → Schedule a demo with our co-founder/leader of our company directly in their calendar.\nIf they are not interested, ask why and overcome objections by being courteous, reformulate the Problem, and object):\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf you get the voicemail:\nHello {{Madam/Sir}} {{lastName}}, this is {{salesRep}} from [ClientCompanyName]. I hope you are well. I'm calling about the merchandising services our clients offer their students, particularly to enhance their institution's brand. I was wondering if you had 10 minutes to give me a call to give you some more information? You can call me back at this number, [PhoneNumber], or by e-mail at [email]. Good day and see you soon"
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "1 day after the last message",
        "subject": "same as before",
        "content": "Hello {{salutation}} {{lastName}},\n\nYou should have received a missed call from me yesterday. My mobile number is [PhoneNumber]. \n\nWould it be possible to call you back {% assign today = \"now\" | date: \"%A\" %}{% case today %}{% when \"Monday\" %}tomorrow or Wednesday{% when \"Tuesday\" %}tomorrow or Thursday{% when \"Wednesday\" %}tomorrow or Friday{% when \"Thursday\" %}tomorrow or Monday{% when \"Friday\" %}Monday or Tuesday morning{% when \"Saturday\" %}next week{% when \"Sunday\" %}next week{% endcase %}?\n\nThank you in advance for your reply,\n\nKind regards,\n{{salesRep}}\n \n{{signature}}"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "4 days after the last message",
        "subject": "same as before",
        "content": "Hello {{salutation}} {{lastName}},\n \nCould you please tell me if it is your colleague {{colleaguename}} that I should turn to?\n \nIf there is a better time, or if you have no interest in finding out how your Institution and your students could benefit from personalized clothing and other items, please let me know.\n \nI wish you all the best for the future.\n \nYours sincerely,\n{{salesRep}}\n \n{{signature}}"
      },
      {
        "number": 7,
        "type": "LinkedIn",
        "timing": "0 days after the last message",
        "subject": null,
        "content": "Connection on LinkedIn\nDate sent: 0 days after the last message\nSent from our client's LinkedIn account (the CEO)\nHello {{salutation}} {{lastName}}, this [Client_FirstName] from [ClientCompanyName]. My colleague {{salesRep}} has contacted you to discuss your textile and personalized items merchandising with {{companyName}} branding. I look forward to connecting with you. See you soon I hope"
      }
    ]
  },
  {
    "id": 12,
    "industry": "Corporate Catering Services",
    "language": "EN",
    "metrics": {
      "sent": 260,
      "replied": 90,
      "repliedPct": 35.0,
      "interested": 10,
      "interestedPct": 4.0
    },
    "icp": "Decision-maker whose function is related to HR for a company established in the cantons of Geneva and Vaud and which has between 9 and 249 employees",
    "durationDays": 19,
    "numTouches": 8,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "Yes",
    "touches": [
      {
        "number": 1,
        "type": "Email",
        "timing": "First day of sequence",
        "subject": "Our call - {{FirstName}} & {{salesRep}}",
        "content": "Hello {{firstName}},\n\nHere you can see my colleague {{salesRep2}} delivering our little homemade dishes to our customers.\n\n\n\nHow about taking advantage of our balanced, diversified preparations based on local products for your lunch break?\n\nI am writing to you because we are a Geneva company that offers a 2.0 canteen for companies. Is it you or your colleague {{colleaguename}} who I should contact?\nVia our website, your employees can easily order their lunch which will be delivered the same day at noon - all in recycled/recyclable packaging.\n\nAs an employer, this is interesting for you too. First, you invest directly in the well-being of your employees. Then, this service is financially affordable - much more so than a company restaurant, for example. Third, we could create a personalized menu based on your employees' wishes.\n\nWould you be interested in knowing more? I'd happily chat over the phone to give you more context. Thank you in advance for your answer,\n\nHave a great day, \n{{salesRep}}\n\n{{signature}}\n\n---\n\nHello {{firstName}},\n\nHere you can see my colleague {{salesRep2}}  delivering our little homemade dishes to our customers.\n\n\n\nHow about taking advantage of our balanced, diversified preparations based on local products for your lunch break?\n\nI am writing to you because we are a Geneva company which offers a catering service for companies. I was wondering if it's you or your colleague {{colleaguename}} who I should turn to?\n\nVia our website, your employees can easily order their lunch the same day and your company is delivered before noon - all in recycled/recyclable packaging.\n\nAs an employer, it is interesting for you too. First, you invest directly in the well-being of your employees. Then, our solution makes it possible to better manage the lunch break to prevent it from spilling over too much into the afternoon. Thirdly, this service is financially affordable - much more so than a company restaurant, for example.\n\nI was wondering if you would be interested in knowing more.\n\nI'd be happy to chat together over the phone to give you a little more context.\n\nThank you in advance for your answer.\n\nA very nice day, \n{{salesRep}}\n\nPS: Here is the menu of the week 😉\n \n{{signature}}"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "3 days after the previous touch",
        "subject": "same as before",
        "content": "Hello {{firstName}}.\n\nI imagine you might have a busy schedule - my photo to-do list below reminded me to write to you 😉\n\n\n\nI would like to know if we can help you improve your staff benefits.\n \nIf you are interested in knowing more about how we help our partners, are you available in the next few days for a call to give you more context? If yes, I invite you to schedule an appointment in my calendar.\n \nHave a great day,\n{{salesRep}}\n\n{{signature}}"
      },
      {
        "number": 3,
        "type": "LinkedIn",
        "timing": "4 days after the last message",
        "subject": "same as before",
        "content": "[Message sent from our client LinkedIn profile]\nHello {{firstName}}, I hope you are doing well. My colleague {{salesRep}} emailed you a few days ago regarding our corporate catering services. I look forward to connecting and following the news from {{companyName}}. Sincerely, [Client_FirstName]"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "3 days after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nI hope you are doing well.\n\nI take the liberty of writing to you following my email about [ClientCompanyName], the canteen 2.0 - I was wondering if you have already set up a similar service?\n\nI ask you this question because we offer our partners to contribute financially to establishing healthy, fresh, and gourmet meals. In addition, we relieve them of the organization of all logistics. Depending on the advantages you want to put in place, this is an avenue that we could explore together.\n\nIf so, I suggest that we discuss it over the phone anytime soon. I share my agenda in which you can directly book a slot that suits you.\n\nHave a great day,\n\nSincerely,\n{{salesRep}}\n\n{{signature}}"
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "3 days after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nI hope you are well.\n\nWere you available for a short phone call to discuss our services which offer elaborate meals for employees?\n\nIf it suits you, here is my agenda where you can directly book the time slot of your choice.\n\nThank you in advance for your response.\n\nBest regards,\n{{salesRep}}\n\n{{signature}}"
      },
      {
        "number": 6,
        "type": "Cold Call",
        "timing": "4 days after the last message",
        "subject": null,
        "content": "Cold call\nDate sent: 4 days after the last message\nCall script:\nIf the prospect replies:\nHello {{firstName}}, this is {{salesRep}} from [ClientCompanyName] . \nI contacted you by e-mail about our canteen services for your employees. Would you be interested in discussing how our services could benefit your business? [...]\n—---—---—---—---—---—---—---—---—---—---—---— -------------—---—---—---—---—---—---—-----—---—--- —---—- -------------------------\nIf yes:\nAs an employer, the well-being of your employees is a priority. Our company offers daily canteen services with fresh and healthy products that will be delivered to your office at lunchtime according to your orders. Moreover, like many companies, sustainability must be one of your concerns. Indeed, all our products are packaged in recycled and recyclable material. This initiative can be interesting for you because you invest directly in the well-being of your employees, the lunch break will be better supervised, and finally, you will be able to reduce your costs. \n\nIf they are interested, \nAsk these questions to qualify the prospect:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf they are qualified, ask these questions in order to customize the demo:\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nCall-to-Action → Schedule a demo with our co-founder/leader of our company directly in their calendar.\nIf they are not interested, ask why and overcome objections by being courteous, reformulate the Problem, and object):\n__________________________________________________________________________________.\n__________________________________________________________________________________.\n__________________________________________________________________________________.\nIf you get the voicemail:\nHello {{firstName}}, This is {{salesRep}} from [ClientCompanyName]. I hope you're doing well. I tried to contact you because I think you would be interested in knowing how our customers can improve the well-being of their employees through healthy, fresh, and seasonal lunches. Would you be interested in discussing it over the phone? You can call me back at this number, [PhoneNumber], or by email at [email]. I wish you a nice day."
      },
      {
        "number": 7,
        "type": "Email",
        "timing": "1 day after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\n\nI hope you are well. \n\nI have tried to contact you to discuss our offer which provides elaborate meals for employees. Would you be available at another time for a short phone call?\n\nThank you in advance for your response.\n\n{{salesRep}}\n\n{{signature}}"
      },
      {
        "number": 8,
        "type": "Email",
        "timing": "day after the last message",
        "subject": "same as before",
        "content": "Hello {{firstName}},\nAlthough I would have liked to receive your news, you certainly have a busy schedule. \nIf you have a little spare time and are interested in evaluating together how we could help you, then let me know :) \nThis email is my last attempt to get in touch with you, and I would be happy to hear from you.\nI wish you all the best for the future.\nHave a great day,\nSincerely,\n{{salesRep}}\n\n{{signature}}"
      }
    ]
  },
  {
    "id": 13,
    "industry": "DevOps / Cloud Development",
    "language": "EN",
    "metrics": {
      "sent": 369,
      "replied": 57,
      "repliedPct": 15.0,
      "interested": 6,
      "interestedPct": 2.0
    },
    "icp": "DevOps engineering, Development engineering, Software engineering",
    "durationDays": 40,
    "numTouches": 7,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "Icebreaker vs. My research shows that you, {{colleaguename1}}",
    "touches": [
      {
        "number": 1,
        "type": "LinkedIn",
        "timing": "The first day of the sequence",
        "subject": null,
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}}, {{linkedinnote}}.\n\nLinkedin Note starts with:\n“Your LinkedIn post about…  \nYour LinkedIn profile shows that…\nYour interview OR article OR blog post…\nMy colleague Charles told me about…\n… Pleased to connect with you. [Client_Name]”\nIf the LinkedIn connection is accepted, the following message is sent 7 days later:\nHey {{firstName}}, my colleague {{salesRep}}  emailed you.\nAre self-hosted [ProductName] something you look after and that could be interesting for {{companyName}}?\n[ClientCustomer]  and several Fortune 500 companies work with our solution, as do companies like {{company name}}.\nThey speed up the onboarding of their in/near/offshore software development teams. And they're turning to our solution because it's the first CDE platform to offer both productivity and data security.\nIf the LinkedIn connection is accepted, the following message is sent 21 days later:\nHey {{firstName}}, is it better to contact {{colleaguename1}} or {{colleaguename2}} to discuss developer experience, productivity, laptop management and compliance costs, etc.?"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "The first day of the sequence",
        "subject": "our call {{firstName}}",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Good morning{% else %}Good afternoon{% endif %} {{firstName}},\nA] {{icebreaker}}.\nMy research shows that you lead [ProductName].\nB] My research shows that you, {{colleaguename1}} and {{colleaguename2}} lead [ProductName].\nOur clients, companies like [ClientCustomer], trust our solution to improve the coding productivity and experience of their developers. Both internal/external teams work on self-hosted cloud development environments (CDEs).\nUnlike DaaS or VDIs, CDEs are pre-configured dev linux environments with all tools, libraries, dependencies and security features.\n[ClientCompanyName]’s CDEs are the first secure, standardized and ready-to-code development environments. Among others:\nDevelopers' onboarding time has been cut from days to minutes\nLaptop management and compliance costs have been cut by 50%\nEntire development environment is now secure\nDoes getting a bit more context on a call resonate with you, or am I off-topic?\n\nPS - Version A{{firstName}}, does it sound familiar?\n\n  {{signature}}"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "7 days after the last message",
        "subject": "same as before",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Good morning{% else %}Good afternoon{% endif %} {{firstName}},\nWhat do you think of my last suggestion, which is to see how our customers reconcile developer productivity with security?\nThe idea is to meet for a first discussion (with no obligation).\nAlso, the {year} special offer lets [ProductName] see for themselves in their own environment that there's no need to compromise efficiency in the name of safety. \nThis 45-day pilot helps:\nDevOps to guarantee their developers’ productivity and comfort\nCISOs to de-risk software development ({{colleaguename3}}?)\nCIOs to cut costs while ensuring compliance ({{colleaguename4}}?)\nPS: One of the benefits our customers appreciate most is the real-time insights. They get on all aspects of their [ProductName], as in the dashboard I created for {{companyname}} below:\n\n\n\n{{signature}}"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "5 days after the last message",
        "subject": "Chat with {{colleaguename1}} or {{colleaguename2}}",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\nIs it better to contact your colleague {{colleaguename1}} or {{colleaguename2}} discuss DevOps infrastructure, code development efficiency, and data assets security?\nOr maybe someone else?\nI understand you're busy, so it would be a shame not to see if there's room for improvement at {{companyName}} using cloud development environments.\nThank you\n\nPS: My to-do list pictured below reminded me to write to you 😉\n\n{{signature}}"
      },
      {
        "number": 5,
        "type": "Cold Call",
        "timing": "3 days after the last message",
        "subject": null,
        "content": "Call for cold#1\nDate sent: 3 days after the last message\nIf the prospect answers:\n“John Doe speaking”\n \nHello John, this is {{salesRep}} from {clientCompanyName}. How are you?\n \n“I’m good”\n\nI contacted you by email regarding \n\n(If the market would be a bit more mature)\nonline containers for code development activities to guarantee developers’ productivity and comfort\nself-hosted pre-configured dev Linux environments\n\nWe improve the efficient, security and governance of your entire application development process while reducing the cost of managing it.\n\nWhich are recognized in this year’s {clientRecognition} report.\n\nDo you have a minute to discuss together?\n                                \n“Yes”\n“I don’t have time right now, I’m about to enter a meeting”\nSee below\n\n\n↘\nOh okay, could I call you back maybe tomorrow morning at like 10 am?\n\n“Yes sounds good”\n\nOkay, thank you. You’ll receive an invite. Have a great meeting and talk to you tomorrow. [END]\nTo give you a bit of context, \n(If not said before: tbc\n\nAre you interested? \n\n“Yes”\nSee below\n↘\n“No, I’m not the right person” \n\n\ntbc\n           ↙                                                      ↓                                       \n“Yes”\nSee below\n↘\ntbc\n\nWould it make sense to organize a first meeting altogether to discuss and exchange best practices, without engagement, of course? [Get contact details]\n\nAnd at the moment, what are the projects you overview to help your colleagues in their work?\nInteresting, could we present to you how our team supports our customers in this regard so maybe it gives you new ideas? \n\n\nIn other words, online coding = recognised in this year’s {clientRecognition} report.\n\nPurpose Statement\n{clientCompanyName} is the first company with a secure and standardized CDE, aka Cloud development environment, which are [ProductName] environments that provide ready-to-code development environments. \nWe currently work with companies like [ClientCustomer], who trust our solution to improve the coding productivity and experience of their developers.\nInfo from previous Touchpoints\nWhat if your\nDevelopers' onboarding time could be cut from days to minutes\nLaptop management and compliance costs could be cut by 50%\nEntire development environment is now secure\nBoth internal/external teams can work on self-hosted cloud development environments (CDEs).\nUnlike DaaS or VDIs, CDEs are pre-configured dev Linux environments with all tools, libraries, dependencies, and security features.\nimprove your developers’ experience with a 1-minute set-up that includes ready-to-use Linux dev environments that work within any browser\nCustomers appreciate the real-time insights in their personalized dashboard.\nFor example our 2024 special, 45-day pilot helps:\nDevOps to guarantee their developers’ productivity and comfort\nCISOs to de-risk software development \nCIOs to cut costs while ensuring compliance\nSome extra knowledge depending on the lead\nDevOp: is the combination of practices and tools designed to increase an organization's ability to deliver applications and services faster than traditional software development processes.\nCISO: chief information security officer, is a senior-level executive who oversees an organization's information, cyber, and technology security. The CISO's responsibilities include developing, implementing, and enforcing security policies to protect critical data. CISO Connections. Security Success Academy.\nCIO: The chief information officer (CIO) oversees the people, processes and technologies within a company's IT organization to ensure they deliver outcomes that support the goals of the business.\nIf yes, discovery call + book the meeting\nHow many developers?\nHow in-house, or have you decided to outsource?\ninshore, nearshore, offshore?\nDo developers develop on their secure machines, VDIs (only Linux), or a mix?\nAre your development shipments mainly native to Linux and Windows ( we are Linux)\nHow do you configure your dev environments now? Manually with docs? Optimization? \nHow long does it take to onboard a dev for a project (receive machine, access, configuration)?\nWhat do you want to improve (cost, productivity, security, maintenance, experience)?\nI have the calendar of our {clientRole} {clientName} in front of me, should we find it now together?\n\nLaurent’s advice: \n{clientCompanyName} delivers a self-hosted platform that allows organizations to manage the first secure Cloud Development Environments (CDEs). They use secure CDEs to provide access to their developers to ready-to-code linux development environments with native data security.  \nCDEs are spurring the fastest DevOps transformation trend today with the entire cloud-native development effort moving to this technology. They also recently became a new Gartner technology category where {clientCompanyName} is r\n\n\nIf not, ask why and overcome objections: (Courtesy - Problem - Action)\n\nHow much does it cost?\nIt depends on several factors, such as X\nWhy is {clientCompanyName} different?\nCost Reduction:\nOur customers achieve cost savings of 30-50% by moving to cloud development environments compared to traditional high-performance Laptop and/or VDI infrastructure\nProductivity Gain:\nOur customers using CDEs experience up to 20% faster development cycles due to streamlined processes and efficient collaboration.\nMaintenance Effort:\nOur customers reduce maintenance efforts by up to 80% due to our standardized template development environments and centralized maintenance.\nTime to Onboard developers:\nOur customers reduce onboarding time from days to minutes due to our standardized template development environments and centralized maintenance.\n4X Faster Build \n\nCurrent clients:\n[ClientCustomer]\n\n{clientCompanyName} is a Swiss startup based in Lausanne.\nWe address critical challenges faced by software development teams in managing onshore, nearshore, and offshore teams. These challenges include issues related to productivity, collaboration, high infrastructure costs, and the security of development environments.\nWe are developing a secure, self-hosted \"Cloud Development Environment (CDE)\" platform that enables companies to manage and access secure Linux development environments online (on private or on-site cloud).\nThe primary benefits include\nAccelerating application delivery\nDecreasing infrastructure costs and management inefficiencies (by 30-50%)\nEnhancing the security and compliance of Dev environments, and protecting source code, data, and credentials against any potential leaks within the development environment."
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "0 day after the previous touch",
        "subject": "Our phone call",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\n\nI tried to call you today [PhoneNumber].\n\nYou're probably familiar with GitHub Codespaces, so you might be interested to find out how [ClientCompanyName] is the most secure self-hosted alternative for managing development environments.\n\nAre you interested in a virtual café with a bit more context?\n\n\n\n{{signature}}"
      },
      {
        "number": 7,
        "type": "Email",
        "timing": "4 days after the last message",
        "subject": "same as before",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Good morning{% else %}Good afternoon{% endif %} {{firstName}},\n\nWould it make sense to contact {{colleaguename3}} or {{colleaguename4}} since our cloud development environment is the first solution focused on infrastructure security?\n\nOur {clientRole} {clientName} and myself tried to contact you several times.\nWe thought you might be interested in finding out how our customers:\nimprove their developers’ experience (they need 1 minute to onboard them now) with ready-to-use Linux dev environments that work within any browser\ncontrol data exfiltration risk and resource access\nsave 30-50% by switching to CDE\n\nIf you're not interested, please let me know, it's understandable.\n\nOr should I contact you early next year?\n\nBest,\u000b{{signature}}"
      }
    ]
  },
  {
    "id": 14,
    "industry": "Market Intelligence / Biofuels",
    "language": "EN",
    "metrics": {
      "sent": 289,
      "replied": 96,
      "repliedPct": 33.0,
      "interested": 30,
      "interestedPct": 10.0
    },
    "icp": "Biofuels trader, analyst, head of Global Trade Management, Finance Director, CFO, Sustainable Fuels and Carbon Manager, Trading and Risk Management Coordinator, Head of Sales, Commercial Director",
    "durationDays": 30,
    "numTouches": 7,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "No",
    "touches": [
      {
        "number": 1,
        "type": "Email",
        "timing": "The first day of the sequence",
        "subject": "our call {{firstName}}",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Good morning{% else %}Good afternoon{% endif %} {{firstName}},\n\n{{Icebreaker}}\n\nMy research showed that you manage biofuel-related projects at {{companyName}}.\n\nKeeping up with the renewable fuels market is increasingly challenging, especially regarding regulatory frameworks and demand forecasts for a widening range of feedstocks and technologies.\n\nHundreds of organizations trust our expertise and knowledge of biofuels globally. Their team members access daily insights through our Renewable Fuels Intelligence Platform.\n\n“Your report is the Bible” said the biodiesel big boss of a company of the S&P 500. No one offers such an accurate analysis.\n\nIt’d be great to give you a bit more context by phone and explain how {{companyName}} could also benefit from this.\n\nDoes it resonate with you, or am I off-topic?\n\nBest wishes,\n{{salesRep}}\n\nPS: Have a look at our website https://companyurl/{{firstName}}{{lastName}}\n\n\n\n{{signature}}"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "7 days after the last message",
        "subject": "same as before",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\n\nHere is a proposition for you and a bit more context: test our platform for 10 days.\n\nDiscover by yourself why our 100+ clients cannot live without our analysis to follow the renewable fuels market and make their own decisions. \n\nThey save hundreds of hours monitoring the blending mandates levels and build forecasts for [ProductName].\n\nSome even realized they didn’t need to hire an in-house analyst because they got all the necessary information.\n\nAre you interested?\n\nBest\n{{salesRep}}\n\n{{signature}}"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "5 days after the last message",
        "subject": "same as before",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Good morning{% else %}Good afternoon{% endif %} {{firstName}},\nIs it better to contact your colleague {{colleaguename1}} or {{colleaguename2}} to discuss insights related to biofuel? Or maybe someone else?\nThank you for your reply,\n{{salesRep}}\n\nPS: My photo to-do list below reminded me to write to you 😉\n\n\n\n{{signature}}"
      },
      {
        "number": 4,
        "type": "Cold Call",
        "timing": "3 days after the last message",
        "subject": null,
        "content": "Call for cold#1\nDate sent: 3 days after the last message\nCall script:\nIf the prospect answers:\n\nFollow the following cold call script\nIf so, ask these questions to personalize the demo and qualify the prospect + plan the demo\nDo you have a specific challenge that we can help you with? \nHow many people in the team are involved? \nWould you like to invite your colleagues that also trade biofuels?\nIf not, ask why and overcome objections: (Courtesy - Problem - Action)\n_____\n_____\n_____"
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "1 day after the last message",
        "subject": "same as before",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\n\nDid you receive my call yesterday? Is there a better time to call you? Perhaps on {% assign today = \"now\" | date: \"%A\" %}{% case today %}{% when \"Monday\" %}tomorrow or Wednesday{% when \"Tuesday\" %}tomorrow or on Thursday{% when \"Wednesday\" %}tomorrow or on Friday{% when \"Thursday\" %}tomorrow or on Monday{% when \"Friday\" %}Monday or Tuesday morning{% when \"Saturday\" %}next week{% when \"Sunday\" %}next week{% endcase %}?\n\nBest,\u000b{{salesRep}}\n\nPS: Here is a little virtual cafe to continue your day :)!\n\n\n\n{{signature}}"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "4 days after the last message",
        "subject": "Missed call {{firstName}}",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Good morning{% else %}Good afternoon{% endif %} {{firstName}},\n\nHope you’re well.\n\nI tried to contact you at various times, so I understand if you are not interested in our renewable fuels intelligence platform.\n\nAs you’re the {{jobtitle}}, what specific information would you need now and can't find? Let me show you that you can make better decisions with our insights.\n\n{{salesRep}}"
      },
      {
        "number": 7,
        "type": "LinkedIn",
        "timing": "1 day after the last message",
        "subject": null,
        "content": "Connection on LinkedIn\nDate sent: 1 day after the last message\nSender: [Client_FirstName]\nContent: from LinkedIn\n{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}}, [Client_FirstName] from [ClientCompanyName]. I am happy to connect and share information about biofuels and best practices, maybe it's valuable for you and {{companyName}}?"
      }
    ]
  },
  {
    "id": 17,
    "industry": "Property Management / Real Estate Software",
    "language": "FR",
    "metrics": {
      "sent": 257,
      "replied": 217,
      "repliedPct": 84.0,
      "interested": 17,
      "interestedPct": 7.0
    },
    "icp": "Directors of property management firms in French-speaking Switzerland offering rental property management",
    "durationDays": 40,
    "numTouches": 8,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": null,
    "touches": [
      {
        "number": 1,
        "type": "Cold Call",
        "timing": "Same day as the previous follow-up",
        "subject": null,
        "content": "Successfully getting past the switchboard\nYour objective is to be transferred to your prospect: there’s no point in presenting your solution to the wrong person. Be assertive and get straight to the point, as if you know very well the person you’re trying to reach. Here’s an example:\n\n\"Bonjour, c'est la société X\"\n\n“Bonjour, c'est {{salesRep}} de chez [ClientCompanyName], pourais-je parler à {{FirstName}}”\n\n\"De quoi s'agit-il ?\" \n\n“C'est à propos d'un logiciel de gestion immobilière”\n\n“Est-ce qu'il/elle vous connaît?”​​\n\n“Je l'espère\" OU “Nous sommes en contact par email\n\n\n↙                                   ↓                                             ↓                                              ↘\n\n\nIntroduce the reason for our call to the prospect\n\"John Doe\"\n \nBonjour Monsieur, c’est {{salesRep}}, représentant commercial de chez [ClientCompanyName]. Auriez-vous une minute pour discuter ensemble ?\n     ↙                                       ↓                                       \n\n(Si déjà contacté )\nMon collègue {{salesRep}} vous a contacté début {{year}} concernant  votre logiciel de gestion immobilière. \nEt je me suis dit qu’il serait intéressant de rerentrer en contacte car  les choses ont pas mal évolué depuis.\n\nPuis-je vous demander comment vous êtes organisé aujourd’hui pour gérer ces opérations ?\n\n(Si pas contacté )\nJe vous appelle car vous êtes le {{jobtitle}} chez {{companyName}}, j’aurais aimé savoir si vous utilisiez un logiciel de gestion immobillière? Si oui, Lequel?\n\n[Prendre des notes]\n\nJe vous ai contacté concernant [ProductName], notre logiciel spécialement dédié aux régies qui font de la gestion locative. Et les clients semblent apprécier notre outil. Pour vous donner quelques chiffres,  nous avions  un peu plus de 300 clients, ce qui représentait près  500 k objets. Aujourd’hui, ce sont 400 régies pour un peu moins d’1 million d’objets qui se sont tournés vers notre ERP pour leur gestion administrative, financière, technique et  juridique.\n\nQUORUM:\nFunctional issues with the accounting modules\nLack of meaningful software improvements over time\n\nIMMOB 8:\nMuch less comprehensive than our solution\nThe software is several years old and the dashboards/graphs are outdated\nLimited to 50,000 properties for a maximum of 100 users\nThe Small Business version is restricted to a single user\nMigration from IMMOB 8 to IMMOB 10 fails in 2 out of 3 cases\n\n     \n\nArgument/Fonctionalités: Signature numérique, états des lieux sur iPad, interfaçage aux applications tierces (PropTech), voilà certains des sujets qui intéressent nos clients dernièrement.\n\n\nC'est la raison pour laquelle notre {clientname} serait heureux de vous rencontrer lors d’une première prise de contact pour explorer vos besoins et voir comment vous et votre équipe pourriez en profiter. Est-ce que ça vous intéresserait?\n↙ ↘\n\nCommon topics discussed during discovery calls:\nMobile-friendly property inspections (e.g. using a tablet on-site)\nSeamless synchronization between field work and the core system\nNative, fully integrated inspection and lease management features\nDigital lease signing and paperless workflows\nFlexible integrations with third-party PropTech tools\nAbility to manage multiple owners and partners within the same system\nScalable solution adapted to growing property portfolios\nStrong focus on security through a direct editor–integrator model\nPriority access to new features and roadmap visibility\nPossibility to request custom developments\nChange management support available for onboarding large teams\n\nOvercoming objections\nWhat is the solution used for?\n It is an ERP (Enterprise Resource Planning) system — in other words, a property management platform designed to create operational efficiencies and economies of scale.\n The goal is to save time, automate repetitive and time-consuming tasks, and simplify day-to-day operations.\nMore broadly, the solution helps:\nReduce paper archives\nSimplify internal processes\nCentralize and visualize data\n\nIt provides a complete end-to-end view, from property and tenant data to contracts, invoicing, and rent adjustments.\n Thanks to integrated technical management, users maintain a clear overview of equipment, service contracts, and insurance policies.\n The platform also offers strong interoperability with third-party solutions.\n\nWhat type of property management company is it for?\n Clients appreciate the solution because it is modular and can be adapted on a case-by-case basis. It is designed to cover all core needs of a property management company, including:\nRental management (tenant database, occupancy status, handovers, inspections)\nCondominium management (annual statements, budget allocation, meeting minutes)\nProperty asset management (building database, caretaker payroll, maintenance tracking)\nInternal organization management (accounting, time tracking, payroll, invoicing)\n\nDo you already use a similar solution?\nIf yes, would you be interested in comparing it with an alternative solution?\nIf not, would you be interested in discovering how such a tool could simplify your daily work?\n\nMigration concerns (large portfolios):\n Migration projects are handled either internally by the provider or with the support of specialized migration partners experienced in managing large property portfolios, ensuring a smooth and secure transition.\n\nData migration is handled on a case-by-case basis, mainly due to confidentiality and data structure differences.\n\nIf you are already using another ERP or property management tool:\n\nMay I ask which one, so I can briefly explain why our clients perceive our solution as different?\nBased on user feedback, many legacy or specialized tools face similar challenges:\nFunctional limitations in accounting modules\nLimited long-term product evolution\nHigh development or customization costs\nRestricted scalability (number of properties or users)\nSome tools are designed for very specific use cases (small portfolios, single users, or regional constraints), while others focus more on operational tasks rather than offering a full ERP approach.\nOur solution differentiates itself by:\nProviding a fully integrated ERP architecture\nOffering scalable data migration strategies\nSupporting both small and large property portfolios\nEnsuring strong interoperability with complementary platforms through APIs\nMigration projects are handled either internally or with specialized partners to ensure a secure and structured transition, especially for larger portfolios.\n\nDiscovery call\nEtes-vous une gérance immobilière qui a des objets en gestion locative, de la propriété par étages ou de coopératives de logement?\n\nX\nPour chaque catégorie, combien d’objets de sous gestion? Si le nombre d’objets est de moins de 250, est-ce qu’un investissement de 25k est envisageable?\n\nGestion locative: X\nPPE/copropriétés(PP): X\nCoopératives: X\n\n\nCombien de collaborateurs comptez-vous à la régie et combien d’utilisateurs devraient avoir accès à votre ERP?\n\nCollaborateurs:  Réponse\nUtilisateurs: Réponse\n\nQuels sont les 3 plus grands défis auxquels vous faites face dans ce domaine?\n\nX\n\nÊtes-vous familier avec des solutions similaires? Si oui, quel logiciel utilisez-vous? Si non, dans quelle mesure un budget est-il alloué pour le déploiement d’un ERP?\n\nX\n\nEst-ce que vous avez un projet de changement et si oui, à quel horizon?\n\nX\n\nJ'ai sous les yeux l'agenda de notre Directeur, pourrait-on trouver un moment maintenant? Ou préférez-vous recevoir quelques propositions de rendez-vous par email?\n→ Y a-t-il d'autres collègues que nous devrions inviter à cette rencontre qui participent aussi au processus de prise de décision?\n\nX\n\nPourrais-je confirmer votre adresse e-mail?\n\nX\n\n→ Envoyer email de confirmation à {salesRep} avec le résumé des informations"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "After the call",
        "subject": "Our call / rental property management",
        "content": "Bonjour {{salutation}} {{lastName}},\nJ’ai essayé de vous joindre au [PhoneNumber] car {{icebreaker}}\nJ’ai fait quelques recherches et je me demandais si vous et {{colleaguename1}} êtes responsables de votre logiciel de gestion immobilière chez {{companyName}}?\nDepuis un année{{C1_Addon}}, nous sommes  passés de 300 à 400 régies: elles se sont tournées vers notre solution[ClientCompanyName] pour gérer et centraliser au même endroit toute leur gestion administrative, financière, technique et juridique.\nSignature numérique, états des lieux sur iPad, interface avec les applications tierces (PropTech), voilà les sujets qui intéressent le plus nos clients dernièrement.\nVoudriez-vous recevoir un peu plus de détails lors d'un bref appel d'introduction ?\nCordialement\n\n{signature}"
      },
      {
        "number": 3,
        "type": "LinkedIn",
        "timing": "June 4, 2024",
        "subject": null,
        "content": "Bonjour {{salutation}} {{lastName}}, {{linkedinnote}}\nExemple: la note Linkedin commence par\nVotre post LinkedIn sur... \nVotre profil LinkedIn indique que...\nVotre interview OU article OU billet de blog...\nMon collègue {salesRep}  m'a parlé de...\n... C'est un plaisir de connecter avec vous\".\n\n---\n\n→ Note audio (envoyée 6 jours après l'acceptation de la connexion LinkedIn) :\nMerci d'avoir accepté ma demande. Mon collègue {salesRep} vous a envoyé un email concernant votre gestion locative. 400 régies utilisent notre solution AbaImmo pour gérer leurs 960’000 objets, et je me demandais si vous voulez en découvrir un peu plus lors d’une première rencontre d’introduction ensemble?\n\n---\n\nmessage envoyé 7 jours plus tard\nVersion A→ avec les noms des collègues:\nBonjour {{salutation}} {{lastName}}, est-il préférable de contacter vos collègues {{colleaguename1}} ou {{colleaguename2}} pour discuter de votre logiciel de gestion immobilière?\nVersion B→ sans les noms des collègues:\nBonjour {{salutation}} {{lastName}}, Y a-t-il quelqu'un d'autre que je puisse contacter pour discuter de votre logiciel de gestion immobilière ?\n\n---\n\n→ Message de fin (envoyé 5 jours plus tard):\nBonjour {{salutation}} {{lastName}}, je comprends que votre agenda du temps est chargé. N'hésitez pas à nous contacter si vous souhaitez savoir comment nos clients s’organisent avec notre solution. Cordialement\n→ Envoyé manuellement si le prospect répond par un message non concluant qui interrompt la séquence\ntbc\n→ Envoyé manuellement si le prospect répond qu'il est la bonne personne à contacter\ntbc\n→ Envoyé manuellement si le prospect répond qu'il n'est pas intéressé\ntbc\n→ Envoyé manuellement si le prospect a discuté/transmis le message à un collègue\ntbc"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "5 days after the previous follow-up",
        "subject": "Same subject as the previous follow-up",
        "content": "Bonjour {{salutation}} {{lastName}},\nQue pensez-vous de ma proposition, de voir comment d’autres régies en Suisse romande organisent leur gestion locative, notamment [ProductName]?\nNos clients ont souligné à plusieurs reprises leur satisfaction à travailler avec une solution robuste et des personnes expérimentées.\nPour le prouver, nous vous invitons à une première discussion avec [Client_Name] (Directeur [clientCompanyName]) pour discuter de vos besoins. Si une analyse plus détaillée est nécessaire, nous offrons 2h de consulting.\nEst-ce que ça vous intéresse?\nCordialement"
      },
      {
        "number": 5,
        "type": "Cold Call",
        "timing": "5 days after previous following up",
        "subject": null,
        "content": "Call#2\nDate Sent: 5 days after previous following up"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "6 days after the previous follow-up",
        "subject": "Same subject as the previous follow-up",
        "content": "Bonjour {{gender}} {{lastName}},\nEst-il préférable de contacter votre collègue {{colleaguename2}} pour les questions liées à votre gestion locative?\nMerci d’avance pour votre aide,\nBonne journée"
      },
      {
        "number": 7,
        "type": "Cold Call",
        "timing": "5 days after the previous following up",
        "subject": null,
        "content": "Appel#3\nDate sent: 5 days after the previous following up"
      },
      {
        "number": 8,
        "type": "Email",
        "timing": "Object: the same object with the previous follow-up",
        "subject": null,
        "content": "Bonjour {{salutation}} {{lastName}},\n\nMon collègue {{salesRep}} et moi-même avons essayé de vous contacter.\n\nNous avons pensé que vous intéresserait de découvrir comment clients ont résolu les problèmes suivants\ngestion des honoraires\nversement des disponibles\nles portails (locataires, propriétaires, collaborateurs)\n\nUn bref appel d'introduction est-il hors de question? Faites-le moi savoir, je comprendrais parfaitement.\n\nJe vous prie d'agréer, {{salutation}} {{lastName}}, l'expression de mes salutations distinguées.\n\n\n\"Ok, je vous transfère\"\n“Je suis désolé mais il n'est pas disponible pour le moment. Puis-je prendre un message?\"\n\"Je suis désolé mais je n'ai pas le droit de vous transférer\"\n“Je ne trouve pas cette personne dans notre répertoire”\n[Aller à la page suivante]\n“Je rappellerai plus tard, pouvez-vous me donner sa ligne directe?”\n\n\"Non, je suis désolé, \nnous ne sommes pas autorisés.\" \n\n“D'accord, je vais lui envoyer un petit e-mail.  Pouvez-vous simplement confirmer son adresse e-mail, est-ce {{email}}?”\n↘\n“D'accord, je vais lui envoyer un petit mail”\n\n[Facultatif]\n\n“Pourriez-vous simplement confirmer son adresse e-mail, {{email}}? Merci”\n ↓\nVérifiez que vous appelez la bonne entreprise + le bon bureau/office \n\n\"Est-ce que j'appelle bien {{companyName}} à Zurich?”\n\nVérifiez le profil LinkedIn du prospect pour voir s'il y travaille toujours.\n↙\n[Aller à la page suivante]\n[Fin de l'appel : mettre à jour HubSpot et Lemlist]\n[Fin de l'appel : mettre à jour HubSpot et Lemlist]\n[Fin de l'appel : mettre à jour HubSpot et Lemlist]\n\"D'accord\"\n\"Je n'ai pas le temps, je suis sur le point d'entrer en réunion\"\n\n\n\nVoir ci-dessous\n\n\n\n\n\n↘\nD'accord, pourrais-je vous rappeler peut-être demain matin vers 10h?\n\n\"Oui\"\n\nD'accord, merci. Puis-je vous demander votre ligne directe?\n\n“+41 XX XXX XX”\n\nVous recevrez une invitation par e-mail. Bonne réunion et à demain\n\n[Fin de l'appel : mettre à jour HubSpot et Lemlist]\n« Oui »\n« Non parce que… »\nSuper, pourrais-je vous poser quelques questions afin que [Client_Name] puisse préparer cette rencontre?\n\n\n\n[Aller à la section Effectuer l’appel de découverte]\nSurmontez les objections en suivant ces étapes:\nSoyez courtois\nReformulez l'objection\nSurmontez l’objection avec une solution\n\nD’accord Monsieur/Madame, donc en d'autres termes, vous dites que ____________. À ce sujet, vous devez savoir que_______.\n\nSi vous ne pouvez pas répondre à leur objection, dites:\nC'est pendant la présentation que mon responsable \n[Client_Name] y répond généralement.\n\nDans tous les cas: demander s’il/elle souhaite recevoir la brochure par e-mail:\nD’accord, est-ce que vous souhaitez peut-être simplement recevoir notre petite brochure de 2 pages par e-mail?\n\n[Essayez d'obtenir leur \"Oui\" pour une démo] Appel"
      }
    ]
  },
  {
    "id": 18,
    "industry": "IT Security / SOC-as-a-Service",
    "language": "EN",
    "metrics": {
      "sent": 950,
      "replied": 247,
      "repliedPct": 26.0,
      "interested": 12,
      "interestedPct": 1.2
    },
    "icp": "CISO, Security Manager, Head of IT, CIO, IT Manager, Team Leader/Head of IT Operations, CEO, Director, General manager leading IT security in companies with between 80 to 3,000 employees in the German-speaking part of Switzerland",
    "durationDays": 40,
    "numTouches": 6,
    "channels": [
      "LinkedIn",
      "Email"
    ],
    "abTesting": "yes",
    "touches": [
      {
        "number": 1,
        "type": "LinkedIn",
        "timing": "The first day of the sequence",
        "subject": null,
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Hello{% else %}Dear{% endif %} {{firstName}},\n\nThe LinkedIn note starts with the following:\n\n“My colleague {salesRep} told me about…”\n“Congrats for…”\n“Your LinkedIn post about…”\n“Your interview/article/blog post…”\nAnd it finishes with “Pleased to connect with you.”\n\n---\n\n→ Audio note (sent 3 days after the LinkedIn connection is accepted):\nMy colleague {{salesRep}} emailed you. We wondered if you wanted to know why our customers say our cloud-native SOC-as-a-service solution was a no-brainer?\n→ Text message (sent directly after the audio note):\nIn a nutshell: onboarding within days without on-site installations, cost-efficient, 3-month trial period, termination possible within one week\n\n---\n\n→ Message with colleague names (sent 10 days later):\n{{firstName}}, is it better to contact your colleagues {{colleaguename1}} or {{colleaguename2}} to discuss IT security at {{companyName}}?\n\n---\n\n→ Breakup message (sent 10 days later):\n{{firstName}}, our customers selected our SOC-as-a-service solution among dozens of products available in Switzerland to reduce cybersecurity risks. Don't hesitate to reach out to learn why, when the timing is better. Best wishes\n\nOther templates for LinkedIn replies\n→ Sent manually if the prospect responds with an inconclusive message that stops the sequence\nHi {{firstNasme}},  my colleague {{salesRep}}  emailed you at [email]. We wondered if you were interested in learning why our customers selected our SOC-as-a-service solution to reduce cybersecurity risks.\n→ Sent manually if the prospect responds, they’re the right person to contact\n{{firstName}},  as you’re responsible for {{use the message from the lead}}, it would be great to discuss how our customers protect their organization from cyber threats with a Security Operations Center. Do you have 15 to 20 minutes for a video call?\n→ Sent manually if the prospect responds they’re NOT the right person to contact/left company\n{{firstName}}, thank you for getting back to me, noted.\nDo you know who is responsible for IT Security at {{companyName}}?\n→ Sent manually if the prospect responds they’re NOT interested\n{{firstNasme}}, thank you for your reply. My colleague {{salesRep}} emailed you at [email] to explain why our customers selected our SOC-as-a-service solution to reduce cybersecurity risks. We stay at your disposal if you’re curious to get a bit more context.\n→ Sent manually if the prospect discussed/forwarded the message  to a colleague\n{{firstName}}, thank you for your reply and for passing the information on to your colleague X.\nLooking forward to hearing from {{him/her}} to having further discussion.\n→ Sent manually if the prospect said they’re well-covered\n{{firstName}}, thanks for getting back to me. It's great that you are well-covered. May I know if you have an in-house team or if you work with an external partner? If you want to compare, we’re happy to present you with information on how our service differs from other SOC teams. Either way, all the best with your current project and development. Best regards"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "The first day of the sequence",
        "subject": "{{subject}}",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Hello{% else %}Dear{% endif %} {{firstName}},\n{{icebreaker; Congrats for…}}\nOur customers chose our SOC-as-a-Service among the dozens of products available in Switzerland.\nThey preferred our solution to their previous SOC because it was more complete, ready-to-use, and cost-effective.\n[Client_Testimony]\nIs it worth sharing more context? Or is it off-topic?\nBest regards,\n{{salesRep}}"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "10 days after the last message",
        "subject": "discussion with {{colleaguename1}} or {{colleaguename2}}",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Hello{% else %}Dear{% endif %} {{firstNasme}},\nIs it best to contact your colleague {{colleaguename1}} or {{colleaguename2}} to discuss {{companyName}}'s SOC?\nI understand you're busy, but I don't want to lose the chance to meet with someone from  {{companyName}}.\nYou and your colleagues will be amazed to see how our experts have helped our customers successfully monitor and protect their ITC against cyber threats and attacks.\n\t\nHave a good day\n\n{{signature}}"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "10 days after the last message",
        "subject": "same as before",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Hello{% else %}Dear{% endif %} {{firstNasme}},\n\nOur Director [Director_Name]  and I tried to contact you.\nWe thought you might be interested in discovering how our customers monitor their IT and data and protect their company against cyber threats.\n\nIs one short intro call out of the question?\n\nIf you’re not interested, please let me know; it's understandable.\n\nBest regards\n\n{{signature}}"
      }
    ]
  },
  {
    "id": 19,
    "industry": "Clinical Research / Biotech CRO",
    "language": "EN",
    "metrics": {
      "sent": null,
      "replied": null,
      "repliedPct": null,
      "interested": null,
      "interestedPct": null
    },
    "icp": "CEO, CMO, Medical Director, and decision-makers in charge of Clinical Operations, outsourcing, etc. in biotechnology research",
    "durationDays": 40,
    "numTouches": 9,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": "yes",
    "touches": [
      {
        "number": 1,
        "type": "LinkedIn",
        "timing": "The first day of the sequence",
        "subject": null,
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}}, {{linkedinnote}}\n\nLinkedIn Note starts with:\n“Your LinkedIn post about…  \nYour LinkedIn profile shows that…\nYour interview OR article OR blog post…\nMy colleague {{SalesRep}} told me about…\n… Pleased to connect with you.”\n\n---\n\n→ Audio note (sent 6 days after the LinkedIn connection is accepted):\nPleased to connect with you. My colleague {{SalesRep}}  emailed you about our biometrics services. More than 350 sponsors trust us as their specialist provider for data management and statistics and I was wondering if you currently oversee any clinical trials?\n\n---\n\n→ Message with colleague names (sent 7 days later):\nHey {{firstName}}, is it better to contact your colleagues {{colleaguename1}} or {{colleaguename2}} to discuss biometrics services for the execution of your clinical development programs?\n\n---\n\n→ Breakup message (sent 5 days later):\n{{firstName}}, I understand that it's uncertain if you need help with trial design, data management, or biostatistics at the moment. Don't hesitate to reach out if you want to know why sponsors prefer us to their previous biometrics provider. Best wishes\nOther templates for LinkedIn replies\n→ Sent manually if the prospect responds with an inconclusive message that stops the sequence\n{{firstName}}, my colleague {{SalesRep}} emailed you to explain why sponsors turn to us for their clinical study services, data management, biostatistics, etc. \nWould you like to discover why these 350 organizations trust us with their clinical development plans?\n→ Sent manually if the prospect responds, they’re the right person to contact\n{{firstName}} as you lead {{use the message from the lead}}, I'd like to talk to you about the latest trial design, data management or biostatistics projects we've completed. Do you have 15 to 20 minutes for a video call\n→ Sent manually if the prospect responds they’re NOT the right person to contact/left the company\n{{firstName}}, thank you for getting back to me. Noted.\nDo you know who is responsible for clinical trials at {{companyName}}?\n→ Sent manually if the prospect responds they’re NOT interested\n{{firstName}}, thank you for your reply, noted. My colleague {{SalesRep}}  emailed you at [email] to explain why sponsors turn to us for clinical study services, data management, biostatistics, etc. We stay at your disposal, best\n→ Sent manually if the prospect discussed/forwarded the message  to a colleague\nHi {{firstName}}, thank you for your reply and for passing the information on to your colleague X.\nLooking forward to hearing from {{him/her}} to having further discussion.\nHave a great day\n→ Sent manually if the prospect said they’re well-covered\nHi {{firstName}}, thanks for getting back to me. Glad to know that you are well-covered in this matter. May I know if it’s because of the in-house team or if you already have a partner to work with? I’d be happy to share 1 or 2 case studies with you, and perhaps we can compare our service with your current setup. Either way, all the best with your current project and development. Best regards"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "The first day of the sequence",
        "subject": "phone call {{firstname}}",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Good morning{% else %}Good afternoon{% endif %} {{firstName}},\n{{icebreaker}}\n350+ organizations trust us as their biometrics partner for trial design, data management, and biostatistics services.\nOur clients were determined to optimize their clinical trial timelines and data processes to improve profitability. They were looking for guidance on data integrity and regulatory compliance. They must also ensure that their data is ready for submission.\n[ClientCompanyName]  has performed data management for our 2-phase I/II trials, and I am very happy about this collaboration, says the Clinical Project Leader of a Swiss biotech company.\nIs it worth sharing a little more context during a brief phone call, or is it off-topic? \nBest wishes\n{{signature}}"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "7 days after the last message",
        "subject": "Chat with {{colleaguename1}} or {{colleaguename2}}",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\nIs it best to contact your colleague {{colleaguename1}} or {{colleaguename2}} for matters related to your clinical development programs?\nI understand you're busy but I don't want to lose the opportunity to work with {{companyName}}. We want to see if it’s worth offering valuable assistance and supporting the mission at {{company name}}.\n\t\nMy to-do list pictured below reminded me to write to you 😊Have a good day\n\n\n\n{{signature}}"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "5 days after the last message",
        "subject": "same as before",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\nWe understand ​​that time and budget are limited, regulatory barriers are high, and the complexity of clinical trial design continues to grow.\nYou and your colleagues will be amazed to see how our experts have helped our customers successfully complete their clinical trials.\nWould you have some time this week to discuss it over the phone?"
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "8 days after the last message",
        "subject": "same as before",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Good morning{% else %}Good afternoon{% endif %} {{firstName}},\nWhat do you think of my suggestion: to see how sponsors like {{companyName}} successfully completed their clinical trials with the highest quality data?\nOur clients repeatedly emphasize their satisfaction with no longer having to deal with inexperienced people.\nTo prove it, we invite you to a [ProductName]  of up to 5 hours to discuss {{companyname}}'s clinical development plan.\nThis Introductory Call with our team of experts is 100% free.\nFirst, would you be interested in a virtual café with a bit more context?\n\n{{signature}}"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "6 days after the last message",
        "subject": "same as before",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Good morning{% else %}Good afternoon{% endif %} {{firstName}},\n\nOur Director [Director_Name] and I have tried to contact you.\nWe thought you would be interested in finding out how our customers solved\nWhy Do So Many Phase III Clinical Trials Fail? (webinar)\nAccelerated approvals (AA): not so fast! (white paper)\nThe Ultimate Guide to Clinical Data Management (eBook)\n\nIs one short intro call out of the question?\n\nIf you’re not interested, please let me know; it's understandable.\n\nBest regards\n{{signature}}\n\n\nObjections:\n“We work with a full-service CRO (both a Clinical CRO and a biometrics CRO):\nWorking with a dedicated biometrics CRO ensures the highest quality for your clinical trial programs regarding data management and biostatistics.\nContext: Large CROs excel at managing clinical operations, such as patient recruitment and site monitoring. Biometrics CROs ({{clientCompanyName}}), on the other hand, specialize in statistical analysis, data management, and clinical data reporting. Partnering with a clinical CRO and a biometrics CRO gives you access to both sides.\n“We already have a partner”:\n“So you already get the right support from your biometrics CRO clinical partner, and if yes, how is it going with them?”​\n\"Isn't it worth exploring the other options available to find out what's available and at what price?”\n“Have you found seamless communications between the clinical and data management teams?”\n“How do you manage your IDMC/DSMBs? Could you benefit from having a specialist independent partner for this?”\nAre you interested in expanding your network if there is ever a resourcing or capabilities constraint with your current partner(s)?\n\nMore case studies:\ntheir randomization & clinical supply management challenges (case study)\nAn imbalance between the two randomized arms for treated patients using [ClientCompanyName]'s biostatistics-driven RTSM  (case study)\ntheir drug delivery, thanks to [ClientCompanyName]’s proposition of a predictive drug supply model (case study)\n\n\n\n\n\n\n\n\nCold call script\nNotes:\nThe licensed HubSpot account for the calling feature is [email]. Please log in using this account to make your calls.\nENGLISH SCRIPT\n\nHello {{Name}}, this is {{SalesRep}}  from [ClientCompanyName]. Do you have a minute to discuss together?\n\n“Yes”\n“I don’t have time right now, I’m about to enter a meeting.”\n“Who is it?”\nSee below\n\n\n↘\nOh, okay, could I call you back tomorrow morning, maybe around 10 am?\n\n“Yes, sounds good.”\n\nOkay, thank you. You’ll receive an invite. Have a great meeting and talk to you tomorrow. [END]\nThis is {{SalesRep}} from {{clientCompanyName}}, [next paragraph]\n\n\nI emailed you since we now have more than 350 organizations that trust us as their CRO for data management and biostatistics services. \n\nI was wondering if you had a clinical trial going on?\n\nNo, we don’t have a clinical trial going on.”\n\nAre you planning clinical trials in the future?\n\n“Yes/No”\n\nWe would love to invite you to a 30-minute demo. That way, you could discover our services and ensure that for your future trials you get the best service at the best price. Are you interested?\n\n\n\n“Yes, we do have a clinical trial going on”\n\nAre you working with a CRO?\n\n“Yes/No”\n\nOur clients trust us to optimize their clinical trial timelines and data processes to improve profitability. We help to ensure your data is ready for submission. We would love to invite you for a 30-minute demo together with my colleague. Are you interested?\n\nWe help our clients to collect, organize, clean, and analyze data obtained during clinical trials and studies.\nWe are an expert clinical data science, regulatory statistics, and high-level strategic consulting contract research organization (CRO), providing agile clinical trials services for pharmaceutical, biotech, and medical device/diagnostic companies.\n\nCommon questions/ objections:\nI already have a CRO/ Do you have a CRO ⇒ YES\nAre you satisfied? \nYes: Most of our customers have worked with another CRO before we met.  Unless you're sure you're getting the best service, it might be interesting to meet my manager just to chat.\nNot sure: I’m sorry to hear you're not getting satisfaction with your actual. Would you like to meet my colleague to see how we can better assist you with your future clinical trials?\nWhen does the contract end?\nIf it’s in a long time: Maybe we should come back to you in {{month}}, {{trimester}}, {{year}}\nIf it’s less than 3-4 months: Maybe you could meet with my colleague to discuss your future trials! We can book a 30-minute meeting for next week or next month.\nI don’t need your services\nWhy? Do you already have a CRO? A Contract Research Organization(CRO) is a company that provides clinical trial services for the pharmaceutical, biotechnology, and medical device industries.\nYES\nMost of our customers have worked with another CRO before we met. Unless you're sure you're getting the best service, it might be interesting to meet my manager just to chat.\n\nNO\nYou should meet with my manager, {{clientRep}}, for a 30-minute call to see whether it would be a good idea for you to get support with your clinical trials. The introductory call is 100% free.\n\nVoicemail\nHello {{firstName}}, this is [YourFirstName] [YourLastName] from {{clientCompanyName}}. I hope you are well. I'm contacted via email to explain why 350+ companies trust us as their biometrics partner for trial design, data management, and biostatistics services. I want to ask if you have 1 minute to discuss this together. You can call me back at this number or by email at [YourEmailAddress]. Thank you, and have a great day\n\n\n\n\n\n\nFRENCH SCRIPT\nBonjour MR/M, ici {{SalesRep}} de {{clientCompanyName}}. Avez-vous une minute pour discuter ensemble ?\n\nJe vous ai envoyé un email car plus de 350 organisations nous font confiance en tant que CRO pour la gestion des données et les services biostatistiques. \n\n\nAvez-vous un CRO (Contract Research Organization) ?\nOrganisme de recherche sous contrat (CRO)\n\n\nC'est pourquoi nous aimerions vous inviter à une démonstration de 30 minutes avec mon collègue {{salesRep}}\nafin qu'il/elle puisse vous montrer comment des entreprises similaires font confiance à nos services et en tirent profit.\n\nPour plus de contexte, nos clients se tournent vers nous pour optimiser leurs calendriers d'essais cliniques et leurs processus de données afin d'être plus rentables. Ils cherchaient de l'aide en matière d'intégrité des données et de conformité réglementaire et devaient également s'assurer que leurs données étaient prêtes à être soumises.\n\n\nNous sommes une organisation de recherche contractuelle (CRO) experte en science des données cliniques, en statistiques réglementaires et en conseil stratégique de haut niveau, qui fournit des services d'essais cliniques agiles aux sociétés pharmaceutiques, biotechnologiques et de dispositifs médicaux et diagnostiques.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDiscovery call script\nIn which clinical phases are your trials? \nQualified: Clinical trial phases I, II, III​\nDisqualified: Pre-clinical\nHow many clinical trials are in progress?\nQualified: Minimum 2​ trials \nWhat type of support(s) are you looking for:\nConsultancy (design of studies)\nClinical data management:​\nBiostatistics: data analysis using statistics​\nRTSM: Randomization and trial supply management ​\nHow is the calendar shaping up (= is there any urgency)? \nThe therapeutic area(s) of ​your trial(s) are…, is that correct? (Cancer Research & Ophthalmology are the top 2 areas)\nImportant Notes\n{{clientCompanyName}} is a +30-year company that supports pharmaceutical and biotech companies in their clinical trials. We call it a Contract Research Organisation (CRO).\n\nNumbers:\u000b +1500 clinical trials supported for +350 clients.\n\nServices:\nConsultancy (design of studies)\nClinical data management\nBiostatistics: data analysis using statistics\nRTSM: randomization and trial supply management\u000b\nTeam:\n{{CCO Name}}: Chief Commercial Officer (CCO)\n{{US BD Lead}}: USA – Senior Director, US Business Development\n{{EU BD Lead}}: EMEA – Senior Director, Business Development Europe\u000b\nOffices:\nMain office in Europe ({{CCO Name}} and {{EU BD Lead}})\nSecond office in the USA ({{US BD Lead}})\u000b\nChannels:\u000b Email, LinkedIn, and cold calls.\n\nCold Calls:\u000b You will have the calling tasks on Lemlist.\u000b The first thing you need to consider is the lead's location; that way, you can optimise your day.\n\nTips for Cold Calls:\nTry to be focused but not stressed.\nThe person will feel your anxiety, and on the other hand, they will be more open if you are professional and friendly (in a professional way) at the same time.\nDo not rush.\nTry to make every word you say as clear as possible, and do not hesitate to take some breaks to get all the attention of the other person.\nAsk questions.\nIt is essential to let them speak. You will receive information that will help you prepare your next argument.\u000b\n\nBooking a Meeting:\nIf the lead is based in the USA, the meeting will be with the US Business Development lead.\nIf the lead is based in Europe, the meeting will be with the Europe Business Development lead.\nYou will find the calendar links in the bookmarks.\u000b\nImportant:\u000b Always make sure you're in the right time zone when you’re booking. You can easily change it."
      }
    ]
  },
  {
    "id": 20,
    "industry": "Solar Energy / Renewable Energy",
    "language": "DE",
    "metrics": {
      "sent": 1025,
      "replied": 480,
      "repliedPct": 47.0,
      "interested": 19,
      "interestedPct": 2.0
    },
    "icp": "Roof owners of buildings located in the German-speaking part of Switzerland",
    "durationDays": 28,
    "numTouches": 9,
    "channels": [
      "LinkedIn",
      "Email",
      "Cold Call"
    ],
    "abTesting": "Yes",
    "touches": [
      {
        "number": 1,
        "type": "LinkedIn",
        "timing": "The first day of the sequence",
        "subject": null,
        "content": "Keep blank to get around the LinkedIn limit of 5 personalized LinkedIn connections per day and send 20 invites per day\n\n---\n\n→ Introduction (sent 6 days after the LinkedIn connection is accepted):\nHello {{salutation}} {{lastName}}, my colleague {{SalesRep}}  emailed you recently.\nWe noticed that {{companyName}} might have significant electricity usage and available rooftop space. Have you ever explored using solar energy to cut electricity bills and lock in stable prices?\nMany companies now install on-site solar plants to reduce costs, whether or not they invest in or manage the setup, while also supporting the Energiewende. Thought it might be relevant for {{companyName}} too.\n\n---\n\n→ Message with colleague names (sent 7 days later):\nHello {{salutation}} {{lastName}}, would managing electricity costs or energy infrastructure fall under your role, or do you work with someone else on this?{% if colleaguename1 != blank and colleaguename2 != blank %} Maybe {{colleaguename1}} or {{colleaguename2}}?{% elsif colleaguename1 != blank %} Maybe {{colleaguename1}}?{% elsif colleaguename2 != blank %} Maybe {{colleaguename2}}?{% endif %}\n\n---\n\n→ Breakup message (sent 8 days later):\n{{salutation}} {{lastName}},\nIf cutting energy costs and securing long-term electricity prices are priorities for {{companyName}} in {{year}}  and beyond, {{SalesRep}} and I would be happy to show you how {{client_ref}}, and others are doing so without any upfront investment.\nWould it be helpful to see what they’ve achieved?\nEither way, I won’t take up more of your time. Just reaching out one last time in case this is worth a quick look.\n\nOther templates for LinkedIn replies\n→ Sent manually if the prospect responds with an inconclusive message that stops the sequence\nDear {{salutation}} {{lastName}}, my colleague {{salesRep}} reached out via email at {{email}}. We were wondering if you’d be open to learning how other Swiss companies are cutting their electricity bills and locking in stable prices with solar panels on their roofs? No need to invest or manage anything\n→ Sent manually if the prospect responds, they’re the right person to contact\n{{salutation}} {{lastName}}, thanks for your confirmation. Since you’re responsible for {{use the message from the lead}}, we’d love to show how we help companies reduce electricity bills and gain 20 years of fully managed price visibility, with no upfront cost. Would you be open to a quick 10-minute phone call?\n→ Sent manually if the prospect responds they’re NOT the right person to contact/left the company\n{{salutation}} {{lastName}}, thanks for getting back to me. Would you know who’s in charge of energy costs, operations, or infrastructure decisions at {{companyName}}? Really appreciate your help\n→ Sent manually if the prospect responds they’re NOT interested\n{{salutation}} {{lastName}}, thank you for your reply. {{SalesRep}} emailed you at {{email}} explaining how we help Swiss companies reduce energy costs without investing or managing the setup. If ever useful later on, we’d be happy to share a case study or connect briefly. Best regards\n→ Sent manually if the prospect discussed/forwarded the message  to a colleague\n{{salutation}} {{lastName}}, thanks a lot for forwarding the info to your colleague. Looking forward to exploring if this could work for {{companyName}} as well.\n→ Sent manually if the prospect said they’re well-covered\n{{salutation}} {{lastName}}, glad to hear you already have a solar setup in place. Out of curiosity, do you own other roofs that aren’t yet equipped? We also finance roof renovations when needed and rent your roof if there is no self-consumption at this site. Would it make sense to explore if there’s still untapped potential? Either way, I wish you the best with your current energy projects."
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "The first day of the sequence",
        "subject": "building / {{companyname}} in {{buildingcity}}",
        "content": "Version A (Retirement home example)\n\nDear{{salutation}} {{lastName}},\n\nI saw that {{companyName}} owns the building at {{buildingaddress}}.\n\nCompanies work with us to lower their electricity bills and avoid price spikes by installing solar plants on their sites. No upfront cost, and you can keep focusing on your business while we handle the rest.\n\n\nCould this be interesting for {{companyName}}? Or am I off-topic?\n\nBest-case: you cut costs. Worst-case: you get a free benchmark.\n\u000bBest regards,\n{{salesRep}}\n\nP.S.: One of our clients, a retirement home, cut its overall energy bill by 15% with 97% self-consumption. And we paid a 5-digit upfront fee to another client just for renting their roof.\n\n{{signature}}\n\n---\n\nDear{{salutation}} {{lastName}},\nWould it be better to reach out to {% if colleaguename1 != blank %}{{colleaguename1}}{% endif %}{% if colleaguename1 != blank and colleaguename2 != blank %} {% endif %}{% if colleaguename2 != blank %}{{colleaguename2}}{% endif %}? {% if colleaguename1 == blank and colleaguename2 == blank %}Would it be better to reach out to someone else?{% endif %}\nIn the meantime, here’s a quick one-pager summarizing how our customers finally joined the Energiewende without having to figure it out themselves.\nLet me know what you think.\nBest\n{{signature}}"
      },
      {
        "number": 3,
        "type": "Cold Call",
        "timing": "5 days after the last message",
        "subject": "same as before",
        "content": "Under construction, to be validated later"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "7 days after the last message",
        "subject": "same as before",
        "content": "Dear{{salutation}} {{lastName}},\n\nI just tried calling you on {{phonenumber}}.\n\nSeveral Swiss companies like {{companyName}} recently contacted us to explore how rooftop solar could lower energy costs or generate rental income from unused roof space.\n\nWe offer a free impact report tailored to your building, whether through self-consumption savings or full injection with roof rental. No investment or management is needed.\n\n\n\nWould you be open to a quick 10-15 min call to explore if this fits {{companyName}}?\n\nBest regards,\n\n{{signature}}"
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "7 days after the last message",
        "subject": "same as before",
        "content": "Dear {{salutation}} {{lastName}},\n\nI’ve reached out a few times and don’t want to keep bothering you if this isn’t a priority right now.\n\nIs it possible to send you an update in a few months or not?\n\nIf it’s just a timing issue, or if there’s someone else at {{companyName}} who handles this, kindly let me know.\n\nBest,\n\n{{signature}}"
      }
    ]
  },
  {
    "id": 22,
    "industry": "IT Risk, Audit & Compliance / Technology Events",
    "language": "EN",
    "metrics": {
      "sent": 378,
      "replied": 38,
      "repliedPct": 11.0,
      "interested": 4,
      "interestedPct": 2.0
    },
    "icp": "IT Audit, IT Compliance, and IT Risk Management leaders located in Basel (Stadt + Land), Aargau, Solothurn, or Bern working in companies with more than 500 employees",
    "durationDays": 30,
    "numTouches": 5,
    "channels": [
      "LinkedIn",
      "Email"
    ],
    "abTesting": "no",
    "touches": [
      {
        "number": 1,
        "type": "LinkedIn",
        "timing": "The first day of the sequence",
        "subject": null,
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Hello{% else %}Dear{% endif %} {{gender}} {{lastName}},\n\nThe LinkedIn note starts with the following:\n\n“Once again, I wanted to congratulate you for…”\nAnd it finishes with “Pleased to connect with you.”\n\n---\n\n→ Audio note (sent 1 day after the LinkedIn connection is accepted):\nI emailed you to invite you to our conference in early December in Basel, which is about IT Risk and compliance management\n→ Text message (sent directly after the audio note):\nWould you like to receive a bit more context?\n\n---\n\n→ Message with colleague names (sent 1 day later):\nWould you be interested in joining us together with other IT risk and compliance leaders from the region?\n\n---\n\n→ Breakup message (sent 5 days later):\n{{gender}} {{lastName}}, I thought you would be interested in joining us in Basel to meet other IT professionals and discuss risk and compliance in agile delivery projects. My invitations stay open. Take care\n\nOther templates for LinkedIn replies\n→ Sent manually if the prospect responds with an inconclusive message that stops the sequence\n{{salutation}} {{lastName}} I emailed you to {{email}}. I was wondering if you were interested in participating in our conference on December 3rd in Basel?\n→ Sent manually if the prospect responds they’re NOT the right person to contact/left company\n{{salutation}} {{lastName}}, thank you for getting back to me, noted.\nDo you know someone at {{companyName}} who could be interested in participating?\n→ Sent manually if the prospect responds they’re NOT interested\n{{salutation}} {{lastName}} thank you for your reply. We stay at your disposal if you change your mind.\n→ Sent manually if the prospect discussed/forwarded the message  to a colleague\n{{salutation}} {{lastName}}, thank you for your reply and for passing the information on to your colleague X.\nLooking forward to hearing from {{him/her}} to having further discussion."
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "The first day of the sequence",
        "subject": "Conference invitation in Basel/December",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Hello{% else %}Dear{% endif %} {{gender}} {{lastName}},\n{{icebreaker; Congrats for…}}\n60 professionals in {{jobtitleresponsability}} are invited to our conference about “IT Risk & Compliance Management in the age of Cloud”.\n{{jobtitleresponsability}}\nIt takes place in {{region}}  on {{date}}, and it’s free of charge.\nI saw you’re based in {{city}}, working for {{companyName}}. I was wondering if you’d be interested in participating? Or am I off-topic?\nBest regards,\n{{signature}}\n\nPS: The conference starts at 3.30 pm and finishes at 8 pm with a networking [ProductName] (and here is the agenda)"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "4 days after the last message",
        "subject": "discussion with {{colleaguename1}} or {{colleaguename2}}",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Hello{% else %}Dear{% endif %} {{gender}} {{lastName}},\nOne of the conference’s sessions discusses why IT compliance management promotes innovation rather than being seen as a burden by some.\nWould it be best to invite your colleague {{colleaguename1}} or {{colleaguename2}} to discuss DevOps compliance and auditability in the cloud?\n\nHave a good day\n{{signature}}"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "5 days after the last message",
        "subject": "same as before",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Hello{% else %}Dear{% endif %} {{gender}} {{lastName}},\nI understand you're busy, but just a reminder about the conference in {{region}} on{{date}} – it’s shaping up to be a great mix of insights and people, all focused on IT risk, compliance, and cloud innovation.\nWe’ll dive into topics like DevOps compliance management, EU DORA resilience testing, and the EU AI act, and you’ll get to chat with others who are tackling the same challenges.\nWould love to have you join us (it’s free)! Are you coming?"
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "5 days after the last message",
        "subject": "same as before",
        "content": "{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Hello{% else %}Dear{% endif %} {{gender}} {{lastName}},\nJust a last reminder in case the timing wasn’t right before.\nOur Basel conference on December 3rd brings together top IT risk and compliance experts—a unique chance to connect with industry peers tackling the same challenges.\nLet me know if you’d like us to reserve a spot for you.\nBest,\n{{signature}}"
      }
    ]
  },
  {
    "id": 23,
    "industry": "Healthcare Technology / HealthTech",
    "language": "EN",
    "metrics": {
      "sent": 808,
      "replied": 26,
      "repliedPct": 4.0,
      "interested": 2,
      "interestedPct": 1.0
    },
    "icp": "N/A",
    "durationDays": 36,
    "numTouches": 7,
    "channels": [
      "Email"
    ],
    "abTesting": null,
    "touches": [
      {
        "number": 1,
        "type": "LinkedIn",
        "timing": "The first day of the sequence",
        "subject": null,
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}}, {{linkedinnote}}\n\nLinkedin Note starts with:\n“Your LinkedIn post about…\nYour LinkedIn profile shows that…\nYour interview OR article OR blog post…\nMy colleague {{salesRep}}  told me about…\n… Pleased to connect with you.”\n\n---\n\n→ Audio note (sent 6 days after the LinkedIn connection is accepted):\nThank you for adding me to your network.\nMy colleague {{salesRep}} emailed to explain why health plans partner with us to close care gaps and improve their quality and STAR performance. Are you interested in discussing further?\n\n---\n\n→ Message with colleague names (sent 7 days later):\nHi {{firstName}}, would it be more appropriate for me to contact your colleagues {{colleaguename1}} or {{colleaguename2}}?\n\n---\n\n→ Breakup message (sent 5 days later):\n{{firstName}}, I'm sorry we didn’t have the opportunity to speak directly. \nI'll keep you in the loop as we publish more achievements with respect to closing our clients’ care gaps and improving their quality and STAR ratings.   \nBest regards.\nOther templates for LinkedIn replies\n→ Sent manually if the prospect responds with an inconclusive message that stops the sequence\n{{firstName}}, my colleague {{salesRep}}  emailed to explain why customers are partnering with us to improve their quality and STAR ratings through prospective care, care gap closure, and improved member experience.\nWould you like to find out why 5 of the top 7 MCOs rely on our partnership to connect their members with the care they need and deliver an exceptional experience?\n→ Sent manually if the prospect responds, they’re the right person to contact\nGreat. \nIs there a particular day and time that we could jump on the phone to chat further?\n→ Sent manually if the prospect responds they’re NOT the right person to contact/left company\nThank you for getting back to me, {{firstName}}, noted.\nDo you know who is responsible for prospective care, care gap closure, member experience or improving member retention at {{companyName}}?\n→ Sent manually if the prospect responds they’re NOT interested\n{{firstName}}, thank you for your reply, noted. My colleague {{salesRep}} emailed you at [email] to explain why customers partner with us to close care gaps and improve their quality and STAR ratings.  We’ll keep in touch.\n→ Sent manually if the prospect discussed/forwarded the message  to a colleague\nThank you for your reply and for passing the information on to your colleague.\nLooking forward to hearing from them and helping in any way we can.\n→ Sent manually if the prospect said they’re well-covered\nThanks for getting back to me. Glad to know that you are well-covered. \nCan I share a few case studies with you to compare our solution with your current process?  \nEither way, all the best on your current efforts."
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "The first day of the sequence",
        "subject": "Brief conversation, {{firstname}}?",
        "content": "Intro - A\n{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\n{{icebreaker}}\nEvery health plan strives to improve quality and STARs performance by closing care gaps and improving the member experience. \nTo achieve these goals, many health plans partner with [clientCompanyName], ensuring their members receive the care they need while enjoying an exceptional experience. \nIs it worth sharing a little more context during a short phone call? Or is this off-topic? \nBest regards,\n\n{{signature}}\n\nIntro - B\nDispatch time: The first day of the sequence\nSubject: Brief conversation, {{firstname}}?\nContent:\n{% assign ampm = \"now\" | date: \"%P\" %}{% if ampm contains \"am\" %}Good morning{% else %}Good afternoon{% endif %} {{firstName}},\n5 of the 7 largest MCOs partnered with us to provide their members with the care they need and an exceptional experience.\nEvery health plan strives to improve quality and STARs performance by closing care gaps and improving the member experience. \nIs it worth sharing a little more context during a short phone call? \nBest regards\n\n{{signature}}Touch#3 - Email#2 → Contact colleagues\nDispatch time: 7 days after the last message\nSubject: chat with {{colleaguename1}} or {{colleaguename2}}\nContent:\n{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\nIs it best to contact {{colleague1}} or {{colleague2}} regarding quality and STARs performance improvement at {{companyName}}?\n\nBest regards\n{{signature}}"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "4 days after the last message",
        "subject": "same as before",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\nI understand you're busy, so maybe your colleagues would be interested in seeing a case study supporting our ability to close care gaps and deliver an ROI of 242%?\nPS: My to-do list, pictured below, reminded me to reach out to you, 😊.\n\n\n\n{{signature}}"
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "5 days after the last message",
        "subject": "Meet at [ProductName]?",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\nAre you attending an upcoming [ProductName] conference in the {{country}}?  Our VP would like to invite you to meet over coffee at [place] to get a break from the conference.\nAre you interested?\nSpeaking of coffee, I’ll have a fresh cup with your name on it in {{event region}} : )"
      },
      {
        "number": 6,
        "type": "Cold Call",
        "timing": "3 days after the last message",
        "subject": null,
        "content": "[Managed by client’s team]"
      },
      {
        "number": 7,
        "type": "Email",
        "timing": "directly after an unsuccessful cold call",
        "subject": "same as Email #4.",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\n\nMy colleague {{salesRep}} couldn’t reach you today.\n\nHe wanted to chat with you about meeting our VP over coffee at a Medicare STARs-focused industry event in the US.\n\nDo you have a few minutes to connect and discuss?\n\nBest"
      },
      {
        "number": 8,
        "type": "Email",
        "timing": "8 days after the last message",
        "subject": "same as before",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}}, \nWhat did you think of my offer to show you why health plans similar to {{companyName}} work with us to close gaps in care and improve the member experience?\nOur clients consistently emphasize their satisfaction with our ability to deliver an ROI, immediately schedule their members for care, and deliver an exceptional experience.  \nThey also count on us to answer their members' questions, complete HRAs, explain benefits or rewards, and connect members to appropriate resources (Clinical, CBO, internal Health Plan resources, etc.).\nIs there a particular day and time that works best for us to connect?\n{{signature}}"
      },
      {
        "number": 9,
        "type": "Email",
        "timing": "6 days after the last message",
        "subject": "same as before",
        "content": "{% spin %}{% variation %}Hello{% variation %}Dear{% variation %}Hi{% endspin %} {{firstName}},\n\nSince you’re responsible for {{responsibilityfromjobtitle}} at {{companyName}}, {{salesRep}},  and I have tried to contact you several times.\nWe thought you would be interested in seeing how our customers have benefited from our solution:\nLeverage Programming to Propel their Health Plan to achieve 4+ Stars\nCase Study showing a 242% ROI in the Medicare Advantage Market\nBoosted their CAHPS scores through scalable outreach and scheduling\n\nIt might also interest you to see our comprehensive, end-to-end solution for enhancing member experience, improving health outcomes, and maximizing ROI: Care Access Complete\u000b\nIs a short phone call out of the question?\n\nIf there’s no interest, I totally understand and wish you the best!\n\nBest regards\n{{signature}}"
      }
    ]
  },
  {
    "id": 24,
    "industry": "Web Technology / IT Services",
    "language": "EN",
    "metrics": {
      "sent": 111,
      "replied": 4,
      "repliedPct": 4.0,
      "interested": null,
      "interestedPct": null
    },
    "icp": "Finance (wealth & asset management, hedge funds, trustees, family offices, investment funds, capital funds) and Legal (fiduciaries, accounting firms, law firms, notaries, IP)",
    "durationDays": 28,
    "numTouches": 4,
    "channels": [
      "Email"
    ],
    "abTesting": "Yes",
    "touches": [
      {
        "number": 1,
        "type": "Email",
        "timing": "when the campaign is launched",
        "subject": "delays/hidden costs",
        "content": "A - long version\n\nHello {{salutation}} {{lastName}},\n\nIn French-speaking Switzerland, many companies like {{companyName}} tell us about their IT concerns: tickets waiting too long, unpredictable invoices, support that lacks responsiveness at critical moments, etc.\n\nFor {{testimony company}}, for example, these bottlenecks represented 3-4 days/month lost, and now \"{{clientCompanyName}} has been our trusted IT partner for years. It acts as an outsourced IT department and offers exceptional reliability and quality of service.\"\n\nThese problems are not just IT issues: they cause stress, slow down projects, and lead to significant budget overruns.\n\nDoes {{companyName}} sometimes encounter these same situations, or am I mistaken?\n\nBest regards\n\n{{accountSvignature}} \nUnsubscribe\n\nB - shorter version\n\nHello {{salutation}} {{lastName}},\n\nMany {{revisedjobtitle}}s in French-speaking Switzerland in the {{revisedindustry}} sector are talking about the same IT issues:\nMonthly bills that are difficult to predict\nSupport tickets that remain pending for too long\nTheir IT providers who rely on unresponsive offshore support services\n\nWe are based in Geneva and offer fixed rates for proactive 24/7 monitoring. \n\nIT becomes a reliable ally rather than a source of endless frustration.\n\nDoes {{companyName}} face the same headaches? Or am I way off base?\n\nSincerely\n\n{{accountSignature}} \nUnsubscribe"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "6 days after the previous email sent",
        "subject": "same as before",
        "content": "Hello {{salutation}} {{lastName}},\nMore than {{amount}}  companies in French-speaking Switzerland and some of your counterparts in Geneva have decided to test our IT support. \nIn concrete terms:\n{{testimonycompany}}: {{percentage}}  availability, {{percentage}} faster resolution times, {{amount}} breaches.\n{{testimonycompany}} : FINMA infrastructure, {{percentage}} fewer phishing risks, {{amount}} breaches.\nWould it be relevant for {{companyName}} to compare this with what your current provider offers?\nBest regards\n{{accountSignature}}  \u000bUnsubscribe"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "7 days after the previous email sent",
        "subject": "{% if Colleaguename1 != blank and Colleaguename2 != blank %}chat with {{ Colleaguename1 }} or {{ Colleaguename2 }} ?{% elsif Colleaguename1 != blank %}chat with {{ Colleaguename1 }} ?{% else %}chat with someone else at {{ companyName }} ?{% endif %}",
        "content": "Hello {{salutation}} {{lastName}},\n{% if Colleaguename1 != blank and Colleaguename2 != blank %}Not sure if IT support falls under your responsibility or if it's more of a job for your coworkers {{ Colleaguename1 }} or {{ Colleaguename2 }}?{% elsif Colleaguename1 != blank %} Not sure if IT support is your responsibility or if it's better handled by your colleague {{Colleaguename1}}?{% elsif Colleaguename2 != blank %}Not sure if IT support is your responsibility or if it's better handled by your colleague {{Colleaguename2}}?{% else %} Not sure if IT support falls under your responsibility or if it's more the domain of another member of your team?{% endif %}\nTransparent costs, responsive local support, and increased security—that's exactly what IT managers in French-speaking Switzerland are looking for when evaluating their IT outsourcing options.\nWould you mind putting me in touch with your colleagues so they can form their own opinion?\nBest regards\n{{accountSignature}}  \u000bUnsubscribe"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "9 days after the previous email sent",
        "subject": "same as before",
        "content": "Hello {{salutation}} {{lastName}},\nThis will be my last message. To remove any hesitation, we offer a free audit of your infrastructure.\nWithin 48 hours, you will receive a clear report on:\nyour security vulnerabilities\nyour inefficiencies\nyour compliance risks\nEven if you decide to stay with your current provider, this audit will give you a useful roadmap.\n👉 Would you like to book a slot in {{month}} for {{companyName}}?\nBest regards\n{{accountSignature}}  \u000bUnsubscribe"
      }
    ]
  },
  {
    "id": 25,
    "industry": "Cybersecurity / Cyber Risk Management",
    "language": "EN",
    "metrics": {
      "sent": null,
      "replied": null,
      "repliedPct": null,
      "interested": null,
      "interestedPct": null
    },
    "icp": "CISOs and Heads of IT at $2B+ revenue enterprises and public-sector organizations in Europe, especially in regulated and high-risk industries.",
    "durationDays": 28,
    "numTouches": 5,
    "channels": [
      "Email",
      "LinkedIn"
    ],
    "abTesting": "Yes",
    "touches": [
      {
        "number": 1,
        "type": "LinkedIn",
        "timing": "First day of the sequence",
        "subject": null,
        "content": "LinkedIn connection request\nDate sent: First day of the sequence\nSender: {{salesRep}}\nContent:\n\n---\n\n→ LinkedIn connection invite:\n(Keep blank to get around the LinkedIn limit of 5 personalized connections per day and send 15 invites per day)\n\n---\n\n→ Introduction (sent 1 day after the LinkedIn connection is accepted):\nHi {{firstName}}, thanks for connecting.\nIn large organizations, questions around vendor incidents, ransomware exposure, or regulatory readiness often surface outside planned security reviews.\nHow are these topics typically handled at {{companyName}}?\n\n---\n\n→ Message with colleague names + typo (sent 5 days later):\n{{firstName}}, for these topics, is it usually handled by you directly, or by {% if colleaguename1 != blank and colleaguename2 != blank %}{{colleaguename1}} or {{colleaguename2}}{% elsif colleaguename1 != blank %}{{colleaguename1}}{% elsif colleaguename2 != blank %}{{colleaguename2}}{% else %}another member of the seucrity or risk team{% endif %}?\nJust checking so I’m reaching the right person at {{companyName}}.\n\n---\n\n→ Typo corrections (sent directly after):\n*security, sorry\n\n---\n\n→ Breakup message (sent 7 days later):\nHi {{firstName}},\nI’ll stop here for now, if it’s not the right time.\nShould we reconnect in 3 months to see if the need has shifted?\nAll the best for your current projects."
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "when the campaign is launched",
        "subject": "What’s externally visible at {{companyName}}",
        "content": "Version A - with icebreaker\n\nDear {{firstName}},\n\n{{icebreaker}}\n\nAcross large organizations, security teams are increasingly asked to understand what external attackers actually see when they assess the company and its ecosystem.\n\nIs this a topic {{companyName}} is already spending time on?\n\nBest regards,\n\n{{signature}}\nunsubscribe\nVersion B - without icebreaker\n\nDear {{firstName}},\n\nMany large security teams are being asked to answer a harder question lately: what does an attacker actually see when they look at the organization from the outside?\n\nThat gap between internal controls and external exposure is often where surprises begin.\n\nIs this something already on {{companyName}}’s radar?\n\nBest regards,\n\n{{signature}}\nunsubscribe"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "7 days after the previous email sent",
        "subject": "{% if colleaguename1 != blank and colleaguename2 != blank %}relevant for {{colleaguename1}} or {{colleaguename2}}?{% elsif colleaguename1 != blank %}relevant for {{colleaguename1}}?{% elsif colleaguename2 != blank %}relevant for {{colleaguename2}}?{% else %}relevant for someone at {{companyName}}?{% endif %}",
        "content": "Hi {{firstName}},\nWould it make sense to loop in {% if colleaguename1 != blank and colleaguename2 != blank %}{{colleaguename1}} or {{colleaguename2}}{% elsif colleaguename1 != blank %}{{colleaguename1}}{% elsif colleaguename2 != blank %}{{colleaguename2}}{% else %}someone from your security or risk team{% endif %}?\nIn similar environments, security teams cut investigation time from days to minutes by linking dark-web and threat activity directly to exposed assets and critical suppliers, allowing them to act before incidents escalate.\nLooking forward to hearing back from you.\n{{signature}}\u000bUnsubscribe"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "6 days after the previous email sent",
        "subject": "same as before",
        "content": "Hi {{firstName}},\nA frequent challenge security leaders mention is having plenty of tools, yet still lacking clarity on which external alerts actually matter to their assets, vendors, or brand.\nThat’s often where false positives creep in, and real signals get buried, especially during ransomware or supplier incidents.\nIs this something your team is comfortable with today?\nBest regards,\u000b\u000b{{signature}}\u000bunsubscribe"
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "9 days after the previous email sent",
        "subject": "same as before",
        "content": "Hi {{firstName}},\nI don’t want to be persistent if the timing isn’t right.\nIf useful, I’m happy to share a short, no-commitment resource such as a one-time dark web exposure scan, a brand threat snapshot, or a brief regulatory readiness checklist for larger organizations.\nOr can we reconnect in a few months when priorities shift?\nHave a great day.\n{{signature}}\u000bUnsubscribe"
      }
    ]
  },
  {
    "id": 26,
    "industry": "Biotech / Real-World Evidence (RWE) Software",
    "language": "EN",
    "metrics": {
      "sent": 925,
      "replied": null,
      "repliedPct": 1.0,
      "interested": 1,
      "interestedPct": 1.0
    },
    "icp": "Senior leaders (Head of, VP, Chief of, etc.) in Research & Development, Clinical Development, Data Strategy, and Evidence Generation / Real-World Evidence (RWE) within innovative biotech organizations focused on early-stage drug discovery and clinical development",
    "durationDays": 28,
    "numTouches": 5,
    "channels": [
      "Email",
      "LinkedIn"
    ],
    "abTesting": "Yes",
    "touches": [
      {
        "number": 1,
        "type": "LinkedIn",
        "timing": "First day of the sequence",
        "subject": null,
        "content": "LinkedIn connection request\nDate sent: First day of the sequence\nSender: {{salesRep}}\nContent:\n\n---\n\n→ LinkedIn connection invite:\n(Keep blank to get around the LinkedIn limit of 5 personalized connections per day and send 20 invites per day)\n\n---\n\n→ Introduction (sent 1 day after the LinkedIn connection is accepted):\nHi {{firstName}}, pleased to connect with you.\nI wrote to you at {{email}} regarding the recent challenges that biotech teams face when collaborating on real-world data. Did you receive my email?\nYou and I know that accessing clinical insights is crucial to avoid slowing down progress\nIs that something {{companyName}} struggles with or not at all?\n\n---\n\n→ Message with colleague names (sent 5 days later):\n{{firstName}}, is it better to discuss rael-world evidence with {% if colleaguename1 != blank and colleaguename2 != blank %}{{colleaguename1}} or {{colleaguename2}}{% elsif colleaguename1 != blank %}{{colleaguename1}}{% elsif colleaguename2 != blank %}{{colleaguename2}}{% else %}someone from your R&D or Clinical Development team{% endif %}?\nCurious to know how {{companyName}} leverages clinical data from nationwide hospital sites to help feasibility studies, cutting time to market (rather than waiting months for access approvals and lacking the needed data sources)\n\n---\n\n→ Message with colleague names (sent directly after):\n*real-world evidence, sorry\n\n---\n\n→ Breakup message (sent 7 days later):\nDear {{firstName}},\nCould we reconnect in a few months once {{ region}} clinical data becomes more relevant at {{companyName}}?\nHave a great day"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "when the campaign is launched",
        "subject": "health data insights/RWE {{firstName}}",
        "content": "Version A - shorter version with icebreaker\n\nDear {{firstName}},\n\n{{icebreaker}}\n\nYou know how complicated it is to access sensitive health data securely and in compliance with privacy regulations in Europe.\n\nEvery day, this slows down decisions, delays decisions, and leaves valuable real-world insights locked away.\n\nRoche and DebioPharm selected our federated solution to transform their oncology research as part of the NAIPO project.\n\nInterested in receiving a short doc explaining how it supports their team?\n\nBest\n{{signature}}\nunsubscribe\nVersion B - shorter version without icebreaker\n\nDear {{firstName}},\n\nYou know how complicated it is to access sensitive health data securely and in compliance with privacy regulations in Europe.\n\nEvery day, this slows down decisions, delays decisions, and leaves valuable real-world insights locked away.\n\nRoche and DebioPharm selected our federated solution to transform their oncology research as part of the NAIPO project.\n\nInterested in receiving a short doc explaining how it supports their team?\n\nBest\n{{signature}}\nunsubscribe"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "7 days after the previous email sent",
        "subject": "{% if colleaguename1 != blank and colleaguename2 != blank %}relevant for {{colleaguename1}} or {{colleaguename2}}?{% elsif colleaguename1 != blank %}relevant for {{colleaguename1}}?{% elsif colleaguename2 != blank %}relevant for {{colleaguename2}}?{% else %}relevant for someone at {{companyName}}?{% endif %}",
        "content": "Hi {{firstName}},\nIs it better to reach out to {% if Colleaguename1 != blank and Colleaguename2 != blank %}your colleagues {{Colleaguename1}} or {{Colleaguename2}}{% elsif Colleaguename1 != blank %}your colleague {{Colleaguename1}}{% elsif Colleaguename2 != blank %}your colleague {{Colleaguename2}}{% else %}another member of your team{% endif %}?\nWe’d be happy to present to you and your colleagues how {{companyName}} could also benefit from similar real-world data collaborations.\n6 leading Swiss university hospitals have built a federated network connecting over 600k patient records. They run cross-site queries in minutes and design studies based on broader, more diverse patient groups, all in full compliance.\nHave a great day!\nPS: My to-do list below reminded me to write to you 😊\n\n{{accountSignature}}\u000bUnsubscribe"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "6 days after the previous email sent",
        "subject": "same as before",
        "content": "Hi {{firstName}},\nHere is the link to the short case study I mentioned, which presents how {{testimony company}}  are transforming oncology research with AI through the NAIPO project in Switzerland.\nI thought you would be interested to see how:\n1/AI models run on real-world federated clinical datasets\u000b2/data security is not compromised\u000b3/compliance becomes simpler across partners\nIs it something you’re interested in, or not at all?\nBest regards\u000b{{signature}}\u000bunsubscribe"
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "9 days after the previous email sent",
        "subject": "same as before",
        "content": "Hi {{firstName}},\nNow may not be the ideal time to explore how real-world evidence can support your research efforts.\nCan I reach out again in about 3 months to see if priorities have changed?\nPS: In the meantime, here is a virtual coffee for you until we meet again ☕️\n\n{{accountSignature}}\n\u000bUnsubscribe"
      }
    ]
  },
  {
    "id": 27,
    "industry": "Digital Marketing / Web Services",
    "language": "FR",
    "metrics": {
      "sent": 255,
      "replied": 54,
      "repliedPct": 21.0,
      "interested": 10,
      "interestedPct": 4.0
    },
    "icp": "CEO and equivalent, 1-20 staff,",
    "durationDays": 30,
    "numTouches": 8,
    "channels": [
      "Email",
      "Cold Call",
      "LinkedIn"
    ],
    "abTesting": null,
    "touches": [
      {
        "number": 1,
        "type": "LinkedIn",
        "timing": "The first day of the sequence",
        "subject": null,
        "content": "Version A (caractères: 190) - CTA 1\n\nBonjour {{firstName}},\nNous avons permis au {{client_ref}} d’occuper la première place du référencement naturel sur Google à La Louvière. Est-ce une priorité pour {{companyName}} ? \n\n{{salesRep}}\nVersion B (caractères: 187) - CTA 2\n\nBonjour {{firstName}},\nNous avons permis au {{client_ref}}  d’occuper la première place du référencement naturel sur Google à La Louvière. Est-ce pertinent pour {{companyName}}? \u000b\u000b{{salesRep}}\n\n---\n\nBonjour et enchanté! Je voulais juste savoir si ça vous intéresse d’attirer plus de clients grâce à un site internet plus performant. En effet, nous aidons au quotidien plusieurs bureaux d’architectes à atteindre les sommets du référencement Google.  Est-ce pertinent pour vous?\n\n---\n\nQu’avez-vous pensé de ma proposition? 🙂"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "when the full lead generation is ready",
        "subject": "A\\ prise de contact {{firstName}} x {{salesRep}}",
        "content": "Examples of {{shortpain}}:\npas de prise de rdv en ligne\npas de commande en ligne\n23ème en recherche Google\nExamples of {{pain}}:\nDe plus, il apparaît que vous ne disposez pas de la prise de rdv en ligne sur votre site.\nDe plus, il apparaît que vous ne disposez pas d'un système de vente en ligne.\nDe plus, vous n’avez pas publié de contenu sur votre page Facebook depuis 7 mois, avec moins de 500 followers sur FB.\nDe plus, vous êtes actuellement le 15e   bureau référencé en tapant “bureau d’architecte Wavre”.\nExamples de {{painproof}}:\nDes études sectorielles montrent que plus de 50 % des utilisateurs s’attendent à pouvoir prendre un rendez-vous en ligne.\nDes analyses marketing indiquent que plus de 50 % du trafic d’un site web provient du référencement naturel.\nDes études montrent que les entreprises investissant dans le SEO enregistrent une croissance significative de leurs revenus.\nDes études récentes montrent qu’une part importante de la population effectue ses démarches uniquement en ligne.\nDes données de marché indiquent qu’une majorité des consommateurs achète en ligne.\nExamples of {{SEO}}: bureaux d’architectes Namur, bureaux d’assurance Bruxelles, cabinets vétérinaires Liège\n\n\n\n\n\n\n\n\n\nVersion A\n\nBonjour {{firstName}},\n\nAvez-vous déjà pensé à améliorer le référencement Google de votre bureau d’architecture ? Je vois que vous arrivez {{Google_rank}} en tapant {{Google_search}} {{city}}.\n\n {{painproof}}\n\nPlusieurs bureaux d’architectes, tels que {{client_ref}} , hésitaient également.\n\nCependant, en l’espace de moins d’un an, nous leur avons généré des centaines de demandes sur leur site et atteint les sommets des résultats de recherche Google.\n\nUne présence digitale est désormais aussi essentielle qu’un comptable pour le bon développement de votre entreprise. Grâce à notre {{productname}} et à nos abonnements modulables, vous obtenez le support adéquat pour booster votre présence digitale en fonction de votre budget. \n\nCela semble pertinent ou suis-je hors sujet ?\n\nMerveilleuse journée,\n\nEn images, voici ce que nous pouvons réaliser pour {{companyName}}:\n\n\n\n{{signature}}\n\n\n\n\n\n\nVersion B (shorter)\n\nBonjour {{firstName}},\n\nAvez-vous déjà pensé à améliorer le référencement Google de votre bureau d’architecture ? Je vois que vous arrivez {{Google_rank}} en tapant {{Google_search}} {{city}}.\n\n {{painproof}}\n\nPlusieurs bureaux d’architectes, tels que {{client_ref}} , hésitaient également.\n\nCependant, en l’espace de moins d’un an, nous leur avons généré des centaines de demandes sur leur site et atteint les sommets des résultats de recherche Google.\n\nCela semble pertinent ou suis-je hors sujet ?\n\nMerveilleuse journée,\n\nEn images, voici ce que nous pouvons réaliser pour {{companyName}}:\n\n\n\n{{signature}}"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "6 days after the last message",
        "subject": "A/ same as before",
        "content": "Version A (inclut l’USP stats)\n\nBonjour {{firstName}},\n\nComme vous, nos clients comme {{client_ref}} étaient perplexes quant au potentiel d’un meilleur référencement Google et d’un agenda connecté.\n\nUn an plus tard, ce sont des milliers de nouveaux inscrits qui arrivent chaque année sans qu’ils dépensent un euro en publicité (Google Ads).\n\nPour ce faire, nous avons mis en place une stratégie {{productname}} : refonte du site internet, mise en place d’un agenda connecté et développement du référencement naturel sur Google.\n\nNos clients peuvent également garder un œil très attentif à toutes les statistiques du trafic de leur site internet, ce qui leur permet d’essayer de nouvelles offres en temps réel pour satisfaire leur clientèle.\n\nEn images, voici ce que nous pouvons réaliser pour {{companyName}}:\n\nEst-ce qu’un peu plus de contexte par téléphone vous intéresse?\n\nBelle journée espérons ensoleillée, \n\n{{signature}}\n\n\n\n\n\n\n\n\n\nVersion B (inclut les formules + paiements mensuels)\n\nBonjour {{firstName}},\n\nComme vous, nos clients comme le {{client_ref}} étaient perplexes quant au potentiel d’un meilleur référencement Google et d’un agenda connecté.\n\nUn an plus tard, ce sont des milliers de nouveaux inscrits qui arrivent chaque année sans qu’ils dépensent un euro en publicité (Google Ads).\n\nPour ce faire, nous avons mis en place une stratégie {{productname}}: refonte du site internet, mise en place d’agenda connecté et développement du référencement naturel sur Google.\n\nNos formules flexibles avec paiements mensuels permettent à n’importe quelle PME de s'offrir les talents d’experts dans le domaine!\n\nEn images, voici ce que nous pouvons réaliser pour {{companyName}}:\n\n\nEst-ce qu’un peu plus de contexte par téléphone vous intéresse?\n\nBelle journée espérons ensoleillée, \n\n{{signature}}"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "5 days after the last message",
        "subject": "discussion avec {{colleaguename1}} ou {{colleaguename2}}",
        "content": "Bonjour {{firstName}},\n\nEst-il préférable de contacter vos collègues {{ColleagueName1}} ou {{ColleagueName2}} au sujet de notre proposition pour mieux rentabiliser votre site internet?\n\nVotre emploi du temps est certainement chargé, mais j’imagine que générer plus de trafic et plus de revenus via votre site internet reste d’actualité pour {{companyName}}.\n\nUne excellente journée à toute l’équipe,\n\nPS: Notre {{productname}} et abonnements modulables pourront s'aligner sur tous les budgets!\n{{signature}}"
      },
      {
        "number": 5,
        "type": "Cold Call",
        "timing": "5 days after the last message",
        "subject": null,
        "content": "Call 1 - Book a meeting\nDate sent: 5 days after the last message\nCaller: {{salesRep}}\nContent/Script:\n“Bonjour {{Gender}} {{LastName}} OR {{FirstName}}, c’est {{salesRep}} de l’entreprise {{clientCompanyName}}. Je vous ai envoyé un mail la semaine passée concernant notre expertise marketing pour les cabinets vétérinaires. Cela vous dit quelque chose?”\nOR \n“Je vous contacte car vous êtes le gérant du cabinet {{companyName}} et j’aurais aimé discuter avec vous du potentiel de votre site internet afin de voir comment vous pourriez aider davantage d’animaux patients. Est-ce que vous auriez 2 petites minutes à m’accorder?”\n YES\n“Génial! En quelques mots, nous sommes une entreprise spécialisée dans l’accompagnement marketing et l’amélioration des sites internet pour les cabinets vétérinaires. Nous implémentons des outils tels qu’une prise de rendez-vous en ligne et un {{productname}} afin de vendre en ligne du matériel animalier ou de la nourriture. Est-ce que ce sont des choses auxquelles vous avez déjà pensé pour votre cabinet?”\nNotre objectif est d’offrir aux plus petites entités un service aussi performant et rentable que celui dont disposent les plus grandes entreprises. Nos formules {{productname}} et abonnements modulables permettent de satisfaire toute PME en fonction de ses objectifs et de son budget”\nDébut de la qualification. Le but est de récolter un max d’infos, puis d’attaquer et de chercher un meeting si les réponses sont positives.\nQualification:\nFaites-vous les gros ou les petits animaux ?\nOutre les soins généraux, avez-vous des spécialisations particulières,\nComme la dermatologie animale ?\nEst-ce que vous traitez les urgences et les gardes vétérinaires ?\nFaites-vous quelques ventes additionnelles ? Croquettes ?\nPratiquez-vous la chirurgie au sein du cabinet ?"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "0 jours après le dernier message",
        "subject": "same as before",
        "content": "Version A \n\nBonjour {{firstName}},\n\nJ’ai tenté de vous joindre aujourd’hui au {{phonenumbersequence}}.\n\nL’idée était de  vous présenter l’offre d’été que nous lançons cette semaine pour toutes les PME de {{province}}. Pourquoi ne pas profiter du calme de l’été pour refaire votre stratégie marketing et exploser les chiffres de fin d’année?\n\nPour ce faire, nous aimerions vous proposer un rendez-vous avec un de nos experts marketing. Le but sera de faire le bilan de santé de votre site internet et de vos réseaux sociaux.\n\nL’expert vous proposera différentes pistes d’amélioration et les classera pour vous par ordre de priorité. \n\nAucun contrat ni proposition Webforce ne sera envoyé à la suite de ce meeting. L’unique but étant de vous aider à y voir plus clair sur votre potentiel digital. \n\nVoici l'agenda d'un de nos experts, si cela vous parle (+5 ans d'expérience, quand même).\n\nBien cordialement,\n\nPS : Voici un petit café virtuel pour continuer votre journée :) !\n\n\n\n\n\nVersion B (different text in bold)\n\nBonjour {{firstName}},\n\nJ’ai tenté de vous joindre aujourd’hui au {{phonenumbersequence}}.\n\nL’idée était de  vous présenter l’offre d’été que nous lançons cette semaine pour toutes les PME de {{province}}. Pourquoi ne pas profiter du calme de l’été pour refaire votre stratégie marketing et exploser les chiffres de fin d’année?\n\nPour ce faire, nous aimerions vous proposer un rendez-vous avec un de nos experts marketing. Le but sera de faire le bilan de santé de votre site internet et de vos réseaux sociaux.\n\nL’expert vous proposera différentes pistes d’amélioration et les classera pour vous par ordre de priorité. \n\nAucun contrat ni proposition Webforce ne sera envoyé à la suite de ce meeting. L’unique but est de vous aider à y voir plus clair sur votre potentiel digital.\n\nVoici l'agenda d'un de nos experts, si cela vous parle (+5 ans d'expérience, quand même).\n\nBien cordialement,\n\nPS : Voici un petit café virtuel pour continuer votre journée :) !"
      },
      {
        "number": 8,
        "type": "Email",
        "timing": "7 days after the last message",
        "subject": null,
        "content": "Bonjour {{firstName}},\n\nIl est donc temps de nous dire au revoir.\n\nChez Webforce, nous valorisons le feedback afin de nous améliorer.\n\nSi vous avez quelques secondes, pourriez-vous me dire pourquoi vous ne souhaitez pas aller plus loin?\n\nJe n’ai absolument pas besoin de tout ce que vous me racontez, merci\nPas le bon moment mais potentiellement intéressé, rappelez-moi dans 3 mois svp\nC’est intéressant, mais pas sûr d’avoir tout compris. On s’appelle cette semaine?\nJe suis sur une île déserte et Rio ne répond plus\n\nEn espérant vous avoir diverti 🙂\n\nFabuleuse continuation à vous,\n\n\n\n{{signature}}"
      }
    ]
  },
  {
    "id": 28,
    "industry": "Employee Benefits / HR Services",
    "language": "FR",
    "metrics": {
      "sent": 795,
      "replied": 305,
      "repliedPct": 38.0,
      "interested": 41,
      "interestedPct": 5.0
    },
    "icp": "HR managers and equivalent, 10-100 staff",
    "durationDays": 27,
    "numTouches": 5,
    "channels": [
      "Email"
    ],
    "abTesting": null,
    "touches": [
      {
        "number": 1,
        "type": "LinkedIn",
        "timing": "The first day of the sequence",
        "subject": null,
        "content": "[Blank]\n\n---\n\n→ LinkedIn message (sent 1 day after the LinkedIn connection is accepted):\n\tVersion A (Client reference + Pain cost efficient + CTC)\n{% if lastName == blank %}Bonjour {{salutation}} {{firstName}}{% else %}Bonjour {{salutation}} {{lastName}} {% endif %}\nEn tant que membre de la commission paritaire 200, j'imagine que vos employés bénéficient déjà d'éco-chèques.\n{% if gender == \"Male\" %}Seriez-vous intéressé de découvrir les différences entre [ClientCompanyName]  et votre fournisseur actuel ?{% else %}Seriez-vous intéressée de découvrir les différences entre [ClientCompanyName] et votre fournisseur actuel ? {% endif %}\n\tVersion B (3 last novelties)\n{% if lastName == blank %}Bonjour {{salutation}} {{firstName}}{% else %}Bonjour {{salutation}} {{lastName}} {% endif %}\nVous avez peut-être reçu un e-mail de mon collègue {{salesRep}}  au sujet de nos 3 innovations de 2025, notamment notre nouvelle plateforme [ProductName] et celle concernant le budget de mobilité. \nLes employés peuvent maintenant profiter de toutes nos promotions même sans utiliser de chèques [ClientCompanyName].\n\n---\n\n→ LinkedIn message (sent 5 days after the previous message):\n\nComme vous le savez peut-être, l’Arizona a confirmé sa volonté d’augmenter la valeur des chèques repas à 10 puis 12€. \n\nNous sommes les seuls du marché a proposé un coût fixe par employé pour nos chèques. \n\nConséquence ? L’augmentation de la valeur faciale n’impliquera aucune augmentation de vos frais chez[ClientCompanyName].\n\nEst-ce un bon moment pour comparer nos offres ?\n\n---\n\n→ Message LinkedIn (sent 7 days later) - Colleague name\n\n{% if Colleaguename1 == blank %}Ou devrais-je plutôt m'adresser à une autre personne peut-être ?{% else %}Ou devrais-je plutôt m'adresser à une autre personne peut-être ?\nD’après mes recherches sur LinkedIn cela pourrait être {{Colleaguename1}}.{% endif %}\n{% if colleaguename2 == blank %}{% else %}Ou bien {{colleaguename2}} peut-être ?{%endif %}\n\n---\n\n→ Message LinkedIn (sent 7 days later) - Good bye\n\n{% if gender == “Male” %}Je vous ai contacté à plusieurs reprises et je ne veux pas continuer à vous écrire si l’optimisation de vos coûts n’est pas une priorité pour l'instant.{% else %}Je vous ai contactée à plusieurs reprises et je ne veux pas continuer à vous écrire si l’optimisation de vos coûts n’est pas une priorité pour l’instant.{% endif %}\n\nSerait-il judicieux de se recontacter dans quelques mois ?"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "when the entire lead generation is ready",
        "subject": "Version A: {{companyName}} et[ClientCompanyName]?",
        "content": "Version A (Client reference + Pain + CTC)\nBonjour {{salutation}} {{lastName}},\n\n70’000 sociétés et leurs employés font appel à [ClientCompanyName] pour optimiser leurs avantages extralégaux.\n\n{% spin %}{% variation %}Sans amélioration des avantages actuels, les entreprises risquent de perdre leurs talents au profit d’acteurs qui investissent plus dans le bien-être dans leurs employés.{% variation %}Vous le savez sans doute, investir dans le bien-être des collaborateurs est essentiel pour attirer et fidéliser les talents. {% variation %}On observe que les entreprises qui valorisent le bien-être de leurs équipes se démarquent de plus en plus sur le marché du travail. {% endspin %}\n\nProposez-vous déjà des chèques-repas, cadeaux et éco-chèques ?\n\nBien cordialement,\n\nP.S. : Je peux vous envoyer une vidéo qui reprend nos [ProductName]  si vous voulez\n\n{{signature}}\nunsubscribe\n\nVersion B (old school - very direct)\n\n{% if lastName == blank %}Bonjour {{salutation}} {{firstName}}{% else %}Bonjour {{salutation}} {{lastName}} {% endif %}\n\nEn étant membre de la commission paritaire 200, j'imagine que vos employés bénéficient déjà d'éco-chèques.\n\nEn plus de notre rapport qualité prix imbattable, nous venons de sortir notre plateforme [ProductName] qui permet à vos employés de profiter de toutes nos promotions, même sans utiliser la carte [ClientCompanyName].\n\n{% if gender == \"Male\" %}Seriez-vous intéressé de prendre 15 minutes et comparer nos offres ?{% else %}Seriez-vous intéressée de prendre 15 minutes et comparer nos offres ? {% endif %}\n\nBien cordialement,\n\nP.S. : Je peux vous envoyer une vidéo qui reprend nos [ProductName] si vous voulez\n\n{{signature}}\nUnsubscribe link"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "5 days after the last message",
        "subject": "same as before",
        "content": "Version A\nBonjour {{salutation}} {{lastName}},\n\n{% spin %}{% variation %}Mon premier mail n’a malheureusement pas fait 🪰, vous offrez donc peut-être déjà des chèques repas à vos employés ? {% variation %}N’ayant pas eu de retour à mon premier mail, je suppose que vous proposez déjà des chèques-repas à vos employés ? {% variation %}Sans réponse à mon premier mail, j’imagine que vous offrez déjà des chèques-repas à vos employés ?{% endspin %} \n\nJ’aimerais vous montrer une courte vidéo (1’13) qui présente nos [ProductName].\n\nPeut-être que l’une d’elles, notamment sur le budget mobilité, est pertinente pour vous ?\n\nVIDEO SENDSPARK type https://sendspark.com/ \n\t\nQu'en avez-vous pensé ?\n\nAu plaisir d'avoir votre retour,\n\n{% if gender == “Male” %}P.S. : Si vous êtes déjà pleinement satisfait de votre partenaire actuel, n’hésitez pas à me le faire savoir 🙂{% else %}P.S. : Si vous êtes déjà pleinement satisfaite de votre partenaire actuel, n’hésitez pas à me le faire savoir 🙂{% endif %}\n\n{{signature}}\nunsubscribe\n\n\nVersion B\n\n{% if lastName == blank %}Bonjour {{salutation}} {{firstName}}{% else %}Bonjour {{salutation}} {{lastName}} {% endif %}\n\nComme vous le savez, tous les membres de la commission paritaire sont tenus de proposer des éco-chèques à leurs employés. \n\nJe me demandais donc si vous offriez déjà d'autres avantages ?\n\nAu plaisir d'avoir votre retour,\n\n{% if gender == \"Male\" %}P.S. : Si vous êtes déjà pleinement satisfait de votre partenaire actuel, n’hésitez pas à me le faire savoir 🙂{% else %}P.S. : Si vous êtes déjà pleinement satisfaite de votre partenaire actuel, n’hésitez pas à me le faire savoir 🙂{% endif %}"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "6 days after the last message",
        "subject": "{% if colleaguename1 == blank %}discussion avec autre collègue ?{% else %}discussion avec {{colleaguename1}} ?{% endif %}{% if colleaguename2 == blank %}{% else %} Ou {{colleaguename2}} ?{% endif %}",
        "content": "Bonjour {{salutation}} {{lastName}},\n\n{% spin %}{% variation %}Vous avez certainement un emploi du temps très chargé. {% variation %}Je me doute que votre emploi du temps est bien rempli. {% variation %}J’imagine que vous avez beaucoup à gérer au quotidien. {% endspin %} \n\n{% if colleaguename1 == blank %}Est-ce que je devrais plutôt contacter un.e autre collègue concernant nos[ProductName] ?{% else %}Est-ce que je devrais plutôt contacter votre collègue {{colleaguename1}} concernant nos[ProductName] ?{% endif %}{% if colleaguename2 == blank %}{% else %}Ou peut-être {{colleaguename2}} ?{% endif %}\n\nMerci d'avance pour votre aide,\n{{signature}}\nUnsubscribe link \n\n\n\n\n\n\nObjection management\nOn n’a pas de chèques et on ne veut pas en donner\nMerci de votre réponse. J’en prends bien note. \nPouvez-vous juste m’expliquer pourquoi faites-vous ce choix? Cela nous aidera grandement pour nos prochains développements 🙂\nSi néanmoins vous souhaitez donner quelque chose en plus à vos collaborateurs en cette fin d’année, il est toujours possible d’opter pour la solution éco-chèques et chèques-cadeaux, qui représente au maximum un pouvoir d’achat supplémentaire de[ProductName].\nBien cordialement,\n\n{{signature}}\n\nOn est heureux avec notre fournisseur actuel\nMerci de votre réponse. J’en prends bien note. \nEn tant que dernier arrivant sur le marché, 90% de nos clients sont des anciens clients historiques d’{{client_ref}}\nAucune entreprise (même celles qui n’ont pas signé) a regretté de prendre ces 15 minutes afin de comparer nos services. C’est toujours pertinent de se tenir au courant des nouvelles innovations du marché 🙂\nQu’en pensez-vous?\nBien cordialement,\n\n{{signature}}"
      },
      {
        "number": 5,
        "type": "Email",
        "timing": "6 days after the last message",
        "subject": "{{firstName}}, appel manqué",
        "content": "Bonjour {{salutation}} {{lastName}},\n\n{% if phone== blank %}J’ai tenté de vous joindre sur votre téléphone aujourd’hui afin de vous présenter notre toute dernière nouveauté, le plan cafétéria ainsi que le budget mobilité.{% else %}J’ai tenté de vous joindre au {{phone}} afin de vous présenter notre toute dernière nouveauté, le plan cafétéria ainsi que le budget mobilité. {% endif %}\n\nSi vous commencez avec nous ce mois-ci c’est :\n\n\n\n\n\nAvez-vous déjà implémenté ces deux avantages au sein de votre entreprise ?\n\nBien cordialement,\n\nPS : Voici un petit café virtuel pour continuer votre journée 😀\n\n\n\n{{signature}}\nUnsubscribe link"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "7 days after the last message",
        "subject": "ce sera mon dernier mail, bonne continuation 🙂",
        "content": "Version A (FUN)\nBonjour {{salutation}} {{lastName}},\n{% spin %}{% variation %}C'est donc le moment de se dire au revoir 😢{% variation %}Il est donc temps de se dire au revoir 😢{% variation %}C'est donc l'heure de nous dire au revoir 😢{% endspin %}\n{% spin %}{% variation %}Chez [ClientCompanyName], nous sommes très friands de feedback afin de nous améliorer.\nSi vous avez 5 petites secondes, pourriez-vous m'indiquer pourquoi vous préférez en rester là ? Nous avons besoin que d’une seule lettre! {% variation %}Chez [ClientCompanyName], nous apprécions chaque retour pour nous améliorer.\nSi vous avez 5 secondes, pourriez-vous m'indiquer pourquoi vous préférez en rester là ? Une seule lettre suffit ! {% variation %}Chez [ClientCompanyName], chaque retour nous aide à progresser.\nEn 5 secondes, pourriez-vous me dire en une lettre pourquoi vous préférez ne pas donner suite ? 😊 {% endspin %}\n    A. \"Non merci, absolument pas besoin\"\n    B. \"Pas le bon moment, un petit mail dans 3 mois ?\"\n    C. \"Intéressant, mais j’ai besoin de plus d’infos... On s'appelle semaine prochaine ?\"\n    D. \"J’ai atterri sur une île déserte et Rio ne répond plus ! 🏝️\"\nEn tout cas, j'espère vous avoir fait sourire🙂\nExcellente continuation à toute votre équipe,\n\n{{signature}}\nUnsubscribe link \n\nVersion B  (No fun, 3 months later relaunch?)\n\nBonjour {{salutation}} {{lastName}},\t\n\n{% if gender == “Male” %}Je vous ai contacté à plusieurs reprises et je ne veux pas continuer à vous écrire si l’optimisation de vos coûts n’est pas une priorité pour l'instant.{% else %}Je vous ai contactée à plusieurs reprises et je ne veux pas continuer à vous écrire si l’optimisation de vos coûts n’est pas une priorité pour l’instant.{% endif %}\n\nSerait-il judicieux de se recontacter dans quelques mois ?\n\nBien cordialement,\n{{signature}}\nUnsubscribe link"
      },
      {
        "number": 7,
        "type": "Cold Call",
        "timing": "N/A",
        "subject": null,
        "content": "Call - OPTIONAL\n\nObjections management:\nVous me confirmez que dans nos commissions paritaires on peut remplacer la Prime de Fin d'année par ce plan cafetaria (CP200 & CP 207)\nMalheureusement non, la commission paritaire 207 ne permet pas de convertir la primer de fin d’année par le plan cafétaria"
      }
    ]
  },
  {
    "id": 29,
    "industry": "Supply Chain / Logistics Technology",
    "language": "EN",
    "metrics": {
      "sent": 696,
      "replied": 87,
      "repliedPct": 13.0,
      "interested": 20,
      "interestedPct": 3.0
    },
    "icp": "N/A",
    "durationDays": 30,
    "numTouches": 5,
    "channels": [
      "Email"
    ],
    "abTesting": null,
    "touches": [
      {
        "number": 1,
        "type": "LinkedIn",
        "timing": "The first day of the sequence",
        "subject": null,
        "content": "LinkedIn connection request\nDate sent: The first day of the sequence\nSenders: client’s LinkedIn profile\nContent: Keep blank to get around the limit of 5 personalized LinkedIn connections per day per profile\n\n---\n\n→ LinkedIn message(sent 1 day after the LinkedIn connection is accepted) - 59 words:\nHello {{firstName}},\nYou may have received an email from our VP Sales, {{salesRep}}, or her colleague {{salesRep2}} regarding our solution for optimizing your logistics operations.\nLet me know if you have had a chance to review it or if you’d like a quick overview.\n\n---\n\n→ LinkedIn message(sent 5 day after the previous message):\nWould you be open to a quick call this week to explore if there’s a fit?\n\n---\n\n→ LinkedIn message(sent 6 day after the previous message):\n?\n\n---\n\n→ Message LinkedIn (sent 7 days later) - Colleague name\nLast message I promise! 🙂\n{% if colleaguename1 == blank %}Would it make sense to speak with someone else at your company who handles delivery management?{% else %}Would it make sense to reach out to your colleague {{colleaguename1}} regarding our last-mile delivery platform?{% endif %}{% if colleaguename2 == blank %}{% else %}Or maybe {{colleaguename2}}?{% endif %}"
      },
      {
        "number": 2,
        "type": "Email",
        "timing": "when the entire lead generation is ready",
        "subject": "Version A: Your delivery operations?",
        "content": "Hi {{firstName}},\n\nWe’ve built a last-mile delivery management platform tailored for companies like yours that handle thousands of deliveries annually.\n\nMajor players like [ClientCostumer] use [ClientCompanyName] to reduce delivery costs, improve customer experience, and reduce route planning time by 35%.\n\nThey all saw a 35% drop in customer complaints! \n\nAre you currently using a tool to help you manage your delivery? Or something entirely in-house.\n\nRegards,\n\n{{signature}}\nUnsubscribe"
      },
      {
        "number": 3,
        "type": "Email",
        "timing": "6 days after the last message",
        "subject": "A/ why [ClientCustomer] trusts us for their deliveries",
        "content": "Hi {{firstName}},\n\nI’m reaching out because companies like {{client_ref}} came to us facing challenges like high delivery costs, low first-attempt delivery rates, and rising customer complaints — all of which hurt satisfaction and growth.\n\nAfter implementing  [ClientCompanyName], they saw a 30% drop in complaints and improved on-time deliveries by 15%.\n\nWould you be the right person to discuss how we could do the same for {{companyName}}?\n\nLooking forward to your thoughts.\n\nP.S. Let me know if your current tools already meet your needs.\n\n{{signature}}\nUnsubscribe"
      },
      {
        "number": 4,
        "type": "Email",
        "timing": "5 days after the last message",
        "subject": "{% if colleaguename2 == blank %}discussion with {{colleaguename}} ?{% else %}discussion with {{colleaguename}} or {{colleaguename2}}?{% endif %}",
        "content": "Hi {{firstName}},\n\n{% if colleaguename1 == blank %}I know you have a busy schedule—would it be more relevant for me to contact another colleague regarding our last-mile delivery platform?{% else %}I know you have a busy schedule—would it be more relevant for me to contact your colleague {{colleaguename1} regarding our last-mile delivery platform?{% endif %}{% if colleaguename2 == blank %}{% else %}Or maybe {{colleaguename2}}?{% endif %}\n\nThanks in advance for your help.\n{{signature}}\nUnsubscribe link"
      },
      {
        "number": 5,
        "type": "Cold Call",
        "timing": "6 days after the last message",
        "subject": null,
        "content": "Calling 1 - Double attempts + Voice message\nDate sent: 6 days after the last message\nSender: {{salesRep}}’s emails\n\n\nObjection management (will be built throughout the sequence)\nTBD"
      },
      {
        "number": 6,
        "type": "Email",
        "timing": "Directly after the last call",
        "subject": "{{firstName}}, I’m the [PhoneNumber]",
        "content": "Hello {{firstName}},\n\n{% if phone == blank %}I tried calling you today to discuss how we could calculate your ROI with and without [ClientCompanyName].{% else %}I tried contacting you at {{phone}} to discuss how we could calculate your ROI with and without [ClientCompanyName].{% endif %}\n\n{% spin %}{% variation %}This will take no more than 30 minutes and comes with no commitment.\n\nAt worst, you confirm that your current process is already optimal, and at best, you gain insight into a new, valuable alternative.{% variation %}In just 30 minutes, you can either confirm that your current process is running smoothly or explore a solution that could further optimize it.{% variation %}In less than 30 minutes, you’ll have the opportunity to validate that your process is already fully optimized or discover a potential improvement.{% endspin %}\n\nWhat do you think?\n\nBest regards,\n\nP.S.: Here’s a little virtual coffee to brighten up your day 😀\n\n\n\n{{signature}}\nUnsubscribe link"
      },
      {
        "number": 7,
        "type": "Email",
        "timing": "Directly after the last call",
        "subject": "This will be my last email—wishing you all the best moving forward. 🙂",
        "content": "Hello {{firstName}},\n{% spin %}{% variation %}So, it’s time to say goodbye 😢{% variation %}Looks like this is where we part ways 😢{% variation %}It’s time for us to say farewell 😢{% endspin %}\n {% spin %}{% variation %}At [ClientCompanyName] , we highly value feedback to keep improving.\nIf you have just 5 seconds, please let me know why you’d prefer to leave it here? You only need to reply with a single letter!{% variation %}At [ClientCompanyName], we genuinely appreciate any feedback to help us improve.\nIf you have 5 seconds, please share why you’d instead not move forward? Just one letter will do!{% variation %}At [ClientCompanyName], every piece of feedback helps us grow.\nIn just 5 seconds, could you tell me, with one letter, why you'd prefer not to continue? 😊{% endspin %}\nA. \"No thanks, absolutely no need.\"\nB. \"Not the right time; maybe a follow-up email in 3 months?\"\nC. \"Interesting, but I need more details… Shall we schedule a call next week?\"\nD. \"I’ve landed on a deserted island, and no one is answering! 🏝️\"\nEither way, I hope our emails brought you a smile 🙂\nI wish you and your team all the best moving forward!\n\n{{signature}}\nUnsubscribe link"
      }
    ]
  }
];