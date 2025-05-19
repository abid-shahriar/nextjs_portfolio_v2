import { useEffect } from 'react';

interface props {
  suffix: `${string}_`;
  delay?: number;
}

export const useAnimation = (props: props) => {
  const { suffix, delay = 0 } = props;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.classList.contains(`${suffix}animated`)) return;

        if (entry.isIntersecting) {
          entry.target.classList.add('animate', `${suffix}animated`);
        }
      });
    });

    const elements = document.querySelectorAll(`.${suffix}animate`);

    setTimeout(() => {
      elements.forEach((element) => {
        if (element.classList.contains(`${suffix}animated`)) return;

        observer.observe(element);
      });
    }, delay);

    return () => {
      observer.disconnect();
    };
  }, []);
};
