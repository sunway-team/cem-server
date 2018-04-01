const faker = require('faker');
const paperStatus = require('../paper/paperStatusData');

// eslint-disable-next-line
const tempPapers = conference_id => [
  {
    status: paperStatus[0].name,
    paper_status_id: 1,
    conference_id,
    title: "How we'll earn money in a future without jobs",
    keywords: faker.lorem.sentence(),
    abstract:
      'Machines that can think, learn and adapt are coming -- and that could mean that we humans will end up with significant unemployment. What should we do about it? In a straightforward talk about a controversial idea, futurist Martin Ford makes the case for separating income from traditional work and instituting a universal basic income.',
  },
  {
    status: paperStatus[1].name,
    paper_status_id: 2,
    conference_id,
    keywords: faker.lorem.sentence(),
    title: "Why jobs of the future won't feel like work",
    abstract:
      'We\'ve all heard that robots are going to take our jobs -- but what can we do about it? Innovation expert David Lee says that we should start designing jobs that unlock our hidden talents and passions -- the things we spend our weekends doing -- to keep us relevant in the age of robotics. \\"Start asking people what problems they\'re inspired to solve and what talents they want to bring to work,\\" Lee says. \\"When you invite people to be more, they can amaze us with how much more they can be.\\"',
  },
  {
    status: paperStatus[2].name,
    paper_status_id: 3,
    conference_id,
    keywords: faker.lorem.sentence(),
    title: 'Future tech will give you the benefits of city life anywhere',
    abstract:
      "Don't believe predictions that say the future is trending towards city living. Urbanization is actually reaching the end of its cycle, says logistics expert Julio Gil, and soon more people will be choosing to live (and work) in the countryside, thanks to rapid advances in augmented reality, autonomous delivery, off-the-grid energy and other technologies. Think outside city walls and consider the advantages of country living with this forward-thinking talk.",
  },
  {
    status: paperStatus[3].name,
    paper_status_id: 4,
    conference_id,
    keywords: faker.lorem.sentence(),
    title: 'Would you live in a floating city in the sky?',
    abstract:
      'In a mind-bending talk that blurs the line between science and art, Tomás Saraceno exhibits a series of air-inspired sculptures and installations designed to usher in a new era of sustainability, the \\"Aerocene.\\" From giant, cloud-like playgrounds suspended 22 meters in the air to a balloon sculpture that travels the world without burning a single drop of fossil fuel, Saraceno\'s work invites us to explore the bounds of our fragile human and terrestrial ecosystems. (In Spanish with English subtitles.)',
  },
  {
    status: paperStatus[4].name,
    paper_status_id: 5,
    conference_id,
    keywords: faker.lorem.sentence(),
    title: "Don't fear intelligent machines. Work with them",
    abstract:
      'We must face our fears if we want to get the most out of technology -- and we must conquer those fears if we want to get the best out of humanity, says Garry Kasparov. One of the greatest chess players in history, Kasparov lost a memorable match to IBM supercomputer Deep Blue in faker.random.number({min:1, max:8})997. Now he shares his vision for a future where intelligent machines help us turn our grandest dreams into reality.',
  },
  {
    status: paperStatus[5].name,
    paper_status_id: 6,
    conference_id,
    keywords: faker.lorem.sentence(),
    title: 'How I built a jet suit',
    abstract:
      "We've all dreamed of flying -- but for Richard Browning, flight is an obsession. He's built an Iron Man-like suit that leans on an elegant collaboration of mind, body and technology, bringing science fiction dreams a little closer to reality. Learn more about the trial and error process behind his invention and take flight with Browning in an unforgettable demo.",
  },
  {
    status: paperStatus[6].name,
    paper_status_id: 7,
    conference_id,
    keywords: faker.lorem.sentence(),
    title: 'Why the only future worth building includes everyone',
    abstract:
      'A single individual is enough for hope to exist, and that individual can be you, says His Holiness Pope Francis in this searing TED Talk delivered directly from Vatican City. In a hopeful message to people of all faiths, to those who have power as well as those who don\'t, the spiritual leader provides illuminating commentary on the world as we currently find it and calls for equality, solidarity and tenderness to prevail. \\"Let us help each other, all together, to remember that the \'other\' is not a statistic, or a number,\\" he says. \\"We all need each other.\\"',
  },
  {
    status: paperStatus[7].name,
    paper_status_id: 8,
    conference_id,
    keywords: faker.lorem.sentence(),
    title: 'What to know about cybercrime',
    abstract:
      "It's hard to protect yourself online if you don't know where to start. These insightful, info-packed talks offer a jumping off point.",
  },
  {
    status: paperStatus[0].name,
    paper_status_id: 1,
    conference_id,
    keywords: faker.lorem.sentence(),
    title: "Let's help refugees thrive, not just survive",
    abstract:
      "Today's refugee crisis is the biggest since World War II, and it's growing. When this talk was given, 50 million people had been forcefully displaced from their homes by conflict and war; now the number is 65.3 million. There were 3 million Syrian refugees in 20faker.random.number({min:1, max:8})4; now there are 4.9 million. Inside this overwhelming crisis are the individual human stories -- of care, growth and family, in the face of lost education, lost home, lost future. Melissa Fleming of the UN's refugee agency tells the refugees' stories -- and asks us to help them rebuild their world.",
  },
  {
    status: paperStatus[1].name,
    paper_status_id: 2,
    conference_id,
    keywords: faker.lorem.sentence(),
    title: 'What makes you happy?',
    abstract:
      'Everyone wants to be happy. But how, exactly, does one go about it? Here, psychologists, journalists, Buddhist monks and more gives answers that may surprise.',
  },
  {
    status: paperStatus[2].name,
    paper_status_id: 3,
    conference_id,
    keywords: faker.lorem.sentence(),
    title: 'The refugee crisis is a test of our character',
    abstract:
      "Sixty-five million people were displaced from their homes by conflict and disaster in 20faker.random.number({min:1, max:8})6. It's not just a crisis; it's a test of who we are and what we stand for, says David Miliband -- and each of us has a personal responsibility to help solve it. In this must-watch talk, Miliband gives us specific, tangible ways to help refugees and turn empathy and altruism into action.",
  },
  {
    status: paperStatus[3].name,
    paper_status_id: 4,
    conference_id,
    keywords: faker.lorem.sentence(),
    title: 'A boat carrying 500 refugees sunk at sea.',
    abstract:
      "Aboard an overloaded ship carrying more than 500 refugees, a young woman becomes an unlikely hero. This single, powerful story, told by Melissa Fleming of the UN's refugee agency, gives a human face to the sheer numbers of human beings trying to escape to better lives ... as the refugee ships keep coming ...",
  },
  {
    status: paperStatus[4].name,
    paper_status_id: 5,
    conference_id,
    keywords: faker.lorem.sentence(),
    title: "Our refugee system is failing. Here's how we can fix it",
    abstract:
      'A million refugees arrived in Europe this year, says Alexander Betts, and \\"our response, frankly, has been pathetic.\\" Betts studies forced migration, the impossible choice for families between the camps, urban poverty and dangerous illegal journeys to safety. In this insightful talk, he offers four ways to change the way we treat refugees, so they can make an immediate contribution to their new homes. \\"There\'s nothing inevitable about refugees being a cost,\\" Betts says. \\"They\'re human beings with skills, talents, aspirations, with the ability to make contributions -- if we let them.\\"',
  },
];

const papers = [];

for (let i = 1; i <= 20; i += 1) {
  const conference_id = 1;
  const paperStatusId = faker.random.number({ min: 1, max: 8 });
  papers.push({
    status: paperStatus[paperStatusId - 1].name,
    paper_status_id: paperStatusId,
    conference_id,
    keywords: faker.lorem.sentence(),
    title: faker.lorem.sentence(),
    abstract: faker.lorem.sentences(),
  });
}

module.exports = papers.concat(tempPapers(1));
