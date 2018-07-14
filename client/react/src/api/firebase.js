import firebase from 'firebase';
import uuidv4 from 'uuid/v4';
import dayjs from 'dayjs';

import { USERS_COLLECTION, POSTS_COLLECTION, LATEST_POSTS_LIMIT } from '../config/Constants';

export const logoutFirebase = () => {
  firebase.auth().signOut();
};

export const loginWithFirebase = (email, password) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(data => {
      const response = {
        error: null,
        data,
      };
      return response;
    })
    .catch(error => {
      const response = {
        error,
        data: null,
      };
      return response;
    });

export const registerWithFirebase = (email, password) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(
      user => {
        const response = {
          error: null,
          data: user,
        };
        return response;
      },
      error => {
        const response = {
          error,
          data: null,
        };
        return response;
      }
    );

export const addUserProfileToFbase = data => {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });

  data.createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ms Z');
  data.updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ms Z');

  return db
    .collection(USERS_COLLECTION)
    .doc(data.id) // documentId is same as userId; firebase security rules
    .set(data)
    .then(() => {
      const response = {
        error: null,
        data,
      };
      return response;
    })
    .catch(error => {
      const response = {
        error,
        data: null,
      };
      return response;
    });
};

export const getUserProfileFromFbase = userId => {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });
  return db
    .collection(USERS_COLLECTION)
    .doc(userId)
    .get()
    .then(doc => {
      const response = {
        error: null,
        data: doc.data(),
      };
      return response;
    })
    .catch(error => {
      const response = {
        error,
        data: null,
      };
      return response;
    });
};

export const addDataToFbase = (collection, data) => {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });

  const generatedId = uuidv4();

  if (!data.id) data.id = generatedId;
  data.createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ms Z');
  data.updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ms Z');

  return db
    .collection(collection)
    .doc(generatedId)
    .set(data)
    .then(() => {
      const response = {
        error: null,
        data,
      };
      return response;
    })
    .catch(error => {
      const response = {
        error,
        data: null,
      };
      return response;
    });
};

export const updateDataInFbase = (collection, documentId, data, successCallback, errorCallback) => {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });
  db.collection(collection)
    .doc(documentId)
    .update(data)
    .then(docRef => {
      successCallback(data);
    })
    .catch(error => {
      errorCallback(error);
      console.error('Error updating: ', error);
    });
};

export const addPostToFirebase = data => {
  const generatedId = uuidv4();
  data.id = generatedId;
  data.createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ms Z');
  data.updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ms Z');
  data.createdBy = firebase.auth().currentUser.uid;

  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });

  return db
    .collection(POSTS_COLLECTION)
    .doc(generatedId)
    .set(data)
    .then(() => {
      const response = {
        error: null,
        data,
      };
      return response;
    })
    .catch(error => {
      const response = {
        error,
        data: null,
      };
      return response;
    });
};

export const updatePostOnFbase = data => {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });

  data.updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss.ms Z');
  return db
    .collection(POSTS_COLLECTION)
    .doc(data.id)
    .update(data)
    .then(() => {
      const response = {
        error: null,
        data,
      };
      return response;
    })
    .catch(error => {
      const response = {
        error,
        data: null,
      };
      return response;
    });
};

export const deletePostFromFbase = postId => {
  const db = firebase.firestore();
  const settings = {
    timestampsInSnapshots: true,
  };
  db.settings(settings);

  return db
    .collection('posts')
    .doc(postId)
    .delete()
    .then(() => {
      const response = {
        error: null,
        data: {
          message: 'Post deleted',
          postId,
        },
      };
      return response;
    })
    .catch(error => {
      const response = {
        error,
        data: null,
      };
      return response;
    });
};

export const getAllPostsFromFbaseByUser = userId => {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });

  return (
    db
      .collection(POSTS_COLLECTION)
      .where('createdBy', '==', userId)
      // .orderBy('createdAt', 'desc')
      .get()
      .then(querySnapshot => {
        const posts = [];
        querySnapshot.forEach(doc => {
          posts.push(doc.data());
        });
        const response = {
          error: null,
          data: posts,
        };
        return response;
      })
      .catch(error => {
        const response = {
          error,
          data: null,
        };
        return response;
      })
  );
};

export const getAllPostsFromFbase = () => {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });

  return db
    .collection(POSTS_COLLECTION)
    .orderBy('createdAt', 'desc')
    .get()
    .then(querySnapshot => {
      const posts = [];
      querySnapshot.forEach(doc => {
        posts.push(doc.data());
      });
      const response = {
        error: null,
        data: posts,
      };
      return response;
    })
    .catch(error => {
      const response = {
        error,
        data: null,
      };
      return response;
    });
};

export const getPostFromFBase = postId => {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });

  return db
    .collection(POSTS_COLLECTION)
    .where('id', '==', postId)
    .get()
    .then(querySnapshot => {
      const response = {
        error: null,
        data: querySnapshot.docs[0].data(),
      };
      return response;
    })
    .catch(error => {
      const response = {
        error,
        data: null,
      };
      return response;
    });
};

export const getLatestPostsFromFbase = () => {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });

  return db
    .collection(POSTS_COLLECTION)
    .orderBy('createdAt', 'desc')
    .limit(LATEST_POSTS_LIMIT)
    .get()
    .then(querySnapshot => {
      const posts = [];
      querySnapshot.forEach(doc => {
        posts.push(doc.data());
      });
      const response = {
        error: null,
        data: posts,
      };
      return response;
    })
    .catch(error => {
      const response = {
        error,
        data: null,
      };
      return response;
    });
};
