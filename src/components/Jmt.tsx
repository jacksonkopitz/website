import React from "react";

const data = [
  {
    hiker: "Jackson Kopitz",
    contacts: [
      {
        name: "Victoria Unger",
        email: "vrsunger@gmail.com",
        phone: "310 850 9311",
      },
      {
        name: "David Kopitz",
        email: "dkopitz@gmail.com",
        phone: "310 880 1123",
      },
      {
        name: "Oliver Kopitz",
        email: "okopitz@gmail.com",
        phone: "310 947 1560",
      },
    ],
  },
  {
    hiker: "Mari Nunan",
    contacts: [
      {
        name: "Eve Ahlers",
        email: "310 809 9709",
        phone: "eve.ahlers@gmail.com",
      },
      {
        name: "Bill Nunan",
        email: "310 427 5928",
        phone: "bill_nunan@alum.mit.edu",
      },
    ],
  },
  {
    hiker: "Lea Bartlett",
    contacts: [
      {
        name: "Greg Bartlett",
        email: "me@gregbartlett.com",
        phone: "310 345 7815",
      },
      {
        name: "Melanie Bartlett",
        email: "melbartlett@gmail.com",
        phone: "310 678 6180",
      },
    ],
  },
];

const schedule = [
  {
    date: "2022-07-18",
    location: "Cottonwood pass trailhead campground",
  },
  {
    date: "2022-07-19",
    location: "Rock Creek",
  },
  {
    date: "2022-07-20",
    location: "Guitar lake",
  },
  {
    date: "2022-07-21",
    location: "Crabtree",
  },
  {
    date: "2022-07-22",
    location: "Tyndall creek",
  },
  {
    date: "2022-07-23",
    location: "Bullfrog lake trail / kearsarge lakes",
  },
  {
    date: "2022-07-24",
    location: "Woods creek",
  },
  {
    date: "2022-07-25",
    location: "South fork kings river / upper basin",
  },
  {
    date: "2022-07-26",
    location: "Grouse meadow / palisade basin",
  },
  {
    date: "2022-07-27",
    location: "Sapphire lake / evolution basin",
  },
  {
    date: "2022-07-28",
    location: "Piute pass trail / goddard",
  },
  {
    date: "2022-07-29",
    location: "Marie lake (this day we restock our food!)",
  },
  {
    date: "2022-07-30",
    location: "Lake edison trail / quail meadown",
  },
  {
    date: "2022-07-31",
    location: "Fish creek trail / tully hole",
  },
  {
    date: "2022-08-01",
    location: "Deer Creek",
  },
  {
    date: "2022-08-02",
    location: "Trinity lakes",
  },
  {
    date: "2022-08-03",
    location: "Rush creek trail / marie meadows",
  },
  {
    date: "2022-08-04",
    location: "Evelyn lake trail / lyell canyon (Yosemite)",
  },
  {
    date: "2022-08-05",
    location: "Cathedral lakes / sunrise lakes (Yosemite)",
  },
  {
    date: "2022-08-06",
    location: "Los Angeles",
  },
];

interface JmtProps {}

export const Jmt: React.FC<JmtProps> = () => {
  return (
    <div className="tw-sticky tw-top-0 tw-p-8 tw-flex tw-flex-col">
      <div>We are hiking the John Muir Trail</div>

      <div className="tw-pt-8">
        What's the JMT?{" "}
        <a
          className="tw-text-purpleBlue-400"
          href="https://youtu.be/dQw4w9WgXcQ?t=43"
        >
          Click here
        </a>
      </div>
      <div className="tw-pt-2">
        This might be more informative:{" "}
        <a
          className="tw-text-purpleBlue-400"
          href="https://en.wikipedia.org/wiki/John_Muir_Trail"
        >
          https://en.wikipedia.org/wiki/John_Muir_Trail
        </a>
      </div>

      <div className="tw-pt-8 tw-w-72">
        We are hiking south to north. We begin south of the jmt at the
        cottonwood pass trailhead outside of Lone Pine, CA, and hike 21 miles to
        meet up with the jmt, about 8 miles from the southern terminus of the
        trail. We will hike south to summit{" "}
        <a
          className="tw-text-purpleBlue-400"
          href="https://en.wikipedia.org/wiki/Mount_Whitney"
        >
          Mt. Whitney
        </a>
        , and then turn around. We will hike the remaining 211 miles north,
        where we will finish in Yosemite Valley. The hike is about 239 miles
        over 20 days.{" "}
      </div>

      <div className="tw-pt-8 tw-w-72">
        We sent two buckets of food to{" "}
        <a
          className="tw-text-purpleBlue-400"
          href="https://muirtrailranch.com/jmt-pct-hiker-resupply/"
        >
          Muir Trail Ranch
        </a>{" "}
        (totaling 69,000 calories) to resupply our food about halfway through
        the hike. The tracking numbers are
        <div>
          <a
            className="tw-text-purpleBlue-400"
            href="https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9505513805982188572706%2C&tABt=false"
          >
            9505 5138 0598 2188 5727 06
          </a>
        </div>{" "}
        and{" "}
        <div>
          <a
            className="tw-text-purpleBlue-400"
            href="https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=2&text28777=&tLabels=9505513805982188572713%2C&tABt=true"
          >
            9505 5138 0598 2188 5727 13
          </a>
        </div>
        (The food has arrived)
      </div>

      <div className="tw-w-72 tw-pt-8">
        <div>
          Follow us on a map{" "}
          <a
            className="tw-text-purpleBlue-400"
            href="https://share.garmin.com/JMLhiketheJMT"
          >
            here
          </a>
          ! From the map, you have the option to send us a message. I will be
          charged for each one so please don't spam. When you first load the
          map, it may show a recent trip in sequoia national park. If so, zoom
          out and you will see the long vertical red route- that is the JMT. I
          plan to send my location every 4 hours (not during the night, my
          garmin will be turned off at night), which should show up as a blue
          dot. I will try to add a waypoint each night where we are sleeping,
          which should show up as a flag.
        </div>
        {/* <div>Lea's mapshare link 
          <a
            className="tw-text-purpleBlue-400"
            href="https://share.garmin.com/bartlett"
          >
            here
          </a>
          . Password is idk
        </div> */}
      </div>

      <div className="tw-pt-8">
        <div>Approximate schedule (locations are end of day):</div>
        <div className="tw-pl-4">
          {schedule.map((day) => {
            return (
              <div key={day.date}>
                <span>{day.date}: </span>
                <span>{day.location}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="tw-pt-8">
        <div>In case of emergency:</div>
        <div className="tw-pl-4">
          {data.map((d) => {
            return (
              <div key={d.hiker} className="tw-flex">
                <div className="tw-py-2">{d.hiker}</div>
                {d.contacts.map((contact) => {
                  return (
                    <div key={contact.email} className="tw-p-2">
                      <div>{contact.name}</div>
                      <div>{contact.email}</div>
                      <div>{contact.phone}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Jmt;
