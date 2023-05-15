const selectDisplayName = (state) => state.displayNAme;

const selectPhotoUrl = (state) => state.photoUrl;

const selectUid = (state) => state.uid;

const selectAccessToken = (state) => state.accessToken;

const selectIsLogedIn = (state) => state.isLogedIn;

const selectIsLoading = (state) => state.isLoading;

const selectError = (state) => state.error;

export {
  selectDisplayName,
  selectPhotoUrl,
  selectUid,
  selectAccessToken,
  selectIsLogedIn,
  selectIsLoading,
  selectError,
};
