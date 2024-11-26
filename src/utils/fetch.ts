// fetch categories from the API

export const fetchCategories = async () => {
  const response = [
    {
      id: 1,
      title: "Concerts",
    },
    {
      id: 2,
      title: "Conferences",
    },
    {
      id: 3,
      title: "Seminars",
    },
    {
      id: 4,
      title: "Workshops",
    },
    {
      id: 5,
      title: "Meetups",
    },
    {
      id: 6,
      title: "Webinars",
    },
    {
      id: 7,
      title: "Expos",
    },
    {
      id: 8,
      title: "Festivals",
    },
    {
      id: 9,
      title: "Shows",
    },
    {
      id: 10,
      title: "Christian Parties",
    },
    {
      id: 11,
      title: "Sports",
    },
    {
      id: 12,
      title: "Networking",
    },
    {
      id: 13,
      title: "Charity",
    },
    {
      id: 14,
      title: "Religious",
    },
    {
      id: 15,
      title: "Others",
    },
  ];
  return response;
};

export const fetchEvents = async () => {
  const response = [
    {
      id: 1,
      title: "Sunday Service",
      description: "Join us for our Sunday service",
      category: "Services",
      start_date: "2024-11-09",
      end_date: "2024-11-11",
      start_time: "1:00 PM",
      end_time: "6:00 PM",
      location: "Church",
      organised_by: "Bethel Church",
      image:
        "https://cdn.usegalileo.ai/stability/3190d74d-b615-464a-8907-a0f0769624c1.png",
    },
    {
      id: 2,
      title: "Theology 101",
      description: "Join us for our weekly Bible study",
      category: "Theology",
      start_date: "2024-11-09",
      end_date: "2024-11-11",
      start_time: "1:45 PM",
      end_time: "10:00 PM",
      location: "Church",
      organised_by: "Bethel Church",
      image:
        "https://cdn.usegalileo.ai/stability/3f89cdab-dd70-4096-bd74-7b9a95136a25.png",
    },
    {
      id: 3,
      title: "Prayer Group",
      description: "Join us for our weekly prayer group",
      category: "Prayer Group",
      start_date: "2024-11-10",
      end_date: "2024-11-11",
      start_time: "10:00 AM",
      end_time: "12:00 PM",
      location: "Church",
      organised_by: "Bethel Church",
      image:
        "https://cdn.usegalileo.ai/stability/3f89cdab-dd70-4096-bd74-7b9a95136a25.png",
    },
    {
      id: 4,
      title: "Bible Study",
      description: "Join us for our Weekly Bible Study",
      category: "Bible Study",
      start_date: "2024-11-14",
      end_date: "2024-11-16",
      start_time: "10:00 AM",
      end_time: "12:00 PM",
      location: "Church",
      organised_by: "Bethel Church",
      image:
        "https://cdn.usegalileo.ai/stability/77f3ef43-2486-4085-b1c1-a9fd909e26aa.png",
    },
    {
      id: 5,
      title: "Concert",
      description: "Join us for our Concert",
      category: "Concert",
      start_date: "2024-11-12",
      end_date: "2024-11-12",
      start_time: "10:00 AM",
      end_time: "12:00 PM",
      location: "Church",
      organised_by: "Bethel Church",
      image:
        "https://cdn.usegalileo.ai/stability/971f1e2a-391c-4b9d-ab33-ca85d058b137.png",
    },
    {
      id: 6,
      title: "Movie Night",
      description: "Join us for our Movie Night",
      category: "Movie Night",
      start_date: "2024-11-12",
      end_date: "2024-11-14",
      start_time: "10:00 AM",
      end_time: "12:00 PM",
      location: "Church",
      organised_by: "Bethel Church",
      image:
        "https://cdn.usegalileo.ai/stability/bcd9dcc8-767d-4246-903e-54bf8b256d89.png",
    },
    {
      id: 7,
      title: "Seminars",
      description: "Join us for our Seminars",
      category: "Seminars",
      start_date: "2024-11-15",
      end_date: "2024-11-18",
      start_time: "10:00 AM",
      end_time: "12:00 PM",
      location: "Church",
      organised_by: "Bethel Church",
      image:
        "https://cdn.usegalileo.ai/stability/971f1e2a-391c-4b9d-ab33-ca85d058b137.png",
    },
  ];
  return response;
};

export const fetchEvent = async (id: number) => {
  const response = {
    id: 1,
    title: "Sunday Service",
    description: "Join us for our Sunday service",
    category: "Services",
    start_date: "2024-11-15",
    end_date: "2024-11-20",
    start_time: "10:00 AM",
    end_time: "12:00 PM",
    location: "Church",
    organised_by: "Bethel Church",
    image:
      "https://cdn.usegalileo.ai/stability/64cfaead-b98f-4fed-be0b-35f1213aca30.png",
  };

  return response;
};
