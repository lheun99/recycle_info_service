import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    const mobile = useMediaQuery({ query: "(max-width: 600px)" });
    useEffect(() => {
        setIsMobile(mobile);
    }, [mobile]);

    return isMobile;
}

// export  function isMiddle () {`

// }
