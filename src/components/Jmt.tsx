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
        name: "Eve Nunan",
        email: "",
        phone: "",
      },
      {
        name: "Bill Nunan",
        email: "",
        phone: "",
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
    date: "2022-07-22",
    location: "Cottonwood pass trailhead campground",
  },
  {
    date: "2022-07-23",
    location: "Rock Creek",
  },
  {
    date: "2022-07-24",
    location: "Guitar lake",
  },
  {
    date: "2022-07-25",
    location: "Crabtree",
  },
  {
    date: "2022-07-26",
    location: "Tyndall creek",
  },
  {
    date: "2022-07-27",
    location: "Bullfrog lake trail / kearsarge lakes",
  },
  {
    date: "2022-07-28",
    location: "Woods creek",
  },
  {
    date: "2022-07-29",
    location: "South fork kings river / upper basin",
  },
  {
    date: "2022-07-30",
    location: "Grouse meadow / palisade basin",
  },
  {
    date: "2022-07-31",
    location: "Sapphire lake / evolution basin",
  },
  {
    date: "2022-08-01",
    location: "Piute pass trail / goddard",
  },
  {
    date: "2022-08-02",
    location: "Marie lake (this day we restock our food!)",
  },
  {
    date: "2022-08-03",
    location: "Lake edison trail / quail meadown",
  },
  {
    date: "2022-08-04",
    location: "Fish creek trail / tully hole",
  },
  {
    date: "2022-08-05",
    location: "Deer Creek",
  },
  {
    date: "2022-08-06",
    location: "Trinity lakes",
  },
  {
    date: "2022-08-07",
    location: "Rush creek trail / marie meadows",
  },
  {
    date: "2022-08-08",
    location: "Evelyn lake trail / lyell canyon (Yosemite)",
  },
  {
    date: "2022-08-09",
    location: "Cathedral lakes / sunrise lakes (Yosemite)",
  },
  {
    date: "2022-08-10",
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

      <div className="tw-pt-8 tw-w-96">
        We are hiking south to north. We begin south of the jmt at the
        cottonwood lakes trailhead outside of Lone Pine, CA, and hike 21 miles
        to meet up with the jmt, about 8 miles from the southern terminus of the
        trail. We will hike south to summit{" "}
        <a
          className="tw-text-purpleBlue-600"
          href="https://en.wikipedia.org/wiki/Mount_Whitney"
        >
          Mt. Whitney
        </a>
        , and then turn around. We will hike the remaining 211 miles north,
        where we will finish in Yosemite Valley. The hike is about 239 miles
        over 20 days.{" "}
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
