import axios from "axios";

function Card({ title, status, id, dados }) {
  function deletTech(info) {
    console.log(dados);
    axios.defaults.headers.delete["Authorization"] = `Bearer ${dados}`;
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${info.id}`)
      .then((response) => console.log("oi"))
      .catch((err) => console.log(err));
  }
  return (
    <div className="card">
      <span className="technology">{title}</span>
      <span className="nivel">
        {status}{" "}
        <button onClick={() => deletTech({ id })}>
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.39993 12C2.07076 12 1.78273 11.9 1.53585 11.7C1.28897 11.5 1.16553 11.2667 1.16553 11V1.5H0.322021V0.5H4.18981V0H9.62118V0.5H13.489V1.5H12.6455V11C12.6455 11.2667 12.522 11.5 12.2751 11.7C12.0283 11.9 11.7402 12 11.4111 12H2.39993ZM11.4111 1.5H2.39993V11H11.4111V1.5ZM4.58071 9.56667H5.81511V2.91667H4.58071V9.56667ZM7.99588 9.56667H9.23028V2.91667H7.99588V9.56667ZM2.39993 1.5V11V1.5Z"
              fill="white"
              fill-opacity="0.8"
            />
          </svg>{" "}
        </button>
      </span>
    </div>
  );
}
export default Card;
