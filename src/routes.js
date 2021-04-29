import about from './components/about/routes';
import programmes from './components/programmes/routes';
import signin from './components/signin/routes';
import signup from './components/signup/routes';

export default [
  ...about,
  ...programmes,
  ...signin,
  ...signup,
];