function Header() {
  return (
    <header className=" text-blue-400  border-solid border-4 border-green-400 shadow-lg h-40 w-screen flex flex-col md:flex-row md:justify-around items-center justify-center">
      <h1 className="text-4xl">ToDo Lists</h1>
      <p>Add, delete, complete, sort task a-z</p>
    </header>
  );
}

export default Header;
