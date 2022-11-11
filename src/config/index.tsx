const index = {
  pusher: {
    appId: import.meta.env.VITE_PUSHER_APP_ID,
    key: import.meta.env.VITE_PUSHER_KEY,
    secret: import.meta.env.VITE_PUSHER_SECRET,
    cluster: import.meta.env.VITE_PUSHER_CLUSTER
  }
};

export default index;
