import data from "../phatAmTable.json";
const location = "/audio_files/";
import { NavbarProps } from "../App";
import { useNavigate } from "react-router-dom";

interface MyComponentProps {
  clickEffect: boolean;
}

const ListGroup: React.FC<MyComponentProps> = ({ clickEffect }) => {
  const navigate = useNavigate();

  const searchProduct = (sound: string) => {
    // Navigate to /SoundPage/sound
    navigate(`/SoundPage/${sound}`);
  };

  const playSound = (sound: string) => {
    console.log("onclick");
    const audio = new Audio(location + sound + ".m4a");
    audio.play().catch((error) => console.error("Error playing sound:", error));
  };

  return (
    <>
      <h1>Bảng Phát Âm</h1>
      {Object.keys(data).length === 0 && <p>No List Found</p>}
      <ul className="list-group">
        {Object.entries(data.phatAmTable).map(([key, value], index) => (
          <li key={key} className="list-group-item">
            <h3>{key}</h3>
            <div>
              {value.map((sound) => (
                <button
                  className="btn btn-light"
                  onClick={() => {
                    clickEffect ? playSound(sound) : searchProduct(sound);
                  }}
                >
                  {sound}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListGroup;
