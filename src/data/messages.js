const messages = {
  1: [
    { from: "user", text: "Hello, I need help!", time: "10:00 AM" },
    { from: "admin", text: "Sure, I’m here.", time: "10:01 AM" },
  ],
  2: [
    { from: "user", text: "How do I cancel?", time: "09:00 AM" },
    { from: "admin", text: "Go to settings > cancel plan", time: "09:02 AM" },
  ],
  3: [
    { from: "user", text: "Can I upgrade my plan?", time: "11:15 AM" },
    {
      from: "admin",
      text: "Yes, you can upgrade from your dashboard.",
      time: "11:16 AM",
    },
  ],
  4: [
    { from: "user", text: "I forgot my password.", time: "08:30 AM" },
    {
      from: "admin",
      text: "Click on 'Forgot password' at login.",
      time: "08:31 AM",
    },
  ],
  5: [
    { from: "user", text: "Is there a mobile app?", time: "12:00 PM" },
    {
      from: "admin",
      text: "Yes, it's available on iOS and Android.",
      time: "12:01 PM",
    },
  ],
};

export default messages;
