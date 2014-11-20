export default function addUserToSession(store, user, sessionId, addTo) {
  if (!store || !user || !sessionId) {
    return;
  }

  addTo = addTo || 'viewers';

  var session = store.getById('presentationSession', sessionId);

  if (session) {
    session.get(addTo).pushObject(user);
  }

  return session;
}
