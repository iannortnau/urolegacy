import {createContext, useState} from "react";

export const GlobalContext = createContext({});

export function GlobalProvider(props){
    const animateCSS = (element, animation, duration, prefix = 'animate__') =>
        new Promise((resolve, reject) => {
            let animationName;
            if(animation.includes("animate__")){
                animationName = `${animation}`;
            }else{
                animationName = `${prefix}${animation}`;
            }
            const node = element.current;

            if(duration){
                node.style.setProperty('--animate-duration', duration);
            }

            node.classList.add(`${prefix}animated`, animationName);

            function handleAnimationEnd(event) {
                event.stopPropagation();
                node.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
            }

            node.addEventListener('animationend', handleAnimationEnd, {once: true});
        });

  return (
    <GlobalContext.Provider
      value={{
          animateCSS
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
}
