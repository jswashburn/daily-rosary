import { forwardRef } from "react";

const ContentSection = forwardRef(({ children, ...props }, ref) => {
  return (
    <div ref={ref} className={"content__section " + props.className}>
      {children}
    </div>
  );
});

export default ContentSection;
