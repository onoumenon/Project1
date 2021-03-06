import { filterEvents } from "./eventsService";
import { uniq } from "lodash";

let musicians = [
  {
    _id: "0",
    name: "The Observatory",
    description:
      "The Observatory is an art rock, experimental and electronica band based in Singapore, consisting largely of alumni from significant 1990s Singaporean bands. They are influential in the Singapore music scene. The band formed in 2001 and performed for the first time at the Baybeats music festival in December 2002.",
    avatar: "images/musicians/the-observatory-s.png"
  },
  {
    _id: "1",
    name: "Inch Chua",
    description:
      "Inch Chua Yun Juan, stylized as iNCH, is a Singaporean singer-songwriter, musician, producer, actress and artist previously based in Los Angeles and New York. After rising to fame in Singapore's nascent indie scene as lead singer of the rock band Allura, Chua began to record on her own, blending acoustic folk with alternative rock, electronic music, jazz and pop influence. Inch Chua is backed live by her band, The Metric System.",
    avatar: "images/musicians/inch-chua-s.png"
  },
  {
    _id: "2",
    name: "Tabitha Nauser",
    description:
      'Tabitha Nauser is a Singaporean pop/R&B singer who was the second runner-up in the 2009 season of Singapore Idol (Season 3). In 2010, she was selected to represent the continent of Asia to sing the Official Theme Song of the Singapore 2010 Youth Olympic Games, "Everyone".',
    avatar: "images/musicians/tabitha-nauser-s.png"
  },
  {
    _id: "3",
    name: "Jasmine Sokko",
    description:
      'Jasmine Sokko is a Singaporean electronic music singer-songwriter and producer. She made her single debut "1057" in 2016 which she also wrote and produced. In 2018, she released single "HURT", her first major-label debut on Warner Music Singapore.',
    avatar: "images/musicians/jasmine-sokko-s.png"
  },
  {
    _id: "4",
    name: "The Sam Willows",
    description:
      "The Sam Willows is a four-member Singaporean pop band formed in May 2012. The group consists of siblings Narelle and Benjamin Kheng, together with their friends Sandra Riley Tang and Jonathan Chua.",
    avatar: "images/musicians/the-sam-willows-s.png"
  },
  {
    _id: "5",
    name: ".Gif",
    description:
      ".Gif is made up of weish and din. The pair started out in late 2012 as a passion project and shared hobby. electronic music that combines lush soundscapes with lyrics that are intensely personal and meaningful.",
    avatar: "images/musicians/gif-s.png"
  },
  {
    _id: "6",
    name: "Gentle Bones",
    description:
      "Joel Tan, better known by his stage name Gentle Bones, is a Singaporean singer-songwriter. His self-titled debut EP, released in 2014, as well as the singles released from it have charted on iTunes and Spotify, making him one of Singapore's more popular acts.",
    avatar: "images/musicians/gentle-bones-s.png"
  },
  {
    _id: "7",
    name: "Wormrot",
    description:
      "Wormrot is a Singaporean grindcore band formed in 2007, immediately after the founding members had completed their mandatory two years of national service. The band have released three full-length studio albums to date, as well as a number of EPs and split releases with other bands.",
    avatar: "images/musicians/wormrot-s.png"
  }
];

export function getMusiciansNamesByDay(day) {
  const foundEvents = filterEvents(day);
  const musicianNames = [];
  foundEvents.map(musician => musicianNames.push(musician.title));
  const uniqueMusicians = uniq(musicianNames);
  return uniqueMusicians;
}

export function getMusicians(day) {
  if (!day) {
    return musicians;
  } else {
    const musicianNames = getMusiciansNamesByDay(day);

    const musiciansByDay = musicianNames.map(name =>
      musicians.filter(musician => musician.name !== name)
    );

    return musiciansByDay;
  }
}

export function getMusician(id) {
  const foundMusician = musicians.find(musician => musician._id === id);
  if (!foundMusician) {
    return;
  } else {
    return foundMusician;
  }
}

export function getMusicianByName(name) {
  const foundMusician = musicians.find(musician => musician.name === name);
  if (!foundMusician) {
    return;
  } else {
    return foundMusician;
  }
}

export function deleteMusician(id) {
  const remainingMusicians = musicians.filter(musician => musician._id !== id);
  musicians = remainingMusicians;
  return remainingMusicians;
}

export function saveMusician(musician) {
  let existing = musicians.find(mus => mus._id === musician._id);
  if (existing) {
    const merged = { ...existing, ...musician };
    musicians = musicians.filter(musician => musician._id !== existing._id);
    musicians.push(merged);
    return merged;
  } else {
    const newMusician = {
      _id: Date.now().toString(),
      ...musician
    };
    musicians.push(newMusician);
    return musicians;
  }
}

export function filterMusicians(day, events) {
  const foundEvents = events.filter(
    event => event.start.toDateString() === day.date
  );
  const musicianNames = [];
  foundEvents.map(event => musicianNames.push(event.title));
  const uniqueMusicians = uniq(musicianNames);

  const musiciansByDay = uniqueMusicians.map(name => getMusicianByName(name));

  return musiciansByDay;
}
