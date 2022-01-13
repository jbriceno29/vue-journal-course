export default () => ({
  isLoading: true,
  enties: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Consectetur proident officia reprehenderit cillum mollit ut consequat.",
      picture: null,
    },
    {
      id: new Date().getTime() + 140,
      date: new Date().toDateString(),
      text: "Lorem non anim elit enim minim esse fugiat proident cillum veniam enim.",
      picture: null,
    },
    {
      id: new Date().getTime() + 184,
      date: new Date().toDateString(),
      text: "Voluptate labore incididunt commodo enim et sit.",
      picture: null,
    },
  ],
});
