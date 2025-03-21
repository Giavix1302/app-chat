import { MessageSquare } from "lucide-react";
const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50 ">
      <div className="max-w-md text-center space-y-6">
        {/* icon display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounde-2xl bg-primary/10 flex items-center animate-bounce ">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
          </div>
        </div>
        {/* welcom text */}
      </div>
      <MessageSquare className="w-12 h-12" />
      <h2 className="text-2xl font-bold mt-4">Welcome to Chatty</h2>
      <p className="text-base-content/60 mt-2">
        Select a conversation from the sidebar to start chatting
      </p>
    </div>
  );
};
export default NoChatSelected;
