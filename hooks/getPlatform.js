import Bowser from "bowser";
import { useState, useEffect } from 'react';

export default function getPlatform(props) {
    const [platform, setPlatform] = useState(null);

    useEffect(() => {
        return setPlatform(Bowser.parse(props.userAgent))
    }, [props.userAgent]);

    return platform;
}
