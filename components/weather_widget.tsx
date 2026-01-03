"use client";
import Script from 'next/script';


export default function WeatherWidget() {
  return (
    <>
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/10d82106d63/ho-chi-minh-city/"
        data-label_1="HO CHI MINH"
        data-label_2="WEATHER"
        data-theme="dark"
      >
        HO CHI MINH WEATHER
      </a>

      <Script
        id="weatherwidget-io-js"
        src="https://weatherwidget.io/js/widget.min.js"
        strategy="lazyOnload" 
      />
    </>
  );
}