export default function Button(props) {
  let counter = props.counter;
  return (
    <button
      onClick={(e) => {
        if (counter >= 3) {
          console.log(`Bro Stop Clicking Me`);
          e.target.textContent = "Stop❌";
        } else {
          console.log(`You Clicked Me ${counter + 1} times`);
          counter++;
        } 
      }}
    >
      Click Me ✅
    </button>
  );
}
