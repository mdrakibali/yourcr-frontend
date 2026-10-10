"use client";

import { INSTITUTION_LOCATIONS } from "@/lib/constants";
import { useEffect, useMemo, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";

const W = 600, H = 700;

export function MapSection() {
  const [geo, setGeo] = useState<any>(null);
  const [tooltip, setTooltip] = useState({ show: false, content: "", x: 0, y: 0 });

  useEffect(() => {
    fetch("/bd-districts.geojson")
      .then((r) => r.json())
      .then(setGeo)
      .catch((e) => console.error("Error loading map:", e));
  }, []);

  const { path, projection } = useMemo(() => {
    if (!geo) return { path: null, projection: null };
    // Fit the map to our custom viewBox dimensions
    const proj = geoMercator().fitSize([W, H], geo);
    return { projection: proj, path: geoPath(proj) };
  }, [geo]);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Trusted by students worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Institutions across Bangladesh are using our platform to manage their classes and stay organized.
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto relative flex justify-center">
          {!geo && <div className="h-100 flex items-center justify-center">Loading map...</div>}
          
          {geo && projection && path && (
            <svg 
              viewBox={`0 0 ${W} ${H}`} 
              className="w-full max-w-150 h-auto drop-shadow-sm"
              style={{ maxHeight: "70vh" }}
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

              <g>
                {geo.features
                  .filter((f: any) => f.properties.district_name)
                  .map((f: any, i: number) => (
                  <path
                    key={i}
                    d={path(f)!}
                    fill="url(#dots)"
                    stroke="#D1D5DB"
                    strokeWidth={0.5}
                    className="hover:fill-[#cbd5e1] transition-colors cursor-crosshair outline-none"
                    onMouseEnter={(e) => {
                      setTooltip({
                        show: true,
                        content: f.properties.district_name,
                        x: e.clientX,
                        y: e.clientY
                      });
                    }}
                    onMouseMove={(e) => {
                      setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
                    }}
                    onMouseLeave={() => {
                      setTooltip(prev => ({ ...prev, show: false }));
                    }}
                  />
                ))}
              </g>

              <g>
                {INSTITUTION_LOCATIONS.map((m) => {
                  const pos = projection(m.coordinates);
                  if (!pos) return null;
                  
                  return (
                    <g key={m.id} className="group cursor-pointer">
                      <circle cx={pos[0]} cy={pos[1]} r={5} fill="#10B981" className="animate-pulse opacity-50 group-hover:opacity-100 transition-opacity" />
                      <circle cx={pos[0]} cy={pos[1]} r={2.5} fill="#059669" />
                      
                      {/* Institution Name */}
                      <text
                        x={pos[0]}
                        y={pos[1] - 12}
                        textAnchor="middle"
                        className="fill-slate-800 text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        style={{ filter: 'drop-shadow(0px 1px 2px rgba(255, 255, 255, 1))' }}
                      >
                        {m.name}
                      </text>
                      
                      {/* District Name below institution */}
                      {m.district && (
                        <text
                          x={pos[0]}
                          y={pos[1] - 4}
                          textAnchor="middle"
                          className="fill-emerald-600 text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                          style={{ filter: 'drop-shadow(0px 1px 1px rgba(255, 255, 255, 0.9))' }}
                        >
                          ({m.district})
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>
            </svg>
          )}
        </div>
      </div>
      
      {/* Custom Tooltip */}
      {tooltip.show && (
        <div
          className="fixed z-50 pointer-events-none px-3 py-1.5 bg-slate-800 text-white text-xs md:text-sm font-medium rounded shadow-lg transform -translate-x-1/2 -translate-y-full -mt-2.5"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.content}
        </div>
      )}
    </section>
  );
}
