const initState = {
  data: [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2013/03/19/18/23/mountain-biking-95032_960_720.jpg",
      day: 1,
      ftype: "Heats",
      stype: "Highlight",
      time: "5:12",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2016/11/29/03/25/bicycles-1867046_960_720.jpg",
      day: 2,
      ftype: "Heats",
      stype: "Mixed",
      time: "5:12",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2015/04/27/11/48/sign-741813_960_720.jpg",
      day: 3,
      ftype: "Semi's",
      stype: "Mixed",
      time: "5:12",
    },
    {
      id: 4,
      image:
        "https://cdn.pixabay.com/photo/2018/05/31/19/34/bicycle-path-3444914_960_720.jpg",
      day: 4,
      ftype: "Semi's",
      stype: "Heats",
      time: "5:12",
    },
  ],
  imgesData: [
    {
      id:1,
      img: "https://cdn.pixabay.com/photo/2013/07/13/14/05/bicycle-162112__340.png",
    },
    {
      id:2,
      img: "https://cdn.pixabay.com/photo/2013/07/13/01/10/sprint-155240__340.png",
    },
    {
      id:3,
      img: "https://cdn.pixabay.com/photo/2014/04/02/16/29/bike-307452__340.png",
    },
    {
      id:4,
      img: "https://cdn.pixabay.com/photo/2017/01/31/20/35/bicycle-2027076__340.png",
    },
    {
      id:5,
      img: "https://cdn.pixabay.com/photo/2020/05/12/21/55/motorcycle-5165062__340.png",
    },
    {
      id:6,
      img: "https://cdn.pixabay.com/photo/2019/04/02/21/47/cyclist-4098989__340.png",
    },
    {
      id:7,
      img: "https://cdn.pixabay.com/photo/2012/04/24/18/13/bicycle-40756__340.png",
    },
    {
      id:8,
      img: "https://cdn.pixabay.com/photo/2014/04/03/11/54/cycling-312533__340.png",
    },
    {
      id:9,
      img: "https://cdn.pixabay.com/photo/2013/07/13/14/05/bicycle-162110__340.png",
    },
    {
      id:10,
      img: "https://cdn.pixabay.com/photo/2016/11/11/19/55/athlete-1817616__340.png",
    },
    {
      id:11,
      img: "https://cdn.pixabay.com/photo/2012/04/24/13/12/motorcycle-40000__340.png",
    },
  ],
};

export const reducer = (state = initState, { type, payload }) => {
  return state;
};
