function User(Props) {
  return (
    <div className="usercard">
      <div className="topSection">
        <img src="https://i.pravatar.cc/50" className="pp"></img>
        <h3>{Props.name}</h3>
        <div />
        <p>{Props.age}</p>
        <p>{Props.city}</p>
        <div className="statusMenu">
          <span class="material-symbols-outlined">
          favorite
          </span><span>{Props.likeCount}</span> 
        </div>
      </div>
    </div>
  );
}
export default User;
