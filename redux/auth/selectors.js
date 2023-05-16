const selectDisplayName = (state) => state.auth.displayName;

const selectPhotoURL = (state) => state.auth.photoURL;

const selectEmail = (state) => state.auth.email;

const selectUid = (state) => state.auth.uid;

const selectAccessToken = (state) => state.auth.accessToken;

const selectIsLogedIn = (state) => state.auth.isLogedIn;

const selectIsLoading = (state) => state.auth.isLoading;

const selectError = (state) => state.auth.error;

export {
  selectDisplayName,
  selectPhotoURL,
  selectUid,
  selectAccessToken,
  selectIsLogedIn,
  selectIsLoading,
  selectError,
  selectEmail,
};
