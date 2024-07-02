import { useState } from "react";
import blob from "../../pexels-enginakyurt-1435517.jpg";
import TooltipDemo from "../components/Inquiries/TooltipDemo";
const data = [
  { name: "sample name", imgurl: blob, messages: "sample message" },
  { name: "sample name2", imgurl: blob, messages: "sample message2" },
  { name: "sample name3", imgurl: blob, messages: "sample message3" },
  { name: "sample name4", imgurl: blob, messages: "sample message4" },
  { name: "sample name5", imgurl: blob, messages: "sample message5" },
  { name: "sample name5", imgurl: blob, messages: "sample message5" },
  { name: "sample name5", imgurl: blob, messages: "sample message5" },
  { name: "sample name5", imgurl: blob, messages: "sample message5" },
  { name: "sample name5", imgurl: blob, messages: "sample message5" },
];

const Inquiries = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="p-4 w-full h-full">
      <div className="relative flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/3 h-full gap-3 mb-4 lg:mb-0">
          <div className="w-full me-2">
            <div className="left flex flex-col m-3 border shadow-md rounded-lg h-full">
              <div className="up bg-blue-primary rounded-sm">
                <h1 className="font-Lato-Black mx-4 py-2 w-full text-white">
                  Recent chats
                </h1>
              </div>
              <div className="parent-left py-2 px-2 flex-1 overflow-hidden">
                <div
                  className="down mt-2 w-full h-full overflow-y-auto"
                  style={{ maxHeight: "400px" }}
                >
                  {data.map((item, i) => (
                    <div
                      className="bg-gray-200 m-2 mb-3 rounded-md flex items-center justify-between hover:bg-Lighter-Blue shadow-md cursor-pointer"
                      key={i}
                      onClick={() => setSelectedChat(item)}
                    >
                      <div className="flex w-full">
                        <div className="img-cont h-full w-16 m-2">
                          <img
                            src={item.imgurl}
                            alt=""
                            className="rounded-full w-12 h-12"
                          />
                        </div>
                        <div className="name w-full">
                          <span className="block font-Lato-Bold text-lg">
                            {item.name}
                          </span>
                          <span className="block text-gray-500 font-Lato-Regular text-sm">
                            {item.messages}
                          </span>
                        </div>
                        <div className="button me-4 font-Lato-Black tracking-wider text-lg">
                          <button>...</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 border border-yellow-300 p-4">
          {selectedChat ? (
            <div>
              <h2 className="font-Lato-Bold text-2xl mb-2">
                {selectedChat.name}
              </h2>
              <p className="mb-4">{selectedChat.messages}</p>
              <div className="flex items-start">
                <TooltipDemo />
                <input
                  className="w-full h-10 p-2 border rounded"
                  placeholder="Type your message here..."
                />
              </div>
            </div>
          ) : (
            <p>Select a chat to view the messages.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inquiries;
