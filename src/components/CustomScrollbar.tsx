import React, { useState, useEffect, useRef, useCallback } from 'react';

const CustomScrollbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(48);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartY = useRef(0);
  const dragStartScroll = useRef(0);

  const updateScrollMetrics = useCallback(() => {
    const { scrollY, innerHeight } = window;
    const { scrollHeight } = document.documentElement;
    const scrollableHeight = scrollHeight - innerHeight;

    if (scrollableHeight <= 10) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    // Proportionate thumb height (min 36px, max 160px)
    const calculatedHeight = Math.max(36, Math.min(160, (innerHeight / scrollHeight) * innerHeight));
    setThumbHeight(calculatedHeight);

    const progress = Math.min(1, Math.max(0, scrollY / scrollableHeight));
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    updateScrollMetrics();
    window.addEventListener('scroll', updateScrollMetrics, { passive: true });
    window.addEventListener('resize', updateScrollMetrics);

    return () => {
      window.removeEventListener('scroll', updateScrollMetrics);
      window.removeEventListener('resize', updateScrollMetrics);
    };
  }, [updateScrollMetrics]);

  // Handle Desktop Mouse Dragging
  const handleThumbMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartScroll.current = window.scrollY;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = moveEvent.clientY - dragStartY.current;
      const trackHeight = window.innerHeight - thumbHeight;
      if (trackHeight <= 0) return;

      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollDelta = (deltaY / trackHeight) * scrollableHeight;
      window.scrollTo(0, dragStartScroll.current + scrollDelta);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Handle Clicking anywhere on the Track
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const trackHeight = rect.height;
    const percentage = Math.max(0, Math.min(1, clickY / trackHeight));
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: percentage * scrollableHeight,
      behavior: 'smooth',
    });
  };

  // Handle Mobile Touch Dragging
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const touch = e.touches[0];
    const rect = trackRef.current.getBoundingClientRect();
    const touchY = touch.clientY - rect.top;
    const percentage = Math.max(0, Math.min(1, touchY / rect.height));
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: percentage * scrollableHeight,
      behavior: 'auto',
    });
  };

  if (!isVisible) return null;

  return (
    <div
      ref={trackRef}
      onClick={handleTrackClick}
      onTouchMove={handleTouchMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed right-0 top-0 bottom-0 w-2.5 sm:w-3 z-[9999] pointer-events-auto cursor-pointer select-none bg-orange-500/[0.03] hover:bg-orange-500/[0.08] backdrop-blur-[2px] transition-colors duration-200 border-l border-orange-500/15"
      title="Scroll"
    >
      <div
        onMouseDown={handleThumbMouseDown}
        style={{
          height: `${thumbHeight}px`,
          transform: `translateY(${scrollProgress * (window.innerHeight - thumbHeight)}px)`,
        }}
        className={`w-1.5 sm:w-2 mx-auto rounded-full transition-all duration-150 cursor-grab active:cursor-grabbing ${
          isDragging
            ? 'bg-gradient-to-b from-orange-500 to-orange-600 shadow-[0_2px_12px_rgba(249,115,22,0.6)] scale-110'
            : isHovered
            ? 'bg-gradient-to-b from-orange-400 to-orange-500 shadow-[0_2px_10px_rgba(249,115,22,0.45)] scale-105'
            : 'bg-gradient-to-b from-orange-400/90 to-orange-500 shadow-[0_2px_8px_rgba(249,115,22,0.3)]'
        }`}
      />
    </div>
  );
};

export default CustomScrollbar;
