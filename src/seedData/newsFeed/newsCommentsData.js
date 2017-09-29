const faker = require('faker');

const newsComments = [
  {
    news_id: '1',
    user_id: '1',
    content: 'This is a company that is great to work for',
  },
  {
    news_id: '1',
    user_id: '2',
    content: 'There is a need to look at more than numbers',
  },
  {
    news_id: '2',
    user_id: '1',
    content: 'The physicality of warehouse work is a pro',
  },
  {
    news_id: '2',
    user_id: '2',
    content: 'Lashing out at associates should not be tolerated for any reason',
  },
  {
    news_id: '3',
    user_id: '1',
    content: 'This negativity has noticeably lowered morale',
  },
  {
    news_id: '3',
    user_id: '2',
    content: 'People get fatigued and frustrated when pushed in this fashion.',
  },
  {
    news_id: '3',
    user_id: '3',
    content:
      'Pushing people to their limits on speed for numbers has its downside.',
  },
  {
    news_id: '3',
    user_id: '4',
    content: 'There needs to be a well rounded look at production',
  },
];

for (let i = 0; i < 100; i += 1) {
  newsComments.push({
    news_id: faker.random.number({
      min: 1,
      max: 70,
    }),
    user_id: faker.random.arrayElement([1, 2, 3, 4]),
    content: faker.lorem.sentence(),
  });
}

module.exports = newsComments;
