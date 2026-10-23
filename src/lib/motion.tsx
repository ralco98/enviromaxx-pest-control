import {
  CSSProperties,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

type VariantKey = string;

interface Variant {
  opacity?: number;
  y?: number;
  x?: number;
  scale?: number;
  transition?: { duration?: number; ease?: string; delay?: number; staggerChildren?: number };
}

interface MotionProps {
  initial?: VariantKey | Variant;
  animate?: VariantKey | Variant;
  whileInView?: VariantKey | Variant;
  exit?: VariantKey | Variant;
  variants?: Record<VariantKey, Variant>;
  viewport?: { once?: boolean; margin?: string };
  transition?: { duration?: number; ease?: string; delay?: number };
  children?: ReactNode;
  style?: CSSProperties;
  [key: string]: unknown;
}

interface ParentContextValue {
  activeKey: VariantKey | undefined;
  staggerChildren: number;
  childCounter: { current: number };
  parentDelay: number;
}

const VariantContext = createContext<ParentContextValue>({
  activeKey: undefined,
  staggerChildren: 0,
  childCounter: { current: 0 },
  parentDelay: 0,
});

function resolveVariant(
  key: VariantKey | Variant | undefined,
  variants?: Record<VariantKey, Variant>
): Variant | undefined {
  if (key === undefined || key === null) return undefined;
  if (typeof key === 'string') return variants?.[key];
  return key;
}

function variantToStyle(
  variant: Variant | undefined,
  durationOverride?: number
): CSSProperties {
  if (!variant) return {};
  const duration = durationOverride ?? variant.transition?.duration ?? 0.5;
  const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';
  return {
    opacity: variant.opacity ?? 1,
    transform: [
      variant.x != null ? `translateX(${variant.x}px)` : '',
      variant.y != null ? `translateY(${variant.y}px)` : '',
      variant.scale != null ? `scale(${variant.scale})` : '',
    ].filter(Boolean).join(' ') || 'none',
    transition: `opacity ${duration}s ${easing}, transform ${duration}s ${easing}`,
  };
}

function createMotionTag(Tag: string) {
  function MotionTag({
    initial,
    animate,
    whileInView,
    variants,
    viewport,
    transition,
    children,
    style,
    ...rest
  }: MotionProps) {
    const ref = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);
    const parentCtx = useContext(VariantContext);
    const childCounterRef = useRef({ current: 0 });

    const useViewport = whileInView !== undefined;

    useEffect(() => {
      if (!useViewport || !ref.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (viewport?.once !== false) observer.disconnect();
          } else if (viewport?.once === false) {
            setInView(false);
          }
        },
        { rootMargin: viewport?.margin ?? '0px' }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [useViewport, viewport?.margin, viewport?.once]);

    let activeKey: VariantKey | Variant | undefined;
    if (useViewport) {
      activeKey = inView ? whileInView : (initial ?? 'hidden');
    } else if (animate !== undefined) {
      activeKey = animate;
    } else if (initial !== undefined) {
      activeKey = initial;
    } else if (parentCtx.activeKey !== undefined) {
      activeKey = parentCtx.activeKey;
    }

    const activeKeyStr = typeof activeKey === 'string' ? activeKey : undefined;
    const activeVariant = resolveVariant(activeKey, variants);

    const staggerChildren = activeVariant?.transition?.staggerChildren ?? parentCtx.staggerChildren;

    let myStaggerDelay = 0;
    const isStaggerChild = parentCtx.staggerChildren > 0 && !useViewport && parentCtx.activeKey !== undefined && activeKeyStr !== undefined;
    if (isStaggerChild) {
      const myIndex = parentCtx.childCounter.current;
      parentCtx.childCounter.current += 1;
      myStaggerDelay = myIndex * parentCtx.staggerChildren;
    }

    const duration = transition?.duration ?? activeVariant?.transition?.duration;
    const baseDelay = transition?.delay ?? activeVariant?.transition?.delay ?? 0;
    const delay = baseDelay + myStaggerDelay + parentCtx.parentDelay;
    const motionStyle = variantToStyle(activeVariant, duration);

    const Tag2 = Tag as any;

    childCounterRef.current = { current: 0 };

    return (
      <VariantContext.Provider
        value={{
          activeKey: activeKeyStr,
          staggerChildren,
          childCounter: childCounterRef.current,
          parentDelay: delay,
        }}
      >
        <Tag2
          ref={ref}
          style={{ ...motionStyle, transitionDelay: `${delay}s`, ...style }}
          {...rest}
        >
          {children}
        </Tag2>
      </VariantContext.Provider>
    );
  }

  return MotionTag;
}

export const motion = {
  div: createMotionTag('div'),
  span: createMotionTag('span'),
  h1: createMotionTag('h1'),
  h2: createMotionTag('h2'),
  h3: createMotionTag('h3'),
  p: createMotionTag('p'),
  a: createMotionTag('a'),
  button: createMotionTag('button'),
} as any;

export function AnimatePresence({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function useInView(
  ref: React.RefObject<HTMLElement>,
  options?: { once?: boolean; margin?: string }
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options?.once !== false) observer.disconnect();
        } else if (options?.once === false) {
          setInView(false);
        }
      },
      { rootMargin: options?.margin ?? '0px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options?.once, options?.margin]);

  return inView;
}
