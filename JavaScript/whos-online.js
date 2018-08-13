// https://www.codewars.com/kata/whos-online/train/javascript

const whosOnline = (friends) => {
  if(!friends.length) return {};
  const online = friends.filter(o => o.status === "online" && o.lastActivity <= 10).map(e => e.username);
  const away = friends.filter(o => o.status === "online" && o.lastActivity > 10).map(e => e.username);
  const offline = friends.filter(o => o.status === "offline").map(e => e.username);
  const res = {}
  if(online.length) {
    res.online = online;
  }
   if(offline.length) {
    res.offline = offline;
  }
   if(away.length) {
    res.away = away;
  }
  return res;
}
