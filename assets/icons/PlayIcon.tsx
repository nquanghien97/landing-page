interface PlayIconProps {
  color?: string;
}
function PlayIcon(props : PlayIconProps) {
  const { color="white" } = props;
  return (
    <svg width={30} height={30} viewBox="0 0 24 24" fill={color}>
      <path d="M8 5v14l11-7z"></path>
    </svg>
  );
}

export default PlayIcon;