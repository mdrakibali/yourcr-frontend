"use client";
import { INSTITUTION_LOCATIONS } from "@/lib/constants";
import { useEffect, useMemo, useState } from "react";
import { geoIdentity, geoPath } from "d3-geo";
const W = 1000, H = 800;
export function MapSection() {
  const [geo, setGeo] = useState<any>(null);
  const [tooltip, setTooltip] = useState({ show: false, content: "", x: 0, y: 0 });

  useEffect(() => {
    fetch("/bd-districts.geojson")
      .then((r) => r.json())
      .then((data) => setGeo(data))
      .catch((e) => console.error("Error loading map:", e));
  }, []);

  const { path, projection } = useMemo(() => {
    if (!geo) return { path: null, projection: null };
    const proj = geoIdentity().reflectY(true).fitSize([W, H], geo);
    
    return { projection: proj, path: geoPath(proj) };
  }, [geo]);

  const mapPaths = useMemo(() => {
    if (!geo || !path) return null;
    return geo.features
      .filter((f: any) => f.properties.shapeName && f.geometry)
      .map((f: any, i: number) => (
        <path
          key={i}
          d={path(f)!}
          fill="#f3f4f6"
          stroke="#E5E7EB"
          strokeWidth={0.5}
          className="outline-none pointer-events-none"
        />
      ));
  }, [geo, path]);

  return (
    <section className="py-12 md:py-16 xl:py-20 bg-background overflow-hidden relative">
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-start text-left max-w-2xl mb-16">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-primary uppercase mb-2">
            OUR REACH
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mb-3">
            Trusted by students nationwide.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Institutions across Bangladesh are using our platform to manage their classes and stay organized.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto relative flex justify-center bg-card rounded-2xl overflow-hidden p-6 md:p-8">
          {!geo && <div className="h-100 flex items-center justify-center">Loading map...</div>}
          
          {geo && projection !== null && path !== null && (
            <svg 
              viewBox={`0 0 ${W} ${H}`} 
              className="w-full max-w-200 h-auto"
              style={{ maxHeight: "85vh" }}
            >
              <g>
                {mapPaths}
              </g>

              <g>
                {INSTITUTION_LOCATIONS.map((m) => {
                  const pos = projection(m.coordinates);
                  if (!pos) return null;
                  
                  return (
                    <g 
                      key={m.id} 
                      className="group cursor-pointer pointer-events-auto"
                      onMouseEnter={(e) => {
                        setTooltip({
                          show: true,
                          content: m.name,
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
                    >
                      {/* Ripple animation */}
                      <circle cx={pos[0]} cy={pos[1]} r={3} className="fill-primary opacity-75 pointer-events-none">
                        <animate attributeName="r" values="3; 12" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.75; 0" dur="2s" repeatCount="indefinite" />
                      </circle>
                      
                      {/* Hover highlight ring */}
                      <circle cx={pos[0]} cy={pos[1]} r={7} className="fill-primary opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
                      
                      {/* Solid inner dot */}
                      <circle cx={pos[0]} cy={pos[1]} r={3} className="fill-primary brightness-90 transition-colors pointer-events-none" />
                      
                      {/* Invisible larger hit area for easier hovering */}
                      <circle cx={pos[0]} cy={pos[1]} r={12} fill="transparent" />
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
          className="fixed z-50 pointer-events-none px-3 py-1.5 bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold rounded shadow-lg transform -translate-x-1/2 -translate-y-full -mt-3"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.content}
          {/* Tooltip Arrow */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-primary" />
        </div>
      )}
    </section>
  );
}
