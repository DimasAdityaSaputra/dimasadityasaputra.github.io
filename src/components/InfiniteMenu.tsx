import { type FC, useEffect, useMemo, useRef, useState } from 'react';
import { quat, vec2, vec3 } from 'gl-matrix';
import './InfiniteMenu.css';

export interface InfiniteMenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
}

interface InfiniteMenuProps {
  items: InfiniteMenuItem[];
  scale?: number;
}

const spherePoints = [
  [-0.78, 0.46, 0.42],
  [0.72, 0.5, 0.48],
  [-0.48, -0.5, 0.72],
  [0.52, -0.48, 0.68],
  [-0.95, -0.04, -0.22],
  [0.94, 0.02, -0.26],
  [-0.25, 0.88, -0.28],
  [0.2, -0.9, -0.32],
].map((point) => vec3.normalize(vec3.create(), point as vec3));

export default function InfiniteMenu({ items, scale = 1 }: InfiniteMenuProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const pointerDown = useRef(false);
  const lastPointer = useRef(vec2.create());
  const velocity = useRef(vec2.fromValues(0.002, 0.001));
  const rotation = useRef(quat.create());
  const frame = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const visibleItems = useMemo(() => items.length ? items : [], [items]);
  const activeItem = visibleItems[activeIndex % Math.max(1, visibleItems.length)];

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !visibleItems.length) return;

    const discs = [...root.querySelectorAll<HTMLAnchorElement>('.infinite-disc')];

    const render = () => {
      const speed = Math.hypot(velocity.current[0], velocity.current[1]);
      setIsMoving(pointerDown.current || speed > 0.006);

      if (!pointerDown.current) {
        velocity.current[0] *= 0.985;
        velocity.current[1] *= 0.985;
        if (Math.abs(velocity.current[0]) < 0.0008) velocity.current[0] = 0.0008;
      }

      const qx = quat.setAxisAngle(quat.create(), [0, 1, 0], velocity.current[0]);
      const qy = quat.setAxisAngle(quat.create(), [1, 0, 0], velocity.current[1]);
      quat.multiply(rotation.current, qx, rotation.current);
      quat.multiply(rotation.current, qy, rotation.current);
      quat.normalize(rotation.current, rotation.current);

      let frontIndex = 0;
      let frontZ = -Infinity;

      discs.forEach((disc, index) => {
        const base = spherePoints[index % spherePoints.length];
        const point = vec3.transformQuat(vec3.create(), base, rotation.current);
        const x = point[0] * 36;
        const y = point[1] * 28;
        const z = point[2];
        const size = (118 + z * 48) * scale;
        const alpha = 0.38 + Math.max(0, z) * 0.62;

        if (z > frontZ) {
          frontZ = z;
          frontIndex = index % visibleItems.length;
        }

        disc.style.width = `${size}px`;
        disc.style.height = `${size}px`;
        disc.style.opacity = `${alpha}`;
        disc.style.zIndex = `${Math.round((z + 1) * 100)}`;
        disc.style.transform = `translate(-50%, -50%) translate(${x}vw, ${y}%) scale(${0.82 + z * 0.22})`;
        disc.style.filter = `blur(${z < -0.2 ? 1.4 : 0}px)`;
      });

      setActiveIndex(frontIndex);
      frame.current = requestAnimationFrame(render);
    };

    frame.current = requestAnimationFrame(render);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [visibleItems, scale]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerDown.current = true;
    vec2.set(lastPointer.current, event.clientX, event.clientY);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerDown.current) return;
    const dx = event.clientX - lastPointer.current[0];
    const dy = event.clientY - lastPointer.current[1];
    velocity.current[0] = dx * 0.004;
    velocity.current[1] = dy * 0.004;
    vec2.set(lastPointer.current, event.clientX, event.clientY);
  };

  const endDrag = () => {
    pointerDown.current = false;
  };

  if (!visibleItems.length) return null;

  return (
    <div
      ref={rootRef}
      id="infinite-grid-menu-canvas"
      role="region"
      aria-label="Interactive project photo menu"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      {visibleItems.concat(visibleItems).map((item, index) => (
        <a
          className="infinite-disc"
          href={item.link}
          key={`${item.title}-${index}`}
          aria-label={item.title}
          style={{ backgroundImage: `url(${item.image})` }}
        />
      ))}

      {activeItem && (
        <>
          <h2 className={`face-title ${isMoving ? 'inactive' : 'active'}`}>{activeItem.title}</h2>
          <p className={`face-description ${isMoving ? 'inactive' : 'active'}`}>{activeItem.description}</p>
          <a className={`action-button ${isMoving ? 'inactive' : 'active'}`} href={activeItem.link} aria-label={`Open ${activeItem.title}`}>
            <p className="action-button-icon">↗</p>
          </a>
        </>
      )}
    </div>
  );
}
