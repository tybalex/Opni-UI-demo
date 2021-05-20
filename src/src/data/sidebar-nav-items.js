export default function() {
  return [
    {
      title: "Opni Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Alerts",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "Log Discovary",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Metric Anomaly",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Feedback",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "QuickStart",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/quickstart",
    },
    {
      title: "More Tabs",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
