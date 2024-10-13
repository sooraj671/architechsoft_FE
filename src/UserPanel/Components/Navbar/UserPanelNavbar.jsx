import React, { useState, useRef, useEffect } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBell, FaLink } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoPersonCircleSharp, IoPerson } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

const templateNotifs = [
  {
    title: "New Task Assigned",
    description:
      "You have been assigned a new task: 'Client Follow-up for Mrs. Johnson'.",
    time: "10:30 AM",
  },
  {
    title: "Shift Reminder",
    description:
      "Reminder: Your shift with Mr. Thomas starts at 2:00 PM today.",
    time: "9:00 AM",
  },
  {
    title: "Care Plan Updated",
    description:
      "Client Jane Doe’s care plan has been updated. Please review before your next shift.",
    time: "2:50 PM",
  },
  {
    title: "Training Session Reminder",
    description:
      "You have a scheduled training session on 'Handling Emergencies' tomorrow at 11:00 AM.",
    time: "1:10 PM",
  },
  {
    title: "Urgent: Shift Coverage Needed",
    description:
      "Immediate shift coverage is needed for Mr. Lee at 6:00 PM tonight. Please respond if available.",
    time: "4:55 PM",
  },
  {
    title: "Compliance Update",
    description:
      "Important: Compliance training materials have been updated. Please review by Friday.",
    time: "11:15 AM",
  },
  {
    title: "New Message from Supervisor",
    description:
      "Your supervisor has sent a message regarding your upcoming shift schedule.",
    time: "3:45 PM",
  },
  {
    title: "Weekly Report Due",
    description:
      "Reminder: Your weekly care report for client assessments is due by 5:00 PM today.",
    time: "8:00 AM",
  },
];

