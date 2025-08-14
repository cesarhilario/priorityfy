export const Blur = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div className="absolute top-0 left-0 pointer-events-none">
      <svg
        width={props.width || "100%"}
        height={props.height || "560px"}
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={props.style}
        {...props}
      >
        <circle cx="71" cy="61" r="111" fill="#FA2C37" />
        <circle cx="244" cy="106" r="139" fill="#F7339A" />
        <circle cy="291" r="139" fill="#F7339A" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#FE9900" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#00BC7D" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#2B7FFF" />
      </svg>
    </div>
  );
};
