'use client';
import { INSTITUTION_LOCATIONS } from '@/lib/constants';
import { useEffect, useMemo, useState } from 'react';
import { geoIdentity, geoPath } from 'd3-geo';
const W = 1000,
  H = 800;
export function MapSection() {
  const [geo, setGeo] = useState<any>(null);
  const [tooltip, setTooltip] = useState({
    show: false,
    content: '',
    x: 0,
    y: 0,
  });

  useEffect(() => {
    fetch('/bd-districts.geojson')
      .then((r) => r.json())
      .then((data) => setGeo(data))
      .catch((e) => console.error('Error loading map:', e));
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
          className="fill-card stroke-input pointer-events-none outline-none"
          strokeWidth={1}
        />
      ));
  }, [geo, path]);

  return (
    <section className="bg-background relative overflow-hidden py-12 md:py-16 xl:py-20">
      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-16 flex max-w-2xl flex-col items-start text-left">
          <span className="text-primary mb-2 text-[10px] font-bold tracking-widest uppercase md:text-xs">
            OUR REACH
          </span>
          <h2 className="text-foreground mb-3 text-2xl font-extrabold tracking-tight md:text-3xl">
            Trusted by students nationwide.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Institutions across Bangladesh are using our platform to manage
            their classes and stay organized.
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-4xl justify-center overflow-hidden">
          {!geo && (
            <div className="flex h-100 items-center justify-center">
              Loading map...
            </div>
          )}

          {geo && projection !== null && path !== null && (
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full max-w-200"
              style={{ maxHeight: '85vh' }}
            >
              <g>{mapPaths}</g>

              <g>
                {INSTITUTION_LOCATIONS.map((m) => {
                  const pos = projection(m.coordinates);
                  if (!pos) return null;

                  return (
                    <g
                      key={m.id}
                      className="group pointer-events-auto cursor-pointer"
                      onMouseEnter={(e) => {
                        setTooltip({
                          show: true,
                          content: m.name,
                          x: e.clientX,
                          y: e.clientY,
                        });
                      }}
                      onMouseMove={(e) => {
                        setTooltip((prev) => ({
                          ...prev,
                          x: e.clientX,
                          y: e.clientY,
                        }));
                      }}
                      onMouseLeave={() => {
                        setTooltip((prev) => ({ ...prev, show: false }));
                      }}
                    >
                      {/* Ripple animation */}
                      <circle
                        cx={pos[0]}
                        cy={pos[1]}
                        r={3}
                        className="fill-primary pointer-events-none opacity-75"
                      >
                        <animate
                          attributeName="r"
                          values="3; 12"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.75; 0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Hover highlight ring */}
                      <circle
                        cx={pos[0]}
                        cy={pos[1]}
                        r={7}
                        className="fill-primary pointer-events-none opacity-0 transition-opacity group-hover:opacity-20"
                      />

                      {/* Solid inner dot */}
                      <circle
                        cx={pos[0]}
                        cy={pos[1]}
                        r={3}
                        className="fill-primary pointer-events-none brightness-90 transition-colors"
                      />

                      {/* Invisible larger hit area for easier hovering */}
                      <circle
                        cx={pos[0]}
                        cy={pos[1]}
                        r={12}
                        fill="transparent"
                      />
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
          className="bg-primary text-primary-foreground pointer-events-none fixed z-50 -mt-3 -translate-x-1/2 -translate-y-full transform rounded px-3 py-1.5 text-[10px] font-semibold shadow-lg md:text-xs"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.content}
          {/* Tooltip Arrow */}
          <div className="border-t-primary absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 translate-y-full transform border-t-[5px] border-r-[5px] border-l-[5px] border-r-transparent border-l-transparent" />
        </div>
      )}
    </section>
  );
}