const UserPanelNavbar = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState(null);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    // fetch notifications and set them
    setNotifications(templateNotifs);

    // fetch notifications and set them
    setTasks(templateNotifs);
  }, []);

  const trimLength = (desc) => {
    if (desc.length > 25) {
      return desc.substring(0, 20) + "...";
    }
    return desc;
  };

  // Create refs for each button
  const notificationRef = useRef();
  const taskRef = useRef();
  const profileRef = useRef();

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setIsNotificationOpen(false);
    setIsTaskOpen(false);
    setIsProfileOpen(false);
  };

  // useEffect to handle click outside the buttons or dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        taskRef.current &&
        !taskRef.current.contains(event.target) &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        closeAllDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handlers for toggling dropdowns
  const handleNotificationToggle = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsTaskOpen(false); // Close task when notification is clicked
    setIsProfileOpen(false); // Close profile when notification is clicked
  };

  const handleTaskToggle = () => {
    setIsTaskOpen(!isTaskOpen);
    setIsNotificationOpen(false); // Close notification when task is clicked
    setIsProfileOpen(false); // Close profile when task is clicked
  };

  const handleProfileToggle = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsNotificationOpen(false); // Close notification when profile is clicked
    setIsTaskOpen(false); // Close task when profile is clicked
  };

  return (
    <div className="flex w-full fixed top-0 left-0 z-20">
      <div className="py-2 from-green-200 via-green-100 to-green-300 bg-gradient-to-r pl-8 w-72 ">
        <img src={logo} alt="logo" className="h-14 drop-shadow-lg" />
      </div>
      <div className="flex justify-between px-5 from-green-300 via-green-200 to-green-300 bg-gradient-to-l text-[#fff] w-full items-center">
        <div className="h-full flex gap-5">
          <Link to={"/business/schedule"}>
            <button className="h-full hover:text-[#ffffffc5] leading-9 text-lg">
              Home
            </button>
          </Link>
          <Link to={"/business/schedule"}>
            <button className="h-full hover:text-[#ffffffc5] leading-9 text-lg">
              Connected Services
            </button>
          </Link>
        </div>
        <div className=" h-full flex ">
          <div className="relative" ref={notificationRef}>
            <button
              className={`h-full hover:text-[#ffffffc5] px-4 ${
                isNotificationOpen && "bg-[#5db026]"
              }`}
              title="notifications"
              onClick={handleNotificationToggle}
            >
              <FaBell size={30} />
            </button>
            <div
              className={`absolute top-100 right-0 bg-[#fff] w-72 border border-gray-200 rounded-[4px] shadow-lg text-gray-800 font-semibold ${
                isNotificationOpen ? "block" : "hidden"
              }`}
            >
              <div className="px-4 py-2 border-b border-b-gray-200 leading-9 text-lg capitalize">
                notifications
              </div>
              <div className="h-60 overflow-y-auto">
                {notifications || notifications?.length > 0 ? (
                  notifications.map((notif, index) => {
                    return (
                      <div
                        key={index}
                        className="flex px-4 py-2 border-b border-b-gray-200 gap-2
                      "
                      >
                        <div className="flex justify-center items-center">
                          <p className="bg-primary rounded-full p-3 text-[#fff]">
                            <FaLink />
                          </p>
                        </div>
                        <div>
                          <div className="text-sm">
                            {trimLength(notif.title)}
                          </div>
                          <div className="text-sm font-normal">
                            {trimLength(notif.description)}
                          </div>
                          <div className="text-xs">{notif.time}</div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="px-4 py-2 text-sm text-orange-400">
                    no notifications yet ...
                  </div>
                )}
              </div>
              <Link to={"/business/notifications"} className="group">
                <div className="px-4 py-2 border-t border-gray-200 leading-9 capitalize flex items-center">
                  <p>see all notifications</p>
                  <p className="mt-1 group-hover:translate-x-1 transition duration-300">
                    <MdKeyboardArrowRight size={20} />
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="relative" ref={taskRef}>
            <button
              className={`h-full hover:text-[#ffffffc5] px-4 ${
                isTaskOpen && "bg-[#5db026]"
              }`}
              title="tasks"
              onClick={handleTaskToggle}
            >
              <FaCheckSquare size={30} />
            </button>
            <div
              className={`absolute top-100 right-0 bg-[#fff] w-72 border border-gray-200 rounded-[4px] shadow-lg text-gray-800 font-semibold ${
                isTaskOpen ? "block" : "hidden"
              }`}
            >
              <div className="px-4 py-2 border-b border-b-gray-200 leading-9 text-lg capitalize">
                My Tasks
              </div>
              <div className="h-60 overflow-y-auto">
                {tasks || tasks?.length > 0 ? (
                  tasks.map((task, index) => {
                    return (
                      <div
                        key={index}
                        className="flex px-4 py-2 border-b border-b-gray-200 gap-2
                      "
                      >
                        <div className="flex justify-center items-center">
                          <p className="bg-primary rounded-full p-3 text-[#fff]">
                            <FaLink />
                          </p>
                        </div>
                        <div>
                          <div className="text-sm">
                            {trimLength(task.title)}
                          </div>
                          <div className="text-sm font-normal">
                            {trimLength(task.description)}
                          </div>
                          <div className="text-xs">{task.time}</div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="px-4 py-2 text-sm text-orange-400">
                    no open tasks ...
                  </div>
                )}
              </div>
              <Link to={"/business/task-manager"} className="group">
                <div className="px-4 py-2 border-t border-gray-200 leading-9 capitalize flex items-center">
                  <p>see all tasks</p>
                  <p className="mt-1 group-hover:translate-x-1 transition duration-300">
                    <MdKeyboardArrowRight size={20} />
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="relative" ref={profileRef}>
            <button
              className={`h-full hover:text-[#ffffffc5] px-4 ${
                isProfileOpen && "bg-[#5db026]"
              }`}
              title="profile"
              onClick={handleProfileToggle}
            >
              <IoPersonCircleSharp size={32} />
            </button>
            <div
              className={`absolute top-100 right-0 bg-[#fff] w-72 border border-gray-200 rounded-[4px] shadow-lg text-gray-800 font-semibold ${
                isProfileOpen ? "block" : "hidden"
              }`}
            >
              <div className="px-4 py-2 border-b border-b-gray-200 ">
                {/* change name and email values , to be fetched from backend  */}
                <p>Test Name</p>
                <p className="font-normal text-sm">testmail@gmail.com</p>
              </div>
              <div className="py-2 border-b border-b-gray-200">
                <Link to="/business/profile">
                  <div className="hover:bg-green-100 flex items-center gap-2 px-4 py-2">
                    <p>
                      <IoPerson size={20} />
                    </p>
                    <p>my profile</p>
                  </div>
                </Link>
              </div>
              <div className="py-2 border-b border-b-gray-200">
                <button className="hover:bg-green-100 flex items-center gap-2 px-4 py-2 w-full">
                  <p>
                    <IoMdLogOut size={20} />
                  </p>
                  <p>Logout</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanelNavbar;
