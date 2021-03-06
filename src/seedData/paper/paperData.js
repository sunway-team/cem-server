const faker = require('faker');
const paperStatus = require('../paper/paperStatusData');

// eslint-disable-next-line
const tempPapers = conference_id => [
  {
    // id 01
    status: paperStatus[0].name,
    paper_status_id: 1,
    conference_id,
    file: '72c891c0-39ae-11e8-af3f-0d8a8ca7032a.pdf',
    title: 'Information Technologies (ITs) in Medical Education',
    keywords:
      'medicine, education, information technologies, distance learning',
    abstract:
      'Advances in medicine in recent decades are in significant correlation with the advances in the information technology. Modern information technologies (IT) have enabled faster, more reliable and comprehensive data collection. These technologies have started to create a large number of irrelevant information, which represents a limiting factor and a real growing gap, between the medical knowledge on one hand, and the ability of doctors to follow its growth on the other. Furthermore, in our environment, the term technology is generally reserved for its technical component. Education means, learning, teaching, or the process of acquiring skills or behavior modification through various exercises. Traditionally, medical education meant the oral, practical and more passive transferring of knowledge and skills from the educators to students and health professionals. For the clinical disciplines, of special importance are the principles, such as, “learning at bedside,” aided by the medical literature. In doing so, these techniques enable students to contact with their teachers, and to refer to the appropriate literature. The disadvantage of these educational methods is in the fact, that teachers often do not have enough time. Additionally they are not very convenient to the horizontal and vertical integration of teaching, create weak or almost no self education, as well as, low skill levels and poor integration of education with a real social environment. In this paper authors describe application of modern IT in medical education – their advantages and disadvantages comparing with traditional ways of education',
  },

  // id 02
  {
    status: paperStatus[0].name,
    paper_status_id: 1,
    conference_id,
    file: '72c891c0-39ae-11e8-af3f-0d8a8ca7032a.pdf',
    title:
      'The value of plants used in traditional medicine for drug discovery',
    keywords:
      'medicine, education, information technologies, distance learning',
    abstract:
      'In this review we describe and discuss several approaches to selecting higher plants as candidates for drug development with the greatest possibility of success. We emphasize the role of information derived from various systems of traditional medicine (ethnomedicine) and its utility for drug discovery purposes. We have identified 122 compounds of defined structure, obtained from only 94 species of plants, that are used globally as drugs and demonstrate that 80% of these have had an ethnomedical use identical or related to the current use of the active elements of the plant. We identify and discuss advantages and disadvantages of using plants as starting points for drug development, specifically those used in traditional medicine.',
  },

  // id 03
  {
    status: paperStatus[1].name,
    paper_status_id: 2,
    conference_id,
    file: '72c891c0-39ae-11e8-af3f-0d8a8ca7032a.pdf',
    title:
      'Mesenchymal stem cells: building blocks for molecular medicine in the 21st century',
    keywords:
      'medicine, education, information technologies, distance learning',
    abstract:
      'Mesenchymal stem sells (MSCs) are present in a variety of tissues during human development, and in adults they are prevalent in bone marrow. From that readily available source, MSCs can be isolated, expanded in culture, and stimulated to differentiate into bone, cartilage, muscle, marrow stroma, tendon, fat and a variety of other connective tissues. Because large numbers of MSCs can be generated in culture, tissue-engineered constructs principally composed of these cells could be re-introduced into the in vivosetting. This approach is now being explored to regenerate tissues that the body cannot naturally repair or regenerate when challenged. Moreover, MSCs can be transduced with retroviral and other vectors and are, thus, potential candidates to deliver somatic gene therapies for local or systemic pathologies. Untapped applications include both diagnostic and prognostic uses of MSCs and their descendents in healthcare management. Finally, by understanding the complex, multistep and multifactorial differentiation pathway from MSC to functional tissues, it might be possible to manipulate MSCs directly in vivo to cue the formation of elaborate, composite tissues in situ.',
  },

  // id 04
  {
    status: paperStatus[1].name,
    paper_status_id: 2,
    file: '72c891c0-39ae-11e8-af3f-0d8a8ca7032a.pdf',
    conference_id,
    keywords: faker.lorem.sentence(),
    title: 'Intelligent machines in Medicine to improve your health',
    abstract:
      'We must face our fears if we want to get the most out of technology -- and we must conquer those fears if we want to get the best out of humanity, says Garry Kasparov. One of the greatest chess players in history, Kasparov lost a memorable match to IBM supercomputer Deep Blue in 1997. Now he shares his vision for a future where intelligent machines help us turn our grandest dreams into reality.',
  },

  // id 05
  {
    status: paperStatus[2].name,
    paper_status_id: 3,
    file: '72c891c0-39ae-11e8-af3f-0d8a8ca7032a.pdf',
    conference_id,
    title: 'Business Intelligence and Analytics: From Big Data to Big Impact',
    keywords: 'business, intelligence, analytics, BI&A, MIS',
    abstract:
      'Business intelligence and analytics (BI&A) has emerged as an important area of study for both practitioners and researchers, reflecting the magnitude and impact of data-related problems to be solved in contemporary business organizations. This introduction to the MIS Quarterly Special Issue on Business Intelligence Research first provides a framework that identifles the evolution, applications, and emerging research areas of BI&A. BI& A 1.0, BI&A 2.0, and BI&A 3.0 are defined and described in terms of their key characteristics and capabilities. Current research in BI&A is analyzed and challenges and opportunities associated with BI&A research and education are identified. We also report a bibliometric study of critical BI&A publications, researchers, and research topics based on more than a decade of related academic and industry publications. Finally, the six articles that comprise this special issue are introduced and characterized in terms of the proposed BI&A research framework.',
  },

  // id 06
  {
    status: paperStatus[2].name,
    paper_status_id: 3,
    file: '72c891c0-39ae-11e8-af3f-0d8a8ca7032a.pdf',
    conference_id,
    keywords: 'technology, city, life, benefit',
    title: 'Future technology will give you the benefits of city life anywhere',
    abstract:
      "Don't believe predictions that say the future is trending towards city living. Urbanization is actually reaching the end of its cycle, says logistics expert Julio Gil, and soon more people will be choosing to live (and work) in the countryside, thanks to rapid advances in augmented reality, autonomous delivery, off-the-grid energy and other technologies. Think outside city walls and consider the advantages of country living with this forward-thinking talk.",
  },

  // id 07
  {
    status: paperStatus[3].name,
    paper_status_id: 4,
    conference_id,
    file: '72c891c0-39ae-11e8-af3f-0d8a8ca7032a.pdf',
    keywords: faker.lorem.sentence(),
    title: "Why jobs of the future won't feel like work",
    abstract:
      'We\'ve all heard that robots are going to take our jobs -- but what can we do about it? Innovation expert David Lee says that we should start designing jobs that unlock our hidden talents and passions -- the things we spend our weekends doing -- to keep us relevant in the age of robotics. \\"Start asking people what problems they\'re inspired to solve and what talents they want to bring to work,\\" Lee says. \\"When you invite people to be more, they can amaze us with how much more they can be.\\"',
  },
  // id 08
  {
    status: paperStatus[3].name,
    paper_status_id: 4,
    conference_id,
    file: '72c891c0-39ae-11e8-af3f-0d8a8ca7032a.pdf',
    keywords: faker.lorem.sentence(),
    title: 'Would you live in a floating city in the sky?',
    abstract:
      'In a mind-bending talk that blurs the line between science and art, Tomás Saraceno exhibits a series of air-inspired sculptures and installations designed to usher in a new era of sustainability, the \\"Aerocene.\\" From giant, cloud-like playgrounds suspended 22 meters in the air to a balloon sculpture that travels the world without burning a single drop of fossil fuel, Saraceno\'s work invites us to explore the bounds of our fragile human and terrestrial ecosystems. (In Spanish with English subtitles.)',
  },
  // id 09
  {
    status: paperStatus[4].name,
    paper_status_id: 5,
    conference_id,
    file: '72c891c0-39ae-11e8-af3f-0d8a8ca7032a.pdf',
    keywords: faker.lorem.sentence(),
    title: 'How I built a jet suit',
    abstract:
      "We've all dreamed of flying -- but for Richard Browning, flight is an obsession. He's built an Iron Man-like suit that leans on an elegant collaboration of mind, body and technology, bringing science fiction dreams a little closer to reality. Learn more about the trial and error process behind his invention and take flight with Browning in an unforgettable demo.",
  },
  // id 10
  {
    status: paperStatus[4].name,
    paper_status_id: 5,
    conference_id,
    file: '72c891c0-39ae-11e8-af3f-0d8a8ca7032a.pdf',
    keywords: faker.lorem.sentence(),
    title: 'Why the only future worth building includes everyone',
    abstract:
      'A single individual is enough for hope to exist, and that individual can be you, says His Holiness Pope Francis in this searing TED Talk delivered directly from Vatican City. In a hopeful message to people of all faiths, to those who have power as well as those who don\'t, the spiritual leader provides illuminating commentary on the world as we currently find it and calls for equality, solidarity and tenderness to prevail. \\"Let us help each other, all together, to remember that the \'other\' is not a statistic, or a number,\\" he says. \\"We all need each other.\\"',
  },
  // id 11
  {
    status: paperStatus[5].name,
    paper_status_id: 6,
    conference_id,
    file: '72c891c0-39ae-11e8-af3f-0d8a8ca7032a.pdf',
    keywords: faker.lorem.sentence(),
    title: 'What to know about cybercrime',
    abstract:
      "It's hard to protect yourself online if you don't know where to start. These insightful, info-packed talks offer a jumping off point.",
  },
  // id 12
  {
    status: paperStatus[7].name,
    paper_status_id: 8,
    conference_id,
    file: '72c891c0-39ae-11e8-af3f-0d8a8ca7032a.pdf',
    keywords: faker.lorem.sentence(),
    title: "Let's help refugees thrive, not just survive",
    abstract:
      "Today's refugee crisis is the biggest since World War II, and it's growing. When this talk was given, 50 million people had been forcefully displaced from their homes by conflict and war; now the number is 65.3 million. There were 3 million Syrian refugees in 20faker.random.number({min:1, max:8})4; now there are 4.9 million. Inside this overwhelming crisis are the individual human stories -- of care, growth and family, in the face of lost education, lost home, lost future. Melissa Fleming of the UN's refugee agency tells the refugees' stories -- and asks us to help them rebuild their world.",
  },
  // id 13
  {
    status: paperStatus[6].name,
    paper_status_id: 7,
    conference_id,
    file: '72c891c0-39ae-11e8-af3f-0d8a8ca7032a.pdf',
    keywords: faker.lorem.sentence(),
    title: 'What makes you happy?',
    abstract:
      'Everyone wants to be happy. But how, exactly, does one go about it? Here, psychologists, journalists, Buddhist monks and more gives answers that may surprise.',
  },
];

// const papers = [];

// for (let i = 1; i <= 20; i += 1) {
//   const conference_id=1;
//   const paperStatusId = faker.random.number({ min: 1, max: 8 });
//   papers.push({
//     status: paperStatus[paperStatusId - 1].name,
//     paper_status_id: paperStatusId,
//     conference_id,
//     file: 'dc15d070-39ae-11e8-8761-89ca331f67a1.pdf',
//     keywords: faker.lorem.sentence(),
//     title: faker.lorem.sentence(),
//     abstract: faker.lorem.sentences(),
//   });
// }

module.exports = tempPapers(1).concat(tempPapers(2));
