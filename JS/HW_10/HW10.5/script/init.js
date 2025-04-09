let data = {lastVisitSite: new Date(), lastPageVisit: window.location.href};
localStorage.setItem("session", JSON.stringify(data));
console.log(data)