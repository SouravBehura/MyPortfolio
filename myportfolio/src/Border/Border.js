import './Border.css';

export default function Border() {
  return (
    <div className = "customOutterBox">
        <div className = "cornerCutOut" />
        <div className = "customInnerBox">
            <h1>Box</h1>
        </div>
    </div>
  );
}