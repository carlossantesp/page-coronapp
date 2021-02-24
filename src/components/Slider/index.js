import React, { useState } from "react";
import {
  SliderWrapper,
  SliderContent,
  SliderItem,
  SliderImageWrapper,
  SliderImage,
  SliderTitle,
  SliderDescription,
  SliderOptions,
  SliderButton,
} from "./SliderElements";

const Slider = ({ sliderInfo }) => {
  const [current, setCurrent] = useState(2);

  const handleSlider = (id) => {
    setCurrent(id);
  };

  return (
    <SliderWrapper>
      <SliderContent>
        {sliderInfo.map((slider) => (
          <SliderItem key={slider.id} current={current === slider.id}>
            {slider.id === current && (
              <>
                <SliderImageWrapper>
                  <SliderImage src={slider.imageUrl} alt={slider.altImg} />
                </SliderImageWrapper>
                <SliderTitle>{slider.title}</SliderTitle>
                <SliderDescription>{slider.description}</SliderDescription>
              </>
            )}
          </SliderItem>
        ))}
      </SliderContent>
      <SliderOptions>
        {sliderInfo.map((slider) => (
          <SliderButton
            key={slider.id}
            type="button"
            onClick={() => handleSlider(slider.id)}
            className={current === slider.id ? "active" : ""}
          />
        ))}
      </SliderOptions>
    </SliderWrapper>
  );
};

export default Slider;
