const admin = [
    {
        id: "100",
        icon: "Menu",
        titleName: "数据列表",
        children: [
          {
            id: "101",
            icon: "Sunny",
            titleName: "用户列表",
            path: "userData",
          },
        ],
      }
];

const order = [
  {
      id: "100",
      icon: "Menu",
      titleName: "数据列表",
      children: [
        {
          id: "101",
          icon: "Sunny",
          titleName: "学生列表",
          path: "userData",
        },
      ],
    }
];

module.exports = {
    admin,
    order
}