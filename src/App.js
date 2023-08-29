import "./styles.css";

export default function App() {
  return (
    <Toolbar 
    onPlayMovie={() => alert('Playing!')}
    onploadImage={() => alert('Uploading!')}
    />
  );
}
function Toolbar({onPlayMovie, onUploadImage}) {
  return(
    <div>
      <Button onclick={onPlayMovie}>
        Play Movie

      </Button>
      <Button onClick={onUploadImage}>
        Upload Image

      </Button>
    </div>
  );
}
function Button({onClick, children}) {
  return(
    <button onClick={onClick}>
      {children}
      </button>
  );
}  
