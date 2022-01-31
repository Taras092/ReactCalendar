const baseUrl = "https://61b8921e64e4a10017d19082.mockapi.io/api/v1/events";

export const createEvent = (eventData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Faild to create event");
    }
  });
};

export const fetchEventsCalendare = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((eventsCalendare) =>
      eventsCalendare.map(({ _id, ...event }) => ({ id: _id, ...event }))
    );
};

export const deleteEvent = (eventId) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Faild to create event");
    }
  });
};