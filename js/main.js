const DESCRIPTIONS = [
  'Утро',
  'Дождик',
  'Котик',
  'Солнышко',
  'Машинка',
  'Девочка'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Anna',
  'Igor',
  'Mary',
  'Katy'
];

const MIN_COMMENTS_ID = 1;
const MAX_COMMENTS_ID = 10000;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getComment = () => {
  return {
    id: getRandomInteger(MIN_COMMENTS_ID, MAX_COMMENTS_ID),
    avatar: 'img/avatar-' + getRandomInteger(MIN_AVATAR, MAX_AVATAR) + '.svg',
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  }
};

const getComments = () => {
  const comments = [];
  const commentsCount = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
  for (let k = 1; k <= commentsCount; k++) {
    comments.push(getComment());
  }
  return comments;
};

const getPhoto = (index) => {
  return ({
    id: index,
    url: 'photos/' + index + '.jpg',
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: getComments(),
  })
};

const getPhotos = () => {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push(getPhoto(i));
  }
  return photos;
};

console.log(getPhotos())