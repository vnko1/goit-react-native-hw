const selectDisplayName = (state) => state.displayName;

const selectPhotoURL = (state) => state.photoURL;

const selectEmail = (state) => state.email;

const selectUid = (state) => state.uid;

const selectAccessToken = (state) => state.accessToken;

const selectIsLogedIn = (state) => state.isLogedIn;

const selectIsLoading = (state) => state.isLoading;

const selectError = (state) => state.error;

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
