// components/Chat.js
"use client";
import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/xgmpbbvimqe7gfesistmr9ohm47gcvk7.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Bersihkan script jika komponen di-unmount
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default Chat;
