import './Border.css';

export default function Border({size, content}) {
  return (
    <div className = {`customOutterBox-${size}`}>
        <div className = {`cornerCutOut-${size}`} />
        <div className = {`customInnerBox-${size}`}>
          {content}
        </div>
    </div>
  );
}