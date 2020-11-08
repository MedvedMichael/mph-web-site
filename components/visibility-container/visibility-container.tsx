import React, { useState } from "react";
import { useSpring, animated, config, SpringConfig } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

interface SpringProps extends Object {
    opacity?: number,
    transform?: string

}

interface VisibilityContainerProps {
    children?: any,
    from: SpringProps,
    to: SpringProps,
    mode?: SpringConfig 
}

export const VisibilityContainer = ({ children, from, to, mode }: VisibilityContainerProps) => {
    const [isVisible, setVisibility] = useState(false);
    const hookProps = isVisible ? to : from
    const props = useSpring(mode ? {...hookProps, config: mode} : hookProps);

    const onChange = (visibility: boolean) => {
        if(!isVisible && visibility)
            setVisibility(visibility);
    };

    return (
        <VisibilitySensor onChange={onChange}>
            <animated.div style={props}>{children}</animated.div>
        </VisibilitySensor>
    );
};
