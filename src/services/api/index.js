import jwt from 'jwt-simple';
import { articles, users } from './mock-data';

const SECRET = 'jquery_is_amazing';

export const fetchAllArticles = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([...articles]);
    }, 200);
  });
};

export const fetchArticleById = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      const article = articles.find(a => a.id === id);
      resolve(article);
    }, 200);
  });
};

export const fetchArticlesByCategory = category => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (category === 'all') resolve(articles);

      const data = articles.filter(a => a.category === category);
      resolve(data);
    }, 200);
  });
};

export const singUpWithEmailAndPassword = ({ name, email, password }) => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.email === email);

    setTimeout(() => {
      if (user) reject('User already exists!');

      const newUser = {
        name,
        email,
        password,
        token: jwt.encode(user.password, SECRET),
      };

      users.push(newUser);

      resolve({
        user: {
          name: newUser.name,
          email: newUser.email,
        },
        token: newUser.token,
      });
    }, 300);
  });
};

export const signInWithEmailAndPassword = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.email === email);

    setTimeout(() => {
      if (!user) {
        return reject('User does not exist!');
      }

      if (user.password !== password) {
        return reject('Invalid password!');
      }

      user.token = jwt.encode(user.password, SECRET);

      resolve({
        user: {
          name: user.name,
          email: user.email,
        },
        token: user.token,
      });
    }, 300);
  });
};
