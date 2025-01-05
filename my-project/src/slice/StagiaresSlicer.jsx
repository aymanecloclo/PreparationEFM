const initialState = {
    stagiares: [
      {
        image: "https://lacoste.ma/img/logo-lacoste.png",
        nom: "Zaid",
        prenom: "Riyad",
        filiere: "TDI",
      },
      {
        image: "https://lacoste.ma/img/logo-lacoste.png",
        nom: "Amine",
        prenom: "Karim",
        filiere: "DevOps",
      },
      {
        image: "https://lacoste.ma/img/logo-lacoste.png",
        nom: "Sara",
        prenom: "Bennani",
        filiere: "Data Science",
      },
     
    ],
  };
  
  // Action Type
  const ADD_STAGIAIRE = "addStagiaire";
  
  // Action Creator
  export const addStagiaire = (stagiaire) => ({
    type: ADD_STAGIAIRE,
    payload: stagiaire,
  });
  
  // Reducer
  function StagiaresSlicer(state = initialState, action) {
    switch (action.type) {
      case ADD_STAGIAIRE:
        return {
          ...state,
          stagiares: [...state.stagiares, action.payload],
        };
      default:
        return state;
    }
  }
  
  export default StagiaresSlicer;
  