import "./App.css";

function App() {
  const legitPayload = {
    RecordType: "Bounce",
    MessageStream: "outbound",
    Type: "HardBounce",
    TypeCode: 1,
    Name: "Hard bounce",
    Tag: "Test",
    Description:
      "The server was unable to deliver your message (ex: unknown user, mailbox not found).",
    Email: "arthur@example.com",
    From: "notifications@honeybadger.io",
    BouncedAt: "2019-11-05T16:33:54.9070259Z",
  };

  const spamPayload = {
    RecordType: "Bounce",
    Type: "SpamNotification",
    TypeCode: 512,
    Name: "Spam notification",
    Tag: "",
    MessageStream: "outbound",
    Description:
      "The message was delivered, but was either blocked by the user, or classified as spam, bulk mail, or had rejected content.",
    Email: "zaphod@example.com",
    From: "notifications@honeybadger.io",
    BouncedAt: "2023-02-27T21:41:30Z",
  };

  async function sendPayload(payload) {
    console.log("sending payload");
    const response = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    await alert(data.message);
  }

  return (
    <div className="flex flex-col bg-gray-700 text-white w-screen h-screen">
      <h1 className="text-2xl mx-auto">
        Which type of email notification would you like to send?
      </h1>
      <div className="text-xl mx-auto">
        <button
          onClick={() => {
            sendPayload(legitPayload);
          }}
          className="m-12 p-2 border"
        >
          Legit Email
        </button>
        <button
          onClick={() => {
            sendPayload(spamPayload);
          }}
          className="m-12 p-2 border"
        >
          Spam Email
        </button>
      </div>
    </div>
  );
}

export default App;
