import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Stagiare from "./Stagiaire";

const ListStagiaire = () => {
  const Stagiaires = useSelector((state) => state.stagiares);

  return (
    <>
      <div className="flex gap-1">
        {Stagiaires.map((stagiaire, index) => (
          <Link
            key={index}
            to={`detailsStagire/${stagiaire.nom}`}
            style={{ textDecoration: "none" }}
          >
            <Stagiare url={stagiaire.image} nom={stagiaire.nom} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ListStagiaire;
