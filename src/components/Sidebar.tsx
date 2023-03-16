import React from 'react'
import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineSmartDisplay,
    MdOutlineWatchLater,
    MdThumbUpOffAlt,
    MdSettings,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball,
  } from "react-icons/md";
  import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
  import { FaRegCompass } from "react-icons/fa";
  import { GiFilmStrip } from "react-icons/gi";

const Sidebar = () => {
    const mainLinks = [
        {
            icon: <MdHomeFilled className="text-xl" />,
            name: "Home",
            // link: "/",
          },
          {
            icon: <FaRegCompass className="text-xl" />,
            name: "Explore",
            // link: "/explore",
          },
          {
            icon: <MdOutlineSlowMotionVideo className="text-xl" />,
            name: "Shorts",
            // link: "",
          },
          {
            icon: <MdSubscriptions className="text-xl" />,
            name: "Subscriptions",
            // link: "",
          }
    ]
    const secondaryLink = [
        {
            icon: <MdOutlineVideoLibrary className="text-xl" />,
            name: "Library",
        },
        {
            icon: <MdHistory className="text-xl" />,
            name: "History",
        },
        {
            icon: <MdOutlineSmartDisplay className="text-xl" />,
            name: "Your Videos",
        },
        {
            icon: <MdOutlineWatchLater className="text-xl" />,
            name: "Watch Later",
        },
        {
            icon: <MdThumbUpOffAlt className="text-xl" />,
            name: "Liked Videos",
        }
    ]

    const subscriptionLinks = [
        {
            icon: <TbMusic className="text-xl" />,
            name: "Music",
        },
        {
            icon: <MdOutlineSportsVolleyball className="text-xl" />,
            name: "Sport",
        },
        {
            icon: <TbDeviceGamepad2 className="text-xl" />,
            name: "Gaming",
        },
        {
            icon: <GiFilmStrip className="text-xl" />,
            name: "Films",
        },
    ]

    const helpLinks = [
        {
            icon: <MdSettings className="text-xl" />,
            name: "Settings",
        },
        {
            icon: <MdOutlinedFlag className="text-xl" />,
            name: "Report history",
        },
        {
            icon: <MdOutlineHelpOutline className="text-xl" />,
            name: "Help",
        },
        {
            icon: <MdOutlineFeedback className="text-xl" />,
            name: "Send feedback",
        },
    ]

    const textLinks = [
        [
            "About",
            "Press",
            "Copyright",
            "Contact us",
            "Creator",
            "Advertise",
            "Developers",
        ],
        [
            "Terms",
            "Privacy",
            "Policy & Safety",
            "How YouTube works",
            "Test new features",
        ]
    ]
  return (
    <div className='w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar'>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {
            mainLinks.map(({name, icon}) => {
                return (
                    <li className={`flex gap-3 items-center pl-6 py-3 hover:bg-zinc-700 ${name === 'Home'? 'bg-slate-600' : ''}`} key={name}>
                        <a href="#" className='flex gap-5 items-center'>
                            {icon}
                            <span className="text-sm tracking-wider">{name}</span>
                        </a>
                    </li>
                )}
            )
        }
      </ul>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {
            secondaryLink.map(({name, icon}) => {
                return (
                    <li className={`flex gap-3 items-center pl-6 py-3 hover:bg-zinc-700`} key={name}>
                        <a href="#" className='flex gap-5 items-center'>
                            {icon}
                            <span className="text-sm tracking-wider">{name}</span>
                        </a>
                    </li>
                )}
            )
        }
      </ul>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {
            subscriptionLinks.map(({name, icon}) => {
                return (
                    <li className={`flex gap-3 items-center pl-6 py-3 hover:bg-zinc-700`} key={name}>
                        <a href="#" className='flex gap-5 items-center'>
                            {icon}
                            <span className="text-sm tracking-wider">{name}</span>
                        </a>
                    </li>
                )}
            )
        }
      </ul>
      <ul className='flex flex-col border-b-2 border-gray-700'>
        {
            helpLinks.map(({name, icon}) => {
                return (
                    <li className={`flex gap-3 items-center pl-6 py-3 hover:bg-zinc-700`} key={name}>
                        <a href="#" className='flex gap-5 items-center'>
                            {icon}
                            <span className="text-sm tracking-wider">{name}</span>
                        </a>
                    </li>
                )}
            )
        }
      </ul>
      <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
        {
            textLinks[0].map((name) => {
                return <li key={name}>{name}</li>
            })
        }
      </ul>
      <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
        {
            textLinks[1].map((name) => {
                return <li key={name}>{name}</li>
            })
        }
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy; 2022 Google</span>
      <br />
      <p className="px-4 pt-3 text-sm text-zinc-400">
        this is a clone for educational purposes only
      </p>
    </div>
  )
}

export default Sidebar
