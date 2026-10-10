"use client";

import { INSTITUTION_LOCATIONS } from "@/lib/constants";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

export function MapSection() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Trusted by students worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Institutions around the globe are using our platform to manage their classes and stay organized.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto h-100 md:h-150 relative">
          <ComposableMap
            projectionConfig={{
              scale: 140,
              center: [0, 20]
            }}
            width={800}
            height={400}
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="4"
                height="4"
                patternUnits="userSpaceOnUse"
              >
                <circle fill="#E5E7EB" cx="2" cy="2" r="1.5" />
              </pattern>
            </defs>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="url(#dots)"
                    stroke="#F3F4F6"
                    strokeWidth={0.5}
                    className="outline-none hover:fill-[#D1D5DB]"
                    style={{ outline: "none" }}
                  />
                ))
              }
            </Geographies>

            {INSTITUTION_LOCATIONS.map(({ id, name, coordinates }) => (
              <Marker key={id} coordinates={coordinates}>
                <g className="group cursor-pointer">
                  <circle r={4} fill="#10B981" className="animate-pulse opacity-50 group-hover:opacity-100 transition-opacity" />
                  <circle r={2} fill="#059669" />
                  <text
                    textAnchor="middle"
                    y={-10}
                    className="fill-slate-700 text-[8px] md:text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{ filter: 'drop-shadow(0px 1px 1px rgba(255, 255, 255, 0.8))' }}
                  >
                    {name}
                  </text>
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
