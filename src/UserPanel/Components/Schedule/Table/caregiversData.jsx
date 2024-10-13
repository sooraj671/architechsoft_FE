const caregiversData = [
  {
    name: "Open Shifts",
    scheduled: 0,
    completed: 0,
    projected: 0,
    canceled: 0,
    open: 0,
    week: {
      mon: "",
      tue: "",
      wed: "",
      thu: "",
      fri: "",
      sat: "",
      sun: "",
    },
  },
  {
    name: "Abusbeih, Hussnia",
    scheduled: 3,
    completed: 2,
    projected: 3,
    canceled: 0,
    open: 1,
    week: {
      mon: "Scheduled",
      tue: "Completed",
      wed: "",
      thu: "Projected",
      fri: "Open Shift",
      sat: "",
      sun: "",
    },
  },
  {
    name: "Alvarez, Roxanna CNA",
    scheduled: 5,
    completed: 5,
    projected: 6,
    canceled: 1,
    open: 0,
    week: {
      mon: "Scheduled",
      tue: "Completed",
      wed: "Projected",
      thu: "Canceled",
      fri: "",
      sat: "Scheduled",
      sun: "",
    },
  },
  {
    name: "Amnazo, Sandrine Caregiver",
    scheduled: 4,
    completed: 4,
    projected: 4,
    canceled: 0,
    open: 0,
    week: {
      mon: "Scheduled",
      tue: "Completed",
      wed: "Scheduled",
      thu: "Completed",
      fri: "",
      sat: "",
      sun: "",
    },
  },
  {
    name: "Anderson, Kelly STNA",
    scheduled: 3,
    completed: 3,
    projected: 3,
    canceled: 0,
    open: 0,
    week: {
      mon: "Completed",
      tue: "",
      wed: "",
      thu: "Projected",
      fri: "",
      sat: "Scheduled",
      sun: "Completed",
    },
  },
  {
    name: "Bahati, Sarah Caregiver",
    scheduled: 2,
    completed: 1,
    projected: 3,
    canceled: 1,
    open: 1,
    week: {
      mon: "",
      tue: "Scheduled",
      wed: "",
      thu: "Canceled",
      fri: "Open Shift",
      sat: "",
      sun: "Completed",
    },
  },
  {
    name: "Barr, Eugenie STNA",
    scheduled: 4,
    completed: 4,
    projected: 5,
    canceled: 0,
    open: 1,
    week: {
      mon: "Scheduled",
      tue: "Completed",
      wed: "Projected",
      thu: "",
      fri: "Scheduled",
      sat: "",
      sun: "",
    },
  },
  {
    name: "Bonds, Kimberly",
    scheduled: 2,
    completed: 2,
    projected: 3,
    canceled: 0,
    open: 1,
    week: {
      mon: "Scheduled",
      tue: "",
      wed: "Completed",
      thu: "Projected",
      fri: "",
      sat: "",
      sun: "",
    },
  },
  {
    name: "Dabydeen, Nadia Caregiver",
    scheduled: 4,
    completed: 4,
    projected: 4,
    canceled: 0,
    open: 0,
    week: {
      mon: "Completed",
      tue: "",
      wed: "Scheduled",
      thu: "",
      fri: "Projected",
      sat: "",
      sun: "",
    },
  },
  {
    name: "Fahmawi, Reham",
    scheduled: 1,
    completed: 1,
    projected: 2,
    canceled: 0,
    open: 1,
    week: {
      mon: "",
      tue: "Scheduled",
      wed: "Completed",
      thu: "",
      fri: "Projected",
      sat: "",
      sun: "",
    },
  },
  {
    name: "Garcia, Julio CNA",
    scheduled: 6,
    completed: 5,
    projected: 6,
    canceled: 1,
    open: 0,
    week: {
      mon: "Scheduled",
      tue: "Completed",
      wed: "Projected",
      thu: "Canceled",
      fri: "",
      sat: "Scheduled",
      sun: "",
    },
  },
  {
    name: "Hawkins, Mary STNA",
    scheduled: 3,
    completed: 3,
    projected: 4,
    canceled: 0,
    open: 0,
    week: {
      mon: "Scheduled",
      tue: "",
      wed: "Completed",
      thu: "",
      fri: "Projected",
      sat: "",
      sun: "",
    },
  },
  {
    name: "Isaac, Daniel Caregiver",
    scheduled: 2,
    completed: 1,
    projected: 2,
    canceled: 1,
    open: 1,
    week: {
      mon: "",
      tue: "Scheduled",
      wed: "",
      thu: "Canceled",
      fri: "Open Shift",
      sat: "",
      sun: "Completed",
    },
  },
  {
    name: "Jones, Emily STNA",
    scheduled: 4,
    completed: 4,
    projected: 5,
    canceled: 0,
    open: 1,
    week: {
      mon: "Scheduled",
      tue: "Completed",
      wed: "Projected",
      thu: "",
      fri: "Scheduled",
      sat: "",
      sun: "",
    },
  },
  {
    name: "Kennedy, Olivia CNA",
    scheduled: 2,
    completed: 1,
    projected: 3,
    canceled: 0,
    open: 0,
    week: {
      mon: "Scheduled",
      tue: "",
      wed: "Completed",
      thu: "",
      fri: "Projected",
      sat: "",
      sun: "",
    },
  },
  {
    name: "Lama, Sarah Caregiver",
    scheduled: 4,
    completed: 3,
    projected: 5,
    canceled: 1,
    open: 1,
    week: {
      mon: "Scheduled",
      tue: "Completed",
      wed: "",
      thu: "Projected",
      fri: "Open Shift",
      sat: "",
      sun: "",
    },
  },
  {
    name: "Martin, Jack STNA",
    scheduled: 3,
    completed: 3,
    projected: 3,
    canceled: 0,
    open: 0,
    week: {
      mon: "Completed",
      tue: "",
      wed: "Scheduled",
      thu: "",
      fri: "Projected",
      sat: "",
      sun: "",
    },
  },
  {
    name: "Nunez, Carla CNA",
    scheduled: 2,
    completed: 2,
    projected: 2,
    canceled: 0,
    open: 1,
    week: {
      mon: "Scheduled",
      tue: "",
      wed: "Completed",
      thu: "",
      fri: "Projected",
      sat: "",
      sun: "Open Shift",
    },
  },
  {
    name: "Ortega, Samuel Caregiver",
    scheduled: 5,
    completed: 4,
    projected: 6,
    canceled: 1,
    open: 0,
    week: {
      mon: "Scheduled",
      tue: "Completed",
      wed: "Projected",
      thu: "Canceled",
      fri: "",
      sat: "Scheduled",
      sun: "",
    },
  },
  {
    name: "Perez, Sofia STNA",
    scheduled: 3,
    completed: 2,
    projected: 4,
    canceled: 1,
    open: 1,
    week: {
      mon: "Scheduled",
      tue: "",
      wed: "Completed",
      thu: "Projected",
      fri: "Open Shift",
      sat: "",
      sun: "Completed",
    },
  },
];

export default caregiversData;
