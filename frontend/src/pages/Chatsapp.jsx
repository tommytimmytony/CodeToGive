import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsApp = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId={"e5af117e-4a86-4db4-a1eb-22cb75e2efc8"}
        username={"Tommy"}
        secret={"123"}
      />
    </div>
  );
};

export default ChatsApp