// eslint-disable-next-line no-extend-native
const addDays = (date, days) => {
  date.setDate(date.getDate() + days);
  return date;
};

const getNewDate = data => {
  const date = new Date(data);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const newDate = new Date();
  newDate.setHours(hours);
  newDate.setMinutes(minutes);
  return newDate;
};

const schedules = [
  {
    activity_id: 1,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 1,
    start: getNewDate('2017-11-13T00:30:00.000Z'),
    end: getNewDate('2017-11-13T02:00:00.000Z'),
    activity_title: "How we'll earn money in a future without jobs",
    activity_description:
      'Machines that can think, learn and adapt are coming -- and that could mean that we humans will end up with significant unemployment. What should we do about it? In a straightforward talk about a controversial idea, futurist Martin Ford makes the case for separating income from traditional work and instituting a universal basic income.',
    room_name: 'P101',
    room_seats: 20,
  },
  {
    activity_id: 2,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 3,
    start: getNewDate('2017-11-13T02:30:00.000Z'),
    end: getNewDate('2017-11-13T04:00:00.000Z'),
    activity_title: "Why jobs of the future won't feel like work",
    activity_description:
      'We\'ve all heard that robots are going to take our jobs -- but what can we do about it? Innovation expert David Lee says that we should start designing jobs that unlock our hidden talents and passions -- the things we spend our weekends doing -- to keep us relevant in the age of robotics. \\"Start asking people what problems they\'re inspired to solve and what talents they want to bring to work,\\" Lee says. \\"When you invite people to be more, they can amaze us with how much more they can be.\\"',
    room_name: 'P201',
    room_seats: 30,
  },
  {
    activity_id: 3,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 3,
    start: getNewDate('2017-11-13T06:30:00.000Z'),
    end: getNewDate('2017-11-13T08:00:00.000Z'),
    activity_title:
      'Future tech will give you the benefits of city life anywhere',
    activity_description:
      "Don't believe predictions that say the future is trending towards city living. Urbanization is actually reaching the end of its cycle, says logistics expert Julio Gil, and soon more people will be choosing to live (and work) in the countryside, thanks to rapid advances in augmented reality, autonomous delivery, off-the-grid energy and other technologies. Think outside city walls and consider the advantages of country living with this forward-thinking talk.",
    room_name: 'P201',
    room_seats: 30,
  },
  {
    activity_id: 4,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 1,
    start: getNewDate('2017-11-13T08:30:00.000Z'),
    end: getNewDate('2017-11-13T10:00:00.000Z'),
    activity_title: 'Would you live in a floating city in the sky?',
    activity_description:
      'In a mind-bending talk that blurs the line between science and art, Tomás Saraceno exhibits a series of air-inspired sculptures and installations designed to usher in a new era of sustainability, the \\"Aerocene.\\" From giant, cloud-like playgrounds suspended 22 meters in the air to a balloon sculpture that travels the world without burning a single drop of fossil fuel, Saraceno\'s work invites us to explore the bounds of our fragile human and terrestrial ecosystems. (In Spanish with English subtitles.)',
    room_name: 'P101',
    room_seats: 20,
  },
  {
    activity_id: 5,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 3,
    start: addDays(getNewDate('2017-11-14T00:30:00.000Z'), 1),
    end: addDays(getNewDate('2017-11-14T02:00:00.000Z'), 1),
    activity_title: "Don't fear intelligent machines. Work with them",
    activity_description:
      'We must face our fears if we want to get the most out of technology -- and we must conquer those fears if we want to get the best out of humanity, says Garry Kasparov. One of the greatest chess players in history, Kasparov lost a memorable match to IBM supercomputer Deep Blue in 1997. Now he shares his vision for a future where intelligent machines help us turn our grandest dreams into reality.',
    room_name: 'P201',
    room_seats: 30,
  },
  {
    activity_id: 6,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 1,
    start: addDays(getNewDate('2017-11-14T02:30:00.000Z'), 1),
    end: addDays(getNewDate('2017-11-14T04:00:00.000Z'), 1),
    activity_title: 'How I built a jet suit',
    activity_description:
      "We've all dreamed of flying -- but for Richard Browning, flight is an obsession. He's built an Iron Man-like suit that leans on an elegant collaboration of mind, body and technology, bringing science fiction dreams a little closer to reality. Learn more about the trial and error process behind his invention and take flight with Browning in an unforgettable demo.",
    room_name: 'P101',
    room_seats: 20,
  },
  {
    activity_id: 7,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 1,
    start: addDays(getNewDate('2017-11-14T06:30:00.000Z'), 1),
    end: addDays(getNewDate('2017-11-14T08:00:00.000Z'), 1),
    activity_title: 'Why the only future worth building includes everyone',
    activity_description:
      'A single individual is enough for hope to exist, and that individual can be you, says His Holiness Pope Francis in this searing TED Talk delivered directly from Vatican City. In a hopeful message to people of all faiths, to those who have power as well as those who don\'t, the spiritual leader provides illuminating commentary on the world as we currently find it and calls for equality, solidarity and tenderness to prevail. \\"Let us help each other, all together, to remember that the \'other\' is not a statistic, or a number,\\" he says. \\"We all need each other.\\"',
    room_name: 'P101',
    room_seats: 20,
  },
  {
    activity_id: 8,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 5,
    start: addDays(getNewDate('2017-11-13T04:30:00.000Z'), 0),
    end: addDays(getNewDate('2017-11-13T06:00:00.000Z'), 0),
    activity_title: 'Have a lunch and take a break',
    activity_description: ' ',
    room_name: 'P301',
    room_seats: 30,
  },
  {
    activity_id: 8,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 5,
    start: addDays(getNewDate('2017-11-14T04:30:00.000Z'), 1),
    end: addDays(getNewDate('2017-11-14T06:00:00.000Z'), 1),
    activity_title: 'Have a lunch and take a break',
    activity_description: ' ',
    room_name: 'P301',
    room_seats: 30,
  },
  {
    activity_id: 8,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 5,
    start: addDays(getNewDate('2017-11-15T04:30:00.000Z'), 2),
    end: addDays(getNewDate('2017-11-15T06:00:00.000Z'), 2),
    activity_title: 'Have a lunch and take a break',
    activity_description: ' ',
    room_name: 'P301',
    room_seats: 30,
  },
  {
    activity_id: 9,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 3,
    start: addDays(getNewDate('2017-11-14T08:30:00.000Z'), 1),
    end: addDays(getNewDate('2017-11-14T10:00:00.000Z'), 1),
    activity_title: "Let's help refugees thrive, not just survive",
    activity_description:
      "Today's refugee crisis is the biggest since World War II, and it's growing. When this talk was given, 50 million people had been forcefully displaced from their homes by conflict and war; now the number is 65.3 million. There were 3 million Syrian refugees in 2014; now there are 4.9 million. Inside this overwhelming crisis are the individual human stories -- of care, growth and family, in the face of lost education, lost home, lost future. Melissa Fleming of the UN's refugee agency tells the refugees' stories -- and asks us to help them rebuild their world.",
    room_name: 'P201',
    room_seats: 30,
  },
  {
    activity_id: 10,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 5,
    start: addDays(getNewDate('2017-11-13T10:30:00.000Z'), 0),
    end: addDays(getNewDate('2017-11-13T11:30:00.000Z'), 0),
    activity_title: 'Tea Break',
    activity_description: ' ',
    room_name: 'P301',
    room_seats: 30,
  },
  {
    activity_id: 10,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 5,
    start: addDays(getNewDate('2017-11-13T10:30:00.000Z'), 1),
    end: addDays(getNewDate('2017-11-13T11:30:00.000Z'), 1),
    activity_title: 'Tea Break',
    activity_description: ' ',
    room_name: 'P301',
    room_seats: 30,
  },
  {
    activity_id: 11,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 3,
    start: addDays(getNewDate('2017-11-13T00:30:00.000Z'), 0),
    end: addDays(getNewDate('2017-11-13T02:00:00.000Z'), 0),
    activity_title: 'The refugee crisis is a test of our character',
    activity_description:
      "Sixty-five million people were displaced from their homes by conflict and disaster in 2016. It's not just a crisis; it's a test of who we are and what we stand for, says David Miliband -- and each of us has a personal responsibility to help solve it. In this must-watch talk, Miliband gives us specific, tangible ways to help refugees and turn empathy and altruism into action.",
    room_name: 'P201',
    room_seats: 30,
  },
  {
    activity_id: 12,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 3,
    start: addDays(getNewDate('2017-11-15T00:30:00.000Z'), 2),
    end: addDays(getNewDate('2017-11-15T02:00:00.000Z'), 2),
    activity_title:
      'A boat carrying 500 refugees sunk at sea. The story of two survivors',
    activity_description:
      "Aboard an overloaded ship carrying more than 500 refugees, a young woman becomes an unlikely hero. This single, powerful story, told by Melissa Fleming of the UN's refugee agency, gives a human face to the sheer numbers of human beings trying to escape to better lives ... as the refugee ships keep coming ...",
    room_name: 'P201',
    room_seats: 30,
  },
  {
    activity_id: 13,
    room_status: 'on',
    activity_status: 'on',
    conference_id: 1,
    room_id: 1,
    start: addDays(getNewDate('2017-11-15T02:30:00.000Z'), 2),
    end: addDays(getNewDate('2017-11-15T04:00:00.000Z'), 2),
    activity_title: "Our refugee system is failing. Here's how we can fix it",
    activity_description:
      'A million refugees arrived in Europe this year, says Alexander Betts, and \\"our response, frankly, has been pathetic.\\" Betts studies forced migration, the impossible choice for families between the camps, urban poverty and dangerous illegal journeys to safety. In this insightful talk, he offers four ways to change the way we treat refugees, so they can make an immediate contribution to their new homes. \\"There\'s nothing inevitable about refugees being a cost,\\" Betts says. \\"They\'re human beings with skills, talents, aspirations, with the ability to make contributions -- if we let them.\\"',
    room_name: 'P101',
    room_seats: 20,
  },
];

module.exports = schedules;
